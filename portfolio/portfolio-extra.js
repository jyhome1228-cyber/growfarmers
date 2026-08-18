(()=>{
const grid=document.getElementById('projectGrid');
const count=document.getElementById('portfolioCount');
if(!grid)return;

const project={
  n:'37',
  title:'홍성 청운상회, 로컬 팝업의 에너지를 담은 키비주얼 디자인',
  summary:'청운대학교 로컬콘텐츠 중점대학이 충남 홍성군에서 진행한 2025 Summer Local Popup Festa ‘청운상회’의 키비주얼 프로젝트입니다. 행사 포스터를 중심으로 로컬 팝업의 활기와 현장성을 하나의 그래픽 시스템으로 확장했습니다.',
  image:'https://cdn.imweb.me/upload/S20260219b829e728b3f2e/4394f6661aca0.png',
  href:'./projects/cheongun-sanghoe-2025/',
  tags:['로컬 브랜드','키비주얼','행사 디자인']
};

const style=document.createElement('style');
style.textContent=`
.portfolio-page .portfolio-extra-card{display:block;min-width:0;color:var(--ink);background:transparent;border:0;border-radius:0;overflow:visible}
.portfolio-page .portfolio-extra-card:hover{color:var(--ink)}
.portfolio-page .portfolio-extra-card .project-thumb img{transition:transform .45s cubic-bezier(.2,.7,.2,1)}
.portfolio-page .portfolio-extra-card:hover .project-thumb img{transform:scale(1.018)}
`;
document.head.appendChild(style);

function activeFilter(){return document.querySelector('.work-filter button.is-active')?.dataset.filter||'all'}
function shouldShow(){const f=activeFilter();return f==='all'||f==='local'}
function makeCard(){
  const a=document.createElement('a');
  a.className='portfolio-extra-card';
  a.dataset.extraProject=project.n;
  a.href=project.href;
  a.innerHTML=`<div class="project-thumb"><img src="${project.image}" alt="${project.title}"></div><div class="project-info"><h3>${project.title}</h3><p>${project.summary}</p><div class="project-tags">${project.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>`;
  return a;
}
function sync(){
  let card=grid.querySelector('[data-extra-project="37"]');
  if(shouldShow()){
    if(!card){card=makeCard();grid.prepend(card)}
  }else if(card){card.remove()}
  if(count){
    const base=grid.querySelectorAll('.project-card').length;
    const extra=grid.querySelector('[data-extra-project="37"]')?1:0;
    count.textContent=String(base+extra);
  }
}

sync();
new MutationObserver(()=>requestAnimationFrame(sync)).observe(grid,{childList:true});
document.querySelectorAll('.work-filter button').forEach(btn=>btn.addEventListener('click',()=>setTimeout(sync,0)));
})();
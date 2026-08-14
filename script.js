(() => {
  const projects = [
    {n:'01',title:'스틱형 벌꿀의 밝은 선물성을 담은 브랜드 디자인',summary:'스틱형 벌꿀의 간편함과 꿀의 따뜻한 이미지를 밝은 옐로우와 화이트 여백으로 정리한 선물형 브랜드 디자인입니다.',tags:['gift','food','local']},
    {n:'02',title:'홍삼과 배의 깊이를 정갈하게 담은 선물 브랜드 디자인',summary:'유기농 홍삼과 배 농축액의 건강한 이미지와 선물 제품의 품격을 화이트, 살구빛과 브라운 톤으로 차분하게 정리했습니다.',tags:['gift','health','local']},
    {n:'03',title:'지역 식재료의 건강한 식탁 이미지를 담은 브랜드 디자인',summary:'고춧가루, 멸치, 차, 장아찌 등 서로 다른 지역 식재료를 자연 풍경 일러스트와 절제된 라벨 체계로 하나의 브랜드에 묶었습니다.',tags:['food','local']},
    {n:'04',title:'바다의 감칠맛을 친근한 프리미엄 식탁 브랜드로 풀어낸 디자인',summary:'씨앗젓갈, 오징어젓, 낙지젓, 명란젓을 컬러 라벨 시스템과 부드러운 브랜드 무드로 친근하고 세련되게 풀었습니다.',tags:['food','local']},
    {n:'05',title:'전통 풍경을 현대적으로 풀어낸 프리미엄 선물 브랜드 디자인',summary:'녹용이 가진 깊이와 상징성을 짙은 네이비와 보랏빛, 사슴과 산 능선 그래픽으로 현대적인 선물 브랜드에 담았습니다.',tags:['gift','health']},
    {n:'06',title:'콩과 메주의 담백함을 정갈하게 담은 패키지 디자인',summary:'콩과 메주의 담백하고 깊은 이미지를 화이트와 브라운 컬러, 절제된 원물 표현으로 정리한 장류 패키지입니다.',tags:['gift','food','local']},
    {n:'07',title:'생강의 온기를 부드럽고 정갈한 선물 이미지로 담은 패키지 디자인',summary:'국산 생강의 따뜻한 이미지와 건강한 인상을 베이지와 골드 톤의 병 제품과 선물세트로 통일감 있게 구성했습니다.',tags:['gift','health','local']},
    {n:'08',title:'흑삼의 깊이를 블랙 무드로 표현한 프리미엄 선물 패키지 디자인',summary:'흑삼의 진한 원물감과 프리미엄 이미지를 검정 바탕, 흰 서체와 나무 실루엣으로 정리한 건강 선물세트입니다.',tags:['gift','health']},
    {n:'09',title:'대추와 노루궁뎅이버섯을 친근하게 풀어낸 건강즙 브랜드 디자인',summary:'진천 대추와 노루궁뎅이버섯을 캐릭터와 따뜻한 크림·브라운 톤으로 쉽고 친근하게 경험하도록 구성했습니다.',tags:['health','local']},
    {n:'10',title:'신선한 김치의 색감과 시원한 맛을 살린 패키지 디자인',summary:'다양한 김치 제품을 하나의 라벨 구조로 정리하고 제품 사진과 붉은 포인트 컬러로 냉장 매대에서 빠르게 구분되도록 했습니다.',tags:['food','local']},
    {n:'11',title:'홍삼의 깊은 인상을 고급 선물세트로 담은 패키지 디자인',summary:'깊은 네이비 컬러와 산 능선 라인, 브론즈 포인트를 활용해 홍삼 제품의 건강함과 선물세트의 품격을 함께 담았습니다.',tags:['gift','health']},
    {n:'12',title:'지리산의 자연 이미지를 밝게 담은 스틱꿀 선물세트 디자인',summary:'지리산에서 온 아카시아·밤·야생화 꿀을 밝은 산 그래픽과 컬러 구분으로 가볍고 산뜻한 스틱형 선물세트로 정리했습니다.',tags:['gift','food','local']},
    {n:'13',title:'보리굴비의 정갈한 품격을 흰 여백에 담은 선물 패키지 디자인',summary:'보리굴비의 고급 식재료 이미지와 정성스러운 선물성을 흰 여백, 생선 일러스트와 절제된 구성으로 표현했습니다.',tags:['gift','food','local']},
    {n:'14',title:'사과의 밝은 맛을 친근하게 담은 패키지 디자인',summary:'진천 사과의 상큼하고 달콤한 이미지를 귀여운 캐릭터와 크림 컬러로 풀어 사과주스와 잼 제품군을 하나로 연결했습니다.',tags:['food','local']},
    {n:'15',title:'우리쌀 간식의 담백함을 따뜻하게 담은 패키지 디자인',summary:'우리쌀로 만든 샌드형 간식의 담백함을 베이지와 브라운 컬러, 구운 과자의 따뜻한 인상으로 정리했습니다.',tags:['food','local']},
    {n:'16',title:'쌀의 담백함을 자연스럽게 담은 품종별 패키지 디자인',summary:'고시히카리, 신동진 등 서로 다른 쌀 품종을 낮은 채도의 컬러와 종이 질감으로 구분하면서 하나의 브랜드 흐름을 만들었습니다.',tags:['food','local']},
    {n:'17',title:'로컬 디저트의 고소한 맛을 밝게 담은 패키지 디자인',summary:'진천을 대표하는 로컬 디저트의 고소하고 따뜻한 이미지를 밝은 옐로우 컬러와 일관된 선물 패키지 체계로 표현했습니다.',tags:['gift','food','local']},
    {n:'18',title:'흑홍삼절편의 깊은 기운을 전통 풍경으로 담은 패키지 디자인',summary:'흑홍삼절편의 깊은 맛과 건강한 이미지를 짙은 네이비, 산 능선, 달과 소나무 그래픽으로 품격 있게 담았습니다.',tags:['gift','health']},
    {n:'19',title:'잡곡의 균형을 간편하게 담은 보약잡곡 패키지 디자인',summary:'여러 곡물을 한 번에 섭취하는 제품의 건강함을 화이트와 딥그린, 실제 곡물 이미지 중심의 간결한 패키지로 정리했습니다.',tags:['food','health','local']},
    {n:'20',title:'섬야초의 맑은 기운을 차분하게 담은 스틱차 패키지 디자인',summary:'섬야초의 자연스러운 향과 맑은 차 이미지를 딥그린 컬러와 잎·산 그래픽으로 담아 일상적인 건강차로 구성했습니다.',tags:['health','local']},
    {n:'21',title:'호박과 팥의 따뜻함을 담은 티백차 패키지 디자인',summary:'호박과 팥이 가진 부드럽고 따뜻한 이미지를 레드 브라운 컬러와 원료 일러스트로 풀어낸 티백차 패키지입니다.',tags:['food','health','local']},
    {n:'22',title:'소금의 순수함을 절제된 고급감으로 담은 패키지 디자인',summary:'소금의 깨끗하고 본질적인 이미지를 블랙과 화이트의 대비, 작은 원물 이미지와 얇은 선 그래픽으로 정리했습니다.',tags:['gift','food']},
    {n:'23',title:'재래맛김의 깨끗한 풍미를 담은 선물 패키지 디자인',summary:'광천 재래맛김의 바삭한 식감과 바다의 신선한 이미지를 깨끗한 선물형 패키지 구조에 담았습니다.',tags:['gift','food','local']},
    {n:'24',title:'빨간 약호박의 진한 색감을 밝게 담은 건강즙 패키지 디자인',summary:'빨간 약호박의 진한 색감과 건강한 이미지를 따뜻하고 밝은 오렌지 계열의 건강즙 패키지로 풀었습니다.',tags:['health','local']},
    {n:'25',title:'곶감의 달콤한 색감을 선명하게 담은 선물 패키지 디자인',summary:'곶감의 진한 주황빛과 쫀득한 식감을 선명한 오렌지 컬러, 투명 트레이와 띠지 구성의 선물세트로 표현했습니다.',tags:['gift','food','local']},
    {n:'26',title:'소금 결정의 깨끗함을 미니멀하게 담은 패키지 디자인',summary:'피라미드 형태의 플레이크 솔트가 가진 투명하고 깨끗한 이미지를 화이트 패키지와 절제된 타이포로 정리했습니다.',tags:['food']},
    {n:'27',title:'사과와 샤인머스캣의 산뜻함을 담은 주스 패키지 디자인',summary:'사과와 샤인머스캣의 조합을 밝은 그린과 과일 비주얼로 직관적으로 보여주고 간편한 주스 제품의 인상을 살렸습니다.',tags:['food','local']},
    {n:'28',title:'숲의 편안함으로 유정란의 건강한 이미지를 전하다',summary:'유정란의 신선하고 건강한 이미지를 부드러운 그린과 숲 일러스트, 자연스러운 펄프 난좌 질감으로 전달했습니다.',tags:['food','local']},
    {n:'29',title:'담백한 베이지 톤으로 천연 조미료의 신뢰를 정리하다',summary:'멸치, 새우, 다시마, 표고버섯 등 국내산 원료의 자연스러움을 베이지와 화이트, 선 일러스트 중심으로 정리했습니다.',tags:['food','local']},
    {n:'30',title:'지리산의 계절을 담은 프리미엄 허니 선물세트 디자인',summary:'지리산의 아카시아·야생화·밤 꿀을 따뜻한 오렌지 컬러와 블랙 트레이, 우드 스푼으로 완성한 프리미엄 선물세트입니다.',tags:['gift','food','local']},
    {n:'31',title:'깨끗한 바다의 맛을 정갈하게 담은 건멸치 선물세트 디자인',summary:'건멸치의 신선함과 담백함을 화이트 패키지, 투명 파우치와 흑백 멸치 일러스트로 차분하게 정리했습니다.',tags:['gift','food','local']},
    {n:'32',title:'아이보리와 딥 레드 컬러로 매일 챙기는 홍삼 루틴을 만들다',summary:'6년근 홍삼정 스틱의 실용성과 전통적인 깊이를 아이보리와 딥 레드 컬러로 정리해 매일 챙기는 건강 루틴을 표현했습니다.',tags:['health']},
    {n:'33',title:'크림 톤 패키지와 투명 용기로 정갈한 새우젓의 신선함을 담다',summary:'오젓 새우젓의 전통적인 인상을 덜고 크림 톤과 투명 용기, 간결한 심볼로 깨끗한 주방 오브제처럼 정리했습니다.',tags:['food','local']},
    {n:'34',title:'딥 레드와 블랙 컬러로 홍삼 엑기스의 깊은 인상을 만들다',summary:'홍삼 원료의 진한 농도감과 프리미엄 이미지를 딥 레드와 블랙 컬러, 반복되는 식물 그래픽으로 강조했습니다.',tags:['gift','health']},
    {n:'35',title:'화이트와 브라운 컬러로 신선한 냉장 버섯의 신뢰감을 만들다',summary:'냉장 버섯의 원물감과 안정감을 화이트와 브라운 컬러, 큰 버섯 이미지 중심의 파우치 패키지로 정리했습니다.',tags:['food','local']},
    {n:'36',title:'블루 컬러와 실버 파우치로 냉동 굴의 신선함을 직관적으로 전달하다',summary:'냉동 굴의 차가운 신선함과 보관 안정성을 선명한 블루, 실버 파우치와 큰 굴 원물 이미지로 직관적으로 전달했습니다.',tags:['food','local']}
  ].map(p => ({...p,image:`./assets/projects/${p.n}.jpg`}));

  const tagNames={gift:'선물세트',food:'식품',health:'건강식품',local:'로컬 브랜드'};
  const body=document.body;
  const grid=document.getElementById('projectGrid');
  const count=document.getElementById('portfolioCount');
  const projectModal=document.getElementById('projectModal');
  const projectModalImage=document.getElementById('projectModalImage');
  const projectModalIndex=document.getElementById('projectModalIndex');
  const projectModalTitle=document.getElementById('projectModalTitle');
  const projectModalSummary=document.getElementById('projectModalSummary');
  const projectModalTags=document.getElementById('projectModalTags');

  function renderProjects(filter='all'){
    const visible=projects.filter(p=>filter==='all'||p.tags.includes(filter));
    count.textContent=String(visible.length);
    grid.innerHTML=visible.map(p=>`<article class="project-card" data-project="${p.n}" tabindex="0" role="button" aria-label="${p.title}">
      <div class="project-thumb no-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="project-placeholder"><span>그로우파머스 포트폴리오</span><strong>${p.n}</strong><em>이미지 준비 중</em></div>
      </div>
      <div class="project-info"><h3>${p.title}</h3><p>${p.summary}</p><div class="project-tags">${p.tags.map(t=>`<span>${tagNames[t]}</span>`).join('')}</div></div>
    </article>`).join('');
    grid.querySelectorAll('.project-thumb img').forEach(img=>{
      img.addEventListener('load',()=>img.parentElement.classList.remove('no-image'));
      img.addEventListener('error',()=>img.parentElement.classList.add('no-image'));
    });
    grid.querySelectorAll('.project-card').forEach(card=>{
      const open=()=>openProject(card.dataset.project);
      card.addEventListener('click',open);
      card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
    });
  }

  function openProject(id){
    const p=projects.find(item=>item.n===id); if(!p)return;
    projectModalIndex.textContent=`프로젝트 ${p.n} / 36`;
    projectModalTitle.textContent=p.title;
    projectModalSummary.textContent=p.summary;
    projectModalTags.innerHTML=p.tags.map(t=>`<span>${tagNames[t]}</span>`).join('');
    projectModalImage.style.backgroundImage='none'; projectModalImage.innerHTML='';
    const tester=new Image();
    tester.onload=()=>{projectModalImage.style.backgroundImage=`url("${p.image}")`;projectModalImage.innerHTML='<span aria-hidden="true"></span>';};
    tester.src=p.image;
    projectModal.classList.add('is-open'); projectModal.setAttribute('aria-hidden','false'); body.classList.add('modal-open');
    requestAnimationFrame(()=>projectModal.classList.add('is-visible'));
  }
  function closeProject(){projectModal.classList.remove('is-visible');projectModal.setAttribute('aria-hidden','true');body.classList.remove('modal-open');setTimeout(()=>projectModal.classList.remove('is-open'),260);}
  document.querySelectorAll('.js-close-project').forEach(el=>el.addEventListener('click',closeProject));

  document.querySelectorAll('.work-filter button').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.work-filter button').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');renderProjects(btn.dataset.filter||'all');
  }));
  renderProjects();

  const menuButton=document.querySelector('.menu-button'); const mobileMenu=document.querySelector('.mobile-menu');
  const closeMenu=()=>{if(!menuButton||!mobileMenu)return;menuButton.classList.remove('is-open');mobileMenu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');mobileMenu.setAttribute('aria-hidden','true');};
  if(menuButton&&mobileMenu){menuButton.addEventListener('click',()=>{const open=!mobileMenu.classList.contains('is-open');mobileMenu.classList.toggle('is-open',open);menuButton.setAttribute('aria-expanded',String(open));mobileMenu.setAttribute('aria-hidden',String(!open));});mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));}

  const modal=document.getElementById('farmRegisterModal'); const form=document.getElementById('farmRegisterForm'); const success=document.getElementById('farmRegisterSuccess');
  function openRegister(){closeMenu();form.hidden=false;success.hidden=true;modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');body.classList.add('modal-open');requestAnimationFrame(()=>modal.classList.add('is-visible'));}
  function closeRegister(){modal.classList.remove('is-visible');modal.setAttribute('aria-hidden','true');body.classList.remove('modal-open');setTimeout(()=>modal.classList.remove('is-open'),300);}
  document.querySelectorAll('.js-open-register').forEach(b=>b.addEventListener('click',openRegister)); document.querySelectorAll('.js-close-register').forEach(b=>b.addEventListener('click',closeRegister));
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const fd=new FormData(form);const item={id:`farm_${Date.now()}`,farmName:fd.get('farmName'),ownerName:fd.get('ownerName'),region:fd.get('region'),phone:fd.get('phone'),products:fd.get('products'),season:fd.get('season'),story:fd.get('story'),needs:fd.getAll('needs'),createdAt:new Date().toISOString()};const key='growfarmers_farm_registrations';const saved=JSON.parse(localStorage.getItem(key)||'[]');saved.push(item);localStorage.setItem(key,JSON.stringify(saved));form.reset();form.hidden=true;success.hidden=false;});

  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(projectModal.classList.contains('is-open'))closeProject();else if(modal.classList.contains('is-open'))closeRegister();}});
  const header=document.querySelector('.site-header'); document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(!target)return;e.preventDefault();window.scrollTo({top:target.getBoundingClientRect().top+window.scrollY-(header?.offsetHeight||0),behavior:'smooth'});}));
})();
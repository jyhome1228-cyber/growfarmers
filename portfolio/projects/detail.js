(async()=>{
  const commonScript=document.createElement('script');
  commonScript.src='../../../script.js';
  commonScript.async=false;
  document.head.appendChild(commonScript);

  const FAV='https://cdn.imweb.me/upload/S20260608d59dd46fbc08b/a4aa6f5955618.png';
  [['icon','image/png'],['shortcut icon','image/png'],['apple-touch-icon','']].forEach(([rel,type])=>{
    let l=document.querySelector(`link[rel="${rel}"]`);
    if(!l){l=document.createElement('link');l.rel=rel;document.head.appendChild(l)}
    if(type)l.type=type;
    l.href=FAV;
  });

  const M={
    '3739f7193b9d8073af21d7a0dfd4911a':['곶감의 달콤한 색감을 선명하게 담은 선물 패키지 디자인',1],
    '3739f7193b9d8015b478e0380552302e':['깨끗한 바다의 맛을 정갈하게 담은 건멸치 선물세트 디자인',2],
    '3739f7193b9d802ba9b7e006d7c7debc':['담백한 베이지 톤으로 천연 조미료의 신뢰를 정리하다',3],
    '3729f7193b9d804ca3e7c2c5ea0c1a71':['대추와 노루궁뎅이버섯을 친근하게 풀어낸 건강즙 브랜드 디자인',4],
    '3739f7193b9d80088a17cb6c667cb814':['딥 레드와 블랙 컬러로 홍삼 엑기스의 깊은 인상을 만들다',5],
    '3739f7193b9d80ef8f53fa2b3961390c':['로컬 디저트의 고소한 맛을 밝게 담은 패키지 디자인',6],
    '3729f7193b9d803088e4f08a5d7e6bea':['바다의 감칠맛을 친근한 프리미엄 식탁 브랜드로 풀어낸 디자인',7],
    '3739f7193b9d80e88e5ff5185a1f6962':['보리굴비의 정갈한 품격을 흰 여백에 담은 선물 패키지 디자인',8],
    '3739f7193b9d8070b4a7ff4b5872b70a':['블루 컬러와 실버 파우치로 냉동 굴의 신선함을 직관적으로 전달하다',9],
    '3739f7193b9d8008bdd5d1da68bbea85':['빨간 약호박의 진한 색감을 밝게 담은 건강즙 패키지 디자인',10],
    '3739f7193b9d80c0b158fcfe62ef9b25':['사과와 샤인머스캣의 산뜻함을 담은 주스 패키지 디자인',11],
    '3739f7193b9d801b91e2eaaa90815cbe':['사과의 밝은 맛을 친근하게 담은 패키지 디자인',12],
    '3729f7193b9d80e5b8c8de8e8ecbbc71':['생강의 온기를 부드럽고 정갈한 선물 이미지로 담은 패키지 디자인',13],
    '3739f7193b9d8053b911e29953efbb59':['섬야초의 맑은 기운을 차분하게 담은 스틱차 패키지 디자인',14],
    '3739f7193b9d80fcbf37e4f33a1ba4b1':['소금 결정의 깨끗함을 미니멀하게 담은 패키지 디자인',15],
    '3739f7193b9d80bf86dde75da5e2077e':['소금의 순수함을 절제된 고급감으로 담은 패키지 디자인',16],
    '3739f7193b9d80b19605ed87160d3183':['숲의 편안함으로 유정란의 건강한 이미지를 전하다',17],
    '3729f7193b9d805bacbfe1ceb9711339':['스틱형 벌꿀의 밝은 선물성을 담은 브랜드 디자인',18],
    '3739f7193b9d80338d56c5e85b858137':['신선한 김치의 색감과 시원한 맛을 살린 패키지 디자인',19],
    '3729f7193b9d806a8371d2c219e21781':['쌀의 담백함을 자연스럽게 담은 품종별 패키지 디자인',20],
    '3739f7193b9d8038a62de817a499fd56':['아이보리와 딥 레드 컬러로 매일 챙기는 홍삼 루틴을 만들다',21],
    '3739f7193b9d80fd8717e7075daf65ed':['우리쌀 간식의 담백함을 따뜻하게 담은 패키지 디자인',22],
    '3739f7193b9d8048b780cbdb4906837c':['잡곡의 균형을 간편하게 담은 보약잡곡 패키지 디자인',23],
    '3739f7193b9d8012b088de30688dd414':['재래맛김의 깨끗한 풍미를 담은 선물 패키지 디자인',24],
    '3729f7193b9d80e1b43ef4d02cdd5f79':['전통 풍경을 현대적으로 풀어낸 프리미엄 선물 브랜드 디자인',25],
    '3739f7193b9d80998702f40961c583c5':['지리산의 계절을 담은 프리미엄 허니 선물세트 디자인',26],
    '3739f7193b9d807a92cbd6c0e4298062':['지리산의 자연 이미지를 밝게 담은 스틱꿀 선물세트 디자인',27],
    '3739f7193b9d80d2a4b9fd6276080db7':['지역 식재료의 건강한 식탁 이미지를 담은 브랜드 디자인',28],
    '3729f7193b9d8099983ce98c60745e26':['콩과 메주의 담백함을 정갈하게 담은 패키지 디자인',29],
    '3739f7193b9d80ec90aecb658ac023fe':['크림 톤 패키지와 투명 용기로 정갈한 새우젓의 신선함을 담다',30],
    '3739f7193b9d804f9ccac7aeeadc42fc':['호박과 팥의 따뜻함을 담은 티백차 패키지 디자인',31],
    '3729f7193b9d8016a02deb704dc79978':['홍삼과 배의 깊이를 정갈하게 담은 선물 브랜드 디자인',32],
    '3739f7193b9d8020a355da882c5f4614':['홍삼의 깊은 인상을 고급 선물세트로 담은 패키지 디자인',33],
    '3739f7193b9d809bb477f52418da738d':['화이트와 브라운 컬러로 신선한 냉장 버섯의 신뢰감을 만들다',34],
    '3739f7193b9d80c082b5fb4886388067':['흑삼의 깊이를 블랙 무드로 표현한 프리미엄 선물 패키지 디자인',35],
    '3739f7193b9d80adb4c1cef782710dba':['흑홍삼절편의 깊은 기운을 전통 풍경으로 담은 패키지 디자인',36]
  };

  const id=location.pathname.split('/').filter(Boolean).slice(-1)[0];
  const meta=M[id];
  const title=document.getElementById('detailTitle');
  const index=document.getElementById('detailIndex');
  const body=document.getElementById('detailBody');
  const shell=document.querySelector('.project-detail > .shell');
  const visual=document.querySelector('.project-visual');

  if(meta){
    if(title)title.textContent=meta[0];
    if(index)index.textContent='GROW FARMERS PROJECT · '+String(meta[1]).padStart(2,'0');
    document.title=meta[0]+' | GROW FARMERS';
  }else{
    if(title)title.textContent='GROW FARMERS PROJECT';
    if(index)index.textContent='PORTFOLIO';
  }

  const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,m=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  }[m]));

  const renderBlocks=blocks=>(blocks||[]).map(block=>{
    const text=escapeHtml(block?.text||'');
    if(!text)return '';
    if(block?.tag==='h2')return `<h2>${text}</h2>`;
    if(block?.tag==='h3')return `<h3>${text}</h3>`;
    return `<p>${text}</p>`;
  }).join('');

  if(body){
    body.innerHTML='';
    if(meta&&typeof window.loadGFProjectDetails==='function'){
      try{
        const all=await window.loadGFProjectDetails();
        const project=Array.isArray(all)?all.find(item=>item&&item.title===meta[0]):null;
        if(project?.blocks?.length)body.innerHTML=renderBlocks(project.blocks);
      }catch(error){
        console.error('GROW FARMERS project copy load failed:',error);
      }
    }
    if(!body.innerHTML.trim()&&meta){
      body.innerHTML=`<p>${escapeHtml(meta[0])} 프로젝트입니다. 상품이 가진 특징과 원산지, 사용 맥락을 정리해 브랜드 인상과 패키지 경험이 자연스럽게 연결되도록 설계했습니다.</p><p>패키지 한 장면에 그치지 않고 실제 판매 환경에서 필요한 정보 전달과 선물성, 제품군 확장 가능성까지 고려해 전체 비주얼 시스템을 구성했습니다.</p>`;
    }
  }

  if(shell&&!shell.querySelector('.project-detail-layout')){
    const head=shell.querySelector('.project-head');
    const layout=document.createElement('div');
    layout.className='project-detail-layout';

    const sidebar=document.createElement('aside');
    sidebar.className='project-sidebar';

    const media=document.createElement('section');
    media.className='project-media';
    media.setAttribute('aria-label','프로젝트 이미지');

    if(head)sidebar.appendChild(head);
    if(body)sidebar.appendChild(body);

    const actions=document.createElement('div');
    actions.className='project-side-actions';
    actions.innerHTML='<a href="../../">전체 프로젝트</a><a class="is-primary" href="../../../contact/">프로젝트 문의</a>';
    sidebar.appendChild(actions);

    if(visual)media.appendChild(visual);

    layout.appendChild(sidebar);
    layout.appendChild(media);
    shell.prepend(layout);

    shell.querySelectorAll('.project-detail-end').forEach(el=>el.remove());

    const moveGalleries=()=>{
      shell.querySelectorAll('.project-gallery').forEach(gallery=>{
        if(gallery.parentElement!==media)media.appendChild(gallery);
      });
    };
    moveGalleries();
    new MutationObserver(moveGalleries).observe(shell,{childList:true,subtree:true});
  }

  const nav=document.querySelector('.desktop-nav');
  if(nav){
    const contact=[...nav.querySelectorAll('a')].find(a=>a.href.includes('/contact'));
    if(contact){
      if(![...nav.querySelectorAll('a')].some(a=>a.href.includes('/news/'))){
        const n=document.createElement('a');n.href='../../../news/';n.textContent='뉴스';nav.insertBefore(n,contact);
      }
      if(![...nav.querySelectorAll('a')].some(a=>a.href.includes('/how-we-work/'))){
        const h=document.createElement('a');h.href='../../../how-we-work/';h.textContent='함께 일하는 방법';nav.insertBefore(h,contact);
      }
    }
  }

  const footer=document.querySelector('.footer-links');
  if(footer){
    const contact=[...footer.querySelectorAll('a')].find(a=>a.href.includes('/contact'));
    if(contact&&!footer.querySelector('a[href*="news"]')){
      const n=document.createElement('a');n.href='../../../news/';n.textContent='뉴스';footer.insertBefore(n,contact);
    }
    if(contact&&!footer.querySelector('a[href*="how-we-work"]')){
      const h=document.createElement('a');h.href='../../../how-we-work/';h.textContent='함께 일하는 방법';footer.insertBefore(h,contact);
    }
  }

  const headerActions=document.querySelector('.header-actions');
  if(headerActions&&!headerActions.querySelector('.menu-button')){
    const btn=document.createElement('button');
    btn.className='menu-button';
    btn.type='button';
    btn.setAttribute('aria-label','메뉴 열기');
    btn.innerHTML='<span></span><span></span>';
    headerActions.appendChild(btn);

    const mobile=document.createElement('div');
    mobile.className='mobile-menu';
    mobile.innerHTML='<a href="../../../about/">그로우파머스</a><a href="../../../service/">우리가 하는 일</a><a href="../../">포트폴리오</a><a href="../../../farms/">농장과 브랜드</a><a href="../../../book/">농부책방</a><a href="../../../news/">뉴스</a><a href="../../../how-we-work/">함께 일하는 방법</a><a href="../../../contact/">함께하기</a>';
    document.querySelector('.site-header')?.insertAdjacentElement('afterend',mobile);
    btn.addEventListener('click',()=>mobile.classList.toggle('is-open'));
  }

  ['../detail-images.js','../detail-images-2.js','../detail-images-3.js'].forEach(src=>{
    if(document.querySelector(`script[src="${src}"]`))return;
    const s=document.createElement('script');
    s.src=src;
    document.body.appendChild(s);
  });
})();
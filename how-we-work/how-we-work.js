(()=>{
const DATA=window.GF_RURAL_REGIONS||{};
const provinceButtons=[...document.querySelectorAll('[data-support-province]')];
const regionList=document.getElementById('supportRegionList');
const regionTitle=document.getElementById('supportRegionTitle');
const centerName=document.getElementById('supportCenterName');
const centerHint=document.getElementById('supportCenterHint');
const directInput=document.getElementById('supportDirectRegion');
const directBtn=document.getElementById('supportDirectSearch');
const homeBtn=document.getElementById('supportCenterHome');
const mapBtn=document.getElementById('supportCenterMap');
const projectBtn=document.getElementById('supportProjectSearch');
let activeProvince='충북';
let activeRegion='진천군';

function makeLinks(label){
 const center=`${label} 농업기술센터`;
 centerName.textContent=center;
 centerHint.textContent='센터 홈페이지의 공지사항·새소식에서 지원사업, 시범사업, 농업인 지원 등의 공고를 확인해보세요.';
 homeBtn.href=`https://search.naver.com/search.naver?query=${encodeURIComponent(center+' 공식 홈페이지')}`;
 mapBtn.href=`https://map.naver.com/p/search/${encodeURIComponent(center)}`;
 projectBtn.href=`https://search.naver.com/search.naver?query=${encodeURIComponent(center+' 지원사업 시범사업 공고')}`;
}

function renderProvince(name){
 activeProvince=name;
 provinceButtons.forEach(b=>b.classList.toggle('is-active',b.dataset.supportProvince===name));
 const rows=DATA[name]||[];
 regionTitle.textContent=`${name} 농업기술센터 찾기`;
 regionList.innerHTML=rows.map(r=>`<button type="button" class="support-region-chip" data-support-region="${r.name}">${r.name}</button>`).join('');
 const first=rows[0];
 if(first){chooseRegion(first.name)}else{makeLinks(name)}
}

function chooseRegion(name){
 activeRegion=name;
 [...regionList.querySelectorAll('[data-support-region]')].forEach(b=>b.classList.toggle('is-active',b.dataset.supportRegion===name));
 makeLinks(`${activeProvince} ${name}`);
}

provinceButtons.forEach(b=>b.addEventListener('click',()=>renderProvince(b.dataset.supportProvince)));
regionList?.addEventListener('click',e=>{const b=e.target.closest('[data-support-region]');if(b)chooseRegion(b.dataset.supportRegion)});
directBtn?.addEventListener('click',()=>{
 const q=(directInput.value||'').trim();
 if(!q)return directInput.focus();
 makeLinks(q);
 [...regionList.querySelectorAll('[data-support-region]')].forEach(b=>b.classList.remove('is-active'));
});
directInput?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();directBtn.click()}});

renderProvince(activeProvince);
})();

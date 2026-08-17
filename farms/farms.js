(()=>{
const DATA=window.GF_RURAL_REGIONS||{};
const provinceButtons=[...document.querySelectorAll('[data-province]')];
const regionList=document.getElementById('regionList');
const regionTitle=document.getElementById('regionTitle');
const regionGuide=document.getElementById('regionGuide');
const cropChips=document.getElementById('cropChips');
const regionInput=document.querySelector('[name="region"]');
const productsInput=document.querySelector('[name="products"]');
let activeProvince='충북';

function renderProvince(name){
 activeProvince=name;
 provinceButtons.forEach(b=>b.classList.toggle('is-active',b.dataset.province===name));
 const rows=DATA[name]||[];
 regionTitle.textContent=name+' 농촌 지역';
 regionGuide.textContent='지역을 선택하면 대표 생산 품목 예시를 확인할 수 있습니다.';
 cropChips.innerHTML='';
 regionList.innerHTML=rows.map(r=>`<button type="button" class="region-chip" data-region="${r.name}">${r.name}</button>`).join('');
}
function chooseRegion(regionName){
 const rows=DATA[activeProvince]||[];
 const r=rows.find(x=>x.name===regionName);if(!r)return;
 [...regionList.querySelectorAll('.region-chip')].forEach(b=>b.classList.toggle('is-active',b.dataset.region===regionName));
 regionInput.value=activeProvince+' '+regionName;
 regionGuide.innerHTML=`<strong>${activeProvince} ${regionName}</strong> · 대표 생산 품목 예시 <span>실제 생산 품목은 아래에서 직접 입력해주세요.</span>`;
 cropChips.innerHTML=r.crops.map(c=>`<button type="button" class="crop-chip" data-crop="${c}">${c}</button>`).join('');
}
provinceButtons.forEach(b=>b.addEventListener('click',()=>renderProvince(b.dataset.province)));
regionList?.addEventListener('click',e=>{const b=e.target.closest('[data-region]');if(b)chooseRegion(b.dataset.region)});
cropChips?.addEventListener('click',e=>{const b=e.target.closest('[data-crop]');if(!b)return;const crop=b.dataset.crop;const current=productsInput.value.split(',').map(s=>s.trim()).filter(Boolean);if(!current.includes(crop))current.push(crop);productsInput.value=current.join(', ');b.classList.add('is-selected')});
renderProvince(activeProvince);

const form=document.getElementById('farmRegisterForm');
if(form){form.addEventListener('submit',e=>{
 e.preventDefault();e.stopImmediatePropagation();
 if(!form.reportValidity())return;
 const fd=new FormData(form);
 let rows=[];try{rows=JSON.parse(localStorage.getItem('growfarmers_farm_registrations')||'[]')}catch{}
 rows.unshift({
  id:'farm_'+Date.now(),farmName:String(fd.get('farmName')||''),ownerName:String(fd.get('ownerName')||''),region:String(fd.get('region')||''),phone:String(fd.get('phone')||''),products:String(fd.get('products')||''),season:String(fd.get('season')||''),story:String(fd.get('story')||''),wantedProduct:String(fd.get('wantedProduct')||''),needs:fd.getAll('needs'),status:'접수',createdAt:new Date().toISOString()
 });
 localStorage.setItem('growfarmers_farm_registrations',JSON.stringify(rows));
 form.reset();regionInput.value='';cropChips.innerHTML='';[...regionList.querySelectorAll('.region-chip')].forEach(b=>b.classList.remove('is-active'));
 const success=document.getElementById('farmRegisterSuccess');if(success){success.classList.add('show');success.scrollIntoView({behavior:'smooth',block:'center'})}
},true)}
})();

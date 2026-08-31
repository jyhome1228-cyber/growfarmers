(()=>{
const DATA=window.GF_RURAL_REGIONS||{};
const provinceButtons=[...document.querySelectorAll('[data-province]')];
const regionList=document.getElementById('regionList');
const regionTitle=document.getElementById('regionTitle');
const regionGuide=document.getElementById('regionGuide');
const cropArea=document.getElementById('cropArea');
const cropChips=document.getElementById('cropChips');
const regionInput=document.querySelector('[name="region"]');
const productsInput=document.querySelector('[name="products"]');
let activeProvince='';

function getProducts(){
  if(!productsInput)return [];
  return productsInput.value.split(/[,，]/).map(v=>v.trim()).filter(Boolean);
}

function setProducts(items){
  if(!productsInput)return;
  productsInput.value=[...new Set(items.map(v=>String(v).trim()).filter(Boolean))].join(', ');
  syncCropUI();
}

function toggleProduct(name){
  const value=String(name||'').trim();
  if(!value||!productsInput)return;
  const current=getProducts();
  const next=current.includes(value)?current.filter(v=>v!==value):[...current,value];
  setProducts(next);
}

function syncCropUI(){
  const selected=new Set(getProducts());
  document.querySelectorAll('[data-crop]').forEach(button=>{
    const value=(button.dataset.crop||'').trim();
    const on=selected.has(value);
    button.classList.toggle('is-selected',on);
    button.setAttribute('aria-pressed',on?'true':'false');
  });
}

function renderProvince(name){
  activeProvince=name;
  provinceButtons.forEach(button=>button.classList.toggle('is-active',button.dataset.province===name));
  const rows=DATA[name]||[];
  regionTitle.textContent=name+' 농촌 지역';
  regionGuide.textContent='농장이 있는 시·군을 선택해주세요.';
  regionList.innerHTML=rows.map(row=>`<button type="button" class="region-chip" data-region="${row.name}">${row.name}</button>`).join('');
  if(cropArea)cropArea.hidden=true;
  if(cropChips)cropChips.innerHTML='';
  if(regionInput)regionInput.value='';
}

function chooseRegion(regionName){
  const rows=DATA[activeProvince]||[];
  const selectedRegion=rows.find(row=>row.name===regionName);
  if(!selectedRegion)return;

  [...regionList.querySelectorAll('.region-chip')].forEach(button=>{
    button.classList.toggle('is-active',button.dataset.region===regionName);
  });

  const fullRegion=activeProvince+' '+regionName;
  if(regionInput)regionInput.value=fullRegion;
  regionGuide.innerHTML=`<strong>${fullRegion}</strong><span>선택되었습니다. 아래에서 재배 품종과 연락처만 남겨주세요.</span>`;

  const crops=selectedRegion.crops||[];
  if(cropChips){
    cropChips.innerHTML=crops.map(crop=>`<button type="button" class="crop-chip" data-crop="${crop}" aria-pressed="false">${crop}</button>`).join('');
  }
  if(cropArea)cropArea.hidden=crops.length===0;
  syncCropUI();
}

provinceButtons.forEach(button=>button.addEventListener('click',()=>renderProvince(button.dataset.province)));
regionList?.addEventListener('click',event=>{
  const button=event.target.closest('[data-region]');
  if(button)chooseRegion(button.dataset.region);
});
cropChips?.addEventListener('click',event=>{
  const button=event.target.closest('[data-crop]');
  if(button)toggleProduct(button.dataset.crop);
});
productsInput?.addEventListener('input',syncCropUI);

const form=document.getElementById('farmRegisterForm');
if(form){
  form.addEventListener('submit',event=>{
    event.preventDefault();
    event.stopImmediatePropagation();
    if(!form.reportValidity())return;

    const fd=new FormData(form);
    let rows=[];
    try{rows=JSON.parse(localStorage.getItem('growfarmers_farm_registrations')||'[]')}catch{}

    rows.unshift({
      id:'farm_'+Date.now(),
      region:String(fd.get('region')||''),
      products:String(fd.get('products')||''),
      contactName:String(fd.get('contactName')||''),
      phone:String(fd.get('phone')||''),
      message:String(fd.get('message')||''),
      status:'접수',
      createdAt:new Date().toISOString()
    });

    localStorage.setItem('growfarmers_farm_registrations',JSON.stringify(rows));
    form.reset();
    if(regionInput)regionInput.value='';
    if(cropChips)cropChips.innerHTML='';
    if(cropArea)cropArea.hidden=true;
    [...regionList.querySelectorAll('.region-chip')].forEach(button=>button.classList.remove('is-active'));
    provinceButtons.forEach(button=>button.classList.remove('is-active'));
    regionTitle.textContent='지역을 선택해주세요';
    regionGuide.textContent='지도에서 도를 선택하면 시·군 목록이 나타납니다.';
    regionList.innerHTML='';
    activeProvince='';

    const success=document.getElementById('farmRegisterSuccess');
    if(success){
      success.classList.add('show');
      success.scrollIntoView({behavior:'smooth',block:'center'});
    }
  },true);
}
})();

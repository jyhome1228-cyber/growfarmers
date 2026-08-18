(()=>{
const DATA=window.GF_RURAL_REGIONS||{};
const BASE=window.GF_BASE_CROPS||{};
const provinceButtons=[...document.querySelectorAll('[data-province]')];
const regionList=document.getElementById('regionList');
const regionTitle=document.getElementById('regionTitle');
const regionGuide=document.getElementById('regionGuide');
const cropChips=document.getElementById('cropChips');
const regionInput=document.querySelector('[name="region"]');
const productsInput=document.querySelector('[name="products"]');
let activeProvince='충북';
let activeCategory=Object.keys(BASE)[0]||'';

function getProducts(){
 if(!productsInput)return [];
 return productsInput.value.split(',').map(s=>s.trim()).filter(Boolean);
}
function setProducts(items){
 if(!productsInput)return;
 productsInput.value=[...new Set(items.map(v=>String(v).trim()).filter(Boolean))].join(', ');
 syncProductUI();
}
function addProduct(name){
 const value=String(name||'').trim();
 if(!value||!productsInput)return;
 const current=getProducts();
 if(!current.includes(value))current.push(value);
 setProducts(current);
}
function removeProduct(name){
 const value=String(name||'').trim();
 if(!value||!productsInput)return;
 setProducts(getProducts().filter(item=>item!==value));
}
function toggleProduct(name){
 const value=String(name||'').trim();
 if(!value)return;
 if(getProducts().includes(value))removeProduct(value);
 else addProduct(value);
}
function syncProductUI(){
 const selected=new Set(getProducts());
 document.querySelectorAll('[data-base-crop],[data-crop]').forEach(button=>{
  const name=(button.dataset.baseCrop||button.dataset.crop||'').trim();
  const on=selected.has(name);
  button.classList.toggle('is-selected',on);
  button.setAttribute('aria-pressed',on?'true':'false');
 });
 const count=document.getElementById('selectedCropCount');
 if(count)count.textContent=String(selected.size);
 const clear=document.getElementById('clearCropSelection');
 if(clear)clear.disabled=selected.size===0;
}

function renderProvince(name){
 activeProvince=name;
 provinceButtons.forEach(b=>b.classList.toggle('is-active',b.dataset.province===name));
 const rows=DATA[name]||[];
 regionTitle.textContent=name+' 농촌 지역';
 regionGuide.textContent='지역을 선택하면 대표 특산물 예시를 확인할 수 있습니다.';
 cropChips.innerHTML='';
 regionList.innerHTML=rows.map(r=>`<button type="button" class="region-chip" data-region="${r.name}">${r.name}</button>`).join('');
 syncProductUI();
}
function chooseRegion(regionName){
 const rows=DATA[activeProvince]||[];
 const r=rows.find(x=>x.name===regionName);if(!r)return;
 [...regionList.querySelectorAll('.region-chip')].forEach(b=>b.classList.toggle('is-active',b.dataset.region===regionName));
 regionInput.value=activeProvince+' '+regionName;
 regionGuide.innerHTML=`<strong>${activeProvince} ${regionName}</strong> · 대표 특산물 예시 <span>대표 품목 외에 실제 재배·생산하는 농산물은 아래에서 추가해주세요.</span>`;
 cropChips.innerHTML=r.crops.map(c=>`<button type="button" class="crop-chip specialty-chip" data-crop="${c}" aria-pressed="false">${c}</button>`).join('');
 syncProductUI();
}

function ensureCropPicker(){
 const cropArea=document.querySelector('.crop-area');
 if(!cropArea||document.querySelector('.all-crop-picker'))return;
 const strong=cropArea.querySelector(':scope>strong');if(strong)strong.textContent='대표 특산물';
 const wrap=document.createElement('div');wrap.className='all-crop-picker';
 wrap.innerHTML=`
  <div class="crop-picker-head">
   <div><strong>그 외 농산물</strong><p>지역 특산물 외에도 실제 재배하는 작물을 골라주세요. 선택한 항목은 한 번 더 누르면 취소할 수 있습니다.</p></div>
   <div class="crop-selection-status"><span>선택 <strong id="selectedCropCount">0</strong>개</span><button type="button" id="clearCropSelection" disabled>전체 해제</button></div>
  </div>
  <div class="crop-category-tabs" id="cropCategoryTabs"></div>
  <div class="base-crop-list" id="baseCropList"></div>
  <div class="custom-crop-row"><input id="customCropInput" type="text" placeholder="목록에 없는 농산물 직접 입력"><button type="button" id="customCropAdd">추가</button></div>
  <p class="crop-picker-note">선택하거나 직접 입력한 품목은 아래 농장 등록 폼의 ‘현재 주요 생산품’에 자동으로 들어갑니다.</p>`;
 cropArea.insertAdjacentElement('afterend',wrap);
 const tabs=wrap.querySelector('#cropCategoryTabs');
 const list=wrap.querySelector('#baseCropList');
 const categories=Object.keys(BASE);
 function renderCategory(cat){
  activeCategory=cat;
  [...tabs.querySelectorAll('button')].forEach(b=>b.classList.toggle('is-active',b.dataset.category===cat));
  list.innerHTML=(BASE[cat]||[]).map(c=>`<button type="button" class="base-crop-chip" data-base-crop="${c}" aria-pressed="false">${c}</button>`).join('');
  syncProductUI();
 }
 tabs.innerHTML=categories.map(c=>`<button type="button" data-category="${c}">${c}</button>`).join('');
 tabs.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b)renderCategory(b.dataset.category)});
 list.addEventListener('click',e=>{const b=e.target.closest('[data-base-crop]');if(!b)return;toggleProduct(b.dataset.baseCrop)});
 const input=wrap.querySelector('#customCropInput');
 const add=()=>{const value=input.value.trim();if(!value)return;value.split(/[,，]/).map(v=>v.trim()).filter(Boolean).forEach(addProduct);input.value='';input.focus()};
 wrap.querySelector('#customCropAdd').addEventListener('click',add);
 wrap.querySelector('#clearCropSelection').addEventListener('click',()=>setProducts([]));
 input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();add()}});
 if(categories[0])renderCategory(categories[0]);
}

provinceButtons.forEach(b=>b.addEventListener('click',()=>renderProvince(b.dataset.province)));
regionList?.addEventListener('click',e=>{const b=e.target.closest('[data-region]');if(b)chooseRegion(b.dataset.region)});
cropChips?.addEventListener('click',e=>{const b=e.target.closest('[data-crop]');if(!b)return;toggleProduct(b.dataset.crop)});
productsInput?.addEventListener('input',syncProductUI);
renderProvince(activeProvince);
ensureCropPicker();
syncProductUI();

const productsField=productsInput?.closest('.field');
if(productsField){
 const labelText=[...productsField.childNodes].find(n=>n.nodeType===3&&n.textContent.trim());
 if(labelText)labelText.textContent='현재 주요 생산품 ';
 const help=productsField.querySelector('small');if(help)help.textContent='선택한 농산물은 다시 누르면 해제됩니다. 목록에 없는 품목은 직접 입력할 수 있습니다.';
}

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
 form.reset();regionInput.value='';cropChips.innerHTML='';[...regionList.querySelectorAll('.region-chip')].forEach(b=>b.classList.remove('is-active'));setProducts([]);
 const success=document.getElementById('farmRegisterSuccess');if(success){success.classList.add('show');success.scrollIntoView({behavior:'smooth',block:'center'})}
},true)}
})();

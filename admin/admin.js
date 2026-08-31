(()=>{
const read=k=>{try{return JSON.parse(localStorage.getItem(k)||'[]')}catch{return[]}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const farmsKey='growfarmers_farm_registrations',inqKey='growfarmers_inquiries';
let farms=read(farmsKey),inquiries=read(inqKey);
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));
function formatDate(v){if(!v)return'-';const d=new Date(v);return isNaN(d)?'-':d.toLocaleString('ko-KR',{month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'})}
function farmContactName(x){return x.contactName||x.ownerName||x.farmName||'-'}
function farmMessage(x){return x.message||x.story||x.wantedProduct||'-'}
function renderStats(){$('#statFarms').textContent=farms.length;$('#statInquiries').textContent=inquiries.length;$('#statNew').textContent=inquiries.filter(x=>x.status!=='완료').length;$('#statProjects').textContent='36'}
function renderFarms(){
 const el=$('#farmRows');
 if(!farms.length){el.innerHTML='<tr><td colspan="7" class="empty">등록된 농장이 없습니다.</td></tr>';return}
 el.innerHTML=farms.map(x=>`<tr><td><strong>${esc(farmContactName(x))}</strong></td><td>${esc(x.region)}</td><td>${esc(x.products)}</td><td>${esc(x.phone)}</td><td style="max-width:320px">${esc(farmMessage(x))}</td><td>${formatDate(x.createdAt)}</td><td><div class="row-actions"><button data-farm-status="${esc(x.id)}">${x.status==='완료'?'접수로':'완료'}</button><button data-farm-delete="${esc(x.id)}">삭제</button></div></td></tr>`).join('');
 el.querySelectorAll('[data-farm-status]').forEach(b=>b.onclick=()=>{farms=farms.map(x=>x.id===b.dataset.farmStatus?{...x,status:x.status==='완료'?'접수':'완료'}:x);write(farmsKey,farms);renderAll()});
 el.querySelectorAll('[data-farm-delete]').forEach(b=>b.onclick=()=>{farms=farms.filter(x=>x.id!==b.dataset.farmDelete);write(farmsKey,farms);renderAll()})
}
function renderInquiries(){const el=$('#inquiryRows');if(!inquiries.length){el.innerHTML='<tr><td colspan="7" class="empty">접수된 문의가 없습니다.</td></tr>';return}el.innerHTML=inquiries.map(x=>`<tr><td><strong>${esc(x.name)}</strong><small>${esc(x.company)}</small></td><td>${esc(x.type)}</td><td>${esc(x.phone)}<small>${esc(x.email)}</small></td><td style="max-width:280px">${esc(x.message)}</td><td><span class="pill">${esc(x.status||'신규')}</span></td><td>${formatDate(x.createdAt)}</td><td><div class="row-actions"><button data-inq-status="${esc(x.id)}">${x.status==='완료'?'신규로':'완료'}</button><button data-inq-delete="${esc(x.id)}">삭제</button></div></td></tr>`).join('');el.querySelectorAll('[data-inq-status]').forEach(b=>b.onclick=()=>{inquiries=inquiries.map(x=>x.id===b.dataset.inqStatus?{...x,status:x.status==='완료'?'신규':'완료'}:x);write(inqKey,inquiries);renderAll()});el.querySelectorAll('[data-inq-delete]').forEach(b=>b.onclick=()=>{inquiries=inquiries.filter(x=>x.id!==b.dataset.inqDelete);write(inqKey,inquiries);renderAll()})}
function renderRecent(){const items=[...farms.map(x=>({type:'농장 등록',name:farmContactName(x),date:x.createdAt})),...inquiries.map(x=>({type:'상담 문의',name:x.name,date:x.createdAt}))].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,8);$('#recentRows').innerHTML=items.length?items.map(x=>`<tr><td>${esc(x.type)}</td><td>${esc(x.name)}</td><td>${formatDate(x.date)}</td></tr>`).join(''):'<tr><td colspan="3" class="empty">최근 활동이 없습니다.</td></tr>'}
function renderAll(){renderStats();renderFarms();renderInquiries();renderRecent()}
document.querySelectorAll('.admin-nav button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.admin-nav button').forEach(x=>x.classList.remove('is-active'));document.querySelectorAll('.panel').forEach(x=>x.classList.remove('is-active'));btn.classList.add('is-active');document.getElementById(btn.dataset.panel).classList.add('is-active')}));
renderAll();
})();
(()=>{
const typeLock=document.createElement('style');
typeLock.textContent=`
.service-hero-copy h1{font-size:var(--fs-display)!important;font-weight:470!important;line-height:1.12!important;letter-spacing:-.047em!important;max-width:760px!important}
.service-role-copy h2,.flow-head h2,.capability-intro h2,.service-cta-inner h2{font-size:var(--fs-h2)!important;font-weight:510!important;line-height:1.3!important;letter-spacing:-.038em!important}
.flow-card h3{font-size:var(--fs-h3)!important;font-weight:540!important;line-height:1.35!important;letter-spacing:-.03em!important}
@media(max-width:760px){.service-hero-copy h1{font-size:clamp(32px,9.5vw,40px)!important}.service-role-copy h2,.flow-head h2,.capability-intro h2,.service-cta-inner h2{font-size:clamp(26px,7.5vw,34px)!important}.flow-card h3{font-size:clamp(22px,7vw,28px)!important}}
`;
document.head.appendChild(typeLock);

const openHash=()=>{const id=location.hash.slice(1);if(!id)return;const target=document.getElementById(id);if(target&&target.tagName==='DETAILS'){target.open=true;setTimeout(()=>target.scrollIntoView({behavior:'smooth',block:'start'}),60)}};
openHash();
addEventListener('hashchange',openHash);
document.querySelectorAll('.service-detail').forEach(item=>item.addEventListener('toggle',()=>{if(item.open){document.querySelectorAll('.service-detail').forEach(other=>{if(other!==item)other.open=false})}}));
})();
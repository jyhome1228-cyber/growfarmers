(()=>{
const icons={
 'local-branding':'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 27V15"/><path d="M16 18c-6 0-9-3-9-8 6 0 9 3 9 8Z"/><path d="M16 14c0-5 3-8 9-8 0 5-3 8-9 8Z"/><path d="M10 27h12"/></svg>',
 'website':'<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="6" width="24" height="20" rx="2"/><path d="M4 11h24"/><path d="M8 8.5h.01M11 8.5h.01"/><path d="M9 16h7M9 20h14"/></svg>',
 'shop':'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 11h16l2 16H6l2-16Z"/><path d="M11 12V9a5 5 0 0 1 10 0v3"/><path d="M12 18h8"/></svg>',
 'detail-page':'<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="8" width="24" height="17" rx="2"/><path d="m8 21 5-5 4 4 3-3 4 4"/><circle cx="21.5" cy="12.5" r="2"/><path d="M11 8l2-3h6l2 3"/></svg>',
 'package':'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 4 10 5-10 5L6 9l10-5Z"/><path d="M6 9v14l10 5 10-5V9"/><path d="M16 14v14"/><path d="m11 6.5 10 5"/></svg>',
 'publication':'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 7h9a4 4 0 0 1 4 4v15H9a4 4 0 0 0-4 2V7Z"/><path d="M27 7h-5a4 4 0 0 0-4 4v15h5a4 4 0 0 1 4 2V7Z"/><path d="M9 12h5M9 16h5M22 12h2M22 16h2"/></svg>'
};
Object.entries(icons).forEach(([id,svg])=>{
 const detail=document.getElementById(id); if(!detail)return;
 const summary=detail.querySelector('summary'); if(!summary||summary.querySelector('.service-icon'))return;
 const icon=document.createElement('span'); icon.className='service-icon'; icon.innerHTML=svg;
 const no=summary.querySelector('.service-no'); no?.insertAdjacentElement('afterend',icon);
});
})();

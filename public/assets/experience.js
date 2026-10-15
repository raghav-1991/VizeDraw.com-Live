(() => {
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const groups=[...document.querySelectorAll('.nav-group')];
 function closeMenus(except){groups.forEach(g=>{if(g!==except){g.querySelector('.nav-trigger').setAttribute('aria-expanded','false');g.querySelector('.dropdown').hidden=true}})}
 groups.forEach(g=>{const b=g.querySelector('.nav-trigger'),d=g.querySelector('.dropdown');b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';closeMenus(g);b.setAttribute('aria-expanded',String(open));d.hidden=!open});g.addEventListener('focusout',e=>{if(!g.contains(e.relatedTarget)){b.setAttribute('aria-expanded','false');d.hidden=true}})});
 document.addEventListener('click',e=>{if(!e.target.closest('.nav-group'))closeMenus()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){const g=groups.find(x=>x.querySelector('.nav-trigger').getAttribute('aria-expanded')==='true');closeMenus();g?.querySelector('.nav-trigger').focus()}});
 const banner=document.querySelector('.feature-banner');
 if(banner){
  const slides=[...banner.querySelectorAll('[data-banner-slide]')],pause=banner.querySelector('[data-banner-pause]');
  let current=0,userPaused=reduced,hovered=false,focused=false,timer,advances=0;
  function display(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>{const active=n===current;s.classList.toggle('active',active);s.setAttribute('aria-hidden',String(!active));s.inert=!active});banner.querySelectorAll('[data-banner-go]').forEach((b,n)=>b.setAttribute('aria-pressed',String(n===current)));banner.querySelector('.banner-counter').textContent=String(current+1).padStart(2,'0')+' / 03';banner.dataset.activeSlide=String(current)}
  function schedule(){clearInterval(timer);const label=userPaused?'Play banner':'Pause banner';if(pause.getAttribute('aria-label')!==label)pause.setAttribute('aria-label',label);if(!userPaused&&!hovered&&!focused&&!document.hidden)timer=setInterval(()=>{banner.dataset.autoAdvances=String(++advances);display(current+1)},6500)}
  pause.addEventListener('click',()=>{userPaused=!userPaused;schedule()});
  banner.querySelector('[data-banner-next]').addEventListener('click',()=>{display(current+1);schedule()});banner.querySelector('[data-banner-prev]').addEventListener('click',()=>{display(current-1);schedule()});
  banner.querySelectorAll('[data-banner-go]').forEach(b=>b.addEventListener('click',()=>{display(Number(b.dataset.bannerGo));schedule()}));
  banner.addEventListener('mouseenter',()=>{hovered=true;schedule()});banner.addEventListener('mouseleave',()=>{hovered=false;schedule()});
  banner.addEventListener('focusin',()=>{focused=true;schedule()});banner.addEventListener('focusout',e=>{if(!banner.contains(e.relatedTarget)){focused=false;schedule()}});document.addEventListener('visibilitychange',schedule);display(0);schedule();
 }
 const screens=[...document.querySelectorAll('[data-sequence-screen]')];let manual=false,last='';
 const explanation={review:'1. Mark up: the supplier asks whether the Ø8 mounting holes are correct.',compare:'2. Compare: Revision B changes the mounting holes from Ø8 to Ø10.',resolve:'3. Record response: link the clarification to DEMO-210 / B for the next reviewer.'};
 function sequence(mode){if(!screens.length)return;last=mode;screens.forEach(s=>{const active=s.dataset.sequenceScreen===mode;s.classList.toggle('active',active);s.inert=!active;s.setAttribute('aria-hidden',String(!active))});document.querySelectorAll('[data-demo]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.demo===mode)));document.querySelector('[data-demo-caption]').textContent=explanation[mode]}
 document.querySelectorAll('[data-demo]').forEach(b=>b.addEventListener('click',()=>{manual=true;sequence(b.dataset.demo)}));
 let pending=false;
 function frame(){pending=false;if(!screens.length||reduced||manual)return;const s=document.querySelector('.product-preview');if(innerWidth>=1024&&innerHeight>=820){const r=s.getBoundingClientRect(),p=Math.max(0,Math.min(1,(104-r.top)/(r.height-innerHeight+104)));const mode=p<.34?'review':p<.68?'compare':'resolve';if(mode!==last)sequence(mode)}}
 const schedule=()=>{if(!pending){pending=true;requestAnimationFrame(frame)}};addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);sequence('review');schedule();
 if(!reduced&&'IntersectionObserver' in window){const els=document.querySelectorAll('.benefit-card,.explanation-box,.reading-grid>a,.team-links>a,.brand-explainer,.physical-grid');els.forEach(e=>e.classList.add('is-reveal'));document.documentElement.classList.add('motion-ready');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>observer.observe(e))}
})();

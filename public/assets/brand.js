(() => {
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const pause=document.querySelector('[data-banner-pause]');
 const replacePause=()=>{if(!pause)return;const playing=pause.getAttribute('aria-label')==='Pause banner';pause.innerHTML='<svg class="brand-icon" aria-hidden="true"><use href="/assets/icons.svg#'+(playing?'pause':'play')+'"></use></svg>'};
 if(pause){new MutationObserver(replacePause).observe(pause,{attributes:true,attributeFilter:['aria-label']});replacePause()}
 const header=document.querySelector('.site-header');
 const mobile=document.querySelector('.menu-toggle');
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobile?.getAttribute('aria-expanded')==='true'){mobile.click();mobile.focus()}});
 // Active path remains evident inside the shared dropdown navigation.
 document.querySelectorAll('.drop-link').forEach(a=>{if(a.pathname===location.pathname.replace(/\/$/,'')||a.pathname===location.pathname){a.setAttribute('aria-current','page');a.classList.add('current')}});
 if(reduced)return;
 let queued=false;
 const image=document.querySelector('.source-overlay');
 function frame(){queued=false;if(!image)return;const r=image.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const p=Math.max(0,Math.min(1,(innerHeight-r.top)/(innerHeight+r.height)));image.style.transform='translateY('+(18-36*p)+'px) rotate('+(6-4*p)+'deg)'}
 addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(frame)}},{passive:true});
 frame();
})();

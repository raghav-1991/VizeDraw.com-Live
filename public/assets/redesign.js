(() => {
 const groups=[...document.querySelectorAll('.nav-group')];
 function close(except){groups.forEach(g=>{if(g!==except){g.querySelector('.nav-trigger').setAttribute('aria-expanded','false');g.querySelector('.dropdown').hidden=true}})}
 groups.forEach(g=>{const b=g.querySelector('.nav-trigger'),d=g.querySelector('.dropdown');b.addEventListener('click',()=>{const open=b.getAttribute('aria-expanded')!=='true';close(g);b.setAttribute('aria-expanded',String(open));d.hidden=!open});g.addEventListener('focusout',e=>{if(!g.contains(e.relatedTarget)){b.setAttribute('aria-expanded','false');d.hidden=true}})});
 document.addEventListener('click',e=>{if(!e.target.closest('.nav-group'))close()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){const active=groups.find(g=>g.querySelector('.nav-trigger').getAttribute('aria-expanded')==='true');close();active?.querySelector('.nav-trigger').focus()}});
 const workspace=document.querySelector('.review-workspace');
 let manualDemo=false,scrollMode='';
 function demo(mode){if(!workspace)return;workspace.dataset.mode=mode;document.querySelectorAll('[data-demo]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.demo===mode)));workspace.querySelector('[data-demo-revision]').textContent=mode==='review'?'Revision A':'Revision B';workspace.querySelector('.review-paper>img').src=mode==='review'?'/assets/drawing.svg':'/assets/drawing-b.svg';workspace.querySelector('.change-flag').hidden=mode==='review';workspace.querySelector('.thread-answer').hidden=mode!=='resolve';workspace.querySelector('[data-demo-status]').textContent=mode==='resolve'?'Response recorded':'Open question';document.querySelector('[data-demo-caption]').textContent={review:'Review: place a question beside the drawing detail.',compare:'Compare: examine the revised note in its source drawing.',resolve:'Respond: keep the clarification connected to the review.'}[mode]}
 document.querySelectorAll('[data-demo]').forEach(b=>b.addEventListener('click',()=>{manualDemo=true;demo(b.dataset.demo)}));
 workspace?.querySelector('.drawing-pin').addEventListener('click',()=>{manualDemo=true;demo('resolve')});
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let pending=false;
 function frame(){pending=false;if(reduced)return;const paper=document.querySelector('.detail-paper');if(paper){const r=paper.parentElement.getBoundingClientRect();const p=Math.max(0,Math.min(1,-r.top/600));paper.style.transform=`rotate(${-8+p*8}deg) rotateY(${-9+p*9}deg) translateY(${p*24}px)`}if(workspace){const section=document.querySelector('.product-preview');if(innerWidth>800&&innerHeight>699&&!manualDemo){const r=section.getBoundingClientRect(),p=Math.max(0,Math.min(1,(88-r.top)/(r.height-innerHeight+88)));const mode=p<.34?'review':p<.68?'compare':'resolve';if(mode!==scrollMode){scrollMode=mode;demo(mode)}}}}
 const schedule=()=>{if(!pending){pending=true;requestAnimationFrame(frame)}};
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);schedule();
})();

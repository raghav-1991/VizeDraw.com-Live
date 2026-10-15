(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 document.querySelectorAll('[data-auto-demo]').forEach(section=>{
  const panels=[...section.querySelectorAll('[data-auto-panel]')],tabs=[...section.querySelectorAll('[data-auto-go]')],pause=section.querySelector('[data-auto-pause]');
  let index=0,paused=reduced,visible=false,focus=false,timer;
  const show=n=>{index=(n+panels.length)%panels.length;panels.forEach((p,i)=>{p.classList.toggle('active',i===index);p.inert=i!==index;p.setAttribute('aria-hidden',String(i!==index))});tabs.forEach((t,i)=>t.setAttribute('aria-pressed',String(i===index)));section.dataset.activeStep=String(index)};
  const schedule=()=>{clearInterval(timer);section.dataset.paused=String(paused||!visible||focus);const label=paused?'Play conveyor walkthrough':'Pause conveyor walkthrough';if(pause.getAttribute('aria-label')!==label){pause.setAttribute('aria-label',label);pause.textContent=paused?'Play walkthrough':'Pause walkthrough'}if(!paused&&visible&&!focus&&!document.hidden)timer=setInterval(()=>show(index+1),4800)};
  pause.addEventListener('click',()=>{paused=!paused;schedule()});tabs.forEach((t,i)=>t.addEventListener('click',()=>{show(i);schedule()}));
  section.addEventListener('focusin',()=>{focus=true;schedule()});section.addEventListener('focusout',e=>{if(!section.contains(e.relatedTarget)){focus=false;schedule()}});document.addEventListener('visibilitychange',schedule);
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule()},{threshold:.15}).observe(section);else{visible=true;schedule()}
  show(0);schedule();
 });
 if(!reduced&&'IntersectionObserver'in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('unique-entered');o.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.feature-snippet,.journal-card,.human-photo').forEach(e=>{e.classList.add('unique-reveal');o.observe(e)})}
})();

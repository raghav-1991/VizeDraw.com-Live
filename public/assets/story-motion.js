(()=>{
 const root=document.querySelector('[data-pain-carousel]');if(!root)return;
 const panels=[...root.querySelectorAll('[data-pain-slide]')],reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const stages={
  revision:['An earlier revision reaches site','The anchor pattern does not match','The assembly stops before it can seat'],
  detail:['A component reaches inspection','The bore tolerance is unclear','The next step needs a clarification'],
  decision:['A service route has changed','The source record moves out of view','The next reviewer cannot recover the why'],
  supplier:['One interface is under review','Two reviewers give different instructions','Engineering needs to reconcile the feedback'],
  repeat:['The drawing package enters review','More packages join the queue','Unanswered questions hold the handoff'],
  handoff:['The source includes open questions','The drawing moves to the next team','The review context is left behind']
 };
 const labels={
  revision:['Compare revisions','Locate the change','Record the applicable source'],
  detail:['Pinpoint the tolerance','Ask a specific question','Keep the clarification with the detail'],
  decision:['Recover the source revision','Find the recorded explanation','Keep the reasoning available'],
  supplier:['Bring in supplier feedback','Review the same interface','Keep the engineering response connected'],
  repeat:['Identify the open question','See the response in context','Make the next review action clear'],
  handoff:['Identify the drawing revision','Carry open questions forward','Keep the next team in context']
 };
 let active=-1,visible=false,localPaused=false;
 const icon=n=>'<svg class="brand-icon" aria-hidden="true"><use href="/assets/icons.svg#'+n+'"></use></svg>';
 function stopped(){return localPaused||root.dataset.motionPaused==='true'||document.hidden||!visible}
 function sync(){
  let i=Number(root.dataset.activePain||0);if(i!==active){active=i;localPaused=false;[i,(i+1)%panels.length].forEach(k=>{panels[k].querySelector('.pain-solution-art').loading='eager'});panels.forEach((p,k)=>{const v=p.querySelector('video');if(k!==i){v.pause();return}if(!v.getAttribute('src')){v.src=v.dataset.src;v.load()}else v.currentTime=0})}
  panels.forEach((p,k)=>{const v=p.querySelector('video'),b=p.querySelector('[data-film-toggle]');if(k!==active||stopped())v.pause();else v.play().catch(()=>{b.hidden=false;b.setAttribute('aria-label','Play scenario animation');b.innerHTML=icon('play')});if(k===active){b.setAttribute('aria-label',stopped()?'Play scenario animation':'Pause scenario animation');b.innerHTML=icon(stopped()?'play':'pause');p.dataset.solutionPaused=String(stopped())}})
 }
 panels.forEach(p=>{
  const v=p.querySelector('video'),b=p.querySelector('[data-film-toggle]'),key=p.querySelector('[data-story-key]').dataset.storyKey;
  b.addEventListener('click',()=>{localPaused=!localPaused;if(root.dataset.motionPaused==='true')root.querySelector('[data-pain-pause]').click();sync()});
  v.addEventListener('loadeddata',()=>{p.querySelector('.pain-film').classList.add('video-ready');b.hidden=false;sync()});
  v.addEventListener('error',()=>{p.querySelector('.pain-film').classList.remove('video-ready');b.hidden=true});
  v.addEventListener('timeupdate',()=>{const stage=Math.min(2,Math.floor(v.currentTime/2.67));p.dataset.storyStage=String(stage);p.querySelector('[data-film-phase]').textContent=stages[key][stage];p.querySelector('[data-solution-caption]').textContent=labels[key][stage]});
  p.querySelector('[data-film-phase]').textContent=stages[key][1];p.querySelector('[data-solution-caption]').textContent=labels[key][0];
 });
 new MutationObserver(sync).observe(root,{attributes:true,attributeFilter:['data-active-pain','data-motion-paused']});
 if('IntersectionObserver'in window)new IntersectionObserver(es=>{visible=es[0].isIntersecting;sync()},{threshold:.15}).observe(root.querySelector('.pain-box'));else visible=true;
 document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);sync();
})();

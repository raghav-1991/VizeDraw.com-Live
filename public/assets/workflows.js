(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 document.querySelectorAll('.walkthrough-video').forEach(video=>{
  const button=document.createElement('button');button.type='button';button.className='workflow-video-control';button.textContent='Play walkthrough';button.setAttribute('aria-label','Play drawing review walkthrough');video.parentElement.append(button);
  let userPaused=reduced;
  const update=()=>{button.textContent=video.paused?'Play walkthrough':'Pause walkthrough';button.setAttribute('aria-label',video.paused?'Play drawing review walkthrough':'Pause drawing review walkthrough')};
  video.addEventListener('play',update);video.addEventListener('pause',update);
  button.addEventListener('click',()=>{if(video.paused){userPaused=false;video.play().catch(()=>{})}else{userPaused=true;video.pause()}});
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!userPaused&&!document.hidden)video.play().catch(()=>{});else video.pause()}),{threshold:.3}).observe(video);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause()});
 });
 if(!reduced&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.removeAttribute('data-approaching');e.target.querySelector('.workflow-media').setAttribute('data-entered','');observer.unobserve(e.target)}}),{threshold:.18});document.querySelectorAll('.workflow-row').forEach(row=>{row.setAttribute('data-approaching','');observer.observe(row)})}
})();

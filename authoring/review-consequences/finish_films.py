"""Encode the original scene renders and assemble Animate-compatible review pieces."""
from pathlib import Path
import subprocess, json, shutil
from PIL import Image

ROOT=Path(__file__).resolve().parents[2]
BASE=Path(__file__).parent
FFMPEG=Path('C:/Users/abhishek.s/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0.1-full_build/bin/ffmpeg.exe')
FFPROBE=FFMPEG.with_name('ffprobe.exe')
SKILL=Path('C:/Users/abhishek.s/.codex/skills/animate')
NODE=Path('C:/Users/abhishek.s/AppData/Local/Programs/node-v24.19.0-win-x64/node.exe')
keys=['revision','detail','decision','supplier','repeat','handoff']
for key in keys:
    frames=BASE/'render-frames'/key
    revised=BASE/'render-frames-v2'/key
    if (revised/f'{key}-0127.png').exists():frames=revised
    chosen=[frames/f'{key}-{n:04d}.png' for n in range(1,129,2)]
    if not all(f.exists() for f in chosen):
        print(f'WAIT {key}: {sum(f.exists() for f in chosen)}/64 frames',flush=True)
        continue
    # Explicit return-to-opening endpoint gives the loop a continuous boundary.
    chosen[-1]=chosen[0]
    piece=BASE/key
    assets=piece/'assets';assets.mkdir(parents=True,exist_ok=True)
    src=piece/'src';src.mkdir(exist_ok=True)
    renders=piece/'renders';renders.mkdir(exist_ok=True)
    concat=piece/'frame-list.txt'
    concat.write_text(''.join(f"file '{f.as_posix()}'\nduration 0.125\n" for f in chosen)+f"file '{chosen[0].as_posix()}'\nduration 0.125\n",encoding='utf-8')
    target=ROOT/'dist/assets'/f'story-{key}.mp4'
    duration=0
    if target.exists() and target.stat().st_size>10000:
        probe=subprocess.run([str(FFPROBE),'-v','error','-show_entries','format=duration:stream=nb_frames','-of','json',str(target)],capture_output=True,text=True,check=True)
        info=json.loads(probe.stdout)
        duration=float(info['format']['duration']) if int(info['streams'][0]['nb_frames'])==240 else 0
    fresh_geometry=target.exists() and max(f.stat().st_mtime for f in chosen)>target.stat().st_mtime
    did_encode=duration<7.99 or fresh_geometry
    if did_encode:
        subprocess.run([str(FFMPEG),'-hide_banner','-loglevel','error','-y','-f','concat','-safe','0','-i',str(concat),'-vf','minterpolate=fps=30:mi_mode=blend,setpts=PTS-STARTPTS,tpad=stop_mode=clone:stop_duration=1,fps=30,trim=end_frame=240,setpts=N/(30*TB)','-frames:v','240','-an','-c:v','libx264','-preset','medium','-crf','21','-pix_fmt','yuv420p','-movflags','+faststart',str(target)],check=True)
    Image.open(chosen[40]).convert('RGB').save(ROOT/'dist/assets'/f'story-{key}-poster.webp','WEBP',quality=90)
    # Native, user-owned rendered frames are kept embedded in the review canvas.
    # The scene geometry and motion source remain render_scenes.py, not fabricated product UI.
    for i,f in enumerate(chosen):Image.open(f).convert('RGB').save(assets/f'f{i:03d}.jpg',quality=84)
    meta={'style':'original-rendered-3d','formats':['16:9'],'build':['src/head.html','src/render.js','src/tail.html'],'review':{'deadMax':3}}
    (piece/'piece.json').write_text(json.dumps(meta,indent=2),encoding='utf-8')
    (src/'head.html').write_text('<!doctype html><html><head><meta charset="utf-8"><title>Original drawing-review story</title></head><body><canvas id="film" width="960" height="540"></canvas><script>\n"use strict";\n',encoding='utf-8')
    (src/'render.js').write_text('''const STYLE={ones:true};
const TIMELINE={width:960,height:540,fps:30,frames:240,bpm:120,cuts:[],shots:[{id:1,t0:0,t1:8,title:"Original scene"}]};
window.TIMELINE=TIMELINE;
function past(t,c){return t>=c}
function shotAtFrame(){return TIMELINE.shots[0]}
window.renderFrame=(t,canvas=document.querySelector('canvas'))=>{let g=canvas.getContext('2d');g.drawImage(ASSETS['f'+Math.min(63,Math.floor(Math.max(0,t)*8)).toString().padStart(3,'0')+'.jpg'],0,0,960,540)};
''',encoding='utf-8')
    (src/'tail.html').write_text('</script></body></html>',encoding='utf-8')
    subprocess.run([str(NODE),str(SKILL/'tools/build.mjs'),str(piece)],check=True)
    shutil.copyfile(target,renders/'final.mp4')
    decoded=piece/'frames';decoded.mkdir(exist_ok=True)
    if did_encode or not (decoded/'f0239.png').exists():
        subprocess.run([str(FFMPEG),'-hide_banner','-loglevel','error','-y','-i',str(target),'-start_number','0',str(decoded/'f%04d.png')],check=True)
    (piece/'LOG.md').write_text('Original Blender geometry rendered at 960 × 540. 64 deterministic samples over an eight-second loop; encoded to silent 30 fps H.264 with interpolation and fast-start metadata. Animate review canvas embeds the same native frames. Visual inspection must cover geometry, source text and the loop; canvas text checks do not inspect text embedded in the native renders.\n',encoding='utf-8')
    print(f'READY {key}: {target.stat().st_size:,} bytes',flush=True)

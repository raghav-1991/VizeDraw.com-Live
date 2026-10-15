"""Original deterministic Blender scenes for the approved silent review stories."""
import bpy, math, sys, argparse
from pathlib import Path
from mathutils import Vector

args = sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else []
p = argparse.ArgumentParser()
p.add_argument('--scene', default='revision')
p.add_argument('--out', required=True)
p.add_argument('--still', type=int)
p.add_argument('--width', type=int, default=960)
p.add_argument('--samples', type=int, default=24)
opt = p.parse_args(args)
OUT = Path(opt.out)
if not OUT.is_absolute(): OUT = Path(__file__).resolve().parents[2] / OUT
OUT.mkdir(parents=True, exist_ok=True)
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
S = bpy.context.scene
S.render.engine = 'BLENDER_EEVEE_NEXT'
S.eevee.taa_render_samples = opt.samples
S.render.resolution_x = opt.width; S.render.resolution_y = round(opt.width*9/16)
S.render.resolution_percentage = 100
S.render.fps = 16; S.frame_start = 1; S.frame_end = 128
S.frame_step = 2
S.render.use_overwrite = False
S.render.image_settings.file_format = 'PNG'
S.view_settings.view_transform = 'AgX'
S.world.use_nodes = True
nodes = S.world.node_tree.nodes
sky = nodes.new('ShaderNodeTexSky'); sky.sky_type='NISHITA'; sky.sun_elevation=math.radians(32); sky.sun_rotation=math.radians(130)
S.world.node_tree.links.new(sky.outputs['Color'], nodes['Background'].inputs['Color'])
nodes['Background'].inputs['Strength'].default_value = .10
bpy.ops.object.light_add(type='SUN', location=(4,-5,8))
sun=bpy.context.object;sun.data.energy=2.0;sun.data.angle=.08;sun.data.color=(1,.86,.68)
sun.rotation_euler=(math.radians(32),math.radians(-26),math.radians(-35))

def material(name, color, metal=0, rough=.45, noise=0):
    m=bpy.data.materials.new(name); m.diffuse_color=(*color,1); m.use_nodes=True
    n=m.node_tree.nodes; b=n.get('Principled BSDF'); b.inputs['Base Color'].default_value=(*color,1)
    b.inputs['Metallic'].default_value=metal; b.inputs['Roughness'].default_value=rough
    if noise:
        tex=n.new('ShaderNodeTexNoise'); tex.inputs['Scale'].default_value=noise; tex.inputs['Detail'].default_value=3
        ramp=n.new('ShaderNodeValToRGB'); ramp.color_ramp.elements[0].color=(*(c*.85 for c in color),1); ramp.color_ramp.elements[1].color=(*(min(1,c*1.08) for c in color),1)
        m.node_tree.links.new(tex.outputs['Fac'],ramp.inputs['Fac']); m.node_tree.links.new(ramp.outputs['Color'],b.inputs['Base Color'])
        bump=n.new('ShaderNodeBump'); bump.inputs['Strength'].default_value=.13; bump.inputs['Distance'].default_value=.004 if metal else .023
        m.node_tree.links.new(tex.outputs['Fac'],bump.inputs['Height']); m.node_tree.links.new(bump.outputs['Normal'],b.inputs['Normal'])
    return m

steel=material('Galvanized steel',(.32,.37,.42),.9,.24,95)
silver=material('Machined aluminium',(.68,.72,.76),.92,.24,210)
concrete=material('Aggregate concrete',(.42,.4,.36),0,.87,24)
dark=material('Charcoal coating',(.055,.075,.09),.45,.34)
navy=material('Marine navy enamel',(.025,.1,.18),.52,.28)
copper=material('Drawn copper',(.56,.22,.085),.9,.26,160)
brass=material('Brass fittings',(.62,.42,.16),.86,.25)
mint=material('Review context teal',(.055,.56,.55),.28,.33)
amber=material('Open question amber',(.9,.36,.06),.12,.4)
red=material('Unresolved red',(.63,.075,.055),.1,.47)
paper=material('Uncoated drawing paper',(.89,.88,.83),0,.85,170)
white=material('Plaster',(.77,.72,.64),0,.88,33)
line=material('Drawing ink',(.09,.15,.16),0,.75)

def finish(o, mat, bevel=0):
    if mat: o.data.materials.append(mat)
    if bevel:
        b=o.modifiers.new('Manufactured edge radius','BEVEL'); b.width=bevel; b.segments=3
        o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
    return o
def cube(name,loc,size,mat,bevel=.02):
    bpy.ops.mesh.primitive_cube_add(size=1,location=loc); o=bpy.context.object; o.name=name; o.dimensions=size
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    return finish(o,mat,bevel)
def cyl(name,loc,r,depth,mat,vertices=48,axis='Z',bevel=.015):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices,radius=r,depth=depth,location=loc)
    o=bpy.context.object; o.name=name
    if axis=='X':o.rotation_euler[1]=math.pi/2
    if axis=='Y':o.rotation_euler[0]=math.pi/2
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    return finish(o,mat,bevel)
def pipe(name,points,r,mat):
    c=bpy.data.curves.new(name,'CURVE'); c.dimensions='3D'; c.resolution_u=12; c.bevel_depth=r; c.bevel_resolution=4
    sp=c.splines.new('BEZIER'); sp.bezier_points.add(len(points)-1)
    for b,pt in zip(sp.bezier_points,points):b.co=pt; b.handle_left_type='AUTO'; b.handle_right_type='AUTO'
    o=bpy.data.objects.new(name,c); bpy.context.collection.objects.link(o); o.data.materials.append(mat); return o
def seg(name,a,b,r,mat):
    v=Vector(b)-Vector(a); o=cyl(name,(Vector(a)+Vector(b))/2,r,v.length,mat,vertices=24)
    o.rotation_euler=v.to_track_quat('Z','Y').to_euler(); return o
def torus(name,loc,major,minor,mat,axis='Z'):
    bpy.ops.mesh.primitive_torus_add(major_segments=48,minor_segments=12,location=loc,major_radius=major,minor_radius=minor)
    o=bpy.context.object; o.name=name
    if axis=='X':o.rotation_euler[1]=math.pi/2
    if axis=='Y':o.rotation_euler[0]=math.pi/2
    return finish(o,mat)
def hole(o,loc,r,depth,axis='Z'):
    tool=cyl('Boolean hole',loc,r,depth,None,axis=axis,bevel=0)
    mod=o.modifiers.new('True opening','BOOLEAN'); mod.operation='DIFFERENCE'; mod.object=tool
    bpy.context.view_layer.objects.active=o
    while o.modifiers.find(mod.name)>0:bpy.ops.object.modifier_move_up(modifier=mod.name)
    bpy.ops.object.modifier_apply(modifier=mod.name)
    bpy.data.objects.remove(tool,do_unlink=True)
def bolt(loc,r=.075,length=.25):
    x,y,z=loc; shaft=cyl('Anchor threaded shaft',(x,y,z+length/2),r,length,steel)
    for i in range(9):torus('Thread crest',(x,y,z+length*i/10),r,.006,steel)
    cyl('Hex nut',(x,y,z+.045),r*1.8,.075,steel,vertices=6)
    cyl('Washer',(x,y,z+.012),r*2.15,.023,steel)
    return shaft
def label(text,loc,size=.2,mat=line,rot=(0,0,0)):
    c=bpy.data.curves.new('Technical note','FONT'); c.body=text; c.size=size; c.extrude=.0004; c.align_x='CENTER'
    o=bpy.data.objects.new(text,c); bpy.context.collection.objects.link(o); o.location=loc; o.rotation_euler=rot; o.data.materials.append(mat); return o
def note(text,loc,color=amber,size=.22):
    o=cube('Review note',loc,(1.5,.035,.65),paper,.03)
    label(text,(loc[0],loc[1]-.025,loc[2]-.06),size,color,(math.pi/2,0,0)); return o
def drawing(loc,size=(2.1,1.5),title='CONNECTION / REV B',kind='connection'):
    before=set(bpy.context.scene.objects)
    x,y,z=loc; w,h=size; o=cube('Technical drawing sheet',loc,(w,h,.014),paper,.003)
    for yy in [-h*.43,h*.43]:seg('Sheet frame',(x-w*.45,y+yy,z+.012),(x+w*.45,y+yy,z+.012),.003,line)
    for xx in [-w*.45,w*.45]:seg('Sheet frame',(x+xx,y-h*.43,z+.012),(x+xx,y+h*.43,z+.012),.003,line)
    if kind=='connection':
        for xx in [-w*.22,w*.22]:
            for yy in [-h*.19,h*.19]:torus('Drawing bolt hole',(x+xx,y+yy,z+.013),.064,.003,line)
        for xx in [-w*.24,w*.24]:seg('Section edge',(x+xx,y-h*.22,z+.014),(x+xx,y+h*.22,z+.014),.004,line)
    elif kind=='rail':
        for xx in [-.2,.2]:
            for off in [-.025,.025]:seg('Track plan',(x+xx+off,y-h*.24,z+.016),(x+xx+off,y+h*.3,z+.016),.003,line)
            for i in range(9):
                yy=-h*.2+i*h*.05;seg('Sleeper plan',(x+xx-.055,y+yy,z+.016),(x+xx+.055,y+yy,z+.016),.002,line)
    elif kind=='solar':
        for xx in [-w*.25,0,w*.25]:
            for yy in [-h*.1,h*.16]:
                for dy in [-h*.085,h*.085]:seg('Solar plan',(x+xx-w*.075,y+yy+dy,z+.016),(x+xx+w*.075,y+yy+dy,z+.016),.003,line)
                for dx in [-w*.075,w*.075]:seg('Solar plan',(x+xx+dx,y+yy-h*.085,z+.016),(x+xx+dx,y+yy+h*.085,z+.016),.003,line)
    elif kind=='route':
        pipe('Route plan',[(x-w*.3,y-h*.2,z+.018),(x-w*.3,y+h*.1,z+.018),(x+w*.2,y+h*.1,z+.018),(x+w*.2,y+h*.3,z+.018)],.003,line)
    label(title,(x,y-h*.34,z+.016),min(.085,w/23),line)
    for child in set(bpy.context.scene.objects)-before-{o}:
        child.parent=o;child.matrix_parent_inverse=o.matrix_world.inverted()
    return o
def key(o,prop,frame,value):
    setattr(o,prop,value); o.keyframe_insert(data_path=prop,frame=frame)
def empty(name):
    o=bpy.data.objects.new(name,None); bpy.context.collection.objects.link(o); return o
def parent(objects,p):
    for o in objects:o.parent=p
def light(loc,power,size,color=(1,1,1)):
    bpy.ops.object.light_add(type='AREA',location=loc); o=bpy.context.object; o.data.energy=power; o.data.shape='DISK'; o.data.size=size; o.data.color=color
    o.rotation_euler=(Vector((0,0,1))-o.location).to_track_quat('-Z','Y').to_euler()
def camera(loc,target,lens=48,end=None):
    bpy.ops.object.camera_add(location=loc); c=bpy.context.object; S.camera=c; c.data.lens=lens
    def aim(pos):c.location=pos;c.rotation_euler=(Vector(target)-c.location).to_track_quat('-Z','Y').to_euler()
    aim(loc); c.keyframe_insert(data_path='location',frame=1); c.keyframe_insert(data_path='rotation_euler',frame=1)
    if end:aim(end)
    c.keyframe_insert(data_path='location',frame=110);c.keyframe_insert(data_path='rotation_euler',frame=110)
    aim(loc);c.keyframe_insert(data_path='location',frame=128);c.keyframe_insert(data_path='rotation_euler',frame=128)
    return c
def ground(mat=concrete):cube('Location ground',(0,0,-.12),(200,200,.2),mat,.0)

def revision():
    ground(material('Construction hardstand',(.28,.23,.17),0,.93,55)); cube('Concrete footing',(0,0,.25),(3.6,2.8,.6),concrete,.045)
    for x in [-.88,.88]:
        for y in [-.65,.65]:
            bolt((x,y,.55),.09,.37)
            # Real site chalk marks locate the anchor setting, not UI glow.
            seg('Setting mark',(x-.18,y,.557),(x+.18,y,.557),.008,red)
    assembly=empty('One rigid column assembly')
    plate=cube('Outdated baseplate',(0,0,.13),(2.75,2.05,.18),steel,.025)
    for x in [-1.13,1.13]:
        for y in [-.65,.65]:
            hole(plate,(x,y,.13),.125,.7)
            torus('Old hole position',(x,y,.224),.15,.008,amber).parent=assembly
    parent([plate],assembly)
    for loc,sz in [((0,0,1.6),(.09,.64,2.8)),((0,-.34,1.6),(.7,.09,2.8)),((0,.34,1.6),(.7,.09,2.8))]:cube('Column I section',loc,sz,steel,.018).parent=assembly
    for x in [-.29,.29]:
        g=cube('Welded stiffener',(x,0,.43),(.055,.62,.5),steel,.008);g.parent=assembly
    for y in [-.35,.35]:seg('Weld seam',(-.38,y,.24),(.38,y,.24),.012,dark).parent=assembly
    key(assembly,'location',1,(0,0,1.05));key(assembly,'location',65,(0,0,.92));key(assembly,'location',104,(0,0,.92));key(assembly,'location',128,(0,0,1.05))
    drawing((2.0,-.45,.012),title='COLUMN BASE / REV A')
    for xx in [-5,5]:
        for yy in [4,9]:cube('Background structure',(xx,yy,2.4),(.18,.24,5),dark,.02)
    for zz in [2.6,4.8]:cube('Background beam',(0,4,zz),(10,.18,.24),steel,.02)
    cube('Site material stack',(-4,2,.25),(2.1,.7,.5),steel,.02)
    yellow=material('Construction yellow',(.72,.4,.035),.2,.5)
    cube('Crane mast',(-4,7,3),(.24,.24,6),yellow,.02)
    cube('Crane boom',(-1,7,5.5),(6,.22,.22),yellow,.02)
    light((3,-4,7),950,5,(1,.85,.68));light((-4,-1,4),600,5,(.7,.83,1))
    camera((5.1,-7.1,4.4),(0,0,1.05),55,(4.4,-6.7,3.3))

def detail():
    ground(material('Inspection blue-grey',(.095,.13,.18),0,.9,85))
    cube('Inspection mat',(0,0,.02),(5,3.5,.1),dark,.07)
    base=cube('Aerospace hinge base',(0,0,.23),(2.5,1.8,.35),silver,.08)
    for x in [-.93,.93]:
        for y in [-.59,.59]:hole(base,(x,y,.23),.13,.8)
    for x in [-.55,.55]:
        ear=cube('Machined hinge lug',(x,0,.93),(.36,1.12,1.2),silver,.04)
        hole(ear,(x,0,1.07),.32,.9,axis='X')
        torus('Machined bore rim',(x-.19,0,1.07),.32,.013,steel,axis='X')
    cal=empty('Inspection caliper')
    cube('Caliper rail',(0,-1.05,.32),(2.7,.12,.08),steel,.012).parent=cal
    for x in [-.65,.5]:cube('Caliper jaw',(x,-.8,.32),(.08,.65,.08),steel,.012).parent=cal
    cube('Caliper readout',(.35,-1.05,.42),(.52,.28,.18),dark,.025).parent=cal
    key(cal,'location',1,(-.6,-.1,0));key(cal,'location',52,(0,.22,0));key(cal,'location',102,(0,.22,0));key(cal,'location',128,(-.6,-.1,0))
    drawing((1.8,.45,.12),size=(1.8,1.4),title='BORE TOLERANCE: ?')
    torus('Question at the bore',(.76,0,1.07),.365,.012,amber,axis='X')
    light((2,-3,6),1400,4,(.82,.9,1));light((-4,-1,3),850,3)
    camera((4.5,-6.5,4.5),(0,0,.68),58,(3.8,-5.8,3.4))

def decision():
    ground(white)
    cube('Cutaway slab',(0,0,.16),(4.5,2,.35),concrete,.04)
    for x in [-1.65,1.65]:cube('Wall cutaway',(x,.38,2),(.75,.65,3.7),white,.025)
    cube('Wall lintel',(0,.38,3.65),(3.4,.65,.42),white,.025)
    for x in [-1.2,0,1.2]:cube('Wall studs',(x,.43,1.9),(.075,.08,3.5),steel,.006)
    points=[(-.95,-.1,.42),(-.95,-.1,1.0),(-.95,-.1,1.45),(-.6,-.1,1.62),(.4,-.1,1.62),(.62,-.1,1.92),(.62,-.1,3.4)]
    pipe('Revised copper service route',points,.075,copper)
    for x,z in [(-.95,.6),(-.95,1.1),(.62,2.4),(.62,3.1)]:torus('Pipe support',(x,-.1,z),.085,.023,steel)
    ghost=pipe('Earlier route reference',[(-.95,.05,.42),(-.95,.05,2.4),(.62,.05,2.4),(.62,.05,3.4)],.023,amber)
    rec=empty('Reasoning record departing')
    d=drawing((2.4,-.55,.42),size=(1.8,1.45),title='ROUTE CHANGE / SOURCE',kind='route');d.parent=rec
    key(rec,'location',1,(0,0,0));key(rec,'location',58,(.1,0,0));key(rec,'location',98,(2.7,0,0));key(rec,'location',128,(0,0,0))
    note('WHY THIS ROUTE?',(.05,-.34,2.64),amber,.16)
    light((2,-4,6),1100,4,(1,.84,.67));light((-4,-1,3),650,4)
    camera((5,-8,4.9),(.25,0,1.7),54,(4.4,-7.2,3.8))

def supplier():
    deck=material('Marine deck',(.14,.22,.27),.45,.65,50);ground(deck)
    cube('Equipment skid',(0,0,.25),(4.4,2.5,.28),steel,.055)
    for x in [-1.55,1.55]:cube('Skid rail',(x,0,.06),(.16,2.6,.2),dark,.02)
    cyl('Pump housing',(-.65,0,.93),.57,1.15,navy,axis='X')
    for x in [-1.2,-.12]:
        cyl('Pump cover flange',(x,0,.93),.63,.12,steel,axis='X')
        for i in range(8):
            a=i*math.tau/8;cyl('Cover fastener',(x,math.cos(a)*.51,.93+math.sin(a)*.51),.055,.15,steel,vertices=6,axis='X')
    pipe('Marine pipework',[(-.15,0,1.35),(-.15,0,1.95),(.45,0,2.0),(1.0,0,1.75),(1.0,0,.9)],.13,steel)
    cyl('Valve body',(1.0,0,1.1),.23,.55,brass)
    torus('Valve handwheel',(1.0,0,1.72),.28,.028,navy)
    cyl('Valve stem',(1.0,0,1.53),.035,.4,brass)
    for i in range(4):a=i*math.tau/4;seg('Wheel spoke',(1,0,1.72),(1+math.cos(a)*.27,math.sin(a)*.27,1.72),.018,navy)
    cyl('Shared review flange',(.75,-.68,.8),.31,.12,steel,axis='Y')
    pipe('Connected inlet',[(-.65,-.1,.93),(-.65,-.55,.93),(.25,-.55,.93),(.75,-.55,.8),(.75,-.7,.8)],.12,steel)
    for i in range(8):
        a=i*math.tau/8;cyl('Interface bolts',(.75+math.cos(a)*.24,-.77,.8+math.sin(a)*.24),.028,.09,steel,vertices=6,axis='Y')
    first=empty('First reviewer');second=empty('Second reviewer')
    a=note('KEEP CURRENT SIZE',(-1.12,-.52,2.55),mint,.13);a.parent=first
    b=note('CHANGE THE SIZE',(1.45,-.53,2.55),amber,.13);b.parent=second
    seg('Comment leader A',(-1.12,-.55,2.2),(.75,-.79,.8),.011,mint).parent=first
    seg('Comment leader B',(1.45,-.55,2.2),(.75,-.79,.8),.011,amber).parent=second
    for o,delay in [(first,28),(second,68)]:
        key(o,'scale',1,(.001,.001,.001));key(o,'scale',delay,(.001,.001,.001));key(o,'scale',delay+14,(1,1,1));key(o,'scale',111,(1,1,1));key(o,'scale',128,(.001,.001,.001))
    for y in [3,5]:
        seg('Ship railing',(-8,y,1),(8,y,1),.035,steel)
        for x in range(-7,8,2):seg('Railing stanchion',(x,y,0),(x,y,1.2),.035,steel)
    light((3,-4,7),1350,5,(.78,.88,1));light((-4,1,4),900,4)
    camera((5.4,-8.4,4.7),(0,0,1.25),52,(4.8,-7.4,3.7))

def repeat():
    gravel=material('Rail gravel',(.18,.2,.15),0,.95,45);ground(gravel)
    wood=material('Timber sleepers',(.14,.085,.045),0,.91,90)
    for xx in [-1.4,1.4]:
        for yy in [i*.45 for i in range(-18,19)]:cube('Railway sleeper',(xx,yy,.02),(1.8,.18,.13),wood,.015)
        for x in [xx-.54,xx+.54]:cube('Rail head',(x,0,.15),(.075,18,.13),steel,.015)
    cube('Worksite drawing platform',(0,-2.65,.45),(3.4,2.2,.7),concrete,.04)
    for i in range(3):
        pack=empty('Waiting drawing package '+str(i)); objs=[]
        for z in range(4):objs.append(drawing((-.99+i*.99,-2.6,.84+z*.018),size=(.91,1.25),title='REVIEW',kind='rail'))
        objs.append(cube('Pending review tab',(-.99+i*.99,-2.02,.93),(.19,.12,.018),amber,.002));parent(objs,pack)
        key(pack,'location',1,(0,3+i,0));key(pack,'location',22+i*26,(0,3+i,0));key(pack,'location',42+i*26,(0,0,0));key(pack,'location',112,(0,0,0));key(pack,'location',128,(0,3+i,0))
    note('AWAITING RESPONSE',(0,-1.1,1.55),amber,.135)
    # A staged civil-work background makes the project consequence visible.
    for x in [-4,4]:cube('Bridge pier',(x,4,1.5),(.7,1.5,3),concrete,.035)
    cube('Bridge span',(0,4,3),(8.5,1.5,.35),steel,.04)
    light((2,-4,8),950,6,(.87,.9,1));light((-5,1,5),650,5)
    camera((5,-8,6.1),(0,-1,1),48,(4.8,-7,4.9))

def handoff():
    sand=material('Desert sand',(.58,.4,.23),0,.95,40);ground(sand)
    cells=material('Solar glass',(.025,.085,.18),.62,.19)
    for row in range(3):
        for col in range(4):
            x=-2.7+col*1.8;y=1+row*1.5
            panel=cube('Photovoltaic panel',(x,y,.8),(1.65,1.12,.06),cells,.014);panel.rotation_euler[0]=math.radians(19)
            for dx in [-.8,.8]:
                rail=cube('Module frame',(x+dx,y,.8),(.025,1.15,.08),silver,.004);rail.rotation_euler[0]=panel.rotation_euler[0]
            for dx in [-.54,-.27,0,.27,.54]:
                l=cube('Cell divisions',(x+dx,y,.84),(.008,1.06,.006),steel,.001);l.rotation_euler[0]=panel.rotation_euler[0]
            for yy in [-.35,.35]:cube('Panel support',(x,y+yy,.37),(.055,.055,.75),steel,.008)
    cube('Inverter cabinet',(3.3,1.1,.85),(.8,.55,1.7),white,.05)
    for y in [1.8,3.3,4.8]:pipe('Solar cable route',[(-3.4,y,.09),(2.5,y,.09),(2.8,1.1,.09),(3.1,1.1,.8)],.023,dark)
    cube('Site drawing support',(0,-2,.22),(3.5,2,.5),concrete,.04)
    page=drawing((-1,-2,.5),size=(1.6,1.15),title='SITE PLAN / REV C',kind='solar')
    for x in [-1.4,-.8,-.35]:cube('Unresolved review context',(x,-1.35,.54),(.28,.19,.025),amber,.004)
    key(page,'location',1,(-1,-2,.5));key(page,'location',44,(-1,-2,.5));key(page,'location',90,(1,-2,.5));key(page,'location',111,(1,-2,.5));key(page,'location',128,(-1,-2,.5))
    note('DRAWING ONLY',(1.15,-1.3,1.2),line,.15)
    light((1,-4,7),1250,5,(1,.8,.58));light((-5,1,4),600,5,(.73,.84,1))
    camera((7,-9,7),(0,.6,.7),49,(6.5,-8,5.7))

globals()[opt.scene]()
S.render.film_transparent=False
if opt.still is not None:
    S.frame_set(opt.still);S.render.filepath=str(OUT/f'{opt.scene}-look.png');bpy.ops.render.render(write_still=True)
else:
    S.render.filepath=str(OUT/f'{opt.scene}-');bpy.ops.render.render(animation=True)

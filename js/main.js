const $=s=>document.querySelector(s);
const cards=(id,arr,cls)=>{$(id).innerHTML=arr.map(([k,n,c,t,r])=>`<div class="card" style="--c:${c}"><div class="in">${k?`<b class="k">${k}</b>`:''}<h3>${n}</h3><em>${r||''}</em><p>${t}</p></div></div>`).join('')};
cards('#br',[
['水','Water Breathing','#3aa8ff','Flowing, adaptive forms that bend like a river around any opponent.','Calm &amp; adaptable'],
['炎','Flame Breathing','#ff6a2b','Blazing, powerful strikes driven by an unbroken fighting spirit.','Fierce &amp; bold'],
['雷','Thunder Breathing','#ffd23f','One explosive dash, delivered faster than the eye can follow.','Swift &amp; sudden'],
['風','Wind Breathing','#5fe3b0','Wild, slashing gales that tear through everything in their path.','Savage &amp; sweeping'],
['霞','Mist Breathing','#9fb8ff','Elusive footwork that blurs the target of every strike.','Fleeting &amp; subtle'],
['恋','Love Breathing','#ff7ab8','A whip-like blade that lashes through flexible, sweeping arcs.','Graceful &amp; unusual'],
['日','Sun Breathing','#ffb52e','The original style, with blazing, all-consuming strikes in a dance of sunfire.','Origin &amp; radiant'],
['月','Moon Breathing','#8a5cff','Crescent blades that stretch and linger, wielded by the demon Kokushibo.','Lunar &amp; relentless'],
['岩','Stone Breathing','#b8b8b8','Heavy, crushing power from an unshakable stance.','Immovable &amp; mighty'],
['音','Sound Breathing','#e4c36a','Explosive rhythm and sound-driven strikes that read the enemy’s tempo.','Rhythmic &amp; explosive'],
['蛇','Serpent Breathing','#6fd890','Twisting, slithering cuts that strike from impossible angles.','Sly &amp; twisting'],
['蟲','Insect Breathing','#b07cff','Needle-quick thrusts that deliver poison like a stinger.','Precise &amp; venomous'],
['花','Flower Breathing','#ffa6c8','Delicate, flowing cuts that bloom like petals around the user.','Graceful &amp; flowing'],
['獣','Beast Breathing','#6f8cff','Wild, instinct-driven slashes with twin jagged blades.','Feral &amp; instinctive'],
['火','Hinokami Kagura','#ff7a2b','The Kamado family’s fire dance, with sweeping, sun-bright arcs.','Dance of the Fire God'],
['集','Total Concentration Breathing','#7ef0d2','A training breathing that keeps the body at peak strength at all times.','Constant &amp; disciplined'],
['凪','Dead Calm','#7ab8ff','Giyu’s own form, which calms and neutralizes attacks around him.','Water: Eleventh Form']]);
cards('#ch',[
['','Tanjiro Kamado','#3aa8ff','A gentle, relentless slayer determined to cure his sister.','Water Breathing'],
['','Nezuko Kamado','#ff7ab8','Turned demon, yet she clings to her humanity and protects her brother.','Demon sister'],
['','Zenitsu Agatsuma','#ffd23f','Terrified when awake, astonishing the moment he falls asleep.','Thunder Breathing'],
['','Inosuke Hashibira','#6f8cff','A wild, boar-masked fighter who charges in with twin blades.','Beast Breathing'],
['','Giyu Tomioka','#2e7fd6','The quiet, reserved Water Hashira who first spared Nezuko.','Water Hashira'],
['','Kyojuro Rengoku','#ff6a2b','A booming, warm-hearted Hashira who burns for others.','Flame Hashira'],
['','Shinobu Kocho','#b07cff','Smiling and sharp, she fights with a poison-tipped blade.','Insect Hashira'],
['','Muichiro Tokito','#9fb8ff','A young prodigy whose mind drifts like passing clouds.','Mist Hashira'],
['','Mitsuri Kanroji','#ff7ab8','Cheerful and incredibly strong, wielding a flexible blade.','Love Hashira'],
['','Tengen Uzui','#e4c36a','A flamboyant former shinobi who fights to a rhythm.','Sound Hashira'],
['','Kanao Tsuyuri','#ff9ac8','A quiet, skilled swordswoman who reads every muscle movement of her opponent.','Flower Breathing'],
['','Genya Shinazugawa','#c9c9c9','A hot-headed fighter with a shotgun, whose body can take on traits of the demons he eats.','Demon-eater'],
['','Gyomei Himejima','#9aa7b8','The towering, blind Stone Hashira, widely seen as the strongest of his generation.','Stone Hashira'],
['','Obanai Iguro','#6fd890','A strict, serpent-eyed Hashira who trusts almost no one.','Serpent Hashira'],
['','Sanemi Shinazugawa','#5fe3b0','A fierce, scarred Wind Hashira with a short fuse and a ferocious blade.','Wind Hashira'],
['','Kanae Kocho','#ffa6c8','The gentle former Flower Hashira and Shinobu’s elder sister.','Former Flower Hashira'],
['','Sabito','#3aa8ff','A young swordsman who guided Tanjiro’s training in spirit.','Water Breathing'],
['','Makomo','#ff9a6a','A fox-masked spirit who guided Tanjiro with kindness and humor.','Water Breathing'],
['','Sakonji Urokodaki','#6ac0ff','The former Water Hashira who trained Tanjiro and other young slayers.','Master of Water'],
['','Kagaya Ubuyashiki','#d9c6ff','The calm, farsighted leader of the Demon Slayer Corps.','Corps leader'],
['','Tamayo','#e0a8ff','A demon doctor who works against Muzan with medicine and cunning.','Demon ally'],
['','Yushiro','#9fd0ff','Tamayo’s devoted companion, fiercely loyal to her.','Demon ally'],
['','Jigoro Kuwajima','#ffd23f','The former Thunder Hashira who trained Zenitsu and Kaigaku.','Master of Thunder'],
['','Hotaru Haganezuka','#ff9a3c','A temperamental swordsmith who is fiercely devoted to his blades.','Swordsmith'],
['','Tanjuro Kamado','#ff6a2b','Tanjiro’s father, who passed down the Hinokami Kagura dance.','Kamado family'],
['','Aoi Kanzaki','#c9a0ff','The sharp-tongued nurse of the Butterfly Estate who cares for injured slayers.','Butterfly Estate'],
['','Kiyo, Sumi and Naho','#ffb3d9','The three cheerful helpers of the Butterfly Estate.','Butterfly Estate'],
['','Murata','#aab4c8','A loyal rank-and-file slayer who keeps turning up when it matters.','Corps member'],
['','Shinjuro Rengoku','#ff6a2b','Kyojuro’s father and a former Flame Hashira.','Rengoku family'],
['','Senjuro Rengoku','#ff8a4a','Kyojuro’s younger brother, who carries on his spirit.','Rengoku family'],
['','Kie Kamado','#ffd0d0','Tanjiro’s gentle, hard-working mother.','Kamado family'],
['','Kotetsu','#ff9a3c','A young swordsmith who forges blades in Swordsmith Village.','Swordsmith'],
['','Makio, Suma and Hinatsuru','#e4c36a','Tengen’s three wives, all skilled kunoichi.','Kunoichi']]);
cards('#dm',[['','Muzan Kibutsuji','#ff2d4a','The origin of all demons, ruthless and obsessed with survival.','Progenitor']]);
cards('#um',[
['壱','Kokushibo','#8a5cff','The oldest and strongest of the twelve, a six-eyed swordsman whose blade throws crescent slashes.','Upper Moon One'],
['弐','Doma','#6fd8ff','Cheerful and smiling, he leads a cult and feels nothing for the people he devours.','Upper Moon Two'],
['参','Akaza','#ff5a7a','A martial artist who fights barehanded and respects only raw strength.','Upper Moon Three'],
['肆','Hantengu','#c9b458','A timid, tearful demon who splits into clones, each ruled by one emotion.','Upper Moon Four'],
['肆','Nakime','#d9a066','A biwa player whose music reshapes the Infinity Castle; she took Hantengu’s rank.','Upper Moon Four (successor)'],
['伍','Gyokko','#4cd6a8','A vain, pot-dwelling artist who sees his gruesome work as beauty.','Upper Moon Five'],
['陸','Daki','#ff7ab8','A proud, beautiful demon who fights with living obi sashes.','Upper Moon Six'],
['陸','Gyutaro','#9ad04a','Daki’s brother, a sickle-wielding demon with poisoned blades.','Upper Moon Six'],
['陸','Kaigaku','#ffd23f','Zenitsu’s former training rival who became a demon and took the sixth rank after Daki and Gyutaro fell.','Upper Moon Six (successor)']]);
cards('#lm',[
['壱','Enmu','#c04cff','A sleep-inducing demon who traps victims in dreams to feed on their despair.','Lower Moon One'],
['弐','Rokuro','#d85f5f','A tough demon who asked Muzan for more of his blood and paid for it.','Lower Moon Two'],
['参','Wakuraba','#b8604a','A scarred demon who was killed by Muzan during the Lower Moon purge.','Lower Moon Three'],
['肆','Mukago','#9a6ab0','A fearful demon who ran from the very presence of a Hashira.','Lower Moon Four'],
['伍','Rui','#d8d8ff','Weaves a false family from threads of fear and control.','Lower Moon Five'],
['陸','Kamanue','#7a8aa0','Took the sixth seat and was destroyed by Muzan almost at once.','Lower Moon Six'],
['陸','Kyogai','#c8884a','The drum demon of Tsuzumi Mansion, who held the sixth seat before Muzan cast him out.','Former Lower Moon Six']]);
$('#tl').innerHTML=[
['ARC 01','Final Selection','Tanjiro begins his training and faces the deadly selection.'],
['ARC 02','Mount Natagumo','A web of fear and a family held together by control.'],
['ARC 03','Mugen Train','Rengoku joins the fight aboard a train that hides a nightmare.'],
['ARC 04','Entertainment District','Tengen leads a mission through a neon-lit pleasure quarter.'],
['ARC 05','Swordsmith Village','Two Upper Rank demons descend on the blade forgers.'],
['ARC 06','Hashira Training','The Corps sharpens itself for the final war.'],
['ARC 07','Infinity Castle','The decisive battle erupts in the demons’ shifting fortress.']
].map(([a,t,d])=>`<div class="arc"><b>${a}</b><h3>${t}</h3><p>${d}</p></div>`).join('');
document.querySelectorAll('.card').forEach(c=>{const i=c.firstElementChild;
c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;i.style.transform=`rotateY(${x*34}deg) rotateX(${-y*34}deg) translateZ(14px)`};
c.onmouseleave=()=>i.style.transform=''});

/* shared helpers */
const dpr=Math.min(devicePixelRatio||1,matchMedia("(hover:none)").matches?1.75:2.5);
const mk=c=>{const r=new THREE.WebGLRenderer({canvas:c,antialias:true,alpha:true});r.setPixelRatio(dpr);return r};
const fit=(r,cam,c)=>{const w=c.clientWidth,h=c.clientHeight;if(!w||!h)return;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};
const vis={};
document.querySelectorAll('#hero,#demons,#stage').forEach(el=>new IntersectionObserver(e=>vis[el.id]=e[0].isIntersecting).observe(el));

/* hero scene */
const hc=$('#hc'),hr=mk(hc),hs=new THREE.Scene(),hcam=new THREE.PerspectiveCamera(50,1,.1,100);hcam.position.z=7;
hs.add(new THREE.AmbientLight(0x88aadd,.5));
const l1=new THREE.PointLight(0x5ee0ff,2,20);l1.position.set(3,3,4);hs.add(l1);
const l2=new THREE.PointLight(0xff2d4a,1.4,20);l2.position.set(-4,-2,3);hs.add(l2);
const sword=new THREE.Group();
const blade=new THREE.Mesh(new THREE.BoxGeometry(.16,3.6,.05),new THREE.MeshStandardMaterial({color:0x1b2430,metalness:.9,roughness:.25,emissive:0x0c4a66,emissiveIntensity:.8}));blade.position.y=.9;
const edge=new THREE.Mesh(new THREE.BoxGeometry(.03,3.6,.06),new THREE.MeshBasicMaterial({color:0x9ff0ff}));edge.position.set(.07,.9,0);
const guard=new THREE.Mesh(new THREE.CylinderGeometry(.34,.34,.07,4),new THREE.MeshStandardMaterial({color:0xc9a24a,metalness:.8,roughness:.3}));guard.rotation.y=Math.PI/4;guard.position.y=-.9;
const grip=new THREE.Mesh(new THREE.CylinderGeometry(.075,.075,1,12),new THREE.MeshStandardMaterial({color:0x2a2f3a,roughness:.7}));grip.position.y=-1.45;
sword.add(blade,edge,guard,grip);sword.rotation.z=.25;hs.add(sword);
const N=700,pp=new Float32Array(N*3);for(let i=0;i<N;i++){pp[i*3]=(Math.random()-.5)*16;pp[i*3+1]=(Math.random()-.5)*10;pp[i*3+2]=(Math.random()-.5)*10}
const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pp,3));
const pts=new THREE.Points(pg,new THREE.PointsMaterial({size:.05,color:0x8fe8ff,transparent:true,opacity:.75}));hs.add(pts);
let mx=0,my=0;
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;$('#ht').style.transform=`translate(${-mx*24}px,${-my*16}px)`});

/* demon particles (2D) */
const rc=$('#rc'),rx=rc.getContext('2d');let RW,RH;
const rs=Array.from({length:80},()=>({x:Math.random(),y:Math.random(),s:Math.random()*2+.5,v:Math.random()*.0012+.0004}));
const rfit=()=>{RW=rc.width=rc.clientWidth;RH=rc.height=rc.clientHeight};

/* dojo scene */
const dc=$('#dc'),dr=mk(dc),ds=new THREE.Scene(),dcam=new THREE.PerspectiveCamera(50,1,.1,100);
dr.setClearColor(0x0a0b10,1);ds.fog=new THREE.Fog(0x0a0b10,9,26);
ds.add(new THREE.AmbientLight(0x6677aa,.7));
const dl=new THREE.PointLight(0xffa860,1.6,16);dl.position.set(0,3.3,0);ds.add(dl);
const M=(c,o={})=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.8},o));
const floor=new THREE.Mesh(new THREE.CylinderGeometry(6.5,6.5,.2,48),M(0x2b1e14));floor.position.y=-.1;ds.add(floor);
const ring=new THREE.Mesh(new THREE.TorusGeometry(3,.03,8,64),new THREE.MeshBasicMaterial({color:0x5ee0ff}));ring.rotation.x=Math.PI/2;ring.position.y=.02;ds.add(ring);
const clk=[];
const reg=(o,t,d)=>{o.userData.info=[t,d];o.userData.p=0;clk.push(o);ds.add(o);return o};
[[-4,-4],[4,-4],[-4,4],[4,4]].forEach(([x,z],i)=>{const p=new THREE.Mesh(new THREE.CylinderGeometry(.28,.3,3.4,16),M(0x5a3a22));p.position.set(x,1.7,z);reg(p,'Cedar Pillar','Holds the dojo roof. Rough marks show years of training strikes.')});
[[-2,-1.5],[2,-1.5],[0,2.4]].forEach(([x,z],i)=>{const g=new THREE.Group(),s=M(0xc8a35a);
const b=new THREE.Mesh(new THREE.CylinderGeometry(.3,.38,1.5,14),s);b.position.y=.75;
const h=new THREE.Mesh(new THREE.SphereGeometry(.3,16,12),s);h.position.y=1.8;
const a=new THREE.Mesh(new THREE.BoxGeometry(1.3,.14,.14),M(0x5a3a22));a.position.y=1.2;
g.add(b,h,a);g.position.set(x,0,z);g.rotation.y=Math.random()*3;reg(g,'Straw Training Dummy','Practice target for cutting forms. Breathing drills begin here.')});
const rack=new THREE.Group();
const rb=new THREE.Mesh(new THREE.BoxGeometry(2,.12,.5),M(0x5a3a22));rb.position.y=.9;rack.add(rb);
[-.6,0,.6].forEach(x=>{const s=new THREE.Mesh(new THREE.BoxGeometry(.06,1.6,.05),M(0x1f2733,{metalness:.8,roughness:.3,emissive:0x0c3a52}));s.position.set(x,1.8,0);s.rotation.z=.08;rack.add(s)});
const rl=new THREE.Mesh(new THREE.BoxGeometry(2,.12,.5),M(0x5a3a22));rl.position.y=2.7;rack.add(rl);
rack.position.set(0,0,-5.2);reg(rack,'Sword Rack','Practice blades with dark steel. A fresh edge glows in lantern light.');
const lan=new THREE.Mesh(new THREE.SphereGeometry(.32,20,16),new THREE.MeshBasicMaterial({color:0xffb347}));lan.position.set(0,3.3,0);reg(lan,'Hanging Lantern','The warm light of the dojo. It sways gently overhead.');
const gong=new THREE.Group();
const gd=new THREE.Mesh(new THREE.CylinderGeometry(.7,.7,.08,32),M(0xc9a24a,{metalness:.9,roughness:.3}));gd.rotation.x=Math.PI/2;gd.position.y=1.5;
const gf=new THREE.Mesh(new THREE.TorusGeometry(.8,.06,10,32),M(0x5a3a22));gf.position.y=1.5;
gong.add(gd,gf);gong.position.set(5,0,0);gong.rotation.y=-Math.PI/2;reg(gong,'Training Gong','Marks the start and the end of each session.');
let th=.6,ph=1.15,rad=11,drag=null,moved=0;
const place=()=>{dcam.position.set(rad*Math.sin(ph)*Math.sin(th),rad*Math.cos(ph),rad*Math.sin(ph)*Math.cos(th));dcam.lookAt(0,1.2,0)};place();
dc.addEventListener('pointerdown',e=>{drag=[e.clientX,e.clientY];moved=0;dc.setPointerCapture(e.pointerId);dc.style.cursor='grabbing'});
dc.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag[0],dy=e.clientY-drag[1];moved+=Math.abs(dx)+Math.abs(dy);th-=dx*.006;ph=Math.max(.35,Math.min(1.5,ph-dy*.006));drag=[e.clientX,e.clientY];place()});
dc.addEventListener('pointerup',e=>{drag=null;dc.style.cursor='grab';if(moved>6)return;
const r=dc.getBoundingClientRect(),v=new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),rc2=new THREE.Raycaster();
rc2.setFromCamera(v,dcam);const h=rc2.intersectObjects(clk,true)[0];if(!h)return;
let o=h.object;while(o&&!o.userData.info)o=o.parent;if(!o)return;
o.userData.p=1;showInfo(o.userData.info)});
dc.addEventListener('wheel',e=>{e.preventDefault();rad=Math.max(6,Math.min(16,rad+e.deltaY*.01));place()},{passive:false});

const fitAll=()=>{fit(hr,hcam,hc);fit(dr,dcam,dc);rfit()};addEventListener('resize',fitAll);fitAll();

let t=0;
(function loop(){requestAnimationFrame(loop);t+=.016;
if(vis.hero){sword.rotation.y+=.012;sword.position.y=Math.sin(t*1.2)*.15;pts.rotation.y+=.0006;pts.position.y=Math.sin(t*.5)*.1;
hcam.position.x+=(mx*2.2-hcam.position.x)*.05;hcam.position.y+=(-my*1.4-hcam.position.y)*.05;hcam.lookAt(0,0,0);hr.render(hs,hcam)}
if(vis.demons){rx.clearRect(0,0,RW,RH);rs.forEach(p=>{p.y-=p.v;p.x+=Math.sin(t+p.s*9)*.0006;if(p.y<0){p.y=1;p.x=Math.random()}
rx.beginPath();rx.arc(p.x*RW,p.y*RH,p.s,0,7);rx.fillStyle=`rgba(255,${40+p.s*20|0},60,${.35+p.s*.15})`;rx.shadowColor='#ff2d4a';rx.shadowBlur=12;rx.fill()})}
if(vis.stage){lan.position.x=Math.sin(t*1.3)*.2;dl.position.x=lan.position.x;dl.intensity=1.5+Math.sin(t*7)*.15;
clk.forEach(o=>{o.userData.p*=.9;o.scale.setScalar(1+.15*o.userData.p)});dr.render(ds,dcam)}
})();

/* ---- cinematic layer ---- */
const gc=document.createElement('canvas');gc.width=gc.height=128;const gx=gc.getContext('2d'),gg=gx.createRadialGradient(64,64,0,64,64,64);
gg.addColorStop(0,'rgba(210,230,255,.9)');gg.addColorStop(.3,'rgba(150,190,255,.3)');gg.addColorStop(1,'rgba(150,190,255,0)');gx.fillStyle=gg;gx.fillRect(0,0,128,128);
const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(gc),blending:THREE.AdditiveBlending,depthWrite:false}));glow.scale.set(10,10,1);glow.position.set(-4.5,2.6,-6);
const moon=new THREE.Mesh(new THREE.SphereGeometry(1,32,24),new THREE.MeshBasicMaterial({color:0xeaf2ff}));moon.position.copy(glow.position);hs.add(glow,moon);
const rp=new THREE.Points(pg.clone(),new THREE.PointsMaterial({size:.06,color:0xff2d4a,transparent:true,opacity:.7}));rp.rotation.y=2;hs.add(rp);
addEventListener('pointermove',()=>document.querySelectorAll('.bk').forEach(b=>b.style.transform=`translate(${mx*b.dataset.d}px,${my*b.dataset.d}px)`));
document.querySelectorAll('.card').forEach(c=>c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),i=c.firstElementChild;i.style.setProperty('--mx',(e.clientX-r.left)/r.width*100+'%');i.style.setProperty('--my',(e.clientY-r.top)/r.height*100+'%')}));

/* breathing effects */
const col=['#3aa8ff','#ff6a2b','#ffd23f','#5fe3b0','#cfd8ff','#ff7ab8'];
const FX=[...document.querySelectorAll('#br .card')].map((c,i)=>{const cv=document.createElement('canvas');cv.className='fx';c.firstElementChild.prepend(cv);
const f={cv,x:cv.getContext('2d'),i,h:0,P:Array.from({length:30},()=>({a:Math.random(),b:Math.random(),s:Math.random()}))};
c.addEventListener('mouseenter',()=>{cv.width=cv.clientWidth;cv.height=cv.clientHeight;f.h=1});c.addEventListener('mouseleave',()=>f.h=0);return f});
function draw(f,t){const{cv,x,P,i}=f,w=cv.width,h=cv.height,c=col[i];x.clearRect(0,0,w,h);x.strokeStyle=x.fillStyle=c;x.lineWidth=2;x.shadowColor=c;x.shadowBlur=14;
if(i==0){for(let k=0;k<3;k++){x.beginPath();for(let a=0;a<=w;a+=6){const y=h*(.6+k*.12)+Math.sin(a*.03+t*3+k*2)*10;a?x.lineTo(a,y):x.moveTo(a,y)}x.globalAlpha=.7-k*.18;x.stroke()}}
else if(i==1||i==5){P.forEach(p=>{const q=((p.b+t*.25*(.5+p.s))%1)*h,y=i==1?h-q:q,xx=p.a*w+Math.sin(t*3+p.s*9)*14;x.globalAlpha=.8;x.beginPath();x.arc(xx,y,2+p.s*3,0,7);x.fill()})}
else if(i==2){if(Math.sin(t*14)>.5){x.globalAlpha=.95;x.beginPath();let px=w*(.2+P[0].a*.6),py=0;x.moveTo(px,py);while(py<h){py+=h/7;px+=(Math.random()-.5)*50;x.lineTo(px,py)}x.stroke()}}
else if(i==3){P.forEach(p=>{const xx=((p.a+t*.6*(.5+p.s))%1)*w,y=p.b*h;x.globalAlpha=.6;x.beginPath();x.moveTo(xx,y);x.quadraticCurveTo(xx+30,y-6,xx+70*p.s+20,y);x.stroke()})}
else{x.shadowBlur=0;x.globalAlpha=1;P.slice(0,8).forEach(p=>{const xx=((p.a+t*.04)%1)*w,y=p.b*h,g=x.createRadialGradient(xx,y,0,xx,y,70);g.addColorStop(0,'rgba(200,215,255,.45)');g.addColorStop(1,'rgba(200,215,255,0)');x.fillStyle=g;x.fillRect(xx-70,y-70,140,140)})}}

/* Infinity Castle */
const cc=$('#cc'),cr=mk(cc),cs=new THREE.Scene(),ccam=new THREE.PerspectiveCamera(60,1,.1,200);
cr.setClearColor(0x05060a,1);cs.fog=new THREE.FogExp2(0x05060a,.035);cs.add(new THREE.AmbientLight(0x445577,.7));
const cL1=new THREE.PointLight(0xff2d4a,3,40),cL2=new THREE.PointLight(0x3a7bff,3,40);cs.add(cL1,cL2);
const rooms=new THREE.Group();cs.add(rooms);const rc3=[0xff2d4a,0x3a7bff,0xffb347],rm=M(0x14161f);
for(let i=0;i<46;i++){const g=new THREE.BoxGeometry(2+Math.random()*4,1.5+Math.random()*3,2+Math.random()*4),m=new THREE.Mesh(g,rm);
m.add(new THREE.LineSegments(new THREE.EdgesGeometry(g),new THREE.LineBasicMaterial({color:rc3[i%3]})));
m.position.set((Math.random()-.5)*50,(Math.random()-.5)*30,-Math.random()*70);m.rotation.set(Math.random()*.9-.45,Math.random()*3,Math.random()*.9-.45);m.userData.s=(Math.random()-.5)*.004;rooms.add(m)}
const sm=M(0x6b4a2e);
for(let s=0;s<8;s++){const st=new THREE.Group();for(let k=0;k<12;k++){const b=new THREE.Mesh(new THREE.BoxGeometry(1.8,.18,.7),sm);b.position.set(0,k*.35,k*.55);st.add(b)}
st.position.set((Math.random()-.5)*40,(Math.random()-.5)*24,-Math.random()*70);st.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3);st.userData.s=(Math.random()-.5)*.005;rooms.add(st)}
const LN=400,lp=new Float32Array(LN*3),lc=new Float32Array(LN*3),cl=[[1,.7,.3],[1,.2,.3],[.3,.5,1]];
for(let i=0;i<LN;i++){lp.set([(Math.random()-.5)*60,(Math.random()-.5)*36,-Math.random()*80],i*3);lc.set(cl[i%3],i*3)}
const lg=new THREE.BufferGeometry();lg.setAttribute('position',new THREE.BufferAttribute(lp,3));lg.setAttribute('color',new THREE.BufferAttribute(lc,3));
cs.add(new THREE.Points(lg,new THREE.PointsMaterial({size:.22,vertexColors:true,transparent:true,opacity:.9,blending:THREE.AdditiveBlending,depthWrite:false})));
new IntersectionObserver(e=>vis.cst=e[0].isIntersecting).observe($('#cst'));
addEventListener('resize',()=>fit(cr,ccam,cc));fit(cr,ccam,cc);

let T=0;(function L(){requestAnimationFrame(L);T+=.016;
if(vis.hero){rp.rotation.y-=.0008;glow.material.opacity=.85+Math.sin(T)*.1}
FX.forEach(f=>f.h&&draw(f,T));
if(vis.cst){const z=-6+Math.sin(T*.1)*26;ccam.position.x+=(mx*10-ccam.position.x)*.03;ccam.position.y+=(-my*6-ccam.position.y)*.03;ccam.position.z=z;ccam.lookAt(mx*14,-my*8,z-30);
cL1.position.set(ccam.position.x+8,ccam.position.y+4,z-8);cL2.position.set(ccam.position.x-8,ccam.position.y-4,z-14);
rooms.children.forEach(o=>o.rotation.y+=o.userData.s);cr.render(cs,ccam)}})();

/* music: generative ambient pad + plucks (starts on click) */
let AC,mg,on=0;
$('#mu').onclick=()=>{if(!AC){AC=new(window.AudioContext||window.webkitAudioContext)();mg=AC.createGain();mg.gain.value=0;mg.connect(AC.destination);
const lf=AC.createBiquadFilter();lf.type='lowpass';lf.frequency.value=700;lf.connect(mg);
[73.4,110,146.8,220].forEach((f,i)=>{const o=AC.createOscillator(),g=AC.createGain(),l=AC.createOscillator(),lg2=AC.createGain();o.type=i%2?'triangle':'sine';o.frequency.value=f;g.gain.value=.12;l.frequency.value=.07+i*.03;lg2.gain.value=.05;l.connect(lg2);lg2.connect(g.gain);l.start();o.connect(g);g.connect(lf);o.start()});
const sc=[293.7,329.6,392,440,523.3,587.3];
setInterval(()=>{if(!on)return;const o=AC.createOscillator(),g=AC.createGain(),n=AC.currentTime;o.type='triangle';o.frequency.value=sc[Math.random()*6|0]*(Math.random()<.3?.5:1);g.gain.setValueAtTime(0,n);g.gain.linearRampToValueAtTime(.18,n+.01);g.gain.exponentialRampToValueAtTime(.001,n+2.4);o.connect(g);g.connect(mg);o.start();o.stop(n+2.5)},1800)}
on=!on;AC.resume();mg.gain.linearRampToValueAtTime(on?.5:0,AC.currentTime+.8);$('#mu').classList.toggle('on',on);$('#mu').textContent=on?'♪ Music: On':'♪ Music: Off'};

/* page transitions + reveals */
const wp=$('#wipe');let busy=0;
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();if(busy)return;busy=1;const tg=$(a.getAttribute('href')),h2=tg.querySelector('h2');
wp.textContent=h2?h2.textContent:'DEMON SLAYER';wp.className='in';
setTimeout(()=>{tg.scrollIntoView({behavior:'instant'});wp.className='out';setTimeout(()=>{wp.className='';busy=0},480)},480)}));
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.05,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('section:not(#hero) h2,section .sub,.grid,.tl,#stage,#cst').forEach(el=>{el.classList.add('rv');io.observe(el)});

/* ---- 3D credit (3840px text textures, layered extrusion) ---- */
const cdc=$('#cdc'),cdr=mk(cdc),cds=new THREE.Scene(),cdcam=new THREE.PerspectiveCamera(40,1,.1,100),grp=new THREE.Group();cdcam.position.z=9;cds.add(grp);
function tex(txt,w,h,sz,fill,glow,ls){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');if(ls)x.letterSpacing=ls;
do{x.font=`800 ${sz}px Cinzel,"Noto Serif JP",Georgia,serif`;sz-=4}while(x.measureText(txt).width>w*.9&&sz>20);
x.textAlign='center';x.textBaseline='middle';if(glow){x.shadowColor=glow;x.shadowBlur=sz*.35}
x.fillStyle=typeof fill=='function'?fill(x,h):fill;x.fillText(txt,w/2,h/2);
const t=new THREE.CanvasTexture(c);t.anisotropy=cdr.capabilities.getMaxAnisotropy();return t}
const NM='DHEERAJ SATHEESH PILLAI',W=3840,H=560,PW=12,PH=PW*H/W;
function build(){const g1=new THREE.PlaneGeometry(PW,PH),g2=new THREE.PlaneGeometry(PW,PW*160/W);
const lay=(map,color,z,bl,op,g,y)=>{const m=new THREE.Mesh(g||g1,new THREE.MeshBasicMaterial({map,color,transparent:true,depthWrite:false,blending:bl||THREE.NormalBlending,opacity:op||1}));m.position.set(0,y||0,z);grp.add(m);return m};
const front=tex(NM,W,H,230,(x,h)=>{const g=x.createLinearGradient(0,h*.25,0,h*.75);g.addColorStop(0,'#fff');g.addColorStop(1,'#7fe5ff');return g},'#5ee0ff','8px');
const flat=tex(NM,W,H,230,'#fff',0,'8px'),halo=tex(NM,W,H,230,'#ff2d4a','#ff2d4a','8px');
cnm.halo=lay(halo,0xffffff,-.8,THREE.AdditiveBlending,.9);cnm.halo.scale.set(1.04,1.04,1);
for(let k=22;k>=1;k--)cnm.flat.push(lay(flat,new THREE.Color(0x0b3a52).lerp(new THREE.Color(0x3aa8ff),1-k/22),-k*.03));
cnm.front=lay(front,0xffffff,.02);
ctop=lay(tex('DESIGNED & BUILT BY',W,160,70,'#9fb8ff',0,'30px'),0xffffff,0,0,1,g2,PH/2+.6);
cbot=lay(tex('DEMON SLAYER: KIMETSU NO YAIBA FAN ARCHIVE',W,160,70,'#ff5a7a','#ff2d4a','24px'),0xffffff,0,0,1,g2,-PH/2-.6);
if(typeof lang!='undefined'&&lang=='ja')setCred(true)}
let ctop,cbot;const cnm={flat:[]};const NMJ='ディーラジ・サティーシュ・ピライ';
function setCred(ja){if(!ctop)return;{const fr=tex(ja?NMJ:NM,W,H,230,(x,h)=>{const g=x.createLinearGradient(0,h*.25,0,h*.75);g.addColorStop(0,'#fff');g.addColorStop(1,'#7fe5ff');return g},'#5ee0ff','8px'),fl=tex(ja?NMJ:NM,W,H,230,'#fff',0,'8px'),ha=tex(ja?NMJ:NM,W,H,230,'#ff2d4a','#ff2d4a','8px');[[cnm.front,fr],[cnm.halo,ha],...cnm.flat.map(m=>[m,fl])].forEach(([m,t])=>{if(m.material.map&&m.material.map!==t)m.material.map.dispose();m.material.map=t;m.material.needsUpdate=true})}[[ctop,ja?'制作':'DESIGNED & BUILT BY','#9fb8ff',0,ja?'12px':'30px'],[cbot,ja?'鬼滅の刃 ファンアーカイブ':'DEMON SLAYER: KIMETSU NO YAIBA FAN ARCHIVE','#ff5a7a','#ff2d4a',ja?'10px':'24px']].forEach(([m,t,f,g,l])=>{if(m.material.map)m.material.map.dispose();m.material.map=tex(t,W,160,70,f,g,l);m.material.needsUpdate=true})}
(document.fonts?document.fonts.load('800 100px Cinzel'):Promise.resolve()).then(build,build);
const NP=260,pa=new Float32Array(NP*3);for(let i=0;i<NP;i++)pa.set([(Math.random()-.5)*16,(Math.random()-.5)*7,(Math.random()-.5)*6],i*3);
const pq=new THREE.BufferGeometry();pq.setAttribute('position',new THREE.BufferAttribute(pa,3));
const cpt=new THREE.Points(pq,new THREE.PointsMaterial({size:.05,color:0x7fe5ff,transparent:true,opacity:.8}));cds.add(cpt);
const fitC=()=>{fit(cdr,cdcam,cdc);grp.scale.setScalar(Math.min(1,cdcam.aspect*6.2/PW))};addEventListener('resize',fitC);fitC();
new IntersectionObserver(e=>vis.crd=e[0].isIntersecting).observe($('#crd'));
$('#crd').classList.add('rv');io.observe($('#crd'));
(function C(){requestAnimationFrame(C);if(!vis.crd)return;
grp.rotation.y+=((mx*.8+Math.sin(T*.5)*.15)-grp.rotation.y)*.05;grp.rotation.x+=(my*.45-grp.rotation.x)*.05;cpt.rotation.y+=.001;cdr.render(cds,cdcam)})();

/* play-your-own-track: loads a local audio file in the viewer's browser (nothing is uploaded) */
const base=$('#mu').onclick,fi=document.createElement('input');let aud=null;fi.type='file';fi.accept='audio/*';
const upd=()=>{const p=aud&&!aud.paused;$('#mu').classList.toggle('on',!!p);$('#mu').textContent=p?'♪ Music: On':'♪ Music: Off'};
$('#ld').onclick=()=>fi.click();
fi.onchange=()=>{const f=fi.files[0];if(!f)return;if(on)base();if(aud){aud.pause();URL.revokeObjectURL(aud.src)}
aud=new Audio(URL.createObjectURL(f));aud.loop=true;aud.volume=.7;aud.play().then(upd,upd);$('#ld').textContent='♫ '+f.name.replace(/\.[^.]+$/,'').slice(0,20)};
$('#mu').onclick=()=>{if(aud){aud.paused?aud.play():aud.pause();upd()}else base()};

/* Blood Demon Art VFX */
const aura=(x,w,h,t,P)=>{P.forEach(p=>{const y=h-((p.b+t*.3*(.5+p.s))%1)*h;x.beginPath();x.arc(p.a*w+Math.sin(t*2+p.s*8)*8,y,2+p.s*3,0,7);x.fill()});const r=((t*.6)%1)*w*.6;x.globalAlpha=1-r/(w*.6);x.beginPath();x.arc(w/2,h*.6,r,0,7);x.stroke()};
const bolt=(x,w,h)=>{if(Math.sin(T*14)>.45){x.beginPath();let px=w*(.2+Math.random()*.6),py=0;x.moveTo(px,py);while(py<h){py+=h/7;px+=(Math.random()-.5)*50;x.lineTo(px,py)}x.stroke()}};
const DE={
'Muzan Kibutsuji':['#ff2d4a','Blood whips & shapeshifting',(x,w,h,t)=>{for(let k=0;k<7;k++){x.beginPath();x.moveTo(w*(.1+k*.13),h);for(let i=1;i<=8;i++)x.lineTo(w*(.1+k*.13)+Math.sin(t*3+k+i*.8)*i*9,h-i*h/8);x.stroke()}}],
'Kokushibo':['#8a5cff','Moon Breathing crescent blades',(x,w,h,t)=>{for(let k=0;k<6;k++){const a=(t*1.2+k/6)%1;x.globalAlpha=1-a;x.beginPath();x.arc(w/2,h*.55+(k-3)*14,30+a*w*.7,-.9+k*.35,.1+k*.35);x.stroke()}}],
'Doma':['#6fd8ff','Cryokinetic frost',(x,w,h,t,P)=>{P.forEach(p=>{const an=-Math.PI*(.1+.8*p.a),d=((p.b+t*.5)%1)*h,px=w/2+Math.cos(an)*d*.9,py=h+Math.sin(an)*d,z=5+p.s*7;x.globalAlpha=1-d/h;x.beginPath();x.moveTo(px,py-z);x.lineTo(px+z*.5,py);x.lineTo(px,py+z);x.lineTo(px-z*.5,py);x.closePath();x.fill()})}],
'Akaza':['#ff5a7a','Compass Needle',(x,w,h,t)=>{const cx=w/2,cy=h*.55;for(let k=0;k<2;k++){x.beginPath();x.arc(cx,cy,40+k*26,0,7);x.stroke()}for(let i=0;i<16;i++){const a=i/16*6.283+t*(i%2?1:-1)*.6,r2=66+(i%2)*10;x.beginPath();x.moveTo(cx+Math.cos(a)*40,cy+Math.sin(a)*40);x.lineTo(cx+Math.cos(a)*r2,cy+Math.sin(a)*r2);x.stroke()}const r=((t*.8)%1)*w*.7;x.globalAlpha=1-r/(w*.7);x.beginPath();x.arc(cx,cy,r,0,7);x.stroke()}],
'Hantengu':['#c9b458','Emotion clones',(x,w,h,t)=>{['#ff4d4d','#ffd23f','#4da6ff','#9be36b'].forEach((c,k)=>{x.fillStyle=x.shadowColor=c;const a=t*1.4+k*1.57;x.beginPath();x.arc(w/2+Math.cos(a)*w*.28,h*.5+Math.sin(a*1.3)*h*.25,10,0,7);x.fill()})}],
'Nakime':['#d9a066','Biwa spatial shift',(x,w,h,t)=>{for(let k=0;k<5;k++){const sx=Math.abs(Math.sin(t*2+k));x.strokeRect(w*(.1+k*.17)+(1-sx)*14,h*.2+(k%2)*20,28*sx+2,h*.5)}x.beginPath();for(let a=0;a<=w;a+=6){const y=h*.9+Math.sin(a*.1+t*20)*3;a?x.lineTo(a,y):x.moveTo(a,y)}x.stroke()}],
'Gyokko':['#4cd6a8','Vase teleport & fish strikes',(x,w,h,t,P)=>{P.slice(0,10).forEach(p=>{const px=((p.a+t*.3*(.5+p.s))%1)*w,py=p.b*h+Math.sin(t*3+p.s*9)*6,l=10+p.s*8;x.beginPath();x.ellipse(px,py,l,4+p.s*3,0,0,7);x.fill();x.beginPath();x.moveTo(px-l,py);x.lineTo(px-l-8,py-5);x.lineTo(px-l-8,py+5);x.fill()})}],
'Daki':['#ff7ab8','Living obi sashes',(x,w,h,t)=>{x.lineWidth=7;x.globalAlpha=.75;for(let k=0;k<4;k++){x.beginPath();for(let a=0;a<=w;a+=6){const y=h*(.25+k*.15)+Math.sin(a*.025+t*3+k)*18*Math.sin(t+k);a?x.lineTo(a,y):x.moveTo(a,y)}x.stroke()}}],
'Gyutaro':['#9ad04a','Poison blood sickles',(x,w,h,t,P)=>{for(let k=0;k<2;k++){x.beginPath();x.arc(w/2,h*.45,50+k*25,t*4+k*3,t*4+k*3+2.2);x.lineWidth=4;x.stroke()}P.slice(0,14).forEach(p=>{x.beginPath();x.arc(p.a*w,((p.b+t*.4*(.5+p.s))%1)*h,2.5,0,7);x.fill()})}],
'Kaigaku':['#ffd23f','Corrupted Thunder Breathing',(x,w,h)=>{bolt(x,w,h);bolt(x,w,h)}],
'Enmu':['#c04cff','Dream sleep art',(x,w,h,t)=>{x.beginPath();for(let i=0;i<120;i++){const a=i*.22+t*2,r=i*.9,px=w/2+Math.cos(a)*r*.8,py=h/2+Math.sin(a)*r*.6;i?x.lineTo(px,py):x.moveTo(px,py)}x.stroke()}],
'Rokuro':['#d85f5f','Art not revealed',aura],'Wakuraba':['#b8604a','Art not revealed',aura],'Mukago':['#9a6ab0','Art not revealed',aura],'Kamanue':['#7a8aa0','Art not revealed',aura],
'Rui':['#d8d8ff','Cutting threads',(x,w,h,t)=>{x.lineWidth=1.2;for(let i=0;i<9;i++){x.beginPath();x.moveTo(w*.5,0);x.lineTo(w*i/8+Math.sin(t*2+i)*8,h);x.stroke()}for(let k=1;k<6;k++){x.beginPath();for(let i=0;i<=8;i++){const px=w*i/8,py=h*k/6+Math.sin(t*3+i+k)*4;i?x.lineTo(px,py):x.moveTo(px,py)}x.stroke()}}],
'Kyogai':['#c8884a','Drum room-rotation art',(x,w,h,t)=>{[0,.5].forEach((o,k)=>{const r=((t*.9+o)%1)*70;x.globalAlpha=1-r/70;x.beginPath();x.arc(w*(k?.7:.3),h*.5,r,0,7);x.stroke()});x.globalAlpha=1;x.save();x.translate(w/2,h*.5);x.rotate(Math.sin(t*2)*1.5);x.strokeRect(-26,-26,52,52);x.restore()}]};
const DF=[...document.querySelectorAll('#dm .card,#um .card,#lm .card')].map(c=>{const d=DE[c.querySelector('h3').textContent];if(!d)return null;
const i=c.firstElementChild,cv=document.createElement('canvas');cv.className='fx';i.prepend(cv);
const b=document.createElement('span');b.className='bda';b.textContent='BDA · '+d[1];i.append(b);
const f={cv,x:cv.getContext('2d'),c:d[0],fn:d[2],h:0,w:0,hh:0,P:Array.from({length:30},()=>({a:Math.random(),b:Math.random(),s:Math.random()}))};
c.addEventListener('mouseenter',()=>{f.w=cv.clientWidth;f.hh=cv.clientHeight;cv.width=f.w*dpr;cv.height=f.hh*dpr;f.x.setTransform(dpr,0,0,dpr,0,0);f.h=1});
c.addEventListener('mouseleave',()=>f.h=0);return f}).filter(Boolean);
(function D(){requestAnimationFrame(D);if(!vis.demons)return;DF.forEach(f=>{if(!f.h)return;const x=f.x;x.clearRect(0,0,f.w,f.hh);x.globalAlpha=1;x.lineWidth=2;x.strokeStyle=x.fillStyle=x.shadowColor=f.c;x.shadowBlur=14;f.fn(x,f.w,f.hh,T,f.P)})})();

/* Character technique VFX */
const flm=sz=>(x,w,h,t,P)=>{P.forEach(p=>{const q=(p.b+t*.35*(.6+p.s))%1;x.globalAlpha=1-q;x.beginPath();x.arc(p.a*w+Math.sin(t*4+p.s*9)*10,h-q*h,(1-q)*(sz+p.s*sz),0,7);x.fill()})};
const CE={
'Tanjiro Kamado':['#3aa8ff','Style · Water Breathing',(x,w,h,t)=>{for(let k=0;k<3;k++){x.beginPath();x.arc(w/2,h*.5,38+k*22,t*2+k*2,t*2+k*2+3);x.stroke()}x.beginPath();for(let a=0;a<=w;a+=6){const y=h*.88+Math.sin(a*.04+t*3)*6;a?x.lineTo(a,y):x.moveTo(a,y)}x.stroke()}],
'Nezuko Kamado':['#ff7ab8','Blood Demon Art · Exploding Blood',flm(7)],
'Zenitsu Agatsuma':['#ffd23f','Style · Thunder Breathing',(x,w,h)=>{bolt(x,w,h);if(Math.sin(T*10)>.3){const y=h*(.2+Math.random()*.6);x.beginPath();x.moveTo(0,y);for(let a=0;a<=w;a+=w/8)x.lineTo(a,y+(Math.random()-.5)*26);x.stroke()}}],
'Inosuke Hashibira':['#6f8cff','Style · Beast Breathing',(x,w,h,t)=>{const a=(t*1.6)%1;x.lineWidth=4;x.globalAlpha=1-a*.6;[[0,w],[w,0]].forEach(([sx,ex])=>{x.beginPath();x.moveTo(sx,h*.1);for(let i=1;i<=10;i++){const q=Math.min(i/10,a*1.3);x.lineTo(sx+(ex-sx)*q+(i%2?6:-6),h*.1+h*.8*q)}x.stroke()})}],
'Giyu Tomioka':['#2e7fd6','Style · Water Breathing',(x,w,h,t)=>{for(let k=0;k<4;k++){const q=(t*.5+k/4)%1;x.globalAlpha=1-q;x.beginPath();x.ellipse(w/2,h*.6,q*w*.45,q*w*.16,0,0,7);x.stroke()}}],
'Kyojuro Rengoku':['#ff6a2b','Style · Flame Breathing',(x,w,h,t,P)=>{flm(9)(x,w,h,t,P);x.globalAlpha=1;x.beginPath();x.arc(w/2,h*.5,45+Math.sin(t*3)*6,t*2,t*2+4.2);x.stroke()}],
'Shinobu Kocho':['#b07cff','Style · Insect Breathing',(x,w,h,t,P)=>{P.slice(0,9).forEach(p=>{const px=((p.a+t*.1*(.5+p.s))%1)*w,py=h*(.15+p.b*.7)+Math.sin(t*2+p.s*9)*12,s=Math.abs(Math.sin(t*10+p.s*9))*7+1;x.beginPath();x.ellipse(px-s*.6,py,s,6,0,0,7);x.fill();x.beginPath();x.ellipse(px+s*.6,py,s,6,0,0,7);x.fill()})}],
'Muichiro Tokito':['#9fb8ff','Style · Mist Breathing',(x,w,h,t,P)=>{x.shadowBlur=0;P.slice(0,8).forEach(p=>{const px=((p.a+t*.04)%1)*w,py=p.b*h,g=x.createRadialGradient(px,py,0,px,py,70);g.addColorStop(0,'rgba(200,215,255,.5)');g.addColorStop(1,'rgba(200,215,255,0)');x.fillStyle=g;x.fillRect(px-70,py-70,140,140)})}],
'Mitsuri Kanroji':['#ff7ab8','Style · Love Breathing',(x,w,h,t,P)=>{x.lineWidth=3;for(let k=0;k<3;k++){x.beginPath();for(let i=0;i<=60;i++){const a=i/60,px=w/2+Math.cos(a*9+t*3+k*2.1)*a*w*.45,py=h*.5+Math.sin(a*9+t*3+k*2.1)*a*h*.35;i?x.lineTo(px,py):x.moveTo(px,py)}x.stroke()}P.slice(0,10).forEach(p=>{x.beginPath();x.arc(p.a*w,((p.b+t*.2)%1)*h,3,0,7);x.fill()})}],
'Tengen Uzui':['#e4c36a','Style · Sound Breathing',(x,w,h,t)=>{for(let i=0;i<14;i++){const bh=Math.abs(Math.sin(t*8+i*.9))*h*.4;x.fillRect(i*w/14+2,h-bh,w/14-4,bh)}const r=((t*1.2)%1)*w*.6;x.globalAlpha=1-r/(w*.6);x.beginPath();x.arc(w/2,h*.4,r,0,7);x.stroke()}]};
const CF=[...document.querySelectorAll('#ch .card')].map(c=>{const d=CE[c.querySelector('h3').textContent];if(!d)return null;
const i=c.firstElementChild,cv=document.createElement('canvas');cv.className='fx';i.prepend(cv);
const b=document.createElement('span');b.className='bda';b.textContent=d[1];i.append(b);
const f={cv,x:cv.getContext('2d'),c:d[0],fn:d[2],h:0,w:0,hh:0,P:Array.from({length:30},()=>({a:Math.random(),b:Math.random(),s:Math.random()}))};
c.addEventListener('mouseenter',()=>{f.w=cv.clientWidth;f.hh=cv.clientHeight;cv.width=f.w*dpr;cv.height=f.hh*dpr;f.x.setTransform(dpr,0,0,dpr,0,0);f.h=1});
c.addEventListener('mouseleave',()=>f.h=0);return f}).filter(Boolean);
new IntersectionObserver(e=>vis.chars=e[0].isIntersecting).observe($('#chars'));
(function Q(){requestAnimationFrame(Q);if(!vis.chars)return;CF.forEach(f=>{if(!f.h)return;const x=f.x;x.clearRect(0,0,f.w,f.hh);x.globalAlpha=1;x.lineWidth=2;x.strokeStyle=x.fillStyle=x.shadowColor=f.c;x.shadowBlur=14;f.fn(x,f.w,f.hh,T,f.P)})})();

/* Golden Age */
cards('#ga',[
['陽','Yoriichi Tsugikuni','#ffc94a','The Sun Breathing user whose skill set the benchmark for every slayer after him. He very nearly killed Muzan.','Sengoku era · Sun Breathing'],
['月','Michikatsu Tsugikuni','#a583ff','Yoriichi’s elder twin, whose envy pushed him toward demonhood and the name Kokushibo.','Sengoku era · The twin'],
['日','Sun Breathing','#ffb52e','The original Breathing style, said to be the root that later styles grew from.','Origin of Breathing'],
['痣','Slayer Marks','#ff7a3a','Rare marks that awaken in those pushed past their limits, trading life span for power.','Mark users'],
['透','Transparent World','#cfe9ff','A state of perfect awareness in which the opponent’s body can be seen from within.','Pinnacle of perception'],
['五','The First Breathing Styles','#ffe08a','Water, Flame, Wind, Stone and Thunder grew from Sun Breathing and spread through the Corps.','Birth of the schools'],
['刃','Nichirin Blades','#ff6a4a','Swords forged from sun-soaked ore, the only blades that can kill a demon.','The weapon of the Corps'],
['火','Hinokami Kagura Lineage','#ff8a3a','Yoriichi’s fire dance was passed down through generations of the Kamado family.','Kamado legacy'],
['裂','The Night Muzan Nearly Fell','#ff2d4a','Yoriichi cut Muzan so badly that he survived only by scattering his body into pieces.','Sengoku era · The battle'],
['柱','The Taisho Hashira','#c8d6ff','The Hashira of Tanjiro’s era, many of whom awakened marks for the final war.','Taisho era']]);
document.querySelectorAll('#ga .card').forEach(c=>{const i=c.firstElementChild;c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;i.style.transform=`rotateY(${x*34}deg) rotateX(${-y*34}deg) translateZ(14px)`;i.style.setProperty('--mx',(x+.5)*100+'%');i.style.setProperty('--my',(y+.5)*100+'%')});c.addEventListener('mouseleave',()=>i.style.transform='')});
const rays=(x,w,h,t)=>{const cx=w/2,cy=h*.5;for(let i=0;i<18;i++){const a=i/18*6.283+t*.6,r=60+(i%3)*18+Math.sin(t*4+i)*8;x.beginPath();x.moveTo(cx+Math.cos(a)*30,cy+Math.sin(a)*30);x.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);x.stroke()}x.beginPath();x.arc(cx,cy,24,0,7);x.fill()};
const GE={
'Yoriichi Tsugikuni':['#ffc94a',rays],
'Michikatsu Tsugikuni':['#a583ff',DE.Kokushibo[2]],
'Sun Breathing':['#ffb52e',(x,w,h,t,P)=>{flm(8)(x,w,h,t,P);x.globalAlpha=1;rays(x,w,h,t)}],
'Slayer Marks':['#ff7a3a',aura],
'Transparent World':['#cfe9ff',CE['Giyu Tomioka'][2]],
'The First Breathing Styles':['#ffe08a',(x,w,h,t)=>{['#3aa8ff','#ff6a2b','#5fe3b0','#b8b8b8','#ffd23f'].forEach((c,k)=>{x.fillStyle=x.shadowColor=c;const a=t*1.2+k*1.257;x.beginPath();x.arc(w/2+Math.cos(a)*w*.3,h*.5+Math.sin(a)*h*.28,9,0,7);x.fill()})}],
'Nichirin Blades':['#ff6a4a',CE['Inosuke Hashibira'][2]],
'Hinokami Kagura Lineage':['#ff8a3a',CE['Kyojuro Rengoku'][2]],
'The Night Muzan Nearly Fell':['#ff2d4a',DE['Muzan Kibutsuji'][2]],
'The Taisho Hashira':['#c8d6ff',(x,w,h,t)=>{['#3aa8ff','#ff6a2b','#ffd23f','#5fe3b0','#9fb8ff','#ff7ab8','#b8b8b8','#6fd890','#b07cff'].forEach((c,k)=>{x.fillStyle=x.shadowColor=c;const a=t*1.1+k*.698;x.beginPath();x.arc(w/2+Math.cos(a)*w*.3,h*.5+Math.sin(a)*h*.28,7,0,7);x.fill()})}]};
const GF=[...document.querySelectorAll('#ga .card')].map(c=>{const d=GE[c.querySelector('h3').textContent],i=c.firstElementChild,cv=document.createElement('canvas');cv.className='fx';i.prepend(cv);
const f={cv,x:cv.getContext('2d'),c:d[0],fn:d[1],h:0,w:0,hh:0,P:Array.from({length:30},()=>({a:Math.random(),b:Math.random(),s:Math.random()}))};
c.addEventListener('mouseenter',()=>{f.w=cv.clientWidth;f.hh=cv.clientHeight;cv.width=f.w*dpr;cv.height=f.hh*dpr;f.x.setTransform(dpr,0,0,dpr,0,0);f.h=1});
c.addEventListener('mouseleave',()=>f.h=0);return f});
/* golden sun scene */
const GCV=$('#gcv'),GR=mk(GCV),GS=new THREE.Scene(),GCAM=new THREE.PerspectiveCamera(45,1,.1,100),SUN=new THREE.Group();GCAM.position.z=9;GS.add(SUN);
SUN.add(new THREE.Mesh(new THREE.SphereGeometry(1.2,32,24),new THREE.MeshBasicMaterial({color:0xffd24a})));
const GM=new THREE.MeshBasicMaterial({color:0xffb52e,transparent:true,opacity:.85});
for(let i=0;i<24;i++){const r=new THREE.Mesh(new THREE.BoxGeometry(.12,i%2?1.4:.9,.05),GM),a=i/24*6.283;r.position.set(Math.cos(a)*2.2,Math.sin(a)*2.2,0);r.rotation.z=a-1.5708;SUN.add(r)}
const GRG=[2.9,3.4].map((rd,k)=>{const m=new THREE.Mesh(new THREE.TorusGeometry(rd,.02,8,96),new THREE.MeshBasicMaterial({color:k?0xff8a2e:0xffd878}));GS.add(m);return m});
const gl2=new THREE.Sprite(new THREE.SpriteMaterial({map:glow.material.map,color:0xffb52e,blending:THREE.AdditiveBlending,depthWrite:false}));gl2.scale.set(10,10,1);GS.add(gl2);
const GN=300,ga2=new Float32Array(GN*3);for(let i=0;i<GN;i++)ga2.set([(Math.random()-.5)*14,(Math.random()-.5)*8,(Math.random()-.5)*6],i*3);
const gg2=new THREE.BufferGeometry();gg2.setAttribute('position',new THREE.BufferAttribute(ga2,3));
const gpt=new THREE.Points(gg2,new THREE.PointsMaterial({size:.06,color:0xffd878,transparent:true,opacity:.85}));GS.add(gpt);
addEventListener('resize',()=>fit(GR,GCAM,GCV));fit(GR,GCAM,GCV);
new IntersectionObserver(e=>vis.golden=e[0].isIntersecting).observe($('#golden'));
['#gld','#ga'].forEach(q=>{$(q).classList.add('rv');io.observe($(q))});
(function G(){requestAnimationFrame(G);if(!vis.golden)return;
SUN.rotation.z+=.004;SUN.rotation.y+=(mx*.8-SUN.rotation.y)*.05;SUN.rotation.x+=(my*.5-SUN.rotation.x)*.05;SUN.scale.setScalar(1+Math.sin(T*1.5)*.03);
GRG[0].rotation.x=T*.3;GRG[0].rotation.y=T*.2;GRG[1].rotation.x=-T*.25;GRG[1].rotation.z=T*.15;gpt.rotation.y+=.0008;GR.render(GS,GCAM);
GF.forEach(f=>{if(!f.h)return;const x=f.x;x.clearRect(0,0,f.w,f.hh);x.globalAlpha=1;x.lineWidth=2;x.strokeStyle=x.fillStyle=x.shadowColor=f.c;x.shadowBlur=14;f.fn(x,f.w,f.hh,T,f.P)})})();

/* extra breathing styles VFX */
FX.splice(6).forEach(f=>f.cv.remove());
const BE={
'Sun Breathing':['#ffb52e',(x,w,h,t,P)=>{flm(8)(x,w,h,t,P);x.globalAlpha=1;rays(x,w,h,t)}],
'Moon Breathing':['#8a5cff',DE.Kokushibo[2]],
'Stone Breathing':['#b8b8b8',(x,w,h,t,P)=>{P.slice(0,12).forEach(p=>{const q=(p.b+t*.5*(.5+p.s))%1;x.globalAlpha=1-q*.4;x.fillRect(p.a*w,q*h,5+p.s*8,5+p.s*8)});const r=((t*.8)%1)*w*.6;x.globalAlpha=1-r/(w*.6);x.beginPath();x.ellipse(w/2,h*.85,r,r*.25,0,0,7);x.stroke()}],
'Sound Breathing':['#e4c36a',CE['Tengen Uzui'][2]],
'Serpent Breathing':['#6fd890',(x,w,h,t)=>{x.lineWidth=5;for(let k=0;k<2;k++){x.beginPath();for(let a=0;a<=w;a+=5){const y=h*(.4+k*.2)+Math.sin(a*.05-t*5+k*2)*h*.12;a?x.lineTo(a,y):x.moveTo(a,y)}x.stroke()}}],
'Insect Breathing':['#b07cff',CE['Shinobu Kocho'][2]],
'Flower Breathing':['#ffa6c8',(x,w,h,t,P)=>{P.forEach(p=>{const q=(p.b+t*.2*(.5+p.s))%1;x.beginPath();x.ellipse(p.a*w+Math.sin(t*2+p.s*9)*18,q*h,5,2.5,t+p.s*6,0,7);x.fill()})}],
'Beast Breathing':['#6f8cff',CE['Inosuke Hashibira'][2]],
'Hinokami Kagura':['#ff7a2b',CE['Kyojuro Rengoku'][2]],
'Total Concentration Breathing':['#7ef0d2',(x,w,h,t)=>{for(let k=0;k<4;k++){x.beginPath();x.arc(w/2,h*.5,24+k*18+Math.sin(t*2+k)*6,0,7);x.stroke()}}],
'Dead Calm':['#7ab8ff',(x,w,h,t)=>{const q=(t*.5)%1;x.globalAlpha=1-q;x.beginPath();x.ellipse(w/2,h*.55,q*w*.5,q*w*.18,0,0,7);x.stroke();x.globalAlpha=1;x.beginPath();x.moveTo(w*.1,h*.55);x.lineTo(w*.9,h*.55);x.stroke()}]};
const BF=[...document.querySelectorAll('#br .card')].slice(6).map(c=>{const d=BE[c.querySelector('h3').textContent],i=c.firstElementChild,cv=document.createElement('canvas');cv.className='fx';i.prepend(cv);
const f={cv,x:cv.getContext('2d'),c:d[0],fn:d[1],h:0,w:0,hh:0,P:Array.from({length:30},()=>({a:Math.random(),b:Math.random(),s:Math.random()}))};
c.addEventListener('mouseenter',()=>{f.w=cv.clientWidth;f.hh=cv.clientHeight;cv.width=f.w*dpr;cv.height=f.hh*dpr;f.x.setTransform(dpr,0,0,dpr,0,0);f.h=1});
c.addEventListener('mouseleave',()=>f.h=0);return f});
(function B(){requestAnimationFrame(B);BF.forEach(f=>{if(!f.h)return;const x=f.x;x.clearRect(0,0,f.w,f.hh);x.globalAlpha=1;x.lineWidth=2;x.strokeStyle=x.fillStyle=x.shadowColor=f.c;x.shadowBlur=14;f.fn(x,f.w,f.hh,T,f.P)})})();

/* extended character roster VFX */
const wind=(x,w,h,t,P)=>{P.forEach(p=>{const xx=((p.a+t*.6*(.5+p.s))%1)*w,y=p.b*h;x.globalAlpha=.6;x.beginPath();x.moveTo(xx,y);x.quadraticCurveTo(xx+30,y-6,xx+70*p.s+20,y);x.stroke()})};
const fl=BE['Flower Breathing'][1],wt=CE['Tanjiro Kamado'][2],ms=CE['Muichiro Tokito'][2];
const NE={
'Kanao Tsuyuri':['#ff9ac8','Style · Flower Breathing',fl],
'Genya Shinazugawa':['#c9c9c9','Trait · Demon-eating strength',aura],
'Gyomei Himejima':['#9aa7b8','Style · Stone Breathing',BE['Stone Breathing'][1]],
'Obanai Iguro':['#6fd890','Style · Serpent Breathing',BE['Serpent Breathing'][1]],
'Sanemi Shinazugawa':['#5fe3b0','Style · Wind Breathing',wind],
'Kanae Kocho':['#ffa6c8','Style · Flower Breathing',fl],
'Sabito':['#3aa8ff','Style · Water Breathing',wt],
'Makomo':['#ff9a6a','Style · Water Breathing',wt],
'Sakonji Urokodaki':['#6ac0ff','Style · Water Breathing',CE['Giyu Tomioka'][2]],
'Kagaya Ubuyashiki':['#d9c6ff','Role · Leader of the Corps',ms],
'Tamayo':['#e0a8ff','Role · Demon doctor',fl],
'Yushiro':['#9fd0ff','Role · Loyal companion',ms],
'Jigoro Kuwajima':['#ffd23f','Style · Thunder Breathing',CE['Zenitsu Agatsuma'][2]],
'Hotaru Haganezuka':['#ff9a3c','Role · Swordsmith',flm(5)],
'Tanjuro Kamado':['#ff6a2b','Dance · Hinokami Kagura',CE['Kyojuro Rengoku'][2]]};
const NF=[...document.querySelectorAll('#ch .card')].map(c=>{const d=NE[c.querySelector('h3').textContent];if(!d)return null;const i=c.firstElementChild,cv=document.createElement('canvas');cv.className='fx';i.prepend(cv);
const b=document.createElement('span');b.className='bda';b.textContent=d[1];i.append(b);
const f={cv,x:cv.getContext('2d'),c:d[0],fn:d[2],h:0,w:0,hh:0,P:Array.from({length:30},()=>({a:Math.random(),b:Math.random(),s:Math.random()}))};
c.addEventListener('mouseenter',()=>{f.w=cv.clientWidth;f.hh=cv.clientHeight;cv.width=f.w*dpr;cv.height=f.hh*dpr;f.x.setTransform(dpr,0,0,dpr,0,0);f.h=1});
c.addEventListener('mouseleave',()=>f.h=0);return f}).filter(Boolean);
(function N(){requestAnimationFrame(N);if(!vis.chars)return;NF.forEach(f=>{if(!f.h)return;const x=f.x;x.clearRect(0,0,f.w,f.hh);x.globalAlpha=1;x.lineWidth=2;x.strokeStyle=x.fillStyle=x.shadowColor=f.c;x.shadowBlur=14;f.fn(x,f.w,f.hh,T,f.P)})})();

/* expanded rosters: extra cast, other demons, search */
const rain=(x,w,h,t,P)=>{P.forEach(p=>{const q=(p.b+t*.8*(.5+p.s))%1;x.beginPath();x.moveTo(p.a*w,q*h);x.lineTo(p.a*w,q*h+10);x.stroke()})};
const pulse=(x,w,h,t)=>{for(let k=0;k<3;k++){const r=((t*.7+k/3)%1)*w*.6;x.globalAlpha=1-r/(w*.6);x.beginPath();x.arc(w/2,h*.5,r,0,7);x.stroke()}};
const temari=(x,w,h,t,P)=>{P.slice(0,6).forEach(p=>{x.beginPath();x.arc(p.a*w,h-Math.abs(Math.sin(t*3+p.s*9))*h*.7,8+p.s*6,0,7);x.fill()})};
const arrows=(x,w,h,t,P)=>{P.slice(0,10).forEach(p=>{const q=(p.b+t*.6*(.5+p.s))%1,px=p.a*w,py=q*h;x.beginPath();x.moveTo(px,py-14);x.lineTo(px,py+14);x.moveTo(px-5,py+8);x.lineTo(px,py+14);x.lineTo(px+5,py+8);x.stroke()})};
cards('#od',[
['','Sekido','#ff4d4d','Hantengu’s anger given a body, hot-tempered and fierce.','Hantengu clone'],
['','Karaku','#ffd23f','Hantengu’s pleasure given a body, cheerful and reckless.','Hantengu clone'],
['','Aizetsu','#4da6ff','Hantengu’s sorrow given a body, mournful and relentless.','Hantengu clone'],
['','Urogi','#9be36b','Hantengu’s joy given a body, boisterous and loud.','Hantengu clone'],
['','Zohakuten','#c04cff','The fused form that merges Hantengu’s clones into one body.','Hantengu fusion'],
['','Susamaru','#ff7ab8','A temari-throwing servant of Muzan met in Asakusa.','Muzan’s servant'],
['','Yahaba','#9ad0ff','An arrow-vector demon who served alongside Susamaru.','Muzan’s servant'],
['','Hand Demon','#b06a6a','The grasping demon of Mount Fujikasane who haunted the Final Selection.','Final Selection'],
['','Spider Family','#d8d8ff','Rui’s forced family of spider-like demons on Mount Natagumo.','Rui’s family'],
['','Hairo','#d85f5f','A former Lower Moon Two, replaced by Rokuro.','Former Lower Moon Two']]);
document.querySelectorAll('#od .card').forEach(c=>{const i=c.firstElementChild;c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;i.style.transform=`rotateY(${x*34}deg) rotateX(${-y*34}deg) translateZ(14px)`;i.style.setProperty('--mx',(x+.5)*100+'%');i.style.setProperty('--my',(y+.5)*100+'%')});c.addEventListener('mouseleave',()=>i.style.transform='')});
$('#od').classList.add('rv');io.observe($('#od'));
const NE2={
'Aoi Kanzaki':['#c9a0ff','Role · Butterfly Estate nurse',CE['Shinobu Kocho'][2]],
'Kiyo, Sumi and Naho':['#ffb3d9','Role · Butterfly Estate helpers',fl],
'Murata':['#aab4c8','Role · Corps member',aura],
'Shinjuro Rengoku':['#ff6a2b','Style · Flame Breathing',CE['Kyojuro Rengoku'][2]],
'Senjuro Rengoku':['#ff8a4a','Family · Rengoku legacy',CE['Kyojuro Rengoku'][2]],
'Kie Kamado':['#ffd0d0','Role · Tanjiro’s mother',ms],
'Kotetsu':['#ff9a3c','Role · Swordsmith',flm(5)],
'Makio, Suma and Hinatsuru':['#e4c36a','Role · Kunoichi',wind]};
const OE={
'Sekido':['#ff4d4d','Emotion · Anger',flm(7)],'Karaku':['#ffd23f','Emotion · Pleasure',aura],'Aizetsu':['#4da6ff','Emotion · Sorrow',rain],'Urogi':['#9be36b','Emotion · Joy',pulse],'Zohakuten':['#c04cff','Emotion · Fusion',DE.Hantengu[2]],
'Susamaru':['#ff7ab8','Art · Temari',temari],'Yahaba':['#9ad0ff','Art · Vector arrows',arrows],'Hand Demon':['#b06a6a','Trait · Grasping hands',aura],'Spider Family':['#d8d8ff','Art · Thread web',DE.Rui[2]],'Hairo':['#d85f5f','Art not revealed',aura]};
const REG=[];
const mkF=(sel,tb,key)=>{const L=[...document.querySelectorAll(sel)].map(c=>{const d=tb[c.querySelector('h3').textContent];if(!d)return null;const i=c.firstElementChild,cv=document.createElement('canvas');cv.className='fx';i.prepend(cv);
const b=document.createElement('span');b.className='bda';b.textContent=d[1];i.append(b);
const f={cv,x:cv.getContext('2d'),c:d[0],fn:d[2],h:0,w:0,hh:0,P:Array.from({length:30},()=>({a:Math.random(),b:Math.random(),s:Math.random()}))};
c.addEventListener('mouseenter',()=>{f.w=cv.clientWidth;f.hh=cv.clientHeight;cv.width=f.w*dpr;cv.height=f.hh*dpr;f.x.setTransform(dpr,0,0,dpr,0,0);f.h=1});
c.addEventListener('mouseleave',()=>f.h=0);return f}).filter(Boolean);REG.push([L,key])};
mkF('#ch .card',NE2,'chars');mkF('#od .card',OE,'demons');
(function X(){requestAnimationFrame(X);REG.forEach(([L,k])=>{if(!vis[k])return;L.forEach(f=>{if(!f.h)return;const x=f.x;x.clearRect(0,0,f.w,f.hh);x.globalAlpha=1;x.lineWidth=2;x.strokeStyle=x.fillStyle=x.shadowColor=f.c;x.shadowBlur=14;f.fn(x,f.w,f.hh,T,f.P)})})})();
const sf=(sec,gs,ph)=>{const S=$(sec),g0=$(gs[0]),pv=g0.previousElementSibling,a=pv&&pv.classList.contains('grp')?pv:g0,i=document.createElement('input');i.className='sf';i.type='search';i.placeholder=ph;S.insertBefore(i,a);
i.addEventListener('input',()=>{const q=i.value.trim().toLowerCase();gs.forEach(sl=>{const g=$(sl);let n=0;g.querySelectorAll('.card').forEach(c=>{const ok=c.textContent.toLowerCase().includes(q);c.style.display=ok?'':'none';n+=ok});const hd=g.previousElementSibling;if(hd&&hd.classList.contains('grp'))hd.style.display=n?'':'none'})})};
sf('#styles',['#br'],'Search breathing styles…');sf('#chars',['#ch'],'Search characters…');sf('#demons',['#dm','#um','#lm','#od'],'Search demons…');sf('#golden',['#ga'],'Search the golden age…');

/* touch: tap a card to play its effect, tap again or elsewhere to stop */
if(matchMedia('(hover:none)').matches){let cur=null;const off=c=>{c.classList.remove('tap');c.firstElementChild.style.transform='';c.dispatchEvent(new Event('mouseleave'))};
document.addEventListener('click',e=>{const c=e.target.closest('.card');if(cur&&cur!==c){off(cur);cur=null}if(!c)return;
if(cur===c){off(c);cur=null;return}
c.classList.add('tap');c.firstElementChild.style.transform='rotateX(-8deg) rotateY(8deg) translateZ(14px)';c.dispatchEvent(new Event('mouseenter'));cur=c})}

/* Iconic quotes & scenes */
cards('#qt',[
['','Tanjiro Kamado','#3aa8ff','Begs the Water Hashira to spare his transformed sister, swearing he will protect her himself, whatever it costs him.','Final Selection'],
['','Nezuko Kamado','#ff7ab8','Answers her brother\u2019s fear not with words but with a furious, wordless refusal to ever hurt him.','The night it all changed'],
['','Giyu Tomioka','#2e7fd6','Tells Tanjiro that it isn\u2019t the world\u2019s judgment that matters, only whether he keeps moving forward.','First meeting'],
['','Zenitsu Agatsuma','#ffd23f','Admits, shaking, that he\u2019s terrified of everything \u2014 and steps toward the fight anyway.','Before a hard battle'],
['','Inosuke Hashibira','#6f8cff','Declares himself king of the mountain and dares anyone, demon or otherwise, to prove him wrong.','First appearance'],
['','Kyojuro Rengoku','#ff6a2b','With his last breath, tells the younger slayers to hold their heads high and keep living without regret.','Mugen Train'],
['','Shinobu Kocho','#b07cff','Smiles through unhealed grief and calmly promises to end every demon she crosses, one by one.','Butterfly Estate'],
['','Mitsuri Kanroji','#ff7ab8','Stops apologizing for her own strength and chooses, at last, to be proud of what makes her different.','Becoming a Hashira'],
['','Tengen Uzui','#e4c36a','Insists that going all-out, loud and flashy, is simply how he shows love for his wives and his duty.','Entertainment District'],
['','Muzan Kibutsuji','#ff2d4a','Coldly reminds his strongest servants that failure, to him, is unforgivable \u2014 no matter how loyal they are.','Addressing the Twelve Kizuki']]);
cards('#qx',[
['','Tanjiro × Giyu','#3aa8ff','Giyu coldly tells a pleading Tanjiro that begging changes nothing, and Tanjiro answers by turning his grief into the drive to grow strong.','Episode 1'],
['','Tanjiro × Rengoku','#ff6a2b','Rengoku, seeing Tanjiro’s resolve, urges him to keep his spirit strong and moving forward, and Tanjiro vows to carry that spirit on.','Mugen Train'],
['','Rengoku × Akaza','#ff5a7a','Akaza urges the mortally wounded Rengoku to become a demon and keep fighting forever, and Rengoku refuses without hesitation.','Mugen Train'],
['','Tanjiro × Rui','#d8d8ff','Rui insists his fear-built family is the only real bond, and Tanjiro rejects any bond held together by pain and control.','Mount Natagumo'],
['','Shinobu × Giyu','#b07cff','Shinobu cheerfully teases the reserved Giyu about why the others find him hard to approach, and he barely reacts.','Hashira Meeting'],
['','Muichiro × Tanjiro','#9fb8ff','Tanjiro tells the distant young Hashira that kindness given to others eventually returns to the giver, and the words begin to thaw him.','Swordsmith Village'],
['','Kagaya × Sanemi','#d9c6ff','Kagaya calmly asks the Hashira to weigh the unusual case of Nezuko while a furious Sanemi demands her execution.','Hashira Meeting']]);
cards('#sS1',[
['','The Night Everything Changed','#3a7bff','Tanjiro returns home to find his family slaughtered and his sister Nezuko transformed into a demon.','Episode 1'],
['','Seven Days on the Mountain','#5ee0ff','Tanjiro survives the brutal Final Selection trial, fighting demons alone through the night.','Early episodes'],
['','The Spider Family\u2019s Web','#6fd890','The Hashira arrive as Tanjiro and his friends are caught in Rui\u2019s twisted, thread-bound family on Mount Natagumo.','Mount Natagumo']]);
cards('#sS2',[
['','Flames Aboard the Mugen Train','#ff6a2b','Rengoku stands alone against a demon\u2019s dream trap and an Upper Rank attacker to protect sleeping passengers.','Mugen Train'],
['','Undercover in the Pleasure Quarter','#e4c36a','Tengen and the slayers infiltrate the Entertainment District disguised among its performers and patrons.','Entertainment District'],
['','The Sibling Upper Rank','#9ad04a','The team is pulled into a brutal, city-spanning fight against two demons who share one deadly bond.','Entertainment District']]);
cards('#sS3',[
['','Assault on the Village','#4cd6a8','Two Upper Rank demons strike the hidden village where the Corps\u2019 blades are forged.','Swordsmith Village'],
['','A Mind Made Whole','#9fb8ff','A young Hashira regains memories he had buried, and fights with his full self for the first time.','Swordsmith Village']]);
cards('#sS4',[
['','Training Under the Hashira','#c8d6ff','The Corps pushes through brutal, specialized drills to prepare for the war that is coming.','Hashira Training'],
['','An Attack on Headquarters','#ff5a7a','The enemy strikes at the heart of the Corps, forcing every slayer toward the final battle.','Hashira Training']]);
cards('#sIC',[
['','Into the Shifting Fortress','#8a5cff','The Corps is scattered through an impossible, ever-moving castle to face Muzan\u2019s strongest demons.','Infinity Castle'],
['','The War for Humanity\u2019s Future','#ff2d4a','Hashira and demons collide in battles that will decide whether the sun ever rises on this fight.','Infinity Castle']]);
document.querySelectorAll('#quotes .card,#exchanges .card,#scenes .card').forEach(c=>{const i=c.firstElementChild;c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;i.style.transform=`rotateY(${x*34}deg) rotateX(${-y*34}deg) translateZ(14px)`;i.style.setProperty('--mx',(x+.5)*100+'%');i.style.setProperty('--my',(y+.5)*100+'%')});c.addEventListener('mouseleave',()=>i.style.transform='')});
const QE={
'Tanjiro Kamado':['#3aa8ff','Devotion',wt],
'Nezuko Kamado':['#ff7ab8','Silent defiance',flm(7)],
'Giyu Tomioka':['#2e7fd6','Quiet resolve',CE['Giyu Tomioka'][2]],
'Zenitsu Agatsuma':['#ffd23f','Fear and courage',CE['Zenitsu Agatsuma'][2]],
'Inosuke Hashibira':['#6f8cff','Wild pride',CE['Inosuke Hashibira'][2]],
'Kyojuro Rengoku':['#ff6a2b','A final lesson',CE['Kyojuro Rengoku'][2]],
'Shinobu Kocho':['#b07cff','Hidden grief',CE['Shinobu Kocho'][2]],
'Mitsuri Kanroji':['#ff7ab8','Self-acceptance',CE['Mitsuri Kanroji'][2]],
'Tengen Uzui':['#e4c36a','Love as spectacle',CE['Tengen Uzui'][2]],
'Muzan Kibutsuji':['#ff2d4a','Cold tyranny',DE['Muzan Kibutsuji'][2]]};
const SE={
'The Night Everything Changed':['#3a7bff','Season 1',rain],
'Seven Days on the Mountain':['#5ee0ff','Season 1',aura],
'The Spider Family\u2019s Web':['#6fd890','Season 1',DE.Rui[2]],
'Flames Aboard the Mugen Train':['#ff6a2b','Season 2',flm(9)],
'Undercover in the Pleasure Quarter':['#e4c36a','Season 2',pulse],
'The Sibling Upper Rank':['#9ad04a','Season 2',DE.Gyutaro[2]],
'Assault on the Village':['#4cd6a8','Season 3',rain],
'A Mind Made Whole':['#9fb8ff','Season 3',ms],
'Training Under the Hashira':['#c8d6ff','Season 4',pulse],
'An Attack on Headquarters':['#ff5a7a','Season 4',bolt],
'Into the Shifting Fortress':['#8a5cff','Films',DE.Kokushibo[2]],
'The War for Humanity\u2019s Future':['#ff2d4a','Films',rays]};
const QX={
'Tanjiro × Giyu':['#3aa8ff','Resolve is tested',wt],
'Tanjiro × Rengoku':['#ff6a2b','Passing the torch',CE['Kyojuro Rengoku'][2]],
'Rengoku × Akaza':['#ff5a7a','Temptation refused',DE.Akaza[2]],
'Tanjiro × Rui':['#d8d8ff','Bonds vs. fear',DE.Rui[2]],
'Shinobu × Giyu':['#b07cff','Teasing the stoic',CE['Shinobu Kocho'][2]],
'Muichiro × Tanjiro':['#9fb8ff','Kindness returns',ms],
'Kagaya × Sanemi':['#d9c6ff','Calm against fury',wind]};
new IntersectionObserver(e=>vis.quotes=e[0].isIntersecting).observe($('#quotes'));new IntersectionObserver(e=>vis.exchanges=e[0].isIntersecting).observe($('#exchanges'));
new IntersectionObserver(e=>vis.scenes=e[0].isIntersecting).observe($('#scenes'));
mkF('#qt .card',QE,'quotes');mkF('#qx .card',QX,'exchanges');mkF('#scenes .card',SE,'scenes');
sf('#quotes',['#qt'],'Search quotes\u2026');sf('#exchanges',['#qx'],'Search dialogues\u2026');sf('#scenes',['#sS1','#sS2','#sS3','#sS4','#sIC'],'Search scenes\u2026');

/* language toggle (English / 日本語) */
const RAW=`Gate=入口|Breathing=呼吸|Slayers=剣士|Demons=鬼|Timeline=年表|Golden Age=黄金時代|Castle=無限城|Dojo=道場|Credits=クレジット|
♪ Music: On=♪ 音楽：オン|♪ Music: Off=♪ 音楽：オフ|
鬼滅の刃 ファンアーカイブ=ファンアーカイブ|DEMONSLAYER=鬼滅の刃|KIMETSU NO YAIBA · FAN ARCHIVE=DEMON SLAYER · KIMETSU NO YAIBA|ENTER THE ARCHIVE=アーカイブに入る|BY DHEERAJ SATHEESH PILLAI=制作：ディーラジ・サティーシュ・ピライ|
Breathing Styles=呼吸の型|Character Archive=キャラクター図鑑|Demon Archive=鬼の図鑑|Golden Age of Demon Slayers=鬼殺隊の黄金時代|Infinity Castle=無限城|3D Training Dojo=3D修行道場|
Hover a card and watch it turn. Each style is a way of channeling breath into the blade.=カードにカーソルを合わせると回転します。呼吸を刀に宿す、それぞれの型。|
Slayers, Hashira, and one very determined demon sister. Hover a card to see their fighting style.=剣士、柱、そして健気な鬼の妹。カードにカーソルを合わせると戦い方が見られます。|
Born of blood, bound by hunger. Hover a demon to unleash its Blood Demon Art.=血から生まれ、飢えに縛られた者たち。鬼にカーソルを合わせると血鬼術が発動します。|
Scroll sideways through the major story arcs.=主要な物語の章を横にスクロールして辿れます。|
The Sengoku era, when Yoriichi Tsugikuni’s Sun Breathing set the standard and the first Breathing styles took root. Move your mouse to tilt the sun.=戦国時代。継国縁壱の日の呼吸が基準となり、最初の呼吸の型が根付いた頃。マウスを動かすと太陽が傾きます。|
A shifting labyrinth of rooms, stairs and lanterns. Move your mouse to steer the camera.=部屋、階段、灯籠が移ろう迷宮。マウスでカメラを動かせます。|
Drag to rotate, scroll or pinch to zoom, and click objects to inspect them.=ドラッグで回転、スクロールでズーム、オブジェクトをクリックで詳細を表示。|
Drag-free, mouse-driven 3D. Move your cursor to tilt the title.=マウスの動きでタイトルが傾く3D。|
戦国 · SENGOKU ERA=戦国時代|
The Progenitor=始祖|Upper Moons=上弦|Lower Moons=下弦|Other Demons=その他の鬼|
Quotes=名言|Scenes=名場面|
Iconic Scenes, Season by Season=シーズンごとの名場面|
Paraphrased highlights of the moments fans still talk about — not word-for-word lines.=ファンの間で語り継がれる名場面を、意訳でまとめたものです（逐語訳ではありません）。|
The pivotal moments that define each era of the story, season by season.=各シーズンを象徴する、物語の転機となる場面の数々。|
The night it all changed=すべてが変わった夜|First meeting=初めての出会い|Before a hard battle=厉しい戦いの前|First appearance=初登場|Becoming a Hashira=柱になるまで|Addressing the Twelve Kizuki=十二鬼月への言葉|
Devotion=献身|Silent defiance=無言の抵抗|Quiet resolve=静かな決意|Fear and courage=恐怖と勇気|Wild pride=野生の誇り|A final lesson=最後の教え|Hidden grief=隠された哀しみ|Self-acceptance=自己受容|Love as spectacle=華やかな愛|Cold tyranny=冷徹な支配|
Episode 1=第一話|Early episodes=序盤|
Iconic Dialogues=名場面の対話|Dialogues=対話|Two-character moments summarized in my own words — not word-for-word dialogue.=キャラクター同士の印象的なやり取りを、意訳でまとめたものです（逐語訳ではありません）。|Hashira Meeting=柱合会議|
Tanjiro × Giyu=炭治郎 × 義勇|Tanjiro × Rengoku=炭治郎 × 煉獄|Rengoku × Akaza=煉獄 × 猗窩座|Tanjiro × Rui=炭治郎 × 累|Shinobu × Giyu=しのぶ × 義勇|Muichiro × Tanjiro=無一郎 × 炭治郎|Kagaya × Sanemi=耀哉 × 実弥|
Resolve is tested=試される覚悟|Passing the torch=受け継がれる想い|Temptation refused=誘惑の拒絶|Bonds vs. fear=絆と恐怖|Teasing the stoic=寡黙な相手をからかう|Kindness returns=優しさは巡る|Calm against fury=静と激情|
Season 1=シーズン1|Season 2=シーズン2|Season 3=シーズン3|Season 4=シーズン4|Films=映画|
The Night Everything Changed=全てが変わった夜|Seven Days on the Mountain=山で過ごした七日間|The Spider Family’s Web=蜘蛛の家族の糸|Flames Aboard the Mugen Train=無限列車に燃える炎|Undercover in the Pleasure Quarter=遊郭に潜入せよ|The Sibling Upper Rank=兄妹の上弦|Assault on the Village=里を襲う刃|A Mind Made Whole=取り戻した心|Training Under the Hashira=柱による稽古|An Attack on Headquarters=本部を襲う敵|Into the Shifting Fortress=変転する城の中へ|The War for Humanity’s Future=人類の未来を賫けた戦い|
ARC 01=第1章|ARC 02=第2章|ARC 03=第3章|ARC 04=第4章|ARC 05=第5章|ARC 06=第6章|ARC 07=第7章|
Final Selection=最終選別|Mount Natagumo=那田蜘蛛山|Mugen Train=無限列車|Entertainment District=遊郭|Swordsmith Village=刀鍛冶の里|Hashira Training=柱稽古|
Tanjiro begins his training and faces the deadly selection.=炭治郎は修行を積み、命懸けの選別に挑む。|
A web of fear and a family held together by control.=恐怖の蜘蛛の巣と、支配で繋がれた家族。|
Rengoku joins the fight aboard a train that hides a nightmare.=悪夢を秘めた列車で、煉獄が戦いに加わる。|
Tengen leads a mission through a neon-lit pleasure quarter.=宇髄が、華やかな遊郭での任務を率いる。|
Two Upper Rank demons descend on the blade forgers.=二体の上弦の鬼が刀鍛冶たちを襲う。|
The Corps sharpens itself for the final war.=鬼殺隊は最終決戦に備えて牙を研ぐ。|
The decisive battle erupts in the demons’ shifting fortress.=鬼たちの変転する城で決戦が始まる。|
Water Breathing=水の呼吸|Flame Breathing=炎の呼吸|Thunder Breathing=雷の呼吸|Wind Breathing=風の呼吸|Mist Breathing=霞の呼吸|Love Breathing=恋の呼吸|Sun Breathing=日の呼吸|Moon Breathing=月の呼吸|Stone Breathing=岩の呼吸|Sound Breathing=音の呼吸|Serpent Breathing=蛇の呼吸|Insect Breathing=蟲の呼吸|Flower Breathing=花の呼吸|Beast Breathing=獣の呼吸|Hinokami Kagura=ヒノカミ神楽|Total Concentration Breathing=全集中の呼吸|Dead Calm=凪|
Calm & adaptable=穏やかで柔軟|Fierce & bold=烈しく大胆|Swift & sudden=迅速で唐突|Savage & sweeping=荒々しく薙ぎ払う|Fleeting & subtle=儚く捉えがたい|Graceful & unusual=優雅で異色|Origin & radiant=始まりにして燦然|Lunar & relentless=月光のごとく容赦なく|Immovable & mighty=不動にして強大|Rhythmic & explosive=律動と爆発|Sly & twisting=狡猾で蛇行する|Precise & venomous=精密で毒を持つ|Graceful & flowing=優美で流麗|Feral & instinctive=野性的で本能的|Dance of the Fire God=火の神の舞|Constant & disciplined=常に研ぎ澄まされた|Water: Eleventh Form=水の呼吸 拾壱ノ型|
Tanjiro Kamado=竈門炭治郎|Nezuko Kamado=竈門禰豆子|Zenitsu Agatsuma=我妻善逸|Inosuke Hashibira=嘴平伊之助|Giyu Tomioka=冨岡義勇|Kyojuro Rengoku=煉獄杏寿郎|Shinobu Kocho=胡蝶しのぶ|Muichiro Tokito=時透無一郎|Mitsuri Kanroji=甘露寺蜜璃|Tengen Uzui=宇髄天元|Kanao Tsuyuri=栗花落カナヲ|Genya Shinazugawa=不死川玄弥|Gyomei Himejima=悲鳴嶼行冥|Obanai Iguro=伊黒小芭内|Sanemi Shinazugawa=不死川実弥|Kanae Kocho=胡蝶カナエ|Sabito=錆兎|Makomo=真菰|Sakonji Urokodaki=鱗滝左近次|Kagaya Ubuyashiki=産屋敷耀哉|Tamayo=珠世|Yushiro=愈史郎|Jigoro Kuwajima=桑島慈悟郎|Hotaru Haganezuka=鋼鐵塚蛍|Tanjuro Kamado=竈門炭十郎|Aoi Kanzaki=神崎アオイ|Kiyo, Sumi and Naho=きよ・すみ・なほ|Murata=村田|Shinjuro Rengoku=煉獄槇寿郎|Senjuro Rengoku=煉獄千寿郎|Kie Kamado=竈門葵枝|Kotetsu=小鉄|Makio, Suma and Hinatsuru=まきを・須磨・雛鶴|
Demon sister=鬼の妹|Water Hashira=水柱|Flame Hashira=炎柱|Insect Hashira=蟲柱|Mist Hashira=霞柱|Love Hashira=恋柱|Sound Hashira=音柱|Demon-eater=鬼喰い|Stone Hashira=岩柱|Serpent Hashira=蛇柱|Wind Hashira=風柱|Former Flower Hashira=元・花柱|Master of Water=水の師範|Corps leader=鬼殺隊当主|Demon ally=鬼の協力者|Master of Thunder=雷の師範|Swordsmith=刀鍛冶|Kamado family=竈門家|Butterfly Estate=蝶屋敷|Corps member=隊士|Rengoku family=煉獄家|Kunoichi=くノ一|
Exploding Blood=爆血|Demon-eating strength=鬼喰いの力|Leader of the Corps=鬼殺隊当主|Demon doctor=鬼の医者|Loyal companion=忠実な付き人|Butterfly Estate nurse=蝶屋敷の看護|Butterfly Estate helpers=蝶屋敷の手伝い|Tanjiro’s mother=炭治郎の母|Rengoku legacy=煉獄の系譜|
Muzan Kibutsuji=鬼舞辻無惨|Kokushibo=黒死牟|Doma=童磨|Akaza=猗窩座|Hantengu=半天狗|Nakime=鳴女|Gyokko=玉壺|Daki=堕姫|Gyutaro=妓夫太郎|Kaigaku=獪岳|Enmu=魘夢|Wakuraba=病葉|Mukago=零余子|Kamanue=釜鵺|Kyogai=響凱|Rui=累|Sekido=積怒|Karaku=可楽|Aizetsu=哀絶|Urogi=空喜|Zohakuten=憎珀天|Susamaru=朱紗丸|Yahaba=矢琶羽|Hand Demon=手鬼|Spider Family=蜘蛛の家族|Rokuro=ロクロ|Hairo=ハイロ|
Progenitor=始祖|Upper Moon One=上弦の壱|Upper Moon Two=上弦の弐|Upper Moon Three=上弦の参|Upper Moon Four=上弦の肆|Upper Moon Four (successor)=上弦の肆（後任）|Upper Moon Five=上弦の伍|Upper Moon Six=上弦の陸|Upper Moon Six (successor)=上弦の陸（後任）|Lower Moon One=下弦の壱|Lower Moon Two=下弦の弐|Lower Moon Three=下弦の参|Lower Moon Four=下弦の肆|Lower Moon Five=下弦の伍|Lower Moon Six=下弦の陸|Former Lower Moon Six=元・下弦の陸|Former Lower Moon Two=元・下弦の弐|Hantengu clone=半天狗の分身|Hantengu fusion=半天狗の合体|Muzan’s servant=無惨の配下|Rui’s family=累の家族|
Blood whips & shapeshifting=血の鞭と変身|Moon Breathing crescent blades=月の呼吸・三日月の刃|Cryokinetic frost=氷の血鬼術|Compass Needle=羅針|Emotion clones=感情の分身|Biwa spatial shift=琵琶による空間転移|Vase teleport & fish strikes=壺の転移と魚の攻撃|Living obi sashes=生きた帯|Poison blood sickles=毒血の鎌|Corrupted Thunder Breathing=堕ちた雷の呼吸|Dream sleep art=夢と眠りの術|Art not revealed=術は不明|Cutting threads=切り裂く糸|Drum room-rotation art=鼓による部屋の回転|Anger=怒り|Pleasure=楽|Sorrow=哀|Joy=喜|Fusion=合体|Temari=手鞠|Vector arrows=矢印|Grasping hands=掴む手|Thread web=糸の巣|Grasping hands=掴む手|
Yoriichi Tsugikuni=継国縁壱|Michikatsu Tsugikuni=継国巌勝|Slayer Marks=痣|Transparent World=透き通る世界|The First Breathing Styles=最初の呼吸|Nichirin Blades=日輪刀|Hinokami Kagura Lineage=ヒノカミ神楽の系譜|The Night Muzan Nearly Fell=無惨が倒れかけた夜|The Taisho Hashira=大正の柱|
Sengoku era · Sun Breathing=戦国時代 · 日の呼吸|Sengoku era · The twin=戦国時代 · 双子の兄|Origin of Breathing=呼吸の起源|Mark users=痣の者|Pinnacle of perception=感覚の極み|Birth of the schools=流派の誕生|The weapon of the Corps=鬼殺隊の刀|Kamado legacy=竈門家の系譜|Sengoku era · The battle=戦国時代 · 決戦|Taisho era=大正時代`;
const JA=Object.fromEntries(RAW.split('|').map(p=>{const i=p.indexOf('=');return[p.slice(0,i).trim(),p.slice(i+1).trim()]}));
const PRE={'Style':'型','Role':'役割','Trait':'特性','Dance':'舞','Family':'家','Art':'術','Emotion':'感情','Blood Demon Art':'血鬼術','BDA':'血鬼術'};
const PHT={'Search breathing styles…':'呼吸の型を検索…','Search characters…':'キャラクターを検索…','Search demons…':'鬼を検索…','Search the golden age…':'黄金時代を検索…','Search quotes…':'名言を検索…','Search scenes…':'名場面を検索…','Search dialogues…':'対話を検索…'};
const JI={'Cedar Pillar':['杉の柱','道場の屋根を支える柱。荒れた傷は長年の稽古の跡。'],'Straw Training Dummy':['藁の稽古人形','型を斬る練習用の的。呼吸の鍛錬はここから。'],'Sword Rack':['刀掛け','黒鉄の稽古刀。灯籠の光に新しい刃が輝く。'],'Hanging Lantern':['吊り灯籠','道場を照らす温かな灯り。頭上でそっと揺れる。'],'Training Gong':['稽古の銅鑼','稽古の始まりと終わりを告げる。']};
let lang='en',lastInfo=null;try{lang=localStorage.getItem('lang')||'en'}catch(e){}
const jt=s=>{if(JA[s])return JA[s];const i=s.indexOf(' · ');if(i>0&&PRE[s.slice(0,i)]){const r=s.slice(i+3);return PRE[s.slice(0,i)]+' · '+(JA[r]||r)}return null};
const JD={'The origin of all demons, ruthless and obsessed with survival.':'すべての鬼の始祖。冷酷で、生き延びることに執着する。','Flowing, adaptive forms that bend like a river around any opponent.':'水のように流れ、どんな相手にも川のように柔軟に形を変える型。','Blazing, powerful strikes driven by an unbroken fighting spirit.':'折れない闘志に突き動かされた、燃え盛る力強い一撃。','One explosive dash, delivered faster than the eye can follow.':'目にも止まらぬ速さで放たれる、爆発的な一閃。','Wild, slashing gales that tear through everything in their path.':'すべてを切り裂く、荒々しい疾風のような斬撃。','Elusive footwork that blurs the target of every strike.':'霞のような足運びで、狙いを惑わせる。','A whip-like blade that lashes through flexible, sweeping arcs.':'鞭のようにしなる刃が、柔軟で大きな弧を描いて襲いかかる。','The original style, with blazing, all-consuming strikes in a dance of sunfire.':'すべての始まりとなった型。陽炎の舞のごとく、燃え盛るすべてを焼き尽くす斬撃。','Crescent blades that stretch and linger, wielded by the demon Kokushibo.':'伸びて残る三日月の刃。鬼・黒死牟が操る。','Heavy, crushing power from an unshakable stance.':'揺るぎない構えから繰り出される、重く砕くような力。','Explosive rhythm and sound-driven strikes that read the enemy’s tempo.':'爆発的な律動と音の斬撃で、敵の拍子を読み切る。','Twisting, slithering cuts that strike from impossible angles.':'くねる蛇のような斬撃が、あり得ない角度から迫る。','Needle-quick thrusts that deliver poison like a stinger.':'針のように素早い突きで、蜂の針のように毒を打ち込む。','Delicate, flowing cuts that bloom like petals around the user.':'繊細で流れるような斬撃が、花びらのように使い手を舞い包む。','Wild, instinct-driven slashes with twin jagged blades.':'二本のギザギザの刃で繰り出す、本能のままの野性的な斬撃。','The Kamado family’s fire dance, with sweeping, sun-bright arcs.':'竈門家に伝わる火の神楽。陽のように明るい大きな弧を描く。','A training breathing that keeps the body at peak strength at all times.':'常に全身を最高の状態に保つための鍛錬の呼吸。','Giyu’s own form, which calms and neutralizes attacks around him.':'義勇が編み出した独自の型。周囲の攻撃を鎮め、無力化する。','A gentle, relentless slayer determined to cure his sister.':'妹を治すと心に決めた、優しくも諦めない剣士。','Turned demon, yet she clings to her humanity and protects her brother.':'鬼になってもなお人間性を失わず、兄を守り抜く。','Terrified when awake, astonishing the moment he falls asleep.':'起きている時は怯えているが、眠った瞬間に驚くべき力を発揮する。','A wild, boar-masked fighter who charges in with twin blades.':'猪の被り物をした野生児。二刀を手に突進する。','The quiet, reserved Water Hashira who first spared Nezuko.':'無口で寡黙な水柱。禰豆子を最初に見逃した人物。','A booming, warm-hearted Hashira who burns for others.':'声が大きく、情に厚い柱。他者のために燃え尽きる。','Smiling and sharp, she fights with a poison-tipped blade.':'笑顔の裏に鋭さを秘め、毒を塗った刃で戦う。','A young prodigy whose mind drifts like passing clouds.':'雲のように心が漂う、若き天才。','Cheerful and incredibly strong, wielding a flexible blade.':'明るく驚異的な怪力の持ち主。しなやかな刃を操る。','A flamboyant former shinobi who fights to a rhythm.':'派手好きな元忍。リズムに乗って戦う。','A quiet, skilled swordswoman who reads every muscle movement of her opponent.':'寡黙で腕の立つ剣士。相手の筋肉の動きをすべて読み取る。','A hot-headed fighter with a shotgun, whose body can take on traits of the demons he eats.':'散弾銃を使う血気盛んな戦士。喰らった鬼の特性を身体に宿すことができる。','The towering, blind Stone Hashira, widely seen as the strongest of his generation.':'盲目で巨躯の岩柱。同世代で最強と目される。','A strict, serpent-eyed Hashira who trusts almost no one.':'蛇のような目をした厳格な柱。ほとんど誰も信用しない。','A fierce, scarred Wind Hashira with a short fuse and a ferocious blade.':'傷だらけで気が短い風柱。猛々しい刃を振るう。','The gentle former Flower Hashira and Shinobu’s elder sister.':'穏やかな元・花柱。しのぶの姉。','A young swordsman who guided Tanjiro’s training in spirit.':'炭治郎の修行を霊として導いた若き剣士。','A fox-masked spirit who guided Tanjiro with kindness and humor.':'狐面をつけた霊。優しさとユーモアで炭治郎を導いた。','The former Water Hashira who trained Tanjiro and other young slayers.':'炭治郎や若い剣士たちを育てた元・水柱。','The calm, farsighted leader of the Demon Slayer Corps.':'穏やかで先見の明を持つ鬼殺隊の当主。','A demon doctor who works against Muzan with medicine and cunning.':'薬と知略で無惨に立ち向かう鬼の医者。','Tamayo’s devoted companion, fiercely loyal to her.':'珠世に忠実に仕える付き人。彼女への忠誠は揺るがない。','The former Thunder Hashira who trained Zenitsu and Kaigaku.':'善逸と獪岳を育てた元・雷柱。','A temperamental swordsmith who is fiercely devoted to his blades.':'気難しい刀鍛冶。自らの刀に並々ならぬ情熱を注ぐ。','Tanjiro’s father, who passed down the Hinokami Kagura dance.':'炭治郎の父。ヒノカミ神楽を伝えた人物。','The sharp-tongued nurse of the Butterfly Estate who cares for injured slayers.':'口は厳しいが、傷ついた隊士を看護する蝶屋敷の看護師。','The three cheerful helpers of the Butterfly Estate.':'蝶屋敷で働く、明るい三人の手伝い。','A loyal rank-and-file slayer who keeps turning up when it matters.':'大事な場面に必ず居合わせる、忠実な一般隊士。','Kyojuro’s father and a former Flame Hashira.':'杏寿郎の父で、元・炎柱。','Kyojuro’s younger brother, who carries on his spirit.':'杏寿郎の弟。兄の意志を受け継ぐ。','Tanjiro’s gentle, hard-working mother.':'炭治郎の優しく働き者の母。','A young swordsmith who forges blades in Swordsmith Village.':'刀鍛冶の里で刀を打つ若き鍛冶師。','Tengen’s three wives, all skilled kunoichi.':'天元の三人の妻。いずれも腕の立つくノ一。','The oldest and strongest of the twelve, a six-eyed swordsman whose blade throws crescent slashes.':'十二鬼月で最古にして最強。六つの目を持つ剣士で、その刃は三日月の斬撃を放つ。','Cheerful and smiling, he leads a cult and feels nothing for the people he devours.':'明るく笑顔を絶やさず、教団を率いる。喰らう人間に何の感情も抱かない。','A martial artist who fights barehanded and respects only raw strength.':'素手で戦う武闘家。純粋な強さだけを認める。','A timid, tearful demon who splits into clones, each ruled by one emotion.':'臆病で涙もろい鬼。それぞれ一つの感情に支配された分身に分かれる。','A biwa player whose music reshapes the Infinity Castle; she took Hantengu’s rank.':'琵琶の音で無限城を作り変える。半天狗の座を継いだ。','A vain, pot-dwelling artist who sees his gruesome work as beauty.':'壺に棲む虚栄心の強い芸術家。おぞましい作品を美と信じている。','A proud, beautiful demon who fights with living obi sashes.':'誇り高く美しい鬼。生きた帯を操って戦う。','Daki’s brother, a sickle-wielding demon with poisoned blades.':'堕姫の兄。毒を塗った鎌を振るう鬼。','Zenitsu’s former training rival who became a demon and took the sixth rank after Daki and Gyutaro fell.':'善逸のかつての兄弟弟子で、鬼となった。堕姫と妓夫太郎が倒れた後、陸の座に就いた。','A sleep-inducing demon who traps victims in dreams to feed on their despair.':'眠りを誘う鬼。夢に囚われた者の絶望を糧にする。','A tough demon who asked Muzan for more of his blood and paid for it.':'無惨にさらなる血を求め、その代償を払った屈強な鬼。','A scarred demon who was killed by Muzan during the Lower Moon purge.':'下弦の粛清で無惨に殺された、傷だらけの鬼。','A fearful demon who ran from the very presence of a Hashira.':'柱の気配を感じただけで逃げ出した、臆病な鬼。','Weaves a false family from threads of fear and control.':'家族を偽り、恐怖と支配の糸で繋ぎ止める。','Took the sixth seat and was destroyed by Muzan almost at once.':'陸の座に就いたが、ほどなく無惨に滅ぼされた。','The drum demon of Tsuzumi Mansion, who held the sixth seat before Muzan cast him out.':'鼓屋敷の鼓の鬼。陸の座にいたが、無惨に追放された。','The Sun Breathing user whose skill set the benchmark for every slayer after him. He very nearly killed Muzan.':'後の剣士すべての基準となった日の呼吸の使い手。無惨をあと一歩のところまで追い詰めた。','Yoriichi’s elder twin, whose envy pushed him toward demonhood and the name Kokushibo.':'継国縁壱の兄で双子。嫉妬から鬼の道に堕ち、黒死牟となった。','The original Breathing style, said to be the root that later styles grew from.':'すべての呼吸の根源とされる、最初の呼吸。','Rare marks that awaken in those pushed past their limits, trading life span for power.':'限界を超えた者に現れる稀な痣。寿命と引き換えに力を得る。','A state of perfect awareness in which the opponent’s body can be seen from within.':'相手の身体の内側まで見通せる、完全な認識の境地。','Water, Flame, Wind, Stone and Thunder grew from Sun Breathing and spread through the Corps.':'水・炎・風・岩・雷の呼吸は日の呼吸から生まれ、鬼殺隊に広まった。','Swords forged from sun-soaked ore, the only blades that can kill a demon.':'太陽の光を浴びた鉱石から打たれた刀。鬼を倒せる唯一の刃。','Yoriichi’s fire dance was passed down through generations of the Kamado family.':'縁壱の火の舞は、竈門家に代々受け継がれた。','Yoriichi cut Muzan so badly that he survived only by scattering his body into pieces.':'縁壱に深く斬られた無惨は、身体をばらばらに散らしてようやく生き延びた。','The Hashira of Tanjiro’s era, many of whom awakened marks for the final war.':'炭治郎の時代の柱たち。最終決戦に向け、多くが痣を発現させた。','Hantengu’s anger given a body, hot-tempered and fierce.':'半天狗の怒りが肉体を得た分身。短気で猛々しい。','Hantengu’s pleasure given a body, cheerful and reckless.':'半天狗の楽しみが肉体を得た分身。陽気で無鉄砲。','Hantengu’s sorrow given a body, mournful and relentless.':'半天狗の哀しみが肉体を得た分身。悲しみに暮れ、容赦がない。','Hantengu’s joy given a body, boisterous and loud.':'半天狗の喜びが肉体を得た分身。騒がしく陽気。','The fused form that merges Hantengu’s clones into one body.':'半天狗の分身が一つに合体した姿。','A temari-throwing servant of Muzan met in Asakusa.':'浅草で出会った、手鞠を投げる無惨の配下。','An arrow-vector demon who served alongside Susamaru.':'朱紗丸と共に仕えた、矢印の術を使う鬼。','The grasping demon of Mount Fujikasane who haunted the Final Selection.':'藤襲山に棲み、最終選別を脅かした掴む手の鬼。','Rui’s forced family of spider-like demons on Mount Natagumo.':'那田蜘蛛山にいる、累が無理やり作った蜘蛛のような鬼の家族。','A former Lower Moon Two, replaced by Rokuro.':'ロクロに取って代わられた、元・下弦の弐。','Begs the Water Hashira to spare his transformed sister, swearing he will protect her himself, whatever it costs him.':'秉豆子を鬼に変えてしまった妹を殺さないでほしいと水柱に懇願し、どんな代償を払っても自分が守ると誓う。','Answers her brother’s fear not with words but with a furious, wordless refusal to ever hurt him.':'怨える兄に言葉ではなく、決して傷つけないという激しい無言の意志で応える。','Tells Tanjiro that it isn’t the world’s judgment that matters, only whether he keeps moving forward.':'世間がどう裁こうと関係ない、大切なのは前へ進み続けることだと炭治郎に告げる。','Admits, shaking, that he’s terrified of everything — and steps toward the fight anyway.':'震えながらも、すべてが怖いと正直に認めたうえで、それでも前へ踏み出す。','Declares himself king of the mountain and dares anyone, demon or otherwise, to prove him wrong.':'自分こそが山の王だと名乗りを上げ、鬼であろうと誰であろうと挑んでこいと言い放つ。','With his last breath, tells the younger slayers to hold their heads high and keep living without regret.':'最後の息で、若い剣士たちに腸を張り、悔いなく生きてほしいと語りかける。','Smiles through unhealed grief and calmly promises to end every demon she crosses, one by one.':'癒えぬ哀しみを抱えながらも微笑み、出会う鬼を一体ずつ必ず屯ると静かに誓う。','Stops apologizing for her own strength and chooses, at last, to be proud of what makes her different.':'自らの力を恥じるのをやめ、人と違うことこそ誇りだと、ついに受け入れる。','Insists that going all-out, loud and flashy, is simply how he shows love for his wives and his duty.':'派手に全力を尽くすことこそ、妻たちと任務への愛の示し方なのだと言い切る。','Coldly reminds his strongest servants that failure, to him, is unforgivable — no matter how loyal they are.':'どれほど忠実であろうと、失敗は決して許さないと、最強の配下たちに冷たく告げる。','Tanjiro returns home to find his family slaughtered and his sister Nezuko transformed into a demon.':'炭治郎が家に戻ると、家族は皆殺しにされ、妹の秉豆子は鬼に変えられていた。','Tanjiro survives the brutal Final Selection trial, fighting demons alone through the night.':'炭治郎は最終選別という過酷な試練を、たった一人で鬼と戦い抜いて生き延びる。','The Hashira arrive as Tanjiro and his friends are caught in Rui’s twisted, thread-bound family on Mount Natagumo.':'那田蜘蛛山で累が作り上げた歪んだ糸の家族に捕らわれた炭治郎たちのもとへ、柱が駆けつける。','Rengoku stands alone against a demon’s dream trap and an Upper Rank attacker to protect sleeping passengers.':'煌獄は眠る乗客を守るため、鬼の見せる夢の罪と上弦の鬼にただ一人立ち向かう。','Tengen and the slayers infiltrate the Entertainment District disguised among its performers and patrons.':'天元と剣士たちは、芸者や客に扇して遊郭に潜入する。','The team is pulled into a brutal, city-spanning fight against two demons who share one deadly bond.':'一行は、ひとつの絆で結ばれた二体の鬼を相手に、街全体を巣き込む凄惨な戦いに引きずり込まれる。','Two Upper Rank demons strike the hidden village where the Corps’ blades are forged.':'隊士たちの刀が打たれる隠れ里を、二体の上弦の鬼が襲う。','A young Hashira regains memories he had buried, and fights with his full self for the first time.':'若き柱は封じていた記憶を取り戻し、初めて本当の自分として戦う。','The Corps pushes through brutal, specialized drills to prepare for the war that is coming.':'鬼殺隊は来るべき決戦に備え、柱による過酷な専門稽古をやり抜く。','The enemy strikes at the heart of the Corps, forcing every slayer toward the final battle.':'敵は鬼殺隊の中核を襲い、すべての剣士を最終決戦へと駆り立てる。','The Corps is scattered through an impossible, ever-moving castle to face Muzan’s strongest demons.':'鬼殺隊は絶えず変化する異形の城に散らされ、無惨の最強の鬼たちと対峼する。','Hashira and demons collide in battles that will decide whether the sun ever rises on this fight.':'柱と鬼たちが激突し、この戦いの果てに夜明けが訪れるかどうかを決する。',
'Giyu coldly tells a pleading Tanjiro that begging changes nothing, and Tanjiro answers by turning his grief into the drive to grow strong.':'義勇は懇願する炭治郎に、泣きついても何も変わらないと冷たく告げる。炭治郎はその悲しみを、強くなるための原動力に変える。',
'Rengoku, seeing Tanjiro’s resolve, urges him to keep his spirit strong and moving forward, and Tanjiro vows to carry that spirit on.':'炭治郎の覚悟を見た煉獄は、心を強く保ち前へ進めと促し、炭治郎はその想いを受け継ぐと誓う。',
'Akaza urges the mortally wounded Rengoku to become a demon and keep fighting forever, and Rengoku refuses without hesitation.':'猗窩座は瀕死の煉獄に、鬼になって永遠に戦い続けろと誘うが、煉獄は迷わず拒む。',
'Rui insists his fear-built family is the only real bond, and Tanjiro rejects any bond held together by pain and control.':'累は恐怖で築いた家族こそ本物の絆だと言い張るが、炭治郎は痛みと支配で繋がれた絆など認めない。',
'Shinobu cheerfully teases the reserved Giyu about why the others find him hard to approach, and he barely reacts.':'しのぶは寡黙な義勇に、なぜ皆が近寄りがたく感じるのかを明るくからかうが、義勇はほとんど反応しない。',
'Tanjiro tells the distant young Hashira that kindness given to others eventually returns to the giver, and the words begin to thaw him.':'炭治郎は心を閉ざした若き柱に、人に与えた優しさはいつか自分に返ってくると語り、その言葉が少しずつ心を溶かしていく。',
'Kagaya calmly asks the Hashira to weigh the unusual case of Nezuko while a furious Sanemi demands her execution.':'耀哉は禰豆子という異例の存在を考えてほしいと静かに柱たちに求めるが、激昂する実弥は処刑を求める。'};
const SEL='nav a,h1,h2,h3,.sub,.tag,.btn,.ht small,.in em,.bda,.arc b,.arc p,.gt';
new MutationObserver(()=>{if(lang!='ja')return;['mu','ld'].forEach(id=>{const el=$('#'+id),t=jt(el.textContent);if(t&&el.textContent!==t)el.textContent=t})}).observe($('nav'),{subtree:true,childList:true,characterData:true});
function showInfo(i){lastInfo=i;const j=lang=='ja'&&JI[i[0]];$('#info').innerHTML=j?`<b>${j[0]}</b><br>${j[1]}`:`<b>${i[0]}</b><br>${i[1]}`}
function applyLang(){const ja=lang=='ja';document.documentElement.lang=ja?'ja':'en';document.title=ja?'鬼滅の刃 ファンアーカイブ':'Demon Slayer: Kimetsu no Yaiba Fan Archive';
document.querySelectorAll(SEL).forEach(el=>{if(el.dataset.k===undefined){el.dataset.en=el.innerHTML;el.dataset.k=el.textContent}const t=ja?jt(el.dataset.k):null;el.innerHTML=t||el.dataset.en});
setCred(ja);
document.querySelectorAll('.card p').forEach(p=>{if(p.dataset.en===undefined)p.dataset.en=p.innerHTML;p.innerHTML=(ja&&JD[p.dataset.en])||p.dataset.en});
document.querySelectorAll('.sf').forEach(i=>{if(!i.dataset.ph)i.dataset.ph=i.placeholder;i.placeholder=(ja&&PHT[i.dataset.ph])||i.dataset.ph});
const ft=$('footer');if(!ft.dataset.en)ft.dataset.en=ft.innerHTML;
ft.innerHTML=ja?'制作 <b style="color:var(--teal)">ディーラジ・サティーシュ・ピライ</b><br>ファン制作プロジェクト • 鬼滅の刃 / ufotable とは無関係です':ft.dataset.en;
const pl=(aud&&!aud.paused)||on,mu=$('#mu');mu.textContent=ja?(pl?'♪ 音楽：オン':'♪ 音楽：オフ'):(pl?'♪ Music: On':'♪ Music: Off');
const ld=$('#ld');if(/^♫ (Add|お気に入り)/.test(ld.textContent))ld.textContent=ja?'♫ お気に入りの鬼滅の曲を追加':'♫ Add your favorite Demon Slayer song';
if(lastInfo)showInfo(lastInfo);else $('#info').textContent=ja?'道場のオブジェクトをクリックしてください。':'Click any object in the dojo.';
$('#lg').textContent=ja?'English':'日本語'}
$('#lg').onclick=()=>{lang=lang=='ja'?'en':'ja';try{localStorage.setItem('lang',lang)}catch(e){}applyLang()};
applyLang();

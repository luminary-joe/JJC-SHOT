/* ===== YOUR PHOTOS =====
   Add image paths here (e.g. "photos/wedding-1.jpg"). Anything left empty shows a placeholder. */
const PHOTOS = {
  hero: [ "https://i.pinimg.com/736x/89/13/16/8913165d6588b8cc0fb92241a8e1b111.jpg","https://i.pinimg.com/736x/49/83/0d/49830de472ad598b1624dac03f08850c.jpg","https://i.pinimg.com/736x/72/bb/f3/72bbf3be3b9fc97e07acf1ea5b0effde.jpg","https://i.pinimg.com/736x/a0/e7/06/a0e706cede91a379018836486297ac39.jpg" ],
       
  portrait: "",
  weddings: [ "https://i.pinimg.com/736x/89/13/16/8913165d6588b8cc0fb92241a8e1b111.jpg", "https://i.pinimg.com/736x/23/89/41/238941e25c2ba1b9c4464688f05cd2a0.jpg", "https://i.pinimg.com/736x/42/e8/ee/42e8ee3da46470efd79ab494383452d3.jpg", "https://i.pinimg.com/736x/10/74/e3/1074e3df175799eff079bb377ee4be76.jpg", "https://i.pinimg.com/736x/39/59/ce/3959cedd7fc7b6e913fb6befdad5daba.jpg", "https://i.pinimg.com/736x/c8/32/27/c83227058c80e42b571905c44862b99a.jpg", "https://i.pinimg.com/736x/97/82/42/978242550cccf5fed5eff21bfef8b72f.jpg", "https://i.pinimg.com/736x/9e/a7/07/9ea707ff8718b0054d674cbc473732b7.jpg",""],   // up to 8
  portraits: [ "https://i.pinimg.com/1200x/0c/6e/31/0c6e31d9794a0cea9b017728e9d3cbd8.jpg" ,"https://i.pinimg.com/736x/6d/e0/8c/6de08ce7fd1c31376b9d355ad109be4e.jpg","https://i.pinimg.com/736x/49/83/0d/49830de472ad598b1624dac03f08850c.jpg","https://i.pinimg.com/736x/22/5d/80/225d80ade697039d466361aaff1db711.jpg", "https://i.pinimg.com/736x/84/cd/a4/84cda4f785c55fe8e949b6d05d73b140.jpg","https://i.pinimg.com/736x/df/d5/34/dfd534db621d2690b9762dd5ae0dae1a.jpg","https://i.pinimg.com/736x/f7/f1/0a/f7f10ad2ecda17b5eb873120e663bb9f.jpg","https://i.pinimg.com/736x/d5/d1/55/d5d155e8641019c6f76a0d3bd20168ff.jpg","https://i.pinimg.com/736x/b0/40/e3/b040e398d49fed812f5befc535752ab0.jpg" ],
  family: ["https://i.pinimg.com/736x/7f/b7/bd/7fb7bd62b33e4cba7cc2e069845ed9fd.jpg","https://i.pinimg.com/736x/0c/2f/18/0c2f18801028535a9cffe3cce3a80278.jpg", "https://i.pinimg.com/736x/91/66/3f/91663fe2dc83a6d35ea07f6e1b612b63.jpg", "https://i.pinimg.com/736x/72/bb/f3/72bbf3be3b9fc97e07acf1ea5b0effde.jpg", "https://i.pinimg.com/736x/1e/c9/dd/1ec9dd020a9d74e6d223fcaa2a0bcad0.jpg", "https://i.pinimg.com/736x/1c/f4/15/1cf415692e3a5b2ce69c798af11a60ec.jpg", "https://i.pinimg.com/736x/34/21/7d/34217d44f43534fa680053ec1a6dee95.jpg", "https://i.pinimg.com/736x/2f/c2/69/2fc269bf40a1094f329904041754fdc0.jpg","https://i.pinimg.com/736x/44/3a/83/443a83d531584bfcc4057fb701ac99ab.jpg",],
  events: ["https://i.pinimg.com/736x/a1/d8/51/a1d851f047bce7b8a0f1dfc5d0c65307.jpg","https://i.pinimg.com/736x/a0/e7/06/a0e706cede91a379018836486297ac39.jpg", "https://i.pinimg.com/736x/99/a1/2f/99a12fdd26148cd10629cb3bec6b0f2a.jpg","https://i.pinimg.com/736x/55/c8/32/55c832f572981108e5bbd53727a8d4b8.jpg", "https://i.pinimg.com/736x/0e/5f/f8/0e5ff83569cde2756bfb7c56264128dd.jpg", "https://i.pinimg.com/236x/07/d9/d9/07d9d92f98517d5b3fd722695390d92c.jpg", "https://i.pinimg.com/736x/d8/b1/b5/d8b1b5d434d9936201df3dd1c4694576.jpg", "https://i.pinimg.com/736x/a4/4e/ef/a44eef0cf384b6bca35766502791938b.jpg"]
};

const CATS = {
  weddings:  {name:"Weddings", hue:28,  text:"Stories of love, celebration and everything in between."},
  portraits: {name:"Portraits", hue:205, text:"Honest portraits with room to breathe."},
  family:    {name:"Maternity & Family", hue:345, text:"Quiet, tender moments you will want to keep."},
  events:    {name:"Events", hue:155, text:"The energy of the night, caught as it happens."}
};
const KEYS = Object.keys(CATS), PER = 8;
const $ = (s, r=document) => r.querySelector(s), $$ = (s, r=document) => [...r.querySelectorAll(s)];

/* image factory: real photo if provided, tonal placeholder if not */
function paint(el, cat, i){
  const src = cat==="hero"||cat==="portrait" ? PHOTOS[cat] : (PHOTOS[cat]||[])[i];
  const h = cat==="hero" ? 30 : cat==="portrait" ? 20 : CATS[cat].hue;
  el.style.backgroundImage = src
    ? `url("${src}")`
    : `linear-gradient(${140+i*23}deg,hsl(${h+i*7} 24% ${46+(i%4)*5}%),hsl(${h+40} 20% ${24+(i%3)*4}%))`;
  el.innerHTML = `<div class="z" style="background:inherit"></div>` + el.innerHTML;
}
function photo(cat, i, cls="", tag=true){
  const d = document.createElement("div");
  d.className = "ph hov "+cls;
  d.dataset.cat = cat; d.dataset.i = i;
  paint(d, cat, i);
  if(tag) d.insertAdjacentHTML("beforeend", `<span class="tag">${CATS[cat].name} / ${String(i+1).padStart(2,"0")}</span>`);
  return d;
}

/* ===== routing ===== */
function go(id){
  if(!$("#"+id)) id = "home";
  $$(".view").forEach(v => v.classList.toggle("on", v.id===id));
  $$(".links a").forEach(a => a.classList.toggle("on", a.dataset.go===id));
  $("#links").classList.remove("open");
  window.scrollTo({top:0, behavior:"instant"});
  if(location.hash !== "#"+id) history.pushState(null,"","#"+id);
  document.title = (id==="home" ? "JJC SHOTS" : id[0].toUpperCase()+id.slice(1)+" | JJC SHOTS");
  requestAnimationFrame(observe);
  if(id==="about") countUp();
}
document.addEventListener("click", e => {
  const a = e.target.closest("[data-go]");
  if(a){ e.preventDefault(); go(a.dataset.go); }
});
window.addEventListener("popstate", () => go(location.hash.slice(1)||"home"));

/* ===== theme ===== */
const root = document.documentElement, tbtn = $("#theme");
function setTheme(t){ root.dataset.theme = t; tbtn.textContent = t==="dark" ? "☼" : "☾"; try{localStorage.setItem("jjc-theme",t)}catch(e){} }
let saved = null; try{ saved = localStorage.getItem("jjc-theme") }catch(e){}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
tbtn.onclick = () => setTheme(root.dataset.theme==="dark" ? "light" : "dark");
$("#burger").onclick = () => $("#links").classList.toggle("open");

/* ===== build content ===== */
$$("[data-slot]").forEach(el => paint(el, el.dataset.slot, 0));

// mosaic: 2 large, 3 small, 1 wide, 3 small
const mosaicPlan = [["weddings",0,"m-a"],["portraits",0,"m-a"],["family",0,"m-b"],["events",0,"m-b"],["weddings",1,"m-b"],["portraits",1,"m-c"],["events",1,"m-b"],["family",1,"m-b"],["portraits",2,"m-b"]];
const MOMENTS = mosaicPlan.map(([c,i]) => ({cat:c,i}));
mosaicPlan.forEach(([c,i,cls],n) => {
  const p = photo(c,i,cls+" rv"); p.dataset.n = n; $("#mosaic").append(p);
});

// scroll series with counters
const seriesPlan = [["weddings",2],["portraits",3],["family",2],["events",2],["weddings",3],["portraits",4]];
seriesPlan.forEach(([c,i],n) => {
  const s = document.createElement("div"); s.className = "s-item rv";
  const p = photo(c,i,"",false); p.dataset.series = n;
  s.append(p);
  s.insertAdjacentHTML("beforeend", `<div class="meta"><span>${String(n+1).padStart(2,"0")} / ${String(seriesPlan.length).padStart(2,"0")}</span><span>${CATS[c].name}</span></div>`);
  $("#series").append(s);
});

// about strip
[["weddings",4],["portraits",5],["events",3],["family",3]].forEach(([c,i]) => $("#strip").append(photo(c,i)));

// contact photos
[["portraits",6],["weddings",5],["family",4]].forEach(([c,i]) => $("#cImgs").append(photo(c,i,"",false)));

// services
KEYS.forEach((k,n) => {
  const b = document.createElement("button"); b.className = "row"; b.dataset.cat = k;
  b.innerHTML = `<h3>${CATS[k].name}</h3><p>${CATS[k].text}</p><span class="go">View ${CATS[k].name.toLowerCase()} work →</span>`;
  $("#svcList").append(b);
  const p = photo(k,0,"",false); p.classList.remove("hov"); if(n===0) p.classList.add("on");
  p.dataset.prev = k; $("#prev").append(p);
});
function showPrev(k){ $$("#prev .ph").forEach(p => p.classList.toggle("on", p.dataset.prev===k)); }
$$(".row").forEach(r => {
  r.addEventListener("mouseenter", () => showPrev(r.dataset.cat));
  r.addEventListener("focus", () => showPrev(r.dataset.cat));
  r.addEventListener("click", () => openGallery(r.dataset.cat));
});

/* ===== hero cursor label ===== */
const hero = $("#hero"), cur = $("#cur");
hero.addEventListener("mousemove", e => { cur.style.left = e.clientX+"px"; cur.style.top = e.clientY+"px"; cur.classList.add("on"); });
hero.addEventListener("mouseleave", () => cur.classList.remove("on"));
hero.addEventListener("click", () => openGallery(window.heroCat||"weddings"));

const heroImages = PHOTOS.hero;
let heroIndex = 0;

function changeHeroImage(){
  heroIndex = (heroIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url("${heroImages[heroIndex]}")`;
}

hero.style.backgroundImage = `url("${heroImages[0]}")`;

setInterval(changeHeroImage, 5000);
/* ===== lightbox ===== */
const lb = $("#lb");
let L = {list:[], idx:0, cat:null};
const catList = k => Array.from({length:PER}, (_,i) => ({cat:k,i}));

$("#tabs").innerHTML = KEYS.map(k => `<button data-t="${k}">${CATS[k].name}</button>`).join("");
$$("#tabs button").forEach(b => b.onclick = () => openGallery(b.dataset.t));

function openGallery(k){
  L.cat = k; L.list = catList(k);
  lb.classList.remove("single"); lb.classList.add("on");
  document.body.style.overflow = "hidden";
  $$("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.t===k));
  const g = $("#lbGrid"); g.innerHTML = "";
  L.list.forEach((it,n) => g.append(photo(it.cat,it.i,"",true)));
  $("#lbClose").focus();
}
function openViewer(list, idx){
  L.list = list; L.idx = idx;
  lb.classList.add("on","single"); document.body.style.overflow = "hidden";
  $$("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.t===list[idx].cat));
  drawViewer();
}
function drawViewer(){
  const it = L.list[L.idx], v = $("#vImg");
  v.innerHTML = ""; paint(v, it.cat, it.i);
  v.style.animation = "none"; v.offsetWidth; v.style.animation = "vin .5s";
  $("#vCap").textContent = `${CATS[it.cat].name}  ${L.idx+1} / ${L.list.length}`;
}
const step = d => { L.idx = (L.idx+d+L.list.length) % L.list.length; drawViewer(); };
$("#prevB").onclick = () => step(-1); $("#nextB").onclick = () => step(1);
function closeLb(){
  if(lb.classList.contains("single") && L.cat){ lb.classList.remove("single"); return; }
  lb.classList.remove("on","single"); document.body.style.overflow = "";
}
$("#lbClose").onclick = closeLb;
document.addEventListener("keydown", e => {
  if(!lb.classList.contains("on")) return;
  if(e.key==="Escape") closeLb();
  if(lb.classList.contains("single")){ if(e.key==="ArrowRight") step(1); if(e.key==="ArrowLeft") step(-1); }
});
// clicks on photos
document.addEventListener("click", e => {
  const p = e.target.closest(".ph.hov"); if(!p || !p.dataset.cat) return;
  if(p.closest("#lbGrid")) { L.cat = p.dataset.cat; return openViewer(catList(p.dataset.cat), +p.dataset.i); }
  if(p.closest("#mosaic")) { L.cat = null; return openViewer(MOMENTS, +p.dataset.n); }
  if(p.closest(".s-item")) { L.cat = p.dataset.cat; return openViewer(catList(p.dataset.cat), +p.dataset.i % PER); }
  L.cat = p.dataset.cat; openViewer(catList(p.dataset.cat), +p.dataset.i % PER);
});

/* ===== scroll reveals + counters ===== */
const io = new IntersectionObserver(es => es.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } }), {threshold:.12});
function observe(){ $$(".view.on .rv:not(.in)").forEach(el => io.observe(el)); }
function countUp(){
  $$("[data-count]").forEach(el => {
    const end = +el.dataset.count, t0 = performance.now();
    (function f(t){ const k = Math.min((t-t0)/1200,1); el.textContent = Math.round(end*(1-Math.pow(1-k,3))) + (end>=100?"+":""); if(k<1) requestAnimationFrame(f); })(t0);
  });
}

/* ===== contact form ===== */
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, errs = $$(".err", f); let ok = true;
  const rules = [[f.name, v => v.trim().length>1, "Enter your name."],[f.email, v => /^\S+@\S+\.\S+$/.test(v), "Enter a valid email address."],[f.message, v => v.trim().length>9, "Tell me a little more (10+ characters)."]];
  rules.forEach(([el,test,msg]) => { const bad = !test(el.value); el.parentElement.querySelector(".err").textContent = bad ? msg : ""; if(bad) ok = false; });
  if(!ok) return;
  /* To receive real emails, send FormData(f) to a service such as Formspree here. */
  f.style.display = "none"; $("#thanks").style.display = "block";
});

$("#yr").textContent = new Date().getFullYear();
go(location.hash.slice(1) || "home");

/* ===== LIVE LAYER: motion & interaction ===== */
(function(){
  const fine = matchMedia("(hover:hover)").matches;

  /* page transition curtain */
  const curtain = document.createElement("div");
  curtain.className = "curtain"; curtain.textContent = "JJC SHOTS"; document.body.append(curtain);
  const baseGo = go; let busy = false;
  go = function(id){
    const now = $(".view.on");
    if(busy || !now || now.id === id || !$("#"+id)) return baseGo(id);
    busy = true; curtain.classList.add("cover");
    setTimeout(() => { baseGo(id); curtain.classList.add("leave"); }, 560);
    setTimeout(() => {
      curtain.style.transition = "none"; curtain.classList.remove("cover","leave");
      curtain.offsetWidth; curtain.style.transition = ""; busy = false;
    }, 1150);
  };

  /* scroll progress */
  const bar = document.createElement("div"); bar.id = "bar"; document.body.append(bar);

  /* custom cursor ring */
  if(fine){
    const ring = document.createElement("div"); ring.id = "ring"; document.body.append(ring);
    let tx = 0, ty = 0, x = 0, y = 0;
    addEventListener("mousemove", e => { tx = e.clientX; ty = e.clientY; });
    (function loop(){ x += (tx-x)*.18; y += (ty-y)*.18; ring.style.transform = `translate(${x}px,${y}px)`; requestAnimationFrame(loop); })();
    document.addEventListener("mouseover", e => ring.classList.toggle("big", !!e.target.closest("a,button,.ph.hov,input,textarea,select")));
    hero.addEventListener("mouseenter", () => document.body.classList.add("inhero"));
    hero.addEventListener("mouseleave", () => document.body.classList.remove("inhero"));
  }

  /* hero: letter-by-letter title + auto slideshow with Ken Burns */
  const h1 = $(".hero-t h1");
  h1.innerHTML = [...h1.textContent].map((c,i) => `<span style="animation-delay:${.15+i*.06}s">${c===" "?"&nbsp;":c}</span>`).join("");
  $("#hero .ph").remove();
  const box = document.createElement("div"); box.className = "slides"; hero.prepend(box);
  const hues = [30,205,345,155];
  const slides = KEYS.map((k,n) => {
    const s = document.createElement("div"); s.className = "ph slide"; s.dataset.cat = k;
    const src = (PHOTOS.heroes||[])[n] || (n===0 ? PHOTOS.hero : "");
    s.style.backgroundImage = src ? `url("${src}")` : `linear-gradient(${150+n*40}deg,hsl(${hues[n]} 26% 52%),hsl(${hues[n]+40} 22% 22%))`;
    s.innerHTML = `<div class="z" style="background:inherit"></div>`; box.append(s); return s;
  });
  const ui = document.createElement("div"); ui.className = "hero-ui";
  ui.innerHTML = `<div class="cn"></div><div class="dots">${KEYS.map(()=>"<button aria-label='Slide'><i></i></button>").join("")}</div>`;
  hero.append(ui);
  const dots = $$(".dots button", ui); let at = 0, timer;
  function show(n){
    at = n; window.heroCat = KEYS[n];
    slides.forEach((s,i) => s.classList.toggle("on", i===n));
    dots.forEach((d,i) => { d.classList.remove("on"); if(i===n){ d.offsetWidth; d.classList.add("on"); } });
    $(".cn", ui).textContent = `${CATS[KEYS[n]].name}  ${n+1}/${KEYS.length}`;
    clearInterval(timer); timer = setInterval(() => show((at+1)%KEYS.length), 5500);
  }
  dots.forEach((d,i) => d.addEventListener("click", e => { e.stopPropagation(); show(i); }));
  show(0);

  /* hero title drifts against the mouse */
  hero.addEventListener("mousemove", e => {
    const r = hero.getBoundingClientRect();
    $(".hero-t").style.transform = `translate(${-(e.clientX/r.width-.5)*30}px,${-(e.clientY/r.height-.5)*18}px)`;
  });

  /* category marquee */
  const t = KEYS.map(k => `<span>${CATS[k].name}</span>`).join("<i>✦</i>") + "<i>✦</i>";
  const mq = document.createElement("div"); mq.className = "marq";
  mq.innerHTML = `<div class="mq">${t.repeat(2)}${t.repeat(2)}</div>`; hero.after(mq);

  /* 3D tilt on the mosaic */
  $$("#mosaic .ph").forEach(p => {
    p.addEventListener("mousemove", e => {
      const r = p.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
      p.style.transition = "transform .12s"; p.style.transform = `perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg) scale(1.02)`;
    });
    p.addEventListener("mouseleave", () => { p.style.transition = "transform .6s"; p.style.transform = ""; });
  });

  /* magnetic buttons */
  $$(".send,.sec-h button,.tog").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.3}px,${(e.clientY-r.top-r.height/2)*.4}px)`;
    });
    b.addEventListener("mouseleave", () => b.style.transform = "");
  });

  /* scroll: progress bar, hero push, image parallax */
  let ticking = false;
  function onScroll(){
    ticking = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max>0 ? y/max*100 : 0) + "%";
    if(y < innerHeight) box.style.transform = `translateY(${y*.25}px)`;
    $$(".view.on .s-item .ph").forEach(p => {
      const r = p.getBoundingClientRect();
      if(r.bottom < 0 || r.top > innerHeight) return;
      const off = (r.top + r.height/2 - innerHeight/2) * -.12;
      p.style.setProperty("--py", Math.max(-70, Math.min(70, off)) + "px");
    });
  }
  addEventListener("scroll", () => { if(!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, {passive:true});
  onScroll();

  /* swipe in the photo viewer */
  let sx = 0; const v = $("#viewer");
  v.addEventListener("touchstart", e => sx = e.touches[0].clientX, {passive:true});
  v.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - sx; if(Math.abs(d) > 50) step(d<0 ? 1 : -1); });
})();
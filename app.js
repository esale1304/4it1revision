(function(){
"use strict";
var L=window.LESSONS, C=window.CONTENTS, SUB=window.SUBTOPICS, app=document.getElementById("app");
var KEY="ict4it1.lessons.v1", mem=null;

/* ---------- storage ---------- */
function load(){
  if(mem) return mem;
  var s=null; try{ s=JSON.parse(localStorage.getItem(KEY)); }catch(e){}
  mem=s&&typeof s==="object"?s:{};
  ["q","cards","cloze","brain"].forEach(function(k){mem[k]=mem[k]||{};});
  return mem;
}
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(load())); }catch(e){} }

/* ---------- helpers ---------- */
function h(tag,attrs){
  var el=document.createElement(tag);
  if(attrs) for(var k in attrs){
    var v=attrs[k]; if(v==null||v===false) continue;
    if(k==="class") el.className=v; else if(k==="html") el.innerHTML=v;
    else if(k.slice(0,2)==="on") el.addEventListener(k.slice(2),v);
    else el.setAttribute(k,v===true?"":v);
  }
  for(var i=2;i<arguments.length;i++) add(el,arguments[i]);
  return el;
}
function add(el,c){
  if(c==null||c===false) return;
  if(Array.isArray(c)) c.forEach(function(x){add(el,x);});
  else el.appendChild(typeof c==="string"||typeof c==="number"?document.createTextNode(c):c);
}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function fmt(s){return esc(s).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");}
function plain(s){return String(s).replace(/\*\*/g,"");}
function marked(s){return esc(s).replace(/\[(\d)\]/g,"<mark>[$1]</mark>");}
function lesson(id){return L.filter(function(l){return l.id===id;})[0];}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function norm(s){return String(s).toLowerCase().replace(/[.,;:!?'"’]/g,"").replace(/\s+/g," ").trim();}
function pct(n,d){return d?Math.round(100*n/d):0;}
function meter(p,cls){return h("div",{class:"meter "+(cls||""),role:"img","aria-label":p+" percent"},h("i",{style:"width:"+p+"%"}));}
function btnLink(href,txt,alt){return h("a",{class:"btn"+(alt?" alt":""),href:href,style:"text-decoration:none;display:inline-flex;align-items:center"},txt);}
function rng(seedStr){var s=0;for(var i=0;i<seedStr.length;i++)s=(s*31+seedStr.charCodeAt(i))>>>0;
  return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function show(node){app.innerHTML="";app.appendChild(node);window.scrollTo(0,0);}

/* ---------- lesson statistics ---------- */
function qKeys(l){
  var p=l.practice,k=[];
  p.tasks.forEach(function(_,i){k.push({k:"t"+i,m:p.tasks[i].marks});});
  k.push({k:"g",m:p.guided.marks});k.push({k:"a",m:p.apply.marks});
  p.kca.forEach(function(q,i){k.push({k:"ka"+i,m:q.marks});});
  p.kcb.qs.forEach(function(q,i){k.push({k:"kb"+i,m:q.marks});});
  p.exam.forEach(function(q){k.push({k:"x"+q.id,m:q.type==="mcq"?1:q.marks});});
  k.push({k:"exit",m:1});
  return k;
}
function lessonStats(l){
  var st=load(),keys=qKeys(l),done=0,got=0,max=0;
  keys.forEach(function(x){var s=st.q[l.id+":"+x.k];if(s){done++;got+=s.got;max+=s.max;}});
  return {total:keys.length,done:done,got:got,max:max};
}
function recallItems(l){
  var a=[];
  l.vocab.forEach(function(v,i){a.push({key:l.id+"-v"+i,q:v[0],a:v[1],term:true});});
  l.cards.forEach(function(c,i){a.push({key:l.id+"-c"+i,q:c[0],a:c[1]});});
  return a;
}
function mastery(l){
  var st=load(),it=recallItems(l),sum=0;
  it.forEach(function(c){var s=st.cards[c.key];sum+=s?s.box:0;});
  return pct(sum,it.length*3);
}

/* ---------- router ---------- */
function route(){
  var p=(location.hash||"#/").replace(/^#\/?/,"").split("/");
  document.querySelectorAll("nav a").forEach(function(a){a.setAttribute("aria-current","page");});
  if(p[0]==="lesson"&&lesson(p[1])) viewLesson(lesson(p[1]),p[2]||"learn",p[3]);
  else viewHome();
}
window.addEventListener("hashchange",route);

/* ---------- Home ---------- */
function viewHome(){
  document.title="4IT1 Revise: Topic 1 Digital Devices";
  var wrap=h("div"),built=L.length;
  wrap.appendChild(h("p",{class:"kicker"},"Edexcel International GCSE ICT (4IT1) · Paper 1"));
  wrap.appendChild(h("h1",null,"Topic 1: Digital Devices"));
  wrap.appendChild(h("p",{class:"lead"},"Revise lesson by lesson. Each lesson has notes, practice with model answers, retrieval practice, a printable knowledge organiser, puzzles and a mind map."));
  wrap.appendChild(h("div",{class:"callout tip"},h("b",null,"Preview"),built+" of "+C.length+" lessons are ready so far. Lessons marked 'coming soon' will be added."));
  Object.keys(SUB).forEach(function(sid){
    wrap.appendChild(h("h2",null,sid+" "+SUB[sid]));
    var g=h("div",{class:"grid lessonlist"});
    C.filter(function(c){return c[0].slice(0,3)===sid;}).forEach(function(c){
      var l=lesson(c[0]);
      if(!l){g.appendChild(h("div",{class:"card soon"},h("span",{class:"kicker"},"Lesson "+c[0]),h("h3",null,c[1]),h("div",{class:"small"},"Coming soon")));return;}
      var s=lessonStats(l),m=mastery(l);
      g.appendChild(h("a",{class:"card",href:"#/lesson/"+l.id+"/learn"},
        h("span",{class:"kicker"},"Lesson "+l.id),h("h3",null,l.title),
        h("div",{class:"small"},"Practice: "+s.done+" of "+s.total+" questions"),meter(pct(s.done,s.total),"d"),
        h("div",{class:"small"},"Recall: "+m+"%"),meter(m)));
    });
    wrap.appendChild(g);
  });
  wrap.appendChild(h("p",{style:"margin-top:22px"},h("button",{class:"btn bad",onclick:function(){
    if(confirm("Clear all saved progress on this device?")){mem={q:{},cards:{},cloze:{},brain:{}};save();viewHome();}}},"Reset my progress")));
  show(wrap);
}

/* ---------- Lesson shell ---------- */
var TABS=[["learn","Learn"],["practise","Practise"],["recall","Recall"],["organiser","Organiser"],["puzzles","Puzzles"],["map","Mind map"]];
function viewLesson(l,tab,sub){
  document.title="4IT1 Revise: Lesson "+l.id+" "+l.title;
  var wrap=h("div"),head=h("div",{class:"lh noprint"});
  var sel=h("select",{"aria-label":"Choose lesson",onchange:function(){location.hash="#/lesson/"+sel.value+"/"+tab;}});
  C.forEach(function(c){var o=h("option",{value:c[0],disabled:!lesson(c[0])},c[0]+" "+c[1]+(lesson(c[0])?"":" (coming soon)"));sel.appendChild(o);});
  sel.value=l.id;
  head.appendChild(h("div",{class:"row",style:"justify-content:space-between"},h("a",{href:"#/"},"← All lessons"),sel));
  head.appendChild(h("p",{class:"kicker",style:"margin:12px 0 0"},"Lesson "+l.id+" · about "+l.minutes+" minutes"));
  head.appendChild(h("h1",null,l.title));
  var tabs=h("div",{class:"tabs",role:"tablist"});
  TABS.forEach(function(t){tabs.appendChild(h("button",{role:"tab","aria-selected":t[0]===tab,onclick:function(){location.hash="#/lesson/"+l.id+"/"+t[0];}},t[1]));});
  head.appendChild(tabs);
  wrap.appendChild(head);
  var body=h("div");wrap.appendChild(body);
  show(wrap);
  if(tab==="practise") tabPractise(body,l);
  else if(tab==="recall") tabRecall(body,l,sub||"cards");
  else if(tab==="organiser") tabOrganiser(body,l);
  else if(tab==="puzzles") tabPuzzles(body,l,sub||"crossword");
  else if(tab==="map") tabMap(body,l);
  else tabLearn(body,l);
}

/* ---------- Learn ---------- */
function tabLearn(body,l){
  body.appendChild(h("div",{class:"bigq"},h("b",null,"Big question"),h("p",null,l.big)));
  body.appendChild(h("h2",null,"What you will learn"));
  var ul=h("ul",{class:"notes"});l.objectives.forEach(function(o){ul.appendChild(h("li",null,o));});body.appendChild(ul);
  var sp=h("div");l.spec.forEach(function(s){sp.appendChild(h("span",{class:"pill"},s.split(" ")[0]));});
  body.appendChild(h("details",{style:"margin:8px 0"},h("summary",{class:"small",style:"cursor:pointer"},"Specification points: "+l.spec.map(function(s){return s.split(" ")[0];}).join(", ")),
    h("ul",null,l.spec.map(function(s){return h("li",{class:"small"},s);}))));
  body.appendChild(h("h2",null,"Key vocabulary"));
  var tb=h("table",{class:"vt"}),tr=h("tr");tr.appendChild(h("th",{scope:"col"},"Term"));tr.appendChild(h("th",{scope:"col"},"Meaning"));tb.appendChild(h("thead",null,tr));
  var tbody=h("tbody");l.vocab.forEach(function(v){tbody.appendChild(h("tr",null,h("th",{scope:"row"},v[0]),h("td",null,v[1])));});
  tb.appendChild(tbody);body.appendChild(h("div",{class:"tw"},tb));
  l.learn.forEach(function(sec,i){
    body.appendChild(h("h2",null,(i+1)+". "+sec.h));
    var u=h("ul",{class:"notes"});sec.notes.forEach(function(n){u.appendChild(h("li",{html:fmt(n)}));});body.appendChild(u);
  });
  body.appendChild(h("div",{class:"callout tip"},h("b",null,"Thinking like an ICT specialist"),l.think));
  body.appendChild(h("div",{class:"callout warn"},h("b",null,"Exam tip"),l.tip));
  body.appendChild(h("div",{class:"row",style:"margin-top:16px"},btnLink("#/lesson/"+l.id+"/practise","Now practise this lesson"),btnLink("#/lesson/"+l.id+"/recall","Recall practice",true)));
}

/* ---------- Practise ---------- */
function qcard(l,key,o){
  var st=load(),sk=l.id+":"+key,saved=st.q[sk];
  var card=h("div",{class:"card qc"});
  if(o.ctx) card.appendChild(h("div",{class:"ctx"},o.ctx));
  if(o.scenario) card.appendChild(h("div",{class:"scen"},o.scenario));
  card.appendChild(h("div",{class:"qtext",style:"margin:.3em 0 .6em"},(o.cmdless?"":"")+o.q,h("span",{class:"mk"},o.marks+(o.marks>1?" marks":" mark"))));
  if(o.starters) card.appendChild(h("div",{class:"starters"},h("b",null,"Sentence starters"),o.starters.map(function(s){return h("div",null,"“"+s+"”");})));
  var ta=h("textarea",{"aria-label":"Your answer",placeholder:"Write your answer first…",style:"min-height:"+(o.marks>=3?"110px":"70px")});
  var out=h("div",{"aria-live":"polite"});
  var showBtn=h("button",{class:"btn",onclick:reveal},"Show model answer");
  card.appendChild(ta);card.appendChild(h("div",{style:"margin-top:10px"},showBtn));card.appendChild(out);
  function reveal(){
    showBtn.disabled=true;ta.readOnly=true;
    out.appendChild(h("div",{class:"model"},h("b",{class:"t"},"Model answer"),h("span",{html:marked(o.a)})));
    var chips=h("div",{class:"rate",role:"group","aria-label":"Mark yourself"}),msg=h("span",{class:"saved"});
    chips.appendChild(h("span",{class:"small"},"Compare honestly. Marks I earned:"));
    for(var m=0;m<=o.marks;m++)(function(m){
      var c=h("button",{class:"chip","aria-pressed":saved&&saved.got===m,onclick:function(){
        st.q[sk]={got:m,max:o.marks};save();
        [].forEach.call(chips.querySelectorAll("button"),function(b){b.setAttribute("aria-pressed","false");});
        c.setAttribute("aria-pressed","true");msg.textContent="Saved: "+m+" out of "+o.marks;
      }},String(m));chips.appendChild(c);
    })(m);
    chips.appendChild(msg);
    if(saved) msg.textContent="Last time: "+saved.got+" out of "+saved.max;
    out.appendChild(chips);
  }
  return card;
}
function examCard(l,q){
  var st=load(),sk=l.id+":x"+q.id,saved=st.q[sk],mk=q.type==="mcq"?1:q.marks;
  var card=h("div",{class:"card qc"}),out=h("div",{"aria-live":"polite"}),done=false;
  card.appendChild(h("div",{class:"qtext",style:"margin:.2em 0 .6em"},(q.type==="short"?q.cmd+": ":"")+q.q,h("span",{class:"mk"},mk+(mk>1?" marks":" mark"))));
  if(q.type==="mcq"){
    var btns=[];
    q.opts.forEach(function(o,k){
      var b=h("button",{class:"opt",onclick:function(){
        if(done) return;done=true;
        btns.forEach(function(x,j){x.disabled=true;if(j===q.ans)x.classList.add("ok");});
        var ok=k===q.ans;if(!ok)b.classList.add("no");
        st.q[sk]={got:ok?1:0,max:1};save();
        out.appendChild(h("div",{class:"fb "+(ok?"ok":"no")},h("strong",null,ok?"Correct. ":"Not quite. "),q.why));
      }},h("span",{class:"l"},"ABCD".charAt(k)),h("span",null,o));
      btns.push(b);card.appendChild(b);
    });
  } else {
    var ta=h("textarea",{"aria-label":"Your answer",placeholder:"Write your answer first…"});
    var chk=h("button",{class:"btn",onclick:function(){
      chk.disabled=true;ta.readOnly=true;
      var boxes=[],ms=h("div",{class:"ms"});
      q.points.forEach(function(p){var cb=h("input",{type:"checkbox"});boxes.push(cb);ms.appendChild(h("label",null,cb,h("span",null,p)));});
      var msg=h("div",{class:"fb info"},"Tick each mark-scheme point you made (maximum "+q.marks+").");
      var sv=h("button",{class:"btn",onclick:function(){
        var n=boxes.filter(function(b){return b.checked;}).length,got=Math.min(n,q.marks);
        st.q[sk]={got:got,max:q.marks};save();sv.disabled=true;boxes.forEach(function(b){b.disabled=true;});
        msg.textContent="You scored "+got+" out of "+q.marks+".";
      }},"Save my score");
      out.appendChild(msg);out.appendChild(ms);out.appendChild(sv);
    }},"Check my answer");
    card.appendChild(ta);card.appendChild(h("div",{style:"margin-top:10px"},chk));
    if(saved) card.appendChild(h("p",{class:"small"},"Last time: "+saved.got+" out of "+saved.max));
  }
  card.appendChild(out);return card;
}
function tabPractise(body,l){
  var p=l.practice,s=lessonStats(l);
  body.appendChild(h("div",{class:"card"},h("strong",null,s.done+" of "+s.total+" questions attempted"),meter(pct(s.done,s.total),"d"),
    h("p",{class:"small",style:"margin:0"},"Write your answer first, then reveal the model answer and mark yourself honestly. "+(s.max?"Marks so far: "+s.got+" out of "+s.max+".":""))));
  body.appendChild(h("h2",null,"1. Check as you learn"));
  p.tasks.forEach(function(t,i){body.appendChild(qcard(l,"t"+i,{ctx:t.ctx,q:t.q,marks:t.marks,a:t.a}));});
  body.appendChild(h("h2",null,"2. How to answer: worked example"));
  body.appendChild(h("div",{class:"wk"},h("div",{class:"qtext",style:"margin:0 0 .5em"},p.worked.q,h("span",{class:"mk"},p.worked.marks+" marks")),
    h("div",{class:"model",style:"margin:6px 0"},h("b",{class:"t"},"Model answer"),h("span",{html:marked(p.worked.model)})),
    h("p",{style:"margin:.4em 0 0"},h("strong",null,"Why this works: "),p.worked.why)));
  body.appendChild(h("h3",null,"Now you try"));
  body.appendChild(qcard(l,"g",{q:p.guided.q,marks:p.guided.marks,starters:p.guided.starters,a:p.guided.a}));
  body.appendChild(h("h2",null,"3. Apply it"));
  body.appendChild(qcard(l,"a",{scenario:p.apply.scenario,q:p.apply.q,marks:p.apply.marks,a:p.apply.a}));
  body.appendChild(h("h2",null,"4. Knowledge check A"));
  p.kca.forEach(function(q,i){body.appendChild(qcard(l,"ka"+i,{q:(i+1)+". "+q.q,marks:q.marks,a:q.a}));});
  body.appendChild(h("h2",null,"5. Knowledge check B: application"));
  p.kcb.qs.forEach(function(q,i){body.appendChild(qcard(l,"kb"+i,{scenario:p.kcb.scenario,q:q.q,marks:q.marks,a:q.a}));});
  body.appendChild(h("h2",null,"6. Exam-style practice"));
  body.appendChild(h("div",{class:"callout warn"},h("b",null,"Exam tip"),l.tip));
  p.exam.forEach(function(q){body.appendChild(examCard(l,q));});
  body.appendChild(h("h2",null,"7. Exit ticket"));
  body.appendChild(qcard(l,"exit",{q:p.exit.q,marks:1,a:p.exit.a}));
  body.appendChild(h("div",{class:"row",style:"margin-top:16px"},btnLink("#/lesson/"+l.id+"/recall","Next: recall practice")));
}

/* ---------- Recall ---------- */
var DAY=86400000,INTERVAL=[0,DAY,3*DAY,7*DAY];
function tabRecall(body,l,sub){
  var tabs=h("div",{class:"sub",role:"group","aria-label":"Recall activities"});
  [["cards","Flashcards"],["recap","Last lesson recap"],["cloze","Fill the gaps"],["brain","Brain dump"]].forEach(function(x){
    tabs.appendChild(h("button",{class:"chip","aria-pressed":x[0]===sub,onclick:function(){location.hash="#/lesson/"+l.id+"/recall/"+x[0];}},x[1]));});
  body.appendChild(tabs);
  var b=h("div");body.appendChild(b);
  if(sub==="recap") recap(b,l); else if(sub==="cloze") cloze(b,l); else if(sub==="brain") brain(b,l); else cards(b,l);
}
function cards(body,l){
  var st=load(),all=recallItems(l),now=Date.now();
  var queue=shuffle(all.filter(function(c){var s=st.cards[c.key];return !s||s.due<=now;})),idx=0;
  var mastered=all.filter(function(c){var s=st.cards[c.key];return s&&s.box>=3;}).length;
  var info=h("p",{class:"small"}),stage=h("div");body.appendChild(info);body.appendChild(stage);
  function step(){
    info.textContent=all.length+" cards · "+mastered+" mastered · "+Math.max(queue.length-idx,0)+" left this session";
    stage.innerHTML="";
    if(!queue.length){stage.appendChild(h("div",{class:"card"},h("h3",null,"Nothing due right now"),h("p",null,"You have seen every card recently. Cards return later, depending on how well you knew them."),
      h("button",{class:"btn",onclick:function(){queue=shuffle(all);idx=0;step();}},"Practise all cards anyway")));return;}
    if(idx>=queue.length){stage.appendChild(h("div",{class:"card"},h("h3",null,"Session complete"),h("p",null,"Cards you missed will come back soon. Cards you knew come back after a longer gap."),
      h("div",{class:"row"},h("button",{class:"btn",onclick:function(){viewLesson(l,"recall","cards");}},"New session"),btnLink("#/lesson/"+l.id+"/recall/cloze","Fill the gaps",true))));return;}
    var c=queue[idx],fc=h("div",{class:"fc"});
    fc.appendChild(h("button",{class:"face",onclick:flip,"aria-label":"Show answer"},h("span",{class:"small"},c.term?"Key term":"Question"),h("span",null,c.term?"What is meant by “"+c.q+"”?":c.q),h("span",{class:"hint"},"Say your answer, then tap to reveal")));
    stage.appendChild(fc);
    function flip(){
      fc.innerHTML="";
      fc.appendChild(h("div",{class:"face back",style:"min-height:210px;border:2px solid var(--teal);border-radius:14px;background:var(--tealbg);padding:24px 22px;display:flex;flex-direction:column;justify-content:center;gap:8px;font-size:1.1rem","aria-live":"polite"},h("span",{class:"small"},c.term?c.q:"Answer"),h("strong",null,c.a)));
      stage.appendChild(h("div",{class:"row",style:"margin-top:12px"},h("button",{class:"btn",onclick:function(){rate(true);}},"I knew it"),h("button",{class:"btn bad",onclick:function(){rate(false);}},"Not yet")));
    }
    function rate(ok){
      var s=st.cards[c.key]||{box:0,due:0};s.box=ok?Math.min(3,s.box+1):0;s.due=Date.now()+INTERVAL[s.box];
      if(ok&&s.box===3)mastered++;st.cards[c.key]=s;save();idx++;step();
    }
  }
  step();
}
function recap(body,l){
  body.appendChild(h("p",{class:"lead",style:"font-size:.98rem"},l.priorNote||"Answer from memory first. These questions revisit the previous lesson."));
  l.prior.forEach(function(q){
    var out=h("div"),b=h("button",{class:"btn",onclick:function(){b.disabled=true;out.appendChild(h("div",{class:"model"},h("b",{class:"t"},"Answer"),q.a));}},"Show answer");
    body.appendChild(h("div",{class:"card qc"},h("div",{class:"qtext",style:"margin:.2em 0 .6em"},q.q),b,out));
  });
}
function cloze(body,l){
  var items=shuffle(l.cloze),i=0,score=0;
  function step(){
    body.innerHTML="";
    if(i>=items.length){body.appendChild(h("div",{class:"card"},h("h3",null,"You got "+score+" out of "+items.length),h("button",{class:"btn",onclick:function(){i=0;score=0;items=shuffle(items);step();}},"Go again")));return;}
    var it=items[i],parts=it.t.split("___"),done=false;
    var inp=h("input",{type:"text",size:16,"aria-label":"Missing word",autocomplete:"off",autocapitalize:"none",spellcheck:"false"});
    var fb=h("div",{"aria-live":"polite"}),next=h("button",{class:"btn",style:"display:none",onclick:function(){i++;step();}},"Next");
    var go=h("button",{class:"btn",onclick:check},"Check");
    function check(){if(done)return;done=true;inp.readOnly=true;
      var ok=it.a.some(function(a){return norm(a)===norm(inp.value);});if(ok)score++;
      fb.appendChild(h("div",{class:"fb "+(ok?"ok":"no")},ok?"Correct.":"Not quite. The answer is: "+it.a[0]+"."));go.style.display="none";next.style.display="";next.focus();}
    inp.addEventListener("keydown",function(e){if(e.key==="Enter"){e.preventDefault();if(!done)check();else next.click();}});
    body.appendChild(h("p",{class:"small"},"Question "+(i+1)+" of "+items.length));
    body.appendChild(h("div",{class:"card"},h("p",{class:"qtext"},parts[0],inp,parts[1]||""),h("div",{class:"row"},go,next),fb));
    inp.focus();
  }
  step();
}
function brain(body,l){
  var pts=l.organiser.map(plain);
  body.appendChild(h("div",{class:"card"},h("h3",{style:"margin-top:0"},"Brain dump"),h("p",null,"Write down everything you remember from Lesson "+l.id+": "+l.title+". Do not look at your notes. Aim for key terms, facts and examples.")));
  var ta=h("textarea",{"aria-label":"Brain dump",style:"margin-top:12px",placeholder:"Start writing…"});
  var timer=h("span",{class:"timer"},"3:00"),left=180,iv=null;
  var sb=h("button",{class:"btn alt",onclick:function(){
    if(iv){clearInterval(iv);iv=null;sb.textContent="Start 3 minute timer";return;}
    left=180;sb.textContent="Stop timer";
    iv=setInterval(function(){left--;var v=Math.max(left,0);timer.textContent=Math.floor(v/60)+":"+("0"+v%60).slice(-2);
      if(left<=0||!document.body.contains(timer)){clearInterval(iv);iv=null;sb.textContent="Start 3 minute timer";}},1000);}},"Start 3 minute timer");
  var out=h("div");
  var rv=h("button",{class:"btn",onclick:function(){
    rv.disabled=true;ta.readOnly=true;var boxes=[],ms=h("div",{class:"ms"});
    pts.forEach(function(p){var cb=h("input",{type:"checkbox"});boxes.push(cb);ms.appendChild(h("label",null,cb,h("span",null,p)));});
    var tally=h("p",{class:"fb info","aria-live":"polite"},"Tick every point you had written down.");
    boxes.forEach(function(b){b.addEventListener("change",function(){var n=boxes.filter(function(x){return x.checked;}).length;
      tally.textContent="You remembered "+n+" of "+boxes.length+" key points. Anything unticked is your next revision target.";
      load().brain[l.id]={pct:pct(n,boxes.length)};save();});});
    out.appendChild(h("h3",null,"Key points to check"));out.appendChild(ms);out.appendChild(tally);}},"Check against key points");
  body.appendChild(h("div",{class:"row",style:"margin:12px 0 0"},sb,timer));body.appendChild(ta);
  body.appendChild(h("div",{style:"margin-top:10px"},rv));body.appendChild(out);
}

/* ---------- Organiser ---------- */
function tabOrganiser(body,l){
  body.appendChild(h("div",{class:"row noprint",style:"margin-bottom:12px"},
    h("button",{class:"btn",onclick:function(){try{window.print();}catch(e){}}},"Print this organiser"),
    h("span",{class:"noprint-note"},"If the print button does nothing, use your browser's print option (Ctrl+P or Cmd+P).")));
  var o=h("div",{class:"org"});
  o.appendChild(h("p",{class:"kicker",style:"margin:0"},"Knowledge organiser · Lesson "+l.id));
  o.appendChild(h("h2",null,l.title));
  o.appendChild(h("p",{class:"small"},"Spec: "+l.spec.map(function(s){return s.split(" ")[0];}).join(", ")));
  var cols=h("div",{class:"cols"}),c1=h("div"),c2=h("div");
  c1.appendChild(h("h3",null,"I can…"));
  c1.appendChild(h("ul",null,l.objectives.map(function(x){return h("li",null,x.replace(/^(Understand|Know about|Know|Describe)\s/,function(m){return m.toLowerCase();}).replace(/^./,function(ch){return ch.toLowerCase();}));})));
  c1.appendChild(h("h3",null,"Key facts"));
  c1.appendChild(h("ul",null,l.organiser.map(function(x){return h("li",{html:fmt(x)});})));
  c2.appendChild(h("h3",null,"Key vocabulary"));
  var tb=h("table"),tbody=h("tbody");l.vocab.forEach(function(v){tbody.appendChild(h("tr",null,h("th",{scope:"row",style:"width:34%"},v[0]),h("td",null,v[1])));});
  tb.appendChild(tbody);c2.appendChild(tb);
  c2.appendChild(h("h3",null,"Exam tip"));c2.appendChild(h("p",{style:"font-size:.93rem;margin:.2em 0"},l.tip));
  c2.appendChild(h("h3",null,"Think about it"));c2.appendChild(h("p",{style:"font-size:.93rem;margin:.2em 0"},l.think));
  cols.appendChild(c1);cols.appendChild(c2);o.appendChild(cols);body.appendChild(o);
}

/* ---------- Puzzles ---------- */
function tabPuzzles(body,l,sub){
  var tabs=h("div",{class:"sub",role:"group"});
  [["crossword","Crossword"],["wordsearch","Word search"]].forEach(function(x){
    tabs.appendChild(h("button",{class:"chip","aria-pressed":x[0]===sub,onclick:function(){location.hash="#/lesson/"+l.id+"/puzzles/"+x[0];}},x[1]));});
  body.appendChild(tabs);
  var b=h("div");body.appendChild(b);
  if(sub==="wordsearch") wordsearch(b,l); else crossword(b,l);
}
function wordsearch(body,l){
  var words=l.puzzle.map(function(p){return p[0];}),r=rng(l.id+"ws");
  var size=Math.max(13,Math.max.apply(null,words.map(function(w){return w.length;}))+1);
  var g=[],i,j;for(i=0;i<size;i++){g.push([]);for(j=0;j<size;j++)g[i].push("");}
  var dirs=[[0,1],[1,0],[1,1],[0,-1],[-1,0],[-1,-1],[1,-1],[-1,1]];
  words.slice().sort(function(a,b){return b.length-a.length;}).forEach(function(w){
    for(var t=0;t<400;t++){
      var d=dirs[Math.floor(r()*dirs.length)],r0=Math.floor(r()*size),c0=Math.floor(r()*size),er=r0+d[0]*(w.length-1),ec=c0+d[1]*(w.length-1);
      if(er<0||er>=size||ec<0||ec>=size) continue;
      var ok=true;for(var k=0;k<w.length;k++){var ch=g[r0+d[0]*k][c0+d[1]*k];if(ch&&ch!==w[k]){ok=false;break;}}
      if(!ok) continue;
      for(k=0;k<w.length;k++) g[r0+d[0]*k][c0+d[1]*k]=w[k];break;
    }});
  var A="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(i=0;i<size;i++)for(j=0;j<size;j++)if(!g[i][j])g[i][j]=A.charAt(Math.floor(r()*26));
  var found={},start=null,msg=h("p",{class:"small","aria-live":"polite"},"Tap the first letter of a word, then tap its last letter. Words can run in any direction.");
  var grid=h("div",{class:"ws",style:"grid-template-columns:repeat("+size+",var(--cs,34px))"}),cells=[];
  for(i=0;i<size;i++){cells.push([]);for(j=0;j<size;j++)(function(i,j){
    var b=h("button",{"aria-label":g[i][j]+", row "+(i+1)+" column "+(j+1),onclick:function(){pick(i,j);}},g[i][j]);cells[i].push(b);grid.appendChild(b);})(i,j);}
  var wl=h("div",{class:"wl"}),spans={};
  l.puzzle.forEach(function(p){var s=h("span",null,p[0]);spans[p[0]]=s;wl.appendChild(s);});
  function pick(i,j){
    if(!start){start=[i,j];cells[i][j].classList.add("start");return;}
    var a=start,dr=j===a[1]?(i>a[0]?1:-1):0;
    cells[a[0]][a[1]].classList.remove("start");start=null;
    var di=i-a[0],dj=j-a[1];
    if(!(di===0||dj===0||Math.abs(di)===Math.abs(dj))||(di===0&&dj===0)){msg.textContent="That is not a straight line. Try again.";return;}
    var n=Math.max(Math.abs(di),Math.abs(dj)),sr=Math.sign(di),sc=Math.sign(dj),s="",pos=[];
    for(var k=0;k<=n;k++){s+=g[a[0]+sr*k][a[1]+sc*k];pos.push([a[0]+sr*k,a[1]+sc*k]);}
    var rev=s.split("").reverse().join(""),w=words.indexOf(s)>=0?s:words.indexOf(rev)>=0?rev:null;
    if(w&&!found[w]){found[w]=1;pos.forEach(function(p){cells[p[0]][p[1]].classList.add("found");});spans[w].className="done";
      var n2=Object.keys(found).length;msg.textContent=n2===words.length?"All "+words.length+" words found. Well done!":"Found "+w+". "+(words.length-n2)+" to go.";}
    else msg.textContent=w?"You already found that one.":"“"+s+"” is not one of the words.";
  }
  body.appendChild(h("p",{class:"small"},"Find all "+words.length+" key words from this lesson."));
  body.appendChild(msg);body.appendChild(h("div",{class:"scroll"},grid));body.appendChild(wl);
  body.appendChild(h("button",{class:"btn alt",onclick:function(){words.forEach(function(w){
    if(found[w])return;/* show first letter hint */ for(i=0;i<size;i++)for(j=0;j<size;j++)for(var d=0;d<8;d++){var dd=dirs[d],ok=true;
      for(var k=0;k<w.length;k++){var y=i+dd[0]*k,x=j+dd[1]*k;if(y<0||y>=size||x<0||x>=size||g[y][x]!==w[k]){ok=false;break;}}
      if(ok){cells[i][j].classList.add("hint");}}});msg.textContent="Hint: the first letters of the remaining words are shaded.";}},"Show hints"));
}
function genCross(l,seed){
  var r=rng(l.id+"cw"+seed),ents=l.puzzle.map(function(p){return {ans:p[0],clue:p[1]};}).sort(function(a,b){return b.ans.length-a.ans.length;});
  if(seed>0) ents=shuffle(ents).sort(function(a,b){return (b.ans.length-a.ans.length)+(r()-0.5)*6;});
  var cells={},placed=[],pending=ents.slice();
  function key(y,x){return y+","+x;}
  function fit(w,y,x,dir,first){
    var dy=dir==="down"?1:0,dx=dir==="across"?1:0,n=0,i;
    if(cells[key(y-dy,x-dx)]||cells[key(y+dy*w.length,x+dx*w.length)]) return -1;
    for(i=0;i<w.length;i++){var yy=y+dy*i,xx=x+dx*i,ex=cells[key(yy,xx)];
      if(ex){if(ex.ch!==w[i]||ex.dirs.indexOf(dir)>=0) return -1;n++;}
      else if(cells[key(yy+dx,xx+dy)]||cells[key(yy-dx,xx-dy)]) return -1;}
    return first?0:(n>0?n:-1);
  }
  function put(e,y,x,dir){var dy=dir==="down"?1:0,dx=dir==="across"?1:0;
    for(var i=0;i<e.ans.length;i++){var k=key(y+dy*i,x+dx*i);if(!cells[k])cells[k]={ch:e.ans[i],dirs:[]};cells[k].dirs.push(dir);}
    placed.push({ans:e.ans,clue:e.clue,y:y,x:x,dir:dir});}
  put(pending.shift(),0,0,"across");
  for(var pass=0;pass<4&&pending.length;pass++){
    for(var pi=0;pi<pending.length;){
      var e=pending[pi],best=[],bs=0;
      Object.keys(cells).forEach(function(k){var c=cells[k],yx=k.split(","),cy=+yx[0],cx=+yx[1];
        for(var i=0;i<e.ans.length;i++){if(e.ans[i]!==c.ch)continue;
          ["across","down"].forEach(function(dir){var y=dir==="down"?cy-i:cy,x=dir==="across"?cx-i:cx,s=fit(e.ans,y,x,dir,false);
            if(s>bs){bs=s;best=[[y,x,dir]];}else if(s===bs&&s>0)best.push([y,x,dir]);});}});
      if(best.length){var b=best[Math.floor(r()*best.length)];put(e,b[0],b[1],b[2]);pending.splice(pi,1);}else pi++;
    }}
  return {cells:cells,placed:placed,pending:pending};
}
function crossword(body,l){
  var res=null,bestN=1e9;
  for(var seed=0;seed<60;seed++){var g=genCross(l,seed);if(g.pending.length<bestN){bestN=g.pending.length;res=g;}if(!g.pending.length)break;}
  var cells=res.cells,placed=res.placed,pending=res.pending;
  function key(y,x){return y+","+x;}
  var minY=0,minX=0,maxY=0,maxX=0;
  Object.keys(cells).forEach(function(k){var p=k.split(",");minY=Math.min(minY,+p[0]);minX=Math.min(minX,+p[1]);maxY=Math.max(maxY,+p[0]);maxX=Math.max(maxX,+p[1]);});
  var H=maxY-minY+1,W=maxX-minX+1,starts={},num=0,across=[],down=[];
  placed.forEach(function(p){p.y-=minY;p.x-=minX;});
  var nc={};Object.keys(cells).forEach(function(k){var q=k.split(",");nc[key(+q[0]-minY,+q[1]-minX)]=cells[k];});cells=nc;
  placed.sort(function(a,b){return a.y-b.y||a.x-b.x;});
  placed.forEach(function(p){var k=key(p.y,p.x);if(!starts[k])starts[k]=++num;p.n=starts[k];(p.dir==="across"?across:down).push(p);});
  var grid=h("div",{class:"cw",style:"grid-template-columns:repeat("+W+",var(--cs,34px))"}),inputs={},dirPref="across";
  for(var y=0;y<H;y++)for(var x=0;x<W;x++)(function(y,x){
    var c=cells[key(y,x)],d=h("div",{class:"c"+(c?" l":"")});
    if(c){
      var inp=h("input",{type:"text",maxlength:"1","aria-label":"Row "+(y+1)+" column "+(x+1)+(starts[key(y,x)]?", clue "+starts[key(y,x)]:""),autocomplete:"off",autocapitalize:"characters",spellcheck:"false"});
      inputs[key(y,x)]=inp;
      if(starts[key(y,x)]) d.appendChild(h("i",null,starts[key(y,x)]));
      inp.addEventListener("focus",function(){if(c.dirs.length===1)dirPref=c.dirs[0];inp.select();});
      inp.addEventListener("input",function(){inp.value=inp.value.replace(/[^a-zA-Z]/g,"").toUpperCase();d.classList.remove("ok","no");
        if(inp.value){var nx=dirPref==="across"?inputs[key(y,x+1)]:inputs[key(y+1,x)];if(nx)nx.focus();}});
      inp.addEventListener("keydown",function(e){var m={ArrowRight:[0,1],ArrowLeft:[0,-1],ArrowDown:[1,0],ArrowUp:[-1,0]}[e.key];
        if(m){var t=inputs[key(y+m[0],x+m[1])];if(t){e.preventDefault();dirPref=m[0]?"down":"across";t.focus();}}
        else if(e.key==="Backspace"&&!inp.value){var pv=dirPref==="across"?inputs[key(y,x-1)]:inputs[key(y-1,x)];if(pv){pv.focus();}}});
      d.appendChild(inp);
    }
    grid.appendChild(d);
  })(y,x);
  var msg=h("p",{class:"fb info","aria-live":"polite",style:"margin:10px 0"},"Type a letter in each white square. Use the arrow keys to move around.");
  function eachCell(fn){Object.keys(inputs).forEach(function(k){fn(inputs[k],cells[k],inputs[k].parentNode);});}
  var chk=h("button",{class:"btn",onclick:function(){var bad=0,empty=0;eachCell(function(i,c,d){d.classList.remove("ok","no");if(!i.value){empty++;return;}if(i.value===c.ch)d.classList.add("ok");else{d.classList.add("no");bad++;}});
    msg.textContent=bad?bad+" letter"+(bad>1?"s are":" is")+" wrong (red).":empty?"All the letters so far are correct. "+empty+" squares still empty.":"Perfect! The crossword is complete.";}},"Check my answers");
  var rev=h("button",{class:"btn alt",onclick:function(){eachCell(function(i,c,d){i.value=c.ch;d.classList.add("ok");});msg.textContent="Answers revealed.";}},"Reveal answers");
  var rst=h("button",{class:"btn alt",onclick:function(){eachCell(function(i,c,d){i.value="";d.classList.remove("ok","no");});msg.textContent="Cleared.";}},"Clear");
  function clueList(t,arr){return h("div",null,h("h3",{style:"margin-top:0"},t),h("ol",null,arr.map(function(p){return h("li",null,h("b",null,p.n+". "),p.clue+" ("+p.ans.length+")");})));}
  body.appendChild(h("p",{class:"small"},"Solve the clues using the key words from this lesson."));
  body.appendChild(h("div",{class:"scroll"},grid));body.appendChild(msg);
  body.appendChild(h("div",{class:"row"},chk,rev,rst));
  body.appendChild(h("div",{class:"clues"},clueList("Across",across),clueList("Down",down)));
  if(pending.length) body.appendChild(h("p",{class:"small"},"Not in the grid: "+pending.map(function(e){return e.ans;}).join(", ")));
}

/* ---------- Mind map ---------- */
var HUES=[172,215,32,285,350,95,48,200];
function toNode(x,hue){return typeof x==="string"?{t:x,c:[],hue:hue}:{t:x.t,c:x.c.map(function(y){return toNode(y,hue);}),hue:hue};}
function wrapText(s,max){var w=s.split(" "),lines=[],cur="";w.forEach(function(x){if((cur+" "+x).trim().length>max&&cur){lines.push(cur);cur=x;}else cur=(cur+" "+x).trim();});if(cur)lines.push(cur);return lines;}
function tabMap(body,l){
  body.appendChild(h("p",{class:"lead",style:"font-size:.98rem"},"Click or press Enter on a branch to open or close it. Try covering the map and drawing it from memory."));
  var root={t:l.title,c:l.mind.map(function(m,j){return toNode(m,HUES[j%HUES.length]);}),hue:-1};
  var uid=0;(function ids(n){n.id=uid++;n.c.forEach(ids);})(root);
  function setOpen(n,d,maxd){n.open=d<maxd;n.c.forEach(function(c){setOpen(c,d+1,maxd);});}
  function setAll(n,v){n.open=v;n.c.forEach(function(c){setAll(c,v);});}
  setOpen(root,0,2);
  var holder=h("div",{class:"mm",tabindex:"0","aria-label":"Mind map, scrollable"});
  body.appendChild(h("div",{class:"row",style:"margin-bottom:12px"},h("button",{class:"btn alt",onclick:function(){setAll(root,true);draw();}},"Open all"),h("button",{class:"btn alt",onclick:function(){setOpen(root,0,1);draw();}},"Close branches")));
  body.appendChild(holder);
  var NS="http://www.w3.org/2000/svg";
  function se(tag,at){var e=document.createElementNS(NS,tag);for(var k in at)e.setAttribute(k,at[k]);return e;}
  function draw(){
    var LH=17,PADY=9,GAPY=10,GAPX=46,MAX=24;
    function measure(n){n.lines=wrapText(n.t,MAX);n.w=Math.max.apply(null,n.lines.map(function(x){return x.length;}))*7.2+26;n.hgt=n.lines.length*LH+PADY*2;n.vis=n.open?n.c:[];n.vis.forEach(measure);}
    measure(root);
    function sub(n){if(!n.vis.length){n.sh=n.hgt+GAPY;return n.sh;}var s=0;n.vis.forEach(function(c){s+=sub(c);});n.sh=Math.max(s,n.hgt+GAPY);return n.sh;}
    sub(root);
    var colW=[];(function walk(n,d){colW[d]=Math.max(colW[d]||0,n.w);n.vis.forEach(function(c){walk(c,d+1);});})(root,0);
    var colX=[10];for(var d=1;d<colW.length;d++)colX[d]=colX[d-1]+colW[d-1]+GAPX;
    function place(n,d,top){n.x=colX[d];if(!n.vis.length){n.y=top+n.sh/2;return;}var y=top;n.vis.forEach(function(c){place(c,d+1,y);y+=c.sh;});n.y=(n.vis[0].y+n.vis[n.vis.length-1].y)/2;}
    place(root,0,5);
    var W=colX[colX.length-1]+colW[colW.length-1]+14,Hh=root.sh+10;
    var svg=se("svg",{width:W,height:Hh,viewBox:"0 0 "+W+" "+Hh,role:"group","aria-label":"Mind map of "+root.t});
    var links=se("g",{fill:"none"}),nodes=se("g",{});svg.appendChild(links);svg.appendChild(nodes);
    (function paint(n){
      n.vis.forEach(function(c){var x1=n.x+n.w,y1=n.y,x2=c.x,y2=c.y,mx=(x1+x2)/2;
        links.appendChild(se("path",{d:"M"+x1+","+y1+" C"+mx+","+y1+" "+mx+","+y2+" "+x2+","+y2,stroke:"hsl("+c.hue+",45%,55%)","stroke-width":2.2}));paint(c);});
      var hue=n.hue,isRoot=hue<0;
      var g=se("g",{"data-id":n.id,"class":"node",tabindex:n.c.length?"0":"-1",role:n.c.length?"button":"img","aria-label":n.t+(n.c.length?(n.open?", expanded":", collapsed"):"")});
      g.appendChild(se("rect",{"class":"bx",x:n.x,y:n.y-n.hgt/2,width:n.w,height:n.hgt,rx:10,fill:isRoot?"#14284b":"hsl("+hue+",70%,92%)",stroke:isRoot?"#14284b":"hsl("+hue+",45%,38%)","stroke-width":1.8}));
      n.lines.forEach(function(ln,k){var tx=se("text",{x:n.x+n.w/2,y:n.y-n.hgt/2+PADY+LH*k+13,"text-anchor":"middle",fill:isRoot?"#fff":"#1d2433"});tx.textContent=ln;g.appendChild(tx);});
      if(n.c.length){
        g.appendChild(se("circle",{cx:n.x+n.w,cy:n.y,r:9,fill:"#fff",stroke:isRoot?"#14284b":"hsl("+hue+",45%,38%)","stroke-width":1.8}));
        var sg=se("text",{x:n.x+n.w,y:n.y+4.5,"text-anchor":"middle",fill:"#1d2433"});sg.textContent=n.open?"−":"+";sg.setAttribute("style","font:700 14px system-ui;pointer-events:none");g.appendChild(sg);
        var tog=function(){n.open=!n.open;var sl=holder.scrollLeft,stp=holder.scrollTop;draw();holder.scrollLeft=sl;holder.scrollTop=stp;var again=holder.querySelector('[data-id="'+n.id+'"]');if(again)again.focus();};
        g.addEventListener("click",tog);g.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();tog();}});
      }
      nodes.appendChild(g);
    })(root);
    holder.innerHTML="";holder.appendChild(svg);
  }
  draw();
}
route();
})();

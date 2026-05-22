import{P as c}from"./tweakpane.ZayJk8yu.js";const t={mode:"query",itemCount:14};function m(n){const e=new c({title:"scrollbar-stable",expanded:!0});e.element.parentElement.style.width="320px",e.addBinding(t,"mode",{label:"mode",options:{"none (shifts)":"none","scrollbar-gutter: stable":"gutter","@container scroll-state":"query"}}),e.addBinding(t,"itemCount",{min:1,max:30,step:1,label:"items"});const o=e.addFolder({title:"quick",expanded:!0});o.addButton({title:"−1 item"}).on("click",()=>{t.itemCount=Math.max(1,t.itemCount-1),e.refresh(),n()}),o.addButton({title:"+1 item"}).on("click",()=>{t.itemCount=Math.min(30,t.itemCount+1),e.refresh(),n()}),o.addButton({title:"toggle scrollable"}).on("click",()=>{t.itemCount=t.itemCount>10?4:20,e.refresh(),n()});let s=!1;e.on("change",()=>{s||(s=!0,requestAnimationFrame(()=>{s=!1,n()}))})}const r=["Inbox","Drafts","Sent","Archive","Spam","Trash","Starred","Snoozed","Important","Scheduled","Outbox","Templates","Notes","Chat","Meet","Calendar","Tasks","Contacts","Files","Settings"];function a(){const n=document.getElementById("ss-scroller"),e=document.getElementById("ss-list"),o=document.getElementById("ss-readout");if(!n||!e||!o)return;n.dataset.mode=t.mode;let s="";for(let l=0;l<t.itemCount;l++){const i=r[l%r.length],d=String(l+1).padStart(2,"0");s+=`<li class="ss-item"><span class="ss-text">${i}</span><span class="ss-badge">${d}</span></li>`}e.innerHTML=s,o.textContent=u()}function u(){return t.mode==="none"?`.scroller {
  overflow-y: auto;
  /* no stabilization — content shifts when scrollbar appears */
}

.list {
  padding: 16px;
}`:t.mode==="gutter"?`.scroller {
  overflow-y: auto;
  scrollbar-gutter: stable;
  /* always reserves 11px even when not scrollable */
}

.list {
  padding: 16px;
}`:`.scroller {
  overflow-y: auto;
  container-type: scroll-state;
}

.list {
  padding: 16px;
}

/* The trick: when the scroller can move (either direction),
   shave 11px off padding-right so total visual right space
   matches the un-scrollable state. */
@container scroll-state((scrollable: top) or (scrollable: bottom)) {
  .list {
    padding-right: 5px;
  }
}`}m(a);a();

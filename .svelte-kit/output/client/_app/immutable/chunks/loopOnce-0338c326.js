import{a as l,b as r}from"./animationSetup-2b3126c0.js";import{w as m,t as f}from"./writeEffect-0c9d44a5.js";import{u}from"./unwriteEffect-032170c4.js";const L=async(a,o)=>{const{options:t,elements:s}=l(a,o);for(const i of s){const{currentNode:e,text:p}=i;await m(i,t);const c=p.replaceAll("&","&amp;");e.innerHTML===c&&(t.dispatch("done"),await f(t.wordInterval),s.indexOf(i)===s.length-1||(await u(e,t),r(e,t.parentElement,n=>{e===n?n.classList.remove("typing"):n.classList.remove("finished-typing")})),r(e,t.parentElement,n=>{typeof t.keepCursorOnFinish=="number"&&setTimeout(()=>{n.classList.replace("typing","finished-typing")},t.keepCursorOnFinish)}))}};export{L as default};

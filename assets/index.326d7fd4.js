import{d as t,l as e,b as a,aB as n,az as s}from"./index.c1a17bf6.js";const d=t({setup(){const t=s(),d=e({data:{}});return(async()=>{const e=await n(t.query);d.data=e;const a=document.createRange().createContextualFragment(e.content);document.getElementsByClassName("news-content")[0].appendChild(a)})(),()=>{var t;return a("div",{class:"news-detail"},[a("div",{class:"news-content"},[a("div",{class:"news-title "+(d.data.id?"":"skeleton-item")},[null==(t=d.data)?void 0:t.title]),!d.data.id&&a("div",{class:"skeleton-item content-skeleton"},null)])])}}});export{d as default};

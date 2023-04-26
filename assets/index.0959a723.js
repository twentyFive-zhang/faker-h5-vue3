import{T as e,I as t}from"./index.1f19449e.js";import{i as l,f as a,c as n,d as s,O as o,u as i,X as u,Y as r,o as c,l as d,Z as m,p as v,x as f,z as p,C as h,b,n as g,G as x,_ as k,k as y,t as I,e as A,m as C,q as w,M as D,$ as L,a0 as V,a1 as O,a2 as S,w as T,K as H,a3 as N,a4 as R,S as B,T as M,a5 as F}from"./index.c1a17bf6.js";import{S as P}from"./index.850e1e14.js";import{T as j,a as J}from"./index.a5618c1c.js";import"./use-id.1be47576.js";function Z(e){if(!l(e))return e;if(Array.isArray(e))return e.map((e=>Z(e)));if(a(e)){const t={};return Object.keys(e).forEach((l=>{t[l]=Z(e[l])})),t}return e}const[K,U]=n("picker-column");const X=Symbol(K),E=e=>a(e)&&e.disabled;var G=s({name:K,props:{textKey:o(String),readonly:Boolean,allowHtml:Boolean,className:i,itemHeight:o(Number),defaultIndex:u(0),swipeDuration:o(g),initialOptions:r(),visibleItemCount:o(g)},emits:["change"],setup(e,{emit:t,slots:l}){let n,s,o,i,u;const r=c(),g=c(),y=d({index:e.defaultIndex,offset:0,duration:0,options:Z(e.initialOptions)}),I=m(),A=()=>y.options.length,C=()=>e.itemHeight*(+e.visibleItemCount-1)/2,w=(l,a)=>{const s=-(l=(e=>{for(let t=e=k(e,0,A());t<A();t++)if(!E(y.options[t]))return t;for(let t=e-1;t>=0;t--)if(!E(y.options[t]))return t})(l)||0)*e.itemHeight,o=()=>{l!==y.index&&(y.index=l,a&&t("change",l))};n&&s!==y.offset?u=o:o(),y.offset=s},D=t=>{JSON.stringify(t)!==JSON.stringify(y.options)&&(y.options=Z(t),w(e.defaultIndex))},L=t=>a(t)&&e.textKey in t?t[e.textKey]:t,V=t=>k(Math.round(-t/e.itemHeight),0,A()-1),O=()=>{n=!1,y.duration=0,u&&(u(),u=null)},S=t=>{if(!e.readonly){if(I.start(t),n){const e=function(e){const{transform:t}=window.getComputedStyle(e),l=t.slice(7,t.length-1).split(", ")[5];return Number(l)}(g.value);y.offset=Math.min(0,e-C()),s=y.offset}else s=y.offset;y.duration=0,o=Date.now(),i=s,u=null}},T=()=>{if(e.readonly)return;const t=y.offset-i,l=Date.now()-o;if(l<300&&Math.abs(t)>15)return void((t,l)=>{const a=Math.abs(t/l);t=y.offset+a/.003*(t<0?-1:1);const n=V(t);y.duration=+e.swipeDuration,w(n,!0)})(t,l);const a=V(y.offset);y.duration=200,w(a,!0),setTimeout((()=>{n=!1}),0)},H=()=>{const t={height:`${e.itemHeight}px`};return y.options.map(((a,s)=>{const o=L(a),i=E(a),r={role:"button",style:t,tabindex:i?-1:0,class:U("item",{disabled:i,selected:s===y.index}),onClick:()=>(t=>{n||e.readonly||(u=null,y.duration=200,w(t,!0))})(s)},c={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:o};return b("li",r,[l.option?l.option(a):b("div",c,null)])}))};return w(y.index),v(X),f({state:y,setIndex:w,getValue:()=>y.options[y.index],setValue:e=>{const{options:t}=y;for(let l=0;l<t.length;l++)if(L(t[l])===e)return w(l)},setOptions:D,hasOptions:()=>y.options.length,stopMomentum:O}),p((()=>e.initialOptions),D),p((()=>e.defaultIndex),(e=>w(e))),h("touchmove",(t=>{if(e.readonly)return;I.move(t),I.isVertical()&&(n=!0,x(t,!0)),y.offset=k(s+I.deltaY.value,-A()*e.itemHeight,e.itemHeight);const l=Date.now();l-o>300&&(o=l,i=y.offset)}),{target:r}),()=>b("div",{ref:r,class:[U(),e.className],onTouchstartPassive:S,onTouchend:T,onTouchcancel:T},[b("ul",{ref:g,style:{transform:`translate3d(0, ${y.offset+C()}px, 0)`,transitionDuration:`${y.duration}ms`,transitionProperty:y.duration?"all":"none"},class:U("wrapper"),onTransitionend:O},[H()])])}});const[Y,q,W]=n("picker");const $=T(s({name:Y,props:A({},{title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:y(44),showToolbar:I,swipeDuration:y(1e3),visibleItemCount:y(6),cancelButtonText:String,confirmButtonText:String},{columns:r(),valueKey:String,defaultIndex:y(0),toolbarPosition:C("top"),columnsFieldNames:Object}),emits:["confirm","cancel","change"],setup(e,{emit:t,slots:l}){const a=c(!1),n=c(),s=c([]),o=w((()=>{const{columnsFieldNames:t}=e;return{text:(null==t?void 0:t.text)||e.valueKey||"text",values:(null==t?void 0:t.values)||"values",children:(null==t?void 0:t.children)||"children"}})),{children:i,linkChildren:u}=D(X);u();const r=w((()=>L(e.itemHeight))),d=w((()=>{const t=e.columns[0];if("object"==typeof t){if(o.value.children in t)return"cascade";if(o.value.values in t)return"object"}return"plain"})),m=()=>i.map((e=>e.state.index)),v=(e,t)=>{const l=i[e];l&&(l.setOptions(t),a.value=!0)},g=t=>{let l={[o.value.children]:e.columns};const a=m();for(let e=0;e<=t;e++)l=l[o.value.children][a[e]];for(;l&&l[o.value.children];)t++,v(t,l[o.value.children]),l=l[o.value.children][l.defaultIndex||0]},k=e=>i[e],y=e=>{const t=k(e);if(t)return t.getValue()},I=(e,t)=>{const l=k(e);l&&(l.setValue(t),"cascade"===d.value&&g(e))},A=e=>{const t=k(e);if(t)return t.state.index},C=(e,t)=>{const l=k(e);l&&(l.setIndex(t),"cascade"===d.value&&g(e))},T=()=>i.map((e=>e.getValue())),H=e=>{"plain"===d.value?t(e,y(0),A(0)):t(e,T(),m())},N=()=>{i.forEach((e=>e.stopMomentum())),H("confirm")},R=()=>H("cancel"),B=()=>{const t=e.cancelButtonText||W("cancel");return b("button",{type:"button",class:[q("cancel"),O],onClick:R},[l.cancel?l.cancel():t])},M=()=>{const t=e.confirmButtonText||W("confirm");return b("button",{type:"button",class:[q("confirm"),O],onClick:N},[l.confirm?l.confirm():t])},F=()=>{if(e.showToolbar){const t=l.toolbar||l.default;return b("div",{class:q("toolbar")},[t?t():[B(),l.title?l.title():e.title?b("div",{class:[q("title"),"van-ellipsis"]},[e.title]):void 0,M()]])}},P=()=>s.value.map(((a,n)=>{var s;return b(G,{textKey:o.value.text,readonly:e.readonly,allowHtml:e.allowHtml,className:a.className,itemHeight:r.value,defaultIndex:null!=(s=a.defaultIndex)?s:+e.defaultIndex,swipeDuration:e.swipeDuration,initialOptions:a[o.value.values],visibleItemCount:e.visibleItemCount,onChange:()=>(e=>{"cascade"===d.value&&g(e),"plain"===d.value?t("change",y(0),A(0)):t("change",T(),e)})(n)},{option:l.option})})),j=e=>{if(a.value){const t={height:`${r.value}px`},l={backgroundSize:`100% ${(e-r.value)/2}px`};return[b("div",{class:q("mask"),style:l},null),b("div",{class:[S,q("frame")],style:t},null)]}},J=()=>{const t=r.value*+e.visibleItemCount,l={height:`${t}px`};return b("div",{ref:n,class:q("columns"),style:l},[P(),j(t)])};return p((()=>e.columns),(()=>{const{columns:t}=e;"plain"===d.value?s.value=[{[o.value.values]:t}]:"cascade"===d.value?(()=>{var t;const l=[];let a={[o.value.children]:e.columns};for(;a&&a[o.value.children];){const n=a[o.value.children];let s=null!=(t=a.defaultIndex)?t:+e.defaultIndex;for(;n[s]&&n[s].disabled;){if(!(s<n.length-1)){s=0;break}s++}l.push({[o.value.values]:a[o.value.children],className:a.className,defaultIndex:s}),a=n[s]}s.value=l})():s.value=t,a.value=s.value.some((e=>e[o.value.values]&&0!==e[o.value.values].length))||i.some((e=>e.hasOptions))}),{immediate:!0}),h("touchmove",x,{target:n}),f({confirm:N,getValues:T,setValues:e=>{e.forEach(((e,t)=>{I(t,e)}))},getIndexes:m,setIndexes:e=>{e.forEach(((e,t)=>{C(t,e)}))},getColumnIndex:A,setColumnIndex:C,getColumnValue:y,setColumnValue:I,getColumnValues:e=>{const t=k(e);if(t)return t.state.options},setColumnValues:v}),()=>{var t,a;return b("div",{class:q()},["top"===e.toolbarPosition?F():null,e.loading?b(V,{class:q("loading")},null):null,null==(t=l["columns-top"])?void 0:t.call(l),J(),null==(a=l["columns-bottom"])?void 0:a.call(l),"bottom"===e.toolbarPosition?F():null])}}}));const z=[{name:"math",title:"数学"},{name:"physics",title:"物理"}],Q=s({setup(){c();const l=c(),a=d({type:z[0].name}),n=M(),s=d({indexList:[{},{},{}],list:[{list:[{},{},{},{},{}]}],activeIndex:0,isLoaded:!1,bookList:[],choseBook:{},showPicker:!1,tabListData:[{list:[{},{},{},{},{}]},{list:[{},{},{},{},{}]},{list:[{},{},{},{},{}]}]}),o=async()=>{var e,t,l;const n=await F(a);s.isLoaded=!0,s.tabListData=null==n?void 0:n.data,s.activeIndex=null==(l=null==(t=null==(e=null==n?void 0:n.data)?void 0:e.filter((e=>{var t;return!!(null==(t=e.list)?void 0:t.length)})))?void 0:t[0])?void 0:l.chapterId,s.bookList=n.bookList.map((e=>({...e,text:`${e.bookName}${e.disabled?"(敬请期待)":""}`,value:e.index}))),s.choseBook=s.bookList.filter((e=>!e.disabled))[0]};return o(),()=>b("div",{class:"school"},[b(P,{class:"school-sticky"},{default:()=>[b("div",{class:"title-line"},[H("启航学园"),b("span",{class:"book",onClick:()=>{s.showPicker=!0}},[s.choseBook.text,b("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAAXNSR0IArs4c6QAAAfZJREFUSEu1lTGL1FAUhc/ZKAwIgiDbjI2FltvYWPkLRBSc6XZgiiRkC9FWiySFFjaihZkkxUDsZixc9k9sZbGlCDbaLGIhCAM6OXJDIjMqrpNoIBBe3rvfOfe+dx/R8ZlOpz0LMR6PF2EYbsVxXK6GZJf4aZqeBvAEwKWyLHeDIDj+GdIKMJvNnOFwuMyybFdSUYt8XZbljSAIPoRheCqO42823gogiSRVFMWZxWLxXNKohhyRHHie96YRQbMURZE2TVUURbR8m9p+v/9U0l6lmHxH8qbrukcGaeVgVUzjJk3ThwDu15D35sR13UOmafoYwDkAa9XfwNEWgCXJpaTbAM4DsLFjSQMDbJyev4CbWIMcGGCf5FlJ/wJkQau0kzTIs841OMkNrUgnTWrzfz6fmxvQtpJ9DAaDtkX+I/+/qF/rRVmW3QJwR1JlCYAVu7Ob6qhLnzmZTA5IXq+DNpA2af/tGgNcIzkHsF1DPpJ8KclqY29bN1skP1U1yPP8qqS5pAu1jEe+7z9o2kAXO9Uustab5/mOpFeSLtYHxbrkXd/3v3ZpiJWDlf5+2ZwA2KkhRa/X2xuNRl/auvmxTZtLIkmSvuM4+5Ku1JCR53kvGhGbpmvtHDTXXZIk247jFJLeArhnado0cDP/l4PWQFYv87bBbd13VMby1fR/dlIAAAAASUVORK5CYII="},null)])]),b("div",{class:"tabList"},[b(e,{list:z,onChange:e=>{var t;null==(t=document.getElementById("app"))||t.scrollTo({top:0,left:0,behavior:"smooth"}),a.type=e,o()}},null)])]}),b(N,{show:s.showPicker,position:"bottom"},{default:()=>[b(R,{themeVars:{"picker-cancel-action-color":"#13C2C2","picker-confirm-action-color":"#13C2C2"}},{default:()=>[b($,{columns:s.bookList,modelValue:s.choseBook.value,title:"切换教材",onCancel:()=>{s.showPicker=!1},onConfirm:()=>{s.showPicker=!1}},null)]})]}),b("div",{class:"main-list"},[b("div",{class:"left-cont"},null),b("div",{class:"right-list",id:"right-list"},[b(j,{scrollspy:!0,ref:l,modelValue:s.activeIndex,ellipsis:!1},{default:()=>{var e;return[null==(e=s.tabListData)?void 0:e.map((e=>{var l;return b(J,{title:null==e?void 0:e.name,key:null==e?void 0:e.id,disabled:!(null==(l=e.list)?void 0:l.length)},{default:()=>{var l;return null==(l=null==e?void 0:e.list)?void 0:l.map(((e,l)=>b("div",{class:"video-item"},[b("div",{key:l,class:"coverImage  "+(s.isLoaded?"":"skeleton-item"),onClick:()=>{e.id&&n.push({path:`/${e.type}`,query:{id:e.id,from:e.key}})}},[s.isLoaded&&b(B,null,[b(t,{src:`/image/data/${a.type}/${e.id}.png`,style:{width:"100%",height:"100%"}},null),b("img",{src:"./assets/play.bc0f3d75.png",class:"play-icon"},null)])]),s.isLoaded&&b("p",{class:"title van-ellipsis"},[e.title])])))},title:()=>{var t;return(null==(t=e.list)?void 0:t.length)?b("div",null,[null==e?void 0:e.name]):b("div",null,[b("p",null,[null==e?void 0:e.name]),b("p",{class:"plus-text"},[H("生产中")])])}})}))]}}),s.isLoaded&&b("p",{class:"more-info"},[H("更多内容，敬请期待")])])])])}});export{Q as default};

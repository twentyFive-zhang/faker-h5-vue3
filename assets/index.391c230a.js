import{o as e,ah as t,ai as a,ag as l,aj as i,c as n,d as o,n as r,t as s,q as c,b as u,i as d,ak as v,l as p,Z as f,M as h,x as g,z as b,al as m,am as w,an as y,B as x,ao as k,ap as C,aa as I,a7 as S,C as B,k as $,aq as z,ae as R,A as T,G as M,_ as A,w as O,O as L,m as W,ac as X,$ as Z,ab as j,v as D,ar as N,s as P,as as Y,J as H,P as q,af as F,at as V,au as E,p as G,e as J,r as _,u as K,y as Q,a8 as U,av as ee}from"./index.c81d5186.js";import{u as te}from"./use-id.dd477d58.js";import{S as ae}from"./index.73d53c68.js";const[le,ie]=n("tab");var ne=o({name:le,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:r,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:s},setup(e,{slots:t}){const a=c((()=>{const t={},{type:a,color:l,disabled:i,isActive:n,activeColor:o,inactiveColor:r}=e;l&&"card"===a&&(t.borderColor=l,i||(n?t.backgroundColor=l:t.color=l));const s=n?o:r;return s&&(t.color=s),t})),l=()=>{const a=u("span",{class:ie("text",{ellipsis:!e.scrollable})},[t.title?t.title():e.title]);return e.dot||d(e.badge)&&""!==e.badge?u(v,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[a]}):a};return()=>u("div",{id:e.id,role:"tab",class:[ie([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:a.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[l()])}});const[oe,re]=n("swipe"),se={loop:s,width:r,height:r,vertical:Boolean,autoplay:$(0),duration:$(500),touchable:s,lazyRender:Boolean,initialSwipe:$(0),indicatorColor:String,showIndicators:s,stopPropagation:s},ce=Symbol(oe);const ue=O(o({name:oe,props:se,emits:["change"],setup(t,{emit:a,slots:l}){const i=e(),n=e(),o=p({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),r=f(),{children:s,linkChildren:d}=h(ce),v=c((()=>s.length)),$=c((()=>o[t.vertical?"height":"width"])),O=c((()=>t.vertical?r.deltaY.value:r.deltaX.value)),L=c((()=>{if(o.rect){return(t.vertical?o.rect.height:o.rect.width)-$.value*v.value}return 0})),W=c((()=>Math.ceil(Math.abs(L.value)/$.value))),X=c((()=>v.value*$.value)),Z=c((()=>(o.active+v.value)%v.value)),j=c((()=>{const e=t.vertical?"vertical":"horizontal";return r.direction.value===e})),D=c((()=>{const e={transitionDuration:`${o.swiping?0:t.duration}ms`,transform:`translate${t.vertical?"Y":"X"}(${o.offset}px)`};if($.value){const a=t.vertical?"height":"width",l=t.vertical?"width":"height";e[a]=`${X.value}px`,e[l]=t[l]?`${t[l]}px`:""}return e})),N=(e,a=0)=>{let l=e*$.value;t.loop||(l=Math.min(l,-L.value));let i=a-l;return t.loop||(i=A(i,L.value,0)),i},P=({pace:e=0,offset:l=0,emitChange:i})=>{if(v.value<=1)return;const{active:n}=o,r=(e=>{const{active:a}=o;return e?t.loop?A(a+e,-1,v.value):A(a+e,0,W.value):a})(e),c=N(r,l);if(t.loop){if(s[0]&&c!==L.value){const e=c<L.value;s[0].setOffset(e?X.value:0)}if(s[v.value-1]&&0!==c){const e=c>0;s[v.value-1].setOffset(e?-X.value:0)}}o.active=r,o.offset=c,i&&r!==n&&a("change",Z.value)},Y=()=>{o.swiping=!0,o.active<=-1?P({pace:v.value}):o.active>=v.value&&P({pace:-v.value})},H=()=>{Y(),r.reset(),z((()=>{o.swiping=!1,P({pace:1,emitChange:!0})}))};let q;const F=()=>clearTimeout(q),V=()=>{F(),t.autoplay>0&&v.value>1&&(q=setTimeout((()=>{H(),V()}),+t.autoplay))},E=(e=+t.initialSwipe)=>{if(!i.value)return;const a=()=>{var a,l;if(!R(i)){const e={width:i.value.offsetWidth,height:i.value.offsetHeight};o.rect=e,o.width=+(null!=(a=t.width)?a:e.width),o.height=+(null!=(l=t.height)?l:e.height)}v.value&&(e=Math.min(v.value-1,e)),o.active=e,o.swiping=!0,o.offset=N(e),s.forEach((e=>{e.setOffset(0)})),V()};R(i)?T().then(a):a()},G=()=>E(o.active);let J;const _=e=>{t.touchable&&(r.start(e),J=Date.now(),F(),Y())},K=()=>{if(!t.touchable||!o.swiping)return;const e=Date.now()-J,a=O.value/e;if((Math.abs(a)>.25||Math.abs(O.value)>$.value/2)&&j.value){const e=t.vertical?r.offsetY.value:r.offsetX.value;let a=0;a=t.loop?e>0?O.value>0?-1:1:0:-Math[O.value>0?"ceil":"floor"](O.value/$.value),P({pace:a,emitChange:!0})}else O.value&&P({pace:0});o.swiping=!1,V()},Q=(e,a)=>{const l=a===Z.value,i=l?{backgroundColor:t.indicatorColor}:void 0;return u("i",{style:i,class:re("indicator",{active:l})},null)};return g({prev:()=>{Y(),r.reset(),z((()=>{o.swiping=!1,P({pace:-1,emitChange:!0})}))},next:H,state:o,resize:G,swipeTo:(e,a={})=>{Y(),r.reset(),z((()=>{let l;l=t.loop&&e===v.value?0===o.active?0:e:e%v.value,a.immediate?z((()=>{o.swiping=!1})):o.swiping=!1,P({pace:l-o.active,emitChange:!0})}))}}),d({size:$,props:t,count:v,activeIndicator:Z}),b((()=>t.initialSwipe),(e=>E(+e))),b(v,(()=>E(o.active))),b((()=>t.autoplay),V),b([m,w],G),b(y(),(e=>{"visible"===e?V():F()})),x(E),k((()=>E(o.active))),C((()=>E(o.active))),I(F),S(F),B("touchmove",(e=>{if(t.touchable&&o.swiping&&(r.move(e),j.value)){!t.loop&&(0===o.active&&O.value>0||o.active===v.value-1&&O.value<0)||(M(e,t.stopPropagation),P({offset:O.value}))}}),{target:n}),()=>{var e;return u("div",{ref:i,class:re()},[u("div",{ref:n,style:D.value,class:re("track",{vertical:t.vertical}),onTouchstartPassive:_,onTouchend:K,onTouchcancel:K},[null==(e=l.default)?void 0:e.call(l)]),l.indicator?l.indicator({active:Z.value,total:v.value}):t.showIndicators&&v.value>1?u("div",{class:re("indicators",{vertical:t.vertical})},[Array(v.value).fill("").map(Q)]):void 0])}}})),[de,ve]=n("tabs");var pe=o({name:de,props:{count:L(Number),inited:Boolean,animated:Boolean,duration:L(r),swipeable:Boolean,lazyRender:Boolean,currentIndex:L(Number)},emits:["change"],setup(t,{emit:a,slots:l}){const i=e(),n=e=>a("change",e),o=()=>{var e;const a=null==(e=l.default)?void 0:e.call(l);return t.animated||t.swipeable?u(ue,{ref:i,loop:!1,class:ve("track"),duration:1e3*+t.duration,touchable:t.swipeable,lazyRender:t.lazyRender,showIndicators:!1,onChange:n},{default:()=>[a]}):a},r=e=>{const a=i.value;a&&a.state.active!==e&&a.swipeTo(e,{immediate:!t.inited})};return b((()=>t.currentIndex),r),x((()=>{r(t.currentIndex)})),g({swipeRef:i}),()=>u("div",{class:ve("content",{animated:t.animated||t.swipeable})},[o()])}});const[fe,he]=n("tabs"),ge={type:W("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:$(0),duration:$(.3),animated:Boolean,ellipsis:s,swipeable:Boolean,scrollspy:Boolean,offsetTop:$(0),background:String,lazyRender:s,lineWidth:r,lineHeight:r,beforeChange:Function,swipeThreshold:$(5),titleActiveColor:String,titleInactiveColor:String},be=Symbol(fe);var me=o({name:fe,props:ge,emits:["click","change","scroll","disabled","rendered","click-tab","update:active"],setup(n,{emit:o,slots:r}){let s,v,f;const w=e(),y=e(),x=e(),I=e(),S=te(),$=X(w),[z,M]=function(){const a=e([]),l=[];return t((()=>{a.value=[]})),[a,e=>(l[e]||(l[e]=t=>{a.value[e]=t}),l[e])]}(),{children:A,linkChildren:O}=h(be),L=p({inited:!1,position:"",lineStyle:{},currentIndex:-1}),W=c((()=>A.length>n.swipeThreshold||!n.ellipsis||n.shrink)),G=c((()=>({borderColor:n.color,background:n.background}))),J=(e,t)=>{var a;return null!=(a=e.name)?a:t},_=c((()=>{const e=A[L.currentIndex];if(e)return J(e,L.currentIndex)})),K=c((()=>Z(n.offsetTop))),Q=c((()=>n.sticky?K.value+s:0)),U=e=>{const t=y.value,l=z.value;if(!(W.value&&t&&l&&l[L.currentIndex]))return;const i=l[L.currentIndex].$el;!function(e,t,l){let i=0;const n=e.scrollLeft,o=0===l?1:Math.round(1e3*l/16);!function l(){e.scrollLeft+=(t-n)/o,++i<o&&a(l)}()}(t,i.offsetLeft-(t.offsetWidth-i.offsetWidth)/2,e?0:+n.duration)},ee=()=>{const e=L.inited;T((()=>{const t=z.value;if(!t||!t[L.currentIndex]||"line"!==n.type||R(w.value))return;const a=t[L.currentIndex].$el,{lineWidth:l,lineHeight:i}=n,o=a.offsetLeft+a.offsetWidth/2,r={width:D(l),backgroundColor:n.color,transform:`translateX(${o}px) translateX(-50%)`};if(e&&(r.transitionDuration=`${n.duration}s`),d(i)){const e=D(i);r.height=e,r.borderRadius=e}L.lineStyle=r}))},le=(e,t)=>{const a=(e=>{const t=e<L.currentIndex?-1:1;for(;e>=0&&e<A.length;){if(!A[e].disabled)return e;e+=t}})(e);if(!d(a))return;const l=A[a],i=J(l,a),r=null!==L.currentIndex;L.currentIndex!==a&&(L.currentIndex=a,t||U(),ee()),i!==n.active&&(o("update:active",i),r&&o("change",i,l.title)),f&&!n.scrollspy&&P(Math.ceil(Y(w.value)-K.value))},ie=(e,t)=>{const a=A.find(((t,a)=>J(t,a)===e)),l=a?A.indexOf(a):0;le(l,t)},oe=(e=!1)=>{if(n.scrollspy){const t=A[L.currentIndex].$el;if(t&&$.value){const o=Y(t,$.value)-Q.value;v=!0,function(e,t,n,o){let r=l(e);const s=r<t,c=0===n?1:Math.round(1e3*n/16),u=(t-r)/c;!function l(){r+=u,(s&&r>t||!s&&r<t)&&(r=t),i(e,r),s&&r<t||!s&&r>t?a(l):o&&a(o)}()}($.value,o,e?0:+n.duration,(()=>{v=!1}))}}},re=e=>{f=e.isFixed,o("scroll",e)},se=()=>A.map(((e,t)=>u(ne,H({key:e.id,id:`${S}-${t}`,ref:M(t),type:n.type,color:n.color,style:e.titleStyle,class:e.titleClass,shrink:n.shrink,isActive:t===L.currentIndex,controls:e.id,scrollable:W.value,activeColor:n.titleActiveColor,inactiveColor:n.titleInactiveColor,onClick:a=>((e,t,a)=>{const{title:l,disabled:i}=A[t],r=J(A[t],t);i?o("disabled",r,l):(V(n.beforeChange,{args:[r],done:()=>{le(t),oe()}}),o("click",r,l),E(e)),o("click-tab",{name:r,title:l,event:a,disabled:i})})(e,t,a)},q(e,["dot","badge","title","disabled","showZeroBadge"])),{title:e.$slots.title}))),ce=()=>{if("line"===n.type&&A.length)return u("div",{class:he("line"),style:L.lineStyle},null)},ue=()=>{var e,t,a;const{type:l,border:i,sticky:o}=n,s=[u("div",{ref:o?void 0:x,class:[he("wrap"),{[N]:"line"===l&&i}]},[u("div",{ref:y,role:"tablist",class:he("nav",[l,{shrink:n.shrink,complete:W.value}]),style:G.value,"aria-orientation":"horizontal"},[null==(e=r["nav-left"])?void 0:e.call(r),se(),ce(),null==(t=r["nav-right"])?void 0:t.call(r)])]),null==(a=r["nav-bottom"])?void 0:a.call(r)];return o?u("div",{ref:x},[s]):s};b([()=>n.color,m],ee),b((()=>n.active),(e=>{e!==_.value&&ie(e)})),b((()=>A.length),(()=>{L.inited&&(ie(n.active),ee(),T((()=>{U(!0)})))}));return g({resize:()=>{ee(),T((()=>{var e,t;return null==(t=null==(e=I.value)?void 0:e.swipeRef.value)?void 0:t.resize()}))},scrollTo:e=>{T((()=>{ie(e),oe(!0)}))}}),k(ee),C(ee),j((()=>{ie(n.active,!0),T((()=>{L.inited=!0,x.value&&(s=F(x.value).height),U(!0)}))})),B("scroll",(()=>{if(n.scrollspy&&!v){const e=(()=>{for(let e=0;e<A.length;e++){const{top:t}=F(A[e].$el);if(t>Q.value)return 0===e?0:e-1}return A.length-1})();le(e)}}),{target:$,passive:!0}),O({id:S,props:n,setLine:ee,onRendered:(e,t)=>o("rendered",e,t),currentName:_,scrollIntoView:U}),()=>u("div",{ref:w,class:he([n.type])},[n.sticky?u(ae,{container:w.value,offsetTop:K.value,onScroll:re},{default:()=>[ue()]}):ue(),u(pe,{ref:I,count:A.length,inited:L.inited,animated:n.animated,duration:n.duration,swipeable:n.swipeable,lazyRender:n.lazyRender,currentIndex:L.currentIndex,onChange:le},{default:()=>{var e;return[null==(e=r.default)?void 0:e.call(r)]}})])}});const we=Symbol(),[ye,xe]=n("swipe-item");const ke=O(o({name:ye,setup(e,{slots:t}){let a;const l=p({offset:0,inited:!1,mounted:!1}),{parent:i,index:n}=G(ce);if(!i)return;const o=c((()=>{const e={},{vertical:t}=i.props;return i.size.value&&(e[t?"height":"width"]=`${i.size.value}px`),l.offset&&(e.transform=`translate${t?"Y":"X"}(${l.offset}px)`),e})),r=c((()=>{const{loop:e,lazyRender:t}=i.props;if(!t||a)return!0;if(!l.mounted)return!1;const o=i.activeIndicator.value,r=i.count.value-1,s=0===o&&e?r:o-1,c=o===r&&e?0:o+1;return a=n.value===o||n.value===s||n.value===c,a}));return x((()=>{T((()=>{l.mounted=!0}))})),g({setOffset:e=>{l.offset=e}}),()=>{var e;return u("div",{class:xe(),style:o.value},[r.value?null==(e=t.default)?void 0:e.call(t):null])}}})),[Ce,Ie]=n("tab");const Se=O(o({name:Ce,props:J({},_,{dot:Boolean,name:r,badge:r,title:String,disabled:Boolean,titleClass:K,titleStyle:[String,Object],showZeroBadge:s}),setup(t,{slots:a}){const l=te(),i=e(!1),{parent:n,index:o}=G(be);if(!n)return;const r=()=>{var e;return null!=(e=t.name)?e:o.value},s=c((()=>{const e=r()===n.currentName.value;return e&&!i.value&&(i.value=!0,n.props.lazyRender&&T((()=>{n.onRendered(r(),t.title)}))),e})),d=e(!s.value);return b(s,(e=>{e?d.value=!1:z((()=>{d.value=!0}))})),b((()=>t.title),(()=>{n.setLine(),n.scrollIntoView()})),Q(we,s),()=>{var e;const t=`${n.id}-${o.value}`,{animated:r,swipeable:c,scrollspy:v,lazyRender:p}=n.props;if(!a.default&&!r)return;const f=v||s.value;if(r||c)return u(ke,{id:l,role:"tabpanel",class:Ie("panel-wrapper",{inactive:d.value}),tabindex:s.value?0:-1,"aria-hidden":!s.value,"aria-labelledby":t},{default:()=>{var e;return[u("div",{class:Ie("panel")},[null==(e=a.default)?void 0:e.call(a)])]}});const h=i.value||v||!p?null==(e=a.default)?void 0:e.call(a):null;return g({id:l}),U(u("div",{id:l,role:"tabpanel",class:Ie("panel"),tabindex:f?0:-1,"aria-labelledby":t},[h]),[[ee,f]])}}})),Be=O(me);export{Be as T,Se as a};
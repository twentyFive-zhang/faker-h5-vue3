import{d as e,l as s,Q as i,b as t,K as a,aw as l}from"./index.75c2db2b.js";import{T as n,I as m}from"./index.b2a0a670.js";import{r as o}from"./right-arrow.f6898152.js";import{S as d}from"./index.ee958b73.js";const r=[{name:"careerPlan",title:"生涯规划"},{name:"volunteering",title:"志愿填报"},{name:"professionalKnowledge",title:"职业专业认知"},{name:"universityStyle",title:"大学风采"}],p=e({setup(){const e=s({type:r[0].name}),p=i(),c=s({list:[{type:"lesson",name:"视频",list:[{},{},{}]},{type:"news",name:"资讯",list:[{},{},{}]}],isLoaded:!1}),y=async()=>{const s=await l(e);c.list=s,c.isLoaded=!0};return y(),()=>t("div",{class:"plan"},[t(d,{class:"plan-sticky "},{default:()=>[t("div",{class:"title-line"},[a("生涯规划")]),t(n,{list:r,onChange:s=>{var i;null==(i=document.getElementById("app"))||i.scrollTo({top:0,left:0,behavior:"smooth"}),e.type=s,y()}},null)]}),t("div",{class:"main-list"},[c.list.map((({type:e,name:s,list:i})=>t("div",{key:e},[t("p",{class:"type-name"},[s]),t("div",{class:"main-list-content"},[i.map(((s,i)=>t("div",{key:i,class:`main-item main-item-${e} `,onClick:()=>{s.id&&p.push({path:`/${s.type}`,query:{id:s.id,from:s.key}})}},[t("div",{class:"coverImage "+(s.id?"":"skeleton-item")},[s.id&&t(m,{src:`/faker-h5-vue3/image/data/${e}/${s.id}.png`,style:{width:"100%",height:"100%"}},null)]),t("p",{class:`main-item-title ${"lesson"===e?"van-ellipsis":"van-multi-ellipsis--l2"} ${s.id?"":"skeleton-item"}`},[s.title]),"lesson"!==e&&c.isLoaded&&t("div",{class:"main-item-check"},[a("查看"),t("img",{src:o},null)])])))])]))),c.isLoaded&&t("p",{class:"more-info"},[a("更多内容，敬请期待")])])])}});export{p as default};

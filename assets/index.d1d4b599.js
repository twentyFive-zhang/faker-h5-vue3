import{d as e,l as s,b as i,K as t,T as a,aw as l}from"./index.c1a17bf6.js";import{T as n,I as m}from"./index.1f19449e.js";import{r as o}from"./right-arrow.f6898152.js";import{S as d}from"./index.850e1e14.js";const p=[{name:"careerPlan",title:"生涯规划"},{name:"volunteering",title:"志愿填报"},{name:"professionalKnowledge",title:"职业专业认知"},{name:"universityStyle",title:"大学风采"}],r=e({setup(){const e=s({type:p[0].name}),r=a(),c=s({list:[{type:"lesson",name:"视频",list:[{},{},{}]},{type:"news",name:"资讯",list:[{},{},{}]}],isLoaded:!1}),y=async()=>{const s=await l(e);c.list=s,c.isLoaded=!0};return y(),()=>i("div",{class:"plan"},[i(d,{class:"plan-sticky "},{default:()=>[i("div",{class:"title-line"},[t("生涯规划")]),i(n,{list:p,onChange:s=>{var i;null==(i=document.getElementById("app"))||i.scrollTo({top:0,left:0,behavior:"smooth"}),e.type=s,y()}},null)]}),i("div",{class:"main-list"},[c.list.map((({type:e,name:s,list:a})=>i("div",{key:e},[i("p",{class:"type-name"},[s]),i("div",{class:"main-list-content"},[a.map(((s,a)=>i("div",{key:a,class:`main-item main-item-${e} `,onClick:()=>{s.id&&r.push({path:`/${s.type}`,query:{id:s.id,from:s.key}})}},[i("div",{class:"coverImage "+(s.id?"":"skeleton-item")},[s.id&&i(m,{src:`/image/data/${e}/${s.id}.png`,style:{width:"100%",height:"100%"}},null)]),i("p",{class:`main-item-title ${"lesson"===e?"van-ellipsis":"van-multi-ellipsis--l2"} ${s.id?"":"skeleton-item"}`},[s.title]),"lesson"!==e&&c.isLoaded&&i("div",{class:"main-item-check"},[t("查看"),i("img",{src:o},null)])])))])]))),c.isLoaded&&i("p",{class:"more-info"},[t("更多内容，敬请期待")])])])}});export{r as default};
import"./base-46ba886b.js";import{E as n}from"./el-button-5e4e1012.js";import{d as _,o as e,y as c,a4 as i,c as r,P as o,a6 as a,z as p,aq as d}from"./runtime-core.esm-bundler-2c7439cc.js";import"./index-748a47dc.js";import"./index-0829403e.js";const m={style:{"margin-top":"30px"}},l=p("p",{style:{"margin-top":"30px"}},"通过封装v-permisson指令实现按钮权限",-1),y=p("p",{style:{"margin-top":"20px"}},"admin账户都可点击",-1),h=p("p",{style:{"margin-top":"10px"}},"普通账户新增按钮不可点击,编辑和删除按钮直接不可见",-1),k=_({__name:"BtnTest",setup(u){return(f,g)=>{const t=n,s=d("permission");return e(),c("div",m,[i((e(),r(t,{type:"primary"},{default:o(()=>[a("新增")]),_:1})),[[s,{right:"add",isAbled:!0}]]),i((e(),r(t,{type:"primary"},{default:o(()=>[a("搜索")]),_:1})),[[s,{right:"search",isAbled:!0}]]),i((e(),r(t,{type:"primary"},{default:o(()=>[a("编辑")]),_:1})),[[s,{right:"edit",isAbled:!1}]]),i((e(),r(t,{type:"primary"},{default:o(()=>[a("删除")]),_:1})),[[s,{right:"delete",isAbled:!1}]]),l,y,h])}}});export{k as default};
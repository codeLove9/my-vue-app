import{_ as m}from"./preload-helper-41c905a7.js";import"./base-2a3505bd.js";import{E as d}from"./el-button-7bb36750.js";import{E as p,a as _}from"./el-table-column-7c1478eb.js";import"./el-tag-feeecb5e.js";import{d as i,o as c,y as u,_ as e,P as a,a6 as x,a3 as f}from"./runtime-core.esm-bundler-2c04a501.js";import"./index-dfd7c4e8.js";import"./index-ac7303d1.js";import"./runtime-dom.esm-bundler-c6862eaa.js";import"./index-fdd8c2de.js";const C=i({__name:"PageOne",setup(b){const r=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],s=()=>{m(()=>import("./Export2Excel-01c722b4.js"),["./Export2Excel-01c722b4.js","./_commonjsHelpers-28e086c5.js"],import.meta.url).then(o=>{o.export_json_to_excel({header:["姓名","工资"],data:[["刘备",100],["关羽",500]],filename:"excel-list",autoWidth:!0,bookType:"xlsx"})})};return(o,E)=>{const t=p,l=_,n=d;return c(),u(f,null,[e(l,{data:r,style:{width:"100%"}},{default:a(()=>[e(t,{prop:"date",label:"Date",width:"180"}),e(t,{prop:"name",label:"Name",width:"180"}),e(t,{prop:"address",label:"Address"})]),_:1}),e(n,{type:"primary",size:"default",onClick:s},{default:a(()=>[x("导出Excel")]),_:1})],64)}}});export{C as default};
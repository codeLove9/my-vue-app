import"./base-2a3505bd.js";import{E as h}from"./el-card-7b0aca06.js";import{E as f}from"./el-button-7bb36750.js";import{_ as u}from"./avatar-cbcd44b0.js";import y from"./html2canvas.esm-b8f85a09.js";import{d as g,o as x,y as b,_ as l,P as _,a6 as w,z as m,ao as k,ap as C}from"./runtime-core.esm-bundler-2c04a501.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-dfd7c4e8.js";import"./index-ac7303d1.js";const P=a=>(k("data-v-3426b3fd"),a=a(),C(),a),v={class:"content",style:{"margin-top":"20px"}},B={id:"main-charts",class:"main-charts"},I=P(()=>m("img",{src:u,alt:""},null,-1)),N=g({__name:"PageThree",setup(a){const p=()=>{const i=document.getElementById("main-charts");y(i).then(o=>{const n=o.width,s=o.height,e=o.getContext("2d");e.textAlign="center",e.textBaseline="middle",e.rotate(25*Math.PI/180),e.font="20px Microsoft Yahei",e.fillStyle="rgba(184, 184, 184, 0.8)";for(let c=n*-1;c<n;c+=240)for(let d=s*-1;d<s;d+=100)e.fillText("水印名",c,d);const r=o.toDataURL("image/png"),t=document.createElement("a");t.style.display="none",t.href=r,t.setAttribute("download","文件名"),typeof t.download>"u"&&t.setAttribute("target","_blank"),document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(r)})};return(i,o)=>{const n=f,s=h;return x(),b("div",v,[l(n,{onClick:p,size:"small",type:"primary"},{default:_(()=>[w("导出PNG")]),_:1}),m("div",B,[l(s,{shadow:"always","body-style":{width:"auto"}},{default:_(()=>[I]),_:1},8,["body-style"])])])}}});const G=E(N,[["__scopeId","data-v-3426b3fd"]]);export{G as default};
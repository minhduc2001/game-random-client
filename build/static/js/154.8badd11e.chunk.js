"use strict";(self.webpackChunkthuc_tap_frontend_admin_nhom2=self.webpackChunkthuc_tap_frontend_admin_nhom2||[]).push([[154],{272:function(e,n,t){var i=t(4270),l=t(3329);function r(e){return(0,l.jsxs)(i.q,{children:[(0,l.jsxs)("title",{children:["H\u1ec7 th\u1ed1ng ch\u01a1i game | ",e.title]}),(0,l.jsx)("meta",{name:"description",content:e.description})]})}r.defaultProps={title:"Management",description:""},n.Z=r},7898:function(e,n,t){var i=t(1234),l=t(9385),r=t(3329);function a(e){return e.loading?(0,r.jsx)(l.Z,{}):e.error?(0,r.jsx)(i.Z,{showIcon:!0,message:JSON.stringify(e.error),type:"warning"}):e.fulfilled?e.children:(0,r.jsx)(r.Fragment,{children:"Something has happen"})}a.defaultValue={loading:!0,fulfilled:!1,error:null,children:(0,r.jsx)(r.Fragment,{})},n.Z=a},1154:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var i=t(9439),l=t(2791),r=t(7898),a=t(272),o=t(1105),s=t(7412),d=t(2556),c=t(3525),u=t(4427),h=t(7689),g=t(3153),f=t(6344),m=t(4626),x=t(7747),v=t(3206),p=t(8412),j=t(3329),Z=p.Z.Meta;var w=function(e){var n,t=(0,h.s0)();return(0,j.jsx)(p.Z,{style:{width:240,margin:10},cover:(0,j.jsx)("img",{alt:null===e||void 0===e?void 0:e.name,src:null===e||void 0===e?void 0:e.image,className:"w-full h-[200px] object-cover"}),hoverable:!0,actions:[(0,j.jsx)(x.Z,{onClick:function(n){t("/author/edit/"+e.id)}},"edit"),(0,j.jsx)(v.Z,{},"delete")],children:(0,j.jsx)(Z,{title:null===e||void 0===e?void 0:e.name,description:null!==(n=null===e||void 0===e?void 0:e.name)&&void 0!==n?n:"\u0110\xe2y l\xe0 tac gia ..."})})};var y=function(){var e=(0,l.useState)(1),n=(0,i.Z)(e,2),t=n[0],x=n[1],v=(0,l.useState)(100),p=(0,i.Z)(v,2),Z=p[0],y=p[1],C=(0,l.useState)(10),S=(0,i.Z)(C,2),T=S[0],_=S[1],k=(0,l.useState)(null),F=(0,i.Z)(k,2),b=(F[0],F[1]),A=(0,g.C)((function(e){return e.author})),P=(0,g.T)();(0,l.useEffect)((function(){P((0,f.Vx)({page:t,limit:T})).then((function(){var e;y(null===A||void 0===A||null===(e=A.metadata)||void 0===e?void 0:e.totalItems)}))}),[t,T]);var B=(0,h.s0)();return(0,j.jsxs)(r.Z,{loading:A.loading==m.Q.Pedding,error:A.error,fulfilled:Boolean(A.authors),children:[(0,j.jsx)(a.Z,{title:"Author Page",description:"Qu\u1ea3n l\xfd t\xe1c gi\u1ea3"}),Boolean(A.authors)&&(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{children:[(0,j.jsx)("h1",{children:"Qu\u1ea3n l\xfd t\xe1c gi\u1ea3"}),(0,j.jsxs)("div",{style:{marginBottom:10,marginTop:10},children:[(0,j.jsx)(o.Z,{style:{width:200,marginRight:10},placeholder:"T\xecm ki\u1ebfm theo t\xean",allowClear:!0}),(0,j.jsxs)(s.Z,{style:{width:200,marginRight:"40%"},placeholder:"S\u1eafp x\u1ebfp",onChange:function(e){b(e)},allowClear:!0,children:[(0,j.jsx)(u.W,{value:"title-asc",children:"T\xean A-Z"}),(0,j.jsx)(u.W,{value:"title-desc",children:"T\xean Z-A"})]}),(0,j.jsx)(d.ZP,{type:"default",style:{color:"#3399FF",width:"150px"},onClick:function(){return B("/author/create")},children:"Th\xeam T\xe1c gi\u1ea3"})]}),(0,j.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:null===A||void 0===A?void 0:A.authors.map((function(e){return(0,j.jsx)(w,{id:e.id,name:e.name,image:e.image},e.id)}))}),(0,j.jsx)(c.Z,{current:t,onChange:function(e){x(e)},total:Z,pageSize:T,onShowSizeChange:function(e,n){_(n)},style:{marginTop:20,textAlign:"center"}})]})})]})}}}]);
//# sourceMappingURL=154.8badd11e.chunk.js.map
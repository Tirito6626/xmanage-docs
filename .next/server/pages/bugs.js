"use strict";(()=>{var e={};e.id=571,e.ids=[571,888,660],e.modules={4714:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>u,getServerSideProps:()=>g,getStaticPaths:()=>h,getStaticProps:()=>x,reportWebVitals:()=>b,routeModule:()=>j,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>v});var a=r(7093),i=r(5244),o=r(1323),n=r(9209),l=r.n(n),p=r(733),c=r(744),d=e([p,c]);[p,c]=d.then?(await d)():d;let u=(0,o.l)(c,"default"),x=(0,o.l)(c,"getStaticProps"),h=(0,o.l)(c,"getStaticPaths"),g=(0,o.l)(c,"getServerSideProps"),m=(0,o.l)(c,"config"),b=(0,o.l)(c,"reportWebVitals"),v=(0,o.l)(c,"unstable_getStaticProps"),_=(0,o.l)(c,"unstable_getStaticPaths"),f=(0,o.l)(c,"unstable_getStaticParams"),q=(0,o.l)(c,"unstable_getServerProps"),S=(0,o.l)(c,"unstable_getServerSideProps"),j=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/bugs",pathname:"/bugs",bundlePath:"",filename:""},components:{App:p.default,Document:l()},userland:c});s()}catch(e){s(e)}})},744:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{__toc:()=>l,default:()=>c});var a=r(997),i=r(2494),o=r(9575),n=e([i,o]);[i,o]=n.then?(await n)():n;let l=[{depth:2,value:"Known bugs",id:"known-bugs"}];function _createMdxContent(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",span:"span",p:"p"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[a.jsx(t.h2,{id:"known-bugs",children:"Known bugs"}),"\n",a.jsx(t.pre,{"data-language":"ansi","data-theme":"default",hasCopyCode:!0,children:(0,a.jsxs)(t.code,{"data-language":"ansi","data-theme":"default",children:[a.jsx(t.span,{className:"line",children:a.jsx(t.span,{style:{color:"var(--shiki-color-text)"},children:"root@xmanage:~# xmanage server edit MyServer disklimit"})}),"\n",a.jsx(t.span,{className:"line",children:a.jsx(t.span,{style:{color:"var(--shiki-color-text)"},children:"..."})}),"\n",a.jsx(t.span,{className:"line",children:a.jsx(t.span,{style:{color:"var(--shiki-color-text)"},children:"The filesystem is already 131072 (1k) blocks long.  Nothing to do!"})})]})}),"\n",a.jsx(t.p,{children:"That happens because of the loop devices, which are used for servers. Resizing a filesystem may cause server's files to break, so resize2fs doesn't allow shrinking loop devices. To avoid this, we recommend to reinstall server with the required disk space."})]})}let p={MDXContent:function(e={}){let{wrapper:t}=Object.assign({},(0,o.a)(),e.components);return t?a.jsx(t,{...e,children:a.jsx(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/bugs.mdx",route:"/bugs",title:"Bugs",headings:l},pageNextRoute:"/bugs"};p.dynamicMetaModules=[];let c=(0,i.j)(p);s()}catch(e){s(e)}})},3841:e=>{e.exports=require("@popperjs/core")},8395:e=>{e.exports=require("flexsearch")},2235:e=>{e.exports=require("focus-visible")},9164:e=>{e.exports=require("git-url-parse")},4916:e=>{e.exports=require("intersection-observer")},1043:e=>{e.exports=require("lodash.get")},5875:e=>{e.exports=require("match-sorter")},6641:e=>{e.exports=require("next-seo")},1162:e=>{e.exports=require("next-themes")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},2488:e=>{e.exports=require("slash")},4090:e=>{e.exports=require("title")},1185:e=>{e.exports=import("@headlessui/react")},7834:e=>{e.exports=import("@mdx-js/react")},372:e=>{e.exports=import("@theguild/remark-mermaid/mermaid")},6593:e=>{e.exports=import("clsx")},5837:e=>{e.exports=import("escape-string-regexp")},9961:e=>{e.exports=import("next-mdx-remote")},8751:e=>{e.exports=import("scroll-into-view-if-needed")},9926:e=>{e.exports=import("zod")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[761,707,209,450,494,733],()=>__webpack_exec__(4714));module.exports=r})();
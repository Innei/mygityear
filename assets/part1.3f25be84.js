var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,l=(e,l)=>{for(var o in l||(l={}))t.call(l,o)&&a(e,o,l[o]);if(r)for(var o of r(l))n.call(l,o)&&a(e,o,l[o]);return e};"undefined"!=typeof require&&require;import{C as o,s,c}from"./index.module.803c4485.js";import{R as u,r as f,s as i}from"./vendor.a1bf352f.js";function m(e){return u.createElement("svg",l({width:"1em",height:"1em",viewBox:"0 0 24 24"},e),u.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z",fill:"currentColor"}))}var p="_blink_7nr49_1",x="_cursor_7nr49_24";const d=f.exports.memo((e=>{const a=e,{pauseTime:o=1e3,suffix:s="|",textArray:c,textSpeed:i=100,repeat:m=!0,tag:d="h1",pause:g=!1}=a,b=((e,a)=>{var l={};for(var o in e)t.call(e,o)&&a.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&r)for(var o of r(e))a.indexOf(o)<0&&n.call(e,o)&&(l[o]=e[o]);return l})(a,["pauseTime","suffix","textArray","textSpeed","repeat","tag","pause"]),v=u.useMemo((()=>c.filter((e=>e.length>0))),[c]),[h,E]=u.useState(""),y=u.useRef(0),O=u.useRef(),T=u.useRef(!g);f.exports.useEffect((()=>{if(g)O.current=clearTimeout(O.current);else{if(T.current)return;j()}}),[g]);const j=f.exports.useCallback((()=>{E((e=>{T.current=!1;const r=Array.from(e),t=Array.from(v[y.current]);let n="";if(t.length===r.length){if(n="",m)y.current=(y.current+1)%v.length;else{const e=y.current+1;if(e!==v.length)return t.join("");y.current=e}T.current=!0,O.current=setTimeout(j,i)}else n=e+t[r.length],T.current=!0,O.current=setTimeout(j,t.length-1===r.length?o:i);return n}))}),[o,m,v,i]);return f.exports.useEffect((()=>{if(g)return void E(v[y.current]);const e=setTimeout(j,i);return()=>clearTimeout(e)}),[j,i]),f.exports.useEffect((()=>()=>clearTimeout(O.current)),[]),u.createElement(d,l({},b),u.createElement(u.Fragment,null,h,u.createElement("span",{className:`${p} ${x}`},s)))})),g=["我和我的代码，还有这一年。"].concat(i(["剑指天下，秋收 [Offer]","半夜奋笔疾码，云相伴，”乐“相随。","git push --force # 🐶",'debugPrint("Hello World!")',"vivo mian() { }；","0.2 + 0.1 // 0.30000000000000004","ReferenceError: girlfriend is not defined"])),b=()=>u.createElement(o,{className:s.part1},u.createElement("div",{className:"flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono\n      text-3xl font-bold !p-0\n      "},u.createElement(d,{className:"break-all",textArray:g,repeat:!0})),u.createElement("div",{className:c("absolute left-1/2 -translate-x-1/2 top-[80vh] text-xl")},u.createElement(m,{className:s["arrow-down"]})));export{b as Part1};

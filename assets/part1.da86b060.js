var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,l=(e,l)=>{for(var o in l||(l={}))t.call(l,o)&&a(e,o,l[o]);if(r)for(var o of r(l))n.call(l,o)&&a(e,o,l[o]);return e};"undefined"!=typeof require&&require;import{s as o,c as s}from"./index.module.7771c0c4.js";import{R as c,r as u,s as f}from"./vendor.2af9b8bc.js";import{C as i}from"./index.721b138e.js";function m(e){return c.createElement("svg",l({width:"1em",height:"1em",viewBox:"0 0 24 24"},e),c.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z",fill:"currentColor"}))}var p="_blink_7nr49_1",x="_cursor_7nr49_24";const d=u.exports.memo((e=>{const a=e,{pauseTime:o=1e3,suffix:s="|",textArray:f,textSpeed:i=100,repeat:m=!0,tag:d="h1",pause:b=!1}=a,g=((e,a)=>{var l={};for(var o in e)t.call(e,o)&&a.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&r)for(var o of r(e))a.indexOf(o)<0&&n.call(e,o)&&(l[o]=e[o]);return l})(a,["pauseTime","suffix","textArray","textSpeed","repeat","tag","pause"]),v=c.useMemo((()=>f.filter((e=>e.length>0))),[f]),[h,E]=c.useState(""),y=c.useRef(0),O=c.useRef(),j=c.useRef(!b);u.exports.useEffect((()=>{if(b)O.current=clearTimeout(O.current);else{if(j.current)return;T()}}),[b]);const T=u.exports.useCallback((()=>{E((e=>{j.current=!1;const r=Array.from(e),t=Array.from(v[y.current]);let n="";if(t.length===r.length){if(n="",m)y.current=(y.current+1)%v.length;else{const e=y.current+1;if(e!==v.length)return t.join("");y.current=e}j.current=!0,O.current=setTimeout(T,i)}else n=e+t[r.length],j.current=!0,O.current=setTimeout(T,t.length-1===r.length?o:i);return n}))}),[o,m,v,i]);return u.exports.useEffect((()=>{if(b)return void E(v[y.current]);const e=setTimeout(T,i);return()=>clearTimeout(e)}),[T,i]),u.exports.useEffect((()=>()=>clearTimeout(O.current)),[]),c.createElement(d,l({},g),c.createElement(c.Fragment,null,h,c.createElement("span",{className:`${p} ${x}`},s)))})),b=["我和我的代码，还有这一年。"].concat(f(["剑指天下，秋收 [Offer]","半夜奋笔疾码，云相伴，”乐“相随。","git push --force # 🐶",'debugPrint("Hello World!")',"vivo mian() { }；","0.2 + 0.1 // 0.30000000000000004","ReferenceError: girlfriend is not defined"])),g=()=>c.createElement(i,{className:o.part1},c.createElement("div",{className:"flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono\n      text-3xl font-bold !p-0\n      "},c.createElement(d,{className:"break-all",textArray:b,repeat:!0})),c.createElement("div",{className:s("absolute left-1/2 -translate-x-1/2 top-[80vh] text-xl")},c.createElement(m,{className:o["arrow-down"]})));export{g as Part1};
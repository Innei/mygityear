var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;"undefined"!=typeof require&&require;import{c as n,s as o}from"./index.module.7771c0c4.js";import{e as c,r as s,R as i}from"./vendor.9a8bf476.js";import{u as m}from"./react-intersection-observer.m.4c773373.js";import{g as f}from"./index.f39fd826.js";import{C as u}from"./index.21c79343.js";var d="_root_yw7a0_1";const p=c(364).map((()=>Math.floor(3*Math.random()))),y=()=>{const e=s.exports.useRef(null),{ref:t,inView:r}=m(),a=s.exports.useRef(!1);return s.exports.useEffect((()=>{const t=e.current;if(!t)return;if(!r)return;if(a.current)return;const l=t.querySelectorAll("rect");let n=0;l.forEach((e=>{const t=1e3*+e.getAttribute("data-delay");e.animate([{opacity:0},{opacity:1}],{duration:500,delay:t,composite:"replace",fill:"forwards"}).onfinish=e=>{n++,n===l.length&&(a.current=!0)}}))}),[r]),i.createElement("div",{className:n("inline-block",d),ref:t},i.createElement("svg",{height:385,width:205,ref:e},i.createElement("g",null,c(0,364).map((e=>i.createElement("rect",{style:{opacity:0},"data-delay":f(.25,.75),key:e,width:"11",height:"11",x:e%14*10+e%14*5,y:10*Math.floor(e/14)+5*Math.floor(e/14),className:"ContributionCalendar-day",rx:"2",ry:"2","data-count":"7","data-date":"2020-11-29","data-level":p[e]}))))))};function x(e){return i.createElement("svg",((e,n)=>{for(var o in n||(n={}))r.call(n,o)&&l(e,o,n[o]);if(t)for(var o of t(n))a.call(n,o)&&l(e,o,n[o]);return e})({width:"1em",height:"1em",viewBox:"0 0 16 16"},e),i.createElement("g",{fill:"currentColor"},i.createElement("path",{d:"M15.698 7.287L8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45l1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025a1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"})))}const h=()=>i.createElement(u,{className:n(o.part2,"container")},i.createElement("div",{className:"w-full space-x-6 flex items-center relative"},i.createElement(x,{className:"absolute right-[2.2rem] top-[12px] text-[#E15B39] text-[46px]"}),i.createElement(y,null),i.createElement("div",{className:"flex-grow flex-shrink-0 pr-6"},i.createElement("span",{className:"text-sm font-medium"},"2021 年",i.createElement("br",null)),i.createElement("h2",{className:"font-medium text-3xl py-2"},"我和我的代码，还有这一年。"),i.createElement("hr",{className:"dark:text-gray$-dark text-gray$-light w-full opacity-30"}),i.createElement("p",{className:"dark:text-gray$-dark text-sm py-2 font-medium text-gray$-light"},"校检码: ",i.createElement("code",null,"0x0c")))));export{h as Part2};

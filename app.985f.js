(()=>{"use strict";var e,t={905:(e,t,r)=>{var n=r(294),o=r(745);const a=e=>{const t=9*Math.floor(e/9);return[0,1,2,3,4,5,6,7,8].map((e=>e+t))},l=e=>{const t=e%9;return[0,9,18,27,36,45,54,63,72].map((e=>e+t))},s=e=>{const t=Math.floor(e/9),r=e%9,n=9*Math.floor(t/3)+Math.floor(r/3);return[0,1,2,9,10,11,18,19,20].map((e=>e+3*n))},c=(e,t,r,n,o,c)=>{if(r<0)return"";if(o.indexOf(t)>-1)return" error";if(t===r)return" focus";let i="";const u=c,m=new Set;a(r).forEach(m.add,m),l(r).forEach(m.add,m),s(r).forEach(m.add,m),e!==u&&Number(e)!==Number(u)||0===u||(i+=" v");const f=Number(u);if(f<10&&0!==f){const r=new Set;a(t).forEach(r.add,r),l(t).forEach(r.add,r),s(t).forEach(r.add,r),Array.from(r).some((e=>n[e]===f))&&(i+=" o"),"number"==typeof e&&e>0&&(i+=" h")}return"string"==typeof e&&"number"==typeof u&&e.split("").map((e=>parseInt(e,10))).indexOf(u)>=0&&(i+=` n nn${u}`),i},i=(e,t,r=!1,n,o)=>{if(r){if("number"==typeof e&&e>0);else if(0!==t){const r="string"==typeof e?e.split("").map((e=>parseInt(e,10))):[],a=r.indexOf(t),l=a>=0?r.slice(0,a).concat(r.slice(a+1)):r.concat(t);o(n,l.length?l.join(""):0,t)}}else o(n,t,t)},u=e=>{const t=document.querySelector(`section > div:nth-of-type(${e+1}) input`);t instanceof HTMLInputElement&&(t.focus(),""===t.value&&t.select())},m=Array(81).fill(0),f=Array(81).fill(""),p=(e,t)=>9*e+t,C=e=>3*Math.floor(e/3),d=(e,t,r)=>{let{row:n,col:o}=(e=>({row:Math.floor(e/9),col:e%9}))(t);for(let t=0;t<9;++t)if(e[p(t,o)]==r)return!1;for(let t=0;t<9;++t)if(e[p(n,t)]==r)return!1;let a=C(n),l=C(o);for(let t=a;t<a+3;++t)for(let n=l;n<l+3;++n)if(e[p(t,n)]==r)return!1;return!0};var E=r(883);const h=({fieldVal:e,i:t,initVal:r,focus:o,setFocus:a,puzleUpdate:l,overlap:s})=>{const c=(0,n.useRef)(!1),m="string"==typeof e?e.split("").map((e=>parseInt(e,10))):[];return n.createElement(n.Fragment,null,n.createElement("div",{className:`s${Math.floor(t/9)+1}${o===t?" focus":""}${s}${r?" init":""}`},m.map((e=>n.createElement("span",{className:`n${e}`,key:e},e))),n.createElement("input",{type:"text",value:"string"==typeof e||0===e?"":e,onChange:0!==r?void 0:r=>{const n=c.current,o=r.target.value.slice(-1),a=parseInt(o,10)||0,s=0===a&&c.current?(e=>{switch(e){case"!":return 1;case"@":return 2;case"#":return 3;case"$":return 4;case"%":return 5;case"^":return 6;case"&":return 7;case"*":return 8;case"(":return 9}return 0})(o):a;i(e,s,n,t,l)},onKeyDown:n=>{if("Backspace"===n.key)if("string"==typeof e){const r=e.slice(0,-1);l(t,""===r?0:r,""===r?0:parseInt(r,10))}else 0===r&&l(t,0,0);else c.current=n.getModifierState("CapsLock")||n.shiftKey,((e,t)=>{switch(e){case"ArrowRight":return u((t+1)%9?t+1:t-8);case"ArrowDown":return u(t+9>80?t-72:t+9);case"ArrowLeft":return u(t%9?t-1:t+8);case"ArrowUp":u(t-9<0?t+72:t-9)}})(n.key,t)},onFocus:()=>a(t)})))},v=n.memo(h),y=({level:e,setLevel:t,showLevel:r,close:o})=>{const[a,l]=(0,n.useState)(e);return n.createElement("ul",{className:r?"":"hidden"},n.createElement("li",null,n.createElement("button",{onClick:()=>l(45)},"Easy"),n.createElement("button",{onClick:()=>l(51)},"Medium"),n.createElement("button",{onClick:()=>l(59)},"Hard"),n.createElement("button",{onClick:()=>l(65)},"Extreme")),n.createElement("li",null,n.createElement("label",null,n.createElement("input",{type:"range",min:"1",max:"71",step:"1",value:a,onChange:e=>{const t=parseInt(e.target.value,10);Number.isInteger(t)&&t<=71&&t>=1&&l(t)}})),n.createElement("mark",{style:{left:2.2+(a-1)/70*95.6+"%"}},a)),n.createElement("li",null,n.createElement("button",{onClick:()=>{t(a,!1),o()}},"Set Level"),n.createElement("button",{onClick:()=>{t(a,!0),o()}},"Set Level & Restart")))},k=n.memo(y),g=({isPaused:e,resetCount:t})=>{const r=(0,n.useRef)(0),o=(0,n.useRef)(setTimeout((()=>{}))),[a,l]=(0,n.useState)("00:00"),s=()=>{if(e)clearTimeout(o.current);else{r.current++;const e=Math.floor(r.current/60),t=r.current%60;l(`${e>9?e:`0${e}`}:${t>9?t:`0${t}`}`),o.current=setTimeout(s,1e3)}};return(0,n.useEffect)((()=>{clearTimeout(o.current),l("00:00"),r.current=0}),[t]),(0,n.useEffect)((()=>{e?clearTimeout(o.current):o.current=setTimeout(s,1e3)}),[e]),n.createElement("button",null,a)},b=n.memo(g),w=({val:e,size:t=0,press:r})=>n.createElement("button",{onClick:r,className:t<9?void 0:"off",disabled:9===t,style:{"--w":`${Math.ceil(t/9*100)}%`}},e),x=n.memo(w),M={BUTTONS:[1,2,3,4,5,6,7,8,9]},S=({noteOptions:e,pressButton:t,play:r})=>n.createElement("section",null,n.createElement("fieldset",null,M.BUTTONS.map((r=>n.createElement(x,{val:r,size:e[r],key:r,press:()=>t(r)})))),n.createElement("button",{onClick:r,className:"resume"},"Resume Game"),n.createElement("fieldset",{className:"notes"},M.BUTTONS.map((r=>n.createElement(x,{val:r,size:e[r],key:r,press:()=>t(r,!0)})))),n.createElement("button",{onClick:r,className:"start"},"Start New Game")),T=n.memo(S),O=()=>n.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},n.createElement("path",{d:"M8.9126 15.9336C10.1709 16.249 11.5985 16.2492 13.0351 15.8642C14.4717 15.4793 15.7079 14.7653 16.64 13.863",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"}),n.createElement("ellipse",{cx:"14.5094",cy:"9.77405",rx:"1",ry:"1.5",transform:"rotate(-15 14.5094 9.77405)",fill:"#1C274C"}),n.createElement("ellipse",{cx:"8.71402",cy:"11.3278",rx:"1",ry:"1.5",transform:"rotate(-15 8.71402 11.3278)",fill:"#1C274C"}),n.createElement("path",{opacity:"0.5",d:"M3.20356 14.357C2.09246 10.2103 1.53691 8.13698 2.47995 6.50359C3.42298 4.87021 5.49632 4.31466 9.643 3.20356C13.7897 2.09246 15.863 1.53691 17.4964 2.47995C19.1298 3.42298 19.6853 5.49632 20.7964 9.643C21.9075 13.7897 22.4631 15.863 21.5201 17.4964C20.577 19.1298 18.5037 19.6853 14.357 20.7964C10.2103 21.9075 8.13698 22.4631 6.50359 21.5201C4.87021 20.577 4.31466 18.5037 3.20356 14.357Z",stroke:"#1C274C",strokeWidth:"1.5"}),n.createElement("path",{d:"M13 16.0004L13.478 16.9742C13.8393 17.7104 14.7249 18.0198 15.4661 17.6689C16.2223 17.311 16.5394 16.4035 16.1708 15.6524L15.7115 14.7168",stroke:"#1C274C",strokeWidth:"1.5"})),N=()=>n.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},n.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"#1C274C",strokeWidth:"1.5"}),n.createElement("path",{d:"M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z",stroke:"#1C274C",strokeWidth:"1.5"})),I=()=>n.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},n.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"#1C274C","stroke-width":"1.5"}),n.createElement("g",null,n.createElement("path",{d:"M12 12V10",stroke:"#1C274C","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("animateTransform",{repeatCount:"indefinite",dur:"10s",to:"360 12 12",from:"0 12 12",type:"rotate",attributeName:"transform",attributeType:"xml"})),n.createElement("g",null,n.createElement("path",{d:"M12 8V12",stroke:"#1C274C","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),n.createElement("animateTransform",{repeatCount:"indefinite",dur:"1s",to:"360 12 12",from:"0 12 12",type:"rotate",attributeName:"transform",attributeType:"xml"}))),L=()=>n.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},n.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"#1C274C",strokeWidth:"1.5"}),n.createElement("path",{d:"M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z",stroke:"#1C274C",strokeWidth:"1.5"}),n.createElement("path",{d:"M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z",stroke:"#1C274C",strokeWidth:"1.5"})),$=()=>n.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},n.createElement("path",{d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",fill:"#1C274C"}),n.createElement("path",{d:"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",fill:"#1C274C"}),n.createElement("path",{d:"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",fill:"#1C274C"}),n.createElement("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C",strokeWidth:"1.5"}));var B,W;const j=window.Worker?new Worker(new URL(r.p+r.u(960),r.b)):null,R="ontouchstart"in window||(null===(B=navigator)||void 0===B?void 0:B.maxTouchPoints)>0||(null===(W=navigator)||void 0===W?void 0:W.msMaxTouchPoints)>0,V=(new Date).getTimezoneOffset(),Z=()=>{const e=(0,n.useRef)(!0),t=(0,n.useRef)(0),r=(0,n.useRef)(m),[o,p]=(0,n.useState)(6),[C,h]=(0,n.useState)(!1),[y,g]=(0,n.useState)(!0),[w,x]=(0,n.useState)(!1),[M,S]=(0,n.useState)(!0),[B,W]=(0,n.useState)({}),[Z,z]=(0,n.useState)([]),[A,U]=(0,n.useState)(-1),[H,P]=(0,n.useState)(0),[F,D]=(0,n.useState)([]),[G,K]=(0,n.useState)(r.current);(0,n.useEffect)((()=>{J(-1),D([]),W({})}),[r.current]);const q=e=>{if(!M&&!y){if(console.log("pre hit",e.target.value,A,e.target),!(e.target instanceof HTMLInputElement)||e.target instanceof HTMLInputElement&&""!==e.target.value){const t=parseInt(e.key,10);if(t.toString()===e.key&&e.preventDefault(),console.log("hit",t,"number"==typeof t&&t>0&&t<10),"number"==typeof t&&t>0&&t<10){const e=G.indexOf(t);e>-1?(console.log("jump to ",t),z(G.map(((r,n,o)=>c(r,n,e,o,F,t)))),J(e),P(t)):(console.log("jump to ... no, clear overlap"),z(f),J(-1),P(0))}else 0===t&&(console.log("0 is pressed, clearing overlap"),z(G.map(((e,r,n)=>c(e,r,-1,n,F,t)))),J(-1))}console.log("————————————")}};(0,n.useEffect)((()=>(window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q))),[G]);const J=e=>{if(M||y)return;const t=G[e];"number"==typeof t&&0!==t&&P(t),U(e)},Q=e=>{const t=e.reduce(((e,t)=>("number"==typeof t&&(e[t]=e[t]?e[t]+1:1),e)),{});W(t)};(0,n.useEffect)((()=>{Q(G)}),[G]),(0,n.useEffect)((()=>{H>-1&&z(G.map(((e,t,r)=>c(e,t,A,r,F,H))))}),[G,A,F,H]);const X=n=>{var a;x(!0),S(!1),e.current=!1,r.current=m,null===(a=insights)||void 0===a||a.track({id:"start",parameters:{w:window.innerWidth,h:window.innerHeight,time:V,touch:R,locale:window.navigator.language}}),j&&"function"==typeof j.postMessage&&(j.postMessage("number"!=typeof n?81-o:81-n),j.onmessage=function({data:e}){r.current=e,t.current++,K(e),g(!1),x(!1),Q(e)})},Y=(t,r,n)=>{"number"==typeof n&&0!==n&&P(n),K((o=>{const c=[...o];c[t]=r;const i=o[t],u="string"==typeof i?i:"",{overlapIndexes:m,cleanState:f}=((e,t,r)=>{const n=e[t],o=a(t).concat(l(t),s(t)),c=new Set(o);c.delete(t);const i=Array.from(c);let u=[];if("number"==typeof n)0!==n&&(u=i.filter((t=>e[t]===n)));else{const t=n.split(""),o=r.split("");if(t.length>o.length){const r=t.filter((e=>!o.includes(e)))[0];u=i.filter((t=>e[t]===parseInt(r,10)))}}const m=[...e];return i.forEach((e=>{const t=m[e];if("string"==typeof t){const r=t.split(""),o=r.filter((e=>parseInt(e,10)!==n));o.length!==r.length&&(0===o.length?m[e]=0:m[e]=o.join(""))}})),{overlapIndexes:u,cleanState:m}})(c,t,u);if(!e.current){const r=d(o.map((e=>"number"==typeof e?e:0)),t,"number"==typeof n?n:parseInt(n,10));if(r){const t=f.every((e=>"number"==typeof e&&e>0));t&&(console.log("fini!",c,f),P(0),J(-1),g(!0),S(!0),e.current=!0,(0,E.Z)({particleCount:200,spread:60,ticks:400,scalar:1.2,origin:{y:.8}}))}m.length>0?D([...m,t]):Boolean(r)?D([]):D([t])}return f}))},_=t=>{w||(0!==t?(g(!0),X(t)):e.current?X():g((e=>!e)),u(A))},ee=()=>_(0),te=()=>h((e=>!e));return n.createElement(n.Fragment,null,n.createElement("section",{className:"header"},n.createElement(k,{level:o,setLevel:(e,t)=>{p(e),t&&_(e)},showLevel:C,close:te}),n.createElement("button",null,n.createElement(O,null)),n.createElement("button",{onClick:te,className:C?"active":void 0},o<=45?"Easy":o<=51?"Medium":o<=59?"Hard":"Extreme"),n.createElement("button",{onClick:ee},y?w?n.createElement(I,null):n.createElement(N,null):n.createElement(L,null)),n.createElement(b,{isPaused:y,resetCount:t.current}),n.createElement("button",null,n.createElement($,null))),n.createElement("section",{className:"puzzle"+(M?" fini":y?w?" load":" pause":"")},G.map(((e,t)=>n.createElement(v,{i:t,key:t,fieldVal:e,initVal:r.current[t],focus:A,setFocus:J,focusValue:G[A]||0,puzleUpdate:Y,overlap:Z[t]})))),n.createElement(T,{noteOptions:B,pressButton:(e,t=!1)=>{A>-1&&0===r.current[A]&&("string"==typeof G[A]||0===G[A]?i(G[A],e,t,A,Y):G[A]===e&&i(G[A],0,t,A,Y),u(A))},play:ee}))},z=n.memo(Z),A=document.body.firstElementChild;(0,o.s)(A).render(n.createElement(z,null))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],s=!0,c=0;c<r.length;c++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,a<l&&(l=a));if(s){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.u=e=>e+".de54.js",n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",(()=>{n.b=document.baseURI||self.location.href;var e={143:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[l,s,c]=r,i=0;if(l.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(t&&t(r);i<l.length;i++)a=l[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunksudoku=self.webpackChunksudoku||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[76],(()=>n(905)));o=n.O(o)})();
(()=>{"use strict";var e,t={905:(e,t,n)=>{var r=n(294),o=n(745);const a=e=>{const t=9*Math.floor(e/9);return[0,1,2,3,4,5,6,7,8].map((e=>e+t))},l=e=>{const t=e%9;return[0,9,18,27,36,45,54,63,72].map((e=>e+t))},s=e=>{const t=Math.floor(e/9),n=e%9,r=9*Math.floor(t/3)+Math.floor(n/3);return[0,1,2,9,10,11,18,19,20].map((e=>e+3*r))},c=(e,t,n,r,o,c)=>{if(n<0)return"";if(o.indexOf(t)>-1)return" error";if(t===n)return" focus";let i="";const u=c,m=new Set;a(n).forEach(m.add,m),l(n).forEach(m.add,m),s(n).forEach(m.add,m),e!==u&&Number(e)!==Number(u)||0===u||(i+=" v");const f=Number(u);if(f<10&&0!==f){const n=new Set;a(t).forEach(n.add,n),l(t).forEach(n.add,n),s(t).forEach(n.add,n),Array.from(n).some((e=>r[e]===f))&&(i+=" o"),"number"==typeof e&&e>0&&(i+=" h")}return"string"==typeof e&&"number"==typeof u&&e.split("").map((e=>parseInt(e,10))).indexOf(u)>=0&&(i+=` n nn${u}`),i},i=(e,t,n=!1,r,o)=>{if(n){if("number"==typeof e&&e>0);else if(0!==t){const n="string"==typeof e?e.split("").map((e=>parseInt(e,10))):[],a=n.indexOf(t),l=a>=0?n.slice(0,a).concat(n.slice(a+1)):n.concat(t);o(r,l.length?l.join(""):0,t)}}else o(r,t,t)},u=e=>{const t=document.querySelector(`section > div:nth-of-type(${e+1}) input`);t instanceof HTMLInputElement&&(t.focus(),""===t.value&&t.select())},m=Array(81).fill(0),f=Array(81).fill(""),p=(e,t)=>9*e+t,d=e=>3*Math.floor(e/3),C=(e,t,n)=>{let{row:r,col:o}=(e=>({row:Math.floor(e/9),col:e%9}))(t);for(let t=0;t<9;++t)if(e[p(t,o)]==n)return!1;for(let t=0;t<9;++t)if(e[p(r,t)]==n)return!1;let a=d(r),l=d(o);for(let t=a;t<a+3;++t)for(let r=l;r<l+3;++r)if(e[p(t,r)]==n)return!1;return!0};var E=n(883);const h=({fieldVal:e,i:t,initVal:n,focus:o,setFocus:a,puzleUpdate:l,overlap:s})=>{const c=(0,r.useRef)(!1),m="string"==typeof e?e.split("").map((e=>parseInt(e,10))):[];return r.createElement(r.Fragment,null,r.createElement("div",{className:`s${Math.floor(t/9)+1}${o===t?" focus":""}${s}${n?" init":""}`},m.map((e=>r.createElement("span",{className:`n${e}`,key:e},e))),r.createElement("input",{type:"text",inputMode:"none",value:"string"==typeof e||0===e?"":e,onChange:0!==n?void 0:n=>{const r=c.current,o=n.target.value.slice(-1),a=parseInt(o,10)||0,s=0===a&&c.current?(e=>{switch(e){case"!":return 1;case"@":return 2;case"#":return 3;case"$":return 4;case"%":return 5;case"^":return 6;case"&":return 7;case"*":return 8;case"(":return 9}return 0})(o):a;i(e,s,r,t,l)},onKeyDown:r=>{if("Backspace"===r.key)if("string"==typeof e){const n=e.slice(0,-1);l(t,""===n?0:n,""===n?0:parseInt(n,10))}else 0===n&&l(t,0,0);else c.current=r.getModifierState("CapsLock")||r.shiftKey,((e,t)=>{switch(e){case"ArrowRight":return u((t+1)%9?t+1:t-8);case"ArrowDown":return u(t+9>80?t-72:t+9);case"ArrowLeft":return u(t%9?t-1:t+8);case"ArrowUp":u(t-9<0?t+72:t-9)}})(r.key,t)},onFocus:()=>a(t)})))},v=r.memo(h),y=({level:e,setLevel:t,showLevel:n,close:o})=>{const[a,l]=(0,r.useState)(e);return r.createElement("ul",{className:n?"":"hidden"},r.createElement("li",null,r.createElement("button",{onClick:()=>l(45)},"Easy"),r.createElement("button",{onClick:()=>l(51)},"Medium"),r.createElement("button",{onClick:()=>l(59)},"Hard"),r.createElement("button",{onClick:()=>l(65)},"Extreme")),r.createElement("li",null,r.createElement("label",null,r.createElement("input",{type:"range",min:"1",max:"71",step:"1",value:a,onChange:e=>{const t=parseInt(e.target.value,10);Number.isInteger(t)&&t<=71&&t>=1&&l(t)}})),r.createElement("mark",{style:{left:2.2+(a-1)/70*95.6+"%"}},a)),r.createElement("li",null,r.createElement("button",{onClick:()=>{t(a,!1),o()}},"Set Level"),r.createElement("button",{onClick:()=>{t(a,!0),o()}},"Set Level & Restart")))},g=r.memo(y),k=({isPaused:e,resetCount:t})=>{const n=(0,r.useRef)(0),o=(0,r.useRef)(setTimeout((()=>{}))),[a,l]=(0,r.useState)("00:00"),s=()=>{if(e)clearTimeout(o.current);else{n.current++;const e=Math.floor(n.current/60),t=n.current%60;l(`${e>9?e:`0${e}`}:${t>9?t:`0${t}`}`),o.current=setTimeout(s,1e3)}};return(0,r.useEffect)((()=>{clearTimeout(o.current),l("00:00"),n.current=0}),[t]),(0,r.useEffect)((()=>{e?clearTimeout(o.current):o.current=setTimeout(s,1e3)}),[e]),r.createElement("button",null,a)},b=r.memo(k),w=({val:e,size:t=0,press:n})=>r.createElement("button",{onClick:n,className:t<9?void 0:"off",disabled:9===t,style:{"--w":`${Math.ceil(t/9*100)}%`}},e),S=r.memo(w),M={BUTTONS:[1,2,3,4,5,6,7,8,9]},x=({noteOptions:e,pressButton:t,play:n})=>r.createElement("section",null,r.createElement("fieldset",null,M.BUTTONS.map((n=>r.createElement(S,{val:n,size:e[n],key:n,press:()=>t(n)})))),r.createElement("button",{onClick:n,className:"resume"},"Resume Game"),r.createElement("fieldset",{className:"notes"},M.BUTTONS.map((n=>r.createElement(S,{val:n,size:e[n],key:n,press:()=>t(n,!0)})))),r.createElement("button",{onClick:n,className:"start"},"Start New Game")),O=r.memo(x),T=()=>r.createElement("h1",null,r.createElement("b",null,"S"),r.createElement("b",null,"O"),r.createElement("b",null,"O")),N=()=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},r.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"#1C274C",strokeWidth:"1.5"}),r.createElement("path",{d:"M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z",stroke:"#1C274C",strokeWidth:"1.5"})),L=()=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},r.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"#1C274C",strokeWidth:"1.5"}),r.createElement("g",null,r.createElement("path",{d:"M12 12V10",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("animateTransform",{repeatCount:"indefinite",dur:"10s",to:"360 12 12",from:"0 12 12",type:"rotate",attributeName:"transform",attributeType:"xml"})),r.createElement("g",null,r.createElement("path",{d:"M12 8V12",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("animateTransform",{repeatCount:"indefinite",dur:"1s",to:"360 12 12",from:"0 12 12",type:"rotate",attributeName:"transform",attributeType:"xml"}))),I=()=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},r.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"#1C274C",strokeWidth:"1.5"}),r.createElement("path",{d:"M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z",stroke:"#1C274C",strokeWidth:"1.5"}),r.createElement("path",{d:"M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z",stroke:"#1C274C",strokeWidth:"1.5"})),$=()=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},r.createElement("path",{d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",fill:"#1C274C"}),r.createElement("path",{d:"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",fill:"#1C274C"}),r.createElement("path",{d:"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",fill:"#1C274C"}),r.createElement("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C",strokeWidth:"1.5"}));var W,j;const B=window.Worker?new Worker(new URL(n.p+n.u(960),n.b)):null,R="ontouchstart"in window||(null===(W=navigator)||void 0===W?void 0:W.maxTouchPoints)>0||(null===(j=navigator)||void 0===j?void 0:j.msMaxTouchPoints)>0,V=(new Date).getTimezoneOffset(),z=()=>{const e=(0,r.useRef)(!0),t=(0,r.useRef)(0),n=(0,r.useRef)(m),[o,p]=(0,r.useState)(6),[d,h]=(0,r.useState)(!1),[y,k]=(0,r.useState)(!0),[w,S]=(0,r.useState)(!1),[M,x]=(0,r.useState)(!0),[W,j]=(0,r.useState)({}),[z,A]=(0,r.useState)([]),[U,Z]=(0,r.useState)(-1),[P,F]=(0,r.useState)(0),[H,D]=(0,r.useState)([]),[G,K]=(0,r.useState)(n.current);(0,r.useEffect)((()=>{J(-1),D([]),j({})}),[n.current]);const q=e=>{if(!M&&!y){if(console.log("pre hit",e.target.value,U,e.target),!(e.target instanceof HTMLInputElement)||e.target instanceof HTMLInputElement&&""!==e.target.value){const t=parseInt(e.key,10);if(t.toString()===e.key&&e.preventDefault(),console.log("hit",t,"number"==typeof t&&t>0&&t<10),"number"==typeof t&&t>0&&t<10){const e=G.indexOf(t);e>-1?(console.log("jump to ",t),A(G.map(((n,r,o)=>c(n,r,e,o,H,t)))),J(e),F(t)):(console.log("jump to ... no, clear overlap"),A(f),J(-1),F(0))}else 0===t&&(console.log("0 is pressed, clearing overlap"),A(G.map(((e,n,r)=>c(e,n,-1,r,H,t)))),J(-1))}console.log("————————————")}};(0,r.useEffect)((()=>(window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q))),[G]);const J=e=>{if(M||y)return;const t=G[e];"number"==typeof t&&0!==t&&F(t),Z(e)},Q=e=>{const t=e.reduce(((e,t)=>("number"==typeof t&&(e[t]=e[t]?e[t]+1:1),e)),{});j(t)};(0,r.useEffect)((()=>{Q(G)}),[G]),(0,r.useEffect)((()=>{P>-1&&A(G.map(((e,t,n)=>c(e,t,U,n,H,P))))}),[G,U,H,P]);const X=r=>{var a;S(!0),x(!1),e.current=!1,n.current=m,null===(a=insights)||void 0===a||a.track({id:"start",parameters:{w:window.innerWidth,h:window.innerHeight,time:V,touch:R,locale:window.navigator.language}}),B&&"function"==typeof B.postMessage&&(B.postMessage("number"!=typeof r?81-o:81-r),B.onmessage=function({data:e}){n.current=e,t.current++,K(e),k(!1),S(!1),Q(e)})},Y=(t,n,r)=>{"number"==typeof r&&0!==r&&F(r),K((o=>{const c=[...o];c[t]=n;const i=o[t],u="string"==typeof i?i:"",{overlapIndexes:m,cleanState:f}=((e,t,n)=>{const r=e[t],o=a(t).concat(l(t),s(t)),c=new Set(o);c.delete(t);const i=Array.from(c);let u=[];if("number"==typeof r)0!==r&&(u=i.filter((t=>e[t]===r)));else{const t=r.split(""),o=n.split("");if(t.length>o.length){const n=t.filter((e=>!o.includes(e)))[0];u=i.filter((t=>e[t]===parseInt(n,10)))}}const m=[...e];return i.forEach((e=>{const t=m[e];if("string"==typeof t){const n=t.split(""),o=n.filter((e=>parseInt(e,10)!==r));o.length!==n.length&&(0===o.length?m[e]=0:m[e]=o.join(""))}})),{overlapIndexes:u,cleanState:m}})(c,t,u);if(!e.current){const n=C(o.map((e=>"number"==typeof e?e:0)),t,"number"==typeof r?r:parseInt(r,10));if(n){const t=f.every((e=>"number"==typeof e&&e>0));t&&(console.log("fini!",c,f),F(0),J(-1),k(!0),x(!0),e.current=!0,(0,E.Z)({particleCount:200,spread:50,ticks:250,origin:{y:.8}}))}m.length>0?D([...m,t]):Boolean(n)?D([]):D([t])}return f}))},_=t=>{w||(0!==t?(k(!0),X(t)):e.current?X():k((e=>!e)),u(U))},ee=()=>_(0),te=()=>h((e=>!e));return r.createElement(r.Fragment,null,r.createElement("aside",null),r.createElement("section",{className:"header"},r.createElement(g,{level:o,setLevel:(e,t)=>{p(e),t&&_(e)},showLevel:d,close:te}),r.createElement("button",null,r.createElement(T,null)),r.createElement("button",{onClick:te,className:d?"active":void 0},`Level: ${o}`),r.createElement("button",{onClick:ee},y?w?r.createElement(L,null):r.createElement(N,null):r.createElement(I,null)),r.createElement(b,{isPaused:y,resetCount:t.current}),r.createElement("button",null,r.createElement($,null))),r.createElement("section",{className:"puzzle"+(M?" fini":y?w?" load":" pause":"")},G.map(((e,t)=>r.createElement(v,{i:t,key:t,fieldVal:e,initVal:n.current[t],focus:U,setFocus:J,focusValue:G[U]||0,puzleUpdate:Y,overlap:z[t]})))),r.createElement(O,{noteOptions:W,pressButton:(e,t=!1)=>{U>-1&&0===n.current[U]&&("string"==typeof G[U]||0===G[U]?i(G[U],e,t,U,Y):G[U]===e&&i(G[U],0,t,U,Y),u(U))},play:ee}))},A=r.memo(z),U=document.body.firstElementChild;(0,o.s)(U).render(r.createElement(A,null))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,c=0;c<n.length;c++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,a<l&&(l=a));if(s){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.u=e=>e+".de54.js",r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="/",(()=>{r.b=document.baseURI||self.location.href;var e={143:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,s,c]=n,i=0;if(l.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var u=c(r)}for(t&&t(n);i<l.length;i++)a=l[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunksudoku=self.webpackChunksudoku||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[76],(()=>r(905)));o=r.O(o)})();
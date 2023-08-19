(()=>{"use strict";var e,t={5921:(e,t,r)=>{var n=r(5776),a=r(9823);r(3948),r(1058),r(9714),r(6977),r(2023),r(8862);const o=e=>{try{const t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(e){return}},l=(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){}},s=e=>{const t=9*Math.floor(e/9);return[0,1,2,3,4,5,6,7,8].map((e=>e+t))},c=e=>{const t=e%9;return[0,9,18,27,36,45,54,63,72].map((e=>e+t))},i=e=>{const t=Math.floor(e/9),r=e%9,n=9*Math.floor(t/3)+Math.floor(r/3);return[0,1,2,9,10,11,18,19,20].map((e=>e+3*n))},u=(e,t,r,n,a,o)=>{if(r<0)return"";if(a.indexOf(t)>-1)return" error";if(t===r)return" focus";let l="";const u=o,m=new Set;s(r).forEach(m.add,m),c(r).forEach(m.add,m),i(r).forEach(m.add,m),e!==u&&Number(e)!==Number(u)||0===u||(l+=" v");const p=Number(u);if(p<10&&0!==p){const r=new Set;s(t).forEach(r.add,r),c(t).forEach(r.add,r),i(t).forEach(r.add,r),Array.from(r).some((e=>n[e]===p))&&(l+=" o"),"number"==typeof e&&e>0&&(l+=" h")}return"string"==typeof e&&"number"==typeof u&&e.split("").map((e=>parseInt(e,10))).indexOf(u)>=0&&(l+=` n nn${u}`),l},m=(e,t,r=!1,n,a)=>{if(r){if("number"==typeof e&&e>0);else if(0!==t){const r="string"==typeof e?e.split("").map((e=>parseInt(e,10))):[],o=r.indexOf(t),l=o>=0?r.slice(0,o).concat(r.slice(o+1)):r.concat(t);a(n,l.length?l.join(""):0,t)}}else a(n,t,t)},p=e=>{const t=document.querySelector(`section > div:nth-of-type(${e+1}) input`);t instanceof HTMLInputElement&&(t.focus(),""===t.value&&t.select())},d=(e,t)=>{["system","light","dark","contrastLight","contrastDark","custom"].includes(e)&&(document.body.className="system"===e?"":e,t(e))},f=Array(81).fill(""),h=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document,y=(e,t)=>{t(e.reduce(((e,t)=>("number"==typeof t&&(e[t]=e[t]?e[t]+1:1),e)),{}))};var P=r(9883);const g=o("type"),v=o("theme"),E=parseInt(o("level"),10),w={type:g||"classic",level:E<=70&&E>=17?E:36,theme:v||"system",level17:[],level18:[],level19:[],level20:[],level21:[],level22:[]};r(7658);var b=r(4572);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(1703);const k=(e,t)=>{switch(t.type){case"TypeChange":return C(C({},e),{},{type:t.typeValue});case"ThemeChange":return C(C({},e),{},{theme:t.theme});default:throw Error("Unknown action: "+t.type)}},O=(0,n.kr)({state:w,dispatch:()=>{}}),S=()=>(0,n.qp)(O),j=({children:e})=>{const[t,r]=(0,n._Y)(k,w);return n.ZP.createElement(O.Provider,{value:{state:t,dispatch:r}},e)},T={BUTTONS:{classic:[1,2,3,4,5,6,7,8,9],emoji:["🤣","😍","🤔","😝","😴","🤧","🥳","😭","😉"],colors:["🔵","🟢","🔴","🟡","🟠","🟣","🟤","⚫","⚪"],animals:["🦩","🦒","🦋","🐇","🐋","🐄","🐠","🐕","🕷️"],sport:["⚽","🏀","🏐","🎾","🎱","⚾","🏈","🏓","🎳"],food:["🌭","🍕","🍟","🍔","🍿","🍩","🍰","🥞","🍦"],places:["🏖️","🗼","⛺","🗽","🕍","🗻","🕌","🏰","🎡"],flowers:["🌸","🌺","🌼","🌷","🌵","🪻","🌻","🌹","🪴"],objects:["⏰","🧳","🧸","🔦","🖥️","🕯️","🪑","🧯","📷"],transport:["⛵","🛩️","🛵","🏎️","🚲","🛴","🚁","🚤","🚂"]},ZIP:{HASH:"!#$&()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~",HASHSPLIT:"'"}},N=({fieldVal:e,i:t,initVal:r,focus:a,setFocus:o,puzleUpdate:l,overlap:s})=>{const{state:c}=S(),i=(0,n.sO)(!1),[u,d]=(e=>[Math.floor(e/9)+1,e%9+1])(t),f=e=>T.BUTTONS[c.type][e-1].toString(),h="string"==typeof e?e.split("").map((e=>parseInt(e,10))):[];return n.ZP.createElement(n.ZP.Fragment,null,n.ZP.createElement("div",{className:`s${Math.floor(t/9)+1}${a===t?" focus":""}${s}${r?" init":""}`},h.map((e=>n.ZP.createElement("span",{className:`n${e}`,key:e},f(e)))),n.ZP.createElement("input",{type:"text",inputMode:"none",value:void 0===e||"string"==typeof e||0===e?"":f(e),onChange:0!==r?void 0:r=>{const n=i.current,a=r.target.value.slice(-1),o=parseInt(a,10)||0,s=0===o&&i.current?(e=>{switch(e){case"!":return 1;case"@":return 2;case"#":return 3;case"$":return 4;case"%":return 5;case"^":return 6;case"&":return 7;case"*":return 8;case"(":return 9}return 0})(a):o;m(e,s,n,t,l)},onKeyDown:n=>{if("Backspace"===n.key)if("string"==typeof e){const r=e.slice(0,-1);l(t,""===r?0:r,""===r?0:parseInt(r,10))}else 0===r&&l(t,0,0);else i.current=n.getModifierState("CapsLock")||n.shiftKey,((e,t)=>{switch(e){case"ArrowRight":return p((t+1)%9?t+1:t-8);case"ArrowDown":return p(t+9>80?t-72:t+9);case"ArrowLeft":return p(t%9?t-1:t+8);case"ArrowUp":p(t-9<0?t+72:t-9)}})(n.key,t)},onSelect:e=>{e.preventDefault();const t=e.currentTarget;t.selectionStart=1,t.selectionEnd=1,setTimeout((()=>{t.selectionStart=1,t.selectionEnd=1}),100)},onFocus:()=>o(t),"aria-label":`Sudoku cell rows ${u} column ${d}`})))},M=n.ZP.memo(N),z=({level:e,setLevel:t,showLevel:r,close:a})=>{const[o,l]=(0,n.eJ)(e);return n.ZP.createElement("ul",{className:r?"":"hidden"},n.ZP.createElement("li",null,n.ZP.createElement("small",null,"The level is defined by the number of clues (cells with initial numbers). The game gets harder when there are less clues. Sudoku always has one unique solution, and must have minimum 17 clues.")),n.ZP.createElement("li",null,n.ZP.createElement("button",{onClick:()=>l(35)},"Easy"),n.ZP.createElement("button",{onClick:()=>l(29)},"Medium"),n.ZP.createElement("button",{onClick:()=>l(23)},"Hard"),n.ZP.createElement("button",{onClick:()=>l(17)},"Extreme")),n.ZP.createElement("li",null,n.ZP.createElement("label",null,n.ZP.createElement("input",{type:"range",min:17,max:70,step:"1",value:o,onChange:e=>{const t=parseInt(e.target.value,10);Number.isInteger(t)&&t<=70&&t>=17&&l(t)},"aria-label":"Difficulty Level"})),n.ZP.createElement("mark",{style:(e=>({left:100-(2.2+(e-17)/53*95.6)+"%"}))(o)},o)),n.ZP.createElement("li",null,n.ZP.createElement("button",{onClick:()=>{t(o,!1),a()}},"Set for Next Game"),n.ZP.createElement("button",{onClick:()=>{t(o,!0),a()}},"Set & Restart")))},I=n.ZP.memo(z),x=({isPaused:e,resetCount:t,gameTime:r})=>{const a=(0,n.sO)(0),o=(0,n.sO)(setTimeout((()=>{}))),[l,s]=(0,n.eJ)("00:00"),c=()=>{if(e)clearTimeout(o.current);else{a.current++;const e=Math.floor(a.current/60),t=a.current%60,n=`${e>9?e:`0${e}`}:${t>9?t:`0${t}`}`;r.current=n,s(n),o.current=setTimeout(c,1e3)}};return(0,n.d4)((()=>{clearTimeout(o.current),s("00:00"),a.current=0}),[t]),(0,n.d4)((()=>{e?clearTimeout(o.current):o.current=setTimeout(c,1e3)}),[e]),n.ZP.createElement("button",null,l)},$=n.ZP.memo(x),L=({val:e,size:t=0,press:r,active:a})=>n.ZP.createElement("button",{onClick:r,className:t<9?a?"active":void 0:"off",disabled:9===t,style:{"--w":`${Math.ceil(t/9*100)}%`}},e),A=n.ZP.memo(L),H=({noteOptions:e,pressButton:t,play:r,lastN:a})=>{const{state:o}=S(),l=T.BUTTONS[o.type];return n.ZP.createElement("section",{className:"keys"},n.ZP.createElement("fieldset",null,T.BUTTONS.classic.map(((r,o)=>n.ZP.createElement(A,{key:r,val:l[o].toString(),size:e[r],press:()=>t(r),active:a===r})))),n.ZP.createElement("button",{onClick:r,className:"resume"},"Resume Game"),n.ZP.createElement("fieldset",{className:"notes"},T.BUTTONS.classic.map(((r,o)=>n.ZP.createElement(A,{key:r,val:l[o].toString(),size:e[r],press:()=>t(r,!0),active:a===r})))),n.ZP.createElement("button",{onClick:r,className:"start"},"Start New Game"))},D=n.ZP.memo(H),J={system:"System",light:"Light",dark:"Dark"},U={classic:"Numbers (Classic Sudoku)",emoji:"Emoji Sudoku 🤔",colors:"Color Sudoku 🔵",animals:"Animal Sudoku 🐠",sport:"Sport Items Sudoku ⚾",food:"Food Sudoku 🍿",places:"Travel Sudoku 🏖️",flowers:"Flower & Plants Sudoku 🌸",objects:"Objects Sudoku 🧸",transport:"Transport Sudoku 🛩️</la"},B=({id:e,i:t,val:r,state:a,text:o,onChange:l})=>n.ZP.createElement("li",null,n.ZP.createElement("input",{type:"radio",id:`${e}${t}`,name:e,value:r,checked:a===r,onChange:l}),n.ZP.createElement("label",{htmlFor:`${e}${t}`},o)),V=({showMenu:e,hideMenu:t})=>{const{state:r,dispatch:a}=S(),o=e=>{d(e.target.value,(e=>{l("theme",e),a({type:"ThemeChange",theme:e})}))},s=e=>{const t=e.target.value;Object.keys(T.BUTTONS).includes(t)&&(l("type",t),a({type:"TypeChange",typeValue:t}))};return n.ZP.createElement("nav",{className:e?"":"hidden"},n.ZP.createElement("button",{onClick:t},"×"),n.ZP.createElement("details",null,n.ZP.createElement("summary",null,"Color theme"),n.ZP.createElement("ul",null,Object.entries(J).map((([e,t],a)=>n.ZP.createElement(B,{key:e,val:e,id:"theme",i:a,state:r.theme,text:t,onChange:o}))))),n.ZP.createElement("details",null,n.ZP.createElement("summary",null,"Game type"),n.ZP.createElement("ul",null,Object.entries(U).map((([e,t],a)=>n.ZP.createElement(B,{key:e,val:e,id:"type",i:a,state:r.type,text:t,onChange:s}))))))},F=n.ZP.memo(V),W=()=>n.ZP.createElement("h1",null,n.ZP.createElement("b",null,"S"),n.ZP.createElement("b",null,"O"),n.ZP.createElement("b",null,"O")),R=()=>n.ZP.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},n.ZP.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10"}),n.ZP.createElement("path",{d:"M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z"})),G=()=>n.ZP.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},n.ZP.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10"}),n.ZP.createElement("g",null,n.ZP.createElement("path",{d:"M12 12V10",strokeLinecap:"round",strokeLinejoin:"round"}),n.ZP.createElement("animateTransform",{repeatCount:"indefinite",dur:"10s",to:"360 12 12",from:"0 12 12",type:"rotate",attributeName:"transform",attributeType:"xml"})),n.ZP.createElement("g",null,n.ZP.createElement("path",{d:"M12 8V12",strokeLinecap:"round",strokeLinejoin:"round"}),n.ZP.createElement("animateTransform",{repeatCount:"indefinite",dur:"1s",to:"360 12 12",from:"0 12 12",type:"rotate",attributeName:"transform",attributeType:"xml"}))),q=()=>n.ZP.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},n.ZP.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10"}),n.ZP.createElement("path",{d:"M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z"}),n.ZP.createElement("path",{d:"M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z"})),K=()=>n.ZP.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},n.ZP.createElement("path",{d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",className:"dot"}),n.ZP.createElement("path",{d:"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",className:"dot"}),n.ZP.createElement("path",{d:"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",className:"dot"}),n.ZP.createElement("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"}));var _,Y;function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(8674),r(285),r(1637),r(6229),r(7330),r(2062),r(2262),r(4506),r(4916),r(3123);const ee="ontouchstart"in window||(null===(_=navigator)||void 0===_?void 0:_.maxTouchPoints)>0||(null===(Y=navigator)||void 0===Y?void 0:Y.msMaxTouchPoints)>0,te=(new Date).getTimezoneOffset(),re=window.navigator.language,ne=(e,t)=>{window.insights&&"function"==typeof window.insights.track&&window.insights.track({id:`error:${e}`,parameters:X({locale:re,timezone:te,errorType:e},t)})},ae=()=>Array(81).fill(0),oe=ae(),le=(e,t)=>{const n=window.Worker?new Worker(new URL(r.p+r.u(418),r.b)):null;n&&"function"==typeof n.postMessage&&(n.postMessage(e),n.onmessage=({data:r})=>{se(r,(n=>{Array.isArray(n)?t({puzzle:r,solved:n}):(ne("CorruptedPuzzle",{puzzle:ce(r)}),le(e,t))})),n.terminate()})},se=(e,t)=>{const n=window.Worker?new Worker(new URL(r.p+r.u(548),r.b)):null;n&&"function"==typeof n.postMessage&&(n.postMessage(e),n.onmessage=({data:e})=>{Array.isArray(e)?t(e):t(),n.terminate()})},ce=e=>e.reduce(((e,t,r)=>{if("number"!=typeof t||0===t)return e;const n=e[t];return e[t]="string"==typeof n?n+T.ZIP.HASH.at(r):T.ZIP.HASH.at(r),e}),[]).join(T.ZIP.HASHSPLIT).substring(1),ie=T.ZIP.HASH.split("").reduce(((e,t,r)=>(e[t]=r,e)),{}),ue=(e,t)=>{const r=(e=>{const t=e.length;return e[Math.floor(Math.random()*t)]})(e);return r===t?ue(e,t):r},me=(e,t,r,n)=>{const a=ce(t),o=((e,t)=>{let r=0;const n=ae();return e.split(T.ZIP.HASHSPLIT).map(((e,t)=>{e.split("").map((e=>{r++,n[ie[e]]=t+1}))})),t!==r&&ne("CorruptedUnzip",{puzzle:e}),n})(ue(e,a),r);se(o,(a=>{if(!Array.isArray(a))return ne("CorruptedPuzzle",{puzzle:ce(o)}),me(e,t,r,n);n({puzzle:o,solved:a})}))},pe=()=>{const e=(0,n.sO)(!0),t=(0,n.sO)(0),r=(0,n.sO)("00:00"),a=(0,n.sO)(0),d=(0,n.sO)(oe),g=(0,n.sO)(oe),v=(0,n.sO)(w.level),[E,b]=(0,n.eJ)(!1),[Z,C]=(0,n.eJ)(!1),[k,O]=(0,n.eJ)(!0),[S,T]=(0,n.eJ)(!1),[N,z]=(0,n.eJ)(!0),[x,L]=(0,n.eJ)({}),[A,H]=(0,n.eJ)([]),[J,U]=(0,n.eJ)(-1),[B,V]=(0,n.eJ)(0),[_,Y]=(0,n.eJ)([]),[Q,X]=(0,n.eJ)(oe);(0,n.d4)((()=>{se(-1),Y([])}),[d.current]);const ne=e=>((e,t,r,n)=>{if(e>0&&e<10){const a=t.indexOf(e);n(a>-1?{overlap:t.map(((t,n,o)=>u(t,n,a,o,r,e))),focus:a,lastN:e}:{overlap:f,focus:-1,lastN:0})}else 0===e&&n({overlap:t.map(((t,n,a)=>u(t,n,-1,a,r,e))),focus:-1,lastN:0})})(e,Q,_,(({overlap:e,focus:t,lastN:r})=>{H(e),se(t),V(r)})),ae=e=>{if(e.stopPropagation(),e.stopImmediatePropagation(),N||k||_.length>0){if(e.preventDefault(),_.length>0){const t=parseInt(e.key,10);t.toString()===e.key&&Q[J]===t&&m(Q[J],0,!1,J,pe)}}else if(!(e.target instanceof HTMLInputElement)||e.target instanceof HTMLInputElement&&""!==e.target.value){const t=parseInt(e.key,10);t.toString()===e.key&&e.preventDefault(),"number"==typeof t&&ne(t)}};(0,n.d4)((()=>(window.addEventListener("keydown",ae),()=>window.removeEventListener("keydown",ae))),[Q]);const se=e=>{if(N||k)return;const t=Q[e];"number"==typeof t&&0!==t&&V(t),U(e)};(0,n.d4)((()=>{B>-1&&H(Q.map(((e,t,r)=>u(e,t,J,r,_,B))))}),[Q,J,_,B]);const ie=({puzzle:e,solved:r})=>{d.current=e,a.current++,g.current=r,V(0),X(e),O(!1),T(!1),y(e,L);const n=((Date.now()-t.current)/1e3).toFixed(1);((e,t,r)=>{window.insights&&"function"==typeof window.insights.track&&window.insights.track({id:"started",parameters:{level:e,puzzle:t,locale:re,timezone:te,loadingTime:r}})})(v.current,ce(e),n)},ue=r=>{T(!0),z(!1),t.current=Date.now(),e.current=!1;const n="number"!=typeof r?v.current:r;(e=>{window.insights&&"function"==typeof window.insights.track&&window.insights.track({id:"start",parameters:{level:e,locale:re,timezone:te,touch:ee,w:window.innerWidth,h:window.innerHeight}})})(n),n<23?((e,t,r)=>{if(!Number.isInteger(e)||e<17||e>70)return;const n=(e=>o(`level${e}`))(e);Array.isArray(n)?me(n,t,e,r):fetch(`/level/${e}.json`).then((e=>e.json())).then((({hash:n})=>{((e,t)=>{const r=`level${e}`;Object.keys(w).includes(r)&&l(r,t)})(e,n),me(n,t,e,r)}))})(n,Q,ie):le(n,ie)},pe=(t,n,a)=>{"number"==typeof a&&0!==a&&V(a),X((a=>{const o=[...a];o[t]=n;const l=a[t],u="string"==typeof l?l:"",{overlapIndexes:m,cleanState:p}=((e,t,r)=>{const n=e[t],a=s(t).concat(c(t),i(t)),o=new Set(a);o.delete(t);const l=Array.from(o);let u=[];if("number"==typeof n)0!==n&&(u=l.filter((t=>e[t]===n)));else{const t=n.split(""),a=r.split("");if(t.length>a.length){const r=t.filter((e=>!a.includes(e)))[0];u=l.filter((t=>e[t]===parseInt(r,10)))}}const m=[...e];return l.forEach((e=>{const t=m[e];if("string"==typeof t){const r=t.split(""),a=r.filter((e=>parseInt(e,10)!==n));a.length!==r.length&&(0===a.length?m[e]=0:m[e]=a.join(""))}})),{overlapIndexes:u,cleanState:m}})(o,t,u);if(!e.current){const n=(f=p,h=g.current,f.every(((e,t)=>e===h[t]||0===e||"string"==typeof e)));if(n){y(p,L);const t=p.every((e=>"number"==typeof e&&e>0));t&&(V(0),se(-1),O(!0),z(!0),e.current=!0,((e,t,r)=>{window.insights&&"function"==typeof window.insights.track&&window.insights.track({id:"end",parameters:{time:r,level:e,puzzle:t,locale:re,timezone:te}})})(v.current,ce(d.current),r.current),(0,P.Z)({particleCount:200,spread:50,ticks:250,origin:{y:.8}}))}m.length>0||!Boolean(n)?Y([t,...m]):Y([])}var f,h;return p}))},de=t=>{S||(0!==t?(O(!0),ue(t)):e.current?ue():O((e=>!e)),p(J))},fe=()=>de(0),he=()=>C((e=>!e));return n.ZP.createElement(j,null,n.ZP.createElement(F,{showMenu:E,hideMenu:()=>b(!1)}),n.ZP.createElement("aside",{className:"eats"},n.ZP.createElement("a",{href:("ubereats://","https://www.ubereats.com/",h?"ubereats://":"https://www.ubereats.com/"),target:"_blank"},"Uber Eats")),n.ZP.createElement("section",{className:"header"},n.ZP.createElement(I,{level:v.current,setLevel:(e,t)=>{v.current=e,l("level",e),t&&de(e)},showLevel:Z,close:he}),n.ZP.createElement("button",null,n.ZP.createElement(W,null)),n.ZP.createElement("button",{onClick:he,className:Z?"active":void 0},(e=>e>=35?`Easy ${e}`:e>=29?`Medium ${e}`:e>=23?`Hard ${e}`:`Extreme ${e}`)(v.current)),n.ZP.createElement("button",{onClick:fe,"aria-label":k?S?"Load":"Play":"Pause"},k?S?n.ZP.createElement(G,null):n.ZP.createElement(R,null):n.ZP.createElement(q,null)),n.ZP.createElement($,{isPaused:k,resetCount:a.current,gameTime:r}),n.ZP.createElement("button",{onClick:()=>b((e=>!e)),"aria-label":"Settings"},n.ZP.createElement(K,null))),n.ZP.createElement("section",{className:"puzzle"+(N?" fini":k?S?" load":" pause":"")},Q.map(((e,t)=>n.ZP.createElement(M,{i:t,key:t,fieldVal:e,initVal:d.current[t],focus:J,setFocus:se,focusValue:Q[J]||0,puzleUpdate:pe,overlap:A[t]})))),n.ZP.createElement(D,{noteOptions:x,pressButton:(e,t=!1)=>{J<0||J>-1&&"number"==typeof Q[J]&&0!==Q[J]&&Q[J]!==e?ne(e):J>-1&&0===d.current[J]&&("string"==typeof Q[J]||0===Q[J]?m(Q[J],e,t,J,pe):Q[J]===e&&m(Q[J],0,t,J,pe),p(J))},play:fe,lastN:B}))},de=n.ZP.memo(pe);(()=>{const e=o("theme")||"system";d(e,(()=>{})),(e=>{if(!window.matchMedia)return;const t=window.matchMedia("(prefers-color-scheme: dark)");e(t.matches),t.addEventListener("change",(t=>e(t.matches)))})((e=>document.body.id=e?"dark":"light"))})(),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js")}));const fe=document.body.firstElementChild;(0,a.so)(fe).render(n.ZP.createElement(de,null))}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],s=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.u=e=>e+"."+{418:"500d",548:"7529"}[e]+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",(()=>{n.b=document.baseURI||self.location.href;var e={143:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[l,s,c]=r,i=0;if(l.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(r);i<l.length;i++)o=l[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunksudoku=self.webpackChunksudoku||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[321,977],(()=>n(5921)));a=n.O(a)})();
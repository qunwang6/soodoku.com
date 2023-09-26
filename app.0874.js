(()=>{"use strict";var e,t={7037:(e,t,n)=>{var r=n(5776),a=n(9823);n(3948),n(1058),n(9714),n(6977),n(8862),n(2023);const l=(e,t)=>{window.swetrix&&"function"==typeof window.swetrix.track?window.swetrix.track({ev:e}):console.warn(e,t)},s=(e,t)=>l(`started_${e}_${t}`),o=(e,t)=>l(`error_${e}`,t),c=e=>{try{const t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(t){return void o(1,`Load ${e} state failure`)}},i=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(t){o(2,`Save ${e} state failure`)}},u=e=>{const t=9*Math.floor(e/9);return[0,1,2,3,4,5,6,7,8].map((e=>e+t))},m=e=>{const t=e%9;return[0,9,18,27,36,45,54,63,72].map((e=>e+t))},d=e=>{const t=Math.floor(e/9),n=e%9,r=9*Math.floor(t/3)+Math.floor(n/3);return[0,1,2,9,10,11,18,19,20].map((e=>e+3*r))},p=(e,t,n,r,a,l)=>{if(n<0)return"";if(a.indexOf(t)>-1)return" error";if(t===n)return" focus";let s="";const o=l,c=new Set;u(n).forEach(c.add,c),m(n).forEach(c.add,c),d(n).forEach(c.add,c),e!==o&&Number(e)!==Number(o)||0===o||(s+=" v");const i=Number(o);if(i<10&&0!==i){const n=new Set;u(t).forEach(n.add,n),m(t).forEach(n.add,n),d(t).forEach(n.add,n),Array.from(n).some((e=>r[e]===i))&&(s+=" o"),"number"==typeof e&&e>0&&(s+=" h")}return"string"==typeof e&&"number"==typeof o&&e.split("").map((e=>parseInt(e,10))).indexOf(o)>=0&&(s+=` n nn${o}`),s},h=(e,t,n=!1,r,a)=>{if(n){if("number"==typeof e&&e>0);else if(0!==t){const n="string"==typeof e?e.split("").map((e=>parseInt(e,10))):[],l=n.indexOf(t),s=l>=0?n.slice(0,l).concat(n.slice(l+1)):n.concat(t);a(r,s.length?s.join(""):0,t)}}else a(r,t,t)},f=e=>{const t=document.querySelector(`section > div:nth-of-type(${e+1}) input`);t instanceof HTMLInputElement&&(t.focus(),""===t.value&&t.select())},v=(e,t)=>{const n=["system","light","dark"];n.includes(e)&&(n.forEach((t=>{document.body.classList.toggle(t,t===e)})),t(e))},y=(e,t)=>{document.body.classList.toggle(e,!1!==t)},P=Array(81).fill(""),g=(e,t)=>{t(e.reduce(((e,t)=>("number"==typeof t&&(e[t]=e[t]?e[t]+1:1),e)),{}))};var Z,E,b,w,C,k,O,z,S,j,M=n(9883);const I=null!==(Z=c("type"))&&void 0!==Z?Z:"classic",x=null!==(E=c("theme"))&&void 0!==E?E:"system",N=null===(b=c("UIshowImgs"))||void 0===b||b,T=null===(w=c("UIpuzzAnim"))||void 0===w||w,L=null===(C=c("UIrestAnim"))||void 0===C||C,U=null!==(k=c("ziped"))&&void 0!==k?k:{},A=null!==(O=c("saved"))&&void 0!==O?O:{"!Ny'#;a~'$Yi'5G'-@Cft'Qdru'*16U'+Kns',9jz":{lastPlayed:0,level:33,time:0}},$=null!==(z=c("stats"))&&void 0!==z?z:{},D=null!==(S=c("level"))&&void 0!==S?S:30,F={type:I,theme:x,UIshowImgs:N,UIpuzzAnim:T,UIrestAnim:L,ziped:U,saved:A,stats:$,restart:{newGame:!1},level:D<=70&&D>=17?D:30,levelsFetched:null!==(j=c("levelsFetched"))&&void 0!==j?j:[]};var H=n(4572);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,H.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(8674),n(7658);const G=(e=[],t=[],n=[])=>e.concat(t.filter((t=>!e.includes(t)))).filter((e=>!n.includes(e))),V=(e,t,n,r=[])=>{const a=[].concat(Object.keys(t.saved),Object.keys(t.stats),r);var l;(l=e,new Promise(((e,t)=>{fetch(`/level/${l}.json`).then((e=>e.json())).then((t=>e(t))).catch((e=>t(e)))}))).then((r=>{const l=0===e?((e,t,n)=>{if(0===Object.keys(e).length)return t;{const r=B({},e);return Object.keys(t).forEach((e=>{t[e].forEach((t=>{n.includes(t)||(r[e]||(r[e]=[]),r[e].includes(t)||r[e].push(t))}))})),r}})(t.ziped,r,a):B(B({},t.ziped),{},{[e]:G(t.ziped[e],r[e],a)});n({type:"UpdateLevelsFetched",level:e}),n({type:"ZipedLevelsUpdated",zipedJSON:l})}))};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,H.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const W=(e,t)=>{switch(t.type){case"TypeChange":return i("type",t.typeValue),q(q({},e),{},{type:t.typeValue});case"ThemeChange":return i("theme",t.theme),q(q({},e),{},{theme:t.theme});case"UISettingChange":return i(t.id,t.checked),q(q({},e),{},{[t.id]:t.checked});case"SetLevel":return i("level",t.level),q(q({},e),{},{level:t.level});case"RestartGame":return q(q({},e),{},{restart:{newGame:t.newGame}});case"ZipedLevelUpdated":{const n=q({},e.ziped);return n[t.level]=t.ziped,i("ziped",n),q(q({},e),{},{ziped:n})}case"ZipedLevelsUpdated":return i("ziped",t.zipedJSON),q(q({},e),{},{ziped:t.zipedJSON});case"StartGame":{const n=q({},e.ziped),r=q({},e.saved);return n[t.level]=(n[t.level]||[]).filter((e=>e!==t.ziped)),r[t.ziped]={lastPlayed:Date.now(),level:t.level,time:0},i("ziped",n),i("saved",r),q(q({},e),{},{ziped:n,saved:r})}case"SaveMoves":{const n=q({},e.saved);return n[t.ziped]=q(q({},n[t.ziped]),{},{lastPlayed:Date.now(),moves:t.moves,time:t.time}),i("saved",n),q(q({},e),{},{newSaved:n})}case"UpdateGameTime":{const n=q({},e.saved);return n[t.ziped]=q(q({},n[t.ziped]),{},{lastPlayed:Date.now(),time:t.time}),i("saved",n),q(q({},e),{},{newSaved:n})}case"CompleteGame":{const n=q({},e.stats),r=q({},e.saved);return n[t.ziped]=q(q({},e.saved[t.ziped]),{},{lastPlayed:Date.now(),time:t.time}),delete r[t.ziped],i("saved",r),i("stats",n),q(q({},e),{},{newSaved:r,newStats:n})}case"UpdateLevelsFetched":{const n=e.levelsFetched.filter((e=>e!==t.level));return n.push(t.level),i("levelsFetched",n),q(q({},e),{},{levelsFetched:n})}default:return o(3,`Unknown action: ${t.type}`),e}},_=(0,r.kr)({state:F,dispatch:()=>{}}),K=()=>(0,r.qp)(_),Y=r.ZP.memo((({children:e})=>{const[t,n]=(0,r._Y)(W,F);return(0,r.d4)((()=>((e,t)=>{e.levelsFetched.includes(0)||V(0,e,t)})(t,n)),[]),r.ZP.createElement(_.Provider,{value:{state:t,dispatch:n}},e)})),Q={BUTTONS:{classic:[1,2,3,4,5,6,7,8,9],emoji:["🤣","😍","🤔","😝","😴","🤧","🥳","😭","😉"],colors:["🔵","🟢","🔴","🟡","🟠","🟣","🟤","⚫","⚪"],animals:["🦩","🦒","🦋","🐇","🐋","🐄","🐠","🐕","🕷️"],sport:["⚽","🏀","🏐","🎾","🎱","⚾","🏈","🏓","🎳"],food:["🌭","🍕","🍟","🍔","🍿","🍩","🍰","🥞","🍦"],places:["🏖️","🗼","⛺","🗽","🕍","🗻","🕌","🏰","🎡"],flowers:["🌸","🌺","🌼","🌷","🌵","🪻","🌻","🌹","🪴"],objects:["⏰","🧳","🧸","🔦","🖥️","🕯️","🪑","🧯","📷"],transport:["⛵","🛩️","🛵","🏎️","🚲","🛴","🚁","🚤","🚂"]},ZIP:{HASH:"!#$&()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~",HASHSPLIT:"'"}},X=({fieldVal:e,i:t,initVal:n,setFocus:a,puzleUpdate:l,overlap:s})=>{const{state:o}=K(),c=(0,r.sO)(!1),[i,u]=(e=>[Math.floor(e/9)+1,e%9+1])(t),m=e=>Q.BUTTONS[o.type][e-1].toString(),d="string"==typeof e?e.split("").map((e=>parseInt(e,10))):[];return r.ZP.createElement(r.ZP.Fragment,null,r.ZP.createElement("div",{className:`s${Math.floor(t/9)+1}${n?" init":""}${s}`},d.map((e=>r.ZP.createElement("span",{className:`n${e}`,key:e},m(e)))),r.ZP.createElement("input",{type:"text",inputMode:"none",value:void 0===e||"string"==typeof e||0===e?"":m(e),onChange:0!==n?void 0:n=>{const r=c.current,a=n.target.value.slice(-1),s=parseInt(a,10)||0,o=0===s&&c.current?(e=>{switch(e){case"!":return 1;case"@":return 2;case"#":return 3;case"$":return 4;case"%":return 5;case"^":return 6;case"&":return 7;case"*":return 8;case"(":return 9}return 0})(a):s;h(e,o,r,t,l)},onKeyDown:r=>{if("Backspace"===r.key)if("string"==typeof e){const n=e.slice(0,-1);l(t,""===n?0:n,""===n?0:parseInt(n,10))}else 0===n&&l(t,0,0);else c.current=r.getModifierState("CapsLock")||r.shiftKey,((e,t)=>{switch(e){case"ArrowRight":return f((t+1)%9?t+1:t-8);case"ArrowDown":return f(t+9>80?t-72:t+9);case"ArrowLeft":return f(t%9?t-1:t+8);case"ArrowUp":f(t-9<0?t+72:t-9)}})(r.key,t)},onSelect:e=>{e.preventDefault();const t=e.currentTarget;t.selectionStart=1,t.selectionEnd=1,setTimeout((()=>{t.selectionStart=1,t.selectionEnd=1}),100)},onFocus:()=>a(t),"aria-label":`Sudoku cell rows ${i} column ${u}`})))},ee=r.ZP.memo(X),te=({isPaused:e,resetCount:t,gameTime:n})=>{const a=(0,r.sO)(0),l=(0,r.sO)(setTimeout((()=>{}))),[s,o]=(0,r.eJ)("00:00"),c=()=>{if(e)clearTimeout(l.current);else{a.current++;const e=Math.floor(a.current/60),t=a.current%60,r=`${e>9?e:`0${e}`}:${t>9?t:`0${t}`}`;n.current=r,o(r),l.current=setTimeout(c,1e3)}};return(0,r.d4)((()=>{clearTimeout(l.current),o("00:00"),a.current=0;const t=l.current;setTimeout((()=>{!1===e&&l.current===t&&c()}),1001)}),[t]),(0,r.d4)((()=>{e?clearTimeout(l.current):l.current=setTimeout(c,1e3)}),[e]),r.ZP.createElement("button",{className:"time"},s)},ne=r.ZP.memo(te),re=({val:e,size:t=0,press:n,active:a,index:l})=>r.ZP.createElement("button",{onClick:n,className:t<9?!l&&a?"active":void 0:"off",disabled:9===t,style:l?void 0:{"--w":`${Math.ceil(t/9*100)}%`}},l?r.ZP.createElement("span",{className:`n${l}`},e):e),ae=r.ZP.memo(re),le=({noteOptions:e,pressButton:t,lastN:n})=>{const{state:a}=K(),l=Q.BUTTONS[a.type];return r.ZP.createElement("section",{className:"keys"},r.ZP.createElement("fieldset",null,Q.BUTTONS.classic.map(((a,s)=>r.ZP.createElement(ae,{key:a,val:l[s].toString(),size:e[a],press:()=>t(a),active:n===a})))),r.ZP.createElement("fieldset",{className:"notes"},Q.BUTTONS.classic.map(((a,s)=>r.ZP.createElement(ae,{key:a,val:l[s].toString(),size:e[a],press:()=>t(a,!0),active:n===a,index:s+1})))))},se=r.ZP.memo(le),oe=()=>r.ZP.createElement("svg",{viewBox:"0 0 24 24"},r.ZP.createElement("path",{d:"M12 17V11"}),r.ZP.createElement("circle",{cx:"12",cy:"7.5",r:"1"}),r.ZP.createElement("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"})),ce=()=>r.ZP.createElement("svg",{viewBox:"0 0 24 24"},r.ZP.createElement("path",{d:"M8.5 9L11.5 12L8.5 15"}),r.ZP.createElement("path",{d:"M12.5 9L15.5 12L12.5 15"}),r.ZP.createElement("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"})),ie=()=>r.ZP.createElement("svg",{viewBox:"0 0 24 24"},r.ZP.createElement("path",{opacity:"0.5",d:"M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2"}),r.ZP.createElement("path",{d:"M16.1549 3.43415L18.5122 5.47712C20.1349 6.88345 20.9462 7.58662 20.9462 8.49988C20.9462 9.41314 20.1349 10.1163 18.5122 11.5226L16.1549 13.5656C15.4414 14.184 15.0846 14.4932 14.7923 14.3597C14.5 14.2262 14.5 13.7541 14.5 12.8099V11.2856C11.5 11.2856 8.25 12.6785 7 14.9999C7 7.57131 11.4444 5.71416 14.5 5.71416V4.18984C14.5 3.24562 14.5 2.77351 14.7923 2.64003C15.0846 2.50656 15.4414 2.81575 16.1549 3.43415Z"})),ue=()=>r.ZP.createElement("svg",{viewBox:"0 0 24 24"},r.ZP.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10"}),r.ZP.createElement("path",{d:"M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z"})),me=()=>r.ZP.createElement("svg",{viewBox:"0 0 24 24"},r.ZP.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10"}),r.ZP.createElement("g",null,r.ZP.createElement("path",{d:"M12 12V10"}),r.ZP.createElement("animateTransform",{repeatCount:"indefinite",dur:"10s",to:"360 12 12",from:"0 12 12",type:"rotate",attributeName:"transform",attributeType:"xml"})),r.ZP.createElement("g",null,r.ZP.createElement("path",{d:"M12 8V12"}),r.ZP.createElement("animateTransform",{repeatCount:"indefinite",dur:"1s",to:"360 12 12",from:"0 12 12",type:"rotate",attributeName:"transform",attributeType:"xml"}))),de=()=>r.ZP.createElement("svg",{viewBox:"0 0 24 24"},r.ZP.createElement("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10"}),r.ZP.createElement("path",{d:"M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z"}),r.ZP.createElement("path",{d:"M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z"})),pe=()=>r.ZP.createElement("svg",{viewBox:"0 0 24 24"},r.ZP.createElement("path",{d:"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"}),r.ZP.createElement("path",{d:"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"}),r.ZP.createElement("path",{d:"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"}),r.ZP.createElement("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"})),he=()=>r.ZP.createElement("article",null,r.ZP.createElement("h1",null,r.ZP.createElement("b",null,"S"),r.ZP.createElement("b",null,"o"),r.ZP.createElement("b",null,"o"),"doku"),r.ZP.createElement("p",null,"Soodoku is a free advanced online sudoku game for beginners and experts."),r.ZP.createElement("p",null,"Classic sudoku is a numeric puzzle with a 9×9 grid where some cells are prefilled with digits from 1 to 9. The player fills in all the remaining cells so that each row, column and 3×3 box in the grid contains all nine digits."),r.ZP.createElement("h2",null,"Sudoku Rules"),r.ZP.createElement("p",null,"The rule of the traditional sudoku requires the puzzle to have only one unique solution. In 2011 scientists proved that it takes a minimum of 17 clues for a sudoku puzzle to have a unique solution. Therefore a valid sudoku puzzle contains from 17 to 80 initial clues, and the game complexity increases when less clues are provided to the player at the start. Interesting fact: there are invalid sudoku puzzles with up to 77 cells filled where multiple solutions are possible."),r.ZP.createElement("h2",null,"Sudoku Complexity"),r.ZP.createElement("p",null,"Most of sudoku games have three to five fixed levels: easy, medium, hard and extreme. Usually these levels correspond with number of clues in the range 60-40 for easy level, 40-30 for medium, 30-23 for hard level and 23-17 for extreme (also called evil). Soodoku has more advanced and flexible configuration and players could play a game with any preffered number of clues: from 17 for experts to 70 for the absolute beginners. Puzzles with more than 70 clues do not provide a challange even for a complete beginners. For simplicity soodoku also calls puzzles with 35 or more clues easy, puzzles with 29-34 clues are medium, puzzles with 23-28 clues are hard, and puzzles with less than 23 clues are extreme."),r.ZP.createElement("h2",null,"Advanced Sudoku"),r.ZP.createElement("p",null,"Soodoku has other advanced settings: players can configure various visual hints, replace numbers with emoji (colors, face expressions, animals, food, etc), play offline, save and restore started games, share favorite puzzles with others, view statistics and track their personal progress."),r.ZP.createElement("h2",null,"Health Benefits of Sudoku"),r.ZP.createElement("p",null,"Sudoku is a heatlhy game as it helps to keep the brain active, reducing the risk of memory loss and dementia. Play sudoku daily and enjoy beneficial brain challenges.")),fe=({sameLevel:e})=>{const{state:t,dispatch:n}=K(),[a,l]=(0,r.eJ)(t.level),s=()=>n({type:"RestartGame",newGame:!0});return r.ZP.createElement(r.ZP.Fragment,null,r.ZP.createElement("details",{open:e},r.ZP.createElement("summary",null,"Play again with ",a," clues"),r.ZP.createElement("button",{onClick:()=>n({type:"RestartGame",newGame:!1})},"Restart this game"),r.ZP.createElement("button",{onClick:s},"Start a new game")),r.ZP.createElement("details",{open:!e},r.ZP.createElement("summary",null,"Change the level"),r.ZP.createElement("button",{onClick:()=>l(35)},"Easy • 35"),r.ZP.createElement("button",{onClick:()=>l(29)},"Medium • 29"),r.ZP.createElement("button",{onClick:()=>l(23)},"Hard • 23"),r.ZP.createElement("button",{onClick:()=>l(17)},"Extreme • 17"),r.ZP.createElement("label",null,r.ZP.createElement("input",{type:"range",list:"steplist",min:17,max:70,step:"1",value:a,onChange:e=>{const t=parseInt(e.target.value,10);Number.isInteger(t)&&t<=70&&t>=17&&l(t)},"aria-label":"Difficulty Level"}),r.ZP.createElement("mark",{style:(e=>({left:100-(2.2+(e-17)/53*95.6)+"%"}))(a)},a),r.ZP.createElement("datalist",{id:"steplist"},r.ZP.createElement("option",null,"17"),r.ZP.createElement("option",null,"23"),r.ZP.createElement("option",null,"29"),r.ZP.createElement("option",null,"35"),r.ZP.createElement("option",null,"70"))),r.ZP.createElement("button",{onClick:()=>t.level!==a?n({type:"SetLevel",level:a}):s()},"Start new game with ",a," clues")),r.ZP.createElement("p",null,"The level is defined by the number of clues (cells with initial numbers). The game gets harder when there are less clues. Sudoku always has one unique solution, and must have minimum 17 clues."))},ve=r.ZP.memo(fe),ye={system:"System",light:"Light",dark:"Dark"},Pe={classic:"Numbers (Classic Sudoku)",emoji:"Emoji Sudoku 🤔",colors:"Color Sudoku 🔵",animals:"Animal Sudoku 🐠",sport:"Sport Items Sudoku ⚾",food:"Food Sudoku 🍿",places:"Travel Sudoku 🏖️",flowers:"Flower & Plants Sudoku 🌸",objects:"Objects Sudoku 🧸",transport:"Transport Sudoku 🛩️"},ge=({id:e,i:t,val:n,state:a,text:l,onChange:s})=>r.ZP.createElement("li",null,r.ZP.createElement("input",{type:"radio",id:`${e}${t}`,name:e,value:n,checked:a===n,onChange:s}),r.ZP.createElement("label",{htmlFor:`${e}${t}`},l)),Ze=()=>{const{state:e,dispatch:t}=K(),n=e=>{v(e.target.value,(e=>{t({type:"ThemeChange",theme:e})}))},a=e=>{const n=e.target.value;Object.keys(Q.BUTTONS).includes(n)&&t({type:"TypeChange",typeValue:n})},l=n=>{const{id:r,checked:a}=n.target;r in e&&(y(r,a),t({type:"UISettingChange",id:r,checked:a}))};return r.ZP.createElement(r.ZP.Fragment,null,r.ZP.createElement("details",null,r.ZP.createElement("summary",null,"Color theme"),r.ZP.createElement("ul",null,Object.entries(ye).map((([t,a],l)=>r.ZP.createElement(ge,{key:t,val:t,id:"theme",i:l,state:e.theme,text:a,onChange:n}))))),r.ZP.createElement("details",null,r.ZP.createElement("summary",null,"Interface & visual elements"),r.ZP.createElement("ul",null,r.ZP.createElement("li",null,r.ZP.createElement("label",{className:"switch"},r.ZP.createElement("input",{type:"checkbox",id:"UIshowImgs",checked:e.UIshowImgs,onChange:l}),r.ZP.createElement("mark",{className:"slider"}),"Show background images")),r.ZP.createElement("li",null,r.ZP.createElement("label",{className:"switch"},r.ZP.createElement("input",{type:"checkbox",id:"UIpuzzAnim",checked:e.UIpuzzAnim,onChange:l}),r.ZP.createElement("mark",{className:"slider"}),"Animate sudoku puzzle cells & action buttons")),r.ZP.createElement("li",null,r.ZP.createElement("label",{className:"switch"},r.ZP.createElement("input",{type:"checkbox",id:"UIrestAnim",checked:e.UIrestAnim,onChange:l}),r.ZP.createElement("mark",{className:"slider"}),"Show other interface animations")))),r.ZP.createElement("details",null,r.ZP.createElement("summary",null,"Game type"),r.ZP.createElement("ul",null,Object.entries(Pe).map((([t,n],l)=>r.ZP.createElement(ge,{key:t,val:t,id:"type",i:l,state:e.type,text:n,onChange:a}))))))},Ee=r.ZP.memo(Ze),be={"":null,info:r.ZP.createElement(he,null),next:r.ZP.createElement(ve,{sameLevel:!0}),level:r.ZP.createElement(ve,{sameLevel:!1}),setting:r.ZP.createElement(Ee,null)},we=(()=>{let e=null;return t=>(""!==t&&(e=be[t]),e)})(),Ce=({showMenu:e,hideMenu:t})=>r.ZP.createElement("nav",{className:""===e?"hidden":void 0},r.ZP.createElement("button",{onClick:t},"×"),we(e)),ke=r.ZP.memo(Ce);n(285),n(1637),n(6229),n(7330),n(2062),n(2262),n(4506),n(4916),n(3123);const Oe=e=>{const t=Array(81).fill(0);return e.forEach(((e,n)=>{return t[(r=n,9*(r%9+1)-(Math.floor(r/9)+1))]=e;var r})),t},ze=()=>{const e=[1,2,3,4,5,6,7,8,9],t=[];for(;e.length>0;)t.push(...e.splice(Math.floor(Math.random()*e.length),1));return"123456789"===t.join("")?ze():t},Se=e=>e.slice(0,5).map((e=>(e=>{const t=((e,t)=>e.map((e=>0===e?0:t[e-1])))(e,ze()),n=(e=>{const t=[].concat(e),n=Math.floor(3*Math.random()),r=Math.floor(2*Math.random())+1;for(let e=0;e<81;e+=9){const a=t.splice(e+3*n,3);t.splice(e+(3*n+3*r)%9,0,...a)}return t})((e=>{const t=[].concat(e),n=Math.floor(3*Math.random()),r=Math.floor(2*Math.random())+1,a=t.splice(27*n,27),l=(27*n+27*r)%81;return t.splice(l,0,...a),t})(t));return((e,t,n)=>{let r=n;for(let n=1;n<=t;n++)r=e(r);return r})(Oe,Math.floor(2*Math.random())+1,n)})(e)));function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){(0,H.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Ie=()=>Array(81).fill(0),xe=Ie(),Ne=e=>new Promise(((t,r)=>{const a=window.Worker?"number"==typeof e?new Worker(new URL(n.p+n.u(418),n.b)):new Worker(new URL(n.p+n.u(548),n.b)):null;a&&"function"==typeof a.postMessage?(a.postMessage(e),a.onmessage=({data:e})=>{Array.isArray(e)?t(e):r("worker data is not an array"),a.terminate()}):r("the worker was not initialized")})).catch((()=>(o(4,("number"==typeof e?"Generate":"Solve")+" worker failure"),Ne(e)))),Te=e=>Ne(e),Le=e=>e.reduce(((e,t,n)=>{if("number"!=typeof t||0===t)return e;const r=e[t];return e[t]="string"==typeof r?r+Q.ZIP.HASH.at(n):Q.ZIP.HASH.at(n),e}),[]).join(Q.ZIP.HASHSPLIT).substring(1),Ue=Q.ZIP.HASH.split("").reduce(((e,t,n)=>(e[t]=n,e)),{}),Ae=(e,t)=>{let n=0;const r=Ie();return e.split(Q.ZIP.HASHSPLIT).map(((e,t)=>{e.split("").map((e=>{n++,r[Ue[e]]=t+1}))})),t!==n&&o(5,`Corrupted unzip, puzzle: ${e}, level: ${t}`),r},$e=(e,t)=>Object.keys(t).filter((n=>t[n].level===e)),De=(e,t,n,r)=>({type:"ZipedLevelsUpdated",zipedJSON:Me(Me({},e),{},{[t]:G(e[t],r,n)})}),Fe=async(e,t,n,r)=>{const{puzzle:a,solved:l}=await(async(e,t,n,r)=>{const a=[];let l="";do{""!==l&&a.push(l),l=(s=e)[Math.floor(Math.random()*s.length)]}while(t.includes(l));var s;const c=Ae(l,n),i=await(e=>Ne(e))(c);return a.length>0&&("function"==typeof r?r({type:"ZipedLevelUpdated",level:n,ziped:e.filter((e=>!a.includes(e)))}):o(6,"Repeated Puzzles No Dispatch")),{puzzle:c,solved:i}})(e,t,n,r||void 0);return 81===a.length&&81===l.length&&{puzzle:a,solved:l}},He=()=>{const{state:e,dispatch:t}=K(),n=(0,r.sO)(!0),a=(0,r.sO)(0),c=(0,r.sO)("00:00"),i=(0,r.sO)(0),v=(0,r.sO)(xe),y=(0,r.sO)(xe),[Z,E]=(0,r.eJ)(""),[b,w]=(0,r.eJ)(!0),[C,k]=(0,r.eJ)(!1),[O,z]=(0,r.eJ)(!0),[S,j]=(0,r.eJ)({}),[I,x]=(0,r.eJ)([]),[N,T]=(0,r.eJ)(-1),[L,U]=(0,r.eJ)(0),[A,$]=(0,r.eJ)([]),[D,F]=(0,r.eJ)(xe);(0,r.d4)((()=>{G(-1),$([])}),[v.current]),(0,r.d4)((()=>{""!==Z&&(E(""),_(e.level))}),[e.level]),(0,r.d4)((()=>{""!==Z&&e.restart&&(E(""),e.restart.newGame?_(e.level):(i.current++,U(0),$([]),G(-1),F(v.current),w(!1),k(!1),z(!1),g(v.current,j),s(e.level,"restart")))}),[e.restart]);const H=e=>((e,t,n,r)=>{if(e>0&&e<10){const a=t.indexOf(e);r(a>-1?{overlap:t.map(((t,r,l)=>p(t,r,a,l,n,e))),focus:a,lastN:e}:{overlap:P,focus:-1,lastN:0})}else 0===e&&r({overlap:t.map(((t,r,a)=>p(t,r,-1,a,n,e))),focus:-1,lastN:0})})(e,D,A,(({overlap:e,focus:t,lastN:n})=>{x(e),G(t),U(n)})),J=e=>{if(e.stopPropagation(),e.stopImmediatePropagation(),O||b||A.length>0){if(e.preventDefault(),A.length>0){const t=parseInt(e.key,10);t.toString()===e.key&&D[N]===t&&h(D[N],0,!1,N,W)}}else if(!(e.target instanceof HTMLInputElement)||e.target instanceof HTMLInputElement&&""!==e.target.value){const t=parseInt(e.key,10);t.toString()===e.key&&e.preventDefault(),"number"==typeof t&&H(t)}},B=()=>{if(!0===b)return;const e=c.current.split(":");t({type:"UpdateGameTime",time:60*parseInt(e[0],10)+parseInt(e[1],10),ziped:Le(v.current)})};(0,r.d4)((()=>(document.addEventListener("visibilitychange",B),window.addEventListener("pagehide",B,!1),()=>{document.removeEventListener("visibilitychange",B),window.removeEventListener("pagehide",B,!1)})),[b]),(0,r.d4)((()=>(window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J))),[D]);const G=e=>{if(O||b)return;const t=D[e];"number"==typeof t&&0!==t&&U(t),T(e)};(0,r.d4)((()=>{L>-1&&x(D.map(((e,t,n)=>p(e,t,N,n,A,L))))}),[D,N,A,L]);const R=({puzzle:n,solved:r})=>{t({type:"StartGame",level:e.level,ziped:Le(n)}),v.current=n,i.current++,y.current=r,U(0),F(n),w(!1),k(!1),g(n,j);const l=((Date.now()-a.current)/1e3).toFixed(1);s(e.level,l)},q=r=>{k(!0),z(!1),a.current=Date.now(),n.current=!1;const s="number"!=typeof r?e.level:r;(e=>{l(`start_${e}`)})(s),(async(e,t,n,r,a)=>{const l=Math.max(Math.min(Number.isInteger(e)?e:30,70),17),s=n.ziped[l],c=((e,t)=>{const n=Le(e);return(n?[n]:[]).concat(Object.keys(t.saved),Object.keys(t.stats))})(t,n);if(Array.isArray(s)&&s.length>0){const e=await Fe(s,c,l,a);e?(c.push(Le(e.puzzle)),r(e)):o(7,"Picked empty puzzle")}else if(l>=23){const e=await Te(l),t=Le(e),n=await Fe([t],c,l);n?(c.push(t),r(n)):o(8,"Picked empty puzzle")}else o(9,"Ziped array is empty and level < 23");if(!Array.isArray(s)||s.length<=5)if(l>=23){const e=await((e,t)=>Promise.all(Array.from({length:5},(()=>Te(e).then((e=>Le(e)))))))(l);a(De(n.ziped,l,c,e))}else if(n.levelsFetched.includes(l)){const e=((e,{saved:t,stats:n})=>$e(e,t).concat($e(e,n)))(l,n),t=((e,t)=>{const n=[].concat(e);let r=[];for(let e=0;e<5;e++){const e=Math.floor(Math.random()*n.length);r.push(...n.splice(e,1))}return r})(e),r=Se(t.map((e=>Ae(e,l)))).map((e=>Le(e)));a(De(n.ziped,l,c,r))}else V(l,n,a,c)})(s,v.current,e,R,t)},W=(r,a,s)=>{"number"==typeof s&&0!==s&&U(s),F((s=>{const o=[...s];o[r]=a;const i=s[r],p="string"==typeof i?i:"",{overlapIndexes:h,cleanState:f}=((e,t,n)=>{const r=e[t],a=u(t).concat(m(t),d(t)),l=new Set(a);l.delete(t);const s=Array.from(l);let o=[];if("number"==typeof r)0!==r&&(o=s.filter((t=>e[t]===r)));else{const t=r.split(""),a=n.split("");if(t.length>a.length){const n=t.filter((e=>!a.includes(e)))[0];o=s.filter((t=>e[t]===parseInt(n,10)))}}const c=[...e];return s.forEach((e=>{const t=c[e];if("string"==typeof t){const n=t.split(""),a=n.filter((e=>parseInt(e,10)!==r));a.length!==n.length&&(0===a.length?c[e]=0:c[e]=a.join(""))}})),{overlapIndexes:o,cleanState:c}})(o,r,p);if(!n.current){const a=(P=f,Z=y.current,P.every(((e,t)=>e===Z[t]||0===e||"string"==typeof e)));if(a){g(f,j);const r=f.every((e=>"number"==typeof e&&e>0)),a=Le(v.current),s=c.current.split(":"),o=60*parseInt(s[0],10)+parseInt(s[1],10);r?(t({type:"CompleteGame",time:o,ziped:a}),U(0),G(-1),w(!0),z(!0),n.current=!0,(e=>{l(`end_${e}`)})(e.level),(0,M.Z)({particleCount:200,spread:50,ticks:250,origin:{y:.8}})):t({type:"SaveMoves",time:o,ziped:a,moves:JSON.stringify(f)})}h.length>0||!Boolean(a)?$([r,...h]):$([])}var P,Z;return f}))},_=e=>{C||(0!==e?(w(!0),q(e)):n.current?q():(B(),w((e=>!e))),f(N))},Y=()=>_(0),Q=e=>()=>E((t=>""===t?e:"")),X=Q("info"),te=Q("next"),re=Q("level"),ae=Q("setting");return r.ZP.createElement(r.ZP.Fragment,null,r.ZP.createElement(ke,{showMenu:Z,hideMenu:()=>E("")}),r.ZP.createElement("section",{className:"header"},r.ZP.createElement(oe,null)),r.ZP.createElement("button",{onClick:te,className:"next","aria-label":"Play another game"},r.ZP.createElement(ce,null)),r.ZP.createElement("button",{onClick:re,className:"level"},(e=>e>=35?`Easy ${e}`:e>=29?`Medium ${e}`:e>=23?`Hard ${e}`:`Extreme ${e}`)(e.level)),r.ZP.createElement("button",{onClick:Y,"aria-label":b?C?"Loading":"Play":"Pause",className:"play"},b?C?r.ZP.createElement(me,null):r.ZP.createElement(ue,null):r.ZP.createElement(de,null)),r.ZP.createElement(ne,{isPaused:b,resetCount:i.current,gameTime:c}),r.ZP.createElement("button",{onClick:()=>alert("Soon you'll be able to save & share your favorive sudoku puzzles"),className:"share","aria-label":"Share"},r.ZP.createElement(ie,null)),r.ZP.createElement("button",{onClick:ae,className:"settings","aria-label":"Settings"},r.ZP.createElement(pe,null))),r.ZP.createElement("section",{className:"puzzle"+(O?" fini":b?C?" load":" pause":"")},r.ZP.createElement("button",{onClick:Y,className:"play","aria-label":"Play"},r.ZP.createElement(ue,null)),D.map(((e,t)=>r.ZP.createElement(ee,{i:t,key:t,fieldVal:e,initVal:v.current[t],setFocus:G,focusValue:D[N]||0,puzleUpdate:W,overlap:I[t]})))),r.ZP.createElement(se,{noteOptions:S,pressButton:(e,t=!1)=>{N<0||N>-1&&"number"==typeof D[N]&&0!==D[N]&&D[N]!==e?H(e):N>-1&&0===v.current[N]&&("string"==typeof D[N]||0===D[N]?h(D[N],e,t,N,W):D[N]===e&&h(D[N],0,t,N,W))},play:Y,lastN:L}))},Je=r.ZP.memo(He);(()=>{var e;const t=null!==(e=c("theme"))&&void 0!==e?e:"system";v(t,(()=>{})),(e=>{if(!window.matchMedia)return;const t=window.matchMedia("(prefers-color-scheme: dark)");e(t.matches),t.addEventListener("change",(t=>e(t.matches)))})((e=>document.body.id=e?"dark":"light"))})(),["UIshowImgs","UIpuzzAnim","UIrestAnim"].forEach((e=>{const t=c(e);y(e,t)})),window.addEventListener("error",(e=>o(0,JSON.stringify(e)))),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js")}));const Be=document.body.firstElementChild;(0,a.so)(Be).render(r.ZP.createElement(r.ZP.StrictMode,null,r.ZP.createElement(Y,null,r.ZP.createElement(Je,null))))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e].call(l.exports,l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,a,l)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,a,l]=e[u],o=!0,c=0;c<n.length;c++)(!1&l||s>=l)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(o=!1,l<s&&(s=l));if(o){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,a,l]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.u=e=>e+"."+{418:"4cbd",548:"874a"}[e]+".js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="/",(()=>{r.b=document.baseURI||self.location.href;var e={143:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[s,o,c]=n,i=0;if(s.some((t=>0!==e[t]))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(c)var u=c(r)}for(t&&t(n);i<s.length;i++)l=s[i],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunksudoku=self.webpackChunksudoku||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[321,977],(()=>r(7037)));a=r.O(a)})();
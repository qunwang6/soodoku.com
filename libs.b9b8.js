"use strict";(self.webpackChunksudoku=self.webpackChunksudoku||[]).push([[977],{5776:(e,t,n)=>{n.d(t,{kr:()=>B,ZP:()=>nt,ZB:()=>ze,sY:()=>Ve,uy:()=>et,qp:()=>ae,d4:()=>ie,_Y:()=>oe,sO:()=>le,eJ:()=>re});var r,o,i,_,l,u,a,c,s={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function d(e,t){for(var n in t)e[n]=t[n];return e}function v(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n){var o,i,_,l={};for(_ in t)"key"==_?o=t[_]:"ref"==_?i=t[_]:l[_]=t[_];if(arguments.length>2&&(l.children=arguments.length>3?r.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===l[_]&&(l[_]=e.defaultProps[_]);return y(e,l,o,i,null)}function y(e,t,n,r,_){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++i:_};return null==_&&null!=o.vnode&&o.vnode(l),l}function b(e){return e.children}function g(e,t){this.props=e,this.context=t}function k(e,t){if(null==t)return e.__?k(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?k(e):null}function w(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return w(e)}}function C(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!S.__r++||l!==o.debounceRendering)&&((l=o.debounceRendering)||u)(S)}function S(){var e,t,n,r,o,i,l,u,c;for(_.sort(a);e=_.shift();)e.__d&&(t=_.length,r=void 0,o=void 0,i=void 0,u=(l=(n=e).__v).__e,(c=n.__P)&&(r=[],o=[],(i=d({},l)).__v=l.__v+1,I(c,l,i,n.__n,void 0!==c.ownerSVGElement,null!=l.__h?[u]:null,r,null==u?k(l):u,l.__h,o),H(r,l,o),l.__e!=u&&w(l)),_.length>t&&_.sort(a));S.__r=0}function x(e,t,n,r,o,i,_,l,u,a,c){var p,d,v,m,g,w,C,S,x,E=0,T=r&&r.__k||f,R=T.length,O=R,U=t.length;for(n.__k=[],p=0;p<U;p++)null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m||"function"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?y(null,m,null,null,m):h(m)?y(b,{children:m},null,null,null):m.__b>0?y(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)?(m.__=n,m.__b=n.__b+1,-1===(S=P(m,T,C=p+E,O))?v=s:(v=T[S]||s,T[S]=void 0,O--),I(e,m,v,o,i,_,l,u,a,c),g=m.__e,(d=m.ref)&&v.ref!=d&&(v.ref&&L(v.ref,null,m),c.push(d,m.__c||g,m)),null!=g&&(null==w&&(w=g),(x=v===s||null===v.__v)?-1==S&&E--:S!==C&&(S===C+1?E++:S>C?O>U-C?E+=S-C:E--:E=S<C&&S==C-1?S-C:0),C=p+E,"function"!=typeof m.type||S===C&&v.__k!==m.__k?"function"==typeof m.type||S===C&&!x?void 0!==m.__d?(u=m.__d,m.__d=void 0):u=g.nextSibling:u=N(e,g,u):u=M(m,u,e),"function"==typeof n.type&&(n.__d=u))):(v=T[p])&&null==v.key&&v.__e&&(v.__e==u&&(u=k(v)),A(v,v,!1));for(n.__e=w,p=R;p--;)null!=T[p]&&("function"==typeof n.type&&null!=T[p].__e&&T[p].__e==n.__d&&(n.__d=T[p].__e.nextSibling),A(T[p],T[p]))}function M(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?M(r,t,n):N(n,r.__e,t));return t}function E(e,t){return t=t||[],null==e||"boolean"==typeof e||(h(e)?e.some((function(e){E(e,t)})):t.push(e)),t}function N(e,t,n){return null==n||n.parentNode!==e?e.insertBefore(t,null):t==n&&null!=t.parentNode||e.insertBefore(t,n),t.nextSibling}function P(e,t,n,r){var o=e.key,i=e.type,_=n-1,l=n+1,u=t[n];if(null===u||u&&o==u.key&&i===u.type)return n;if(r>(null!=u?1:0))for(;_>=0||l<t.length;){if(_>=0){if((u=t[_])&&o==u.key&&i===u.type)return _;_--}if(l<t.length){if((u=t[l])&&o==u.key&&i===u.type)return l;l++}}return-1}function T(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||p.test(t)?n:n+"px"}function R(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||T(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||T(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?U:O,i):e.removeEventListener(t,i?U:O,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function O(e){return this.l[e.type+!1](o.event?o.event(e):e)}function U(e){return this.l[e.type+!0](o.event?o.event(e):e)}function I(e,t,n,r,i,_,l,u,a,c){var s,f,p,v,m,y,k,w,C,S,M,E,N,P,T,R=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(a=n.__h,u=t.__e=n.__e,t.__h=null,_=[u]),(s=o.__b)&&s(t);e:if("function"==typeof R)try{if(w=t.props,C=(s=R.contextType)&&r[s.__c],S=s?C?C.props.value:s.__:r,n.__c?k=(f=t.__c=n.__c).__=f.__E:("prototype"in R&&R.prototype.render?t.__c=f=new R(w,S):(t.__c=f=new g(w,S),f.constructor=R,f.render=D),C&&C.sub(f),f.props=w,f.state||(f.state={}),f.context=S,f.__n=r,p=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=R.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=d({},f.__s)),d(f.__s,R.getDerivedStateFromProps(w,f.__s))),v=f.props,m=f.state,f.__v=t,p)null==R.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==R.getDerivedStateFromProps&&w!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(w,S),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(w,f.__s,S)||t.__v===n.__v)){for(t.__v!==n.__v&&(f.props=w,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),M=0;M<f._sb.length;M++)f.__h.push(f._sb[M]);f._sb=[],f.__h.length&&l.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(w,f.__s,S),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,m,y)}))}if(f.context=S,f.props=w,f.__P=e,f.__e=!1,E=o.__r,N=0,"prototype"in R&&R.prototype.render){for(f.state=f.__s,f.__d=!1,E&&E(t),s=f.render(f.props,f.state,f.context),P=0;P<f._sb.length;P++)f.__h.push(f._sb[P]);f._sb=[]}else do{f.__d=!1,E&&E(t),s=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++N<25);f.state=f.__s,null!=f.getChildContext&&(r=d(d({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(v,m)),x(e,h(T=null!=s&&s.type===b&&null==s.key?s.props.children:s)?T:[T],t,n,r,i,_,l,u,a,c),f.base=t.__e,t.__h=null,f.__h.length&&l.push(f),k&&(f.__E=f.__=null)}catch(e){t.__v=null,(a||null!=_)&&(t.__e=u,t.__h=!!a,_[_.indexOf(u)]=null),o.__e(e,t,n)}else null==_&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=F(n.__e,t,n,r,i,_,l,a,c);(s=o.diffed)&&s(t)}function H(e,t,n){for(var r=0;r<n.length;r++)L(n[r],n[++r],n[++r]);o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function F(e,t,n,o,i,_,l,u,a){var c,f,p,d=n.props,m=t.props,y=t.type,b=0;if("svg"===y&&(i=!0),null!=_)for(;b<_.length;b++)if((c=_[b])&&"setAttribute"in c==!!y&&(y?c.localName===y:3===c.nodeType)){e=c,_[b]=null;break}if(null==e){if(null===y)return document.createTextNode(m);e=i?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,m.is&&m),_=null,u=!1}if(null===y)d===m||u&&e.data===m||(e.data=m);else{if(_=_&&r.call(e.childNodes),f=(d=n.props||s).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!u){if(null!=_)for(d={},b=0;b<e.attributes.length;b++)d[e.attributes[b].name]=e.attributes[b].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||R(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||R(e,i,t[i],n[i],r)}(e,m,d,i,u),p)t.__k=[];else if(x(e,h(b=t.props.children)?b:[b],t,n,o,i&&"foreignObject"!==y,_,l,_?_[0]:n.__k&&k(n,0),u,a),null!=_)for(b=_.length;b--;)null!=_[b]&&v(_[b]);u||("value"in m&&void 0!==(b=m.value)&&(b!==e.value||"progress"===y&&!b||"option"===y&&b!==d.value)&&R(e,"value",b,d.value,!1),"checked"in m&&void 0!==(b=m.checked)&&b!==e.checked&&R(e,"checked",b,d.checked,!1))}return e}function L(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function A(e,t,n){var r,i;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||L(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&A(r[i],t,n||"function"!=typeof e.type);n||null==e.__e||v(e.__e),e.__=e.__e=e.__d=void 0}function D(e,t,n){return this.constructor(e,n)}function W(e,t,n){var i,_,l,u;o.__&&o.__(e,t),_=(i="function"==typeof n)?null:n&&n.__k||t.__k,l=[],u=[],I(t,e=(!i&&n||t).__k=m(b,null,[e]),_||s,s,void 0!==t.ownerSVGElement,!i&&n?[n]:_?null:t.firstChild?r.call(t.childNodes):null,l,!i&&n?n:_?_.__e:t.firstChild,i,u),H(l,e,u)}function V(e,t){W(e,t,V)}function z(e,t,n){var o,i,_,l,u=d({},e.props);for(_ in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)"key"==_?o=t[_]:"ref"==_?i=t[_]:u[_]=void 0===t[_]&&void 0!==l?l[_]:t[_];return arguments.length>2&&(u.children=arguments.length>3?r.call(arguments,2):n),y(e.type,u,o||e.key,i||e.ref,null)}function B(e,t){var n={__c:t="__cC"+c++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,C(e)}))},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}r=f.slice,o={__e:function(e,t,n,r){for(var o,i,_;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),_=o.__d),_)return o.__E=o}catch(t){e=t}throw e}},i=0,g.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(d({},n),this.props)),e&&d(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),C(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),C(this))},g.prototype.render=b,_=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=function(e,t){return e.__v.__b-t.__v.__b},S.__r=0,c=0;var Z,j,$,q,Y=0,X=[],G=[],J=o.__b,K=o.__r,Q=o.diffed,ee=o.__c,te=o.unmount;function ne(e,t){o.__h&&o.__h(j,e,Y||t),Y=0;var n=j.__H||(j.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:G}),n.__[e]}function re(e){return Y=1,oe(ve,e)}function oe(e,t,n){var r=ne(Z++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):ve(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=j,!j.u)){var o=function(e,t,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,t,n);var _=!1;return o.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(_=!0)}})),!(!_&&r.__c.props===e)&&(!i||i.call(this,e,t,n))};j.u=!0;var i=j.shouldComponentUpdate,_=j.componentWillUpdate;j.componentWillUpdate=function(e,t,n){if(this.__e){var r=i;i=void 0,o(e,t,n),i=r}_&&_.call(this,e,t,n)},j.shouldComponentUpdate=o}return r.__N||r.__}function ie(e,t){var n=ne(Z++,3);!o.__s&&de(n.__H,t)&&(n.__=e,n.i=t,j.__H.__h.push(n))}function _e(e,t){var n=ne(Z++,4);!o.__s&&de(n.__H,t)&&(n.__=e,n.i=t,j.__h.push(n))}function le(e){return Y=5,ue((function(){return{current:e}}),[])}function ue(e,t){var n=ne(Z++,7);return de(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ae(e){var t=j.context[e.__c],n=ne(Z++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(j)),t.props.value):e.__}function ce(){for(var e;e=X.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(pe),e.__H.__h.forEach(he),e.__H.__h=[]}catch(t){e.__H.__h=[],o.__e(t,e.__v)}}o.__b=function(e){j=null,J&&J(e)},o.__r=function(e){K&&K(e),Z=0;var t=(j=e.__c).__H;t&&($===j?(t.__h=[],j.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=G,e.__N=e.i=void 0}))):(t.__h.forEach(pe),t.__h.forEach(he),t.__h=[],Z=0)),$=j},o.diffed=function(e){Q&&Q(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==X.push(t)&&q===o.requestAnimationFrame||((q=o.requestAnimationFrame)||fe)(ce)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==G&&(e.__=e.__V),e.i=void 0,e.__V=G}))),$=j=null},o.__c=function(e,t){t.some((function(e){try{e.__h.forEach(pe),e.__h=e.__h.filter((function(e){return!e.__||he(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],o.__e(n,e.__v)}})),ee&&ee(e,t)},o.unmount=function(e){te&&te(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{pe(e)}catch(e){t=e}})),n.__H=void 0,t&&o.__e(t,n.__v))};var se="function"==typeof requestAnimationFrame;function fe(e){var t,n=function(){clearTimeout(r),se&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);se&&(t=requestAnimationFrame(n))}function pe(e){var t=j,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),j=t}function he(e){var t=j;e.__c=e.__(),j=t}function de(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function ve(e,t){return"function"==typeof t?t(e):t}function me(e,t){for(var n in t)e[n]=t[n];return e}function ye(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function be(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}function ge(e){this.props=e}(ge.prototype=new g).isPureReactComponent=!0,ge.prototype.shouldComponentUpdate=function(e,t){return ye(this.props,e)||ye(this.state,t)};var ke=o.__b;o.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ke&&ke(e)};var we="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,Ce=function(e,t){return null==e?null:E(E(e).map(t))},Se={map:Ce,forEach:Ce,count:function(e){return e?E(e).length:0},only:function(e){var t=E(e);if(1!==t.length)throw"Children.only";return t[0]},toArray:E},xe=o.__e;o.__e=function(e,t,n,r){if(e.then)for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t);xe(e,t,n,r)};var Me=o.unmount;function Ee(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=me({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return Ee(e,t,n)}))),e}function Ne(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return Ne(e,t,n)})),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function Pe(){this.__u=0,this.t=null,this.__b=null}function Te(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Re(){this.u=null,this.o=null}o.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),Me&&Me(e)},(Pe.prototype=new g).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=Te(r.__v),i=!1,_=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=_;var l=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=Ne(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}},u=!0===t.__h;r.__u++||u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(_,_)},Pe.prototype.componentWillUnmount=function(){this.t=[]},Pe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Ee(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&m(b,null,e.fallback);return o&&(o.__h=null),[m(b,null,t.__a?null:e.children),o]};var Oe=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Ue(e){return this.getChildContext=function(){return e.context},e.children}function Ie(e){var t=this,n=e.i;t.componentWillUnmount=function(){W(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e)}}),W(m(Ue,{context:t.context},e.__v),t.l)}(Re.prototype=new g).__a=function(e){var t=this,n=Te(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),Oe(t,e,r)):o()};n?n(i):i()}},Re.prototype.render=function(e){this.u=null,this.o=new Map;var t=E(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Re.prototype.componentDidUpdate=Re.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){Oe(e,n,t)}))};var He="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Fe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Le=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ae=/[A-Z0-9]/g,De="undefined"!=typeof document,We=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};function Ve(e,t,n){return null==t.__k&&(t.textContent=""),W(e,t),"function"==typeof n&&n(),e?e.__c:null}function ze(e,t,n){return V(e,t),"function"==typeof n&&n(),e?e.__c:null}g.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(g.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var Be=o.event;function Ze(){}function je(){return this.cancelBubble}function $e(){return this.defaultPrevented}o.event=function(e){return Be&&(e=Be(e)),e.persist=Ze,e.isPropagationStopped=je,e.isDefaultPrevented=$e,e.nativeEvent=e};var qe,Ye={enumerable:!1,configurable:!0,get:function(){return this.class}},Xe=o.vnode;o.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,n=e.type,r={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||De&&"children"===o&&"noscript"===n||"class"===o||"className"===o)){var _=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"ondoubleclick"===_?o="ondblclick":"onchange"!==_||"input"!==n&&"textarea"!==n||We(t.type)?"onfocus"===_?o="onfocusin":"onblur"===_?o="onfocusout":Le.test(o)?o=_:-1===n.indexOf("-")&&Fe.test(o)?o=o.replace(Ae,"-$&").toLowerCase():null===i&&(i=void 0):_=o="oninput","oninput"===_&&r[o=_]&&(o="oninputCapture"),r[o]=i}}"select"==n&&r.multiple&&Array.isArray(r.value)&&(r.value=E(t.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==n&&null!=r.defaultValue&&(r.value=E(t.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",Ye)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=He,Xe&&Xe(e)};var Ge=o.__r;o.__r=function(e){Ge&&Ge(e),qe=e.__c};var Je=o.diffed;o.diffed=function(e){Je&&Je(e);var t=e.props,n=e.__e;null!=n&&"textarea"===e.type&&"value"in t&&t.value!==n.value&&(n.value=null==t.value?"":t.value),qe=null};var Ke={ReactCurrentDispatcher:{current:{readContext:function(e){return qe.__n[e.__c].props.value}}}};function Qe(e){return!!e&&e.$$typeof===He}function et(e){return!!e.__k&&(W(null,e),!0)}function tt(e){e()}var nt={useState:re,useId:function(){var e=ne(Z++,11);if(!e.__){for(var t=j.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__},useReducer:oe,useEffect:ie,useLayoutEffect:_e,useInsertionEffect:_e,useTransition:function(){return[!1,tt]},useDeferredValue:function(e){return e},useSyncExternalStore:function(e,t){var n=t(),r=re({h:{__:n,v:t}}),o=r[0].h,i=r[1];return _e((function(){o.__=n,o.v=t,be(o.__,t())||i({h:o})}),[e,n,t]),ie((function(){return be(o.__,o.v())||i({h:o}),e((function(){be(o.__,o.v())||i({h:o})}))}),[e]),n},startTransition:tt,useRef:le,useImperativeHandle:function(e,t,n){Y=6,_e((function(){return"function"==typeof e?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0}),null==n?n:n.concat(e))},useMemo:ue,useCallback:function(e,t){return Y=8,ue((function(){return e}),t)},useContext:ae,useDebugValue:function(e,t){o.useDebugValue&&o.useDebugValue(t?t(e):e)},version:"17.0.2",Children:Se,render:Ve,hydrate:ze,unmountComponentAtNode:et,createPortal:function(e,t){var n=m(Ie,{__v:e,i:t});return n.containerInfo=t,n},createElement:m,createContext:B,createFactory:function(e){return m.bind(null,e)},cloneElement:function(e){return Qe(e)?z.apply(null,arguments):e},createRef:function(){return{current:null}},Fragment:b,isValidElement:Qe,isElement:Qe,isFragment:function(e){return Qe(e)&&e.type===b},findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:g,PureComponent:ge,memo:function(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:ye(this.props,e)}function r(t){return this.shouldComponentUpdate=n,m(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:function(e){function t(t){var n=me({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=we,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},flushSync:function(e,t){return e(t)},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:b,Suspense:Pe,SuspenseList:Re,lazy:function(e){var t,n,r;function o(o){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return m(n,o)}return o.displayName="Lazy",o.__f=!0,o},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ke}},4572:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>o})},9883:(e,t,n)=>{n.d(t,{Z:()=>o});var r={};!function e(t,n,r,o){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function _(){}function l(e){var r=n.exports.Promise,o=void 0!==r?r:t.Promise;return"function"==typeof o?new o(e):(e(_,_),null)}var u,a,c,s,f,p,h,d,v,m=(c=Math.floor(1e3/60),s={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(u=function(e){var t=Math.random();return s[t]=requestAnimationFrame((function n(r){f===r||f+c-1<r?(f=r,delete s[t],e()):s[t]=requestAnimationFrame(n)})),t},a=function(e){s[e]&&cancelAnimationFrame(s[e])}):(u=function(e){return setTimeout(e,c)},a=function(e){return clearTimeout(e)}),{frame:u,cancel:a}),y=(d={},function(){if(p)return p;if(!r&&i){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{p=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,r,o){if(h)return t(n,null),h;var i=Math.random().toString(36).slice(2);return h=l((function(r){function _(t){t.data.callback===i&&(delete d[i],e.removeEventListener("message",_),h=null,o(),r())}e.addEventListener("message",_),t(n,i),d[i]=_.bind(null,{data:{callback:i}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),d)d[t](),delete d[t]}}(p)}return p}),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:b[t],n)}function k(e){return e<0?0:Math.floor(e)}function w(e){return parseInt(e,16)}function C(e){return e.map(S)}function S(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:w(t.substring(0,2)),g:w(t.substring(2,4)),b:w(t.substring(4,6))}}function x(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function M(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function E(e,n){var _,u=!e,a=!!g(n||{},"resize"),c=g(n,"disableForReducedMotion",Boolean),s=i&&g(n||{},"useWorker")?y():null,f=u?x:M,p=!(!e||!s||!e.__confetti_initialized),h="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function d(t,n,i){for(var u,a,c,s,p=g(t,"particleCount",k),h=g(t,"angle",Number),d=g(t,"spread",Number),v=g(t,"startVelocity",Number),y=g(t,"decay",Number),b=g(t,"gravity",Number),w=g(t,"drift",Number),S=g(t,"colors",C),x=g(t,"ticks",Number),M=g(t,"shapes"),E=g(t,"scalar"),N=function(e){var t=g(e,"origin",Object);return t.x=g(t,"x",Number),t.y=g(t,"y",Number),t}(t),P=p,T=[],R=e.width*N.x,O=e.height*N.y;P--;)T.push((void 0,void 0,a=(u={x:R,y:O,angle:h,spread:d,startVelocity:v,color:S[P%S.length],shape:M[(0,s=M.length,Math.floor(Math.random()*(s-0))+0)],ticks:x,decay:y,gravity:b,drift:w,scalar:E}).angle*(Math.PI/180),c=u.spread*(Math.PI/180),{x:u.x,y:u.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*u.startVelocity+Math.random()*u.startVelocity,angle2D:-a+(.5*c-Math.random()*c),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:u.color,shape:u.shape,tick:0,totalTicks:u.ticks,decay:u.decay,drift:u.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*u.gravity,ovalScalar:.6,scalar:u.scalar}));return _?_.addFettis(T):(_=function(e,t,n,i,_){var u,a,c=t.slice(),s=e.getContext("2d"),f=l((function(t){function l(){u=a=null,s.clearRect(0,0,i.width,i.height),_(),t()}u=m.frame((function t(){!r||i.width===o.width&&i.height===o.height||(i.width=e.width=o.width,i.height=e.height=o.height),i.width||i.height||(n(e),i.width=e.width,i.height=e.height),s.clearRect(0,0,i.width,i.height),c=c.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,o=t.y+t.random*t.tiltSin,i=t.wobbleX+t.random*t.tiltCos,_=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(_-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,o,i,_,l,u){e.save(),e.translate(t,n),e.rotate(i),e.scale(r,o),e.arc(0,0,1,0,l,void 0),e.restore()}(e,t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(_-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var l=Math.PI/2*3,u=4*t.scalar,a=8*t.scalar,c=t.x,s=t.y,f=5,p=Math.PI/f;f--;)c=t.x+Math.cos(l)*a,s=t.y+Math.sin(l)*a,e.lineTo(c,s),l+=p,c=t.x+Math.cos(l)*u,s=t.y+Math.sin(l)*u,e.lineTo(c,s),l+=p;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(o)),e.lineTo(Math.floor(i),Math.floor(_)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}(s,e)})),c.length?u=m.frame(t):l()})),a=l}));return{addFettis:function(e){return c=c.concat(e),f},canvas:e,promise:f,reset:function(){u&&m.cancel(u),a&&a()}}}(e,T,f,n,i)).promise}function v(n){var r=c||g(n,"disableForReducedMotion",Boolean),o=g(n,"zIndex",Number);if(r&&h)return l((function(e){e()}));u&&_?e=_.canvas:u&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(o),document.body.appendChild(e)),a&&!p&&f(e);var i={width:e.width,height:e.height};function v(){if(s){var t={getBoundingClientRect:function(){if(!u)return e.getBoundingClientRect()}};return f(t),void s.postMessage({resize:{width:t.width,height:t.height}})}i.width=i.height=null}function m(){_=null,a&&t.removeEventListener("resize",v),u&&e&&(document.body.removeChild(e),e=null,p=!1)}return s&&!p&&s.init(e),p=!0,s&&(e.__confetti_initialized=!0),a&&t.addEventListener("resize",v,!1),s?s.fire(n,i,m):d(n,i,m)}return v.reset=function(){s&&s.reset(),_&&_.reset()},v}function N(){return v||(v=E(null,{useWorker:!0,resize:!0})),v}n.exports=function(){return N().apply(this,arguments)},n.exports.reset=function(){N().reset()},n.exports.create=E}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),r,!1);const o=r.exports;r.exports.create},9823:(e,t,n)=>{n.d(t,{so:()=>o});var r=n(5776);function o(e){return{render(t){(0,r.sY)(t,e)},unmount(){(0,r.uy)(e)}}}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8391)}])},8391:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ce}});var a=r(5893);function s(e,t,r,a,s,o,n){try{var i=e[o](n),c=i.value}catch(l){return void r(l)}i.done?t(c):Promise.resolve(c).then(a,s)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var n=e.apply(t,r);function i(e){s(n,a,o,i,c,"next",e)}function c(e){s(n,a,o,i,c,"throw",e)}i(void 0)}))}}var n=r(655),i=r(8767),c=r(7294);function l(){return(0,a.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,a.jsxs)("svg",{className:"animate-spin h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}let d={data:""},u=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||d,f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,h=/\n+/g,m=(e,t)=>{let r="",a="",s="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":a+="f"==o[1]?m(n,o):o+"{"+m(n,"k"==o[1]?"":t)+"}":"object"==typeof n?a+=m(n,t?t.replace(/([^,])+/g,(e=>o.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=m.p?m.p(o,n):o+":"+n+";")}return r+(t&&s?t+"{"+s+"}":s)+a},g={},x=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+x(e[r]);return t}return e},b=(e,t,r,a,s)=>{let o=x(e),n=g[o]||(g[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!g[n]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=f.exec(e.replace(p,""));)t[4]?a.shift():t[3]?(r=t[3].replace(h," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(h," ").trim();return a[0]})(e);g[n]=m(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let i=r&&g.g?g.g:null;return r&&(g.g=g[n]),((e,t,r,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(g[n],t,a,i),n},y=(e,t,r)=>e.reduce(((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==o?"":o)}),"");function v(e){let t=this||{},r=e.call?e(t.p):e;return b(r.unshift?r.raw?y(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,u(t.target),t.g,t.o,t.k)}v.bind({g:1});let w,j,k,N=v.bind({k:1});function E(e,t){let r=this||{};return function(){let a=arguments;function s(o,n){let i=Object.assign({},o),c=i.className||s.className;r.p=Object.assign({theme:j&&j()},i),r.o=/ *go\d+/.test(c),i.className=v.apply(r,a)+(c?" "+c:""),t&&(i.ref=n);let l=e;return e[0]&&(l=i.as||e,delete i.as),k&&l[0]&&k(i),w(l,i)}return t?t(s):s}}var _=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,C=(()=>{let e=0;return()=>(++e).toString()})(),$=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),L=new Map,M=e=>{if(L.has(e))return;let t=setTimeout((()=>{L.delete(e),T({type:4,toastId:e})}),1e3);L.set(e,t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=L.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?z(e,{type:1,toast:r}):z(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?M(a):e.toasts.forEach((e=>{M(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+s})))}}},A=[],S={toasts:[],pausedAt:void 0},T=e=>{S=z(S,e),A.forEach((e=>{e(S)}))},I=e=>(t,r)=>{let a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}))(t,e,r);return T({type:2,toast:a}),a.id},O=(e,t)=>I("blank")(e,t);O.error=I("error"),O.success=I("success"),O.loading=I("loading"),O.custom=I("custom"),O.dismiss=e=>{T({type:3,toastId:e})},O.remove=e=>T({type:4,toastId:e}),O.promise=(e,t,r)=>{let a=O.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>(O.success(_(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e))).catch((e=>{O.error(_(t.error,e),{id:a,...r,...null==r?void 0:r.error})})),e};var F=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=N`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=N`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,P=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=N`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,W=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,K=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Q=N`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,V=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,X=E("div")`
  position: absolute;
`,q=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,R=N`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${R} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?c.createElement(Z,null,t):t:"blank"===r?null:c.createElement(q,null,c.createElement(W,{...a}),"loading"!==r&&c.createElement(X,null,"error"===r?c.createElement(P,{...a}):c.createElement(V,{...a})))},J=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,U=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Y=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ee=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;c.memo((({toast:e,position:t,style:r,children:a})=>{let s=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,s]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(r),U(r)];return{animation:t?`${N(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${N(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=c.createElement(G,{toast:e}),n=c.createElement(ee,{...e.ariaProps},_(e.message,e));return c.createElement(Y,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:o,message:n}):c.createElement(c.Fragment,null,o,n))}));!function(e,t,r,a){m.p=t,w=e,j=r,k=a}(c.createElement);v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var te=O,re=function(){var e=o((function(e){return(0,n.__generator)(this,(function(t){switch(t.label){case 0:return[4,fetch("http://128.199.143.136/api/set-cache?key="+e)];case 1:return[2,t.sent().json()]}}))}));return function(t){return e.apply(this,arguments)}}(),ae=function(e){var t=e.cacheKey,r=e.cacheName,s=(e.cacheExpiredAt,e.isId),o=(0,i.useQuery)([t],(function(){return re(t)}),{staleTime:1/0,enabled:!1}),n=o.isLoading,l=o.isError,d=o.isSuccess,u=(o.data,o.refetch),f=(0,c.useState)(""),p=(f[0],f[1]);return d&&O.success("Successfully cached!"),l&&O.error("Failed to reset cache!"),(0,a.jsxs)("div",{className:"flex space-x-2 justify-between items-center rounded-xl bg-white dark:bg-gray-700 p-4 shadow-lg ",children:[(0,a.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,a.jsx)("div",{className:"w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-800",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-gray-400",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})}),(0,a.jsxs)("div",{className:"w-40 sm:w-full md:w-full lg:w-full overflow-hidden",children:[(0,a.jsx)("h2",{className:"font-semibold dark:text-gray-200",children:r}),(0,a.jsx)("p",{className:"w-full text-sm text-red-500 bg-gray-100 dark:bg-gray-800 px-3 py-2 my-2",children:(0,a.jsx)("code",{children:t})}),s&&(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)("span",{className:"text-gray-400 text-lg",children:"ID:"}),(0,a.jsx)("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-1",type:"text",onChange:function(e){return p(e.target.value)}})]})]})]}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("button",{onClick:function(){return u()},className:"w-10 h-10 flex items-center justify-center bg-green-200 outline-none border-green-500 border text-gray-700 rounded-full group hover:bg-green-500 hover:text-white hover:border-transparent active:scale-95 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed focus:text-white focus:border-transparent focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:bg-green-500",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 ".concat(n&&"animate-spin"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})})})})]})},se=function(){var e=o((function(){return(0,n.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch("http://128.199.143.136/api/clear-cache")];case 1:return[2,e.sent().json()]}}))}));return function(){return e.apply(this,arguments)}}();function oe(){var e=(0,i.useQuery)(["clear-cache"],(function(){return se()}),{staleTime:1/0,enabled:!1}),t=e.isLoading,r=e.isError,s=e.isSuccess,o=(e.data,e.refetch);return s&&te.success("Successfully cached!"),r&&te.error("Failed to reset cache!"),(0,a.jsxs)("div",{className:"w-full flex space-x-6 justify-between items-center rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-full border border-red-100 dark:border-red-900 bg-gray-50 dark:bg-gray-800",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-gray-400",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})}),(0,a.jsxs)("div",{className:"ml-4",children:[(0,a.jsx)("h2",{className:"font-semibold dark:text-gray-200 text-lg font-roboto",children:"Clear Entire Cached Data At Once"}),(0,a.jsx)("p",{className:"text-sm text-red-500 bg-gray-100 dark:bg-gray-700 px-3 py-2 my-2",children:(0,a.jsx)("code",{children:"Cache::flush();"})})]})]}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("button",{onClick:function(){return o()},className:"w-10 h-10 flex items-center justify-center bg-red-200 outline-none border-red-500 border text-gray-700 rounded-full group hover:bg-red-500 hover:text-white hover:border-transparent active:scale-95 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed focus:text-white focus:border-transparent focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:bg-red-500",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 ".concat(t&&"animate-spin"),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})})})})]})}var ne=function(){var e=o((function(){return(0,n.__generator)(this,(function(e){switch(e.label){case 0:return[4,fetch("http://128.199.143.136/api/get-cache-keys")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent().data]}}))}));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,i.useQuery)(["cacheKeys"],(function(){return ne()}),{staleTime:1/0}),t=e.isLoading,r=(e.isError,e.isSuccess,e.data);e.refetch;return t?(0,a.jsx)("div",{className:"h-screen dark:bg-gray-900 dark:text-gray-200",children:(0,a.jsx)(l,{})}):(0,a.jsxs)("div",{className:"w-full flex flex-col justify-center items-center",children:[(0,a.jsx)("h2",{className:"mb-4 text-2xl font-bold font-roboto dark:text-gray-200",children:"Manage Redis Cache"}),(0,a.jsx)(oe,{}),(0,a.jsx)("div",{className:"mt-4 w-full grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2",children:r&&r.map((function(e,t){return(0,a.jsx)(ae,{cacheKey:e.toString(),cacheName:e.toString()},t)}))})]})},ce=function(){return(0,a.jsx)("div",{className:"h-full min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-12",children:(0,a.jsx)(ie,{})})}}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
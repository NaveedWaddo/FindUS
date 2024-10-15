import{r as o,a as F,R as I}from"./index-76fb7be0.js";import{j as x}from"./jsx-runtime-ffb262ed.js";import{_ as c}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import{j as S,_ as T}from"./styled-f00a956c.js";import{r as D}from"./index-d3ea75b5.js";function L(e){return typeof e=="string"}function j(e,t,n){return e===void 0||L(e)?t:c({},t,{ownerState:c({},t.ownerState,n)})}const H={disableDefaultClasses:!1},K=o.createContext(H);function se(e){const{disableDefaultClasses:t}=o.useContext(K);return n=>t?"":e(n)}function _(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(s=>s.match(/^on[A-Z]/)&&typeof e[s]=="function"&&!t.includes(s)).forEach(s=>{n[s]=e[s]}),n}function O(e,t,n){return typeof e=="function"?e(t,n):e}function re(e){return e&&e.ownerDocument||document}function E(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const $=typeof window<"u"?o.useLayoutEffect:o.useEffect,b=$;let w=0;function A(e){const[t,n]=o.useState(e),s=e||t;return o.useEffect(()=>{t==null&&(w+=1,n(`mui-${w}`))},[t]),s}const R=F["useId".toString()];function oe(e){if(R!==void 0){const t=R();return e??t}return A(e)}function ue({controlled:e,default:t,name:n,state:s="value"}){const{current:r}=o.useRef(e!==void 0),[u,l]=o.useState(t),i=r?e:u,f=o.useCallback(a=>{r||l(a)},[]);return[i,f]}function le(e){const t=o.useRef(e);return b(()=>{t.current=e}),o.useCallback((...n)=>(0,t.current)(...n),[])}function V(...e){return o.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{E(n,t)})},e)}let m=!0,g=!1,N;const W={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function M(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&W[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function U(e){e.metaKey||e.altKey||e.ctrlKey||(m=!0)}function v(){m=!1}function B(){this.visibilityState==="hidden"&&g&&(m=!0)}function G(e){e.addEventListener("keydown",U,!0),e.addEventListener("mousedown",v,!0),e.addEventListener("pointerdown",v,!0),e.addEventListener("touchstart",v,!0),e.addEventListener("visibilitychange",B,!0)}function Z(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return m||M(t)}function ae(){const e=o.useCallback(r=>{r!=null&&G(r.ownerDocument)},[]),t=o.useRef(!1);function n(){return t.current?(g=!0,window.clearTimeout(N),N=window.setTimeout(()=>{g=!1},100),t.current=!1,!0):!1}function s(r){return Z(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:s,onBlur:n,ref:e}}function k(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function X(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:s,externalForwardedProps:r,className:u}=e;if(!t){const C=S(r==null?void 0:r.className,s==null?void 0:s.className,u,n==null?void 0:n.className),P=c({},n==null?void 0:n.style,r==null?void 0:r.style,s==null?void 0:s.style),h=c({},n,r,s);return C.length>0&&(h.className=C),Object.keys(P).length>0&&(h.style=P),{props:h,internalRef:void 0}}const l=_(c({},r,s)),i=k(s),f=k(r),a=t(l),d=S(a==null?void 0:a.className,n==null?void 0:n.className,u,r==null?void 0:r.className,s==null?void 0:s.className),p=c({},a==null?void 0:a.style,n==null?void 0:n.style,r==null?void 0:r.style,s==null?void 0:s.style),y=c({},a,n,f,i);return d.length>0&&(y.className=d),Object.keys(p).length>0&&(y.style=p),{props:y,internalRef:a.ref}}const q=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ie(e){var t;const{elementType:n,externalSlotProps:s,ownerState:r,skipResolvingSlotProps:u=!1}=e,l=T(e,q),i=u?{}:O(s,r),{props:f,internalRef:a}=X(c({},l,{externalSlotProps:i})),d=V(a,i==null?void 0:i.ref,(t=e.additionalProps)==null?void 0:t.ref);return j(n,c({},f,{ref:d}),r)}function z(e){return typeof e=="function"?e():e}const J=o.forwardRef(function(t,n){const{children:s,container:r,disablePortal:u=!1}=t,[l,i]=o.useState(null),f=V(o.isValidElement(s)?s.ref:null,n);if(b(()=>{u||i(z(r)||document.body)},[r,u]),b(()=>{if(l&&!u)return E(n,l),()=>{E(n,null)}},[n,l,u]),u){if(o.isValidElement(s)){const a={ref:f};return o.cloneElement(s,a)}return x.jsx(o.Fragment,{children:s})}return x.jsx(o.Fragment,{children:l&&D.createPortal(s,l)})}),ce=J,fe=I.createContext(null);export{ce as P,fe as T,oe as a,le as b,ae as c,V as d,j as e,b as f,ie as g,se as h,L as i,re as o,O as r,E as s,ue as u};
//# sourceMappingURL=TransitionGroupContext-b5cfe060.js.map

import{g as me}from"./_commonjsHelpers-de833af9.js";import{_ as be}from"./_interop_require_wildcard-408360b9.js";import{r as de}from"./index-76fb7be0.js";import{r as ve,a as ye,b as Pe,c as Re,d as Ee,e as Te,f as ge,g as Oe,h as Ce,i as Le}from"./add-base-path-6b389b03.js";import{r as Ae}from"./router-context-0eea364d.js";import{a as Ie}from"./app-router-context-22d29efd.js";var Q={exports:{}},B={exports:{}},ce;function Ne(){return ce||(ce=1,function(O,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIntersection",{enumerable:!0,get:function(){return S}});const h=de,r=ve(),b=typeof IntersectionObserver=="function",v=new Map,E=[];function k(i){const n={root:i.root||null,margin:i.rootMargin||""},c=E.find(p=>p.root===n.root&&p.margin===n.margin);let u;if(c&&(u=v.get(c),u))return u;const s=new Map,d=new IntersectionObserver(p=>{p.forEach(m=>{const C=s.get(m.target),j=m.isIntersecting||m.intersectionRatio>0;C&&j&&C(j)})},i);return u={id:n,observer:d,elements:s},E.push(n),v.set(n,u),u}function M(i,n,c){const{id:u,observer:s,elements:d}=k(c);return d.set(i,n),s.observe(i),function(){if(d.delete(i),s.unobserve(i),d.size===0){s.disconnect(),v.delete(u);const m=E.findIndex(C=>C.root===u.root&&C.margin===u.margin);m>-1&&E.splice(m,1)}}}function S(i){let{rootRef:n,rootMargin:c,disabled:u}=i;const s=u||!b,[d,p]=(0,h.useState)(!1),m=(0,h.useRef)(null),C=(0,h.useCallback)(I=>{m.current=I},[]);(0,h.useEffect)(()=>{if(b){if(s||d)return;const I=m.current;if(I&&I.tagName)return M(I,t=>t&&p(t),{root:n==null?void 0:n.current,rootMargin:c})}else if(!d){const I=(0,r.requestIdleCallback)(()=>p(!0));return()=>(0,r.cancelIdleCallback)(I)}},[s,c,n,d,m.current]);const j=(0,h.useCallback)(()=>{p(!1)},[]);return[C,d,j]}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),O.exports=e.default)}(B,B.exports)),B.exports}var G={exports:{}},X={exports:{}},le;function ke(){return le||(le=1,function(O,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"normalizeLocalePath",{enumerable:!0,get:function(){return h}});const h=(r,b)=>({}).__NEXT_I18N_SUPPORT?ye().normalizeLocalePath(r,b):{pathname:r,detectedLocale:void 0};(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),O.exports=e.default)}(X,X.exports)),X.exports}var fe;function Me(){return fe||(fe=1,function(O,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getDomainLocale",{enumerable:!0,get:function(){return b}});const h=Pe(),r={}.__NEXT_ROUTER_BASEPATH||"";function b(v,E,k,M){if({}.__NEXT_I18N_SUPPORT){const S=ke().normalizeLocalePath,i=Re().detectDomainLocale,n=E||S(v,k).detectedLocale,c=i(M,void 0,n);if(c){const u="http"+(c.http?"":"s")+"://",s=n===c.defaultLocale?"":"/"+n;return""+u+c.domain+(0,h.normalizePathTrailingSlash)(""+r+s+v)}return!1}else return!1}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),O.exports=e.default)}(G,G.exports)),G.exports}var $={exports:{}},se;function Se(){return se||(se=1,function(O,e){Object.defineProperty(e,"__esModule",{value:!0});function h(n,c){for(var u in c)Object.defineProperty(n,u,{enumerable:!0,get:c[u]})}h(e,{PrefetchKind:function(){return i},ACTION_REFRESH:function(){return r},ACTION_NAVIGATE:function(){return b},ACTION_RESTORE:function(){return v},ACTION_SERVER_PATCH:function(){return E},ACTION_PREFETCH:function(){return k},ACTION_FAST_REFRESH:function(){return M},ACTION_SERVER_ACTION:function(){return S}});const r="refresh",b="navigate",v="restore",E="server-patch",k="prefetch",M="fast-refresh",S="server-action";var i;(function(n){n.AUTO="auto",n.FULL="full",n.TEMPORARY="temporary"})(i||(i={})),(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),O.exports=e.default)}($,$.exports)),$.exports}(function(O,e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return Z}});const r=be._(de),b=Ee(),v=Te(),E=ge(),k=Oe(),M=Ce(),S=Ae,i=Ie,n=Ne(),c=Me(),u=Le(),s=Se(),d=new Set;function p(t,y,P,f,N,T){if(typeof window>"u"||!T&&!(0,v.isLocalURL)(y))return;if(!f.bypassPrefetchedCheck){const q=typeof f.locale<"u"?f.locale:"locale"in t?t.locale:void 0,U=y+"%"+P+"%"+q;if(d.has(U))return;d.add(U)}const D=T?t.prefetch(y,N):t.prefetch(y,P,f);Promise.resolve(D).catch(q=>{})}function m(t){const P=t.currentTarget.getAttribute("target");return P&&P!=="_self"||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&t.nativeEvent.which===2}function C(t,y,P,f,N,T,D,q,U,W){const{nodeName:Y}=t.currentTarget;if(Y.toUpperCase()==="A"&&(m(t)||!U&&!(0,v.isLocalURL)(P)))return;t.preventDefault();const g=()=>{const F=D??!0;"beforePopState"in y?y[N?"replace":"push"](P,f,{shallow:T,locale:q,scroll:F}):y[N?"replace":"push"](f||P,{forceOptimisticNavigation:!W,scroll:F})};U?r.default.startTransition(g):g()}function j(t){return typeof t=="string"?t:(0,E.formatUrl)(t)}const Z=r.default.forwardRef(function(y,P){let f;const{href:N,as:T,children:D,prefetch:q=null,passHref:U,replace:W,shallow:Y,scroll:x,locale:g,onClick:F,onMouseEnter:ee,onTouchStart:te,legacyBehavior:R={}.__NEXT_NEW_LINK_BEHAVIOR===!1,...pe}=y;f=D,R&&(typeof f=="string"||typeof f=="number")&&(f=r.default.createElement("a",null,f));const a=r.default.useContext(S.RouterContext),_e=r.default.useContext(i.AppRouterContext),L=a??_e,H=!a,V=q!==!1,w=q===null?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:A,as:_}=r.default.useMemo(()=>{if(!a){const ie=j(N);return{href:ie,as:T?j(T):ie}}const[o,J]=(0,b.resolveHref)(a,N,!0);return{href:o,as:T?(0,b.resolveHref)(a,T):J||o}},[a,N,T]),re=r.default.useRef(A),ne=r.default.useRef(_);let l;R&&(l=r.default.Children.only(f));const z=R?l&&typeof l=="object"&&l.ref:P,[oe,ue,ae]=(0,n.useIntersection)({rootMargin:"200px"}),he=r.default.useCallback(o=>{(ne.current!==_||re.current!==A)&&(ae(),ne.current=_,re.current=A),oe(o),z&&(typeof z=="function"?z(o):typeof z=="object"&&(z.current=o))},[_,z,A,ae,oe]);r.default.useEffect(()=>{L&&(!ue||!V||p(L,A,_,{locale:g},{kind:w},H))},[_,A,ue,g,V,a==null?void 0:a.locale,L,H,w]);const K={ref:he,onClick(o){!R&&typeof F=="function"&&F(o),R&&l.props&&typeof l.props.onClick=="function"&&l.props.onClick(o),L&&(o.defaultPrevented||C(o,L,A,_,W,Y,x,g,H,V))},onMouseEnter(o){!R&&typeof ee=="function"&&ee(o),R&&l.props&&typeof l.props.onMouseEnter=="function"&&l.props.onMouseEnter(o),L&&(!V&&H||p(L,A,_,{locale:g,priority:!0,bypassPrefetchedCheck:!0},{kind:w},H))},onTouchStart(o){!R&&typeof te=="function"&&te(o),R&&l.props&&typeof l.props.onTouchStart=="function"&&l.props.onTouchStart(o),L&&(!V&&H||p(L,A,_,{locale:g,priority:!0,bypassPrefetchedCheck:!0},{kind:w},H))}};if((0,k.isAbsoluteUrl)(_))K.href=_;else if(!R||U||l.type==="a"&&!("href"in l.props)){const o=typeof g<"u"?g:a==null?void 0:a.locale,J=(a==null?void 0:a.isLocaleDomain)&&(0,c.getDomainLocale)(_,o,a==null?void 0:a.locales,a==null?void 0:a.domainLocales);K.href=J||(0,u.addBasePath)((0,M.addLocale)(_,o,a==null?void 0:a.defaultLocale))}return R?r.default.cloneElement(l,K):r.default.createElement("a",{...pe,...K},f)});(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),O.exports=e.default)})(Q,Q.exports);var je=Q.exports,qe=je;const we=me(qe);export{we as L};
//# sourceMappingURL=link-8fb8b7fe.js.map

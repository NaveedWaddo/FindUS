import{g as Ie}from"./_commonjsHelpers-de833af9.js";import{a as ae,_ as G}from"./_interop_require_wildcard-408360b9.js";import{r as X}from"./index-76fb7be0.js";import{r as Pe}from"./index-d3ea75b5.js";import{r as Oe}from"./head-manager-context-283aaa20.js";import{r as je}from"./router-context-0eea364d.js";function Ae(i,n){for(var f=0;f<n.length;f++){const d=n[f];if(typeof d!="string"&&!Array.isArray(d)){for(const t in d)if(t!=="default"&&!(t in i)){const l=Object.getOwnPropertyDescriptor(d,t);l&&Object.defineProperty(i,t,l.get?l:{enumerable:!0,get:()=>d[t]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var ye={},se={},be={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return n}});let n=f=>{}})(be);var ve={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return n}});function n(f){let{widthInt:d,heightInt:t,blurWidth:l,blurHeight:y,blurDataURL:b,objectFit:c}=f;const j=l&&y?"1":"20",o=l||d,g=y||t,s=b.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&g?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+o+" "+g+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+j+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+b+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+(c==="contain"?"xMidYMid":c==="cover"?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+b+"'/%3E%3C/svg%3E"}})(ve);var Q={};(function(i){Object.defineProperty(i,"__esModule",{value:!0});function n(t,l){for(var y in l)Object.defineProperty(t,y,{enumerable:!0,get:l[y]})}n(i,{VALID_LOADERS:function(){return f},imageConfigDefault:function(){return d}});const f=["default","imgix","cloudinary","akamai","custom"],d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}})(Q);(function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return j}});const n=ve,f=Q;function d(o){return o.default!==void 0}function t(o){return o.src!==void 0}function l(o){return typeof o=="object"&&(d(o)||t(o))}function y(o){return typeof o>"u"?o:typeof o=="number"?Number.isFinite(o)?o:NaN:typeof o=="string"&&/^[0-9]+$/.test(o)?parseInt(o,10):NaN}function b(o,g,s){let{deviceSizes:w,allSizes:v}=o;if(s){const I=/(^|\s)(1?\d?\d)vw/g,p=[];for(let e;e=I.exec(s);e)p.push(parseInt(e[2]));if(p.length){const e=Math.min(...p)*.01;return{widths:v.filter(a=>a>=w[0]*e),kind:"w"}}return{widths:v,kind:"w"}}return typeof g!="number"?{widths:w,kind:"w"}:{widths:[...new Set([g,g*2].map(I=>v.find(p=>p>=I)||v[v.length-1]))],kind:"x"}}function c(o){let{config:g,src:s,unoptimized:w,width:v,quality:z,sizes:I,loader:p}=o;if(w)return{src:s,srcSet:void 0,sizes:void 0};const{widths:e,kind:a}=b(g,v,I),r=e.length-1;return{sizes:!I&&a==="w"?"100vw":I,srcSet:e.map((u,_)=>p({config:g,src:s,quality:z,width:u})+" "+(a==="w"?u:_+1)+a).join(", "),src:p({config:g,src:s,quality:z,width:e[r]})}}function j(o,g){let{src:s,sizes:w,unoptimized:v=!1,priority:z=!1,loading:I,className:p,quality:e,width:a,height:r,fill:u=!1,style:_,onLoad:S,onLoadingComplete:C,placeholder:q="empty",blurDataURL:m,fetchPriority:A,layout:P,objectFit:L,objectPosition:W,lazyBoundary:V,lazyRoot:B,...M}=o;const{imgConf:x,showAltText:k,blurComplete:H,defaultLoader:F}=g;let O,D=x||f.imageConfigDefault;if("allSizes"in D)O=D;else{const h=[...D.deviceSizes,...D.imageSizes].sort((U,$)=>U-$),R=D.deviceSizes.sort((U,$)=>U-$);O={...D,allSizes:h,deviceSizes:R}}let E=M.loader||F;delete M.loader,delete M.srcSet;const Y="__next_img_default"in E;if(Y){if(O.loader==="custom")throw new Error('Image with src "'+s+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{const h=E;E=R=>{const{config:U,...$}=R;return h($)}}if(P){P==="fill"&&(u=!0);const h={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},R={responsive:"100vw",fill:"100vw"},U=h[P];U&&(_={..._,...U});const $=R[P];$&&!w&&(w=$)}let ue="",T=y(a),N=y(r),ce,le;if(l(s)){const h=d(s)?s.default:s;if(!h.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(h));if(!h.height||!h.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(h));if(ce=h.blurWidth,le=h.blurHeight,m=m||h.blurDataURL,ue=h.src,!u){if(!T&&!N)T=h.width,N=h.height;else if(T&&!N){const R=T/h.width;N=Math.round(h.height*R)}else if(!T&&N){const R=N/h.height;T=Math.round(h.width*R)}}}s=typeof s=="string"?s:ue;let fe=!z&&(I==="lazy"||typeof I>"u");(!s||s.startsWith("data:")||s.startsWith("blob:"))&&(v=!0,fe=!1),O.unoptimized&&(v=!0),Y&&s.endsWith(".svg")&&!O.dangerouslyAllowSVG&&(v=!0),z&&(A="high");const Ce=y(e),J=Object.assign(u?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:W}:{},k?{}:{color:"transparent"},_),Ee=q==="blur"&&m&&!H?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:T,heightInt:N,blurWidth:ce,blurHeight:le,blurDataURL:m,objectFit:J.objectFit})+'")'}:{},Z=c({config:O,src:s,unoptimized:v,width:T,quality:Ce,sizes:w,loader:E});return{props:{...M,loading:fe?"lazy":I,fetchPriority:A,width:T,height:N,decoding:"async",className:p,style:{...J,...Ee},sizes:Z.sizes,srcSet:Z.srcSet,src:Z.src},meta:{unoptimized:v,priority:z,placeholder:q,fill:u}}}})(se);var ie={exports:{}},K={exports:{}},ee={},de;function Me(){return de||(de=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return y}});const f=ae._(X),d=typeof window>"u",t=d?()=>{}:f.useLayoutEffect,l=d?()=>{}:f.useEffect;function y(b){const{headManager:c,reduceComponentsToState:j}=b;function o(){if(c&&c.mountedInstances){const s=f.Children.toArray(Array.from(c.mountedInstances).filter(Boolean));c.updateHead(j(s,b))}}if(d){var g;c==null||(g=c.mountedInstances)==null||g.add(b.children),o()}return t(()=>{var s;return c==null||(s=c.mountedInstances)==null||s.add(b.children),()=>{var w;c==null||(w=c.mountedInstances)==null||w.delete(b.children)}}),t(()=>(c&&(c._pendingUpdate=o),()=>{c&&(c._pendingUpdate=o)})),l(()=>(c&&c._pendingUpdate&&(c._pendingUpdate(),c._pendingUpdate=null),()=>{c&&c._pendingUpdate&&(c._pendingUpdate(),c._pendingUpdate=null)})),null}}(ee)),ee}var te={},pe;function ze(){return pe||(pe=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"AmpStateContext",{enumerable:!0,get:function(){return d}});const d=G._(X).default.createContext({})}(te)),te}var ne={},ge;function qe(){return ge||(ge=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isInAmpMode",{enumerable:!0,get:function(){return n}});function n(f){let{ampFirst:d=!1,hybrid:t=!1,hasQuery:l=!1}=f===void 0?{}:f;return d||t&&l}}(ne)),ne}var me;function xe(){return me||(me=1,function(i,n){"use client";Object.defineProperty(n,"__esModule",{value:!0});function f(p,e){for(var a in e)Object.defineProperty(p,a,{enumerable:!0,get:e[a]})}f(n,{defaultHead:function(){return o},default:function(){return I}});const d=G,l=ae._(X),y=d._(Me()),b=ze(),c=Oe(),j=qe();function o(p){p===void 0&&(p=!1);const e=[l.default.createElement("meta",{charSet:"utf-8"})];return p||e.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function g(p,e){return typeof e=="string"||typeof e=="number"?p:e.type===l.default.Fragment?p.concat(l.default.Children.toArray(e.props.children).reduce((a,r)=>typeof r=="string"||typeof r=="number"?a:a.concat(r),[])):p.concat(e)}const s=["name","httpEquiv","charSet","itemProp"];function w(){const p=new Set,e=new Set,a=new Set,r={};return u=>{let _=!0,S=!1;if(u.key&&typeof u.key!="number"&&u.key.indexOf("$")>0){S=!0;const C=u.key.slice(u.key.indexOf("$")+1);p.has(C)?_=!1:p.add(C)}switch(u.type){case"title":case"base":e.has(u.type)?_=!1:e.add(u.type);break;case"meta":for(let C=0,q=s.length;C<q;C++){const m=s[C];if(u.props.hasOwnProperty(m))if(m==="charSet")a.has(m)?_=!1:a.add(m);else{const A=u.props[m],P=r[m]||new Set;(m!=="name"||!S)&&P.has(A)?_=!1:(P.add(A),r[m]=P)}}break}return _}}function v(p,e){const{inAmpMode:a}=e;return p.reduce(g,[]).reverse().concat(o(a).reverse()).filter(w()).reverse().map((r,u)=>{const _=r.key||u;if({}.__NEXT_OPTIMIZE_FONTS&&!a&&r.type==="link"&&r.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(S=>r.props.href.startsWith(S))){const S={...r.props||{}};return S["data-href"]=S.href,S.href=void 0,S["data-optimized-fonts"]=!0,l.default.cloneElement(r,S)}return l.default.cloneElement(r,{key:_})})}function z(p){let{children:e}=p;const a=(0,l.useContext)(b.AmpStateContext),r=(0,l.useContext)(c.HeadManagerContext);return l.default.createElement(y.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,j.isInAmpMode)(a)},e)}const I=z;(typeof n.default=="function"||typeof n.default=="object"&&n.default!==null)&&typeof n.default.__esModule>"u"&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),i.exports=n.default)}(K,K.exports)),K.exports}var re={},_e;function Te(){return _e||(_e=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return t}});const f=G._(X),d=Q,t=f.default.createContext(d.imageConfigDefault)}(re)),re}var oe={},he;function we(){return he||(he=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return f}});function n(d){let{config:t,src:l,width:y,quality:b}=d;return t.path+"?url="+encodeURIComponent(l)+"&w="+y+"&q="+(b||75)+({}.NEXT_DEPLOYMENT_ID?"&dpl="+{}.NEXT_DEPLOYMENT_ID:"")}n.__next_img_default=!0;const f=n}(oe)),oe}(function(i,n){"use client";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Image",{enumerable:!0,get:function(){return p}});const f=G,t=ae._(X),l=Pe,y=f._(xe()),b=se,c=Q,j=Te(),o=je,g=f._(we()),s={}.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function w(e,a,r,u,_,S){const C=e==null?void 0:e.src;if(!e||e["data-loaded-src"]===C)return;e["data-loaded-src"]=C,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!e.parentElement||!e.isConnected)){if(a==="blur"&&_(!0),r!=null&&r.current){const m=new Event("load");Object.defineProperty(m,"target",{writable:!1,value:e});let A=!1,P=!1;r.current({...m,nativeEvent:m,currentTarget:e,target:e,isDefaultPrevented:()=>A,isPropagationStopped:()=>P,persist:()=>{},preventDefault:()=>{A=!0,m.preventDefault()},stopPropagation:()=>{P=!0,m.stopPropagation()}})}u!=null&&u.current&&u.current(e)}})}function v(e){const[a,r]=t.version.split("."),u=parseInt(a,10),_=parseInt(r,10);return u>18||u===18&&_>=3?{fetchPriority:e}:{fetchpriority:e}}const z=(0,t.forwardRef)((e,a)=>{let{src:r,srcSet:u,sizes:_,height:S,width:C,decoding:q,className:m,style:A,fetchPriority:P,placeholder:L,loading:W,unoptimized:V,fill:B,onLoadRef:M,onLoadingCompleteRef:x,setBlurComplete:k,setShowAltText:H,onLoad:F,onError:O,...D}=e;return t.default.createElement("img",{...D,...v(P),loading:W,width:C,height:S,decoding:q,"data-nimg":B?"fill":"1",className:m,style:A,sizes:_,srcSet:u,src:r,ref:(0,t.useCallback)(E=>{a&&(typeof a=="function"?a(E):typeof a=="object"&&(a.current=E)),E&&(O&&(E.src=E.src),E.complete&&w(E,L,M,x,k))},[r,L,M,x,k,O,V,a]),onLoad:E=>{const Y=E.currentTarget;w(Y,L,M,x,k)},onError:E=>{H(!0),L==="blur"&&k(!0),O&&O(E)}})});function I(e){let{isAppRouter:a,imgAttributes:r}=e;const u={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...v(r.fetchPriority)};return a?((0,l.preload)(r.src,u),null):t.default.createElement(y.default,null,t.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...u}))}const p=(0,t.forwardRef)((e,a)=>{const u=!(0,t.useContext)(o.RouterContext),_=(0,t.useContext)(j.ImageConfigContext),S=(0,t.useMemo)(()=>{const x=s||_||c.imageConfigDefault,k=[...x.deviceSizes,...x.imageSizes].sort((F,O)=>F-O),H=x.deviceSizes.sort((F,O)=>F-O);return{...x,allSizes:k,deviceSizes:H}},[_]),{onLoad:C,onLoadingComplete:q}=e,m=(0,t.useRef)(C);(0,t.useEffect)(()=>{m.current=C},[C]);const A=(0,t.useRef)(q);(0,t.useEffect)(()=>{A.current=q},[q]);const[P,L]=(0,t.useState)(!1),[W,V]=(0,t.useState)(!1),{props:B,meta:M}=(0,b.getImgProps)(e,{defaultLoader:g.default,imgConf:S,blurComplete:P,showAltText:W});return t.default.createElement(t.default.Fragment,null,t.default.createElement(z,{...B,unoptimized:M.unoptimized,placeholder:M.placeholder,fill:M.fill,onLoadRef:m,onLoadingCompleteRef:A,setBlurComplete:L,setShowAltText:V,ref:a}),M.priority?t.default.createElement(I,{isAppRouter:u,imgAttributes:B}):null)});(typeof n.default=="function"||typeof n.default=="object"&&n.default!==null)&&typeof n.default.__esModule>"u"&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),i.exports=n.default)})(ie,ie.exports);var Re=ie.exports;(function(i){Object.defineProperty(i,"__esModule",{value:!0});function n(j,o){for(var g in o)Object.defineProperty(j,g,{enumerable:!0,get:o[g]})}n(i,{default:function(){return c},unstable_getImgProps:function(){return b}});const f=G,d=se,t=be,l=Re,y=f._(we()),b=j=>{(0,t.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");const{props:o}=(0,d.getImgProps)(j,{defaultLoader:y.default,imgConf:{}.__NEXT_IMAGE_OPTS});for(const[g,s]of Object.entries(o))s===void 0&&delete o[g];return{props:o}},c=l.Image})(ye);var Se=ye;const Le=Ie(Se),He=Ae({__proto__:null,default:Le},[Se]);export{Le as I,He as N};
//# sourceMappingURL=image-b3c08ace.js.map

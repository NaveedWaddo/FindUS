import{r as s,R as h}from"./index-76fb7be0.js";import{D as d,X as c,I as g,y as v,l as y,o as E}from"./keyboard-1ed92671.js";function T(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(n=>setTimeout(()=>{throw n}))}function p(){let t=[],n={addEventListener(e,r,i,o){return e.addEventListener(r,i,o),n.add(()=>e.removeEventListener(r,i,o))},requestAnimationFrame(...e){let r=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...e){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...e))},setTimeout(...e){let r=setTimeout(...e);return n.add(()=>clearTimeout(r))},microTask(...e){let r={current:!0};return T(()=>{r.current&&e[0]()}),n.add(()=>{r.current=!1})},style(e,r,i){let o=e.style.getPropertyValue(r);return Object.assign(e.style,{[r]:i}),this.add(()=>{Object.assign(e.style,{[r]:o})})},group(e){let r=p();return e(r),this.add(()=>r.dispose())},add(e){return t.push(e),()=>{let r=t.indexOf(e);if(r>=0)for(let i of t.splice(r,1))i()}},dispose(){for(let e of t.splice(0))e()}};return n}function A(){let[t]=s.useState(p);return s.useEffect(()=>()=>t.dispose(),[t]),t}let b="div";var x=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(x||{});function F(t,n){let{features:e=1,...r}=t,i={ref:n,"aria-hidden":(e&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return c({ourProps:i,theirProps:r,slot:{},defaultTag:b,name:"Hidden"})}let M=d(F),m=s.createContext(null);function f(){let t=s.useContext(m);if(t===null){let n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,f),n}return t}function O(){let[t,n]=s.useState([]);return[t.length>0?t.join(" "):void 0,s.useMemo(()=>function(e){let r=E(o=>(n(a=>[...a,o]),()=>n(a=>{let u=a.slice(),l=u.indexOf(o);return l!==-1&&u.splice(l,1),u}))),i=s.useMemo(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return h.createElement(m.Provider,{value:i},e.children)},[n])]}let w="p";function P(t,n){let e=g(),{id:r=`headlessui-description-${e}`,...i}=t,o=f(),a=v(n);y(()=>o.register(r),[r,o.register]);let u={ref:a,...o.props,id:r};return c({ourProps:u,theirProps:i,slot:o.slot||{},defaultTag:w,name:o.name||"Description"})}let q=d(P),$=Object.assign(q,{});export{O as M,x as a,$ as b,M as c,p as o,A as p,T as t};
//# sourceMappingURL=description-160d9ca3.js.map

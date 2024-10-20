import{j as P}from"./jsx-runtime-ffb262ed.js";import{R as v,r as l}from"./index-76fb7be0.js";import{S as B,D as E,y as $,T as q,o as b,u as w,X as R,I as _,a as g,r as V}from"./keyboard-1ed92671.js";import{c as L,d as S,C as F,e as H}from"./open-closed-5dc80d5d.js";import{s as K}from"./use-resolve-button-type-03a91f48.js";import{c as U}from"./createReactComponent-d5b921f8.js";var z=U("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]]),M;let Q=(M=v.startTransition)!=null?M:function(e){e()};var X=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(X||{}),Y=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Y||{});let Z={0:e=>({...e,disclosureState:w(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},T=l.createContext(null);T.displayName="DisclosureContext";function N(e){let t=l.useContext(T);if(t===null){let s=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,N),s}return t}let j=l.createContext(null);j.displayName="DisclosureAPIContext";function A(e){let t=l.useContext(j);if(t===null){let s=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,A),s}return t}let O=l.createContext(null);O.displayName="DisclosurePanelContext";function G(){return l.useContext(O)}function J(e,t){return w(t.type,Z,e,t)}let W=l.Fragment;function ee(e,t){let{defaultOpen:s=!1,...o}=e,d=l.useRef(null),n=$(t,q(c=>{d.current=c},e.as===void 0||e.as===l.Fragment)),a=l.useRef(null),y=l.useRef(null),u=l.useReducer(J,{disclosureState:s?0:1,linkedPanel:!1,buttonRef:y,panelRef:a,buttonId:null,panelId:null}),[{disclosureState:i,buttonId:p},I]=u,f=b(c=>{I({type:1});let r=H(d);if(!r||!p)return;let m=(()=>c?c instanceof HTMLElement?c:c.current instanceof HTMLElement?c.current:r.getElementById(p):r.getElementById(p))();m==null||m.focus()}),x=l.useMemo(()=>({close:f}),[f]),k=l.useMemo(()=>({open:i===0,close:f}),[i,f]),D={ref:n};return v.createElement(T.Provider,{value:u},v.createElement(j.Provider,{value:x},v.createElement(L,{value:w(i,{0:S.Open,1:S.Closed})},R({ourProps:D,theirProps:o,slot:k,defaultTag:W,name:"Disclosure"}))))}let te="button";function ne(e,t){let s=_(),{id:o=`headlessui-disclosure-button-${s}`,...d}=e,[n,a]=N("Disclosure.Button"),y=G(),u=y===null?!1:y===n.panelId,i=l.useRef(null),p=$(i,t,u?null:n.buttonRef);l.useEffect(()=>{if(!u)return a({type:2,buttonId:o}),()=>{a({type:2,buttonId:null})}},[o,a,u]);let I=b(r=>{var m;if(u){if(n.disclosureState===1)return;switch(r.key){case g.Space:case g.Enter:r.preventDefault(),r.stopPropagation(),a({type:0}),(m=n.buttonRef.current)==null||m.focus();break}}else switch(r.key){case g.Space:case g.Enter:r.preventDefault(),r.stopPropagation(),a({type:0});break}}),f=b(r=>{switch(r.key){case g.Space:r.preventDefault();break}}),x=b(r=>{var m;V(r.currentTarget)||e.disabled||(u?(a({type:0}),(m=n.buttonRef.current)==null||m.focus()):a({type:0}))}),k=l.useMemo(()=>({open:n.disclosureState===0}),[n]),D=K(e,i),c=u?{ref:p,type:D,onKeyDown:I,onClick:x}:{ref:p,id:o,type:D,"aria-expanded":n.disclosureState===0,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:I,onKeyUp:f,onClick:x};return R({ourProps:c,theirProps:d,slot:k,defaultTag:te,name:"Disclosure.Button"})}let le="div",re=B.RenderStrategy|B.Static;function ae(e,t){let s=_(),{id:o=`headlessui-disclosure-panel-${s}`,...d}=e,[n,a]=N("Disclosure.Panel"),{close:y}=A("Disclosure.Panel"),u=$(t,n.panelRef,x=>{Q(()=>a({type:x?4:5}))});l.useEffect(()=>(a({type:3,panelId:o}),()=>{a({type:3,panelId:null})}),[o,a]);let i=F(),p=(()=>i!==null?(i&S.Open)===S.Open:n.disclosureState===0)(),I=l.useMemo(()=>({open:n.disclosureState===0,close:y}),[n,y]),f={ref:u,id:o};return v.createElement(O.Provider,{value:n.panelId},R({ourProps:f,theirProps:d,slot:I,defaultTag:le,features:re,visible:p,name:"Disclosure.Panel"}))}let se=E(ee),oe=E(ne),ue=E(ae),C=Object.assign(se,{Button:oe,Panel:ue});const h=({title:e,children:t,className:s,titleClassName:o,defaultOpen:d=!1})=>P.jsx(C,{defaultOpen:d,children:({open:n})=>P.jsxs(P.Fragment,{children:[P.jsxs(C.Button,{className:`flex justify-between items-center w-full py-2 ${s}`,children:[P.jsx("span",{className:`text-left ${o}  ${n?"text-primary-600":"text-gray-600"}`,children:e}),P.jsx(z,{className:` ${n?"transform rotate-180 text-primary-500":"text-gray-500"} w-5 h-5 `})]}),P.jsx(C.Panel,{className:"w-full px-3 pb-3 ",children:t})]})}),ye=h;try{h.displayName="Accordion",h.__docgenInfo={description:"",displayName:"Accordion",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},titleClassName:{defaultValue:null,description:"",name:"titleClassName",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}export{ye as A};
//# sourceMappingURL=Accordion-ff6330dd.js.map

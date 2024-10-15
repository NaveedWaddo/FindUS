import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";import{n as c}from"./navigation-c36e425d.js";import{I as m}from"./IconX-4273332c.js";import{$ as l,_ as s}from"./transition-eed4a4f4.js";const u=({children:t,className:a})=>e.jsx("div",{className:`relative p-4 text-xl font-semibold ${a}`,children:t}),p=({children:t,show:a})=>e.jsx(l,{show:a,enter:"transition-all duration-300",enterFrom:"translate-y-10 ",enterTo:"translate-y-0",leave:"transition-all duration-300",leaveFrom:"translate-y-0",leaveTo:"translate-y-10",children:e.jsx("div",{className:"px-4 py-2 border-t",children:t})}),f=({children:t,className:a})=>e.jsx("div",{className:`flex flex-col flex-grow  shadow-inner p-4 pb-12 overflow-y-scroll ${a} `,children:t}),r=({open:t,setOpen:a,children:n,overlayBlur:i=!0})=>{const d=c.usePathname();return o.useEffect(()=>{a(!1)},[d,a]),e.jsx(l.Root,{show:t,as:o.Fragment,children:e.jsx(s,{as:"div",className:"fixed inset-0 z-50 overflow-hidden",onClose:a,children:e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx(l.Child,{as:o.Fragment,enter:"transition-opacity ease-linear duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx(s.Overlay,{className:`fixed inset-0 bg-black bg-opacity-10  ${i&&"backdrop-filter backdrop-blur-sm"}`})}),e.jsx("div",{className:"fixed inset-y-0 right-0 flex max-w-full bg-white",children:e.jsx(l.Child,{as:o.Fragment,enter:"transform transition ease-in-out duration-150",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-100",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsxs("div",{className:"flex flex-col w-screen max-w-md",children:[e.jsx("button",{type:"button",className:"absolute top-0 right-0 z-10 m-2 ml-auto rounded-full text-primary bg-white/80",onClick:()=>{a(!1)},children:e.jsx(m,{className:"w-6 h-6 p-1","aria-hidden":"true"})}),n]})})})]})})})};r.Header=u;r.Body=f;r.Footer=p;try{r.displayName="Sidebar",r.__docgenInfo={description:"",displayName:"Sidebar",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},overlayBlur:{defaultValue:{value:"true"},description:"",name:"overlayBlur",required:!1,type:{name:"boolean"}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}}}}}catch{}export{r as S};
//# sourceMappingURL=Sidebar-d61bc89c.js.map
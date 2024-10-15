import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{S as r}from"./Sidebar-d61bc89c.js";import"./_commonjsHelpers-de833af9.js";import"./navigation-c36e425d.js";import"./app-router-context-22d29efd.js";import"./_interop_require_wildcard-408360b9.js";import"./IconX-4273332c.js";import"./createReactComponent-d5b921f8.js";import"./index-8d47fad6.js";import"./transition-eed4a4f4.js";import"./keyboard-1ed92671.js";import"./description-160d9ca3.js";import"./open-closed-5dc80d5d.js";import"./index-d3ea75b5.js";const P={title:"molecules/Sidebar",component:r},n=()=>e.jsx("div",{className:"max-w-xs mb-24",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa excepturi, ullam praesentium alias hic totam debitis nam accusamus dolorum sunt! Earum dolorem unde distinctio sapiente vitae aliquid accusantium ipsa quidem ipsum provident. Necessitatibus, aut sint."}),y=()=>{const[o,t]=c.useState(!0);return e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"block w-full text-right",onClick:()=>t(s=>!s),children:"Open sidebar"}),e.jsx(r,{open:o,setOpen:t,children:e.jsx("div",{className:"flex items-center justify-center h-screen p-6 italic rounded outline-gray-200 outline-dashed",children:e.jsx("div",{children:"Any children go here."})})})]})},O=()=>{const[o,t]=c.useState(!0);return e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"block w-full text-right",onClick:()=>t(s=>!s),children:"Open sidebar"}),e.jsx(r,{open:o,setOpen:t,children:e.jsxs(r.Body,{children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})})]})},v=()=>{const[o,t]=c.useState(!0);return e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"block w-full text-right",onClick:()=>t(s=>!s),children:"Open sidebar"}),e.jsxs(r,{open:o,setOpen:t,children:[e.jsx(r.Header,{children:"Sample header"}),e.jsxs(r.Body,{children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]}),e.jsx(r.Footer,{children:"Sample footer"})]})]})},i=y.bind({}),a=O.bind({}),d=v.bind({});var l,p,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <div>\r
      <button type="button" className="block w-full text-right" onClick={() => setOpen(state => !state)}>\r
        Open sidebar\r
      </button>\r
      <Sidebar open={open} setOpen={setOpen}>\r
        <div className="flex items-center justify-center h-screen p-6 italic rounded outline-gray-200 outline-dashed">\r
          <div>Any children go here.</div>\r
        </div>\r
      </Sidebar>\r
    </div>;
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,S;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <div>\r
      <button type="button" className="block w-full text-right" onClick={() => setOpen(state => !state)}>\r
        Open sidebar\r
      </button>\r
      <Sidebar open={open} setOpen={setOpen}>\r
        <Sidebar.Body>\r
          <SomeContent />\r
          <SomeContent />\r
          <SomeContent />\r
        </Sidebar.Body>\r
      </Sidebar>\r
    </div>;
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,h,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <div>\r
      <button type="button" className="block w-full text-right" onClick={() => setOpen(state => !state)}>\r
        Open sidebar\r
      </button>\r
      <Sidebar open={open} setOpen={setOpen}>\r
        <Sidebar.Header>Sample header</Sidebar.Header>\r
        <Sidebar.Body>\r
          <SomeContent />\r
          <SomeContent />\r
          <SomeContent />\r
        </Sidebar.Body>\r
\r
        <Sidebar.Footer>Sample footer</Sidebar.Footer>\r
      </Sidebar>\r
    </div>;
}`,...(j=(h=d.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const L=["Primary","ScrollableBody","WithFixedHeaderAndFooter"];export{i as Primary,a as ScrollableBody,d as WithFixedHeaderAndFooter,L as __namedExportsOrder,P as default};
//# sourceMappingURL=Sidebar.stories-334a7438.js.map

import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as a}from"./index-76fb7be0.js";import{P as x}from"./exports-mapbox-5254a25e.js";import{I as g}from"./IconX-4273332c.js";import{S as l}from"./ShowHide-1d5a63ac.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a1334127.js";import"../sb-preview/runtime.js";import"./index-d3ea75b5.js";import"./createReactComponent-d5b921f8.js";import"./index-8d47fad6.js";const t=({latitude:o,longitude:s,children:i,onClose:p,...j})=>e.jsx(x,{latitude:o,longitude:s,closeButton:!1,children:e.jsxs("div",{className:"grid grid-cols-1 grid-rows-1",children:[e.jsx("div",{className:"col-start-1 row-start-1 ",children:i}),e.jsx("div",{className:"flex justify-end col-start-1 row-start-1 p-2 items-top",children:e.jsx("button",{type:"button",className:"absolute top-0 right-0 p-0.5 rounded-bl bg-black/30 hover:bg-black/40",children:e.jsx(g,{className:"w-5 h-5 text-white"})})})]})});try{t.displayName="MapPopup",t.__docgenInfo={description:"",displayName:"MapPopup",props:{longitude:{defaultValue:null,description:"Longitude of the anchor location",name:"longitude",required:!0,type:{name:"number"}},latitude:{defaultValue:null,description:"Latitude of the anchor location",name:"latitude",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"CSS style override, applied to the control's container",name:"style",required:!1,type:{name:"CSSProperties"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"((e: PopupEvent<Popup>) => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e: PopupEvent<Popup>) => void)"}}}}}catch{}const M={title:"molecules/Popup",component:t},P=()=>{const[o,s]=a.useState(!0);return e.jsx(t,{latitude:36,longitude:-122,onClose:()=>s(!1),children:e.jsx("div",{className:"p-3",children:"Some text"})})},S=()=>{const[o,s]=a.useState(!0),[i,p]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{show:o,children:e.jsx(t,{latitude:36,longitude:-122,onClose:()=>s(!1),children:e.jsx("div",{className:"max-w-sm p-3",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})}),e.jsx(l,{show:i,children:e.jsx(t,{latitude:42,longitude:-112,onClose:()=>p(!1),children:e.jsx("div",{className:"max-w-sm p-3",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim id tempore quia sit adipisci facilis, error laudantium nisi consectetur repellendus repudiandae ut."})})})]})},r=P.bind({}),n=S.bind({});var u,d,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <Popup latitude={36} longitude={-122} onClose={() => setOpen(false)}>\r
      <div className="p-3">Some text</div>\r
    </Popup>;
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,h,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  return <>\r
      <ShowHide show={open}>\r
        <Popup latitude={36} longitude={-122} onClose={() => setOpen(false)}>\r
          <div className="max-w-sm p-3">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit.\r
          </div>\r
        </Popup>\r
      </ShowHide>\r
      <ShowHide show={open2}>\r
        <Popup latitude={42} longitude={-112} onClose={() => setOpen2(false)}>\r
          <div className="max-w-sm p-3">\r
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim id\r
            tempore quia sit adipisci facilis, error laudantium nisi consectetur\r
            repellendus repudiandae ut.\r
          </div>\r
        </Popup>\r
      </ShowHide>\r
    </>;
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const H=["Primary","Multiple"];export{n as Multiple,r as Primary,H as __namedExportsOrder,M as default};
//# sourceMappingURL=Popup.stories-2bd5a7ed.js.map

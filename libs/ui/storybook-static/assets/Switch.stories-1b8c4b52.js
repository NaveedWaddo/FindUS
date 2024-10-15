import{j as g}from"./jsx-runtime-ffb262ed.js";import{r as C}from"./index-76fb7be0.js";import{S as p}from"./Switch-2e674fc9.js";import"./_commonjsHelpers-de833af9.js";import"./keyboard-1ed92671.js";import"./description-160d9ca3.js";import"./use-resolve-button-type-03a91f48.js";const U={component:p},e={args:{label:"Checked switch",checked:!0}},c={args:{label:"Unchecked switch",checked:!1}},r={args:{label:"Interactive switch",checked:!1},render:s=>{const[l,u]=C.useState(s.checked);return g.jsx(p,{...s,checked:l,onChange:u})}};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Checked switch',
    checked: true
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,h,d;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Unchecked switch',
    checked: false
  }
}`,...(d=(h=c.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var i,m,k;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Interactive switch',
    checked: false
  },
  render: args => {
    const [check, setCheck] = useState(args.checked);
    return <Switch {...args} checked={check} onChange={setCheck} />;
  }
}`,...(k=(m=r.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};const j=["Checked","UnChecked","Interactive"];export{e as Checked,r as Interactive,c as UnChecked,j as __namedExportsOrder,U as default};
//# sourceMappingURL=Switch.stories-1b8c4b52.js.map

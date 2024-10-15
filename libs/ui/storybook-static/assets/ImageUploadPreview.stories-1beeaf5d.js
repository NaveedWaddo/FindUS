import{j as o}from"./jsx-runtime-ffb262ed.js";import{I as n}from"./ImageUploadPreview-36dbcea8.js";import{H as g}from"./HtmlInput-c822fede.js";import{r as l}from"./index-76fb7be0.js";import"./index-545830e9.js";import"./PlainButton-b2040916.js";import"./image-b3c08ace.js";import"./_commonjsHelpers-de833af9.js";import"./_interop_require_wildcard-408360b9.js";import"./index-d3ea75b5.js";import"./head-manager-context-283aaa20.js";import"./router-context-0eea364d.js";import"./IconTrash-4fb3a008.js";import"./createReactComponent-d5b921f8.js";import"./index-8d47fad6.js";const _={component:n},e={render:d=>{const[c,t]=l.useState();return o.jsx(n,{src:c,clearImage:()=>t(void 0),children:o.jsx(g,{type:"file",accept:"image/*",multiple:!1,onChange:r=>{var a,m;return t((m=(a=r==null?void 0:r.target)==null?void 0:a.files)==null?void 0:m[0])}})})}};var i,s,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [image, setImage] = useState<Blob | MediaSource | undefined>();
    return <ImageUploadPreview src={image} clearImage={() => setImage(undefined)}>\r
        <HtmlInput type="file" accept="image/*" multiple={false} onChange={e => setImage(e?.target?.files?.[0])} />\r
      </ImageUploadPreview>;
  }
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const b=["Primary"];export{e as Primary,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=ImageUploadPreview.stories-1beeaf5d.js.map

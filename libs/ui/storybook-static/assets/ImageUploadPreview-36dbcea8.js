import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-545830e9.js";import{I as o}from"./image-b3c08ace.js";import{P as i}from"./PlainButton-b2040916.js";import{I as c}from"./IconTrash-4fb3a008.js";const a=({src:r,clearImage:t,children:s})=>r?e.jsxs("div",{className:"relative flex items-center justify-center w-full shadow-lg aspect-square",children:[e.jsxs(i,{className:"z-10 flex items-center gap-1 p-2 text-white underline underline-offset-4 bg-black/30",onClick:t,children:[e.jsx(c,{})," Clear"]}),e.jsx(o,{width:300,height:300,className:"absolute object-cover w-full h-full aspect-square",alt:"",src:URL.createObjectURL(r),onError:l=>{console.error("Image failed to load",l)}})]}):e.jsx("div",{className:"flex items-center justify-center w-full max-w-sm bg-gray-100 aspect-square",children:s});try{a.displayName="ImageUploadPreview",a.__docgenInfo={description:"",displayName:"ImageUploadPreview",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"Blob | MediaSource"}},clearImage:{defaultValue:null,description:"",name:"clearImage",required:!0,type:{name:"() => void"}}}}}catch{}export{a as I};
//# sourceMappingURL=ImageUploadPreview-36dbcea8.js.map

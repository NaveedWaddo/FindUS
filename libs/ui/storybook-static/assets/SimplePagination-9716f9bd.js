import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-545830e9.js";import{T as d}from"./index-798baf75.js";import{P as i}from"./PlainButton-b2040916.js";import{c as l}from"./createReactComponent-d5b921f8.js";var u=l("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]),g=l("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]]);const o=({setSkip:t,setTake:h,skip:a,take:r,resultCount:c=0})=>{const p=()=>{t(a+r)},m=()=>{t(Math.max(a-r,0))},n=a===0,s=c<d;return e.jsxs("div",{className:"flex gap-2 mt-4",children:[e.jsx(i,{onClick:m,className:"p-2",disabled:n,children:e.jsx(u,{className:n?"text-gray-300":"text-black"})}),e.jsx(i,{onClick:p,className:"p-2",disabled:s,children:e.jsx(g,{className:s?"text-gray-300":"text-black"})})]})};try{o.displayName="SimplePagination",o.__docgenInfo={description:"",displayName:"SimplePagination",props:{setSkip:{defaultValue:null,description:"",name:"setSkip",required:!0,type:{name:"Dispatch<SetStateAction<number>>"}},setTake:{defaultValue:null,description:"",name:"setTake",required:!0,type:{name:"Dispatch<SetStateAction<number>>"}},skip:{defaultValue:null,description:"",name:"skip",required:!0,type:{name:"number"}},take:{defaultValue:null,description:"",name:"take",required:!0,type:{name:"number"}},resultCount:{defaultValue:{value:"0"},description:"",name:"resultCount",required:!1,type:{name:"number"}}}}}catch{}export{o as S};
//# sourceMappingURL=SimplePagination-9716f9bd.js.map
import{j as e}from"./jsx-runtime-ffb262ed.js";import{L as v}from"./Loader-777f291b.js";const g={contained:{primary:"text-white bg-black hover:bg-gray-900",white:"text-black bg-white",black:"text-white bg-black hover:bg-gray-900",success:"text-white bg-green hover:bg-green-700",error:"text-white bg-red hover:bg-red-700"},outlined:{primary:"border-2 border-black text-black hover:bg-black/10",white:"border-2 border-white text-white hover:bg-white/10",black:"border-2 border-black text-black hover:bg-black/10",success:"border-2 border-green text-green hover:bg-green-100",error:"border-2 border-red text-red hover:bg-red-100"},text:{primary:"text-primary ",white:"text-black",black:"text-white",success:"text-green ",error:"text-red "}},h={none:"text-xs",sm:"px-3 py-1.5 text-xs",md:"px-4 py-2 text-sm",lg:"px-5 py-2 text-base",xl:"px-8 py-3 text-xl"},o=({size:r="md",variant:s="contained",color:i="primary",fullWidth:n=!1,disabled:a=!1,children:l,className:u,isLoading:t=!1,type:d="button",...c})=>{const b=g[s][i],m=h[r],x=n&&"w-full",p=(a||t)&&"opacity-60 cursor-auto";return e.jsx("button",{type:d,disabled:a||t,className:` relative rounded font-medium ${m} ${x} ${b} ${p}  ${u} `,...c,children:t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(v,{})}),e.jsx("div",{className:"opacity-10",children:l})]}):e.jsx(e.Fragment,{children:l})})};try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"black"'},{value:'"white"'},{value:'"success"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}export{o as B};
//# sourceMappingURL=Button-5075d3c0.js.map

import{s as e,a as c,G as g,b as s,c as u,d as l,u as d}from"./firebase-79125986.js";const h=({email:a,password:n})=>u(s,a,n),P=async({email:a,password:n,displayName:t,photoURL:i})=>{const r=await l(s,a,n),{user:o}=r;return console.log("displayName",t),t&&o&&(await d(o,{displayName:t,photoURL:i}),await o.reload()),r},p=async()=>{await e(s)},f=async()=>c(s,new g);export{f as g,h as l,P as r,p as s};
//# sourceMappingURL=index-1ab85060.js.map

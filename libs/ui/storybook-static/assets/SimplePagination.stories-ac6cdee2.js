import{j as e}from"./jsx-runtime-ffb262ed.js";import{S as k}from"./SimplePagination-9716f9bd.js";import{u as c}from"./index-798baf75.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-545830e9.js";import"./PlainButton-b2040916.js";import"./createReactComponent-d5b921f8.js";import"./index-8d47fad6.js";import"./index-422d7130.js";import"./tslib.es6-16d17d01.js";import"./ApolloContext-54841cb1.js";import"./subjects-5c717a40.js";import"./Subject-4219f2ee.js";import"./firebase-79125986.js";const B={component:k},l=Array.from(Array(100+1).keys()).slice(1),o={render:u=>{const{setSkip:n,setTake:i,skip:r,take:s}=c(),t=l.slice(r,r+s);return e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-6",children:t.map(a=>e.jsx("div",{children:a}))}),e.jsx(k,{resultCount:t.length,setSkip:n,setTake:i,skip:r,take:s})]})},args:{}},p={render:u=>{const{setSkip:n,setTake:i,skip:r,take:s}=c(50),t=l.slice(r,r+s);return e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-6",children:t.map(a=>e.jsx("div",{children:a}))}),e.jsx(k,{resultCount:t.length,setSkip:n,setTake:i,skip:r,take:s})]})},args:{}},d={render:u=>{const{setSkip:n,setTake:i,skip:r,take:s}=c(96),t=l.slice(r,r+s);return e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-6",children:t.map(a=>e.jsx("div",{children:a}))}),e.jsx(k,{resultCount:t.length,setSkip:n,setTake:i,skip:r,take:s})]})},args:{}};var m,g,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const {
      setSkip,
      setTake,
      skip,
      take
    } = useTakeSkip();
    const result = arr.slice(skip, skip + take);
    return <div>\r
        <div className="grid grid-cols-6">\r
          {result.map(num => {
          return <div>{num}</div>;
        })}\r
        </div>\r
        <SimplePagination resultCount={result.length} setSkip={setSkip} setTake={setTake} skip={skip} take={take} />\r
      </div>;
  },
  args: {}
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,x,T;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const {
      setSkip,
      setTake,
      skip,
      take
    } = useTakeSkip(50);
    const result = arr.slice(skip, skip + take);
    return <div>\r
        <div className="grid grid-cols-6">\r
          {result.map(num => {
          return <div>{num}</div>;
        })}\r
        </div>\r
        <SimplePagination resultCount={result.length} setSkip={setSkip} setTake={setTake} skip={skip} take={take} />\r
      </div>;
  },
  args: {}
}`,...(T=(x=p.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var h,j,P;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const {
      setSkip,
      setTake,
      skip,
      take
    } = useTakeSkip(96);
    const result = arr.slice(skip, skip + take);
    return <div>\r
        <div className="grid grid-cols-6">\r
          {result.map(num => {
          return <div>{num}</div>;
        })}\r
        </div>\r
        <SimplePagination resultCount={result.length} setSkip={setSkip} setTake={setTake} skip={skip} take={take} />\r
      </div>;
  },
  args: {}
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const D=["FirstPage","MiddlePage","FinalPage"];export{d as FinalPage,o as FirstPage,p as MiddlePage,D as __namedExportsOrder,B as default};
//# sourceMappingURL=SimplePagination.stories-ac6cdee2.js.map

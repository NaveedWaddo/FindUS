import{j as n}from"./jsx-runtime-ffb262ed.js";import{S as p}from"./ShowData-a81d4d1b.js";import{u as c}from"./index-798baf75.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Pagination-9fbfcc17.js";import"./styled-f00a956c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./ArrowDropDown-946d2573.js";import"./emotion-react.browser.esm-90e85f1f.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-b5cfe060.js";import"./index-d3ea75b5.js";import"./useTheme-8c88939a.js";import"./react-is.production.min-a192e302.js";import"./Grow-1c60ec8a.js";import"./Loader-777f291b.js";import"./createReactComponent-d5b921f8.js";import"./index-8d47fad6.js";import"./index-b9837749.js";import"./AlertSection-959baeef.js";import"./SimplePagination-9716f9bd.js";import"./index-545830e9.js";import"./PlainButton-b2040916.js";import"./index-422d7130.js";import"./tslib.es6-16d17d01.js";import"./ApolloContext-54841cb1.js";import"./subjects-5c717a40.js";import"./Subject-4219f2ee.js";import"./firebase-79125986.js";const at={component:p},s=Array.from(Array(100+1).keys()).slice(1),l={render:d=>{const{setSkip:a,setTake:o,skip:t,take:r}=c(),e=s.slice(t,r+t);return n.jsx(p,{loading:!1,pagination:{setSkip:a,setTake:o,skip:t,take:r,resultCount:e.length,totalCount:s.length},children:e.map(i=>n.jsx("div",{children:i}))})}},m={render:d=>{const{setSkip:a,setTake:o,skip:t,take:r}=c(),e=s.slice(t,r+t);return n.jsx(p,{loading:!0,pagination:{setSkip:a,setTake:o,skip:t,take:r,resultCount:e.length,totalCount:s.length},children:e.map(i=>n.jsx("div",{children:i}))})}},u={render:d=>{const{setSkip:a,setTake:o,skip:t,take:r}=c(),e=s.slice(t,r+t);return n.jsx(p,{loading:!1,error:"this and that went wrong.",pagination:{setSkip:a,setTake:o,skip:t,take:r,resultCount:e.length,totalCount:s.length},children:e.map(i=>n.jsx("div",{children:i}))})}},k={render:d=>{const{setSkip:a,setTake:o,skip:t,take:r}=c(),e=s.slice(t,r+t);return n.jsx(p,{className:"grid grid-cols-6 gap-5",loading:!1,pagination:{setSkip:a,setTake:o,skip:t,take:r,resultCount:e.length,totalCount:s.length},children:e.map(i=>n.jsx("div",{children:i}))})}};var g,h,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const {
      setSkip,
      setTake,
      skip,
      take
    } = useTakeSkip();
    const result = arr.slice(skip, take + skip);
    return <ShowData loading={false} pagination={{
      setSkip,
      setTake,
      skip,
      take,
      resultCount: result.length,
      totalCount: arr.length
    }}>\r
        {result.map(num => <div>{num}</div>)}\r
      </ShowData>;
  }
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,T,w;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const {
      setSkip,
      setTake,
      skip,
      take
    } = useTakeSkip();
    const result = arr.slice(skip, take + skip);
    return <ShowData loading={true} pagination={{
      setSkip,
      setTake,
      skip,
      take,
      resultCount: result.length,
      totalCount: arr.length
    }}>\r
        {result.map(num => <div>{num}</div>)}\r
      </ShowData>;
  }
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var v,x,f;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const {
      setSkip,
      setTake,
      skip,
      take
    } = useTakeSkip();
    const result = arr.slice(skip, take + skip);
    return <ShowData loading={false} error="this and that went wrong." pagination={{
      setSkip,
      setTake,
      skip,
      take,
      resultCount: result.length,
      totalCount: arr.length
    }}>\r
        {result.map(num => <div>{num}</div>)}\r
      </ShowData>;
  }
}`,...(f=(x=u.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,D,y;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const {
      setSkip,
      setTake,
      skip,
      take
    } = useTakeSkip();
    const result = arr.slice(skip, take + skip);
    return <ShowData className="grid grid-cols-6 gap-5" loading={false} pagination={{
      setSkip,
      setTake,
      skip,
      take,
      resultCount: result.length,
      totalCount: arr.length
    }}>\r
        {result.map(num => <div>{num}</div>)}\r
      </ShowData>;
  }
}`,...(y=(D=k.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const ot=["Primary","Loading","Error","CustomArrangement"];export{k as CustomArrangement,u as Error,m as Loading,l as Primary,ot as __namedExportsOrder,at as default};
//# sourceMappingURL=ShowData.stories-9994abe3.js.map

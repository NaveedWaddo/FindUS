import{_ as b,a as G}from"./tslib.es6-16d17d01.js";import{p as Ne,g as ve,i as m,c as Ae,a as ke,m as Y,N as k,b as We,e as N,d as Fe,f as V,h as B,A as q}from"./ApolloContext-54841cb1.js";import{r as p,a as Pe}from"./index-76fb7be0.js";var W=new Map,L=new Map,ge=!0,F=!1;function be(e){return e.replace(/[\s,]+/g," ").trim()}function De(e){return be(e.source.body.substring(e.start,e.end))}function qe(e){var t=new Set,r=[];return e.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var s=n.name.value,o=De(n.loc),a=L.get(s);a&&!a.has(o)?ge&&console.warn("Warning: fragment with name "+s+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):a||L.set(s,a=new Set),a.add(o),t.has(o)||(t.add(o),r.push(n))}else r.push(n)}),b(b({},e),{definitions:r})}function Le(e){var t=new Set(e.definitions);t.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(s){var o=n[s];o&&typeof o=="object"&&t.add(o)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}function Ue(e){var t=be(e);if(!W.has(t)){var r=Ne(e,{experimentalFragmentVariables:F,allowLegacyFragmentVariables:F});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");W.set(t,Le(qe(r)))}return W.get(t)}function h(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];typeof e=="string"&&(e=[e]);var n=e[0];return t.forEach(function(s,o){s&&s.kind==="Document"?n+=s.loc.source.body:n+=s,n+=e[o+1]}),Ue(n)}function $e(){W.clear(),L.clear()}function je(){ge=!1}function Te(){F=!0}function xe(){F=!1}var S={gql:h,resetCaches:$e,disableFragmentWarnings:je,enableExperimentalFragmentVariables:Te,disableExperimentalFragmentVariables:xe};(function(e){e.gql=S.gql,e.resetCaches=S.resetCaches,e.disableFragmentWarnings=S.disableFragmentWarnings,e.enableExperimentalFragmentVariables=S.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=S.disableExperimentalFragmentVariables})(h||(h={}));h.default=h;function z(e){var t=p.useContext(ve()),r=e||t.client;return __DEV__?m(!!r,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):m(!!r,32),r}var J=!1,Ve="useSyncExternalStore",ze=Pe[Ve],He=ze||function(e,t,r){var n=t();__DEV__&&!J&&n!==t()&&(J=!0,__DEV__&&m.error("The result of getSnapshot should be cached to avoid an infinite loop"));var s=p.useState({inst:{value:n,getSnapshot:t}}),o=s[0].inst,a=s[1];return Ae?p.useLayoutEffect(function(){Object.assign(o,{value:n,getSnapshot:t}),D(o)&&a({inst:o})},[e,n,t]):Object.assign(o,{value:n,getSnapshot:t}),p.useEffect(function(){return D(o)&&a({inst:o}),e(function(){D(o)&&a({inst:o})})},[e]),n};function D(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch{return!0}}var C;(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(C||(C={}));var X=new Map;function Z(e){var t;switch(e){case C.Query:t="Query";break;case C.Mutation:t="Mutation";break;case C.Subscription:t="Subscription";break}return t}function Ge(e){var t=X.get(e);if(t)return t;var r,n,s;__DEV__?m(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):m(!!e&&!!e.kind,33);for(var o=[],a=[],u=[],c=[],i=0,y=e.definitions;i<y.length;i++){var d=y[i];if(d.kind==="FragmentDefinition"){o.push(d);continue}if(d.kind==="OperationDefinition")switch(d.operation){case"query":a.push(d);break;case"mutation":u.push(d);break;case"subscription":c.push(d);break}}__DEV__?m(!o.length||a.length||u.length||c.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):m(!o.length||a.length||u.length||c.length,34),__DEV__?m(a.length+u.length+c.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(a.length," queries, ").concat(c.length," ")+"subscriptions and ".concat(u.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):m(a.length+u.length+c.length<=1,35),n=a.length?C.Query:C.Mutation,!a.length&&!u.length&&(n=C.Subscription);var f=a.length?a:u.length?u:c;__DEV__?m(f.length===1,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(f.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):m(f.length===1,36);var _=f[0];r=_.variableDefinitions||[],_.name&&_.name.kind==="Name"?s=_.name.value:s="data";var v={name:s,type:n,variables:r};return X.set(e,v),v}function Ce(e,t){var r=Ge(e),n=Z(t),s=Z(r.type);__DEV__?m(r.type===t,"Running a ".concat(n," requires a graphql ")+"".concat(n,", but a ").concat(s," was used instead.")):m(r.type===t,37)}var Ye=Object.prototype.hasOwnProperty;function w(e,t){return t===void 0&&(t=Object.create(null)),Re(z(t.client),e).useQuery(t)}function Re(e,t){var r=p.useRef();(!r.current||e!==r.current.client||t!==r.current.query)&&(r.current=new Be(e,t,r.current));var n=r.current,s=p.useState(0);s[0];var o=s[1];return n.forceUpdate=function(){o(function(a){return a+1})},n}var Be=function(){function e(t,r,n){this.client=t,this.query=r,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(ke?WeakSet:Set),this.ssrDisabledResult=Y({loading:!0,data:void 0,error:void 0,networkStatus:k.loading}),this.skipStandbyResult=Y({loading:!1,data:void 0,error:void 0,networkStatus:k.ready}),this.toQueryResultCache=new(We?WeakMap:Map),Ce(r,C.Query);var s=n&&n.result,o=s&&s.data;o&&(this.previousData=o)}return e.prototype.forceUpdate=function(){__DEV__&&m.warn("Calling default no-op implementation of InternalState#forceUpdate")},e.prototype.asyncUpdate=function(t){var r=this;return new Promise(function(n,s){var o=r.watchQueryOptions,a=function(){r.asyncResolveFns.delete(n),r.optionsToIgnoreOnce.delete(o),t.removeEventListener("abort",a),s(t.reason)};r.asyncResolveFns.add(n),r.optionsToIgnoreOnce.add(o),t.addEventListener("abort",a),r.forceUpdate()})},e.prototype.useQuery=function(t){var r=this;this.renderPromises=p.useContext(ve()).renderPromises,this.useOptions(t);var n=this.useObservableQuery(),s=He(p.useCallback(function(){if(r.renderPromises)return function(){};var a=function(){var i=r.result,y=n.getCurrentResult();i&&i.loading===y.loading&&i.networkStatus===y.networkStatus&&N(i.data,y.data)||r.setResult(y)},u=function(i){var y=n.last;c.unsubscribe();try{n.resetLastResults(),c=n.subscribe(a,u)}finally{n.last=y}if(!Ye.call(i,"graphQLErrors"))throw i;var d=r.result;(!d||d&&d.loading||!N(i,d.error))&&r.setResult({data:d&&d.data,error:i,loading:!1,networkStatus:k.error})},c=n.subscribe(a,u);return function(){return c.unsubscribe()}},[n,this.renderPromises,this.client.disableNetworkFetches]),function(){return r.getCurrentResult()},function(){return r.getCurrentResult()});this.unsafeHandlePartialRefetch(s);var o=this.toQueryResult(s);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach(function(a){return a(o)}),this.asyncResolveFns.clear()),o},e.prototype.useOptions=function(t){var r,n=this.createWatchQueryOptions(this.queryHookOptions=t),s=this.watchQueryOptions;(this.optionsToIgnoreOnce.has(s)||!N(n,s))&&(this.watchQueryOptions=n,s&&this.observable&&(this.optionsToIgnoreOnce.delete(s),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=((r=this.result)===null||r===void 0?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&this.queryHookOptions.ssr===!1&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||this.watchQueryOptions.fetchPolicy==="standby"?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},e.prototype.getObsQueryOptions=function(){var t=[],r=this.client.defaultOptions.watchQuery;return r&&t.push(r),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push(Fe(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(V)},e.prototype.createWatchQueryOptions=function(t){var r;t===void 0&&(t={});var n=t.skip;t.ssr,t.onCompleted,t.onError,t.defaultOptions;var s=G(t,["skip","ssr","onCompleted","onError","defaultOptions"]),o=Object.assign(s,{query:this.query});if(this.renderPromises&&(o.fetchPolicy==="network-only"||o.fetchPolicy==="cache-and-network")&&(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),n){var a=o.fetchPolicy,u=a===void 0?this.getDefaultFetchPolicy():a,c=o.initialFetchPolicy,i=c===void 0?u:c;Object.assign(o,{initialFetchPolicy:i,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=((r=this.observable)===null||r===void 0?void 0:r.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},e.prototype.getDefaultFetchPolicy=function(){var t,r;return((t=this.queryHookOptions.defaultOptions)===null||t===void 0?void 0:t.fetchPolicy)||((r=this.client.defaultOptions.watchQuery)===null||r===void 0?void 0:r.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(t){},e.prototype.onError=function(t){},e.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=p.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var r=!(this.queryHookOptions.ssr===!1||this.queryHookOptions.skip);return this.renderPromises&&r&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},e.prototype.setResult=function(t){var r=this.result;r&&r.data&&(this.previousData=r.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},e.prototype.handleErrorOrCompleted=function(t){var r=this;if(!t.loading){var n=this.toApolloError(t);Promise.resolve().then(function(){n?r.onError(n):t.data&&r.onCompleted(t.data)}).catch(function(s){__DEV__&&m.warn(s)})}},e.prototype.toApolloError=function(t){return B(t.errors)?new q({graphQLErrors:t.errors}):t.error},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(t){var r=this.toQueryResultCache.get(t);if(r)return r;var n=t.data;t.partial;var s=G(t,["data","partial"]);return this.toQueryResultCache.set(t,r=b(b(b({data:n},s),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!r.error&&B(t.errors)&&(r.error=new q({graphQLErrors:t.errors})),r},e.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||Object.keys(t.data).length===0)&&this.observable.options.fetchPolicy!=="cache-only"&&(Object.assign(t,{loading:!0,networkStatus:k.refetch}),this.observable.refetch())},e}(),Je=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function E(e,t){var r,n=p.useRef(new Set),s=p.useRef(),o=s.current?V(t,s.current):t,a=Re(z(t&&t.client),(r=o==null?void 0:o.query)!==null&&r!==void 0?r:e),u=a.useQuery(b(b({},o),{skip:!s.current})),c=u.observable.options.initialFetchPolicy||a.getDefaultFetchPolicy(),i=Object.assign(u,{called:!!s.current}),y=p.useMemo(function(){for(var f={},_=function(g){var R=i[g];f[g]=function(){return s.current||(s.current=Object.create(null),a.forceUpdate()),R.apply(this,arguments)}},v=0,M=Je;v<M.length;v++){var Q=M[v];_(Q)}return f},[]);Object.assign(i,y),p.useEffect(function(){return function(){n.current.forEach(function(f){f.abort()})}},[]);var d=p.useCallback(function(f){var _=new AbortController;n.current.add(_),s.current=f?b(b({},f),{fetchPolicy:f.fetchPolicy||c}):{fetchPolicy:c};var v=a.asyncUpdate(_.signal).then(function(M){return n.current.delete(_),Object.assign(M,y)});return v.catch(function(){n.current.delete(_)}),v},[]);return[d,i]}function O(e,t){var r=z(t==null?void 0:t.client);Ce(e,C.Mutation);var n=p.useState({called:!1,loading:!1,client:r}),s=n[0],o=n[1],a=p.useRef({result:s,mutationId:0,isMounted:!0,client:r,mutation:e,options:t});Object.assign(a.current,{client:r,options:t,mutation:e});var u=p.useCallback(function(i){i===void 0&&(i={});var y=a.current,d=y.options,f=y.mutation,_=b(b({},d),{mutation:f}),v=i.client||a.current.client;!a.current.result.loading&&!_.ignoreResults&&a.current.isMounted&&o(a.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:v});var M=++a.current.mutationId,Q=V(_,i);return v.mutate(Q).then(function(g){var R,A=g.data,I=g.errors,Se=I&&I.length>0?new q({graphQLErrors:I}):void 0;if(M===a.current.mutationId&&!Q.ignoreResults){var H={called:!0,loading:!1,data:A,error:Se,client:v};a.current.isMounted&&!N(a.current.result,H)&&o(a.current.result=H)}var P=i.onCompleted||((R=a.current.options)===null||R===void 0?void 0:R.onCompleted);return P==null||P(g.data,Q),g}).catch(function(g){var R;if(M===a.current.mutationId&&a.current.isMounted){var A={loading:!1,error:g,data:void 0,called:!0,client:v};N(a.current.result,A)||o(a.current.result=A)}var I=i.onError||((R=a.current.options)===null||R===void 0?void 0:R.onError);if(I)return I(g,Q),{data:void 0,errors:g};throw g})},[]),c=p.useCallback(function(){a.current.isMounted&&o({called:!1,loading:!1,client:r})},[]);return p.useEffect(function(){return a.current.isMounted=!0,function(){a.current.isMounted=!1}},[]),[u,b({reset:c},s)]}const l={};var U=(e=>(e.Athletic="ATHLETIC",e.Average="AVERAGE",e.Heavy="HEAVY",e.Obese="OBESE",e.Slender="SLENDER",e))(U||{}),$=(e=>(e.Female="FEMALE",e.Male="MALE",e.NonBinary="NON_BINARY",e.PreferNotToSay="PREFER_NOT_TO_SAY",e))($||{}),j=(e=>(e.GeneralInformation="GENERAL_INFORMATION",e.Lead="LEAD",e.Sighting="SIGHTING",e))(j||{}),T=(e=>(e.Admin="admin",e.Manager="manager",e))(T||{}),x=(e=>(e.FoundDeceased="FOUND_DECEASED",e.FoundSafe="FOUND_SAFE",e.Missing="MISSING",e))(x||{});const it={Query:{reports:"reports",searchCases:"searchCases",case:"case",officerMe:"officerMe",witnessMe:"witnessMe",unapprovedReports:"unapprovedReports"},Mutation:{createWitness:"createWitness",createCase:"createCase",createOfficer:"createOfficer",createApprovedReport:"createApprovedReport",CreateReports:"CreateReports",createComment:"createComment",updateCaseStatus:"updateCaseStatus"}},Me=h`
  query reports {
    reports {
      id
    }
  }
`;function K(e){const t={...l,...e};return w(Me,t)}function ee(e){const t={...l,...e};return E(Me,t)}const Xe=h`
  mutation createWitness($createWitnessInput: CreateWitnessInput!) {
    createWitness(createWitnessInput: $createWitnessInput) {
      uid
    }
  }
`;function te(e){const t={...l,...e};return O(Xe,t)}const Oe=h`
  query searchCases(
    $locationFilter: LocationFilterInput!
    $dateFilter: DateFilterInput
  ) {
    searchCases(locationFilter: $locationFilter, dateFilter: $dateFilter) {
      case {
        status
        id
        missingPerson {
          images
          displayName
          gender
        }
      }
      location {
        address
        latitude
        longitude
      }
    }
  }
`;function re(e){const t={...l,...e};return w(Oe,t)}function ne(e){const t={...l,...e};return E(Oe,t)}const Qe=h`
  query case($where: CaseWhereUniqueInput!) {
    case(where: $where) {
      id
      missingPerson {
        displayName
        description
        missingSince
        gender
        dob
        height
        weight
        images
      }
      reports {
        time
        id
        type
        audio
        witness {
          uid
          name
        }
        comments {
          id
          content
          createdAt
          witness {
            name
            uid
          }
        }
        approvedReport {
          id
          description
        }
        description
        location {
          latitude
          longitude
        }
      }
      contact
      status
    }
  }
`;function ae(e){const t={...l,...e};return w(Qe,t)}function oe(e){const t={...l,...e};return E(Qe,t)}const Ze=h`
  mutation createCase($createCaseInput: CreateCaseInput!) {
    createCase(createCaseInput: $createCaseInput) {
      id
    }
  }
`;function se(e){const t={...l,...e};return O(Ze,t)}const Ie=h`
  query officerMe {
    officerMe {
      uid
      createdAt
      name
      updatedAt
    }
  }
`;function ie(e){const t={...l,...e};return w(Ie,t)}function ue(e){const t={...l,...e};return E(Ie,t)}const we=h`
  query witnessMe {
    witnessMe {
      uid
      createdAt
      name
      updatedAt
    }
  }
`;function ce(e){const t={...l,...e};return w(we,t)}function pe(e){const t={...l,...e};return E(we,t)}const Ke=h`
  mutation createOfficer($createOfficerInput: CreateOfficerInput!) {
    createOfficer(createOfficerInput: $createOfficerInput) {
      uid
      name
      createdAt
      updatedAt
    }
  }
`;function le(e){const t={...l,...e};return O(Ke,t)}const Ee=h`
  query unapprovedReports(
    $where: ReportWhereInput
    $distinct: [ReportScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: ReportWhereUniqueInput
    $orderBy: [ReportOrderByWithRelationInput!]
  ) {
    reports(
      where: $where
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
    ) {
      id
      caseId
      time
      type
      audio
      description
      createdAt
      location {
        latitude
        longitude
      }
      witness {
        uid
        name
      }
    }
  }
`;function de(e){const t={...l,...e};return w(Ee,t)}function he(e){const t={...l,...e};return E(Ee,t)}const et=h`
  mutation createApprovedReport(
    $createApprovedReportInput: CreateApprovedReportInput!
  ) {
    createApprovedReport(
      createApprovedReportInput: $createApprovedReportInput
    ) {
      description
    }
  }
`;function ye(e){const t={...l,...e};return O(et,t)}const tt=h`
  mutation CreateReports(
    $createReportsInput: [CreateReportInputWithoutCaseId!]!
    $caseId: Int!
  ) {
    createReports(createReportsInput: $createReportsInput, caseId: $caseId) {
      id
    }
  }
`;function fe(e){const t={...l,...e};return O(tt,t)}const rt=h`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
    }
  }
`;function me(e){const t={...l,...e};return O(rt,t)}const nt=h`
  mutation updateCaseStatus($updateCaseInput: UpdateCaseInput!) {
    updateCaseStatus(updateCaseInput: $updateCaseInput) {
      id
    }
  }
`;function _e(e){const t={...l,...e};return O(nt,t)}try{K.displayName="useReportsQuery",K.__docgenInfo={description:"__useReportsQuery__\n\nTo run a query within a React component, call `useReportsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useReportsQuery",props:{}}}catch{}try{ee.displayName="useReportsLazyQuery",ee.__docgenInfo={description:"",displayName:"useReportsLazyQuery",props:{}}}catch{}try{te.displayName="useCreateWitnessMutation",te.__docgenInfo={description:`__useCreateWitnessMutation__

To run a mutation, you first call \`useCreateWitnessMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateWitnessMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateWitnessMutation",props:{}}}catch{}try{re.displayName="useSearchCasesQuery",re.__docgenInfo={description:"__useSearchCasesQuery__\n\nTo run a query within a React component, call `useSearchCasesQuery` and pass it any options that fit your needs.\nWhen your component renders, `useSearchCasesQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useSearchCasesQuery",props:{}}}catch{}try{ne.displayName="useSearchCasesLazyQuery",ne.__docgenInfo={description:"",displayName:"useSearchCasesLazyQuery",props:{}}}catch{}try{ae.displayName="useCaseQuery",ae.__docgenInfo={description:"__useCaseQuery__\n\nTo run a query within a React component, call `useCaseQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCaseQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCaseQuery",props:{}}}catch{}try{oe.displayName="useCaseLazyQuery",oe.__docgenInfo={description:"",displayName:"useCaseLazyQuery",props:{}}}catch{}try{se.displayName="useCreateCaseMutation",se.__docgenInfo={description:`__useCreateCaseMutation__

To run a mutation, you first call \`useCreateCaseMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateCaseMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateCaseMutation",props:{}}}catch{}try{ie.displayName="useOfficerMeQuery",ie.__docgenInfo={description:"__useOfficerMeQuery__\n\nTo run a query within a React component, call `useOfficerMeQuery` and pass it any options that fit your needs.\nWhen your component renders, `useOfficerMeQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useOfficerMeQuery",props:{}}}catch{}try{ue.displayName="useOfficerMeLazyQuery",ue.__docgenInfo={description:"",displayName:"useOfficerMeLazyQuery",props:{}}}catch{}try{ce.displayName="useWitnessMeQuery",ce.__docgenInfo={description:"__useWitnessMeQuery__\n\nTo run a query within a React component, call `useWitnessMeQuery` and pass it any options that fit your needs.\nWhen your component renders, `useWitnessMeQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useWitnessMeQuery",props:{}}}catch{}try{pe.displayName="useWitnessMeLazyQuery",pe.__docgenInfo={description:"",displayName:"useWitnessMeLazyQuery",props:{}}}catch{}try{le.displayName="useCreateOfficerMutation",le.__docgenInfo={description:`__useCreateOfficerMutation__

To run a mutation, you first call \`useCreateOfficerMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateOfficerMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateOfficerMutation",props:{}}}catch{}try{de.displayName="useUnapprovedReportsQuery",de.__docgenInfo={description:"__useUnapprovedReportsQuery__\n\nTo run a query within a React component, call `useUnapprovedReportsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUnapprovedReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUnapprovedReportsQuery",props:{}}}catch{}try{he.displayName="useUnapprovedReportsLazyQuery",he.__docgenInfo={description:"",displayName:"useUnapprovedReportsLazyQuery",props:{}}}catch{}try{ye.displayName="useCreateApprovedReportMutation",ye.__docgenInfo={description:`__useCreateApprovedReportMutation__

To run a mutation, you first call \`useCreateApprovedReportMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateApprovedReportMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateApprovedReportMutation",props:{}}}catch{}try{fe.displayName="useCreateReportsMutation",fe.__docgenInfo={description:`__useCreateReportsMutation__

To run a mutation, you first call \`useCreateReportsMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateReportsMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateReportsMutation",props:{}}}catch{}try{me.displayName="useCreateCommentMutation",me.__docgenInfo={description:`__useCreateCommentMutation__

To run a mutation, you first call \`useCreateCommentMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateCommentMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateCommentMutation",props:{}}}catch{}try{_e.displayName="useUpdateCaseStatusMutation",_e.__docgenInfo={description:`__useUpdateCaseStatusMutation__

To run a mutation, you first call \`useUpdateCaseStatusMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUpdateCaseStatusMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUpdateCaseStatusMutation",props:{}}}catch{}try{U.displayName="BodyType",U.__docgenInfo={description:"Enum for BodyType",displayName:"BodyType",props:{}}}catch{}try{$.displayName="Gender",$.__docgenInfo={description:"Enum for Gender",displayName:"Gender",props:{}}}catch{}try{j.displayName="ReportType",j.__docgenInfo={description:"Enum for ReportType",displayName:"ReportType",props:{}}}catch{}try{T.displayName="RoleEnum",T.__docgenInfo={description:"Enum for roles",displayName:"RoleEnum",props:{}}}catch{}try{x.displayName="Status",x.__docgenInfo={description:"Enum for Status",displayName:"Status",props:{}}}catch{}export{$ as G,j as R,x as S,le as a,de as b,ye as c,me as d,fe as e,ae as f,re as g,_e as h,se as i,ce as j,te as k,it as n,ie as u};
//# sourceMappingURL=index-422d7130.js.map

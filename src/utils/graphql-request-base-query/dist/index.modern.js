import{isPlainObject as e}from"@reduxjs/toolkit";import{GraphQLClient as t,ClientError as r}from"graphql-request";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}const a=a=>{const s="client"in a?a.client:new t(a.url),o="requestHeaders"in a?a.requestHeaders:{};return async({document:t,variables:i},{getState:c,endpoint:u,forced:l,type:p,signal:d,extra:f})=>{try{var m;const r=null!=(m=a.prepareHeaders)?m:e=>e,g=new Headers(function(t){if(!e(t))return t;const r=n({},t);for(const[e,t]of Object.entries(r))void 0===t&&delete r[e];return r}(o)),q=await r(g,{getState:c,endpoint:u,forced:l,type:p,extra:f});return{data:await s.request({document:t,variables:i,signal:d,requestHeaders:q}),meta:{}}}catch(e){if(e instanceof r){var g;const{name:t,message:r,stack:n,request:s,response:o}=e;return{error:(null!=(g=a.customErrors)?g:()=>({name:t,message:r,stack:n}))(e),meta:{request:s,response:o}}}throw e}}};export{a as graphqlRequestBaseQuery};
//# sourceMappingURL=index.modern.js.map

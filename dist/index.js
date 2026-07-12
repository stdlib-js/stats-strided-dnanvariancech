"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var d=o(function(D,m){
function _(r,e,i,v,y){var h,u,q,t,c,s,a,f,n;if(r<=0)return NaN;if(r===1||v===0)return a=i[y],a===a&&r-e>0?0:NaN;for(u=y,n=0;n<r;n++){if(a=i[u],a===a){h=a;break}u+=v}if(n===r)return NaN;for(u+=v,n+=1,q=0,c=0,f=1,n;n<r;n++)a=i[u],a===a&&(s=a-h,q+=s*s,c+=s,f+=1),u+=v;return t=f-e,t<=0?NaN:q/t-c/f*(c/t)}m.exports=_
});var x=o(function(F,j){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=d();function E(r,e,i,v){return k(r,e,i,v,b(r,v))}j.exports=E
});var N=o(function(G,M){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=x(),g=d();O(l,"ndarray",g);M.exports=l
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=N(),p,R=z(w(__dirname,"./native.js"));A(R)?p=B:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

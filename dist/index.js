"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=f(function(j,g){
var v=require('@stdlib/assert-is-array-like-object/dist'),d=require('@stdlib/assert-is-collection/dist'),w=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function y(r,e,o,h){var s,i,l,m,a,t,n;if(!v(r))throw new TypeError(u('1XJ2O',r));if(!v(e))throw new TypeError(u('1XJ2y',e));if(e.length!==r.length)throw new RangeError(u('1XJ1p'));if(!w(o))throw new TypeError(u('1XJ3N',o));for(l=r.length,s=[],t=0;t<l;t++){if(a=r[t],!d(a))throw new TypeError(u('1XJBM',t,a));for(m=a.length,i=e[t],n=0;n<m;n++)i=o.call(h,i,a[n],[t,n],r);s.push(i)}return s}g.exports=y
});var b=c();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

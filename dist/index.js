"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}}};var c=f(function(j,g){"use strict";var v=require("@stdlib/assert-is-array-like-object"),d=require("@stdlib/assert-is-collection"),w=require("@stdlib/assert-is-function"),o=require("@stdlib/string-format");function y(r,e,a,h){var s,u,l,m,n,t,i;if(!v(r))throw new TypeError(o("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(!v(e))throw new TypeError(o("invalid argument. Second argument must be an array-like object. Value: `%s`.",e));if(e.length!==r.length)throw new RangeError("invalid argument. Second argument must have a length equal to the size of the outermost input array dimension.");if(!w(a))throw new TypeError(o("invalid argument. Third argument must be a function. Value: `%s`.",a));for(l=r.length,s=[],t=0;t<l;t++){if(n=r[t],!d(n))throw new TypeError(o("invalid argument. First argument must be an array-like object containing array-like objects. Index: `%u`. Value: `%s`.",t,n));for(m=n.length,u=e[t],i=0;i<m;i++)u=a.call(h,u,n[i],[t,i],r);s.push(u)}return s}g.exports=y});var b=c();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map

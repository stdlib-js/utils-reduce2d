"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=f(function(j,g){"use strict";var v=require("@stdlib/assert-is-array-like-object"),d=require("@stdlib/assert-is-collection"),w=require("@stdlib/assert-is-function"),u=require("@stdlib/string-format");function y(r,e,o,h){var s,i,l,m,a,t,n;if(!v(r))throw new TypeError(u("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(!v(e))throw new TypeError(u("invalid argument. Second argument must be an array-like object. Value: `%s`.",e));if(e.length!==r.length)throw new RangeError("invalid argument. Second argument must have a length equal to the size of the outermost input array dimension.");if(!w(o))throw new TypeError(u("invalid argument. Third argument must be a function. Value: `%s`.",o));for(l=r.length,s=[],t=0;t<l;t++){if(a=r[t],!d(a))throw new TypeError(u("invalid argument. First argument must be an array-like object containing array-like objects. Index: `%u`. Value: `%s`.",t,a));for(m=a.length,i=e[t],n=0;n<m;n++)i=o.call(h,i,a[n],[t,n],r);s.push(i)}return s}g.exports=y});var b=c();module.exports=b;
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

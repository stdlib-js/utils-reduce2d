// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function i(i,s,a,o){var m,l,u,d,h,g,c;if(!e(i))throw new TypeError(n("invalid argument. First argument must be an array-like object. Value: `%s`.",i));if(!e(s))throw new TypeError(n("invalid argument. Second argument must be an array-like object. Value: `%s`.",s));if(s.length!==i.length)throw new RangeError("invalid argument. Second argument must have a length equal to the size of the outermost input array dimension.");if(!r(a))throw new TypeError(n("invalid argument. Third argument must be a function. Value: `%s`.",a));for(u=i.length,m=[],g=0;g<u;g++){if(h=i[g],!t(h))throw new TypeError(n("invalid argument. First argument must be an array-like object containing array-like objects. Index: `%u`. Value: `%s`.",g,h));for(d=h.length,l=s[g],c=0;c<d;c++)l=a.call(o,l,h[c],[g,c],i);m.push(l)}return m}export{i as default};
//# sourceMappingURL=index.mjs.map

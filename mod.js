// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;function e(e){return t(e)===e}function r(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&e(t.length)&&t.length>=0&&t.length<=4294967295}function n(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&e(t.length)&&t.length>=0&&t.length<=9007199254740991}var o=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null;var i,l=Object.defineProperty,f=Object.prototype,a=f.toString,c=f.__defineGetter__,y=f.__defineSetter__,p=f.__lookupGetter__,b=f.__lookupSetter__;i=function(){try{return u({},"x",{}),!0}catch(t){return!1}}()?l:function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(p.call(t,e)||b.call(t,e)?(n=t.__proto__,t.__proto__=f,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&c&&c.call(t,e,r.get),i&&y&&y.call(t,e,r.set),t};var s=i;function g(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function v(t){return"boolean"==typeof t}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return d&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=h()?function(t){var e,r,n,o,u;if(null==t)return w.call(t);r=t[m],u=m,e=null!=(o=t)&&j.call(o,u);try{t[m]=void 0}catch(e){return w.call(t)}return n=w.call(t),e?t[m]=r:delete t[m],n}:function(t){return w.call(t)},E=Boolean.prototype.toString;var S=h();function A(t){return"object"==typeof t&&(t instanceof Boolean||(S?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function O(t){return v(t)||A(t)}function T(){return new Function("return this;")()}g(O,"isPrimitive",v),g(O,"isObject",A);var V="object"==typeof self?self:null,B="object"==typeof window?window:null,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof P?P:null;var x=function(t){if(arguments.length){if(!v(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(V)return V;if(B)return B;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),C=x.document&&x.document.childNodes,F=Int8Array;function G(){return/^\s*function\s*([^(]*)/i}var I=/^\s*function\s*([^(]*)/i;g(G,"REGEXP",I);var L=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function M(t){return null!==t&&"object"==typeof t}function R(t){var e,r,n,o;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=I.exec(n.toString()))return e[1]}return M(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}g(M,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!L(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(M));var U="function"==typeof o||"object"==typeof F||"function"==typeof C?function(t){return R(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?R(t).toLowerCase():e};function N(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function X(t,e,o,u){var i,l,f,a,c,y,p;if(!r(t))throw new TypeError(N("0lV2a",t));if(!r(e))throw new TypeError(N("0lV3A",e));if(e.length!==t.length)throw new RangeError(N("0lV20"));if("function"!==U(o))throw new TypeError(N("0lV3Z",o));for(f=t.length,i=[],y=0;y<f;y++){if(!n(c=t[y]))throw new TypeError(N("invalid argument. First argument must be an array-like object containing array-like objects. Index: `%u`. Value: `%s`.",y,c));for(a=c.length,l=e[y],p=0;p<a;p++)l=o.call(u,l,c[p],y,p,t);i.push(l)}return i}export{X as default};
//# sourceMappingURL=mod.js.map

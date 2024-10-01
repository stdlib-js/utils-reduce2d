// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).reduce2d=r()}(this,(function(){"use strict";var e=Math.floor;function r(r){return e(r)===r}var t=4294967295;function n(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&r(e.length)&&e.length>=0&&e.length<=t}var i=9007199254740991;function o(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&r(e.length)&&e.length>=0&&e.length<=i}var a=/./,c="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=Object.defineProperty;function u(e){return"number"==typeof e}function s(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function f(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+s(i):s(i)+e,n&&(e="-"+e)),e}var p=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function d(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=f(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=f(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var h=Math.abs,y=String.prototype.toLowerCase,b=String.prototype.toUpperCase,w=String.prototype.replace,v=/e\+(\d)$/,m=/e-(\d)$/,j=/^(\d+)$/,E=/^(\d+)e/,_=/\.0$/,S=/\.0*e/,x=/(\..*[^0])0*e/;function T(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!u(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":h(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=w.call(t,x,"$1e"),t=w.call(t,S,"e"),t=w.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=w.call(t,v,"e+0$1"),t=w.call(t,m,"e-0$1"),e.alternate&&(t=w.call(t,j,"$1."),t=w.call(t,E,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===b.call(e.specifier)?b.call(t):y.call(t)}function k(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var A=String.fromCharCode,V=Array.isArray;function O(e){return e!=e}function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,n,i,o,a,c,l,u,s,p,g,h;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,O(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=d(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!O(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=T(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,p=n.width,g=n.padRight,h=void 0,(h=p-s.length)<0?s:s=g?s+k(h):k(h)+s)),a+=n.arg||"",c+=1}return a}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function B(e){var r,t;if("string"!=typeof e)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[R(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return F.apply(null,r)}var P,X=Object.prototype,L=X.toString,G=X.__defineGetter__,J=X.__defineSetter__,M=X.__lookupGetter__,Z=X.__lookupSetter__;P=function(){try{return c({},"x",{}),!0}catch(e){return!1}}()?l:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(e,r)||Z.call(e,r)?(n=e.__proto__,e.__proto__=X,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(e,r,t.get),a&&J&&J.call(e,r,t.set),e};var U=P;function W(e,r,t){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return z&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var Y=q()?function(e){var r,t,n,i,o;if(null==e)return D.call(e);t=e[Q],o=Q,r=null!=(i=e)&&H.call(i,o);try{e[Q]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[Q]=t:delete e[Q],n}:function(e){return D.call(e)},ee=Boolean,re=Boolean.prototype.toString;var te=q();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function ie(e){return N(e)||ne(e)}W(ie,"isPrimitive",N),W(ie,"isObject",ne);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof global?global:null,le="object"==typeof globalThis?globalThis:null;var ue=function(e){if(arguments.length){if(!N(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(le)return le;if(oe)return oe;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ue.document&&ue.document.childNodes,fe=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge=/^\s*function\s*([^(]*)/i;W(pe,"REGEXP",ge);var de=Array.isArray?Array.isArray:function(e){return"[object Array]"===Y(e)};function he(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=Y(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return he(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(he,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!de(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(he));var be="function"==typeof a||"object"==typeof fe||"function"==typeof se?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};function we(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,r,t,i){var a,c,l,u,s,f,p;if(!n(e))throw new TypeError(we("1XJ2O",e));if(!n(r))throw new TypeError(we("1XJ2y",r));if(r.length!==e.length)throw new RangeError(we("1XJ1p"));if("function"!==be(t))throw new TypeError(we("1XJ3N",t));for(l=e.length,a=[],f=0;f<l;f++){if(!o(s=e[f]))throw new TypeError(we("1XJBM",f,s));for(u=s.length,c=r[f],p=0;p<u;p++)c=t.call(i,c,s[p],[f,p],e);a.push(c)}return a}}));
//# sourceMappingURL=index.js.map

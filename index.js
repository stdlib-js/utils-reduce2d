// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).reduce2d=r()}(this,(function(){"use strict";var e=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(t=r.length,e(t)===t)&&r.length>=0&&r.length<=4294967295;var t}var t=Math.floor;function n(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&(r=e.length,t(r)===r)&&e.length>=0&&e.length<=9007199254740991;var r}var i=/./,a="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function c(e){return"number"==typeof e}function s(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function l(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+s(i):s(i)+e,n&&(e="-"+e)),e}var u=String.prototype.toLowerCase,p=String.prototype.toUpperCase;function f(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===p.call(e.specifier)?p.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function g(e){return"string"==typeof e}var d=Math.abs,h=String.prototype.toLowerCase,b=String.prototype.toUpperCase,w=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,m=/^(\d+)$/,E=/^(\d+)e/,k=/\.0$/,x=/\.0*e/,j=/(\..*[^0])0*e/;function S(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!c(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":d(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=w.call(t,j,"$1e"),t=w.call(t,x,"e"),t=w.call(t,k,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=w.call(t,y,"e+0$1"),t=w.call(t,v,"e-0$1"),e.alternate&&(t=w.call(t,m,"$1."),t=w.call(t,E,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var V=String.fromCharCode,A=isNaN,F=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,i,a,o,c,s,u;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(g(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=S(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=C.exec(e);n;)(r=e.slice(i,C.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=C.lastIndex,n=C.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Z(e){return"string"==typeof e}function L(e){var r,t;if(!Z(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var P,W=Object.prototype,B=W.toString,G=W.__defineGetter__,M=W.__defineSetter__,N=W.__lookupGetter__,U=W.__lookupSetter__;P=function(){try{return a({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(e,r)||U.call(e,r)?(n=e.__proto__,e.__proto__=W,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&M&&M.call(e,r,t.set),e};var X=P;function z(e,r,t){X(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function q(e){return"boolean"==typeof e}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var K=Object.prototype.hasOwnProperty;var Q="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Q?Q.toStringTag:"";var ee=H()?function(e){var r,t,n,i,a;if(null==e)return J.call(e);t=e[Y],a=Y,r=null!=(i=e)&&K.call(i,a);try{e[Y]=void 0}catch(r){return J.call(e)}return n=J.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return J.call(e)},re=Boolean,te=Boolean.prototype.toString;var ne=H();function ie(e){return"object"==typeof e&&(e instanceof re||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function ae(e){return q(e)||ie(e)}function oe(){return new Function("return this;")()}z(ae,"isPrimitive",q),z(ae,"isObject",ie);var ce="object"==typeof self?self:null,se="object"==typeof window?window:null,le="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;var pe=function(e){if(arguments.length){if(!q(e))throw new TypeError(L("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return oe()}if(ue)return ue;if(ce)return ce;if(se)return se;if(le)return le;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=pe.document&&pe.document.childNodes,ge=Int8Array;function de(){return/^\s*function\s*([^(]*)/i}var he=/^\s*function\s*([^(]*)/i;z(de,"REGEXP",he);var be=Array.isArray?Array.isArray:function(e){return"[object Array]"===ee(e)};function we(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=ee(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=he.exec(n.toString()))return r[1]}return we(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}z(we,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!be(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(we));var ve="function"==typeof i||"object"==typeof ge||"function"==typeof fe?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};function me(e){return"number"==typeof e}function Ee(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ke(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Ee(i):Ee(i)+e,n&&(e="-"+e)),e}var xe=String.prototype.toLowerCase,je=String.prototype.toUpperCase;function Se(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!me(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=ke(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=ke(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===je.call(e.specifier)?je.call(t):xe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _e(e){return"string"==typeof e}var Te=Math.abs,Ve=String.prototype.toLowerCase,Ae=String.prototype.toUpperCase,Fe=String.prototype.replace,$e=/e\+(\d)$/,Ie=/e-(\d)$/,Ce=/^(\d+)$/,Re=/^(\d+)e/,Oe=/\.0$/,Ze=/\.0*e/,Le=/(\..*[^0])0*e/;function Pe(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!me(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Te(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Fe.call(t,Le,"$1e"),t=Fe.call(t,Ze,"e"),t=Fe.call(t,Oe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Fe.call(t,$e,"e+0$1"),t=Fe.call(t,Ie,"e-0$1"),e.alternate&&(t=Fe.call(t,Ce,"$1."),t=Fe.call(t,Re,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ae.call(e.specifier)?Ae.call(t):Ve.call(t)}function We(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Be(e,r,t){var n=r-e.length;return n<0?e:e=t?e+We(n):We(n)+e}var Ge=String.fromCharCode,Me=isNaN,Ne=Array.isArray;function Ue(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Xe(e){var r,t,n,i,a,o,c,s,l;if(!Ne(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(_e(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=Ue(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Me(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Me(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Se(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Me(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Me(a)?String(n.arg):Ge(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Pe(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ke(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Be(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var ze=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function De(e){var r,t,n,i;for(t=[],i=0,n=ze.exec(e);n;)(r=e.slice(i,ze.lastIndex-n[0].length)).length&&t.push(r),t.push(qe(n)),i=ze.lastIndex,n=ze.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function He(e){return"string"==typeof e}function Je(e){var r,t,n;if(!He(e))throw new TypeError(Je("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=De(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Xe.apply(null,t)}return function(e,t,i,a){var o,c,s,l,u,p,f;if(!r(e))throw new TypeError(Je("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(!r(t))throw new TypeError(Je("invalid argument. Second argument must be an array-like object. Value: `%s`.",t));if(t.length!==e.length)throw new RangeError("invalid argument. Second argument must have a length equal to the size of the outermost input array dimension.");if("function"!==ve(i))throw new TypeError(Je("invalid argument. Third argument must be a function. Value: `%s`.",i));for(s=e.length,o=[],p=0;p<s;p++){if(!n(u=e[p]))throw new TypeError(Je("invalid argument. First argument must be an array-like object containing array-like objects. Index: `%u`. Value: `%s`.",p,u));for(l=u.length,c=t[p],f=0;f<l;f++)c=i.call(a,c,u[f],[p,f],e);o.push(c)}return o}}));
//# sourceMappingURL=index.js.map

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MESSAGE_PREFIX="rnifsc",t.REPLACEABLE_IFRAME_PREFIX="#navigate-to="},,,,,function(e,t,r){"use strict";var n=r(6);(0,n.replaceAllAutomagically)(),document.addEventListener("DOMContentLoaded",function(){return(0,n.replaceAllAutomagically)()}),window.addEventListener("load",function(){return(0,n.replaceAllAutomagically)()}),window.RenaultTopFrame={replace:n.replaceIframe}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.replaceAllAutomagically=t.replaceAutomagically=t.replaceIframe=void 0;var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=r(0);function a(e,t){var r=e.indexOf(t);return-1===r?[e,void 0]:[e.substring(0,r),e.substring(r+t.length)]}function i(e,t){var r=a(e,"#"),o=n(r,2),i=o[0],l=o[1],u=a(i,"?"),c=n(u,2),f=c[0],d=c[1]||"";for(var s in t)t.hasOwnProperty(s)&&(d.length>0&&(d+="&"),d+=encodeURIComponent(s)+"="+encodeURIComponent(t[s]));var v=f;return d.length>0&&(v+="?"+d),l&&l.length>0&&(v+="#"+l),v}function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,o=document.createElement("iframe"),l=!0,u=!1,c=void 0;try{for(var f,d=e.attributes[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){var s=f.value;"src"!==s.name&&o.setAttribute(s.name,s.value)}}catch(e){u=!0,c=e}finally{try{!l&&d.return&&d.return()}finally{if(u)throw c}}o.setAttribute("src",function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(console.log(r),r){var n={};for(var o in t)t.hasOwnProperty(o)&&r.indexOf(o)>-1&&(n[o]=t[o]);return i(e,n)}return i(e,t)}(t,function(){var e={};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.search).split(/[&?]/g).forEach(function(t){if(0!==t.length){var r=a(t,"="),o=n(r,2),i=o[0],l=o[1];e[i]=l}}),e}(),r)),e.parentNode.replaceChild(o,e)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=a(e.getAttribute("src"),o.REPLACEABLE_IFRAME_PREFIX);l(e,n(r,2)[1],t)}t.replaceIframe=l,t.replaceAutomagically=u,t.replaceAllAutomagically=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;console.log("call",document.getElementsByTagName("iframe")),Array.prototype.forEach.call(document.getElementsByTagName("iframe"),function(t){console.log(t),t.hasAttribute("src")&&t.getAttribute("src").indexOf(o.REPLACEABLE_IFRAME_PREFIX)>-1&&u(t,e)})}}]);
//# sourceMappingURL=top.js.map
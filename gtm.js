!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MESSAGE_PREFIX="rnifsc",t.REPLACEABLE_IFRAME_PREFIX="#navigate-to="},function(e,t,n){"use strict";var r=n(0);!function(){var e=void 0;if(!window[r.MESSAGE_PREFIX+"_init"]){window[r.MESSAGE_PREFIX+"_init"]=!0;var t=setInterval(function(){var e=document.querySelector("iframe[src*='javascript:']");e&&(e.parentNode.removeChild(e),clearInterval(t))},330);window.addEventListener("message",function(t){var o=t.data,i=t.source;if(o.substring(0,6)===r.MESSAGE_PREFIX){var a=JSON.parse(o.substring(r.MESSAGE_PREFIX.length));switch(a.type){case"ping":n()&&i.postMessage("pong","*");break;case"height":!function(t){e.style.height=t+"px"}(a.height);break;case"scroll":!function(e,t){var r=$(".docked-nav-outer"),o=r.get(0),i=void 0;if(-1===e)i=0;else{i=$(n()).position().top+e;var a=$("header").outerHeight();o&&i>a&&(i-=r.outerHeight())}$("html, body")[t?"animate":"prop"]({scrollTop:Math.max(0,i)})}(a.position,a.animate)}}})}function n(){if(void 0===e){e=document.querySelector(".section.iframe iframe"),["t","webkitT","msT","mozT","oT"].forEach(function(t){e.style[t+"ransition"]="none"});var t=document.createElement("style");t.type="text/css",t.innerHTML=".content-zone .grid-row.bleed { max-width: auto !important; }",document.querySelector("head").appendChild(t)}return e}}()}]);
//# sourceMappingURL=gtm.js.map
!function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.ThreedDS2Utils=n():e.ThreedDS2Utils=n()}(this,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const o={container:void 0};const r={"01":["250px","400px"],"02":["390px","400px"],"03":["500px","600px"],"04":["600px","400px"],"05":["100%","100%"]};function a(e){let n=1===e.length?`0${e}`:e;return r.hasOwnProperty(n)?n:"01"}const i={createIframe:(e,n,t="0",r="0",a)=>{if(!n||0===n.length)throw new Error("Name parameter missing for iframe");e instanceof HTMLElement?o.container=e:o.container=document.body;const i=document.createElement("iframe");i.classList.add(n+"Class"),i.width=t,i.height=r,i.name=n,i.setAttribute("frameborder","0"),i.setAttribute("border","0");const c=document.createTextNode("<p>Your browser does not support iframes.</p>");return i.appendChild(c),o.container.appendChild(i),((e,n)=>{e.attachEvent?e.attachEvent("onload",function(){n&&"function"===typeof n&&n(e.contentWindow)}):e.onload=function(){n&&"function"===typeof n&&n(e.contentWindow)}})(i,a),i},createForm:(e,n,t,o,r)=>{if(!e||!n||!t||!o||!r)throw new Error("Not all required parameters provided for form creation");if(0===e.length||0===n.length||0===t.length||0===o.length||0===r.length)throw new Error("Not all required parameters have suitable values");const a=document.createElement("form");a.style.display="none",a.name=e,a.action=n,a.method="POST",a.target=t;const i=document.createElement("input");return i.name=o,i.value=r,a.appendChild(i),a},getBrowserInfo:()=>{const e=window&&window.screen?window.screen.width:"",n=window&&window.screen?window.screen.height:"",t=window&&window.screen?window.screen.colorDepth:"",o=window&&window.navigator?window.navigator.userAgent:"",r=!(!window||!window.navigator)&&navigator.javaEnabled();let a="";return window&&window.navigator&&(a=window.navigator.language?window.navigator.language:window.navigator.browserLanguage),{screenWidth:e,screenHeight:n,colorDepth:t,userAgent:o,timeZoneOffset:(new Date).getTimezoneOffset(),language:a,javaEnabled:r}},base64Url:{encode:e=>{let n=window.btoa(e).split("=")[0];return n=(n=n.replace(/\+/g,"-")).replace(/\//g,"_")},decode:e=>{let n=e;switch((n=(n=n.replace(/-/g,"+")).replace(/_/g,"/")).length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:window.console&&window.console.log&&window.console.log("### base64url::decodeBase64URL::  Illegal base64url string!")}try{return window.atob(n)}catch(e){throw new Error(e)}}},config:{challengeWindowSizes:r,validateChallengeWindowSize:a,getChallengeWindowSize:function(e){return r[a(e)]},THREEDS_METHOD_TIMEOUT:1e4,CHALLENGE_TIMEOUT:6e5}};n.default=i}]).default});
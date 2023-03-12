(function(){'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k=this||self;var l,m;a:{for(var n=["CLOSURE_FLAGS"],p=k,q=0;q<n.length;q++)if(p=p[n[q]],null==p){m=null;break a}m=p}var r=m&&m[610401301];l=null!=r?r:!1;var t;const u=k.navigator;t=u?u.userAgentData||null:null;function v(a){return l?t?t.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function w(a){var b;a:{if(b=k.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function x(){return l?!!t&&0<t.brands.length:!1}function y(){return x()?v("Chromium"):(w("Chrome")||w("CriOS"))&&!(x()?0:w("Edge"))||w("Silk")};var aa=x()?!1:w("Trident")||w("MSIE");!w("Android")||y();y();w("Safari")&&(y()||(x()?0:w("Coast"))||(x()?0:w("Opera"))||(x()?0:w("Edge"))||(x()?v("Microsoft Edge"):w("Edg/"))||x()&&v("Opera"));var z={},A=null;var B="undefined"!==typeof Uint8Array;const ba=!aa&&"function"===typeof k.btoa;const C=Symbol();function D(a,b){if(C)return a[C]|=b;if(void 0!==a.i)return a.i|=b;Object.defineProperties(a,{i:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function E(a){let b;C?b=a[C]:b=a.i;return null==b?0:b}function F(a,b){C?a[C]=b:void 0!==a.i?a.i=b:Object.defineProperties(a,{i:{value:b,configurable:!0,writable:!0,enumerable:!1}})}function I(a){D(a,16);return a}function ca(a,b){F(b,(a|0)&-51)}function J(a,b){F(b,(a|18)&-41)};var K={};function L(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}const da=[];F(da,23);var M=Object.freeze(da);function N(a){var b=a.length;(b=b?a[b-1]:void 0)&&L(b)?b.g=1:a.push({g:1})};function ea(a){const b=a.l+a.o;return a.m||(a.m=a.j[b]={})}function fa(a,b,d){return-1===b?null:b>=a.l?a.m?a.m[b]:void 0:d&&a.m&&(d=a.m[b],null!=d)?d:a.j[b+a.o]}function O(a,b,d,c){a.s&&(a.s=void 0);b>=a.l||c?ea(a)[b]=d:(a.j[b+a.o]=d,(a=a.m)&&b in a&&delete a[b])}function ha(a){a=fa(a,16);return null==a?a:!!a}
function ia(a,b,d){var c=fa(a,d,!1);var f=!1;if(null==c||"object"!==typeof c||(f=Array.isArray(c))||c.u!==K)if(f){f=E(a.j);const e=E(c);let g=e;0===g&&(g|=f&16);g|=f&2;g!==e&&F(c,g);b=new b(c)}else b=void 0;else b=c;b!==c&&null!=b&&O(a,d,b,!1);c=b;if(null==c)return c;E(a.j)&2||(b=c,E(b.j)&2&&(f=ja(b,!1),f.s=b,b=f),b!==c&&(c=b,O(a,d,c,!1)));return c}function ka(a){return null==a?!1:a};let P;function la(a,b){P=b;a=new a(b);P=void 0;return a};function ma(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(E(a)&128))return a=Array.prototype.slice.call(a),N(a),a}else if(B&&null!=a&&a instanceof Uint8Array){if(ba){for(var b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);a=btoa(b)}else{void 0===b&&(b=0);if(!A){A={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
c=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var e=d.concat(c[f].split(""));z[f]=e;for(var g=0;g<e.length;g++){var h=e[g];void 0===A[h]&&(A[h]=g)}}}b=z[b];d=Array(Math.floor(a.length/3));c=b[64]||"";for(f=e=0;e<a.length-2;e+=3){var G=a[e],H=a[e+1];h=a[e+2];g=b[G>>2];G=b[(G&3)<<4|H>>4];H=b[(H&15)<<2|h>>6];h=b[h&63];d[f++]=g+G+H+h}g=0;h=c;switch(a.length-e){case 2:g=a[e+1],h=b[(g&15)<<2]||c;case 1:a=a[e],d[f]=b[a>>2]+b[(a&3)<<4|g>>4]+h+c}a=d.join("")}return a}}return a};function na(a,b,d,c){if(null!=a){if(Array.isArray(a))a=Q(a,b,d,void 0!==c);else if(L(a)){const f={};for(let e in a)f[e]=na(a[e],b,d,c);a=f}else a=b(a,c);return a}}function Q(a,b,d,c){const f=E(a);c=c?!!(f&16):void 0;a=Array.prototype.slice.call(a);for(let e=0;e<a.length;e++)a[e]=na(a[e],b,d,c);d(f,a);return a}function oa(a){return a.u===K?a.toJSON():ma(a)}function pa(a,b){a&128&&N(b)};function qa(a,b,d=J){if(null!=a){if(B&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const c=E(a);if(c&2)return a;if(b&&!(c&32)&&(c&16||0===c))return F(a,c|18),a;a=Q(a,qa,c&4?J:d,!0);b=E(a);b&4&&b&2&&Object.freeze(a);return a}return a.u===K?ra(a):a}}
function sa(a,b,d,c,f,e,g){if(a=a.i&&a.i[d]){c=E(a);c&2?c=a:(e=Array.prototype.map.call(a,ra,void 0),J(c,e),Object.freeze(e),c=e);if(E(b.j)&2)throw Error();null==c?e=M:(e=[],D(e,1));g=e;if(null!=c){e=!!c.length;for(a=0;a<c.length;a++){const h=c[a];e=e&&!(E(h.j)&2);g[a]=h.j}e=(e?8:0)|1;a=E(g);(a&e)!==e&&(Object.isFrozen(g)&&(g=Array.prototype.slice.call(g)),F(g,a|e));b.i||(b.i={});b.i[d]=c}else b.i&&(b.i[d]=void 0);O(b,d,g,f)}else{c=qa(c,e,g);if(E(b.j)&2)throw Error();O(b,d,c,f)}}
function ra(a){if(E(a.j)&2)return a;a=ja(a,!0);D(a.j,18);return a}function ja(a,b){const d=a.j;var c=I([]),f=a.constructor.i;f&&c.push(f);f=a.m;if(f){c.length=d.length;c.fill(void 0,c.length,d.length);var e={};c[c.length-1]=e}0!==(E(d)&128)&&N(c);b=b||E(a.j)&2?J:ca;c=la(a.constructor,c);a.v&&(c.v=a.v.slice());e=!!(E(d)&16);const g=f?d.length-1:d.length;for(let h=0;h<g;h++)sa(a,c,h-a.o,d[h],!1,e,b);if(f)for(const h in f)sa(a,c,+h,f[h],!0,e,b);return c};var R=class{constructor(a,b,d){null==a&&(a=P);P=void 0;var c=this.constructor.i;if(null==a){a=c?[c]:[];var f=!0;F(a,48)}else{if(!Array.isArray(a))throw Error();if(c&&c!==a[0])throw Error();var e=D(a,0)|32;f=0!==(16&e);if(128&e)throw Error();F(a,e)}this.o=c?0:-1;this.i=void 0;this.j=a;a:{e=this.j.length;c=e-1;if(e&&(e=this.j[c],L(e))){this.m=e;this.l=c-this.o;break a}void 0!==b&&-1<b?(this.l=Math.max(b,c+1-this.o),this.m=void 0):this.l=Number.MAX_VALUE}if(this.m&&"g"in this.m)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(d){b=f&&!0;f=this.l;let h;for(c=0;c<d.length;c++)if(e=d[c],e<f){e+=this.o;var g=a[e];g?ta(g,b):a[e]=M}else h||(h=ea(this)),(g=h[e])?ta(g,b):h[e]=M}}toJSON(){return Q(this.j,oa,pa)}};function ta(a,b){if(Array.isArray(a)){var d=E(a),c=1;!b||d&2||(c|=16);(d&c)!==c&&F(a,d|c)}}R.prototype.u=K;R.prototype.toString=function(){return this.j.toString()};var va=class extends R{constructor(a){super(a,-1,ua)}},ua=[17];var xa=class extends R{constructor(a){super(a,-1,wa)}},wa=[27];var ya=function(a){return b=>{if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);b=la(a,I(b))}return b}}(class extends R{constructor(a){super(a)}});let S=[];const T=()=>{const a=S;S=[];for(const b of a)try{b()}catch(d){}};var za=a=>{var b=window;"complete"===b.document.readyState?(S.push(a),1==S.length&&(window.Promise?Promise.resolve().then(T):window.setImmediate?setImmediate(T):setTimeout(T,0))):b.addEventListener("load",a)};let U=null;function Aa(){const a=k.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Ba(){const a=k.performance;return a&&a.now?a.now():null};class Ca{constructor(a,b){var d=Ba()||Aa();this.label=a;this.type=b;this.value=d;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0}};const V=k.performance,Da=!!(V&&V.mark&&V.measure&&V.clearMarks),W=function(a){let b=!1,d;return function(){b||(d=a(),b=!0);return d}}(()=>{var a;if(a=Da){var b;if(null===U){U="";try{a="";try{a=k.top.location.hash}catch(d){a=k.location.hash}a&&(U=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(d){}}b=U;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Ea(a){a&&V&&W()&&(V.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),V.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class Fa{constructor(){var a=window;this.i=[];this.s=a||k;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.i=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.l=W()||(null!=b?b:1>Math.random())}start(a,b){if(!this.l)return null;a=new Ca(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;V&&W()&&V.mark(b);return a}end(a){if(this.l&&"number"===typeof a.value){a.duration=(Ba()||Aa())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;V&&W()&&V.mark(b);!this.l||2048<
this.i.length||this.i.push(a)}}};const X=new Fa;var Ga=()=>{window.google_measure_js_timing||(X.l=!1,X.i!=X.s.google_js_reporting_queue&&(W()&&Array.prototype.forEach.call(X.i,Ea,void 0),X.i.length=0))};"number"!==typeof window.google_srt&&(window.google_srt=Math.random());if("complete"==window.document.readyState)Ga();else if(X.l){var Ha=()=>{Ga()},Y=window;Y.addEventListener&&Y.addEventListener.call(Y,"load",Ha,!1)};function Z(a,b){a=a.getElementsByTagName("META");for(let d=0;d<a.length;++d)if(a[d].getAttribute("name")===b)return a[d].getAttribute("content")||"";return""};function Ia(a){if(!(0<a.i.length)){var b=Z(a.body,"environment");for(const d of b.split("|"))d&&a.i.push(d)}}function Ja(a){Ia(a);return 0<=a.i.indexOf("amp")}
var Ka=class{constructor(a){this.body=a;this.i=[];Z(a,"sampling_mod");var b=Z(a,"namespace");if(!b){b="ns-"+(0,Math.random)().toString(36).substr(2,5);a:{var d=a.getElementsByTagName("META");for(let c=0;c<d.length;++c)if("namespace"===d[c].getAttribute("name")&&d[c].getAttribute("index")===(0).toString()){d[c].setAttribute("content",b);break a}d=a.querySelector("#mys-meta");d||(d=document.createElement("div"),d.id="mys-meta",d.style.position="absolute",d.style.display="none",a.appendChild(d));a=document.createElement("META");
a.setAttribute("name","namespace");a.setAttribute("content",b);a.setAttribute("index",(0).toString());d.appendChild(a)}}Ia(this)}addEventListener(a,b){this.body.addEventListener(a,b)}};function La(a,b){if(b){b=JSON.parse(b);for(const d in b)b.hasOwnProperty(d)&&a.set(d,b[d])}}var Ma=class{constructor(){this.i={}}clear(){this.i={}}set(a,b){this.i[a]=b}get(a){return this.i[a]}};function Na({threshold:a,target:b,A:d,B:c}){if(window.IntersectionObserver){var f=!1;(new IntersectionObserver(e=>{0!==e.length&&e[0].isIntersecting&&(!f&&d&&d(),f=!0,c&&c())},{threshold:a})).observe(b)}};var Oa=class{constructor(){this.channel=1;(this.i=!(!window.mys||!window.mys.pingback))&&this.setData(43,Date.now()-window.mys.pingback.getBaseTime())}setAttribute(a,b){this.i&&window.mys.pingback.setAttribute(a,b)}setData(a,b){this.i&&window.mys.pingback.setData(a,b,this.channel)}send(a){this.i&&window.mys.pingback.send(a)}tick(a,b){this.i&&(this.setData(a,Date.now()-window.mys.pingback.getBaseTime()),this.send(b))}};var Pa=class{constructor(a){this.context=a;this.s=new Ma;this.pingback=new Oa}i(){}};var Qa=class extends Pa{};function Ra(a){a.l||(a.l=!0,Na({threshold:.9,target:document.querySelector(".x-layout"),A:()=>{const b=document.querySelector(".x-layout");b&&b.classList.add("web-on-show")}}))}var Sa=class extends Qa{constructor(a){super(a);this.l=!1}i(){setTimeout(()=>{za(()=>{Ra(this)})},0)}};(function(a){var b=document.getElementById("mys-content");if(b){b=new Ka(b);var d=new a(b);La(d.s,Z(b.body,"runtime_data"));a=ya(Z(b.body,"render_config")||"[]");var c;Ja(b)||(null==(c=ia(ia(a,xa,1),va,10))?0:ka(ha(c)))||(c=mys.engine?mys.engine.stage():0,0===(c&1)&&b.addEventListener("overallStart",()=>{}),0!==(c&4)&&d.i(),b.addEventListener("browserStart",()=>{}),b.addEventListener("browserReady",()=>{d.i()}),b.addEventListener("browserQuiet",()=>{}))}})(class extends Sa{});}).call(this);
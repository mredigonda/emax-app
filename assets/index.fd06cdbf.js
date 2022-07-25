const of=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};of();function le(){}function af(t,e){for(const n in e)t[n]=e[n];return t}function ku(t){return t()}function qa(){return Object.create(null)}function dt(t){t.forEach(ku)}function Fn(t){return typeof t=="function"}function we(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Fs;function ir(t,e){return Fs||(Fs=document.createElement("a")),Fs.href=e,t===Fs.href}function cf(t){return Object.keys(t).length===0}function uf(t,...e){if(t==null)return le;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function mo(t,e,n){t.$$.on_destroy.push(uf(e,n))}function Cu(t,e,n,s){if(t){const r=Ru(t,e,n,s);return t[0](r)}}function Ru(t,e,n,s){return t[1]&&s?af(n.ctx.slice(),t[1](s(e))):n.ctx}function Nu(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Du(t,e,n,s,r,i){if(r){const o=Ru(e,n,s,i);t.p(o,r)}}function Ou(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Ha(t){return t==null?"":t}function v(t,e){t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function G(t){t.parentNode.removeChild(t)}function go(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function K(){return J(" ")}function Ve(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function lf(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function or(t,e){t.value=e==null?"":e}function Ga(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function hf(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function df(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let Zn;function Gn(t){Zn=t}function Lu(){if(!Zn)throw new Error("Function called outside component initialization");return Zn}function Pu(t){Lu().$$.on_mount.push(t)}function Mu(){const t=Lu();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=df(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function Dr(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Vn=[],We=[],Qs=[],Pi=[],ff=Promise.resolve();let Mi=!1;function pf(){Mi||(Mi=!0,ff.then(Uu))}function ar(t){Qs.push(t)}function at(t){Pi.push(t)}const fi=new Set;let Vs=0;function Uu(){const t=Zn;do{for(;Vs<Vn.length;){const e=Vn[Vs];Vs++,Gn(e),mf(e.$$)}for(Gn(null),Vn.length=0,Vs=0;We.length;)We.pop()();for(let e=0;e<Qs.length;e+=1){const n=Qs[e];fi.has(n)||(fi.add(n),n())}Qs.length=0}while(Vn.length);for(;Pi.length;)Pi.pop()();Mi=!1,fi.clear(),Gn(t)}function mf(t){if(t.fragment!==null){t.update(),dt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ar)}}const Xs=new Set;let Mt;function fn(){Mt={r:0,c:[],p:Mt}}function pn(){Mt.r||dt(Mt.c),Mt=Mt.p}function B(t,e){t&&t.i&&(Xs.delete(t),t.i(e))}function W(t,e,n,s){if(t&&t.o){if(Xs.has(t))return;Xs.add(t),Mt.c.push(()=>{Xs.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ct(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ce(t){t&&t.c()}function ie(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||ar(()=>{const c=i.map(ku).filter(Fn);o?o.push(...c):dt(c),t.$$.on_mount=[]}),a.forEach(ar)}function oe(t,e){const n=t.$$;n.fragment!==null&&(dt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gf(t,e){t.$$.dirty[0]===-1&&(Vn.push(t),pf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function be(t,e,n,s,r,i,o,a=[-1]){const c=Zn;Gn(t);const u=t.$$={fragment:null,ctx:null,props:i,update:le,not_equal:r,bound:qa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:qa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(d,h,...f)=>{const p=f.length?f[0]:h;return u.ctx&&r(u.ctx[d],u.ctx[d]=p)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](p),l&&gf(t,d)),h}):[],u.update(),l=!0,dt(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const d=lf(e.target);u.fragment&&u.fragment.l(d),d.forEach(G)}else u.fragment&&u.fragment.c();e.intro&&B(t.$$.fragment),ie(t,e.target,e.anchor,e.customElement),Uu()}Gn(c)}class Ae{$destroy(){oe(this,1),this.$destroy=le}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!cf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var L=(t=>(t.PENDING="PENDING",t.APPROVED="APPROVED",t.ALERT="ALERT",t.CANCELLED="CANCELLED",t))(L||{}),es=(t=>(t.SUCCESS="SUCCESS",t.DANGER="DANGER",t))(es||{});function yf(t){let e,n,s,r,i;const o=t[2].default,a=Cu(o,t,t[1],null);return{c(){e=k("button"),a&&a.c(),w(e,"class",n=Ha("ui button "+(t[0]===es.SUCCESS?"positive":"negative"))+" svelte-1r0pnu3")},m(c,u){Q(c,e,u),a&&a.m(e,null),s=!0,r||(i=Ve(e,"click",t[3]),r=!0)},p(c,[u]){a&&a.p&&(!s||u&2)&&Du(a,o,c,c[1],s?Nu(o,c[1],u,null):Ou(c[1]),null),(!s||u&1&&n!==(n=Ha("ui button "+(c[0]===es.SUCCESS?"positive":"negative"))+" svelte-1r0pnu3"))&&w(e,"class",n)},i(c){s||(B(a,c),s=!0)},o(c){W(a,c),s=!1},d(c){c&&G(e),a&&a.d(c),r=!1,i()}}}function vf(t,e,n){let{$$slots:s={},$$scope:r}=e,{layout:i=es.SUCCESS}=e;function o(a){Dr.call(this,t,a)}return t.$$set=a=>{"layout"in a&&n(0,i=a.layout),"$$scope"in a&&n(1,r=a.$$scope)},[i,r,s,o]}class yo extends Ae{constructor(e){super(),be(this,e,vf,yf,we,{layout:0})}}function _f(t){let e,n,s;return{c(){e=k("input"),w(e,"type","text"),w(e,"name",t[1]),w(e,"class","svelte-g2xvdr")},m(r,i){Q(r,e,i),or(e,t[0]),n||(s=[Ve(e,"input",t[3]),Ve(e,"input",t[2])],n=!0)},p(r,[i]){i&2&&w(e,"name",r[1]),i&1&&e.value!==r[0]&&or(e,r[0])},i:le,o:le,d(r){r&&G(e),n=!1,dt(s)}}}function wf(t,e,n){let{name:s}=e,{value:r}=e;function i(a){Dr.call(this,t,a)}function o(){r=this.value,n(0,r)}return t.$$set=a=>{"name"in a&&n(1,s=a.name),"value"in a&&n(0,r=a.value)},[r,s,i,o]}class vo extends Ae{constructor(e){super(),be(this,e,wf,_f,we,{name:1,value:0})}}function Ef(t){let e,n,s;return{c(){e=k("input"),w(e,"type","password"),w(e,"name",t[1]),w(e,"class","svelte-g2xvdr")},m(r,i){Q(r,e,i),or(e,t[0]),n||(s=[Ve(e,"input",t[3]),Ve(e,"input",t[2])],n=!0)},p(r,[i]){i&2&&w(e,"name",r[1]),i&1&&e.value!==r[0]&&or(e,r[0])},i:le,o:le,d(r){r&&G(e),n=!1,dt(s)}}}function If(t,e,n){let{name:s}=e,{value:r}=e;function i(a){Dr.call(this,t,a)}function o(){r=this.value,n(0,r)}return t.$$set=a=>{"name"in a&&n(1,s=a.name),"value"in a&&n(0,r=a.value)},[r,s,i,o]}class Tf extends Ae{constructor(e){super(),be(this,e,If,Ef,we,{name:1,value:0})}}var xu="/emax-app/assets/icon-192.f78075aa.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},bf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(h=64)),s.push(n[l],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw Error();const h=i<<2|a>>4;if(s.push(h),u!==64){const f=a<<4&240|u>>2;if(s.push(f),d!==64){const p=u<<6&192|d;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Af=function(t){const e=Fu(t);return Vu.encodeByteArray(e,!0)},$u=function(t){return Af(t).replace(/\./g,"")},Sf=function(t){try{return Vu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function ju(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cf(){return Ie().indexOf("Electron/")>=0}function Hu(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rf(){return Ie().indexOf("MSAppHost/")>=0}function Nf(){return typeof indexedDB=="object"}function Df(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="FirebaseError";class Nt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Of,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Lf(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Nt(r,a,s)}}function Lf(t,e){return t.replace(Pf,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Pf=/\{\$([^}]+)}/g;function Mf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(za(i)&&za(o)){if(!cr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function za(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $n(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Uf(t,e){const n=new xf(t,e);return n.subscribe.bind(n)}class xf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ff(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=pi),r.error===void 0&&(r.error=pi),r.complete===void 0&&(r.complete=pi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ff(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return t&&t._delegate?t._delegate:t}class At{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new kf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bf(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$f(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $f(t){return t===Pt?void 0:t}function Bf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const qf={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Hf=ne.INFO,Gf={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},zf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Gf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _o{constructor(e){this.name=e,this._logLevel=Hf,this._logHandler=zf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Kf=(t,e)=>e.some(n=>t instanceof n);let Ka,Wa;function Wf(){return Ka||(Ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qf(){return Wa||(Wa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gu=new WeakMap,Ui=new WeakMap,zu=new WeakMap,mi=new WeakMap,wo=new WeakMap;function Xf(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gu.set(n,t)}).catch(()=>{}),wo.set(e,t),e}function Yf(t){if(Ui.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ui.set(t,e)}let xi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ui.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jf(t){xi=t(xi)}function Zf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gi(this),e,...n);return zu.set(s,e.sort?e.sort():[e]),Et(s)}:Qf().includes(t)?function(...e){return t.apply(gi(this),e),Et(Gu.get(this))}:function(...e){return Et(t.apply(gi(this),e))}}function ep(t){return typeof t=="function"?Zf(t):(t instanceof IDBTransaction&&Yf(t),Kf(t,Wf())?new Proxy(t,xi):t)}function Et(t){if(t instanceof IDBRequest)return Xf(t);if(mi.has(t))return mi.get(t);const e=ep(t);return e!==t&&(mi.set(t,e),wo.set(e,t)),e}const gi=t=>wo.get(t);function tp(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Et(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const np=["get","getKey","getAll","getAllKeys","count"],sp=["put","add","delete","clear"],yi=new Map;function Qa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yi.get(e))return yi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=sp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||np.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return yi.set(e,i),i}Jf(t=>({...t,get:(e,n,s)=>Qa(e,n)||t.get(e,n,s),has:(e,n)=>!!Qa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ip(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ip(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fi="@firebase/app",Xa="0.7.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new _o("@firebase/app"),op="@firebase/app-compat",ap="@firebase/analytics-compat",cp="@firebase/analytics",up="@firebase/app-check-compat",lp="@firebase/app-check",hp="@firebase/auth",dp="@firebase/auth-compat",fp="@firebase/database",pp="@firebase/database-compat",mp="@firebase/functions",gp="@firebase/functions-compat",yp="@firebase/installations",vp="@firebase/installations-compat",_p="@firebase/messaging",wp="@firebase/messaging-compat",Ep="@firebase/performance",Ip="@firebase/performance-compat",Tp="@firebase/remote-config",bp="@firebase/remote-config-compat",Ap="@firebase/storage",Sp="@firebase/storage-compat",kp="@firebase/firestore",Cp="@firebase/firestore-compat",Rp="firebase",Np="9.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="[DEFAULT]",Dp={[Fi]:"fire-core",[op]:"fire-core-compat",[cp]:"fire-analytics",[ap]:"fire-analytics-compat",[lp]:"fire-app-check",[up]:"fire-app-check-compat",[hp]:"fire-auth",[dp]:"fire-auth-compat",[fp]:"fire-rtdb",[pp]:"fire-rtdb-compat",[mp]:"fire-fn",[gp]:"fire-fn-compat",[yp]:"fire-iid",[vp]:"fire-iid-compat",[_p]:"fire-fcm",[wp]:"fire-fcm-compat",[Ep]:"fire-perf",[Ip]:"fire-perf-compat",[Tp]:"fire-rc",[bp]:"fire-rc-compat",[Ap]:"fire-gcs",[Sp]:"fire-gcs-compat",[kp]:"fire-fst",[Cp]:"fire-fst-compat","fire-js":"fire-js",[Rp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Map,Vi=new Map;function Op(t,e){try{t.container.addComponent(e)}catch(n){Eo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(Vi.has(e))return Eo.debug(`There were multiple attempts to register component ${e}.`),!1;Vi.set(e,t);for(const n of ur.values())Op(n,t);return!0}function Or(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},qt=new ms("app","Firebase",Lp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=Np;function Mp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ku,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});const r=ur.get(s);if(r){if(cr(t,r.options)&&cr(n,r.config))return r;throw qt.create("duplicate-app",{appName:s})}const i=new jf(s);for(const a of Vi.values())i.addComponent(a);const o=new Pp(t,n,i);return ur.set(s,o),o}function Io(t=Ku){const e=ur.get(t);if(!e)throw qt.create("no-app",{appName:t});return e}function Ye(t,e,n){var s;let r=(s=Dp[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Eo.warn(a.join(" "));return}jt(new At(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="firebase-heartbeat-database",xp=1,ts="firebase-heartbeat-store";let vi=null;function Wu(){return vi||(vi=tp(Up,xp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}}).catch(t=>{throw qt.create("storage-open",{originalErrorMessage:t.message})})),vi}async function Fp(t){var e;try{return(await Wu()).transaction(ts).objectStore(ts).get(Qu(t))}catch(n){throw qt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Ya(t,e){var n;try{const r=(await Wu()).transaction(ts,"readwrite");return await r.objectStore(ts).put(e,Qu(t)),r.done}catch(s){throw qt.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Qu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=1024,$p=30*24*60*60*1e3;class Bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ja();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=$p}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ja(),{heartbeatsToSend:n,unsentEntries:s}=jp(this._heartbeatsCache.heartbeats),r=$u(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ja(){return new Date().toISOString().substring(0,10)}function jp(t,e=Vp){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Za(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Za(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class qp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nf()?Df().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Za(t){return $u(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){jt(new At("platform-logger",e=>new rp(e),"PRIVATE")),jt(new At("heartbeat",e=>new Bp(e),"PRIVATE")),Ye(Fi,Xa,t),Ye(Fi,Xa,"esm2017"),Ye("fire-js","")}Hp("");function To(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Xu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gp=Xu,Yu=new ms("auth","Firebase",Xu()),zp={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new _o("@firebase/auth");function Ys(t,...e){ec.logLevel<=ne.ERROR&&ec.error(`Auth (${Cn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,...e){throw bo(t,...e)}function Je(t,...e){return bo(t,...e)}function Kp(t,e,n){const s=Object.assign(Object.assign({},Gp()),{[e]:n});return new ms("auth","Firebase",s).create(e,{appName:t.name})}function bo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yu.create(t,...e)}function V(t,e,...n){if(!t)throw bo(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ys(e),new Error(e)}function ut(t,e){t||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new Map;function st(t){ut(t instanceof Function,"Expected a class definition");let e=tc.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){const n=Or(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(cr(i,e!=null?e:{}))return r;Qe(r,"already-initialized")}return n.initialize({options:e})}function Qp(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xp(){return nc()==="http:"||nc()==="https:"}function nc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xp()||ju()||"connection"in navigator)?navigator.onLine:!0}function Jp(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Bu()||qu()}get(){return Yp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new ys(3e4,6e4);function Lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vs(t,e,n,s,r={}){return Zu(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=gs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ju.fetch()(el(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Zu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Zp),e);try{const r=new tm(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $s(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $s(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw $s(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kp(t,l,u);Qe(t,l)}}catch(r){if(r instanceof Nt)throw r;Qe(t,"network-request-failed")}}async function Pr(t,e,n,s,r={}){const i=await vs(t,e,n,s,r);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function el(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ao(t.config,r):`${t.config.apiScheme}://${r}`}class tm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"network-request-failed")),em.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $s(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Je(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e){return vs(t,"POST","/v1/accounts:delete",e)}async function sm(t,e){return vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rm(t,e=!1){const n=he(t),s=await n.getIdToken(e),r=So(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:zn(_i(r.auth_time)),issuedAtTime:zn(_i(r.iat)),expirationTime:zn(_i(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _i(t){return Number(t)*1e3}function So(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sf(s);return i?JSON.parse(i):(Ys("Failed to decode base64 JWT payload"),null)}catch(i){return Ys("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function im(t){const e=So(t);return V(e,"internal-error"),V(typeof e.exp!="undefined","internal-error"),V(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Nt&&om(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function om({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ns(t,sm(n,{idToken:s}));V(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lm(i.providerUserInfo):[],a=um(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tl(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function cm(t){const e=he(t);await lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function um(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function lm(t){return t.map(e=>{var{providerId:n}=e,s=To(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(t,e){const n=await Zu(t,{},async()=>{const s=gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=el(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ju.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken!="undefined","internal-error"),V(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):im(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await hm(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ss;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){V(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=To(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new am(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ns(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rm(this,e)}reload(){return cm(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await lr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ns(this,nm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,b=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:U,isAnonymous:x,providerData:T,stsTokenManager:E}=n;V(D&&E,e,"internal-error");const I=ss.fromJSON(this.name,E);V(typeof D=="string",e,"internal-error"),mt(d,e.name),mt(h,e.name),V(typeof U=="boolean",e,"internal-error"),V(typeof x=="boolean",e,"internal-error"),mt(f,e.name),mt(p,e.name),mt(m,e.name),mt(y,e.name),mt(C,e.name),mt(b,e.name);const g=new Vt({uid:D,auth:e,email:h,emailVerified:U,displayName:d,isAnonymous:x,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:I,createdAt:C,lastLoginAt:b});return T&&Array.isArray(T)&&(g.providerData=T.map(S=>Object.assign({},S))),y&&(g._redirectEventId=y),g}static async _fromIdTokenResponse(e,n,s=!1){const r=new ss;r.updateFromServerResponse(n);const i=new Vt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await lr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nl.type="NONE";const sc=nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e,n){return`firebase:${t}:${e}:${n}`}class cn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Js(this.userKey,r.apiKey,i),this.fullPersistenceKey=Js("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new cn(st(sc),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||st(sc);const o=Js(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const d=Vt._fromJSON(e,l);u!==i&&(a=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new cn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(il(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(al(e))return"Blackberry";if(cl(e))return"Webos";if(ko(e))return"Safari";if((e.includes("chrome/")||rl(e))&&!e.includes("edge/"))return"Chrome";if(ol(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sl(t=Ie()){return/firefox\//i.test(t)}function ko(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rl(t=Ie()){return/crios\//i.test(t)}function il(t=Ie()){return/iemobile/i.test(t)}function ol(t=Ie()){return/android/i.test(t)}function al(t=Ie()){return/blackberry/i.test(t)}function cl(t=Ie()){return/webos/i.test(t)}function Mr(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dm(t=Ie()){var e;return Mr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fm(){return Hu()&&document.documentMode===10}function ul(t=Ie()){return Mr(t)||ol(t)||cl(t)||al(t)||/windows phone/i.test(t)||il(t)}function pm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e=[]){let n;switch(t){case"Browser":n=rc(Ie());break;case"Worker":n=`${rc(Ie())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ic(this),this.idTokenSubscription=new ic(this),this.beforeStateQueue=new mm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await lr(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?he(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ll(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Co(t){return he(t)}class ic{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uf(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function ym(t,e){return vs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t,e){return Pr(t,"POST","/v1/accounts:signInWithPassword",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}async function wm(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Ro{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new rs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new rs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return vm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _m(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ym(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wm(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(t,e){return Pr(t,"POST","/v1/accounts:signInWithIdp",Lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="http://localhost";class Ht extends Ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=To(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ht(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return un(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,un(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,un(e,n)}buildRequest(){const e={requestUri:Em,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tm(t){const e=$n(Bn(t)).link,n=e?$n(Bn(e)).deep_link_id:null,s=$n(Bn(t)).deep_link_id;return(s?$n(Bn(s)).link:null)||s||n||e||t}class No{constructor(e){var n,s,r,i,o,a;const c=$n(Bn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,d=Im((r=c.mode)!==null&&r!==void 0?r:null);V(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Tm(e);try{return new No(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,n){return rs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=No.parseLink(n);return V(s,"argument-error"),rs._fromEmailAndCode(e,s.code,s.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends _s{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yt.credential(n,s)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends _s{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends _s{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return _t.credential(n,s)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Vt._fromIdTokenResponse(e,s,r),o=oc(s);return new mn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=oc(s);return new mn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function oc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Nt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new hr(e,n,s,r)}}function dl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(t,i,e,s):i})}async function bm(t,e,n=!1){const s=await ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await ns(t,dl(r,i,e,t),n);V(o.idToken,r,"internal-error");const a=So(o.idToken);V(a,r,"internal-error");const{sub:c}=a;return V(t.uid===c,r,"user-mismatch"),mn._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t,e,n=!1){const s="signIn",r=await dl(t,s,e),i=await mn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Sm(t,e){return fl(Co(t),e)}function km(t,e,n){return Sm(he(t),Rn.credential(e,n))}function Cm(t,e,n,s){return he(t).onAuthStateChanged(e,n,s)}const dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dr,"1"),this.storage.removeItem(dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){const t=Ie();return ko(t)||Mr(t)}const Nm=1e3,Dm=10;class ml extends pl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rm()&&pm(),this.fallbackToPolling=ul(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);fm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Dm):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Nm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ml.type="LOCAL";const Om=ml;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gl.type="SESSION";const yl=gl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ur(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Lm(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Do("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function Mm(t){Ze().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return typeof Ze().WorkerGlobalScope!="undefined"&&typeof Ze().importScripts=="function"}async function Um(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fm(){return vl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="firebaseLocalStorageDb",Vm=1,fr="firebaseLocalStorage",wl="fbase_key";class ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xr(t,e){return t.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function $m(){const t=indexedDB.deleteDatabase(_l);return new ws(t).toPromise()}function Bi(){const t=indexedDB.open(_l,Vm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(fr,{keyPath:wl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(fr)?e(s):(s.close(),await $m(),e(await Bi()))})})}async function ac(t,e,n){const s=xr(t,!0).put({[wl]:e,value:n});return new ws(s).toPromise()}async function Bm(t,e){const n=xr(t,!1).get(e),s=await new ws(n).toPromise();return s===void 0?null:s.value}function cc(t,e){const n=xr(t,!0).delete(e);return new ws(n).toPromise()}const jm=800,qm=3;class El{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>qm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance(Fm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Um(),!this.activeServiceWorker)return;this.sender=new Pm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bi();return await ac(e,dr,"1"),await cc(e,dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ac(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Bm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=xr(r,!1).getAll();return new ws(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}El.type="LOCAL";const Hm=El;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Je("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Gm().appendChild(s)})}function Km(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ys(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t,e){return e?st(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qm(t){return fl(t.auth,new Oo(t),t.bypassAuthState)}function Xm(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),Am(n,new Oo(t),t.bypassAuthState)}async function Ym(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),bm(n,new Oo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qm;case"linkViaPopup":case"linkViaRedirect":return Ym;case"reauthViaPopup":case"reauthViaRedirect":return Xm;default:Qe(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new ys(2e3,1e4);class rn extends Il{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Do();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Jm.get())};e()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="pendingRedirect",Zs=new Map;class eg extends Il{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Zs.get(this.auth._key());if(!e){try{const s=await tg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Zs.set(this.auth._key(),e)}return this.bypassAuthState||Zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tg(t,e){const n=rg(e),s=sg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function ng(t,e){Zs.set(t._key(),e)}function sg(t){return st(t._redirectPersistence)}function rg(t){return Js(Zm,t.config.apiKey,t.name)}async function ig(t,e,n=!1){const s=Co(t),r=Wm(s,e),o=await new eg(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=10*60*1e3;class ag{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Tl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=og&&this.cachedEventUids.clear(),this.cachedEventUids.has(uc(e))}saveEventToCache(e){this.cachedEventUids.add(uc(e)),this.lastProcessedEventTime=Date.now()}}function uc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(t,e={}){return vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hg=/^https?/;async function dg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ug(t);for(const n of e)try{if(fg(n))return}catch{}Qe(t,"unauthorized-domain")}function fg(t){const e=$i(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!hg.test(n))return!1;if(lg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new ys(3e4,6e4);function lc(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mg(t){return new Promise((e,n)=>{var s,r,i;function o(){lc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lc(),n(Je(t,"network-request-failed"))},timeout:pg.get()})}if(!((r=(s=Ze().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const a=Km("iframefcb");return Ze()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},zm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw er=null,e})}let er=null;function gg(t){return er=er||mg(t),er}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=new ys(5e3,15e3),vg="__/auth/iframe",_g="emulator/auth/iframe",wg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ig(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ao(e,_g):`https://${t.config.authDomain}/${vg}`,s={apiKey:e.apiKey,appName:t.name,v:Cn},r=Eg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${gs(s).slice(1)}`}async function Tg(t){const e=await gg(t),n=Ze().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:Ig(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ze().setTimeout(()=>{i(o)},yg.get());function c(){Ze().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ag=500,Sg=600,kg="_blank",Cg="http://localhost";class hc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rg(t,e,n,s=Ag,r=Sg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bg),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ie().toLowerCase();n&&(a=rl(u)?kg:n),sl(u)&&(e=e||Cg,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(dm(u)&&a!=="_self")return Ng(e||"",a),new hc(null);const d=window.open(e||"",a,l);V(d,t,"popup-blocked");try{d.focus()}catch{}return new hc(d)}function Ng(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="__/auth/handler",Og="emulator/auth/handler";function dc(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Cn,eventId:r};if(e instanceof hl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof _s){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Lg(t)}?${gs(a).slice(1)}`}function Lg({config:t}){return t.emulator?Ao(t,Og):`https://${t.authDomain}/${Dg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="webStorageSupport";class Pg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yl,this._completeRedirectFn=ig,this._overrideRedirectResult=ng}async _openPopup(e,n,s,r){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=dc(e,n,s,$i(),r);return Rg(e,o,Do())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Mm(dc(e,n,s,$i(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ut(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Tg(e),s=new ag(e);return n.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wi,{type:wi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[wi];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ul()||ko()||Mr()}}const Mg=Pg;var fc="@firebase/auth",pc="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Fg(t){jt(new At("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{V(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ll(t)},l=new gm(a,c,u);return Qp(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),jt(new At("auth-internal",e=>{const n=Co(e.getProvider("auth").getImmediate());return(s=>new Ug(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(fc,pc,xg(t)),Ye(fc,pc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t=Io()){const e=Or(t,"auth");return e.isInitialized()?e.getImmediate():Wp(t,{popupRedirectResolver:Mg,persistence:[Hm,Om,yl]})}Fg("Browser");var $g=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},N,Lo=Lo||{},$=$g||self;function pr(){}function ji(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Es(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Bg(t){return Object.prototype.hasOwnProperty.call(t,Ei)&&t[Ei]||(t[Ei]=++jg)}var Ei="closure_uid_"+(1e9*Math.random()>>>0),jg=0;function qg(t,e,n){return t.call.apply(t.bind,arguments)}function Hg(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ce(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ce=qg:Ce=Hg,Ce.apply(null,arguments)}function Bs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function De(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Dt(){this.s=this.s,this.o=this.o}var Gg=0;Dt.prototype.s=!1;Dt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Gg!=0)&&Bg(this)};Dt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Al=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function zg(t){e:{var e=xy;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function mc(t){return Array.prototype.concat.apply([],arguments)}function Po(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function mr(t){return/^[\s\xa0]*$/.test(t)}var gc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function xe(t,e){return t.indexOf(e)!=-1}function Ii(t,e){return t<e?-1:t>e?1:0}var Fe;e:{var yc=$.navigator;if(yc){var vc=yc.userAgent;if(vc){Fe=vc;break e}}Fe=""}function Mo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Sl(t){const e={};for(const n in t)e[n]=t[n];return e}var _c="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kl(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<_c.length;i++)n=_c[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Uo(t){return Uo[" "](t),t}Uo[" "]=pr;function Kg(t){var e=Xg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Wg=xe(Fe,"Opera"),gn=xe(Fe,"Trident")||xe(Fe,"MSIE"),Cl=xe(Fe,"Edge"),qi=Cl||gn,Rl=xe(Fe,"Gecko")&&!(xe(Fe.toLowerCase(),"webkit")&&!xe(Fe,"Edge"))&&!(xe(Fe,"Trident")||xe(Fe,"MSIE"))&&!xe(Fe,"Edge"),Qg=xe(Fe.toLowerCase(),"webkit")&&!xe(Fe,"Edge");function Nl(){var t=$.document;return t?t.documentMode:void 0}var gr;e:{var Ti="",bi=function(){var t=Fe;if(Rl)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cl)return/Edge\/([\d\.]+)/.exec(t);if(gn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Qg)return/WebKit\/(\S+)/.exec(t);if(Wg)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bi&&(Ti=bi?bi[1]:""),gn){var Ai=Nl();if(Ai!=null&&Ai>parseFloat(Ti)){gr=String(Ai);break e}}gr=Ti}var Xg={};function Yg(){return Kg(function(){let t=0;const e=gc(String(gr)).split("."),n=gc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ii(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ii(r[2].length==0,i[2].length==0)||Ii(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Hi;if($.document&&gn){var wc=Nl();Hi=wc||parseInt(gr,10)||void 0}else Hi=void 0;var Jg=Hi,Zg=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",pr,e),$.removeEventListener("test",pr,e)}catch{}return t}();function Pe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};function is(t,e){if(Pe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Rl){e:{try{Uo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ey[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&is.Z.h.call(this)}}De(is,Pe);var ey={2:"touch",3:"pen",4:"mouse"};is.prototype.h=function(){is.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Is="closure_listenable_"+(1e6*Math.random()|0),ty=0;function ny(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++ty,this.ca=this.fa=!1}function Fr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Vr(t){this.src=t,this.g={},this.h=0}Vr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=zi(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ny(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Gi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=bl(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Fr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zi(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var xo="closure_lm_"+(1e6*Math.random()|0),Si={};function Dl(t,e,n,s,r){if(s&&s.once)return Ll(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Dl(t,e[i],n,s,r);return null}return n=$o(n),t&&t[Is]?t.N(e,n,Es(s)?!!s.capture:!!s,r):Ol(t,e,n,!1,s,r)}function Ol(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Es(r)?!!r.capture:!!r,a=Vo(t);if(a||(t[xo]=a=new Vr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=sy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Zg||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ml(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sy(){function t(n){return e.call(t.src,t.listener,n)}var e=ry;return t}function Ll(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ll(t,e[i],n,s,r);return null}return n=$o(n),t&&t[Is]?t.O(e,n,Es(s)?!!s.capture:!!s,r):Ol(t,e,n,!0,s,r)}function Pl(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Pl(t,e[i],n,s,r);else s=Es(s)?!!s.capture:!!s,n=$o(n),t&&t[Is]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=zi(i,n,s,r),-1<n&&(Fr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zi(e,n,s,r)),(n=-1<t?e[t]:null)&&Fo(n))}function Fo(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Is])Gi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ml(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Vo(e))?(Gi(n,t),n.h==0&&(n.src=null,e[xo]=null)):Fr(t)}}}function Ml(t){return t in Si?Si[t]:Si[t]="on"+t}function ry(t,e){if(t.ca)t=!0;else{e=new is(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Fo(t),t=n.call(s,e)}return t}function Vo(t){return t=t[xo],t instanceof Vr?t:null}var ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function $o(t){return typeof t=="function"?t:(t[ki]||(t[ki]=function(e){return t.handleEvent(e)}),t[ki])}function Te(){Dt.call(this),this.i=new Vr(this),this.P=this,this.I=null}De(Te,Dt);Te.prototype[Is]=!0;Te.prototype.removeEventListener=function(t,e,n,s){Pl(this,t,e,n,s)};function Re(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Pe(e,t);else if(e instanceof Pe)e.target=e.target||t;else{var r=e;e=new Pe(s,t),kl(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=js(o,s,!0,e)&&r}if(o=e.g=t,r=js(o,s,!0,e)&&r,r=js(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=js(o,s,!1,e)&&r}Te.prototype.M=function(){if(Te.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Fr(n[s]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function js(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Gi(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Bo=$.JSON.stringify;function iy(){var t=xl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oy{constructor(){this.h=this.g=null}add(e,n){const s=Ul.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ul=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ay,t=>t.reset());class ay{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cy(t){$.setTimeout(()=>{throw t},0)}function jo(t,e){Ki||uy(),Wi||(Ki(),Wi=!0),xl.add(t,e)}var Ki;function uy(){var t=$.Promise.resolve(void 0);Ki=function(){t.then(ly)}}var Wi=!1,xl=new oy;function ly(){for(var t;t=iy();){try{t.h.call(t.g)}catch(n){cy(n)}var e=Ul;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wi=!1}function $r(t,e){Te.call(this),this.h=t||1,this.g=e||$,this.j=Ce(this.kb,this),this.l=Date.now()}De($r,Te);N=$r.prototype;N.da=!1;N.S=null;N.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Re(this,"tick"),this.da&&(qo(this),this.start()))}};N.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qo(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}N.M=function(){$r.Z.M.call(this),qo(this),delete this.g};function Ho(t,e,n){if(typeof t=="function")n&&(t=Ce(t,n));else if(t&&typeof t.handleEvent=="function")t=Ce(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Fl(t){t.g=Ho(()=>{t.g=null,t.i&&(t.i=!1,Fl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hy extends Dt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fl(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function os(t){Dt.call(this),this.h=t,this.g={}}De(os,Dt);var Ec=[];function Vl(t,e,n,s){Array.isArray(n)||(n&&(Ec[0]=n.toString()),n=Ec);for(var r=0;r<n.length;r++){var i=Dl(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function $l(t){Mo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fo(e)},t),t.g={}}os.prototype.M=function(){os.Z.M.call(this),$l(this)};os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Br(){this.g=!0}Br.prototype.Aa=function(){this.g=!1};function dy(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var d=l.split("_");o=2<=d.length&&d[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function fy(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function on(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+my(t,n)+(s?" "+s:"")})}function py(t,e){t.info(function(){return"TIMEOUT: "+e})}Br.prototype.info=function(){};function my(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Bo(n)}catch{return e}}var Yt={},Ic=null;function jr(){return Ic=Ic||new Te}Yt.Ma="serverreachability";function Bl(t){Pe.call(this,Yt.Ma,t)}De(Bl,Pe);function as(t){const e=jr();Re(e,new Bl(e))}Yt.STAT_EVENT="statevent";function jl(t,e){Pe.call(this,Yt.STAT_EVENT,t),this.stat=e}De(jl,Pe);function $e(t){const e=jr();Re(e,new jl(e,t))}Yt.Na="timingevent";function ql(t,e){Pe.call(this,Yt.Na,t),this.size=e}De(ql,Pe);function Ts(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var qr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Hl={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Go(){}Go.prototype.h=null;function Tc(t){return t.h||(t.h=t.i())}function Gl(){}var bs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function zo(){Pe.call(this,"d")}De(zo,Pe);function Ko(){Pe.call(this,"c")}De(Ko,Pe);var Qi;function Hr(){}De(Hr,Go);Hr.prototype.g=function(){return new XMLHttpRequest};Hr.prototype.i=function(){return{}};Qi=new Hr;function As(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new os(this),this.P=gy,t=qi?125:void 0,this.W=new $r(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new zl}function zl(){this.i=null,this.g="",this.h=!1}var gy=45e3,Xi={},yr={};N=As.prototype;N.setTimeout=function(t){this.P=t};function Yi(t,e,n){t.K=1,t.v=zr(lt(e)),t.s=n,t.U=!0,Kl(t,null)}function Kl(t,e){t.F=Date.now(),Ss(t),t.A=lt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),eh(n.h,"t",s),t.C=0,n=t.l.H,t.h=new zl,t.g=wh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new hy(Ce(t.Ia,t,t.g),t.O)),Vl(t.V,t.g,"readystatechange",t.gb),e=t.H?Sl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),as(),dy(t.j,t.u,t.A,t.m,t.X,t.s)}N.gb=function(t){t=t.target;const e=this.L;e&&rt(t)==3?e.l():this.Ia(t)};N.Ia=function(t){try{if(t==this.g)e:{const l=rt(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(l!=3||qi||this.g&&(this.h.h||this.g.ga()||kc(this.g)))){this.I||l!=4||e==7||(e==8||0>=d?as(3):as(2)),Gr(this);var n=this.g.ba();this.N=n;t:if(Wl(this)){var s=kc(this.g);t="";var r=s.length,i=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ut(this),Kn(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,fy(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mr(a)){var u=a;break t}}u=null}if(n=u)on(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ji(this,n);else{this.i=!1,this.o=3,$e(12),Ut(this),Kn(this);break e}}this.U?(Ql(this,l,o),qi&&this.i&&l==3&&(Vl(this.V,this.W,"tick",this.fb),this.W.start())):(on(this.j,this.m,o,null),Ji(this,o)),l==4&&Ut(this),this.i&&!this.I&&(l==4?gh(this.l,this):(this.i=!1,Ss(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$e(12)):(this.o=0,$e(13)),Ut(this),Kn(this)}}}catch{}finally{}};function Wl(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ql(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=yy(t,n),r==yr){e==4&&(t.o=4,$e(14),s=!1),on(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Xi){t.o=4,$e(15),on(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else on(t.j,t.m,r,null),Ji(t,r);Wl(t)&&r!=yr&&r!=Xi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$e(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),na(e),e.L=!0,$e(11))):(on(t.j,t.m,n,"[Invalid Chunked Response]"),Ut(t),Kn(t))}N.fb=function(){if(this.g){var t=rt(this.g),e=this.g.ga();this.C<e.length&&(Gr(this),Ql(this,t,e),this.i&&t!=4&&Ss(this))}};function yy(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?yr:(n=Number(e.substring(n,s)),isNaN(n)?Xi:(s+=1,s+n>e.length?yr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,Ut(this)};function Ss(t){t.Y=Date.now()+t.P,Xl(t,t.P)}function Xl(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ts(Ce(t.eb,t),e)}function Gr(t){t.B&&($.clearTimeout(t.B),t.B=null)}N.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(py(this.j,this.A),this.K!=2&&(as(),$e(17)),Ut(this),this.o=2,Kn(this)):Xl(this,this.Y-t)};function Kn(t){t.l.G==0||t.I||gh(t.l,t)}function Ut(t){Gr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,qo(t.W),$l(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ji(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Zi(n.i,t))){if(n.I=t.N,!t.J&&Zi(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Er(n),Qr(n);else break e;ta(n),$e(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ts(Ce(n.ab,n),6e3));if(1>=sh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else xt(n,11)}else if((t.J||n.g==t)&&Er(n),!mr(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const d=u[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.i;!i.g&&(xe(p,"spdy")||xe(p,"quic")||xe(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Xo(i,i.h),i.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.sa=m,ue(s.F,s.D,m))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=_h(s,s.H?s.la:null,s.W),o.J){rh(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Gr(a),Ss(a)),s.g=o}else ph(s);0<n.l.length&&Xr(n)}else u[0]!="stop"&&u[0]!="close"||xt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?xt(n,7):ea(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}as(4)}catch{}}function vy(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ji(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Wo(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ji(t)||typeof t=="string")Al(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ji(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=vy(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Nn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Nn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}N=Nn.prototype;N.R=function(){Qo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};N.T=function(){return Qo(this),this.g.concat()};function Qo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Gt(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Gt(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}N.get=function(t,e){return Gt(this.h,t)?this.h[t]:e};N.set=function(t,e){Gt(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};N.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Yl=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function _y(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function zt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof zt){this.g=e!==void 0?e:t.g,vr(this,t.j),this.s=t.s,_r(this,t.i),wr(this,t.m),this.l=t.l,e=t.h;var n=new cs;n.i=e.i,e.g&&(n.g=new Nn(e.g),n.h=e.h),bc(this,n),this.o=t.o}else t&&(n=String(t).match(Yl))?(this.g=!!e,vr(this,n[1]||"",!0),this.s=Wn(n[2]||""),_r(this,n[3]||"",!0),wr(this,n[4]),this.l=Wn(n[5]||"",!0),bc(this,n[6]||"",!0),this.o=Wn(n[7]||"")):(this.g=!!e,this.h=new cs(null,this.g))}zt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(jn(e,Ac,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(jn(e,Ac,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(jn(n,n.charAt(0)=="/"?by:Ty,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",jn(n,Sy)),t.join("")};function lt(t){return new zt(t)}function vr(t,e,n){t.j=n?Wn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _r(t,e,n){t.i=n?Wn(e,!0):e}function wr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bc(t,e,n){e instanceof cs?(t.h=e,ky(t.h,t.g)):(n||(e=jn(e,Ay)),t.h=new cs(e,t.g))}function ue(t,e,n){t.h.set(e,n)}function zr(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wy(t){return t instanceof zt?lt(t):new zt(t,void 0)}function Ey(t,e,n,s){var r=new zt(null,void 0);return t&&vr(r,t),e&&_r(r,e),n&&wr(r,n),s&&(r.l=s),r}function Wn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function jn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Iy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Iy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ac=/[#\/\?@]/g,Ty=/[#\?:]/g,by=/[#\?]/g,Ay=/[#\?@]/g,Sy=/#/g;function cs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ot(t){t.g||(t.g=new Nn,t.h=0,t.i&&_y(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=cs.prototype;N.add=function(t,e){Ot(this),this.i=null,t=Dn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Jl(t,e){Ot(t),e=Dn(t,e),Gt(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Gt(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Qo(t)))}function Zl(t,e){return Ot(t),e=Dn(t,e),Gt(t.g.h,e)}N.forEach=function(t,e){Ot(this),this.g.forEach(function(n,s){Al(n,function(r){t.call(e,r,s,this)},this)},this)};N.T=function(){Ot(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};N.R=function(t){Ot(this);var e=[];if(typeof t=="string")Zl(this,t)&&(e=mc(e,this.g.get(Dn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=mc(e,t[n])}return e};N.set=function(t,e){return Ot(this),this.i=null,t=Dn(this,t),Zl(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function eh(t,e,n){Jl(t,e),0<n.length&&(t.i=null,t.g.set(Dn(t,e),Po(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Dn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ky(t,e){e&&!t.j&&(Ot(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Jl(this,s),eh(this,r,n))},t)),t.j=e}var Cy=class{constructor(t,e){this.h=t,this.g=e}};function th(t){this.l=t||Ry,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ry=10;function nh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sh(t){return t.h?1:t.g?t.g.size:0}function Zi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xo(t,e){t.g?t.g.add(e):t.h=e}function rh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}th.prototype.cancel=function(){if(this.i=ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ih(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Po(t.i)}function Yo(){}Yo.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Yo.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function Ny(){this.g=new Yo}function Dy(t,e,n){const s=n||"";try{Wo(t,function(r,i){let o=r;Es(r)&&(o=Bo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Oy(t,e){const n=new Br;if($.Image){const s=new Image;s.onload=Bs(qs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Bs(qs,n,s,"TestLoadImage: error",!1,e),s.onabort=Bs(qs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Bs(qs,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function qs(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ks(t){this.l=t.$b||null,this.j=t.ib||!1}De(ks,Go);ks.prototype.g=function(){return new Kr(this.l,this.j)};ks.prototype.i=function(t){return function(){return t}}({});function Kr(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Jo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Kr,Te);var Jo=0;N=Kr.prototype;N.open=function(t,e){if(this.readyState!=Jo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,us(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=Jo};N.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oh(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function oh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}N.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cs(this):us(this),this.readyState==3&&oh(this)}};N.Ua=function(t){this.g&&(this.response=this.responseText=t,Cs(this))};N.Ta=function(t){this.g&&(this.response=t,Cs(this))};N.ha=function(){this.g&&Cs(this)};function Cs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,us(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function us(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ly=$.JSON.parse;function ge(t){Te.call(this),this.headers=new Nn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ah,this.K=this.L=!1}De(ge,Te);var ah="",Py=/^https?$/i,My=["POST","PUT"];N=ge.prototype;N.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qi.g(),this.C=this.u?Tc(this.u):Tc(Qi),this.g.onreadystatechange=Ce(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Sc(this,i);return}t=n||"";const r=new Nn(this.headers);s&&Wo(s,function(i,o){r.set(o,i)}),s=zg(r.T()),n=$.FormData&&t instanceof $.FormData,!(0<=bl(My,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lh(this),0<this.B&&((this.K=Uy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ce(this.pa,this)):this.A=Ho(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Sc(this,i)}};function Uy(t){return gn&&Yg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function xy(t){return t.toLowerCase()=="content-type"}N.pa=function(){typeof Lo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function Sc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ch(t),Wr(t)}function ch(t){t.D||(t.D=!0,Re(t,"complete"),Re(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),Wr(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wr(this,!0)),ge.Z.M.call(this)};N.Fa=function(){this.s||(this.F||this.v||this.l?uh(this):this.cb())};N.cb=function(){uh(this)};function uh(t){if(t.h&&typeof Lo!="undefined"&&(!t.C[1]||rt(t)!=4||t.ba()!=2)){if(t.v&&rt(t)==4)Ho(t.Fa,0,t);else if(Re(t,"readystatechange"),rt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Yl)[1]||null;if(!r&&$.self&&$.self.location){var i=$.self.location.protocol;r=i.substr(0,i.length-1)}s=!Py.test(r?r.toLowerCase():"")}n=s}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var o=2<rt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",ch(t)}}finally{Wr(t)}}}}function Wr(t,e){if(t.g){lh(t);const n=t.g,s=t.C[0]?pr:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=s}catch{}}}function lh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function rt(t){return t.g?t.g.readyState:0}N.ba=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}};N.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ly(e)}};function kc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ah:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Da=function(){return this.m};N.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fy(t){let e="";return Mo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Zo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Fy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Un(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hh(t){this.za=0,this.l=[],this.h=new Br,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Un("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Un("baseRetryDelayMs",5e3,t),this.$a=Un("retryDelaySeedMs",1e4,t),this.Ya=Un("forwardChannelMaxRetries",2,t),this.ra=Un("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new th(t&&t.concurrentRequestLimit),this.Ca=new Ny,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}N=hh.prototype;N.ma=8;N.G=1;function ea(t){if(dh(t),t.G==3){var e=t.V++,n=lt(t.F);ue(n,"SID",t.J),ue(n,"RID",e),ue(n,"TYPE","terminate"),Rs(t,n),e=new As(t,t.h,e,void 0),e.K=2,e.v=zr(lt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=wh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ss(e)}vh(t)}N.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Qr(t){t.g&&(na(t),t.g.cancel(),t.g=null)}function dh(t){Qr(t),t.u&&($.clearTimeout(t.u),t.u=null),Er(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Ci(t,e){t.l.push(new Cy(t.Za++,e)),t.G==3&&Xr(t)}function Xr(t){nh(t.i)||t.m||(t.m=!0,jo(t.Ha,t),t.C=0)}function Vy(t,e){return sh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ts(Ce(t.Ha,t,e),yh(t,t.C)),t.C++,!0)}N.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new As(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Sl(i),kl(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fh(this,r,e),n=lt(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Rs(this,n),this.o&&i&&Zo(n,this.o,i),Xo(this.i,r),this.Ra&&ue(n,"TYPE","init"),this.ja?(ue(n,"$req",e),ue(n,"SID","null"),r.$=!0,Yi(r,n,null)):Yi(r,n,e),this.G=2}}else this.G==3&&(t?Cc(this,t):this.l.length==0||nh(this.i)||Cc(this))};function Cc(t,e){var n;e?n=e.m:n=t.V++;const s=lt(t.F);ue(s,"SID",t.J),ue(s,"RID",n),ue(s,"AID",t.U),Rs(t,s),t.o&&t.s&&Zo(s,t.o,t.s),n=new As(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Xo(t.i,n),Yi(n,s,e)}function Rs(t,e){t.j&&Wo({},function(n,s){ue(e,s,n)})}function fh(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ce(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Dy(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function ph(t){t.g||t.u||(t.Y=1,jo(t.Ga,t),t.A=0)}function ta(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ts(Ce(t.Ga,t),yh(t,t.A)),t.A++,!0)}N.Ga=function(){if(this.u=null,mh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ts(Ce(this.bb,this),t)}};N.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,$e(10),Qr(this),mh(this))};function na(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function mh(t){t.g=new As(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=lt(t.oa);ue(e,"RID","rpc"),ue(e,"SID",t.J),ue(e,"CI",t.N?"0":"1"),ue(e,"AID",t.U),Rs(t,e),ue(e,"TYPE","xmlhttp"),t.o&&t.s&&Zo(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=zr(lt(e)),n.s=null,n.U=!0,Kl(n,t)}N.ab=function(){this.v!=null&&(this.v=null,Qr(this),ta(this),$e(19))};function Er(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function gh(t,e){var n=null;if(t.g==e){Er(t),na(t),t.g=null;var s=2}else if(Zi(t.i,e))n=e.D,rh(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=jr(),Re(s,new ql(s,n)),Xr(t)}else ph(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&Vy(t,e)||s==2&&ta(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:xt(t,5);break;case 4:xt(t,10);break;case 3:xt(t,6);break;default:xt(t,2)}}}function yh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function xt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ce(t.jb,t);n||(n=new zt("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||vr(n,"https"),zr(n)),Oy(n.toString(),s)}else $e(2);t.G=0,t.j&&t.j.va(e),vh(t),dh(t)}N.jb=function(t){t?(this.h.info("Successfully pinged google.com"),$e(2)):(this.h.info("Failed to ping google.com"),$e(1))};function vh(t){t.G=0,t.I=-1,t.j&&((ih(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Po(t.l),t.l.length=0),t.j.ua())}function _h(t,e,n){let s=wy(n);if(s.i!="")e&&_r(s,e+"."+s.i),wr(s,s.m);else{const r=$.location;s=Ey(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Mo(t.aa,function(r,i){ue(s,i,r)}),e=t.D,n=t.sa,e&&n&&ue(s,e,n),ue(s,"VER",t.ma),Rs(t,s),s}function wh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ge(new ks({ib:!0})):new ge(t.qa),e.L=t.H,e}function Eh(){}N=Eh.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Oa=function(){};function Ir(){if(gn&&!(10<=Number(Jg)))throw Error("Environmental error: no available transport.")}Ir.prototype.g=function(t,e){return new ze(t,e)};function ze(t,e){Te.call(this),this.g=new hh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!mr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new On(this)}De(ze,Te);ze.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jo(Ce(t.hb,t,e))),$e(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_h(t,null,t.W),Xr(t)};ze.prototype.close=function(){ea(this.g)};ze.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ci(this.g,e)}else this.v?(e={},e.__data__=Bo(t),Ci(this.g,e)):Ci(this.g,t)};ze.prototype.M=function(){this.g.j=null,delete this.j,ea(this.g),delete this.g,ze.Z.M.call(this)};function Ih(t){zo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(Ih,zo);function Th(){Ko.call(this),this.status=1}De(Th,Ko);function On(t){this.g=t}De(On,Eh);On.prototype.xa=function(){Re(this.g,"a")};On.prototype.wa=function(t){Re(this.g,new Ih(t))};On.prototype.va=function(t){Re(this.g,new Th)};On.prototype.ua=function(){Re(this.g,"b")};Ir.prototype.createWebChannel=Ir.prototype.g;ze.prototype.send=ze.prototype.u;ze.prototype.open=ze.prototype.m;ze.prototype.close=ze.prototype.close;qr.NO_ERROR=0;qr.TIMEOUT=8;qr.HTTP_ERROR=6;Hl.COMPLETE="complete";Gl.EventType=bs;bs.OPEN="a";bs.CLOSE="b";bs.ERROR="c";bs.MESSAGE="d";Te.prototype.listen=Te.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.La;ge.prototype.getLastErrorCode=ge.prototype.Da;ge.prototype.getStatus=ge.prototype.ba;ge.prototype.getResponseJson=ge.prototype.Qa;ge.prototype.getResponseText=ge.prototype.ga;ge.prototype.send=ge.prototype.ea;var $y=function(){return new Ir},By=function(){return jr()},Ri=qr,jy=Hl,qy=Yt,Rc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Hy=ks,Hs=Gl,Gy=ge;const Nc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln="9.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new _o("@firebase/firestore");function Dc(){return Kt.logLevel}function P(t,...e){if(Kt.logLevel<=ne.DEBUG){const n=e.map(sa);Kt.debug(`Firestore (${Ln}): ${t}`,...n)}}function St(t,...e){if(Kt.logLevel<=ne.ERROR){const n=e.map(sa);Kt.error(`Firestore (${Ln}): ${t}`,...n)}}function Oc(t,...e){if(Kt.logLevel<=ne.WARN){const n=e.map(sa);Kt.warn(`Firestore (${Ln}): ${t}`,...n)}}function sa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${Ln}) INTERNAL ASSERTION FAILED: `+t;throw St(e),new Error(e)}function ae(t,e){t||j()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ky{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class Wy{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new It;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new It,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new It)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ae(typeof s.accessToken=="string"),new zy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new qe(e)}}class Qy{constructor(e,n,s){this.type="FirstParty",this.user=qe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Xy{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Qy(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jy{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.p=n.token,new Yy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Zy(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function se(t,e){return t<e?-1:t>e?1:0}function yn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new ye(0,0))}static max(){return new X(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n,s){n===void 0?n=0:n>e.length&&j(),s===void 0?s=e.length-n:s>e.length-n&&j(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ls.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ls?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends ls{construct(e,n,s){return new re(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new R(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new re(n)}static emptyPath(){return new re([])}}const ev=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends ls{construct(e,n,s){return new Le(e,n,s)}static isValidIdentifier(e){return ev.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new R(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new R(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new R(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(re.fromString(e))}static fromName(e){return new M(re.fromString(e).popFirst(5))}static empty(){return new M(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new re(e.slice()))}}function tv(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=X.fromTimestamp(s===1e9?new ye(n+1,0):new ye(n,s));return new kt(r,M.empty(),e)}function nv(t){return new kt(t.readTime,t.key,-1)}class kt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new kt(X.min(),M.empty(),-1)}static max(){return new kt(X.max(),M.empty(),-1)}}function sv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==rv)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ds(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ah(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ra.ot=-1;class _e{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gs(this.root,e,this.comparator,!0)}}class Gs{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Se.RED,this.left=r!=null?r:Se.EMPTY,this.right=i!=null?i:Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Se(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pc(this.data.getIterator())}getIteratorFrom(e){return new Pc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class Pc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new Ke([])}unionWith(e){let n=new ve(Le.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ke(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ne(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ne(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const ov=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(t){if(ae(!!t),typeof t=="string"){let e=0;const n=ov.exec(t);if(ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vn(t){return typeof t=="string"?Ne.fromBase64String(t):Ne.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sh(t){const e=t.mapValue.fields.__previous_value__;return ia(e)?Sh(e):e}function hs(t){const e=Ct(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class _n{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _n&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){return t==null}function Tr(t){return t===0&&1/t==-1/0}function cv(t){return typeof t=="number"&&Number.isInteger(t)&&!Tr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ia(t)?4:uv(t)?9007199254740991:10:j()}function tt(t,e){if(t===e)return!0;const n=Wt(t);if(n!==Wt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hs(t).isEqual(hs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ct(s.timestampValue),o=Ct(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return vn(s.bytesValue).isEqual(vn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return pe(s.geoPointValue.latitude)===pe(r.geoPointValue.latitude)&&pe(s.geoPointValue.longitude)===pe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return pe(s.integerValue)===pe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=pe(s.doubleValue),o=pe(r.doubleValue);return i===o?Tr(i)===Tr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return yn(t.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Lc(i)!==Lc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!tt(i[a],o[a])))return!1;return!0}(t,e);default:return j()}}function ds(t,e){return(t.values||[]).find(n=>tt(n,e))!==void 0}function wn(t,e){if(t===e)return 0;const n=Wt(t),s=Wt(e);if(n!==s)return se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=pe(r.integerValue||r.doubleValue),a=pe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Mc(t.timestampValue,e.timestampValue);case 4:return Mc(hs(t),hs(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,i){const o=vn(r),a=vn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=se(o[c],a[c]);if(u!==0)return u}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=se(pe(r.latitude),pe(i.latitude));return o!==0?o:se(pe(r.longitude),pe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=wn(o[c],a[c]);if(u)return u}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===zs.mapValue&&i===zs.mapValue)return 0;if(r===zs.mapValue)return 1;if(i===zs.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const d=se(a[l],u[l]);if(d!==0)return d;const h=wn(o[a[l]],c[u[l]]);if(h!==0)return h}return se(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function Mc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Ct(t),s=Ct(e),r=se(n.seconds,s.seconds);return r!==0?r:se(n.nanos,s.nanos)}function ln(t){return eo(t)}function eo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ct(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?vn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=eo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${eo(s.fields[a])}`;return i+"}"}(t.mapValue):j();var e,n}function br(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function to(t){return!!t&&"integerValue"in t}function oa(t){return!!t&&"arrayValue"in t}function Uc(t){return!!t&&"nullValue"in t}function xc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tr(t){return!!t&&"mapValue"in t}function Qn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Qn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!tr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qn(n)}setAll(e){let n=Le.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Qn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());tr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];tr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Jt(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new He(Qn(this.value))}}function kh(t){const e=[];return Jt(t.fields,(n,s)=>{const r=new Le([n]);if(tr(s)){const i=kh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ke(e,0,X.min(),X.min(),He.empty(),0)}static newFoundDocument(e,n,s){return new ke(e,1,n,X.min(),s,0)}static newNoDocument(e,n){return new ke(e,2,n,X.min(),He.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,X.min(),He.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Fc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new lv(t,e,n,s,r,i,o)}function aa(t){const e=q(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+ln(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Yr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ln(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ln(s)).join(",")),e.ut=n}return e.ut}function hv(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ln(s.value)}`;var s}).join(", ")}]`),Yr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ln(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ln(n)).join(",")),`Target(${e})`}function ca(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!_v(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!tt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$c(t.startAt,e.startAt)&&$c(t.endAt,e.endAt)}function no(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Be extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new dv(e,n,s):n==="array-contains"?new mv(e,s):n==="in"?new gv(e,s):n==="not-in"?new yv(e,s):n==="array-contains-any"?new vv(e,s):new Be(e,n,s)}static ct(e,n,s){return n==="in"?new fv(e,s):new pv(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(wn(n,this.value)):n!==null&&Wt(this.value)===Wt(n)&&this.at(wn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class dv extends Be{constructor(e,n,s){super(e,n,s),this.key=M.fromName(s.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.at(n)}}class fv extends Be{constructor(e,n){super(e,"in",n),this.keys=Ch("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pv extends Be{constructor(e,n){super(e,"not-in",n),this.keys=Ch("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ch(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>M.fromName(s.referenceValue))}class mv extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oa(n)&&ds(n.arrayValue,this.value)}}class gv extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ds(this.value.arrayValue,n)}}class yv extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ds(this.value.arrayValue,n)}}class vv extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ds(this.value.arrayValue,s))}}class En{constructor(e,n){this.position=e,this.inclusive=n}}class hn{constructor(e,n="asc"){this.field=e,this.dir=n}}function _v(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),n.key):s=wn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function $c(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function wv(t,e,n,s,r,i,o,a){return new Zt(t,e,n,s,r,i,o,a)}function ua(t){return new Zt(t)}function Ev(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function la(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ha(t){for(const e of t.filters)if(e.ht())return e.field;return null}function da(t){return t.collectionGroup!==null}function In(t){const e=q(t);if(e.lt===null){e.lt=[];const n=ha(e),s=la(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new hn(n)),e.lt.push(new hn(Le.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new hn(Le.keyField(),i))}}}return e.lt}function Qt(t){const e=q(t);if(!e.ft)if(e.limitType==="F")e.ft=Fc(e.path,e.collectionGroup,In(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of In(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new hn(i.field,o))}const s=e.endAt?new En(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new En(e.startAt.position,e.startAt.inclusive):null;e.ft=Fc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function Rh(t,e,n){return new Zt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jr(t,e){return ca(Qt(t),Qt(e))&&t.limitType===e.limitType}function Nh(t){return`${aa(Qt(t))}|lt:${t.limitType}`}function so(t){return`Query(target=${hv(Qt(t))}; limitType=${t.limitType})`}function fa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):M.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Vc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,In(n),s)||n.endAt&&!function(r,i,o){const a=Vc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,In(n),s))}(t,e)}function Iv(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dh(t){return(e,n)=>{let s=!1;for(const r of In(t)){const i=Tv(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Tv(t,e,n){const s=t.field.isKeyField()?M.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?wn(a,c):j()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(e)?"-0":e}}function Lh(t){return{integerValue:""+t}}function bv(t,e){return cv(e)?Lh(e):Oh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this._=void 0}}function Av(t,e,n){return t instanceof Ar?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof fs?Mh(t,e):t instanceof ps?Uh(t,e):function(s,r){const i=Ph(s,r),o=Bc(i)+Bc(s._t);return to(i)&&to(s._t)?Lh(o):Oh(s.wt,o)}(t,e)}function Sv(t,e,n){return t instanceof fs?Mh(t,e):t instanceof ps?Uh(t,e):n}function Ph(t,e){return t instanceof Sr?to(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ar extends Zr{}class fs extends Zr{constructor(e){super(),this.elements=e}}function Mh(t,e){const n=xh(e);for(const s of t.elements)n.some(r=>tt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ps extends Zr{constructor(e){super(),this.elements=e}}function Uh(t,e){let n=xh(e);for(const s of t.elements)n=n.filter(r=>!tt(r,s));return{arrayValue:{values:n}}}class Sr extends Zr{constructor(e,n){super(),this.wt=e,this._t=n}}function Bc(t){return pe(t.integerValue||t.doubleValue)}function xh(t){return oa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kv(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof fs&&s instanceof fs||n instanceof ps&&s instanceof ps?yn(n.elements,s.elements,tt):n instanceof Sr&&s instanceof Sr?tt(n._t,s._t):n instanceof Ar&&s instanceof Ar}(t.transform,e.transform)}class Cv{constructor(e,n){this.version=e,this.transformResults=n}}class et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ei{}function Fh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $h(t.key,et.none()):new Os(t.key,t.data,et.none());{const n=t.data,s=He.empty();let r=new ve(Le.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Lt(t.key,s,new Ke(r.toArray()),et.none())}}function Rv(t,e,n){t instanceof Os?function(s,r,i){const o=s.value.clone(),a=qc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Lt?function(s,r,i){if(!nr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=qc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Vh(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Xn(t,e,n,s){return t instanceof Os?function(r,i,o,a){if(!nr(r.precondition,i))return o;const c=r.value.clone(),u=Hc(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Lt?function(r,i,o,a){if(!nr(r.precondition,i))return o;const c=Hc(r.fieldTransforms,a,i),u=i.data;return u.setAll(Vh(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return nr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Nv(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ph(s.transform,r||null);i!=null&&(n===null&&(n=He.empty()),n.set(s.field,i))}return n||null}function jc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&yn(n,s,(r,i)=>kv(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Os extends ei{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Lt extends ei{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function qc(t,e,n){const s=new Map;ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Sv(o,a,n[r]))}return s}function Hc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Av(i,o,e))}return s}class $h extends ei{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dv extends ei{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,ee;function Lv(t){switch(t){default:return j();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Bh(t){if(t===void 0)return St("GRPC error has no .code"),_.UNKNOWN;switch(t){case fe.OK:return _.OK;case fe.CANCELLED:return _.CANCELLED;case fe.UNKNOWN:return _.UNKNOWN;case fe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case fe.INTERNAL:return _.INTERNAL;case fe.UNAVAILABLE:return _.UNAVAILABLE;case fe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case fe.NOT_FOUND:return _.NOT_FOUND;case fe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case fe.ABORTED:return _.ABORTED;case fe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case fe.DATA_LOSS:return _.DATA_LOSS;default:return j()}}(ee=fe||(fe={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Jt(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ah(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new _e(M.comparator);function ht(){return Pv}const jh=new _e(M.comparator);function qn(...t){let e=jh;for(const n of t)e=e.insert(n.key,n);return e}function qh(t){let e=jh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ft(){return Yn()}function Hh(){return Yn()}function Yn(){return new Pn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mv=new _e(M.comparator),Uv=new ve(M.comparator);function Z(...t){let e=Uv;for(const n of t)e=e.add(n);return e}const xv=new ve(se);function Gh(){return xv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ls.createSynthesizedTargetChangeForCurrentChange(e,n)),new ti(X.min(),s,Gh(),ht(),Z())}}class Ls{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ls(Ne.EMPTY_BYTE_STRING,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class zh{constructor(e,n){this.targetId=e,this.It=n}}class Kh{constructor(e,n,s=Ne.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Gc{constructor(){this.Tt=0,this.Et=Kc(),this.At=Ne.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Z(),n=Z(),s=Z();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:j()}}),new Ls(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=Kc()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Fv{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=ht(),this.Bt=zc(),this.Lt=new ve(se)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(no(i))if(s===0){const o=new M(i.path);this.Kt(n,o,ke.newNoDocument(o,X.min()))}else ae(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&no(a.target)){const c=new M(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,ke.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=Z();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new ti(e,n,this.Lt,this.$t,s);return this.$t=ht(),this.Bt=zc(),this.Lt=new ve(se),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Gc,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new ve(se),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new Gc),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function zc(){return new _e(M.comparator)}function Kc(){return new _e(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$v=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Bv{constructor(e,n){this.databaseId=e,this.dt=n}}function kr(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wh(t,e){return t.dt?e.toBase64():e.toUint8Array()}function jv(t,e){return kr(t,e.toTimestamp())}function it(t){return ae(!!t),X.fromTimestamp(function(e){const n=Ct(e);return new ye(n.seconds,n.nanos)}(t))}function pa(t,e){return function(n){return new re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Qh(t){const e=re.fromString(t);return ae(Jh(e)),e}function ro(t,e){return pa(t.databaseId,e.path)}function Ni(t,e){const n=Qh(e);if(n.get(1)!==t.databaseId.projectId)throw new R(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(Xh(n))}function io(t,e){return pa(t.databaseId,e)}function qv(t){const e=Qh(t);return e.length===4?re.emptyPath():Xh(e)}function oo(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xh(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wc(t,e,n){return{name:ro(t,e),fields:n.value.mapValue.fields}}function Hv(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.dt?(ae(u===void 0||typeof u=="string"),Ne.fromBase64String(u||"")):(ae(u===void 0||u instanceof Uint8Array),Ne.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:Bh(c.code);return new R(u,c.message||"")}(o);n=new Kh(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ni(t,s.document.name),i=it(s.document.updateTime),o=new He({mapValue:{fields:s.document.fields}}),a=ke.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new sr(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ni(t,s.document),i=s.readTime?it(s.readTime):X.min(),o=ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new sr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ni(t,s.document),i=s.removedTargetIds||[];n=new sr([],i,r,null)}else{if(!("filter"in e))return j();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Ov(r),o=s.targetId;n=new zh(o,i)}}return n}function Gv(t,e){let n;if(e instanceof Os)n={update:Wc(t,e.key,e.value)};else if(e instanceof $h)n={delete:ro(t,e.key)};else if(e instanceof Lt)n={update:Wc(t,e.key,e.data),updateMask:t_(e.fieldMask)};else{if(!(e instanceof Dv))return j();n={verify:ro(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ar)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ps)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Sr)return{fieldPath:i.field.canonicalString(),increment:o._t};throw j()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:jv(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:j()}(t,e.precondition)),n}function zv(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?it(s.updateTime):it(r);return i.isEqual(X.min())&&(i=it(r)),new Cv(i,s.transformResults||[])}(n,e))):[]}function Kv(t,e){return{documents:[io(t,e.path)]}}function Wv(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=io(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=io(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(d){if(d.op==="=="){if(xc(d.value))return{unaryFilter:{field:nn(d.field),op:"IS_NAN"}};if(Uc(d.value))return{unaryFilter:{field:nn(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(xc(d.value))return{unaryFilter:{field:nn(d.field),op:"IS_NOT_NAN"}};if(Uc(d.value))return{unaryFilter:{field:nn(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(d.field),op:Jv(d.op),value:d.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:nn(l.field),direction:Yv(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||Yr(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Qv(t){let e=qv(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ae(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Yh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(d){return new hn(an(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(l)));let a=null;n.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,Yr(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(l){const d=!!l.before,h=l.values||[];return new En(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const d=!l.before,h=l.values||[];return new En(h,d)}(n.endAt)),wv(e,r,o,i,a,"F",c,u)}function Xv(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yh(t){return t?t.unaryFilter!==void 0?[e_(t)]:t.fieldFilter!==void 0?[Zv(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Yh(e)).reduce((e,n)=>e.concat(n)):j():[]}function Yv(t){return Vv[t]}function Jv(t){return $v[t]}function nn(t){return{fieldPath:t.canonicalString()}}function an(t){return Le.fromServerFormat(t.fieldPath)}function Zv(t){return Be.create(an(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}function e_(t){switch(t.unaryFilter.op){case"IS_NAN":const e=an(t.unaryFilter.field);return Be.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=an(t.unaryFilter.field);return Be.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=an(t.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=an(t.unaryFilter.field);return Be.create(r,"!=",{nullValue:"NULL_VALUE"});default:return j()}}function t_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Rv(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Hh();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Fh(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&yn(this.mutations,e.mutations,(n,s)=>jc(n,s))&&yn(this.baseMutations,e.baseMutations,(n,s)=>jc(n,s))}}class ma{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ae(e.mutations.length===s.length);let r=Mv;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ma(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,s,r,i=X.min(),o=X.min(),a=Ne.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.ne=e}}function i_(t){const e=Qv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.ze=new a_}addToCollectionParentIndex(e,n){return this.ze.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(kt.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(kt.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class a_{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ve(re.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ve(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Tn(0)}static Rn(){return new Tn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.changes=new Pn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Xn(s.mutation,r,Ke.empty(),ye.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Z()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Z()){const r=Ft();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=qn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ft();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Z()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=ht();const o=Yn(),a=Yn();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Lt)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Xn(l.mutation,u,l.mutation.getFieldMask(),ye.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var d;return a.set(u,new u_(l,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Yn();let r=new _e((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ke.empty();l=a.applyToLocalView(u,l),s.set(c,l);const d=(r.get(a.batchId)||Z()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,d=Hh();l.forEach(h=>{if(!i.has(h)){const f=Fh(n.get(h),s.get(h));f!==null&&d.set(h,f),i=i.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):da(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(Ft());let a=-1,c=i;return o.next(u=>A.forEach(u,(l,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(l)?A.resolve():this.getBaseDocument(e,l,d).next(h=>{c=c.insert(l,h)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Z())).next(l=>({batchId:a,changes:qh(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(s=>{let r=qn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=qn();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(u,l){return new Zt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,d)=>{i=i.insert(l,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,ke.newInvalidDocument(u)))});let o=qn();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Xn(u.mutation,c,Ke.empty(),ye.now()),fa(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):A.resolve(ke.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return A.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:it(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:i_(s.bundledQuery),readTime:it(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.overlays=new _e(M.comparator),this.Xn=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ft();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=Ft(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new _e((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Ft(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ft(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return A.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new s_(n,s));let i=this.Xn.get(n);i===void 0&&(i=Z(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.Zn=new ve(Ee.ts),this.es=new ve(Ee.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new Ee(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new Ee(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new M(new re([])),s=new Ee(n,e),r=new Ee(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new M(new re([])),s=new Ee(n,e),r=new Ee(n,e+1);let i=Z();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ee(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return M.comparator(e.key,n.key)||se(e.ls,n.ls)}static ns(e,n){return se(e.ls,n.ls)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ve(Ee.ts)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new n_(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new Ee(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ee(n,0),r=new Ee(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(se);return n.forEach(r=>{const i=new Ee(r,0),o=new Ee(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),A.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;M.isDocumentKey(i)||(i=i.child(""));const o=new Ee(new M(i),0);let a=new ve(se);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ls)),!0)},o),A.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ae(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return A.forEach(n.mutations,r=>{const i=new Ee(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new Ee(n,0),r=this.ds.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.ps=e,this.docs=new _e(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let s=ht();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ke.newInvalidDocument(r))}),A.resolve(s)}getAllFromCollection(e,n,s){let r=ht();const i=new M(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||sv(nv(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,r){j()}Is(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new m_(this)}getSize(e){return A.resolve(this.size)}}class m_ extends c_{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.persistence=e,this.Ts=new Pn(n=>aa(n),ca),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Es=0,this.As=new ga,this.targetCount=0,this.Rs=Tn.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),A.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Tn(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.vn(n),A.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n){this.bs={},this.overlays={},this.Ps=new ra(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new g_(this),this.indexManager=new o_,this.remoteDocumentCache=function(s){return new p_(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new r_(n),this.Ds=new h_(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new f_(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){P("MemoryPersistence","Starting transaction:",e);const r=new v_(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return A.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class v_ extends iv{constructor(e){super(),this.currentSequenceNumber=e}}class ya{constructor(e){this.persistence=e,this.ks=new ga,this.Os=null}static Ms(e){return new ya(e)}get Fs(){if(this.Os)return this.Os;throw j()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),A.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Fs,s=>{const r=M.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,X.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return A.or([()=>A.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=Z(),r=Z();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new va(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){return A.resolve(null)}xi(e,n,s,r){return Ev(n)||r.isEqual(X.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,s,r)?this.Ni(e,n):(Dc()<=ne.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),so(n)),this.Mi(e,o,n,tv(r,-1)))})}ki(e,n){let s=new ve(Dh(e));return n.forEach((r,i)=>{fa(e,i)&&(s=s.add(i))}),s}Oi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return Dc()<=ne.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",so(n)),this.Di.getDocumentsMatchingQuery(e,n,kt.min())}Mi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new _e(se),this.Bi=new Pn(i=>aa(i),ca),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l_(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function E_(t,e,n,s){return new w_(t,e,n,s)}async function Zh(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Z();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function I_(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,d=l.keys();let h=A.resolve();return d.forEach(f=>{h=h.next(()=>u.getEntry(a,f)).next(p=>{const m=c.docVersions.get(f);ae(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Z();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function ed(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function T_(t,e){const n=q(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((l,d)=>{const h=r.get(d);if(!h)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,d).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,d)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(d)?f=f.withResumeToken(Ne.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(d,f),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(h,f,l)&&a.push(n.Vs.updateTargetData(i,f))});let c=ht(),u=Z();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(b_(i,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!s.isEqual(X.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(d=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=r,i))}function b_(t,e,n){let s=Z(),r=Z();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=ht();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function A_(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function S_(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new $t(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function ao(t,e,n){const s=q(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ds(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function Qc(t,e,n){const s=q(t);let r=X.min(),i=Z();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=q(a),d=l.Bi.get(u);return d!==void 0?A.resolve(l.$i.get(d)):l.Vs.getTargetData(c,u)}(s,o,Qt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:X.min(),n?i:Z())).next(a=>(k_(s,Iv(e),a),{documents:a,ji:i})))}function k_(t,e,n){let s=X.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class Xc{constructor(){this.activeTargetIds=Gh()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class C_{constructor(){this.Fr=new Xc,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Xc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);P("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(P("RestConnection","Received: ",c),c),c=>{throw Oc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ln,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=N_[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new Gy;a.listenOnce(jy.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ri.NO_ERROR:const u=a.getResponseJson();P("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Ri.TIMEOUT:P("Connection",'RPC "'+e+'" timed out'),o(new R(_.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const l=a.getStatus();if(P("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const h=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(p)>=0?p:_.UNKNOWN}(d.status);o(new R(h,d.message))}else o(new R(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new R(_.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{P("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=$y(),o=By(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Hy({})),this.uo(a.initMessageHeaders,n,s),Bu()||qu()||Cf()||Hu()||Rf()||ju()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");P("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,d=!1;const h=new D_({jr:p=>{d?P("Connection","Not sending because WebChannel is closed:",p):(l||(P("Connection","Opening WebChannel transport."),u.open(),l=!0),P("Connection","WebChannel sending:",p),u.send(p))},Wr:()=>u.close()}),f=(p,m,y)=>{p.listen(m,C=>{try{y(C)}catch(b){setTimeout(()=>{throw b},0)}})};return f(u,Hs.EventType.OPEN,()=>{d||P("Connection","WebChannel transport opened.")}),f(u,Hs.EventType.CLOSE,()=>{d||(d=!0,P("Connection","WebChannel transport closed"),h.eo())}),f(u,Hs.EventType.ERROR,p=>{d||(d=!0,Oc("Connection","WebChannel transport errored:",p),h.eo(new R(_.UNAVAILABLE,"The operation could not be completed")))}),f(u,Hs.EventType.MESSAGE,p=>{var m;if(!d){const y=p.data[0];ae(!!y);const C=y,b=C.error||((m=C[0])===null||m===void 0?void 0:m.error);if(b){P("Connection","WebChannel received error:",b);const D=b.status;let U=function(T){const E=fe[T];if(E!==void 0)return Bh(E)}(D),x=b.message;U===void 0&&(U=_.INTERNAL,x="Unknown error status: "+D+" with message "+b.message),d=!0,h.eo(new R(U,x)),u.close()}else P("Connection","WebChannel received:",y),h.no(y)}}),f(o,qy.STAT_EVENT,p=>{p.stat===Rc.PROXY?P("Connection","Detected buffering proxy"):p.stat===Rc.NOPROXY&&P("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.Zr()},0),h}}function Di(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){return new Bv(t,!0)}class td{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&P("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new td(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(St(n.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new R(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class L_ extends nd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Hv(this.wt,e),s=function(r){if(!("targetChange"in r))return X.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?X.min():i.readTime?it(i.readTime):X.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=oo(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=no(a)?{documents:Kv(r,a)}:{query:Wv(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Wh(r,i.resumeToken):i.snapshotVersion.compareTo(X.min())>0&&(o.readTime=kr(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=Xv(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=oo(this.wt),n.removeTarget=e,this.Mo(n)}}class P_ extends nd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=zv(e.writeResults,e.commitTime),s=it(e.commitTime);return this.listener.Jo(s,n)}return ae(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=oo(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Gv(this.wt,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new R(_.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new R(_.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(_.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class U_{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(St(n),this.su=!1):P("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{en(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=q(a);c.lu.add(4),await Ps(c),c._u.set("Unknown"),c.lu.delete(4),await si(c)}(this))})}),this._u=new U_(s,r)}}async function si(t){if(en(t))for(const e of t.fu)await e(!0)}async function Ps(t){for(const e of t.fu)await e(!1)}function sd(t,e){const n=q(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Ea(n)?wa(n):Mn(n).Co()&&_a(n,e))}function rd(t,e){const n=q(t),s=Mn(n);n.hu.delete(e),s.Co()&&id(n,e),n.hu.size===0&&(s.Co()?s.ko():en(n)&&n._u.set("Unknown"))}function _a(t,e){t.wu.Nt(e.targetId),Mn(t).Qo(e)}function id(t,e){t.wu.Nt(e),Mn(t).jo(e)}function wa(t){t.wu=new Fv({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Mn(t).start(),t._u.iu()}function Ea(t){return en(t)&&!Mn(t).Do()&&t.hu.size>0}function en(t){return q(t).lu.size===0}function od(t){t.wu=void 0}async function F_(t){t.hu.forEach((e,n)=>{_a(t,e)})}async function V_(t,e){od(t),Ea(t)?(t._u.uu(e),wa(t)):t._u.set("Unknown")}async function $_(t,e,n){if(t._u.set("Online"),e instanceof Kh&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Cr(t,s)}else if(e instanceof sr?t.wu.Ut(e):e instanceof zh?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(X.min()))try{const s=await ed(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.hu.get(c);u&&r.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(Ne.EMPTY_BYTE_STRING,c.snapshotVersion)),id(r,a);const u=new $t(c.target,a,1,c.sequenceNumber);_a(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){P("RemoteStore","Failed to raise snapshot:",s),await Cr(t,s)}}async function Cr(t,e,n){if(!Ds(e))throw e;t.lu.add(1),await Ps(t),t._u.set("Offline"),n||(n=()=>ed(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await si(t)})}function ad(t,e){return e().catch(n=>Cr(t,n,e))}async function ri(t){const e=q(t),n=Rt(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;B_(e);)try{const r=await A_(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,j_(e,r)}catch(r){await Cr(e,r)}cd(e)&&ud(e)}function B_(t){return en(t)&&t.au.length<10}function j_(t,e){t.au.push(e);const n=Rt(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function cd(t){return en(t)&&!Rt(t).Do()&&t.au.length>0}function ud(t){Rt(t).start()}async function q_(t){Rt(t).Xo()}async function H_(t){const e=Rt(t);for(const n of t.au)e.Ho(n.mutations)}async function G_(t,e,n){const s=t.au.shift(),r=ma.from(s,e,n);await ad(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ri(t)}async function z_(t,e){e&&Rt(t).zo&&await async function(n,s){if(r=s.code,Lv(r)&&r!==_.ABORTED){const i=n.au.shift();Rt(n).No(),await ad(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ri(n)}var r}(t,e),cd(t)&&ud(t)}async function Jc(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const s=en(n);n.lu.add(3),await Ps(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await si(n)}async function K_(t,e){const n=q(t);e?(n.lu.delete(2),await si(n)):e||(n.lu.add(2),await Ps(n),n._u.set("Unknown"))}function Mn(t){return t.mu||(t.mu=function(e,n,s){const r=q(e);return r.tu(),new L_(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:F_.bind(null,t),Jr:V_.bind(null,t),Go:$_.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Ea(t)?wa(t):t._u.set("Unknown")):(await t.mu.stop(),od(t))})),t.mu}function Rt(t){return t.gu||(t.gu=function(e,n,s){const r=q(e);return r.tu(),new P_(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:q_.bind(null,t),Jr:z_.bind(null,t),Yo:H_.bind(null,t),Jo:G_.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await ri(t)):(await t.gu.stop(),t.au.length>0&&(P("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ia(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(t,e){if(St("AsyncQueue",`${e}: ${t}`),Ds(t))return new R(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||M.comparator(n.key,s.key):(n,s)=>M.comparator(n.key,s.key),this.keyedMap=qn(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new dn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof dn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new dn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.yu=new _e(M.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):j():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class bn{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new bn(e,n,dn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.Iu=void 0,this.listeners=[]}}class Q_{constructor(){this.queries=new Pn(e=>Nh(e),Jr),this.onlineState="Unknown",this.Tu=new Set}}async function ld(t,e){const n=q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new W_),r)try{i.Iu=await n.onListen(s)}catch(o){const a=Ta(o,`Initialization of query '${so(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&ba(n)}async function hd(t,e){const n=q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function X_(t,e){const n=q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&ba(n)}function Y_(t,e,n){const s=q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ba(t){t.Tu.forEach(e=>{e.next()})}class dd{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new bn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.key=e}}class pd{constructor(e){this.key=e}}class J_{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Z(),this.mutatedKeys=Z(),this.Lu=Dh(e),this.Uu=new dn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new Zc,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,d)=>{const h=r.get(l),f=fa(this.query,d)?d:null,p=!!h&&this.mutatedKeys.has(h.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;h&&f?h.data.isEqual(f.data)?p!==m&&(s.track({type:3,doc:f}),y=!0):this.Qu(h,f)||(s.track({type:2,doc:f}),y=!0,(c&&this.Lu(f,c)>0||u&&this.Lu(f,u)<0)&&(a=!0)):!h&&f?(s.track({type:0,doc:f}),y=!0):h&&!f&&(s.track({type:1,doc:h}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),i=m?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((u,l)=>function(d,h){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return f(d)-f(h)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new bn(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Zc,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Z(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new pd(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new fd(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=Z();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return bn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Z_{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ew{constructor(e){this.key=e,this.Xu=!1}}class tw{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Pn(a=>Nh(a),Jr),this.ec=new Map,this.nc=new Set,this.sc=new _e(M.comparator),this.ic=new Map,this.rc=new ga,this.oc={},this.uc=new Map,this.cc=Tn.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function nw(t,e){const n=dw(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await S_(n.localStore,Qt(e));n.isPrimaryClient&&sd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await sw(n,e,s,a==="current")}return r}async function sw(t,e,n,s){t.hc=(l,d,h)=>async function(f,p,m,y){let C=p.view.Ku(m);C.Oi&&(C=await Qc(f.localStore,p.query,!1).then(({documents:U})=>p.view.Ku(U,C)));const b=y&&y.targetChanges.get(p.targetId),D=p.view.applyChanges(C,f.isPrimaryClient,b);return tu(f,p.targetId,D.zu),D.snapshot}(t,l,d,h);const r=await Qc(t.localStore,e,!0),i=new J_(e,r.ji),o=i.Ku(r.documents),a=Ls.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);tu(t,n,c.zu);const u=new Z_(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function rw(t,e){const n=q(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!Jr(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ao(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),rd(n.remoteStore,s.targetId),co(n,s.targetId)}).catch(Ns)):(co(n,s.targetId),await ao(n.localStore,s.targetId,!0))}async function iw(t,e,n){const s=fw(t);try{const r=await function(i,o){const a=q(i),c=ye.now(),u=o.reduce((h,f)=>h.add(f.key),Z());let l,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=ht(),p=Z();return a.Ui.getEntries(h,u).next(m=>{f=m,f.forEach((y,C)=>{C.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(m=>{l=m;const y=[];for(const C of o){const b=Nv(C,l.get(C.key).overlayedDocument);b!=null&&y.push(new Lt(C.key,b,kh(b.value.mapValue),et.exists(!0)))}return a.mutationQueue.addMutationBatch(h,c,y,o)}).next(m=>{d=m;const y=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(h,m.batchId,y)})}).then(()=>({batchId:d.batchId,changes:qh(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new _e(se)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ms(s,r.changes),await ri(s.remoteStore)}catch(r){const i=Ta(r,"Failed to persist write");n.reject(i)}}async function md(t,e){const n=q(t);try{const s=await T_(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?ae(o.Xu):r.removedDocuments.size>0&&(ae(o.Xu),o.Xu=!1))}),await Ms(n,s,e)}catch(s){await Ns(s)}}function eu(t,e,n){const s=q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const d of l.listeners)d.Eu(o)&&(c=!0)}),c&&ba(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ow(t,e,n){const s=q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new _e(M.comparator);o=o.insert(i,ke.newNoDocument(i,X.min()));const a=Z().add(i),c=new ti(X.min(),new Map,new ve(se),o,a);await md(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),Aa(s)}else await ao(s.localStore,e,!1).then(()=>co(s,e,n)).catch(Ns)}async function aw(t,e){const n=q(t),s=e.batch.batchId;try{const r=await I_(n.localStore,e);yd(n,s,null),gd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ms(n,r)}catch(r){await Ns(r)}}async function cw(t,e,n){const s=q(t);try{const r=await function(i,o){const a=q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ae(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);yd(s,e,n),gd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ms(s,r)}catch(r){await Ns(r)}}function gd(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function yd(t,e,n){const s=q(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function co(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||vd(t,s)})}function vd(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(rd(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Aa(t))}function tu(t,e,n){for(const s of n)s instanceof fd?(t.rc.addReference(s.key,e),uw(t,s)):s instanceof pd?(P("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||vd(t,s.key)):j()}function uw(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(P("SyncEngine","New document in limbo: "+n),t.nc.add(s),Aa(t))}function Aa(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new M(re.fromString(e)),s=t.cc.next();t.ic.set(s,new ew(n)),t.sc=t.sc.insert(n,s),sd(t.remoteStore,new $t(Qt(ua(n.path)),s,2,ra.ot))}}async function Ms(t,e,n){const s=q(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=va.Vi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const u=q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>A.forEach(c,d=>A.forEach(d.Pi,h=>u.persistence.referenceDelegate.addReference(l,d.targetId,h)).next(()=>A.forEach(d.vi,h=>u.persistence.referenceDelegate.removeReference(l,d.targetId,h)))))}catch(l){if(!Ds(l))throw l;P("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const d=l.targetId;if(!l.fromCache){const h=u.$i.get(d),f=h.snapshotVersion,p=h.withLastLimboFreeSnapshotVersion(f);u.$i=u.$i.insert(d,p)}}}(s.localStore,i))}async function lw(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const s=await Zh(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new R(_.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ms(n,s.Ki)}}function hw(t,e){const n=q(t),s=n.ic.get(e);if(s&&s.Xu)return Z().add(s.key);{let r=Z();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function dw(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=md.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ow.bind(null,e),e.Zu.Go=X_.bind(null,e.eventManager),e.Zu.lc=Y_.bind(null,e.eventManager),e}function fw(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cw.bind(null,e),e}class pw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=ni(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return E_(this.persistence,new __,e.initialUser,this.wt)}_c(e){return new y_(ya.Ms,this.wt)}dc(e){return new C_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>eu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lw.bind(null,this.syncEngine),await K_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Q_}createDatastore(e){const n=ni(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new O_(r));var r;return function(i,o,a,c){return new M_(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>eu(this.syncEngine,a,0),o=Yc.V()?new Yc:new R_,new x_(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new tw(s,r,i,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);P("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Ps(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=qe.UNAUTHENTICATED,this.clientId=bh.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{P("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(P("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ta(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function yw(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Zh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function vw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _w(t);P("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Jc(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jc(e.remoteStore,i)),t.onlineComponents=e}async function _w(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await yw(t,new pw)),t.offlineComponents}async function wd(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await vw(t,new mw)),t.onlineComponents}function ww(t){return wd(t).then(e=>e.syncEngine)}async function uo(t){const e=await wd(t),n=e.eventManager;return n.onListen=nw.bind(null,e.syncEngine),n.onUnlisten=rw.bind(null,e.syncEngine),n}function Ew(t,e,n={}){const s=new It;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new _d({next:d=>{i.enqueueAndForget(()=>hd(r,l)),d.fromCache&&a.source==="server"?c.reject(new R(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),l=new dd(o,u,{includeMetadataChanges:!0,Du:!0});return ld(r,l)}(await uo(t),t.asyncQueue,e,n,s)),s.promise}const nu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t,e,n){if(!n)throw new R(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Iw(t,e,n,s){if(e===!0&&s===!0)throw new R(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function su(t){if(!M.isDocumentKey(t))throw new R(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ru(t){if(M.isDocumentKey(t))throw new R(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ii(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ii(t);throw new R(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Tw(t,e){if(e<=0)throw new R(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Iw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iu({}),this._settingsFrozen=!1,e instanceof _n?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new R(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _n(r.options.projectId)}(e))}get app(){if(!this._app)throw new R(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ky;switch(n.type){case"gapi":const s=n.client;return ae(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Xy(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new R(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nu.get(e);n&&(P("ComponentProvider","Removing Datastore"),nu.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class ft{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ft(this.firestore,e,this._query)}}class Tt extends ft{constructor(e,n,s){super(e,n,ua(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new M(e))}withConverter(e){return new Tt(this.firestore,e,this._path)}}function oi(t,e,...n){if(t=he(t),Ed("collection","path",e),t instanceof Sa){const s=re.fromString(e,...n);return ru(s),new Tt(t,null,s)}{if(!(t instanceof je||t instanceof Tt))throw new R(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return ru(s),new Tt(t.firestore,null,s)}}function lo(t,e,...n){if(t=he(t),arguments.length===1&&(e=bh.I()),Ed("doc","path",e),t instanceof Sa){const s=re.fromString(e,...n);return su(s),new je(t,null,new M(s))}{if(!(t instanceof je||t instanceof Tt))throw new R(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return su(s),new je(t.firestore,t instanceof Tt?t.converter:null,new M(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new td(this,"async_queue_retry"),this.Kc=()=>{const n=Di();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Di();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Di();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new It;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Ds(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw St("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=Ia.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&j()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ou(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class An extends Sa{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new bw,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Id(this),this._firestoreClient.terminate()}}function Aw(t=Io()){return Or(t,"firestore").getImmediate()}function ka(t){return t._firestoreClient||Id(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Id(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new av(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new gw(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Ne.fromBase64String(e))}catch(n){throw new R(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sn(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=/^__.*__$/;class kw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Lt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Os(e,this.data,n,this.fieldTransforms)}}class Td{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Lt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Na{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Rr(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(bd(this.Zc)&&Sw.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Cw{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||ni(e)}aa(e,n,s,r=!1){return new Na({Zc:e,methodName:n,ca:s,path:Le.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ci(t){const e=t._freezeSettings(),n=ni(t._databaseId);return new Cw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rw(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);Da("Data must be an object, but it was:",o,s);const a=Sd(s,o);let c,u;if(i.merge)c=new Ke(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const d of i.mergeFields){const h=ho(e,d,n);if(!o.contains(h))throw new R(_.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Cd(l,h)||l.push(h)}c=new Ke(l),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new kw(new He(a),c,u)}class ui extends Ca{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ui}}function Nw(t,e,n,s){const r=t.aa(1,e,n);Da("Data must be an object, but it was:",r,s);const i=[],o=He.empty();Jt(s,(c,u)=>{const l=Oa(e,c,n);u=he(u);const d=r.ia(l);if(u instanceof ui)i.push(l);else{const h=Us(u,d);h!=null&&(i.push(l),o.set(l,h))}});const a=new Ke(i);return new Td(o,a,r.fieldTransforms)}function Dw(t,e,n,s,r,i){const o=t.aa(1,e,n),a=[ho(e,s,n)],c=[r];if(i.length%2!=0)throw new R(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<i.length;h+=2)a.push(ho(e,i[h])),c.push(i[h+1]);const u=[],l=He.empty();for(let h=a.length-1;h>=0;--h)if(!Cd(u,a[h])){const f=a[h];let p=c[h];p=he(p);const m=o.ia(f);if(p instanceof ui)u.push(f);else{const y=Us(p,m);y!=null&&(u.push(f),l.set(f,y))}}const d=new Ke(u);return new Td(l,d,o.fieldTransforms)}function Ad(t,e,n,s=!1){return Us(n,t.aa(s?4:3,e))}function Us(t,e){if(kd(t=he(t)))return Da("Unsupported field value:",e,t),Sd(t,e);if(t instanceof Ca)return function(n,s){if(!bd(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Us(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=he(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bv(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ye.fromDate(n);return{timestampValue:kr(s.wt,r)}}if(n instanceof ye){const r=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kr(s.wt,r)}}if(n instanceof Ra)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Sn)return{bytesValue:Wh(s.wt,n._byteString)};if(n instanceof je){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:pa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${ii(n)}`)}(t,e)}function Sd(t,e){const n={};return Ah(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jt(t,(s,r)=>{const i=Us(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function kd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Ra||t instanceof Sn||t instanceof je||t instanceof Ca)}function Da(t,e,n){if(!kd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ii(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function ho(t,e,n){if((e=he(e))instanceof ai)return e._internalPath;if(typeof e=="string")return Oa(t,e);throw Rr("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ow=new RegExp("[~\\*/\\[\\]]");function Oa(t,e,n){if(e.search(Ow)>=0)throw Rr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ai(...e.split("."))._internalPath}catch{throw Rr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new R(_.INVALID_ARGUMENT,a+t+c)}function Cd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(li("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lw extends La{data(){return super.data()}}function li(t,e){return typeof e=="string"?Oa(t,e):e instanceof ai?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rd extends La{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(li("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class rr extends Rd{data(e={}){return super.data(e)}}class Nd{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Hn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new rr(this._firestore,this._userDataWriter,s.key,s,new Hn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new rr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Hn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new rr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Hn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Pw(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Pw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hi{}function Pa(t,...e){for(const n of e)t=n._apply(t);return t}class Mw extends hi{constructor(e,n,s){super(),this.fa=e,this.da=n,this._a=s,this.type="where"}_apply(e){const n=ci(e.firestore),s=function(r,i,o,a,c,u,l){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new R(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){cu(l,u);const f=[];for(const p of l)f.push(au(a,r,p));d={arrayValue:{values:f}}}else d=au(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||cu(l,u),d=Ad(o,i,l,u==="in"||u==="not-in");const h=Be.create(c,u,d);return function(f,p){if(p.ht()){const y=ha(f);if(y!==null&&!y.isEqual(p.field))throw new R(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${y.toString()}' and '${p.field.toString()}'`);const C=la(f);C!==null&&Ld(f,p.field,C)}const m=function(y,C){for(const b of y.filters)if(C.indexOf(b.op)>=0)return b.op;return null}(f,function(y){switch(y){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(m!==null)throw m===p.op?new R(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new R(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${m.toString()}' filters.`)}(r,h),h}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new ft(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Zt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function fo(t,e,n){const s=e,r=li("where",t);return new Mw(r,s,n)}class Uw extends hi{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new R(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new R(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new hn(r,i);return function(a,c){if(la(a)===null){const u=ha(a);u!==null&&Ld(a,u,c.field)}}(s,o),o}(e._query,this.fa,this.wa);return new ft(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Zt(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Od(t,e="asc"){const n=e,s=li("orderBy",t);return new Uw(s,n)}class xw extends hi{constructor(e,n,s){super(),this.type=e,this.ma=n,this.ga=s}_apply(e){return new ft(e.firestore,e.converter,Rh(e._query,this.ma,this.ga))}}function Fw(t){return Tw("limit",t),new xw("limit",t,"F")}class Vw extends hi{constructor(e,n,s){super(),this.type=e,this.ya=n,this.pa=s}_apply(e){const n=Bw(e,this.type,this.ya,this.pa);return new ft(e.firestore,e.converter,function(s,r){return new Zt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function $w(...t){return new Vw("startAfter",t,!1)}function Bw(t,e,n,s){if(n[0]=he(n[0]),n[0]instanceof La)return function(r,i,o,a,c){if(!a)throw new R(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of In(r))if(l.field.isKeyField())u.push(br(i,a.key));else{const d=a.data.field(l.field);if(ia(d))throw new R(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const h=l.field.canonicalString();throw new R(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${h}' (used as the orderBy) does not exist.`)}u.push(d)}return new En(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=ci(t.firestore);return function(i,o,a,c,u,l){const d=i.explicitOrderBy;if(u.length>d.length)throw new R(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const h=[];for(let f=0;f<u.length;f++){const p=u[f];if(d[f].field.isKeyField()){if(typeof p!="string")throw new R(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!da(i)&&p.indexOf("/")!==-1)throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const m=i.path.child(re.fromString(p));if(!M.isDocumentKey(m))throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${m}' is not because it contains an odd number of segments.`);const y=new M(m);h.push(br(o,y))}else{const m=Ad(a,c,p);h.push(m)}}return new En(h,l)}(t._query,t.firestore._databaseId,r,e,n,s)}}function au(t,e,n){if(typeof(n=he(n))=="string"){if(n==="")throw new R(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!da(e)&&n.indexOf("/")!==-1)throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(re.fromString(n));if(!M.isDocumentKey(s))throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return br(t,new M(s))}if(n instanceof je)return br(t,n._key);throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ii(n)}.`)}function cu(t,e){if(!Array.isArray(t)||t.length===0)throw new R(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new R(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ld(t,e,n){if(!n.isEqual(e))throw new R(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{convertValue(e,n="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const s={};return Jt(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ra(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Sh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(hs(e));default:return null}}convertTimestamp(e){const n=Ct(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=re.fromString(e);ae(Jh(s));const r=new _n(s.get(1),s.get(3)),i=new M(s.popFirst(5));return r.isEqual(n)||St(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Ma extends jw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function Hw(t){t=ot(t,ft);const e=ot(t.firestore,An),n=ka(e),s=new Ma(e);return Dd(t._query),Ew(n,t._query).then(r=>new Nd(e,s,t,r))}function Gw(t,e,n){t=ot(t,je);const s=ot(t.firestore,An),r=qw(t.converter,e,n);return Md(s,[Rw(ci(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,et.none())])}function uu(t,e,n,...s){t=ot(t,je);const r=ot(t.firestore,An),i=ci(r);let o;return o=typeof(e=he(e))=="string"||e instanceof ai?Dw(i,"updateDoc",t._key,e,n,s):Nw(i,"updateDoc",t._key,e),Md(r,[o.toMutation(t._key,et.exists(!0))])}function Pd(t,...e){var n,s,r;t=he(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ou(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ou(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,l;if(t instanceof je)u=ot(t.firestore,An),l=ua(t._key.path),c={next:d=>{e[o]&&e[o](zw(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=ot(t,ft);u=ot(d.firestore,An),l=d._query;const h=new Ma(u);c={next:f=>{e[o]&&e[o](new Nd(u,h,d,f))},error:e[o+1],complete:e[o+2]},Dd(t._query)}return function(d,h,f,p){const m=new _d(p),y=new dd(h,m,f);return d.asyncQueue.enqueueAndForget(async()=>ld(await uo(d),y)),()=>{m.Tc(),d.asyncQueue.enqueueAndForget(async()=>hd(await uo(d),y))}}(ka(u),l,a,c)}function Md(t,e){return function(n,s){const r=new It;return n.asyncQueue.enqueueAndForget(async()=>iw(await ww(n),s,r)),r.promise}(ka(t),e)}function zw(t,e,n){const s=n.docs.get(e._key),r=new Ma(t);return new Rd(t,r,e._key,s,new Hn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ln=n})(Cn),jt(new At("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new An(r,new Wy(n.getProvider("auth-internal")),new Jy(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Ye(Nc,"3.4.12",t),Ye(Nc,"3.4.12","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="firebasestorage.googleapis.com",xd="storageBucket",Kw=2*60*1e3,Ww=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Nt{constructor(e,n){super(Oi(e),`Firebase Storage: ${n} (${Oi(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}_codeEquals(e){return Oi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Oi(t){return"storage/"+t}function Ua(){const t="An unknown error occurred, please check the error payload for server response.";return new de("unknown",t)}function Qw(t){return new de("object-not-found","Object '"+t+"' does not exist.")}function Xw(t){return new de("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Yw(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de("unauthenticated",t)}function Jw(){return new de("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Zw(t){return new de("unauthorized","User does not have permission to access '"+t+"'.")}function eE(){return new de("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function tE(){return new de("canceled","User canceled the upload/download.")}function nE(t){return new de("invalid-url","Invalid URL '"+t+"'.")}function sE(t){return new de("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function rE(){return new de("no-default-bucket","No default bucket found. Did you set the '"+xd+"' property when initializing the app?")}function iE(){return new de("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function oE(){return new de("no-download-url","The given file does not have any download URLs.")}function po(t){return new de("invalid-argument",t)}function Fd(){return new de("app-deleted","The Firebase app was deleted.")}function aE(t){return new de("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Jn(t,e){return new de("invalid-format","String does not match format '"+t+"': "+e)}function xn(t){throw new de("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ge.makeFromUrl(e,n)}catch{return new Ge(e,"")}if(s.path==="")return s;throw sE(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const l="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${l}/b/${r}/o${h}`,"i"),p={bucket:1,path:3},m=n===Ud?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",C=new RegExp(`^https?://${m}/${r}/${y}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:C,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<D.length;U++){const x=D[U],T=x.regex.exec(e);if(T){const E=T[x.indices.bucket];let I=T[x.indices.path];I||(I=""),s=new Ge(E,I),x.postModify(s);break}}if(s==null)throw nE(e);return s}}class cE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function d(y){r=setTimeout(()=>{r=null,t(f,c())},y)}function h(){i&&clearTimeout(i)}function f(y,...C){if(u){h();return}if(y){h(),l.call(null,y,...C);return}if(c()||o){h(),l.call(null,y,...C);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,d(D)}let p=!1;function m(y){p||(p=!0,h(),!u&&(r!==null?(y||(a=2),clearTimeout(r),d(0)):y||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,m(!0)},n),m}function lE(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t){return t!==void 0}function dE(t){return typeof t=="object"&&!Array.isArray(t)}function xa(t){return typeof t=="string"||t instanceof String}function lu(t){return Fa()&&t instanceof Blob}function Fa(){return typeof Blob!="undefined"}function hu(t,e,n,s){if(s<e)throw po(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw po(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Vd(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bt||(Bt={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n,s,r,i,o,a,c,u,l,d){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,f)=>{this.resolve_=h,this.reject_=f,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ks(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Bt.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===Bt.ABORT;s(!1,new Ks(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ks(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());hE(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ua();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Fd():tE();o(c)}else{const c=eE();o(c)}};this.canceled_?n(!1,new Ks(!1,null,!0)):this.backoffId_=uE(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class Ks{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function pE(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mE(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function gE(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yE(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vE(t,e,n,s,r,i){const o=Vd(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return gE(c,e),pE(c,n),mE(c,i),yE(c,s),new fE(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function wE(...t){const e=_E();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Fa())return new Blob(t);throw new de("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function EE(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Li{constructor(e,n){this.data=e,this.contentType=n||null}}function TE(t,e){switch(t){case Xe.RAW:return new Li($d(e));case Xe.BASE64:case Xe.BASE64URL:return new Li(Bd(t,e));case Xe.DATA_URL:return new Li(AE(e),SE(e))}throw Ua()}function $d(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function bE(t){let e;try{e=decodeURIComponent(t)}catch{throw Jn(Xe.DATA_URL,"Malformed data URL.")}return $d(e)}function Bd(t,e){switch(t){case Xe.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Jn(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Xe.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Jn(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=IE(e)}catch{throw Jn(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class jd{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Jn(Xe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=kE(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function AE(t){const e=new jd(t);return e.base64?Bd(Xe.BASE64,e.rest):bE(e.rest)}function SE(t){return new jd(t).contentType}function kE(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){let s=0,r="";lu(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(lu(this.data_)){const s=this.data_,r=EE(s,e,n);return r===null?null:new wt(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new wt(s,!0)}}static getBlob(...e){if(Fa()){const n=e.map(s=>s instanceof wt?s.data_:s);return new wt(wE.apply(null,n))}else{const n=e.map(o=>xa(o)?TE(Xe.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new wt(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){let e;try{e=JSON.parse(t)}catch{return null}return dE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RE(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Hd(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(t,e){return e}class Ue{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||NE}}let Ws=null;function DE(t){return!xa(t)||t.length<2?t:Hd(t)}function Gd(){if(Ws)return Ws;const t=[];t.push(new Ue("bucket")),t.push(new Ue("generation")),t.push(new Ue("metageneration")),t.push(new Ue("name","fullPath",!0));function e(i,o){return DE(o)}const n=new Ue("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Ue("size");return r.xform=s,t.push(r),t.push(new Ue("timeCreated")),t.push(new Ue("updated")),t.push(new Ue("md5Hash",null,!0)),t.push(new Ue("cacheControl",null,!0)),t.push(new Ue("contentDisposition",null,!0)),t.push(new Ue("contentEncoding",null,!0)),t.push(new Ue("contentLanguage",null,!0)),t.push(new Ue("contentType",null,!0)),t.push(new Ue("metadata","customMetadata",!0)),Ws=t,Ws}function OE(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Ge(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function LE(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return OE(s,t),s}function zd(t,e,n){const s=qd(e);return s===null?null:LE(t,s,n)}function PE(t,e,n,s){const r=qd(e);if(r===null||!xa(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,d=t.fullPath,h="/b/"+o(l)+"/o/"+o(d),f=Va(h,n,s),p=Vd({alt:"media",token:u});return f+p})[0]}function ME(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Kd{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){if(!t)throw Ua()}function UE(t,e){function n(s,r){const i=zd(t,r,e);return Wd(i!==null),i}return n}function xE(t,e){function n(s,r){const i=zd(t,r,e);return Wd(i!==null),PE(i,r,t.host,t._protocol)}return n}function Qd(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Jw():r=Yw():n.getStatus()===402?r=Xw(t.bucket):n.getStatus()===403?r=Zw(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function FE(t){const e=Qd(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Qw(t.path)),i.serverResponse=r.serverResponse,i}return n}function VE(t,e,n){const s=e.fullServerUrl(),r=Va(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Kd(r,i,xE(t,n),o);return a.errorHandler=FE(e),a}function $E(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function BE(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=$E(null,e)),s}function jE(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let U=0;U<2;U++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=BE(e,s,r),l=ME(u,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+c+"--",f=wt.getBlob(d,s,h);if(f===null)throw iE();const p={name:u.fullPath},m=Va(i,t.host,t._protocol),y="POST",C=t.maxUploadRetryTime,b=new Kd(m,y,UE(t,n),C);return b.urlParams=p,b.headers=o,b.body=f.uploadData(),b.errorHandler=Qd(e),b}class qE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw xn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class HE extends qE{initXhr(){this.xhr_.responseType="text"}}function Xd(){return new HE}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this._service=e,n instanceof Ge?this._location=n:this._location=Ge.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xt(e,n)}get root(){const e=new Ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hd(this._location.path)}get storage(){return this._service}get parent(){const e=CE(this._location.path);if(e===null)return null;const n=new Ge(this._location.bucket,e);return new Xt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aE(e)}}function GE(t,e,n){t._throwIfRoot("uploadBytes");const s=jE(t.storage,t._location,Gd(),new wt(e,!0),n);return t.storage.makeRequestWithTokens(s,Xd).then(r=>({metadata:r,ref:t}))}function zE(t){t._throwIfRoot("getDownloadURL");const e=VE(t.storage,t._location,Gd());return t.storage.makeRequestWithTokens(e,Xd).then(n=>{if(n===null)throw oE();return n})}function KE(t,e){const n=RE(t._location.path,e),s=new Ge(t._location.bucket,n);return new Xt(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t){return/^[A-Za-z]+:\/\//.test(t)}function QE(t,e){return new Xt(t,e)}function Yd(t,e){if(t instanceof $a){const n=t;if(n._bucket==null)throw rE();const s=new Xt(n,n._bucket);return e!=null?Yd(s,e):s}else return e!==void 0?KE(t,e):t}function XE(t,e){if(e&&WE(e)){if(t instanceof $a)return QE(t,e);throw po("To use ref(service, url), the first argument must be a Storage instance.")}else return Yd(t,e)}function du(t,e){const n=e==null?void 0:e[xd];return n==null?null:Ge.makeFromBucketSpec(n,t)}class $a{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Ud,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kw,this._maxUploadRetryTime=Ww,this._requests=new Set,r!=null?this._bucket=Ge.makeFromBucketSpec(r,this._host):this._bucket=du(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ge.makeFromBucketSpec(this._url,e):this._bucket=du(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xt(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new cE(Fd());{const i=vE(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const fu="@firebase/storage",pu="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="storage";function YE(t,e,n){return t=he(t),GE(t,e,n)}function JE(t){return t=he(t),zE(t)}function ZE(t,e){return t=he(t),XE(t,e)}function eI(t=Io(),e){return t=he(t),Or(t,Jd).getImmediate({identifier:e})}function tI(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new $a(n,s,r,e,Cn)}function nI(){jt(new At(Jd,tI,"PUBLIC").setMultipleInstances(!0)),Ye(fu,pu,""),Ye(fu,pu,"esm2017")}nI();var sI="firebase",rI="9.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(sI,rI,"app");const iI={apiKey:"AIzaSyCx8gcO3r0iNVXuEStVVhOdaxKaoMPwlz4",authDomain:"ema-credit-card-approval.firebaseapp.com",projectId:"ema-credit-card-approval",storageBucket:"ema-credit-card-approval.appspot.com",messagingSenderId:"959663946450",appId:"1:959663946450:web:9a7eeff2784c30298d0b0b",measurementId:"G-7NZSYDJQ7S"},Ba=Mp(iI),bt=Vg(Ba),kn=Aw(Ba),oI=eI(Ba);function aI(t){let e;return{c(){e=J("Login")},m(n,s){Q(n,e,s)},d(n){n&&G(e)}}}function cI(t){let e,n,s,r,i,o,a,c,u,l,d,h,f,p,m,y,C,b,D;function U(I){t[6](I)}let x={name:"email"};t[0]!==void 0&&(x.value=t[0]),a=new vo({props:x}),We.push(()=>ct(a,"value",U)),a.$on("input",t[3]);function T(I){t[7](I)}let E={name:"password"};return t[1]!==void 0&&(E.value=t[1]),h=new Tf({props:E}),We.push(()=>ct(h,"value",T)),h.$on("input",t[4]),m=new yo({props:{$$slots:{default:[aI]},$$scope:{ctx:t}}}),m.$on("click",t[5]),{c(){e=k("div"),n=k("img"),r=K(),i=k("label"),i.textContent="Email",o=K(),ce(a.$$.fragment),u=K(),l=k("label"),l.textContent="Contrase\xF1a",d=K(),ce(h.$$.fragment),p=K(),ce(m.$$.fragment),y=K(),C=k("span"),b=J(t[2]),ir(n.src,s=xu)||w(n,"src",s),w(n,"width",128),w(n,"alt","Credit Card Approval Logo"),w(n,"class","svelte-wrmxst"),w(i,"for","email"),w(l,"for","password"),w(e,"class","container svelte-wrmxst")},m(I,g){Q(I,e,g),v(e,n),v(e,r),v(e,i),v(e,o),ie(a,e,null),v(e,u),v(e,l),v(e,d),ie(h,e,null),v(e,p),ie(m,e,null),v(e,y),v(e,C),v(C,b),D=!0},p(I,[g]){const S={};!c&&g&1&&(c=!0,S.value=I[0],at(()=>c=!1)),a.$set(S);const H={};!f&&g&2&&(f=!0,H.value=I[1],at(()=>f=!1)),h.$set(H);const te={};g&512&&(te.$$scope={dirty:g,ctx:I}),m.$set(te),(!D||g&4)&&me(b,I[2])},i(I){D||(B(a.$$.fragment,I),B(h.$$.fragment,I),B(m.$$.fragment,I),D=!0)},o(I){W(a.$$.fragment,I),W(h.$$.fragment,I),W(m.$$.fragment,I),D=!1},d(I){I&&G(e),oe(a),oe(h),oe(m)}}}function uI(t,e,n){let s="",r="",i="";const o=h=>{h.preventDefault();const f=h.target;n(0,s=f.value)},a=h=>{h.preventDefault();const f=h.target;n(1,r=f.value)},c=h=>{console.log("CODE: ",h.code),h.code===zp.INVALID_PASSWORD?n(2,i="Contrase\xF1a incorrecta"):n(2,i="Error: "+h.message)},u=async()=>{try{const h=await km(bt,s,r);console.log("userCredential",h)}catch(h){console.error(h),c(h)}};function l(h){s=h,n(0,s)}function d(h){r=h,n(1,r)}return[s,r,i,o,a,u,l,d]}class lI extends Ae{constructor(e){super(),be(this,e,uI,cI,we,{})}}function hI(t){let e,n,s,r,i,o,a,c;return{c(){e=k("div"),n=k("div"),s=k("a"),r=k("img"),o=J(`
      Emax`),a=K(),c=k("a"),c.textContent=`${bt.currentUser.email}`,w(r,"class","logo svelte-vvzr8z"),ir(r.src,i=xu)||w(r,"src",i),w(r,"alt","This website logo"),w(s,"href","#logo"),w(s,"class","header item"),w(c,"href","#user"),w(c,"class","header item right"),w(n,"class","ui container"),w(e,"class","ui fixed inverted menu svelte-vvzr8z")},m(u,l){Q(u,e,l),v(e,n),v(n,s),v(s,r),v(s,o),v(n,a),v(n,c)},p:le,i:le,o:le,d(u){u&&G(e)}}}class Zd extends Ae{constructor(e){super(),be(this,e,null,hI,we,{})}}const dI=window.$;function fI(t){let e,n,s,r,i,o,a,c,u,l,d,h,f,p,m,y,C,b;const D=t[7].default,U=Cu(D,t,t[6],null);return{c(){e=k("div"),n=k("i"),s=K(),r=k("div"),i=J(t[0]),o=K(),a=k("div"),c=k("div"),U&&U.c(),u=K(),l=k("div"),d=k("div"),h=J(t[1]),f=K(),p=k("div"),m=J(t[2]),y=K(),C=k("i"),w(n,"class","close icon"),w(r,"class","header"),w(c,"class","description"),w(a,"class","content"),w(d,"class","ui black deny button"),w(C,"class","checkmark icon"),w(p,"class","ui positive right labeled icon button"),w(l,"class","actions"),w(e,"class","ui modal"),w(e,"id",t[3])},m(x,T){Q(x,e,T),v(e,n),v(e,s),v(e,r),v(r,i),v(e,o),v(e,a),v(a,c),U&&U.m(c,null),v(e,u),v(e,l),v(l,d),v(d,h),v(l,f),v(l,p),v(p,m),v(p,y),v(p,C),b=!0},p(x,[T]){(!b||T&1)&&me(i,x[0]),U&&U.p&&(!b||T&64)&&Du(U,D,x,x[6],b?Nu(D,x[6],T,null):Ou(x[6]),null),(!b||T&2)&&me(h,x[1]),(!b||T&4)&&me(m,x[2]),(!b||T&8)&&w(e,"id",x[3])},i(x){b||(B(U,x),b=!0)},o(x){W(U,x),b=!1},d(x){x&&G(e),U&&U.d(x)}}}function pI(t,e,n){let{$$slots:s={},$$scope:r}=e,{shown:i}=e,{title:o="A Modal"}=e,{denyText:a="Nope"}=e,{acceptText:c="Yep"}=e,{name:u}=e;const l=Mu();let d;return Pu(()=>{n(5,d=dI(`#${u}`)),n(5,d=d.modal({onApprove:()=>{console.log("Modal approved!"),l("approve")},onDeny:()=>{console.log("Modal denied!"),l("deny")},onShow:()=>{n(4,i=!0)},onVisible:()=>{n(4,i=!0)},onHide:()=>{n(4,i=!1)},onHidden:()=>{n(4,i=!1)}}))}),t.$$set=h=>{"shown"in h&&n(4,i=h.shown),"title"in h&&n(0,o=h.title),"denyText"in h&&n(1,a=h.denyText),"acceptText"in h&&n(2,c=h.acceptText),"name"in h&&n(3,u=h.name),"$$scope"in h&&n(6,r=h.$$scope)},t.$$.update=()=>{t.$$.dirty&48&&i&&d.modal("show")},[o,a,c,u,i,d,r,s]}class ef extends Ae{constructor(e){super(),be(this,e,pI,fI,we,{shown:4,title:0,denyText:1,acceptText:2,name:3})}}function mu(t,e,n){const s=t.slice();return s[3]=e[n],s}function gu(t){let e,n=t[3]+"",s,r;return{c(){e=k("option"),s=J(n),e.__value=r=t[3],e.value=e.__value},m(i,o){Q(i,e,o),v(e,s)},p(i,o){o&2&&n!==(n=i[3]+"")&&me(s,n),o&2&&r!==(r=i[3])&&(e.__value=r,e.value=e.__value)},d(i){i&&G(e)}}}function mI(t){let e,n,s,r=t[1],i=[];for(let o=0;o<r.length;o+=1)i[o]=gu(mu(t,r,o));return{c(){e=k("select");for(let o=0;o<i.length;o+=1)i[o].c();w(e,"name",""),w(e,"id",""),w(e,"class","svelte-ok422l"),t[0]===void 0&&ar(()=>t[2].call(e))},m(o,a){Q(o,e,a);for(let c=0;c<i.length;c+=1)i[c].m(e,null);Ga(e,t[0]),n||(s=Ve(e,"change",t[2]),n=!0)},p(o,[a]){if(a&2){r=o[1];let c;for(c=0;c<r.length;c+=1){const u=mu(o,r,c);i[c]?i[c].p(u,a):(i[c]=gu(u),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=r.length}a&3&&Ga(e,o[0])},i:le,o:le,d(o){o&&G(e),go(i,o),n=!1,s()}}}function gI(t,e,n){let{items:s}=e,{value:r}=e;function i(){r=hf(this),n(0,r),n(1,s)}return t.$$set=o=>{"items"in o&&n(1,s=o.items),"value"in o&&n(0,r=o.value)},[r,s,i]}class yI extends Ae{constructor(e){super(),be(this,e,gI,mI,we,{items:1,value:0})}}var vI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},tf={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(vI,function(){return function(n){var s={};function r(i){if(s[i])return s[i].exports;var o=s[i]={i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=s,r.d=function(i,o,a){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:a})},r.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(1&o&&(i=r(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var c in i)r.d(a,c,function(u){return i[u]}.bind(null,c));return a},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=0)}([function(n,s,r){var i;function o(T){return["image/png","image/jpeg","image/gif"].some(E=>E===T)}r.r(s),r.d(s,"canvastoDataURL",function(){return c}),r.d(s,"canvastoFile",function(){return u}),r.d(s,"dataURLtoFile",function(){return d}),r.d(s,"dataURLtoImage",function(){return h}),r.d(s,"downloadFile",function(){return f}),r.d(s,"filetoDataURL",function(){return p}),r.d(s,"imagetoCanvas",function(){return y}),r.d(s,"urltoBlob",function(){return C}),r.d(s,"urltoImage",function(){return b}),r.d(s,"compress",function(){return U}),r.d(s,"compressAccurately",function(){return x}),r.d(s,"EImageType",function(){return i}),function(T){T.PNG="image/png",T.JPEG="image/jpeg",T.GIF="image/gif"}(i||(i={}));var a=function(T,E,I,g){return new(I||(I=Promise))(function(S,H){function te(z){try{Y(g.next(z))}catch(F){H(F)}}function O(z){try{Y(g.throw(z))}catch(F){H(F)}}function Y(z){var F;z.done?S(z.value):(F=z.value,F instanceof I?F:new I(function(Me){Me(F)})).then(te,O)}Y((g=g.apply(T,E||[])).next())})};function c(T,E=.92,I=i.JPEG){return a(this,void 0,void 0,function*(){return o(I)||(I=i.JPEG),T.toDataURL(I,E)})}function u(T,E=.92,I=i.JPEG){return new Promise(g=>T.toBlob(S=>g(S),I,E))}var l=function(T,E,I,g){return new(I||(I=Promise))(function(S,H){function te(z){try{Y(g.next(z))}catch(F){H(F)}}function O(z){try{Y(g.throw(z))}catch(F){H(F)}}function Y(z){var F;z.done?S(z.value):(F=z.value,F instanceof I?F:new I(function(Me){Me(F)})).then(te,O)}Y((g=g.apply(T,E||[])).next())})};function d(T,E){return l(this,void 0,void 0,function*(){const I=T.split(",");let g=I[0].match(/:(.*?);/)[1];const S=atob(I[1]);let H=S.length;const te=new Uint8Array(H);for(;H--;)te[H]=S.charCodeAt(H);return o(E)&&(g=E),new Blob([te],{type:g})})}function h(T){return new Promise((E,I)=>{const g=new Image;g.onload=()=>E(g),g.onerror=()=>I(new Error("dataURLtoImage(): dataURL is illegal")),g.src=T})}function f(T,E){const I=document.createElement("a");I.href=window.URL.createObjectURL(T),I.download=E||Date.now().toString(36),document.body.appendChild(I);const g=document.createEvent("MouseEvents");g.initEvent("click",!1,!1),I.dispatchEvent(g),document.body.removeChild(I)}function p(T){return new Promise(E=>{const I=new FileReader;I.onloadend=g=>E(g.target.result),I.readAsDataURL(T)})}var m=function(T,E,I,g){return new(I||(I=Promise))(function(S,H){function te(z){try{Y(g.next(z))}catch(F){H(F)}}function O(z){try{Y(g.throw(z))}catch(F){H(F)}}function Y(z){var F;z.done?S(z.value):(F=z.value,F instanceof I?F:new I(function(Me){Me(F)})).then(te,O)}Y((g=g.apply(T,E||[])).next())})};function y(T,E={}){return m(this,void 0,void 0,function*(){const I=Object.assign({},E),g=document.createElement("canvas"),S=g.getContext("2d");let H,te;for(const O in I)Object.prototype.hasOwnProperty.call(I,O)&&(I[O]=Number(I[O]));if(I.scale){const O=I.scale>0&&I.scale<10?I.scale:1;te=T.width*O,H=T.height*O}else te=I.width||I.height*T.width/T.height||T.width,H=I.height||I.width*T.height/T.width||T.height;switch([5,6,7,8].some(O=>O===I.orientation)?(g.height=te,g.width=H):(g.height=H,g.width=te),I.orientation){case 3:S.rotate(180*Math.PI/180),S.drawImage(T,-g.width,-g.height,g.width,g.height);break;case 6:S.rotate(90*Math.PI/180),S.drawImage(T,0,-g.width,g.height,g.width);break;case 8:S.rotate(270*Math.PI/180),S.drawImage(T,-g.height,0,g.height,g.width);break;case 2:S.translate(g.width,0),S.scale(-1,1),S.drawImage(T,0,0,g.width,g.height);break;case 4:S.translate(g.width,0),S.scale(-1,1),S.rotate(180*Math.PI/180),S.drawImage(T,-g.width,-g.height,g.width,g.height);break;case 5:S.translate(g.width,0),S.scale(-1,1),S.rotate(90*Math.PI/180),S.drawImage(T,0,-g.width,g.height,g.width);break;case 7:S.translate(g.width,0),S.scale(-1,1),S.rotate(270*Math.PI/180),S.drawImage(T,-g.height,0,g.height,g.width);break;default:S.drawImage(T,0,0,g.width,g.height)}return g})}function C(T){return fetch(T).then(E=>E.blob())}function b(T){return new Promise((E,I)=>{const g=new Image;g.onload=()=>E(g),g.onerror=()=>I(new Error("urltoImage(): Image failed to load, please check the image URL")),g.src=T})}var D=function(T,E,I,g){return new(I||(I=Promise))(function(S,H){function te(z){try{Y(g.next(z))}catch(F){H(F)}}function O(z){try{Y(g.throw(z))}catch(F){H(F)}}function Y(z){var F;z.done?S(z.value):(F=z.value,F instanceof I?F:new I(function(Me){Me(F)})).then(te,O)}Y((g=g.apply(T,E||[])).next())})};function U(T,E={}){return D(this,void 0,void 0,function*(){if(!(T instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if(typeof E!="object"&&(E=Object.assign({quality:E})),E.quality=Number(E.quality),Number.isNaN(E.quality))return T;const I=yield p(T);let g=I.split(",")[0].match(/:(.*?);/)[1],S=i.JPEG;o(E.type)&&(S=E.type,g=E.type);const H=yield h(I),te=yield y(H,Object.assign({},E)),O=yield c(te,E.quality,S),Y=yield d(O,g);return Y.size>T.size?T:Y})}function x(T,E={}){return D(this,void 0,void 0,function*(){if(!(T instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if(typeof E!="object"&&(E=Object.assign({size:E})),E.size=Number(E.size),Number.isNaN(E.size)||1024*E.size>T.size)return T;E.accuracy=Number(E.accuracy),(!E.accuracy||E.accuracy<.8||E.accuracy>.99)&&(E.accuracy=.95);const I=E.size*(2-E.accuracy)*1024,g=1024*E.size,S=E.size*E.accuracy*1024,H=yield p(T);let te=H.split(",")[0].match(/:(.*?);/)[1],O=i.JPEG;o(E.type)&&(O=E.type,te=E.type);const Y=yield h(H),z=yield y(Y,Object.assign({},E));let F,Me=.5;const tn=[null,null];for(let Oe=1;Oe<=7;Oe++){F=yield c(z,Me,O);const xs=.75*F.length;if(Oe===7){(I<xs||S>xs)&&(F=[F,...tn].filter(di=>di).sort((di,rf)=>Math.abs(.75*di.length-g)-Math.abs(.75*rf.length-g))[0]);break}if(I<xs)tn[1]=F,Me-=Math.pow(.5,Oe+1);else{if(!(S>xs))break;tn[0]=F,Me+=Math.pow(.5,Oe+1)}}const pt=yield d(F,te);return pt.size>T.size?T:pt})}}])})})(tf);var yu=tf.exports;const _I=async t=>yu.compressAccurately(t,{size:200,scale:1,type:yu.EImageType.JPEG}),wI=async(t,e)=>{const n=ZE(oI,`user-images/${e}`),s=await _I(t);return await YE(n,s),JE(n)},EI=t=>Math.floor(Math.random()*t),II=t=>{const e="a".charCodeAt(0),n=26;let s="";for(let r=0;r<t;r++){const i=e+EI(n);s+=String.fromCharCode(i)}return s},sn=[];function ja(t,e){return{subscribe:TI(t,e).subscribe}}function TI(t,e=le){let n;const s=new Set;function r(a){if(we(t,a)&&(t=a,n)){const c=!sn.length;for(const u of s)u[1](),sn.push(u,t);if(c){for(let u=0;u<sn.length;u+=2)sn[u][0](sn[u+1]);sn.length=0}}}function i(a){r(a(t))}function o(a,c=le){const u=[a,c];return s.add(u),s.size===1&&(n=e(r)||le),a(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const bI=ja(["Motorola Hiper","Motorola Del Siglo","Motorola Alto","TechStore Del Bosque","Claro Hiper","Claro San Mart\xEDn","Claro Peatonal","Claro Alto"]);function AI(t){let e,n,s,r,i,o,a,c,u,l;function d(m){t[8](m)}let h={name:"lote"};t[2]!==void 0&&(h.value=t[2]),s=new vo({props:h}),We.push(()=>ct(s,"value",d));function f(m){t[9](m)}let p={items:t[4]};return t[3]!==void 0&&(p.value=t[3]),c=new yI({props:p}),We.push(()=>ct(c,"value",f)),{c(){e=k("label"),e.textContent="N\xFAmero de lote",n=K(),ce(s.$$.fragment),i=K(),o=k("label"),o.textContent="Local",a=K(),ce(c.$$.fragment),w(e,"for",""),w(e,"class","svelte-1l42czz"),w(o,"for",""),w(o,"class","svelte-1l42czz")},m(m,y){Q(m,e,y),Q(m,n,y),ie(s,m,y),Q(m,i,y),Q(m,o,y),Q(m,a,y),ie(c,m,y),l=!0},p(m,y){const C={};!r&&y&4&&(r=!0,C.value=m[2],at(()=>r=!1)),s.$set(C);const b={};y&16&&(b.items=m[4]),!u&&y&8&&(u=!0,b.value=m[3],at(()=>u=!1)),c.$set(b)},i(m){l||(B(s.$$.fragment,m),B(c.$$.fragment,m),l=!0)},o(m){W(s.$$.fragment,m),W(c.$$.fragment,m),l=!1},d(m){m&&G(e),m&&G(n),oe(s,m),m&&G(i),m&&G(o),m&&G(a),oe(c,m)}}}function SI(t){let e,n,s,r,i,o,a,c,u,l;function d(f){t[10](f)}let h={name:"modal1",title:"Nuevo Ticket",acceptText:"Subir",denyText:"Cancelar",$$slots:{default:[AI]},$$scope:{ctx:t}};return t[1]!==void 0&&(h.shown=t[1]),o=new ef({props:h}),We.push(()=>ct(o,"shown",d)),o.$on("approve",t[6]),{c(){e=k("div"),n=k("input"),s=K(),r=k("label"),r.innerHTML=`Nuevo Ticket
    <i class="plus icon"></i>`,i=K(),ce(o.$$.fragment),w(n,"type","file"),w(n,"id","file-input"),w(n,"accept","image/*"),w(n,"capture","environment"),w(n,"class","svelte-1l42czz"),w(r,"for","file-input"),w(r,"class","ui inverted positive right labeled icon button svelte-1l42czz"),w(e,"id","file-input-container"),w(e,"class","svelte-1l42czz")},m(f,p){Q(f,e,p),v(e,n),v(e,s),v(e,r),Q(f,i,p),ie(o,f,p),c=!0,u||(l=[Ve(n,"change",t[7]),Ve(n,"change",t[5])],u=!0)},p(f,[p]){const m={};p&4124&&(m.$$scope={dirty:p,ctx:f}),!a&&p&2&&(a=!0,m.shown=f[1],at(()=>a=!1)),o.$set(m)},i(f){c||(B(o.$$.fragment,f),c=!0)},o(f){W(o.$$.fragment,f),c=!1},d(f){f&&G(e),f&&G(i),oe(o,f),u=!1,dt(l)}}}function kI(t,e,n){let s;mo(t,bI,m=>n(4,s=m));let r,i=!1,o="",a="";const c=()=>{r&&r[0]&&n(1,i=!0)},u=async m=>{const y=lo(oi(kn,"tickets"));return Gw(y,{...m,id:y.id})},l=()=>{if(r&&r[0]){const m=bt.currentUser.uid+"-id-"+II(7);wI(r[0],m).then(y=>{const C={id:"",filename:m,business_name:o,state:L.PENDING,created_at:Number(new Date),updated_at:Number(new Date),marketplace:a,creator_email:bt.currentUser.email,creator_uid:bt.currentUser.uid,src:y};return u(C)}).then(()=>{console.log("Finalmente, todo subido lindito, na locura")}).catch(y=>{console.log("There was a problem uploading the file.",y)}).finally(()=>{n(2,o="")})}n(0,r=null),n(1,i=!1)};function d(){r=this.files,n(0,r)}function h(m){o=m,n(2,o)}function f(m){a=m,n(3,a)}function p(m){i=m,n(1,i)}return[r,i,o,a,s,c,l,d,h,f,p]}class CI extends Ae{constructor(e){super(),be(this,e,kI,SI,we,{})}}function vu(t){let e,n,s;return n=new yo({props:{layout:es.DANGER,$$slots:{default:[RI]},$$scope:{ctx:t}}}),n.$on("click",t[6]),{c(){e=k("div"),ce(n.$$.fragment),w(e,"class","column")},m(r,i){Q(r,e,i),ie(n,e,null),s=!0},p(r,i){const o={};i&32776&&(o.$$scope={dirty:i,ctx:r}),n.$set(o)},i(r){s||(B(n.$$.fragment,r),s=!0)},o(r){W(n.$$.fragment,r),s=!1},d(r){r&&G(e),oe(n)}}}function RI(t){let e;return{c(){e=J(t[3])},m(n,s){Q(n,e,s)},p(n,s){s&8&&me(e,n[3])},d(n){n&&G(e)}}}function _u(t){let e,n,s;return n=new yo({props:{$$slots:{default:[NI]},$$scope:{ctx:t}}}),n.$on("click",t[5]),{c(){e=k("div"),ce(n.$$.fragment),w(e,"class","column")},m(r,i){Q(r,e,i),ie(n,e,null),s=!0},p(r,i){const o={};i&32784&&(o.$$scope={dirty:i,ctx:r}),n.$set(o)},i(r){s||(B(n.$$.fragment,r),s=!0)},o(r){W(n.$$.fragment,r),s=!1},d(r){r&&G(e),oe(n)}}}function NI(t){let e;return{c(){e=J(t[4])},m(n,s){Q(n,e,s)},p(n,s){s&16&&me(e,n[4])},d(n){n&&G(e)}}}function DI(t){let e,n,s,r,i;function o(c){t[9](c)}let a={name:"observation"};return t[1]!==void 0&&(a.value=t[1]),s=new vo({props:a}),We.push(()=>ct(s,"value",o)),{c(){e=k("label"),e.textContent="Observaci\xF3n:",n=K(),ce(s.$$.fragment),w(e,"for","")},m(c,u){Q(c,e,u),Q(c,n,u),ie(s,c,u),i=!0},p(c,u){const l={};!r&&u&2&&(r=!0,l.value=c[1],at(()=>r=!1)),s.$set(l)},i(c){i||(B(s.$$.fragment,c),i=!0)},o(c){W(s.$$.fragment,c),i=!1},d(c){c&&G(e),c&&G(n),oe(s,c)}}}function OI(t){let e,n,s,r,i,o,a,c=t[3]&&vu(t),u=t[4]&&_u(t);function l(h){t[10](h)}let d={name:"modal2",title:"Lote: "+t[0].business_name,acceptText:t[3],denyText:"Cancelar",$$slots:{default:[DI]},$$scope:{ctx:t}};return t[2]!==void 0&&(d.shown=t[2]),i=new ef({props:d}),We.push(()=>ct(i,"shown",l)),i.$on("approve",t[7]),{c(){e=k("div"),n=k("div"),c&&c.c(),s=K(),u&&u.c(),r=K(),ce(i.$$.fragment),w(n,"class","row"),w(e,"class","ui grid equal width")},m(h,f){Q(h,e,f),v(e,n),c&&c.m(n,null),v(n,s),u&&u.m(n,null),Q(h,r,f),ie(i,h,f),a=!0},p(h,[f]){h[3]?c?(c.p(h,f),f&8&&B(c,1)):(c=vu(h),c.c(),B(c,1),c.m(n,s)):c&&(fn(),W(c,1,1,()=>{c=null}),pn()),h[4]?u?(u.p(h,f),f&16&&B(u,1)):(u=_u(h),u.c(),B(u,1),u.m(n,null)):u&&(fn(),W(u,1,1,()=>{u=null}),pn());const p={};f&1&&(p.title="Lote: "+h[0].business_name),f&8&&(p.acceptText=h[3]),f&32770&&(p.$$scope={dirty:f,ctx:h}),!o&&f&4&&(o=!0,p.shown=h[2],at(()=>o=!1)),i.$set(p)},i(h){a||(B(c),B(u),B(i.$$.fragment,h),a=!0)},o(h){W(c),W(u),W(i.$$.fragment,h),a=!1},d(h){h&&G(e),c&&c.d(),u&&u.d(),h&&G(r),oe(i,h)}}}function LI(t,e,n){let s,r,{state:i}=e,{ticket:o}=e,a,c=!1;const u={[L.PENDING]:"Aprobar",[L.ALERT]:"Aprobar",[L.APPROVED]:"",[L.CANCELLED]:"Marcar como pendiente"},l={[L.PENDING]:"Alertar",[L.ALERT]:"Cancelar",[L.APPROVED]:"Alertar",[L.CANCELLED]:""},d={[L.PENDING]:L.ALERT,[L.ALERT]:L.CANCELLED,[L.APPROVED]:L.ALERT},h={[L.PENDING]:L.APPROVED,[L.ALERT]:L.APPROVED,[L.CANCELLED]:L.PENDING},f=async()=>{const b=lo(kn,`tickets/${o.id}`),D=o;D.state=h[i],await uu(b,{...D}),n(2,c=!1),n(1,a="")},p=()=>{n(2,c=!0)},m=async()=>{const b=lo(kn,`tickets/${o.id}`),D=o;D.state=d[i],D.state===L.ALERT&&(D.alert_reason=a),D.state===L.CANCELLED&&(D.cancel_reason=a),await uu(b,{...D}),n(2,c=!1),n(1,a="")};function y(b){a=b,n(1,a)}function C(b){c=b,n(2,c)}return t.$$set=b=>{"state"in b&&n(8,i=b.state),"ticket"in b&&n(0,o=b.ticket)},t.$$.update=()=>{t.$$.dirty&256&&n(4,s=u[i]),t.$$.dirty&256&&n(3,r=l[i])},[o,a,c,r,s,f,p,m,i,y,C]}class PI extends Ae{constructor(e){super(),be(this,e,LI,OI,we,{state:8,ticket:0})}}const MI=t=>t.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),UI=t=>{const e=t.toLocaleDateString("es-AR",{day:"2-digit"}),n=t.toLocaleDateString("es-AR",{month:"2-digit"}),s=t.toLocaleDateString("es-AR",{year:"numeric"});return`${e}/${n}/${s}`},Nr=t=>{const e=new Date(t);return UI(e)+" a las "+MI(e)};function wu(t){let e,n;return e=new PI({props:{ticket:t[0],state:t[0].state}}),{c(){ce(e.$$.fragment)},m(s,r){ie(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.ticket=s[0]),r&1&&(i.state=s[0].state),e.$set(i)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){oe(e,s)}}}function xI(t){let e,n,s,r,i=t[0].alert_reason+"",o;return{c(){e=k("div"),n=k("span"),s=k("em"),r=J(" En alerta: "),o=J(i),w(s,"data-emoji","warning"),w(e,"class","extra content")},m(a,c){Q(a,e,c),v(e,n),v(n,s),v(n,r),v(n,o)},p(a,c){c&1&&i!==(i=a[0].alert_reason+"")&&me(o,i)},d(a){a&&G(e)}}}function FI(t){let e,n,s,r,i=t[0].cancel_reason+"",o;return{c(){e=k("div"),n=k("span"),s=k("em"),r=J(" Cancelado: "),o=J(i),w(s,"data-emoji","x"),w(e,"class","extra content")},m(a,c){Q(a,e,c),v(e,n),v(n,s),v(n,r),v(n,o)},p(a,c){c&1&&i!==(i=a[0].cancel_reason+"")&&me(o,i)},d(a){a&&G(e)}}}function VI(t){var H,te;let e,n,s,r,i,o=((H=t[0])==null?void 0:H.business_name)+"",a,c,u,l,d,h=Nr((te=t[0])==null?void 0:te.created_at)+"",f,p,m,y,C,b,D,U,x,T,E=t[3]&&wu(t);function I(O,Y){if(O[0].cancel_reason&&O[0].state===L.CANCELLED)return FI;if(O[0].alert_reason&&O[0].state===L.ALERT)return xI}let g=I(t),S=g&&g(t);return{c(){E&&E.c(),e=K(),n=k("div"),s=k("div"),r=k("span"),i=J("Lote: "),a=J(o),c=K(),u=k("div"),l=k("span"),d=J("Creado: "),f=J(h),p=K(),S&&S.c(),m=K(),y=k("div"),C=k("img"),w(r,"class","header"),w(l,"class","date"),w(u,"class","meta"),w(s,"class","content"),ir(C.src,b=t[1])||w(C,"src",b),w(C,"alt","Current ticket"),w(y,"class","image"),w(n,"class",D="ui fluid card "+(t[2]?"":"loading"))},m(O,Y){E&&E.m(O,Y),Q(O,e,Y),Q(O,n,Y),v(n,s),v(s,r),v(r,i),v(r,a),v(s,c),v(s,u),v(u,l),v(l,d),v(l,f),v(n,p),S&&S.m(n,null),v(n,m),v(n,y),v(y,C),U=!0,x||(T=Ve(C,"load",t[4]),x=!0)},p(O,[Y]){var z,F;O[3]?E?(E.p(O,Y),Y&8&&B(E,1)):(E=wu(O),E.c(),B(E,1),E.m(e.parentNode,e)):E&&(fn(),W(E,1,1,()=>{E=null}),pn()),(!U||Y&1)&&o!==(o=((z=O[0])==null?void 0:z.business_name)+"")&&me(a,o),(!U||Y&1)&&h!==(h=Nr((F=O[0])==null?void 0:F.created_at)+"")&&me(f,h),g===(g=I(O))&&S?S.p(O,Y):(S&&S.d(1),S=g&&g(O),S&&(S.c(),S.m(n,m))),(!U||Y&2&&!ir(C.src,b=O[1]))&&w(C,"src",b),(!U||Y&4&&D!==(D="ui fluid card "+(O[2]?"":"loading")))&&w(n,"class",D)},i(O){U||(B(E),U=!0)},o(O){W(E),U=!1},d(O){E&&E.d(O),O&&G(e),O&&G(n),S&&S.d(),x=!1,T()}}}function $I(t,e,n){let{ticket:s}=e,r=!1,i;const o=()=>{n(2,r=!0)};let a=!1;return Pu(async()=>{const c=await bt.currentUser.getIdTokenResult();n(3,a=Boolean(c.claims.admin))}),t.$$set=c=>{"ticket"in c&&n(0,s=c.ticket)},t.$$.update=()=>{t.$$.dirty&3&&s.src!=i&&(n(2,r=!1),n(1,i=s.src))},[s,i,r,a,o]}class nf extends Ae{constructor(e){super(),be(this,e,$I,VI,we,{ticket:0})}}function Eu(t,e,n){const s=t.slice();return s[1]=e[n],s}function Iu(t){let e,n;return e=new nf({props:{ticket:t[1]}}),{c(){ce(e.$$.fragment)},m(s,r){ie(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.ticket=s[1]),e.$set(i)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){oe(e,s)}}}function BI(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=Iu(Eu(t,s,o));const i=o=>W(r[o],1,1,()=>{r[o]=null});return{c(){e=k("div");for(let o=0;o<r.length;o+=1)r[o].c();w(e,"class","ui container")},m(o,a){Q(o,e,a);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const u=Eu(o,s,c);r[c]?(r[c].p(u,a),B(r[c],1)):(r[c]=Iu(u),r[c].c(),B(r[c],1),r[c].m(e,null))}for(fn(),c=s.length;c<r.length;c+=1)i(c);pn()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)B(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)W(r[a]);n=!1},d(o){o&&G(e),go(r,o)}}}function jI(t,e,n){let{tickets:s}=e;return t.$$set=r=>{"tickets"in r&&n(0,s=r.tickets)},[s]}class qI extends Ae{constructor(e){super(),be(this,e,jI,BI,we,{tickets:0})}}const HI=ja([],t=>{const e=Pa(oi(kn,"tickets"),fo("creator_uid","==",bt.currentUser.uid));return Pd(e,async s=>{const r=[];s.forEach(i=>{r.push(i.data())}),r.sort((i,o)=>o.created_at-i.created_at),t(r)})});function GI(t){let e,n,s,r,i=t[1][L.PENDING]+"",o,a,c,u,l,d,h,f=t[1][L.ALERT]+"",p,m,y,C,b,D,U,x=t[1][L.APPROVED]+"",T,E,I,g,S,H,te,O=t[1][L.CANCELLED]+"",Y,z,F,Me,tn;return{c(){e=k("div"),n=k("span"),s=k("em"),r=J("Pendientes ("),o=J(i),a=J(")"),u=K(),l=k("span"),d=k("em"),h=J("En Alerta ("),p=J(f),m=J(")"),C=K(),b=k("span"),D=k("em"),U=J("Aprobados ("),T=J(x),E=J(")"),g=K(),S=k("span"),H=k("em"),te=J("Cancelados ("),Y=J(O),z=J(")"),w(s,"data-emoji","hourglass"),w(s,"class","svelte-6jeuwh"),w(n,"class",c=t[0]===L.PENDING?"item active":"item"),w(n,"data-tab","first"),w(d,"data-emoji","rotating_light"),w(d,"class","svelte-6jeuwh"),w(l,"class",y=t[0]===L.ALERT?"item active":"item"),w(l,"data-tab","second"),w(D,"data-emoji","white_check_mark"),w(D,"class","svelte-6jeuwh"),w(b,"class",I=t[0]===L.APPROVED?"item active":"item"),w(b,"data-tab","third"),w(H,"data-emoji","x"),w(H,"class","svelte-6jeuwh"),w(S,"class",F=t[0]===L.CANCELLED?"item active":"item"),w(S,"data-tab","fourth"),w(e,"class","ui stackable container menu")},m(pt,Oe){Q(pt,e,Oe),v(e,n),v(n,s),v(n,r),v(n,o),v(n,a),v(e,u),v(e,l),v(l,d),v(l,h),v(l,p),v(l,m),v(e,C),v(e,b),v(b,D),v(b,U),v(b,T),v(b,E),v(e,g),v(e,S),v(S,H),v(S,te),v(S,Y),v(S,z),Me||(tn=[Ve(n,"click",function(){Fn(t[2])&&t[2].apply(this,arguments)}),Ve(l,"click",function(){Fn(t[3])&&t[3].apply(this,arguments)}),Ve(b,"click",function(){Fn(t[4])&&t[4].apply(this,arguments)}),Ve(S,"click",function(){Fn(t[5])&&t[5].apply(this,arguments)})],Me=!0)},p(pt,[Oe]){t=pt,Oe&2&&i!==(i=t[1][L.PENDING]+"")&&me(o,i),Oe&1&&c!==(c=t[0]===L.PENDING?"item active":"item")&&w(n,"class",c),Oe&2&&f!==(f=t[1][L.ALERT]+"")&&me(p,f),Oe&1&&y!==(y=t[0]===L.ALERT?"item active":"item")&&w(l,"class",y),Oe&2&&x!==(x=t[1][L.APPROVED]+"")&&me(T,x),Oe&1&&I!==(I=t[0]===L.APPROVED?"item active":"item")&&w(b,"class",I),Oe&2&&O!==(O=t[1][L.CANCELLED]+"")&&me(Y,O),Oe&1&&F!==(F=t[0]===L.CANCELLED?"item active":"item")&&w(S,"class",F)},i:le,o:le,d(pt){pt&&G(e),Me=!1,dt(tn)}}}function zI(t,e,n){let{selectedState:s}=e,{r}=e,{onPendingClick:i}=e,{onAlertedClick:o}=e,{onApprovedClick:a}=e,{onCancelledClick:c}=e;return t.$$set=u=>{"selectedState"in u&&n(0,s=u.selectedState),"r"in u&&n(1,r=u.r),"onPendingClick"in u&&n(2,i=u.onPendingClick),"onAlertedClick"in u&&n(3,o=u.onAlertedClick),"onApprovedClick"in u&&n(4,a=u.onApprovedClick),"onCancelledClick"in u&&n(5,c=u.onCancelledClick)},[s,r,i,o,a,c]}class KI extends Ae{constructor(e){super(),be(this,e,zI,GI,we,{selectedState:0,r:1,onPendingClick:2,onAlertedClick:3,onApprovedClick:4,onCancelledClick:5})}}function WI(t){let e,n;return e=new KI({props:{selectedState:t[0],r:t[1],onPendingClick:t[2],onAlertedClick:t[3],onApprovedClick:t[4],onCancelledClick:t[5]}}),{c(){ce(e.$$.fragment)},m(s,r){ie(e,s,r),n=!0},p(s,[r]){const i={};r&1&&(i.selectedState=s[0]),r&2&&(i.r=s[1]),e.$set(i)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){oe(e,s)}}}function QI(t,e,n){let{tickets:s}=e,{selectedState:r}=e;const i=new Map,o=()=>{n(0,r=L.PENDING)},a=()=>{n(0,r=L.ALERT)},c=()=>{n(0,r=L.APPROVED)},u=()=>{n(0,r=L.CANCELLED)};return t.$$set=l=>{"tickets"in l&&n(6,s=l.tickets),"selectedState"in l&&n(0,r=l.selectedState)},t.$$.update=()=>{t.$$.dirty&66&&(n(1,i[L.PENDING]=0,i),n(1,i[L.ALERT]=0,i),n(1,i[L.APPROVED]=0,i),n(1,i[L.CANCELLED]=0,i),s.forEach(l=>{n(1,i[l.state]++,i)}))},[r,i,o,a,c,u,s]}class sf extends Ae{constructor(e){super(),be(this,e,QI,WI,we,{tickets:6,selectedState:0})}}function XI(t){let e,n,s,r,i,o,a,c,u,l;e=new Zd({});function d(f){t[3](f)}let h={tickets:t[1]};return t[0]!==void 0&&(h.selectedState=t[0]),r=new sf({props:h}),We.push(()=>ct(r,"selectedState",d)),a=new qI({props:{tickets:t[2]}}),u=new CI({}),{c(){ce(e.$$.fragment),n=K(),s=k("div"),ce(r.$$.fragment),o=K(),ce(a.$$.fragment),c=K(),ce(u.$$.fragment),w(s,"class","main container svelte-1pxfy9x")},m(f,p){ie(e,f,p),Q(f,n,p),Q(f,s,p),ie(r,s,null),v(s,o),ie(a,s,null),v(s,c),ie(u,s,null),l=!0},p(f,[p]){const m={};p&2&&(m.tickets=f[1]),!i&&p&1&&(i=!0,m.selectedState=f[0],at(()=>i=!1)),r.$set(m);const y={};p&4&&(y.tickets=f[2]),a.$set(y)},i(f){l||(B(e.$$.fragment,f),B(r.$$.fragment,f),B(a.$$.fragment,f),B(u.$$.fragment,f),l=!0)},o(f){W(e.$$.fragment,f),W(r.$$.fragment,f),W(a.$$.fragment,f),W(u.$$.fragment,f),l=!1},d(f){oe(e,f),f&&G(n),f&&G(s),oe(r),oe(a),oe(u)}}}function YI(t,e,n){let s,r;mo(t,HI,a=>n(1,r=a));let i=L.PENDING;function o(a){i=a,n(0,i)}return t.$$.update=()=>{t.$$.dirty&3&&n(2,s=r.filter(a=>a.state===i))},[i,r,s,o]}class JI extends Ae{constructor(e){super(),be(this,e,YI,XI,we,{})}}function Tu(t,e,n){const s=t.slice();return s[4]=e[n],s}function bu(t){let e,n,s=Nr(t[4].created_at)+"",r,i,o,a=t[4].business_name+"",c,u,l,d=(t[4].marketplace||"No seleccionado")+"",h,f,p,m=t[4].creator_email+"",y,C,b,D;function U(){return t[2](t[4])}return{c(){e=k("tr"),n=k("td"),r=J(s),i=K(),o=k("td"),c=J(a),u=K(),l=k("td"),h=J(d),f=K(),p=k("td"),y=J(m),C=K(),w(n,"class","left aligned")},m(x,T){Q(x,e,T),v(e,n),v(n,r),v(e,i),v(e,o),v(o,c),v(e,u),v(e,l),v(l,h),v(e,f),v(e,p),v(p,y),v(e,C),b||(D=Ve(e,"click",U),b=!0)},p(x,T){t=x,T&1&&s!==(s=Nr(t[4].created_at)+"")&&me(r,s),T&1&&a!==(a=t[4].business_name+"")&&me(c,a),T&1&&d!==(d=(t[4].marketplace||"No seleccionado")+"")&&me(h,d),T&1&&m!==(m=t[4].creator_email+"")&&me(y,m)},d(x){x&&G(e),b=!1,D()}}}function ZI(t){let e,n,s,r,i=t[0],o=[];for(let a=0;a<i.length;a+=1)o[a]=bu(Tu(t,i,a));return{c(){e=k("table"),n=k("thead"),n.innerHTML=`<tr><th class="left aligned">Fecha</th> 
      <th>Lote</th> 
      <th>Local</th> 
      <th>Vendedor</th></tr>`,s=K(),r=k("tbody");for(let a=0;a<o.length;a+=1)o[a].c();w(e,"class","ui padded selectable celled right aligned table svelte-yrkkan")},m(a,c){Q(a,e,c),v(e,n),v(e,s),v(e,r);for(let u=0;u<o.length;u+=1)o[u].m(r,null)},p(a,[c]){if(c&3){i=a[0];let u;for(u=0;u<i.length;u+=1){const l=Tu(a,i,u);o[u]?o[u].p(l,c):(o[u]=bu(l),o[u].c(),o[u].m(r,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=i.length}},i:le,o:le,d(a){a&&G(e),go(o,a)}}}function e0(t,e,n){let{tickets:s}=e;const r=Mu(),i=a=>{r("select",a)},o=a=>i(a);return t.$$set=a=>{"tickets"in a&&n(0,s=a.tickets)},[s,i,o]}class t0 extends Ae{constructor(e){super(),be(this,e,e0,ZI,we,{tickets:0})}}function n0(t){let e,n,s;return{c(){e=k("button"),e.textContent="Ver m\xE1s",w(e,"class","ui primary basic button")},m(r,i){Q(r,e,i),n||(s=Ve(e,"click",t[0]),n=!0)},p:le,i:le,o:le,d(r){r&&G(e),n=!1,s()}}}function s0(t){function e(n){Dr.call(this,t,n)}return[e]}class r0 extends Ae{constructor(e){super(),be(this,e,s0,n0,we,{})}}const Au=async t=>{const e=[];t.creatorUID&&e.push(fo("creator_uid","==",t.creatorUID)),t.state&&e.push(fo("state","==",t.state)),e.push(Od("created_at","desc")),t.lastTicket&&e.push($w(t.lastTicket)),e.push(Fw(2));const n=Pa(oi(kn,"tickets"),...e);return await Hw(n)},Su=t=>{const e=[];return t.forEach(n=>{e.push(n.data())}),e},i0=ja([],t=>{const e=Pa(oi(kn,"tickets"),Od("created_at","desc"));return Pd(e,async s=>{const r=[];s.forEach(i=>r.push(i.data())),t(r)})});function o0(t){let e,n,s,r,i=t[4][t[0]]+"",o,a;return{c(){e=k("div"),n=k("div"),s=k("i"),r=J(`
              No hay tickets en la seccion "`),o=J(i),a=J('"'),w(s,"class","info circle icon"),w(n,"class","ui icon header"),w(e,"class","ui placeholder segment")},m(c,u){Q(c,e,u),v(e,n),v(n,s),v(n,r),v(n,o),v(n,a)},p(c,u){u&1&&i!==(i=c[4][c[0]]+"")&&me(o,i)},i:le,o:le,d(c){c&&G(e)}}}function a0(t){let e,n;return e=new nf({props:{ticket:t[2]}}),{c(){ce(e.$$.fragment)},m(s,r){ie(e,s,r),n=!0},p(s,r){const i={};r&4&&(i.ticket=s[2]),e.$set(i)},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){oe(e,s)}}}function c0(t){let e,n,s,r,i,o,a,c,u,l,d,h,f,p,m,y,C,b,D;e=new Zd({});function U(g){t[7](g)}let x={tickets:t[3]};t[0]!==void 0&&(x.selectedState=t[0]),a=new sf({props:x}),We.push(()=>ct(a,"selectedState",U)),l=new t0({props:{tickets:t[1]}}),l.$on("select",t[5]),f=new r0({}),f.$on("click",t[6]);const T=[a0,o0],E=[];function I(g,S){return g[2]?0:1}return C=I(t),b=E[C]=T[C](t),{c(){ce(e.$$.fragment),n=K(),s=k("div"),r=k("div"),i=k("div"),o=k("div"),ce(a.$$.fragment),u=K(),ce(l.$$.fragment),d=K(),h=k("div"),ce(f.$$.fragment),p=K(),m=k("div"),y=k("div"),b.c(),w(h,"class","center-div svelte-11h2wbu"),w(o,"class","center"),w(i,"class","column eleven wide"),w(m,"class","column five wide"),w(r,"class","row"),w(s,"class","ui main grid container svelte-11h2wbu")},m(g,S){ie(e,g,S),Q(g,n,S),Q(g,s,S),v(s,r),v(r,i),v(i,o),ie(a,o,null),v(o,u),ie(l,o,null),v(o,d),v(o,h),ie(f,h,null),v(r,p),v(r,m),v(m,y),E[C].m(y,null),D=!0},p(g,[S]){const H={};S&8&&(H.tickets=g[3]),!c&&S&1&&(c=!0,H.selectedState=g[0],at(()=>c=!1)),a.$set(H);const te={};S&2&&(te.tickets=g[1]),l.$set(te);let O=C;C=I(g),C===O?E[C].p(g,S):(fn(),W(E[O],1,1,()=>{E[O]=null}),pn(),b=E[C],b?b.p(g,S):(b=E[C]=T[C](g),b.c()),B(b,1),b.m(y,null))},i(g){D||(B(e.$$.fragment,g),B(a.$$.fragment,g),B(l.$$.fragment,g),B(f.$$.fragment,g),B(b),D=!0)},o(g){W(e.$$.fragment,g),W(a.$$.fragment,g),W(l.$$.fragment,g),W(f.$$.fragment,g),W(b),D=!1},d(g){oe(e,g),g&&G(n),g&&G(s),oe(a),oe(l),oe(f),E[C].d()}}}function u0(t,e,n){let s;mo(t,i0,h=>n(3,s=h));let r,i=L.PENDING;const o={[L.PENDING]:"Pendientes",[L.ALERT]:"En Alerta",[L.APPROVED]:"Aprobados",[L.CANCELLED]:"Cancelados"};let a=[],c;const u=h=>{r!=h.detail&&n(2,r=h.detail)},l=()=>{console.log("Loading more..."),Au({state:i,lastTicket:c}).then(h=>{h.forEach(f=>c=f),n(1,a=[...a,...Su(h)])})};function d(h){i=h,n(0,i)}return t.$$.update=()=>{t.$$.dirty&1&&(console.log("Run"),Au({state:i}).then(h=>{h.forEach(f=>c=f),n(1,a=Su(h))})),t.$$.dirty&2&&n(2,r=a&&a.length>0?a[0]:void 0)},[i,a,r,s,o,u,l,d]}class l0 extends Ae{constructor(e){super(),be(this,e,u0,c0,we,{})}}function h0(t){let e,n;return e=new lI({}),{c(){ce(e.$$.fragment)},m(s,r){ie(e,s,r),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){oe(e,s)}}}function d0(t){let e,n;return e=new JI({}),{c(){ce(e.$$.fragment)},m(s,r){ie(e,s,r),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){oe(e,s)}}}function f0(t){let e,n;return e=new l0({}),{c(){ce(e.$$.fragment)},m(s,r){ie(e,s,r),n=!0},i(s){n||(B(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){oe(e,s)}}}function p0(t){let e,n,s,r;const i=[f0,d0,h0],o=[];function a(c,u){return c[1]?0:c[0]?1:2}return n=a(t),s=o[n]=i[n](t),{c(){e=k("main"),s.c(),w(e,"class","svelte-pirsrs")},m(c,u){Q(c,e,u),o[n].m(e,null),r=!0},p(c,[u]){let l=n;n=a(c),n!==l&&(fn(),W(o[l],1,1,()=>{o[l]=null}),pn(),s=o[n],s||(s=o[n]=i[n](c),s.c()),B(s,1),s.m(e,null))},i(c){r||(B(s),r=!0)},o(c){W(s),r=!1},d(c){c&&G(e),o[n].d()}}}function m0(t,e,n){let s,r=!1;return Cm(bt,async i=>{if(i){n(0,s=i.uid);const o=await i.getIdTokenResult();n(1,r=Boolean(o.claims.admin))}else n(0,s=void 0)}),[s,r]}class g0 extends Ae{constructor(e){super(),be(this,e,m0,p0,we,{})}}new g0({target:document.getElementById("app")});
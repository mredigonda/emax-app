const zd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};zd();function le(){}function Kd(t,e){for(const n in e)t[n]=e[n];return t}function gu(t){return t()}function La(){return Object.create(null)}function ht(t){t.forEach(gu)}function Pn(t){return typeof t=="function"}function be(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let xs;function rr(t,e){return xs||(xs=document.createElement("a")),xs.href=e,t===xs.href}function Wd(t){return Object.keys(t).length===0}function Qd(t,...e){if(t==null)return le;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ao(t,e,n){t.$$.on_destroy.push(Qd(e,n))}function yu(t,e,n,s){if(t){const r=vu(t,e,n,s);return t[0](r)}}function vu(t,e,n,s){return t[1]&&s?Kd(n.ctx.slice(),t[1](s(e))):n.ctx}function _u(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function wu(t,e,n,s,r,i){if(r){const o=vu(e,n,s,i);t.p(o,r)}}function Eu(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Pa(t){return t==null?"":t}function v(t,e){t.appendChild(e)}function K(t,e,n){t.insertBefore(e,n||null)}function z(t){t.parentNode.removeChild(t)}function co(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function Y(){return W(" ")}function Xd(){return W("")}function He(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Yd(t){return Array.from(t.childNodes)}function pe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ir(t,e){t.value=e==null?"":e}function Ma(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Jd(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Zd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let Qn;function $n(t){Qn=t}function Iu(){if(!Qn)throw new Error("Function called outside component initialization");return Qn}function Tu(t){Iu().$$.on_mount.push(t)}function bu(){const t=Iu();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=Zd(e,n,{cancelable:s});return r.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}function uo(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Mn=[],We=[],Ws=[],Ri=[],ef=Promise.resolve();let Ni=!1;function tf(){Ni||(Ni=!0,ef.then(Su))}function or(t){Ws.push(t)}function ot(t){Ri.push(t)}const ci=new Set;let Fs=0;function Su(){const t=Qn;do{for(;Fs<Mn.length;){const e=Mn[Fs];Fs++,$n(e),nf(e.$$)}for($n(null),Mn.length=0,Fs=0;We.length;)We.pop()();for(let e=0;e<Ws.length;e+=1){const n=Ws[e];ci.has(n)||(ci.add(n),n())}Ws.length=0}while(Mn.length);for(;Ri.length;)Ri.pop()();Ni=!1,ci.clear(),$n(t)}function nf(t){if(t.fragment!==null){t.update(),ht(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(or)}}const Qs=new Set;let Dt;function hn(){Dt={r:0,c:[],p:Dt}}function dn(){Dt.r||ht(Dt.c),Dt=Dt.p}function q(t,e){t&&t.i&&(Qs.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(Qs.has(t))return;Qs.add(t),Dt.c.push(()=>{Qs.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function at(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ue(t){t&&t.c()}function oe(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||or(()=>{const c=i.map(gu).filter(Pn);o?o.push(...c):ht(c),t.$$.on_mount=[]}),a.forEach(or)}function ae(t,e){const n=t.$$;n.fragment!==null&&(ht(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function sf(t,e){t.$$.dirty[0]===-1&&(Mn.push(t),tf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,s,r,i,o,a=[-1]){const c=Qn;$n(t);const u=t.$$={fragment:null,ctx:null,props:i,update:le,not_equal:r,bound:La(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:La(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(d,h,...f)=>{const p=f.length?f[0]:h;return u.ctx&&r(u.ctx[d],u.ctx[d]=p)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](p),l&&sf(t,d)),h}):[],u.update(),l=!0,ht(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const d=Yd(e.target);u.fragment&&u.fragment.l(d),d.forEach(z)}else u.fragment&&u.fragment.c();e.intro&&q(t.$$.fragment),oe(t,e.target,e.anchor,e.customElement),Su()}$n(c)}class De{$destroy(){ae(this,1),this.$destroy=le}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Wd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var P=(t=>(t.PENDING="PENDING",t.APPROVED="APPROVED",t.ALERT="ALERT",t.CANCELLED="CANCELLED",t))(P||{}),Xn=(t=>(t.SUCCESS="SUCCESS",t.DANGER="DANGER",t))(Xn||{});function rf(t){let e,n,s,r,i;const o=t[2].default,a=yu(o,t,t[1],null);return{c(){e=k("button"),a&&a.c(),w(e,"class",n=Pa("ui button "+(t[0]===Xn.SUCCESS?"positive":"negative"))+" svelte-1r0pnu3")},m(c,u){K(c,e,u),a&&a.m(e,null),s=!0,r||(i=He(e,"click",t[3]),r=!0)},p(c,[u]){a&&a.p&&(!s||u&2)&&wu(a,o,c,c[1],s?_u(o,c[1],u,null):Eu(c[1]),null),(!s||u&1&&n!==(n=Pa("ui button "+(c[0]===Xn.SUCCESS?"positive":"negative"))+" svelte-1r0pnu3"))&&w(e,"class",n)},i(c){s||(q(a,c),s=!0)},o(c){X(a,c),s=!1},d(c){c&&z(e),a&&a.d(c),r=!1,i()}}}function of(t,e,n){let{$$slots:s={},$$scope:r}=e,{layout:i=Xn.SUCCESS}=e;function o(a){uo.call(this,t,a)}return t.$$set=a=>{"layout"in a&&n(0,i=a.layout),"$$scope"in a&&n(1,r=a.$$scope)},[i,r,s,o]}class lo extends De{constructor(e){super(),Ne(this,e,of,rf,be,{layout:0})}}function af(t){let e,n,s;return{c(){e=k("input"),w(e,"type","text"),w(e,"name",t[1]),w(e,"class","svelte-g2xvdr")},m(r,i){K(r,e,i),ir(e,t[0]),n||(s=[He(e,"input",t[3]),He(e,"input",t[2])],n=!0)},p(r,[i]){i&2&&w(e,"name",r[1]),i&1&&e.value!==r[0]&&ir(e,r[0])},i:le,o:le,d(r){r&&z(e),n=!1,ht(s)}}}function cf(t,e,n){let{name:s}=e,{value:r}=e;function i(a){uo.call(this,t,a)}function o(){r=this.value,n(0,r)}return t.$$set=a=>{"name"in a&&n(1,s=a.name),"value"in a&&n(0,r=a.value)},[r,s,i,o]}class ho extends De{constructor(e){super(),Ne(this,e,cf,af,be,{name:1,value:0})}}function uf(t){let e,n,s;return{c(){e=k("input"),w(e,"type","password"),w(e,"name",t[1]),w(e,"class","svelte-g2xvdr")},m(r,i){K(r,e,i),ir(e,t[0]),n||(s=[He(e,"input",t[3]),He(e,"input",t[2])],n=!0)},p(r,[i]){i&2&&w(e,"name",r[1]),i&1&&e.value!==r[0]&&ir(e,r[0])},i:le,o:le,d(r){r&&z(e),n=!1,ht(s)}}}function lf(t,e,n){let{name:s}=e,{value:r}=e;function i(a){uo.call(this,t,a)}function o(){r=this.value,n(0,r)}return t.$$set=a=>{"name"in a&&n(1,s=a.name),"value"in a&&n(0,r=a.value)},[r,s,i,o]}class hf extends De{constructor(e){super(),Ne(this,e,lf,uf,be,{name:1,value:0})}}var Au="/emax-app/assets/icon-192.f78075aa.png";/**
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
 */const ku=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},df=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(h=64)),s.push(n[l],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ku(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):df(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw Error();const h=i<<2|a>>4;if(s.push(h),u!==64){const f=a<<4&240|u>>2;if(s.push(f),d!==64){const p=u<<6&192|d;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ff=function(t){const e=ku(t);return Cu.encodeByteArray(e,!0)},Ru=function(t){return ff(t).replace(/\./g,"")},pf=function(t){try{return Cu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class mf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ie(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Du(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ou(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gf(){return Ie().indexOf("Electron/")>=0}function Lu(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yf(){return Ie().indexOf("MSAppHost/")>=0}function vf(){return typeof indexedDB=="object"}function _f(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const wf="FirebaseError";class At extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=wf,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Ef(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new At(r,a,s)}}function Ef(t,e){return t.replace(If,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const If=/\{\$([^}]+)}/g;function Tf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ar(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ua(i)&&Ua(o)){if(!ar(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ua(t){return t!==null&&typeof t=="object"}/**
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
 */function ms(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Un(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bf(t,e){const n=new Sf(t,e);return n.subscribe.bind(n)}class Sf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Af(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ui),r.error===void 0&&(r.error=ui),r.complete===void 0&&(r.complete=ui);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Af(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ui(){}/**
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
 */function me(t){return t&&t._delegate?t._delegate:t}class Et{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nt="[DEFAULT]";/**
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
 */class kf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rf(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cf(t){return t===Nt?void 0:t}function Rf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Nf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Df={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Of=ee.INFO,Lf={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Pf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Lf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fo{constructor(e){this.name=e,this._logLevel=Of,this._logHandler=Pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Df[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Mf=(t,e)=>e.some(n=>t instanceof n);let xa,Fa;function Uf(){return xa||(xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xf(){return Fa||(Fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pu=new WeakMap,Di=new WeakMap,Mu=new WeakMap,li=new WeakMap,po=new WeakMap;function Ff(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_t(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pu.set(n,t)}).catch(()=>{}),po.set(e,t),e}function Vf(t){if(Di.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Di.set(t,e)}let Oi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Di.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bf(t){Oi=t(Oi)}function $f(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(hi(this),e,...n);return Mu.set(s,e.sort?e.sort():[e]),_t(s)}:xf().includes(t)?function(...e){return t.apply(hi(this),e),_t(Pu.get(this))}:function(...e){return _t(t.apply(hi(this),e))}}function jf(t){return typeof t=="function"?$f(t):(t instanceof IDBTransaction&&Vf(t),Mf(t,Uf())?new Proxy(t,Oi):t)}function _t(t){if(t instanceof IDBRequest)return Ff(t);if(li.has(t))return li.get(t);const e=jf(t);return e!==t&&(li.set(t,e),po.set(e,t)),e}const hi=t=>po.get(t);function qf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_t(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_t(o.result),c.oldVersion,c.newVersion,_t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Hf=["get","getKey","getAll","getAllKeys","count"],Gf=["put","add","delete","clear"],di=new Map;function Va(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(di.get(e))return di.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Gf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Hf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return di.set(e,i),i}Bf(t=>({...t,get:(e,n,s)=>Va(e,n)||t.get(e,n,s),has:(e,n)=>!!Va(e,n)||t.has(e,n)}));/**
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
 */class zf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Li="@firebase/app",Ba="0.7.28";/**
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
 */const mo=new fo("@firebase/app"),Wf="@firebase/app-compat",Qf="@firebase/analytics-compat",Xf="@firebase/analytics",Yf="@firebase/app-check-compat",Jf="@firebase/app-check",Zf="@firebase/auth",ep="@firebase/auth-compat",tp="@firebase/database",np="@firebase/database-compat",sp="@firebase/functions",rp="@firebase/functions-compat",ip="@firebase/installations",op="@firebase/installations-compat",ap="@firebase/messaging",cp="@firebase/messaging-compat",up="@firebase/performance",lp="@firebase/performance-compat",hp="@firebase/remote-config",dp="@firebase/remote-config-compat",fp="@firebase/storage",pp="@firebase/storage-compat",mp="@firebase/firestore",gp="@firebase/firestore-compat",yp="firebase",vp="9.9.0";/**
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
 */const Uu="[DEFAULT]",_p={[Li]:"fire-core",[Wf]:"fire-core-compat",[Xf]:"fire-analytics",[Qf]:"fire-analytics-compat",[Jf]:"fire-app-check",[Yf]:"fire-app-check-compat",[Zf]:"fire-auth",[ep]:"fire-auth-compat",[tp]:"fire-rtdb",[np]:"fire-rtdb-compat",[sp]:"fire-fn",[rp]:"fire-fn-compat",[ip]:"fire-iid",[op]:"fire-iid-compat",[ap]:"fire-fcm",[cp]:"fire-fcm-compat",[up]:"fire-perf",[lp]:"fire-perf-compat",[hp]:"fire-rc",[dp]:"fire-rc-compat",[fp]:"fire-gcs",[pp]:"fire-gcs-compat",[mp]:"fire-fst",[gp]:"fire-fst-compat","fire-js":"fire-js",[yp]:"fire-js-all"};/**
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
 */const cr=new Map,Pi=new Map;function wp(t,e){try{t.container.addComponent(e)}catch(n){mo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $t(t){const e=t.name;if(Pi.has(e))return mo.debug(`There were multiple attempts to register component ${e}.`),!1;Pi.set(e,t);for(const n of cr.values())wp(n,t);return!0}function Nr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ep={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},jt=new ps("app","Firebase",Ep);/**
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
 */class Ip{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const In=vp;function Tp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Uu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});const r=cr.get(s);if(r){if(ar(t,r.options)&&ar(n,r.config))return r;throw jt.create("duplicate-app",{appName:s})}const i=new Nf(s);for(const a of Pi.values())i.addComponent(a);const o=new Ip(t,n,i);return cr.set(s,o),o}function go(t=Uu){const e=cr.get(t);if(!e)throw jt.create("no-app",{appName:t});return e}function Ye(t,e,n){var s;let r=(s=_p[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mo.warn(a.join(" "));return}$t(new Et(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bp="firebase-heartbeat-database",Sp=1,Yn="firebase-heartbeat-store";let fi=null;function xu(){return fi||(fi=qf(bp,Sp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yn)}}}).catch(t=>{throw jt.create("storage-open",{originalErrorMessage:t.message})})),fi}async function Ap(t){var e;try{return(await xu()).transaction(Yn).objectStore(Yn).get(Fu(t))}catch(n){throw jt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function $a(t,e){var n;try{const r=(await xu()).transaction(Yn,"readwrite");return await r.objectStore(Yn).put(e,Fu(t)),r.done}catch(s){throw jt.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Fu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kp=1024,Cp=30*24*60*60*1e3;class Rp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ja();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Cp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ja(),{heartbeatsToSend:n,unsentEntries:s}=Np(this._heartbeatsCache.heartbeats),r=Ru(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ja(){return new Date().toISOString().substring(0,10)}function Np(t,e=kp){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),qa(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),qa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Dp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vf()?_f().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ap(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $a(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $a(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function qa(t){return Ru(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Op(t){$t(new Et("platform-logger",e=>new zf(e),"PRIVATE")),$t(new Et("heartbeat",e=>new Rp(e),"PRIVATE")),Ye(Li,Ba,t),Ye(Li,Ba,"esm2017"),Ye("fire-js","")}Op("");function yo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Vu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lp=Vu,Bu=new ps("auth","Firebase",Vu()),Pp={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"};/**
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
 */const Ha=new fo("@firebase/auth");function Xs(t,...e){Ha.logLevel<=ee.ERROR&&Ha.error(`Auth (${In}): ${t}`,...e)}/**
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
 */function Qe(t,...e){throw vo(t,...e)}function Je(t,...e){return vo(t,...e)}function Mp(t,e,n){const s=Object.assign(Object.assign({},Lp()),{[e]:n});return new ps("auth","Firebase",s).create(e,{appName:t.name})}function vo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Bu.create(t,...e)}function $(t,e,...n){if(!t)throw vo(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xs(e),new Error(e)}function ct(t,e){t||nt(e)}/**
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
 */const Ga=new Map;function st(t){ct(t instanceof Function,"Expected a class definition");let e=Ga.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ga.set(t,e),e)}/**
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
 */function Up(t,e){const n=Nr(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ar(i,e!=null?e:{}))return r;Qe(r,"already-initialized")}return n.initialize({options:e})}function xp(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Mi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fp(){return za()==="http:"||za()==="https:"}function za(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Vp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fp()||Du()||"connection"in navigator)?navigator.onLine:!0}function Bp(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=Nu()||Ou()}get(){return Vp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _o(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $u{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $p={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const jp=new gs(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ys(t,e,n,s,r={}){return ju(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ms(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$u.fetch()(qu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ju(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},$p),e);try{const r=new qp(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vs(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mp(t,l,u);Qe(t,l)}}catch(r){if(r instanceof At)throw r;Qe(t,"network-request-failed")}}async function Or(t,e,n,s,r={}){const i=await ys(t,e,n,s,r);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qu(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?_o(t.config,r):`${t.config.apiScheme}://${r}`}class qp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"network-request-failed")),jp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Je(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Hp(t,e){return ys(t,"POST","/v1/accounts:delete",e)}async function Gp(t,e){return ys(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zp(t,e=!1){const n=me(t),s=await n.getIdToken(e),r=wo(s);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:jn(pi(r.auth_time)),issuedAtTime:jn(pi(r.iat)),expirationTime:jn(pi(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pi(t){return Number(t)*1e3}function wo(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Xs("JWT malformed, contained fewer than 3 sections"),null;try{const i=pf(s);return i?JSON.parse(i):(Xs("Failed to decode base64 JWT payload"),null)}catch(i){return Xs("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Kp(t){const e=wo(t);return $(e,"internal-error"),$(typeof e.exp!="undefined","internal-error"),$(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof At&&Wp(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Wp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Qp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ur(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Jn(t,Gp(n,{idToken:s}));$(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Jp(i.providerUserInfo):[],a=Yp(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hu(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function Xp(t){const e=me(t);await ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yp(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Jp(t){return t.map(e=>{var{providerId:n}=e,s=yo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Zp(t,e){const n=await ju(t,{},async()=>{const s=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=qu(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$u.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken!="undefined","internal-error"),$(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Kp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Zp(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Zn;return s&&($(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function ft(t,e){$(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Mt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=yo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zp(this,e)}reload(){return Xp(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ur(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jn(this,Hp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:O,emailVerified:N,isAnonymous:L,providerData:g,stsTokenManager:b}=n;$(O&&b,e,"internal-error");const I=Zn.fromJSON(this.name,b);$(typeof O=="string",e,"internal-error"),ft(d,e.name),ft(h,e.name),$(typeof N=="boolean",e,"internal-error"),$(typeof L=="boolean",e,"internal-error"),ft(f,e.name),ft(p,e.name),ft(m,e.name),ft(y,e.name),ft(D,e.name),ft(S,e.name);const _=new Mt({uid:O,auth:e,email:h,emailVerified:N,displayName:d,isAnonymous:L,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:I,createdAt:D,lastLoginAt:S});return g&&Array.isArray(g)&&(_.providerData=g.map(A=>Object.assign({},A))),y&&(_._redirectEventId=y),_}static async _fromIdTokenResponse(e,n,s=!1){const r=new Zn;r.updateFromServerResponse(n);const i=new Mt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ur(i),i}}/**
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
 */class Gu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gu.type="NONE";const Ka=Gu;/**
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
 */function Ys(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ys(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ys("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new on(st(Ka),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||st(Ka);const o=Ys(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const d=Mt._fromJSON(e,l);u!==i&&(a=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new on(i,e,s))}}/**
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
 */function Wa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xu(e))return"Blackberry";if(Yu(e))return"Webos";if(Eo(e))return"Safari";if((e.includes("chrome/")||Ku(e))&&!e.includes("edge/"))return"Chrome";if(Qu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zu(t=Ie()){return/firefox\//i.test(t)}function Eo(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ku(t=Ie()){return/crios\//i.test(t)}function Wu(t=Ie()){return/iemobile/i.test(t)}function Qu(t=Ie()){return/android/i.test(t)}function Xu(t=Ie()){return/blackberry/i.test(t)}function Yu(t=Ie()){return/webos/i.test(t)}function Lr(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function em(t=Ie()){var e;return Lr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tm(){return Lu()&&document.documentMode===10}function Ju(t=Ie()){return Lr(t)||Qu(t)||Yu(t)||Xu(t)||/windows phone/i.test(t)||Wu(t)}function nm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Zu(t,e=[]){let n;switch(t){case"Browser":n=Wa(Ie());break;case"Worker":n=`${Wa(Ie())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${In}/${s}`}/**
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
 */class sm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class rm{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qa(this),this.idTokenSubscription=new Qa(this),this.beforeStateQueue=new sm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ur(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?me(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Io(t){return me(t)}class Qa{constructor(e){this.auth=e,this.observer=null,this.addObserver=bf(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class To{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function im(t,e){return ys(t,"POST","/v1/accounts:update",e)}/**
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
 */async function om(t,e){return Or(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
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
 */async function am(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function cm(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
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
 */class es extends To{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new es(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new es(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return om(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return am(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return im(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cm(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function an(t,e){return Or(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
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
 */const um="http://localhost";class qt extends To{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=yo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new qt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,an(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:um,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ms(n)}return e}}/**
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
 */function lm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hm(t){const e=Un(xn(t)).link,n=e?Un(xn(e)).deep_link_id:null,s=Un(xn(t)).deep_link_id;return(s?Un(xn(s)).link:null)||s||n||e||t}class bo{constructor(e){var n,s,r,i,o,a;const c=Un(xn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,d=lm((r=c.mode)!==null&&r!==void 0?r:null);$(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hm(e);try{return new bo(n)}catch{return null}}}/**
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
 */class Tn{constructor(){this.providerId=Tn.PROVIDER_ID}static credential(e,n){return es._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=bo.parseLink(n);return $(s,"argument-error"),es._fromEmailAndCode(e,s.code,s.tenantId)}}Tn.PROVIDER_ID="password";Tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class el{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vs extends el{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pt extends vs{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
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
 */class mt extends vs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return mt.credential(n,s)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class gt extends vs{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class yt extends vs{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yt.credential(n,s)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
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
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Mt._fromIdTokenResponse(e,s,r),o=Xa(s);return new fn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Xa(s);return new fn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Xa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class lr extends At{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,lr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new lr(e,n,s,r)}}function tl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lr._fromErrorAndOperation(t,i,e,s):i})}async function dm(t,e,n=!1){const s=await Jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",s)}/**
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
 */async function fm(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Jn(t,tl(r,i,e,t),n);$(o.idToken,r,"internal-error");const a=wo(o.idToken);$(a,r,"internal-error");const{sub:c}=a;return $(t.uid===c,r,"user-mismatch"),fn._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),o}}/**
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
 */async function nl(t,e,n=!1){const s="signIn",r=await tl(t,s,e),i=await fn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function pm(t,e){return nl(Io(t),e)}function mm(t,e,n){return pm(me(t),Tn.credential(e,n))}function gm(t,e,n,s){return me(t).onAuthStateChanged(e,n,s)}const hr="__sak";/**
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
 */class sl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hr,"1"),this.storage.removeItem(hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ym(){const t=Ie();return Eo(t)||Lr(t)}const vm=1e3,_m=10;class rl extends sl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ym()&&nm(),this.fallbackToPolling=Ju(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);tm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_m):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rl.type="LOCAL";const wm=rl;/**
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
 */class il extends sl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}il.type="SESSION";const ol=il;/**
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
 */function Em(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Pr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Em(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pr.receivers=[];/**
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
 */function So(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Im{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=So("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ze(){return window}function Tm(t){Ze().location.href=t}/**
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
 */function al(){return typeof Ze().WorkerGlobalScope!="undefined"&&typeof Ze().importScripts=="function"}async function bm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Am(){return al()?self:null}/**
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
 */const cl="firebaseLocalStorageDb",km=1,dr="firebaseLocalStorage",ul="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mr(t,e){return t.transaction([dr],e?"readwrite":"readonly").objectStore(dr)}function Cm(){const t=indexedDB.deleteDatabase(cl);return new _s(t).toPromise()}function Ui(){const t=indexedDB.open(cl,km);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(dr,{keyPath:ul})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(dr)?e(s):(s.close(),await Cm(),e(await Ui()))})})}async function Ya(t,e,n){const s=Mr(t,!0).put({[ul]:e,value:n});return new _s(s).toPromise()}async function Rm(t,e){const n=Mr(t,!1).get(e),s=await new _s(n).toPromise();return s===void 0?null:s.value}function Ja(t,e){const n=Mr(t,!0).delete(e);return new _s(n).toPromise()}const Nm=800,Dm=3;class ll{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ui(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Dm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pr._getInstance(Am()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bm(),!this.activeServiceWorker)return;this.sender=new Im(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ui();return await Ya(e,hr,"1"),await Ja(e,hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ya(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Rm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ja(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Mr(r,!1).getAll();return new _s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ll.type="LOCAL";const Om=ll;/**
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
 */function Lm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Pm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Je("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Lm().appendChild(s)})}function Mm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new gs(3e4,6e4);/**
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
 */function Um(t,e){return e?st(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ao extends To{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xm(t){return nl(t.auth,new Ao(t),t.bypassAuthState)}function Fm(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),fm(n,new Ao(t),t.bypassAuthState)}async function Vm(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),dm(n,new Ao(t),t.bypassAuthState)}/**
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
 */class hl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xm;case"linkViaPopup":case"linkViaRedirect":return Vm;case"reauthViaPopup":case"reauthViaRedirect":return Fm;default:Qe(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bm=new gs(2e3,1e4);class nn extends hl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=So();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Bm.get())};e()}}nn.currentPopupAction=null;/**
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
 */const $m="pendingRedirect",Js=new Map;class jm extends hl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Js.get(this.auth._key());if(!e){try{const s=await qm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Js.set(this.auth._key(),e)}return this.bypassAuthState||Js.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qm(t,e){const n=zm(e),s=Gm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Hm(t,e){Js.set(t._key(),e)}function Gm(t){return st(t._redirectPersistence)}function zm(t){return Ys($m,t.config.apiKey,t.name)}async function Km(t,e,n=!1){const s=Io(t),r=Um(s,e),o=await new jm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Wm=10*60*1e3;class Qm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Za(e))}saveEventToCache(e){this.cachedEventUids.add(Za(e)),this.lastProcessedEventTime=Date.now()}}function Za(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dl(t);default:return!1}}/**
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
 */async function Ym(t,e={}){return ys(t,"GET","/v1/projects",e)}/**
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
 */const Jm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zm=/^https?/;async function eg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ym(t);for(const n of e)try{if(tg(n))return}catch{}Qe(t,"unauthorized-domain")}function tg(t){const e=Mi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Zm.test(n))return!1;if(Jm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const ng=new gs(3e4,6e4);function ec(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sg(t){return new Promise((e,n)=>{var s,r,i;function o(){ec(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ec(),n(Je(t,"network-request-failed"))},timeout:ng.get()})}if(!((r=(s=Ze().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const a=Mm("iframefcb");return Ze()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},Pm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Zs=null,e})}let Zs=null;function rg(t){return Zs=Zs||sg(t),Zs}/**
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
 */const ig=new gs(5e3,15e3),og="__/auth/iframe",ag="emulator/auth/iframe",cg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ug=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lg(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_o(e,ag):`https://${t.config.authDomain}/${og}`,s={apiKey:e.apiKey,appName:t.name,v:In},r=ug.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ms(s).slice(1)}`}async function hg(t){const e=await rg(t),n=Ze().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:lg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ze().setTimeout(()=>{i(o)},ig.get());function c(){Ze().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fg=500,pg=600,mg="_blank",gg="http://localhost";class tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yg(t,e,n,s=fg,r=pg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dg),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ie().toLowerCase();n&&(a=Ku(u)?mg:n),zu(u)&&(e=e||gg,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(em(u)&&a!=="_self")return vg(e||"",a),new tc(null);const d=window.open(e||"",a,l);$(d,t,"popup-blocked");try{d.focus()}catch{}return new tc(d)}function vg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const _g="__/auth/handler",wg="emulator/auth/handler";function nc(t,e,n,s,r,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:In,eventId:r};if(e instanceof el){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof vs){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Eg(t)}?${ms(a).slice(1)}`}function Eg({config:t}){return t.emulator?_o(t,wg):`https://${t.authDomain}/${_g}`}/**
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
 */const mi="webStorageSupport";class Ig{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ol,this._completeRedirectFn=Km,this._overrideRedirectResult=Hm}async _openPopup(e,n,s,r){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=nc(e,n,s,Mi(),r);return yg(e,o,So())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Tm(nc(e,n,s,Mi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ct(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await hg(e),s=new Qm(e);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mi,{type:mi},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[mi];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ju()||Eo()||Lr()}}const Tg=Ig;var sc="@firebase/auth",rc="0.20.5";/**
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
 */class bg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ag(t){$t(new Et("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zu(t)},l=new rm(a,c,u);return xp(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),$t(new Et("auth-internal",e=>{const n=Io(e.getProvider("auth").getImmediate());return(s=>new bg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(sc,rc,Sg(t)),Ye(sc,rc,"esm2017")}/**
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
 */function kg(t=go()){const e=Nr(t,"auth");return e.isInitialized()?e.getImmediate():Up(t,{popupRedirectResolver:Tg,persistence:[Om,wm,ol]})}Ag("Browser");var Cg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},C,ko=ko||{},j=Cg||self;function fr(){}function xi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ws(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Rg(t){return Object.prototype.hasOwnProperty.call(t,gi)&&t[gi]||(t[gi]=++Ng)}var gi="closure_uid_"+(1e9*Math.random()>>>0),Ng=0;function Dg(t,e,n){return t.call.apply(t.bind,arguments)}function Og(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=Dg:ke=Og,ke.apply(null,arguments)}function Bs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function kt(){this.s=this.s,this.o=this.o}var Lg=0;kt.prototype.s=!1;kt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Lg!=0)&&Rg(this)};kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},pl=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function Pg(t){e:{var e=Sy;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function ic(t){return Array.prototype.concat.apply([],arguments)}function Co(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function pr(t){return/^[\s\xa0]*$/.test(t)}var oc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function xe(t,e){return t.indexOf(e)!=-1}function yi(t,e){return t<e?-1:t>e?1:0}var Fe;e:{var ac=j.navigator;if(ac){var cc=ac.userAgent;if(cc){Fe=cc;break e}}Fe=""}function Ro(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ml(t){const e={};for(const n in t)e[n]=t[n];return e}var uc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gl(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<uc.length;i++)n=uc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function No(t){return No[" "](t),t}No[" "]=fr;function Mg(t){var e=Fg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Ug=xe(Fe,"Opera"),pn=xe(Fe,"Trident")||xe(Fe,"MSIE"),yl=xe(Fe,"Edge"),Fi=yl||pn,vl=xe(Fe,"Gecko")&&!(xe(Fe.toLowerCase(),"webkit")&&!xe(Fe,"Edge"))&&!(xe(Fe,"Trident")||xe(Fe,"MSIE"))&&!xe(Fe,"Edge"),xg=xe(Fe.toLowerCase(),"webkit")&&!xe(Fe,"Edge");function _l(){var t=j.document;return t?t.documentMode:void 0}var mr;e:{var vi="",_i=function(){var t=Fe;if(vl)return/rv:([^\);]+)(\)|;)/.exec(t);if(yl)return/Edge\/([\d\.]+)/.exec(t);if(pn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xg)return/WebKit\/(\S+)/.exec(t);if(Ug)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_i&&(vi=_i?_i[1]:""),pn){var wi=_l();if(wi!=null&&wi>parseFloat(vi)){mr=String(wi);break e}}mr=vi}var Fg={};function Vg(){return Mg(function(){let t=0;const e=oc(String(mr)).split("."),n=oc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=yi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||yi(r[2].length==0,i[2].length==0)||yi(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Vi;if(j.document&&pn){var lc=_l();Vi=lc||parseInt(mr,10)||void 0}else Vi=void 0;var Bg=Vi,$g=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",fr,e),j.removeEventListener("test",fr,e)}catch{}return t}();function Me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};function ts(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vl){e:{try{No(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ts.Z.h.call(this)}}Oe(ts,Me);var jg={2:"touch",3:"pen",4:"mouse"};ts.prototype.h=function(){ts.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Es="closure_listenable_"+(1e6*Math.random()|0),qg=0;function Hg(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++qg,this.ca=this.fa=!1}function Ur(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function xr(t){this.src=t,this.g={},this.h=0}xr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=$i(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Hg(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Bi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=fl(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ur(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function $i(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Do="closure_lm_"+(1e6*Math.random()|0),Ei={};function wl(t,e,n,s,r){if(s&&s.once)return Il(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)wl(t,e[i],n,s,r);return null}return n=Po(n),t&&t[Es]?t.N(e,n,ws(s)?!!s.capture:!!s,r):El(t,e,n,!1,s,r)}function El(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ws(r)?!!r.capture:!!r,a=Lo(t);if(a||(t[Do]=a=new xr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Gg(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)$g||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(bl(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Gg(){function t(n){return e.call(t.src,t.listener,n)}var e=zg;return t}function Il(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Il(t,e[i],n,s,r);return null}return n=Po(n),t&&t[Es]?t.O(e,n,ws(s)?!!s.capture:!!s,r):El(t,e,n,!0,s,r)}function Tl(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tl(t,e[i],n,s,r);else s=ws(s)?!!s.capture:!!s,n=Po(n),t&&t[Es]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=$i(i,n,s,r),-1<n&&(Ur(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$i(e,n,s,r)),(n=-1<t?e[t]:null)&&Oo(n))}function Oo(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Es])Bi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(bl(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Lo(e))?(Bi(n,t),n.h==0&&(n.src=null,e[Do]=null)):Ur(t)}}}function bl(t){return t in Ei?Ei[t]:Ei[t]="on"+t}function zg(t,e){if(t.ca)t=!0;else{e=new ts(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Oo(t),t=n.call(s,e)}return t}function Lo(t){return t=t[Do],t instanceof xr?t:null}var Ii="__closure_events_fn_"+(1e9*Math.random()>>>0);function Po(t){return typeof t=="function"?t:(t[Ii]||(t[Ii]=function(e){return t.handleEvent(e)}),t[Ii])}function Te(){kt.call(this),this.i=new xr(this),this.P=this,this.I=null}Oe(Te,kt);Te.prototype[Es]=!0;Te.prototype.removeEventListener=function(t,e,n,s){Tl(this,t,e,n,s)};function Ce(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Me(e,t);else if(e instanceof Me)e.target=e.target||t;else{var r=e;e=new Me(s,t),gl(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=$s(o,s,!0,e)&&r}if(o=e.g=t,r=$s(o,s,!0,e)&&r,r=$s(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=$s(o,s,!1,e)&&r}Te.prototype.M=function(){if(Te.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ur(n[s]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function $s(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Bi(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Mo=j.JSON.stringify;function Kg(){var t=Al;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Wg{constructor(){this.h=this.g=null}add(e,n){const s=Sl.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Sl=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Qg,t=>t.reset());class Qg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Xg(t){j.setTimeout(()=>{throw t},0)}function Uo(t,e){ji||Yg(),qi||(ji(),qi=!0),Al.add(t,e)}var ji;function Yg(){var t=j.Promise.resolve(void 0);ji=function(){t.then(Jg)}}var qi=!1,Al=new Wg;function Jg(){for(var t;t=Kg();){try{t.h.call(t.g)}catch(n){Xg(n)}var e=Sl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qi=!1}function Fr(t,e){Te.call(this),this.h=t||1,this.g=e||j,this.j=ke(this.kb,this),this.l=Date.now()}Oe(Fr,Te);C=Fr.prototype;C.da=!1;C.S=null;C.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ce(this,"tick"),this.da&&(xo(this),this.start()))}};C.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xo(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}C.M=function(){Fr.Z.M.call(this),xo(this),delete this.g};function Fo(t,e,n){if(typeof t=="function")n&&(t=ke(t,n));else if(t&&typeof t.handleEvent=="function")t=ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function kl(t){t.g=Fo(()=>{t.g=null,t.i&&(t.i=!1,kl(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Zg extends kt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:kl(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(t){kt.call(this),this.h=t,this.g={}}Oe(ns,kt);var hc=[];function Cl(t,e,n,s){Array.isArray(n)||(n&&(hc[0]=n.toString()),n=hc);for(var r=0;r<n.length;r++){var i=wl(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Rl(t){Ro(t.g,function(e,n){this.g.hasOwnProperty(n)&&Oo(e)},t),t.g={}}ns.prototype.M=function(){ns.Z.M.call(this),Rl(this)};ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vr(){this.g=!0}Vr.prototype.Aa=function(){this.g=!1};function ey(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var d=l.split("_");o=2<=d.length&&d[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function ty(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function sn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sy(t,n)+(s?" "+s:"")})}function ny(t,e){t.info(function(){return"TIMEOUT: "+e})}Vr.prototype.info=function(){};function sy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Mo(n)}catch{return e}}var Xt={},dc=null;function Br(){return dc=dc||new Te}Xt.Ma="serverreachability";function Nl(t){Me.call(this,Xt.Ma,t)}Oe(Nl,Me);function ss(t){const e=Br();Ce(e,new Nl(e))}Xt.STAT_EVENT="statevent";function Dl(t,e){Me.call(this,Xt.STAT_EVENT,t),this.stat=e}Oe(Dl,Me);function Ve(t){const e=Br();Ce(e,new Dl(e,t))}Xt.Na="timingevent";function Ol(t,e){Me.call(this,Xt.Na,t),this.size=e}Oe(Ol,Me);function Is(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var $r={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ll={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vo(){}Vo.prototype.h=null;function fc(t){return t.h||(t.h=t.i())}function Pl(){}var Ts={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Bo(){Me.call(this,"d")}Oe(Bo,Me);function $o(){Me.call(this,"c")}Oe($o,Me);var Hi;function jr(){}Oe(jr,Vo);jr.prototype.g=function(){return new XMLHttpRequest};jr.prototype.i=function(){return{}};Hi=new jr;function bs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new ns(this),this.P=ry,t=Fi?125:void 0,this.W=new Fr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ml}function Ml(){this.i=null,this.g="",this.h=!1}var ry=45e3,Gi={},gr={};C=bs.prototype;C.setTimeout=function(t){this.P=t};function zi(t,e,n){t.K=1,t.v=Hr(ut(e)),t.s=n,t.U=!0,Ul(t,null)}function Ul(t,e){t.F=Date.now(),Ss(t),t.A=ut(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),ql(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Ml,t.g=uh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Zg(ke(t.Ia,t,t.g),t.O)),Cl(t.V,t.g,"readystatechange",t.gb),e=t.H?ml(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ss(),ey(t.j,t.u,t.A,t.m,t.X,t.s)}C.gb=function(t){t=t.target;const e=this.L;e&&rt(t)==3?e.l():this.Ia(t)};C.Ia=function(t){try{if(t==this.g)e:{const l=rt(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(l!=3||Fi||this.g&&(this.h.h||this.g.ga()||yc(this.g)))){this.I||l!=4||e==7||(e==8||0>=d?ss(3):ss(2)),qr(this);var n=this.g.ba();this.N=n;t:if(xl(this)){var s=yc(this.g);t="";var r=s.length,i=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ot(this),qn(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,ty(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pr(a)){var u=a;break t}}u=null}if(n=u)sn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ki(this,n);else{this.i=!1,this.o=3,Ve(12),Ot(this),qn(this);break e}}this.U?(Fl(this,l,o),Fi&&this.i&&l==3&&(Cl(this.V,this.W,"tick",this.fb),this.W.start())):(sn(this.j,this.m,o,null),Ki(this,o)),l==4&&Ot(this),this.i&&!this.I&&(l==4?ih(this.l,this):(this.i=!1,Ss(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),Ot(this),qn(this)}}}catch{}finally{}};function xl(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Fl(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=iy(t,n),r==gr){e==4&&(t.o=4,Ve(14),s=!1),sn(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Gi){t.o=4,Ve(15),sn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else sn(t.j,t.m,r,null),Ki(t,r);xl(t)&&r!=gr&&r!=Gi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ve(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xo(e),e.L=!0,Ve(11))):(sn(t.j,t.m,n,"[Invalid Chunked Response]"),Ot(t),qn(t))}C.fb=function(){if(this.g){var t=rt(this.g),e=this.g.ga();this.C<e.length&&(qr(this),Fl(this,t,e),this.i&&t!=4&&Ss(this))}};function iy(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?gr:(n=Number(e.substring(n,s)),isNaN(n)?Gi:(s+=1,s+n>e.length?gr:(e=e.substr(s,n),t.C=s+n,e)))}C.cancel=function(){this.I=!0,Ot(this)};function Ss(t){t.Y=Date.now()+t.P,Vl(t,t.P)}function Vl(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Is(ke(t.eb,t),e)}function qr(t){t.B&&(j.clearTimeout(t.B),t.B=null)}C.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ny(this.j,this.A),this.K!=2&&(ss(),Ve(17)),Ot(this),this.o=2,qn(this)):Vl(this,this.Y-t)};function qn(t){t.l.G==0||t.I||ih(t.l,t)}function Ot(t){qr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,xo(t.W),Rl(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ki(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Wi(n.i,t))){if(n.I=t.N,!t.J&&Wi(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)wr(n),Kr(n);else break e;Qo(n),Ve(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Is(ke(n.ab,n),6e3));if(1>=zl(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Lt(n,11)}else if((t.J||n.g==t)&&wr(n),!pr(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const d=u[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=s.i;!i.g&&(xe(p,"spdy")||xe(p,"quic")||xe(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Ho(i,i.h),i.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.sa=m,ce(s.F,s.D,m))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=ch(s,s.H?s.la:null,s.W),o.J){Kl(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(qr(a),Ss(a)),s.g=o}else sh(s);0<n.l.length&&Wr(n)}else u[0]!="stop"&&u[0]!="close"||Lt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Lt(n,7):Wo(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}ss(4)}catch{}}function oy(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(xi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function jo(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xi(t)||typeof t=="string")pl(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(xi(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=oy(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function bn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof bn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}C=bn.prototype;C.R=function(){qo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};C.T=function(){return qo(this),this.g.concat()};function qo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Ht(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Ht(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}C.get=function(t,e){return Ht(this.h,t)?this.h[t]:e};C.set=function(t,e){Ht(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};C.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Bl=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ay(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Gt(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Gt){this.g=e!==void 0?e:t.g,yr(this,t.j),this.s=t.s,vr(this,t.i),_r(this,t.m),this.l=t.l,e=t.h;var n=new rs;n.i=e.i,e.g&&(n.g=new bn(e.g),n.h=e.h),pc(this,n),this.o=t.o}else t&&(n=String(t).match(Bl))?(this.g=!!e,yr(this,n[1]||"",!0),this.s=Hn(n[2]||""),vr(this,n[3]||"",!0),_r(this,n[4]),this.l=Hn(n[5]||"",!0),pc(this,n[6]||"",!0),this.o=Hn(n[7]||"")):(this.g=!!e,this.h=new rs(null,this.g))}Gt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fn(e,mc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fn(e,mc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Fn(n,n.charAt(0)=="/"?dy:hy,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fn(n,py)),t.join("")};function ut(t){return new Gt(t)}function yr(t,e,n){t.j=n?Hn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vr(t,e,n){t.i=n?Hn(e,!0):e}function _r(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pc(t,e,n){e instanceof rs?(t.h=e,my(t.h,t.g)):(n||(e=Fn(e,fy)),t.h=new rs(e,t.g))}function ce(t,e,n){t.h.set(e,n)}function Hr(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cy(t){return t instanceof Gt?ut(t):new Gt(t,void 0)}function uy(t,e,n,s){var r=new Gt(null,void 0);return t&&yr(r,t),e&&vr(r,e),n&&_r(r,n),s&&(r.l=s),r}function Hn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ly),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ly(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mc=/[#\/\?@]/g,hy=/[#\?:]/g,dy=/[#\?]/g,fy=/[#\?@]/g,py=/#/g;function rs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ct(t){t.g||(t.g=new bn,t.h=0,t.i&&ay(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=rs.prototype;C.add=function(t,e){Ct(this),this.i=null,t=Sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $l(t,e){Ct(t),e=Sn(t,e),Ht(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ht(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&qo(t)))}function jl(t,e){return Ct(t),e=Sn(t,e),Ht(t.g.h,e)}C.forEach=function(t,e){Ct(this),this.g.forEach(function(n,s){pl(n,function(r){t.call(e,r,s,this)},this)},this)};C.T=function(){Ct(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};C.R=function(t){Ct(this);var e=[];if(typeof t=="string")jl(this,t)&&(e=ic(e,this.g.get(Sn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ic(e,t[n])}return e};C.set=function(t,e){return Ct(this),this.i=null,t=Sn(this,t),jl(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ql(t,e,n){$l(t,e),0<n.length&&(t.i=null,t.g.set(Sn(t,e),Co(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function my(t,e){e&&!t.j&&(Ct(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&($l(this,s),ql(this,r,n))},t)),t.j=e}var gy=class{constructor(t,e){this.h=t,this.g=e}};function Hl(t){this.l=t||yy,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yy=10;function Gl(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zl(t){return t.h?1:t.g?t.g.size:0}function Wi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ho(t,e){t.g?t.g.add(e):t.h=e}function Kl(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Hl.prototype.cancel=function(){if(this.i=Wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wl(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Co(t.i)}function Go(){}Go.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};Go.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function vy(){this.g=new Go}function _y(t,e,n){const s=n||"";try{jo(t,function(r,i){let o=r;ws(r)&&(o=Mo(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function wy(t,e){const n=new Vr;if(j.Image){const s=new Image;s.onload=Bs(js,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Bs(js,n,s,"TestLoadImage: error",!1,e),s.onabort=Bs(js,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Bs(js,n,s,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function js(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function As(t){this.l=t.$b||null,this.j=t.ib||!1}Oe(As,Vo);As.prototype.g=function(){return new Gr(this.l,this.j)};As.prototype.i=function(t){return function(){return t}}({});function Gr(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(Gr,Te);var zo=0;C=Gr.prototype;C.open=function(t,e){if(this.readyState!=zo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,is(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=zo};C.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ql(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ql(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}C.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ks(this):is(this),this.readyState==3&&Ql(this)}};C.Ua=function(t){this.g&&(this.response=this.responseText=t,ks(this))};C.Ta=function(t){this.g&&(this.response=t,ks(this))};C.ha=function(){this.g&&ks(this)};function ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,is(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function is(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ey=j.JSON.parse;function ge(t){Te.call(this),this.headers=new bn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xl,this.K=this.L=!1}Oe(ge,Te);var Xl="",Iy=/^https?$/i,Ty=["POST","PUT"];C=ge.prototype;C.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Hi.g(),this.C=this.u?fc(this.u):fc(Hi),this.g.onreadystatechange=ke(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){gc(this,i);return}t=n||"";const r=new bn(this.headers);s&&jo(s,function(i,o){r.set(o,i)}),s=Pg(r.T()),n=j.FormData&&t instanceof j.FormData,!(0<=fl(Ty,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Zl(this),0<this.B&&((this.K=by(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.pa,this)):this.A=Fo(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){gc(this,i)}};function by(t){return pn&&Vg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Sy(t){return t.toLowerCase()=="content-type"}C.pa=function(){typeof ko!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))};function gc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Yl(t),zr(t)}function Yl(t){t.D||(t.D=!0,Ce(t,"complete"),Ce(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ce(this,"complete"),Ce(this,"abort"),zr(this))};C.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zr(this,!0)),ge.Z.M.call(this)};C.Fa=function(){this.s||(this.F||this.v||this.l?Jl(this):this.cb())};C.cb=function(){Jl(this)};function Jl(t){if(t.h&&typeof ko!="undefined"&&(!t.C[1]||rt(t)!=4||t.ba()!=2)){if(t.v&&rt(t)==4)Fo(t.Fa,0,t);else if(Ce(t,"readystatechange"),rt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Bl)[1]||null;if(!r&&j.self&&j.self.location){var i=j.self.location.protocol;r=i.substr(0,i.length-1)}s=!Iy.test(r?r.toLowerCase():"")}n=s}if(n)Ce(t,"complete"),Ce(t,"success");else{t.m=6;try{var o=2<rt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Yl(t)}}finally{zr(t)}}}}function zr(t,e){if(t.g){Zl(t);const n=t.g,s=t.C[0]?fr:null;t.g=null,t.C=null,e||Ce(t,"ready");try{n.onreadystatechange=s}catch{}}}function Zl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function rt(t){return t.g?t.g.readyState:0}C.ba=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}};C.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ey(e)}};function yc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xl:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}C.Da=function(){return this.m};C.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ay(t){let e="";return Ro(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ko(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ay(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function On(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function eh(t){this.za=0,this.l=[],this.h=new Vr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=On("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=On("baseRetryDelayMs",5e3,t),this.$a=On("retryDelaySeedMs",1e4,t),this.Ya=On("forwardChannelMaxRetries",2,t),this.ra=On("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Hl(t&&t.concurrentRequestLimit),this.Ca=new vy,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}C=eh.prototype;C.ma=8;C.G=1;function Wo(t){if(th(t),t.G==3){var e=t.V++,n=ut(t.F);ce(n,"SID",t.J),ce(n,"RID",e),ce(n,"TYPE","terminate"),Cs(t,n),e=new bs(t,t.h,e,void 0),e.K=2,e.v=Hr(ut(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=uh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ss(e)}ah(t)}C.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Kr(t){t.g&&(Xo(t),t.g.cancel(),t.g=null)}function th(t){Kr(t),t.u&&(j.clearTimeout(t.u),t.u=null),wr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Ti(t,e){t.l.push(new gy(t.Za++,e)),t.G==3&&Wr(t)}function Wr(t){Gl(t.i)||t.m||(t.m=!0,Uo(t.Ha,t),t.C=0)}function ky(t,e){return zl(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Is(ke(t.Ha,t,e),oh(t,t.C)),t.C++,!0)}C.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new bs(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=ml(i),gl(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=nh(this,r,e),n=ut(this.F),ce(n,"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),Cs(this,n),this.o&&i&&Ko(n,this.o,i),Ho(this.i,r),this.Ra&&ce(n,"TYPE","init"),this.ja?(ce(n,"$req",e),ce(n,"SID","null"),r.$=!0,zi(r,n,null)):zi(r,n,e),this.G=2}}else this.G==3&&(t?vc(this,t):this.l.length==0||Gl(this.i)||vc(this))};function vc(t,e){var n;e?n=e.m:n=t.V++;const s=ut(t.F);ce(s,"SID",t.J),ce(s,"RID",n),ce(s,"AID",t.U),Cs(t,s),t.o&&t.s&&Ko(s,t.o,t.s),n=new bs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=nh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ho(t.i,n),zi(n,s,e)}function Cs(t,e){t.j&&jo({},function(n,s){ce(e,s,n)})}function nh(t,e,n){n=Math.min(t.l.length,n);var s=t.j?ke(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{_y(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function sh(t){t.g||t.u||(t.Y=1,Uo(t.Ga,t),t.A=0)}function Qo(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Is(ke(t.Ga,t),oh(t,t.A)),t.A++,!0)}C.Ga=function(){if(this.u=null,rh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Is(ke(this.bb,this),t)}};C.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ve(10),Kr(this),rh(this))};function Xo(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function rh(t){t.g=new bs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=ut(t.oa);ce(e,"RID","rpc"),ce(e,"SID",t.J),ce(e,"CI",t.N?"0":"1"),ce(e,"AID",t.U),Cs(t,e),ce(e,"TYPE","xmlhttp"),t.o&&t.s&&Ko(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Hr(ut(e)),n.s=null,n.U=!0,Ul(n,t)}C.ab=function(){this.v!=null&&(this.v=null,Kr(this),Qo(this),Ve(19))};function wr(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function ih(t,e){var n=null;if(t.g==e){wr(t),Xo(t),t.g=null;var s=2}else if(Wi(t.i,e))n=e.D,Kl(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Br(),Ce(s,new Ol(s,n)),Wr(t)}else sh(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&ky(t,e)||s==2&&Qo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Lt(t,5);break;case 4:Lt(t,10);break;case 3:Lt(t,6);break;default:Lt(t,2)}}}function oh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Lt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=ke(t.jb,t);n||(n=new Gt("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||yr(n,"https"),Hr(n)),wy(n.toString(),s)}else Ve(2);t.G=0,t.j&&t.j.va(e),ah(t),th(t)}C.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ve(2)):(this.h.info("Failed to ping google.com"),Ve(1))};function ah(t){t.G=0,t.I=-1,t.j&&((Wl(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Co(t.l),t.l.length=0),t.j.ua())}function ch(t,e,n){let s=cy(n);if(s.i!="")e&&vr(s,e+"."+s.i),_r(s,s.m);else{const r=j.location;s=uy(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Ro(t.aa,function(r,i){ce(s,i,r)}),e=t.D,n=t.sa,e&&n&&ce(s,e,n),ce(s,"VER",t.ma),Cs(t,s),s}function uh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ge(new As({ib:!0})):new ge(t.qa),e.L=t.H,e}function lh(){}C=lh.prototype;C.xa=function(){};C.wa=function(){};C.va=function(){};C.ua=function(){};C.Oa=function(){};function Er(){if(pn&&!(10<=Number(Bg)))throw Error("Environmental error: no available transport.")}Er.prototype.g=function(t,e){return new ze(t,e)};function ze(t,e){Te.call(this),this.g=new eh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!pr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new An(this)}Oe(ze,Te);ze.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Uo(ke(t.hb,t,e))),Ve(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ch(t,null,t.W),Wr(t)};ze.prototype.close=function(){Wo(this.g)};ze.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ti(this.g,e)}else this.v?(e={},e.__data__=Mo(t),Ti(this.g,e)):Ti(this.g,t)};ze.prototype.M=function(){this.g.j=null,delete this.j,Wo(this.g),delete this.g,ze.Z.M.call(this)};function hh(t){Bo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(hh,Bo);function dh(){$o.call(this),this.status=1}Oe(dh,$o);function An(t){this.g=t}Oe(An,lh);An.prototype.xa=function(){Ce(this.g,"a")};An.prototype.wa=function(t){Ce(this.g,new hh(t))};An.prototype.va=function(t){Ce(this.g,new dh)};An.prototype.ua=function(){Ce(this.g,"b")};Er.prototype.createWebChannel=Er.prototype.g;ze.prototype.send=ze.prototype.u;ze.prototype.open=ze.prototype.m;ze.prototype.close=ze.prototype.close;$r.NO_ERROR=0;$r.TIMEOUT=8;$r.HTTP_ERROR=6;Ll.COMPLETE="complete";Pl.EventType=Ts;Ts.OPEN="a";Ts.CLOSE="b";Ts.ERROR="c";Ts.MESSAGE="d";Te.prototype.listen=Te.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.La;ge.prototype.getLastErrorCode=ge.prototype.Da;ge.prototype.getStatus=ge.prototype.ba;ge.prototype.getResponseJson=ge.prototype.Qa;ge.prototype.getResponseText=ge.prototype.ga;ge.prototype.send=ge.prototype.ea;var Cy=function(){return new Er},Ry=function(){return Br()},bi=$r,Ny=Ll,Dy=Xt,_c={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Oy=As,qs=Pl,Ly=ge;const wc="@firebase/firestore";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let kn="9.9.0";/**
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
 */const zt=new fo("@firebase/firestore");function Ec(){return zt.logLevel}function M(t,...e){if(zt.logLevel<=ee.DEBUG){const n=e.map(Yo);zt.debug(`Firestore (${kn}): ${t}`,...n)}}function It(t,...e){if(zt.logLevel<=ee.ERROR){const n=e.map(Yo);zt.error(`Firestore (${kn}): ${t}`,...n)}}function Ic(t,...e){if(zt.logLevel<=ee.WARN){const n=e.map(Yo);zt.warn(`Firestore (${kn}): ${t}`,...n)}}function Yo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${kn}) INTERNAL ASSERTION FAILED: `+t;throw It(e),new Error(e)}function re(t,e){t||H()}function G(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ut{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Py{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class My{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class Uy{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ut,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ut)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string"),new Py(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new je(e)}}class xy{constructor(e,n,s){this.type="FirstParty",this.user=je.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Fy{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new xy(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class By{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.p=n.token,new Vy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $y(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class fh{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=$y(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function te(t,e){return t<e?-1:t>e?1:0}function mn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ye(0,0))}static max(){return new Q(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class os{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return os.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof os?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends os{construct(e,n,s){return new ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new R(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const jy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends os{construct(e,n,s){return new Pe(e,n,s)}static isValidIdentifier(e){return jy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new R(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new R(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new R(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ie.fromString(e))}static fromName(e){return new U(ie.fromString(e).popFirst(5))}static empty(){return new U(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ie(e.slice()))}}function qy(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new ye(n+1,0):new ye(n,s));return new Tt(r,U.empty(),e)}function Hy(t){return new Tt(t.readTime,t.key,-1)}class Tt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Tt(Q.min(),U.empty(),-1)}static max(){return new Tt(Q.max(),U.empty(),-1)}}function Gy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const zy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ky{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==zy)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Tc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ph(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Jo.ot=-1;class _e{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hs(this.root,e,this.comparator,!0)}}class Hs{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Se.RED,this.left=r!=null?r:Se.EMPTY,this.right=i!=null?i:Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Se(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bc(this.data.getIterator())}getIteratorFrom(e){return new bc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class bc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ke{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Ke([])}unionWith(e){let n=new ve(Pe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ke(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Re(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Wy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(t){if(re(!!t),typeof t=="string"){let e=0;const n=Wy.exec(t);if(re(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gn(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
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
 */function mh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gh(t){const e=t.mapValue.fields.__previous_value__;return mh(e)?gh(e):e}function as(t){const e=bt(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */class Qy{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class yn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Qr(t){return t==null}function Ir(t){return t===0&&1/t==-1/0}function Xy(t){return typeof t=="number"&&Number.isInteger(t)&&!Ir(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Gs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mh(t)?4:Yy(t)?9007199254740991:10:H()}function tt(t,e){if(t===e)return!0;const n=Kt(t);if(n!==Kt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return as(t).isEqual(as(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=bt(s.timestampValue),o=bt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return gn(s.bytesValue).isEqual(gn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return fe(s.geoPointValue.latitude)===fe(r.geoPointValue.latitude)&&fe(s.geoPointValue.longitude)===fe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return fe(s.integerValue)===fe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=fe(s.doubleValue),o=fe(r.doubleValue);return i===o?Ir(i)===Ir(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return mn(t.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Tc(i)!==Tc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!tt(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function cs(t,e){return(t.values||[]).find(n=>tt(n,e))!==void 0}function vn(t,e){if(t===e)return 0;const n=Kt(t),s=Kt(e);if(n!==s)return te(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=fe(r.integerValue||r.doubleValue),a=fe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Sc(t.timestampValue,e.timestampValue);case 4:return Sc(as(t),as(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(r,i){const o=gn(r),a=gn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=te(o[c],a[c]);if(u!==0)return u}return te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=te(fe(r.latitude),fe(i.latitude));return o!==0?o:te(fe(r.longitude),fe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=vn(o[c],a[c]);if(u)return u}return te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Gs.mapValue&&i===Gs.mapValue)return 0;if(r===Gs.mapValue)return 1;if(i===Gs.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const d=te(a[l],u[l]);if(d!==0)return d;const h=vn(o[a[l]],c[u[l]]);if(h!==0)return h}return te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function Sc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=bt(t),s=bt(e),r=te(n.seconds,s.seconds);return r!==0?r:te(n.nanos,s.nanos)}function cn(t){return Qi(t)}function Qi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=bt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Qi(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Qi(s.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function Ac(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xi(t){return!!t&&"integerValue"in t}function Zo(t){return!!t&&"arrayValue"in t}function kc(t){return!!t&&"nullValue"in t}function Cc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function er(t){return!!t&&"mapValue"in t}function Gn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Gn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yy(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!er(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gn(n)}setAll(e){let n=Pe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Gn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());er(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];er(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Yt(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(Gn(this.value))}}function yh(t){const e=[];return Yt(t.fields,(n,s)=>{const r=new Pe([n]);if(er(s)){const i=yh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ke(e)}/**
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
 */class Ae{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ae(e,0,Q.min(),Q.min(),qe.empty(),0)}static newFoundDocument(e,n,s){return new Ae(e,1,n,Q.min(),s,0)}static newNoDocument(e,n){return new Ae(e,2,n,Q.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new Ae(e,3,n,Q.min(),qe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jy{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Rc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Jy(t,e,n,s,r,i,o)}function ea(t){const e=G(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+cn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Qr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>cn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>cn(s)).join(",")),e.ut=n}return e.ut}function Zy(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${cn(s.value)}`;var s}).join(", ")}]`),Qr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>cn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>cn(n)).join(",")),`Target(${e})`}function ta(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!av(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!tt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dc(t.startAt,e.startAt)&&Dc(t.endAt,e.endAt)}function Yi(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Be extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new ev(e,n,s):n==="array-contains"?new sv(e,s):n==="in"?new rv(e,s):n==="not-in"?new iv(e,s):n==="array-contains-any"?new ov(e,s):new Be(e,n,s)}static ct(e,n,s){return n==="in"?new tv(e,s):new nv(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(vn(n,this.value)):n!==null&&Kt(this.value)===Kt(n)&&this.at(vn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ev extends Be{constructor(e,n,s){super(e,n,s),this.key=U.fromName(s.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.at(n)}}class tv extends Be{constructor(e,n){super(e,"in",n),this.keys=vh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nv extends Be{constructor(e,n){super(e,"not-in",n),this.keys=vh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>U.fromName(s.referenceValue))}class sv extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zo(n)&&cs(n.arrayValue,this.value)}}class rv extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cs(this.value.arrayValue,n)}}class iv extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cs(this.value.arrayValue,n)}}class ov extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>cs(this.value.arrayValue,s))}}class Tr{constructor(e,n){this.position=e,this.inclusive=n}}class un{constructor(e,n="asc"){this.field=e,this.dir=n}}function av(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Nc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=U.comparator(U.fromName(o.referenceValue),n.key):s=vn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Dc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Cn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function cv(t,e,n,s,r,i,o,a){return new Cn(t,e,n,s,r,i,o,a)}function na(t){return new Cn(t)}function uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sa(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ra(t){for(const e of t.filters)if(e.ht())return e.field;return null}function _h(t){return t.collectionGroup!==null}function us(t){const e=G(t);if(e.lt===null){e.lt=[];const n=ra(e),s=sa(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new un(n)),e.lt.push(new un(Pe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new un(Pe.keyField(),i))}}}return e.lt}function Wt(t){const e=G(t);if(!e.ft)if(e.limitType==="F")e.ft=Rc(e.path,e.collectionGroup,us(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of us(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new un(i.field,o))}const s=e.endAt?new Tr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Tr(e.startAt.position,e.startAt.inclusive):null;e.ft=Rc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function lv(t,e,n){return new Cn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xr(t,e){return ta(Wt(t),Wt(e))&&t.limitType===e.limitType}function wh(t){return`${ea(Wt(t))}|lt:${t.limitType}`}function Ji(t){return`Query(target=${Zy(Wt(t))}; limitType=${t.limitType})`}function ia(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):U.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Nc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,us(n),s)||n.endAt&&!function(r,i,o){const a=Nc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,us(n),s))}(t,e)}function hv(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Eh(t){return(e,n)=>{let s=!1;for(const r of us(t)){const i=dv(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function dv(t,e,n){const s=t.field.isKeyField()?U.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?vn(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
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
 */function Ih(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ir(e)?"-0":e}}function Th(t){return{integerValue:""+t}}function fv(t,e){return Xy(e)?Th(e):Ih(t,e)}/**
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
 */class Yr{constructor(){this._=void 0}}function pv(t,e,n){return t instanceof br?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ls?Sh(t,e):t instanceof hs?Ah(t,e):function(s,r){const i=bh(s,r),o=Oc(i)+Oc(s._t);return Xi(i)&&Xi(s._t)?Th(o):Ih(s.wt,o)}(t,e)}function mv(t,e,n){return t instanceof ls?Sh(t,e):t instanceof hs?Ah(t,e):n}function bh(t,e){return t instanceof Sr?Xi(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class br extends Yr{}class ls extends Yr{constructor(e){super(),this.elements=e}}function Sh(t,e){const n=kh(e);for(const s of t.elements)n.some(r=>tt(r,s))||n.push(s);return{arrayValue:{values:n}}}class hs extends Yr{constructor(e){super(),this.elements=e}}function Ah(t,e){let n=kh(e);for(const s of t.elements)n=n.filter(r=>!tt(r,s));return{arrayValue:{values:n}}}class Sr extends Yr{constructor(e,n){super(),this.wt=e,this._t=n}}function Oc(t){return fe(t.integerValue||t.doubleValue)}function kh(t){return Zo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gv(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ls&&s instanceof ls||n instanceof hs&&s instanceof hs?mn(n.elements,s.elements,tt):n instanceof Sr&&s instanceof Sr?tt(n._t,s._t):n instanceof br&&s instanceof br}(t.transform,e.transform)}class yv{constructor(e,n){this.version=e,this.transformResults=n}}class et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jr{}function Ch(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nh(t.key,et.none()):new Ds(t.key,t.data,et.none());{const n=t.data,s=qe.empty();let r=new ve(Pe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Rt(t.key,s,new Ke(r.toArray()),et.none())}}function vv(t,e,n){t instanceof Ds?function(s,r,i){const o=s.value.clone(),a=Pc(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Rt?function(s,r,i){if(!tr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Pc(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Rh(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function zn(t,e,n,s){return t instanceof Ds?function(r,i,o,a){if(!tr(r.precondition,i))return o;const c=r.value.clone(),u=Mc(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Rt?function(r,i,o,a){if(!tr(r.precondition,i))return o;const c=Mc(r.fieldTransforms,a,i),u=i.data;return u.setAll(Rh(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return tr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function _v(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=bh(s.transform,r||null);i!=null&&(n===null&&(n=qe.empty()),n.set(s.field,i))}return n||null}function Lc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mn(n,s,(r,i)=>gv(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ds extends Jr{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Rt extends Jr{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Pc(t,e,n){const s=new Map;re(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,mv(o,a,n[r]))}return s}function Mc(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,pv(i,o,e))}return s}class Nh extends Jr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wv extends Jr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ev{constructor(e){this.count=e}}/**
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
 */var de,Z;function Iv(t){switch(t){default:return H();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Dh(t){if(t===void 0)return It("GRPC error has no .code"),E.UNKNOWN;switch(t){case de.OK:return E.OK;case de.CANCELLED:return E.CANCELLED;case de.UNKNOWN:return E.UNKNOWN;case de.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case de.INTERNAL:return E.INTERNAL;case de.UNAVAILABLE:return E.UNAVAILABLE;case de.UNAUTHENTICATED:return E.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case de.NOT_FOUND:return E.NOT_FOUND;case de.ALREADY_EXISTS:return E.ALREADY_EXISTS;case de.PERMISSION_DENIED:return E.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case de.ABORTED:return E.ABORTED;case de.OUT_OF_RANGE:return E.OUT_OF_RANGE;case de.UNIMPLEMENTED:return E.UNIMPLEMENTED;case de.DATA_LOSS:return E.DATA_LOSS;default:return H()}}(Z=de||(de={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Rn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Yt(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ph(this.inner)}size(){return this.innerSize}}/**
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
 */const Tv=new _e(U.comparator);function lt(){return Tv}const Oh=new _e(U.comparator);function Vn(...t){let e=Oh;for(const n of t)e=e.insert(n.key,n);return e}function Lh(t){let e=Oh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Pt(){return Kn()}function Ph(){return Kn()}function Kn(){return new Rn(t=>t.toString(),(t,e)=>t.isEqual(e))}const bv=new _e(U.comparator),Sv=new ve(U.comparator);function J(...t){let e=Sv;for(const n of t)e=e.add(n);return e}const Av=new ve(te);function Mh(){return Av}/**
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
 */class Zr{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,n)),new Zr(Q.min(),s,Mh(),lt(),J())}}class Os{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Os(Re.EMPTY_BYTE_STRING,n,J(),J(),J())}}/**
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
 */class nr{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class Uh{constructor(e,n){this.targetId=e,this.It=n}}class xh{constructor(e,n,s=Re.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Uc{constructor(){this.Tt=0,this.Et=Fc(),this.At=Re.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=J(),n=J(),s=J();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:H()}}),new Os(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=Fc()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class kv{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=lt(),this.Bt=xc(),this.Lt=new ve(te)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(Yi(i))if(s===0){const o=new U(i.path);this.Kt(n,o,Ae.newNoDocument(o,Q.min()))}else re(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Yi(a.target)){const c=new U(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Ae.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=J();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new Zr(e,n,this.Lt,this.$t,s);return this.$t=lt(),this.Bt=xc(),this.Lt=new ve(te),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Uc,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new ve(te),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new Uc),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function xc(){return new _e(U.comparator)}function Fc(){return new _e(U.comparator)}/**
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
 */const Cv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Nv{constructor(e,n){this.databaseId=e,this.dt=n}}function Ar(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fh(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Dv(t,e){return Ar(t,e.toTimestamp())}function it(t){return re(!!t),Q.fromTimestamp(function(e){const n=bt(e);return new ye(n.seconds,n.nanos)}(t))}function oa(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Vh(t){const e=ie.fromString(t);return re(jh(e)),e}function Zi(t,e){return oa(t.databaseId,e.path)}function Si(t,e){const n=Vh(e);if(n.get(1)!==t.databaseId.projectId)throw new R(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(Bh(n))}function eo(t,e){return oa(t.databaseId,e)}function Ov(t){const e=Vh(t);return e.length===4?ie.emptyPath():Bh(e)}function to(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bh(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vc(t,e,n){return{name:Zi(t,e),fields:n.value.mapValue.fields}}function Lv(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.dt?(re(u===void 0||typeof u=="string"),Re.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),Re.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:Dh(c.code);return new R(u,c.message||"")}(o);n=new xh(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Si(t,s.document.name),i=it(s.document.updateTime),o=new qe({mapValue:{fields:s.document.fields}}),a=Ae.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new nr(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Si(t,s.document),i=s.readTime?it(s.readTime):Q.min(),o=Ae.newNoDocument(r,i),a=s.removedTargetIds||[];n=new nr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Si(t,s.document),i=s.removedTargetIds||[];n=new nr([],i,r,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Ev(r),o=s.targetId;n=new Uh(o,i)}}return n}function Pv(t,e){let n;if(e instanceof Ds)n={update:Vc(t,e.key,e.value)};else if(e instanceof Nh)n={delete:Zi(t,e.key)};else if(e instanceof Rt)n={update:Vc(t,e.key,e.data),updateMask:Hv(e.fieldMask)};else{if(!(e instanceof wv))return H();n={verify:Zi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof br)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ls)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof hs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Sr)return{fieldPath:i.field.canonicalString(),increment:o._t};throw H()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Dv(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:H()}(t,e.precondition)),n}function Mv(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?it(s.updateTime):it(r);return i.isEqual(Q.min())&&(i=it(r)),new yv(i,s.transformResults||[])}(n,e))):[]}function Uv(t,e){return{documents:[eo(t,e.path)]}}function xv(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=eo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=eo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(d){if(d.op==="=="){if(Cc(d.value))return{unaryFilter:{field:en(d.field),op:"IS_NAN"}};if(kc(d.value))return{unaryFilter:{field:en(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(Cc(d.value))return{unaryFilter:{field:en(d.field),op:"IS_NOT_NAN"}};if(kc(d.value))return{unaryFilter:{field:en(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:en(d.field),op:$v(d.op),value:d.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:en(l.field),direction:Bv(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||Qr(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Fv(t){let e=Ov(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){re(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=$h(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(d){return new un(rn(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(l)));let a=null;n.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,Qr(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(l){const d=!!l.before,h=l.values||[];return new Tr(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const d=!l.before,h=l.values||[];return new Tr(h,d)}(n.endAt)),cv(e,r,o,i,a,"F",c,u)}function Vv(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function $h(t){return t?t.unaryFilter!==void 0?[qv(t)]:t.fieldFilter!==void 0?[jv(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>$h(e)).reduce((e,n)=>e.concat(n)):H():[]}function Bv(t){return Cv[t]}function $v(t){return Rv[t]}function en(t){return{fieldPath:t.canonicalString()}}function rn(t){return Pe.fromServerFormat(t.fieldPath)}function jv(t){return Be.create(rn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}function qv(t){switch(t.unaryFilter.op){case"IS_NAN":const e=rn(t.unaryFilter.field);return Be.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=rn(t.unaryFilter.field);return Be.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=rn(t.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=rn(t.unaryFilter.field);return Be.create(r,"!=",{nullValue:"NULL_VALUE"});default:return H()}}function Hv(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Gv{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&vv(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=zn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=zn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ph();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Ch(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&mn(this.mutations,e.mutations,(n,s)=>Lc(n,s))&&mn(this.baseMutations,e.baseMutations,(n,s)=>Lc(n,s))}}class aa{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){re(e.mutations.length===s.length);let r=bv;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new aa(e,n,s,r)}}/**
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
 */class zv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xt{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Kv{constructor(e){this.ne=e}}function Wv(t){const e=Fv({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lv(e,e.limit,"L"):e}/**
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
 */class Qv{constructor(){this.ze=new Xv}addToCollectionParentIndex(e,n){return this.ze.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Tt.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Tt.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class Xv{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ve(ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ve(ie.comparator)).toArray()}}/**
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
 */class _n{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new _n(0)}static Rn(){return new _n(-1)}}/**
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
 */class Yv{constructor(){this.changes=new Rn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Jv{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Zv{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&zn(s.mutation,r,Ke.empty(),ye.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,J()).next(()=>s))}getLocalViewOfDocuments(e,n,s=J()){const r=Pt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Vn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Pt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,J()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=lt();const o=Kn(),a=Kn();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Rt)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),zn(l.mutation,u,l.mutation.getFieldMask(),ye.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var d;return a.set(u,new Jv(l,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Kn();let r=new _e((o,a)=>o-a),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ke.empty();l=a.applyToLocalView(u,l),s.set(c,l);const d=(r.get(a.batchId)||J()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,d=Ph();l.forEach(h=>{if(!i.has(h)){const f=Ch(n.get(h),s.get(h));f!==null&&d.set(h,f),i=i.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_h(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Pt());let a=-1,c=i;return o.next(u=>T.forEach(u,(l,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(l)?T.resolve():this.getBaseDocument(e,l,d).next(h=>{c=c.insert(l,h)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,J())).next(l=>({batchId:a,changes:Lh(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(s=>{let r=Vn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Vn();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(u,l){return new Cn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,d)=>{i=i.insert(l,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Ae.newInvalidDocument(u)))});let o=Vn();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&zn(u.mutation,c,Ke.empty(),ye.now()),ia(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):T.resolve(Ae.newInvalidDocument(n))}}/**
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
 */class e_{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return T.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:it(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:Wv(s.bundledQuery),readTime:it(s.readTime)}}(n)),T.resolve()}}/**
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
 */class t_{constructor(){this.overlays=new _e(U.comparator),this.Xn=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Pt();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Pt(),i=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new _e((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Pt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Pt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return T.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new zv(n,s));let i=this.Xn.get(n);i===void 0&&(i=J(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
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
 */class ca{constructor(){this.Zn=new ve(Ee.ts),this.es=new ve(Ee.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new Ee(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new Ee(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new U(new ie([])),s=new Ee(n,e),r=new Ee(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new U(new ie([])),s=new Ee(n,e),r=new Ee(n,e+1);let i=J();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ee(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return U.comparator(e.key,n.key)||te(e.ls,n.ls)}static ns(e,n){return te(e.ls,n.ls)||U.comparator(e.key,n.key)}}/**
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
 */class n_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ve(Ee.ts)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gv(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new Ee(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ee(n,0),r=new Ee(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(te);return n.forEach(r=>{const i=new Ee(r,0),o=new Ee(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),T.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;U.isDocumentKey(i)||(i=i.child(""));const o=new Ee(new U(i),0);let a=new ve(te);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){re(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return T.forEach(n.mutations,r=>{const i=new Ee(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new Ee(n,0),r=this.ds.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class s_{constructor(e){this.ps=e,this.docs=new _e(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Ae.newInvalidDocument(n))}getEntries(e,n){let s=lt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ae.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=lt();const i=new U(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Gy(Hy(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){H()}Is(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new r_(this)}getSize(e){return T.resolve(this.size)}}class r_ extends Yv{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class i_{constructor(e){this.persistence=e,this.Ts=new Rn(n=>ea(n),ta),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Es=0,this.As=new ca,this.targetCount=0,this.Rs=_n.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),T.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new _n(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.vn(n),T.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
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
 */class o_{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Jo(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new i_(this),this.indexManager=new Qv,this.remoteDocumentCache=function(s){return new s_(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new Kv(n),this.Ds=new e_(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new t_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new n_(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){M("MemoryPersistence","Starting transaction:",e);const r=new a_(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return T.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class a_ extends Ky{constructor(e){super(),this.currentSequenceNumber=e}}class ua{constructor(e){this.persistence=e,this.ks=new ca,this.Os=null}static Ms(e){return new ua(e)}get Fs(){if(this.Os)return this.Os;throw H()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),T.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Fs,s=>{const r=U.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return T.or([()=>T.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class la{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=J(),r=J();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new la(e,n.fromCache,s,r)}}/**
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
 */class c_{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){return T.resolve(null)}xi(e,n,s,r){return uv(n)||r.isEqual(Q.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,s,r)?this.Ni(e,n):(Ec()<=ee.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ji(n)),this.Mi(e,o,n,qy(r,-1)))})}ki(e,n){let s=new ve(Eh(e));return n.forEach((r,i)=>{ia(e,i)&&(s=s.add(i))}),s}Oi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return Ec()<=ee.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ji(n)),this.Di.getDocumentsMatchingQuery(e,n,Tt.min())}Mi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class u_{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new _e(te),this.Bi=new Rn(i=>ea(i),ta),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zv(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function l_(t,e,n,s){return new u_(t,e,n,s)}async function qh(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=J();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function h_(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,d=l.keys();let h=T.resolve();return d.forEach(f=>{h=h.next(()=>u.getEntry(a,f)).next(p=>{const m=c.docVersions.get(f);re(m!==null),p.version.compareTo(m)<0&&(l.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=J();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Hh(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function d_(t,e){const n=G(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((l,d)=>{const h=r.get(d);if(!h)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,d).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,d)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(d)?f=f.withResumeToken(Re.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(d,f),function(p,m,y){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(h,f,l)&&a.push(n.Vs.updateTargetData(i,f))});let c=lt(),u=J();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(f_(i,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!s.isEqual(Q.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(d=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=r,i))}function f_(t,e,n){let s=J(),r=J();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=lt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function p_(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function m_(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new xt(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function no(t,e,n){const s=G(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ns(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function Bc(t,e,n){const s=G(t);let r=Q.min(),i=J();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=G(a),d=l.Bi.get(u);return d!==void 0?T.resolve(l.$i.get(d)):l.Vs.getTargetData(c,u)}(s,o,Wt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?i:J())).next(a=>(g_(s,hv(e),a),{documents:a,ji:i})))}function g_(t,e,n){let s=Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class $c{constructor(){this.activeTargetIds=Mh()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class y_{constructor(){this.Fr=new $c,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new $c,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class v_{Br(e){}shutdown(){}}/**
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
 */class jc{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const __={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class w_{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class E_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);M("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(M("RestConnection","Received: ",c),c),c=>{throw Ic("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+kn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=__[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new Ly;a.listenOnce(Ny.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case bi.NO_ERROR:const u=a.getResponseJson();M("Connection","XHR received:",JSON.stringify(u)),i(u);break;case bi.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),o(new R(E.DEADLINE_EXCEEDED,"Request time out"));break;case bi.HTTP_ERROR:const l=a.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const h=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(p)>=0?p:E.UNKNOWN}(d.status);o(new R(h,d.message))}else o(new R(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new R(E.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Cy(),o=Ry(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Oy({})),this.uo(a.initMessageHeaders,n,s),Nu()||Ou()||gf()||Lu()||yf()||Du()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");M("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,d=!1;const h=new w_({jr:p=>{d?M("Connection","Not sending because WebChannel is closed:",p):(l||(M("Connection","Opening WebChannel transport."),u.open(),l=!0),M("Connection","WebChannel sending:",p),u.send(p))},Wr:()=>u.close()}),f=(p,m,y)=>{p.listen(m,D=>{try{y(D)}catch(S){setTimeout(()=>{throw S},0)}})};return f(u,qs.EventType.OPEN,()=>{d||M("Connection","WebChannel transport opened.")}),f(u,qs.EventType.CLOSE,()=>{d||(d=!0,M("Connection","WebChannel transport closed"),h.eo())}),f(u,qs.EventType.ERROR,p=>{d||(d=!0,Ic("Connection","WebChannel transport errored:",p),h.eo(new R(E.UNAVAILABLE,"The operation could not be completed")))}),f(u,qs.EventType.MESSAGE,p=>{var m;if(!d){const y=p.data[0];re(!!y);const D=y,S=D.error||((m=D[0])===null||m===void 0?void 0:m.error);if(S){M("Connection","WebChannel received error:",S);const O=S.status;let N=function(g){const b=de[g];if(b!==void 0)return Dh(b)}(O),L=S.message;N===void 0&&(N=E.INTERNAL,L="Unknown error status: "+O+" with message "+S.message),d=!0,h.eo(new R(N,L)),u.close()}else M("Connection","WebChannel received:",y),h.no(y)}}),f(o,Dy.STAT_EVENT,p=>{p.stat===_c.PROXY?M("Connection","Detected buffering proxy"):p.stat===_c.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.Zr()},0),h}}function Ai(){return typeof document!="undefined"?document:null}/**
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
 */function ei(t){return new Nv(t,!0)}class Gh{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class zh{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Gh(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new R(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class I_ extends zh{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=Lv(this.wt,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?it(i.readTime):Q.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=to(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=Yi(a)?{documents:Uv(r,a)}:{query:xv(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Fh(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Ar(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=Vv(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=to(this.wt),n.removeTarget=e,this.Mo(n)}}class T_ extends zh{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=Mv(e.writeResults,e.commitTime),s=it(e.commitTime);return this.listener.Jo(s,n)}return re(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=to(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Pv(this.wt,s))};this.Mo(n)}}/**
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
 */class b_ extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new R(E.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new R(E.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(E.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class S_{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(It(n),this.su=!1):M("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class A_{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{Jt(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=G(a);c.lu.add(4),await Ls(c),c._u.set("Unknown"),c.lu.delete(4),await ti(c)}(this))})}),this._u=new S_(s,r)}}async function ti(t){if(Jt(t))for(const e of t.fu)await e(!0)}async function Ls(t){for(const e of t.fu)await e(!1)}function Kh(t,e){const n=G(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),fa(n)?da(n):Nn(n).Co()&&ha(n,e))}function Wh(t,e){const n=G(t),s=Nn(n);n.hu.delete(e),s.Co()&&Qh(n,e),n.hu.size===0&&(s.Co()?s.ko():Jt(n)&&n._u.set("Unknown"))}function ha(t,e){t.wu.Nt(e.targetId),Nn(t).Qo(e)}function Qh(t,e){t.wu.Nt(e),Nn(t).jo(e)}function da(t){t.wu=new kv({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Nn(t).start(),t._u.iu()}function fa(t){return Jt(t)&&!Nn(t).Do()&&t.hu.size>0}function Jt(t){return G(t).lu.size===0}function Xh(t){t.wu=void 0}async function k_(t){t.hu.forEach((e,n)=>{ha(t,e)})}async function C_(t,e){Xh(t),fa(t)?(t._u.uu(e),da(t)):t._u.set("Unknown")}async function R_(t,e,n){if(t._u.set("Online"),e instanceof xh&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await kr(t,s)}else if(e instanceof nr?t.wu.Ut(e):e instanceof Uh?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(Q.min()))try{const s=await Hh(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.hu.get(c);u&&r.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(Re.EMPTY_BYTE_STRING,c.snapshotVersion)),Qh(r,a);const u=new xt(c.target,a,1,c.sequenceNumber);ha(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){M("RemoteStore","Failed to raise snapshot:",s),await kr(t,s)}}async function kr(t,e,n){if(!Ns(e))throw e;t.lu.add(1),await Ls(t),t._u.set("Offline"),n||(n=()=>Hh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await ti(t)})}function Yh(t,e){return e().catch(n=>kr(t,n,e))}async function ni(t){const e=G(t),n=St(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;N_(e);)try{const r=await p_(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,D_(e,r)}catch(r){await kr(e,r)}Jh(e)&&Zh(e)}function N_(t){return Jt(t)&&t.au.length<10}function D_(t,e){t.au.push(e);const n=St(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Jh(t){return Jt(t)&&!St(t).Do()&&t.au.length>0}function Zh(t){St(t).start()}async function O_(t){St(t).Xo()}async function L_(t){const e=St(t);for(const n of t.au)e.Ho(n.mutations)}async function P_(t,e,n){const s=t.au.shift(),r=aa.from(s,e,n);await Yh(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ni(t)}async function M_(t,e){e&&St(t).zo&&await async function(n,s){if(r=s.code,Iv(r)&&r!==E.ABORTED){const i=n.au.shift();St(n).No(),await Yh(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ni(n)}var r}(t,e),Jh(t)&&Zh(t)}async function qc(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const s=Jt(n);n.lu.add(3),await Ls(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await ti(n)}async function U_(t,e){const n=G(t);e?(n.lu.delete(2),await ti(n)):e||(n.lu.add(2),await Ls(n),n._u.set("Unknown"))}function Nn(t){return t.mu||(t.mu=function(e,n,s){const r=G(e);return r.tu(),new I_(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:k_.bind(null,t),Jr:C_.bind(null,t),Go:R_.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),fa(t)?da(t):t._u.set("Unknown")):(await t.mu.stop(),Xh(t))})),t.mu}function St(t){return t.gu||(t.gu=function(e,n,s){const r=G(e);return r.tu(),new T_(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:O_.bind(null,t),Jr:M_.bind(null,t),Yo:L_.bind(null,t),Jo:P_.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await ni(t)):(await t.gu.stop(),t.au.length>0&&(M("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class pa{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new pa(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ma(t,e){if(It("AsyncQueue",`${e}: ${t}`),Ns(t))return new R(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ln{constructor(e){this.comparator=e?(n,s)=>e(n,s)||U.comparator(n.key,s.key):(n,s)=>U.comparator(n.key,s.key),this.keyedMap=Vn(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new ln(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ln)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ln;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Hc{constructor(){this.yu=new _e(U.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):H():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class wn{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new wn(e,n,ln.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class x_{constructor(){this.Iu=void 0,this.listeners=[]}}class F_{constructor(){this.queries=new Rn(e=>wh(e),Xr),this.onlineState="Unknown",this.Tu=new Set}}async function V_(t,e){const n=G(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new x_),r)try{i.Iu=await n.onListen(s)}catch(o){const a=ma(o,`Initialization of query '${Ji(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&ga(n)}async function B_(t,e){const n=G(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function $_(t,e){const n=G(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&ga(n)}function j_(t,e,n){const s=G(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ga(t){t.Tu.forEach(e=>{e.next()})}class q_{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new wn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class ed{constructor(e){this.key=e}}class td{constructor(e){this.key=e}}class H_{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=J(),this.mutatedKeys=J(),this.Lu=Eh(e),this.Uu=new ln(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new Hc,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,d)=>{const h=r.get(l),f=ia(this.query,d)?d:null,p=!!h&&this.mutatedKeys.has(h.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;h&&f?h.data.isEqual(f.data)?p!==m&&(s.track({type:3,doc:f}),y=!0):this.Qu(h,f)||(s.track({type:2,doc:f}),y=!0,(c&&this.Lu(f,c)>0||u&&this.Lu(f,u)<0)&&(a=!0)):!h&&f?(s.track({type:0,doc:f}),y=!0):h&&!f&&(s.track({type:1,doc:h}),y=!0,(c||u)&&(a=!0)),y&&(f?(o=o.add(f),i=m?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((u,l)=>function(d,h){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return f(d)-f(h)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new wn(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Hc,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=J(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new td(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new ed(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=J();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return wn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class G_{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class z_{constructor(e){this.key=e,this.Xu=!1}}class K_{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Rn(a=>wh(a),Xr),this.ec=new Map,this.nc=new Set,this.sc=new _e(U.comparator),this.ic=new Map,this.rc=new ca,this.oc={},this.uc=new Map,this.cc=_n.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function W_(t,e){const n=rw(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await m_(n.localStore,Wt(e));n.isPrimaryClient&&Kh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Q_(n,e,s,a==="current")}return r}async function Q_(t,e,n,s){t.hc=(l,d,h)=>async function(f,p,m,y){let D=p.view.Ku(m);D.Oi&&(D=await Bc(f.localStore,p.query,!1).then(({documents:N})=>p.view.Ku(N,D)));const S=y&&y.targetChanges.get(p.targetId),O=p.view.applyChanges(D,f.isPrimaryClient,S);return zc(f,p.targetId,O.zu),O.snapshot}(t,l,d,h);const r=await Bc(t.localStore,e,!0),i=new H_(e,r.ji),o=i.Ku(r.documents),a=Os.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);zc(t,n,c.zu);const u=new G_(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function X_(t,e){const n=G(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!Xr(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await no(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wh(n.remoteStore,s.targetId),so(n,s.targetId)}).catch(Rs)):(so(n,s.targetId),await no(n.localStore,s.targetId,!0))}async function Y_(t,e,n){const s=iw(t);try{const r=await function(i,o){const a=G(i),c=ye.now(),u=o.reduce((h,f)=>h.add(f.key),J());let l,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=lt(),p=J();return a.Ui.getEntries(h,u).next(m=>{f=m,f.forEach((y,D)=>{D.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(m=>{l=m;const y=[];for(const D of o){const S=_v(D,l.get(D.key).overlayedDocument);S!=null&&y.push(new Rt(D.key,S,yh(S.value.mapValue),et.exists(!0)))}return a.mutationQueue.addMutationBatch(h,c,y,o)}).next(m=>{d=m;const y=m.applyToLocalDocumentSet(l,p);return a.documentOverlayCache.saveOverlays(h,m.batchId,y)})}).then(()=>({batchId:d.batchId,changes:Lh(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new _e(te)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ps(s,r.changes),await ni(s.remoteStore)}catch(r){const i=ma(r,"Failed to persist write");n.reject(i)}}async function nd(t,e){const n=G(t);try{const s=await d_(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?re(o.Xu):r.removedDocuments.size>0&&(re(o.Xu),o.Xu=!1))}),await Ps(n,s,e)}catch(s){await Rs(s)}}function Gc(t,e,n){const s=G(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=G(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const d of l.listeners)d.Eu(o)&&(c=!0)}),c&&ga(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function J_(t,e,n){const s=G(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new _e(U.comparator);o=o.insert(i,Ae.newNoDocument(i,Q.min()));const a=J().add(i),c=new Zr(Q.min(),new Map,new ve(te),o,a);await nd(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),ya(s)}else await no(s.localStore,e,!1).then(()=>so(s,e,n)).catch(Rs)}async function Z_(t,e){const n=G(t),s=e.batch.batchId;try{const r=await h_(n.localStore,e);rd(n,s,null),sd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ps(n,r)}catch(r){await Rs(r)}}async function ew(t,e,n){const s=G(t);try{const r=await function(i,o){const a=G(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(re(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);rd(s,e,n),sd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ps(s,r)}catch(r){await Rs(r)}}function sd(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function rd(t,e,n){const s=G(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function so(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||id(t,s)})}function id(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Wh(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),ya(t))}function zc(t,e,n){for(const s of n)s instanceof ed?(t.rc.addReference(s.key,e),tw(t,s)):s instanceof td?(M("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||id(t,s.key)):H()}function tw(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(M("SyncEngine","New document in limbo: "+n),t.nc.add(s),ya(t))}function ya(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new U(ie.fromString(e)),s=t.cc.next();t.ic.set(s,new z_(n)),t.sc=t.sc.insert(n,s),Kh(t.remoteStore,new xt(Wt(na(n.path)),s,2,Jo.ot))}}async function Ps(t,e,n){const s=G(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=la.Vi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const u=G(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>T.forEach(c,d=>T.forEach(d.Pi,h=>u.persistence.referenceDelegate.addReference(l,d.targetId,h)).next(()=>T.forEach(d.vi,h=>u.persistence.referenceDelegate.removeReference(l,d.targetId,h)))))}catch(l){if(!Ns(l))throw l;M("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const d=l.targetId;if(!l.fromCache){const h=u.$i.get(d),f=h.snapshotVersion,p=h.withLastLimboFreeSnapshotVersion(f);u.$i=u.$i.insert(d,p)}}}(s.localStore,i))}async function nw(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const s=await qh(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new R(E.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ps(n,s.Ki)}}function sw(t,e){const n=G(t),s=n.ic.get(e);if(s&&s.Xu)return J().add(s.key);{let r=J();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function rw(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J_.bind(null,e),e.Zu.Go=$_.bind(null,e.eventManager),e.Zu.lc=j_.bind(null,e.eventManager),e}function iw(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Z_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ew.bind(null,e),e}class ow{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=ei(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return l_(this.persistence,new c_,e.initialUser,this.wt)}_c(e){return new o_(ua.Ms,this.wt)}dc(e){return new y_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=nw.bind(null,this.syncEngine),await U_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new F_}createDatastore(e){const n=ei(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new E_(r));var r;return function(i,o,a,c){return new b_(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Gc(this.syncEngine,a,0),o=jc.V()?new jc:new v_,new A_(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new K_(s,r,i,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);M("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Ls(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class cw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class uw{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=je.UNAUTHENTICATED,this.clientId=fh.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{M("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(M("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ma(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function lw(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await qh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function hw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dw(t);M("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>qc(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qc(e.remoteStore,i)),t.onlineComponents=e}async function dw(t){return t.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await lw(t,new ow)),t.offlineComponents}async function od(t){return t.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await hw(t,new aw)),t.onlineComponents}function fw(t){return od(t).then(e=>e.syncEngine)}async function Kc(t){const e=await od(t),n=e.eventManager;return n.onListen=W_.bind(null,e.syncEngine),n.onUnlisten=X_.bind(null,e.syncEngine),n}const Wc=new Map;/**
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
 */function ad(t,e,n){if(!n)throw new R(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pw(t,e,n,s){if(e===!0&&s===!0)throw new R(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qc(t){if(!U.isDocumentKey(t))throw new R(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xc(t){if(U.isDocumentKey(t))throw new R(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function si(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=si(t);throw new R(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Yc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class va{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yc({}),this._settingsFrozen=!1,e instanceof yn?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new R(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(r.options.projectId)}(e))}get app(){if(!this._app)throw new R(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new My;switch(n.type){case"gapi":const s=n.client;return re(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Fy(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new R(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Wc.get(e);n&&(M("ComponentProvider","Removing Datastore"),Wc.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class $e{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class Dn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dn(this.firestore,e,this._query)}}class wt extends Dn{constructor(e,n,s){super(e,n,na(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new U(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function _a(t,e,...n){if(t=me(t),ad("collection","path",e),t instanceof va){const s=ie.fromString(e,...n);return Xc(s),new wt(t,null,s)}{if(!(t instanceof $e||t instanceof wt))throw new R(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Xc(s),new wt(t.firestore,null,s)}}function ro(t,e,...n){if(t=me(t),arguments.length===1&&(e=fh.I()),ad("doc","path",e),t instanceof va){const s=ie.fromString(e,...n);return Qc(s),new $e(t,null,new U(s))}{if(!(t instanceof $e||t instanceof wt))throw new R(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Qc(s),new $e(t.firestore,t instanceof wt?t.converter:null,new U(s))}}/**
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
 */class mw{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Gh(this,"async_queue_retry"),this.Kc=()=>{const n=Ai();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Ai();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Ai();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Ut;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Ns(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw It("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=pa.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&H()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Jc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ds extends va{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new mw,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ud(this),this._firestoreClient.terminate()}}function gw(t=go()){return Nr(t,"firestore").getImmediate()}function cd(t){return t._firestoreClient||ud(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ud(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Qy(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new uw(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class ri{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(Re.fromBase64String(e))}catch(n){throw new R(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new En(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wa{constructor(e){this._methodName=e}}/**
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
 */class Ea{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const yw=/^__.*__$/;class vw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Rt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ds(e,this.data,n,this.fieldTransforms)}}class ld{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Rt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Ia{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Ia(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Cr(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(hd(this.Zc)&&yw.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class _w{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||ei(e)}aa(e,n,s,r=!1){return new Ia({Zc:e,methodName:n,ca:s,path:Pe.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Ta(t){const e=t._freezeSettings(),n=ei(t._databaseId);return new _w(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ww(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);ba("Data must be an object, but it was:",o,s);const a=dd(s,o);let c,u;if(i.merge)c=new Ke(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const d of i.mergeFields){const h=io(e,d,n);if(!o.contains(h))throw new R(E.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);pd(l,h)||l.push(h)}c=new Ke(l),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new vw(new qe(a),c,u)}class ii extends wa{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ii}}function Ew(t,e,n,s){const r=t.aa(1,e,n);ba("Data must be an object, but it was:",r,s);const i=[],o=qe.empty();Yt(s,(c,u)=>{const l=Sa(e,c,n);u=me(u);const d=r.ia(l);if(u instanceof ii)i.push(l);else{const h=Ms(u,d);h!=null&&(i.push(l),o.set(l,h))}});const a=new Ke(i);return new ld(o,a,r.fieldTransforms)}function Iw(t,e,n,s,r,i){const o=t.aa(1,e,n),a=[io(e,s,n)],c=[r];if(i.length%2!=0)throw new R(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<i.length;h+=2)a.push(io(e,i[h])),c.push(i[h+1]);const u=[],l=qe.empty();for(let h=a.length-1;h>=0;--h)if(!pd(u,a[h])){const f=a[h];let p=c[h];p=me(p);const m=o.ia(f);if(p instanceof ii)u.push(f);else{const y=Ms(p,m);y!=null&&(u.push(f),l.set(f,y))}}const d=new Ke(u);return new ld(l,d,o.fieldTransforms)}function Tw(t,e,n,s=!1){return Ms(n,t.aa(s?4:3,e))}function Ms(t,e){if(fd(t=me(t)))return ba("Unsupported field value:",e,t),dd(t,e);if(t instanceof wa)return function(n,s){if(!hd(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ms(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return fv(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ye.fromDate(n);return{timestampValue:Ar(s.wt,r)}}if(n instanceof ye){const r=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ar(s.wt,r)}}if(n instanceof Ea)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof En)return{bytesValue:Fh(s.wt,n._byteString)};if(n instanceof $e){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:oa(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${si(n)}`)}(t,e)}function dd(t,e){const n={};return ph(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yt(t,(s,r)=>{const i=Ms(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function fd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Ea||t instanceof En||t instanceof $e||t instanceof wa)}function ba(t,e,n){if(!fd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=si(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function io(t,e,n){if((e=me(e))instanceof ri)return e._internalPath;if(typeof e=="string")return Sa(t,e);throw Cr("Field path arguments must be of type string or ",t,!1,void 0,n)}const bw=new RegExp("[~\\*/\\[\\]]");function Sa(t,e,n){if(e.search(bw)>=0)throw Cr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ri(...e.split("."))._internalPath}catch{throw Cr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new R(E.INVALID_ARGUMENT,a+t+c)}function pd(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class md{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Sw extends md{data(){return super.data()}}function oi(t,e){return typeof e=="string"?Sa(t,e):e instanceof ri?e._internalPath:e._delegate._internalPath}/**
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
 */class Bn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gd extends md{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(oi("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class sr extends gd{data(e={}){return super.data(e)}}class Aw{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Bn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new sr(this._firestore,this._userDataWriter,s.key,s,new Bn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new sr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new sr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Bn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:kw(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
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
 */function Cw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yd{}function vd(t,...e){for(const n of e)t=n._apply(t);return t}class Rw extends yd{constructor(e,n,s){super(),this.fa=e,this.da=n,this._a=s,this.type="where"}_apply(e){const n=Ta(e.firestore),s=function(r,i,o,a,c,u,l){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new R(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){eu(l,u);const f=[];for(const p of l)f.push(Zc(a,r,p));d={arrayValue:{values:f}}}else d=Zc(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||eu(l,u),d=Tw(o,i,l,u==="in"||u==="not-in");const h=Be.create(c,u,d);return function(f,p){if(p.ht()){const y=ra(f);if(y!==null&&!y.isEqual(p.field))throw new R(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${y.toString()}' and '${p.field.toString()}'`);const D=sa(f);D!==null&&_d(f,p.field,D)}const m=function(y,D){for(const S of y.filters)if(D.indexOf(S.op)>=0)return S.op;return null}(f,function(y){switch(y){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(m!==null)throw m===p.op?new R(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new R(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${m.toString()}' filters.`)}(r,h),h}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new Dn(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Cn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function Nw(t,e,n){const s=e,r=oi("where",t);return new Rw(r,s,n)}class Dw extends yd{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new R(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new R(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new un(r,i);return function(a,c){if(sa(a)===null){const u=ra(a);u!==null&&_d(a,u,c.field)}}(s,o),o}(e._query,this.fa,this.wa);return new Dn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Cn(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Ow(t,e="asc"){const n=e,s=oi("orderBy",t);return new Dw(s,n)}function Zc(t,e,n){if(typeof(n=me(n))=="string"){if(n==="")throw new R(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_h(e)&&n.indexOf("/")!==-1)throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ie.fromString(n));if(!U.isDocumentKey(s))throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ac(t,new U(s))}if(n instanceof $e)return Ac(t,n._key);throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${si(n)}.`)}function eu(t,e){if(!Array.isArray(t)||t.length===0)throw new R(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new R(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function _d(t,e,n){if(!n.isEqual(e))throw new R(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class Lw{convertValue(e,n="none"){switch(Kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const s={};return Yt(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ea(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=gh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(as(e));default:return null}}convertTimestamp(e){const n=bt(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ie.fromString(e);re(jh(s));const r=new yn(s.get(1),s.get(3)),i=new U(s.popFirst(5));return r.isEqual(n)||It(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Pw(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class wd extends Lw{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function Mw(t,e,n){t=Ft(t,$e);const s=Ft(t.firestore,ds),r=Pw(t.converter,e,n);return Id(s,[ww(Ta(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,et.none())])}function tu(t,e,n,...s){t=Ft(t,$e);const r=Ft(t.firestore,ds),i=Ta(r);let o;return o=typeof(e=me(e))=="string"||e instanceof ri?Iw(i,"updateDoc",t._key,e,n,s):Ew(i,"updateDoc",t._key,e),Id(r,[o.toMutation(t._key,et.exists(!0))])}function Ed(t,...e){var n,s,r;t=me(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jc(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Jc(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,l;if(t instanceof $e)u=Ft(t.firestore,ds),l=na(t._key.path),c={next:d=>{e[o]&&e[o](Uw(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Ft(t,Dn);u=Ft(d.firestore,ds),l=d._query;const h=new wd(u);c={next:f=>{e[o]&&e[o](new Aw(u,h,d,f))},error:e[o+1],complete:e[o+2]},Cw(t._query)}return function(d,h,f,p){const m=new cw(p),y=new q_(h,m,f);return d.asyncQueue.enqueueAndForget(async()=>V_(await Kc(d),y)),()=>{m.Tc(),d.asyncQueue.enqueueAndForget(async()=>B_(await Kc(d),y))}}(cd(u),l,a,c)}function Id(t,e){return function(n,s){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>Y_(await fw(n),s,r)),r.promise}(cd(t),e)}function Uw(t,e,n){const s=n.docs.get(e._key),r=new wd(t);return new gd(t,r,e._key,s,new Bn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){kn=n})(In),$t(new Et("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new ds(r,new Uy(n.getProvider("auth-internal")),new By(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Ye(wc,"3.4.12",t),Ye(wc,"3.4.12","esm2017")})();/**
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
 */const Td="firebasestorage.googleapis.com",bd="storageBucket",xw=2*60*1e3,Fw=10*60*1e3;/**
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
 */class he extends At{constructor(e,n){super(ki(e),`Firebase Storage: ${n} (${ki(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}_codeEquals(e){return ki(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ki(t){return"storage/"+t}function Aa(){const t="An unknown error occurred, please check the error payload for server response.";return new he("unknown",t)}function Vw(t){return new he("object-not-found","Object '"+t+"' does not exist.")}function Bw(t){return new he("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $w(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he("unauthenticated",t)}function jw(){return new he("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function qw(t){return new he("unauthorized","User does not have permission to access '"+t+"'.")}function Hw(){return new he("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Gw(){return new he("canceled","User canceled the upload/download.")}function zw(t){return new he("invalid-url","Invalid URL '"+t+"'.")}function Kw(t){return new he("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Ww(){return new he("no-default-bucket","No default bucket found. Did you set the '"+bd+"' property when initializing the app?")}function Qw(){return new he("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Xw(){return new he("no-download-url","The given file does not have any download URLs.")}function oo(t){return new he("invalid-argument",t)}function Sd(){return new he("app-deleted","The Firebase app was deleted.")}function Yw(t){return new he("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Wn(t,e){return new he("invalid-format","String does not match format '"+t+"': "+e)}function Ln(t){throw new he("internal-error","Internal error: "+t)}/**
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
 */class Ge{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ge.makeFromUrl(e,n)}catch{return new Ge(e,"")}if(s.path==="")return s;throw Kw(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const l="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${l}/b/${r}/o${h}`,"i"),p={bucket:1,path:3},m=n===Td?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",D=new RegExp(`^https?://${m}/${r}/${y}`,"i"),O=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:D,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<O.length;N++){const L=O[N],g=L.regex.exec(e);if(g){const b=g[L.indices.bucket];let I=g[L.indices.path];I||(I=""),s=new Ge(b,I),L.postModify(s);break}}if(s==null)throw zw(e);return s}}class Jw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Zw(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function d(y){r=setTimeout(()=>{r=null,t(f,c())},y)}function h(){i&&clearTimeout(i)}function f(y,...D){if(u){h();return}if(y){h(),l.call(null,y,...D);return}if(c()||o){h(),l.call(null,y,...D);return}s<64&&(s*=2);let O;a===1?(a=2,O=0):O=(s+Math.random())*1e3,d(O)}let p=!1;function m(y){p||(p=!0,h(),!u&&(r!==null?(y||(a=2),clearTimeout(r),d(0)):y||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,m(!0)},n),m}function eE(t){t(!1)}/**
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
 */function tE(t){return t!==void 0}function nE(t){return typeof t=="object"&&!Array.isArray(t)}function ka(t){return typeof t=="string"||t instanceof String}function nu(t){return Ca()&&t instanceof Blob}function Ca(){return typeof Blob!="undefined"}function su(t,e,n,s){if(s<e)throw oo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw oo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ra(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Ad(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Vt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Vt||(Vt={}));/**
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
 */class sE{constructor(e,n,s,r,i,o,a,c,u,l,d){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,f)=>{this.resolve_=h,this.reject_=f,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new zs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Vt.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===Vt.ABORT;s(!1,new zs(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new zs(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());tE(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Aa();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Sd():Gw();o(c)}else{const c=Hw();o(c)}};this.canceled_?n(!1,new zs(!1,null,!0)):this.backoffId_=Zw(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class zs{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function rE(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iE(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function oE(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aE(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cE(t,e,n,s,r,i){const o=Ad(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return oE(c,e),rE(c,n),iE(c,i),aE(c,s),new sE(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
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
 */function uE(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function lE(...t){const e=uE();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Ca())return new Blob(t);throw new he("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function hE(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function dE(t){return atob(t)}/**
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
 */const Xe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ci{constructor(e,n){this.data=e,this.contentType=n||null}}function fE(t,e){switch(t){case Xe.RAW:return new Ci(kd(e));case Xe.BASE64:case Xe.BASE64URL:return new Ci(Cd(t,e));case Xe.DATA_URL:return new Ci(mE(e),gE(e))}throw Aa()}function kd(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function pE(t){let e;try{e=decodeURIComponent(t)}catch{throw Wn(Xe.DATA_URL,"Malformed data URL.")}return kd(e)}function Cd(t,e){switch(t){case Xe.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Wn(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Xe.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Wn(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dE(e)}catch{throw Wn(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Rd{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Wn(Xe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=yE(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function mE(t){const e=new Rd(t);return e.base64?Cd(Xe.BASE64,e.rest):pE(e.rest)}function gE(t){return new Rd(t).contentType}function yE(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class vt{constructor(e,n){let s=0,r="";nu(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(nu(this.data_)){const s=this.data_,r=hE(s,e,n);return r===null?null:new vt(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new vt(s,!0)}}static getBlob(...e){if(Ca()){const n=e.map(s=>s instanceof vt?s.data_:s);return new vt(lE.apply(null,n))}else{const n=e.map(o=>ka(o)?fE(Xe.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new vt(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Nd(t){let e;try{e=JSON.parse(t)}catch{return null}return nE(e)?e:null}/**
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
 */function vE(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _E(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Dd(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function wE(t,e){return e}class Ue{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||wE}}let Ks=null;function EE(t){return!ka(t)||t.length<2?t:Dd(t)}function Od(){if(Ks)return Ks;const t=[];t.push(new Ue("bucket")),t.push(new Ue("generation")),t.push(new Ue("metageneration")),t.push(new Ue("name","fullPath",!0));function e(i,o){return EE(o)}const n=new Ue("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Ue("size");return r.xform=s,t.push(r),t.push(new Ue("timeCreated")),t.push(new Ue("updated")),t.push(new Ue("md5Hash",null,!0)),t.push(new Ue("cacheControl",null,!0)),t.push(new Ue("contentDisposition",null,!0)),t.push(new Ue("contentEncoding",null,!0)),t.push(new Ue("contentLanguage",null,!0)),t.push(new Ue("contentType",null,!0)),t.push(new Ue("metadata","customMetadata",!0)),Ks=t,Ks}function IE(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Ge(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function TE(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return IE(s,t),s}function Ld(t,e,n){const s=Nd(e);return s===null?null:TE(t,s,n)}function bE(t,e,n,s){const r=Nd(e);if(r===null||!ka(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,d=t.fullPath,h="/b/"+o(l)+"/o/"+o(d),f=Ra(h,n,s),p=Ad({alt:"media",token:u});return f+p})[0]}function SE(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Pd{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Md(t){if(!t)throw Aa()}function AE(t,e){function n(s,r){const i=Ld(t,r,e);return Md(i!==null),i}return n}function kE(t,e){function n(s,r){const i=Ld(t,r,e);return Md(i!==null),bE(i,r,t.host,t._protocol)}return n}function Ud(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=jw():r=$w():n.getStatus()===402?r=Bw(t.bucket):n.getStatus()===403?r=qw(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function CE(t){const e=Ud(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Vw(t.path)),i.serverResponse=r.serverResponse,i}return n}function RE(t,e,n){const s=e.fullServerUrl(),r=Ra(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Pd(r,i,kE(t,n),o);return a.errorHandler=CE(e),a}function NE(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function DE(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=NE(null,e)),s}function OE(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let N=0;N<2;N++)O=O+Math.random().toString().slice(2);return O}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=DE(e,s,r),l=SE(u,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+c+"--",f=vt.getBlob(d,s,h);if(f===null)throw Qw();const p={name:u.fullPath},m=Ra(i,t.host,t._protocol),y="POST",D=t.maxUploadRetryTime,S=new Pd(m,y,AE(t,n),D);return S.urlParams=p,S.headers=o,S.body=f.uploadData(),S.errorHandler=Ud(e),S}class LE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Ln("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ln("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ln("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ln("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ln("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PE extends LE{initXhr(){this.xhr_.responseType="text"}}function xd(){return new PE}/**
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
 */class Qt{constructor(e,n){this._service=e,n instanceof Ge?this._location=n:this._location=Ge.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qt(e,n)}get root(){const e=new Ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dd(this._location.path)}get storage(){return this._service}get parent(){const e=vE(this._location.path);if(e===null)return null;const n=new Ge(this._location.bucket,e);return new Qt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Yw(e)}}function ME(t,e,n){t._throwIfRoot("uploadBytes");const s=OE(t.storage,t._location,Od(),new vt(e,!0),n);return t.storage.makeRequestWithTokens(s,xd).then(r=>({metadata:r,ref:t}))}function UE(t){t._throwIfRoot("getDownloadURL");const e=RE(t.storage,t._location,Od());return t.storage.makeRequestWithTokens(e,xd).then(n=>{if(n===null)throw Xw();return n})}function xE(t,e){const n=_E(t._location.path,e),s=new Ge(t._location.bucket,n);return new Qt(t.storage,s)}/**
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
 */function FE(t){return/^[A-Za-z]+:\/\//.test(t)}function VE(t,e){return new Qt(t,e)}function Fd(t,e){if(t instanceof Na){const n=t;if(n._bucket==null)throw Ww();const s=new Qt(n,n._bucket);return e!=null?Fd(s,e):s}else return e!==void 0?xE(t,e):t}function BE(t,e){if(e&&FE(e)){if(t instanceof Na)return VE(t,e);throw oo("To use ref(service, url), the first argument must be a Storage instance.")}else return Fd(t,e)}function ru(t,e){const n=e==null?void 0:e[bd];return n==null?null:Ge.makeFromBucketSpec(n,t)}class Na{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Td,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xw,this._maxUploadRetryTime=Fw,this._requests=new Set,r!=null?this._bucket=Ge.makeFromBucketSpec(r,this._host):this._bucket=ru(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ge.makeFromBucketSpec(this._url,e):this._bucket=ru(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){su("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){su("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qt(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new Jw(Sd());{const i=cE(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const iu="@firebase/storage",ou="0.9.9";/**
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
 */const Vd="storage";function $E(t,e,n){return t=me(t),ME(t,e,n)}function jE(t){return t=me(t),UE(t)}function qE(t,e){return t=me(t),BE(t,e)}function HE(t=go(),e){return t=me(t),Nr(t,Vd).getImmediate({identifier:e})}function GE(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Na(n,s,r,e,In)}function zE(){$t(new Et(Vd,GE,"PUBLIC").setMultipleInstances(!0)),Ye(iu,ou,""),Ye(iu,ou,"esm2017")}zE();var KE="firebase",WE="9.9.0";/**
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
 */Ye(KE,WE,"app");const QE={apiKey:"AIzaSyCx8gcO3r0iNVXuEStVVhOdaxKaoMPwlz4",authDomain:"ema-credit-card-approval.firebaseapp.com",projectId:"ema-credit-card-approval",storageBucket:"ema-credit-card-approval.appspot.com",messagingSenderId:"959663946450",appId:"1:959663946450:web:9a7eeff2784c30298d0b0b",measurementId:"G-7NZSYDJQ7S"},Da=Tp(QE),Bt=kg(Da),fs=gw(Da),XE=HE(Da);function YE(t){let e;return{c(){e=W("Login")},m(n,s){K(n,e,s)},d(n){n&&z(e)}}}function JE(t){let e,n,s,r,i,o,a,c,u,l,d,h,f,p,m,y,D,S,O;function N(I){t[6](I)}let L={name:"email"};t[0]!==void 0&&(L.value=t[0]),a=new ho({props:L}),We.push(()=>at(a,"value",N)),a.$on("input",t[3]);function g(I){t[7](I)}let b={name:"password"};return t[1]!==void 0&&(b.value=t[1]),h=new hf({props:b}),We.push(()=>at(h,"value",g)),h.$on("input",t[4]),m=new lo({props:{$$slots:{default:[YE]},$$scope:{ctx:t}}}),m.$on("click",t[5]),{c(){e=k("div"),n=k("img"),r=Y(),i=k("label"),i.textContent="Email",o=Y(),ue(a.$$.fragment),u=Y(),l=k("label"),l.textContent="Contrase\xF1a",d=Y(),ue(h.$$.fragment),p=Y(),ue(m.$$.fragment),y=Y(),D=k("span"),S=W(t[2]),rr(n.src,s=Au)||w(n,"src",s),w(n,"width",128),w(n,"alt","Credit Card Approval Logo"),w(n,"class","svelte-wrmxst"),w(i,"for","email"),w(l,"for","password"),w(e,"class","container svelte-wrmxst")},m(I,_){K(I,e,_),v(e,n),v(e,r),v(e,i),v(e,o),oe(a,e,null),v(e,u),v(e,l),v(e,d),oe(h,e,null),v(e,p),oe(m,e,null),v(e,y),v(e,D),v(D,S),O=!0},p(I,[_]){const A={};!c&&_&1&&(c=!0,A.value=I[0],ot(()=>c=!1)),a.$set(A);const x={};!f&&_&2&&(f=!0,x.value=I[1],ot(()=>f=!1)),h.$set(x);const ne={};_&512&&(ne.$$scope={dirty:_,ctx:I}),m.$set(ne),(!O||_&4)&&pe(S,I[2])},i(I){O||(q(a.$$.fragment,I),q(h.$$.fragment,I),q(m.$$.fragment,I),O=!0)},o(I){X(a.$$.fragment,I),X(h.$$.fragment,I),X(m.$$.fragment,I),O=!1},d(I){I&&z(e),ae(a),ae(h),ae(m)}}}function ZE(t,e,n){let s="",r="",i="";const o=h=>{h.preventDefault();const f=h.target;n(0,s=f.value)},a=h=>{h.preventDefault();const f=h.target;n(1,r=f.value)},c=h=>{console.log("CODE: ",h.code),h.code===Pp.INVALID_PASSWORD?n(2,i="Contrase\xF1a incorrecta"):n(2,i="Error: "+h.message)},u=async()=>{try{const h=await mm(Bt,s,r);console.log("userCredential",h)}catch(h){console.error(h),c(h)}};function l(h){s=h,n(0,s)}function d(h){r=h,n(1,r)}return[s,r,i,o,a,u,l,d]}class eI extends De{constructor(e){super(),Ne(this,e,ZE,JE,be,{})}}function tI(t){let e,n,s,r,i,o;return{c(){e=k("div"),n=k("div"),s=k("a"),r=k("img"),o=W(`
      Emax`),w(r,"class","logo svelte-vvzr8z"),rr(r.src,i=Au)||w(r,"src",i),w(r,"alt","This website logo"),w(s,"href","#logo"),w(s,"class","header item"),w(n,"class","ui container"),w(e,"class","ui fixed inverted menu svelte-vvzr8z")},m(a,c){K(a,e,c),v(e,n),v(n,s),v(s,r),v(s,o)},p:le,i:le,o:le,d(a){a&&z(e)}}}class Bd extends De{constructor(e){super(),Ne(this,e,null,tI,be,{})}}const nI=window.$;function sI(t){let e,n,s,r,i,o,a,c,u,l,d,h,f,p,m,y,D,S;const O=t[7].default,N=yu(O,t,t[6],null);return{c(){e=k("div"),n=k("i"),s=Y(),r=k("div"),i=W(t[0]),o=Y(),a=k("div"),c=k("div"),N&&N.c(),u=Y(),l=k("div"),d=k("div"),h=W(t[1]),f=Y(),p=k("div"),m=W(t[2]),y=Y(),D=k("i"),w(n,"class","close icon"),w(r,"class","header"),w(c,"class","description"),w(a,"class","content"),w(d,"class","ui black deny button"),w(D,"class","checkmark icon"),w(p,"class","ui positive right labeled icon button"),w(l,"class","actions"),w(e,"class","ui modal"),w(e,"id",t[3])},m(L,g){K(L,e,g),v(e,n),v(e,s),v(e,r),v(r,i),v(e,o),v(e,a),v(a,c),N&&N.m(c,null),v(e,u),v(e,l),v(l,d),v(d,h),v(l,f),v(l,p),v(p,m),v(p,y),v(p,D),S=!0},p(L,[g]){(!S||g&1)&&pe(i,L[0]),N&&N.p&&(!S||g&64)&&wu(N,O,L,L[6],S?_u(O,L[6],g,null):Eu(L[6]),null),(!S||g&2)&&pe(h,L[1]),(!S||g&4)&&pe(m,L[2]),(!S||g&8)&&w(e,"id",L[3])},i(L){S||(q(N,L),S=!0)},o(L){X(N,L),S=!1},d(L){L&&z(e),N&&N.d(L)}}}function rI(t,e,n){let{$$slots:s={},$$scope:r}=e,{shown:i}=e,{title:o="A Modal"}=e,{denyText:a="Nope"}=e,{acceptText:c="Yep"}=e,{name:u}=e;const l=bu();let d;return Tu(()=>{n(5,d=nI(`#${u}`)),n(5,d=d.modal({onApprove:()=>{console.log("Modal approved!"),l("approve")},onDeny:()=>{console.log("Modal denied!"),l("deny")},onShow:()=>{n(4,i=!0)},onVisible:()=>{n(4,i=!0)},onHide:()=>{n(4,i=!1)},onHidden:()=>{n(4,i=!1)}}))}),t.$$set=h=>{"shown"in h&&n(4,i=h.shown),"title"in h&&n(0,o=h.title),"denyText"in h&&n(1,a=h.denyText),"acceptText"in h&&n(2,c=h.acceptText),"name"in h&&n(3,u=h.name),"$$scope"in h&&n(6,r=h.$$scope)},t.$$.update=()=>{t.$$.dirty&48&&i&&d.modal("show")},[o,a,c,u,i,d,r,s]}class $d extends De{constructor(e){super(),Ne(this,e,rI,sI,be,{shown:4,title:0,denyText:1,acceptText:2,name:3})}}function au(t,e,n){const s=t.slice();return s[3]=e[n],s}function cu(t){let e,n=t[3]+"",s,r;return{c(){e=k("option"),s=W(n),e.__value=r=t[3],e.value=e.__value},m(i,o){K(i,e,o),v(e,s)},p(i,o){o&2&&n!==(n=i[3]+"")&&pe(s,n),o&2&&r!==(r=i[3])&&(e.__value=r,e.value=e.__value)},d(i){i&&z(e)}}}function iI(t){let e,n,s,r=t[1],i=[];for(let o=0;o<r.length;o+=1)i[o]=cu(au(t,r,o));return{c(){e=k("select");for(let o=0;o<i.length;o+=1)i[o].c();w(e,"name",""),w(e,"id",""),w(e,"class","svelte-ok422l"),t[0]===void 0&&or(()=>t[2].call(e))},m(o,a){K(o,e,a);for(let c=0;c<i.length;c+=1)i[c].m(e,null);Ma(e,t[0]),n||(s=He(e,"change",t[2]),n=!0)},p(o,[a]){if(a&2){r=o[1];let c;for(c=0;c<r.length;c+=1){const u=au(o,r,c);i[c]?i[c].p(u,a):(i[c]=cu(u),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=r.length}a&3&&Ma(e,o[0])},i:le,o:le,d(o){o&&z(e),co(i,o),n=!1,s()}}}function oI(t,e,n){let{items:s}=e,{value:r}=e;function i(){r=Jd(this),n(0,r),n(1,s)}return t.$$set=o=>{"items"in o&&n(1,s=o.items),"value"in o&&n(0,r=o.value)},[r,s,i]}class aI extends De{constructor(e){super(),Ne(this,e,oI,iI,be,{items:1,value:0})}}var cI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},jd={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(cI,function(){return function(n){var s={};function r(i){if(s[i])return s[i].exports;var o=s[i]={i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=s,r.d=function(i,o,a){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:a})},r.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(1&o&&(i=r(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var c in i)r.d(a,c,function(u){return i[u]}.bind(null,c));return a},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=0)}([function(n,s,r){var i;function o(g){return["image/png","image/jpeg","image/gif"].some(b=>b===g)}r.r(s),r.d(s,"canvastoDataURL",function(){return c}),r.d(s,"canvastoFile",function(){return u}),r.d(s,"dataURLtoFile",function(){return d}),r.d(s,"dataURLtoImage",function(){return h}),r.d(s,"downloadFile",function(){return f}),r.d(s,"filetoDataURL",function(){return p}),r.d(s,"imagetoCanvas",function(){return y}),r.d(s,"urltoBlob",function(){return D}),r.d(s,"urltoImage",function(){return S}),r.d(s,"compress",function(){return N}),r.d(s,"compressAccurately",function(){return L}),r.d(s,"EImageType",function(){return i}),function(g){g.PNG="image/png",g.JPEG="image/jpeg",g.GIF="image/gif"}(i||(i={}));var a=function(g,b,I,_){return new(I||(I=Promise))(function(A,x){function ne(B){try{F(_.next(B))}catch(V){x(V)}}function se(B){try{F(_.throw(B))}catch(V){x(V)}}function F(B){var V;B.done?A(B.value):(V=B.value,V instanceof I?V:new I(function(we){we(V)})).then(ne,se)}F((_=_.apply(g,b||[])).next())})};function c(g,b=.92,I=i.JPEG){return a(this,void 0,void 0,function*(){return o(I)||(I=i.JPEG),g.toDataURL(I,b)})}function u(g,b=.92,I=i.JPEG){return new Promise(_=>g.toBlob(A=>_(A),I,b))}var l=function(g,b,I,_){return new(I||(I=Promise))(function(A,x){function ne(B){try{F(_.next(B))}catch(V){x(V)}}function se(B){try{F(_.throw(B))}catch(V){x(V)}}function F(B){var V;B.done?A(B.value):(V=B.value,V instanceof I?V:new I(function(we){we(V)})).then(ne,se)}F((_=_.apply(g,b||[])).next())})};function d(g,b){return l(this,void 0,void 0,function*(){const I=g.split(",");let _=I[0].match(/:(.*?);/)[1];const A=atob(I[1]);let x=A.length;const ne=new Uint8Array(x);for(;x--;)ne[x]=A.charCodeAt(x);return o(b)&&(_=b),new Blob([ne],{type:_})})}function h(g){return new Promise((b,I)=>{const _=new Image;_.onload=()=>b(_),_.onerror=()=>I(new Error("dataURLtoImage(): dataURL is illegal")),_.src=g})}function f(g,b){const I=document.createElement("a");I.href=window.URL.createObjectURL(g),I.download=b||Date.now().toString(36),document.body.appendChild(I);const _=document.createEvent("MouseEvents");_.initEvent("click",!1,!1),I.dispatchEvent(_),document.body.removeChild(I)}function p(g){return new Promise(b=>{const I=new FileReader;I.onloadend=_=>b(_.target.result),I.readAsDataURL(g)})}var m=function(g,b,I,_){return new(I||(I=Promise))(function(A,x){function ne(B){try{F(_.next(B))}catch(V){x(V)}}function se(B){try{F(_.throw(B))}catch(V){x(V)}}function F(B){var V;B.done?A(B.value):(V=B.value,V instanceof I?V:new I(function(we){we(V)})).then(ne,se)}F((_=_.apply(g,b||[])).next())})};function y(g,b={}){return m(this,void 0,void 0,function*(){const I=Object.assign({},b),_=document.createElement("canvas"),A=_.getContext("2d");let x,ne;for(const se in I)Object.prototype.hasOwnProperty.call(I,se)&&(I[se]=Number(I[se]));if(I.scale){const se=I.scale>0&&I.scale<10?I.scale:1;ne=g.width*se,x=g.height*se}else ne=I.width||I.height*g.width/g.height||g.width,x=I.height||I.width*g.height/g.width||g.height;switch([5,6,7,8].some(se=>se===I.orientation)?(_.height=ne,_.width=x):(_.height=x,_.width=ne),I.orientation){case 3:A.rotate(180*Math.PI/180),A.drawImage(g,-_.width,-_.height,_.width,_.height);break;case 6:A.rotate(90*Math.PI/180),A.drawImage(g,0,-_.width,_.height,_.width);break;case 8:A.rotate(270*Math.PI/180),A.drawImage(g,-_.height,0,_.height,_.width);break;case 2:A.translate(_.width,0),A.scale(-1,1),A.drawImage(g,0,0,_.width,_.height);break;case 4:A.translate(_.width,0),A.scale(-1,1),A.rotate(180*Math.PI/180),A.drawImage(g,-_.width,-_.height,_.width,_.height);break;case 5:A.translate(_.width,0),A.scale(-1,1),A.rotate(90*Math.PI/180),A.drawImage(g,0,-_.width,_.height,_.width);break;case 7:A.translate(_.width,0),A.scale(-1,1),A.rotate(270*Math.PI/180),A.drawImage(g,-_.height,0,_.height,_.width);break;default:A.drawImage(g,0,0,_.width,_.height)}return _})}function D(g){return fetch(g).then(b=>b.blob())}function S(g){return new Promise((b,I)=>{const _=new Image;_.onload=()=>b(_),_.onerror=()=>I(new Error("urltoImage(): Image failed to load, please check the image URL")),_.src=g})}var O=function(g,b,I,_){return new(I||(I=Promise))(function(A,x){function ne(B){try{F(_.next(B))}catch(V){x(V)}}function se(B){try{F(_.throw(B))}catch(V){x(V)}}function F(B){var V;B.done?A(B.value):(V=B.value,V instanceof I?V:new I(function(we){we(V)})).then(ne,se)}F((_=_.apply(g,b||[])).next())})};function N(g,b={}){return O(this,void 0,void 0,function*(){if(!(g instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if(typeof b!="object"&&(b=Object.assign({quality:b})),b.quality=Number(b.quality),Number.isNaN(b.quality))return g;const I=yield p(g);let _=I.split(",")[0].match(/:(.*?);/)[1],A=i.JPEG;o(b.type)&&(A=b.type,_=b.type);const x=yield h(I),ne=yield y(x,Object.assign({},b)),se=yield c(ne,b.quality,A),F=yield d(se,_);return F.size>g.size?g:F})}function L(g,b={}){return O(this,void 0,void 0,function*(){if(!(g instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if(typeof b!="object"&&(b=Object.assign({size:b})),b.size=Number(b.size),Number.isNaN(b.size)||1024*b.size>g.size)return g;b.accuracy=Number(b.accuracy),(!b.accuracy||b.accuracy<.8||b.accuracy>.99)&&(b.accuracy=.95);const I=b.size*(2-b.accuracy)*1024,_=1024*b.size,A=b.size*b.accuracy*1024,x=yield p(g);let ne=x.split(",")[0].match(/:(.*?);/)[1],se=i.JPEG;o(b.type)&&(se=b.type,ne=b.type);const F=yield h(x),B=yield y(F,Object.assign({},b));let V,we=.5;const Zt=[null,null];for(let Le=1;Le<=7;Le++){V=yield c(B,we,se);const Us=.75*V.length;if(Le===7){(I<Us||A>Us)&&(V=[V,...Zt].filter(ai=>ai).sort((ai,Gd)=>Math.abs(.75*ai.length-_)-Math.abs(.75*Gd.length-_))[0]);break}if(I<Us)Zt[1]=V,we-=Math.pow(.5,Le+1);else{if(!(A>Us))break;Zt[0]=V,we+=Math.pow(.5,Le+1)}}const dt=yield d(V,ne);return dt.size>g.size?g:dt})}}])})})(jd);var uI=jd.exports;const lI=async t=>uI.compressAccurately(t,{size:50,accuracy:.8,scale:1}),hI=async(t,e)=>{const n=qE(XE,`user-images/${e}`),s=await lI(t);return await $E(n,s),jE(n)},dI=t=>Math.floor(Math.random()*t),fI=t=>{const e="a".charCodeAt(0),n=26;let s="";for(let r=0;r<t;r++){const i=e+dI(n);s+=String.fromCharCode(i)}return s},tn=[];function Oa(t,e){return{subscribe:pI(t,e).subscribe}}function pI(t,e=le){let n;const s=new Set;function r(a){if(be(t,a)&&(t=a,n)){const c=!tn.length;for(const u of s)u[1](),tn.push(u,t);if(c){for(let u=0;u<tn.length;u+=2)tn[u][0](tn[u+1]);tn.length=0}}}function i(a){r(a(t))}function o(a,c=le){const u=[a,c];return s.add(u),s.size===1&&(n=e(r)||le),a(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:o}}const mI=Oa(["Motorola Hiper","Motorola Del Siglo","Motorola Alto","TechStore Del Bosque","Claro Hiper","Claro San Mart\xEDn","Claro Peatonal","Claro Alto"]);function gI(t){let e,n,s,r,i,o,a,c,u,l;function d(m){t[8](m)}let h={name:"lote"};t[2]!==void 0&&(h.value=t[2]),s=new ho({props:h}),We.push(()=>at(s,"value",d));function f(m){t[9](m)}let p={items:t[4]};return t[3]!==void 0&&(p.value=t[3]),c=new aI({props:p}),We.push(()=>at(c,"value",f)),{c(){e=k("label"),e.textContent="N\xFAmero de lote",n=Y(),ue(s.$$.fragment),i=Y(),o=k("label"),o.textContent="Local",a=Y(),ue(c.$$.fragment),w(e,"for",""),w(e,"class","svelte-1l42czz"),w(o,"for",""),w(o,"class","svelte-1l42czz")},m(m,y){K(m,e,y),K(m,n,y),oe(s,m,y),K(m,i,y),K(m,o,y),K(m,a,y),oe(c,m,y),l=!0},p(m,y){const D={};!r&&y&4&&(r=!0,D.value=m[2],ot(()=>r=!1)),s.$set(D);const S={};y&16&&(S.items=m[4]),!u&&y&8&&(u=!0,S.value=m[3],ot(()=>u=!1)),c.$set(S)},i(m){l||(q(s.$$.fragment,m),q(c.$$.fragment,m),l=!0)},o(m){X(s.$$.fragment,m),X(c.$$.fragment,m),l=!1},d(m){m&&z(e),m&&z(n),ae(s,m),m&&z(i),m&&z(o),m&&z(a),ae(c,m)}}}function yI(t){let e,n,s,r,i,o,a,c,u,l;function d(f){t[10](f)}let h={name:"modal1",title:"Nuevo Ticket",acceptText:"Subir",denyText:"Cancelar",$$slots:{default:[gI]},$$scope:{ctx:t}};return t[1]!==void 0&&(h.shown=t[1]),o=new $d({props:h}),We.push(()=>at(o,"shown",d)),o.$on("approve",t[6]),{c(){e=k("div"),n=k("input"),s=Y(),r=k("label"),r.innerHTML=`Nuevo Ticket
    <i class="plus icon"></i>`,i=Y(),ue(o.$$.fragment),w(n,"type","file"),w(n,"id","file-input"),w(n,"accept","image/*"),w(n,"capture","environment"),w(n,"class","svelte-1l42czz"),w(r,"for","file-input"),w(r,"class","ui inverted positive right labeled icon button svelte-1l42czz"),w(e,"id","file-input-container"),w(e,"class","svelte-1l42czz")},m(f,p){K(f,e,p),v(e,n),v(e,s),v(e,r),K(f,i,p),oe(o,f,p),c=!0,u||(l=[He(n,"change",t[7]),He(n,"change",t[5])],u=!0)},p(f,[p]){const m={};p&4124&&(m.$$scope={dirty:p,ctx:f}),!a&&p&2&&(a=!0,m.shown=f[1],ot(()=>a=!1)),o.$set(m)},i(f){c||(q(o.$$.fragment,f),c=!0)},o(f){X(o.$$.fragment,f),c=!1},d(f){f&&z(e),f&&z(i),ae(o,f),u=!1,ht(l)}}}function vI(t,e,n){let s;ao(t,mI,m=>n(4,s=m));let r,i=!1,o="",a="";const c=()=>{r&&r[0]&&n(1,i=!0)},u=async m=>{const y=ro(_a(fs,"tickets"));return Mw(y,{...m,id:y.id})},l=()=>{if(r&&r[0]){const m=Bt.currentUser.uid+"-id-"+fI(7);hI(r[0],m).then(y=>{const D={id:"",filename:m,business_name:o,state:P.PENDING,created_at:Number(new Date),updated_at:Number(new Date),marketplace:a,creator_email:Bt.currentUser.email,creator_uid:Bt.currentUser.uid,src:y};return u(D)}).then(()=>{console.log("Finalmente, todo subido lindito, na locura")}).catch(y=>{console.log("There was a problem uploading the file.",y)}).finally(()=>{n(2,o="")})}n(0,r=null),n(1,i=!1)};function d(){r=this.files,n(0,r)}function h(m){o=m,n(2,o)}function f(m){a=m,n(3,a)}function p(m){i=m,n(1,i)}return[r,i,o,a,s,c,l,d,h,f,p]}class _I extends De{constructor(e){super(),Ne(this,e,vI,yI,be,{})}}function uu(t){let e,n,s;return n=new lo({props:{layout:Xn.DANGER,$$slots:{default:[wI]},$$scope:{ctx:t}}}),n.$on("click",t[6]),{c(){e=k("div"),ue(n.$$.fragment),w(e,"class","column")},m(r,i){K(r,e,i),oe(n,e,null),s=!0},p(r,i){const o={};i&32776&&(o.$$scope={dirty:i,ctx:r}),n.$set(o)},i(r){s||(q(n.$$.fragment,r),s=!0)},o(r){X(n.$$.fragment,r),s=!1},d(r){r&&z(e),ae(n)}}}function wI(t){let e;return{c(){e=W(t[3])},m(n,s){K(n,e,s)},p(n,s){s&8&&pe(e,n[3])},d(n){n&&z(e)}}}function lu(t){let e,n,s;return n=new lo({props:{$$slots:{default:[EI]},$$scope:{ctx:t}}}),n.$on("click",t[5]),{c(){e=k("div"),ue(n.$$.fragment),w(e,"class","column")},m(r,i){K(r,e,i),oe(n,e,null),s=!0},p(r,i){const o={};i&32784&&(o.$$scope={dirty:i,ctx:r}),n.$set(o)},i(r){s||(q(n.$$.fragment,r),s=!0)},o(r){X(n.$$.fragment,r),s=!1},d(r){r&&z(e),ae(n)}}}function EI(t){let e;return{c(){e=W(t[4])},m(n,s){K(n,e,s)},p(n,s){s&16&&pe(e,n[4])},d(n){n&&z(e)}}}function II(t){let e,n,s,r,i;function o(c){t[9](c)}let a={name:"observation"};return t[1]!==void 0&&(a.value=t[1]),s=new ho({props:a}),We.push(()=>at(s,"value",o)),{c(){e=k("label"),e.textContent="Observaci\xF3n:",n=Y(),ue(s.$$.fragment),w(e,"for","")},m(c,u){K(c,e,u),K(c,n,u),oe(s,c,u),i=!0},p(c,u){const l={};!r&&u&2&&(r=!0,l.value=c[1],ot(()=>r=!1)),s.$set(l)},i(c){i||(q(s.$$.fragment,c),i=!0)},o(c){X(s.$$.fragment,c),i=!1},d(c){c&&z(e),c&&z(n),ae(s,c)}}}function TI(t){let e,n,s,r,i,o,a,c=t[3]&&uu(t),u=t[4]&&lu(t);function l(h){t[10](h)}let d={name:"modal2",title:"Lote: "+t[0].business_name,acceptText:t[3],denyText:"Cancelar",$$slots:{default:[II]},$$scope:{ctx:t}};return t[2]!==void 0&&(d.shown=t[2]),i=new $d({props:d}),We.push(()=>at(i,"shown",l)),i.$on("approve",t[7]),{c(){e=k("div"),n=k("div"),c&&c.c(),s=Y(),u&&u.c(),r=Y(),ue(i.$$.fragment),w(n,"class","row"),w(e,"class","ui grid equal width")},m(h,f){K(h,e,f),v(e,n),c&&c.m(n,null),v(n,s),u&&u.m(n,null),K(h,r,f),oe(i,h,f),a=!0},p(h,[f]){h[3]?c?(c.p(h,f),f&8&&q(c,1)):(c=uu(h),c.c(),q(c,1),c.m(n,s)):c&&(hn(),X(c,1,1,()=>{c=null}),dn()),h[4]?u?(u.p(h,f),f&16&&q(u,1)):(u=lu(h),u.c(),q(u,1),u.m(n,null)):u&&(hn(),X(u,1,1,()=>{u=null}),dn());const p={};f&1&&(p.title="Lote: "+h[0].business_name),f&8&&(p.acceptText=h[3]),f&32770&&(p.$$scope={dirty:f,ctx:h}),!o&&f&4&&(o=!0,p.shown=h[2],ot(()=>o=!1)),i.$set(p)},i(h){a||(q(c),q(u),q(i.$$.fragment,h),a=!0)},o(h){X(c),X(u),X(i.$$.fragment,h),a=!1},d(h){h&&z(e),c&&c.d(),u&&u.d(),h&&z(r),ae(i,h)}}}function bI(t,e,n){let s,r,{state:i}=e,{ticket:o}=e,a,c=!1;const u={[P.PENDING]:"Aprobar",[P.ALERT]:"Aprobar",[P.APPROVED]:"",[P.CANCELLED]:"Marcar como pendiente"},l={[P.PENDING]:"Alertar",[P.ALERT]:"Cancelar",[P.APPROVED]:"Alertar",[P.CANCELLED]:""},d={[P.PENDING]:P.ALERT,[P.ALERT]:P.CANCELLED,[P.APPROVED]:P.ALERT},h={[P.PENDING]:P.APPROVED,[P.ALERT]:P.APPROVED,[P.CANCELLED]:P.PENDING},f=async()=>{const S=ro(fs,`tickets/${o.id}`),O=o;O.state=h[i],await tu(S,{...O}),n(2,c=!1),n(1,a="")},p=()=>{n(2,c=!0)},m=async()=>{const S=ro(fs,`tickets/${o.id}`),O=o;O.state=d[i],O.state===P.ALERT&&(O.alert_reason=a),O.state===P.CANCELLED&&(O.cancel_reason=a),await tu(S,{...O}),n(2,c=!1),n(1,a="")};function y(S){a=S,n(1,a)}function D(S){c=S,n(2,c)}return t.$$set=S=>{"state"in S&&n(8,i=S.state),"ticket"in S&&n(0,o=S.ticket)},t.$$.update=()=>{t.$$.dirty&256&&n(4,s=u[i]),t.$$.dirty&256&&n(3,r=l[i])},[o,a,c,r,s,f,p,m,i,y,D]}class SI extends De{constructor(e){super(),Ne(this,e,bI,TI,be,{state:8,ticket:0})}}const AI=t=>t.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),kI=t=>{const e=t.toLocaleDateString("es-AR",{day:"2-digit"}),n=t.toLocaleDateString("es-AR",{month:"2-digit"}),s=t.toLocaleDateString("es-AR",{year:"numeric"});return`${e}/${n}/${s}`},Rr=t=>{const e=new Date(t);return kI(e)+" a las "+AI(e)};function CI(t){let e,n,s,r,i=t[0].alert_reason+"",o;return{c(){e=k("div"),n=k("span"),s=k("em"),r=W(" En alerta: "),o=W(i),w(s,"data-emoji","warning"),w(e,"class","extra content")},m(a,c){K(a,e,c),v(e,n),v(n,s),v(n,r),v(n,o)},p(a,c){c&1&&i!==(i=a[0].alert_reason+"")&&pe(o,i)},d(a){a&&z(e)}}}function RI(t){let e,n,s,r,i=t[0].cancel_reason+"",o;return{c(){e=k("div"),n=k("span"),s=k("em"),r=W(" Cancelado: "),o=W(i),w(s,"data-emoji","x"),w(e,"class","extra content")},m(a,c){K(a,e,c),v(e,n),v(n,s),v(n,r),v(n,o)},p(a,c){c&1&&i!==(i=a[0].cancel_reason+"")&&pe(o,i)},d(a){a&&z(e)}}}function hu(t){let e,n;return e=new SI({props:{ticket:t[0],state:t[0].state}}),{c(){ue(e.$$.fragment)},m(s,r){oe(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.ticket=s[0]),r&1&&(i.state=s[0].state),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function NI(t){var ne,se;let e,n,s,r,i,o,a,c,u=((ne=t[0])==null?void 0:ne.business_name)+"",l,d,h,f,p,m=Rr((se=t[0])==null?void 0:se.created_at)+"",y,D,S,O,N,L,g,b;function I(F,B){if(F[0].cancel_reason&&F[0].state===P.CANCELLED)return RI;if(F[0].alert_reason&&F[0].state===P.ALERT)return CI}let _=I(t),A=_&&_(t),x=t[3]&&hu(t);return{c(){e=k("div"),n=k("div"),s=k("img"),i=Y(),o=k("div"),a=k("span"),c=W("Lote: "),l=W(u),d=Y(),h=k("div"),f=k("span"),p=W("Creado: "),y=W(m),D=Y(),A&&A.c(),O=Y(),x&&x.c(),N=Xd(),rr(s.src,r=t[2])||w(s,"src",r),w(s,"alt","Current ticket"),w(n,"class","image"),w(a,"class","header"),w(f,"class","date"),w(h,"class","meta"),w(o,"class","content"),w(e,"class",S="ui fluid card "+(t[1]?"":"loading"))},m(F,B){K(F,e,B),v(e,n),v(n,s),v(e,i),v(e,o),v(o,a),v(a,c),v(a,l),v(o,d),v(o,h),v(h,f),v(f,p),v(f,y),v(e,D),A&&A.m(e,null),K(F,O,B),x&&x.m(F,B),K(F,N,B),L=!0,g||(b=He(s,"load",t[4]),g=!0)},p(F,[B]){var V,we;(!L||B&4&&!rr(s.src,r=F[2]))&&w(s,"src",r),(!L||B&1)&&u!==(u=((V=F[0])==null?void 0:V.business_name)+"")&&pe(l,u),(!L||B&1)&&m!==(m=Rr((we=F[0])==null?void 0:we.created_at)+"")&&pe(y,m),_===(_=I(F))&&A?A.p(F,B):(A&&A.d(1),A=_&&_(F),A&&(A.c(),A.m(e,null))),(!L||B&2&&S!==(S="ui fluid card "+(F[1]?"":"loading")))&&w(e,"class",S),F[3]?x?(x.p(F,B),B&8&&q(x,1)):(x=hu(F),x.c(),q(x,1),x.m(N.parentNode,N)):x&&(hn(),X(x,1,1,()=>{x=null}),dn())},i(F){L||(q(x),L=!0)},o(F){X(x),L=!1},d(F){F&&z(e),A&&A.d(),F&&z(O),x&&x.d(F),F&&z(N),g=!1,b()}}}function DI(t,e,n){let{ticket:s}=e,r=!1,i;const o=()=>{console.log("Termin\xF3 de cargarse...!"),n(1,r=!0)};let a=!1;return Tu(async()=>{const c=await Bt.currentUser.getIdTokenResult();n(3,a=Boolean(c.claims.admin))}),t.$$set=c=>{"ticket"in c&&n(0,s=c.ticket)},t.$$.update=()=>{t.$$.dirty&1&&(console.log("La prop cambi\xF3!"),n(1,r=!1),n(2,i=s.src))},[s,r,i,a,o]}class qd extends De{constructor(e){super(),Ne(this,e,DI,NI,be,{ticket:0})}}function du(t,e,n){const s=t.slice();return s[1]=e[n],s}function fu(t){let e,n;return e=new qd({props:{ticket:t[1]}}),{c(){ue(e.$$.fragment)},m(s,r){oe(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.ticket=s[1]),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function OI(t){let e,n,s=t[0],r=[];for(let o=0;o<s.length;o+=1)r[o]=fu(du(t,s,o));const i=o=>X(r[o],1,1,()=>{r[o]=null});return{c(){e=k("div");for(let o=0;o<r.length;o+=1)r[o].c();w(e,"class","ui container")},m(o,a){K(o,e,a);for(let c=0;c<r.length;c+=1)r[c].m(e,null);n=!0},p(o,[a]){if(a&1){s=o[0];let c;for(c=0;c<s.length;c+=1){const u=du(o,s,c);r[c]?(r[c].p(u,a),q(r[c],1)):(r[c]=fu(u),r[c].c(),q(r[c],1),r[c].m(e,null))}for(hn(),c=s.length;c<r.length;c+=1)i(c);dn()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)q(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)X(r[a]);n=!1},d(o){o&&z(e),co(r,o)}}}function LI(t,e,n){let{tickets:s}=e;return t.$$set=r=>{"tickets"in r&&n(0,s=r.tickets)},[s]}class PI extends De{constructor(e){super(),Ne(this,e,LI,OI,be,{tickets:0})}}const MI=Oa([],t=>{const e=vd(_a(fs,"tickets"),Nw("creator_uid","==",Bt.currentUser.uid));return Ed(e,async s=>{const r=[];s.forEach(i=>{r.push(i.data())}),r.sort((i,o)=>o.created_at-i.created_at),t(r)})});function UI(t){let e,n,s,r,i=t[1][P.PENDING]+"",o,a,c,u,l,d,h,f=t[1][P.ALERT]+"",p,m,y,D,S,O,N,L=t[1][P.APPROVED]+"",g,b,I,_,A,x,ne,se=t[1][P.CANCELLED]+"",F,B,V,we,Zt;return{c(){e=k("div"),n=k("span"),s=k("em"),r=W("Pendientes ("),o=W(i),a=W(")"),u=Y(),l=k("span"),d=k("em"),h=W("En Alerta ("),p=W(f),m=W(")"),D=Y(),S=k("span"),O=k("em"),N=W("Aprobados ("),g=W(L),b=W(")"),_=Y(),A=k("span"),x=k("em"),ne=W("Cancelados ("),F=W(se),B=W(")"),w(s,"data-emoji","hourglass"),w(s,"class","svelte-6jeuwh"),w(n,"class",c=t[0]===P.PENDING?"item active":"item"),w(n,"data-tab","first"),w(d,"data-emoji","rotating_light"),w(d,"class","svelte-6jeuwh"),w(l,"class",y=t[0]===P.ALERT?"item active":"item"),w(l,"data-tab","second"),w(O,"data-emoji","white_check_mark"),w(O,"class","svelte-6jeuwh"),w(S,"class",I=t[0]===P.APPROVED?"item active":"item"),w(S,"data-tab","third"),w(x,"data-emoji","x"),w(x,"class","svelte-6jeuwh"),w(A,"class",V=t[0]===P.CANCELLED?"item active":"item"),w(A,"data-tab","fourth"),w(e,"class","ui stackable container menu")},m(dt,Le){K(dt,e,Le),v(e,n),v(n,s),v(n,r),v(n,o),v(n,a),v(e,u),v(e,l),v(l,d),v(l,h),v(l,p),v(l,m),v(e,D),v(e,S),v(S,O),v(S,N),v(S,g),v(S,b),v(e,_),v(e,A),v(A,x),v(A,ne),v(A,F),v(A,B),we||(Zt=[He(n,"click",function(){Pn(t[2])&&t[2].apply(this,arguments)}),He(l,"click",function(){Pn(t[3])&&t[3].apply(this,arguments)}),He(S,"click",function(){Pn(t[4])&&t[4].apply(this,arguments)}),He(A,"click",function(){Pn(t[5])&&t[5].apply(this,arguments)})],we=!0)},p(dt,[Le]){t=dt,Le&2&&i!==(i=t[1][P.PENDING]+"")&&pe(o,i),Le&1&&c!==(c=t[0]===P.PENDING?"item active":"item")&&w(n,"class",c),Le&2&&f!==(f=t[1][P.ALERT]+"")&&pe(p,f),Le&1&&y!==(y=t[0]===P.ALERT?"item active":"item")&&w(l,"class",y),Le&2&&L!==(L=t[1][P.APPROVED]+"")&&pe(g,L),Le&1&&I!==(I=t[0]===P.APPROVED?"item active":"item")&&w(S,"class",I),Le&2&&se!==(se=t[1][P.CANCELLED]+"")&&pe(F,se),Le&1&&V!==(V=t[0]===P.CANCELLED?"item active":"item")&&w(A,"class",V)},i:le,o:le,d(dt){dt&&z(e),we=!1,ht(Zt)}}}function xI(t,e,n){let{selectedState:s}=e,{r}=e,{onPendingClick:i}=e,{onAlertedClick:o}=e,{onApprovedClick:a}=e,{onCancelledClick:c}=e;return t.$$set=u=>{"selectedState"in u&&n(0,s=u.selectedState),"r"in u&&n(1,r=u.r),"onPendingClick"in u&&n(2,i=u.onPendingClick),"onAlertedClick"in u&&n(3,o=u.onAlertedClick),"onApprovedClick"in u&&n(4,a=u.onApprovedClick),"onCancelledClick"in u&&n(5,c=u.onCancelledClick)},[s,r,i,o,a,c]}class FI extends De{constructor(e){super(),Ne(this,e,xI,UI,be,{selectedState:0,r:1,onPendingClick:2,onAlertedClick:3,onApprovedClick:4,onCancelledClick:5})}}function VI(t){let e,n;return e=new FI({props:{selectedState:t[0],r:t[1],onPendingClick:t[2],onAlertedClick:t[3],onApprovedClick:t[4],onCancelledClick:t[5]}}),{c(){ue(e.$$.fragment)},m(s,r){oe(e,s,r),n=!0},p(s,[r]){const i={};r&1&&(i.selectedState=s[0]),r&2&&(i.r=s[1]),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function BI(t,e,n){let{tickets:s}=e,{selectedState:r}=e;const i=new Map,o=()=>{n(0,r=P.PENDING)},a=()=>{n(0,r=P.ALERT)},c=()=>{n(0,r=P.APPROVED)},u=()=>{n(0,r=P.CANCELLED)};return t.$$set=l=>{"tickets"in l&&n(6,s=l.tickets),"selectedState"in l&&n(0,r=l.selectedState)},t.$$.update=()=>{t.$$.dirty&66&&(n(1,i[P.PENDING]=0,i),n(1,i[P.ALERT]=0,i),n(1,i[P.APPROVED]=0,i),n(1,i[P.CANCELLED]=0,i),s.forEach(l=>{n(1,i[l.state]++,i)}))},[r,i,o,a,c,u,s]}class Hd extends De{constructor(e){super(),Ne(this,e,BI,VI,be,{tickets:6,selectedState:0})}}function $I(t){let e,n,s,r,i,o,a,c,u,l;e=new Bd({});function d(f){t[3](f)}let h={tickets:t[1]};return t[0]!==void 0&&(h.selectedState=t[0]),r=new Hd({props:h}),We.push(()=>at(r,"selectedState",d)),a=new PI({props:{tickets:t[2]}}),u=new _I({}),{c(){ue(e.$$.fragment),n=Y(),s=k("div"),ue(r.$$.fragment),o=Y(),ue(a.$$.fragment),c=Y(),ue(u.$$.fragment),w(s,"class","main container svelte-1pxfy9x")},m(f,p){oe(e,f,p),K(f,n,p),K(f,s,p),oe(r,s,null),v(s,o),oe(a,s,null),v(s,c),oe(u,s,null),l=!0},p(f,[p]){const m={};p&2&&(m.tickets=f[1]),!i&&p&1&&(i=!0,m.selectedState=f[0],ot(()=>i=!1)),r.$set(m);const y={};p&4&&(y.tickets=f[2]),a.$set(y)},i(f){l||(q(e.$$.fragment,f),q(r.$$.fragment,f),q(a.$$.fragment,f),q(u.$$.fragment,f),l=!0)},o(f){X(e.$$.fragment,f),X(r.$$.fragment,f),X(a.$$.fragment,f),X(u.$$.fragment,f),l=!1},d(f){ae(e,f),f&&z(n),f&&z(s),ae(r),ae(a),ae(u)}}}function jI(t,e,n){let s,r;ao(t,MI,a=>n(1,r=a));let i=P.PENDING;function o(a){i=a,n(0,i)}return t.$$.update=()=>{t.$$.dirty&3&&n(2,s=r.filter(a=>a.state===i))},[i,r,s,o]}class qI extends De{constructor(e){super(),Ne(this,e,jI,$I,be,{})}}function pu(t,e,n){const s=t.slice();return s[4]=e[n],s}function mu(t){let e,n,s=Rr(t[4].created_at)+"",r,i,o,a=t[4].business_name+"",c,u,l,d=(t[4].marketplace||"No seleccionado")+"",h,f,p,m=t[4].creator_email+"",y,D,S,O;function N(){return t[2](t[4])}return{c(){e=k("tr"),n=k("td"),r=W(s),i=Y(),o=k("td"),c=W(a),u=Y(),l=k("td"),h=W(d),f=Y(),p=k("td"),y=W(m),D=Y(),w(n,"class","left aligned")},m(L,g){K(L,e,g),v(e,n),v(n,r),v(e,i),v(e,o),v(o,c),v(e,u),v(e,l),v(l,h),v(e,f),v(e,p),v(p,y),v(e,D),S||(O=He(e,"click",N),S=!0)},p(L,g){t=L,g&1&&s!==(s=Rr(t[4].created_at)+"")&&pe(r,s),g&1&&a!==(a=t[4].business_name+"")&&pe(c,a),g&1&&d!==(d=(t[4].marketplace||"No seleccionado")+"")&&pe(h,d),g&1&&m!==(m=t[4].creator_email+"")&&pe(y,m)},d(L){L&&z(e),S=!1,O()}}}function HI(t){let e,n,s,r,i=t[0],o=[];for(let a=0;a<i.length;a+=1)o[a]=mu(pu(t,i,a));return{c(){e=k("table"),n=k("thead"),n.innerHTML=`<tr><th class="left aligned">Fecha</th> 
      <th>Lote</th> 
      <th>Local</th> 
      <th>Vendedor</th></tr>`,s=Y(),r=k("tbody");for(let a=0;a<o.length;a+=1)o[a].c();w(e,"class","ui padded selectable celled right aligned table svelte-yrkkan")},m(a,c){K(a,e,c),v(e,n),v(e,s),v(e,r);for(let u=0;u<o.length;u+=1)o[u].m(r,null)},p(a,[c]){if(c&3){i=a[0];let u;for(u=0;u<i.length;u+=1){const l=pu(a,i,u);o[u]?o[u].p(l,c):(o[u]=mu(l),o[u].c(),o[u].m(r,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=i.length}},i:le,o:le,d(a){a&&z(e),co(o,a)}}}function GI(t,e,n){let{tickets:s}=e;const r=bu(),i=a=>{r("select",a)},o=a=>i(a);return t.$$set=a=>{"tickets"in a&&n(0,s=a.tickets)},[s,i,o]}class zI extends De{constructor(e){super(),Ne(this,e,GI,HI,be,{tickets:0})}}const KI=Oa([],t=>{const e=vd(_a(fs,"tickets"),Ow("created_at","desc"));return Ed(e,async s=>{const r=[];s.forEach(i=>r.push(i.data())),t(r)})});function WI(t){let e,n,s,r,i=t[4][t[0]]+"",o,a;return{c(){e=k("div"),n=k("div"),s=k("i"),r=W(`
              No hay tickets en la seccion "`),o=W(i),a=W('"'),w(s,"class","info circle icon"),w(n,"class","ui icon header"),w(e,"class","ui placeholder segment")},m(c,u){K(c,e,u),v(e,n),v(n,s),v(n,r),v(n,o),v(n,a)},p(c,u){u&1&&i!==(i=c[4][c[0]]+"")&&pe(o,i)},i:le,o:le,d(c){c&&z(e)}}}function QI(t){let e,n;return e=new qd({props:{ticket:t[3]}}),{c(){ue(e.$$.fragment)},m(s,r){oe(e,s,r),n=!0},p(s,r){const i={};r&8&&(i.ticket=s[3]),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function XI(t){let e,n,s,r,i,o,a,c,u,l,d,h,f,p,m,y;e=new Bd({});function D(g){t[6](g)}let S={tickets:t[2]};t[0]!==void 0&&(S.selectedState=t[0]),a=new Hd({props:S}),We.push(()=>at(a,"selectedState",D)),l=new zI({props:{tickets:t[1]}}),l.$on("select",t[5]);const O=[QI,WI],N=[];function L(g,b){return g[3]?0:1}return p=L(t),m=N[p]=O[p](t),{c(){ue(e.$$.fragment),n=Y(),s=k("div"),r=k("div"),i=k("div"),o=k("div"),ue(a.$$.fragment),u=Y(),ue(l.$$.fragment),d=Y(),h=k("div"),f=k("div"),m.c(),w(i,"class","column eleven wide"),w(h,"class","column five wide"),w(r,"class","row"),w(s,"class","ui main grid container svelte-1pxfy9x")},m(g,b){oe(e,g,b),K(g,n,b),K(g,s,b),v(s,r),v(r,i),v(i,o),oe(a,o,null),v(o,u),oe(l,o,null),v(r,d),v(r,h),v(h,f),N[p].m(f,null),y=!0},p(g,[b]){const I={};b&4&&(I.tickets=g[2]),!c&&b&1&&(c=!0,I.selectedState=g[0],ot(()=>c=!1)),a.$set(I);const _={};b&2&&(_.tickets=g[1]),l.$set(_);let A=p;p=L(g),p===A?N[p].p(g,b):(hn(),X(N[A],1,1,()=>{N[A]=null}),dn(),m=N[p],m?m.p(g,b):(m=N[p]=O[p](g),m.c()),q(m,1),m.m(f,null))},i(g){y||(q(e.$$.fragment,g),q(a.$$.fragment,g),q(l.$$.fragment,g),q(m),y=!0)},o(g){X(e.$$.fragment,g),X(a.$$.fragment,g),X(l.$$.fragment,g),X(m),y=!1},d(g){ae(e,g),g&&z(n),g&&z(s),ae(a),ae(l),N[p].d()}}}function YI(t,e,n){let s,r;ao(t,KI,l=>n(2,r=l));let i,o=P.PENDING;const a={[P.PENDING]:"Pendientes",[P.ALERT]:"En Alerta",[P.APPROVED]:"Aprobados",[P.CANCELLED]:"Cancelados"},c=l=>{i!=l.detail&&n(3,i=l.detail)};function u(l){o=l,n(0,o)}return t.$$.update=()=>{t.$$.dirty&5&&n(1,s=r.filter(l=>l.state===o)),t.$$.dirty&2&&n(3,i=s.length>0?s[0]:void 0)},[o,s,r,i,a,c,u]}class JI extends De{constructor(e){super(),Ne(this,e,YI,XI,be,{})}}function ZI(t){let e,n;return e=new eI({}),{c(){ue(e.$$.fragment)},m(s,r){oe(e,s,r),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function e0(t){let e,n;return e=new qI({}),{c(){ue(e.$$.fragment)},m(s,r){oe(e,s,r),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function t0(t){let e,n;return e=new JI({}),{c(){ue(e.$$.fragment)},m(s,r){oe(e,s,r),n=!0},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function n0(t){let e,n,s,r;const i=[t0,e0,ZI],o=[];function a(c,u){return c[1]?0:c[0]?1:2}return n=a(t),s=o[n]=i[n](t),{c(){e=k("main"),s.c(),w(e,"class","svelte-pirsrs")},m(c,u){K(c,e,u),o[n].m(e,null),r=!0},p(c,[u]){let l=n;n=a(c),n!==l&&(hn(),X(o[l],1,1,()=>{o[l]=null}),dn(),s=o[n],s||(s=o[n]=i[n](c),s.c()),q(s,1),s.m(e,null))},i(c){r||(q(s),r=!0)},o(c){X(s),r=!1},d(c){c&&z(e),o[n].d()}}}function s0(t,e,n){let s,r=!1;return gm(Bt,async i=>{if(i){n(0,s=i.uid);const o=await i.getIdTokenResult();n(1,r=Boolean(o.claims.admin))}else n(0,s=void 0)}),[s,r]}class r0 extends De{constructor(e){super(),Ne(this,e,s0,n0,be,{})}}new r0({target:document.getElementById("app")});

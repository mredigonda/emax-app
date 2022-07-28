const p$1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};p$1();var reset="",semanticUiAdapter="";function noop$1(){}function assign(n,e){for(const r in e)n[r]=e[r];return n}function run(n){return n()}function blank_object(){return Object.create(null)}function run_all(n){n.forEach(run)}function is_function(n){return typeof n=="function"}function safe_not_equal(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let src_url_equal_anchor;function src_url_equal(n,e){return src_url_equal_anchor||(src_url_equal_anchor=document.createElement("a")),src_url_equal_anchor.href=e,n===src_url_equal_anchor.href}function is_empty(n){return Object.keys(n).length===0}function subscribe(n,...e){if(n==null)return noop$1;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function component_subscribe(n,e,r){n.$$.on_destroy.push(subscribe(e,r))}function create_slot(n,e,r,i){if(n){const s=get_slot_context(n,e,r,i);return n[0](s)}}function get_slot_context(n,e,r,i){return n[1]&&i?assign(r.ctx.slice(),n[1](i(e))):r.ctx}function get_slot_changes(n,e,r,i){if(n[2]&&i){const s=n[2](i(r));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],c=Math.max(e.dirty.length,s.length);for(let u=0;u<c;u+=1)a[u]=e.dirty[u]|s[u];return a}return e.dirty|s}return e.dirty}function update_slot_base(n,e,r,i,s,a){if(s){const c=get_slot_context(e,r,i,a);n.p(c,s)}}function get_all_dirty_from_scope(n){if(n.ctx.length>32){const e=[],r=n.ctx.length/32;for(let i=0;i<r;i++)e[i]=-1;return e}return-1}function null_to_empty(n){return n==null?"":n}function append(n,e){n.appendChild(e)}function insert(n,e,r){n.insertBefore(e,r||null)}function detach(n){n.parentNode.removeChild(n)}function destroy_each(n,e){for(let r=0;r<n.length;r+=1)n[r]&&n[r].d(e)}function element(n){return document.createElement(n)}function text(n){return document.createTextNode(n)}function space(){return text(" ")}function empty(){return text("")}function listen(n,e,r,i){return n.addEventListener(e,r,i),()=>n.removeEventListener(e,r,i)}function attr(n,e,r){r==null?n.removeAttribute(e):n.getAttribute(e)!==r&&n.setAttribute(e,r)}function children(n){return Array.from(n.childNodes)}function set_data(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function set_input_value(n,e){n.value=e==null?"":e}function select_option(n,e){for(let r=0;r<n.options.length;r+=1){const i=n.options[r];if(i.__value===e){i.selected=!0;return}}n.selectedIndex=-1}function select_value(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function custom_event(n,e,{bubbles:r=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,r,i,e),s}let current_component;function set_current_component(n){current_component=n}function get_current_component(){if(!current_component)throw new Error("Function called outside component initialization");return current_component}function onMount(n){get_current_component().$$.on_mount.push(n)}function createEventDispatcher(){const n=get_current_component();return(e,r,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const a=custom_event(e,r,{cancelable:i});return s.slice().forEach(c=>{c.call(n,a)}),!a.defaultPrevented}return!0}}function bubble(n,e){const r=n.$$.callbacks[e.type];r&&r.slice().forEach(i=>i.call(this,e))}const dirty_components=[],binding_callbacks=[],render_callbacks=[],flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(n){render_callbacks.push(n)}function add_flush_callback(n){flush_callbacks.push(n)}const seen_callbacks=new Set;let flushidx=0;function flush(){const n=current_component;do{for(;flushidx<dirty_components.length;){const e=dirty_components[flushidx];flushidx++,set_current_component(e),update(e.$$)}for(set_current_component(null),dirty_components.length=0,flushidx=0;binding_callbacks.length;)binding_callbacks.pop()();for(let e=0;e<render_callbacks.length;e+=1){const r=render_callbacks[e];seen_callbacks.has(r)||(seen_callbacks.add(r),r())}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1,seen_callbacks.clear(),set_current_component(n)}function update(n){if(n.fragment!==null){n.update(),run_all(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(add_render_callback)}}const outroing=new Set;let outros;function group_outros(){outros={r:0,c:[],p:outros}}function check_outros(){outros.r||run_all(outros.c),outros=outros.p}function transition_in(n,e){n&&n.i&&(outroing.delete(n),n.i(e))}function transition_out(n,e,r,i){if(n&&n.o){if(outroing.has(n))return;outroing.add(n),outros.c.push(()=>{outroing.delete(n),i&&(r&&n.d(1),i())}),n.o(e)}else i&&i()}function bind(n,e,r){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=r,r(n.$$.ctx[i]))}function create_component(n){n&&n.c()}function mount_component(n,e,r,i){const{fragment:s,on_mount:a,on_destroy:c,after_update:u}=n.$$;s&&s.m(e,r),i||add_render_callback(()=>{const h=a.map(run).filter(is_function);c?c.push(...h):run_all(h),n.$$.on_mount=[]}),u.forEach(add_render_callback)}function destroy_component(n,e){const r=n.$$;r.fragment!==null&&(run_all(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function make_dirty(n,e){n.$$.dirty[0]===-1&&(dirty_components.push(n),schedule_update(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function init(n,e,r,i,s,a,c,u=[-1]){const h=current_component;set_current_component(n);const d=n.$$={fragment:null,ctx:null,props:a,update:noop$1,not_equal:s,bound:blank_object(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:blank_object(),dirty:u,skip_bound:!1,root:e.target||h.$$.root};c&&c(d.root);let f=!1;if(d.ctx=r?r(n,e.props||{},(g,m,..._)=>{const he=_.length?_[0]:m;return d.ctx&&s(d.ctx[g],d.ctx[g]=he)&&(!d.skip_bound&&d.bound[g]&&d.bound[g](he),f&&make_dirty(n,g)),m}):[],d.update(),f=!0,run_all(d.before_update),d.fragment=i?i(d.ctx):!1,e.target){if(e.hydrate){const g=children(e.target);d.fragment&&d.fragment.l(g),g.forEach(detach)}else d.fragment&&d.fragment.c();e.intro&&transition_in(n.$$.fragment),mount_component(n,e.target,e.anchor,e.customElement),flush()}set_current_component(h)}class SvelteComponent{$destroy(){destroy_component(this,1),this.$destroy=noop$1}$on(e,r){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(r),()=>{const s=i.indexOf(r);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!is_empty(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var STATE=(n=>(n.PENDING="PENDING",n.APPROVED="APPROVED",n.ALERT="ALERT",n.CANCELLED="CANCELLED",n))(STATE||{}),TYPE=(n=>(n.SUCCESS="SUCCESS",n.DANGER="DANGER",n))(TYPE||{}),Button_svelte_svelte_type_style_lang="";function create_fragment$i(n){let e,r,i,s,a;const c=n[2].default,u=create_slot(c,n,n[1],null);return{c(){e=element("button"),u&&u.c(),attr(e,"class",r=null_to_empty("ui button "+(n[0]===TYPE.SUCCESS?"positive":"negative"))+" svelte-1r0pnu3")},m(h,d){insert(h,e,d),u&&u.m(e,null),i=!0,s||(a=listen(e,"click",n[3]),s=!0)},p(h,[d]){u&&u.p&&(!i||d&2)&&update_slot_base(u,c,h,h[1],i?get_slot_changes(c,h[1],d,null):get_all_dirty_from_scope(h[1]),null),(!i||d&1&&r!==(r=null_to_empty("ui button "+(h[0]===TYPE.SUCCESS?"positive":"negative"))+" svelte-1r0pnu3"))&&attr(e,"class",r)},i(h){i||(transition_in(u,h),i=!0)},o(h){transition_out(u,h),i=!1},d(h){h&&detach(e),u&&u.d(h),s=!1,a()}}}function instance$i(n,e,r){let{$$slots:i={},$$scope:s}=e,{layout:a=TYPE.SUCCESS}=e;function c(u){bubble.call(this,n,u)}return n.$$set=u=>{"layout"in u&&r(0,a=u.layout),"$$scope"in u&&r(1,s=u.$$scope)},[a,s,i,c]}class Button extends SvelteComponent{constructor(e){super(),init(this,e,instance$i,create_fragment$i,safe_not_equal,{layout:0})}}var Input_svelte_svelte_type_style_lang="";function create_fragment$h(n){let e,r,i;return{c(){e=element("input"),attr(e,"type","text"),attr(e,"name",n[1]),attr(e,"class","svelte-g2xvdr")},m(s,a){insert(s,e,a),set_input_value(e,n[0]),r||(i=[listen(e,"input",n[3]),listen(e,"input",n[2])],r=!0)},p(s,[a]){a&2&&attr(e,"name",s[1]),a&1&&e.value!==s[0]&&set_input_value(e,s[0])},i:noop$1,o:noop$1,d(s){s&&detach(e),r=!1,run_all(i)}}}function instance$h(n,e,r){let{name:i}=e,{value:s}=e;function a(u){bubble.call(this,n,u)}function c(){s=this.value,r(0,s)}return n.$$set=u=>{"name"in u&&r(1,i=u.name),"value"in u&&r(0,s=u.value)},[s,i,a,c]}class Input extends SvelteComponent{constructor(e){super(),init(this,e,instance$h,create_fragment$h,safe_not_equal,{name:1,value:0})}}var InputPassword_svelte_svelte_type_style_lang="";function create_fragment$g(n){let e,r,i;return{c(){e=element("input"),attr(e,"type","password"),attr(e,"name",n[1]),attr(e,"class","svelte-g2xvdr")},m(s,a){insert(s,e,a),set_input_value(e,n[0]),r||(i=[listen(e,"input",n[3]),listen(e,"input",n[2])],r=!0)},p(s,[a]){a&2&&attr(e,"name",s[1]),a&1&&e.value!==s[0]&&set_input_value(e,s[0])},i:noop$1,o:noop$1,d(s){s&&detach(e),r=!1,run_all(i)}}}function instance$g(n,e,r){let{name:i}=e,{value:s}=e;function a(u){bubble.call(this,n,u)}function c(){s=this.value,r(0,s)}return n.$$set=u=>{"name"in u&&r(1,i=u.name),"value"in u&&r(0,s=u.value)},[s,i,a,c]}class InputPassword extends SvelteComponent{constructor(e){super(),init(this,e,instance$g,create_fragment$g,safe_not_equal,{name:1,value:0})}}var logo="/emax-app/assets/icon-192.f78075aa.png";/**
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
 */const stringToByteArray$1=function(n){const e=[];let r=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[r++]=s:s<2048?(e[r++]=s>>6|192,e[r++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[r++]=s>>18|240,e[r++]=s>>12&63|128,e[r++]=s>>6&63|128,e[r++]=s&63|128):(e[r++]=s>>12|224,e[r++]=s>>6&63|128,e[r++]=s&63|128)}return e},byteArrayToString=function(n){const e=[];let r=0,i=0;for(;r<n.length;){const s=n[r++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[r++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[r++],c=n[r++],u=n[r++],h=((s&7)<<18|(a&63)<<12|(c&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const a=n[r++],c=n[r++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return e.join("")},base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],c=s+1<n.length,u=c?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,f=a>>2,g=(a&3)<<4|u>>4;let m=(u&15)<<2|d>>6,_=d&63;h||(_=64,c||(m=64)),i.push(r[f],r[g],r[m],r[_])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(stringToByteArray$1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):byteArrayToString(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=r[n.charAt(s++)],u=s<n.length?r[n.charAt(s)]:0;++s;const d=s<n.length?r[n.charAt(s)]:64;++s;const g=s<n.length?r[n.charAt(s)]:64;if(++s,a==null||u==null||d==null||g==null)throw Error();const m=a<<2|u>>4;if(i.push(m),d!==64){const _=u<<4&240|d>>2;if(i.push(_),g!==64){const he=d<<6&192|g;i.push(he)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},base64Encode=function(n){const e=stringToByteArray$1(n);return base64.encodeByteArray(e,!0)},base64urlEncodeWithoutPadding=function(n){return base64Encode(n).replace(/\./g,"")},base64Decode=function(n){try{return base64.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,i)=>{r?this.reject(r):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,i))}}}/**
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
 */function getUA(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function isMobileCordova(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isBrowserExtension(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function isReactNative(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function isElectron(){return getUA().indexOf("Electron/")>=0}function isIE(){const n=getUA();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function isUWP(){return getUA().indexOf("MSAppHost/")>=0}function isIndexedDBAvailable(){return typeof indexedDB=="object"}function validateIndexedDBOpenable(){return new Promise((n,e)=>{try{let r=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
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
 */const ERROR_NAME="FirebaseError";class FirebaseError extends Error{constructor(e,r,i){super(r),this.code=e,this.customData=i,this.name=ERROR_NAME,Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}}class ErrorFactory{constructor(e,r,i){this.service=e,this.serviceName=r,this.errors=i}create(e,...r){const i=r[0]||{},s=`${this.service}/${e}`,a=this.errors[e],c=a?replaceTemplate(a,i):"Error",u=`${this.serviceName}: ${c} (${s}).`;return new FirebaseError(s,u,i)}}function replaceTemplate(n,e){return n.replace(PATTERN,(r,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const PATTERN=/\{\$([^}]+)}/g;function isEmpty(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function deepEqual(n,e){if(n===e)return!0;const r=Object.keys(n),i=Object.keys(e);for(const s of r){if(!i.includes(s))return!1;const a=n[s],c=e[s];if(isObject(a)&&isObject(c)){if(!deepEqual(a,c))return!1}else if(a!==c)return!1}for(const s of i)if(!r.includes(s))return!1;return!0}function isObject(n){return n!==null&&typeof n=="object"}/**
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
 */function querystring(n){const e=[];for(const[r,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function querystringDecode(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,a]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function extractQuerystring(n){const e=n.indexOf("?");if(!e)return"";const r=n.indexOf("#",e);return n.substring(e,r>0?r:void 0)}function createSubscribe(n,e){const r=new ObserverProxy(n,e);return r.subscribe.bind(r)}class ObserverProxy{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,i){let s;if(e===void 0&&r===void 0&&i===void 0)throw new Error("Missing Observer.");implementsAnyMethods(e,["next","error","complete"])?s=e:s={next:e,error:r,complete:i},s.next===void 0&&(s.next=noop),s.error===void 0&&(s.error=noop),s.complete===void 0&&(s.complete=noop);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function implementsAnyMethods(n,e){if(typeof n!="object"||n===null)return!1;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}function noop(){}/**
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
 */function getModularInstance(n){return n&&n._delegate?n._delegate:n}class Component{constructor(e,r,i){this.name=e,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const DEFAULT_ENTRY_NAME$1="[DEFAULT]";/**
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
 */class Provider{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const i=new Deferred;if(this.instancesDeferred.set(r,i),this.isInitialized(r)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:r});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(isComponentEager(e))try{this.getOrInitializeService({instanceIdentifier:DEFAULT_ENTRY_NAME$1})}catch{}for(const[r,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=DEFAULT_ENTRY_NAME$1){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=DEFAULT_ENTRY_NAME$1){return this.instances.has(e)}getOptions(e=DEFAULT_ENTRY_NAME$1){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:r});for(const[a,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);i===u&&c.resolve(s)}return s}onInit(e,r){var i;const s=this.normalizeInstanceIdentifier(r),a=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(s,a);const c=this.instances.get(s);return c&&e(c,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const i=this.onInitCallbacks.get(r);if(!!i)for(const s of i)try{s(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:normalizeIdentifierForFactory(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=DEFAULT_ENTRY_NAME$1){return this.component?this.component.multipleInstances?e:DEFAULT_ENTRY_NAME$1:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function normalizeIdentifierForFactory(n){return n===DEFAULT_ENTRY_NAME$1?void 0:n}function isComponentEager(n){return n.instantiationMode==="EAGER"}/**
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
 */class ComponentContainer{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Provider(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var LogLevel;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(LogLevel||(LogLevel={}));const levelStringToEnum={debug:LogLevel.DEBUG,verbose:LogLevel.VERBOSE,info:LogLevel.INFO,warn:LogLevel.WARN,error:LogLevel.ERROR,silent:LogLevel.SILENT},defaultLogLevel=LogLevel.INFO,ConsoleMethod={[LogLevel.DEBUG]:"log",[LogLevel.VERBOSE]:"log",[LogLevel.INFO]:"info",[LogLevel.WARN]:"warn",[LogLevel.ERROR]:"error"},defaultLogHandler=(n,e,...r)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ConsoleMethod[e];if(s)console[s](`[${i}]  ${n.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Logger{constructor(e){this.name=e,this._logLevel=defaultLogLevel,this._logHandler=defaultLogHandler,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in LogLevel))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?levelStringToEnum[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.DEBUG,...e),this._logHandler(this,LogLevel.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.VERBOSE,...e),this._logHandler(this,LogLevel.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.INFO,...e),this._logHandler(this,LogLevel.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.WARN,...e),this._logHandler(this,LogLevel.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.ERROR,...e),this._logHandler(this,LogLevel.ERROR,...e)}}const instanceOfAny=(n,e)=>e.some(r=>n instanceof r);let idbProxyableTypes,cursorAdvanceMethods;function getIdbProxyableTypes(){return idbProxyableTypes||(idbProxyableTypes=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return cursorAdvanceMethods||(cursorAdvanceMethods=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cursorRequestMap=new WeakMap,transactionDoneMap=new WeakMap,transactionStoreNamesMap=new WeakMap,transformCache=new WeakMap,reverseTransformCache=new WeakMap;function promisifyRequest(n){const e=new Promise((r,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{r(wrap(n.result)),s()},c=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(r=>{r instanceof IDBCursor&&cursorRequestMap.set(r,n)}).catch(()=>{}),reverseTransformCache.set(e,n),e}function cacheDonePromiseForTransaction(n){if(transactionDoneMap.has(n))return;const e=new Promise((r,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{r(),s()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});transactionDoneMap.set(n,e)}let idbProxyTraps={get(n,e,r){if(n instanceof IDBTransaction){if(e==="done")return transactionDoneMap.get(n);if(e==="objectStoreNames")return n.objectStoreNames||transactionStoreNamesMap.get(n);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return wrap(n[e])},set(n,e,r){return n[e]=r,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function replaceTraps(n){idbProxyTraps=n(idbProxyTraps)}function wrapFunction(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const i=n.call(unwrap(this),e,...r);return transactionStoreNamesMap.set(i,e.sort?e.sort():[e]),wrap(i)}:getCursorAdvanceMethods().includes(n)?function(...e){return n.apply(unwrap(this),e),wrap(cursorRequestMap.get(this))}:function(...e){return wrap(n.apply(unwrap(this),e))}}function transformCachableValue(n){return typeof n=="function"?wrapFunction(n):(n instanceof IDBTransaction&&cacheDonePromiseForTransaction(n),instanceOfAny(n,getIdbProxyableTypes())?new Proxy(n,idbProxyTraps):n)}function wrap(n){if(n instanceof IDBRequest)return promisifyRequest(n);if(transformCache.has(n))return transformCache.get(n);const e=transformCachableValue(n);return e!==n&&(transformCache.set(n,e),reverseTransformCache.set(e,n)),e}const unwrap=n=>reverseTransformCache.get(n);function openDB(n,e,{blocked:r,upgrade:i,blocking:s,terminated:a}={}){const c=indexedDB.open(n,e),u=wrap(c);return i&&c.addEventListener("upgradeneeded",h=>{i(wrap(c.result),h.oldVersion,h.newVersion,wrap(c.transaction))}),r&&c.addEventListener("blocked",()=>r()),u.then(h=>{a&&h.addEventListener("close",()=>a()),s&&h.addEventListener("versionchange",()=>s())}).catch(()=>{}),u}const readMethods=["get","getKey","getAll","getAllKeys","count"],writeMethods=["put","add","delete","clear"],cachedMethods=new Map;function getMethod(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cachedMethods.get(e))return cachedMethods.get(e);const r=e.replace(/FromIndex$/,""),i=e!==r,s=writeMethods.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!(s||readMethods.includes(r)))return;const a=async function(c,...u){const h=this.transaction(c,s?"readwrite":"readonly");let d=h.store;return i&&(d=d.index(u.shift())),(await Promise.all([d[r](...u),s&&h.done]))[0]};return cachedMethods.set(e,a),a}replaceTraps(n=>({...n,get:(e,r,i)=>getMethod(e,r)||n.get(e,r,i),has:(e,r)=>!!getMethod(e,r)||n.has(e,r)}));/**
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
 */class PlatformLoggerServiceImpl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(isVersionServiceProvider(r)){const i=r.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(r=>r).join(" ")}}function isVersionServiceProvider(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const name$o="@firebase/app",version$1$1="0.7.28";/**
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
 */const logger=new Logger("@firebase/app"),name$n="@firebase/app-compat",name$m="@firebase/analytics-compat",name$l="@firebase/analytics",name$k="@firebase/app-check-compat",name$j="@firebase/app-check",name$i="@firebase/auth",name$h="@firebase/auth-compat",name$g="@firebase/database",name$f="@firebase/database-compat",name$e="@firebase/functions",name$d="@firebase/functions-compat",name$c="@firebase/installations",name$b="@firebase/installations-compat",name$a="@firebase/messaging",name$9="@firebase/messaging-compat",name$8="@firebase/performance",name$7="@firebase/performance-compat",name$6="@firebase/remote-config",name$5="@firebase/remote-config-compat",name$4="@firebase/storage",name$3="@firebase/storage-compat",name$2$1="@firebase/firestore",name$1$1="@firebase/firestore-compat",name$p="firebase",version$3="9.9.0";/**
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
 */const DEFAULT_ENTRY_NAME="[DEFAULT]",PLATFORM_LOG_STRING={[name$o]:"fire-core",[name$n]:"fire-core-compat",[name$l]:"fire-analytics",[name$m]:"fire-analytics-compat",[name$j]:"fire-app-check",[name$k]:"fire-app-check-compat",[name$i]:"fire-auth",[name$h]:"fire-auth-compat",[name$g]:"fire-rtdb",[name$f]:"fire-rtdb-compat",[name$e]:"fire-fn",[name$d]:"fire-fn-compat",[name$c]:"fire-iid",[name$b]:"fire-iid-compat",[name$a]:"fire-fcm",[name$9]:"fire-fcm-compat",[name$8]:"fire-perf",[name$7]:"fire-perf-compat",[name$6]:"fire-rc",[name$5]:"fire-rc-compat",[name$4]:"fire-gcs",[name$3]:"fire-gcs-compat",[name$2$1]:"fire-fst",[name$1$1]:"fire-fst-compat","fire-js":"fire-js",[name$p]:"fire-js-all"};/**
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
 */const _apps=new Map,_components=new Map;function _addComponent(n,e){try{n.container.addComponent(e)}catch(r){logger.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,r)}}function _registerComponent(n){const e=n.name;if(_components.has(e))return logger.debug(`There were multiple attempts to register component ${e}.`),!1;_components.set(e,n);for(const r of _apps.values())_addComponent(r,n);return!0}function _getProvider(n,e){const r=n.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ERRORS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ERROR_FACTORY=new ErrorFactory("app","Firebase",ERRORS);/**
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
 */class FirebaseAppImpl{constructor(e,r,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ERROR_FACTORY.create("app-deleted",{appName:this._name})}}/**
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
 */const SDK_VERSION=version$3;function initializeApp(n,e={}){typeof e!="object"&&(e={name:e});const r=Object.assign({name:DEFAULT_ENTRY_NAME,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ERROR_FACTORY.create("bad-app-name",{appName:String(i)});const s=_apps.get(i);if(s){if(deepEqual(n,s.options)&&deepEqual(r,s.config))return s;throw ERROR_FACTORY.create("duplicate-app",{appName:i})}const a=new ComponentContainer(i);for(const u of _components.values())a.addComponent(u);const c=new FirebaseAppImpl(n,r,a);return _apps.set(i,c),c}function getApp(n=DEFAULT_ENTRY_NAME){const e=_apps.get(n);if(!e)throw ERROR_FACTORY.create("no-app",{appName:n});return e}function registerVersion(n,e,r){var i;let s=(i=PLATFORM_LOG_STRING[n])!==null&&i!==void 0?i:n;r&&(s+=`-${r}`);const a=s.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const u=[`Unable to register library "${s}" with version "${e}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&c&&u.push("and"),c&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),logger.warn(u.join(" "));return}_registerComponent(new Component(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const DB_NAME$1="firebase-heartbeat-database",DB_VERSION$1=1,STORE_NAME="firebase-heartbeat-store";let dbPromise=null;function getDbPromise(){return dbPromise||(dbPromise=openDB(DB_NAME$1,DB_VERSION$1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(STORE_NAME)}}}).catch(n=>{throw ERROR_FACTORY.create("storage-open",{originalErrorMessage:n.message})})),dbPromise}async function readHeartbeatsFromIndexedDB(n){var e;try{return(await getDbPromise()).transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(n))}catch(r){throw ERROR_FACTORY.create("storage-get",{originalErrorMessage:(e=r)===null||e===void 0?void 0:e.message})}}async function writeHeartbeatsToIndexedDB(n,e){var r;try{const s=(await getDbPromise()).transaction(STORE_NAME,"readwrite");return await s.objectStore(STORE_NAME).put(e,computeKey(n)),s.done}catch(i){throw ERROR_FACTORY.create("storage-set",{originalErrorMessage:(r=i)===null||r===void 0?void 0:r.message})}}function computeKey(n){return`${n.name}!${n.options.appId}`}/**
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
 */const MAX_HEADER_BYTES=1024,STORED_HEARTBEAT_RETENTION_MAX_MILLIS=30*24*60*60*1e3;class HeartbeatServiceImpl{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(r),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=getUTCDateString();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=STORED_HEARTBEAT_RETENTION_MAX_MILLIS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=getUTCDateString(),{heartbeatsToSend:r,unsentEntries:i}=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),s=base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function getUTCDateString(){return new Date().toISOString().substring(0,10)}function extractHeartbeatsForHeader(n,e=MAX_HEADER_BYTES){const r=[];let i=n.slice();for(const s of n){const a=r.find(c=>c.agent===s.agent);if(a){if(a.dates.push(s.date),countBytes(r)>e){a.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),countBytes(r)>e){r.pop();break}i=i.slice(1)}return{heartbeatsToSend:r,unsentEntries:i}}class HeartbeatStorageImpl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return isIndexedDBAvailable()?validateIndexedDBOpenable().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await readHeartbeatsFromIndexedDB(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function countBytes(n){return base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function registerCoreComponents(n){_registerComponent(new Component("platform-logger",e=>new PlatformLoggerServiceImpl(e),"PRIVATE")),_registerComponent(new Component("heartbeat",e=>new HeartbeatServiceImpl(e),"PRIVATE")),registerVersion(name$o,version$1$1,n),registerVersion(name$o,version$1$1,"esm2017"),registerVersion("fire-js","")}registerCoreComponents("");function __rest(n,e){var r={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(r[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(r[i[s]]=n[i[s]]);return r}function _prodErrorMap(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const prodErrorMap=_prodErrorMap,_DEFAULT_AUTH_ERROR_FACTORY=new ErrorFactory("auth","Firebase",_prodErrorMap()),AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"};/**
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
 */const logClient=new Logger("@firebase/auth");function _logError(n,...e){logClient.logLevel<=LogLevel.ERROR&&logClient.error(`Auth (${SDK_VERSION}): ${n}`,...e)}/**
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
 */function _fail(n,...e){throw createErrorInternal(n,...e)}function _createError(n,...e){return createErrorInternal(n,...e)}function _errorWithCustomMessage(n,e,r){const i=Object.assign(Object.assign({},prodErrorMap()),{[e]:r});return new ErrorFactory("auth","Firebase",i).create(e,{appName:n.name})}function createErrorInternal(n,...e){if(typeof n!="string"){const r=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(r,...i)}return _DEFAULT_AUTH_ERROR_FACTORY.create(n,...e)}function _assert(n,e,...r){if(!n)throw createErrorInternal(e,...r)}function debugFail(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _logError(e),new Error(e)}function debugAssert(n,e){n||debugFail(e)}/**
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
 */const instanceCache=new Map;function _getInstance(n){debugAssert(n instanceof Function,"Expected a class definition");let e=instanceCache.get(n);return e?(debugAssert(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,instanceCache.set(n,e),e)}/**
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
 */function initializeAuth(n,e){const r=_getProvider(n,"auth");if(r.isInitialized()){const s=r.getImmediate(),a=r.getOptions();if(deepEqual(a,e!=null?e:{}))return s;_fail(s,"already-initialized")}return r.initialize({options:e})}function _initializeAuthInstance(n,e){const r=(e==null?void 0:e.persistence)||[],i=(Array.isArray(r)?r:[r]).map(_getInstance);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function _getCurrentUrl(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _isHttpOrHttps(){return _getCurrentScheme()==="http:"||_getCurrentScheme()==="https:"}function _getCurrentScheme(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function _isOnline(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_isHttpOrHttps()||isBrowserExtension()||"connection"in navigator)?navigator.onLine:!0}function _getUserLanguage(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Delay{constructor(e,r){this.shortDelay=e,this.longDelay=r,debugAssert(r>e,"Short delay should be less than long delay!"),this.isMobile=isMobileCordova()||isReactNative()}get(){return _isOnline()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _emulatorUrl(n,e){debugAssert(n.emulator,"Emulator should always be set here");const{url:r}=n.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class FetchProvider{static initialize(e,r,i){this.fetchImpl=e,r&&(this.headersImpl=r),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SERVER_ERROR_MAP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const DEFAULT_API_TIMEOUT_MS=new Delay(3e4,6e4);function _addTidIfNecessary(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _performApiRequest(n,e,r,i,s={}){return _performFetchWithErrorHandling(n,s,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const u=querystring(Object.assign({key:n.config.apiKey},c)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),FetchProvider.fetch()(_getFinalTarget(n,n.config.apiHost,r,u),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},a))})}async function _performFetchWithErrorHandling(n,e,r){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},SERVER_ERROR_MAP),e);try{const s=new NetworkTimeout(n),a=await Promise.race([r(),s.promise]);s.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw _makeTaggedError(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const u=a.ok?c.errorMessage:c.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw _makeTaggedError(n,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw _makeTaggedError(n,"email-already-in-use",c);if(h==="USER_DISABLED")throw _makeTaggedError(n,"user-disabled",c);const f=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw _errorWithCustomMessage(n,f,d);_fail(n,f)}}catch(s){if(s instanceof FirebaseError)throw s;_fail(n,"network-request-failed")}}async function _performSignInRequest(n,e,r,i,s={}){const a=await _performApiRequest(n,e,r,i,s);return"mfaPendingCredential"in a&&_fail(n,"multi-factor-auth-required",{_serverResponse:a}),a}function _getFinalTarget(n,e,r,i){const s=`${e}${r}?${i}`;return n.config.emulator?_emulatorUrl(n.config,s):`${n.config.apiScheme}://${s}`}class NetworkTimeout{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,i)=>{this.timer=setTimeout(()=>i(_createError(this.auth,"network-request-failed")),DEFAULT_API_TIMEOUT_MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _makeTaggedError(n,e,r){const i={appName:n.name};r.email&&(i.email=r.email),r.phoneNumber&&(i.phoneNumber=r.phoneNumber);const s=_createError(n,e,i);return s.customData._tokenResponse=r,s}/**
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
 */async function deleteAccount(n,e){return _performApiRequest(n,"POST","/v1/accounts:delete",e)}async function getAccountInfo(n,e){return _performApiRequest(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function utcTimestampToDateString(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function getIdTokenResult(n,e=!1){const r=getModularInstance(n),i=await r.getIdToken(e),s=_parseToken(i);_assert(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:s,token:i,authTime:utcTimestampToDateString(secondsStringToMilliseconds(s.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(s.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(s.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function secondsStringToMilliseconds(n){return Number(n)*1e3}function _parseToken(n){var e;const[r,i,s]=n.split(".");if(r===void 0||i===void 0||s===void 0)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{const a=base64Decode(i);return a?JSON.parse(a):(_logError("Failed to decode base64 JWT payload"),null)}catch(a){return _logError("Caught error parsing JWT payload as JSON",(e=a)===null||e===void 0?void 0:e.toString()),null}}function _tokenExpiresIn(n){const e=_parseToken(n);return _assert(e,"internal-error"),_assert(typeof e.exp!="undefined","internal-error"),_assert(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _logoutIfInvalidated(n,e,r=!1){if(r)return e;try{return await e}catch(i){throw i instanceof FirebaseError&&isUserInvalidated(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function isUserInvalidated({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ProactiveRefresh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(r){((e=r)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class UserMetadata{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _reloadWithoutSaving(n){var e;const r=n.auth,i=await n.getIdToken(),s=await _logoutIfInvalidated(n,getAccountInfo(r,{idToken:i}));_assert(s==null?void 0:s.users.length,r,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?extractProviderData(a.providerUserInfo):[],u=mergeProviderData(n.providerData,c),h=n.isAnonymous,d=!(n.email&&a.passwordHash)&&!(u!=null&&u.length),f=h?d:!1,g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new UserMetadata(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function reload(n){const e=getModularInstance(n);await _reloadWithoutSaving(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mergeProviderData(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function extractProviderData(n){return n.map(e=>{var{providerId:r}=e,i=__rest(e,["providerId"]);return{providerId:r,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function requestStsToken(n,e){const r=await _performFetchWithErrorHandling(n,{},async()=>{const i=querystring({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,c=_getFinalTarget(n,s,"/v1/token",`key=${a}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(c,{method:"POST",headers:u,body:i})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_assert(e.idToken,"internal-error"),_assert(typeof e.idToken!="undefined","internal-error"),_assert(typeof e.refreshToken!="undefined","internal-error");const r="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):_tokenExpiresIn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return _assert(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:i,refreshToken:s,expiresIn:a}=await requestStsToken(e,r);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,r,i){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,r){const{refreshToken:i,accessToken:s,expirationTime:a}=r,c=new StsTokenManager;return i&&(_assert(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),s&&(_assert(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),a&&(_assert(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}}/**
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
 */function assertStringOrUndefined(n,e){_assert(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class UserImpl{constructor(e){var{uid:r,auth:i,stsTokenManager:s}=e,a=__rest(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new UserMetadata(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,e));return _assert(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return getIdTokenResult(this,e)}reload(){return reload(this)}_assign(e){this!==e&&(_assert(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new UserImpl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),r&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var i,s,a,c,u,h,d,f;const g=(i=r.displayName)!==null&&i!==void 0?i:void 0,m=(s=r.email)!==null&&s!==void 0?s:void 0,_=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,he=(c=r.photoURL)!==null&&c!==void 0?c:void 0,ve=(u=r.tenantId)!==null&&u!==void 0?u:void 0,b=(h=r._redirectEventId)!==null&&h!==void 0?h:void 0,Se=(d=r.createdAt)!==null&&d!==void 0?d:void 0,et=(f=r.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Pe,emailVerified:mt,isAnonymous:ot,providerData:Ue,stsTokenManager:Be}=r;_assert(Pe&&Be,e,"internal-error");const Ve=StsTokenManager.fromJSON(this.name,Be);_assert(typeof Pe=="string",e,"internal-error"),assertStringOrUndefined(g,e.name),assertStringOrUndefined(m,e.name),_assert(typeof mt=="boolean",e,"internal-error"),_assert(typeof ot=="boolean",e,"internal-error"),assertStringOrUndefined(_,e.name),assertStringOrUndefined(he,e.name),assertStringOrUndefined(ve,e.name),assertStringOrUndefined(b,e.name),assertStringOrUndefined(Se,e.name),assertStringOrUndefined(et,e.name);const Le=new UserImpl({uid:Pe,auth:e,email:m,emailVerified:mt,displayName:g,isAnonymous:ot,photoURL:he,phoneNumber:_,tenantId:ve,stsTokenManager:Ve,createdAt:Se,lastLoginAt:et});return Ue&&Array.isArray(Ue)&&(Le.providerData=Ue.map(gt=>Object.assign({},gt))),b&&(Le._redirectEventId=b),Le}static async _fromIdTokenResponse(e,r,i=!1){const s=new StsTokenManager;s.updateFromServerResponse(r);const a=new UserImpl({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await _reloadWithoutSaving(a),a}}/**
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
 */class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}InMemoryPersistence.type="NONE";const inMemoryPersistence=InMemoryPersistence;/**
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
 */function _persistenceKeyName(n,e,r){return`firebase:${n}:${e}:${r}`}class PersistenceUserManager{constructor(e,r,i){this.persistence=e,this.auth=r,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,s.apiKey,a),this.fullPersistenceKey=_persistenceKeyName("persistence",s.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?UserImpl._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,i="authUser"){if(!r.length)return new PersistenceUserManager(_getInstance(inMemoryPersistence),e,i);const s=(await Promise.all(r.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=s[0]||_getInstance(inMemoryPersistence);const c=_persistenceKeyName(i,e.config.apiKey,e.name);let u=null;for(const d of r)try{const f=await d._get(c);if(f){const g=UserImpl._fromJSON(e,f);d!==a&&(u=g),a=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new PersistenceUserManager(a,e,i):(a=h[0],u&&await a._set(c,u.toJSON()),await Promise.all(r.map(async d=>{if(d!==a)try{await d._remove(c)}catch{}})),new PersistenceUserManager(a,e,i))}}/**
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
 */function _getBrowserName(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_isIEMobile(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_isFirefox(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_isBlackBerry(e))return"Blackberry";if(_isWebOS(e))return"Webos";if(_isSafari(e))return"Safari";if((e.includes("chrome/")||_isChromeIOS(e))&&!e.includes("edge/"))return"Chrome";if(_isAndroid(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(r);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _isFirefox(n=getUA()){return/firefox\//i.test(n)}function _isSafari(n=getUA()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _isChromeIOS(n=getUA()){return/crios\//i.test(n)}function _isIEMobile(n=getUA()){return/iemobile/i.test(n)}function _isAndroid(n=getUA()){return/android/i.test(n)}function _isBlackBerry(n=getUA()){return/blackberry/i.test(n)}function _isWebOS(n=getUA()){return/webos/i.test(n)}function _isIOS(n=getUA()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _isIOSStandalone(n=getUA()){var e;return _isIOS(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _isIE10(){return isIE()&&document.documentMode===10}function _isMobileBrowser(n=getUA()){return _isIOS(n)||_isAndroid(n)||_isWebOS(n)||_isBlackBerry(n)||/windows phone/i.test(n)||_isIEMobile(n)}function _isIframe(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _getClientVersion(n,e=[]){let r;switch(n){case"Browser":r=_getBrowserName(getUA());break;case"Worker":r=`${_getBrowserName(getUA())}-${n}`;break;default:r=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${SDK_VERSION}/${i}`}/**
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
 */class AuthMiddlewareQueue{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const i=a=>new Promise((c,u)=>{try{const h=e(a);c(h)}catch(h){u(h)}});i.onAbort=r,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var r;if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const a of i)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(r=s)===null||r===void 0?void 0:r.message})}}}/**
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
 */class AuthImpl{constructor(e,r,i){this.app=e,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_DEFAULT_AUTH_ERROR_FACTORY,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=_getInstance(r)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const i=await this.assertedPersistence.getCurrentUser();let s=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,u=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===u)&&(h==null?void 0:h.user)&&(s=h.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){var r;try{await _reloadWithoutSaving(e)}catch(i){if(((r=i)===null||r===void 0?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_getUserLanguage()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?getModularInstance(e):null;return r&&_assert(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&_assert(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,r,i){return this.registerStateListener(this.authStateSubscription,e,r,i)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,i){return this.registerStateListener(this.idTokenSubscription,e,r,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const i=await this.getOrInitRedirectPersistenceManager(r);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&_getInstance(e)||this._popupRedirectResolver;_assert(r,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,i;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,i,s){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r),c=this._isInitialized?Promise.resolve():this._initializationPromise;return _assert(c,this,"internal-error"),c.then(()=>a(this.currentUser)),typeof r=="function"?e.addObserver(r,i,s):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(r["X-Firebase-Client"]=i),r}}function _castAuth(n){return getModularInstance(n)}class Subscription{constructor(e){this.auth=e,this.observer=null,this.addObserver=createSubscribe(r=>this.observer=r)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class AuthCredential{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(e){return debugFail("not implemented")}_linkToIdToken(e,r){return debugFail("not implemented")}_getReauthenticationResolver(e){return debugFail("not implemented")}}async function updateEmailPassword(n,e){return _performApiRequest(n,"POST","/v1/accounts:update",e)}/**
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
 */async function signInWithPassword(n,e){return _performSignInRequest(n,"POST","/v1/accounts:signInWithPassword",_addTidIfNecessary(n,e))}/**
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
 */async function signInWithEmailLink$1(n,e){return _performSignInRequest(n,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(n,e))}async function signInWithEmailLinkForLinking(n,e){return _performSignInRequest(n,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(n,e))}/**
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
 */class EmailAuthCredential extends AuthCredential{constructor(e,r,i,s=null){super("password",i),this._email=e,this._password=r,this._tenantId=s}static _fromEmailAndPassword(e,r){return new EmailAuthCredential(e,r,"password")}static _fromEmailAndCode(e,r,i=null){return new EmailAuthCredential(e,r,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if((r==null?void 0:r.email)&&(r==null?void 0:r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return signInWithPassword(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLink$1(e,{email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":return updateEmailPassword(e,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLinkForLinking(e,{idToken:r,email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function signInWithIdp(n,e){return _performSignInRequest(n,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(n,e))}/**
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
 */const IDP_REQUEST_URI$1="http://localhost";class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new OAuthCredential(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):_fail("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=r,a=__rest(r,["providerId","signInMethod"]);if(!i||!s)return null;const c=new OAuthCredential(i,s);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const r=this.buildRequest();return signInWithIdp(e,r)}_linkToIdToken(e,r){const i=this.buildRequest();return i.idToken=r,signInWithIdp(e,i)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,signInWithIdp(e,r)}buildRequest(){const e={requestUri:IDP_REQUEST_URI$1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=querystring(r)}return e}}/**
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
 */function parseMode(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function parseDeepLink(n){const e=querystringDecode(extractQuerystring(n)).link,r=e?querystringDecode(extractQuerystring(e)).deep_link_id:null,i=querystringDecode(extractQuerystring(n)).deep_link_id;return(i?querystringDecode(extractQuerystring(i)).link:null)||i||r||e||n}class ActionCodeURL{constructor(e){var r,i,s,a,c,u;const h=querystringDecode(extractQuerystring(e)),d=(r=h.apiKey)!==null&&r!==void 0?r:null,f=(i=h.oobCode)!==null&&i!==void 0?i:null,g=parseMode((s=h.mode)!==null&&s!==void 0?s:null);_assert(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(a=h.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=h.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const r=parseDeepLink(e);try{return new ActionCodeURL(r)}catch{return null}}}/**
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
 */class EmailAuthProvider{constructor(){this.providerId=EmailAuthProvider.PROVIDER_ID}static credential(e,r){return EmailAuthCredential._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const i=ActionCodeURL.parseLink(r);return _assert(i,"argument-error"),EmailAuthCredential._fromEmailAndCode(e,i.code,i.tenantId)}}EmailAuthProvider.PROVIDER_ID="password";EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD="password";EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class FederatedAuthProvider{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(e){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return FacebookAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return FacebookAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(e.oauthAccessToken)}catch{return null}}}FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com";FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
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
 */class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return GoogleAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GoogleAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:i}=e;if(!r&&!i)return null;try{return GoogleAuthProvider.credential(r,i)}catch{return null}}}GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com";GoogleAuthProvider.PROVIDER_ID="google.com";/**
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
 */class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(e){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return GithubAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GithubAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return GithubAuthProvider.credential(e.oauthAccessToken)}catch{return null}}}GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com";GithubAuthProvider.PROVIDER_ID="github.com";/**
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
 */class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(e,r){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return TwitterAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return TwitterAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:i}=e;if(!r||!i)return null;try{return TwitterAuthProvider.credential(r,i)}catch{return null}}}TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com";TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
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
 */class UserCredentialImpl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,i,s=!1){const a=await UserImpl._fromIdTokenResponse(e,i,s),c=providerIdForResponse(i);return new UserCredentialImpl({user:a,providerId:c,_tokenResponse:i,operationType:r})}static async _forOperation(e,r,i){await e._updateTokensIfNecessary(i,!0);const s=providerIdForResponse(i);return new UserCredentialImpl({user:e,providerId:s,_tokenResponse:i,operationType:r})}}function providerIdForResponse(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class MultiFactorError extends FirebaseError{constructor(e,r,i,s){var a;super(r.code,r.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,r,i,s){return new MultiFactorError(e,r,i,s)}}function _processCredentialSavingMfaContextIfNecessary(n,e,r,i){return(e==="reauthenticate"?r._getReauthenticationResolver(n):r._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?MultiFactorError._fromErrorAndOperation(n,a,e,i):a})}async function _link$1(n,e,r=!1){const i=await _logoutIfInvalidated(n,e._linkToIdToken(n.auth,await n.getIdToken()),r);return UserCredentialImpl._forOperation(n,"link",i)}/**
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
 */async function _reauthenticate(n,e,r=!1){var i;const{auth:s}=n,a="reauthenticate";try{const c=await _logoutIfInvalidated(n,_processCredentialSavingMfaContextIfNecessary(s,a,e,n),r);_assert(c.idToken,s,"internal-error");const u=_parseToken(c.idToken);_assert(u,s,"internal-error");const{sub:h}=u;return _assert(n.uid===h,s,"user-mismatch"),UserCredentialImpl._forOperation(n,a,c)}catch(c){throw((i=c)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&_fail(s,"user-mismatch"),c}}/**
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
 */async function _signInWithCredential(n,e,r=!1){const i="signIn",s=await _processCredentialSavingMfaContextIfNecessary(n,i,e),a=await UserCredentialImpl._fromIdTokenResponse(n,i,s);return r||await n._updateCurrentUser(a.user),a}async function signInWithCredential(n,e){return _signInWithCredential(_castAuth(n),e)}function signInWithEmailAndPassword(n,e,r){return signInWithCredential(getModularInstance(n),EmailAuthProvider.credential(e,r))}function onAuthStateChanged(n,e,r,i){return getModularInstance(n).onAuthStateChanged(e,r,i)}function signOut(n){return getModularInstance(n).signOut()}const STORAGE_AVAILABLE_KEY="__sak";/**
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
 */class BrowserPersistenceClass{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(STORAGE_AVAILABLE_KEY,"1"),this.storage.removeItem(STORAGE_AVAILABLE_KEY),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _iframeCannotSyncWebStorage(){const n=getUA();return _isSafari(n)||_isIOS(n)}const _POLLING_INTERVAL_MS$1=1e3,IE10_LOCAL_STORAGE_SYNC_DELAY=10;class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_iframeCannotSyncWebStorage()&&_isIframe(),this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const i=this.storage.getItem(r),s=this.localCache[r];i!==s&&e(r,s,i)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((c,u,h)=>{this.notifyListeners(c,h)});return}const i=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(i);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!r)return}const s=()=>{const c=this.storage.getItem(i);!r&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);_isIE10()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IE10_LOCAL_STORAGE_SYNC_DELAY):s()}notifyListeners(e,r){this.localCache[e]=r;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:i}),!0)})},_POLLING_INTERVAL_MS$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}BrowserLocalPersistence.type="LOCAL";const browserLocalPersistence=BrowserLocalPersistence;/**
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
 */class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}BrowserSessionPersistence.type="SESSION";const browserSessionPersistence=BrowserSessionPersistence;/**
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
 */function _allSettled(n){return Promise.all(n.map(async e=>{try{const r=await e;return{fulfilled:!0,value:r}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Receiver{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(s=>s.isListeningto(e));if(r)return r;const i=new Receiver(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:i,eventType:s,data:a}=r.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;r.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(c).map(async d=>d(r.origin,a)),h=await _allSettled(u);r.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:h})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Receiver.receivers=[];/**
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
 */function _generateEventId(n="",e=10){let r="";for(let i=0;i<e;i++)r+=Math.floor(Math.random()*10);return n+r}/**
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
 */class Sender{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,c;return new Promise((u,h)=>{const d=_generateEventId("",20);s.port1.start();const f=setTimeout(()=>{h(new Error("unsupported_event"))},i);c={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(m.data.response);break;default:clearTimeout(f),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:d,data:r},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function _window(){return window}function _setWindowLocation(n){_window().location.href=n}/**
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
 */function _isWorker(){return typeof _window().WorkerGlobalScope!="undefined"&&typeof _window().importScripts=="function"}async function _getActiveServiceWorker(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _getServiceWorkerController(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _getWorkerGlobalScope(){return _isWorker()?self:null}/**
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
 */const DB_NAME="firebaseLocalStorageDb",DB_VERSION=1,DB_OBJECTSTORE_NAME="firebaseLocalStorage",DB_DATA_KEYPATH="fbase_key";class DBPromise{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function getObjectStore(n,e){return n.transaction([DB_OBJECTSTORE_NAME],e?"readwrite":"readonly").objectStore(DB_OBJECTSTORE_NAME)}function _deleteDatabase(){const n=indexedDB.deleteDatabase(DB_NAME);return new DBPromise(n).toPromise()}function _openDatabase(){const n=indexedDB.open(DB_NAME,DB_VERSION);return new Promise((e,r)=>{n.addEventListener("error",()=>{r(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(DB_OBJECTSTORE_NAME,{keyPath:DB_DATA_KEYPATH})}catch(s){r(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(DB_OBJECTSTORE_NAME)?e(i):(i.close(),await _deleteDatabase(),e(await _openDatabase()))})})}async function _putObject(n,e,r){const i=getObjectStore(n,!0).put({[DB_DATA_KEYPATH]:e,value:r});return new DBPromise(i).toPromise()}async function getObject(n,e){const r=getObjectStore(n,!1).get(e),i=await new DBPromise(r).toPromise();return i===void 0?null:i.value}function _deleteObject(n,e){const r=getObjectStore(n,!0).delete(e);return new DBPromise(r).toPromise()}const _POLLING_INTERVAL_MS=800,_TRANSACTION_RETRY_COUNT=3;class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _openDatabase(),this.db)}async _withRetries(e){let r=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(r++>_TRANSACTION_RETRY_COUNT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_getWorkerGlobalScope()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((r=i[0])===null||r===void 0?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_getServiceWorkerController()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _openDatabase();return await _putObject(e,STORAGE_AVAILABLE_KEY,"1"),await _deleteObject(e,STORAGE_AVAILABLE_KEY),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(i=>_putObject(i,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(i=>getObject(i,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>_deleteObject(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=getObjectStore(s,!1).getAll();return new DBPromise(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],i=new Set;for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),r.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),r.push(s));return r}notifyListeners(e,r){this.localCache[e]=r;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_POLLING_INTERVAL_MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IndexedDBLocalPersistence.type="LOCAL";const indexedDBLocalPersistence=IndexedDBLocalPersistence;/**
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
 */function getScriptParentElement(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function _loadJS(n){return new Promise((e,r)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=_createError("internal-error");a.customData=s,r(a)},i.type="text/javascript",i.charset="UTF-8",getScriptParentElement().appendChild(i)})}function _generateCallbackName(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Delay(3e4,6e4);/**
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
 */function _withDefaultResolver(n,e){return e?_getInstance(e):(_assert(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class IdpCredential extends AuthCredential{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return signInWithIdp(e,this._buildIdpRequest())}_linkToIdToken(e,r){return signInWithIdp(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return signInWithIdp(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function _signIn(n){return _signInWithCredential(n.auth,new IdpCredential(n),n.bypassAuthState)}function _reauth(n){const{auth:e,user:r}=n;return _assert(r,e,"internal-error"),_reauthenticate(r,new IdpCredential(n),n.bypassAuthState)}async function _link(n){const{auth:e,user:r}=n;return _assert(r,e,"internal-error"),_link$1(r,new IdpCredential(n),n.bypassAuthState)}/**
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
 */class AbstractPopupRedirectOperation{constructor(e,r,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:i,postBody:s,tenantId:a,error:c,type:u}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:r,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(e){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _POLL_WINDOW_CLOSE_TIMEOUT=new Delay(2e3,1e4);class PopupOperation extends AbstractPopupRedirectOperation{constructor(e,r,i,s,a){super(e,r,s,a),this.provider=i,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _assert(e,this.auth,"internal-error"),e}async onExecution(){debugAssert(this.filter.length===1,"Popup operations only handle one event");const e=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,i;if(!((i=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,_POLL_WINDOW_CLOSE_TIMEOUT.get())};e()}}PopupOperation.currentPopupAction=null;/**
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
 */const PENDING_REDIRECT_KEY="pendingRedirect",redirectOutcomeMap=new Map;class RedirectAction extends AbstractPopupRedirectOperation{constructor(e,r,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i),this.eventId=null}async execute(){let e=redirectOutcomeMap.get(this.auth._key());if(!e){try{const i=await _getAndClearPendingRedirectStatus(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(r){e=()=>Promise.reject(r)}redirectOutcomeMap.set(this.auth._key(),e)}return this.bypassAuthState||redirectOutcomeMap.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _getAndClearPendingRedirectStatus(n,e){const r=pendingRedirectKey(e),i=resolverPersistence(n);if(!await i._isAvailable())return!1;const s=await i._get(r)==="true";return await i._remove(r),s}function _overrideRedirectResult(n,e){redirectOutcomeMap.set(n._key(),e)}function resolverPersistence(n){return _getInstance(n._redirectPersistence)}function pendingRedirectKey(n){return _persistenceKeyName(PENDING_REDIRECT_KEY,n.config.apiKey,n.name)}async function _getRedirectResult(n,e,r=!1){const i=_castAuth(n),s=_withDefaultResolver(i,e),c=await new RedirectAction(i,s,r).execute();return c&&!r&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const EVENT_DUPLICATION_CACHE_DURATION_MS=10*60*1e3;class AuthEventManager{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(r=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!isRedirectEvent(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var i;if(e.error&&!isNullRedirectEvent(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";r.onError(_createError(this.auth,s))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const i=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EVENT_DUPLICATION_CACHE_DURATION_MS&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(e))}saveEventToCache(e){this.cachedEventUids.add(eventUid(e)),this.lastProcessedEventTime=Date.now()}}function eventUid(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function isNullRedirectEvent({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function isRedirectEvent(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(n);default:return!1}}/**
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
 */async function _getProjectConfig(n,e={}){return _performApiRequest(n,"GET","/v1/projects",e)}/**
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
 */const IP_ADDRESS_REGEX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HTTP_REGEX=/^https?/;async function _validateOrigin(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _getProjectConfig(n);for(const r of e)try{if(matchDomain(r))return}catch{}_fail(n,"unauthorized-domain")}function matchDomain(n){const e=_getCurrentUrl(),{protocol:r,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?r==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&c.hostname===i}if(!HTTP_REGEX.test(r))return!1;if(IP_ADDRESS_REGEX.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const NETWORK_TIMEOUT=new Delay(3e4,6e4);function resetUnloadedGapiModules(){const n=_window().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let r=0;r<n.CP.length;r++)n.CP[r]=null}}function loadGapi(n){return new Promise((e,r)=>{var i,s,a;function c(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),r(_createError(n,"network-request-failed"))},timeout:NETWORK_TIMEOUT.get()})}if(!((s=(i=_window().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=_window().gapi)===null||a===void 0)&&a.load)c();else{const u=_generateCallbackName("iframefcb");return _window()[u]=()=>{gapi.load?c():r(_createError(n,"network-request-failed"))},_loadJS(`https://apis.google.com/js/api.js?onload=${u}`).catch(h=>r(h))}}).catch(e=>{throw cachedGApiLoader=null,e})}let cachedGApiLoader=null;function _loadGapi(n){return cachedGApiLoader=cachedGApiLoader||loadGapi(n),cachedGApiLoader}/**
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
 */const PING_TIMEOUT=new Delay(5e3,15e3),IFRAME_PATH="__/auth/iframe",EMULATED_IFRAME_PATH="emulator/auth/iframe",IFRAME_ATTRIBUTES={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EID_FROM_APIHOST=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function getIframeUrl(n){const e=n.config;_assert(e.authDomain,n,"auth-domain-config-required");const r=e.emulator?_emulatorUrl(e,EMULATED_IFRAME_PATH):`https://${n.config.authDomain}/${IFRAME_PATH}`,i={apiKey:e.apiKey,appName:n.name,v:SDK_VERSION},s=EID_FROM_APIHOST.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${r}?${querystring(i).slice(1)}`}async function _openIframe(n){const e=await _loadGapi(n),r=_window().gapi;return _assert(r,n,"internal-error"),e.open({where:document.body,url:getIframeUrl(n),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IFRAME_ATTRIBUTES,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const c=_createError(n,"network-request-failed"),u=_window().setTimeout(()=>{a(c)},PING_TIMEOUT.get());function h(){_window().clearTimeout(u),s(i)}i.ping(h).then(h,()=>{a(c)})}))}/**
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
 */const BASE_POPUP_OPTIONS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DEFAULT_WIDTH=500,DEFAULT_HEIGHT=600,TARGET_BLANK="_blank",FIREFOX_EMPTY_URL="http://localhost";class AuthPopup{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _open(n,e,r,i=DEFAULT_WIDTH,s=DEFAULT_HEIGHT){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const h=Object.assign(Object.assign({},BASE_POPUP_OPTIONS),{width:i.toString(),height:s.toString(),top:a,left:c}),d=getUA().toLowerCase();r&&(u=_isChromeIOS(d)?TARGET_BLANK:r),_isFirefox(d)&&(e=e||FIREFOX_EMPTY_URL,h.scrollbars="yes");const f=Object.entries(h).reduce((m,[_,he])=>`${m}${_}=${he},`,"");if(_isIOSStandalone(d)&&u!=="_self")return openAsNewWindowIOS(e||"",u),new AuthPopup(null);const g=window.open(e||"",u,f);_assert(g,n,"popup-blocked");try{g.focus()}catch{}return new AuthPopup(g)}function openAsNewWindowIOS(n,e){const r=document.createElement("a");r.href=n,r.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(i)}/**
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
 */const WIDGET_PATH="__/auth/handler",EMULATOR_WIDGET_PATH="emulator/auth/handler";function _getRedirectUrl(n,e,r,i,s,a){_assert(n.config.authDomain,n,"auth-domain-config-required"),_assert(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:r,redirectUrl:i,v:SDK_VERSION,eventId:s};if(e instanceof FederatedAuthProvider){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",isEmpty(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(a||{}))c[h]=d}if(e instanceof BaseOAuthProvider){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(c.scopes=h.join(","))}n.tenantId&&(c.tid=n.tenantId);const u=c;for(const h of Object.keys(u))u[h]===void 0&&delete u[h];return`${getHandlerBase(n)}?${querystring(u).slice(1)}`}function getHandlerBase({config:n}){return n.emulator?_emulatorUrl(n,EMULATOR_WIDGET_PATH):`https://${n.authDomain}/${WIDGET_PATH}`}/**
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
 */const WEB_STORAGE_SUPPORT_KEY="webStorageSupport";class BrowserPopupRedirectResolver{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=browserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(e,r,i,s){var a;debugAssert((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=_getRedirectUrl(e,r,i,_getCurrentUrl(),s);return _open(e,c,_generateEventId())}async _openRedirect(e,r,i,s){return await this._originValidation(e),_setWindowLocation(_getRedirectUrl(e,r,i,_getCurrentUrl(),s)),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:s,promise:a}=this.eventManagers[r];return s?Promise.resolve(s):(debugAssert(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[r]={promise:i},i.catch(()=>{delete this.eventManagers[r]}),i}async initAndGetManager(e){const r=await _openIframe(e),i=new AuthEventManager(e);return r.register("authEvent",s=>(_assert(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=r,i}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(WEB_STORAGE_SUPPORT_KEY,{type:WEB_STORAGE_SUPPORT_KEY},s=>{var a;const c=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[WEB_STORAGE_SUPPORT_KEY];c!==void 0&&r(!!c),_fail(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=_validateOrigin(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}}const browserPopupRedirectResolver=BrowserPopupRedirectResolver;var name$2="@firebase/auth",version$2="0.20.5";/**
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
 */class AuthInterop{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);!r||(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function getVersionForPlatform(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function registerAuth(n){_registerComponent(new Component("auth",(e,{options:r})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:a,authDomain:c}=i.options;return((u,h)=>{_assert(a&&!a.includes(":"),"invalid-api-key",{appName:u.name}),_assert(!(c!=null&&c.includes(":")),"argument-error",{appName:u.name});const d={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(n)},f=new AuthImpl(u,h,d);return _initializeAuthInstance(f,r),f})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,i)=>{e.getProvider("auth-internal").initialize()})),_registerComponent(new Component("auth-internal",e=>{const r=_castAuth(e.getProvider("auth").getImmediate());return(i=>new AuthInterop(i))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),registerVersion(name$2,version$2,getVersionForPlatform(n)),registerVersion(name$2,version$2,"esm2017")}/**
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
 */function getAuth(n=getApp()){const e=_getProvider(n,"auth");return e.isInitialized()?e.getImmediate():initializeAuth(n,{popupRedirectResolver:browserPopupRedirectResolver,persistence:[indexedDBLocalPersistence,browserLocalPersistence,browserSessionPersistence]})}registerAuth("Browser");var commonjsGlobal$1=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},k$1,goog=goog||{},l=commonjsGlobal$1||self;function aa$1(){}function ba$1(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function p(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function da(n){return Object.prototype.hasOwnProperty.call(n,ea)&&n[ea]||(n[ea]=++fa)}var ea="closure_uid_"+(1e9*Math.random()>>>0),fa=0;function ha(n,e,r){return n.call.apply(n.bind,arguments)}function ia(n,e,r){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function q(n,e,r){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?q=ha:q=ia,q.apply(null,arguments)}function ja(n,e){var r=Array.prototype.slice.call(arguments,1);return function(){var i=r.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function t(n,e){function r(){}r.prototype=e.prototype,n.Z=e.prototype,n.prototype=new r,n.prototype.constructor=n,n.Vb=function(i,s,a){for(var c=Array(arguments.length-2),u=2;u<arguments.length;u++)c[u-2]=arguments[u];return e.prototype[s].apply(i,c)}}function v(){this.s=this.s,this.o=this.o}var ka=0;v.prototype.s=!1;v.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ka!=0)&&da(this)};v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ma$1=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let r=0;r<n.length;r++)if(r in n&&n[r]===e)return r;return-1},na$1=Array.prototype.forEach?function(n,e,r){Array.prototype.forEach.call(n,e,r)}:function(n,e,r){const i=n.length,s=typeof n=="string"?n.split(""):n;for(let a=0;a<i;a++)a in s&&e.call(r,s[a],a,n)};function oa(n){e:{var e=pa$1;const r=n.length,i=typeof n=="string"?n.split(""):n;for(let s=0;s<r;s++)if(s in i&&e.call(void 0,i[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function qa(n){return Array.prototype.concat.apply([],arguments)}function ra(n){const e=n.length;if(0<e){const r=Array(e);for(let i=0;i<e;i++)r[i]=n[i];return r}return[]}function sa$1(n){return/^[\s\xa0]*$/.test(n)}var ta=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function w(n,e){return n.indexOf(e)!=-1}function ua(n,e){return n<e?-1:n>e?1:0}var x$1;e:{var va$1=l.navigator;if(va$1){var wa$1=va$1.userAgent;if(wa$1){x$1=wa$1;break e}}x$1=""}function xa(n,e,r){for(const i in n)e.call(r,n[i],i,n)}function ya$1(n){const e={};for(const r in n)e[r]=n[r];return e}var za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Aa$1(n,e){let r,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(r in i)n[r]=i[r];for(let a=0;a<za.length;a++)r=za[a],Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}}function Ca(n){return Ca[" "](n),n}Ca[" "]=aa$1;function Fa$1(n){var e=Ga;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Ha=w(x$1,"Opera"),y=w(x$1,"Trident")||w(x$1,"MSIE"),Ia$1=w(x$1,"Edge"),Ja=Ia$1||y,Ka=w(x$1,"Gecko")&&!(w(x$1.toLowerCase(),"webkit")&&!w(x$1,"Edge"))&&!(w(x$1,"Trident")||w(x$1,"MSIE"))&&!w(x$1,"Edge"),La$1=w(x$1.toLowerCase(),"webkit")&&!w(x$1,"Edge");function Ma(){var n=l.document;return n?n.documentMode:void 0}var Na$1;e:{var Oa="",Pa$1=function(){var n=x$1;if(Ka)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ia$1)return/Edge\/([\d\.]+)/.exec(n);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(La$1)return/WebKit\/(\S+)/.exec(n);if(Ha)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Pa$1&&(Oa=Pa$1?Pa$1[1]:""),y){var Qa=Ma();if(Qa!=null&&Qa>parseFloat(Oa)){Na$1=String(Qa);break e}}Na$1=Oa}var Ga={};function Ra(){return Fa$1(function(){let n=0;const e=ta(String(Na$1)).split("."),r=ta("9").split("."),i=Math.max(e.length,r.length);for(let c=0;n==0&&c<i;c++){var s=e[c]||"",a=r[c]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s[0].length==0&&a[0].length==0)break;n=ua(s[1].length==0?0:parseInt(s[1],10),a[1].length==0?0:parseInt(a[1],10))||ua(s[2].length==0,a[2].length==0)||ua(s[2],a[2]),s=s[3],a=a[3]}while(n==0)}return 0<=n})}var Sa;if(l.document&&y){var Ta$1=Ma();Sa=Ta$1||parseInt(Na$1,10)||void 0}else Sa=void 0;var Ua$1=Sa,Va$1=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{l.addEventListener("test",aa$1,e),l.removeEventListener("test",aa$1,e)}catch{}return n}();function z$1(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}z$1.prototype.h=function(){this.defaultPrevented=!0};function A(n,e){if(z$1.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var r=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ka){e:{try{Ca(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else r=="mouseover"?e=n.fromElement:r=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Wa[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&A.Z.h.call(this)}}t(A,z$1);var Wa={2:"touch",3:"pen",4:"mouse"};A.prototype.h=function(){A.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var B$1="closure_listenable_"+(1e6*Math.random()|0),Xa=0;function Ya(n,e,r,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=r,this.capture=!!i,this.ia=s,this.key=++Xa,this.ca=this.fa=!1}function Za$1(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function $a(n){this.src=n,this.g={},this.h=0}$a.prototype.add=function(n,e,r,i,s){var a=n.toString();n=this.g[a],n||(n=this.g[a]=[],this.h++);var c=ab(n,e,i,s);return-1<c?(e=n[c],r||(e.fa=!1)):(e=new Ya(e,this.src,a,!!i,s),e.fa=r,n.push(e)),e};function bb(n,e){var r=e.type;if(r in n.g){var i=n.g[r],s=ma$1(i,e),a;(a=0<=s)&&Array.prototype.splice.call(i,s,1),a&&(Za$1(e),n.g[r].length==0&&(delete n.g[r],n.h--))}}function ab(n,e,r,i){for(var s=0;s<n.length;++s){var a=n[s];if(!a.ca&&a.listener==e&&a.capture==!!r&&a.ia==i)return s}return-1}var cb="closure_lm_"+(1e6*Math.random()|0),db={};function fb(n,e,r,i,s){if(i&&i.once)return gb(n,e,r,i,s);if(Array.isArray(e)){for(var a=0;a<e.length;a++)fb(n,e[a],r,i,s);return null}return r=hb(r),n&&n[B$1]?n.N(e,r,p(i)?!!i.capture:!!i,s):ib(n,e,r,!1,i,s)}function ib(n,e,r,i,s,a){if(!e)throw Error("Invalid event type");var c=p(s)?!!s.capture:!!s,u=jb(n);if(u||(n[cb]=u=new $a(n)),r=u.add(e,r,i,c,a),r.proxy)return r;if(i=kb(),r.proxy=i,i.src=n,i.listener=r,n.addEventListener)Va$1||(s=c),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(lb(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return r}function kb(){function n(r){return e.call(n.src,n.listener,r)}var e=mb;return n}function gb(n,e,r,i,s){if(Array.isArray(e)){for(var a=0;a<e.length;a++)gb(n,e[a],r,i,s);return null}return r=hb(r),n&&n[B$1]?n.O(e,r,p(i)?!!i.capture:!!i,s):ib(n,e,r,!0,i,s)}function nb(n,e,r,i,s){if(Array.isArray(e))for(var a=0;a<e.length;a++)nb(n,e[a],r,i,s);else i=p(i)?!!i.capture:!!i,r=hb(r),n&&n[B$1]?(n=n.i,e=String(e).toString(),e in n.g&&(a=n.g[e],r=ab(a,r,i,s),-1<r&&(Za$1(a[r]),Array.prototype.splice.call(a,r,1),a.length==0&&(delete n.g[e],n.h--)))):n&&(n=jb(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ab(e,r,i,s)),(r=-1<n?e[n]:null)&&ob(r))}function ob(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[B$1])bb(e.i,n);else{var r=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(r,i,n.capture):e.detachEvent?e.detachEvent(lb(r),i):e.addListener&&e.removeListener&&e.removeListener(i),(r=jb(e))?(bb(r,n),r.h==0&&(r.src=null,e[cb]=null)):Za$1(n)}}}function lb(n){return n in db?db[n]:db[n]="on"+n}function mb(n,e){if(n.ca)n=!0;else{e=new A(e,this);var r=n.listener,i=n.ia||n.src;n.fa&&ob(n),n=r.call(i,e)}return n}function jb(n){return n=n[cb],n instanceof $a?n:null}var pb="__closure_events_fn_"+(1e9*Math.random()>>>0);function hb(n){return typeof n=="function"?n:(n[pb]||(n[pb]=function(e){return n.handleEvent(e)}),n[pb])}function C$1(){v.call(this),this.i=new $a(this),this.P=this,this.I=null}t(C$1,v);C$1.prototype[B$1]=!0;C$1.prototype.removeEventListener=function(n,e,r,i){nb(this,n,e,r,i)};function D$1(n,e){var r,i=n.I;if(i)for(r=[];i;i=i.I)r.push(i);if(n=n.P,i=e.type||e,typeof e=="string")e=new z$1(e,n);else if(e instanceof z$1)e.target=e.target||n;else{var s=e;e=new z$1(i,n),Aa$1(e,s)}if(s=!0,r)for(var a=r.length-1;0<=a;a--){var c=e.g=r[a];s=qb(c,i,!0,e)&&s}if(c=e.g=n,s=qb(c,i,!0,e)&&s,s=qb(c,i,!1,e)&&s,r)for(a=0;a<r.length;a++)c=e.g=r[a],s=qb(c,i,!1,e)&&s}C$1.prototype.M=function(){if(C$1.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var r=n.g[e],i=0;i<r.length;i++)Za$1(r[i]);delete n.g[e],n.h--}}this.I=null};C$1.prototype.N=function(n,e,r,i){return this.i.add(String(n),e,!1,r,i)};C$1.prototype.O=function(n,e,r,i){return this.i.add(String(n),e,!0,r,i)};function qb(n,e,r,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,a=0;a<e.length;++a){var c=e[a];if(c&&!c.ca&&c.capture==r){var u=c.listener,h=c.ia||c.src;c.fa&&bb(n.i,c),s=u.call(h,i)!==!1&&s}}return s&&!i.defaultPrevented}var rb=l.JSON.stringify;function sb(){var n=tb;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class ub{constructor(){this.h=this.g=null}add(e,r){const i=vb.get();i.set(e,r),this.h?this.h.next=i:this.g=i,this.h=i}}var vb=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new wb,n=>n.reset());class wb{constructor(){this.next=this.g=this.h=null}set(e,r){this.h=e,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}function yb(n){l.setTimeout(()=>{throw n},0)}function zb(n,e){Ab||Bb(),Cb||(Ab(),Cb=!0),tb.add(n,e)}var Ab;function Bb(){var n=l.Promise.resolve(void 0);Ab=function(){n.then(Db)}}var Cb=!1,tb=new ub;function Db(){for(var n;n=sb();){try{n.h.call(n.g)}catch(r){yb(r)}var e=vb;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Cb=!1}function Eb(n,e){C$1.call(this),this.h=n||1,this.g=e||l,this.j=q(this.kb,this),this.l=Date.now()}t(Eb,C$1);k$1=Eb.prototype;k$1.da=!1;k$1.S=null;k$1.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),D$1(this,"tick"),this.da&&(Fb(this),this.start()))}};k$1.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fb(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}k$1.M=function(){Eb.Z.M.call(this),Fb(this),delete this.g};function Gb(n,e,r){if(typeof n=="function")r&&(n=q(n,r));else if(n&&typeof n.handleEvent=="function")n=q(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:l.setTimeout(n,e||0)}function Hb(n){n.g=Gb(()=>{n.g=null,n.i&&(n.i=!1,Hb(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Ib extends v{constructor(e,r){super(),this.m=e,this.j=r,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hb(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function E(n){v.call(this),this.h=n,this.g={}}t(E,v);var Jb=[];function Kb(n,e,r,i){Array.isArray(r)||(r&&(Jb[0]=r.toString()),r=Jb);for(var s=0;s<r.length;s++){var a=fb(e,r[s],i||n.handleEvent,!1,n.h||n);if(!a)break;n.g[a.key]=a}}function Lb(n){xa(n.g,function(e,r){this.g.hasOwnProperty(r)&&ob(e)},n),n.g={}}E.prototype.M=function(){E.Z.M.call(this),Lb(this)};E.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mb(){this.g=!0}Mb.prototype.Aa=function(){this.g=!1};function Nb(n,e,r,i,s,a){n.info(function(){if(n.g)if(a)for(var c="",u=a.split("&"),h=0;h<u.length;h++){var d=u[h].split("=");if(1<d.length){var f=d[0];d=d[1];var g=f.split("_");c=2<=g.length&&g[1]=="type"?c+(f+"="+d+"&"):c+(f+"=redacted&")}}else c=null;else c=a;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+r+`
`+c})}function Ob(n,e,r,i,s,a,c){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+r+`
`+a+" "+c})}function F$1(n,e,r,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Pb(n,r)+(i?" "+i:"")})}function Qb(n,e){n.info(function(){return"TIMEOUT: "+e})}Mb.prototype.info=function(){};function Pb(n,e){if(!n.g)return e;if(!e)return null;try{var r=JSON.parse(e);if(r){for(n=0;n<r.length;n++)if(Array.isArray(r[n])){var i=r[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var a=s[0];if(a!="noop"&&a!="stop"&&a!="close")for(var c=1;c<s.length;c++)s[c]=""}}}}return rb(r)}catch{return e}}var H$1={},Rb=null;function Sb(){return Rb=Rb||new C$1}H$1.Ma="serverreachability";function Tb(n){z$1.call(this,H$1.Ma,n)}t(Tb,z$1);function I(n){const e=Sb();D$1(e,new Tb(e))}H$1.STAT_EVENT="statevent";function Ub(n,e){z$1.call(this,H$1.STAT_EVENT,n),this.stat=e}t(Ub,z$1);function J$1(n){const e=Sb();D$1(e,new Ub(e,n))}H$1.Na="timingevent";function Vb(n,e){z$1.call(this,H$1.Na,n),this.size=e}t(Vb,z$1);function K$1(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){n()},e)}var Wb={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xb={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yb(){}Yb.prototype.h=null;function Zb(n){return n.h||(n.h=n.i())}function $b(){}var L$1={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ac$1(){z$1.call(this,"d")}t(ac$1,z$1);function bc$1(){z$1.call(this,"c")}t(bc$1,z$1);var cc$1;function dc$1(){}t(dc$1,Yb);dc$1.prototype.g=function(){return new XMLHttpRequest};dc$1.prototype.i=function(){return{}};cc$1=new dc$1;function M$1(n,e,r,i){this.l=n,this.j=e,this.m=r,this.X=i||1,this.V=new E(this),this.P=ec$1,n=Ja?125:void 0,this.W=new Eb(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fc$1}function fc$1(){this.i=null,this.g="",this.h=!1}var ec$1=45e3,gc$1={},hc$1={};k$1=M$1.prototype;k$1.setTimeout=function(n){this.P=n};function ic$1(n,e,r){n.K=1,n.v=jc(N$2(e)),n.s=r,n.U=!0,kc(n,null)}function kc(n,e){n.F=Date.now(),lc$1(n),n.A=N$2(n.v);var r=n.A,i=n.X;Array.isArray(i)||(i=[String(i)]),mc(r.h,"t",i),n.C=0,r=n.l.H,n.h=new fc$1,n.g=nc$1(n.l,r?e:null,!n.s),0<n.O&&(n.L=new Ib(q(n.Ia,n,n.g),n.O)),Kb(n.V,n.g,"readystatechange",n.gb),e=n.H?ya$1(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),I(),Nb(n.j,n.u,n.A,n.m,n.X,n.s)}k$1.gb=function(n){n=n.target;const e=this.L;e&&O(n)==3?e.l():this.Ia(n)};k$1.Ia=function(n){try{if(n==this.g)e:{const f=O(this.g);var e=this.g.Da();const g=this.g.ba();if(!(3>f)&&(f!=3||Ja||this.g&&(this.h.h||this.g.ga()||oc$1(this.g)))){this.I||f!=4||e==7||(e==8||0>=g?I(3):I(2)),pc$1(this);var r=this.g.ba();this.N=r;t:if(qc$1(this)){var i=oc$1(this.g);n="";var s=i.length,a=O(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){P(this),rc$1(this);var c="";break t}this.h.i=new l.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:a&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=r==200,Ob(this.j,this.u,this.A,this.m,this.X,f,r),this.i){if(this.$&&!this.J){t:{if(this.g){var u,h=this.g;if((u=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sa$1(u)){var d=u;break t}}d=null}if(r=d)F$1(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sc$1(this,r);else{this.i=!1,this.o=3,J$1(12),P(this),rc$1(this);break e}}this.U?(tc(this,f,c),Ja&&this.i&&f==3&&(Kb(this.V,this.W,"tick",this.fb),this.W.start())):(F$1(this.j,this.m,c,null),sc$1(this,c)),f==4&&P(this),this.i&&!this.I&&(f==4?uc$1(this.l,this):(this.i=!1,lc$1(this)))}else r==400&&0<c.indexOf("Unknown SID")?(this.o=3,J$1(12)):(this.o=0,J$1(13)),P(this),rc$1(this)}}}catch{}finally{}};function qc$1(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function tc(n,e,r){let i=!0,s;for(;!n.I&&n.C<r.length;)if(s=vc(n,r),s==hc$1){e==4&&(n.o=4,J$1(14),i=!1),F$1(n.j,n.m,null,"[Incomplete Response]");break}else if(s==gc$1){n.o=4,J$1(15),F$1(n.j,n.m,r,"[Invalid Chunk]"),i=!1;break}else F$1(n.j,n.m,s,null),sc$1(n,s);qc$1(n)&&s!=hc$1&&s!=gc$1&&(n.h.g="",n.C=0),e!=4||r.length!=0||n.h.h||(n.o=1,J$1(16),i=!1),n.i=n.i&&i,i?0<r.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+r.length),wc$1(e),e.L=!0,J$1(11))):(F$1(n.j,n.m,r,"[Invalid Chunked Response]"),P(n),rc$1(n))}k$1.fb=function(){if(this.g){var n=O(this.g),e=this.g.ga();this.C<e.length&&(pc$1(this),tc(this,n,e),this.i&&n!=4&&lc$1(this))}};function vc(n,e){var r=n.C,i=e.indexOf(`
`,r);return i==-1?hc$1:(r=Number(e.substring(r,i)),isNaN(r)?gc$1:(i+=1,i+r>e.length?hc$1:(e=e.substr(i,r),n.C=i+r,e)))}k$1.cancel=function(){this.I=!0,P(this)};function lc$1(n){n.Y=Date.now()+n.P,xc(n,n.P)}function xc(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=K$1(q(n.eb,n),e)}function pc$1(n){n.B&&(l.clearTimeout(n.B),n.B=null)}k$1.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Qb(this.j,this.A),this.K!=2&&(I(),J$1(17)),P(this),this.o=2,rc$1(this)):xc(this,this.Y-n)};function rc$1(n){n.l.G==0||n.I||uc$1(n.l,n)}function P(n){pc$1(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Fb(n.W),Lb(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function sc$1(n,e){try{var r=n.l;if(r.G!=0&&(r.g==n||yc$1(r.i,n))){if(r.I=n.N,!n.J&&yc$1(r.i,n)&&r.G==3){try{var i=r.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!r.u){if(r.g)if(r.g.F+3e3<n.F)zc$1(r),Ac$1(r);else break e;Bc$1(r),J$1(18)}}else r.ta=s[1],0<r.ta-r.U&&37500>s[2]&&r.N&&r.A==0&&!r.v&&(r.v=K$1(q(r.ab,r),6e3));if(1>=Cc(r.i)&&r.ka){try{r.ka()}catch{}r.ka=void 0}}else Q$1(r,11)}else if((n.J||r.g==n)&&zc$1(r),!sa$1(e))for(s=r.Ca.g.parse(e),e=0;e<s.length;e++){let d=s[e];if(r.U=d[0],d=d[1],r.G==2)if(d[0]=="c"){r.J=d[1],r.la=d[2];const f=d[3];f!=null&&(r.ma=f,r.h.info("VER="+r.ma));const g=d[4];g!=null&&(r.za=g,r.h.info("SVER="+r.za));const m=d[5];m!=null&&typeof m=="number"&&0<m&&(i=1.5*m,r.K=i,r.h.info("backChannelRequestTimeoutMs_="+i)),i=r;const _=n.g;if(_){const he=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(he){var a=i.i;!a.g&&(w(he,"spdy")||w(he,"quic")||w(he,"h2"))&&(a.j=a.l,a.g=new Set,a.h&&(Dc(a,a.h),a.h=null))}if(i.D){const ve=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;ve&&(i.sa=ve,R(i.F,i.D,ve))}}r.G=3,r.j&&r.j.xa(),r.$&&(r.O=Date.now()-n.F,r.h.info("Handshake RTT: "+r.O+"ms")),i=r;var c=n;if(i.oa=Ec$1(i,i.H?i.la:null,i.W),c.J){Fc$1(i.i,c);var u=c,h=i.K;h&&u.setTimeout(h),u.B&&(pc$1(u),lc$1(u)),i.g=c}else Gc$1(i);0<r.l.length&&Hc$1(r)}else d[0]!="stop"&&d[0]!="close"||Q$1(r,7);else r.G==3&&(d[0]=="stop"||d[0]=="close"?d[0]=="stop"?Q$1(r,7):Ic$1(r):d[0]!="noop"&&r.j&&r.j.wa(d),r.A=0)}}I(4)}catch{}}function Jc$1(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(ba$1(n)){for(var e=[],r=n.length,i=0;i<r;i++)e.push(n[i]);return e}e=[],r=0;for(i in n)e[r++]=n[i];return e}function Kc(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ba$1(n)||typeof n=="string")na$1(n,e,void 0);else{if(n.T&&typeof n.T=="function")var r=n.T();else if(n.R&&typeof n.R=="function")r=void 0;else if(ba$1(n)||typeof n=="string"){r=[];for(var i=n.length,s=0;s<i;s++)r.push(s)}else for(s in r=[],i=0,n)r[i++]=s;i=Jc$1(n),s=i.length;for(var a=0;a<s;a++)e.call(void 0,i[a],r&&r[a],n)}}function S(n,e){this.h={},this.g=[],this.i=0;var r=arguments.length;if(1<r){if(r%2)throw Error("Uneven number of arguments");for(var i=0;i<r;i+=2)this.set(arguments[i],arguments[i+1])}else if(n)if(n instanceof S)for(r=n.T(),i=0;i<r.length;i++)this.set(r[i],n.get(r[i]));else for(i in n)this.set(i,n[i])}k$1=S.prototype;k$1.R=function(){Lc(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};k$1.T=function(){return Lc(this),this.g.concat()};function Lc(n){if(n.i!=n.g.length){for(var e=0,r=0;e<n.g.length;){var i=n.g[e];T(n.h,i)&&(n.g[r++]=i),e++}n.g.length=r}if(n.i!=n.g.length){var s={};for(r=e=0;e<n.g.length;)i=n.g[e],T(s,i)||(n.g[r++]=i,s[i]=1),e++;n.g.length=r}}k$1.get=function(n,e){return T(this.h,n)?this.h[n]:e};k$1.set=function(n,e){T(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};k$1.forEach=function(n,e){for(var r=this.T(),i=0;i<r.length;i++){var s=r[i],a=this.get(s);n.call(e,a,s,this)}};function T(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var Mc$1=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nc(n,e){if(n){n=n.split("&");for(var r=0;r<n.length;r++){var i=n[r].indexOf("="),s=null;if(0<=i){var a=n[r].substring(0,i);s=n[r].substring(i+1)}else a=n[r];e(a,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function U$1(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof U$1){this.g=e!==void 0?e:n.g,Oc(this,n.j),this.s=n.s,Pc$1(this,n.i),Qc(this,n.m),this.l=n.l,e=n.h;var r=new Rc$1;r.i=e.i,e.g&&(r.g=new S(e.g),r.h=e.h),Sc(this,r),this.o=n.o}else n&&(r=String(n).match(Mc$1))?(this.g=!!e,Oc(this,r[1]||"",!0),this.s=Tc$1(r[2]||""),Pc$1(this,r[3]||"",!0),Qc(this,r[4]),this.l=Tc$1(r[5]||"",!0),Sc(this,r[6]||"",!0),this.o=Tc$1(r[7]||"")):(this.g=!!e,this.h=new Rc$1(null,this.g))}U$1.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Uc(e,Vc,!0),":");var r=this.i;return(r||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Uc(e,Vc,!0),"@"),n.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.m,r!=null&&n.push(":",String(r))),(r=this.l)&&(this.i&&r.charAt(0)!="/"&&n.push("/"),n.push(Uc(r,r.charAt(0)=="/"?Wc:Xc$1,!0))),(r=this.h.toString())&&n.push("?",r),(r=this.o)&&n.push("#",Uc(r,Yc$1)),n.join("")};function N$2(n){return new U$1(n)}function Oc(n,e,r){n.j=r?Tc$1(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Pc$1(n,e,r){n.i=r?Tc$1(e,!0):e}function Qc(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Sc(n,e,r){e instanceof Rc$1?(n.h=e,Zc(n.h,n.g)):(r||(e=Uc(e,$c)),n.h=new Rc$1(e,n.g))}function R(n,e,r){n.h.set(e,r)}function jc(n){return R(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ad(n){return n instanceof U$1?N$2(n):new U$1(n,void 0)}function bd(n,e,r,i){var s=new U$1(null,void 0);return n&&Oc(s,n),e&&Pc$1(s,e),r&&Qc(s,r),i&&(s.l=i),s}function Tc$1(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Uc(n,e,r){return typeof n=="string"?(n=encodeURI(n).replace(e,cd),r&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function cd(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Vc=/[#\/\?@]/g,Xc$1=/[#\?:]/g,Wc=/[#\?]/g,$c=/[#\?@]/g,Yc$1=/#/g;function Rc$1(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function V(n){n.g||(n.g=new S,n.h=0,n.i&&Nc(n.i,function(e,r){n.add(decodeURIComponent(e.replace(/\+/g," ")),r)}))}k$1=Rc$1.prototype;k$1.add=function(n,e){V(this),this.i=null,n=W$2(this,n);var r=this.g.get(n);return r||this.g.set(n,r=[]),r.push(e),this.h+=1,this};function dd(n,e){V(n),e=W$2(n,e),T(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,T(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&Lc(n)))}function ed(n,e){return V(n),e=W$2(n,e),T(n.g.h,e)}k$1.forEach=function(n,e){V(this),this.g.forEach(function(r,i){na$1(r,function(s){n.call(e,s,i,this)},this)},this)};k$1.T=function(){V(this);for(var n=this.g.R(),e=this.g.T(),r=[],i=0;i<e.length;i++)for(var s=n[i],a=0;a<s.length;a++)r.push(e[i]);return r};k$1.R=function(n){V(this);var e=[];if(typeof n=="string")ed(this,n)&&(e=qa(e,this.g.get(W$2(this,n))));else{n=this.g.R();for(var r=0;r<n.length;r++)e=qa(e,n[r])}return e};k$1.set=function(n,e){return V(this),this.i=null,n=W$2(this,n),ed(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};k$1.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function mc(n,e,r){dd(n,e),0<r.length&&(n.i=null,n.g.set(W$2(n,e),ra(r)),n.h+=r.length)}k$1.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),r=0;r<e.length;r++){var i=e[r],s=encodeURIComponent(String(i));i=this.R(i);for(var a=0;a<i.length;a++){var c=s;i[a]!==""&&(c+="="+encodeURIComponent(String(i[a]))),n.push(c)}}return this.i=n.join("&")};function W$2(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Zc(n,e){e&&!n.j&&(V(n),n.i=null,n.g.forEach(function(r,i){var s=i.toLowerCase();i!=s&&(dd(this,i),mc(this,s,r))},n)),n.j=e}var fd=class{constructor(n,e){this.h=n,this.g=e}};function gd(n){this.l=n||hd,l.PerformanceNavigationTiming?(n=l.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(l.g&&l.g.Ea&&l.g.Ea()&&l.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hd=10;function id(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Cc(n){return n.h?1:n.g?n.g.size:0}function yc$1(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Dc(n,e){n.g?n.g.add(e):n.h=e}function Fc$1(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}gd.prototype.cancel=function(){if(this.i=jd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function jd(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const r of n.g.values())e=e.concat(r.D);return e}return ra(n.i)}function kd(){}kd.prototype.stringify=function(n){return l.JSON.stringify(n,void 0)};kd.prototype.parse=function(n){return l.JSON.parse(n,void 0)};function ld(){this.g=new kd}function md(n,e,r){const i=r||"";try{Kc(n,function(s,a){let c=s;p(s)&&(c=rb(s)),e.push(i+a+"="+encodeURIComponent(c))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function nd(n,e){const r=new Mb;if(l.Image){const i=new Image;i.onload=ja(od,r,i,"TestLoadImage: loaded",!0,e),i.onerror=ja(od,r,i,"TestLoadImage: error",!1,e),i.onabort=ja(od,r,i,"TestLoadImage: abort",!1,e),i.ontimeout=ja(od,r,i,"TestLoadImage: timeout",!1,e),l.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function od(n,e,r,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function pd(n){this.l=n.$b||null,this.j=n.ib||!1}t(pd,Yb);pd.prototype.g=function(){return new qd(this.l,this.j)};pd.prototype.i=function(n){return function(){return n}}({});function qd(n,e){C$1.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=rd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}t(qd,C$1);var rd=0;k$1=qd.prototype;k$1.open=function(n,e){if(this.readyState!=rd)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,sd(this)};k$1.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||l).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};k$1.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,td(this)),this.readyState=rd};k$1.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,sd(this)),this.g&&(this.readyState=3,sd(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof l.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ud(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function ud(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}k$1.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?td(this):sd(this),this.readyState==3&&ud(this)}};k$1.Ua=function(n){this.g&&(this.response=this.responseText=n,td(this))};k$1.Ta=function(n){this.g&&(this.response=n,td(this))};k$1.ha=function(){this.g&&td(this)};function td(n){n.readyState=4,n.l=null,n.j=null,n.A=null,sd(n)}k$1.setRequestHeader=function(n,e){this.v.append(n,e)};k$1.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};k$1.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var r=e.next();!r.done;)r=r.value,n.push(r[0]+": "+r[1]),r=e.next();return n.join(`\r
`)};function sd(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(qd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var vd=l.JSON.parse;function X$1(n){C$1.call(this),this.headers=new S,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wd,this.K=this.L=!1}t(X$1,C$1);var wd="",xd=/^https?$/i,yd=["POST","PUT"];k$1=X$1.prototype;k$1.ea=function(n,e,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cc$1.g(),this.C=this.u?Zb(this.u):Zb(cc$1),this.g.onreadystatechange=q(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(a){zd(this,a);return}n=r||"";const s=new S(this.headers);i&&Kc(i,function(a,c){s.set(c,a)}),i=oa(s.T()),r=l.FormData&&n instanceof l.FormData,!(0<=ma$1(yd,e))||i||r||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(a,c){this.g.setRequestHeader(c,a)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ad(this),0<this.B&&((this.K=Bd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=q(this.pa,this)):this.A=Gb(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(a){zd(this,a)}};function Bd(n){return y&&Ra()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function pa$1(n){return n.toLowerCase()=="content-type"}k$1.pa=function(){typeof goog!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,D$1(this,"timeout"),this.abort(8))};function zd(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Cd(n),Dd(n)}function Cd(n){n.D||(n.D=!0,D$1(n,"complete"),D$1(n,"error"))}k$1.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,D$1(this,"complete"),D$1(this,"abort"),Dd(this))};k$1.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dd(this,!0)),X$1.Z.M.call(this)};k$1.Fa=function(){this.s||(this.F||this.v||this.l?Ed(this):this.cb())};k$1.cb=function(){Ed(this)};function Ed(n){if(n.h&&typeof goog!="undefined"&&(!n.C[1]||O(n)!=4||n.ba()!=2)){if(n.v&&O(n)==4)Gb(n.Fa,0,n);else if(D$1(n,"readystatechange"),O(n)==4){n.h=!1;try{const u=n.ba();e:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var r;if(!(r=e)){var i;if(i=u===0){var s=String(n.H).match(Mc$1)[1]||null;if(!s&&l.self&&l.self.location){var a=l.self.location.protocol;s=a.substr(0,a.length-1)}i=!xd.test(s?s.toLowerCase():"")}r=i}if(r)D$1(n,"complete"),D$1(n,"success");else{n.m=6;try{var c=2<O(n)?n.g.statusText:""}catch{c=""}n.j=c+" ["+n.ba()+"]",Cd(n)}}finally{Dd(n)}}}}function Dd(n,e){if(n.g){Ad(n);const r=n.g,i=n.C[0]?aa$1:null;n.g=null,n.C=null,e||D$1(n,"ready");try{r.onreadystatechange=i}catch{}}}function Ad(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(l.clearTimeout(n.A),n.A=null)}function O(n){return n.g?n.g.readyState:0}k$1.ba=function(){try{return 2<O(this)?this.g.status:-1}catch{return-1}};k$1.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};k$1.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),vd(e)}};function oc$1(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case wd:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}k$1.Da=function(){return this.m};k$1.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fd(n){let e="";return xa(n,function(r,i){e+=i,e+=":",e+=r,e+=`\r
`}),e}function Gd(n,e,r){e:{for(i in r){var i=!1;break e}i=!0}i||(r=Fd(r),typeof n=="string"?r!=null&&encodeURIComponent(String(r)):R(n,e,r))}function Hd(n,e,r){return r&&r.internalChannelParams&&r.internalChannelParams[n]||e}function Id(n){this.za=0,this.l=[],this.h=new Mb,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Hd("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Hd("baseRetryDelayMs",5e3,n),this.$a=Hd("retryDelaySeedMs",1e4,n),this.Ya=Hd("forwardChannelMaxRetries",2,n),this.ra=Hd("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new gd(n&&n.concurrentRequestLimit),this.Ca=new ld,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}k$1=Id.prototype;k$1.ma=8;k$1.G=1;function Ic$1(n){if(Jd(n),n.G==3){var e=n.V++,r=N$2(n.F);R(r,"SID",n.J),R(r,"RID",e),R(r,"TYPE","terminate"),Kd(n,r),e=new M$1(n,n.h,e,void 0),e.K=2,e.v=jc(N$2(r)),r=!1,l.navigator&&l.navigator.sendBeacon&&(r=l.navigator.sendBeacon(e.v.toString(),"")),!r&&l.Image&&(new Image().src=e.v,r=!0),r||(e.g=nc$1(e.l,null),e.g.ea(e.v)),e.F=Date.now(),lc$1(e)}Ld(n)}k$1.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function Ac$1(n){n.g&&(wc$1(n),n.g.cancel(),n.g=null)}function Jd(n){Ac$1(n),n.u&&(l.clearTimeout(n.u),n.u=null),zc$1(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&l.clearTimeout(n.m),n.m=null)}function Md(n,e){n.l.push(new fd(n.Za++,e)),n.G==3&&Hc$1(n)}function Hc$1(n){id(n.i)||n.m||(n.m=!0,zb(n.Ha,n),n.C=0)}function Nd(n,e){return Cc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=K$1(q(n.Ha,n,e),Od(n,n.C)),n.C++,!0)}k$1.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new M$1(this,this.h,n,void 0);let a=this.s;if(this.P&&(a?(a=ya$1(a),Aa$1(a,this.P)):a=this.P),this.o===null&&(s.H=a),this.ja)e:{for(var e=0,r=0;r<this.l.length;r++){t:{var i=this.l[r];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=r;break e}if(e===4096||r===this.l.length-1){e=r+1;break e}}e=1e3}else e=1e3;e=Pd(this,s,e),r=N$2(this.F),R(r,"RID",n),R(r,"CVER",22),this.D&&R(r,"X-HTTP-Session-Id",this.D),Kd(this,r),this.o&&a&&Gd(r,this.o,a),Dc(this.i,s),this.Ra&&R(r,"TYPE","init"),this.ja?(R(r,"$req",e),R(r,"SID","null"),s.$=!0,ic$1(s,r,null)):ic$1(s,r,e),this.G=2}}else this.G==3&&(n?Qd(this,n):this.l.length==0||id(this.i)||Qd(this))};function Qd(n,e){var r;e?r=e.m:r=n.V++;const i=N$2(n.F);R(i,"SID",n.J),R(i,"RID",r),R(i,"AID",n.U),Kd(n,i),n.o&&n.s&&Gd(i,n.o,n.s),r=new M$1(n,n.h,r,n.C+1),n.o===null&&(r.H=n.s),e&&(n.l=e.D.concat(n.l)),e=Pd(n,r,1e3),r.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),Dc(n.i,r),ic$1(r,i,e)}function Kd(n,e){n.j&&Kc({},function(r,i){R(e,i,r)})}function Pd(n,e,r){r=Math.min(n.l.length,r);var i=n.j?q(n.j.Oa,n.j,n):null;e:{var s=n.l;let a=-1;for(;;){const c=["count="+r];a==-1?0<r?(a=s[0].h,c.push("ofs="+a)):a=0:c.push("ofs="+a);let u=!0;for(let h=0;h<r;h++){let d=s[h].h;const f=s[h].g;if(d-=a,0>d)a=Math.max(0,s[h].h-100),u=!1;else try{md(f,c,"req"+d+"_")}catch{i&&i(f)}}if(u){i=c.join("&");break e}}}return n=n.l.splice(0,r),e.D=n,i}function Gc$1(n){n.g||n.u||(n.Y=1,zb(n.Ga,n),n.A=0)}function Bc$1(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=K$1(q(n.Ga,n),Od(n,n.A)),n.A++,!0)}k$1.Ga=function(){if(this.u=null,Rd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=K$1(q(this.bb,this),n)}};k$1.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,J$1(10),Ac$1(this),Rd(this))};function wc$1(n){n.B!=null&&(l.clearTimeout(n.B),n.B=null)}function Rd(n){n.g=new M$1(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=N$2(n.oa);R(e,"RID","rpc"),R(e,"SID",n.J),R(e,"CI",n.N?"0":"1"),R(e,"AID",n.U),Kd(n,e),R(e,"TYPE","xmlhttp"),n.o&&n.s&&Gd(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var r=n.g;n=n.la,r.K=1,r.v=jc(N$2(e)),r.s=null,r.U=!0,kc(r,n)}k$1.ab=function(){this.v!=null&&(this.v=null,Ac$1(this),Bc$1(this),J$1(19))};function zc$1(n){n.v!=null&&(l.clearTimeout(n.v),n.v=null)}function uc$1(n,e){var r=null;if(n.g==e){zc$1(n),wc$1(n),n.g=null;var i=2}else if(yc$1(n.i,e))r=e.D,Fc$1(n.i,e),i=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(i==1){r=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;i=Sb(),D$1(i,new Vb(i,r)),Hc$1(n)}else Gc$1(n);else if(s=e.o,s==3||s==0&&0<n.I||!(i==1&&Nd(n,e)||i==2&&Bc$1(n)))switch(r&&0<r.length&&(e=n.i,e.i=e.i.concat(r)),s){case 1:Q$1(n,5);break;case 4:Q$1(n,10);break;case 3:Q$1(n,6);break;default:Q$1(n,2)}}}function Od(n,e){let r=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(r*=2),r*e}function Q$1(n,e){if(n.h.info("Error code "+e),e==2){var r=null;n.j&&(r=null);var i=q(n.jb,n);r||(r=new U$1("//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oc(r,"https"),jc(r)),nd(r.toString(),i)}else J$1(2);n.G=0,n.j&&n.j.va(e),Ld(n),Jd(n)}k$1.jb=function(n){n?(this.h.info("Successfully pinged google.com"),J$1(2)):(this.h.info("Failed to ping google.com"),J$1(1))};function Ld(n){n.G=0,n.I=-1,n.j&&((jd(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,ra(n.l),n.l.length=0),n.j.ua())}function Ec$1(n,e,r){let i=ad(r);if(i.i!="")e&&Pc$1(i,e+"."+i.i),Qc(i,i.m);else{const s=l.location;i=bd(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,r)}return n.aa&&xa(n.aa,function(s,a){R(i,a,s)}),e=n.D,r=n.sa,e&&r&&R(i,e,r),R(i,"VER",n.ma),Kd(n,i),i}function nc$1(n,e,r){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=r&&n.Ba&&!n.qa?new X$1(new pd({ib:!0})):new X$1(n.qa),e.L=n.H,e}function Sd(){}k$1=Sd.prototype;k$1.xa=function(){};k$1.wa=function(){};k$1.va=function(){};k$1.ua=function(){};k$1.Oa=function(){};function Td(){if(y&&!(10<=Number(Ua$1)))throw Error("Environmental error: no available transport.")}Td.prototype.g=function(n,e){return new Y$1(n,e)};function Y$1(n,e){C$1.call(this),this.g=new Id(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!sa$1(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sa$1(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Z$1(this)}t(Y$1,C$1);Y$1.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,r=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),zb(q(n.hb,n,e))),J$1(0),n.W=e,n.aa=r||{},n.N=n.X,n.F=Ec$1(n,null,n.W),Hc$1(n)};Y$1.prototype.close=function(){Ic$1(this.g)};Y$1.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,Md(this.g,e)}else this.v?(e={},e.__data__=rb(n),Md(this.g,e)):Md(this.g,n)};Y$1.prototype.M=function(){this.g.j=null,delete this.j,Ic$1(this.g),delete this.g,Y$1.Z.M.call(this)};function Ud(n){ac$1.call(this);var e=n.__sm__;if(e){e:{for(const r in e){n=r;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}t(Ud,ac$1);function Vd(){bc$1.call(this),this.status=1}t(Vd,bc$1);function Z$1(n){this.g=n}t(Z$1,Sd);Z$1.prototype.xa=function(){D$1(this.g,"a")};Z$1.prototype.wa=function(n){D$1(this.g,new Ud(n))};Z$1.prototype.va=function(n){D$1(this.g,new Vd)};Z$1.prototype.ua=function(){D$1(this.g,"b")};Td.prototype.createWebChannel=Td.prototype.g;Y$1.prototype.send=Y$1.prototype.u;Y$1.prototype.open=Y$1.prototype.m;Y$1.prototype.close=Y$1.prototype.close;Wb.NO_ERROR=0;Wb.TIMEOUT=8;Wb.HTTP_ERROR=6;Xb.COMPLETE="complete";$b.EventType=L$1;L$1.OPEN="a";L$1.CLOSE="b";L$1.ERROR="c";L$1.MESSAGE="d";C$1.prototype.listen=C$1.prototype.N;X$1.prototype.listenOnce=X$1.prototype.O;X$1.prototype.getLastError=X$1.prototype.La;X$1.prototype.getLastErrorCode=X$1.prototype.Da;X$1.prototype.getStatus=X$1.prototype.ba;X$1.prototype.getResponseJson=X$1.prototype.Qa;X$1.prototype.getResponseText=X$1.prototype.ga;X$1.prototype.send=X$1.prototype.ea;var createWebChannelTransport=function(){return new Td},getStatEventTarget=function(){return Sb()},ErrorCode$1=Wb,EventType=Xb,Event=H$1,Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},FetchXmlHttpFactory=pd,WebChannel=$b,XhrIo=X$1;const D="@firebase/firestore";/**
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
 */class C{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}C.UNAUTHENTICATED=new C(null),C.GOOGLE_CREDENTIALS=new C("google-credentials-uid"),C.FIRST_PARTY=new C("first-party-uid"),C.MOCK_USER=new C("mock-user");/**
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
 */let x="9.9.0";/**
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
 */const N$1=new Logger("@firebase/firestore");function k(){return N$1.logLevel}function M(n,...e){if(N$1.logLevel<=LogLevel.DEBUG){const r=e.map(B);N$1.debug(`Firestore (${x}): ${n}`,...r)}}function F(n,...e){if(N$1.logLevel<=LogLevel.ERROR){const r=e.map(B);N$1.error(`Firestore (${x}): ${n}`,...r)}}function $(n,...e){if(N$1.logLevel<=LogLevel.WARN){const r=e.map(B);N$1.warn(`Firestore (${x}): ${n}`,...r)}}function B(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function L(n="Unexpected state"){const e=`FIRESTORE (${x}) INTERNAL ASSERTION FAILED: `+n;throw F(e),new Error(e)}function U(n,e){n||L()}function K(n,e){return n}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends FirebaseError{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class j{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
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
 */class W$1{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(C.UNAUTHENTICATED))}shutdown(){}}class J{constructor(e){this.t=e,this.currentUser=C.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){let i=this.i;const s=h=>this.i!==i?(i=this.i,r(h)):Promise.resolve();let a=new j;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new j,e.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const h=a;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new j)}},0),c()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(i=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(U(typeof i.accessToken=="string"),new W$1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new C(e)}}class Y{constructor(e,r,i){this.type="FirstParty",this.user=C.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",r);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class X{constructor(e,r,i){this.h=e,this.l=r,this.m=i}getToken(){return Promise.resolve(new Y(this.h,this.l,this.m))}start(e,r){e.enqueueRetryable(()=>r(C.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tt{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,r){const i=a=>{a.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.p;return this.p=a.token,M("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?r(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const s=a=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.g.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.g.getImmediate({optional:!0});a?s(a):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(U(typeof r.token=="string"),this.p=r.token,new Z(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function nt(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),r=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let i=0;i<n;i++)r[i]=Math.floor(256*Math.random());return r}/**
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
 */class st{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=nt(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<r&&(i+=e.charAt(s[a]%e.length))}return i}}function it(n,e){return n<e?-1:n>e?1:0}function rt(n,e,r){return n.length===e.length&&n.every((i,s)=>r(i,e[s]))}/**
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
 */class ut{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new Q(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new Q(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new Q(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*r));return new ut(r,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?it(this.nanoseconds,e.nanoseconds):it(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ct{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ct(e)}static min(){return new ct(new ut(0,0))}static max(){return new ct(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class at{constructor(e,r,i){r===void 0?r=0:r>e.length&&L(),i===void 0?i=e.length-r:i>e.length-r&&L(),this.segments=e,this.offset=r,this.len=i}get length(){return this.len}isEqual(e){return at.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof at?e.forEach(i=>{r.push(i)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,i=this.limit();r<i;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const i=Math.min(e.length,r.length);for(let s=0;s<i;s++){const a=e.get(s),c=r.get(s);if(a<c)return-1;if(a>c)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class ht extends at{construct(e,r,i){return new ht(e,r,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const r=[];for(const i of e){if(i.indexOf("//")>=0)throw new Q(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);r.push(...i.split("/").filter(s=>s.length>0))}return new ht(r)}static emptyPath(){return new ht([])}}const lt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends at{construct(e,r,i){return new ft(e,r,i)}static isValidIdentifier(e){return lt.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const r=[];let i="",s=0;const a=()=>{if(i.length===0)throw new Q(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(i),i=""};let c=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new Q(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new Q(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=h,s+=2}else u==="`"?(c=!c,s++):u!=="."||c?(i+=u,s++):(a(),s++)}if(a(),c)throw new Q(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(r)}static emptyPath(){return new ft([])}}/**
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
 */class dt{constructor(e){this.path=e}static fromPath(e){return new dt(ht.fromString(e))}static fromName(e){return new dt(ht.fromString(e).popFirst(5))}static empty(){return new dt(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ht.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return ht.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new dt(new ht(e.slice()))}}function pt(n,e){const r=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=ct.fromTimestamp(i===1e9?new ut(r+1,0):new ut(r,i));return new Tt(s,dt.empty(),e)}function It(n){return new Tt(n.readTime,n.key,-1)}class Tt{constructor(e,r,i){this.readTime=e,this.documentKey=r,this.largestBatchId=i}static min(){return new Tt(ct.min(),dt.empty(),-1)}static max(){return new Tt(ct.max(),dt.empty(),-1)}}function Et(n,e){let r=n.readTime.compareTo(e.readTime);return r!==0?r:(r=dt.comparator(n.documentKey,e.documentKey),r!==0?r:it(n.largestBatchId,e.largestBatchId))}/**
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
 */const At="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bt(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==At)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Pt{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new Pt((i,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,s)},this.catchCallback=a=>{this.wrapFailure(r,a).next(i,s)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof Pt?r:Pt.resolve(r)}catch(r){return Pt.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):Pt.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):Pt.reject(r)}static resolve(e){return new Pt((r,i)=>{r(e)})}static reject(e){return new Pt((r,i)=>{i(e)})}static waitFor(e){return new Pt((r,i)=>{let s=0,a=0,c=!1;e.forEach(u=>{++s,u.next(()=>{++a,c&&a===s&&r()},h=>i(h))}),c=!0,a===s&&r()})}static or(e){let r=Pt.resolve(!1);for(const i of e)r=r.next(s=>s?Pt.resolve(s):i());return r}static forEach(e,r){const i=[];return e.forEach((s,a)=>{i.push(r.call(this,s,a))}),this.waitFor(i)}static mapArray(e,r){return new Pt((i,s)=>{const a=e.length,c=new Array(a);let u=0;for(let h=0;h<a;h++){const d=h;r(e[d]).next(f=>{c[d]=f,++u,u===a&&i(c)},f=>s(f))}})}static doWhile(e,r){return new Pt((i,s)=>{const a=()=>{e()===!0?r().next(()=>{a()},s):i()};a()})}}function Ct(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class $t{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=i=>this.it(i),this.rt=i=>r.writeSequenceNumber(i))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Bt(n){let e=0;for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&e++;return e}function Lt(n,e){for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&e(r,n[r])}function Ut(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */$t.ot=-1;class qt{constructor(e,r){this.comparator=e,this.root=r||Gt.EMPTY}insert(e,r){return new qt(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new qt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}indexOf(e){let r=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return r+i.left.size;s<0?i=i.left:(r+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,i)=>(e(r,i),!1))}toString(){const e=[];return this.inorderTraversal((r,i)=>(e.push(`${r}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kt(this.root,e,this.comparator,!0)}}class Kt{constructor(e,r,i,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=r?i(e.key,r):1,r&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,r,i,s,a){this.key=e,this.value=r,this.color=i!=null?i:Gt.RED,this.left=s!=null?s:Gt.EMPTY,this.right=a!=null?a:Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,i,s,a){return new Gt(e!=null?e:this.key,r!=null?r:this.value,i!=null?i:this.color,s!=null?s:this.left,a!=null?a:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,i){let s=this;const a=i(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,r,i),null):a===0?s.copy(null,r,null,null,null):s.copy(null,null,null,null,s.right.insert(e,r,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let i,s=this;if(r(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,r),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),r(e,s.key)===0){if(s.right.isEmpty())return Gt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,r))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(n,e,r,i,s){return this}insert(n,e,r){return new Gt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qt{constructor(e){this.comparator=e,this.data=new qt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,i)=>(e(r),!1))}forEachInRange(e,r){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;r(s.key)}}forEachWhile(e,r){let i;for(i=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new jt(this.data.getIterator())}getIteratorFrom(e){return new jt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(i=>{r=r.add(i)}),r}isEqual(e){if(!(e instanceof Qt)||this.size!==e.size)return!1;const r=this.data.getIterator(),i=e.data.getIterator();for(;r.hasNext();){const s=r.getNext().key,a=i.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new Qt(this.comparator);return r.data=e,r}}class jt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new zt([])}unionWith(e){let r=new Qt(ft.comparator);for(const i of this.fields)r=r.add(i);for(const i of e)r=r.add(i);return new zt(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return rt(this.fields,e.fields,(r,i)=>r.isEqual(i))}}/**
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
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const r=atob(e);return new Jt(r)}static fromUint8Array(e){const r=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Jt(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return it(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const Yt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(U(!!n),typeof n=="string"){let e=0;const r=Yt.exec(n);if(U(!!r),r[1]){let s=r[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Zt(n.seconds),nanos:Zt(n.nanos)}}function Zt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function te(n){return typeof n=="string"?Jt.fromBase64String(n):Jt.fromUint8Array(n)}/**
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
 */function ee(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function ne(n){const e=n.mapValue.fields.__previous_value__;return ee(e)?ne(e):e}function se(n){const e=Xt(n.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class ie{constructor(e,r,i,s,a,c,u,h){this.databaseId=e,this.appId=r,this.persistenceKey=i,this.host=s,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.useFetchStreams=h}}class re{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new re("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof re&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function oe(n){return n==null}function ue(n){return n===0&&1/n==-1/0}function ce(n){return typeof n=="number"&&Number.isInteger(n)&&!ue(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ae={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ee(n)?4:be(n)?9007199254740991:10:L()}function fe(n,e){if(n===e)return!0;const r=le(n);if(r!==le(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return se(n).isEqual(se(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Xt(i.timestampValue),c=Xt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return te(i.bytesValue).isEqual(te(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Zt(i.geoPointValue.latitude)===Zt(s.geoPointValue.latitude)&&Zt(i.geoPointValue.longitude)===Zt(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Zt(i.integerValue)===Zt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Zt(i.doubleValue),c=Zt(s.doubleValue);return a===c?ue(a)===ue(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return rt(n.arrayValue.values||[],e.arrayValue.values||[],fe);case 10:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Bt(a)!==Bt(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!fe(a[u],c[u])))return!1;return!0}(n,e);default:return L()}}function de(n,e){return(n.values||[]).find(r=>fe(r,e))!==void 0}function _e(n,e){if(n===e)return 0;const r=le(n),i=le(e);if(r!==i)return it(r,i);switch(r){case 0:case 9007199254740991:return 0;case 1:return it(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=Zt(s.integerValue||s.doubleValue),u=Zt(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return we(n.timestampValue,e.timestampValue);case 4:return we(se(n),se(e));case 5:return it(n.stringValue,e.stringValue);case 6:return function(s,a){const c=te(s),u=te(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const d=it(c[h],u[h]);if(d!==0)return d}return it(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=it(Zt(s.latitude),Zt(a.latitude));return c!==0?c:it(Zt(s.longitude),Zt(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const c=s.values||[],u=a.values||[];for(let h=0;h<c.length&&h<u.length;++h){const d=_e(c[h],u[h]);if(d)return d}return it(c.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===ae.mapValue&&a===ae.mapValue)return 0;if(s===ae.mapValue)return 1;if(a===ae.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const g=it(u[f],d[f]);if(g!==0)return g;const m=_e(c[u[f]],h[d[f]]);if(m!==0)return m}return it(u.length,d.length)}(n.mapValue,e.mapValue);default:throw L()}}function we(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return it(n,e);const r=Xt(n),i=Xt(e),s=it(r.seconds,i.seconds);return s!==0?s:it(r.nanos,i.nanos)}function me(n){return ge(n)}function ge(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=Xt(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?te(n.bytesValue).toBase64():"referenceValue"in n?(r=n.referenceValue,dt.fromName(r).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",a=!0;for(const c of i.values||[])a?a=!1:s+=",",s+=ge(c);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let a="{",c=!0;for(const u of s)c?c=!1:a+=",",a+=`${u}:${ge(i.fields[u])}`;return a+"}"}(n.mapValue):L();var e,r}function ye(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function pe(n){return!!n&&"integerValue"in n}function Ie(n){return!!n&&"arrayValue"in n}function Te(n){return!!n&&"nullValue"in n}function Ee(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ae(n){return!!n&&"mapValue"in n}function Re(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Lt(n.mapValue.fields,(r,i)=>e.mapValue.fields[r]=Re(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(n.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=Re(n.arrayValue.values[r]);return e}return Object.assign({},n)}function be(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let i=0;i<e.length-1;++i)if(r=(r.mapValue.fields||{})[e.get(i)],!Ae(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=Re(r)}setAll(e){let r=ft.emptyPath(),i={},s=[];e.forEach((c,u)=>{if(!r.isImmediateParentOf(u)){const h=this.getFieldsMap(r);this.applyChanges(h,i,s),i={},s=[],r=u.popLast()}c?i[u.lastSegment()]=Re(c):s.push(u.lastSegment())});const a=this.getFieldsMap(r);this.applyChanges(a,i,s)}delete(e){const r=this.field(e.popLast());Ae(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return fe(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=r.mapValue.fields[e.get(i)];Ae(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},r.mapValue.fields[e.get(i)]=s),r=s}return r.mapValue.fields}applyChanges(e,r,i){Lt(r,(s,a)=>e[s]=a);for(const s of i)delete e[s]}clone(){return new De(Re(this.value))}}function Ce(n){const e=[];return Lt(n.fields,(r,i)=>{const s=new ft([r]);if(Ae(i)){const a=Ce(i.mapValue).fields;if(a.length===0)e.push(s);else for(const c of a)e.push(s.child(c))}else e.push(s)}),new zt(e)}/**
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
 */class xe{constructor(e,r,i,s,a,c){this.key=e,this.documentType=r,this.version=i,this.readTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new xe(e,0,ct.min(),ct.min(),De.empty(),0)}static newFoundDocument(e,r,i){return new xe(e,1,r,ct.min(),i,0)}static newNoDocument(e,r){return new xe(e,2,r,ct.min(),De.empty(),0)}static newUnknownDocument(e,r){return new xe(e,3,r,ct.min(),De.empty(),2)}convertToFoundDocument(e,r){return this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ct.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ne{constructor(e,r=null,i=[],s=[],a=null,c=null,u=null){this.path=e,this.collectionGroup=r,this.orderBy=i,this.filters=s,this.limit=a,this.startAt=c,this.endAt=u,this.ut=null}}function ke(n,e=null,r=[],i=[],s=null,a=null,c=null){return new Ne(n,e,r,i,s,a,c)}function Oe(n){const e=K(n);if(e.ut===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(i=>{return(s=i).field.canonicalString()+s.op.toString()+me(s.value);var s}).join(","),r+="|ob:",r+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),oe(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>me(i)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>me(i)).join(",")),e.ut=r}return e.ut}function Me(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(r=>{return`${(i=r).field.canonicalString()} ${i.op} ${me(i.value)}`;var i}).join(", ")}]`),oe(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(r=>me(r)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(r=>me(r)).join(",")),`Target(${e})`}function Fe(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!Ze(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(r=n.filters[s],i=e.filters[s],r.op!==i.op||!r.field.isEqual(i.field)||!fe(r.value,i.value))return!1;var r,i;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!en(n.startAt,e.startAt)&&en(n.endAt,e.endAt)}function $e(n){return dt.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class qe extends class{}{constructor(e,r,i){super(),this.field=e,this.op=r,this.value=i}static create(e,r,i){return e.isKeyField()?r==="in"||r==="not-in"?this.ct(e,r,i):new Ke(e,r,i):r==="array-contains"?new We(e,i):r==="in"?new ze(e,i):r==="not-in"?new He(e,i):r==="array-contains-any"?new Je(e,i):new qe(e,r,i)}static ct(e,r,i){return r==="in"?new Ge(e,i):new Qe(e,i)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.at(_e(r,this.value)):r!==null&&le(this.value)===le(r)&&this.at(_e(r,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ke extends qe{constructor(e,r,i){super(e,r,i),this.key=dt.fromName(i.referenceValue)}matches(e){const r=dt.comparator(e.key,this.key);return this.at(r)}}class Ge extends qe{constructor(e,r){super(e,"in",r),this.keys=je("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class Qe extends qe{constructor(e,r){super(e,"not-in",r),this.keys=je("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function je(n,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(i=>dt.fromName(i.referenceValue))}class We extends qe{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return Ie(r)&&de(r.arrayValue,this.value)}}class ze extends qe{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&de(this.value.arrayValue,r)}}class He extends qe{constructor(e,r){super(e,"not-in",r)}matches(e){if(de(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!de(this.value.arrayValue,r)}}class Je extends qe{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!Ie(r)||!r.arrayValue.values)&&r.arrayValue.values.some(i=>de(this.value.arrayValue,i))}}class Ye{constructor(e,r){this.position=e,this.inclusive=r}}class Xe{constructor(e,r="asc"){this.field=e,this.dir=r}}function Ze(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function tn(n,e,r){let i=0;for(let s=0;s<n.position.length;s++){const a=e[s],c=n.position[s];if(a.field.isKeyField()?i=dt.comparator(dt.fromName(c.referenceValue),r.key):i=_e(c,r.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function en(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let r=0;r<n.position.length;r++)if(!fe(n.position[r],e.position[r]))return!1;return!0}/**
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
 */class nn{constructor(e,r=null,i=[],s=[],a=null,c="F",u=null,h=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=c,this.startAt=u,this.endAt=h,this.lt=null,this.ft=null,this.startAt,this.endAt}}function sn(n,e,r,i,s,a,c,u){return new nn(n,e,r,i,s,a,c,u)}function rn(n){return new nn(n)}function on(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function un(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function cn(n){for(const e of n.filters)if(e.ht())return e.field;return null}function an(n){return n.collectionGroup!==null}function hn(n){const e=K(n);if(e.lt===null){e.lt=[];const r=cn(e),i=un(e);if(r!==null&&i===null)r.isKeyField()||e.lt.push(new Xe(r)),e.lt.push(new Xe(ft.keyField(),"asc"));else{let s=!1;for(const a of e.explicitOrderBy)e.lt.push(a),a.field.isKeyField()&&(s=!0);if(!s){const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Xe(ft.keyField(),a))}}}return e.lt}function ln(n){const e=K(n);if(!e.ft)if(e.limitType==="F")e.ft=ke(e.path,e.collectionGroup,hn(e),e.filters,e.limit,e.startAt,e.endAt);else{const r=[];for(const a of hn(e)){const c=a.dir==="desc"?"asc":"desc";r.push(new Xe(a.field,c))}const i=e.endAt?new Ye(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ye(e.startAt.position,e.startAt.inclusive):null;e.ft=ke(e.path,e.collectionGroup,r,e.filters,e.limit,i,s)}return e.ft}function fn(n,e,r){return new nn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,r,n.startAt,n.endAt)}function dn(n,e){return Fe(ln(n),ln(e))&&n.limitType===e.limitType}function _n(n){return`${Oe(ln(n))}|lt:${n.limitType}`}function wn(n){return`Query(target=${Me(ln(n))}; limitType=${n.limitType})`}function mn(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):dt.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of r.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(s,a,c){const u=tn(s,a,c);return s.inclusive?u<=0:u<0}(r.startAt,hn(r),i)||r.endAt&&!function(s,a,c){const u=tn(s,a,c);return s.inclusive?u>=0:u>0}(r.endAt,hn(r),i))}(n,e)}function gn(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yn(n){return(e,r)=>{let i=!1;for(const s of hn(n)){const a=pn(s,e,r);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function pn(n,e,r){const i=n.field.isKeyField()?dt.comparator(e.key,r.key):function(s,a,c){const u=a.data.field(s),h=c.data.field(s);return u!==null&&h!==null?_e(u,h):L()}(n.field,e,r);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return L()}}/**
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
 */function In(n,e){if(n.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ue(e)?"-0":e}}function Tn(n){return{integerValue:""+n}}function En(n,e){return ce(e)?Tn(e):In(n,e)}/**
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
 */class An{constructor(){this._=void 0}}function Rn(n,e,r){return n instanceof vn?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(a.fields.__previous_value__=s),{mapValue:a}}(r,e):n instanceof Vn?Sn(n,e):n instanceof Dn?Cn(n,e):function(i,s){const a=Pn(i,s),c=Nn(a)+Nn(i._t);return pe(a)&&pe(i._t)?Tn(c):In(i.wt,c)}(n,e)}function bn(n,e,r){return n instanceof Vn?Sn(n,e):n instanceof Dn?Cn(n,e):r}function Pn(n,e){return n instanceof xn?pe(r=e)||function(i){return!!i&&"doubleValue"in i}(r)?e:{integerValue:0}:null;var r}class vn extends An{}class Vn extends An{constructor(e){super(),this.elements=e}}function Sn(n,e){const r=kn(e);for(const i of n.elements)r.some(s=>fe(s,i))||r.push(i);return{arrayValue:{values:r}}}class Dn extends An{constructor(e){super(),this.elements=e}}function Cn(n,e){let r=kn(e);for(const i of n.elements)r=r.filter(s=>!fe(s,i));return{arrayValue:{values:r}}}class xn extends An{constructor(e,r){super(),this.wt=e,this._t=r}}function Nn(n){return Zt(n.integerValue||n.doubleValue)}function kn(n){return Ie(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Mn(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Vn&&i instanceof Vn||r instanceof Dn&&i instanceof Dn?rt(r.elements,i.elements,fe):r instanceof xn&&i instanceof xn?fe(r._t,i._t):r instanceof vn&&i instanceof vn}(n.transform,e.transform)}class Fn{constructor(e,r){this.version=e,this.transformResults=r}}class $n{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bn(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ln{}function Un(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yn(n.key,$n.none()):new jn(n.key,n.data,$n.none());{const r=n.data,i=De.empty();let s=new Qt(ft.comparator);for(let a of e.fields)if(!s.has(a)){let c=r.field(a);c===null&&a.length>1&&(a=a.popLast(),c=r.field(a)),c===null?i.delete(a):i.set(a,c),s=s.add(a)}return new Wn(n.key,i,new zt(s.toArray()),$n.none())}}function qn(n,e,r){n instanceof jn?function(i,s,a){const c=i.value.clone(),u=Hn(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,r):n instanceof Wn?function(i,s,a){if(!Bn(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Hn(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(zn(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,r):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,r)}function Kn(n,e,r,i){return n instanceof jn?function(s,a,c,u){if(!Bn(s.precondition,a))return c;const h=s.value.clone(),d=Jn(s.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,r,i):n instanceof Wn?function(s,a,c,u){if(!Bn(s.precondition,a))return c;const h=Jn(s.fieldTransforms,u,a),d=a.data;return d.setAll(zn(s)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,r,i):function(s,a,c){return Bn(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,r)}function Gn(n,e){let r=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),a=Pn(i.transform,s||null);a!=null&&(r===null&&(r=De.empty()),r.set(i.field,a))}return r||null}function Qn(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&rt(r,i,(s,a)=>Mn(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class jn extends Ln{constructor(e,r,i,s=[]){super(),this.key=e,this.value=r,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wn extends Ln{constructor(e,r,i,s,a=[]){super(),this.key=e,this.data=r,this.fieldMask=i,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function zn(n){const e=new Map;return n.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const i=n.data.field(r);e.set(r,i)}}),e}function Hn(n,e,r){const i=new Map;U(n.length===r.length);for(let s=0;s<r.length;s++){const a=n[s],c=a.transform,u=e.data.field(a.field);i.set(a.field,bn(c,u,r[s]))}return i}function Jn(n,e,r){const i=new Map;for(const s of n){const a=s.transform,c=r.data.field(s.field);i.set(s.field,Rn(a,c,e))}return i}class Yn extends Ln{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xn extends Ln{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zn{constructor(e){this.count=e}}/**
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
 */var ts,es;function ns(n){switch(n){default:return L();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function ss(n){if(n===void 0)return F("GRPC error has no .code"),G.UNKNOWN;switch(n){case ts.OK:return G.OK;case ts.CANCELLED:return G.CANCELLED;case ts.UNKNOWN:return G.UNKNOWN;case ts.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ts.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ts.INTERNAL:return G.INTERNAL;case ts.UNAVAILABLE:return G.UNAVAILABLE;case ts.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ts.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ts.NOT_FOUND:return G.NOT_FOUND;case ts.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ts.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ts.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ts.ABORTED:return G.ABORTED;case ts.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ts.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ts.DATA_LOSS:return G.DATA_LOSS;default:return L()}}(es=ts||(ts={}))[es.OK=0]="OK",es[es.CANCELLED=1]="CANCELLED",es[es.UNKNOWN=2]="UNKNOWN",es[es.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",es[es.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",es[es.NOT_FOUND=5]="NOT_FOUND",es[es.ALREADY_EXISTS=6]="ALREADY_EXISTS",es[es.PERMISSION_DENIED=7]="PERMISSION_DENIED",es[es.UNAUTHENTICATED=16]="UNAUTHENTICATED",es[es.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",es[es.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",es[es.ABORTED=10]="ABORTED",es[es.OUT_OF_RANGE=11]="OUT_OF_RANGE",es[es.UNIMPLEMENTED=12]="UNIMPLEMENTED",es[es.INTERNAL=13]="INTERNAL",es[es.UNAVAILABLE=14]="UNAVAILABLE",es[es.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class is{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(const[s,a]of i)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,r){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,r]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,r]);s.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[r]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lt(this.inner,(r,i)=>{for(const[s,a]of i)e(s,a)})}isEmpty(){return Ut(this.inner)}size(){return this.innerSize}}/**
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
 */const rs=new qt(dt.comparator);function os(){return rs}const us=new qt(dt.comparator);function cs(...n){let e=us;for(const r of n)e=e.insert(r.key,r);return e}function as(n){let e=us;return n.forEach((r,i)=>e=e.insert(r,i.overlayedDocument)),e}function hs(){return fs()}function ls(){return fs()}function fs(){return new is(n=>n.toString(),(n,e)=>n.isEqual(e))}const ds=new qt(dt.comparator),_s=new Qt(dt.comparator);function ws(...n){let e=_s;for(const r of n)e=e.add(r);return e}const ms=new Qt(it);function gs(){return ms}/**
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
 */class ys{constructor(e,r,i,s,a){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,r){const i=new Map;return i.set(e,ps.createSynthesizedTargetChangeForCurrentChange(e,r)),new ys(ct.min(),i,gs(),os(),ws())}}class ps{constructor(e,r,i,s,a){this.resumeToken=e,this.current=r,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,r){return new ps(Jt.EMPTY_BYTE_STRING,r,ws(),ws(),ws())}}/**
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
 */class Is{constructor(e,r,i,s){this.gt=e,this.removedTargetIds=r,this.key=i,this.yt=s}}class Ts{constructor(e,r){this.targetId=e,this.It=r}}class Es{constructor(e,r,i=Jt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=r,this.resumeToken=i,this.cause=s}}class As{constructor(){this.Tt=0,this.Et=Ps(),this.At=Jt.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ws(),r=ws(),i=ws();return this.Et.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:r=r.add(s);break;case 1:i=i.add(s);break;default:L()}}),new ps(this.At,this.Rt,e,r,i)}Dt(){this.bt=!1,this.Et=Ps()}Ct(e,r){this.bt=!0,this.Et=this.Et.insert(e,r)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Rs{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=os(),this.Bt=bs(),this.Lt=new Qt(it)}Ut(e){for(const r of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(r,e.yt):this.Kt(r,e.key,e.yt);for(const r of e.removedTargetIds)this.Kt(r,e.key,e.yt)}Gt(e){this.forEachTarget(e,r=>{const i=this.Qt(r);switch(e.state){case 0:this.jt(r)&&i.Vt(e.resumeToken);break;case 1:i.kt(),i.Pt||i.Dt(),i.Vt(e.resumeToken);break;case 2:i.kt(),i.Pt||this.removeTarget(r);break;case 3:this.jt(r)&&(i.Ot(),i.Vt(e.resumeToken));break;case 4:this.jt(r)&&(this.Wt(r),i.Vt(e.resumeToken));break;default:L()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.Ft.forEach((i,s)=>{this.jt(s)&&r(s)})}zt(e){const r=e.targetId,i=e.It.count,s=this.Ht(r);if(s){const a=s.target;if($e(a))if(i===0){const c=new dt(a.path);this.Kt(r,c,xe.newNoDocument(c,ct.min()))}else U(i===1);else this.Jt(r)!==i&&(this.Wt(r),this.Lt=this.Lt.add(r))}}Yt(e){const r=new Map;this.Ft.forEach((a,c)=>{const u=this.Ht(c);if(u){if(a.current&&$e(u.target)){const h=new dt(u.target.path);this.$t.get(h)!==null||this.Xt(c,h)||this.Kt(c,h,xe.newNoDocument(h,e))}a.vt&&(r.set(c,a.St()),a.Dt())}});let i=ws();this.Bt.forEach((a,c)=>{let u=!0;c.forEachWhile(h=>{const d=this.Ht(h);return!d||d.purpose===2||(u=!1,!1)}),u&&(i=i.add(a))}),this.$t.forEach((a,c)=>c.setReadTime(e));const s=new ys(e,r,this.Lt,this.$t,i);return this.$t=os(),this.Bt=bs(),this.Lt=new Qt(it),s}qt(e,r){if(!this.jt(e))return;const i=this.Xt(e,r.key)?2:0;this.Qt(e).Ct(r.key,i),this.$t=this.$t.insert(r.key,r),this.Bt=this.Bt.insert(r.key,this.Zt(r.key).add(e))}Kt(e,r,i){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,r)?s.Ct(r,1):s.xt(r),this.Bt=this.Bt.insert(r,this.Zt(r).delete(e)),i&&(this.$t=this.$t.insert(r,i))}removeTarget(e){this.Ft.delete(e)}Jt(e){const r=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let r=this.Ft.get(e);return r||(r=new As,this.Ft.set(e,r)),r}Zt(e){let r=this.Bt.get(e);return r||(r=new Qt(it),this.Bt=this.Bt.insert(e,r)),r}jt(e){const r=this.Ht(e)!==null;return r||M("WatchChangeAggregator","Detected inactive target",e),r}Ht(e){const r=this.Ft.get(e);return r&&r.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new As),this.Mt.getRemoteKeysForTarget(e).forEach(r=>{this.Kt(e,r,null)})}Xt(e,r){return this.Mt.getRemoteKeysForTarget(e).has(r)}}function bs(){return new qt(dt.comparator)}function Ps(){return new qt(dt.comparator)}/**
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
 */const vs=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Vs=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ss{constructor(e,r){this.databaseId=e,this.dt=r}}function Ds(n,e){return n.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cs(n,e){return n.dt?e.toBase64():e.toUint8Array()}function xs(n,e){return Ds(n,e.toTimestamp())}function Ns(n){return U(!!n),ct.fromTimestamp(function(e){const r=Xt(e);return new ut(r.seconds,r.nanos)}(n))}function ks(n,e){return function(r){return new ht(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Os(n){const e=ht.fromString(n);return U(ui(e)),e}function Ms(n,e){return ks(n.databaseId,e.path)}function Fs(n,e){const r=Os(e);if(r.get(1)!==n.databaseId.projectId)throw new Q(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+n.databaseId.projectId);if(r.get(3)!==n.databaseId.database)throw new Q(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+n.databaseId.database);return new dt(Us(r))}function $s(n,e){return ks(n.databaseId,e)}function Bs(n){const e=Os(n);return e.length===4?ht.emptyPath():Us(e)}function Ls(n){return new ht(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Us(n){return U(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qs(n,e,r){return{name:Ms(n,e),fields:r.value.mapValue.fields}}function Qs(n,e){let r;if("targetChange"in e){e.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(h,d){return h.dt?(U(d===void 0||typeof d=="string"),Jt.fromBase64String(d||"")):(U(d===void 0||d instanceof Uint8Array),Jt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,u=c&&function(h){const d=h.code===void 0?G.UNKNOWN:ss(h.code);return new Q(d,h.message||"")}(c);r=new Es(i,s,a,u||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Fs(n,i.document.name),a=Ns(i.document.updateTime),c=new De({mapValue:{fields:i.document.fields}}),u=xe.newFoundDocument(s,a,c),h=i.targetIds||[],d=i.removedTargetIds||[];r=new Is(h,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Fs(n,i.document),a=i.readTime?Ns(i.readTime):ct.min(),c=xe.newNoDocument(s,a),u=i.removedTargetIds||[];r=new Is([],u,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Fs(n,i.document),a=i.removedTargetIds||[];r=new Is([],a,s,null)}else{if(!("filter"in e))return L();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,a=new Zn(s),c=i.targetId;r=new Ts(c,a)}}return r}function js(n,e){let r;if(e instanceof jn)r={update:qs(n,e.key,e.value)};else if(e instanceof Yn)r={delete:Ms(n,e.key)};else if(e instanceof Wn)r={update:qs(n,e.key,e.data),updateMask:oi(e.fieldMask)};else{if(!(e instanceof Xn))return L();r={verify:Ms(n,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(i=>function(s,a){const c=a.transform;if(c instanceof vn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Dn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof xn)return{fieldPath:a.field.canonicalString(),increment:c._t};throw L()}(0,i))),e.precondition.isNone||(r.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xs(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(n,e.precondition)),r}function zs(n,e){return n&&n.length>0?(U(e!==void 0),n.map(r=>function(i,s){let a=i.updateTime?Ns(i.updateTime):Ns(s);return a.isEqual(ct.min())&&(a=Ns(s)),new Fn(a,i.transformResults||[])}(r,e))):[]}function Hs(n,e){return{documents:[$s(n,e.path)]}}function Js(n,e){const r={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(r.parent=$s(n,i),r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r.parent=$s(n,i.popLast()),r.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(h){if(h.length===0)return;const d=h.map(f=>function(g){if(g.op==="=="){if(Ee(g.value))return{unaryFilter:{field:ni(g.field),op:"IS_NAN"}};if(Te(g.value))return{unaryFilter:{field:ni(g.field),op:"IS_NULL"}}}else if(g.op==="!="){if(Ee(g.value))return{unaryFilter:{field:ni(g.field),op:"IS_NOT_NAN"}};if(Te(g.value))return{unaryFilter:{field:ni(g.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(g.field),op:ei(g.op),value:g.value}}}(f));return d.length===1?d[0]:{compositeFilter:{op:"AND",filters:d}}}(e.filters);s&&(r.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(d=>function(f){return{field:ni(f.field),direction:ti(f.dir)}}(d))}(e.orderBy);a&&(r.structuredQuery.orderBy=a);const c=function(h,d){return h.dt||oe(d)?d:{value:d}}(n,e.limit);var u;return c!==null&&(r.structuredQuery.limit=c),e.startAt&&(r.structuredQuery.startAt={before:(u=e.startAt).inclusive,values:u.position}),e.endAt&&(r.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),r}function Ys(n){let e=Bs(n.parent);const r=n.structuredQuery,i=r.from?r.from.length:0;let s=null;if(i>0){U(i===1);const f=r.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let a=[];r.where&&(a=Zs(r.where));let c=[];r.orderBy&&(c=r.orderBy.map(f=>function(g){return new Xe(si(g.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f)));let u=null;r.limit&&(u=function(f){let g;return g=typeof f=="object"?f.value:f,oe(g)?null:g}(r.limit));let h=null;r.startAt&&(h=function(f){const g=!!f.before,m=f.values||[];return new Ye(m,g)}(r.startAt));let d=null;return r.endAt&&(d=function(f){const g=!f.before,m=f.values||[];return new Ye(m,g)}(r.endAt)),sn(e,s,c,a,u,"F",h,d)}function Xs(n,e){const r=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return L()}}(0,e.purpose);return r==null?null:{"goog-listen-tags":r}}function Zs(n){return n?n.unaryFilter!==void 0?[ri(n)]:n.fieldFilter!==void 0?[ii(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Zs(e)).reduce((e,r)=>e.concat(r)):L():[]}function ti(n){return vs[n]}function ei(n){return Vs[n]}function ni(n){return{fieldPath:n.canonicalString()}}function si(n){return ft.fromServerFormat(n.fieldPath)}function ii(n){return qe.create(si(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(n.fieldFilter.op),n.fieldFilter.value)}function ri(n){switch(n.unaryFilter.op){case"IS_NAN":const e=si(n.unaryFilter.field);return qe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const r=si(n.unaryFilter.field);return qe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=si(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=si(n.unaryFilter.field);return qe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return L()}}function oi(n){const e=[];return n.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function ui(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Fi{constructor(e,r,i,s){this.batchId=e,this.localWriteTime=r,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,r){const i=r.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&qn(a,e,i[s])}}applyToLocalView(e,r){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(r=Kn(i,e,r,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(r=Kn(i,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const i=ls();return this.mutations.forEach(s=>{const a=e.get(s.key),c=a.overlayedDocument;let u=this.applyToLocalView(c,a.mutatedFields);u=r.has(s.key)?null:u;const h=Un(c,u);h!==null&&i.set(s.key,h),c.isValidDocument()||c.convertToNoDocument(ct.min())}),i}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),ws())}isEqual(e){return this.batchId===e.batchId&&rt(this.mutations,e.mutations,(r,i)=>Qn(r,i))&&rt(this.baseMutations,e.baseMutations,(r,i)=>Qn(r,i))}}class $i{constructor(e,r,i,s){this.batch=e,this.commitVersion=r,this.mutationResults=i,this.docVersions=s}static from(e,r,i){U(e.mutations.length===i.length);let s=ds;const a=e.mutations;for(let c=0;c<a.length;c++)s=s.insert(a[c].key,i[c].version);return new $i(e,r,i,s)}}/**
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
 */class Bi{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Li{constructor(e,r,i,s,a=ct.min(),c=ct.min(),u=Jt.EMPTY_BYTE_STRING){this.target=e,this.targetId=r,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=u}withSequenceNumber(e){return new Li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,r){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Ui{constructor(e){this.ne=e}}function Ji(n){const e=Ys({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fn(e,e.limit,"L"):e}/**
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
 */class mr{constructor(){this.ze=new gr}addToCollectionParentIndex(e,r){return this.ze.add(r),Pt.resolve()}getCollectionParents(e,r){return Pt.resolve(this.ze.getEntries(r))}addFieldIndex(e,r){return Pt.resolve()}deleteFieldIndex(e,r){return Pt.resolve()}getDocumentsMatchingTarget(e,r){return Pt.resolve(null)}getIndexType(e,r){return Pt.resolve(0)}getFieldIndexes(e,r){return Pt.resolve([])}getNextCollectionGroupToUpdate(e){return Pt.resolve(null)}getMinOffset(e,r){return Pt.resolve(Tt.min())}getMinOffsetFromCollectionGroup(e,r){return Pt.resolve(Tt.min())}updateCollectionGroup(e,r,i){return Pt.resolve()}updateIndexEntries(e,r){return Pt.resolve()}}class gr{constructor(){this.index={}}add(e){const r=e.lastSegment(),i=e.popLast(),s=this.index[r]||new Qt(ht.comparator),a=!s.has(i);return this.index[r]=s.add(i),a}has(e){const r=e.lastSegment(),i=e.popLast(),s=this.index[r];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Qt(ht.comparator)).toArray()}}/**
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
 */class kr{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new kr(0)}static Rn(){return new kr(-1)}}/**
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
 */class Qr{constructor(){this.changes=new is(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const i=this.changes.get(r);return i!==void 0?Pt.resolve(i):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class to{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
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
 */class eo{constructor(e,r,i,s){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,r){let i=null;return this.documentOverlayCache.getOverlay(e,r).next(s=>(i=s,this.getBaseDocument(e,r,i))).next(s=>(i!==null&&Kn(i.mutation,s,zt.empty(),ut.now()),s))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(i=>this.getLocalViewOfDocuments(e,i,ws()).next(()=>i))}getLocalViewOfDocuments(e,r,i=ws()){const s=hs();return this.populateOverlays(e,s,r).next(()=>this.computeViews(e,r,s,i).next(a=>{let c=cs();return a.forEach((u,h)=>{c=c.insert(u,h.overlayedDocument)}),c}))}getOverlayedDocuments(e,r){const i=hs();return this.populateOverlays(e,i,r).next(()=>this.computeViews(e,r,i,ws()))}populateOverlays(e,r,i){const s=[];return i.forEach(a=>{r.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((c,u)=>{r.set(c,u)})})}computeViews(e,r,i,s){let a=os();const c=fs(),u=fs();return r.forEach((h,d)=>{const f=i.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Wn)?a=a.insert(d.key,d):f!==void 0&&(c.set(d.key,f.mutation.getFieldMask()),Kn(f.mutation,d,f.mutation.getFieldMask(),ut.now()))}),this.recalculateAndSaveOverlays(e,a).next(h=>(h.forEach((d,f)=>c.set(d,f)),r.forEach((d,f)=>{var g;return u.set(d,new to(f,(g=c.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(e,r){const i=fs();let s=new qt((c,u)=>c-u),a=ws();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(c=>{for(const u of c)u.keys().forEach(h=>{const d=r.get(h);if(d===null)return;let f=i.get(h)||zt.empty();f=u.applyToLocalView(d,f),i.set(h,f);const g=(s.get(u.batchId)||ws()).add(h);s=s.insert(u.batchId,g)})}).next(()=>{const c=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,f=h.value,g=ls();f.forEach(m=>{if(!a.has(m)){const _=Un(r.get(m),i.get(m));_!==null&&g.set(m,_),a=a.add(m)}}),c.push(this.documentOverlayCache.saveOverlays(e,d,g))}return Pt.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,r,i){return function(s){return dt.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):an(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,i):this.getDocumentsMatchingCollectionQuery(e,r,i)}getNextDocuments(e,r,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,i,s).next(a=>{const c=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,i.largestBatchId,s-a.size):Pt.resolve(hs());let u=-1,h=a;return c.next(d=>Pt.forEach(d,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),a.get(f)?Pt.resolve():this.getBaseDocument(e,f,g).next(m=>{h=h.insert(f,m)}))).next(()=>this.populateOverlays(e,d,a)).next(()=>this.computeViews(e,h,d,ws())).next(f=>({batchId:u,changes:as(f)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new dt(r)).next(i=>{let s=cs();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,r,i){const s=r.collectionGroup;let a=cs();return this.indexManager.getCollectionParents(e,s).next(c=>Pt.forEach(c,u=>{const h=function(d,f){return new nn(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(r,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,i).next(d=>{d.forEach((f,g)=>{a=a.insert(f,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,r,i){let s;return this.remoteDocumentCache.getAllFromCollection(e,r.path,i).next(a=>(s=a,this.documentOverlayCache.getOverlaysForCollection(e,r.path,i.largestBatchId))).next(a=>{a.forEach((u,h)=>{const d=h.getKey();s.get(d)===null&&(s=s.insert(d,xe.newInvalidDocument(d)))});let c=cs();return s.forEach((u,h)=>{const d=a.get(u);d!==void 0&&Kn(d.mutation,h,zt.empty(),ut.now()),mn(r,h)&&(c=c.insert(u,h))}),c})}getBaseDocument(e,r,i){return i===null||i.mutation.type===1?this.remoteDocumentCache.getEntry(e,r):Pt.resolve(xe.newInvalidDocument(r))}}/**
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
 */class no{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,r){return Pt.resolve(this.Jn.get(r))}saveBundleMetadata(e,r){var i;return this.Jn.set(r.id,{id:(i=r).id,version:i.version,createTime:Ns(i.createTime)}),Pt.resolve()}getNamedQuery(e,r){return Pt.resolve(this.Yn.get(r))}saveNamedQuery(e,r){return this.Yn.set(r.name,function(i){return{name:i.name,query:Ji(i.bundledQuery),readTime:Ns(i.readTime)}}(r)),Pt.resolve()}}/**
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
 */class so{constructor(){this.overlays=new qt(dt.comparator),this.Xn=new Map}getOverlay(e,r){return Pt.resolve(this.overlays.get(r))}getOverlays(e,r){const i=hs();return Pt.forEach(r,s=>this.getOverlay(e,s).next(a=>{a!==null&&i.set(s,a)})).next(()=>i)}saveOverlays(e,r,i){return i.forEach((s,a)=>{this.ie(e,r,a)}),Pt.resolve()}removeOverlaysForBatchId(e,r,i){const s=this.Xn.get(i);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Xn.delete(i)),Pt.resolve()}getOverlaysForCollection(e,r,i){const s=hs(),a=r.length+1,c=new dt(r.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!r.isPrefixOf(d.path))break;d.path.length===a&&h.largestBatchId>i&&s.set(h.getKey(),h)}return Pt.resolve(s)}getOverlaysForCollectionGroup(e,r,i,s){let a=new qt((d,f)=>d-f);const c=this.overlays.getIterator();for(;c.hasNext();){const d=c.getNext().value;if(d.getKey().getCollectionGroup()===r&&d.largestBatchId>i){let f=a.get(d.largestBatchId);f===null&&(f=hs(),a=a.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=hs(),h=a.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=s)););return Pt.resolve(u)}ie(e,r,i){const s=this.overlays.get(i.key);if(s!==null){const c=this.Xn.get(s.largestBatchId).delete(i.key);this.Xn.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new Bi(r,i));let a=this.Xn.get(r);a===void 0&&(a=ws(),this.Xn.set(r,a)),this.Xn.set(r,a.add(i.key))}}/**
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
 */class io{constructor(){this.Zn=new Qt(ro.ts),this.es=new Qt(ro.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,r){const i=new ro(e,r);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,r){e.forEach(i=>this.addReference(i,r))}removeReference(e,r){this.rs(new ro(e,r))}os(e,r){e.forEach(i=>this.removeReference(i,r))}us(e){const r=new dt(new ht([])),i=new ro(r,e),s=new ro(r,e+1),a=[];return this.es.forEachInRange([i,s],c=>{this.rs(c),a.push(c.key)}),a}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const r=new dt(new ht([])),i=new ro(r,e),s=new ro(r,e+1);let a=ws();return this.es.forEachInRange([i,s],c=>{a=a.add(c.key)}),a}containsKey(e){const r=new ro(e,0),i=this.Zn.firstAfterOrEqual(r);return i!==null&&e.isEqual(i.key)}}class ro{constructor(e,r){this.key=e,this.ls=r}static ts(e,r){return dt.comparator(e.key,r.key)||it(e.ls,r.ls)}static ns(e,r){return it(e.ls,r.ls)||dt.comparator(e.key,r.key)}}/**
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
 */class oo{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.fs=1,this.ds=new Qt(ro.ts)}checkEmpty(e){return Pt.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,i,s){const a=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Fi(a,r,i,s);this.mutationQueue.push(c);for(const u of s)this.ds=this.ds.add(new ro(u.key,a)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return Pt.resolve(c)}lookupMutationBatch(e,r){return Pt.resolve(this._s(r))}getNextMutationBatchAfterBatchId(e,r){const i=r+1,s=this.ws(i),a=s<0?0:s;return Pt.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Pt.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return Pt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const i=new ro(r,0),s=new ro(r,Number.POSITIVE_INFINITY),a=[];return this.ds.forEachInRange([i,s],c=>{const u=this._s(c.ls);a.push(u)}),Pt.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,r){let i=new Qt(it);return r.forEach(s=>{const a=new ro(s,0),c=new ro(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([a,c],u=>{i=i.add(u.ls)})}),Pt.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,r){const i=r.path,s=i.length+1;let a=i;dt.isDocumentKey(a)||(a=a.child(""));const c=new ro(new dt(a),0);let u=new Qt(it);return this.ds.forEachWhile(h=>{const d=h.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.ls)),!0)},c),Pt.resolve(this.gs(u))}gs(e){const r=[];return e.forEach(i=>{const s=this._s(i);s!==null&&r.push(s)}),r}removeMutationBatch(e,r){U(this.ys(r.batchId,"removed")===0),this.mutationQueue.shift();let i=this.ds;return Pt.forEach(r.mutations,s=>{const a=new ro(s.key,r.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=i})}In(e){}containsKey(e,r){const i=new ro(r,0),s=this.ds.firstAfterOrEqual(i);return Pt.resolve(r.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Pt.resolve()}ys(e,r){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const r=this.ws(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
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
 */class uo{constructor(e){this.ps=e,this.docs=new qt(dt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const i=r.key,s=this.docs.get(i),a=s?s.size:0,c=this.ps(r);return this.docs=this.docs.insert(i,{document:r.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const i=this.docs.get(r);return Pt.resolve(i?i.document.mutableCopy():xe.newInvalidDocument(r))}getEntries(e,r){let i=os();return r.forEach(s=>{const a=this.docs.get(s);i=i.insert(s,a?a.document.mutableCopy():xe.newInvalidDocument(s))}),Pt.resolve(i)}getAllFromCollection(e,r,i){let s=os();const a=new dt(r.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!r.isPrefixOf(u.path))break;u.path.length>r.length+1||Et(It(h),i)<=0||(s=s.insert(h.key,h.mutableCopy()))}return Pt.resolve(s)}getAllFromCollectionGroup(e,r,i,s){L()}Is(e,r){return Pt.forEach(this.docs,i=>r(i))}newChangeBuffer(e){return new co(this)}getSize(e){return Pt.resolve(this.size)}}class co extends Qr{constructor(e){super(),this.zn=e}applyChanges(e){const r=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?r.push(this.zn.addEntry(e,s)):this.zn.removeEntry(i)}),Pt.waitFor(r)}getFromCache(e,r){return this.zn.getEntry(e,r)}getAllFromCache(e,r){return this.zn.getEntries(e,r)}}/**
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
 */class ao{constructor(e){this.persistence=e,this.Ts=new is(r=>Oe(r),Fe),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.Es=0,this.As=new io,this.targetCount=0,this.Rs=kr.An()}forEachTarget(e,r){return this.Ts.forEach((i,s)=>r(s)),Pt.resolve()}getLastRemoteSnapshotVersion(e){return Pt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Pt.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Pt.resolve(this.highestTargetId)}setTargetsMetadata(e,r,i){return i&&(this.lastRemoteSnapshotVersion=i),r>this.Es&&(this.Es=r),Pt.resolve()}vn(e){this.Ts.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.Rs=new kr(r),this.highestTargetId=r),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,r){return this.vn(r),this.targetCount+=1,Pt.resolve()}updateTargetData(e,r){return this.vn(r),Pt.resolve()}removeTargetData(e,r){return this.Ts.delete(r.target),this.As.us(r.targetId),this.targetCount-=1,Pt.resolve()}removeTargets(e,r,i){let s=0;const a=[];return this.Ts.forEach((c,u)=>{u.sequenceNumber<=r&&i.get(u.targetId)===null&&(this.Ts.delete(c),a.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),Pt.waitFor(a).next(()=>s)}getTargetCount(e){return Pt.resolve(this.targetCount)}getTargetData(e,r){const i=this.Ts.get(r)||null;return Pt.resolve(i)}addMatchingKeys(e,r,i){return this.As.ss(r,i),Pt.resolve()}removeMatchingKeys(e,r,i){this.As.os(r,i);const s=this.persistence.referenceDelegate,a=[];return s&&r.forEach(c=>{a.push(s.markPotentiallyOrphaned(e,c))}),Pt.waitFor(a)}removeMatchingKeysForTargetId(e,r){return this.As.us(r),Pt.resolve()}getMatchingKeysForTargetId(e,r){const i=this.As.hs(r);return Pt.resolve(i)}containsKey(e,r){return Pt.resolve(this.As.containsKey(r))}}/**
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
 */class ho{constructor(e,r){this.bs={},this.overlays={},this.Ps=new $t(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new ao(this),this.indexManager=new mr,this.remoteDocumentCache=function(i){return new uo(i)}(i=>this.referenceDelegate.Ss(i)),this.wt=new Ui(r),this.Ds=new no(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new so,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let i=this.bs[e.toKey()];return i||(i=new oo(r,this.referenceDelegate),this.bs[e.toKey()]=i),i}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,r,i){M("MemoryPersistence","Starting transaction:",e);const s=new lo(this.Ps.next());return this.referenceDelegate.Cs(),i(s).next(a=>this.referenceDelegate.xs(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ns(e,r){return Pt.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,r)))}}class lo extends Rt{constructor(e){super(),this.currentSequenceNumber=e}}class fo{constructor(e){this.persistence=e,this.ks=new io,this.Os=null}static Ms(e){return new fo(e)}get Fs(){if(this.Os)return this.Os;throw L()}addReference(e,r,i){return this.ks.addReference(i,r),this.Fs.delete(i.toString()),Pt.resolve()}removeReference(e,r,i){return this.ks.removeReference(i,r),this.Fs.add(i.toString()),Pt.resolve()}markPotentiallyOrphaned(e,r){return this.Fs.add(r.toString()),Pt.resolve()}removeTarget(e,r){this.ks.us(r.targetId).forEach(s=>this.Fs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,r.targetId).next(s=>{s.forEach(a=>this.Fs.add(a.toString()))}).next(()=>i.removeTargetData(e,r))}Cs(){this.Os=new Set}xs(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Pt.forEach(this.Fs,i=>{const s=dt.fromPath(i);return this.$s(e,s).next(a=>{a||r.removeEntry(s,ct.min())})}).next(()=>(this.Os=null,r.apply(e)))}updateLimboDocument(e,r){return this.$s(e,r).next(i=>{i?this.Fs.delete(r.toString()):this.Fs.add(r.toString())})}Ss(e){return 0}$s(e,r){return Pt.or([()=>Pt.resolve(this.ks.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Ns(e,r)])}}/**
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
 */class To{constructor(e,r,i,s){this.targetId=e,this.fromCache=r,this.Pi=i,this.vi=s}static Vi(e,r){let i=ws(),s=ws();for(const a of r.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new To(e,r.fromCache,i,s)}}/**
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
 */class Eo{constructor(){this.Si=!1}initialize(e,r){this.Di=e,this.indexManager=r,this.Si=!0}getDocumentsMatchingQuery(e,r,i,s){return this.Ci(e,r).next(a=>a||this.xi(e,r,s,i)).next(a=>a||this.Ni(e,r))}Ci(e,r){return Pt.resolve(null)}xi(e,r,i,s){return on(r)||s.isEqual(ct.min())?this.Ni(e,r):this.Di.getDocuments(e,i).next(a=>{const c=this.ki(r,a);return this.Oi(r,c,i,s)?this.Ni(e,r):(k()<=LogLevel.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wn(r)),this.Mi(e,c,r,pt(s,-1)))})}ki(e,r){let i=new Qt(yn(e));return r.forEach((s,a)=>{mn(e,a)&&(i=i.add(a))}),i}Oi(e,r,i,s){if(e.limit===null)return!1;if(i.size!==r.size)return!0;const a=e.limitType==="F"?r.last():r.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Ni(e,r){return k()<=LogLevel.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",wn(r)),this.Di.getDocumentsMatchingQuery(e,r,Tt.min())}Mi(e,r,i,s){return this.Di.getDocumentsMatchingQuery(e,i,s).next(a=>(r.forEach(c=>{a=a.insert(c.key,c)}),a))}}/**
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
 */class Ao{constructor(e,r,i,s){this.persistence=e,this.Fi=r,this.wt=s,this.$i=new qt(it),this.Bi=new is(a=>Oe(a),Fe),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(i)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eo(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.$i))}}function Ro(n,e,r,i){return new Ao(n,e,r,i)}async function bo(n,e){const r=K(n);return await r.persistence.runTransaction("Handle user change","readonly",i=>{let s;return r.mutationQueue.getAllMutationBatches(i).next(a=>(s=a,r.qi(e),r.mutationQueue.getAllMutationBatches(i))).next(a=>{const c=[],u=[];let h=ws();for(const d of s){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of a){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return r.localDocuments.getDocuments(i,h).next(d=>({Ki:d,removedBatchIds:c,addedBatchIds:u}))})})}function Po(n,e){const r=K(n);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),a=r.Ui.newChangeBuffer({trackRemovals:!0});return function(c,u,h,d){const f=h.batch,g=f.keys();let m=Pt.resolve();return g.forEach(_=>{m=m.next(()=>d.getEntry(u,_)).next(he=>{const ve=h.docVersions.get(_);U(ve!==null),he.version.compareTo(ve)<0&&(f.applyToRemoteDocument(he,h),he.isValidDocument()&&(he.setReadTime(h.commitVersion),d.addEntry(he)))})}),m.next(()=>c.mutationQueue.removeMutationBatch(u,f))}(r,i,e,a).next(()=>a.apply(i)).next(()=>r.mutationQueue.performConsistencyCheck(i)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let u=ws();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>r.localDocuments.getDocuments(i,s))})}function vo(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.Vs.getLastRemoteSnapshotVersion(r))}function Vo(n,e){const r=K(n),i=e.snapshotVersion;let s=r.$i;return r.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const c=r.Ui.newChangeBuffer({trackRemovals:!0});s=r.$i;const u=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;u.push(r.Vs.removeMatchingKeys(a,f.removedDocuments,g).next(()=>r.Vs.addMatchingKeys(a,f.addedDocuments,g)));let _=m.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.has(g)?_=_.withResumeToken(Jt.EMPTY_BYTE_STRING,ct.min()).withLastLimboFreeSnapshotVersion(ct.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,i)),s=s.insert(g,_),function(he,ve,b){return he.resumeToken.approximateByteSize()===0||ve.snapshotVersion.toMicroseconds()-he.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(m,_,f)&&u.push(r.Vs.updateTargetData(a,_))});let h=os(),d=ws();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(r.persistence.referenceDelegate.updateLimboDocument(a,f))}),u.push(So(a,c,e.documentUpdates).next(f=>{h=f.Gi,d=f.Qi})),!i.isEqual(ct.min())){const f=r.Vs.getLastRemoteSnapshotVersion(a).next(g=>r.Vs.setTargetsMetadata(a,a.currentSequenceNumber,i));u.push(f)}return Pt.waitFor(u).next(()=>c.apply(a)).next(()=>r.localDocuments.getLocalViewOfDocuments(a,h,d)).next(()=>h)}).then(a=>(r.$i=s,a))}function So(n,e,r){let i=ws(),s=ws();return r.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let c=os();return r.forEach((u,h)=>{const d=a.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(ct.min())?(e.removeEntry(u,h.readTime),c=c.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),c=c.insert(u,h)):M("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Gi:c,Qi:s}})}function Do(n,e){const r=K(n);return r.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Co(n,e){const r=K(n);return r.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return r.Vs.getTargetData(i,e).next(a=>a?(s=a,Pt.resolve(s)):r.Vs.allocateTargetId(i).next(c=>(s=new Li(e,c,0,i.currentSequenceNumber),r.Vs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=r.$i.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(r.$i=r.$i.insert(i.targetId,i),r.Bi.set(e,i.targetId)),i})}async function xo(n,e,r){const i=K(n),s=i.$i.get(e),a=r?"readwrite":"readwrite-primary";try{r||await i.persistence.runTransaction("Release target",a,c=>i.persistence.referenceDelegate.removeTarget(c,s))}catch(c){if(!Ct(c))throw c;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.$i=i.$i.remove(e),i.Bi.delete(s.target)}function No(n,e,r){const i=K(n);let s=ct.min(),a=ws();return i.persistence.runTransaction("Execute query","readonly",c=>function(u,h,d){const f=K(u),g=f.Bi.get(d);return g!==void 0?Pt.resolve(f.$i.get(g)):f.Vs.getTargetData(h,d)}(i,c,ln(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,i.Vs.getMatchingKeysForTargetId(c,u.targetId).next(h=>{a=h})}).next(()=>i.Fi.getDocumentsMatchingQuery(c,e,r?s:ct.min(),r?a:ws())).next(u=>(Mo(i,gn(e),u),{documents:u,ji:a})))}function Mo(n,e,r){let i=ct.min();r.forEach((s,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.Li.set(e,i)}class jo{constructor(){this.activeTargetIds=gs()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zo{constructor(){this.Fr=new jo,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,i){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,r,i){this.$r[e]=r}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new jo,Promise.resolve()}handleUserChange(e,r,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ho{Br(e){}shutdown(){}}/**
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
 */class Jo{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Yo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Xo{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class Zo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http";this.so=r+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,r,i,s,a){const c=this.oo(e,r);M("RestConnection","Sending: ",c,i);const u={};return this.uo(u,s,a),this.co(e,c,u,i).then(h=>(M("RestConnection","Received: ",h),h),h=>{throw $("RestConnection",`${e} failed with error: `,h,"url: ",c,"request:",i),h})}ao(e,r,i,s,a,c){return this.ro(e,r,i,s,a)}uo(e,r,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+x,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>e[a]=s),i&&i.headers.forEach((s,a)=>e[a]=s)}oo(e,r){const i=Yo[e];return`${this.so}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,r,i,s){return new Promise((a,c)=>{const u=new XhrIo;u.listenOnce(EventType.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ErrorCode$1.NO_ERROR:const d=u.getResponseJson();M("Connection","XHR received:",JSON.stringify(d)),a(d);break;case ErrorCode$1.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),c(new Q(G.DEADLINE_EXCEEDED,"Request time out"));break;case ErrorCode$1.HTTP_ERROR:const f=u.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',f,"response text:",u.getResponseText()),f>0){const g=u.getResponseJson().error;if(g&&g.status&&g.message){const m=function(_){const he=_.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(he)>=0?he:G.UNKNOWN}(g.status);c(new Q(m,g.message))}else c(new Q(G.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Q(G.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const h=JSON.stringify(s);u.send(r,"POST",h,i,15)})}ho(e,r,i){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=createWebChannelTransport(),c=getStatEventTarget(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new FetchXmlHttpFactory({})),this.uo(u.initMessageHeaders,r,i),isMobileCordova()||isReactNative()||isElectron()||isIE()||isUWP()||isBrowserExtension()||(u.httpHeadersOverwriteParam="$httpHeaders");const h=s.join("");M("Connection","Creating WebChannel: "+h,u);const d=a.createWebChannel(h,u);let f=!1,g=!1;const m=new Xo({jr:he=>{g?M("Connection","Not sending because WebChannel is closed:",he):(f||(M("Connection","Opening WebChannel transport."),d.open(),f=!0),M("Connection","WebChannel sending:",he),d.send(he))},Wr:()=>d.close()}),_=(he,ve,b)=>{he.listen(ve,Se=>{try{b(Se)}catch(et){setTimeout(()=>{throw et},0)}})};return _(d,WebChannel.EventType.OPEN,()=>{g||M("Connection","WebChannel transport opened.")}),_(d,WebChannel.EventType.CLOSE,()=>{g||(g=!0,M("Connection","WebChannel transport closed"),m.eo())}),_(d,WebChannel.EventType.ERROR,he=>{g||(g=!0,$("Connection","WebChannel transport errored:",he),m.eo(new Q(G.UNAVAILABLE,"The operation could not be completed")))}),_(d,WebChannel.EventType.MESSAGE,he=>{var ve;if(!g){const b=he.data[0];U(!!b);const Se=b,et=Se.error||((ve=Se[0])===null||ve===void 0?void 0:ve.error);if(et){M("Connection","WebChannel received error:",et);const Pe=et.status;let mt=function(Ue){const Be=ts[Ue];if(Be!==void 0)return ss(Be)}(Pe),ot=et.message;mt===void 0&&(mt=G.INTERNAL,ot="Unknown error status: "+Pe+" with message "+et.message),g=!0,m.eo(new Q(mt,ot)),d.close()}else M("Connection","WebChannel received:",b),m.no(b)}}),_(c,Event.STAT_EVENT,he=>{he.stat===Stat.PROXY?M("Connection","Detected buffering proxy"):he.stat===Stat.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Zr()},0),m}}function eu(){return typeof document!="undefined"?document:null}/**
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
 */function nu(n){return new Ss(n,!0)}class su{constructor(e,r,i=1e3,s=1.5,a=6e4){this.js=e,this.timerId=r,this.lo=i,this.fo=s,this._o=a,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const r=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),s=Math.max(0,r-i);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${r} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class iu{constructor(e,r,i,s,a,c,u,h){this.js=e,this.Ao=i,this.Ro=s,this.bo=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new su(e,r)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,r){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():r&&r.code===G.RESOURCE_EXHAUSTED?(F(r.toString()),F("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):r&&r.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(r)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),r=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Po===r&&this.Uo(i,s)},i=>{e(()=>{const s=new Q(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.qo(s)})})}Uo(e,r){const i=this.Lo(this.Po);this.stream=this.Ko(e,r),this.stream.zr(()=>{i(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{i(()=>this.qo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return r=>{this.js.enqueueAndForget(()=>this.Po===e?r():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ru extends iu{constructor(e,r,i,s,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,i,s,c),this.wt=a}Ko(e,r){return this.bo.ho("Listen",e,r)}onMessage(e){this.So.reset();const r=Qs(this.wt,e),i=function(s){if(!("targetChange"in s))return ct.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ct.min():a.readTime?Ns(a.readTime):ct.min()}(e);return this.listener.Go(r,i)}Qo(e){const r={};r.database=Ls(this.wt),r.addTarget=function(s,a){let c;const u=a.target;return c=$e(u)?{documents:Hs(s,u)}:{query:Js(s,u)},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0?c.resumeToken=Cs(s,a.resumeToken):a.snapshotVersion.compareTo(ct.min())>0&&(c.readTime=Ds(s,a.snapshotVersion.toTimestamp())),c}(this.wt,e);const i=Xs(this.wt,e);i&&(r.labels=i),this.Mo(r)}jo(e){const r={};r.database=Ls(this.wt),r.removeTarget=e,this.Mo(r)}}class ou extends iu{constructor(e,r,i,s,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,i,s,c),this.wt=a,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,r){return this.bo.ho("Write",e,r)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const r=zs(e.writeResults,e.commitTime),i=Ns(e.commitTime);return this.listener.Jo(i,r)}return U(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ls(this.wt),this.Mo(e)}Ho(e){const r={streamToken:this.lastStreamToken,writes:e.map(i=>js(this.wt,i))};this.Mo(r)}}/**
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
 */class uu extends class{}{constructor(e,r,i,s){super(),this.authCredentials=e,this.appCheckCredentials=r,this.bo=i,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new Q(G.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.bo.ro(e,r,i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(G.UNKNOWN,s.toString())})}ao(e,r,i,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.bo.ao(e,r,i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(G.UNKNOWN,a.toString())})}terminate(){this.Zo=!0}}class cu{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(F(r),this.su=!1):M("OnlineStateTracker",r)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class au{constructor(e,r,i,s,a){this.localStore=e,this.datastore=r,this.asyncQueue=i,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=a,this.du.Br(c=>{i.enqueueAndForget(async()=>{yu(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=K(u);h.lu.add(4),await lu(h),h._u.set("Unknown"),h.lu.delete(4),await hu(h)}(this))})}),this._u=new cu(i,s)}}async function hu(n){if(yu(n))for(const e of n.fu)await e(!0)}async function lu(n){for(const e of n.fu)await e(!1)}function fu(n,e){const r=K(n);r.hu.has(e.targetId)||(r.hu.set(e.targetId,e),gu(r)?mu(r):Mu(r).Co()&&_u(r,e))}function du(n,e){const r=K(n),i=Mu(r);r.hu.delete(e),i.Co()&&wu(r,e),r.hu.size===0&&(i.Co()?i.ko():yu(r)&&r._u.set("Unknown"))}function _u(n,e){n.wu.Nt(e.targetId),Mu(n).Qo(e)}function wu(n,e){n.wu.Nt(e),Mu(n).jo(e)}function mu(n){n.wu=new Rs({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),te:e=>n.hu.get(e)||null}),Mu(n).start(),n._u.iu()}function gu(n){return yu(n)&&!Mu(n).Do()&&n.hu.size>0}function yu(n){return K(n).lu.size===0}function pu(n){n.wu=void 0}async function Iu(n){n.hu.forEach((e,r)=>{_u(n,e)})}async function Tu(n,e){pu(n),gu(n)?(n._u.uu(e),mu(n)):n._u.set("Unknown")}async function Eu(n,e,r){if(n._u.set("Online"),e instanceof Es&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.hu.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.hu.delete(c),i.wu.removeTarget(c))}(n,e)}catch(i){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Au(n,i)}else if(e instanceof Is?n.wu.Ut(e):e instanceof Ts?n.wu.zt(e):n.wu.Gt(e),!r.isEqual(ct.min()))try{const i=await vo(n.localStore);r.compareTo(i)>=0&&await function(s,a){const c=s.wu.Yt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.hu.get(h);d&&s.hu.set(h,d.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach(u=>{const h=s.hu.get(u);if(!h)return;s.hu.set(u,h.withResumeToken(Jt.EMPTY_BYTE_STRING,h.snapshotVersion)),wu(s,u);const d=new Li(h.target,u,1,h.sequenceNumber);_u(s,d)}),s.remoteSyncer.applyRemoteEvent(c)}(n,r)}catch(i){M("RemoteStore","Failed to raise snapshot:",i),await Au(n,i)}}async function Au(n,e,r){if(!Ct(e))throw e;n.lu.add(1),await lu(n),n._u.set("Offline"),r||(r=()=>vo(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await r(),n.lu.delete(1),await hu(n)})}function Ru(n,e){return e().catch(r=>Au(n,r,e))}async function bu(n){const e=K(n),r=Fu(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Pu(e);)try{const s=await Do(e.localStore,i);if(s===null){e.au.length===0&&r.ko();break}i=s.batchId,vu(e,s)}catch(s){await Au(e,s)}Vu(e)&&Su(e)}function Pu(n){return yu(n)&&n.au.length<10}function vu(n,e){n.au.push(e);const r=Fu(n);r.Co()&&r.zo&&r.Ho(e.mutations)}function Vu(n){return yu(n)&&!Fu(n).Do()&&n.au.length>0}function Su(n){Fu(n).start()}async function Du(n){Fu(n).Xo()}async function Cu(n){const e=Fu(n);for(const r of n.au)e.Ho(r.mutations)}async function xu(n,e,r){const i=n.au.shift(),s=$i.from(i,e,r);await Ru(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await bu(n)}async function Nu(n,e){e&&Fu(n).zo&&await async function(r,i){if(s=i.code,ns(s)&&s!==G.ABORTED){const a=r.au.shift();Fu(r).No(),await Ru(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i)),await bu(r)}var s}(n,e),Vu(n)&&Su(n)}async function ku(n,e){const r=K(n);r.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const i=yu(r);r.lu.add(3),await lu(r),i&&r._u.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.lu.delete(3),await hu(r)}async function Ou(n,e){const r=K(n);e?(r.lu.delete(2),await hu(r)):e||(r.lu.add(2),await lu(r),r._u.set("Unknown"))}function Mu(n){return n.mu||(n.mu=function(e,r,i){const s=K(e);return s.tu(),new ru(r,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,i)}(n.datastore,n.asyncQueue,{zr:Iu.bind(null,n),Jr:Tu.bind(null,n),Go:Eu.bind(null,n)}),n.fu.push(async e=>{e?(n.mu.No(),gu(n)?mu(n):n._u.set("Unknown")):(await n.mu.stop(),pu(n))})),n.mu}function Fu(n){return n.gu||(n.gu=function(e,r,i){const s=K(e);return s.tu(),new ou(r,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,i)}(n.datastore,n.asyncQueue,{zr:Du.bind(null,n),Jr:Nu.bind(null,n),Yo:Cu.bind(null,n),Jo:xu.bind(null,n)}),n.fu.push(async e=>{e?(n.gu.No(),await bu(n)):(await n.gu.stop(),n.au.length>0&&(M("RemoteStore",`Stopping write stream with ${n.au.length} pending writes`),n.au=[]))})),n.gu}/**
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
 */class $u{constructor(e,r,i,s,a){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new j,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}static createAndSchedule(e,r,i,s,a){const c=Date.now()+i,u=new $u(e,r,c,s,a);return u.start(i),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bu(n,e){if(F("AsyncQueue",`${e}: ${n}`),Ct(n))return new Q(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Lu{constructor(e){this.comparator=e?(r,i)=>e(r,i)||dt.comparator(r.key,i.key):(r,i)=>dt.comparator(r.key,i.key),this.keyedMap=cs(),this.sortedSet=new qt(this.comparator)}static emptySet(e){return new Lu(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,i)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof Lu)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;r.hasNext();){const s=r.getNext().key,a=i.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const i=new Lu;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=r,i}}/**
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
 */class Uu{constructor(){this.yu=new qt(dt.comparator)}track(e){const r=e.doc.key,i=this.yu.get(r);i?e.type!==0&&i.type===3?this.yu=this.yu.insert(r,e):e.type===3&&i.type!==1?this.yu=this.yu.insert(r,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.yu=this.yu.insert(r,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.yu=this.yu.insert(r,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.yu=this.yu.remove(r):e.type===1&&i.type===2?this.yu=this.yu.insert(r,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.yu=this.yu.insert(r,{type:2,doc:e.doc}):L():this.yu=this.yu.insert(r,e)}pu(){const e=[];return this.yu.inorderTraversal((r,i)=>{e.push(i)}),e}}class qu{constructor(e,r,i,s,a,c,u,h){this.query=e,this.docs=r,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=u,this.excludesMetadataChanges=h}static fromInitialDocuments(e,r,i,s){const a=[];return r.forEach(c=>{a.push({type:0,doc:c})}),new qu(e,r,Lu.emptySet(r),a,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,i=e.docChanges;if(r.length!==i.length)return!1;for(let s=0;s<r.length;s++)if(r[s].type!==i[s].type||!r[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class Ku{constructor(){this.Iu=void 0,this.listeners=[]}}class Gu{constructor(){this.queries=new is(e=>_n(e),dn),this.onlineState="Unknown",this.Tu=new Set}}async function Qu(n,e){const r=K(n),i=e.query;let s=!1,a=r.queries.get(i);if(a||(s=!0,a=new Ku),s)try{a.Iu=await r.onListen(i)}catch(c){const u=Bu(c,`Initialization of query '${wn(e.query)}' failed`);return void e.onError(u)}r.queries.set(i,a),a.listeners.push(e),e.Eu(r.onlineState),a.Iu&&e.Au(a.Iu)&&Hu(r)}async function ju(n,e){const r=K(n),i=e.query;let s=!1;const a=r.queries.get(i);if(a){const c=a.listeners.indexOf(e);c>=0&&(a.listeners.splice(c,1),s=a.listeners.length===0)}if(s)return r.queries.delete(i),r.onUnlisten(i)}function Wu(n,e){const r=K(n);let i=!1;for(const s of e){const a=s.query,c=r.queries.get(a);if(c){for(const u of c.listeners)u.Au(s)&&(i=!0);c.Iu=s}}i&&Hu(r)}function zu(n,e,r){const i=K(n),s=i.queries.get(e);if(s)for(const a of s.listeners)a.onError(r);i.queries.delete(e)}function Hu(n){n.Tu.forEach(e=>{e.next()})}class Ju{constructor(e,r,i){this.query=e,this.Ru=r,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=i||{}}Au(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new qu(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let r=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),r=!0):this.Vu(e,this.onlineState)&&(this.Su(e),r=!0),this.Pu=e,r}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let r=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),r=!0),r}Vu(e,r){if(!e.fromCache)return!0;const i=r!=="Offline";return(!this.options.Du||!i)&&(!e.docs.isEmpty()||r==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const r=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}Su(e){e=qu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class ec{constructor(e){this.key=e}}class nc{constructor(e){this.key=e}}class sc{constructor(e,r){this.query=e,this.Fu=r,this.$u=null,this.current=!1,this.Bu=ws(),this.mutatedKeys=ws(),this.Lu=yn(e),this.Uu=new Lu(this.Lu)}get qu(){return this.Fu}Ku(e,r){const i=r?r.Gu:new Uu,s=r?r.Uu:this.Uu;let a=r?r.mutatedKeys:this.mutatedKeys,c=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),_=mn(this.query,g)?g:null,he=!!m&&this.mutatedKeys.has(m.key),ve=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let b=!1;m&&_?m.data.isEqual(_.data)?he!==ve&&(i.track({type:3,doc:_}),b=!0):this.Qu(m,_)||(i.track({type:2,doc:_}),b=!0,(h&&this.Lu(_,h)>0||d&&this.Lu(_,d)<0)&&(u=!0)):!m&&_?(i.track({type:0,doc:_}),b=!0):m&&!_&&(i.track({type:1,doc:m}),b=!0,(h||d)&&(u=!0)),b&&(_?(c=c.add(_),a=ve?a.add(f):a.delete(f)):(c=c.delete(f),a=a.delete(f)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const f=this.query.limitType==="F"?c.last():c.first();c=c.delete(f.key),a=a.delete(f.key),i.track({type:1,doc:f})}return{Uu:c,Gu:i,Oi:u,mutatedKeys:a}}Qu(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,i){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const a=e.Gu.pu();a.sort((d,f)=>function(g,m){const _=he=>{switch(he){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return _(g)-_(m)}(d.type,f.type)||this.Lu(d.doc,f.doc)),this.ju(i);const c=r?this.Wu():[],u=this.Bu.size===0&&this.current?1:0,h=u!==this.$u;return this.$u=u,a.length!==0||h?{snapshot:new qu(this.query,e.Uu,s,a,e.mutatedKeys,u===0,h,!1),zu:c}:{zu:c}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Uu,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(r=>this.Fu=this.Fu.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.Fu=this.Fu.delete(r)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ws(),this.Uu.forEach(i=>{this.Hu(i.key)&&(this.Bu=this.Bu.add(i.key))});const r=[];return e.forEach(i=>{this.Bu.has(i)||r.push(new nc(i))}),this.Bu.forEach(i=>{e.has(i)||r.push(new ec(i))}),r}Ju(e){this.Fu=e.ji,this.Bu=ws();const r=this.Ku(e.documents);return this.applyChanges(r,!0)}Yu(){return qu.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class ic{constructor(e,r,i){this.query=e,this.targetId=r,this.view=i}}class rc{constructor(e){this.key=e,this.Xu=!1}}class oc{constructor(e,r,i,s,a,c){this.localStore=e,this.remoteStore=r,this.eventManager=i,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Zu={},this.tc=new is(u=>_n(u),dn),this.ec=new Map,this.nc=new Set,this.sc=new qt(dt.comparator),this.ic=new Map,this.rc=new io,this.oc={},this.uc=new Map,this.cc=kr.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function uc(n,e){const r=Mc(n);let i,s;const a=r.tc.get(e);if(a)i=a.targetId,r.sharedClientState.addLocalQueryTarget(i),s=a.view.Yu();else{const c=await Co(r.localStore,ln(e));r.isPrimaryClient&&fu(r.remoteStore,c);const u=r.sharedClientState.addLocalQueryTarget(c.targetId);i=c.targetId,s=await cc(r,e,i,u==="current")}return s}async function cc(n,e,r,i){n.hc=(f,g,m)=>async function(_,he,ve,b){let Se=he.view.Ku(ve);Se.Oi&&(Se=await No(_.localStore,he.query,!1).then(({documents:mt})=>he.view.Ku(mt,Se)));const et=b&&b.targetChanges.get(he.targetId),Pe=he.view.applyChanges(Se,_.isPrimaryClient,et);return Tc(_,he.targetId,Pe.zu),Pe.snapshot}(n,f,g,m);const s=await No(n.localStore,e,!0),a=new sc(e,s.ji),c=a.Ku(s.documents),u=ps.createSynthesizedTargetChangeForCurrentChange(r,i&&n.onlineState!=="Offline"),h=a.applyChanges(c,n.isPrimaryClient,u);Tc(n,r,h.zu);const d=new ic(e,r,a);return n.tc.set(e,d),n.ec.has(r)?n.ec.get(r).push(e):n.ec.set(r,[e]),h.snapshot}async function ac(n,e){const r=K(n),i=r.tc.get(e),s=r.ec.get(i.targetId);if(s.length>1)return r.ec.set(i.targetId,s.filter(a=>!dn(a,e))),void r.tc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),du(r.remoteStore,i.targetId),pc(r,i.targetId)}).catch(bt)):(pc(r,i.targetId),await xo(r.localStore,i.targetId,!0))}async function hc(n,e,r){const i=Fc(n);try{const s=await function(a,c){const u=K(a),h=ut.now(),d=c.reduce((m,_)=>m.add(_.key),ws());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=os(),he=ws();return u.Ui.getEntries(m,d).next(ve=>{_=ve,_.forEach((b,Se)=>{Se.isValidDocument()||(he=he.add(b))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,_)).next(ve=>{f=ve;const b=[];for(const Se of c){const et=Gn(Se,f.get(Se.key).overlayedDocument);et!=null&&b.push(new Wn(Se.key,et,Ce(et.value.mapValue),$n.exists(!0)))}return u.mutationQueue.addMutationBatch(m,h,b,c)}).next(ve=>{g=ve;const b=ve.applyToLocalDocumentSet(f,he);return u.documentOverlayCache.saveOverlays(m,ve.batchId,b)})}).then(()=>({batchId:g.batchId,changes:as(f)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.oc[a.currentUser.toKey()];h||(h=new qt(it)),h=h.insert(c,u),a.oc[a.currentUser.toKey()]=h}(i,s.batchId,r),await Rc(i,s.changes),await bu(i.remoteStore)}catch(s){const a=Bu(s,"Failed to persist write");r.reject(a)}}async function lc(n,e){const r=K(n);try{const i=await Vo(r.localStore,e);e.targetChanges.forEach((s,a)=>{const c=r.ic.get(a);c&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?c.Xu=!0:s.modifiedDocuments.size>0?U(c.Xu):s.removedDocuments.size>0&&(U(c.Xu),c.Xu=!1))}),await Rc(r,i,e)}catch(i){await bt(i)}}function fc(n,e,r){const i=K(n);if(i.isPrimaryClient&&r===0||!i.isPrimaryClient&&r===1){const s=[];i.tc.forEach((a,c)=>{const u=c.view.Eu(e);u.snapshot&&s.push(u.snapshot)}),function(a,c){const u=K(a);u.onlineState=c;let h=!1;u.queries.forEach((d,f)=>{for(const g of f.listeners)g.Eu(c)&&(h=!0)}),h&&Hu(u)}(i.eventManager,e),s.length&&i.Zu.Go(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dc(n,e,r){const i=K(n);i.sharedClientState.updateQueryState(e,"rejected",r);const s=i.ic.get(e),a=s&&s.key;if(a){let c=new qt(dt.comparator);c=c.insert(a,xe.newNoDocument(a,ct.min()));const u=ws().add(a),h=new ys(ct.min(),new Map,new Qt(it),c,u);await lc(i,h),i.sc=i.sc.remove(a),i.ic.delete(e),Ac(i)}else await xo(i.localStore,e,!1).then(()=>pc(i,e,r)).catch(bt)}async function _c(n,e){const r=K(n),i=e.batch.batchId;try{const s=await Po(r.localStore,e);yc(r,i,null),gc(r,i),r.sharedClientState.updateMutationState(i,"acknowledged"),await Rc(r,s)}catch(s){await bt(s)}}async function wc(n,e,r){const i=K(n);try{const s=await function(a,c){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,c).next(f=>(U(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(h,f))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(i.localStore,e);yc(i,e,r),gc(i,e),i.sharedClientState.updateMutationState(e,"rejected",r),await Rc(i,s)}catch(s){await bt(s)}}function gc(n,e){(n.uc.get(e)||[]).forEach(r=>{r.resolve()}),n.uc.delete(e)}function yc(n,e,r){const i=K(n);let s=i.oc[i.currentUser.toKey()];if(s){const a=s.get(e);a&&(r?a.reject(r):a.resolve(),s=s.remove(e)),i.oc[i.currentUser.toKey()]=s}}function pc(n,e,r=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.ec.get(e))n.tc.delete(i),r&&n.Zu.lc(i,r);n.ec.delete(e),n.isPrimaryClient&&n.rc.us(e).forEach(i=>{n.rc.containsKey(i)||Ic(n,i)})}function Ic(n,e){n.nc.delete(e.path.canonicalString());const r=n.sc.get(e);r!==null&&(du(n.remoteStore,r),n.sc=n.sc.remove(e),n.ic.delete(r),Ac(n))}function Tc(n,e,r){for(const i of r)i instanceof ec?(n.rc.addReference(i.key,e),Ec(n,i)):i instanceof nc?(M("SyncEngine","Document no longer in limbo: "+i.key),n.rc.removeReference(i.key,e),n.rc.containsKey(i.key)||Ic(n,i.key)):L()}function Ec(n,e){const r=e.key,i=r.path.canonicalString();n.sc.get(r)||n.nc.has(i)||(M("SyncEngine","New document in limbo: "+r),n.nc.add(i),Ac(n))}function Ac(n){for(;n.nc.size>0&&n.sc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const r=new dt(ht.fromString(e)),i=n.cc.next();n.ic.set(i,new rc(r)),n.sc=n.sc.insert(r,i),fu(n.remoteStore,new Li(ln(rn(r.path)),i,2,$t.ot))}}async function Rc(n,e,r){const i=K(n),s=[],a=[],c=[];i.tc.isEmpty()||(i.tc.forEach((u,h)=>{c.push(i.hc(h,e,r).then(d=>{if(d){i.isPrimaryClient&&i.sharedClientState.updateQueryState(h.targetId,d.fromCache?"not-current":"current"),s.push(d);const f=To.Vi(h.targetId,d);a.push(f)}}))}),await Promise.all(c),i.Zu.Go(s),await async function(u,h){const d=K(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>Pt.forEach(h,g=>Pt.forEach(g.Pi,m=>d.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>Pt.forEach(g.vi,m=>d.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!Ct(f))throw f;M("LocalStore","Failed to update sequence numbers: "+f)}for(const f of h){const g=f.targetId;if(!f.fromCache){const m=d.$i.get(g),_=m.snapshotVersion,he=m.withLastLimboFreeSnapshotVersion(_);d.$i=d.$i.insert(g,he)}}}(i.localStore,a))}async function bc(n,e){const r=K(n);if(!r.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const i=await bo(r.localStore,e);r.currentUser=e,function(s,a){s.uc.forEach(c=>{c.forEach(u=>{u.reject(new Q(G.CANCELLED,a))})}),s.uc.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Rc(r,i.Ki)}}function Pc(n,e){const r=K(n),i=r.ic.get(e);if(i&&i.Xu)return ws().add(i.key);{let s=ws();const a=r.ec.get(e);if(!a)return s;for(const c of a){const u=r.tc.get(c);s=s.unionWith(u.view.qu)}return s}}function Mc(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dc.bind(null,e),e.Zu.Go=Wu.bind(null,e.eventManager),e.Zu.lc=zu.bind(null,e.eventManager),e}function Fc(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_c.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wc.bind(null,e),e}class Bc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=nu(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,r){return null}gc(e,r){return null}wc(e){return Ro(this.persistence,new Eo,e.initialUser,this.wt)}_c(e){return new ho(fo.Ms,this.wt)}dc(e){return new zo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qc{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>fc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=bc.bind(null,this.syncEngine),await Ou(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Gu}createDatastore(e){const r=nu(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new Zo(s));var s;return function(a,c,u,h){return new uu(a,c,u,h)}(e.authCredentials,e.appCheckCredentials,i,r)}createRemoteStore(e){return r=this.localStore,i=this.datastore,s=e.asyncQueue,a=u=>fc(this.syncEngine,u,0),c=Jo.V()?new Jo:new Ho,new au(r,i,s,a,c);var r,i,s,a,c}createSyncEngine(e,r){return function(i,s,a,c,u,h,d){const f=new oc(i,s,a,c,u,h);return d&&(f.ac=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}terminate(){return async function(e){const r=K(e);M("RemoteStore","RemoteStore shutting down."),r.lu.add(5),await lu(r),r.du.shutdown(),r._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class Gc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,r){this.muted||setTimeout(()=>{this.muted||e(r)},0)}}/**
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
 */class zc{constructor(e,r,i,s){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=s,this.user=C.UNAUTHENTICATED,this.clientId=st.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(G.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new j;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const i=Bu(r,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Hc(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const r=await n.getConfiguration();await e.initialize(r);let i=r.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await bo(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Jc(n,e){n.asyncQueue.verifyOperationInProgress();const r=await Yc(n);M("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(r,i),n.setCredentialChangeListener(s=>ku(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,a)=>ku(e.remoteStore,a)),n.onlineComponents=e}async function Yc(n){return n.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await Hc(n,new Bc)),n.offlineComponents}async function Xc(n){return n.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await Jc(n,new qc)),n.onlineComponents}function na(n){return Xc(n).then(e=>e.syncEngine)}async function sa(n){const e=await Xc(n),r=e.eventManager;return r.onListen=uc.bind(null,e.syncEngine),r.onUnlisten=ac.bind(null,e.syncEngine),r}function aa(n,e,r={}){const i=new j;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,h){const d=new Gc({next:g=>{a.enqueueAndForget(()=>ju(s,f)),g.fromCache&&u.source==="server"?h.reject(new Q(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),f=new Ju(c,d,{includeMetadataChanges:!0,Du:!0});return Qu(s,f)}(await sa(n),n.asyncQueue,e,r,i)),i.promise}const _a=new Map;/**
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
 */function wa(n,e,r){if(!r)throw new Q(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ma(n,e,r,i){if(e===!0&&i===!0)throw new Q(G.INVALID_ARGUMENT,`${n} and ${r} cannot be used together.`)}function ga(n){if(!dt.isDocumentKey(n))throw new Q(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ya(n){if(dt.isDocumentKey(n))throw new Q(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L()}function Ia(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=pa(n);throw new Q(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return n}function Ta(n,e){if(e<=0)throw new Q(G.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Ea{constructor(e){var r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ma("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Aa{constructor(e,r,i){this._authCredentials=r,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ea({}),this._settingsFrozen=!1,e instanceof re?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new Q(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new re(s.options.projectId)}(e))}get app(){if(!this._app)throw new Q(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ea(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new z;switch(r.type){case"gapi":const i=r.client;return U(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new X(i,r.sessionIndex||"0",r.iamToken||null);case"provider":return r.client;default:throw new Q(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=_a.get(e);r&&(M("ComponentProvider","Removing Datastore"),_a.delete(e),r.terminate())}(this),Promise.resolve()}}/**
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
 */class ba{constructor(e,r,i){this.converter=r,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new va(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ba(this.firestore,e,this._key)}}class Pa{constructor(e,r,i){this.converter=r,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Pa(this.firestore,e,this._query)}}class va extends Pa{constructor(e,r,i){super(e,r,rn(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ba(this.firestore,null,new dt(e))}withConverter(e){return new va(this.firestore,e,this._path)}}function Va(n,e,...r){if(n=getModularInstance(n),wa("collection","path",e),n instanceof Aa){const i=ht.fromString(e,...r);return ya(i),new va(n,null,i)}{if(!(n instanceof ba||n instanceof va))throw new Q(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ht.fromString(e,...r));return ya(i),new va(n.firestore,null,i)}}function Da(n,e,...r){if(n=getModularInstance(n),arguments.length===1&&(e=st.I()),wa("doc","path",e),n instanceof Aa){const i=ht.fromString(e,...r);return ga(i),new ba(n,null,new dt(i))}{if(!(n instanceof ba||n instanceof va))throw new Q(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ht.fromString(e,...r));return ga(i),new ba(n.firestore,n instanceof va?n.converter:null,new dt(i))}}/**
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
 */class Na{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new su(this,"async_queue_retry"),this.Kc=()=>{const r=eu();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.So.Eo()};const e=eu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const r=eu();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const r=new j;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Ct(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const r=this.Oc.then(()=>(this.Lc=!0,e().catch(i=>{this.Bc=i,this.Lc=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(i);throw F("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Lc=!1,i))));return this.Oc=r,r}enqueueAfterDelay(e,r,i){this.Gc(),this.qc.indexOf(e)>-1&&(r=0);const s=$u.createAndSchedule(this,e,r,i,a=>this.Wc(a));return this.$c.push(s),s}Gc(){this.Bc&&L()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const r of this.$c)if(r.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((r,i)=>r.targetTimeMs-i.targetTimeMs);for(const r of this.$c)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const r=this.$c.indexOf(e);this.$c.splice(r,1)}}class Fa extends Aa{constructor(e,r,i){super(e,r,i),this.type="firestore",this._queue=new Na,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ua(this),this._firestoreClient.terminate()}}function Ba(n=getApp()){return _getProvider(n,"firestore").getImmediate()}function La(n){return n._firestoreClient||Ua(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ua(n){var e;const r=n._freezeSettings(),i=function(s,a,c,u){return new ie(s,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._firestoreClient=new zc(n._authCredentials,n._appCheckCredentials,n._queue,i)}/**
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
 */class Za{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new Q(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class eh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new eh(Jt.fromBase64String(e))}catch(r){throw new Q(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new eh(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nh{constructor(e){this._methodName=e}}/**
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
 */class sh{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new Q(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new Q(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return it(this._lat,e._lat)||it(this._long,e._long)}}/**
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
 */const ih=/^__.*__$/;class rh{constructor(e,r,i){this.data=e,this.fieldMask=r,this.fieldTransforms=i}toMutation(e,r){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,r,this.fieldTransforms):new jn(e,this.data,r,this.fieldTransforms)}}class oh{constructor(e,r,i){this.data=e,this.fieldMask=r,this.fieldTransforms=i}toMutation(e,r){return new Wn(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function uh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class ch{constructor(e,r,i,s,a,c){this.settings=e,this.databaseId=r,this.wt=i,this.ignoreUndefinedProperties=s,a===void 0&&this.Xc(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new ch(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var r;const i=(r=this.path)===null||r===void 0?void 0:r.child(e),s=this.ta({path:i,na:!1});return s.sa(e),s}ia(e){var r;const i=(r=this.path)===null||r===void 0?void 0:r.child(e),s=this.ta({path:i,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Vh(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(uh(this.Zc)&&ih.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class ah{constructor(e,r,i){this.databaseId=e,this.ignoreUndefinedProperties=r,this.wt=i||nu(e)}aa(e,r,i,s=!1){return new ch({Zc:e,methodName:r,ca:i,path:ft.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function hh(n){const e=n._freezeSettings(),r=nu(n._databaseId);return new ah(n._databaseId,!!e.ignoreUndefinedProperties,r)}function lh(n,e,r,i,s,a={}){const c=n.aa(a.merge||a.mergeFields?2:0,e,r,s);Rh("Data must be an object, but it was:",c,i);const u=Eh(i,c);let h,d;if(a.merge)h=new zt(c.fieldMask),d=c.fieldTransforms;else if(a.mergeFields){const f=[];for(const g of a.mergeFields){const m=bh(e,g,r);if(!c.contains(m))throw new Q(G.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Sh(f,m)||f.push(m)}h=new zt(f),d=c.fieldTransforms.filter(g=>h.covers(g.field))}else h=null,d=c.fieldTransforms;return new rh(new De(u),h,d)}class fh extends nh{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fh}}function yh(n,e,r,i){const s=n.aa(1,e,r);Rh("Data must be an object, but it was:",s,i);const a=[],c=De.empty();Lt(i,(h,d)=>{const f=vh(e,h,r);d=getModularInstance(d);const g=s.ia(f);if(d instanceof fh)a.push(f);else{const m=Th(d,g);m!=null&&(a.push(f),c.set(f,m))}});const u=new zt(a);return new oh(c,u,s.fieldTransforms)}function ph(n,e,r,i,s,a){const c=n.aa(1,e,r),u=[bh(e,i,r)],h=[s];if(a.length%2!=0)throw new Q(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<a.length;m+=2)u.push(bh(e,a[m])),h.push(a[m+1]);const d=[],f=De.empty();for(let m=u.length-1;m>=0;--m)if(!Sh(d,u[m])){const _=u[m];let he=h[m];he=getModularInstance(he);const ve=c.ia(_);if(he instanceof fh)d.push(_);else{const b=Th(he,ve);b!=null&&(d.push(_),f.set(_,b))}}const g=new zt(d);return new oh(f,g,c.fieldTransforms)}function Ih(n,e,r,i=!1){return Th(r,n.aa(i?4:3,e))}function Th(n,e){if(Ah(n=getModularInstance(n)))return Rh("Unsupported field value:",e,n),Eh(n,e);if(n instanceof nh)return function(r,i){if(!uh(i.Zc))throw i.oa(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.oa(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let u=Th(c,i.ra(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=getModularInstance(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return En(i.wt,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ut.fromDate(r);return{timestampValue:Ds(i.wt,s)}}if(r instanceof ut){const s=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ds(i.wt,s)}}if(r instanceof sh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof eh)return{bytesValue:Cs(i.wt,r._byteString)};if(r instanceof ba){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.oa(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ks(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.oa(`Unsupported field value: ${pa(r)}`)}(n,e)}function Eh(n,e){const r={};return Ut(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lt(n,(i,s)=>{const a=Th(s,e.ea(i));a!=null&&(r[i]=a)}),{mapValue:{fields:r}}}function Ah(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof sh||n instanceof eh||n instanceof ba||n instanceof nh)}function Rh(n,e,r){if(!Ah(r)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(r)){const i=pa(r);throw i==="an object"?e.oa(n+" a custom object"):e.oa(n+" "+i)}}function bh(n,e,r){if((e=getModularInstance(e))instanceof Za)return e._internalPath;if(typeof e=="string")return vh(n,e);throw Vh("Field path arguments must be of type string or ",n,!1,void 0,r)}const Ph=new RegExp("[~\\*/\\[\\]]");function vh(n,e,r){if(e.search(Ph)>=0)throw Vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,r);try{return new Za(...e.split("."))._internalPath}catch{throw Vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,r)}}function Vh(n,e,r,i,s){const a=i&&!i.isEmpty(),c=s!==void 0;let u=`Function ${e}() called with invalid data`;r&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(a||c)&&(h+=" (found",a&&(h+=` in field ${i}`),c&&(h+=` in document ${s}`),h+=")"),new Q(G.INVALID_ARGUMENT,u+n+h)}function Sh(n,e){return n.some(r=>r.isEqual(e))}/**
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
 */class Dh{constructor(e,r,i,s,a){this._firestore=e,this._userDataWriter=r,this._key=i,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ba(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ch(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(xh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class Ch extends Dh{data(){return super.data()}}function xh(n,e){return typeof e=="string"?vh(n,e):e instanceof Za?e._internalPath:e._delegate._internalPath}/**
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
 */class Nh{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kh extends Dh{constructor(e,r,i,s,a,c){super(e,r,i,s,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new Oh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const i=this._document.data.field(xh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,r.serverTimestamps)}}}class Oh extends kh{data(e={}){return super.data(e)}}class Mh{constructor(e,r,i,s){this._firestore=e,this._userDataWriter=r,this._snapshot=s,this.metadata=new Nh(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(i=>{e.call(r,new Oh(this._firestore,this._userDataWriter,i.key,i,new Nh(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new Q(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>({type:"added",doc:new Oh(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Nh(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:a++}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Oh(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Nh(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:Fh(c.type),doc:u,oldIndex:h,newIndex:d}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function Fh(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}/**
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
 */function Bh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Q(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lh{}function Uh(n,...e){for(const r of e)n=r._apply(n);return n}class qh extends Lh{constructor(e,r,i){super(),this.fa=e,this.da=r,this._a=i,this.type="where"}_apply(e){const r=hh(e.firestore),i=function(s,a,c,u,h,d,f){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){sl(f,d);const _=[];for(const he of f)_.push(nl(u,s,he));g={arrayValue:{values:_}}}else g=nl(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||sl(f,d),g=Ih(c,a,f,d==="in"||d==="not-in");const m=qe.create(h,d,g);return function(_,he){if(he.ht()){const b=cn(_);if(b!==null&&!b.isEqual(he.field))throw new Q(G.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${b.toString()}' and '${he.field.toString()}'`);const Se=un(_);Se!==null&&il(_,he.field,Se)}const ve=function(b,Se){for(const et of b.filters)if(Se.indexOf(et.op)>=0)return et.op;return null}(_,function(b){switch(b){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(he.op));if(ve!==null)throw ve===he.op?new Q(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${he.op.toString()}' filter.`):new Q(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${he.op.toString()}' filters with '${ve.toString()}' filters.`)}(s,m),m}(e._query,"where",r,e.firestore._databaseId,this.fa,this.da,this._a);return new Pa(e.firestore,e.converter,function(s,a){const c=s.filters.concat([a]);return new nn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),c,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,i))}}function Kh(n,e,r){const i=e,s=xh("where",n);return new qh(s,i,r)}class Gh extends Lh{constructor(e,r){super(),this.fa=e,this.wa=r,this.type="orderBy"}_apply(e){const r=function(i,s,a){if(i.startAt!==null)throw new Q(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const c=new Xe(s,a);return function(u,h){if(un(u)===null){const d=cn(u);d!==null&&il(u,d,h.field)}}(i,c),c}(e._query,this.fa,this.wa);return new Pa(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new nn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function Qh(n,e="asc"){const r=e,i=xh("orderBy",n);return new Gh(i,r)}class jh extends Lh{constructor(e,r,i){super(),this.type=e,this.ma=r,this.ga=i}_apply(e){return new Pa(e.firestore,e.converter,fn(e._query,this.ma,this.ga))}}function Wh(n){return Ta("limit",n),new jh("limit",n,"F")}class Hh extends Lh{constructor(e,r,i){super(),this.type=e,this.ya=r,this.pa=i}_apply(e){const r=el(e,this.type,this.ya,this.pa);return new Pa(e.firestore,e.converter,function(i,s){return new nn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,r))}}function Yh(...n){return new Hh("startAfter",n,!1)}function el(n,e,r,i){if(r[0]=getModularInstance(r[0]),r[0]instanceof Dh)return function(s,a,c,u,h){if(!u)throw new Q(G.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const d=[];for(const f of hn(s))if(f.field.isKeyField())d.push(ye(a,u.key));else{const g=u.data.field(f.field);if(ee(g))throw new Q(G.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const m=f.field.canonicalString();throw new Q(G.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}d.push(g)}return new Ye(d,h)}(n._query,n.firestore._databaseId,e,r[0]._document,i);{const s=hh(n.firestore);return function(a,c,u,h,d,f){const g=a.explicitOrderBy;if(d.length>g.length)throw new Q(G.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let _=0;_<d.length;_++){const he=d[_];if(g[_].field.isKeyField()){if(typeof he!="string")throw new Q(G.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof he}`);if(!an(a)&&he.indexOf("/")!==-1)throw new Q(G.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${he}' contains a slash.`);const ve=a.path.child(ht.fromString(he));if(!dt.isDocumentKey(ve))throw new Q(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${ve}' is not because it contains an odd number of segments.`);const b=new dt(ve);m.push(ye(c,b))}else{const ve=Ih(u,h,he);m.push(ve)}}return new Ye(m,f)}(n._query,n.firestore._databaseId,s,e,r,i)}}function nl(n,e,r){if(typeof(r=getModularInstance(r))=="string"){if(r==="")throw new Q(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!an(e)&&r.indexOf("/")!==-1)throw new Q(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const i=e.path.child(ht.fromString(r));if(!dt.isDocumentKey(i))throw new Q(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ye(n,new dt(i))}if(r instanceof ba)return ye(n,r._key);throw new Q(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(r)}.`)}function sl(n,e){if(!Array.isArray(n)||n.length===0)throw new Q(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new Q(G.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function il(n,e,r){if(!r.isEqual(e))throw new Q(G.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}/**
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
 */class ol{convertValue(e,r="none"){switch(le(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Zt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(te(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 10:return this.convertObject(e.mapValue,r);default:throw L()}}convertObject(e,r){const i={};return Lt(e.fields,(s,a)=>{i[s]=this.convertValue(a,r)}),i}convertGeoPoint(e){return new sh(Zt(e.latitude),Zt(e.longitude))}convertArray(e,r){return(e.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(e,r){switch(r){case"previous":const i=ne(e);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(se(e));default:return null}}convertTimestamp(e){const r=Xt(e);return new ut(r.seconds,r.nanos)}convertDocumentKey(e,r){const i=ht.fromString(e);U(ui(i));const s=new re(i.get(1),i.get(3)),a=new dt(i.popFirst(5));return s.isEqual(r)||F(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),a}}/**
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
 */function ul(n,e,r){let i;return i=n?r&&(r.merge||r.mergeFields)?n.toFirestore(e,r):n.toFirestore(e):e,i}class fl extends ol{constructor(e){super(),this.firestore=e}convertBytes(e){return new eh(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new ba(this.firestore,null,r)}}function wl(n){n=Ia(n,Pa);const e=Ia(n.firestore,Fa),r=La(e),i=new fl(e);return Bh(n._query),aa(r,n._query).then(s=>new Mh(e,i,n,s))}function yl(n,e,r){n=Ia(n,ba);const i=Ia(n.firestore,Fa),s=ul(n.converter,e,r);return Rl(i,[lh(hh(i),"setDoc",n._key,s,n.converter!==null,r).toMutation(n._key,$n.none())])}function pl(n,e,r,...i){n=Ia(n,ba);const s=Ia(n.firestore,Fa),a=hh(s);let c;return c=typeof(e=getModularInstance(e))=="string"||e instanceof Za?ph(a,"updateDoc",n._key,e,r,i):yh(a,"updateDoc",n._key,e),Rl(s,[c.toMutation(n._key,$n.exists(!0))])}function Rl(n,e){return function(r,i){const s=new j;return r.asyncQueue.enqueueAndForget(async()=>hc(await na(r),i,s)),s.promise}(La(n),e)}(function(n,e=!0){(function(r){x=r})(SDK_VERSION),_registerComponent(new Component("firestore",(r,{options:i})=>{const s=r.getProvider("app").getImmediate(),a=new Fa(s,new J(r.getProvider("auth-internal")),new tt(r.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC")),registerVersion(D,"3.4.12",n),registerVersion(D,"3.4.12","esm2017")})();/**
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
 */const DEFAULT_HOST="firebasestorage.googleapis.com",CONFIG_STORAGE_BUCKET_KEY="storageBucket",DEFAULT_MAX_OPERATION_RETRY_TIME=2*60*1e3,DEFAULT_MAX_UPLOAD_RETRY_TIME=10*60*1e3;/**
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
 */class StorageError extends FirebaseError{constructor(e,r){super(prependCode(e),`Firebase Storage: ${r} (${prependCode(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,StorageError.prototype)}_codeEquals(e){return prependCode(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function prependCode(n){return"storage/"+n}function unknown(){const n="An unknown error occurred, please check the error payload for server response.";return new StorageError("unknown",n)}function objectNotFound(n){return new StorageError("object-not-found","Object '"+n+"' does not exist.")}function quotaExceeded(n){return new StorageError("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function unauthenticated(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new StorageError("unauthenticated",n)}function unauthorizedApp(){return new StorageError("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function unauthorized(n){return new StorageError("unauthorized","User does not have permission to access '"+n+"'.")}function retryLimitExceeded(){return new StorageError("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function canceled(){return new StorageError("canceled","User canceled the upload/download.")}function invalidUrl(n){return new StorageError("invalid-url","Invalid URL '"+n+"'.")}function invalidDefaultBucket(n){return new StorageError("invalid-default-bucket","Invalid default bucket '"+n+"'.")}function noDefaultBucket(){return new StorageError("no-default-bucket","No default bucket found. Did you set the '"+CONFIG_STORAGE_BUCKET_KEY+"' property when initializing the app?")}function cannotSliceBlob(){return new StorageError("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function noDownloadURL(){return new StorageError("no-download-url","The given file does not have any download URLs.")}function invalidArgument(n){return new StorageError("invalid-argument",n)}function appDeleted(){return new StorageError("app-deleted","The Firebase app was deleted.")}function invalidRootOperation(n){return new StorageError("invalid-root-operation","The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function invalidFormat(n,e){return new StorageError("invalid-format","String does not match format '"+n+"': "+e)}function internalError(n){throw new StorageError("internal-error","Internal error: "+n)}/**
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
 */class Location{constructor(e,r){this.bucket=e,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,r){let i;try{i=Location.makeFromUrl(e,r)}catch{return new Location(e,"")}if(i.path==="")return i;throw invalidDefaultBucket(e)}static makeFromUrl(e,r){let i=null;const s="([A-Za-z0-9.\\-_]+)";function a(mt){mt.path.charAt(mt.path.length-1)==="/"&&(mt.path_=mt.path_.slice(0,-1))}const c="(/(.*))?$",u=new RegExp("^gs://"+s+c,"i"),h={bucket:1,path:3};function d(mt){mt.path_=decodeURIComponent(mt.path)}const f="v[A-Za-z0-9_]+",g=r.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${g}/${f}/b/${s}/o${m}`,"i"),he={bucket:1,path:3},ve=r===DEFAULT_HOST?"(?:storage.googleapis.com|storage.cloud.google.com)":r,b="([^?#]*)",Se=new RegExp(`^https?://${ve}/${s}/${b}`,"i"),Pe=[{regex:u,indices:h,postModify:a},{regex:_,indices:he,postModify:d},{regex:Se,indices:{bucket:1,path:2},postModify:d}];for(let mt=0;mt<Pe.length;mt++){const ot=Pe[mt],Ue=ot.regex.exec(e);if(Ue){const Be=Ue[ot.indices.bucket];let Ve=Ue[ot.indices.path];Ve||(Ve=""),i=new Location(Be,Ve),ot.postModify(i);break}}if(i==null)throw invalidUrl(e);return i}}class FailRequest{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function start(n,e,r){let i=1,s=null,a=null,c=!1,u=0;function h(){return u===2}let d=!1;function f(...b){d||(d=!0,e.apply(null,b))}function g(b){s=setTimeout(()=>{s=null,n(_,h())},b)}function m(){a&&clearTimeout(a)}function _(b,...Se){if(d){m();return}if(b){m(),f.call(null,b,...Se);return}if(h()||c){m(),f.call(null,b,...Se);return}i<64&&(i*=2);let Pe;u===1?(u=2,Pe=0):Pe=(i+Math.random())*1e3,g(Pe)}let he=!1;function ve(b){he||(he=!0,m(),!d&&(s!==null?(b||(u=2),clearTimeout(s),g(0)):b||(u=1)))}return g(0),a=setTimeout(()=>{c=!0,ve(!0)},r),ve}function stop(n){n(!1)}/**
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
 */function isJustDef(n){return n!==void 0}function isNonArrayObject(n){return typeof n=="object"&&!Array.isArray(n)}function isString(n){return typeof n=="string"||n instanceof String}function isNativeBlob(n){return isNativeBlobDefined()&&n instanceof Blob}function isNativeBlobDefined(){return typeof Blob!="undefined"}function validateNumber(n,e,r,i){if(i<e)throw invalidArgument(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>r)throw invalidArgument(`Invalid value for '${n}'. Expected ${r} or less.`)}/**
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
 */function makeUrl(n,e,r){let i=e;return r==null&&(i=`https://${e}`),`${r}://${i}/v0${n}`}function makeQueryString(n){const e=encodeURIComponent;let r="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);r=r+s+"&"}return r=r.slice(0,-1),r}/**
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
 */var ErrorCode;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ErrorCode||(ErrorCode={}));/**
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
 */class NetworkRequest{constructor(e,r,i,s,a,c,u,h,d,f,g){this.url_=e,this.method_=r,this.headers_=i,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=u,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new RequestEndStatus(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=u=>{const h=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const u=a.getErrorCode()===ErrorCode.NO_ERROR,h=a.getStatus();if(!u||this.isRetryStatusCode_(h)){const f=a.getErrorCode()===ErrorCode.ABORT;i(!1,new RequestEndStatus(!1,null,f));return}const d=this.successCodes_.indexOf(h)!==-1;i(!0,new RequestEndStatus(d,a))})},r=(i,s)=>{const a=this.resolve_,c=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(u,u.getResponse());isJustDef(h)?a(h):a()}catch(h){c(h)}else if(u!==null){const h=unknown();h.serverResponse=u.getErrorText(),this.errorCallback_?c(this.errorCallback_(u,h)):c(h)}else if(s.canceled){const h=this.appDelete_?appDeleted():canceled();c(h)}else{const h=retryLimitExceeded();c(h)}};this.canceled_?r(!1,new RequestEndStatus(!1,null,!0)):this.backoffId_=start(e,r,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&stop(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const r=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,a=this.additionalRetryCodes_.indexOf(e)!==-1;return r||s||a}}class RequestEndStatus{constructor(e,r,i){this.wasSuccessCode=e,this.connection=r,this.canceled=!!i}}function addAuthHeader_(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function addVersionHeader_(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function addGmpidHeader_(n,e){e&&(n["X-Firebase-GMPID"]=e)}function addAppCheckHeader_(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function makeRequest(n,e,r,i,s,a){const c=makeQueryString(n.urlParams),u=n.url+c,h=Object.assign({},n.headers);return addGmpidHeader_(h,e),addAuthHeader_(h,r),addVersionHeader_(h,a),addAppCheckHeader_(h,i),new NetworkRequest(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s)}/**
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
 */function getBlobBuilder(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function getBlob$1(...n){const e=getBlobBuilder();if(e!==void 0){const r=new e;for(let i=0;i<n.length;i++)r.append(n[i]);return r.getBlob()}else{if(isNativeBlobDefined())return new Blob(n);throw new StorageError("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function sliceBlob(n,e,r){return n.webkitSlice?n.webkitSlice(e,r):n.mozSlice?n.mozSlice(e,r):n.slice?n.slice(e,r):null}/**
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
 */function decodeBase64(n){return atob(n)}/**
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
 */const StringFormat={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class StringData{constructor(e,r){this.data=e,this.contentType=r||null}}function dataFromString(n,e){switch(n){case StringFormat.RAW:return new StringData(utf8Bytes_(e));case StringFormat.BASE64:case StringFormat.BASE64URL:return new StringData(base64Bytes_(n,e));case StringFormat.DATA_URL:return new StringData(dataURLBytes_(e),dataURLContentType_(e))}throw unknown()}function utf8Bytes_(n){const e=[];for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(r<n.length-1&&(n.charCodeAt(r+1)&64512)===56320))e.push(239,191,189);else{const a=i,c=n.charCodeAt(++r);i=65536|(a&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function percentEncodedBytes_(n){let e;try{e=decodeURIComponent(n)}catch{throw invalidFormat(StringFormat.DATA_URL,"Malformed data URL.")}return utf8Bytes_(e)}function base64Bytes_(n,e){switch(n){case StringFormat.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw invalidFormat(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case StringFormat.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw invalidFormat(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=decodeBase64(e)}catch{throw invalidFormat(n,"Invalid character found")}const i=new Uint8Array(r.length);for(let s=0;s<r.length;s++)i[s]=r.charCodeAt(s);return i}class DataURLParts{constructor(e){this.base64=!1,this.contentType=null;const r=e.match(/^data:([^,]+)?,/);if(r===null)throw invalidFormat(StringFormat.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=r[1]||null;i!=null&&(this.base64=endsWith(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function dataURLBytes_(n){const e=new DataURLParts(n);return e.base64?base64Bytes_(StringFormat.BASE64,e.rest):percentEncodedBytes_(e.rest)}function dataURLContentType_(n){return new DataURLParts(n).contentType}function endsWith(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class FbsBlob{constructor(e,r){let i=0,s="";isNativeBlob(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(r?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(r?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,r){if(isNativeBlob(this.data_)){const i=this.data_,s=sliceBlob(i,e,r);return s===null?null:new FbsBlob(s)}else{const i=new Uint8Array(this.data_.buffer,e,r-e);return new FbsBlob(i,!0)}}static getBlob(...e){if(isNativeBlobDefined()){const r=e.map(i=>i instanceof FbsBlob?i.data_:i);return new FbsBlob(getBlob$1.apply(null,r))}else{const r=e.map(c=>isString(c)?dataFromString(StringFormat.RAW,c).data:c.data_);let i=0;r.forEach(c=>{i+=c.byteLength});const s=new Uint8Array(i);let a=0;return r.forEach(c=>{for(let u=0;u<c.length;u++)s[a++]=c[u]}),new FbsBlob(s,!0)}}uploadData(){return this.data_}}/**
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
 */function jsonObjectOrNull(n){let e;try{e=JSON.parse(n)}catch{return null}return isNonArrayObject(e)?e:null}/**
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
 */function parent(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function child(n,e){const r=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?r:n+"/"+r}function lastComponent(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function noXform_(n,e){return e}class Mapping{constructor(e,r,i,s){this.server=e,this.local=r||e,this.writable=!!i,this.xform=s||noXform_}}let mappings_=null;function xformPath(n){return!isString(n)||n.length<2?n:lastComponent(n)}function getMappings(){if(mappings_)return mappings_;const n=[];n.push(new Mapping("bucket")),n.push(new Mapping("generation")),n.push(new Mapping("metageneration")),n.push(new Mapping("name","fullPath",!0));function e(a,c){return xformPath(c)}const r=new Mapping("name");r.xform=e,n.push(r);function i(a,c){return c!==void 0?Number(c):c}const s=new Mapping("size");return s.xform=i,n.push(s),n.push(new Mapping("timeCreated")),n.push(new Mapping("updated")),n.push(new Mapping("md5Hash",null,!0)),n.push(new Mapping("cacheControl",null,!0)),n.push(new Mapping("contentDisposition",null,!0)),n.push(new Mapping("contentEncoding",null,!0)),n.push(new Mapping("contentLanguage",null,!0)),n.push(new Mapping("contentType",null,!0)),n.push(new Mapping("metadata","customMetadata",!0)),mappings_=n,mappings_}function addRef(n,e){function r(){const i=n.bucket,s=n.fullPath,a=new Location(i,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:r})}function fromResource(n,e,r){const i={};i.type="file";const s=r.length;for(let a=0;a<s;a++){const c=r[a];i[c.local]=c.xform(i,e[c.server])}return addRef(i,n),i}function fromResourceString(n,e,r){const i=jsonObjectOrNull(e);return i===null?null:fromResource(n,i,r)}function downloadUrlFromResourceString(n,e,r,i){const s=jsonObjectOrNull(e);if(s===null||!isString(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(d=>{const f=n.bucket,g=n.fullPath,m="/b/"+c(f)+"/o/"+c(g),_=makeUrl(m,r,i),he=makeQueryString({alt:"media",token:d});return _+he})[0]}function toResourceString(n,e){const r={},i=e.length;for(let s=0;s<i;s++){const a=e[s];a.writable&&(r[a.server]=n[a.local])}return JSON.stringify(r)}class RequestInfo{constructor(e,r,i,s){this.url=e,this.method=r,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function handlerCheck(n){if(!n)throw unknown()}function metadataHandler(n,e){function r(i,s){const a=fromResourceString(n,s,e);return handlerCheck(a!==null),a}return r}function downloadUrlHandler(n,e){function r(i,s){const a=fromResourceString(n,s,e);return handlerCheck(a!==null),downloadUrlFromResourceString(a,s,n.host,n._protocol)}return r}function sharedErrorHandler(n){function e(r,i){let s;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?s=unauthorizedApp():s=unauthenticated():r.getStatus()===402?s=quotaExceeded(n.bucket):r.getStatus()===403?s=unauthorized(n.path):s=i,s.serverResponse=i.serverResponse,s}return e}function objectErrorHandler(n){const e=sharedErrorHandler(n);function r(i,s){let a=e(i,s);return i.getStatus()===404&&(a=objectNotFound(n.path)),a.serverResponse=s.serverResponse,a}return r}function getDownloadUrl(n,e,r){const i=e.fullServerUrl(),s=makeUrl(i,n.host,n._protocol),a="GET",c=n.maxOperationRetryTime,u=new RequestInfo(s,a,downloadUrlHandler(n,r),c);return u.errorHandler=objectErrorHandler(e),u}function determineContentType_(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function metadataForUpload_(n,e,r){const i=Object.assign({},r);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=determineContentType_(null,e)),i}function multipartUpload(n,e,r,i,s){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function u(){let Pe="";for(let mt=0;mt<2;mt++)Pe=Pe+Math.random().toString().slice(2);return Pe}const h=u();c["Content-Type"]="multipart/related; boundary="+h;const d=metadataForUpload_(e,i,s),f=toResourceString(d,r),g="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+h+`\r
Content-Type: `+d.contentType+`\r
\r
`,m=`\r
--`+h+"--",_=FbsBlob.getBlob(g,i,m);if(_===null)throw cannotSliceBlob();const he={name:d.fullPath},ve=makeUrl(a,n.host,n._protocol),b="POST",Se=n.maxUploadRetryTime,et=new RequestInfo(ve,b,metadataHandler(n,r),Se);return et.urlParams=he,et.headers=c,et.body=_.uploadData(),et.errorHandler=sharedErrorHandler(e),et}class XhrConnection{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ErrorCode.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ErrorCode.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ErrorCode.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,r,i,s){if(this.sent_)throw internalError("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw internalError("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw internalError("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw internalError("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw internalError("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XhrTextConnection extends XhrConnection{initXhr(){this.xhr_.responseType="text"}}function newTextConnection(){return new XhrTextConnection}/**
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
 */class Reference{constructor(e,r){this._service=e,r instanceof Location?this._location=r:this._location=Location.makeFromUrl(r,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,r){return new Reference(e,r)}get root(){const e=new Location(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lastComponent(this._location.path)}get storage(){return this._service}get parent(){const e=parent(this._location.path);if(e===null)return null;const r=new Location(this._location.bucket,e);return new Reference(this._service,r)}_throwIfRoot(e){if(this._location.path==="")throw invalidRootOperation(e)}}function uploadBytes$1(n,e,r){n._throwIfRoot("uploadBytes");const i=multipartUpload(n.storage,n._location,getMappings(),new FbsBlob(e,!0),r);return n.storage.makeRequestWithTokens(i,newTextConnection).then(s=>({metadata:s,ref:n}))}function getDownloadURL$1(n){n._throwIfRoot("getDownloadURL");const e=getDownloadUrl(n.storage,n._location,getMappings());return n.storage.makeRequestWithTokens(e,newTextConnection).then(r=>{if(r===null)throw noDownloadURL();return r})}function _getChild$1(n,e){const r=child(n._location.path,e),i=new Location(n._location.bucket,r);return new Reference(n.storage,i)}/**
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
 */function isUrl(n){return/^[A-Za-z]+:\/\//.test(n)}function refFromURL(n,e){return new Reference(n,e)}function refFromPath(n,e){if(n instanceof FirebaseStorageImpl){const r=n;if(r._bucket==null)throw noDefaultBucket();const i=new Reference(r,r._bucket);return e!=null?refFromPath(i,e):i}else return e!==void 0?_getChild$1(n,e):n}function ref$1(n,e){if(e&&isUrl(e)){if(n instanceof FirebaseStorageImpl)return refFromURL(n,e);throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.")}else return refFromPath(n,e)}function extractBucket(n,e){const r=e==null?void 0:e[CONFIG_STORAGE_BUCKET_KEY];return r==null?null:Location.makeFromBucketSpec(r,n)}class FirebaseStorageImpl{constructor(e,r,i,s,a){this.app=e,this._authProvider=r,this._appCheckProvider=i,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=DEFAULT_HOST,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DEFAULT_MAX_OPERATION_RETRY_TIME,this._maxUploadRetryTime=DEFAULT_MAX_UPLOAD_RETRY_TIME,this._requests=new Set,s!=null?this._bucket=Location.makeFromBucketSpec(s,this._host):this._bucket=extractBucket(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Location.makeFromBucketSpec(this._url,e):this._bucket=extractBucket(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const r=await e.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Reference(this,e)}_makeRequest(e,r,i,s){if(this._deleted)return new FailRequest(appDeleted());{const a=makeRequest(e,this._appId,i,s,r,this._firebaseVersion);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,r){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,r,i,s).getPromise()}}const name$1="@firebase/storage",version$1="0.9.9";/**
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
 */const STORAGE_TYPE="storage";function uploadBytes(n,e,r){return n=getModularInstance(n),uploadBytes$1(n,e,r)}function getDownloadURL(n){return n=getModularInstance(n),getDownloadURL$1(n)}function ref(n,e){return n=getModularInstance(n),ref$1(n,e)}function getStorage(n=getApp(),e){return n=getModularInstance(n),_getProvider(n,STORAGE_TYPE).getImmediate({identifier:e})}function factory(n,{instanceIdentifier:e}){const r=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new FirebaseStorageImpl(r,i,s,e,SDK_VERSION)}function registerStorage(){_registerComponent(new Component(STORAGE_TYPE,factory,"PUBLIC").setMultipleInstances(!0)),registerVersion(name$1,version$1,""),registerVersion(name$1,version$1,"esm2017")}registerStorage();var name="firebase",version="9.9.0";/**
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
 */registerVersion(name,version,"app");const firebaseConfig={apiKey:"AIzaSyCx8gcO3r0iNVXuEStVVhOdaxKaoMPwlz4",authDomain:"ema-credit-card-approval.firebaseapp.com",projectId:"ema-credit-card-approval",storageBucket:"ema-credit-card-approval.appspot.com",messagingSenderId:"959663946450",appId:"1:959663946450:web:9a7eeff2784c30298d0b0b",measurementId:"G-7NZSYDJQ7S"},app=initializeApp(firebaseConfig),auth=getAuth(app),firestore=Ba(app),storage=getStorage(app);var LoginForm_svelte_svelte_type_style_lang="";function create_default_slot$3(n){let e;return{c(){e=text("Login")},m(r,i){insert(r,e,i)},d(r){r&&detach(e)}}}function create_fragment$f(n){let e,r,i,s,a,c,u,h,d,f,g,m,_,he,ve,b,Se,et,Pe;function mt(Ve){n[6](Ve)}let ot={name:"email"};n[0]!==void 0&&(ot.value=n[0]),u=new Input({props:ot}),binding_callbacks.push(()=>bind(u,"value",mt)),u.$on("input",n[3]);function Ue(Ve){n[7](Ve)}let Be={name:"password"};return n[1]!==void 0&&(Be.value=n[1]),m=new InputPassword({props:Be}),binding_callbacks.push(()=>bind(m,"value",Ue)),m.$on("input",n[4]),ve=new Button({props:{$$slots:{default:[create_default_slot$3]},$$scope:{ctx:n}}}),ve.$on("click",n[5]),{c(){e=element("div"),r=element("img"),s=space(),a=element("label"),a.textContent="Email",c=space(),create_component(u.$$.fragment),d=space(),f=element("label"),f.textContent="Contrase\xF1a",g=space(),create_component(m.$$.fragment),he=space(),create_component(ve.$$.fragment),b=space(),Se=element("span"),et=text(n[2]),src_url_equal(r.src,i=logo)||attr(r,"src",i),attr(r,"width",128),attr(r,"alt","Credit Card Approval Logo"),attr(r,"class","svelte-wrmxst"),attr(a,"for","email"),attr(f,"for","password"),attr(e,"class","container svelte-wrmxst")},m(Ve,Le){insert(Ve,e,Le),append(e,r),append(e,s),append(e,a),append(e,c),mount_component(u,e,null),append(e,d),append(e,f),append(e,g),mount_component(m,e,null),append(e,he),mount_component(ve,e,null),append(e,b),append(e,Se),append(Se,et),Pe=!0},p(Ve,[Le]){const gt={};!h&&Le&1&&(h=!0,gt.value=Ve[0],add_flush_callback(()=>h=!1)),u.$set(gt);const vt={};!_&&Le&2&&(_=!0,vt.value=Ve[1],add_flush_callback(()=>_=!1)),m.$set(vt);const yt={};Le&512&&(yt.$$scope={dirty:Le,ctx:Ve}),ve.$set(yt),(!Pe||Le&4)&&set_data(et,Ve[2])},i(Ve){Pe||(transition_in(u.$$.fragment,Ve),transition_in(m.$$.fragment,Ve),transition_in(ve.$$.fragment,Ve),Pe=!0)},o(Ve){transition_out(u.$$.fragment,Ve),transition_out(m.$$.fragment,Ve),transition_out(ve.$$.fragment,Ve),Pe=!1},d(Ve){Ve&&detach(e),destroy_component(u),destroy_component(m),destroy_component(ve)}}}function instance$f(n,e,r){let i="",s="",a="";const c=m=>{m.preventDefault();const _=m.target;r(0,i=_.value)},u=m=>{m.preventDefault();const _=m.target;r(1,s=_.value)},h=m=>{console.log("CODE: ",m.code),m.code===AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY.INVALID_PASSWORD?r(2,a="Contrase\xF1a incorrecta"):r(2,a="Error: "+m.message)},d=async()=>{try{const m=await signInWithEmailAndPassword(auth,i,s);console.log("userCredential",m)}catch(m){console.error(m),h(m)}};function f(m){i=m,r(0,i)}function g(m){s=m,r(1,s)}return[i,s,a,c,u,d,f,g]}class LoginForm extends SvelteComponent{constructor(e){super(),init(this,e,instance$f,create_fragment$f,safe_not_equal,{})}}const jQuery=window.$;var Header_svelte_svelte_type_style_lang="";function create_fragment$e(n){let e,r,i,s,a,c,u,h,d=auth.currentUser.email+"",f,g,m,_,he,ve,b,Se;return{c(){e=element("div"),r=element("div"),i=element("a"),s=element("img"),c=text(`
      Emax`),u=space(),h=element("div"),f=text(d),g=space(),m=element("i"),_=space(),he=element("div"),ve=element("a"),ve.textContent="Cerrar sessi\xF3n",attr(s,"class","logo svelte-vvzr8z"),src_url_equal(s.src,a=logo)||attr(s,"src",a),attr(s,"alt","This website logo"),attr(i,"href","#logo"),attr(i,"class","header item"),attr(m,"class","dropdown icon"),attr(ve,"class","item"),attr(ve,"href","#close-session"),attr(he,"class","menu"),attr(he,"id","submenu"),attr(h,"class","ui simple dropdown item right"),attr(r,"class","ui container"),attr(e,"class","ui fixed inverted menu svelte-vvzr8z")},m(et,Pe){insert(et,e,Pe),append(e,r),append(r,i),append(i,s),append(i,c),append(r,u),append(r,h),append(h,f),append(h,g),append(h,m),append(h,_),append(h,he),append(he,ve),b||(Se=[listen(ve,"click",n[0]),listen(h,"click",n[1])],b=!0)},p:noop$1,i:noop$1,o:noop$1,d(et){et&&detach(e),b=!1,run_all(Se)}}}function instance$e(n){let e=!1;return[()=>{signOut(auth).finally(()=>{document.location.reload()})},()=>{e=!e;const s=jQuery("#submenu");e?s.show():s.hide()}]}class Header extends SvelteComponent{constructor(e){super(),init(this,e,instance$e,create_fragment$e,safe_not_equal,{})}}function create_fragment$d(n){let e,r,i,s,a,c,u,h,d,f,g,m,_,he,ve,b,Se,et;const Pe=n[7].default,mt=create_slot(Pe,n,n[6],null);return{c(){e=element("div"),r=element("i"),i=space(),s=element("div"),a=text(n[0]),c=space(),u=element("div"),h=element("div"),mt&&mt.c(),d=space(),f=element("div"),g=element("div"),m=text(n[1]),_=space(),he=element("div"),ve=text(n[2]),b=space(),Se=element("i"),attr(r,"class","close icon"),attr(s,"class","header"),attr(h,"class","description"),attr(u,"class","content"),attr(g,"class","ui black deny button"),attr(Se,"class","checkmark icon"),attr(he,"class","ui positive right labeled icon button"),attr(f,"class","actions"),attr(e,"class","ui modal"),attr(e,"id",n[3])},m(ot,Ue){insert(ot,e,Ue),append(e,r),append(e,i),append(e,s),append(s,a),append(e,c),append(e,u),append(u,h),mt&&mt.m(h,null),append(e,d),append(e,f),append(f,g),append(g,m),append(f,_),append(f,he),append(he,ve),append(he,b),append(he,Se),et=!0},p(ot,[Ue]){(!et||Ue&1)&&set_data(a,ot[0]),mt&&mt.p&&(!et||Ue&64)&&update_slot_base(mt,Pe,ot,ot[6],et?get_slot_changes(Pe,ot[6],Ue,null):get_all_dirty_from_scope(ot[6]),null),(!et||Ue&2)&&set_data(m,ot[1]),(!et||Ue&4)&&set_data(ve,ot[2]),(!et||Ue&8)&&attr(e,"id",ot[3])},i(ot){et||(transition_in(mt,ot),et=!0)},o(ot){transition_out(mt,ot),et=!1},d(ot){ot&&detach(e),mt&&mt.d(ot)}}}function instance$d(n,e,r){let{$$slots:i={},$$scope:s}=e,{shown:a}=e,{title:c="A Modal"}=e,{denyText:u="Nope"}=e,{acceptText:h="Yep"}=e,{name:d}=e;const f=createEventDispatcher();let g;return onMount(()=>{r(5,g=jQuery(`#${d}`)),r(5,g=g.modal({onApprove:()=>{console.log("Modal approved!"),f("approve")},onDeny:()=>{console.log("Modal denied!"),f("deny")},onShow:()=>{r(4,a=!0)},onVisible:()=>{r(4,a=!0)},onHide:()=>{r(4,a=!1)},onHidden:()=>{r(4,a=!1)}}))}),n.$$set=m=>{"shown"in m&&r(4,a=m.shown),"title"in m&&r(0,c=m.title),"denyText"in m&&r(1,u=m.denyText),"acceptText"in m&&r(2,h=m.acceptText),"name"in m&&r(3,d=m.name),"$$scope"in m&&r(6,s=m.$$scope)},n.$$.update=()=>{n.$$.dirty&48&&a&&g.modal("show")},[c,u,h,d,a,g,s,i]}class Modal extends SvelteComponent{constructor(e){super(),init(this,e,instance$d,create_fragment$d,safe_not_equal,{shown:4,title:0,denyText:1,acceptText:2,name:3})}}var Select_svelte_svelte_type_style_lang="";function get_each_context$2(n,e,r){const i=n.slice();return i[3]=e[r],i}function create_each_block$2(n){let e,r=n[3]+"",i,s;return{c(){e=element("option"),i=text(r),e.__value=s=n[3],e.value=e.__value},m(a,c){insert(a,e,c),append(e,i)},p(a,c){c&2&&r!==(r=a[3]+"")&&set_data(i,r),c&2&&s!==(s=a[3])&&(e.__value=s,e.value=e.__value)},d(a){a&&detach(e)}}}function create_fragment$c(n){let e,r,i,s=n[1],a=[];for(let c=0;c<s.length;c+=1)a[c]=create_each_block$2(get_each_context$2(n,s,c));return{c(){e=element("select");for(let c=0;c<a.length;c+=1)a[c].c();attr(e,"name",""),attr(e,"id",""),attr(e,"class","svelte-ok422l"),n[0]===void 0&&add_render_callback(()=>n[2].call(e))},m(c,u){insert(c,e,u);for(let h=0;h<a.length;h+=1)a[h].m(e,null);select_option(e,n[0]),r||(i=listen(e,"change",n[2]),r=!0)},p(c,[u]){if(u&2){s=c[1];let h;for(h=0;h<s.length;h+=1){const d=get_each_context$2(c,s,h);a[h]?a[h].p(d,u):(a[h]=create_each_block$2(d),a[h].c(),a[h].m(e,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=s.length}u&3&&select_option(e,c[0])},i:noop$1,o:noop$1,d(c){c&&detach(e),destroy_each(a,c),r=!1,i()}}}function instance$c(n,e,r){let{items:i}=e,{value:s}=e;function a(){s=select_value(this),r(0,s),r(1,i)}return n.$$set=c=>{"items"in c&&r(1,i=c.items),"value"in c&&r(0,s=c.value)},[s,i,a]}class Select extends SvelteComponent{constructor(e){super(),init(this,e,instance$c,create_fragment$c,safe_not_equal,{items:1,value:0})}}var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},conversion={exports:{}};(function(n,e){(function(r,i){n.exports=i()})(commonjsGlobal,function(){return function(r){var i={};function s(a){if(i[a])return i[a].exports;var c=i[a]={i:a,l:!1,exports:{}};return r[a].call(c.exports,c,c.exports,s),c.l=!0,c.exports}return s.m=r,s.c=i,s.d=function(a,c,u){s.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:u})},s.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,c){if(1&c&&(a=s(a)),8&c||4&c&&typeof a=="object"&&a&&a.__esModule)return a;var u=Object.create(null);if(s.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:a}),2&c&&typeof a!="string")for(var h in a)s.d(u,h,function(d){return a[d]}.bind(null,h));return u},s.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return s.d(c,"a",c),c},s.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)},s.p="",s(s.s=0)}([function(r,i,s){var a;function c(Ue){return["image/png","image/jpeg","image/gif"].some(Be=>Be===Ue)}s.r(i),s.d(i,"canvastoDataURL",function(){return h}),s.d(i,"canvastoFile",function(){return d}),s.d(i,"dataURLtoFile",function(){return g}),s.d(i,"dataURLtoImage",function(){return m}),s.d(i,"downloadFile",function(){return _}),s.d(i,"filetoDataURL",function(){return he}),s.d(i,"imagetoCanvas",function(){return b}),s.d(i,"urltoBlob",function(){return Se}),s.d(i,"urltoImage",function(){return et}),s.d(i,"compress",function(){return mt}),s.d(i,"compressAccurately",function(){return ot}),s.d(i,"EImageType",function(){return a}),function(Ue){Ue.PNG="image/png",Ue.JPEG="image/jpeg",Ue.GIF="image/gif"}(a||(a={}));var u=function(Ue,Be,Ve,Le){return new(Ve||(Ve=Promise))(function(gt,vt){function yt(Nt){try{St(Le.next(Nt))}catch(_t){vt(_t)}}function wt(Nt){try{St(Le.throw(Nt))}catch(_t){vt(_t)}}function St(Nt){var _t;Nt.done?gt(Nt.value):(_t=Nt.value,_t instanceof Ve?_t:new Ve(function(Ot){Ot(_t)})).then(yt,wt)}St((Le=Le.apply(Ue,Be||[])).next())})};function h(Ue,Be=.92,Ve=a.JPEG){return u(this,void 0,void 0,function*(){return c(Ve)||(Ve=a.JPEG),Ue.toDataURL(Ve,Be)})}function d(Ue,Be=.92,Ve=a.JPEG){return new Promise(Le=>Ue.toBlob(gt=>Le(gt),Ve,Be))}var f=function(Ue,Be,Ve,Le){return new(Ve||(Ve=Promise))(function(gt,vt){function yt(Nt){try{St(Le.next(Nt))}catch(_t){vt(_t)}}function wt(Nt){try{St(Le.throw(Nt))}catch(_t){vt(_t)}}function St(Nt){var _t;Nt.done?gt(Nt.value):(_t=Nt.value,_t instanceof Ve?_t:new Ve(function(Ot){Ot(_t)})).then(yt,wt)}St((Le=Le.apply(Ue,Be||[])).next())})};function g(Ue,Be){return f(this,void 0,void 0,function*(){const Ve=Ue.split(",");let Le=Ve[0].match(/:(.*?);/)[1];const gt=atob(Ve[1]);let vt=gt.length;const yt=new Uint8Array(vt);for(;vt--;)yt[vt]=gt.charCodeAt(vt);return c(Be)&&(Le=Be),new Blob([yt],{type:Le})})}function m(Ue){return new Promise((Be,Ve)=>{const Le=new Image;Le.onload=()=>Be(Le),Le.onerror=()=>Ve(new Error("dataURLtoImage(): dataURL is illegal")),Le.src=Ue})}function _(Ue,Be){const Ve=document.createElement("a");Ve.href=window.URL.createObjectURL(Ue),Ve.download=Be||Date.now().toString(36),document.body.appendChild(Ve);const Le=document.createEvent("MouseEvents");Le.initEvent("click",!1,!1),Ve.dispatchEvent(Le),document.body.removeChild(Ve)}function he(Ue){return new Promise(Be=>{const Ve=new FileReader;Ve.onloadend=Le=>Be(Le.target.result),Ve.readAsDataURL(Ue)})}var ve=function(Ue,Be,Ve,Le){return new(Ve||(Ve=Promise))(function(gt,vt){function yt(Nt){try{St(Le.next(Nt))}catch(_t){vt(_t)}}function wt(Nt){try{St(Le.throw(Nt))}catch(_t){vt(_t)}}function St(Nt){var _t;Nt.done?gt(Nt.value):(_t=Nt.value,_t instanceof Ve?_t:new Ve(function(Ot){Ot(_t)})).then(yt,wt)}St((Le=Le.apply(Ue,Be||[])).next())})};function b(Ue,Be={}){return ve(this,void 0,void 0,function*(){const Ve=Object.assign({},Be),Le=document.createElement("canvas"),gt=Le.getContext("2d");let vt,yt;for(const wt in Ve)Object.prototype.hasOwnProperty.call(Ve,wt)&&(Ve[wt]=Number(Ve[wt]));if(Ve.scale){const wt=Ve.scale>0&&Ve.scale<10?Ve.scale:1;yt=Ue.width*wt,vt=Ue.height*wt}else yt=Ve.width||Ve.height*Ue.width/Ue.height||Ue.width,vt=Ve.height||Ve.width*Ue.height/Ue.width||Ue.height;switch([5,6,7,8].some(wt=>wt===Ve.orientation)?(Le.height=yt,Le.width=vt):(Le.height=vt,Le.width=yt),Ve.orientation){case 3:gt.rotate(180*Math.PI/180),gt.drawImage(Ue,-Le.width,-Le.height,Le.width,Le.height);break;case 6:gt.rotate(90*Math.PI/180),gt.drawImage(Ue,0,-Le.width,Le.height,Le.width);break;case 8:gt.rotate(270*Math.PI/180),gt.drawImage(Ue,-Le.height,0,Le.height,Le.width);break;case 2:gt.translate(Le.width,0),gt.scale(-1,1),gt.drawImage(Ue,0,0,Le.width,Le.height);break;case 4:gt.translate(Le.width,0),gt.scale(-1,1),gt.rotate(180*Math.PI/180),gt.drawImage(Ue,-Le.width,-Le.height,Le.width,Le.height);break;case 5:gt.translate(Le.width,0),gt.scale(-1,1),gt.rotate(90*Math.PI/180),gt.drawImage(Ue,0,-Le.width,Le.height,Le.width);break;case 7:gt.translate(Le.width,0),gt.scale(-1,1),gt.rotate(270*Math.PI/180),gt.drawImage(Ue,-Le.height,0,Le.height,Le.width);break;default:gt.drawImage(Ue,0,0,Le.width,Le.height)}return Le})}function Se(Ue){return fetch(Ue).then(Be=>Be.blob())}function et(Ue){return new Promise((Be,Ve)=>{const Le=new Image;Le.onload=()=>Be(Le),Le.onerror=()=>Ve(new Error("urltoImage(): Image failed to load, please check the image URL")),Le.src=Ue})}var Pe=function(Ue,Be,Ve,Le){return new(Ve||(Ve=Promise))(function(gt,vt){function yt(Nt){try{St(Le.next(Nt))}catch(_t){vt(_t)}}function wt(Nt){try{St(Le.throw(Nt))}catch(_t){vt(_t)}}function St(Nt){var _t;Nt.done?gt(Nt.value):(_t=Nt.value,_t instanceof Ve?_t:new Ve(function(Ot){Ot(_t)})).then(yt,wt)}St((Le=Le.apply(Ue,Be||[])).next())})};function mt(Ue,Be={}){return Pe(this,void 0,void 0,function*(){if(!(Ue instanceof Blob))throw new Error("compress(): First arg must be a Blob object or a File object.");if(typeof Be!="object"&&(Be=Object.assign({quality:Be})),Be.quality=Number(Be.quality),Number.isNaN(Be.quality))return Ue;const Ve=yield he(Ue);let Le=Ve.split(",")[0].match(/:(.*?);/)[1],gt=a.JPEG;c(Be.type)&&(gt=Be.type,Le=Be.type);const vt=yield m(Ve),yt=yield b(vt,Object.assign({},Be)),wt=yield h(yt,Be.quality,gt),St=yield g(wt,Le);return St.size>Ue.size?Ue:St})}function ot(Ue,Be={}){return Pe(this,void 0,void 0,function*(){if(!(Ue instanceof Blob))throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");if(typeof Be!="object"&&(Be=Object.assign({size:Be})),Be.size=Number(Be.size),Number.isNaN(Be.size)||1024*Be.size>Ue.size)return Ue;Be.accuracy=Number(Be.accuracy),(!Be.accuracy||Be.accuracy<.8||Be.accuracy>.99)&&(Be.accuracy=.95);const Ve=Be.size*(2-Be.accuracy)*1024,Le=1024*Be.size,gt=Be.size*Be.accuracy*1024,vt=yield he(Ue);let yt=vt.split(",")[0].match(/:(.*?);/)[1],wt=a.JPEG;c(Be.type)&&(wt=Be.type,yt=Be.type);const St=yield m(vt),Nt=yield b(St,Object.assign({},Be));let _t,Ot=.5;const Mt=[null,null];for(let kt=1;kt<=7;kt++){_t=yield h(Nt,Ot,wt);const xt=.75*_t.length;if(kt===7){(Ve<xt||gt>xt)&&(_t=[_t,...Mt].filter(On=>On).sort((On,Ht)=>Math.abs(.75*On.length-Le)-Math.abs(.75*Ht.length-Le))[0]);break}if(Ve<xt)Mt[1]=_t,Ot-=Math.pow(.5,kt+1);else{if(!(gt>xt))break;Mt[0]=_t,Ot+=Math.pow(.5,kt+1)}}const Ft=yield g(_t,yt);return Ft.size>Ue.size?Ue:Ft})}}])})})(conversion);function _mergeNamespaces(n,e){return e.forEach(function(r){Object.keys(r).forEach(function(i){if(i!=="default"&&!(i in n)){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}})}),Object.freeze(n)}function ownKeys(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),r.push.apply(r,i)}return r}function _objectSpread2(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(i){_defineProperty(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function _defineProperty(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function _slicedToArray(n,e){return _arrayWithHoles(n)||_iterableToArrayLimit(n,e)||_unsupportedIterableToArray(n,e)||_nonIterableRest()}function _arrayWithHoles(n){if(Array.isArray(n))return n}function _iterableToArrayLimit(n,e){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i,s,a=[],c=!0,u=!1;try{for(r=r.call(n);!(c=(i=r.next()).done)&&(a.push(i.value),!e||a.length!==e);c=!0);}catch(h){u=!0,s=h}finally{try{c||r.return==null||r.return()}finally{if(u)throw s}}return a}}function _unsupportedIterableToArray(n,e){if(n){if(typeof n=="string")return _arrayLikeToArray(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set"?Array.from(n):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(n,e):void 0}}function _arrayLikeToArray(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=n[r];return i}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function createCommonjsModule(n){var e={exports:{}};return n(e,e.exports),e.exports}var UZIP_1=createCommonjsModule(function(n){var e,r,i={};n.exports=i,i.parse=function(s,a){for(var c=i.bin.readUshort,u=i.bin.readUint,h=0,d={},f=new Uint8Array(s),g=f.length-4;u(f,g)!=101010256;)g--;h=g,h+=4;var m=c(f,h+=4);c(f,h+=2);var _=u(f,h+=2),he=u(f,h+=4);h+=4,h=he;for(var ve=0;ve<m;ve++){u(f,h),h+=4,h+=4,h+=4,u(f,h+=4),_=u(f,h+=4);var b=u(f,h+=4),Se=c(f,h+=4),et=c(f,h+2),Pe=c(f,h+4);h+=6;var mt=u(f,h+=8);h+=4,h+=Se+et+Pe,i._readLocal(f,mt,d,_,b,a)}return d},i._readLocal=function(s,a,c,u,h,d){var f=i.bin.readUshort,g=i.bin.readUint;g(s,a),f(s,a+=4),f(s,a+=2);var m=f(s,a+=2);g(s,a+=2),g(s,a+=4),a+=4;var _=f(s,a+=8),he=f(s,a+=2);a+=2;var ve=i.bin.readUTF8(s,a,_);if(a+=_,a+=he,d)c[ve]={size:h,csize:u};else{var b=new Uint8Array(s.buffer,a);if(m==0)c[ve]=new Uint8Array(b.buffer.slice(a,a+u));else{if(m!=8)throw"unknown compression method: "+m;var Se=new Uint8Array(h);i.inflateRaw(b,Se),c[ve]=Se}}},i.inflateRaw=function(s,a){return i.F.inflate(s,a)},i.inflate=function(s,a){return s[0],s[1],i.inflateRaw(new Uint8Array(s.buffer,s.byteOffset+2,s.length-6),a)},i.deflate=function(s,a){a==null&&(a={level:6});var c=0,u=new Uint8Array(50+Math.floor(1.1*s.length));u[c]=120,u[c+1]=156,c+=2,c=i.F.deflateRaw(s,u,c,a.level);var h=i.adler(s,0,s.length);return u[c+0]=h>>>24&255,u[c+1]=h>>>16&255,u[c+2]=h>>>8&255,u[c+3]=h>>>0&255,new Uint8Array(u.buffer,0,c+4)},i.deflateRaw=function(s,a){a==null&&(a={level:6});var c=new Uint8Array(50+Math.floor(1.1*s.length)),u=i.F.deflateRaw(s,c,u,a.level);return new Uint8Array(c.buffer,0,u)},i.encode=function(s,a){a==null&&(a=!1);var c=0,u=i.bin.writeUint,h=i.bin.writeUshort,d={};for(var f in s){var g=!i._noNeed(f)&&!a,m=s[f],_=i.crc.crc(m,0,m.length);d[f]={cpr:g,usize:m.length,crc:_,file:g?i.deflateRaw(m):m}}for(var f in d)c+=d[f].file.length+30+46+2*i.bin.sizeUTF8(f);c+=22;var he=new Uint8Array(c),ve=0,b=[];for(var f in d){var Se=d[f];b.push(ve),ve=i._writeHeader(he,ve,f,Se,0)}var et=0,Pe=ve;for(var f in d)Se=d[f],b.push(ve),ve=i._writeHeader(he,ve,f,Se,1,b[et++]);var mt=ve-Pe;return u(he,ve,101010256),ve+=4,h(he,ve+=4,et),h(he,ve+=2,et),u(he,ve+=2,mt),u(he,ve+=4,Pe),ve+=4,ve+=2,he.buffer},i._noNeed=function(s){var a=s.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(a)!=-1},i._writeHeader=function(s,a,c,u,h,d){var f=i.bin.writeUint,g=i.bin.writeUshort,m=u.file;return f(s,a,h==0?67324752:33639248),a+=4,h==1&&(a+=2),g(s,a,20),g(s,a+=2,0),g(s,a+=2,u.cpr?8:0),f(s,a+=2,0),f(s,a+=4,u.crc),f(s,a+=4,m.length),f(s,a+=4,u.usize),g(s,a+=4,i.bin.sizeUTF8(c)),g(s,a+=2,0),a+=2,h==1&&(a+=2,a+=2,f(s,a+=6,d),a+=4),a+=i.bin.writeUTF8(s,a,c),h==0&&(s.set(m,a),a+=m.length),a},i.crc={table:function(){for(var s=new Uint32Array(256),a=0;a<256;a++){for(var c=a,u=0;u<8;u++)1&c?c=3988292384^c>>>1:c>>>=1;s[a]=c}return s}(),update:function(s,a,c,u){for(var h=0;h<u;h++)s=i.crc.table[255&(s^a[c+h])]^s>>>8;return s},crc:function(s,a,c){return 4294967295^i.crc.update(4294967295,s,a,c)}},i.adler=function(s,a,c){for(var u=1,h=0,d=a,f=a+c;d<f;){for(var g=Math.min(d+5552,f);d<g;)h+=u+=s[d++];u%=65521,h%=65521}return h<<16|u},i.bin={readUshort:function(s,a){return s[a]|s[a+1]<<8},writeUshort:function(s,a,c){s[a]=255&c,s[a+1]=c>>8&255},readUint:function(s,a){return 16777216*s[a+3]+(s[a+2]<<16|s[a+1]<<8|s[a])},writeUint:function(s,a,c){s[a]=255&c,s[a+1]=c>>8&255,s[a+2]=c>>16&255,s[a+3]=c>>24&255},readASCII:function(s,a,c){for(var u="",h=0;h<c;h++)u+=String.fromCharCode(s[a+h]);return u},writeASCII:function(s,a,c){for(var u=0;u<c.length;u++)s[a+u]=c.charCodeAt(u)},pad:function(s){return s.length<2?"0"+s:s},readUTF8:function(s,a,c){for(var u,h="",d=0;d<c;d++)h+="%"+i.bin.pad(s[a+d].toString(16));try{u=decodeURIComponent(h)}catch{return i.bin.readASCII(s,a,c)}return u},writeUTF8:function(s,a,c){for(var u=c.length,h=0,d=0;d<u;d++){var f=c.charCodeAt(d);if((4294967168&f)==0)s[a+h]=f,h++;else if((4294965248&f)==0)s[a+h]=192|f>>6,s[a+h+1]=128|f>>0&63,h+=2;else if((4294901760&f)==0)s[a+h]=224|f>>12,s[a+h+1]=128|f>>6&63,s[a+h+2]=128|f>>0&63,h+=3;else{if((4292870144&f)!=0)throw"e";s[a+h]=240|f>>18,s[a+h+1]=128|f>>12&63,s[a+h+2]=128|f>>6&63,s[a+h+3]=128|f>>0&63,h+=4}}return h},sizeUTF8:function(s){for(var a=s.length,c=0,u=0;u<a;u++){var h=s.charCodeAt(u);if((4294967168&h)==0)c++;else if((4294965248&h)==0)c+=2;else if((4294901760&h)==0)c+=3;else{if((4292870144&h)!=0)throw"e";c+=4}}return c}},i.F={},i.F.deflateRaw=function(s,a,c,u){var h=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][u],d=i.F.U,f=i.F._goodIndex;i.F._hash;var g=i.F._putsE,m=0,_=c<<3,he=0,ve=s.length;if(u==0){for(;m<ve;)g(a,_,m+(vt=Math.min(65535,ve-m))==ve?1:0),_=i.F._copyExact(s,m,vt,a,_+8),m+=vt;return _>>>3}var b=d.lits,Se=d.strt,et=d.prev,Pe=0,mt=0,ot=0,Ue=0,Be=0,Ve=0;for(ve>2&&(Se[Ve=i.F._hash(s,0)]=0),m=0;m<ve;m++){if(Be=Ve,m+1<ve-2){Ve=i.F._hash(s,m+1);var Le=m+1&32767;et[Le]=Se[Ve],Se[Ve]=Le}if(he<=m){(Pe>14e3||mt>26697)&&ve-m>100&&(he<m&&(b[Pe]=m-he,Pe+=2,he=m),_=i.F._writeBlock(m==ve-1||he==ve?1:0,b,Pe,Ue,s,ot,m-ot,a,_),Pe=mt=Ue=0,ot=m);var gt=0;m<ve-2&&(gt=i.F._bestMatch(s,m,et,Be,Math.min(h[2],ve-m),h[3]));var vt=gt>>>16,yt=65535&gt;if(gt!=0){yt=65535&gt;var wt=f(vt=gt>>>16,d.of0);d.lhst[257+wt]++;var St=f(yt,d.df0);d.dhst[St]++,Ue+=d.exb[wt]+d.dxb[St],b[Pe]=vt<<23|m-he,b[Pe+1]=yt<<16|wt<<8|St,Pe+=2,he=m+vt}else d.lhst[s[m]]++;mt++}}for(ot==m&&s.length!=0||(he<m&&(b[Pe]=m-he,Pe+=2,he=m),_=i.F._writeBlock(1,b,Pe,Ue,s,ot,m-ot,a,_),Pe=0,mt=0,Pe=mt=Ue=0,ot=m);(7&_)!=0;)_++;return _>>>3},i.F._bestMatch=function(s,a,c,u,h,d){var f=32767&a,g=c[f],m=f-g+32768&32767;if(g==f||u!=i.F._hash(s,a-m))return 0;for(var _=0,he=0,ve=Math.min(32767,a);m<=ve&&--d!=0&&g!=f;){if(_==0||s[a+_]==s[a+_-m]){var b=i.F._howLong(s,a,m);if(b>_){if(he=m,(_=b)>=h)break;m+2<b&&(b=m+2);for(var Se=0,et=0;et<b-2;et++){var Pe=a-m+et+32768&32767,mt=Pe-c[Pe]+32768&32767;mt>Se&&(Se=mt,g=Pe)}}}m+=(f=g)-(g=c[f])+32768&32767}return _<<16|he},i.F._howLong=function(s,a,c){if(s[a]!=s[a-c]||s[a+1]!=s[a+1-c]||s[a+2]!=s[a+2-c])return 0;var u=a,h=Math.min(s.length,a+258);for(a+=3;a<h&&s[a]==s[a-c];)a++;return a-u},i.F._hash=function(s,a){return(s[a]<<8|s[a+1])+(s[a+2]<<4)&65535},i.saved=0,i.F._writeBlock=function(s,a,c,u,h,d,f,g,m){var _,he,ve,b,Se,et,Pe,mt,ot,Ue=i.F.U,Be=i.F._putsF,Ve=i.F._putsE;Ue.lhst[256]++,he=(_=i.F.getTrees())[0],ve=_[1],b=_[2],Se=_[3],et=_[4],Pe=_[5],mt=_[6],ot=_[7];var Le=32+((m+3&7)==0?0:8-(m+3&7))+(f<<3),gt=u+i.F.contSize(Ue.fltree,Ue.lhst)+i.F.contSize(Ue.fdtree,Ue.dhst),vt=u+i.F.contSize(Ue.ltree,Ue.lhst)+i.F.contSize(Ue.dtree,Ue.dhst);vt+=14+3*Pe+i.F.contSize(Ue.itree,Ue.ihst)+(2*Ue.ihst[16]+3*Ue.ihst[17]+7*Ue.ihst[18]);for(var yt=0;yt<286;yt++)Ue.lhst[yt]=0;for(yt=0;yt<30;yt++)Ue.dhst[yt]=0;for(yt=0;yt<19;yt++)Ue.ihst[yt]=0;var wt=Le<gt&&Le<vt?0:gt<vt?1:2;if(Be(g,m,s),Be(g,m+1,wt),m+=3,wt==0){for(;(7&m)!=0;)m++;m=i.F._copyExact(h,d,f,g,m)}else{var St,Nt;if(wt==1&&(St=Ue.fltree,Nt=Ue.fdtree),wt==2){i.F.makeCodes(Ue.ltree,he),i.F.revCodes(Ue.ltree,he),i.F.makeCodes(Ue.dtree,ve),i.F.revCodes(Ue.dtree,ve),i.F.makeCodes(Ue.itree,b),i.F.revCodes(Ue.itree,b),St=Ue.ltree,Nt=Ue.dtree,Ve(g,m,Se-257),Ve(g,m+=5,et-1),Ve(g,m+=5,Pe-4),m+=4;for(var _t=0;_t<Pe;_t++)Ve(g,m+3*_t,Ue.itree[1+(Ue.ordr[_t]<<1)]);m+=3*Pe,m=i.F._codeTiny(mt,Ue.itree,g,m),m=i.F._codeTiny(ot,Ue.itree,g,m)}for(var Ot=d,Mt=0;Mt<c;Mt+=2){for(var Ft=a[Mt],kt=Ft>>>23,xt=Ot+(8388607&Ft);Ot<xt;)m=i.F._writeLit(h[Ot++],St,g,m);if(kt!=0){var On=a[Mt+1],Ht=On>>16,er=On>>8&255,Dt=255&On;Ve(g,m=i.F._writeLit(257+er,St,g,m),kt-Ue.of0[er]),m+=Ue.exb[er],Be(g,m=i.F._writeLit(Dt,Nt,g,m),Ht-Ue.df0[Dt]),m+=Ue.dxb[Dt],Ot+=kt}}m=i.F._writeLit(256,St,g,m)}return m},i.F._copyExact=function(s,a,c,u,h){var d=h>>>3;return u[d]=c,u[d+1]=c>>>8,u[d+2]=255-u[d],u[d+3]=255-u[d+1],d+=4,u.set(new Uint8Array(s.buffer,a,c),d),h+(c+4<<3)},i.F.getTrees=function(){for(var s=i.F.U,a=i.F._hufTree(s.lhst,s.ltree,15),c=i.F._hufTree(s.dhst,s.dtree,15),u=[],h=i.F._lenCodes(s.ltree,u),d=[],f=i.F._lenCodes(s.dtree,d),g=0;g<u.length;g+=2)s.ihst[u[g]]++;for(g=0;g<d.length;g+=2)s.ihst[d[g]]++;for(var m=i.F._hufTree(s.ihst,s.itree,7),_=19;_>4&&s.itree[1+(s.ordr[_-1]<<1)]==0;)_--;return[a,c,m,h,f,_,u,d]},i.F.getSecond=function(s){for(var a=[],c=0;c<s.length;c+=2)a.push(s[c+1]);return a},i.F.nonZero=function(s){for(var a="",c=0;c<s.length;c+=2)s[c+1]!=0&&(a+=(c>>1)+",");return a},i.F.contSize=function(s,a){for(var c=0,u=0;u<a.length;u++)c+=a[u]*s[1+(u<<1)];return c},i.F._codeTiny=function(s,a,c,u){for(var h=0;h<s.length;h+=2){var d=s[h],f=s[h+1];u=i.F._writeLit(d,a,c,u);var g=d==16?2:d==17?3:7;d>15&&(i.F._putsE(c,u,f,g),u+=g)}return u},i.F._lenCodes=function(s,a){for(var c=s.length;c!=2&&s[c-1]==0;)c-=2;for(var u=0;u<c;u+=2){var h=s[u+1],d=u+3<c?s[u+3]:-1,f=u+5<c?s[u+5]:-1,g=u==0?-1:s[u-1];if(h==0&&d==h&&f==h){for(var m=u+5;m+2<c&&s[m+2]==h;)m+=2;(_=Math.min(m+1-u>>>1,138))<11?a.push(17,_-3):a.push(18,_-11),u+=2*_-2}else if(h==g&&d==h&&f==h){for(m=u+5;m+2<c&&s[m+2]==h;)m+=2;var _=Math.min(m+1-u>>>1,6);a.push(16,_-3),u+=2*_-2}else a.push(h,0)}return c>>>1},i.F._hufTree=function(s,a,c){var u=[],h=s.length,d=a.length,f=0;for(f=0;f<d;f+=2)a[f]=0,a[f+1]=0;for(f=0;f<h;f++)s[f]!=0&&u.push({lit:f,f:s[f]});var g=u.length,m=u.slice(0);if(g==0)return 0;if(g==1){var _=u[0].lit;return m=_==0?1:0,a[1+(_<<1)]=1,a[1+(m<<1)]=1,1}u.sort(function(mt,ot){return mt.f-ot.f});var he=u[0],ve=u[1],b=0,Se=1,et=2;for(u[0]={lit:-1,f:he.f+ve.f,l:he,r:ve,d:0};Se!=g-1;)he=b!=Se&&(et==g||u[b].f<u[et].f)?u[b++]:u[et++],ve=b!=Se&&(et==g||u[b].f<u[et].f)?u[b++]:u[et++],u[Se++]={lit:-1,f:he.f+ve.f,l:he,r:ve};var Pe=i.F.setDepth(u[Se-1],0);for(Pe>c&&(i.F.restrictDepth(m,c,Pe),Pe=c),f=0;f<g;f++)a[1+(m[f].lit<<1)]=m[f].d;return Pe},i.F.setDepth=function(s,a){return s.lit!=-1?(s.d=a,a):Math.max(i.F.setDepth(s.l,a+1),i.F.setDepth(s.r,a+1))},i.F.restrictDepth=function(s,a,c){var u=0,h=1<<c-a,d=0;for(s.sort(function(g,m){return m.d==g.d?g.f-m.f:m.d-g.d}),u=0;u<s.length&&s[u].d>a;u++){var f=s[u].d;s[u].d=a,d+=h-(1<<c-f)}for(d>>>=c-a;d>0;)(f=s[u].d)<a?(s[u].d++,d-=1<<a-f-1):u++;for(;u>=0;u--)s[u].d==a&&d<0&&(s[u].d--,d++);d!=0&&console.log("debt left")},i.F._goodIndex=function(s,a){var c=0;return a[16|c]<=s&&(c|=16),a[8|c]<=s&&(c|=8),a[4|c]<=s&&(c|=4),a[2|c]<=s&&(c|=2),a[1|c]<=s&&(c|=1),c},i.F._writeLit=function(s,a,c,u){return i.F._putsF(c,u,a[s<<1]),u+a[1+(s<<1)]},i.F.inflate=function(s,a){var c=Uint8Array;if(s[0]==3&&s[1]==0)return a||new c(0);var u=i.F,h=u._bitsF,d=u._bitsE,f=u._decodeTiny,g=u.makeCodes,m=u.codes2map,_=u._get17,he=u.U,ve=a==null;ve&&(a=new c(s.length>>>2<<3));for(var b,Se,et=0,Pe=0,mt=0,ot=0,Ue=0,Be=0,Ve=0,Le=0,gt=0;et==0;)if(et=h(s,gt,1),Pe=h(s,gt+1,2),gt+=3,Pe!=0){if(ve&&(a=i.F._check(a,Le+(1<<17))),Pe==1&&(b=he.flmap,Se=he.fdmap,Be=511,Ve=31),Pe==2){mt=d(s,gt,5)+257,ot=d(s,gt+5,5)+1,Ue=d(s,gt+10,4)+4,gt+=14;for(var vt=0;vt<38;vt+=2)he.itree[vt]=0,he.itree[vt+1]=0;var yt=1;for(vt=0;vt<Ue;vt++){var wt=d(s,gt+3*vt,3);he.itree[1+(he.ordr[vt]<<1)]=wt,wt>yt&&(yt=wt)}gt+=3*Ue,g(he.itree,yt),m(he.itree,yt,he.imap),b=he.lmap,Se=he.dmap,gt=f(he.imap,(1<<yt)-1,mt+ot,s,gt,he.ttree);var St=u._copyOut(he.ttree,0,mt,he.ltree);Be=(1<<St)-1;var Nt=u._copyOut(he.ttree,mt,ot,he.dtree);Ve=(1<<Nt)-1,g(he.ltree,St),m(he.ltree,St,b),g(he.dtree,Nt),m(he.dtree,Nt,Se)}for(;;){var _t=b[_(s,gt)&Be];gt+=15&_t;var Ot=_t>>>4;if(Ot>>>8==0)a[Le++]=Ot;else{if(Ot==256)break;var Mt=Le+Ot-254;if(Ot>264){var Ft=he.ldef[Ot-257];Mt=Le+(Ft>>>3)+d(s,gt,7&Ft),gt+=7&Ft}var kt=Se[_(s,gt)&Ve];gt+=15&kt;var xt=kt>>>4,On=he.ddef[xt],Ht=(On>>>4)+h(s,gt,15&On);for(gt+=15&On,ve&&(a=i.F._check(a,Le+(1<<17)));Le<Mt;)a[Le]=a[Le++-Ht],a[Le]=a[Le++-Ht],a[Le]=a[Le++-Ht],a[Le]=a[Le++-Ht];Le=Mt}}}else{(7&gt)!=0&&(gt+=8-(7&gt));var er=4+(gt>>>3),Dt=s[er-4]|s[er-3]<<8;ve&&(a=i.F._check(a,Le+Dt)),a.set(new c(s.buffer,s.byteOffset+er,Dt),Le),gt=er+Dt<<3,Le+=Dt}return a.length==Le?a:a.slice(0,Le)},i.F._check=function(s,a){var c=s.length;if(a<=c)return s;var u=new Uint8Array(Math.max(c<<1,a));return u.set(s,0),u},i.F._decodeTiny=function(s,a,c,u,h,d){for(var f=i.F._bitsE,g=i.F._get17,m=0;m<c;){var _=s[g(u,h)&a];h+=15&_;var he=_>>>4;if(he<=15)d[m]=he,m++;else{var ve=0,b=0;he==16?(b=3+f(u,h,2),h+=2,ve=d[m-1]):he==17?(b=3+f(u,h,3),h+=3):he==18&&(b=11+f(u,h,7),h+=7);for(var Se=m+b;m<Se;)d[m]=ve,m++}}return h},i.F._copyOut=function(s,a,c,u){for(var h=0,d=0,f=u.length>>>1;d<c;){var g=s[d+a];u[d<<1]=0,u[1+(d<<1)]=g,g>h&&(h=g),d++}for(;d<f;)u[d<<1]=0,u[1+(d<<1)]=0,d++;return h},i.F.makeCodes=function(s,a){for(var c,u,h,d,f=i.F.U,g=s.length,m=f.bl_count,_=0;_<=a;_++)m[_]=0;for(_=1;_<g;_+=2)m[s[_]]++;var he=f.next_code;for(c=0,m[0]=0,u=1;u<=a;u++)c=c+m[u-1]<<1,he[u]=c;for(h=0;h<g;h+=2)(d=s[h+1])!=0&&(s[h]=he[d],he[d]++)},i.F.codes2map=function(s,a,c){for(var u=s.length,h=i.F.U.rev15,d=0;d<u;d+=2)if(s[d+1]!=0)for(var f=d>>1,g=s[d+1],m=f<<4|g,_=a-g,he=s[d]<<_,ve=he+(1<<_);he!=ve;)c[h[he]>>>15-a]=m,he++},i.F.revCodes=function(s,a){for(var c=i.F.U.rev15,u=15-a,h=0;h<s.length;h+=2){var d=s[h]<<a-s[h+1];s[h]=c[d]>>>u}},i.F._putsE=function(s,a,c){c<<=7&a;var u=a>>>3;s[u]|=c,s[u+1]|=c>>>8},i.F._putsF=function(s,a,c){c<<=7&a;var u=a>>>3;s[u]|=c,s[u+1]|=c>>>8,s[u+2]|=c>>>16},i.F._bitsE=function(s,a,c){return(s[a>>>3]|s[1+(a>>>3)]<<8)>>>(7&a)&(1<<c)-1},i.F._bitsF=function(s,a,c){return(s[a>>>3]|s[1+(a>>>3)]<<8|s[2+(a>>>3)]<<16)>>>(7&a)&(1<<c)-1},i.F._get17=function(s,a){return(s[a>>>3]|s[1+(a>>>3)]<<8|s[2+(a>>>3)]<<16)>>>(7&a)},i.F._get25=function(s,a){return(s[a>>>3]|s[1+(a>>>3)]<<8|s[2+(a>>>3)]<<16|s[3+(a>>>3)]<<24)>>>(7&a)},i.F.U=(e=Uint16Array,r=Uint32Array,{next_code:new e(16),bl_count:new e(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new e(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new r(32),flmap:new e(512),fltree:[],fdmap:new e(32),fdtree:[],lmap:new e(32768),ltree:[],ttree:[],dmap:new e(32768),dtree:[],imap:new e(512),itree:[],rev15:new e(32768),lhst:new r(286),dhst:new r(30),ihst:new r(19),lits:new r(15e3),strt:new e(65536),prev:new e(32768)}),function(){for(var s=i.F.U,a=0;a<32768;a++){var c=a;c=(4278255360&(c=(4042322160&(c=(3435973836&(c=(2863311530&c)>>>1|(1431655765&c)<<1))>>>2|(858993459&c)<<2))>>>4|(252645135&c)<<4))>>>8|(16711935&c)<<8,s.rev15[a]=(c>>>16|c<<16)>>>17}function u(h,d,f){for(;d--!=0;)h.push(0,f)}for(a=0;a<32;a++)s.ldef[a]=s.of0[a]<<3|s.exb[a],s.ddef[a]=s.df0[a]<<4|s.dxb[a];u(s.fltree,144,8),u(s.fltree,112,9),u(s.fltree,24,7),u(s.fltree,8,8),i.F.makeCodes(s.fltree,9),i.F.codes2map(s.fltree,9,s.flmap),i.F.revCodes(s.fltree,9),u(s.fdtree,32,5),i.F.makeCodes(s.fdtree,5),i.F.codes2map(s.fdtree,5,s.fdmap),i.F.revCodes(s.fdtree,5),u(s.itree,19,0),u(s.ltree,286,0),u(s.dtree,30,0),u(s.ttree,320,0)}()}),UZIP=Object.freeze(_mergeNamespaces({__proto__:null,default:UZIP_1},[UZIP_1])),UPNG={},N,W,H;UPNG.toRGBA8=function(n){var e=n.width,r=n.height;if(n.tabs.acTL==null)return[UPNG.toRGBA8.decodeImage(n.data,e,r,n).buffer];var i=[];n.frames[0].data==null&&(n.frames[0].data=n.data);for(var s=e*r*4,a=new Uint8Array(s),c=new Uint8Array(s),u=new Uint8Array(s),h=0;h<n.frames.length;h++){var d=n.frames[h],f=d.rect.x,g=d.rect.y,m=d.rect.width,_=d.rect.height,he=UPNG.toRGBA8.decodeImage(d.data,m,_,n);if(h!=0)for(var ve=0;ve<s;ve++)u[ve]=a[ve];if(d.blend==0?UPNG._copyTile(he,m,_,a,e,r,f,g,0):d.blend==1&&UPNG._copyTile(he,m,_,a,e,r,f,g,1),i.push(a.buffer.slice(0)),d.dispose!=0){if(d.dispose==1)UPNG._copyTile(c,m,_,a,e,r,f,g,0);else if(d.dispose==2)for(ve=0;ve<s;ve++)a[ve]=u[ve]}}return i},UPNG.toRGBA8.decodeImage=function(n,e,r,i){var s=e*r,a=UPNG.decode._getBPP(i),c=Math.ceil(e*a/8),u=new Uint8Array(4*s),h=new Uint32Array(u.buffer),d=i.ctype,f=i.depth,g=UPNG._bin.readUshort;if(d==6){var m=s<<2;if(f==8)for(var _=0;_<m;_+=4)u[_]=n[_],u[_+1]=n[_+1],u[_+2]=n[_+2],u[_+3]=n[_+3];if(f==16)for(_=0;_<m;_++)u[_]=n[_<<1]}else if(d==2){var he=i.tabs.tRNS;if(he==null){if(f==8)for(_=0;_<s;_++){var ve=3*_;h[_]=255<<24|n[ve+2]<<16|n[ve+1]<<8|n[ve]}if(f==16)for(_=0;_<s;_++)ve=6*_,h[_]=255<<24|n[ve+4]<<16|n[ve+2]<<8|n[ve]}else{var b=he[0],Se=he[1],et=he[2];if(f==8)for(_=0;_<s;_++){var Pe=_<<2;ve=3*_,h[_]=255<<24|n[ve+2]<<16|n[ve+1]<<8|n[ve],n[ve]==b&&n[ve+1]==Se&&n[ve+2]==et&&(u[Pe+3]=0)}if(f==16)for(_=0;_<s;_++)Pe=_<<2,ve=6*_,h[_]=255<<24|n[ve+4]<<16|n[ve+2]<<8|n[ve],g(n,ve)==b&&g(n,ve+2)==Se&&g(n,ve+4)==et&&(u[Pe+3]=0)}}else if(d==3){var mt=i.tabs.PLTE,ot=i.tabs.tRNS,Ue=ot?ot.length:0;if(f==1)for(var Be=0;Be<r;Be++){var Ve=Be*c,Le=Be*e;for(_=0;_<e;_++){Pe=Le+_<<2;var gt=3*(vt=n[Ve+(_>>3)]>>7-((7&_)<<0)&1);u[Pe]=mt[gt],u[Pe+1]=mt[gt+1],u[Pe+2]=mt[gt+2],u[Pe+3]=vt<Ue?ot[vt]:255}}if(f==2)for(Be=0;Be<r;Be++)for(Ve=Be*c,Le=Be*e,_=0;_<e;_++)Pe=Le+_<<2,gt=3*(vt=n[Ve+(_>>2)]>>6-((3&_)<<1)&3),u[Pe]=mt[gt],u[Pe+1]=mt[gt+1],u[Pe+2]=mt[gt+2],u[Pe+3]=vt<Ue?ot[vt]:255;if(f==4)for(Be=0;Be<r;Be++)for(Ve=Be*c,Le=Be*e,_=0;_<e;_++)Pe=Le+_<<2,gt=3*(vt=n[Ve+(_>>1)]>>4-((1&_)<<2)&15),u[Pe]=mt[gt],u[Pe+1]=mt[gt+1],u[Pe+2]=mt[gt+2],u[Pe+3]=vt<Ue?ot[vt]:255;if(f==8)for(_=0;_<s;_++){var vt;Pe=_<<2,gt=3*(vt=n[_]),u[Pe]=mt[gt],u[Pe+1]=mt[gt+1],u[Pe+2]=mt[gt+2],u[Pe+3]=vt<Ue?ot[vt]:255}}else if(d==4){if(f==8)for(_=0;_<s;_++){Pe=_<<2;var yt=n[wt=_<<1];u[Pe]=yt,u[Pe+1]=yt,u[Pe+2]=yt,u[Pe+3]=n[wt+1]}if(f==16)for(_=0;_<s;_++){var wt;Pe=_<<2,yt=n[wt=_<<2],u[Pe]=yt,u[Pe+1]=yt,u[Pe+2]=yt,u[Pe+3]=n[wt+2]}}else if(d==0)for(b=i.tabs.tRNS?i.tabs.tRNS:-1,Be=0;Be<r;Be++){var St=Be*c,Nt=Be*e;if(f==1)for(var _t=0;_t<e;_t++){var Ot=(yt=255*(n[St+(_t>>>3)]>>>7-(7&_t)&1))==255*b?0:255;h[Nt+_t]=Ot<<24|yt<<16|yt<<8|yt}else if(f==2)for(_t=0;_t<e;_t++)Ot=(yt=85*(n[St+(_t>>>2)]>>>6-((3&_t)<<1)&3))==85*b?0:255,h[Nt+_t]=Ot<<24|yt<<16|yt<<8|yt;else if(f==4)for(_t=0;_t<e;_t++)Ot=(yt=17*(n[St+(_t>>>1)]>>>4-((1&_t)<<2)&15))==17*b?0:255,h[Nt+_t]=Ot<<24|yt<<16|yt<<8|yt;else if(f==8)for(_t=0;_t<e;_t++)Ot=(yt=n[St+_t])==b?0:255,h[Nt+_t]=Ot<<24|yt<<16|yt<<8|yt;else if(f==16)for(_t=0;_t<e;_t++)yt=n[St+(_t<<1)],Ot=g(n,St+(_t<<_))==b?0:255,h[Nt+_t]=Ot<<24|yt<<16|yt<<8|yt}return u},UPNG.decode=function(n){for(var e,r=new Uint8Array(n),i=8,s=UPNG._bin,a=s.readUshort,c=s.readUint,u={tabs:{},frames:[]},h=new Uint8Array(r.length),d=0,f=0,g=[137,80,78,71,13,10,26,10],m=0;m<8;m++)if(r[m]!=g[m])throw"The input is not a PNG file!";for(;i<r.length;){var _=s.readUint(r,i);i+=4;var he=s.readASCII(r,i,4);if(i+=4,he=="IHDR")UPNG.decode._IHDR(r,i,u);else if(he=="CgBI")u.tabs[he]=r.slice(i,i+4);else if(he=="IDAT"){for(m=0;m<_;m++)h[d+m]=r[i+m];d+=_}else if(he=="acTL")u.tabs[he]={num_frames:c(r,i),num_plays:c(r,i+4)},e=new Uint8Array(r.length);else if(he=="fcTL"){var ve;f!=0&&((ve=u.frames[u.frames.length-1]).data=UPNG.decode._decompress(u,e.slice(0,f),ve.rect.width,ve.rect.height),f=0);var b={x:c(r,i+12),y:c(r,i+16),width:c(r,i+4),height:c(r,i+8)},Se=a(r,i+22);Se=a(r,i+20)/(Se==0?100:Se);var et={rect:b,delay:Math.round(1e3*Se),dispose:r[i+24],blend:r[i+25]};u.frames.push(et)}else if(he=="fdAT"){for(m=0;m<_-4;m++)e[f+m]=r[i+m+4];f+=_-4}else if(he=="pHYs")u.tabs[he]=[s.readUint(r,i),s.readUint(r,i+4),r[i+8]];else if(he=="cHRM")for(u.tabs[he]=[],m=0;m<8;m++)u.tabs[he].push(s.readUint(r,i+4*m));else if(he=="tEXt"||he=="zTXt"){u.tabs[he]==null&&(u.tabs[he]={});var Pe=s.nextZero(r,i),mt=s.readASCII(r,i,Pe-i),ot=i+_-Pe-1;if(he=="tEXt")Ve=s.readASCII(r,Pe+1,ot);else{var Ue=UPNG.decode._inflate(r.slice(Pe+2,Pe+2+ot));Ve=s.readUTF8(Ue,0,Ue.length)}u.tabs[he][mt]=Ve}else if(he=="iTXt"){u.tabs[he]==null&&(u.tabs[he]={}),Pe=0;var Be=i;Pe=s.nextZero(r,Be),mt=s.readASCII(r,Be,Pe-Be);var Ve,Le=r[Be=Pe+1];r[Be+1],Be+=2,Pe=s.nextZero(r,Be),s.readASCII(r,Be,Pe-Be),Be=Pe+1,Pe=s.nextZero(r,Be),s.readUTF8(r,Be,Pe-Be),ot=_-((Be=Pe+1)-i),Le==0?Ve=s.readUTF8(r,Be,ot):(Ue=UPNG.decode._inflate(r.slice(Be,Be+ot)),Ve=s.readUTF8(Ue,0,Ue.length)),u.tabs[he][mt]=Ve}else if(he=="PLTE")u.tabs[he]=s.readBytes(r,i,_);else if(he=="hIST"){var gt=u.tabs.PLTE.length/3;for(u.tabs[he]=[],m=0;m<gt;m++)u.tabs[he].push(a(r,i+2*m))}else if(he=="tRNS")u.ctype==3?u.tabs[he]=s.readBytes(r,i,_):u.ctype==0?u.tabs[he]=a(r,i):u.ctype==2&&(u.tabs[he]=[a(r,i),a(r,i+2),a(r,i+4)]);else if(he=="gAMA")u.tabs[he]=s.readUint(r,i)/1e5;else if(he=="sRGB")u.tabs[he]=r[i];else if(he=="bKGD")u.ctype==0||u.ctype==4?u.tabs[he]=[a(r,i)]:u.ctype==2||u.ctype==6?u.tabs[he]=[a(r,i),a(r,i+2),a(r,i+4)]:u.ctype==3&&(u.tabs[he]=r[i]);else if(he=="IEND")break;i+=_,s.readUint(r,i),i+=4}return f!=0&&((ve=u.frames[u.frames.length-1]).data=UPNG.decode._decompress(u,e.slice(0,f),ve.rect.width,ve.rect.height),f=0),u.data=UPNG.decode._decompress(u,h,u.width,u.height),delete u.compress,delete u.interlace,delete u.filter,u},UPNG.decode._decompress=function(n,e,r,i){var s=UPNG.decode._getBPP(n),a=Math.ceil(r*s/8),c=new Uint8Array((a+1+n.interlace)*i);return e=n.tabs.CgBI?UPNG.inflateRaw(e,c):UPNG.decode._inflate(e,c),n.interlace==0?e=UPNG.decode._filterZero(e,n,0,r,i):n.interlace==1&&(e=UPNG.decode._readInterlace(e,n)),e},UPNG.decode._inflate=function(n,e){return UPNG.inflateRaw(new Uint8Array(n.buffer,2,n.length-6),e)},UPNG.inflateRaw=(H={},H.H={},H.H.N=function(n,e){var r,i,s=Uint8Array,a=0,c=0,u=0,h=0,d=0,f=0,g=0,m=0,_=0;if(n[0]==3&&n[1]==0)return e||new s(0);var he=H.H,ve=he.b,b=he.e,Se=he.R,et=he.n,Pe=he.A,mt=he.Z,ot=he.m,Ue=e==null;for(Ue&&(e=new s(n.length>>>2<<5));a==0;)if(a=ve(n,_,1),c=ve(n,_+1,2),_+=3,c!=0){if(Ue&&(e=H.H.W(e,m+(1<<17))),c==1&&(r=ot.J,i=ot.h,f=511,g=31),c==2){u=b(n,_,5)+257,h=b(n,_+5,5)+1,d=b(n,_+10,4)+4,_+=14;for(var Be=1,Ve=0;Ve<38;Ve+=2)ot.Q[Ve]=0,ot.Q[Ve+1]=0;for(Ve=0;Ve<d;Ve++){var Le=b(n,_+3*Ve,3);ot.Q[1+(ot.X[Ve]<<1)]=Le,Le>Be&&(Be=Le)}_+=3*d,et(ot.Q,Be),Pe(ot.Q,Be,ot.u),r=ot.w,i=ot.d,_=Se(ot.u,(1<<Be)-1,u+h,n,_,ot.v);var gt=he.V(ot.v,0,u,ot.C);f=(1<<gt)-1;var vt=he.V(ot.v,u,h,ot.D);g=(1<<vt)-1,et(ot.C,gt),Pe(ot.C,gt,r),et(ot.D,vt),Pe(ot.D,vt,i)}for(;;){var yt=r[mt(n,_)&f];_+=15&yt;var wt=yt>>>4;if(wt>>>8==0)e[m++]=wt;else{if(wt==256)break;var St=m+wt-254;if(wt>264){var Nt=ot.q[wt-257];St=m+(Nt>>>3)+b(n,_,7&Nt),_+=7&Nt}var _t=i[mt(n,_)&g];_+=15&_t;var Ot=_t>>>4,Mt=ot.c[Ot],Ft=(Mt>>>4)+ve(n,_,15&Mt);for(_+=15&Mt;m<St;)e[m]=e[m++-Ft],e[m]=e[m++-Ft],e[m]=e[m++-Ft],e[m]=e[m++-Ft];m=St}}}else{(7&_)!=0&&(_+=8-(7&_));var kt=4+(_>>>3),xt=n[kt-4]|n[kt-3]<<8;Ue&&(e=H.H.W(e,m+xt)),e.set(new s(n.buffer,n.byteOffset+kt,xt),m),_=kt+xt<<3,m+=xt}return e.length==m?e:e.slice(0,m)},H.H.W=function(n,e){var r=n.length;if(e<=r)return n;var i=new Uint8Array(r<<1);return i.set(n,0),i},H.H.R=function(n,e,r,i,s,a){for(var c=H.H.e,u=H.H.Z,h=0;h<r;){var d=n[u(i,s)&e];s+=15&d;var f=d>>>4;if(f<=15)a[h]=f,h++;else{var g=0,m=0;f==16?(m=3+c(i,s,2),s+=2,g=a[h-1]):f==17?(m=3+c(i,s,3),s+=3):f==18&&(m=11+c(i,s,7),s+=7);for(var _=h+m;h<_;)a[h]=g,h++}}return s},H.H.V=function(n,e,r,i){for(var s=0,a=0,c=i.length>>>1;a<r;){var u=n[a+e];i[a<<1]=0,i[1+(a<<1)]=u,u>s&&(s=u),a++}for(;a<c;)i[a<<1]=0,i[1+(a<<1)]=0,a++;return s},H.H.n=function(n,e){for(var r,i,s,a,c=H.H.m,u=n.length,h=c.j,d=0;d<=e;d++)h[d]=0;for(d=1;d<u;d+=2)h[n[d]]++;var f=c.K;for(r=0,h[0]=0,i=1;i<=e;i++)r=r+h[i-1]<<1,f[i]=r;for(s=0;s<u;s+=2)(a=n[s+1])!=0&&(n[s]=f[a],f[a]++)},H.H.A=function(n,e,r){for(var i=n.length,s=H.H.m.r,a=0;a<i;a+=2)if(n[a+1]!=0)for(var c=a>>1,u=n[a+1],h=c<<4|u,d=e-u,f=n[a]<<d,g=f+(1<<d);f!=g;)r[s[f]>>>15-e]=h,f++},H.H.l=function(n,e){for(var r=H.H.m.r,i=15-e,s=0;s<n.length;s+=2){var a=n[s]<<e-n[s+1];n[s]=r[a]>>>i}},H.H.M=function(n,e,r){r<<=7&e;var i=e>>>3;n[i]|=r,n[i+1]|=r>>>8},H.H.I=function(n,e,r){r<<=7&e;var i=e>>>3;n[i]|=r,n[i+1]|=r>>>8,n[i+2]|=r>>>16},H.H.e=function(n,e,r){return(n[e>>>3]|n[1+(e>>>3)]<<8)>>>(7&e)&(1<<r)-1},H.H.b=function(n,e,r){return(n[e>>>3]|n[1+(e>>>3)]<<8|n[2+(e>>>3)]<<16)>>>(7&e)&(1<<r)-1},H.H.Z=function(n,e){return(n[e>>>3]|n[1+(e>>>3)]<<8|n[2+(e>>>3)]<<16)>>>(7&e)},H.H.i=function(n,e){return(n[e>>>3]|n[1+(e>>>3)]<<8|n[2+(e>>>3)]<<16|n[3+(e>>>3)]<<24)>>>(7&e)},H.H.m=(N=Uint16Array,W=Uint32Array,{K:new N(16),j:new N(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new N(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new W(32),J:new N(512),_:[],h:new N(32),$:[],w:new N(32768),C:[],v:[],d:new N(32768),D:[],u:new N(512),Q:[],r:new N(32768),s:new W(286),Y:new W(30),a:new W(19),t:new W(15e3),k:new N(65536),g:new N(32768)}),function(){for(var n=H.H.m,e=0;e<32768;e++){var r=e;r=(4278255360&(r=(4042322160&(r=(3435973836&(r=(2863311530&r)>>>1|(1431655765&r)<<1))>>>2|(858993459&r)<<2))>>>4|(252645135&r)<<4))>>>8|(16711935&r)<<8,n.r[e]=(r>>>16|r<<16)>>>17}function i(s,a,c){for(;a--!=0;)s.push(0,c)}for(e=0;e<32;e++)n.q[e]=n.S[e]<<3|n.T[e],n.c[e]=n.p[e]<<4|n.z[e];i(n._,144,8),i(n._,112,9),i(n._,24,7),i(n._,8,8),H.H.n(n._,9),H.H.A(n._,9,n.J),H.H.l(n._,9),i(n.$,32,5),H.H.n(n.$,5),H.H.A(n.$,5,n.h),H.H.l(n.$,5),i(n.Q,19,0),i(n.C,286,0),i(n.D,30,0),i(n.v,320,0)}(),H.H.N),UPNG.decode._readInterlace=function(n,e){for(var r=e.width,i=e.height,s=UPNG.decode._getBPP(e),a=s>>3,c=Math.ceil(r*s/8),u=new Uint8Array(i*c),h=0,d=[0,0,4,0,2,0,1],f=[0,4,0,2,0,1,0],g=[8,8,8,4,4,2,2],m=[8,8,4,4,2,2,1],_=0;_<7;){for(var he=g[_],ve=m[_],b=0,Se=0,et=d[_];et<i;)et+=he,Se++;for(var Pe=f[_];Pe<r;)Pe+=ve,b++;var mt=Math.ceil(b*s/8);UPNG.decode._filterZero(n,e,h,b,Se);for(var ot=0,Ue=d[_];Ue<i;){for(var Be=f[_],Ve=h+ot*mt<<3;Be<r;){var Le;if(s==1&&(Le=(Le=n[Ve>>3])>>7-(7&Ve)&1,u[Ue*c+(Be>>3)]|=Le<<7-((7&Be)<<0)),s==2&&(Le=(Le=n[Ve>>3])>>6-(7&Ve)&3,u[Ue*c+(Be>>2)]|=Le<<6-((3&Be)<<1)),s==4&&(Le=(Le=n[Ve>>3])>>4-(7&Ve)&15,u[Ue*c+(Be>>1)]|=Le<<4-((1&Be)<<2)),s>=8)for(var gt=Ue*c+Be*a,vt=0;vt<a;vt++)u[gt+vt]=n[(Ve>>3)+vt];Ve+=s,Be+=ve}ot++,Ue+=he}b*Se!=0&&(h+=Se*(1+mt)),_+=1}return u},UPNG.decode._getBPP=function(n){return[1,null,3,1,2,null,4][n.ctype]*n.depth},UPNG.decode._filterZero=function(n,e,r,i,s){var a=UPNG.decode._getBPP(e),c=Math.ceil(i*a/8),u=UPNG.decode._paeth;a=Math.ceil(a/8);var h=0,d=1,f=n[r],g=0;if(f>1&&(n[r]=[0,0,1][f-2]),f==3)for(g=a;g<c;g++)n[g+1]=n[g+1]+(n[g+1-a]>>>1)&255;for(var m=0;m<s;m++)if(g=0,(f=n[(d=(h=r+m*c)+m+1)-1])==0)for(;g<c;g++)n[h+g]=n[d+g];else if(f==1){for(;g<a;g++)n[h+g]=n[d+g];for(;g<c;g++)n[h+g]=n[d+g]+n[h+g-a]}else if(f==2)for(;g<c;g++)n[h+g]=n[d+g]+n[h+g-c];else if(f==3){for(;g<a;g++)n[h+g]=n[d+g]+(n[h+g-c]>>>1);for(;g<c;g++)n[h+g]=n[d+g]+(n[h+g-c]+n[h+g-a]>>>1)}else{for(;g<a;g++)n[h+g]=n[d+g]+u(0,n[h+g-c],0);for(;g<c;g++)n[h+g]=n[d+g]+u(n[h+g-a],n[h+g-c],n[h+g-a-c])}return n},UPNG.decode._paeth=function(n,e,r){var i=n+e-r,s=i-n,a=i-e,c=i-r;return s*s<=a*a&&s*s<=c*c?n:a*a<=c*c?e:r},UPNG.decode._IHDR=function(n,e,r){var i=UPNG._bin;r.width=i.readUint(n,e),e+=4,r.height=i.readUint(n,e),e+=4,r.depth=n[e],e++,r.ctype=n[e],e++,r.compress=n[e],e++,r.filter=n[e],e++,r.interlace=n[e],e++},UPNG._bin={nextZero:function(e,r){for(;e[r]!=0;)r++;return r},readUshort:function(e,r){return e[r]<<8|e[r+1]},writeUshort:function(e,r,i){e[r]=i>>8&255,e[r+1]=255&i},readUint:function(e,r){return 16777216*e[r]+(e[r+1]<<16|e[r+2]<<8|e[r+3])},writeUint:function(e,r,i){e[r]=i>>24&255,e[r+1]=i>>16&255,e[r+2]=i>>8&255,e[r+3]=255&i},readASCII:function(e,r,i){for(var s="",a=0;a<i;a++)s+=String.fromCharCode(e[r+a]);return s},writeASCII:function(e,r,i){for(var s=0;s<i.length;s++)e[r+s]=i.charCodeAt(s)},readBytes:function(e,r,i){for(var s=[],a=0;a<i;a++)s.push(e[r+a]);return s},pad:function(e){return e.length<2?"0".concat(e):e},readUTF8:function(e,r,i){for(var s,a="",c=0;c<i;c++)a+="%".concat(UPNG._bin.pad(e[r+c].toString(16)));try{s=decodeURIComponent(a)}catch{return UPNG._bin.readASCII(e,r,i)}return s}},UPNG._copyTile=function(n,e,r,i,s,a,c,u,h){for(var d=Math.min(e,s),f=Math.min(r,a),g=0,m=0,_=0;_<f;_++)for(var he=0;he<d;he++)if(c>=0&&u>=0?(g=_*e+he<<2,m=(u+_)*s+c+he<<2):(g=(-u+_)*e-c+he<<2,m=_*s+he<<2),h==0)i[m]=n[g],i[m+1]=n[g+1],i[m+2]=n[g+2],i[m+3]=n[g+3];else if(h==1){var ve=n[g+3]*.00392156862745098,b=n[g]*ve,Se=n[g+1]*ve,et=n[g+2]*ve,Pe=i[m+3]*(1/255),mt=i[m]*Pe,ot=i[m+1]*Pe,Ue=i[m+2]*Pe,Be=1-ve,Ve=ve+Pe*Be,Le=Ve==0?0:1/Ve;i[m+3]=255*Ve,i[m+0]=(b+mt*Be)*Le,i[m+1]=(Se+ot*Be)*Le,i[m+2]=(et+Ue*Be)*Le}else if(h==2)ve=n[g+3],b=n[g],Se=n[g+1],et=n[g+2],Pe=i[m+3],mt=i[m],ot=i[m+1],Ue=i[m+2],ve==Pe&&b==mt&&Se==ot&&et==Ue?(i[m]=0,i[m+1]=0,i[m+2]=0,i[m+3]=0):(i[m]=b,i[m+1]=Se,i[m+2]=et,i[m+3]=ve);else if(h==3){if(ve=n[g+3],b=n[g],Se=n[g+1],et=n[g+2],Pe=i[m+3],mt=i[m],ot=i[m+1],Ue=i[m+2],ve==Pe&&b==mt&&Se==ot&&et==Ue)continue;if(ve<220&&Pe>20)return!1}return!0},UPNG.encode=function(n,e,r,i,s,a,c){i==null&&(i=0),c==null&&(c=!1);var u=UPNG.encode.compress(n,e,r,i,[!1,!1,!1,0,c]);return UPNG.encode.compressPNG(u,-1),UPNG.encode._main(u,e,r,s,a)},UPNG.encodeLL=function(n,e,r,i,s,a,c,u){for(var h={ctype:0+(i==1?0:2)+(s==0?0:4),depth:a,frames:[]},d=(i+s)*a,f=d*e,g=0;g<n.length;g++)h.frames.push({rect:{x:0,y:0,width:e,height:r},img:new Uint8Array(n[g]),blend:0,dispose:1,bpp:Math.ceil(d/8),bpl:Math.ceil(f/8)});return UPNG.encode.compressPNG(h,0,!0),UPNG.encode._main(h,e,r,c,u)},UPNG.encode._main=function(n,e,r,i,s){s==null&&(s={});var a=UPNG.crc.crc,c=UPNG._bin.writeUint,u=UPNG._bin.writeUshort,h=UPNG._bin.writeASCII,d=8,f=n.frames.length>1,g=!1,m=33+(f?20:0);if(s.sRGB!=null&&(m+=13),s.pHYs!=null&&(m+=21),n.ctype==3){for(var _=n.plte.length,he=0;he<_;he++)n.plte[he]>>>24!=255&&(g=!0);m+=8+3*_+4+(g?8+1*_+4:0)}for(var ve=0;ve<n.frames.length;ve++)f&&(m+=38),m+=(Ve=n.frames[ve]).cimg.length+12,ve!=0&&(m+=4);m+=12;var b=new Uint8Array(m),Se=[137,80,78,71,13,10,26,10];for(he=0;he<8;he++)b[he]=Se[he];if(c(b,d,13),h(b,d+=4,"IHDR"),c(b,d+=4,e),c(b,d+=4,r),b[d+=4]=n.depth,b[++d]=n.ctype,b[++d]=0,b[++d]=0,b[++d]=0,c(b,++d,a(b,d-17,17)),d+=4,s.sRGB!=null&&(c(b,d,1),h(b,d+=4,"sRGB"),b[d+=4]=s.sRGB,c(b,++d,a(b,d-5,5)),d+=4),s.pHYs!=null&&(c(b,d,9),h(b,d+=4,"pHYs"),c(b,d+=4,s.pHYs[0]),c(b,d+=4,s.pHYs[1]),b[d+=4]=s.pHYs[2],c(b,++d,a(b,d-13,13)),d+=4),f&&(c(b,d,8),h(b,d+=4,"acTL"),c(b,d+=4,n.frames.length),c(b,d+=4,s.loop!=null?s.loop:0),c(b,d+=4,a(b,d-12,12)),d+=4),n.ctype==3){for(c(b,d,3*(_=n.plte.length)),h(b,d+=4,"PLTE"),d+=4,he=0;he<_;he++){var et=3*he,Pe=n.plte[he],mt=255&Pe,ot=Pe>>>8&255,Ue=Pe>>>16&255;b[d+et+0]=mt,b[d+et+1]=ot,b[d+et+2]=Ue}if(c(b,d+=3*_,a(b,d-3*_-4,3*_+4)),d+=4,g){for(c(b,d,_),h(b,d+=4,"tRNS"),d+=4,he=0;he<_;he++)b[d+he]=n.plte[he]>>>24&255;c(b,d+=_,a(b,d-_-4,_+4)),d+=4}}var Be=0;for(ve=0;ve<n.frames.length;ve++){var Ve=n.frames[ve];f&&(c(b,d,26),h(b,d+=4,"fcTL"),c(b,d+=4,Be++),c(b,d+=4,Ve.rect.width),c(b,d+=4,Ve.rect.height),c(b,d+=4,Ve.rect.x),c(b,d+=4,Ve.rect.y),u(b,d+=4,i[ve]),u(b,d+=2,1e3),b[d+=2]=Ve.dispose,b[++d]=Ve.blend,c(b,++d,a(b,d-30,30)),d+=4);var Le=Ve.cimg;c(b,d,(_=Le.length)+(ve==0?0:4));var gt=d+=4;h(b,d,ve==0?"IDAT":"fdAT"),d+=4,ve!=0&&(c(b,d,Be++),d+=4),b.set(Le,d),c(b,d+=_,a(b,gt,d-gt)),d+=4}return c(b,d,0),h(b,d+=4,"IEND"),c(b,d+=4,a(b,d-4,4)),d+=4,b.buffer},UPNG.encode.compressPNG=function(n,e,r){for(var i=0;i<n.frames.length;i++){var s=n.frames[i];s.rect.width;var a=s.rect.height,c=new Uint8Array(a*s.bpl+a);s.cimg=UPNG.encode._filterZero(s.img,a,s.bpp,s.bpl,c,e,r)}},UPNG.encode.compress=function(n,e,r,i,s){for(var a=s[0],c=s[1],u=s[2],h=s[3],d=s[4],f=6,g=8,m=255,_=0;_<n.length;_++)for(var he=new Uint8Array(n[_]),ve=he.length,b=0;b<ve;b+=4)m&=he[b+3];var Se=m!=255,et=UPNG.encode.framize(n,e,r,a,c,u),Pe={},mt=[],ot=[];if(i!=0){var Ue=[];for(b=0;b<et.length;b++)Ue.push(et[b].img.buffer);var Be=UPNG.encode.concatRGBA(Ue),Ve=UPNG.quantize(Be,i),Le=0,gt=new Uint8Array(Ve.abuf);for(b=0;b<et.length;b++){var vt=(tr=et[b].img).length;for(ot.push(new Uint8Array(Ve.inds.buffer,Le>>2,vt>>2)),_=0;_<vt;_+=4)tr[_]=gt[Le+_],tr[_+1]=gt[Le+_+1],tr[_+2]=gt[Le+_+2],tr[_+3]=gt[Le+_+3];Le+=vt}for(b=0;b<Ve.plte.length;b++)mt.push(Ve.plte[b].est.rgba)}else for(_=0;_<et.length;_++){var yt=et[_],wt=new Uint32Array(yt.img.buffer),St=yt.rect.width,Nt=(ve=wt.length,new Uint8Array(ve));for(ot.push(Nt),b=0;b<ve;b++){var _t=wt[b];if(b!=0&&_t==wt[b-1])Nt[b]=Nt[b-1];else if(b>St&&_t==wt[b-St])Nt[b]=Nt[b-St];else{var Ot=Pe[_t];if(Ot==null&&(Pe[_t]=Ot=mt.length,mt.push(_t),mt.length>=300))break;Nt[b]=Ot}}}var Mt=mt.length;for(Mt<=256&&d==0&&(g=Mt<=2?1:Mt<=4?2:Mt<=16?4:8,g=Math.max(g,h)),_=0;_<et.length;_++){(yt=et[_]).rect.x,yt.rect.y,St=yt.rect.width;var Ft=yt.rect.height,kt=yt.img;new Uint32Array(kt.buffer);var xt=4*St,On=4;if(Mt<=256&&d==0){xt=Math.ceil(g*St/8);for(var Ht=new Uint8Array(xt*Ft),er=ot[_],Dt=0;Dt<Ft;Dt++){b=Dt*xt;var Wt=Dt*St;if(g==8)for(var Vt=0;Vt<St;Vt++)Ht[b+Vt]=er[Wt+Vt];else if(g==4)for(Vt=0;Vt<St;Vt++)Ht[b+(Vt>>1)]|=er[Wt+Vt]<<4-4*(1&Vt);else if(g==2)for(Vt=0;Vt<St;Vt++)Ht[b+(Vt>>2)]|=er[Wt+Vt]<<6-2*(3&Vt);else if(g==1)for(Vt=0;Vt<St;Vt++)Ht[b+(Vt>>3)]|=er[Wt+Vt]<<7-1*(7&Vt)}kt=Ht,f=3,On=1}else if(Se==0&&et.length==1){Ht=new Uint8Array(St*Ft*3);var nr=St*Ft;for(b=0;b<nr;b++){var tr,rr=4*b;Ht[tr=3*b]=kt[rr],Ht[tr+1]=kt[rr+1],Ht[tr+2]=kt[rr+2]}kt=Ht,f=2,On=3,xt=3*St}yt.img=kt,yt.bpl=xt,yt.bpp=On}return{ctype:f,depth:g,plte:mt,frames:et}},UPNG.encode.framize=function(n,e,r,i,s,a){for(var c=[],u=0;u<n.length;u++){var h,d=new Uint8Array(n[u]),f=new Uint32Array(d.buffer),g=0,m=0,_=e,he=r,ve=i?1:0;if(u!=0){for(var b=a||i||u==1||c[u-2].dispose!=0?1:2,Se=0,et=1e9,Pe=0;Pe<b;Pe++){for(var mt=new Uint8Array(n[u-1-Pe]),ot=new Uint32Array(n[u-1-Pe]),Ue=e,Be=r,Ve=-1,Le=-1,gt=0;gt<r;gt++)for(var vt=0;vt<e;vt++)f[Mt=gt*e+vt]!=ot[Mt]&&(vt<Ue&&(Ue=vt),vt>Ve&&(Ve=vt),gt<Be&&(Be=gt),gt>Le&&(Le=gt));Ve==-1&&(Ue=Be=Ve=Le=0),s&&((1&Ue)==1&&Ue--,(1&Be)==1&&Be--);var yt=(Ve-Ue+1)*(Le-Be+1);yt<et&&(et=yt,Se=Pe,g=Ue,m=Be,_=Ve-Ue+1,he=Le-Be+1)}mt=new Uint8Array(n[u-1-Se]),Se==1&&(c[u-1].dispose=2),h=new Uint8Array(_*he*4),UPNG._copyTile(mt,e,r,h,_,he,-g,-m,0),(ve=UPNG._copyTile(d,e,r,h,_,he,-g,-m,3)?1:0)==1?UPNG.encode._prepareDiff(d,e,r,h,{x:g,y:m,width:_,height:he}):UPNG._copyTile(d,e,r,h,_,he,-g,-m,0)}else h=d.slice(0);c.push({rect:{x:g,y:m,width:_,height:he},img:h,blend:ve,dispose:0})}if(i){for(u=0;u<c.length;u++)if((Ft=c[u]).blend!=1){var wt=Ft.rect,St=c[u-1].rect,Nt=Math.min(wt.x,St.x),_t=Math.min(wt.y,St.y),Ot={x:Nt,y:_t,width:Math.max(wt.x+wt.width,St.x+St.width)-Nt,height:Math.max(wt.y+wt.height,St.y+St.height)-_t};c[u-1].dispose=1,u-1!=0&&UPNG.encode._updateFrame(n,e,r,c,u-1,Ot,s),UPNG.encode._updateFrame(n,e,r,c,u,Ot,s)}}if(n.length!=1)for(var Mt=0;Mt<c.length;Mt++){var Ft;(Ft=c[Mt]).rect.width*Ft.rect.height}return c},UPNG.encode._updateFrame=function(n,e,r,i,s,a,c){for(var u=Uint8Array,h=Uint32Array,d=new u(n[s-1]),f=new h(n[s-1]),g=s+1<n.length?new u(n[s+1]):null,m=new u(n[s]),_=new h(m.buffer),he=e,ve=r,b=-1,Se=-1,et=0;et<a.height;et++)for(var Pe=0;Pe<a.width;Pe++){var mt=a.x+Pe,ot=a.y+et,Ue=ot*e+mt,Be=_[Ue];Be==0||i[s-1].dispose==0&&f[Ue]==Be&&(g==null||g[4*Ue+3]!=0)||(mt<he&&(he=mt),mt>b&&(b=mt),ot<ve&&(ve=ot),ot>Se&&(Se=ot))}b==-1&&(he=ve=b=Se=0),c&&((1&he)==1&&he--,(1&ve)==1&&ve--),a={x:he,y:ve,width:b-he+1,height:Se-ve+1};var Ve=i[s];Ve.rect=a,Ve.blend=1,Ve.img=new Uint8Array(a.width*a.height*4),i[s-1].dispose==0?(UPNG._copyTile(d,e,r,Ve.img,a.width,a.height,-a.x,-a.y,0),UPNG.encode._prepareDiff(m,e,r,Ve.img,a)):UPNG._copyTile(m,e,r,Ve.img,a.width,a.height,-a.x,-a.y,0)},UPNG.encode._prepareDiff=function(n,e,r,i,s){UPNG._copyTile(n,e,r,i,s.width,s.height,-s.x,-s.y,2)},UPNG.encode._filterZero=function(n,e,r,i,s,a,c){var u,h=[],d=[0,1,2,3,4];a!=-1?d=[a]:(e*i>5e5||r==1)&&(d=[0]),c&&(u={level:0});for(var f,g=UZIP,m=0;m<d.length;m++){for(var _=0;_<e;_++)UPNG.encode._filterLine(s,n,_,i,r,d[m]);h.push(g.deflate(s,u))}var he=1e9;for(m=0;m<h.length;m++)h[m].length<he&&(f=m,he=h[m].length);return h[f]},UPNG.encode._filterLine=function(n,e,r,i,s,a){var c=r*i,u=c+r,h=UPNG.decode._paeth;if(n[u]=a,u++,a==0)if(i<500)for(var d=0;d<i;d++)n[u+d]=e[c+d];else n.set(new Uint8Array(e.buffer,c,i),u);else if(a==1){for(d=0;d<s;d++)n[u+d]=e[c+d];for(d=s;d<i;d++)n[u+d]=e[c+d]-e[c+d-s]+256&255}else if(r==0){for(d=0;d<s;d++)n[u+d]=e[c+d];if(a==2)for(d=s;d<i;d++)n[u+d]=e[c+d];if(a==3)for(d=s;d<i;d++)n[u+d]=e[c+d]-(e[c+d-s]>>1)+256&255;if(a==4)for(d=s;d<i;d++)n[u+d]=e[c+d]-h(e[c+d-s],0,0)+256&255}else{if(a==2)for(d=0;d<i;d++)n[u+d]=e[c+d]+256-e[c+d-i]&255;if(a==3){for(d=0;d<s;d++)n[u+d]=e[c+d]+256-(e[c+d-i]>>1)&255;for(d=s;d<i;d++)n[u+d]=e[c+d]+256-(e[c+d-i]+e[c+d-s]>>1)&255}if(a==4){for(d=0;d<s;d++)n[u+d]=e[c+d]+256-h(0,e[c+d-i],0)&255;for(d=s;d<i;d++)n[u+d]=e[c+d]+256-h(e[c+d-s],e[c+d-i],e[c+d-s-i])&255}}},UPNG.crc={table:function(){for(var n=new Uint32Array(256),e=0;e<256;e++){for(var r=e,i=0;i<8;i++)1&r?r=3988292384^r>>>1:r>>>=1;n[e]=r}return n}(),update:function(e,r,i,s){for(var a=0;a<s;a++)e=UPNG.crc.table[255&(e^r[i+a])]^e>>>8;return e},crc:function(e,r,i){return 4294967295^UPNG.crc.update(4294967295,e,r,i)}},UPNG.quantize=function(n,e){var r,i=new Uint8Array(n),s=i.slice(0),a=new Uint32Array(s.buffer),c=UPNG.quantize.getKDtree(s,e),u=c[0],h=c[1],d=UPNG.quantize.planeDst,f=i,g=a,m=f.length,_=new Uint8Array(i.length>>2);if(i.length<2e7)for(var he=0;he<m;he+=4){var ve=f[he]*.00392156862745098,b=f[he+1]*(1/255),Se=f[he+2]*(1/255),et=f[he+3]*(1/255);r=UPNG.quantize.getNearest(u,ve,b,Se,et),_[he>>2]=r.ind,g[he>>2]=r.est.rgba}else for(he=0;he<m;he+=4){for(ve=f[he]*(1/255),b=f[he+1]*(1/255),Se=f[he+2]*(1/255),et=f[he+3]*(1/255),r=u;r.left;)r=d(r.est,ve,b,Se,et)<=0?r.left:r.right;_[he>>2]=r.ind,g[he>>2]=r.est.rgba}return{abuf:s.buffer,inds:_,plte:h}},UPNG.quantize.getKDtree=function(n,e,r){r==null&&(r=1e-4);var i=new Uint32Array(n.buffer),s={i0:0,i1:n.length,bst:null,est:null,tdst:0,left:null,right:null};s.bst=UPNG.quantize.stats(n,s.i0,s.i1),s.est=UPNG.quantize.estats(s.bst);for(var a=[s];a.length<e;){for(var c=0,u=0,h=0;h<a.length;h++)a[h].est.L>c&&(c=a[h].est.L,u=h);if(c<r)break;var d=a[u],f=UPNG.quantize.splitPixels(n,i,d.i0,d.i1,d.est.e,d.est.eMq255);if(d.i0>=f||d.i1<=f)d.est.L=0;else{var g={i0:d.i0,i1:f,bst:null,est:null,tdst:0,left:null,right:null};g.bst=UPNG.quantize.stats(n,g.i0,g.i1),g.est=UPNG.quantize.estats(g.bst);var m={i0:f,i1:d.i1,bst:null,est:null,tdst:0,left:null,right:null};for(m.bst={R:[],m:[],N:d.bst.N-g.bst.N},h=0;h<16;h++)m.bst.R[h]=d.bst.R[h]-g.bst.R[h];for(h=0;h<4;h++)m.bst.m[h]=d.bst.m[h]-g.bst.m[h];m.est=UPNG.quantize.estats(m.bst),d.left=g,d.right=m,a[u]=g,a.push(m)}}for(a.sort(function(_,he){return he.bst.N-_.bst.N}),h=0;h<a.length;h++)a[h].ind=h;return[s,a]},UPNG.quantize.getNearest=function(n,e,r,i,s){if(n.left==null)return n.tdst=UPNG.quantize.dist(n.est.q,e,r,i,s),n;var a=UPNG.quantize.planeDst(n.est,e,r,i,s),c=n.left,u=n.right;a>0&&(c=n.right,u=n.left);var h=UPNG.quantize.getNearest(c,e,r,i,s);if(h.tdst<=a*a)return h;var d=UPNG.quantize.getNearest(u,e,r,i,s);return d.tdst<h.tdst?d:h},UPNG.quantize.planeDst=function(n,e,r,i,s){var a=n.e;return a[0]*e+a[1]*r+a[2]*i+a[3]*s-n.eMq},UPNG.quantize.dist=function(n,e,r,i,s){var a=e-n[0],c=r-n[1],u=i-n[2],h=s-n[3];return a*a+c*c+u*u+h*h},UPNG.quantize.splitPixels=function(n,e,r,i,s,a){var c=UPNG.quantize.vecDot;for(i-=4;r<i;){for(;c(n,r,s)<=a;)r+=4;for(;c(n,i,s)>a;)i-=4;if(r>=i)break;var u=e[r>>2];e[r>>2]=e[i>>2],e[i>>2]=u,r+=4,i-=4}for(;c(n,r,s)>a;)r-=4;return r+4},UPNG.quantize.vecDot=function(n,e,r){return n[e]*r[0]+n[e+1]*r[1]+n[e+2]*r[2]+n[e+3]*r[3]},UPNG.quantize.stats=function(n,e,r){for(var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],s=[0,0,0,0],a=r-e>>2,c=e;c<r;c+=4){var u=n[c]*.00392156862745098,h=n[c+1]*(1/255),d=n[c+2]*(1/255),f=n[c+3]*(1/255);s[0]+=u,s[1]+=h,s[2]+=d,s[3]+=f,i[0]+=u*u,i[1]+=u*h,i[2]+=u*d,i[3]+=u*f,i[5]+=h*h,i[6]+=h*d,i[7]+=h*f,i[10]+=d*d,i[11]+=d*f,i[15]+=f*f}return i[4]=i[1],i[8]=i[2],i[9]=i[6],i[12]=i[3],i[13]=i[7],i[14]=i[11],{R:i,m:s,N:a}},UPNG.quantize.estats=function(n){var e=n.R,r=n.m,i=n.N,s=r[0],a=r[1],c=r[2],u=r[3],h=i==0?0:1/i,d=[e[0]-s*s*h,e[1]-s*a*h,e[2]-s*c*h,e[3]-s*u*h,e[4]-a*s*h,e[5]-a*a*h,e[6]-a*c*h,e[7]-a*u*h,e[8]-c*s*h,e[9]-c*a*h,e[10]-c*c*h,e[11]-c*u*h,e[12]-u*s*h,e[13]-u*a*h,e[14]-u*c*h,e[15]-u*u*h],f=d,g=UPNG.M4,m=[Math.random(),Math.random(),Math.random(),Math.random()],_=0,he=0;if(i!=0)for(var ve=0;ve<16&&(m=g.multVec(f,m),he=Math.sqrt(g.dot(m,m)),m=g.sml(1/he,m),!(ve!=0&&Math.abs(he-_)<1e-9));ve++)_=he;var b=[s*h,a*h,c*h,u*h];return{Cov:d,q:b,e:m,L:_,eMq255:g.dot(g.sml(255,b),m),eMq:g.dot(m,b),rgba:(Math.round(255*b[3])<<24|Math.round(255*b[2])<<16|Math.round(255*b[1])<<8|Math.round(255*b[0])<<0)>>>0}},UPNG.M4={multVec:function(e,r){return[e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3],e[4]*r[0]+e[5]*r[1]+e[6]*r[2]+e[7]*r[3],e[8]*r[0]+e[9]*r[1]+e[10]*r[2]+e[11]*r[3],e[12]*r[0]+e[13]*r[1]+e[14]*r[2]+e[15]*r[3]]},dot:function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]},sml:function(e,r){return[e*r[0],e*r[1],e*r[2],e*r[3]]}},UPNG.encode.concatRGBA=function(n){for(var e=0,r=0;r<n.length;r++)e+=n[r].byteLength;var i=new Uint8Array(e),s=0;for(r=0;r<n.length;r++){for(var a=new Uint8Array(n[r]),c=a.length,u=0;u<c;u+=4){var h=a[u],d=a[u+1],f=a[u+2],g=a[u+3];g==0&&(h=d=f=0),i[s+u]=h,i[s+u+1]=d,i[s+u+2]=f,i[s+u+3]=g}s+=c}return i.buffer};var BROWSER_NAME={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",MOBILE_SAFARI:"MOBILE_SAFARI",ETC:"ETC"},_BROWSER_NAME$CHROME$,MAX_CANVAS_SIZE=(_BROWSER_NAME$CHROME$={},_defineProperty(_BROWSER_NAME$CHROME$,BROWSER_NAME.CHROME,16384),_defineProperty(_BROWSER_NAME$CHROME$,BROWSER_NAME.FIREFOX,11180),_defineProperty(_BROWSER_NAME$CHROME$,BROWSER_NAME.DESKTOP_SAFARI,16384),_defineProperty(_BROWSER_NAME$CHROME$,BROWSER_NAME.IE,8192),_defineProperty(_BROWSER_NAME$CHROME$,BROWSER_NAME.MOBILE_SAFARI,4096),_defineProperty(_BROWSER_NAME$CHROME$,BROWSER_NAME.ETC,8192),_BROWSER_NAME$CHROME$),isBrowser=typeof window!="undefined",moduleMapper=isBrowser&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),CustomFile=isBrowser&&(moduleMapper&&moduleMapper.getOriginalSymbol(window,"File")||window.File!==void 0&&File),CustomFileReader=isBrowser&&(moduleMapper&&moduleMapper.getOriginalSymbol(window,"FileReader")||window.FileReader!==void 0&&FileReader);function getFilefromDataUrl(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Date.now();return new Promise(function(i){for(var s=n.split(","),a=s[0].match(/:(.*?);/)[1],c=globalThis.atob(s[1]),u=c.length,h=new Uint8Array(u);u--;)h[u]=c.charCodeAt(u);var d=new Blob([h],{type:a});d.name=e,d.lastModified=r,i(d)})}function getDataUrlFromFile(n){return new Promise(function(e,r){var i=new CustomFileReader;i.onload=function(){return e(i.result)},i.onerror=function(s){return r(s)},i.readAsDataURL(n)})}function loadImage(n){return new Promise(function(e,r){var i=new Image;i.onload=function(){return e(i)},i.onerror=function(s){return r(s)},i.src=n})}function getBrowserName(){if(getBrowserName.cachedResult!==void 0)return getBrowserName.cachedResult;var n=BROWSER_NAME.ETC,e=navigator.userAgent;return/Chrom(e|ium)/i.test(e)?n=BROWSER_NAME.CHROME:/iP(ad|od|hone)/i.test(e)&&/WebKit/i.test(e)&&!/(CriOS|FxiOS|OPiOS|mercury)/i.test(e)?n=BROWSER_NAME.MOBILE_SAFARI:/Safari/i.test(e)?n=BROWSER_NAME.DESKTOP_SAFARI:/Firefox/i.test(e)?n=BROWSER_NAME.FIREFOX:(/MSIE/i.test(e)||!!document.documentMode)&&(n=BROWSER_NAME.IE),getBrowserName.cachedResult=n,getBrowserName.cachedResult}function approximateBelowMaximumCanvasSizeOfBrowser(n,e){for(var r=getBrowserName(),i=MAX_CANVAS_SIZE[r],s=n,a=e,c=s*a,u=s>a?a/s:s/a;c>i*i;){var h=(i+s)/2,d=(i+a)/2;h<d?(a=d,s=d*u):(a=h*u,s=h),c=s*a}return{width:s,height:a}}function getNewCanvasAndCtx(n,e){var r,i;try{if((i=(r=new OffscreenCanvas(n,e)).getContext("2d"))===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{i=(r=document.createElement("canvas")).getContext("2d")}return r.width=n,r.height=e,[r,i]}function drawImageInCanvas(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=approximateBelowMaximumCanvasSizeOfBrowser(n.width,n.height),i=r.width,s=r.height,a=getNewCanvasAndCtx(i,s),c=_slicedToArray(a,2),u=c[0],h=c[1];return e&&/jpe?g/.test(e)&&(h.fillStyle="white",h.fillRect(0,0,u.width,u.height)),h.drawImage(n,0,0,u.width,u.height),u}function isIOS(){return isIOS.cachedResult!==void 0||(isIOS.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document!="undefined"&&"ontouchend"in document),isIOS.cachedResult}function drawFileInCanvas(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(function(r,i){var s,a,c=function(){try{return a=drawImageInCanvas(s,e.fileType||n.type),r([s,a])}catch(d){return i(d)}},u=function(d){try{var f=function(m){try{throw m}catch(_){return i(_)}};try{return getDataUrlFromFile(n).then(function(g){try{return loadImage(g).then(function(m){try{return s=m,function(){try{return c()}catch(he){return i(he)}}()}catch(_){return f(_)}},f)}catch(m){return f(m)}},f)}catch(g){f(g)}}catch(g){return i(g)}};try{if(isIOS()||[BROWSER_NAME.DESKTOP_SAFARI,BROWSER_NAME.MOBILE_SAFARI].includes(getBrowserName()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(n).then(function(h){try{return s=h,c()}catch{return u()}},u)}catch{u()}})}function canvasToFile(n,e,r,i){var s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1;return new Promise(function(a,c){var u,h,d;if(e==="image/png")return h=n.getContext("2d").getImageData(0,0,n.width,n.height).data,d=UPNG.encode([h],n.width,n.height,256*s),(u=new Blob([d],{type:e})).name=r,u.lastModified=i,f.call(this);{let m=function(){return f.call(this)};var g=m;return typeof OffscreenCanvas=="function"&&n instanceof OffscreenCanvas?n.convertToBlob({type:e,quality:s}).then(function(_){try{return(u=_).name=r,u.lastModified=i,m.call(this)}catch(he){return c(he)}}.bind(this),c):getFilefromDataUrl(n.toDataURL(e,s),r,i).then(function(_){try{return u=_,m.call(this)}catch(he){return c(he)}}.bind(this),c)}function f(){return a(u)}})}function cleanupCanvasMemory(n){n.width=0,n.height=0}function isAutoOrientationInBrowser(){return new Promise(function(n,e){var r,i,s,a;return isAutoOrientationInBrowser.cachedResult!==void 0?n(isAutoOrientationInBrowser.cachedResult):getFilefromDataUrl("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(c){try{return drawFileInCanvas(r=c).then(function(u){try{return canvasToFile(i=u[1],r.type,r.name,r.lastModified).then(function(h){try{return s=h,cleanupCanvasMemory(i),drawFileInCanvas(s).then(function(d){try{return a=d[0],isAutoOrientationInBrowser.cachedResult=a.width===1&&a.height===2,n(isAutoOrientationInBrowser.cachedResult)}catch(f){return e(f)}},e)}catch(d){return e(d)}},e)}catch(h){return e(h)}},e)}catch(u){return e(u)}},e)})}function getExifOrientation(n){return new Promise(function(e,r){var i=new CustomFileReader;i.onload=function(s){var a=new DataView(s.target.result);if(a.getUint16(0,!1)!=65496)return e(-2);for(var c=a.byteLength,u=2;u<c;){if(a.getUint16(u+2,!1)<=8)return e(-1);var h=a.getUint16(u,!1);if(u+=2,h==65505){if(a.getUint32(u+=2,!1)!=1165519206)return e(-1);var d=a.getUint16(u+=6,!1)==18761;u+=a.getUint32(u+4,d);var f=a.getUint16(u,d);u+=2;for(var g=0;g<f;g++)if(a.getUint16(u+12*g,d)==274)return e(a.getUint16(u+12*g+8,d))}else{if((65280&h)!=65280)break;u+=a.getUint16(u,!1)}}return e(-1)},i.onerror=function(s){return r(s)},i.readAsArrayBuffer(n)})}function handleMaxWidthOrHeight(n,e){var r,i=n.width,s=n.height,a=e.maxWidthOrHeight,c=n;if(isFinite(a)&&(i>a||s>a)){var u=_slicedToArray(getNewCanvasAndCtx(i,s),2);c=u[0],r=u[1],i>s?(c.width=a,c.height=s/i*a):(c.width=i/s*a,c.height=a),r.drawImage(n,0,0,c.width,c.height),cleanupCanvasMemory(n)}return c}function followExifOrientation(n,e){var r=n.width,i=n.height,s=_slicedToArray(getNewCanvasAndCtx(r,i),2),a=s[0],c=s[1];switch(e>4&&e<9?(a.width=i,a.height=r):(a.width=r,a.height=i),e){case 2:c.transform(-1,0,0,1,r,0);break;case 3:c.transform(-1,0,0,-1,r,i);break;case 4:c.transform(1,0,0,-1,0,i);break;case 5:c.transform(0,1,1,0,0,0);break;case 6:c.transform(0,1,-1,0,i,0);break;case 7:c.transform(0,-1,-1,0,i,r);break;case 8:c.transform(0,-1,1,0,0,r)}return c.drawImage(n,0,0,r,i),cleanupCanvasMemory(n),a}function compress(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return new Promise(function(i,s){var a,c,u,h,d,f,g,m,_,he,ve,b,Se,et,Pe,mt,ot,Ue,Be;function Ve(){var gt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5;if(e.signal&&e.signal.aborted)throw e.signal.reason;a+=gt,e.onProgress(Math.min(a,100))}function Le(gt){if(e.signal&&e.signal.aborted)throw e.signal.reason;a=Math.min(Math.max(gt,a),100),e.onProgress(a)}return a=r,c=e.maxIteration||10,u=1024*e.maxSizeMB*1024,Ve(),drawFileInCanvas(n,e).then(function(gt){try{var vt=_slicedToArray(gt,2);return h=vt[1],Ve(),d=handleMaxWidthOrHeight(h,e),Ve(),new Promise(function(yt,wt){var St;if(!(St=e.exifOrientation))return getExifOrientation(n).then(function(_t){try{return St=_t,Nt.call(this)}catch(Ot){return wt(Ot)}}.bind(this),wt);function Nt(){return yt(St)}return Nt.call(this)}).then(function(yt){try{return f=yt,Ve(),isAutoOrientationInBrowser().then(function(wt){try{return g=wt?d:followExifOrientation(d,f),Ve(),m=e.initialQuality||1,_=e.fileType||n.type,canvasToFile(g,_,n.name,n.lastModified,m).then(function(St){try{{let Mt=function(){if(c--&&(Pe>u||Pe>Se)){var kt,xt,On=_slicedToArray(getNewCanvasAndCtx(kt=Be?.95*Ue.width:Ue.width,xt=Be?.95*Ue.height:Ue.height),2);return ot=On[0],On[1].drawImage(Ue,0,0,kt,xt),m*=.95,canvasToFile(ot,_,n.name,n.lastModified,m).then(function(Ht){try{return mt=Ht,cleanupCanvasMemory(Ue),Ue=ot,Pe=mt.size,Le(Math.min(99,Math.floor((et-Pe)/(et-u)*100))),Mt}catch(er){return s(er)}},s)}return[1]},Ft=function(){return cleanupCanvasMemory(Ue),cleanupCanvasMemory(ot),cleanupCanvasMemory(d),cleanupCanvasMemory(g),cleanupCanvasMemory(h),Le(100),i(mt)};var _t=Mt,Ot=Ft;if(he=St,Ve(),ve=he.size>u,b=he.size>n.size,!ve&&!b)return Le(100),i(he);var Nt;return Se=n.size,et=he.size,Pe=et,Ue=g,Be=!e.alwaysKeepResolution&&ve,(Nt=function(kt){for(;kt;){if(kt.then)return void kt.then(Nt,s);try{if(kt.pop){if(kt.length)return kt.pop()?Ft.call(this):kt;kt=Mt}else kt=kt.call(this)}catch(xt){return s(xt)}}}.bind(this))(Mt)}}catch(Mt){return s(Mt)}}.bind(this),s)}catch(St){return s(St)}}.bind(this),s)}catch(wt){return s(wt)}}.bind(this),s)}catch(yt){return s(yt)}}.bind(this),s)})}var cnt=0,imageCompressionLibUrl,worker;function createWorker(n){var e=[];return typeof n=="function"?e.push("(".concat(n,")()")):e.push(n),new Worker(URL.createObjectURL(new Blob(e)))}function createSourceObject(n){return URL.createObjectURL(new Blob([n],{type:"application/javascript"}))}function stringify(n){return JSON.stringify(n,function(e,r){return typeof r=="function"?"BIC_FN:::(function () { return ".concat(r.toString()," })()"):r})}function parse(o){if(typeof o=="string")return o;var result={};return Object.entries(o).forEach(function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];if(typeof value=="string"&&value.startsWith("BIC_FN:::"))try{result[key]=eval(value.replace(/^BIC_FN:::/,""))}catch(n){throw n}else result[key]=parse(value)}),result}function generateLib(){return createSourceObject(`
    // reconstruct library
    function imageCompression (){return (`.concat(imageCompression,`).apply(null, arguments)}

    imageCompression.getDataUrlFromFile = `).concat(imageCompression.getDataUrlFromFile,`
    imageCompression.getFilefromDataUrl = `).concat(imageCompression.getFilefromDataUrl,`
    imageCompression.loadImage = `).concat(imageCompression.loadImage,`
    imageCompression.drawImageInCanvas = `).concat(imageCompression.drawImageInCanvas,`
    imageCompression.drawFileInCanvas = `).concat(imageCompression.drawFileInCanvas,`
    imageCompression.canvasToFile = `).concat(imageCompression.canvasToFile,`
    imageCompression.getExifOrientation = `).concat(imageCompression.getExifOrientation,`
    imageCompression.handleMaxWidthOrHeight = `).concat(imageCompression.handleMaxWidthOrHeight,`
    imageCompression.followExifOrientation = `).concat(imageCompression.followExifOrientation,`
    imageCompression.cleanupCanvasMemory = `).concat(imageCompression.cleanupCanvasMemory,`
    imageCompression.isAutoOrientationInBrowser = `).concat(imageCompression.isAutoOrientationInBrowser,`
    imageCompression.approximateBelowMaximumCanvasSizeOfBrowser = `).concat(imageCompression.approximateBelowMaximumCanvasSizeOfBrowser,`
    imageCompression.getBrowserName = `).concat(imageCompression.getBrowserName,`

    // functions / objects
    getDataUrlFromFile = imageCompression.getDataUrlFromFile
    getFilefromDataUrl = imageCompression.getFilefromDataUrl
    loadImage = imageCompression.loadImage
    drawImageInCanvas = imageCompression.drawImageInCanvas
    drawFileInCanvas = imageCompression.drawFileInCanvas
    canvasToFile = imageCompression.canvasToFile
    getExifOrientation = imageCompression.getExifOrientation
    handleMaxWidthOrHeight = imageCompression.handleMaxWidthOrHeight
    followExifOrientation = imageCompression.followExifOrientation
    cleanupCanvasMemory = imageCompression.cleanupCanvasMemory
    isAutoOrientationInBrowser = imageCompression.isAutoOrientationInBrowser
    approximateBelowMaximumCanvasSizeOfBrowser = imageCompression.approximateBelowMaximumCanvasSizeOfBrowser
    getBrowserName = imageCompression.getBrowserName
    isIOS = `).concat(isIOS,`
    
    getNewCanvasAndCtx = `).concat(getNewCanvasAndCtx,`
    CustomFileReader = FileReader
    CustomFile = File
    MAX_CANVAS_SIZE = `).concat(JSON.stringify(MAX_CANVAS_SIZE),`
    BROWSER_NAME = `).concat(JSON.stringify(BROWSER_NAME),`
    function compress (){return (`).concat(compress,`).apply(null, arguments)}

    // core-js
    function _slicedToArray(arr, n) { return arr }
    function _typeof(a) { return typeof a }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
  
        Object.assign(target, source)
      }
  
      return target;
    }

    // Libraries
    const parse = `).concat(parse,`
    const UPNG = {}
    UPNG.toRGBA8 = `).concat(UPNG.toRGBA8,`
    UPNG.toRGBA8.decodeImage = `).concat(UPNG.toRGBA8.decodeImage,`
    UPNG.decode = `).concat(UPNG.decode,`
    UPNG.decode._decompress = `).concat(UPNG.decode._decompress,`
    UPNG.decode._inflate = `).concat(UPNG.decode._inflate,`
    UPNG.decode._readInterlace = `).concat(UPNG.decode._readInterlace,`
    UPNG.decode._getBPP = `).concat(UPNG.decode._getBPP,` 
    UPNG.decode._filterZero = `).concat(UPNG.decode._filterZero,`
    UPNG.decode._paeth = `).concat(UPNG.decode._paeth,`
    UPNG.decode._IHDR = `).concat(UPNG.decode._IHDR,`
    UPNG._bin = parse(`).concat(stringify(UPNG._bin),`)
    UPNG._copyTile = `).concat(UPNG._copyTile,`
    UPNG.encode = `).concat(UPNG.encode,`
    UPNG.encodeLL = `).concat(UPNG.encodeLL,` 
    UPNG.encode._main = `).concat(UPNG.encode._main,`
    UPNG.encode.compressPNG = `).concat(UPNG.encode.compressPNG,` 
    UPNG.encode.compress = `).concat(UPNG.encode.compress,`
    UPNG.encode.framize = `).concat(UPNG.encode.framize,` 
    UPNG.encode._updateFrame = `).concat(UPNG.encode._updateFrame,` 
    UPNG.encode._prepareDiff = `).concat(UPNG.encode._prepareDiff,` 
    UPNG.encode._filterZero = `).concat(UPNG.encode._filterZero,` 
    UPNG.encode._filterLine = `).concat(UPNG.encode._filterLine,`
    UPNG.encode.concatRGBA = `).concat(UPNG.encode.concatRGBA,`
    UPNG.crc = parse(`).concat(stringify(UPNG.crc),`)
    UPNG.crc.table = ( function() {
    var tab = new Uint32Array(256);
    for (var n=0; n<256; n++) {
      var c = n;
      for (var k=0; k<8; k++) {
        if (c & 1)  c = 0xedb88320 ^ (c >>> 1);
        else        c = c >>> 1;
      }
      tab[n] = c;  }
    return tab;  })()
    UPNG.quantize = `).concat(UPNG.quantize,` 
    UPNG.quantize.getKDtree = `).concat(UPNG.quantize.getKDtree,` 
    UPNG.quantize.getNearest = `).concat(UPNG.quantize.getNearest,` 
    UPNG.quantize.planeDst = `).concat(UPNG.quantize.planeDst,` 
    UPNG.quantize.dist = `).concat(UPNG.quantize.dist,`     
    UPNG.quantize.splitPixels = `).concat(UPNG.quantize.splitPixels,` 
    UPNG.quantize.vecDot = `).concat(UPNG.quantize.vecDot,` 
    UPNG.quantize.stats = `).concat(UPNG.quantize.stats,` 
    UPNG.quantize.estats = `).concat(UPNG.quantize.estats,`
    UPNG.M4 = parse(`).concat(stringify(UPNG.M4),`)
    UPNG.encode.concatRGBA = `).concat(UPNG.encode.concatRGBA,`
    UPNG.inflateRaw=function(){
    var H={};H.H={};H.H.N=function(N,W){var R=Uint8Array,i=0,m=0,J=0,h=0,Q=0,X=0,u=0,w=0,d=0,v,C;
      if(N[0]==3&&N[1]==0)return W?W:new R(0);var V=H.H,n=V.b,A=V.e,l=V.R,M=V.n,I=V.A,e=V.Z,b=V.m,Z=W==null;
      if(Z)W=new R(N.length>>>2<<5);while(i==0){i=n(N,d,1);m=n(N,d+1,2);d+=3;if(m==0){if((d&7)!=0)d+=8-(d&7);
        var D=(d>>>3)+4,q=N[D-4]|N[D-3]<<8;if(Z)W=H.H.W(W,w+q);W.set(new R(N.buffer,N.byteOffset+D,q),w);d=D+q<<3;
        w+=q;continue}if(Z)W=H.H.W(W,w+(1<<17));if(m==1){v=b.J;C=b.h;X=(1<<9)-1;u=(1<<5)-1}if(m==2){J=A(N,d,5)+257;
        h=A(N,d+5,5)+1;Q=A(N,d+10,4)+4;d+=14;var E=d,j=1;for(var c=0;c<38;c+=2){b.Q[c]=0;b.Q[c+1]=0}for(var c=0;
                                                                                                        c<Q;c++){var K=A(N,d+c*3,3);b.Q[(b.X[c]<<1)+1]=K;if(K>j)j=K}d+=3*Q;M(b.Q,j);I(b.Q,j,b.u);v=b.w;C=b.d;
        d=l(b.u,(1<<j)-1,J+h,N,d,b.v);var r=V.V(b.v,0,J,b.C);X=(1<<r)-1;var S=V.V(b.v,J,h,b.D);u=(1<<S)-1;M(b.C,r);
        I(b.C,r,v);M(b.D,S);I(b.D,S,C)}while(!0){var T=v[e(N,d)&X];d+=T&15;var p=T>>>4;if(p>>>8==0){W[w++]=p}else if(p==256){break}else{var z=w+p-254;
        if(p>264){var _=b.q[p-257];z=w+(_>>>3)+A(N,d,_&7);d+=_&7}var $=C[e(N,d)&u];d+=$&15;var s=$>>>4,Y=b.c[s],a=(Y>>>4)+n(N,d,Y&15);
        d+=Y&15;while(w<z){W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a]}w=z}}}return W.length==w?W:W.slice(0,w)};
      H.H.W=function(N,W){var R=N.length;if(W<=R)return N;var V=new Uint8Array(R<<1);V.set(N,0);return V};
      H.H.R=function(N,W,R,V,n,A){var l=H.H.e,M=H.H.Z,I=0;while(I<R){var e=N[M(V,n)&W];n+=e&15;var b=e>>>4;
        if(b<=15){A[I]=b;I++}else{var Z=0,m=0;if(b==16){m=3+l(V,n,2);n+=2;Z=A[I-1]}else if(b==17){m=3+l(V,n,3);
          n+=3}else if(b==18){m=11+l(V,n,7);n+=7}var J=I+m;while(I<J){A[I]=Z;I++}}}return n};H.H.V=function(N,W,R,V){var n=0,A=0,l=V.length>>>1;
        while(A<R){var M=N[A+W];V[A<<1]=0;V[(A<<1)+1]=M;if(M>n)n=M;A++}while(A<l){V[A<<1]=0;V[(A<<1)+1]=0;A++}return n};
      H.H.n=function(N,W){var R=H.H.m,V=N.length,n,A,l,M,I,e=R.j;for(var M=0;M<=W;M++)e[M]=0;for(M=1;M<V;M+=2)e[N[M]]++;
        var b=R.K;n=0;e[0]=0;for(A=1;A<=W;A++){n=n+e[A-1]<<1;b[A]=n}for(l=0;l<V;l+=2){I=N[l+1];if(I!=0){N[l]=b[I];
          b[I]++}}};H.H.A=function(N,W,R){var V=N.length,n=H.H.m,A=n.r;for(var l=0;l<V;l+=2)if(N[l+1]!=0){var M=l>>1,I=N[l+1],e=M<<4|I,b=W-I,Z=N[l]<<b,m=Z+(1<<b);
        while(Z!=m){var J=A[Z]>>>15-W;R[J]=e;Z++}}};H.H.l=function(N,W){var R=H.H.m.r,V=15-W;for(var n=0;n<N.length;
                                                                                                 n+=2){var A=N[n]<<W-N[n+1];N[n]=R[A]>>>V}};H.H.M=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8};
      H.H.I=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8;N[V+2]|=R>>>16};H.H.e=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8)>>>(W&7)&(1<<R)-1};
      H.H.b=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)&(1<<R)-1};H.H.Z=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)};
      H.H.i=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16|N[(W>>>3)+3]<<24)>>>(W&7)};H.H.m=function(){var N=Uint16Array,W=Uint32Array;
        return{K:new N(16),j:new N(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new N(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new W(32),J:new N(512),_:[],h:new N(32),$:[],w:new N(32768),C:[],v:[],d:new N(32768),D:[],u:new N(512),Q:[],r:new N(1<<15),s:new W(286),Y:new W(30),a:new W(19),t:new W(15e3),k:new N(1<<16),g:new N(1<<15)}}();
      (function(){var N=H.H.m,W=1<<15;for(var R=0;R<W;R++){var V=R;V=(V&2863311530)>>>1|(V&1431655765)<<1;
        V=(V&3435973836)>>>2|(V&858993459)<<2;V=(V&4042322160)>>>4|(V&252645135)<<4;V=(V&4278255360)>>>8|(V&16711935)<<8;
        N.r[R]=(V>>>16|V<<16)>>>17}function n(A,l,M){while(l--!=0)A.push(0,M)}for(var R=0;R<32;R++){N.q[R]=N.S[R]<<3|N.T[R];
        N.c[R]=N.p[R]<<4|N.z[R]}n(N._,144,8);n(N._,255-143,9);n(N._,279-255,7);n(N._,287-279,8);H.H.n(N._,9);
        H.H.A(N._,9,N.J);H.H.l(N._,9);n(N.$,32,5);H.H.n(N.$,5);H.H.A(N.$,5,N.h);H.H.l(N.$,5);n(N.Q,19,0);n(N.C,286,0);
        n(N.D,30,0);n(N.v,320,0)}());return H.H.N}()
    
    const UZIP = {}
    UZIP["parse"] = `).concat(UZIP_1.parse,`
    UZIP._readLocal = `).concat(UZIP_1._readLocal,`
    UZIP.inflateRaw = `).concat(UZIP_1.inflateRaw,`
    UZIP.inflate = `).concat(UZIP_1.inflate,`
    UZIP.deflate = `).concat(UZIP_1.deflate,`
    UZIP.deflateRaw = `).concat(UZIP_1.deflateRaw,`
    UZIP.encode = `).concat(UZIP_1.encode,`
    UZIP._noNeed = `).concat(UZIP_1._noNeed,`
    UZIP._writeHeader = `).concat(UZIP_1._writeHeader,`
    UZIP.crc = parse(`).concat(stringify(UZIP_1.crc),`)
    UZIP.crc.table = ( function() {
      var tab = new Uint32Array(256);
      for (var n=0; n<256; n++) {
        var c = n;
        for (var k=0; k<8; k++) {
          if (c & 1)  c = 0xedb88320 ^ (c >>> 1);
          else        c = c >>> 1;
        }
        tab[n] = c;  }
      return tab;  })()
    
    UZIP.adler = `).concat(UZIP_1.adler,`
    UZIP.bin = parse(`).concat(stringify(UZIP_1.bin),`)
    UZIP.F = {}
    UZIP.F.deflateRaw = `).concat(UZIP_1.F.deflateRaw,`
    UZIP.F._bestMatch = `).concat(UZIP_1.F._bestMatch,`
    UZIP.F._howLong = `).concat(UZIP_1.F._howLong,`
    UZIP.F._hash = `).concat(UZIP_1.F._hash,`
    UZIP.saved = `).concat(UZIP_1.saved,`
    UZIP.F._writeBlock = `).concat(UZIP_1.F._writeBlock,`
    UZIP.F._copyExact = `).concat(UZIP_1.F._copyExact,`
    UZIP.F.getTrees = `).concat(UZIP_1.F.getTrees,`
    UZIP.F.getSecond = `).concat(UZIP_1.F.getSecond,`
    UZIP.F.nonZero = `).concat(UZIP_1.F.nonZero,`
    UZIP.F.contSize = `).concat(UZIP_1.F.contSize,`
    UZIP.F._codeTiny = `).concat(UZIP_1.F._codeTiny,` 
    UZIP.F._lenCodes = `).concat(UZIP_1.F._lenCodes,` 
    UZIP.F._hufTree = `).concat(UZIP_1.F._hufTree,` 
    UZIP.F.setDepth = `).concat(UZIP_1.F.setDepth,` 
    UZIP.F.restrictDepth = `).concat(UZIP_1.F.restrictDepth,`
    UZIP.F._goodIndex = `).concat(UZIP_1.F._goodIndex,` 
    UZIP.F._writeLit = `).concat(UZIP_1.F._writeLit,` 
    UZIP.F.inflate = `).concat(UZIP_1.F.inflate,` 
    UZIP.F._check = `).concat(UZIP_1.F._check,` 
    UZIP.F._decodeTiny = `).concat(UZIP_1.F._decodeTiny,` 
    UZIP.F._copyOut = `).concat(UZIP_1.F._copyOut,` 
    UZIP.F.makeCodes = `).concat(UZIP_1.F.makeCodes,` 
    UZIP.F.codes2map = `).concat(UZIP_1.F.codes2map,` 
    UZIP.F.revCodes = `).concat(UZIP_1.F.revCodes,` 

    // used only in deflate
    UZIP.F._putsE = `).concat(UZIP_1.F._putsE,`
    UZIP.F._putsF = `).concat(UZIP_1.F._putsF,`
  
    UZIP.F._bitsE = `).concat(UZIP_1.F._bitsE,`
    UZIP.F._bitsF = `).concat(UZIP_1.F._bitsF,`

    UZIP.F._get17 = `).concat(UZIP_1.F._get17,`
    UZIP.F._get25 = `).concat(UZIP_1.F._get25,`
    UZIP.F.U = function(){
      var u16=Uint16Array, u32=Uint32Array;
      return {
        next_code : new u16(16),
        bl_count  : new u16(16),
        ordr : [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ],
        of0  : [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],
        exb  : [0,0,0,0,0,0,0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,  4,  5,  5,  5,  5,  0,  0,  0,  0],
        ldef : new u16(32),
        df0  : [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577, 65535, 65535],
        dxb  : [0,0,0,0,1,1,2, 2, 3, 3, 4, 4, 5, 5,  6,  6,  7,  7,  8,  8,   9,   9,  10,  10,  11,  11,  12,   12,   13,   13,     0,     0],
        ddef : new u32(32),
        flmap: new u16(  512),  fltree: [],
        fdmap: new u16(   32),  fdtree: [],
        lmap : new u16(32768),  ltree : [],  ttree:[],
        dmap : new u16(32768),  dtree : [],
        imap : new u16(  512),  itree : [],
        //rev9 : new u16(  512)
        rev15: new u16(1<<15),
        lhst : new u32(286), dhst : new u32( 30), ihst : new u32(19),
        lits : new u32(15000),
        strt : new u16(1<<16),
        prev : new u16(1<<15)
      };
    } ();

    (function(){
      var U = UZIP.F.U;
      var len = 1<<15;
      for(var i=0; i<len; i++) {
        var x = i;
        x = (((x & 0xaaaaaaaa) >>> 1) | ((x & 0x55555555) << 1));
        x = (((x & 0xcccccccc) >>> 2) | ((x & 0x33333333) << 2));
        x = (((x & 0xf0f0f0f0) >>> 4) | ((x & 0x0f0f0f0f) << 4));
        x = (((x & 0xff00ff00) >>> 8) | ((x & 0x00ff00ff) << 8));
        U.rev15[i] = (((x >>> 16) | (x << 16)))>>>17;
      }
  
      function pushV(tgt, n, sv) {  while(n--!=0) tgt.push(0,sv);  }
  
      for(var i=0; i<32; i++) {  U.ldef[i]=(U.of0[i]<<3)|U.exb[i];  U.ddef[i]=(U.df0[i]<<4)|U.dxb[i];  }
  
      pushV(U.fltree, 144, 8);  pushV(U.fltree, 255-143, 9);  pushV(U.fltree, 279-255, 7);  pushV(U.fltree,287-279,8);
      /*
        var i = 0;
        for(; i<=143; i++) U.fltree.push(0,8);
        for(; i<=255; i++) U.fltree.push(0,9);
        for(; i<=279; i++) U.fltree.push(0,7);
        for(; i<=287; i++) U.fltree.push(0,8);
        */
      UZIP.F.makeCodes(U.fltree, 9);
      UZIP.F.codes2map(U.fltree, 9, U.flmap);
      UZIP.F.revCodes (U.fltree, 9)
  
      pushV(U.fdtree,32,5);
      //for(i=0;i<32; i++) U.fdtree.push(0,5);
      UZIP.F.makeCodes(U.fdtree, 5);
      UZIP.F.codes2map(U.fdtree, 5, U.fdmap);
      UZIP.F.revCodes (U.fdtree, 5)
  
      pushV(U.itree,19,0);  pushV(U.ltree,286,0);  pushV(U.dtree,30,0);  pushV(U.ttree,320,0);
      /*
        for(var i=0; i< 19; i++) U.itree.push(0,0);
        for(var i=0; i<286; i++) U.ltree.push(0,0);
        for(var i=0; i< 30; i++) U.dtree.push(0,0);
        for(var i=0; i<320; i++) U.ttree.push(0,0);
        */
    })()
    `))}function generateWorkerScript(){return createWorker(`
    let scriptImported = false
    self.addEventListener('message', async (e) => {
      const { file, id, imageCompressionLibUrl, options } = e.data
      options.onProgress = (progress) => self.postMessage({ progress, id })
      try {
        if (!scriptImported) {
          // console.log('[worker] importScripts', imageCompressionLibUrl)
          self.importScripts(imageCompressionLibUrl)
          scriptImported = true
        }
        // console.log('[worker] self', self)
        const compressedFile = await imageCompression(file, options)
        self.postMessage({ file: compressedFile, id })
      } catch (e) {
        // console.error('[worker] error', e)
        self.postMessage({ error: e.message + '\\n' + e.stack, id })
      }
    })
  `)}function compressOnWebWorker(n,e){return new Promise(function(r,i){var s=cnt+=1;imageCompressionLibUrl||(imageCompressionLibUrl=generateLib()),worker||(worker=generateWorkerScript()),worker.addEventListener("message",function a(c){if(c.data.id===s){if(e.signal&&e.signal.aborted)return;if(c.data.progress!==void 0)return void e.onProgress(c.data.progress);worker.removeEventListener("message",a),c.data.error&&i(new Error(c.data.error)),r(c.data.file)}}),worker.addEventListener("error",i),e.signal&&e.signal.addEventListener("abort",function(){worker.terminate(),i(e.signal.reason)}),worker.postMessage({file:n,id:s,imageCompressionLibUrl,options:_objectSpread2(_objectSpread2({},e),{},{onProgress:void 0,signal:void 0})})})}function imageCompression(n,e){return new Promise(function(r,i){var s,a,c,u,h,d;if(s=_objectSpread2({},e),c=0,u=s.onProgress,s.maxSizeMB=s.maxSizeMB||Number.POSITIVE_INFINITY,h=typeof s.useWebWorker!="boolean"||s.useWebWorker,delete s.useWebWorker,s.onProgress=function(_){c=_,typeof u=="function"&&u(c)},!(n instanceof Blob||n instanceof CustomFile))return i(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(n.type))return i(new Error("The file given is not an image"));if(d=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope,!h||typeof Worker!="function"||d)return compress(n,s).then(function(_){try{return a=_,m.call(this)}catch(he){return i(he)}}.bind(this),i);var f=function(){try{return m.call(this)}catch(_){return i(_)}}.bind(this),g=function(he){try{return compress(n,s).then(function(ve){try{return a=ve,f()}catch(b){return i(b)}},i)}catch(ve){return i(ve)}};try{return compressOnWebWorker(n,s).then(function(_){try{return a=_,f()}catch{return g()}},g)}catch{g()}function m(){try{a.name=n.name,a.lastModified=n.lastModified}catch{}return r(a)}})}imageCompression.getDataUrlFromFile=getDataUrlFromFile,imageCompression.getFilefromDataUrl=getFilefromDataUrl,imageCompression.loadImage=loadImage,imageCompression.drawImageInCanvas=drawImageInCanvas,imageCompression.drawFileInCanvas=drawFileInCanvas,imageCompression.canvasToFile=canvasToFile,imageCompression.getExifOrientation=getExifOrientation,imageCompression.handleMaxWidthOrHeight=handleMaxWidthOrHeight,imageCompression.followExifOrientation=followExifOrientation,imageCompression.cleanupCanvasMemory=cleanupCanvasMemory,imageCompression.isAutoOrientationInBrowser=isAutoOrientationInBrowser,imageCompression.approximateBelowMaximumCanvasSizeOfBrowser=approximateBelowMaximumCanvasSizeOfBrowser,imageCompression.getBrowserName=getBrowserName,imageCompression.version="2.0.0";const compressImage=async n=>{console.log("originalFile instanceof Blob",n instanceof Blob),console.log(`originalFile size ${n.size/1024/1024} MB`);const e={maxSizeMB:.08,maxWidthOrHeight:1920,useWebWorker:!0,fileType:"image/jpeg",maxIteration:55,alwaysKeepResolution:!0};try{const r=await imageCompression(n,e);return console.log("compressedFile instanceof Blob",r instanceof Blob),console.log(`compressedFile size ${r.size/1024/1024} MB`),r}catch(r){console.log(r)}},uploadFile=async(n,e)=>{const r=ref(storage,`user-images/${e}`),i=await compressImage(n);return await uploadBytes(r,i),getDownloadURL(r)},randomNum=n=>Math.floor(Math.random()*n),randomString=n=>{const e="a".charCodeAt(0),r=26;let i="";for(let s=0;s<n;s++){const a=e+randomNum(r);i+=String.fromCharCode(a)}return i},subscriber_queue=[];function readable(n,e){return{subscribe:writable(n,e).subscribe}}function writable(n,e=noop$1){let r;const i=new Set;function s(u){if(safe_not_equal(n,u)&&(n=u,r)){const h=!subscriber_queue.length;for(const d of i)d[1](),subscriber_queue.push(d,n);if(h){for(let d=0;d<subscriber_queue.length;d+=2)subscriber_queue[d][0](subscriber_queue[d+1]);subscriber_queue.length=0}}}function a(u){s(u(n))}function c(u,h=noop$1){const d=[u,h];return i.add(d),i.size===1&&(r=e(s)||noop$1),u(n),()=>{i.delete(d),i.size===0&&(r(),r=null)}}return{set:s,update:a,subscribe:c}}const marketplaces=readable(["Motorola Hiper","Motorola Del Siglo","Motorola Alto","TechStore Del Bosque","Claro Hiper","Claro San Mart\xEDn","Claro Peatonal","Claro Alto"]);var AddTicketButton_svelte_svelte_type_style_lang="";function create_default_slot$2(n){let e,r,i,s,a,c,u,h,d,f;function g(ve){n[10](ve)}let m={name:"lote"};n[2]!==void 0&&(m.value=n[2]),i=new Input({props:m}),binding_callbacks.push(()=>bind(i,"value",g));function _(ve){n[11](ve)}let he={items:n[5]};return n[3]!==void 0&&(he.value=n[3]),h=new Select({props:he}),binding_callbacks.push(()=>bind(h,"value",_)),{c(){e=element("label"),e.textContent="N\xFAmero de lote",r=space(),create_component(i.$$.fragment),a=space(),c=element("label"),c.textContent="Local",u=space(),create_component(h.$$.fragment),attr(e,"for",""),attr(e,"class","svelte-1l42czz"),attr(c,"for",""),attr(c,"class","svelte-1l42czz")},m(ve,b){insert(ve,e,b),insert(ve,r,b),mount_component(i,ve,b),insert(ve,a,b),insert(ve,c,b),insert(ve,u,b),mount_component(h,ve,b),f=!0},p(ve,b){const Se={};!s&&b&4&&(s=!0,Se.value=ve[2],add_flush_callback(()=>s=!1)),i.$set(Se);const et={};b&32&&(et.items=ve[5]),!d&&b&8&&(d=!0,et.value=ve[3],add_flush_callback(()=>d=!1)),h.$set(et)},i(ve){f||(transition_in(i.$$.fragment,ve),transition_in(h.$$.fragment,ve),f=!0)},o(ve){transition_out(i.$$.fragment,ve),transition_out(h.$$.fragment,ve),f=!1},d(ve){ve&&detach(e),ve&&detach(r),destroy_component(i,ve),ve&&detach(a),ve&&detach(c),ve&&detach(u),destroy_component(h,ve)}}}function create_fragment$b(n){let e,r,i,s,a,c,u,h,d,f,g,m,_;function he(b){n[12](b)}let ve={name:"modal1",title:"Nuevo Ticket",acceptText:"Subir",denyText:"Cancelar",$$slots:{default:[create_default_slot$2]},$$scope:{ctx:n}};return n[1]!==void 0&&(ve.shown=n[1]),d=new Modal({props:ve}),binding_callbacks.push(()=>bind(d,"shown",he)),d.$on("approve",n[7]),{c(){e=element("div"),r=element("input"),i=space(),s=element("label"),a=text(`Nuevo Ticket
    `),c=element("i"),h=space(),create_component(d.$$.fragment),attr(r,"type","file"),attr(r,"id","file-input"),attr(r,"accept","image/*"),attr(r,"capture","environment"),attr(r,"class","svelte-1l42czz"),attr(c,"class","plus icon"),attr(s,"for","file-input"),attr(s,"class",u=null_to_empty("ui inverted positive right labeled icon button"+n[4])+" svelte-1l42czz"),attr(e,"id","file-input-container"),attr(e,"class","svelte-1l42czz")},m(b,Se){insert(b,e,Se),append(e,r),append(e,i),append(e,s),append(s,a),append(s,c),insert(b,h,Se),mount_component(d,b,Se),g=!0,m||(_=[listen(r,"change",n[9]),listen(r,"change",n[6])],m=!0)},p(b,[Se]){(!g||Se&16&&u!==(u=null_to_empty("ui inverted positive right labeled icon button"+b[4])+" svelte-1l42czz"))&&attr(s,"class",u);const et={};Se&32812&&(et.$$scope={dirty:Se,ctx:b}),!f&&Se&2&&(f=!0,et.shown=b[1],add_flush_callback(()=>f=!1)),d.$set(et)},i(b){g||(transition_in(d.$$.fragment,b),g=!0)},o(b){transition_out(d.$$.fragment,b),g=!1},d(b){b&&detach(e),b&&detach(h),destroy_component(d,b),m=!1,run_all(_)}}}function instance$b(n,e,r){let i,s;component_subscribe(n,marketplaces,et=>r(5,s=et));let a,c=!1,u="",h="",{loading:d}=e;const f=createEventDispatcher(),g=()=>{a&&a[0]&&r(1,c=!0)},m=async et=>{const Pe=Da(Va(firestore,"tickets"));return yl(Pe,{...et,id:Pe.id})},_=()=>{if(a&&a[0]){f("add-start");const et=auth.currentUser.uid+"-id-"+randomString(7);uploadFile(a[0],et).then(Pe=>{const mt={id:"",filename:et,business_name:u,state:STATE.PENDING,created_at:Number(new Date),updated_at:Number(new Date),marketplace:h,creator_email:auth.currentUser.email,creator_uid:auth.currentUser.uid,src:Pe,deleted:!1};return m(mt)}).then(()=>{console.log("Finalmente, todo subido lindito, na locura")}).catch(Pe=>{console.log("There was a problem uploading the file.",Pe)}).finally(()=>{console.log("Finally block running"),f("added"),r(2,u="")})}r(0,a=null),r(1,c=!1)};function he(){a=this.files,r(0,a)}function ve(et){u=et,r(2,u)}function b(et){h=et,r(3,h)}function Se(et){c=et,r(1,c)}return n.$$set=et=>{"loading"in et&&r(8,d=et.loading)},n.$$.update=()=>{n.$$.dirty&256&&r(4,i=d?" loading ":"")},[a,c,u,h,i,s,g,_,d,he,ve,b,Se]}class AddTicketButton extends SvelteComponent{constructor(e){super(),init(this,e,instance$b,create_fragment$b,safe_not_equal,{loading:8})}}function create_fragment$a(n){let e,r,i,s,a,c;return{c(){e=element("div"),r=element("div"),i=element("i"),s=text(`
    No hay tickets en la seccion "`),a=text(n[0]),c=text('"'),attr(i,"class","info circle icon"),attr(r,"class","ui icon header"),attr(e,"class","ui placeholder segment")},m(u,h){insert(u,e,h),append(e,r),append(r,i),append(r,s),append(r,a),append(r,c)},p(u,[h]){h&1&&set_data(a,u[0])},i:noop$1,o:noop$1,d(u){u&&detach(e)}}}function instance$a(n,e,r){let{sectionName:i}=e;return n.$$set=s=>{"sectionName"in s&&r(0,i=s.sectionName)},[i]}class EmptySection extends SvelteComponent{constructor(e){super(),init(this,e,instance$a,create_fragment$a,safe_not_equal,{sectionName:0})}}const fromStateToStateName=n=>({[STATE.PENDING]:"Pendientes",[STATE.ALERT]:"En Alerta",[STATE.APPROVED]:"Aprobados",[STATE.CANCELLED]:"Cancelados"})[n];function create_if_block_1$3(n){let e,r,i;return r=new Button({props:{layout:TYPE.DANGER,$$slots:{default:[create_default_slot_2]},$$scope:{ctx:n}}}),r.$on("click",n[6]),{c(){e=element("div"),create_component(r.$$.fragment),attr(e,"class","column")},m(s,a){insert(s,e,a),mount_component(r,e,null),i=!0},p(s,a){const c={};a&65544&&(c.$$scope={dirty:a,ctx:s}),r.$set(c)},i(s){i||(transition_in(r.$$.fragment,s),i=!0)},o(s){transition_out(r.$$.fragment,s),i=!1},d(s){s&&detach(e),destroy_component(r)}}}function create_default_slot_2(n){let e;return{c(){e=text(n[3])},m(r,i){insert(r,e,i)},p(r,i){i&8&&set_data(e,r[3])},d(r){r&&detach(e)}}}function create_if_block$5(n){let e,r,i;return r=new Button({props:{$$slots:{default:[create_default_slot_1]},$$scope:{ctx:n}}}),r.$on("click",n[5]),{c(){e=element("div"),create_component(r.$$.fragment),attr(e,"class","column")},m(s,a){insert(s,e,a),mount_component(r,e,null),i=!0},p(s,a){const c={};a&65552&&(c.$$scope={dirty:a,ctx:s}),r.$set(c)},i(s){i||(transition_in(r.$$.fragment,s),i=!0)},o(s){transition_out(r.$$.fragment,s),i=!1},d(s){s&&detach(e),destroy_component(r)}}}function create_default_slot_1(n){let e;return{c(){e=text(n[4])},m(r,i){insert(r,e,i)},p(r,i){i&16&&set_data(e,r[4])},d(r){r&&detach(e)}}}function create_default_slot$1(n){let e,r,i,s,a;function c(h){n[8](h)}let u={name:"observation"};return n[1]!==void 0&&(u.value=n[1]),i=new Input({props:u}),binding_callbacks.push(()=>bind(i,"value",c)),{c(){e=element("label"),e.textContent="Observaci\xF3n:",r=space(),create_component(i.$$.fragment),attr(e,"for","")},m(h,d){insert(h,e,d),insert(h,r,d),mount_component(i,h,d),a=!0},p(h,d){const f={};!s&&d&2&&(s=!0,f.value=h[1],add_flush_callback(()=>s=!1)),i.$set(f)},i(h){a||(transition_in(i.$$.fragment,h),a=!0)},o(h){transition_out(i.$$.fragment,h),a=!1},d(h){h&&detach(e),h&&detach(r),destroy_component(i,h)}}}function create_fragment$9(n){let e,r,i,s,a,c,u,h=n[3]&&create_if_block_1$3(n),d=n[4]&&create_if_block$5(n);function f(m){n[9](m)}let g={name:"modal2",title:"Lote: "+n[0].business_name,acceptText:n[3],denyText:"Cancelar",$$slots:{default:[create_default_slot$1]},$$scope:{ctx:n}};return n[2]!==void 0&&(g.shown=n[2]),a=new Modal({props:g}),binding_callbacks.push(()=>bind(a,"shown",f)),a.$on("approve",n[7]),{c(){e=element("div"),r=element("div"),h&&h.c(),i=space(),d&&d.c(),s=space(),create_component(a.$$.fragment),attr(r,"class","row"),attr(e,"class","ui grid equal width")},m(m,_){insert(m,e,_),append(e,r),h&&h.m(r,null),append(r,i),d&&d.m(r,null),insert(m,s,_),mount_component(a,m,_),u=!0},p(m,[_]){m[3]?h?(h.p(m,_),_&8&&transition_in(h,1)):(h=create_if_block_1$3(m),h.c(),transition_in(h,1),h.m(r,i)):h&&(group_outros(),transition_out(h,1,1,()=>{h=null}),check_outros()),m[4]?d?(d.p(m,_),_&16&&transition_in(d,1)):(d=create_if_block$5(m),d.c(),transition_in(d,1),d.m(r,null)):d&&(group_outros(),transition_out(d,1,1,()=>{d=null}),check_outros());const he={};_&1&&(he.title="Lote: "+m[0].business_name),_&8&&(he.acceptText=m[3]),_&65538&&(he.$$scope={dirty:_,ctx:m}),!c&&_&4&&(c=!0,he.shown=m[2],add_flush_callback(()=>c=!1)),a.$set(he)},i(m){u||(transition_in(h),transition_in(d),transition_in(a.$$.fragment,m),u=!0)},o(m){transition_out(h),transition_out(d),transition_out(a.$$.fragment,m),u=!1},d(m){m&&detach(e),h&&h.d(),d&&d.d(),m&&detach(s),destroy_component(a,m)}}}function instance$9(n,e,r){let i,s,{ticket:a}=e,c,u=!1;const h=createEventDispatcher(),d={[STATE.PENDING]:"Aprobar",[STATE.ALERT]:"Aprobar",[STATE.APPROVED]:"",[STATE.CANCELLED]:"Marcar como pendiente"},f={[STATE.PENDING]:"Alertar",[STATE.ALERT]:"Cancelar",[STATE.APPROVED]:"Alertar",[STATE.CANCELLED]:""},g={[STATE.PENDING]:STATE.ALERT,[STATE.ALERT]:STATE.CANCELLED,[STATE.APPROVED]:STATE.ALERT},m={[STATE.PENDING]:STATE.APPROVED,[STATE.ALERT]:STATE.APPROVED,[STATE.CANCELLED]:STATE.PENDING},_=(Pe,mt)=>{jQuery("body").toast({message:`Lote ${Pe.business_name} ha sido movido a "${fromStateToStateName(Pe.state)}"`,showProgress:"bottom",class:mt,position:"bottom right"})},he=async()=>{const Pe=Da(firestore,`tickets/${a.id}`),mt={...a,state:m[a.state]};await pl(Pe,{...mt}),r(2,u=!1),r(1,c=""),h("accept"),_(mt,"success")},ve=()=>{r(2,u=!0)},b=async()=>{const Pe=Da(firestore,`tickets/${a.id}`),mt=a;mt.state=g[a.state],mt.state===STATE.ALERT&&(mt.alert_reason=c),mt.state===STATE.CANCELLED&&(mt.cancel_reason=c),await pl(Pe,{...mt}),r(2,u=!1),r(1,c=""),h("reject"),_(mt,"warning")};function Se(Pe){c=Pe,r(1,c)}function et(Pe){u=Pe,r(2,u)}return n.$$set=Pe=>{"ticket"in Pe&&r(0,a=Pe.ticket)},n.$$.update=()=>{n.$$.dirty&1&&r(4,i=d[a.state]),n.$$.dirty&1&&r(3,s=f[a.state])},[a,c,u,s,i,he,ve,b,Se,et]}class AcceptRejectButtons extends SvelteComponent{constructor(e){super(),init(this,e,instance$9,create_fragment$9,safe_not_equal,{ticket:0})}}const getHourFromJSDate=n=>n.toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit"}),getDateFromJSDate=n=>{const e=n.toLocaleDateString("es-AR",{day:"2-digit"}),r=n.toLocaleDateString("es-AR",{month:"2-digit"}),i=n.toLocaleDateString("es-AR",{year:"numeric"});return`${e}/${r}/${i}`},fromTimestampToHumanReadableDate=n=>{const e=new Date(n);return getDateFromJSDate(e)+" a las "+getHourFromJSDate(e)};var TicketCard_svelte_svelte_type_style_lang="";function create_if_block_3(n){let e,r;return e=new AcceptRejectButtons({props:{ticket:n[0]}}),e.$on("accept",n[9]),e.$on("reject",n[10]),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},p(i,s){const a={};s&1&&(a.ticket=i[0]),e.$set(a)},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_if_block_2(n){let e,r,i,s,a=n[0].alert_reason+"",c;return{c(){e=element("div"),r=element("span"),i=element("em"),s=text(" En alerta: "),c=text(a),attr(i,"data-emoji","warning"),attr(e,"class","extra content")},m(u,h){insert(u,e,h),append(e,r),append(r,i),append(r,s),append(r,c)},p(u,h){h&1&&a!==(a=u[0].alert_reason+"")&&set_data(c,a)},d(u){u&&detach(e)}}}function create_if_block_1$2(n){let e,r,i,s,a=n[0].cancel_reason+"",c;return{c(){e=element("div"),r=element("span"),i=element("em"),s=text(" Cancelado: "),c=text(a),attr(i,"data-emoji","x"),attr(e,"class","extra content")},m(u,h){insert(u,e,h),append(e,r),append(r,i),append(r,s),append(r,c)},p(u,h){h&1&&a!==(a=u[0].cancel_reason+"")&&set_data(c,a)},d(u){u&&detach(e)}}}function create_if_block$4(n){let e,r,i;return{c(){e=element("div"),e.innerHTML='<i class="x icon"></i>',attr(e,"class","ui icon topright svelte-1o1qiir")},m(s,a){insert(s,e,a),r||(i=listen(e,"click",n[7]),r=!0)},p:noop$1,d(s){s&&detach(e),r=!1,i()}}}function create_default_slot(n){let e,r,i,s,a,c,u,h=n[0].business_name+"",d,f,g,m,_,he;function ve(Se){n[11](Se)}let b={name:"confirmDeleteText"};return n[4]!==void 0&&(b.value=n[4]),m=new Input({props:b}),binding_callbacks.push(()=>bind(m,"value",ve)),{c(){e=element("div"),e.textContent=`Est\xE1s seguro que deseas eliminar este ticket? Luego de eliminarlo, no ser\xE1
    posible recuperarlo.`,r=space(),i=element("br"),s=space(),a=element("label"),c=text("Escribe el n\xFAmero de lote ("),u=element("b"),d=text(h),f=text(") para confirmar"),g=space(),create_component(m.$$.fragment),attr(a,"for","confirmDeleteText")},m(Se,et){insert(Se,e,et),insert(Se,r,et),insert(Se,i,et),insert(Se,s,et),insert(Se,a,et),append(a,c),append(a,u),append(u,d),append(a,f),insert(Se,g,et),mount_component(m,Se,et),he=!0},p(Se,et){(!he||et&1)&&h!==(h=Se[0].business_name+"")&&set_data(d,h);const Pe={};!_&&et&16&&(_=!0,Pe.value=Se[4],add_flush_callback(()=>_=!1)),m.$set(Pe)},i(Se){he||(transition_in(m.$$.fragment,Se),he=!0)},o(Se){transition_out(m.$$.fragment,Se),he=!1},d(Se){Se&&detach(e),Se&&detach(r),Se&&detach(i),Se&&detach(s),Se&&detach(a),Se&&detach(g),destroy_component(m,Se)}}}function create_fragment$8(n){var Ht,er;let e,r,i,s,a,c=((Ht=n[0])==null?void 0:Ht.business_name)+"",u,h,d,f,g,m=fromTimestampToHumanReadableDate((er=n[0])==null?void 0:er.created_at)+"",_,he,ve,b,Se=n[0].marketplace+"",et,Pe,mt,ot,Ue,Be,Ve,Le,gt,vt,yt,wt,St,Nt,_t=n[5]&&create_if_block_3(n);function Ot(Dt,Wt){if(Dt[0].cancel_reason&&Dt[0].state===STATE.CANCELLED)return create_if_block_1$2;if(Dt[0].alert_reason&&Dt[0].state===STATE.ALERT)return create_if_block_2}let Mt=Ot(n),Ft=Mt&&Mt(n),kt=n[2]&&create_if_block$4(n);function xt(Dt){n[12](Dt)}let On={name:"modal3",title:"Eliminar Ticket?",acceptText:"Eliminar",denyText:"Cancelar",$$slots:{default:[create_default_slot]},$$scope:{ctx:n}};return n[3]!==void 0&&(On.shown=n[3]),vt=new Modal({props:On}),binding_callbacks.push(()=>bind(vt,"shown",xt)),vt.$on("approve",n[8]),{c(){_t&&_t.c(),e=space(),r=element("div"),i=element("div"),s=element("span"),a=text("Lote: "),u=text(c),h=space(),d=element("div"),f=element("div"),g=text("Creado: "),_=text(m),he=space(),ve=element("div"),b=text("Local: "),et=text(Se),Pe=space(),Ft&&Ft.c(),mt=space(),ot=element("div"),Ue=element("img"),Ve=space(),kt&&kt.c(),gt=space(),create_component(vt.$$.fragment),attr(s,"class","header"),attr(f,"class","date"),attr(ve,"class","date"),attr(d,"class","meta"),attr(i,"class","content"),src_url_equal(Ue.src,Be=n[1])||attr(Ue,"src",Be),attr(Ue,"alt","Current ticket"),attr(ot,"class","image relative svelte-1o1qiir"),attr(r,"class",Le=null_to_empty("ui fluid card "+(n[2]?"":"loading"))+" svelte-1o1qiir")},m(Dt,Wt){_t&&_t.m(Dt,Wt),insert(Dt,e,Wt),insert(Dt,r,Wt),append(r,i),append(i,s),append(s,a),append(s,u),append(i,h),append(i,d),append(d,f),append(f,g),append(f,_),append(d,he),append(d,ve),append(ve,b),append(ve,et),append(r,Pe),Ft&&Ft.m(r,null),append(r,mt),append(r,ot),append(ot,Ue),append(ot,Ve),kt&&kt.m(ot,null),insert(Dt,gt,Wt),mount_component(vt,Dt,Wt),wt=!0,St||(Nt=listen(Ue,"load",n[6]),St=!0)},p(Dt,[Wt]){var nr,tr;Dt[5]?_t?(_t.p(Dt,Wt),Wt&32&&transition_in(_t,1)):(_t=create_if_block_3(Dt),_t.c(),transition_in(_t,1),_t.m(e.parentNode,e)):_t&&(group_outros(),transition_out(_t,1,1,()=>{_t=null}),check_outros()),(!wt||Wt&1)&&c!==(c=((nr=Dt[0])==null?void 0:nr.business_name)+"")&&set_data(u,c),(!wt||Wt&1)&&m!==(m=fromTimestampToHumanReadableDate((tr=Dt[0])==null?void 0:tr.created_at)+"")&&set_data(_,m),(!wt||Wt&1)&&Se!==(Se=Dt[0].marketplace+"")&&set_data(et,Se),Mt===(Mt=Ot(Dt))&&Ft?Ft.p(Dt,Wt):(Ft&&Ft.d(1),Ft=Mt&&Mt(Dt),Ft&&(Ft.c(),Ft.m(r,mt))),(!wt||Wt&2&&!src_url_equal(Ue.src,Be=Dt[1]))&&attr(Ue,"src",Be),Dt[2]?kt?kt.p(Dt,Wt):(kt=create_if_block$4(Dt),kt.c(),kt.m(ot,null)):kt&&(kt.d(1),kt=null),(!wt||Wt&4&&Le!==(Le=null_to_empty("ui fluid card "+(Dt[2]?"":"loading"))+" svelte-1o1qiir"))&&attr(r,"class",Le);const Vt={};Wt&16401&&(Vt.$$scope={dirty:Wt,ctx:Dt}),!yt&&Wt&8&&(yt=!0,Vt.shown=Dt[3],add_flush_callback(()=>yt=!1)),vt.$set(Vt)},i(Dt){wt||(transition_in(_t),transition_in(vt.$$.fragment,Dt),wt=!0)},o(Dt){transition_out(_t),transition_out(vt.$$.fragment,Dt),wt=!1},d(Dt){_t&&_t.d(Dt),Dt&&detach(e),Dt&&detach(r),Ft&&Ft.d(),kt&&kt.d(),Dt&&detach(gt),destroy_component(vt,Dt),St=!1,Nt()}}}function instance$8(n,e,r){const i=createEventDispatcher();let{ticket:s}=e,a=!1,c=!1,u="",h;const d=()=>{r(2,a=!0)};let f=!1;onMount(async()=>{const Se=await auth.currentUser.getIdTokenResult();r(5,f=Boolean(Se.claims.admin))});const g=()=>{r(3,c=!0)},m=async()=>{if(u===s.business_name){const Se=Da(firestore,`tickets/${s.id}`),et=s;et.deleted=!0,await pl(Se,{...et}),r(3,c=!1),r(4,u=""),i("delete",{id:s.id})}};function _(Se){bubble.call(this,n,Se)}function he(Se){bubble.call(this,n,Se)}function ve(Se){u=Se,r(4,u)}function b(Se){c=Se,r(3,c)}return n.$$set=Se=>{"ticket"in Se&&r(0,s=Se.ticket)},n.$$.update=()=>{n.$$.dirty&3&&s.src!=h&&(r(2,a=!1),r(1,h=s.src))},[s,h,a,c,u,f,d,g,m,_,he,ve,b]}class TicketCard extends SvelteComponent{constructor(e){super(),init(this,e,instance$8,create_fragment$8,safe_not_equal,{ticket:0})}}function get_each_context$1(n,e,r){const i=n.slice();return i[3]=e[r],i}function create_else_block$2(n){let e,r;return e=new EmptySection({props:{sectionName:fromStateToStateName(n[1])}}),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},p(i,s){const a={};s&2&&(a.sectionName=fromStateToStateName(i[1])),e.$set(a)},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_if_block$3(n){let e,r,i=n[0],s=[];for(let c=0;c<i.length;c+=1)s[c]=create_each_block$1(get_each_context$1(n,i,c));const a=c=>transition_out(s[c],1,1,()=>{s[c]=null});return{c(){for(let c=0;c<s.length;c+=1)s[c].c();e=empty()},m(c,u){for(let h=0;h<s.length;h+=1)s[h].m(c,u);insert(c,e,u),r=!0},p(c,u){if(u&5){i=c[0];let h;for(h=0;h<i.length;h+=1){const d=get_each_context$1(c,i,h);s[h]?(s[h].p(d,u),transition_in(s[h],1)):(s[h]=create_each_block$1(d),s[h].c(),transition_in(s[h],1),s[h].m(e.parentNode,e))}for(group_outros(),h=i.length;h<s.length;h+=1)a(h);check_outros()}},i(c){if(!r){for(let u=0;u<i.length;u+=1)transition_in(s[u]);r=!0}},o(c){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)transition_out(s[u]);r=!1},d(c){destroy_each(s,c),c&&detach(e)}}}function create_each_block$1(n){let e,r;return e=new TicketCard({props:{ticket:n[3]}}),e.$on("delete",n[2]),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},p(i,s){const a={};s&1&&(a.ticket=i[3]),e.$set(a)},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_fragment$7(n){let e,r,i,s;const a=[create_if_block$3,create_else_block$2],c=[];function u(h,d){return h[0].length>0?0:1}return r=u(n),i=c[r]=a[r](n),{c(){e=element("div"),i.c(),attr(e,"class","ui container")},m(h,d){insert(h,e,d),c[r].m(e,null),s=!0},p(h,[d]){let f=r;r=u(h),r===f?c[r].p(h,d):(group_outros(),transition_out(c[f],1,1,()=>{c[f]=null}),check_outros(),i=c[r],i?i.p(h,d):(i=c[r]=a[r](h),i.c()),transition_in(i,1),i.m(e,null))},i(h){s||(transition_in(i),s=!0)},o(h){transition_out(i),s=!1},d(h){h&&detach(e),c[r].d()}}}function instance$7(n,e,r){let{tickets:i}=e,{state:s}=e;const a=c=>{const u=c.detail.id,h=i.findIndex(d=>d.id===u);i.splice(h,1),r(0,i)};return n.$$set=c=>{"tickets"in c&&r(0,i=c.tickets),"state"in c&&r(1,s=c.state)},[i,s,a]}class UserTicketList extends SvelteComponent{constructor(e){super(),init(this,e,instance$7,create_fragment$7,safe_not_equal,{tickets:0,state:1})}}var FilterTabs_svelte_svelte_type_style_lang="";function create_fragment$6(n){let e,r,i,s,a,c,u,h,d,f,g,m,_,he,ve,b,Se,et,Pe,mt,ot,Ue;return{c(){e=element("div"),r=element("span"),i=element("em"),s=text("Pendientes"),c=space(),u=element("span"),h=element("em"),d=text("En Alerta"),g=space(),m=element("span"),_=element("em"),he=text("Aprobados"),b=space(),Se=element("span"),et=element("em"),Pe=text("Cancelados"),attr(i,"data-emoji","hourglass"),attr(i,"class","svelte-6jeuwh"),attr(r,"class",a=n[0]===STATE.PENDING?"item active":"item"),attr(r,"data-tab","first"),attr(h,"data-emoji","rotating_light"),attr(h,"class","svelte-6jeuwh"),attr(u,"class",f=n[0]===STATE.ALERT?"item active":"item"),attr(u,"data-tab","second"),attr(_,"data-emoji","white_check_mark"),attr(_,"class","svelte-6jeuwh"),attr(m,"class",ve=n[0]===STATE.APPROVED?"item active":"item"),attr(m,"data-tab","third"),attr(et,"data-emoji","x"),attr(et,"class","svelte-6jeuwh"),attr(Se,"class",mt=n[0]===STATE.CANCELLED?"item active":"item"),attr(Se,"data-tab","fourth"),attr(e,"class","ui stackable container menu")},m(Be,Ve){insert(Be,e,Ve),append(e,r),append(r,i),append(r,s),append(e,c),append(e,u),append(u,h),append(u,d),append(e,g),append(e,m),append(m,_),append(m,he),append(e,b),append(e,Se),append(Se,et),append(Se,Pe),ot||(Ue=[listen(r,"click",function(){is_function(n[1])&&n[1].apply(this,arguments)}),listen(u,"click",function(){is_function(n[2])&&n[2].apply(this,arguments)}),listen(m,"click",function(){is_function(n[3])&&n[3].apply(this,arguments)}),listen(Se,"click",function(){is_function(n[4])&&n[4].apply(this,arguments)})],ot=!0)},p(Be,[Ve]){n=Be,Ve&1&&a!==(a=n[0]===STATE.PENDING?"item active":"item")&&attr(r,"class",a),Ve&1&&f!==(f=n[0]===STATE.ALERT?"item active":"item")&&attr(u,"class",f),Ve&1&&ve!==(ve=n[0]===STATE.APPROVED?"item active":"item")&&attr(m,"class",ve),Ve&1&&mt!==(mt=n[0]===STATE.CANCELLED?"item active":"item")&&attr(Se,"class",mt)},i:noop$1,o:noop$1,d(Be){Be&&detach(e),ot=!1,run_all(Ue)}}}function instance$6(n,e,r){let{selectedState:i}=e,{onPendingClick:s}=e,{onAlertedClick:a}=e,{onApprovedClick:c}=e,{onCancelledClick:u}=e;return n.$$set=h=>{"selectedState"in h&&r(0,i=h.selectedState),"onPendingClick"in h&&r(1,s=h.onPendingClick),"onAlertedClick"in h&&r(2,a=h.onAlertedClick),"onApprovedClick"in h&&r(3,c=h.onApprovedClick),"onCancelledClick"in h&&r(4,u=h.onCancelledClick)},[i,s,a,c,u]}class FilterTabs extends SvelteComponent{constructor(e){super(),init(this,e,instance$6,create_fragment$6,safe_not_equal,{selectedState:0,onPendingClick:1,onAlertedClick:2,onApprovedClick:3,onCancelledClick:4})}}function create_fragment$5(n){let e,r;return e=new FilterTabs({props:{selectedState:n[0],onPendingClick:n[1],onAlertedClick:n[2],onApprovedClick:n[3],onCancelledClick:n[4]}}),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},p(i,[s]){const a={};s&1&&(a.selectedState=i[0]),e.$set(a)},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function instance$5(n,e,r){let{selectedState:i}=e;const s=()=>{r(0,i=STATE.PENDING)},a=()=>{r(0,i=STATE.ALERT)},c=()=>{r(0,i=STATE.APPROVED)},u=()=>{r(0,i=STATE.CANCELLED)};return n.$$set=h=>{"selectedState"in h&&r(0,i=h.selectedState)},[i,s,a,c,u]}class TicketFilter extends SvelteComponent{constructor(e){super(),init(this,e,instance$5,create_fragment$5,safe_not_equal,{selectedState:0})}}const PAGE_SIZE=8,getTickets=async n=>{const e=[];n.creatorUID&&e.push(Kh("creator_uid","==",n.creatorUID)),n.state&&e.push(Kh("state","==",n.state)),e.push(Qh("created_at","desc")),n.businessName&&e.push(Kh("business_name","==",n.businessName)),e.push(Kh("deleted","==",!1)),n.lastTicket&&e.push(Yh(n.lastTicket)),e.push(Wh(PAGE_SIZE));const r=Uh(Va(firestore,"tickets"),...e);return await wl(r)},fromTicketsSnapshotToTickets=n=>{const e=[];return n.forEach(r=>{e.push(r.data())}),e};function create_fragment$4(n){let e,r,i,s,a;return{c(){e=element("button"),r=text("Ver m\xE1s"),attr(e,"class",i="ui primary basic button"+(n[0]?" loading ":""))},m(c,u){insert(c,e,u),append(e,r),s||(a=listen(e,"click",n[1]),s=!0)},p(c,[u]){u&1&&i!==(i="ui primary basic button"+(c[0]?" loading ":""))&&attr(e,"class",i)},i:noop$1,o:noop$1,d(c){c&&detach(e),s=!1,a()}}}function instance$4(n,e,r){let{loading:i=!1}=e;function s(a){bubble.call(this,n,a)}return n.$$set=a=>{"loading"in a&&r(0,i=a.loading)},[i,s]}class LoadMore extends SvelteComponent{constructor(e){super(),init(this,e,instance$4,create_fragment$4,safe_not_equal,{loading:0})}}var UserPanel_svelte_svelte_type_style_lang="";function create_if_block$2(n){let e,r;return e=new LoadMore({props:{loading:n[1]}}),e.$on("click",n[4]),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},p(i,s){const a={};s&2&&(a.loading=i[1]),e.$set(a)},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_fragment$3(n){let e,r,i,s,a,c,u,h,d,f,g,m;e=new Header({});function _(b){n[7](b)}let he={};n[0]!==void 0&&(he.selectedState=n[0]),s=new TicketFilter({props:he}),binding_callbacks.push(()=>bind(s,"selectedState",_)),u=new UserTicketList({props:{tickets:n[3],state:n[0]}});let ve=!n[2]&&create_if_block$2(n);return g=new AddTicketButton({props:{loading:n[1]}}),g.$on("add-start",n[5]),g.$on("added",n[6]),{c(){create_component(e.$$.fragment),r=space(),i=element("div"),create_component(s.$$.fragment),c=space(),create_component(u.$$.fragment),h=space(),d=element("div"),ve&&ve.c(),f=space(),create_component(g.$$.fragment),attr(d,"class","center-div load-more svelte-181t1lw"),attr(i,"class","main container svelte-181t1lw")},m(b,Se){mount_component(e,b,Se),insert(b,r,Se),insert(b,i,Se),mount_component(s,i,null),append(i,c),mount_component(u,i,null),append(i,h),append(i,d),ve&&ve.m(d,null),append(i,f),mount_component(g,i,null),m=!0},p(b,[Se]){const et={};!a&&Se&1&&(a=!0,et.selectedState=b[0],add_flush_callback(()=>a=!1)),s.$set(et);const Pe={};Se&8&&(Pe.tickets=b[3]),Se&1&&(Pe.state=b[0]),u.$set(Pe),b[2]?ve&&(group_outros(),transition_out(ve,1,1,()=>{ve=null}),check_outros()):ve?(ve.p(b,Se),Se&4&&transition_in(ve,1)):(ve=create_if_block$2(b),ve.c(),transition_in(ve,1),ve.m(d,null));const mt={};Se&2&&(mt.loading=b[1]),g.$set(mt)},i(b){m||(transition_in(e.$$.fragment,b),transition_in(s.$$.fragment,b),transition_in(u.$$.fragment,b),transition_in(ve),transition_in(g.$$.fragment,b),m=!0)},o(b){transition_out(e.$$.fragment,b),transition_out(s.$$.fragment,b),transition_out(u.$$.fragment,b),transition_out(ve),transition_out(g.$$.fragment,b),m=!1},d(b){destroy_component(e,b),b&&detach(r),b&&detach(i),destroy_component(s),destroy_component(u),ve&&ve.d(),destroy_component(g)}}}function instance$3(n,e,r){let i=STATE.PENDING,s=!1,a=!1,c,u=[];const h=()=>(console.log("Reload Tickets Call"),r(1,s=!0),r(2,a=!1),getTickets({state:i,creatorUID:auth.currentUser.uid}).then(_=>{_.forEach(he=>c=he),_.size!=PAGE_SIZE&&r(2,a=!0),r(3,u=fromTicketsSnapshotToTickets(_))}).finally(()=>{r(1,s=!1)})),d=()=>{console.log("On Load More Call"),r(1,s=!0),getTickets({state:i,creatorUID:auth.currentUser.uid,lastTicket:c}).then(_=>{_.forEach(he=>c=he),_.size!=PAGE_SIZE&&r(2,a=!0),r(3,u=[...u,...fromTicketsSnapshotToTickets(_)])}).finally(()=>{r(1,s=!1)})},f=()=>{console.log("On Add Start Call"),r(0,i=STATE.PENDING),r(1,s=!0)},g=()=>{console.log("On TicketAdded Call"),h()};function m(_){i=_,r(0,i)}return n.$$.update=()=>{n.$$.dirty&1&&h(),n.$$.dirty&2&&console.log("LOading: ",s)},[i,s,a,u,d,f,g,m]}class UserPanel extends SvelteComponent{constructor(e){super(),init(this,e,instance$3,create_fragment$3,safe_not_equal,{})}}var AdminTicketList_svelte_svelte_type_style_lang="";function get_each_context(n,e,r){const i=n.slice();return i[5]=e[r],i[7]=r,i}function create_each_block(n){let e,r,i=fromTimestampToHumanReadableDate(n[5].created_at)+"",s,a,c,u=n[5].business_name+"",h,d,f,g=(n[5].marketplace||"No seleccionado")+"",m,_,he,ve=n[5].creator_email+"",b,Se,et,Pe,mt;function ot(){return n[3](n[5])}return{c(){e=element("tr"),r=element("td"),s=text(i),a=space(),c=element("td"),h=text(u),d=space(),f=element("td"),m=text(g),_=space(),he=element("td"),b=text(ve),Se=space(),attr(r,"class","left aligned"),attr(e,"class",et=n[7]===n[1]?" active ":" ")},m(Ue,Be){insert(Ue,e,Be),append(e,r),append(r,s),append(e,a),append(e,c),append(c,h),append(e,d),append(e,f),append(f,m),append(e,_),append(e,he),append(he,b),append(e,Se),Pe||(mt=listen(e,"click",ot),Pe=!0)},p(Ue,Be){n=Ue,Be&1&&i!==(i=fromTimestampToHumanReadableDate(n[5].created_at)+"")&&set_data(s,i),Be&1&&u!==(u=n[5].business_name+"")&&set_data(h,u),Be&1&&g!==(g=(n[5].marketplace||"No seleccionado")+"")&&set_data(m,g),Be&1&&ve!==(ve=n[5].creator_email+"")&&set_data(b,ve),Be&2&&et!==(et=n[7]===n[1]?" active ":" ")&&attr(e,"class",et)},d(Ue){Ue&&detach(e),Pe=!1,mt()}}}function create_fragment$2(n){let e,r,i,s,a=n[0],c=[];for(let u=0;u<a.length;u+=1)c[u]=create_each_block(get_each_context(n,a,u));return{c(){e=element("table"),r=element("thead"),r.innerHTML=`<tr><th class="left aligned">Fecha</th> 
      <th>Lote</th> 
      <th>Local</th> 
      <th>Vendedor</th></tr>`,i=space(),s=element("tbody");for(let u=0;u<c.length;u+=1)c[u].c();attr(e,"class","ui padded selectable celled right aligned table svelte-yrkkan")},m(u,h){insert(u,e,h),append(e,r),append(e,i),append(e,s);for(let d=0;d<c.length;d+=1)c[d].m(s,null)},p(u,[h]){if(h&7){a=u[0];let d;for(d=0;d<a.length;d+=1){const f=get_each_context(u,a,d);c[d]?c[d].p(f,h):(c[d]=create_each_block(f),c[d].c(),c[d].m(s,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=a.length}},i:noop$1,o:noop$1,d(u){u&&detach(e),destroy_each(c,u)}}}function instance$2(n,e,r){let{tickets:i}=e,{selected:s}=e;const a=createEventDispatcher(),c=h=>{a("select",h)},u=h=>c(h);return n.$$set=h=>{"tickets"in h&&r(0,i=h.tickets),"selected"in h&&r(1,s=h.selected)},[i,s,c,u]}class AdminTicketList extends SvelteComponent{constructor(e){super(),init(this,e,instance$2,create_fragment$2,safe_not_equal,{tickets:0,selected:1})}}var SearchButton_svelte_svelte_type_style_lang="",AdminPanel_svelte_svelte_type_style_lang="";function create_if_block_1$1(n){let e,r;return e=new LoadMore({props:{loading:n[4]}}),e.$on("click",n[7]),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},p(i,s){const a={};s&16&&(a.loading=i[4]),e.$set(a)},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_else_block$1(n){let e,r;return e=new EmptySection({props:{sectionName:fromStateToStateName(n[3])}}),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},p(i,s){const a={};s&8&&(a.sectionName=fromStateToStateName(i[3])),e.$set(a)},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_if_block$1(n){let e,r;return e=new TicketCard({props:{ticket:n[1]}}),e.$on("accept",n[8]),e.$on("reject",n[9]),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},p(i,s){const a={};s&2&&(a.ticket=i[1]),e.$set(a)},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_fragment$1(n){let e,r,i,s,a,c,u,h,d,f,g,m,_,he,ve,b,Se,et;e=new Header({});function Pe(Le){n[10](Le)}let mt={};n[3]!==void 0&&(mt.selectedState=n[3]),u=new TicketFilter({props:mt}),binding_callbacks.push(()=>bind(u,"selectedState",Pe)),f=new AdminTicketList({props:{tickets:n[0],selected:n[2]}}),f.$on("select",n[6]);let ot=!n[5]&&create_if_block_1$1(n);const Ue=[create_if_block$1,create_else_block$1],Be=[];function Ve(Le,gt){return Le[1]?0:1}return b=Ve(n),Se=Be[b]=Ue[b](n),{c(){create_component(e.$$.fragment),r=space(),i=element("div"),s=element("div"),a=element("div"),c=element("div"),create_component(u.$$.fragment),d=space(),create_component(f.$$.fragment),g=space(),m=element("div"),ot&&ot.c(),_=space(),he=element("div"),ve=element("div"),Se.c(),attr(m,"class","center-div svelte-4omxk"),attr(c,"class","center"),attr(a,"class","column eleven wide"),attr(he,"class","column five wide"),attr(s,"class","row"),attr(i,"class","ui main grid container svelte-4omxk")},m(Le,gt){mount_component(e,Le,gt),insert(Le,r,gt),insert(Le,i,gt),append(i,s),append(s,a),append(a,c),mount_component(u,c,null),append(c,d),mount_component(f,c,null),append(c,g),append(c,m),ot&&ot.m(m,null),append(s,_),append(s,he),append(he,ve),Be[b].m(ve,null),et=!0},p(Le,[gt]){const vt={};!h&&gt&8&&(h=!0,vt.selectedState=Le[3],add_flush_callback(()=>h=!1)),u.$set(vt);const yt={};gt&1&&(yt.tickets=Le[0]),gt&4&&(yt.selected=Le[2]),f.$set(yt),Le[5]?ot&&(group_outros(),transition_out(ot,1,1,()=>{ot=null}),check_outros()):ot?(ot.p(Le,gt),gt&32&&transition_in(ot,1)):(ot=create_if_block_1$1(Le),ot.c(),transition_in(ot,1),ot.m(m,null));let wt=b;b=Ve(Le),b===wt?Be[b].p(Le,gt):(group_outros(),transition_out(Be[wt],1,1,()=>{Be[wt]=null}),check_outros(),Se=Be[b],Se?Se.p(Le,gt):(Se=Be[b]=Ue[b](Le),Se.c()),transition_in(Se,1),Se.m(ve,null))},i(Le){et||(transition_in(e.$$.fragment,Le),transition_in(u.$$.fragment,Le),transition_in(f.$$.fragment,Le),transition_in(ot),transition_in(Se),et=!0)},o(Le){transition_out(e.$$.fragment,Le),transition_out(u.$$.fragment,Le),transition_out(f.$$.fragment,Le),transition_out(ot),transition_out(Se),et=!1},d(Le){destroy_component(e,Le),Le&&detach(r),Le&&detach(i),destroy_component(u),destroy_component(f),ot&&ot.d(),Be[b].d()}}}function instance$1(n,e,r){let i=[],s,a,c=!1,u=!1,h,d=STATE.PENDING;const f=b=>{s!=b.detail&&(r(1,s=b.detail),r(2,h=i.findIndex(Se=>Se.id===(s==null?void 0:s.id))))},g=()=>{r(4,c=!0),getTickets({state:d,lastTicket:a}).then(b=>{b.forEach(Se=>a=Se),b.size!=PAGE_SIZE&&r(5,u=!0),r(0,i=[...i,...fromTicketsSnapshotToTickets(b)])}).finally(()=>{r(4,c=!1)})},m=()=>{const b=i.findIndex(Se=>Se===s);i.splice(b,1),r(0,i),r(3,d),console.log("Ran once")},_=()=>{m()},he=()=>{m()};function ve(b){d=b,r(3,d)}return n.$$.update=()=>{n.$$.dirty&8&&(console.log("Run"),r(4,c=!0),r(5,u=!1),getTickets({state:d}).then(b=>{b.forEach(Se=>a=Se),b.size!=PAGE_SIZE&&r(5,u=!0),r(0,i=fromTicketsSnapshotToTickets(b))}).finally(()=>{r(4,c=!1)})),n.$$.dirty&7&&(r(2,h=i.findIndex(b=>b.id===(s==null?void 0:s.id))),h===-1&&(r(1,s=i&&i.length>0&&i[0]),r(2,h=i.findIndex(b=>b.id===(s==null?void 0:s.id)))))},[i,s,h,d,c,u,f,g,_,he,ve]}class AdminPanel extends SvelteComponent{constructor(e){super(),init(this,e,instance$1,create_fragment$1,safe_not_equal,{})}}var App_svelte_svelte_type_style_lang="";function create_else_block(n){let e,r;return e=new LoginForm({}),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_if_block_1(n){let e,r;return e=new UserPanel({}),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_if_block(n){let e,r;return e=new AdminPanel({}),{c(){create_component(e.$$.fragment)},m(i,s){mount_component(e,i,s),r=!0},i(i){r||(transition_in(e.$$.fragment,i),r=!0)},o(i){transition_out(e.$$.fragment,i),r=!1},d(i){destroy_component(e,i)}}}function create_fragment(n){let e,r,i,s;const a=[create_if_block,create_if_block_1,create_else_block],c=[];function u(h,d){return h[1]?0:h[0]?1:2}return r=u(n),i=c[r]=a[r](n),{c(){e=element("main"),i.c(),attr(e,"class","svelte-pirsrs")},m(h,d){insert(h,e,d),c[r].m(e,null),s=!0},p(h,[d]){let f=r;r=u(h),r!==f&&(group_outros(),transition_out(c[f],1,1,()=>{c[f]=null}),check_outros(),i=c[r],i||(i=c[r]=a[r](h),i.c()),transition_in(i,1),i.m(e,null))},i(h){s||(transition_in(i),s=!0)},o(h){transition_out(i),s=!1},d(h){h&&detach(e),c[r].d()}}}function instance(n,e,r){let i,s=!1;return onAuthStateChanged(auth,async a=>{if(a){r(0,i=a.uid);const c=await a.getIdTokenResult();r(1,s=Boolean(c.claims.admin))}else r(0,i=void 0)}),[i,s]}class App extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}new App({target:document.getElementById("app")});

var at=Object.defineProperty;var ct=(e,t,n)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var O=(e,t,n)=>(ct(e,typeof t!="symbol"?t+"":t,n),n);import{r as lt,_ as ut,a as ft,c as dt,t as pt,e as ht}from"./index-13831189.js";var cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ur(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),n}const mt={name:"Category",props:{title:{type:String,required:!0},color:{type:String,default:"#ffffff"}},setup(e){return{isHovered:lt(!1),title:e.title,color:e.color}}};function yt(e,t,n,r,s,o){return ft(),dt("div",{class:"category",onMouseover:t[0]||(t[0]=i=>r.isHovered=!0),onMouseleave:t[1]||(t[1]=i=>r.isHovered=!1),style:ht({"border-color":r.color,background:r.color+(r.isHovered?"2a":"12")})},pt(r.title),37)}const fr=ut(mt,[["render",yt],["__scopeId","data-v-e91ed073"]]);class te{constructor(t){O(this,"id");O(this,"name");O(this,"categories");O(this,"description");O(this,"image");O(this,"finishDate");O(this,"article");this.id=t.id,this.name=t.name,this.categories=t.categories,this.description=t.description,this.image=t.image,this.finishDate=t.finishDate,this.article=t.article}loadArticle(){if(this.article)return this.article.load()}}const bt="/profile/assets/al_reyada-a561b6c9.png",gt=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"})),wt="/profile/assets/winter-98001983.gif",Et=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"}));function Ue(e,t){return function(){return e.apply(t,arguments)}}const{toString:St}=Object.prototype,{getPrototypeOf:pe}=Object,G=(e=>t=>{const n=St.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>G(t)===e),X=e=>t=>typeof t===e,{isArray:k}=Array,H=X("undefined");function Rt(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ke=x("ArrayBuffer");function Ot(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ke(e.buffer),t}const Tt=X("string"),_=X("function"),qe=X("number"),Q=e=>e!==null&&typeof e=="object",At=e=>e===!0||e===!1,z=e=>{if(G(e)!=="object")return!1;const t=pe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_t=x("Date"),Ct=x("File"),xt=x("Blob"),Pt=x("FileList"),Nt=e=>Q(e)&&_(e.pipe),Dt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||_(e.append)&&((t=G(e))==="formdata"||t==="object"&&_(e.toString)&&e.toString()==="[object FormData]"))},Ft=x("URLSearchParams"),[Lt,Bt,jt,Ut]=["ReadableStream","Request","Response","Headers"].map(x),kt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Me(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const j=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),He=e=>!H(e)&&e!==j;function ie(){const{caseless:e}=He(this)&&this||{},t={},n=(r,s)=>{const o=e&&Me(t,s)||s;z(t[o])&&z(r)?t[o]=ie(t[o],r):z(r)?t[o]=ie({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const qt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&_(s)?e[o]=Ue(s,n):e[o]=s},{allOwnKeys:r}),e),Mt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ht=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},It=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&pe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},vt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},zt=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!qe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},$t=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&pe(Uint8Array)),Jt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Vt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Wt=x("HTMLFormElement"),Kt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Se=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Gt=x("RegExp"),Ie=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Xt=e=>{Ie(e,(t,n)=>{if(_(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(_(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Qt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},Zt=()=>{},Yt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",Re="0123456789",ve={DIGIT:Re,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+Re},en=(e=16,t=ve.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function tn(e){return!!(e&&_(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const nn=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return I(r,(i,c)=>{const f=n(i,s+1);!H(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},rn=x("AsyncFunction"),sn=e=>e&&(Q(e)||_(e))&&_(e.then)&&_(e.catch),ze=((e,t)=>e?setImmediate:t?((n,r)=>(j.addEventListener("message",({source:s,data:o})=>{s===j&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),j.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_(j.postMessage)),on=typeof queueMicrotask<"u"?queueMicrotask.bind(j):typeof process<"u"&&process.nextTick||ze,a={isArray:k,isArrayBuffer:ke,isBuffer:Rt,isFormData:Dt,isArrayBufferView:Ot,isString:Tt,isNumber:qe,isBoolean:At,isObject:Q,isPlainObject:z,isReadableStream:Lt,isRequest:Bt,isResponse:jt,isHeaders:Ut,isUndefined:H,isDate:_t,isFile:Ct,isBlob:xt,isRegExp:Gt,isFunction:_,isStream:Nt,isURLSearchParams:Ft,isTypedArray:$t,isFileList:Pt,forEach:I,merge:ie,extend:qt,trim:kt,stripBOM:Mt,inherits:Ht,toFlatObject:It,kindOf:G,kindOfTest:x,endsWith:vt,toArray:zt,forEachEntry:Jt,matchAll:Vt,isHTMLForm:Wt,hasOwnProperty:Se,hasOwnProp:Se,reduceDescriptors:Ie,freezeMethods:Xt,toObjectSet:Qt,toCamelCase:Kt,noop:Zt,toFiniteNumber:Yt,findKey:Me,global:j,isContextDefined:He,ALPHABET:ve,generateString:en,isSpecCompliantForm:tn,toJSONObject:nn,isAsyncFn:rn,isThenable:sn,setImmediate:ze,asap:on};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const $e=m.prototype,Je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Je[e]={value:e}});Object.defineProperties(m,Je);Object.defineProperty($e,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create($e);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const an=null;function ae(e){return a.isPlainObject(e)||a.isArray(e)}function Ve(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Oe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ve(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function cn(e){return a.isArray(e)&&!e.some(ae)}const ln=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,h){let g=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&cn(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(g=a.toArray(p)))return y=Ve(y),g.forEach(function(R,P){!(a.isUndefined(R)||R===null)&&t.append(i===!0?Oe([y],P,o):i===null?y:y+"[]",l(R))}),!1}return ae(p)?!0:(t.append(Oe(h,y,o),l(p)),!1)}const d=[],b=Object.assign(ln,{defaultVisitor:u,convertValue:l,isVisitable:ae});function E(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(g,S){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(S)?S.trim():S,y,b))===!0&&E(g,y?y.concat(S):[S])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Te(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function he(e,t){this._pairs=[],e&&Z(e,this,t)}const We=he.prototype;We.append=function(t,n){this._pairs.push([t,n])};We.toString=function(t){const n=t?function(r){return t.call(this,r,Te)}:Te;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function un(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ke(e,t,n){if(!t)return e;const r=n&&n.encode||un,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new he(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class fn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ae=fn,Ge={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dn=typeof URLSearchParams<"u"?URLSearchParams:he,pn=typeof FormData<"u"?FormData:null,hn=typeof Blob<"u"?Blob:null,mn={isBrowser:!0,classes:{URLSearchParams:dn,FormData:pn,Blob:hn},protocols:["http","https","file","blob","url","data"]},me=typeof window<"u"&&typeof document<"u",ce=typeof navigator=="object"&&navigator||void 0,yn=me&&(!ce||["ReactNative","NativeScript","NS"].indexOf(ce.product)<0),bn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),gn=me&&window.location.href||"http://localhost",wn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:me,hasStandardBrowserEnv:yn,hasStandardBrowserWebWorkerEnv:bn,navigator:ce,origin:gn},Symbol.toStringTag,{value:"Module"})),A={...wn,...mn};function En(e,t){return Z(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Sn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Rn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Xe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Rn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Sn(r),s,n,0)}),n}return null}function On(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ye={transitional:Ge,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Xe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return En(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),On(t)):t}],transformResponse:[function(t){const n=this.transitional||ye.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ye.headers[e]={}});const be=ye,Tn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),An=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Tn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},_e=Symbol("internals");function M(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function _n(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Cn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function re(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function xn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Y{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=M(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=$(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!Cn(t))i(An(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=M(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return _n(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=M(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||re(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=M(i),i){const c=a.findKey(r,i);c&&(!n||re(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||re(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=$(s),delete n[o];return}const c=t?xn(o):String(o).trim();c!==o&&delete n[o],n[c]=$(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[_e]=this[_e]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=M(i);r[c]||(Pn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Y.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Y.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Y);const C=Y;function se(e,t){const n=this||be,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Qe(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,m,{__CANCEL__:!0});function Ze(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Nn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let d=o,b=0;for(;d!==s;)b+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const E=u&&l-u;return E?Math.round(b*1e3/E):void 0}}function Fn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const V=(e,t,n=3)=>{let r=0;const s=Dn(50,250);return Fn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},Ce=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},xe=e=>(...t)=>a.asap(()=>e(...t)),Ln=A.hasStandardBrowserEnv?function(){const t=A.navigator&&/(msie|trident)/i.test(A.navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),Bn=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function jn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Un(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ye(e,t){return e&&!jn(t)?Un(e,t):t}const Pe=e=>e instanceof C?{...e}:e;function U(e,t){t=t||{};const n={};function r(l,u,d){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:d},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d)}else return r(l,u,d)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(Pe(l),Pe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,b=d(e[u],t[u],u);a.isUndefined(b)&&d!==c||(n[u]=b)}),n}const et=e=>{const t=U({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=C.from(i),t.url=Ke(Ye(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(A.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Ln(t.url))){const l=s&&o&&Bn.read(o);l&&i.set(s,l)}return t},kn=typeof XMLHttpRequest<"u",qn=kn&&function(e){return new Promise(function(n,r){const s=et(e);let o=s.data;const i=C.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,d,b,E,p;function y(){E&&E(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function g(){if(!h)return;const R=C.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:R,config:e,request:h};Ze(function(L){n(L),y()},function(L){r(L),y()},T),h=null}"onloadend"in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(g)},h.onabort=function(){h&&(r(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||Ge;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new m(P,T.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(P,T){h.setRequestHeader(T,P)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([b,p]=V(l,!0),h.addEventListener("progress",b)),f&&h.upload&&([d,E]=V(f),h.upload.addEventListener("progress",d),h.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=R=>{h&&(r(!R||R.type?new q(null,e,h):R),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=Nn(s.url);if(S&&A.protocols.indexOf(S)===-1){r(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}h.send(o||null)})},Mn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof m?u:new q(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},Hn=Mn,In=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},vn=async function*(e,t){for await(const n of zn(e))yield*In(n,t)},zn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ne=(e,t,n,r)=>{const s=vn(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let d=u.byteLength;if(n){let b=o+=d;n(b)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},ee=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",tt=ee&&typeof ReadableStream=="function",$n=ee&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),nt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Jn=tt&&nt(()=>{let e=!1;const t=new Request(A.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),De=64*1024,le=tt&&nt(()=>a.isReadableStream(new Response("").body)),W={stream:le&&(e=>e.body)};ee&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!W[t]&&(W[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Vn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(A.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await $n(e)).byteLength},Wn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Vn(t)},Kn=ee&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:b}=et(e);l=l?(l+"").toLowerCase():"text";let E=Hn([s,o&&o.toAbortSignal()],i),p;const y=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let h;try{if(f&&Jn&&n!=="get"&&n!=="head"&&(h=await Wn(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),D;if(a.isFormData(r)&&(D=T.headers.get("content-type"))&&u.setContentType(D),T.body){const[L,v]=Ce(h,V(xe(f)));r=Ne(T.body,De,L,v)}}a.isString(d)||(d=d?"include":"omit");const g="credentials"in Request.prototype;p=new Request(t,{...b,signal:E,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:g?d:void 0});let S=await fetch(p);const R=le&&(l==="stream"||l==="response");if(le&&(c||R&&y)){const T={};["status","statusText","headers"].forEach(Ee=>{T[Ee]=S[Ee]});const D=a.toFiniteNumber(S.headers.get("content-length")),[L,v]=c&&Ce(D,V(xe(c),!0))||[];S=new Response(Ne(S.body,De,L,()=>{v&&v(),y&&y()}),T)}l=l||"text";let P=await W[a.findKey(W,l)||"text"](S,e);return!R&&y&&y(),await new Promise((T,D)=>{Ze(T,D,{data:P,headers:C.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:p})})}catch(g){throw y&&y(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:g.cause||g}):m.from(g,g&&g.code,e,p)}}),ue={http:an,xhr:qn,fetch:Kn};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fe=e=>`- ${e}`,Gn=e=>a.isFunction(e)||e===null||e===!1,rt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Gn(n)&&(r=ue[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Fe).join(`
`):" "+Fe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ue};function oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Le(e){return oe(e),e.headers=C.from(e.headers),e.data=se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),rt.getAdapter(e.adapter||be.adapter)(e).then(function(r){return oe(e),r.data=se.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Qe(r)||(oe(e),r&&r.response&&(r.response.data=se.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const st="1.7.7",ge={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ge[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Be={};ge.transitional=function(t,n,r){function s(o,i){return"[Axios v"+st+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Be[i]&&(Be[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Xn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const fe={assertOptions:Xn,validators:ge},F=fe.validators;class K{constructor(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&fe.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:fe.assertOptions(s,{encode:F.function,serialize:F.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=C.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,d=0,b;if(!f){const p=[Le.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),b=p.length,u=Promise.resolve(n);d<b;)u=u.then(p[d++],p[d++]);return u}b=c.length;let E=n;for(d=0;d<b;){const p=c[d++],y=c[d++];try{E=p(E)}catch(h){y.call(this,h);break}}try{u=Le.call(this,E)}catch(p){return Promise.reject(p)}for(d=0,b=l.length;d<b;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=U(this.defaults,t);const n=Ye(t.baseURL,t.url);return Ke(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){K.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}K.prototype[t]=n(),K.prototype[t+"Form"]=n(!0)});const J=K;class we{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new q(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new we(function(s){t=s}),cancel:t}}}const Qn=we;function Zn(e){return function(n){return e.apply(null,n)}}function Yn(e){return a.isObject(e)&&e.isAxiosError===!0}const de={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(de).forEach(([e,t])=>{de[t]=e});const er=de;function ot(e){const t=new J(e),n=Ue(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ot(U(e,s))},n}const w=ot(be);w.Axios=J;w.CanceledError=q;w.CancelToken=Qn;w.isCancel=Qe;w.VERSION=st;w.toFormData=Z;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Zn;w.isAxiosError=Yn;w.mergeConfig=U;w.AxiosHeaders=C;w.formToJSON=e=>Xe(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=rt.getAdapter;w.HttpStatusCode=er;w.default=w;const tr=w;class it{static getArticle(t){return tr.get(`${this.root}/assets/articles/${t}`)}}O(it,"root","/profile");class nr{constructor(t){O(this,"isLoaded",!1);O(this,"name");O(this,"content",null);this.name=t}load(){if(!this.isLoaded)return it.getArticle(this.name).then(t=>{if(t.status>=400)throw new Error("Failed to load article");return this.content=t.data,t}).finally(()=>this.isLoaded=!0)}}class B{constructor(t,n,r){O(this,"id");O(this,"name");O(this,"color");this.id=t,this.name=n,this.color=r}toSelectableItem(){return{title:this.name,value:this.id}}}const rr=[new B(1,"TS","#3178c6"),new B(2,"Vue","#41B883"),new B(3,"Frontend","#5CB3FF"),new B(4,"Math","#A62F20"),new B(5,"42 Abu Dhabi","#00e5fc"),new B(6,"Shell","#00ff00"),new B(7,"C","#3f4fae")];function N(e){return rr.find(t=>t.name===e)}function sr(){const e=Object.assign({"/src/assets/images/projects/al_reyada.png":gt,"/src/assets/images/projects/winter.gif":Et}),t=Object.keys(e).map(n=>{const r=n.split("/");return{name:r[r.length-1],path:e[n].default}});return n=>{const r=t.find(s=>s.name==n);return r?r.path:""}}const je=sr(),or=[new te({id:1,name:"Minishell",categories:[N("42 Abu Dhabi"),N("Shell"),N("C")],image:je("winter.gif"),finishDate:new Date("2024.07.05"),description:"Try your hand - create your own mini shell and don't turn gray from bugs and memory leaks!",article:new nr("Minishell.md")}),new te({id:2,name:"Cub 3D",categories:[N("42 Abu Dhabi"),N("Math"),N("C")],image:"https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif",description:"Raycasting, basic 3D graphics, a lot of math and first own game from scratch.",finishDate:new Date("2024.09.01"),article:null}),new te({id:3,name:"Sustainability hackathon",categories:[N("Frontend"),N("Vue"),N("TS")],image:je("al_reyada.png"),description:"Website for a team project as part of an Sustainability hackathon by Total energies",finishDate:new Date("2024.03.24"),article:null})];function dr(){return or.sort((e,t)=>t.finishDate.getTime()-e.finishDate.getTime())}export{fr as C,te as P,rr as a,ur as b,cr as c,lr as g,or as p,dr as s};
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();let X=Object,v,p=X.getPrototypeOf,Y=document,L,I,j,At={isConnected:1},ie=1e3,C,yt={},oe=p(At),jt=p(p),It=(t,e,n,r)=>(t??(setTimeout(n,r),new Set)).add(e),zt=(t,e,n)=>{let r=I;I=e;try{return t(n)}catch(i){return console.error(i),n}finally{I=r}},M=t=>t.filter(e=>e._dom?.isConnected),kt=t=>C=It(C,t,()=>{for(let e of C)e._bindings=M(e._bindings),e._listeners=M(e._listeners);C=v},ie),B={get val(){return I?.add(this),this._val},get oldVal(){return I?.add(this),this._oldVal},set val(t){let e=this;if(t!==e._val){e._val=t;let n=[...e._listeners=M(e._listeners)];for(let r of n)Et(r.f,r.s,r._dom),r._dom=v;e._bindings.length?L=It(L,e,fe):e._oldVal=t}}},xt=t=>({__proto__:B,_val:t,_oldVal:t,_bindings:[],_listeners:[]}),Pt=t=>p(t??0)===B,se=t=>Pt(t)?t.val:t,ae=t=>Pt(t)?t.oldVal:t,O=(t,e)=>{let n=new Set,r={f:t},i=j;j=[];let o=zt(t,n,e);o=(o??Y).nodeType?o:new Text(o);for(let s of n)kt(s),s._bindings.push(r);for(let s of j)s._dom=o;return j=i,r._dom=o},Et=(t,e=xt(),n)=>{let r=new Set,i={f:t,s:e};i._dom=n??j?.push(i)??At,e.val=zt(t,r);for(let o of r)kt(o),o._listeners.push(i);return e},Ct=(t,...e)=>{for(let n of e.flat(1/0)){let r=p(n??0),i=r===B?O(()=>n.val):r===jt?O(n):n;i!=v&&t.append(i)}return t},ce=t=>(t._isBindingFunc=1,t),gt=t=>new Proxy((e,...n)=>{let[r,...i]=p(n[0]??0)===oe?n:[{},...n],o=t?Y.createElementNS(t,e):Y.createElement(e);for(let[s,a]of X.entries(r)){let l=b=>b?X.getOwnPropertyDescriptor(b,s)??l(p(b)):v,y=e+","+s,$=yt[y]??(yt[y]=l(p(o))?.set??0),u=$?$.bind(o):o.setAttribute.bind(o,s),S=p(a??0);S===B?O(()=>(u(a.val),o)):S===jt&&(!s.startsWith("on")||a._isBindingFunc)?O(()=>(u(a()),o)):u(a)}return Ct(o,...i)},{get:(e,n)=>e.bind(v,n)}),Lt=(t,e)=>e?e!==t&&t.replaceWith(e):t.remove(),fe=()=>{let t=[...L].filter(e=>e._val!==e._oldVal);L=v;for(let e of new Set(t.flatMap(n=>n._bindings=M(n._bindings))))Lt(e._dom,O(e.f,e._dom)),e._dom=v;for(let e of t)e._oldVal=e._val},le=(t,e)=>Lt(t,O(e,t));const f={add:Ct,_:ce,tags:gt(),tagsNS:gt,state:xt,val:se,oldVal:ae,derive:Et,hydrate:le};var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ue="Expected a function",ht=0/0,de="[object Symbol]",pe=/^\s+|\s+$/g,ye=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,he=/^0o[0-7]+$/i,be=parseInt,me=typeof h=="object"&&h&&h.Object===Object&&h,ve=typeof self=="object"&&self&&self.Object===Object&&self,_e=me||ve||Function("return this")(),we=Object.prototype,Se=we.toString,Oe=Math.max,Te=Math.min,W=function(){return _e.Date.now()};function $e(t,e,n){var r,i,o,s,a,l,y=0,$=!1,u=!1,S=!0;if(typeof t!="function")throw new TypeError(ue);e=bt(e)||0,Z(n)&&($=!!n.leading,u="maxWait"in n,o=u?Oe(bt(n.maxWait)||0,e):o,S="trailing"in n?!!n.trailing:S);function b(c){var g=r,A=i;return r=i=void 0,y=c,s=t.apply(A,g),s}function te(c){return y=c,a=setTimeout(E,e),$?b(c):s}function ee(c){var g=c-l,A=c-y,pt=e-g;return u?Te(pt,o-A):pt}function ut(c){var g=c-l,A=c-y;return l===void 0||g>=e||g<0||u&&A>=o}function E(){var c=W();if(ut(c))return dt(c);a=setTimeout(E,ee(c))}function dt(c){return a=void 0,S&&r?b(c):(r=i=void 0,s)}function ne(){a!==void 0&&clearTimeout(a),y=0,r=l=i=a=void 0}function re(){return a===void 0?s:dt(W())}function q(){var c=W(),g=ut(c);if(r=arguments,i=this,l=c,g){if(a===void 0)return te(l);if(u)return a=setTimeout(E,e),b(l)}return a===void 0&&(a=setTimeout(E,e)),s}return q.cancel=ne,q.flush=re,q}function Z(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ae(t){return!!t&&typeof t=="object"}function je(t){return typeof t=="symbol"||Ae(t)&&Se.call(t)==de}function bt(t){if(typeof t=="number")return t;if(je(t))return ht;if(Z(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Z(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(pe,"");var n=ge.test(t);return n||he.test(t)?be(t.slice(2),n?2:8):ye.test(t)?ht:+t}var Ie=$e;const ze=Mt(Ie),{div:mt}=f.tags;function ke({list:t,onClick:e}){return Array.isArray(t)?t.map(n=>mt({class:"tag",role:"button",onclick:()=>e(n)},n)):mt("")}const{div:xe,p:Pe}=f.tags,Ee="❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴".split("");function Ce(t){if(!Array.isArray(t))return xe("");let e=t.join(`
`);return Ee.forEach(n=>{e=e.replaceAll(n,`
${n} `)}),e.split(`
`).map((n,r)=>Pe({"row-index":r},n))}const Le="/lv1_hanzi/sql/hanzi.db",Me="/lv1_hanzi/sql/worker.sql-wasm.js",ct=new Worker(Me),Rt=function(){let t=0;return()=>(t+=1,t)}(),R=new Map,z={ready:!1,callbacksBeforeReady:[]};ct.onmessage=t=>{const{id:e,...n}=t.data;R.get(e)(n),R.delete(e)};function Re(t){return new Promise(e=>{const n=Rt();R.set(n,r=>e(r)),ct.postMessage({id:n,action:"open",buffer:t})})}function F(t,e=null){return new Promise(n=>{const r=()=>{const i=Rt();R.set(i,o=>n(o)),ct.postMessage({id:i,action:"exec",sql:t,params:e||{}})};z.ready?r():z.callbacksBeforeReady.push(r)})}async function Ne(){const t=await fetch(Le).then(e=>e.arrayBuffer());await Re(t),z.ready=!0,z.callbacksBeforeReady.length>0&&z.callbacksBeforeReady.forEach(e=>e())}await Ne();var vt=1/0,Nt=9007199254740991,Be=17976931348623157e292,_t=0/0,Fe=4294967295,He="[object Arguments]",De="[object Function]",Ve="[object GeneratorFunction]",Q="[object Map]",qe="[object Object]",wt="[object Promise]",tt="[object Set]",We="[object String]",Ge="[object Symbol]",St="[object WeakMap]",Ot="[object DataView]",Ke=/[\\^$.*+?()[\]{}|]/g,Ue=/^\s+|\s+$/g,Je=/^[-+]0x[0-9a-f]+$/i,Xe=/^0b[01]+$/i,Ye=/^\[object .+?Constructor\]$/,Ze=/^0o[0-7]+$/i,Qe=/^(?:0|[1-9]\d*)$/,ft="\\ud800-\\udfff",Bt="\\u0300-\\u036f\\ufe20-\\ufe23",Ft="\\u20d0-\\u20f0",Ht="\\ufe0e\\ufe0f",tn="["+ft+"]",et="["+Bt+Ft+"]",nt="\\ud83c[\\udffb-\\udfff]",en="(?:"+et+"|"+nt+")",Dt="[^"+ft+"]",Vt="(?:\\ud83c[\\udde6-\\uddff]){2}",qt="[\\ud800-\\udbff][\\udc00-\\udfff]",Wt="\\u200d",Gt=en+"?",Kt="["+Ht+"]?",nn="(?:"+Wt+"(?:"+[Dt,Vt,qt].join("|")+")"+Kt+Gt+")*",rn=Kt+Gt+nn,on="(?:"+[Dt+et+"?",et,Vt,qt,tn].join("|")+")",sn=RegExp(nt+"(?="+nt+")|"+on+rn,"g"),an=RegExp("["+Wt+ft+Bt+Ft+Ht+"]"),cn=parseInt,fn=typeof h=="object"&&h&&h.Object===Object&&h,ln=typeof self=="object"&&self&&self.Object===Object&&self,_=fn||ln||Function("return this")();function un(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function dn(t){return t.split("")}function pn(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function yn(t,e){return un(e,function(n){return t[n]})}function gn(t,e){return t?.[e]}function hn(t){return an.test(t)}function bn(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function mn(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function vn(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}function _n(t,e){return function(n){return t(e(n))}}function wn(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}function Sn(t){return hn(t)?On(t):dn(t)}function On(t){return t.match(sn)||[]}var Tn=Function.prototype,H=Object.prototype,G=_["__core-js_shared__"],Tt=function(){var t=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ut=Tn.toString,D=H.hasOwnProperty,T=H.toString,$n=RegExp("^"+Ut.call(D).replace(Ke,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$t=_.Symbol,K=$t?$t.iterator:void 0,An=H.propertyIsEnumerable,jn=Math.floor,In=_n(Object.keys,Object),zn=Math.random,rt=P(_,"DataView"),it=P(_,"Map"),ot=P(_,"Promise"),st=P(_,"Set"),at=P(_,"WeakMap"),kn=w(rt),xn=w(it),Pn=w(ot),En=w(st),Cn=w(at);function Ln(t,e){var n=Xt(t)||Un(t)?pn(t.length,String):[],r=n.length,i=!!r;for(var o in t)(e||D.call(t,o))&&!(i&&(o=="length"||Jt(o,r)))&&n.push(o);return n}function Mn(t,e,n){return t===t&&(n!==void 0&&(t=t<=n?t:n),e!==void 0&&(t=t>=e?t:e)),t}function Rn(t){return T.call(t)}function Nn(t){if(!x(t)||Vn(t))return!1;var e=Yt(t)||bn(t)?$n:Ye;return e.test(w(t))}function Bn(t){if(!qn(t))return In(t);var e=[];for(var n in Object(t))D.call(t,n)&&n!="constructor"&&e.push(n);return e}function Fn(t,e){return t+jn(zn()*(e-t+1))}function Hn(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function P(t,e){var n=gn(t,e);return Nn(n)?n:void 0}var m=Rn;(rt&&m(new rt(new ArrayBuffer(1)))!=Ot||it&&m(new it)!=Q||ot&&m(ot.resolve())!=wt||st&&m(new st)!=tt||at&&m(new at)!=St)&&(m=function(t){var e=T.call(t),n=e==qe?t.constructor:void 0,r=n?w(n):void 0;if(r)switch(r){case kn:return Ot;case xn:return Q;case Pn:return wt;case En:return tt;case Cn:return St}return e});function Jt(t,e){return e=e??Nt,!!e&&(typeof t=="number"||Qe.test(t))&&t>-1&&t%1==0&&t<e}function Dn(t,e,n){if(!x(n))return!1;var r=typeof e;return(r=="number"?V(n)&&Jt(e,n.length):r=="string"&&e in n)?Kn(n[e],t):!1}function Vn(t){return!!Tt&&Tt in t}function qn(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||H;return t===n}function w(t){if(t!=null){try{return Ut.call(t)}catch{}try{return t+""}catch{}}return""}function Wn(t,e,n){var r=-1,i=Qn(t),o=i.length,s=o-1;for((n?Dn(t,e,n):e===void 0)?e=1:e=Mn(er(e),0,o);++r<e;){var a=Fn(r,s),l=i[a];i[a]=i[r],i[r]=l}return i.length=e,i}function Gn(t){return Wn(t,Fe)}function Kn(t,e){return t===e||t!==t&&e!==e}function Un(t){return Jn(t)&&D.call(t,"callee")&&(!An.call(t,"callee")||T.call(t)==He)}var Xt=Array.isArray;function V(t){return t!=null&&Xn(t.length)&&!Yt(t)}function Jn(t){return lt(t)&&V(t)}function Yt(t){var e=x(t)?T.call(t):"";return e==De||e==Ve}function Xn(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Nt}function x(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function lt(t){return!!t&&typeof t=="object"}function Yn(t){return typeof t=="string"||!Xt(t)&&lt(t)&&T.call(t)==We}function Zn(t){return typeof t=="symbol"||lt(t)&&T.call(t)==Ge}function Qn(t){if(!t)return[];if(V(t))return Yn(t)?Sn(t):Hn(t);if(K&&t[K])return mn(t[K]());var e=m(t),n=e==Q?vn:e==tt?wn:ir;return n(t)}function tr(t){if(!t)return t===0?t:0;if(t=nr(t),t===vt||t===-vt){var e=t<0?-1:1;return e*Be}return t===t?t:0}function er(t){var e=tr(t),n=e%1;return e===e?n?e-n:e:0}function nr(t){if(typeof t=="number")return t;if(Zn(t))return _t;if(x(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=x(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Ue,"");var n=Xe.test(t);return n||Ze.test(t)?cn(t.slice(2),n?2:8):Je.test(t)?_t:+t}function rr(t){return V(t)?Ln(t):Bn(t)}function ir(t){return t?yn(t,rr(t)):[]}var or=Gn;const sr=Mt(or);async function ar(){const t=await F("select pos from hanzi");return sr(t.results[0]?.values.flat())}async function cr(t){const r=(await F("select pos from pinyin_to_hanzi_pos where pinyin = $pinyin",{$pinyin:t})).results[0]?.values.flat()||[];return r.length===0?[]:Promise.all(r.map(Zt))}async function fr(t){const e=await F("select id,hanzi,pos,pinyins,explanations from hanzi where hanzi = $hanzi",{$hanzi:t});return(e.results[0]?.values||[]).map(i=>{const o={};return e.results?.[0].columns.forEach((s,a)=>{if(s==="explanations"||s==="pinyins"){o[s]=JSON.parse(i[a]??"[]");return}o[s]=i[a]??null}),o})}async function lr(t){const e=await fr(t),n=await cr(t);return[...e,...n]}async function Zt(t){const e=await F("select id,hanzi,pos,pinyins,explanations from hanzi where pos = $pos",{$pos:t}),n={},r=e.results[0]?.values[0]||[];return e.results?.[0].columns.forEach((i,o)=>{if(i==="explanations"||i==="pinyins"){n[i]=JSON.parse(r[o]??"[]");return}n[i]=r[o]??null}),n}const ur={lang:"zh-CN",volume:1,rate:1,pitch:1};function dr(t,e=ur){const n=new window.SpeechSynthesisUtterance;n.lang=e.lang,n.volume=e.volume,n.rate=e.rate,n.pitch=e.pitch,n.text=t,window.speechSynthesis.speak(n)}function pr(t){window.speechSynthesis.cancel(),dr(t)}const{div:d,p:Sr}=f.tags,Qt=await ar(),N=f.state(0),k=f.state({});f.derive(async()=>{const t=N.val;if(t===null)return;const e=Qt[t],n=await Zt(e);k.val=n});const yr=ze(()=>{const t=k.val.hanzi;pr(t)},200);function gr(){return d({class:"next-button",role:"button",onclick:()=>{N.val+=1}},"下一个")}const hr=({current:t,findHanziByPinyin:e})=>{if(t>=0){const n=Qt.findIndex(r=>r===t);n>-1&&(N.val=n)}else N.val=0;return d({class:"hanzi-container"},()=>d({class:"hanzi-wrapper"},d({class:"hanzi"},k.val.hanzi),d({class:"pinyins"},ke({list:k.val.pinyins,onClick:e}))),()=>d({style:"overflow: auto; padding: 1rem 1rem 2rem 1rem"},d({class:"explanations"},Ce(k.val.explanations)),d({class:"tools"},d({role:"button",onclick:yr},"朗读"))),gr())},{div:U}=f.tags;function br({keyword:t,onShowDetail:e}){const n=f.state([]);return lr(t).then(r=>{n.val=r}),U({},()=>U({class:"search-result"},n.val.map(r=>U({role:"button",onclick:()=>e(r)},r.hanzi))))}const{div:J,input:mr}=f.tags;function vr({onLookup:t,inputs:e}){const n=i=>{i.isComposing||(e.val=i.target.value)},r=i=>{i.isComposing||i.keyCode===229||i.key==="Enter"&&t(e.val)};return J({class:"top-bar"},J({class:"title"},"一级汉字"),J({class:"search"},mr({placeholder:"查找汉字，只支持单字或拼音",value:()=>e.val,oninput:n,onkeyup:r})))}const{div:_r}=f.tags;function wr(){const t=f.state(""),e=f.state(null);function n(i){t.val=i}function r(i){e.val=i.pos,t.val=""}return _r({class:"main-container"},()=>vr({onLookup:n,inputs:t}),()=>{const i=t.val,o=e.val;return i?br({keyword:i,onShowDetail:r}):hr({current:o,findHanziByPinyin:n})})}f.add(document.body,wr());
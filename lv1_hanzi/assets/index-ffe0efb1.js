(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function we(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qe="Expected a function",ue=0/0,et="[object Symbol]",tt=/^\s+|\s+$/g,rt=/^[-+]0x[0-9a-f]+$/i,nt=/^0b[01]+$/i,ot=/^0o[0-7]+$/i,it=parseInt,st=typeof g=="object"&&g&&g.Object===Object&&g,at=typeof self=="object"&&self&&self.Object===Object&&self,ct=st||at||Function("return this")(),ft=Object.prototype,lt=ft.toString,ut=Math.max,dt=Math.min,W=function(){return ct.Date.now()};function pt(e,t,r){var n,o,i,s,a,l,p=0,T=!1,u=!1,v=!0;if(typeof e!="function")throw new TypeError(Qe);t=de(t)||0,H(r)&&(T=!!r.leading,u="maxWait"in r,i=u?ut(de(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v);function b(c){var y=n,A=o;return n=o=void 0,p=c,s=e.apply(A,y),s}function Je(c){return p=c,a=setTimeout(M,t),T?b(c):s}function Xe(c){var y=c-l,A=c-p,le=t-y;return u?dt(le,i-A):le}function ce(c){var y=c-l,A=c-p;return l===void 0||y>=t||y<0||u&&A>=i}function M(){var c=W();if(ce(c))return fe(c);a=setTimeout(M,Xe(c))}function fe(c){return a=void 0,v&&n?b(c):(n=o=void 0,s)}function Ye(){a!==void 0&&clearTimeout(a),p=0,n=l=o=a=void 0}function Ze(){return a===void 0?s:fe(W())}function V(){var c=W(),y=ce(c);if(n=arguments,o=this,l=c,y){if(a===void 0)return Je(l);if(u)return a=setTimeout(M,t),b(l)}return a===void 0&&(a=setTimeout(M,t)),s}return V.cancel=Ye,V.flush=Ze,V}function H(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function yt(e){return!!e&&typeof e=="object"}function gt(e){return typeof e=="symbol"||yt(e)&&lt.call(e)==et}function de(e){if(typeof e=="number")return e;if(gt(e))return ue;if(H(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=H(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(tt,"");var r=nt.test(e);return r||ot.test(e)?it(e.slice(2),r?2:8):rt.test(e)?ue:+e}var bt=pt;const ht=we(bt);var pe=1/0,Oe=9007199254740991,mt=17976931348623157e292,ye=0/0,_t=4294967295,St="[object Arguments]",vt="[object Function]",wt="[object GeneratorFunction]",U="[object Map]",Ot="[object Object]",ge="[object Promise]",K="[object Set]",Tt="[object String]",At="[object Symbol]",be="[object WeakMap]",he="[object DataView]",jt=/[\\^$.*+?()[\]{}|]/g,It=/^\s+|\s+$/g,$t=/^[-+]0x[0-9a-f]+$/i,xt=/^0b[01]+$/i,kt=/^\[object .+?Constructor\]$/,Et=/^0o[0-7]+$/i,Pt=/^(?:0|[1-9]\d*)$/,oe="\\ud800-\\udfff",Te="\\u0300-\\u036f\\ufe20-\\ufe23",Ae="\\u20d0-\\u20f0",je="\\ufe0e\\ufe0f",Mt="["+oe+"]",J="["+Te+Ae+"]",X="\\ud83c[\\udffb-\\udfff]",Ct="(?:"+J+"|"+X+")",Ie="[^"+oe+"]",$e="(?:\\ud83c[\\udde6-\\uddff]){2}",xe="[\\ud800-\\udbff][\\udc00-\\udfff]",ke="\\u200d",Ee=Ct+"?",Pe="["+je+"]?",Nt="(?:"+ke+"(?:"+[Ie,$e,xe].join("|")+")"+Pe+Ee+")*",Rt=Pe+Ee+Nt,Lt="(?:"+[Ie+J+"?",J,$e,xe,Mt].join("|")+")",zt=RegExp(X+"(?="+X+")|"+Lt+Rt,"g"),Ft=RegExp("["+ke+oe+Te+Ae+je+"]"),Bt=parseInt,Dt=typeof g=="object"&&g&&g.Object===Object&&g,Vt=typeof self=="object"&&self&&self.Object===Object&&self,_=Dt||Vt||Function("return this")();function Wt(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function qt(e){return e.split("")}function Gt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Ht(e,t){return Wt(t,function(r){return e[r]})}function Ut(e,t){return e?.[t]}function Kt(e){return Ft.test(e)}function Jt(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Xt(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}function Yt(e){var t=-1,r=Array(e.size);return e.forEach(function(n,o){r[++t]=[o,n]}),r}function Zt(e,t){return function(r){return e(t(r))}}function Qt(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}function er(e){return Kt(e)?tr(e):qt(e)}function tr(e){return e.match(zt)||[]}var rr=Function.prototype,z=Object.prototype,q=_["__core-js_shared__"],me=function(){var e=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Me=rr.toString,F=z.hasOwnProperty,O=z.toString,nr=RegExp("^"+Me.call(F).replace(jt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_e=_.Symbol,G=_e?_e.iterator:void 0,or=z.propertyIsEnumerable,ir=Math.floor,sr=Zt(Object.keys,Object),ar=Math.random,Y=E(_,"DataView"),Z=E(_,"Map"),Q=E(_,"Promise"),ee=E(_,"Set"),te=E(_,"WeakMap"),cr=S(Y),fr=S(Z),lr=S(Q),ur=S(ee),dr=S(te);function pr(e,t){var r=Ne(e)||jr(e)?Gt(e.length,String):[],n=r.length,o=!!n;for(var i in e)(t||F.call(e,i))&&!(o&&(i=="length"||Ce(i,n)))&&r.push(i);return r}function yr(e,t,r){return e===e&&(r!==void 0&&(e=e<=r?e:r),t!==void 0&&(e=e>=t?e:t)),e}function gr(e){return O.call(e)}function br(e){if(!k(e)||vr(e))return!1;var t=Re(e)||Jt(e)?nr:kt;return t.test(S(e))}function hr(e){if(!wr(e))return sr(e);var t=[];for(var r in Object(e))F.call(e,r)&&r!="constructor"&&t.push(r);return t}function mr(e,t){return e+ir(ar()*(t-e+1))}function _r(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function E(e,t){var r=Ut(e,t);return br(r)?r:void 0}var h=gr;(Y&&h(new Y(new ArrayBuffer(1)))!=he||Z&&h(new Z)!=U||Q&&h(Q.resolve())!=ge||ee&&h(new ee)!=K||te&&h(new te)!=be)&&(h=function(e){var t=O.call(e),r=t==Ot?e.constructor:void 0,n=r?S(r):void 0;if(n)switch(n){case cr:return he;case fr:return U;case lr:return ge;case ur:return K;case dr:return be}return t});function Ce(e,t){return t=t??Oe,!!t&&(typeof e=="number"||Pt.test(e))&&e>-1&&e%1==0&&e<t}function Sr(e,t,r){if(!k(r))return!1;var n=typeof t;return(n=="number"?B(r)&&Ce(t,r.length):n=="string"&&t in r)?Ar(r[t],e):!1}function vr(e){return!!me&&me in e}function wr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||z;return e===r}function S(e){if(e!=null){try{return Me.call(e)}catch{}try{return e+""}catch{}}return""}function Or(e,t,r){var n=-1,o=Er(e),i=o.length,s=i-1;for((r?Sr(e,t,r):t===void 0)?t=1:t=yr(Mr(t),0,i);++n<t;){var a=mr(n,s),l=o[a];o[a]=o[n],o[n]=l}return o.length=t,o}function Tr(e){return Or(e,_t)}function Ar(e,t){return e===t||e!==e&&t!==t}function jr(e){return Ir(e)&&F.call(e,"callee")&&(!or.call(e,"callee")||O.call(e)==St)}var Ne=Array.isArray;function B(e){return e!=null&&$r(e.length)&&!Re(e)}function Ir(e){return ie(e)&&B(e)}function Re(e){var t=k(e)?O.call(e):"";return t==vt||t==wt}function $r(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Oe}function k(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ie(e){return!!e&&typeof e=="object"}function xr(e){return typeof e=="string"||!Ne(e)&&ie(e)&&O.call(e)==Tt}function kr(e){return typeof e=="symbol"||ie(e)&&O.call(e)==At}function Er(e){if(!e)return[];if(B(e))return xr(e)?er(e):_r(e);if(G&&e[G])return Xt(e[G]());var t=h(e),r=t==U?Yt:t==K?Qt:Rr;return r(e)}function Pr(e){if(!e)return e===0?e:0;if(e=Cr(e),e===pe||e===-pe){var t=e<0?-1:1;return t*mt}return e===e?e:0}function Mr(e){var t=Pr(e),r=t%1;return t===t?r?t-r:t:0}function Cr(e){if(typeof e=="number")return e;if(kr(e))return ye;if(k(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=k(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(It,"");var r=xt.test(e);return r||Et.test(e)?Bt(e.slice(2),r?2:8):$t.test(e)?ye:+e}function Nr(e){return B(e)?pr(e):hr(e)}function Rr(e){return e?Ht(e,Nr(e)):[]}var Lr=Tr;const zr=we(Lr);let re=Object,m,d=re.getPrototypeOf,ne=document,N,I,j,Le={isConnected:1},Fr=1e3,C,Se={},Br=d(Le),ze=d(d),Fe=(e,t,r,n)=>(e??(setTimeout(r,n),new Set)).add(t),Be=(e,t,r)=>{let n=I;I=t;try{return e(r)}catch(o){return console.error(o),r}finally{I=n}},R=e=>e.filter(t=>t._dom?.isConnected),De=e=>C=Fe(C,e,()=>{for(let t of C)t._bindings=R(t._bindings),t._listeners=R(t._listeners);C=m},Fr),D={get val(){return I?.add(this),this._val},get oldVal(){return I?.add(this),this._oldVal},set val(e){let t=this;if(e!==t._val){t._val=e;let r=[...t._listeners=R(t._listeners)];for(let n of r)qe(n.f,n.s,n._dom),n._dom=m;t._bindings.length?N=Fe(N,t,qr):t._oldVal=e}}},Ve=e=>({__proto__:D,_val:e,_oldVal:e,_bindings:[],_listeners:[]}),We=e=>d(e??0)===D,Dr=e=>We(e)?e.val:e,Vr=e=>We(e)?e.oldVal:e,w=(e,t)=>{let r=new Set,n={f:e},o=j;j=[];let i=Be(e,r,t);i=(i??ne).nodeType?i:new Text(i);for(let s of r)De(s),s._bindings.push(n);for(let s of j)s._dom=i;return j=o,n._dom=i},qe=(e,t=Ve(),r)=>{let n=new Set,o={f:e,s:t};o._dom=r??j?.push(o)??Le,t.val=Be(e,n);for(let i of n)De(i),i._listeners.push(o);return t},Ge=(e,...t)=>{for(let r of t.flat(1/0)){let n=d(r??0),o=n===D?w(()=>r.val):n===ze?w(r):r;o!=m&&e.append(o)}return e},Wr=e=>(e._isBindingFunc=1,e),ve=e=>new Proxy((t,...r)=>{let[n,...o]=d(r[0]??0)===Br?r:[{},...r],i=e?ne.createElementNS(e,t):ne.createElement(t);for(let[s,a]of re.entries(n)){let l=b=>b?re.getOwnPropertyDescriptor(b,s)??l(d(b)):m,p=t+","+s,T=Se[p]??(Se[p]=l(d(i))?.set??0),u=T?T.bind(i):i.setAttribute.bind(i,s),v=d(a??0);v===D?w(()=>(u(a.val),i)):v===ze&&(!s.startsWith("on")||a._isBindingFunc)?w(()=>(u(a()),i)):u(a)}return Ge(i,...o)},{get:(t,r)=>t.bind(m,r)}),He=(e,t)=>t?t!==e&&e.replaceWith(t):e.remove(),qr=()=>{let e=[...N].filter(t=>t._val!==t._oldVal);N=m;for(let t of new Set(e.flatMap(r=>r._bindings=R(r._bindings))))He(t._dom,w(t.f,t._dom)),t._dom=m;for(let t of e)t._oldVal=t._val},Gr=(e,t)=>He(e,w(t,e));const P={add:Ge,_:Wr,tags:ve(),tagsNS:ve,state:Ve,val:Dr,oldVal:Vr,derive:qe,hydrate:Gr},Hr="/lv1_hanzisql/hanzi.db",Ur="/lv1_hanzisql/worker.sql-wasm.js",se=new Worker(Ur),Ue=function(){let e=0;return()=>(e+=1,e)}(),L=new Map,$={ready:!1,callbacksBeforeReady:[]};se.onmessage=e=>{const{id:t,...r}=e.data;L.get(t)(r),L.delete(t)};function Kr(e){return new Promise(t=>{const r=Ue();L.set(r,n=>t(n)),se.postMessage({id:r,action:"open",buffer:e})})}function Ke(e,t=null){return new Promise(r=>{const n=()=>{const o=Ue();L.set(o,i=>r(i)),se.postMessage({id:o,action:"exec",sql:e,params:t||{}})};$.ready?n():$.callbacksBeforeReady.push(n)})}async function Jr(){const e=await fetch(Hr).then(t=>t.arrayBuffer());await Kr(e),$.ready=!0,$.callbacksBeforeReady.length>0&&$.callbacksBeforeReady.forEach(t=>t())}const Xr={lang:"zh-CN",volume:1,rate:1,pitch:1};function Yr(e,t=Xr){const r=new window.SpeechSynthesisUtterance;r.lang=t.lang,r.volume=t.volume,r.rate=t.rate,r.pitch=t.pitch,r.text=e,window.speechSynthesis.speak(r)}function Zr(e){window.speechSynthesis.cancel(),Yr(e)}const{div:f,p:Qr}=P.tags;async function en(){const e=await Ke("select pos from hanzi");return zr(e.results[0].values.flat())}async function tn(e){const t=await Ke("select * from hanzi where pos = $pos",{$pos:e}),r={},n=t.results?.[0].values[0]||[];return t.results?.[0].columns.forEach((o,i)=>{if(o==="explanations"||o==="pinyins"){r[o]=JSON.parse(n[i]??"[]");return}r[o]=n[i]??null}),r}await Jr();const rn=await en(),ae=P.state(null),x=P.state({});P.derive(async()=>{const e=rn[ae.val],t=await tn(e);x.val=t});ae.val=0;const nn=ht(()=>{const e=x.val.hanzi;Zr(e)},200);function on(){}function sn(e){return Array.isArray(e)?e.map(t=>f({class:"tag",role:"button"},t)):f("")}function an(e){if(!Array.isArray(e))return f("");let t=e.join(`
`);return"❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴".split("").forEach(n=>{t=t.replaceAll(n,`
${n} `)}),t.split(`
`).map((n,o)=>Qr({"row-index":o},n))}function cn({onRead:e,onLookup:t}){return f({class:"top-bar"},f({},f({class:"btn",role:"button",onclick:t},"查")),f({class:"title"},"一级汉字"),f({},f({class:"btn",role:"button",onclick:e},"读")))}function fn(){return f({class:"next-button",role:"button",onclick:()=>{ae.val+=1}},"下一个")}const ln=()=>f({class:"hanzi-container",style:"height: 100vh; max-height: 100vh"},cn({onRead:nn,onLookup:on}),()=>f({class:"hanzi-wrapper"},f({class:"hanzi"},x.val.hanzi),f({class:"pinyins"},sn(x.val.pinyins))),()=>f({style:"overflow: auto"},f({class:"explanations"},an(x.val.explanations))),fn());P.add(document.body,ln());

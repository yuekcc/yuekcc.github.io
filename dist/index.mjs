var i,v=new Array(32).fill(void 0);v.push(void 0,null,!0,!1);function _(o){return v[o]}var y=v.length;function c(o){y===v.length&&v.push(v.length+1);let t=y;return y=v[t],v[t]=o,t}function $(o){o<36||(v[o]=y,y=o)}function A(o){let t=_(o);return $(o),t}var W=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});W.decode();var E=null;function L(){return(E===null||E.buffer!==i.memory.buffer)&&(E=new Uint8Array(i.memory.buffer)),E}function C(o,t){return W.decode(L().subarray(o,o+t))}var d=0,T=new TextEncoder("utf-8"),k=typeof T.encodeInto=="function"?function(o,t){return T.encodeInto(o,t)}:function(o,t){let g=T.encode(o);return t.set(g),{read:o.length,written:g.length}};function m(o,t,g){if(g===void 0){let a=T.encode(o),u=t(a.length);return L().subarray(u,u+a.length).set(a),d=a.length,u}let s=o.length,n=t(s),e=L(),r=0;for(;r<s;r++){let a=o.charCodeAt(r);if(a>127)break;e[n+r]=a}if(r!==s){r!==0&&(o=o.slice(r)),n=g(n,s,s=r+o.length*3);let a=L().subarray(n+r,n+s);r+=k(o,a).written}return d=r,n}function h(o){return o==null}var j=null;function f(){return(j===null||j.buffer!==i.memory.buffer)&&(j=new Int32Array(i.memory.buffer)),j}var S=null;function U(){return(S===null||S.buffer!==i.memory.buffer)&&(S=new Float64Array(i.memory.buffer)),S}function O(o){let t=typeof o;if(t=="number"||t=="boolean"||o==null)return`${o}`;if(t=="string")return`"${o}"`;if(t=="symbol"){let n=o.description;return n==null?"Symbol":`Symbol(${n})`}if(t=="function"){let n=o.name;return typeof n=="string"&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(o)){let n=o.length,e="[";n>0&&(e+=O(o[0]));for(let r=1;r<n;r++)e+=", "+O(o[r]);return e+="]",e}let g=/\[object ([^\]]+)\]/.exec(toString.call(o)),s;if(g.length>1)s=g[1];else return toString.call(o);if(s=="Object")try{return"Object("+JSON.stringify(o)+")"}catch{return"Object"}return o instanceof Error?`${o.name}: ${o.message}
${o.stack}`:s}function M(o,t,g,s){let n={a:o,b:t,cnt:1,dtor:g},e=(...r)=>{n.cnt++;let a=n.a;n.a=0;try{return s(a,n.b,...r)}finally{--n.cnt===0?i.__wbindgen_export_2.get(n.dtor)(a,n.b):n.a=a}};return e.original=n,e}function B(o,t){i._ZN132__LT_dyn_u20_core__ops__function__FnMut_LT__LP__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17h0d031622d95a19c3E(o,t)}var R=32;function P(o){if(R==1)throw new Error("out of js stack");return v[--R]=o,R}function G(o,t,g){try{i._ZN140__LT_dyn_u20_core__ops__function__FnMut_LT__LP__RF_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17hcf2eef9d90a008feE(o,t,P(g))}finally{v[R++]=void 0}}function H(o,t,g){i._ZN136__LT_dyn_u20_core__ops__function__FnMut_LT__LP_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17ha2ccb771045e035eE(o,t,c(g))}function q(o){return()=>{throw new Error(`${o} is not defined`)}}function x(){i.main()}function w(o,t){return o===0?_(t):C(o,t)}function b(o,t){try{return o.apply(this,t)}catch(g){i.__wbindgen_exn_store(c(g))}}async function D(o,t){if(typeof Response=="function"&&o instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(o,t)}catch(s){if(o.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}let g=await o.arrayBuffer();return await WebAssembly.instantiate(g,t)}else{let g=await WebAssembly.instantiate(o,t);return g instanceof WebAssembly.Instance?{instance:g,module:o}:g}}async function F(o){typeof o=="undefined"&&(o=new URL("web_bg.wasm",import.meta.url));let t={};t.wbg={},t.wbg.__wbindgen_object_clone_ref=function(n){var e=_(n);return c(e)},t.wbg.__wbindgen_object_drop_ref=function(n){A(n)},t.wbg.__wbg_highlightAll_f0728fe884a97758=typeof hljs.highlightAll=="function"?hljs.highlightAll:q("hljs.highlightAll"),t.wbg.__wbindgen_string_new=function(n,e){var r=C(n,e);return c(r)},t.wbg.__wbg_new_693216e109162396=function(){var n=new Error;return c(n)},t.wbg.__wbg_stack_0ddaca5d1abfb52f=function(n,e){var r=_(e).stack,a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},t.wbg.__wbg_error_09919627ac0992f5=function(n,e){var r=w(n,e);n!==0&&i.__wbindgen_free(n,e),console.error(r)},t.wbg.__wbindgen_is_string=function(n){var e=typeof _(n)=="string";return e},t.wbg.__wbindgen_string_get=function(n,e){let r=_(e);var a=typeof r=="string"?r:void 0,u=h(a)?0:m(a,i.__wbindgen_malloc,i.__wbindgen_realloc),l=d;f()[n/4+1]=l,f()[n/4+0]=u},t.wbg.__wbindgen_is_object=function(n){let e=_(n);var r=typeof e=="object"&&e!==null;return r},t.wbg.__wbindgen_cb_drop=function(n){let e=A(n).original;if(e.cnt--==1)return e.a=0,!0;var r=!1;return r},t.wbg.__wbindgen_number_new=function(n){var e=n;return c(e)},t.wbg.__wbindgen_is_null=function(n){var e=_(n)===null;return e},t.wbg.__wbindgen_is_undefined=function(n){var e=_(n)===void 0;return e},t.wbg.__wbindgen_boolean_get=function(n){let e=_(n);var r=typeof e=="boolean"?e?1:0:2;return r},t.wbg.__wbindgen_number_get=function(n,e){let r=_(e);var a=typeof r=="number"?r:void 0;U()[n/8+1]=h(a)?0:a,f()[n/4+0]=!h(a)},t.wbg.__wbg_get_2d1407dba3452350=function(n,e){var r=_(n)[A(e)];return c(r)},t.wbg.__wbg_set_f1a4ac8f3a605b11=function(n,e,r){_(n)[A(e)]=A(r)},t.wbg.__wbg_nodeId_87b6c4a3ca0e644b=function(n,e){var r=_(e).$$$nodeId;f()[n/4+1]=h(r)?0:r,f()[n/4+0]=!h(r)},t.wbg.__wbg_setnodeId_84bf16abde40475d=function(n,e){_(n).$$$nodeId=e>>>0},t.wbg.__wbg_instanceof_Window_c4b70662a0d2c5ec=function(n){var e=_(n)instanceof Window;return e},t.wbg.__wbg_body_78ae4fd43b446013=function(n){var e=_(n).body;return h(e)?0:c(e)},t.wbg.__wbg_createElement_86c152812a141a62=function(){return b(function(n,e,r){var a=w(e,r),u=_(n).createElement(a);return c(u)},arguments)},t.wbg.__wbg_setclassName_7e8ab705edf23973=function(n,e,r){var a=w(e,r);_(n).className=a},t.wbg.__wbg_setinnerHTML_e5b817d6227a431c=function(n,e,r){var a=w(e,r);_(n).innerHTML=a},t.wbg.__wbg_setAttribute_1b533bf07966de55=function(){return b(function(n,e,r,a,u){var l=w(e,r),p=w(a,u);_(n).setAttribute(l,p)},arguments)},t.wbg.__wbg_addEventListener_52721772cc0a7f30=function(){return b(function(n,e,r,a){var u=w(e,r);_(n).addEventListener(u,_(a))},arguments)},t.wbg.__wbg_addEventListener_09e11fbf8b4b719b=function(){return b(function(n,e,r,a,u){var l=w(e,r);_(n).addEventListener(l,_(a),_(u))},arguments)},t.wbg.__wbg_removeEventListener_24d5a7c12c3f3c39=function(){return b(function(n,e,r,a,u){var l=w(e,r);_(n).removeEventListener(l,_(a),u!==0)},arguments)},t.wbg.__wbg_new_9c35e8e8b09fb4a3=function(){return b(function(){var n=new Headers;return c(n)},arguments)},t.wbg.__wbg_state_e0610f1cc193abdc=function(){return b(function(n){var e=_(n).state;return c(e)},arguments)},t.wbg.__wbg_replaceState_7a8d7e0139cc1fc1=function(){return b(function(n,e,r,a,u,l){var p=w(r,a),N=w(u,l);_(n).replaceState(_(e),p,N)},arguments)},t.wbg.__wbg_href_6561bfe6ed15034d=function(){return b(function(n,e){var r=_(e).href,a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},arguments)},t.wbg.__wbg_pathname_32da720074d17e34=function(){return b(function(n,e){var r=_(e).pathname,a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},arguments)},t.wbg.__wbg_search_f44353b4fdbdd216=function(){return b(function(n,e){var r=_(e).search,a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},arguments)},t.wbg.__wbg_hash_0fff5255cf3c317c=function(){return b(function(n,e){var r=_(e).hash,a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},arguments)},t.wbg.__wbg_instanceof_Node_ea9524a9184ff6d0=function(n){var e=_(n)instanceof Node;return e},t.wbg.__wbg_parentNode_cd9f47bcc933ed0e=function(n){var e=_(n).parentNode;return h(e)?0:c(e)},t.wbg.__wbg_nextSibling_3b80820f3609b0e0=function(n){var e=_(n).nextSibling;return h(e)?0:c(e)},t.wbg.__wbg_settextContent_799ebbf96e16265d=function(n,e,r){var a=w(e,r);_(n).textContent=a},t.wbg.__wbg_appendChild_d318db34c4559916=function(){return b(function(n,e){var r=_(n).appendChild(_(e));return c(r)},arguments)},t.wbg.__wbg_insertBefore_5b314357408fbec1=function(){return b(function(n,e,r){var a=_(n).insertBefore(_(e),_(r));return c(a)},arguments)},t.wbg.__wbg_removeChild_d3ca7b53e537867e=function(){return b(function(n,e){var r=_(n).removeChild(_(e));return c(r)},arguments)},t.wbg.__wbg_replaceChild_b59c728c04a8fb99=function(){return b(function(n,e,r){var a=_(n).replaceChild(_(e),_(r));return c(a)},arguments)},t.wbg.__wbg_newwithstrandinit_9b0fa00478c37287=function(){return b(function(n,e,r){var a=w(n,e),u=new Request(a,_(r));return c(u)},arguments)},t.wbg.__wbg_instanceof_Response_e1b11afbefa5b563=function(n){var e=_(n)instanceof Response;return e},t.wbg.__wbg_text_8279d34d73e43c68=function(){return b(function(n){var e=_(n).text();return c(e)},arguments)},t.wbg.__wbg_href_631e9ebdf79af986=function(n,e){var r=_(e).href,a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},t.wbg.__wbg_pathname_3570d699aa5b91aa=function(n,e){var r=_(e).pathname,a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},t.wbg.__wbg_search_b750ac6b2e7e2ad3=function(n,e){var r=_(e).search,a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},t.wbg.__wbg_hash_603da0097048f9b2=function(n,e){var r=_(e).hash,a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},t.wbg.__wbg_sethash_db1be2b17bd45122=function(n,e,r){var a=w(e,r);_(n).hash=a},t.wbg.__wbg_new_3f48783ae4f87f8f=function(){return b(function(n,e){var r=w(n,e),a=new URL(r);return c(a)},arguments)},t.wbg.__wbg_newwithbase_ac57407a9fde823c=function(){return b(function(n,e,r,a){var u=w(n,e),l=w(r,a),p=new URL(u,l);return c(p)},arguments)},t.wbg.__wbg_document_1c64944725c0d81d=function(n){var e=_(n).document;return h(e)?0:c(e)},t.wbg.__wbg_location_f98ad02632f88c43=function(n){var e=_(n).location;return c(e)},t.wbg.__wbg_history_3ac8f1466e0c0528=function(){return b(function(n){var e=_(n).history;return c(e)},arguments)},t.wbg.__wbg_fetch_cfe0d1dd786e9cd4=function(n,e){var r=_(n).fetch(_(e));return c(r)},t.wbg.__wbg_debug_675b0ecb65722d2a=function(n){console.debug(_(n))},t.wbg.__wbg_error_cc38ce2b4b661e1d=function(n){console.error(_(n))},t.wbg.__wbg_info_e0c9813e6fd3bdc1=function(n){console.info(_(n))},t.wbg.__wbg_log_3445347661d4505e=function(n){console.log(_(n))},t.wbg.__wbg_warn_5ec7c7c02d0b3841=function(n){console.warn(_(n))},t.wbg.__wbg_get_67189fe0b323d288=function(n,e){var r=_(n)[e>>>0];return c(r)},t.wbg.__wbg_length_42e02f5a04d67464=function(n){var e=_(n).length;return e},t.wbg.__wbg_newnoargs_be86524d73f67598=function(n,e){var r=w(n,e),a=new Function(r);return c(a)},t.wbg.__wbg_call_888d259a5fefc347=function(){return b(function(n,e){var r=_(n).call(_(e));return c(r)},arguments)},t.wbg.__wbg_new_0b83d3df67ecb33e=function(){var n=new Object;return c(n)},t.wbg.__wbg_instanceof_ArrayBuffer_764b6d4119231cb3=function(n){var e=_(n)instanceof ArrayBuffer;return e},t.wbg.__wbg_instanceof_Error_561efcb1265706d8=function(n){var e=_(n)instanceof Error;return e},t.wbg.__wbg_new_342a24ca698edd87=function(n,e){var r=w(n,e),a=new Error(r);return c(a)},t.wbg.__wbg_message_9f7d15ff97fc4102=function(n){var e=_(n).message;return c(e)},t.wbg.__wbg_name_5a42234155690dbc=function(n){var e=_(n).name;return c(e)},t.wbg.__wbg_toString_0ef1ea57b966aed4=function(n){var e=_(n).toString();return c(e)},t.wbg.__wbg_isSafeInteger_0dfc6d38b7184f06=function(n){var e=Number.isSafeInteger(_(n));return e},t.wbg.__wbg_entries_aadf9c3f38203a12=function(n){var e=Object.entries(_(n));return c(e)},t.wbg.__wbg_is_0f5efc7977a2c50b=function(n,e){var r=Object.is(_(n),_(e));return r},t.wbg.__wbg_set_82a4e8a85e31ac42=function(){return b(function(n,e,r){var a=Reflect.set(_(n),_(e),_(r));return a},arguments)},t.wbg.__wbg_buffer_397eaa4d72ee94dd=function(n){var e=_(n).buffer;return c(e)},t.wbg.__wbg_resolve_d23068002f584f22=function(n){var e=Promise.resolve(_(n));return c(e)},t.wbg.__wbg_then_2fcac196782070cc=function(n,e){var r=_(n).then(_(e));return c(r)},t.wbg.__wbg_then_8c2d62e8ae5978f7=function(n,e,r){var a=_(n).then(_(e),_(r));return c(a)},t.wbg.__wbg_self_c6fbdfc2918d5e58=function(){return b(function(){var n=self.self;return c(n)},arguments)},t.wbg.__wbg_window_baec038b5ab35c54=function(){return b(function(){var n=window.window;return c(n)},arguments)},t.wbg.__wbg_globalThis_3f735a5746d41fbd=function(){return b(function(){var n=globalThis.globalThis;return c(n)},arguments)},t.wbg.__wbg_global_1bc0b39582740e95=function(){return b(function(){var n=global.global;return c(n)},arguments)},t.wbg.__wbg_new_a7ce447f15ff496f=function(n){var e=new Uint8Array(_(n));return c(e)},t.wbg.__wbg_set_969ad0a60e51d320=function(n,e,r){_(n).set(_(e),r>>>0)},t.wbg.__wbg_length_1eb8fc608a0d4cdb=function(n){var e=_(n).length;return e},t.wbg.__wbg_instanceof_Uint8Array_08a1f3a179095e76=function(n){var e=_(n)instanceof Uint8Array;return e},t.wbg.__wbindgen_debug_string=function(n,e){var r=O(_(e)),a=m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),u=d;f()[n/4+1]=u,f()[n/4+0]=a},t.wbg.__wbindgen_throw=function(n,e){throw new Error(C(n,e))},t.wbg.__wbindgen_memory=function(){var n=i.memory;return c(n)},t.wbg.__wbindgen_closure_wrapper445=function(n,e,r){var a=M(n,e,147,B);return c(a)},t.wbg.__wbindgen_closure_wrapper788=function(n,e,r){var a=M(n,e,263,G);return c(a)},t.wbg.__wbindgen_closure_wrapper1018=function(n,e,r){var a=M(n,e,341,H);return c(a)},(typeof o=="string"||typeof Request=="function"&&o instanceof Request||typeof URL=="function"&&o instanceof URL)&&(o=fetch(o));let{instance:g,module:s}=await D(await o,t);return i=g.exports,F.__wbindgen_wasm_module=s,i}var I=F;(async()=>(await I(),x()))();
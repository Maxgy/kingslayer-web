(self.webpackChunkkingslayer_web=self.webpackChunkkingslayer_web||[]).push([[417],{936:(n,e,t)=>{"use strict";t.a(n,(async r=>{t.d(e,{BL:()=>p,jZ:()=>E,Xl:()=>x,h9:()=>C,Dz:()=>j,kF:()=>A,ug:()=>D,E_:()=>T,L7:()=>V,f$:()=>Y,MY:()=>L,sV:()=>q,_y:()=>z,Yj:()=>F,XP:()=>M,zP:()=>O,td:()=>P,Ct:()=>R,uQ:()=>U,RV:()=>X,iY:()=>B,Or:()=>I,oH:()=>H});var _=t(393);n=t.hmd(n);var u=r([_]);_=(u.then?await u:u)[0];const o=new Array(32).fill(void 0);function c(n){return o[n]}o.push(void 0,null,!0,!1);let f=o.length;let i=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let a=null;function b(){return null!==a&&a.buffer===_.memory.buffer||(a=new Uint8Array(_.memory.buffer)),a}function d(n,e){return i.decode(b().subarray(n,n+e))}function l(n){f===o.length&&o.push(o.length+1);const e=f;return f=o[e],o[e]=n,e}let s=0,w=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const g="function"==typeof w.encodeInto?function(n,e){return w.encodeInto(n,e)}:function(n,e){const t=w.encode(n);return e.set(t),{read:n.length,written:t.length}};function y(n,e,t){if(void 0===t){const t=w.encode(n),r=e(t.length);return b().subarray(r,r+t.length).set(t),s=t.length,r}let r=n.length,_=e(r);const u=b();let o=0;for(;o<r;o++){const e=n.charCodeAt(o);if(e>127)break;u[_+o]=e}if(o!==r){0!==o&&(n=n.slice(o)),_=t(_,r,r=o+3*n.length);const e=b().subarray(_+o,_+r);o+=g(n,e).written}return s=o,_}let h=null;function m(){return null!==h&&h.buffer===_.memory.buffer||(h=new Int32Array(_.memory.buffer)),h}function p(){_.start()}function v(n,e){try{return n.apply(this,e)}catch(n){_.__wbindgen_exn_store(l(n))}}function k(n,e){return b().subarray(n/1,n/1+e)}function E(n,e,t){var r=y(alert(d(e,t)),_.__wbindgen_malloc,_.__wbindgen_realloc),u=s;m()[n/4+1]=u,m()[n/4+0]=r}function x(n,e,t){var r=y(prompt(d(e,t)),_.__wbindgen_malloc,_.__wbindgen_realloc),u=s;m()[n/4+1]=u,m()[n/4+0]=r}function C(){return l(new Error)}function j(n,e){var t=y(c(e).stack,_.__wbindgen_malloc,_.__wbindgen_realloc),r=s;m()[n/4+1]=r,m()[n/4+0]=t}function A(n,e){try{console.error(d(n,e))}finally{_.__wbindgen_free(n,e)}}function D(n){!function(n){const e=c(n);(function(n){n<36||(o[n]=f,f=n)})(n)}(n)}function T(){return v((function(n,e){c(n).getRandomValues(c(e))}),arguments)}function V(){return v((function(n,e,t){c(n).randomFillSync(k(e,t))}),arguments)}function Y(){return l(n)}function L(){return v((function(){return l(self.self)}),arguments)}function q(){return v((function(n,e,t){return l(c(n).require(d(e,t)))}),arguments)}function z(n){return l(c(n).crypto)}function F(n){return l(c(n).msCrypto)}function M(n){return void 0===c(n)}function O(n){return l(c(n).buffer)}function P(n){return l(new Uint8Array(c(n)))}function R(n,e,t){c(n).set(c(e),t>>>0)}function U(n){return c(n).length}function X(n){return l(new Uint8Array(n>>>0))}function B(n,e,t){return l(c(n).subarray(e>>>0,t>>>0))}function I(n,e){throw new Error(d(n,e))}function H(){return l(_.memory)}}))},393:(n,e,t)=>{"use strict";var r=([r])=>t.v(e,n.id,"4e0cf73d2b5b34d71c9c",{"./kingslayer_wasm_bg.js":{__wbg_alert_11a5936d1b406551:r.jZ,__wbg_prompt_72b0f0b08f4b6ba3:r.Xl,__wbg_new_59cb74e423758ede:r.h9,__wbg_stack_558ba5917b466edd:r.Dz,__wbg_error_4bb6c2a97407129a:r.kF,__wbindgen_object_drop_ref:r.ug,__wbg_getRandomValues_57e4008f45f0e105:r.E_,__wbg_randomFillSync_d90848a552cbd666:r.L7,__wbg_static_accessor_MODULE_39947eb3fe77895f:r.f$,__wbg_self_f865985e662246aa:r.MY,__wbg_require_c59851dfa0dc7e78:r.sV,__wbg_crypto_bfb05100db79193b:r._y,__wbg_msCrypto_f6dddc6ae048b7e2:r.Yj,__wbindgen_is_undefined:r.XP,__wbg_buffer_9e184d6f785de5ed:r.zP,__wbg_new_e8101319e4cf95fc:r.td,__wbg_set_e8ae7b27314e8b98:r.Ct,__wbg_length_2d56cb37075fcfb1:r.uQ,__wbg_newwithlength_a8d1dbcbe703a5c6:r.RV,__wbg_subarray_901ede8318da52a6:r.iY,__wbindgen_throw:r.Or,__wbindgen_memory:r.oH}});t.a(n,(n=>{var e=n([t(936)]);return e.then?e.then(r):r(e)}),1)},417:(n,e,t)=>{"use strict";t.a(n,(async n=>{t.r(e);var r=t(936),_=n([r]);(0,(r=(_.then?await _:_)[0]).BL)()}))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["embedded"],{2909:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("6b75");function a(e){if(Array.isArray(e))return Object(n["a"])(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function u(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var c=r("06c5");r("d9e2");function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return a(e)||u(e)||Object(c["a"])(e)||d()}},"466d":function(e,t,r){"use strict";var n=r("c65b"),a=r("d784"),u=r("825a"),c=r("50c4"),d=r("577e"),o=r("1d80"),i=r("dc4a"),l=r("8aa5"),s=r("14c3");a("match",(function(e,t,r){return[function(t){var r=o(this),a=void 0==t?void 0:i(t,e);return a?n(a,t,r):new RegExp(t)[e](d(r))},function(e){var n=u(this),a=d(e),o=r(t,n,a);if(o.done)return o.value;if(!n.global)return s(n,a);var i=n.unicode;n.lastIndex=0;var b,p=[],f=0;while(null!==(b=s(n,a))){var m=d(b[0]);p[f]=m,""===m&&(n.lastIndex=l(a,c(n.lastIndex),i)),f++}return 0===f?null:p}]}))},"6b5b":function(e,t,r){"use strict";r("ccb5")},ccb5:function(e,t,r){},d1e1:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=function(e){return Object(n["t"])("data-v-652f9177"),e=e(),Object(n["r"])(),e},u={class:"add-form"},c=Object(n["g"])(" Paste YouTube video url:  "),d=a((function(){return Object(n["f"])("input",{type:"submit",value:"Add",id:"add-button"},null,-1)})),o={key:0},i={class:"container"},l=["src"],s=["onClick"];function b(e,t,r,a,b,p){return Object(n["q"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",u,[Object(n["f"])("form",{onSubmit:t[1]||(t[1]=Object(n["G"])((function(){return p.addEmbeddedSound&&p.addEmbeddedSound.apply(p,arguments)}),["prevent"]))},[c,Object(n["F"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return b.urlInput=e})},null,512),[[n["B"],b.urlInput]]),d],32),b.error?(Object(n["q"])(),Object(n["e"])("p",o,Object(n["z"])(b.error),1)):Object(n["d"])("",!0)]),Object(n["f"])("div",i,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(b.embeddedSounds,(function(e){return Object(n["q"])(),Object(n["e"])("div",{key:e.id,class:"item"},[Object(n["f"])("iframe",{width:"560",height:"315",src:e[1],title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;\r\n              picture-in-picture",allowfullscreen:""},"\r\n      ",8,l),Object(n["f"])("button",{onClick:function(t){return p.deleteEmbeddedSound(e[2])}},"delete",8,s)])})),128))]),Object(n["F"])(Object(n["f"])("p",null,"...loading",512),[[n["C"],b.loading]])],64)}var p=r("b85c"),f=r("2909"),m=r("1da1"),v=(r("96cf"),r("ac1f"),r("466d"),r("5ce5")),h={name:"Embedded.vue",data:function(){return{retrievedUrls:[],embeddedSounds:[],loading:!1,urlInput:null,error:null}},methods:{getEmbeddedSounds:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r,n,a,u,c,d,o,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="/api/embedded_sounds/",e.loading=!0,t.prev=2,t.next=5,v["a"].get(r);case 5:a=t.sent,(n=e.retrievedUrls).push.apply(n,Object(f["a"])(a.data)),u=Object(p["a"])(e.retrievedUrls),t.prev=8,u.s();case 10:if((c=u.n()).done){t.next=21;break}return d=c.value,o="https://www.youtube.com/oembed?url=".concat(d.url),t.next=15,v["a"].get(o);case 15:i=t.sent,l=i.data.html.match(/src="([^"]+)"/),l.push(d.id),e.embeddedSounds.push(l);case 19:t.next=10;break;case 21:t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](8),u.e(t.t0);case 26:return t.prev=26,u.f(),t.finish(26);case 29:e.loading=!1,console.log(e.embeddedSounds),t.next=36;break;case 33:t.prev=33,t.t1=t["catch"](2),console.log(t.t1);case 36:case"end":return t.stop()}}),t,null,[[2,33],[8,23,26,29]])})))()},addEmbeddedSound:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.urlInput&&e.urlInput.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?(?:youtube\.com|youtu.be)(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/)){t.next=3;break}return e.error="Provided answer does not match the correct url pattern. Please use only links to YouTube videos.",t.abrupt("return");case 3:return r="/api/embedded_sounds/",t.prev=4,t.next=7,v["a"].post(r,{url:e.urlInput});case 7:e.urlInput=null,location.reload(),e.error&&(e.error=null),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[4,12]])})))()},deleteEmbeddedSound:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="/api/embedded_sounds/".concat(e,"/"),t.prev=1,t.next=4,v["a"].delete(r);case 4:location.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}},created:function(){this.getEmbeddedSounds()}},j=(r("6b5b"),r("6b0d")),w=r.n(j);const O=w()(h,[["render",b],["__scopeId","data-v-652f9177"]]);t["default"]=O}}]);
//# sourceMappingURL=embedded.3f32e90d.js.map
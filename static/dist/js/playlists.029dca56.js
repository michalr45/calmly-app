(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playlists"],{1276:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),i=n("e330"),c=n("d784"),l=n("44e7"),u=n("825a"),o=n("1d80"),s=n("4840"),f=n("8aa5"),p=n("50c4"),d=n("577e"),b=n("dc4a"),v=n("4dae"),g=n("14c3"),h=n("9263"),y=n("9f7f"),m=n("d039"),x=y.UNSUPPORTED_Y,j=4294967295,O=Math.min,w=[].push,k=i(/./.exec),I=i(w),R=i("".slice),S=!m((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));c("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=d(o(this)),c=void 0===n?j:n>>>0;if(0===c)return[];if(void 0===e)return[i];if(!l(e))return a(t,i,e,c);var u,s,f,p=[],b=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,y=new RegExp(e.source,b+"g");while(u=a(h,y,i)){if(s=y.lastIndex,s>g&&(I(p,R(i,g,u.index)),u.length>1&&u.index<i.length&&r(w,p,v(u,1)),f=u[0].length,g=s,p.length>=c))break;y.lastIndex===u.index&&y.lastIndex++}return g===i.length?!f&&k(y,"")||I(p,""):I(p,R(i,g)),p.length>c?v(p,0,c):p}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var r=o(this),c=void 0==t?void 0:b(t,e);return c?a(c,t,r,n):a(i,d(r),t,n)},function(e,r){var a=u(this),c=d(e),l=n(i,a,c,r,i!==t);if(l.done)return l.value;var o=s(a,RegExp),b=a.unicode,v=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(x?"g":"y"),h=new o(x?"^(?:"+a.source+")":a,v),y=void 0===r?j:r>>>0;if(0===y)return[];if(0===c.length)return null===g(h,c)?[c]:[];var m=0,w=0,k=[];while(w<c.length){h.lastIndex=x?0:w;var S,E=g(h,x?R(c,w):c);if(null===E||(S=O(p(h.lastIndex+(x?w:0)),c.length))===m)w=f(c,w,b);else{if(I(k,R(c,m,w)),k.length===y)return k;for(var P=1;P<=E.length-1;P++)if(I(k,E[P]),k.length===y)return k;w=m=S}}return I(k,R(c,m)),k}]}),!S,x)},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),i=n("825a"),c=n("1626"),l=n("c6b6"),u=n("9263"),o=r.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var r=a(n,e,t);return null!==r&&i(r),r}if("RegExp"===l(e))return a(u,e,t);throw o("RegExp#exec called on incompatible receiver")}},2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("6b75");function a(e){if(Array.isArray(e))return Object(r["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var c=n("06c5");n("d9e2");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return a(e)||i(e)||Object(c["a"])(e)||l()}},"426f":function(e,t,n){"use strict";n("b17c")},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),c=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==a(e))}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},b17c:function(e,t,n){},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),i=n("9263"),c=n("d039"),l=n("b622"),u=n("9112"),o=l("species"),s=RegExp.prototype;e.exports=function(e,t,n,f){var p=l(e),d=!c((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),b=d&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!d||!b||n){var v=r(/./[p]),g=t(p,""[e],(function(e,t,n,a,c){var l=r(e),u=t.exec;return u===i||u===s.exec?d&&!c?{done:!0,value:v(t,n,a)}:{done:!0,value:l(n,t,a)}:{done:!1}}));a(String.prototype,e,g[0]),a(s,p,g[1])}f&&u(s[p],"sham",!0)}},ea2f:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),a={class:"container"},i=["onClick"],c={class:"container"},l=["src"],u={loop:"",autoplay:""},o=["src"],s=["value"];function f(e,t,n,f,p,d){return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",a,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(p.playlists,(function(e){return Object(r["q"])(),Object(r["e"])("div",{key:e.id,class:"playlist-item"},[Object(r["f"])("button",{onClick:function(t){d.playPlaylist(e.id),d.changeButtonColor(t.target)},class:"playlist-btn"},Object(r["z"])(e.name),9,i)])})),128))]),Object(r["f"])("div",c,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(p.playlistItems,(function(e){return Object(r["q"])(),Object(r["e"])("div",{class:"icon-box",key:e.id},[Object(r["f"])("img",{src:e[0],onClick:t[0]||(t[0]=function(e){return d.playAudio(e)})},null,8,l),Object(r["f"])("audio",u,[Object(r["f"])("source",{src:e[1]},null,8,o)]),Object(r["f"])("input",{type:"range",value:d.setDefaultSliderPosition(e[2]),min:"0",max:"100",step:"1",onChange:t[1]||(t[1]=function(e){return d.setVolume(e,e.target.value)})},null,40,s)])})),128))])],64)}var p=n("b85c"),d=n("2909"),b=n("1da1"),v=(n("ac1f"),n("1276"),n("96cf"),n("5ce5")),g={name:"Playlists",data:function(){return{playlists:[],playlistItems:[]}},methods:{getPlaylists:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="/api/playlists/playlists/",t.prev=1,t.next=4,v["a"].get(n);case 4:a=t.sent,(r=e.playlists).push.apply(r,Object(d["a"])(a.data)),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},playPlaylist:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var a,i,c,l,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.playlistItems=[],a="/api/playlists/playlists/".concat(e,"/"),n.prev=2,n.next=5,v["a"].get(a);case 5:c=n.sent,(i=t.playlistItems).push.apply(i,Object(d["a"])(c.data.sounds)),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.log(n.t0);case 12:return n.next=14,Object(r["m"])();case 14:for(l=document.querySelectorAll("audio"),u=0;u<l.length;u++)l[u].volume=t.playlistItems[u][2];case 16:case"end":return n.stop()}}),n,null,[[2,9]])})))()},playAudio:function(e){var t=e.target.nextSibling;t.paused?t.play():t.pause()},setVolume:function(e,t){var n=e.target.previousSibling;n.volume=t/100},setDefaultSliderPosition:function(e){return"1"!==e&&"0"!==e?(e=e.split(".")[1],1===e.length&&(e+="0"),e):"1"===e?(e="100",e):"0"===e?(e="0",e):void 0},changeButtonColor:function(e){var t,n=document.querySelectorAll(".playlist-btn"),r=Object(p["a"])(n);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.classList.remove("active")}}catch(i){r.e(i)}finally{r.f()}e.classList.toggle("active")}},created:function(){this.getPlaylists()}},h=(n("426f"),n("6b0d")),y=n.n(h);const m=y()(g,[["render",f],["__scopeId","data-v-52f2c6db"]]);t["default"]=m}}]);
//# sourceMappingURL=playlists.029dca56.js.map
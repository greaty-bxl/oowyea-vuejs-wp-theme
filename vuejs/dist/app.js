(function(t){function e(e){for(var o,s,r=e[0],p=e[1],c=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(t[o]=p[o]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var p=n[r];0!==a[p]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],p=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"47f6":function(t,e,n){"use strict";var o=n("4fff"),a=n.n(o);a.a},"4be8":function(t,e,n){"use strict";var o=n("a3ba"),a=n.n(o);a.a},"4fff":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),t._l(t.pages,(function(e,o){return n("div",{key:o,staticClass:"page sections",attrs:{"data-state":o}},t._l(e,(function(e,o){return n("div",{key:e.post_name,staticClass:"section",attrs:{id:e.post_name,"data-permalink":e.permalink,"data-index":o,"data-title":e.post_title}},["index"===e.template?n("Index",{attrs:{post:e}}):t._e(),"page"===e.template?n("Page",{attrs:{post:e}}):t._e(),"template-demo1"===e.template?n("Demo1",{attrs:{post:e}}):t._e(),"template-demo2"===e.template?n("Demo2",{attrs:{post:e}}):t._e()],1)})),0)})),n("Footer")],2)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{staticClass:"clear"}),n("div",{attrs:{id:"header-logo"}}),n("div",{attrs:{id:"header-menu"}}),n("div",{attrs:{id:"right-panel"}},[n("div",{staticClass:"btn",attrs:{id:"burger-menu"}}),n("div",{staticClass:"btn",attrs:{id:"cart-sidebar"}}),n("div",{staticClass:"btn",attrs:{id:"user-sidebar"}}),n("div",{staticClass:"btn",attrs:{id:"search-sidebar"}}),n("div",{staticClass:"mask"}),n("div",{staticClass:"side-container",domProps:{innerHTML:t._s(t.sideEl)}})]),n("div",{staticClass:"clear"})])},r=[],p=(n("7db0"),{data:function(){return{sideEl:""}},mounted:function(){var t=this;console.log(this.wp.menus);var e=this.$;e(this.$el).find("#header-menu").html(this.wp.menus["header-menu"]);var n=this.$el;function o(t){var n=e(".section").first().innerWidth();e(t).width(n)}function a(){e("#right-panel .mask").animate({opacity:0},200,(function(){e("#right-panel .mask").css("display","none")})),e("#right-panel .side-container").animate({right:"-30vw"},400,"easeInOutQuart")}o(n),e(window).resize((function(){o(n)})),e(document).on("click","#right-panel > .btn",(function(n){n.preventDefault(),e("#right-panel .mask").css("display","block").animate({opacity:1},200),e("#right-panel .side-container").animate({right:0},400,"easeInOutQuart"),"burger-menu"==n.target.id&&(t.sideEl=t.wp.menus["burger-menu"]+t.wp.sidebars["burger-menu-area"]),"cart-sidebar"==n.target.id&&(t.sideEl=t.wp.sidebars["ecommerce-menu-area"]),"user-sidebar"==n.target.id&&(t.sideEl=t.wp.sidebars["user-menu-area"]),"search-sidebar"==n.target.id&&(t.sideEl=t.wp.sidebars["search-menu-area"])})),e(document).on("click","#right-panel > .mask",(function(t){t.preventDefault(),a()})),e("#right-panel .side-container").on("click","a",(function(){a()}))}}),c=p,l=(n("47f6"),n("2877")),u=Object(l["a"])(c,s,r,!1,null,null,null),d=u.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.post.post_title)}}),n("p",[t._v("Index template (posts loop)")]),t._l(t.post.children,(function(e){return n("div",{key:e.ID},[n("h2",{domProps:{innerHTML:t._s(e.post_title)}}),n("p",{domProps:{innerHTML:t._s(e.post_content)}}),n("a",{attrs:{href:e.permalink}},[t._v("Read more")])])})),n("div",{staticClass:"clear"})],2)},h=[],m={components:{},props:{post:Object},mounted:function(){}},v=m,g=Object(l["a"])(v,f,h,!1,null,null,null),b=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.post.post_title)}}),n("p",[t._v("Page template")]),n("div",{staticClass:"clear"})])},w=[],y={components:{},props:{post:Object},mounted:function(){}},x=y,T=Object(l["a"])(x,_,w,!1,null,null,null),k=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.post.post_title)}}),n("p",{domProps:{innerHTML:t._s(t.post.post_content)}}),n("div",{staticClass:"clear"})])},j=[],C={components:{},props:{post:Object},mounted:function(){var t=this.$;t(this.$el).parents(".section").css({"background-color":this.post.metas.background_color[0]})}},H=C,$=Object(l["a"])(H,O,j,!1,null,null,null),P=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",[t._v(t._s(t.post.post_title))]),n("p",[t._v("Demo 2 template")]),n("div",{staticClass:"clear"})])},M=[],S={components:{},props:{post:Object},mounted:function(){var t=this.$;t(this.$el).css("height","200vh")}},D=S,L=Object(l["a"])(D,E,M,!1,null,null,null),I=L.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"footer"}},[n("div",{staticClass:"clear"}),t._v(" footer "),n("div",{staticClass:"clear"})])}],F={},R=F,A=(n("4be8"),Object(l["a"])(R,Q,J,!1,null,null,null)),q=A.exports,z=function(t){var e,n=t.$;if(t.wp.sections.length>1){var o=n('.section[data-permalink="'+window.location.href+'"]');n("#app")&&o&&(n("#app").data("scrolling","init-scrolltop"),n("#app").scrollTop(o.position().top+n("#app").scrollTop()),clearTimeout(e),e=setTimeout((function(){n("#app").data("scrolling","")}),15))}};function N(t){var e,n,o=0,a=t.$,i=0;function s(e){i||(i=1,a("#app").stop().animate({scrollTop:e+"px"},500,"easeInOutQuart").promise().then((function(){setTimeout((function(){i=0,a("#app").data("scrolling","");var e=a("#"+n).data("permalink");t.pushHistory(e)}),150)})))}function r(){var t=a("#app").scrollTop();t>o?a(".section").each((function(e,o){if(a(o).position().top+t>t&&a(o).position().top+t<t+a("#app").outerHeight()&&n!=a(o).attr("id")&&(n=a(o).attr("id"),t=a(o).position().top+t,s(t)),a(o).position().top+t<=t&&a(o).position().top+a(o).outerHeight()+t>t+a("#app").outerHeight()){var i=a(o).position().top+t+a(o).outerHeight();i-t-a("#app").outerHeight()<=a("#app").outerHeight()/2&&(t=a(o).position().top+a(o).outerHeight()-a("#app").outerHeight()+t,s(t))}})):t<=o&&a(".section").each((function(e,o){if(a(o).position().top+t<=t&&a(o).position().top+a(o).outerHeight()+t>t)if(n!=a(o).attr("id"))n=a(o).attr("id"),t=a(o).position().top+a(o).outerHeight()-a("#app").outerHeight()+t,s(t);else{var i=a(o).position().top;-1*i<=a("#app").outerHeight()/2&&(t=a(o).position().top+t,s(t))}})),o=t}a("#app").on("scroll",(function(){var t=a("#app").data("scrolling");i||t&&"scroll-sections"!=t?o=a("#app").scrollTop():(a("#app").data("scrolling","scroll-sections"),clearTimeout(e),e=setTimeout(r,50))}))}var U=N,W=(n("ac1f"),n("841c"),function(t){var e,n=t.$;function o(o,a){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(a&&0===a.search(t.wp.options.siteurl))var s=1;if(s){o.preventDefault();var r=n('.section[data-permalink="'+a+'"]'),p=r.length;if(p){if(document.location.href==a&&i)return;var c;c=r.position().top+n("#app").scrollTop()>n("#app").scrollTop()?"100vh":"-100vh";var l=r.clone();l.css({position:"fixed",top:c,left:0,width:"100%","overflow-y":"scroll",opacity:0}),r.parent().prepend(l),n("#app").data("scrolling","links-and-anchors"),i&&t.pushHistory(a),l.stop().animate({top:"0",opacity:1},500,"easeOutQuart",(function(){l.remove(),n("#app").scrollTop(r.position().top+n("#app").scrollTop()),clearTimeout(e),e=setTimeout((function(){n("#app").data("scrolling","")}),15)}))}else n(document).trigger({type:"new_page",href:a})}}n(document).on("click","a",(function(t){var e=n(t.target).prop("href");o(t,e)})),window.onpopstate=function(t){o(t,document.location.href,!1)}}),B=(n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d"),function(t,e,n){var o=t.$;function a(t,e,n){var o=new URL(t),a=o.searchParams;a.set(e,n),o.search=a.toString();var i=o.toString();return i}o.get(a(e,"add_to_json",1),(function(o){t.pushHistory(e);var a=JSON.parse(o);n(a)}))}),G=function(t,e,n){var o=t.$,a=o('[data-state="next"]');o('[data-state="next"]').css({position:"fixed",width:"100%",top:"0px",left:"0px",height:"100vh","overflow-y":"scroll",opacity:0,display:"block"}),o('[data-state="next"]').find(".section").hide(),o('[data-permalink="'+e+'"]').show(),a.animate({opacity:1},200,(function(){o("#app").scrollTop(0),n(),setTimeout((function(){o('[data-state="next"]').css({position:"relative",opacity:0,display:"none"})}),2)}))},K={name:"App",data:function(){return{sections:[],pages:{current:{},next:{}}}},components:{Header:d,Index:b,Page:k,Demo1:P,Demo2:I,Footer:q},mounted:function(){var t=this;console.log("App mounted"),console.log(this.wp),this.pages["current"]=this.wp.sections,this.$(document).ready((function(e){console.log("JQuery Ready",e,t.ajaxurl),z(t),U(t),W(t),e(document).on("new_page",(function(e){B(t,e.href,(function(n){console.log(n),t.pages["next"]=n.sections,setTimeout((function(){G(t,e.href,(function(){t.wp=n,t.pages["current"]=n.sections,setTimeout((function(){z(t),t.pages["next"]={}}),1)}))}),1)}))}))}))}},V=K,X=(n("034f"),Object(l["a"])(V,a,i,!1,null,null,null)),Y=X.exports,Z=function(t){var e=this,n=this.$;history.pushState instanceof Function&&t!=document.location.href&&history.pushState({urlPath:t},"",t),setTimeout((function(){var o=n('.section[data-permalink="'+t+'"]').data("title");o&&n("title").text(o+" | "+e.wp.options.blogname)}),2)};o["a"].config.productionTip=!1,o["a"].prototype.$=window.jquery,o["a"].prototype.ajaxurl=window.ajaxurl,o["a"].prototype.wp=window.wp,o["a"].prototype.pushHistory=Z,new o["a"]({render:function(t){return t(Y)}}).$mount("#app")},"85ec":function(t,e,n){},a3ba:function(t,e,n){}});
//# sourceMappingURL=app.js.map
(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},"087c":function(t,e,n){"use strict";var s=n("257a"),a=n.n(s);a.a},"0fb9":function(t,e,n){},"257a":function(t,e,n){},"3ea0":function(t,e,n){},"3ea6":function(t,e,n){"use strict";var s=n("de46"),a=n.n(s);a.a},"47f6":function(t,e,n){"use strict";var s=n("4fff"),a=n.n(s);a.a},"4be8":function(t,e,n){"use strict";var s=n("a3ba"),a=n.n(s);a.a},"4fff":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),t._l(t.pages,(function(e,s){return n("div",{key:s,staticClass:"page sections",attrs:{"data-state":s}},t._l(e,(function(e,s){return n("div",{key:e.post_name,staticClass:"section",attrs:{id:e.post_name,"data-permalink":e.permalink,"data-index":s,"data-title":e.post_title}},["404"===e.template?n("Comp404",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e(),"archive"===e.template?n("Archive",{attrs:{posts:e.children,title:t.wp.wp_query.queried_object.label},on:{template_mounted:t.template_mounted}}):t._e(),"category"===e.template?n("Category",{attrs:{cat:t.wp.wp_query.queried_object},on:{template_mounted:t.template_mounted}}):t._e(),"author"===e.template?n("Author",{attrs:{author:t.wp.wp_query.queried_object.data},on:{template_mounted:t.template_mounted}}):t._e(),"index"===e.template?n("Index",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e(),"page"===e.template?n("Page",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e(),"search"===e.template?n("Search",{attrs:{posts:t.wp.wp_query.posts,s:t.wp.wp_query.query_vars.s},on:{template_mounted:t.template_mounted}}):t._e(),"single"===e.template?n("Single",{attrs:{post:t.wp.wp_query.queried_object},on:{template_mounted:t.template_mounted}}):t._e(),"tag"===e.template?n("Tag",{attrs:{tag:t.wp.wp_query.queried_object},on:{template_mounted:t.template_mounted}}):t._e(),"template-demo1"===e.template?n("Demo1",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e(),"template-demo2"===e.template?n("Demo2",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e(),"phaser"===e.template?n("Phaser",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e(),"greaty-home"===e.template?n("Greatyhome",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e(),"greaty-projets"===e.template?n("Greatyprojets",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e(),"greaty-single"===e.template?n("Greatysingle",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e(),"greaty-services"===e.template?n("Greatyservices",{attrs:{post:e},on:{template_mounted:t.template_mounted}}):t._e()],1)})),0)})),n("Footer")],2)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{staticClass:"clear"}),n("div",{attrs:{id:"header-logo"}}),n("div",{attrs:{id:"header-menu"}}),n("div",{attrs:{id:"right-panel"}},[n("div",{staticClass:"btn",attrs:{id:"burger-menu"}},[n("vue-fontawesome",{attrs:{icon:"file",size:"2",color:"lightgray"}})],1),n("div",{staticClass:"btn",attrs:{id:"cart-sidebar"}}),n("div",{staticClass:"btn",attrs:{id:"user-sidebar"}}),n("div",{staticClass:"btn",attrs:{id:"search-sidebar"}}),n("div",{staticClass:"mask"}),n("div",{staticClass:"side-container",domProps:{innerHTML:t._s(t.sideEl)}})]),n("div",{staticClass:"clear"})])},r=[],l=(n("7db0"),{data:function(){return{sideEl:""}},mounted:function(){var t=this,e=this.$;e(this.$el).find("#header-menu").html(this.wp.menus["header-menu"]);var n=this.$el;function s(t){var n=e(".section").first().innerWidth();e(t).width(n)}function a(){e("#right-panel .mask").animate({opacity:0},200,(function(){e("#right-panel .mask").css("display","none")})),e("#right-panel .side-container").animate({right:"-30vw"},400,"easeInOutQuart")}s(n),e(window).resize((function(){s(n)})),e(document).on("click","#right-panel > .btn",(function(n){n.preventDefault(),e("#right-panel .mask").css("display","block").animate({opacity:1},200),e("#right-panel .side-container").animate({right:0},400,"easeInOutQuart"),"burger-menu"==n.target.id&&(t.sideEl=t.wp.menus["burger-menu"]+t.wp.sidebars["burger-menu-area"]),"cart-sidebar"==n.target.id&&(t.sideEl=t.wp.sidebars["ecommerce-menu-area"]),"user-sidebar"==n.target.id&&(t.sideEl=t.wp.sidebars["user-menu-area"]),"search-sidebar"==n.target.id&&(t.sideEl=t.wp.sidebars["search-menu-area"])})),e(document).on("click","#right-panel > .mask",(function(t){t.preventDefault(),a()})),e("#right-panel .side-container").on("click","a",(function(){a()}))}}),c=l,p=(n("47f6"),n("2877")),u=Object(p["a"])(c,i,r,!1,null,null,null),d=u.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",[t._v("404")]),n("p",[t._v("404 template")]),n("div",{staticClass:"clear"})])}],f={components:{},props:{post:Object},mounted:function(){this.$emit("template_mounted")}},_=f,h=Object(p["a"])(_,m,v,!1,null,null,null),g=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"global-slide"},[n("div",{staticClass:"clear"}),n("div",{staticClass:"div-parent-slide-text"},[n("swiper",{staticClass:"swiper1",attrs:{options:t.swiperOption1}},t._l(t.posts,(function(e){return n("swiper-slide",{key:e.ID,staticClass:"slide-full-view"},[n("h2",{domProps:{innerHTML:t._s(e.post_title)}}),n("p",{domProps:{innerHTML:t._s(e.post_content)}}),n("a",{attrs:{href:e.permalink}},[t._v("Read more")])])})),1),t._m(0)],1),t._m(1),n("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.posts,(function(t){return n("swiper-slide",{key:t.ID,attrs:{src:t.thumb}},[n("img",{attrs:{height:"100%",width:"100%",src:t.thumb}})])})),1),n("div",{staticClass:"clear"})],1)])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fleches"},[n("div",{staticClass:"flex-gauche"},[t._v("G")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fleches"},[n("div",{staticClass:"flex-droite"},[t._v("D")])])}],C=n("7212"),y=(n("a7a3"),{props:{title:String,posts:Array},mounted:function(){console.log(this.posts),this.$emit("template_mounted")},name:"swiper-example-default",title:"Default",init:!0,components:{Swiper:C["Swiper"],SwiperSlide:C["SwiperSlide"]},data:function(){return{swiperOption:{slidesPerView:3,initialSlide:0,loop:!0,allowTouchMove:!1,runCallbacksOnInit:!0,navigation:{nextEl:".flex-gauche",prevEl:".flex-droite"}},swiperOption1:{slidesPerView:1,initialSlide:0,loop:!0,mousewheel:!1,allowTouchMove:!1,runCallbacksOnInit:!0,setTransition:2e3,navigation:{nextEl:".flex-gauche",prevEl:".flex-droite"}}}}}),x=y,T=(n("761c"),Object(p["a"])(x,b,w,!1,null,null,null)),$=T.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.author.display_name)}}),n("p",[t._v("Author template")]),n("div",{staticClass:"clear"})])},O=[],k={components:{},props:{author:Object},mounted:function(){this.$emit("template_mounted")}},E=k,H=Object(p["a"])(E,j,O,!1,null,null,null),P=H.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.cat.cat_name)}}),n("p",[t._v("Category template")]),n("div",{staticClass:"clear"})])},M=[],L={components:{},props:{cat:Object},mounted:function(){this.$emit("template_mounted")}},q=L,D=Object(p["a"])(q,S,M,!1,null,null,null),I=D.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.post.post_title)}}),n("p",[t._v("Index template (posts loop)")]),t._l(t.post.children,(function(e){return n("div",{key:e.ID},[n("h2",{domProps:{innerHTML:t._s(e.post_title)}}),n("p",{domProps:{innerHTML:t._s(e.post_content)}}),n("a",{attrs:{href:e.permalink}},[t._v("Read more")])])})),n("div",{staticClass:"clear"})],2)},F=[],G={components:{},props:{post:Object},mounted:function(){this.$emit("template_mounted")}},W=G,z=Object(p["a"])(W,A,F,!1,null,null,null),Q=z.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.post.post_title)}}),n("p",[t._v("Page template")]),n("div",{domProps:{innerHTML:t._s(t.post.post_content)}}),n("div",{staticClass:"clear"})])},V=[],B={components:{},props:{post:Object},mounted:function(){this.$emit("template_mounted")}},J=B,R=Object(p["a"])(J,U,V,!1,null,null,null),N=R.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",[t._v("Search: "),n("span",{domProps:{innerHTML:t._s(t.s)}})]),n("p",[t._v("Search template")]),n("div",{staticClass:"clear"})])},X=[],K={components:{},props:{s:String,posts:Array},mounted:function(){this.$emit("template_mounted")}},Z=K,tt=Object(p["a"])(Z,Y,X,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.post.post_title)}}),n("div",{domProps:{innerHTML:t._s(t.post.post_content)}}),n("div",{staticClass:"clear"})])},st=[],at={components:{},props:{post:Object},mounted:function(){this.$emit("template_mounted")}},ot=at,it=Object(p["a"])(ot,nt,st,!1,null,null,null),rt=it.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.tag.name)}}),n("p",[t._v("Tag template")]),n("div",{staticClass:"clear"})])},ct=[],pt={components:{},props:{tag:Object},mounted:function(){this.$emit("template_mounted")}},ut=pt,dt=Object(p["a"])(ut,lt,ct,!1,null,null,null),mt=dt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.post.post_title)}}),n("div",{domProps:{innerHTML:t._s(t.post.post_content)}}),n("div",{staticClass:"clear"})])},ft=[],_t={components:{},props:{post:Object},mounted:function(){var t=this.$;t(this.$el).parents(".section").css({"background-color":this.post.metas.background_color[0]}),this.$emit("template_mounted")}},ht=_t,gt=Object(p["a"])(ht,vt,ft,!1,null,null,null),bt=gt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("div",{attrs:{id:"fixit1"}},[t._v("Fixed element: auto")]),n("div",{attrs:{id:"fixit2"}},[t._v("Fixed element: limited")]),n("h1",{staticClass:"on-screen title-demo2"},[t._v(t._s(t.post.post_title))]),n("p",[t._v("Demo 2 template")]),n("div",{staticClass:"clear"})])},Ct=[],yt=function(t,e){var n,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"auto",i=t.$,r=1;function l(t,e,s,a,o){var l=i(e);l.each((function(t,e){var l=i(e).parents(".section");!1===i(e).parent().hasClass("extra-wrapper-fixit")&&i(e).wrap('<div class="extra-wrapper-fixit"></div>');var c,p=i("#app").scrollTop(),u=l.position().top+i("#app").scrollTop(),d=u+l.outerHeight()-i("#app").outerHeight();i(e).parents(".section").hasClass("clone")&&(o="absolute"),c=(p<u||d<p)&&"limited"==o||"absolute"==o?d<p&&"absolute"!=o?0+l.outerHeight()-i("#app").outerHeight():0:-1*l.position().top,i(e).parent().css({position:"fixed",top:l.position().top+"px",width:l.innerWidth(),height:l.height(),overflow:"hidden","pointer-events":"none","touch-action":"none"}),i(e).css({position:"absolute",top:c,left:0,"margin-top":s,"margin-left":a,"pointer-events":"auto","touch-action":"none"}),i(e).unbind("wheel touchstart touchmove touchend").on("wheel touchstart touchmove touchend",(function(t){if("touchstart"==t.type&&(n=t.originalEvent.touches[0].clientY),"touchmove"==t.type){var e=t.originalEvent.touches[0].clientY;e<n?(i("#app").scrollTop(i("#app").scrollTop()+7),i("#app").data("scrolling")||i("#app").stop().animate({scrollTop:i("#app").scrollTop()+72*r+"px"},100,"easeInOutQuart")):e>n&&(i("#app").scrollTop(i("#app").scrollTop()-7),i("#app").data("scrolling")||i("#app").stop().animate({scrollTop:i("#app").scrollTop()-72*r+"px"},100,"easeInOutQuart")),r+=.1}"touchend"==t.type?r=1:i(this).css("pointer-events","none")}))}))}l(t,e,s,a,o),i("#app").on("scroll",(function(){l(t,e,s,a,o)})),i("#app").on("clone clone-move",(function(){l(t,e,s,a,o)}))},xt={components:{},props:{post:Object},mounted:function(){var t=this.$;this.$emit("template_mounted"),t(this.$el).css("height","200vh"),t(this.$el).parents(".section").css({"background-color":this.post.metas.background_color[0]}),t(".title-demo2").on("enter-screen",(function(e){var n;n=1!=e.sens&&0!=e.sens||"links-and-anchors"==e.scrollingType?12:500,t(".title-demo2").css("opacity","0").stop().delay(n).animate({opacity:1},500)})),t(".title-demo2").on("leave-screen",(function(){t(".title-demo2").stop().css("opacity","0")})),yt(this,"#fixit1","80vh","0"),yt(this,"#fixit2","80vh","50%","limited")}},Tt=xt,$t=(n("3ea6"),Object(p["a"])(Tt,wt,Ct,!1,null,null,null)),jt=$t.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),t.is_mobile?t._e():n("div",[t.login?n("div",["ui"==t.currentScreen?n("UserInterface"):t._e(),"game"==t.currentScreen?n("Game"):t._e(),"editor"==t.currentScreen?n("Editor"):t._e()],1):t._e(),t.login?t._e():n("div",[t._v(" Login ")])]),t.is_mobile?n("div",[t._v(" Join a screen"),n("br"),n("input",{attrs:{type:"text",name:"screen-id"}})]):t._e(),n("div",{staticClass:"clear"})])},kt=[],Et=n("d3ec"),Ht=n.n(Et),Pt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,s=window.jquery;s.ajax({url:window.ajaxurl,type:"post",data:{action:t,vars:e}}).done((function(t){n(t)})).fail((function(){n(!1)}))},St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" UI ")])},Mt=[],Lt={mounted:function(){}},qt=Lt,Dt=Object(p["a"])(qt,St,Mt,!1,null,null,null),It=Dt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["tanks"===t.mode?n("Tanks"):t._e()],1)},Ft=[],Gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"phaser-canvas-wrap"}})])}],zt=n("d4ef"),Qt=n.n(zt),Ut={mounted:function(){var t,e,n,s=this.$;function a(t){return Math.round((e+n/2)*(t/100))}function o(t){return Math.round((e+n)/2.2/999*t)}var i={parent:document.getElementById("phaser-canvas-wrap"),type:Qt.a.AUTO,width:"100%",height:"100vh",physics:{default:"arcade",arcade:{gravity:{y:300},debug:!1}},scene:{preload:function(){var t=this;e=s("#game").width(),n=s("#game").height(),console.log(e,n);var i=t.add.container(),r=t.add.rectangle(0,0,a(20),a(5),6711039),l=t.add.text(0,0,"board game",{fontFamily:"Arial",fontSize:o(40)});l.x=Math.round(r.x-l.width/2),l.y=Math.round(r.y-l.height/2),i.add(r),i.add(l),i.x=e/2,i.y=n/2},create:function(){},update:function(){}}};t=new Qt.a.Game(i),s(window).on("resize",(function(){t.destroy(!0),t=new Qt.a.Game(i)})),console.log(t,s)}},Vt=Ut,Bt=Object(p["a"])(Vt,Gt,Wt,!1,null,null,null),Jt=Bt.exports,Rt={components:{Tanks:Jt},data:function(){return{board:!1,mode:"tanks"}},mounted:function(){}},Nt=Rt,Yt=Object(p["a"])(Nt,At,Ft,!1,null,null,null),Xt=Yt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Editor ")])},Zt=[],te={mounted:function(){}},ee=te,ne=Object(p["a"])(ee,Kt,Zt,!1,null,null,null),se=ne.exports,ae={data:function(){return{login:!1,firstaction:!1,currentScreen:"ui",is_mobile:Ht.a.mobile()}},components:{UserInterface:It,Game:Xt,Editor:se},mounted:function(){var t=this,e=this.$;e("#header, #footer").hide(),e("#app").css("overflow-y","hidden"),Pt("is_user_logged",null,(function(e){e&&(t.login=!0)})),this.$emit("template_mounted")}},oe=ae,ie=Object(p["a"])(oe,Ot,kt,!1,null,null,null),re=ie.exports,le=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ce=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("div",[n("div",{staticClass:"div-text-homepage"},[n("p",{staticClass:"text-homepage"},[t._v(" Greaty est un studio de création graphique et digital basé à Bruxelles. Nous conceptualisons, concevons et codons toutes sortes de projets pour les marques, les startups et nous-mêmes. ")])])]),n("div",{staticClass:"post-client"},[n("div",{staticClass:"global-project"},[n("div",{staticClass:"client"},[n("div",{staticClass:"image-client"})]),n("p",{staticClass:"name-client"},[t._v("Lorem ipsum")]),n("p",{staticClass:"role-greaty"},[t._v("Corporated Website")])]),n("div",{staticClass:"global-project"},[n("div",{staticClass:"client"},[n("div",{staticClass:"image-client"})]),n("p",{staticClass:"name-client"},[t._v("Lorem ipsum")]),n("p",{staticClass:"role-greaty"},[t._v("Corporated Website")])]),n("div",{staticClass:"global-project"},[n("div",{staticClass:"client"},[n("div",{staticClass:"image-client"})]),n("p",{staticClass:"name-client"},[t._v("Lorem ipsum")]),n("p",{staticClass:"role-greaty"},[t._v("Corporated Website")])])]),n("div",{staticClass:"clear"})])}],pe={components:{},props:{post:Object},mounted:function(){var t=this.$;t(this.$el).parents(".section").css({"background-color":this.post.metas.background_color[0]}),this.$emit("template_mounted"),console.log(this.wp)}},ue=pe,de=(n("e881"),Object(p["a"])(ue,le,ce,!1,null,"03f71361",null)),me=de.exports,ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.post.post_title)}}),n("div",{domProps:{innerHTML:t._s(t.post.post_content)}}),n("div",{staticClass:"clear"})])},fe=[],_e={components:{},props:{post:Object},mounted:function(){var t=this.$;t(this.$el).parents(".section").css({"background-color":this.post.metas.background_color[0]}),this.$emit("template_mounted")}},he=_e,ge=Object(p["a"])(he,ve,fe,!1,null,null,null),be=ge.exports,we=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("h1",{domProps:{innerHTML:t._s(t.post.post_title)}}),n("div",{domProps:{innerHTML:t._s(t.post.post_content)}}),n("div",{staticClass:"clear"})])},Ce=[],ye={components:{},props:{post:Object},mounted:function(){var t=this.$;t(this.$el).parents(".section").css({"background-color":this.post.metas.background_color[0]}),this.$emit("template_mounted")}},xe=ye,Te=Object(p["a"])(xe,we,Ce,!1,null,null,null),$e=Te.exports,je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),t._m(0),n("section",[n("textcotact")],1)])},Oe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mainSection"},[n("span",{staticClass:"title"},[n("h1",[t._v("Dès qu'il s'agit de creativité, nous"),n("br"),t._v(" sommes là ! Dans le web, dans le print,"),n("br"),t._v(" nous prenons notre pied. ")])]),n("div",{staticClass:"grid-services"},[n("div",{staticClass:"item-services"},[n("div",{staticClass:"item-text"},[n("strong",{staticClass:"smallTile"},[t._v("Stratégie")]),n("br"),n("br"),t._v("- Consultance graphique"),n("br"),t._v("- Audit stratégie"),n("br"),t._v("- Stratégie de communication"),n("br"),t._v("- Conception publicitaire")]),n("div",{staticClass:"item-text"},[n("strong",{staticClass:"smallTile"},[t._v("Desing")]),n("br"),n("br"),t._v("- Direction artistique"),n("br"),t._v("- Identité visuelle"),n("br"),t._v("- Charte graphique"),n("br"),t._v("- Création de logo"),n("br"),t._v("- Brochure & catalogue"),n("br"),t._v("- Magazine & éditorial"),n("br"),t._v("- Rapport annuel "),n("br"),t._v("- Illustation"),n("br"),t._v("- Signalétique"),n("br"),t._v("- Matériels promotionnels"),n("br"),t._v("- Packaging"),n("br"),t._v("- Etc")]),n("div",{staticClass:"item-text"},[n("strong",{staticClass:"smallTile"},[t._v("Impression")]),n("br"),n("br"),t._v("- Papeterie"),n("br"),t._v("- Panneau"),n("br"),t._v("- Bâche"),n("br"),t._v("- Stand"),n("br"),t._v("- Vitrine"),n("br"),t._v("- Autocollant"),n("br"),t._v("- Véhicule"),n("br"),t._v("- Textile"),n("br"),t._v("- Etc")]),n("div",{staticClass:"item-text"},[n("strong",{staticClass:"smallTile"},[t._v("Digital design")]),n("br"),n("br"),t._v("- UI/UX design"),n("br"),t._v("- Direction artistique digitale"),n("br"),t._v("- Webdesign sites internet"),n("br"),t._v("- Webdesign applications"),n("br"),t._v("- Motion design")]),n("div",{staticClass:"item-text"},[n("strong",{staticClass:"smallTile"},[t._v("Dev Web")]),n("br"),n("br"),t._v("- Intégration HTML5/CSS3"),n("br"),t._v("- Développement PHP/MYSQL"),n("br"),t._v("- Développement de sites Web"),n("br"),t._v("- Application mobile"),n("br"),t._v("- Développement frontend"),n("br"),t._v("- CMS"),n("br"),t._v("- Intranets"),n("br"),t._v("- Développement Backend"),n("br"),t._v("- E-Commerce / Webshops")]),n("div",{staticClass:"item-text"},[n("strong",{staticClass:"smallTile"},[t._v("Tech Web")]),n("br"),n("br"),t._v("- (Web-)Hosting"),n("br"),t._v("- Domaines"),n("br"),t._v("- Serveur et stockage")])])])])}],ke=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ee=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"clear"}),n("div",{staticClass:"textbox"},[n("div",{staticClass:"div-text-contact"},[n("p",{staticClass:"text-contact"},[t._v(" Vous avez une idée."),n("br"),t._v(" Nous avons l'expertise pour la réaliser."),n("br"),t._v(" Faites-nous un "),n("u",[n("strong",[n("a",{attrs:{href:""}},[t._v("coucou")])])]),t._v(" :) ")])])])])}],He={name:"footer"},Pe=He,Se=(n("580d"),Object(p["a"])(Pe,ke,Ee,!1,null,null,null)),Me=Se.exports,Le={components:{textcotact:Me},props:{post:Object},mounted:function(){var t=this.$;t(this.$el).parents(".section").css({"background-color":this.post.metas.background_color[0]}),this.$emit("template_mounted")}},qe=Le,De=(n("087c"),Object(p["a"])(qe,je,Oe,!1,null,null,null)),Ie=De.exports,Ae=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Fe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"footer"}},[n("div",{staticClass:"clear"}),t._v(" footer "),n("div",{staticClass:"clear"})])}],Ge={},We=Ge,ze=(n("4be8"),Object(p["a"])(We,Ae,Fe,!1,null,null,null)),Qe=ze.exports,Ue=function(t){var e,n=t.$;if(t.wp.sections.length>1){var s=n('.section[data-permalink="'+window.location.href+'"]');n("#app")&&s&&(n("#app").data("scrolling","init-scrolltop"),n("#app").scrollTop(s.position().top+n("#app").scrollTop()),clearTimeout(e),e=setTimeout((function(){n("#app").data("scrolling","")}),15))}};function Ve(t){var e,n,s=0,a=t.$,o=0;function i(e){o||(o=1,a("#app").stop().animate({scrollTop:e+"px"},500,"easeInOutQuart").promise().then((function(){setTimeout((function(){o=0,a("#app").data("scrolling","");var e=a("#"+n).data("permalink");t.pushHistory(e)}),150)})))}function r(){var t=a("#app").scrollTop();t>s?a(".section").each((function(e,s){if(a(s).position().top+t>t&&a(s).position().top+t<t+a("#app").outerHeight()&&n!=a(s).attr("id")&&(n=a(s).attr("id"),t=a(s).position().top+t,i(t)),a(s).position().top+t<=t&&a(s).position().top+a(s).outerHeight()+t>t+a("#app").outerHeight()){var o=a(s).position().top+t+a(s).outerHeight();o-t-a("#app").outerHeight()<=a("#app").outerHeight()/2&&(t=a(s).position().top+a(s).outerHeight()-a("#app").outerHeight()+t,i(t))}})):t<=s&&a(".section").each((function(e,s){if(a(s).position().top+t<=t&&a(s).position().top+a(s).outerHeight()+t>t)if(n!=a(s).attr("id"))n=a(s).attr("id"),t=a(s).position().top+a(s).outerHeight()-a("#app").outerHeight()+t,i(t);else{var o=a(s).position().top;-1*o<=a("#app").outerHeight()/2&&(t=a(s).position().top+t,i(t))}})),s=t}a("#app").on("scroll",(function(){var t=a("#app").data("scrolling");o||t&&"scroll-sections"!=t?s=a("#app").scrollTop():(a("#app").data("scrolling","scroll-sections"),clearTimeout(e),e=setTimeout(r,50))}))}var Be=Ve,Je=(n("ac1f"),n("841c"),function(t){var e,n=t.$;function s(s,a){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(a&&0===a.search(t.wp.options.siteurl))var i=1;if(i){s.preventDefault();var r=n('.section[data-permalink="'+a+'"]'),l=r.length;if(l){if(document.location.href==a&&o)return;var c;c=r.position().top+n("#app").scrollTop()>n("#app").scrollTop()?"100vh":"-100vh";var p=r.clone();p.addClass("clone"),p.css({position:"fixed",top:c,left:0,width:r.width(),height:"100vh",overflow:"hidden",opacity:1,"z-index":2e3}),r.parent().prepend(p),n("#app").trigger("clone"),n("#app").data("scrolling","links-and-anchors"),o&&t.pushHistory(a),p.stop().animate({top:"0",opacity:1},{duration:444,ease:"easeOutQuart",step:function(){n("#app").trigger("clone-move")},done:function(){console.log("done"),n("#app").scrollTop(r.position().top+n("#app").scrollTop()),p.remove(),clearTimeout(e),e=setTimeout((function(){n("#app").data("scrolling","")}),15)}})}else n(document).trigger({type:"new_page",href:a})}}n(document).on("click","a",(function(t){var e=n(t.target).prop("href");s(t,e)})),window.onpopstate=function(t){s(t,document.location.href,!1)}}),Re=(n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d"),function(t,e,n){var s=t.$;function a(t,e,n){var s=new URL(t),a=s.searchParams;a.set(e,n),s.search=a.toString();var o=s.toString();return o}s.get(a(e,"add_to_json",1),(function(s){t.pushHistory(e);var a=JSON.parse(s);n(a)}))}),Ne=function(t,e,n){var s=t.$,a=s('[data-state="next"]');s('[data-state="next"]').css({position:"fixed",width:"100%",top:"0px",left:"0px",height:"100vh","overflow-y":"scroll",opacity:0,display:"block"}),s('[data-state="next"]').find(".section").hide(),s('[data-permalink="'+e+'"]').show(),a.animate({opacity:1},200,(function(){s("#app").scrollTop(0),n(),setTimeout((function(){s('[data-state="next"]').css({position:"relative",opacity:0,display:"none"})}),2)}))},Ye=n("53ca"),Xe={body:14,h1:26,h2:22,p:14},Ke=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=window.jquery;function n(){e.each(window.smartFonts,(function(t,n){e(t).css("font-size",(e("#app").innerHeight()+e("#app").innerWidth()/2.2)/999*n+"px")}))}"object"===Object(Ye["a"])(window.smartFonts)&&null!==window.smartFonts||(window.smartFonts={}),window.smartFonts=Object.assign(Xe,window.smartFonts,t),n(),e(window).resize((function(){n()}))},Ze=function(){var t=window.jquery,e=t("#app").scrollTop(),n=0,s="";function a(e){t(e).trigger({type:"leave-screen",sens:n,scrollingType:s})}function o(){t(".on-screen").each((function(e,o){var i=t(o).position().top+t("#app").scrollTop(),r=i+t(o).outerHeight(),l=t("#app").scrollTop(),c=t("#app").scrollTop()+t("#app").outerHeight();i>=l-1&&r<c?"in-screen"!==t(o).data("screen-event")&&(t(o).data("screen-event","in-screen"),t(o).trigger({type:"enter-screen",sens:n,scrollingType:s})):"out-screen"!==t(o).data("screen-event")&&(t(o).data("screen-event","out-screen"),a(o))}))}a(".on-screen"),t("#app").scroll((function(){s=t("#app").data("scrolling");var a=t("#app").scrollTop();n=a>e?1:a<e?-1:0,e=a,o()})),t(window).resize((function(){o()})),t(document).on("before_next_page",(function(){a(".on-screen")})),t(document).on("after_next_page",(function(){o()})),o()},tn={name:"App",data:function(){return{pages:{current:{},next:{}}}},components:{Header:d,Comp404:g,Archive:$,Author:P,Category:I,Index:Q,Page:N,Search:et,Single:rt,Tag:mt,Demo1:bt,Demo2:jt,Phaser:re,Greatyhome:me,Greatyprojets:be,Greatysingle:$e,Greatyservices:Ie,Footer:Qe},mounted:function(){var t=this;console.log("App mounted"),console.log(this.wp),this.pages["current"]=this.wp.sections,this.$(document).ready((function(e){Ue(t),Be(t),Je(t),e(document).on("new_page",(function(n){Re(t,n.href,(function(s){console.log(s),t.pages["next"]=s.sections,setTimeout((function(){e(document).trigger("before_next_page"),Ne(t,n.href,(function(){t.wp=s,t.pages["current"]=s.sections,setTimeout((function(){Ue(t),t.pages["next"]={},e(document).trigger("after_next_page")}),1)}))}),1)}))})),Ze()}))},methods:{template_mounted:function(){Ke()}}},en=tn,nn=(n("034f"),Object(p["a"])(en,a,o,!1,null,null,null)),sn=nn.exports,an=function(t){var e=this,n=this.$;history.pushState instanceof Function&&t!=document.location.href&&history.pushState({urlPath:t},"",t),setTimeout((function(){var s=n('.section[data-permalink="'+t+'"]').data("title");s&&n("title").text(s+" | "+e.wp.options.blogname)}),2)};n("1f54");s["default"].config.productionTip=!1,s["default"].prototype.$=window.jquery,s["default"].prototype.ajaxurl=window.ajaxurl,s["default"].prototype.wp=window.wp,s["default"].prototype.pushHistory=an,s["default"].component("VueFontawesome",n("150d").default),new s["default"]({render:function(t){return t(sn)}}).$mount("#app"),window.vue=s["default"]},"57a6":function(t,e,n){},"580d":function(t,e,n){"use strict";var s=n("0fb9"),a=n.n(s);a.a},"761c":function(t,e,n){"use strict";var s=n("3ea0"),a=n.n(s);a.a},"85ec":function(t,e,n){},a3ba:function(t,e,n){},de46:function(t,e,n){},e881:function(t,e,n){"use strict";var s=n("57a6"),a=n.n(s);a.a}});
//# sourceMappingURL=app.js.map
(function(a){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],m=0,u=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(a[n]=l[n]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var a,e=0;e<o.length;e++){for(var t=o[e],n=!0,r=1;r<t.length;r++){var l=t[r];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),a=i(i.s=t[0]))}return a}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=n,i.d=function(a,e,t){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)i.d(t,n,function(e){return a[e]}.bind(null,n));return t},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/la-contessa-vue/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"01ce":function(a,e,t){"use strict";t("5973")},"02d6":function(a,e,t){"use strict";t("1689")},"034f":function(a,e,t){"use strict";t("85ec")},"0cba":function(a,e,t){"use strict";t("89e7")},1689:function(a,e,t){},"2d6b":function(a,e,t){"use strict";t("78b8")},"2ff5":function(a,e,t){"use strict";t("7943")},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),t("Landing"),t("About"),t("Males"),t("Females"),t("Shows"),t("Featured"),t("Contact"),t("Footer"),t("Modal")],1)},o=[],i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"navbar"}},[t("nav",{staticClass:"navigation"},[t("ul",[a._m(0),t("div",{staticClass:"left"},[t("div",{staticClass:"links"},[t("li",[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#landing",expression:"'#landing'"}],attrs:{href:"#"}},[a._v("Home")])]),t("li",[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:a.about,expression:"about"}],attrs:{href:"#"}},[a._v("About")])]),t("li",[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:a.males,expression:"males"}],attrs:{href:"#"}},[a._v("Males")])]),t("li",[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:a.females,expression:"females"}],attrs:{href:"#"}},[a._v("Females")])]),t("li",[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:a.shows,expression:"shows"}],attrs:{href:"#"}},[a._v("Shows")])]),t("li",[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:a.contact,expression:"contact"}],attrs:{href:"#"}},[a._v("Contact")])])]),a._m(1)])])])])},r=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("li",{staticClass:"headerlogo"},[t("img",{attrs:{src:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/logos/la_contessa_logo.png",alt:""}})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"socmed"},[t("li",[t("a",{attrs:{href:"https://www.facebook.com/lacontessacattery/",target:"_blank"}},[t("i",{staticClass:"fa fa-facebook-official"})])]),t("li",[t("a",{attrs:{href:"https://www.instagram.com/cleotheexplorer/",target:"_blank"}},[t("i",{staticClass:"fa fa-instagram"})])]),t("li",[t("a",{attrs:{href:"mailto:cleotheexplorer@gmail.com",target:"_blank"}},[t("i",{staticClass:"fa fa-gmail"})])])])}],l={name:"Navbar",data:function(){return{about:{el:"#about",duration:500,offset:250,onStart:null,onDone:null,onCancel:null},males:{el:"#males",duration:500,offset:-100,onStart:null,onDone:null,onCancel:null},females:{el:"#females",duration:500,offset:-100,onStart:null,onDone:null,onCancel:null},shows:{el:"#shows",duration:500,offset:-100,onStart:null,onDone:null,onCancel:null},contact:{el:"#contact",duration:500,offset:-50,onStart:null,onDone:null,onCancel:null}}}},c=l,d=(t("2d6b"),t("2877")),m=Object(d["a"])(c,i,r,!1,null,"439a86cd",null),u=m.exports,p=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"landing"}},[t("Carousel",{attrs:{images:a.images}}),t("HorizontalGrid",{attrs:{images:a.gridImages}})],1)},g=[],h=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"carousel"},[a._l(a.images,(function(a,e){return t("div",{key:e,staticClass:"slide fade"},[t("img",{attrs:{src:a}})])})),t("span",{staticClass:"next",on:{click:function(e){return a.incrementSlide(1)}}},[a._v("❯")]),t("span",{staticClass:"prev",on:{click:function(e){return a.incrementSlide(-1)}}},[a._v("❮")]),t("div",{staticClass:"dot-panel"},a._l(a.images,(function(e,n){return t("span",{key:n,staticClass:"dot",on:{click:function(e){return a.currentSlide(n+1)}}})})),0)],2)},f=[],v=(t("5319"),t("ac1f"),{name:"carousel",props:{images:Array},mounted:function(){this.showSlides(this.slideIndex)},data:function(){return{slideIndex:1}},methods:{showSlides:function(a){var e=document.getElementsByClassName("slide"),t=document.getElementsByClassName("dot");a>e.length&&(this.slideIndex=1),a<1&&(this.slideIndex=e.length);for(var n=0;n<e.length;n++)e[n].style.display="none";for(n=0;n<t.length;n++)t[n].className=t[n].className.replace(" active","");e[this.slideIndex-1].style.display="block",t[this.slideIndex-1].className+=" active"},incrementSlide:function(a){this.showSlides(this.slideIndex+=a)},currentSlide:function(a){this.showSlides(this.slideIndex=a)}}}),y=v,_=(t("2ff5"),Object(d["a"])(y,h,f,!1,null,"58be2920",null)),b=_.exports,j=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"horizontal-grid"},a._l(a.images,(function(e,n){return t("figure",{key:n,staticClass:"grid-item"},[t("img",{attrs:{src:e},on:{click:function(t){return a.display_modal(e)}}})])})),0)},C=[],k={name:"HorizontalGrid",props:{images:Array},mounted:function(){},methods:{display_modal:function(a){var e=document.getElementById("myModal"),t=document.getElementById("img01"),n=document.getElementById("caption");e.style.display="block",t.src=a,n.innerHTML=""}}},x=k,I=(t("9204"),Object(d["a"])(x,j,C,!1,null,"28f3e79f",null)),w=I.exports,O={components:{Carousel:b,HorizontalGrid:w},name:"Landing",data:function(){return{images:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/3kittens1-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/ume-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/griffin-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/ponzu2-min.jpeg"],gridImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/griffin_gigil-min.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/kaki6-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/cleo1-min.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/gallery/noriko_stretching-min.jpg"]}}},N=O,E=(t("d6b4"),Object(d["a"])(N,p,g,!1,null,"20694603",null)),S=E.exports,z=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"about"}},[t("div",{staticClass:"logo-full"},[t("img",{attrs:{src:a.logo_url}})]),t("div",{staticClass:"flex-container"},[a._m(0),t("div",{staticClass:"item-2"},[t("img",{staticClass:"artbox",attrs:{src:a.artbox}})])]),t("div",{staticClass:"wallpaper"},[t("img",{attrs:{src:a.background}})])])},$=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"item-1"},[t("h1",[a._v("About Us")]),t("p",[a._v(" Hi! We are a small cageless CFA registered cattery in Manila specializing in tabbies and bicolor Exotic Shorthair cats. Our cats are family members and they live freely in our home. They are pedigreed and registered with the CFA system. ")])])}],B={components:{},name:"About",data:function(){return{background:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Pattern_3-min.jpg",artbox:"https://res.cloudinary.com/do75dapnh/image/upload/v1614690337/la-contessa/revised_cats/Art_Box_No_Space.png",logo_url:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/logos/Full_Gold_Landscape.png"}}},M=B,P=(t("01ce"),Object(d["a"])(M,z,$,!1,null,"8a00f066",null)),q=P.exports,F=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"males"}},[t("h1",[a._v("Males")]),t("OuterBoxTemplate",{attrs:{cards:a.cards}})],1)},A=[],T=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"males"}},[t("div",{staticClass:"box-template"},a._l(a.cards,(function(a,e){return t("ProfileCard",{key:e,attrs:{cardName:a.cardName,mainImage:a.mainImage,sideImages:a.sideImages}})})),1)])},G=[],H=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"profile-card"},[t("div",{staticClass:"main-img"},[t("h2",[a._v(a._s(a.cardName))]),t("figure",[t("figcaption"),t("img",{attrs:{src:a.mainImage},on:{click:function(e){return a.display_modal(a.mainImage)}}})])]),t("HorizontalGrid",{attrs:{images:a.sideImages}})],1)},D=[],L={name:"ProfileCard",components:{HorizontalGrid:w},props:{cardName:String,mainImage:String,sideImages:Array},mounted:function(){},methods:{display_modal:function(a){var e=document.getElementById("myModal"),t=document.getElementById("img01"),n=document.getElementById("caption");e.style.display="block",t.src=a,n.innerHTML=""}}},J=L,U=(t("a5de"),Object(d["a"])(J,H,D,!1,null,"34eb8a81",null)),Y=U.exports,K={name:"OuterBoxTemplate",mounted:function(){},components:{ProfileCard:Y},props:{cards:Array}},R=K,W=(t("8405"),Object(d["a"])(R,T,G,!1,null,"c245eadc",null)),Q=W.exports,V={name:"Males",mounted:function(){},components:{OuterBoxTemplate:Q},data:function(){return{cards:[{cardName:"Biscotti",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/biscotti/biscotti.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/biscotti/biscotti_1.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/biscotti/biscotti_2.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/biscotti/biscotti_3.jpg"]},{cardName:"Porcini",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/porcini/porcini_3.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/porcini/porcini_1.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/porcini/porcini_2.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/porcini/porcini.jpg"]},{cardName:"Griffin",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/griffin/griffin.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/griffin/griffin.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/griffin/griffin_2.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/griffin/griffin_3.jpg"]},{cardName:"Harquin",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/harquin/harquin.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/harquin/harquin_1.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/harquin/harquin_2.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/harquin/harquin_3.jpg"]},{cardName:"Crostini",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/crostini/crostini.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/crostini/crostini_1.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/crostini/crostini_2.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/crostini/crostini_3.jpg"]},{cardName:"Anzu",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/anzu/anzu-4.jpeg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/anzu/anzu-2.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/anzu/anzu-1.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/males/anzu/anzu-3.jpeg"]}]}}},X=V,Z=Object(d["a"])(X,F,A,!1,null,"96c0d78a",null),aa=Z.exports,ea=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"females"}},[t("h1",[a._v("Females")]),t("OuterBoxTemplate",{attrs:{cards:a.cards}})],1)},ta=[],na={name:"Females",components:{OuterBoxTemplate:Q},props:{},mounted:function(){},data:function(){return{cards:[{cardName:"Cleo",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cleo/cleo.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cleo/cleo_1.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cleo/cleo-1.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cleo/cleo_3.jpg"]},{cardName:"Noriko",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/noriko/noriko.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/noriko/noriko_1.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/noriko/noriko_2.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/noriko/noriko_3.jpg"]},{cardName:"Cinnamon",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cinnamon/cinnamon.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cinnamon/cinnamon-2.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cinnamon/cinnamon-3.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/cinnamon/cinnamon_3.jpg"]},{cardName:"Ponzu",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ponzu/ponzu2-min.jpeg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ponzu/ponzu_1.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ponzu/ponzu_2.jpg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ponzu/ponzu.jpg"]},{cardName:"Ume",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ume/ume7-min.jpeg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ume/ume3-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ume/ume5-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/ume/ume6-min.jpeg"]},{cardName:"Kaki",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/kaki/kaki1-min.jpeg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/kaki/kaki6-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/kaki/kaki3-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/females/kaki/kaki-min.jpeg"]}]}}},sa=na,oa=Object(d["a"])(sa,ea,ta,!1,null,"0a0b0f58",null),ia=oa.exports,ra=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"shows"}},[t("h1",[a._v("Shows")]),t("OuterBoxTemplate",{attrs:{cards:a.cards}})],1)},la=[],ca={name:"Shows",mounted:function(){},components:{OuterBoxTemplate:Q},data:function(){return{cards:[{cardName:"Best Cat",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/porky_trophy-min.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/porky_judge_3-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/trophy1.JPG","https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/porky_judge_4-min.jpeg"]},{cardName:"2nd Best Cat",mainImage:"https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/harquin_trophy_2-min.jpg",sideImages:["https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/harquin_judge_2-min.jpeg","https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/trophy2.JPG","https://res.cloudinary.com/do75dapnh/image/upload/v1552830170/la-contessa/shows/harquin_trophy-min.JPG"]}]}}},da=ca,ma=Object(d["a"])(da,ra,la,!1,null,"2309cb30",null),ua=ma.exports,pa=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"featured"}},[t("h1",[a._v("Featured In")]),t("h2",[a._v("Animal scene")]),t("div",{staticClass:"frame"},[t("iframe",{attrs:{src:a.article_url}}),a._m(0)])])},ga=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"right"},[t("button",[t("a",{attrs:{href:"https://animalscene.ph/2021/03/01/fur-and-a-snub-nose-loving-the-exotic-shorthair/",target:"_blank"}},[a._v("Read more")])])])}],ha={components:{},name:"Featured",data:function(){return{article_url:"https://animalscene.ph/2021/03/01/fur-and-a-snub-nose-loving-the-exotic-shorthair/"}}},fa=ha,va=(t("0cba"),Object(d["a"])(fa,pa,ga,!1,null,"71eb467c",null)),ya=va.exports,_a=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},ba=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"contact"}},[t("h1",[a._v("Contact Us")]),t("p",[a._v("* If you're interested in a kitten, or you have any inquiries please use the form below.")]),t("form",{staticClass:"contact-form",attrs:{method:"POST",action:"https://formspree.io/cleotheexplorer@gmail.com"}},[t("div",{staticClass:"item-1"},[t("label",{attrs:{for:"n"}},[a._v("Your name *")]),t("br"),t("input",{attrs:{type:"text",placeholder:" John Doe",id:"n",name:"name",required:""}}),t("br"),t("label",{attrs:{for:"e"}},[a._v("Your email *")]),t("br"),t("input",{attrs:{type:"email",placeholder:" test@mailbox.com",id:"e",name:"email",required:""}}),t("br"),t("label",{attrs:{for:"c"}},[a._v("Contact number *")]),t("br"),t("input",{attrs:{type:"text",placeholder:" 0999-999-9999",id:"c",name:"contact_number",required:""}}),t("br")]),t("div",{staticClass:"item-2"},[t("label",{attrs:{for:"m"}},[a._v("Message *")]),t("br"),t("textarea",{attrs:{name:"message",placeholder:" Your message",id:"m"}}),t("br"),t("button",{attrs:{type:"submit"}},[a._v("Send")])])])])}],ja={components:{},name:"Contact",data:function(){return{}}},Ca=ja,ka=(t("f75f"),Object(d["a"])(Ca,_a,ba,!1,null,"adb77dbc",null)),xa=ka.exports,Ia=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"footer"}},[t("footer",[t("div",{staticClass:"footer-contact"},[t("div",{staticClass:"item-1"},[t("img",{attrs:{src:a.logo}}),a._m(0)])])])])},wa=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"social-media"},[t("a",{attrs:{href:"https://www.facebook.com/lacontessacattery/",target:"_blank"}},[t("i",{staticClass:"fa fa-facebook-official",attrs:{"aria-hidden":"true"}})]),t("a",{attrs:{href:"https://www.instagram.com/cleotheexplorer/",target:"_blank"}},[t("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})]),t("a",{attrs:{href:"mailto:cleotheexplorer@gmail.com",target:"_blank"}},[t("i",{staticClass:"fa fa-gmail"})])])}],Oa={components:{},name:"Footer",data:function(){return{logo:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/logos/Full_Gold_Landscape.png",cat1:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-01-min.png",cat2:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-02-min.png",cat3:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-03-min.png",cat4:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-04-min.png",cat5:"https://res.cloudinary.com/do75dapnh/image/upload/v1552705025/la-contessa/revised_cats/Cats-05-min.png"}}},Na=Oa,Ea=(t("02d6"),Object(d["a"])(Na,Ia,wa,!1,null,"5382d610",null)),Sa=Ea.exports,za=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"modal",attrs:{id:"myModal"}},[t("span",{staticClass:"close",on:{click:function(e){return a.close()}}},[a._v("×")]),t("img",{staticClass:"modal-content",attrs:{id:"img01"}}),t("div",{attrs:{id:"caption"}})])},$a=[],Ba={name:"Modal",mounted:function(){},methods:{close:function(){var a=document.getElementById("myModal");a.style.display="none"}}},Ma=Ba,Pa=(t("eebe"),Object(d["a"])(Ma,za,$a,!1,null,"6ab93ad5",null)),qa=Pa.exports,Fa={name:"App",components:{Navbar:u,Landing:S,About:q,Males:aa,Females:ia,Shows:ua,Contact:xa,Footer:Sa,Modal:qa,Featured:ya}},Aa=Fa,Ta=(t("034f"),Object(d["a"])(Aa,s,o,!1,null,null,null)),Ga=Ta.exports;n["a"].config.productionTip=!1;var Ha=t("f13c");n["a"].use(Ha,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new n["a"]({render:function(a){return a(Ga)}}).$mount("#app")},5973:function(a,e,t){},6495:function(a,e,t){},"78b8":function(a,e,t){},7943:function(a,e,t){},8405:function(a,e,t){"use strict";t("bcb3")},"85ec":function(a,e,t){},"89e7":function(a,e,t){},9204:function(a,e,t){"use strict";t("9f89")},"9c54":function(a,e,t){},"9f89":function(a,e,t){},a5de:function(a,e,t){"use strict";t("9c54")},bcb3:function(a,e,t){},d6b4:function(a,e,t){"use strict";t("df61")},df61:function(a,e,t){},eebe:function(a,e,t){"use strict";t("6495")},f75f:function(a,e,t){"use strict";t("fcae")},fcae:function(a,e,t){}});
//# sourceMappingURL=app.a9c2f0bd.js.map
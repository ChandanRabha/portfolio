(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(4),o=n.n(s),r=(n(15),n(5)),l=n(6),j=n(9),d=n(8);n(16),n(17),n(18),n(22),n(23);var b=function(e){return Object(c.jsx)("li",{className:"animate__animated",children:Object(c.jsx)("a",{href:"#"+e.pin,children:e.title})})},h=function(e){return Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.icon,style:{color:e.color}})})},u=function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("h1",{className:"animate__animated animate__rollIn",children:"CR"}),Object(c.jsxs)("div",{id:"socials",children:[Object(c.jsx)(h,{icon:"fab fa-github    fa-2x",color:"#24292e",url:"https://github.com/ChandanRabha/"}),Object(c.jsx)(h,{icon:"fab fa-twitter   fa-2x",color:"#50abf1",url:"https://twitter.com/Chandan_Rabha12"}),Object(c.jsx)(h,{icon:"fab fa-facebook  fa-2x",color:"#4867aa",url:"https://www.facebook.com/chang.rabha/"}),Object(c.jsx)(h,{icon:"fab fa-linkedin  fa-2x",color:"#0077b5",url:"https://www.linkedin.com/in/chandan-rabha-2b5453152/"})]}),Object(c.jsxs)("ul",{className:"menus",id:"menus",children:[Object(c.jsx)(b,{title:"Home",pin:"Home"}),Object(c.jsx)(b,{title:"About",pin:"Pin_About"}),Object(c.jsx)(b,{title:"Projects",pin:"Pin_Project"}),Object(c.jsx)(b,{title:"Contact",pin:"Contact"})]})]})},m=(n(24),function(){return Object(c.jsxs)("div",{className:"splash",children:[Object(c.jsxs)("div",{style:{textAlign:"center",textShadow:"5px 1px grey"},children:[Object(c.jsx)("h1",{className:"animate__animated animate__fadeInLeft",children:"Hi, My Name is Chandan Rabha"}),Object(c.jsx)("h1",{className:"animate__animated animate__fadeIn animate__slow",children:"Welcome To My Dungeon"}),Object(c.jsx)("a",{className:"animate__animated animate__fadeIn animate__delay-1s",href:"#Pin_About",id:"explore",children:"Explore"})]}),Object(c.jsx)("label",{style:{position:"absolute",left:"0",bottom:"0",visibility:"hidden"},id:"Pin_About",children:"About Pin"})]})}),x=(n(25),function(){return Object(c.jsx)("div",{id:"footer",children:Object(c.jsx)("h3",{children:" \xa9 All Rights Reserved"})})}),f=(n(26),n.p+"static/media/Me3.d2929278.jpg"),O=function(){return Object(c.jsxs)("div",{className:"about",id:"About",children:[Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("h1",{style:{fontSize:"3rem",margin:"0"},children:"About Me"}),Object(c.jsxs)("p",{children:["I am a passionate Software Developer and love designing and making web applications as my hobby as well as my passion. I currently reside in Guwahati, India ",Object(c.jsx)("i",{className:"fas fa-map-marker-alt"})]})]}),Object(c.jsx)("div",{className:"box",style:{width:"300px"},children:Object(c.jsx)("img",{style:{width:"100%"},src:f,alt:"my_face_:-)"})})]})},p=(n(27),n(28),function(e){return Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("h1",{children:e.eachProject[0]}),Object(c.jsx)("img",{src:e.eachProject[1],alt:"Project_Image"}),Object(c.jsxs)("div",{id:"ProjectLinks",children:[Object(c.jsxs)("button",{onClick:function(){return window.location.href=e.eachProject[2]},children:[" ",Object(c.jsx)("i",{className:"fab fa-github fa-2x"})," View on Github"]}),Object(c.jsxs)("button",{onClick:function(){return window.location.href=e.eachProject[3]},children:[" ",Object(c.jsx)("i",{className:"fas fa-search fa-2x"})," Visit Application"]})]})]})}),g=function(e){return Object(c.jsx)("div",{id:"Projects",children:e.data.map((function(t){return Object(c.jsx)(p,{eachProject:t},e.data.indexOf(t))}))})},v=n(7),y=n.n(v);n(31);function _(e){e.preventDefault(),y.a.sendForm("service_0ejmj9f","template_iql1mqm",e.target,"user_E2B31cQAudM3Ankfw3Lcg").then((function(e){console.log(e.text),document.querySelector("#Modal").style.display="flex",setTimeout((function(){return document.querySelector("#Modal").style.opacity="1"}),100)}),(function(e){console.log(e.text)})),e.target.reset()}function w(){setTimeout((function(){return document.querySelector("#Modal").style.display="none"}),500),document.querySelector("#Modal").style.opacity="0"}var N=function(){return Object(c.jsx)("form",{onSubmit:_,children:Object(c.jsx)("div",{id:"Contact",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Contact Me"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Name:"}),Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Your Name?",required:!0})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Email:"}),Object(c.jsx)("input",{type:"email",name:"email",placeholder:"Your Email?",required:!0})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Message:"}),Object(c.jsx)("textarea",{name:"message",placeholder:"Your Text Goes Here",required:!0})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{type:"submit",children:["Send  ",Object(c.jsx)("i",{className:"fas fa-paper-plane"})]})})]})})})},C=function(){return Object(c.jsx)("div",{id:"Modal",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("h4",{children:["Email Sent ",Object(c.jsx)("i",{style:{color:"#7be87b"},className:"fas fa-check-circle"})]}),Object(c.jsx)("label",{id:"modalClose",onClick:w,children:Object(c.jsx)("i",{className:"fas fa-window-close fa-2x"})})]}),Object(c.jsx)("h2",{style:{padding:"2vw",margin:"0"},children:"Thank You for Reaching Out \ud83e\udd16. "})]})})},P=n.p+"static/media/splash_bg.e50d72cf.jpg",k=n.p+"static/media/1.6e16cf2d.png",A=n.p+"static/media/2.3c9705ab.png";window.onload=function(){var e=document.querySelectorAll(".box");function t(){var t=window.innerHeight/5*4;e.forEach((function(e){e.getBoundingClientRect().top<t?e.classList.add("show"):e.classList.remove("show")}))}window.addEventListener("scroll",t),t()};var M=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={projects:[["Online Video Conferencing",k,"https://github.com/ChandanRabha/VideoConference","https://login-ohhyea.herokuapp.com/"],["Monsteroo",A,"https://github.com/ChandanRabha/monsteroo_ReactJS","#"]]},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.projects;return Object(c.jsxs)("div",{id:"Home",className:"App",style:{backgroundImage:"url("+P+")",backgroundAttachment:"fixed"},children:[Object(c.jsx)(u,{}),Object(c.jsx)(m,{}),Object(c.jsx)(O,{}),Object(c.jsx)("h1",{className:"titleProject",id:"Pin_Project",children:"Projects"}),Object(c.jsx)(g,{data:e}),Object(c.jsx)(N,{}),Object(c.jsx)(C,{}),Object(c.jsx)(x,{})]})}}]),n}(i.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),S()}],[[32,1,2]]]);
//# sourceMappingURL=main.65d5f92e.chunk.js.map
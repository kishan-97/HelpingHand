(this.webpackJsonpawesomeapp=this.webpackJsonpawesomeapp||[]).push([[0],{17:function(e,t,s){},21:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),i=s(18),n=s.n(i),r=(s(21),s(22),s(8)),l=s.n(r),j=s(12),o=s(10),d=s(9),h=s(13),b=s(2),m=function(){var e=Object(b.e)(),t=Object(c.useState)({email:"",password:""}),s=Object(h.a)(t,2),i=s[0],n=s[1],r=function(e){var t=e.target.name,s=e.target.value;n(Object(d.a)(Object(d.a)({},i),{},Object(o.a)({},t,s)))},m=function(){var t=Object(j.a)(l.a.mark((function t(s){var a,c,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),a=i.email,c=i.password,t.next=4,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:c})});case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,console.log(r),201===r.code&&(e.push("/index.html"),window.alert("Login Succesful"));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("main",{children:Object(a.jsxs)("form",{action:"",method:"",className:"form",children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"email",name:"email",onChange:r,id:"Email",placeholder:"Enter email"}),Object(a.jsx)("label",{for:"email",children:"Enter Email"})]}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"password",name:"password",onChange:r,id:"password",placeholder:"Enter Pasword"}),Object(a.jsx)("label",{for:"password",children:"Enter Password"})]}),Object(a.jsx)("div",{className:"button-div",children:Object(a.jsx)("button",{type:"submit",onClick:m,children:"Submit"})})]})})})},O=function(){var e=Object(b.e)(),t=Object(c.useState)({username:"",phone:"",email:"",password:""}),s=Object(h.a)(t,2),i=s[0],n=s[1],r=function(e){var t=e.target.name,s=e.target.value;n(Object(d.a)(Object(d.a)({},i),{},Object(o.a)({},t,s)))},m=function(){var t=Object(j.a)(l.a.mark((function t(s){var a,c,r,j,o,d;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),a=i.username,c=i.phone,r=i.email,j=i.password,console.log(i),t.next=5,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,phone:c,email:r,password:j})});case 5:return o=t.sent,t.next=8,o.json();case 8:d=t.sent,console.log(d),409!==d.code&&d?(n({username:"",phone:"",email:"",password:""}),window.alert("Registration Succesful"),console.log("Registration Succesful"),e.push("/Login")):(window.alert("User Alredy Registered"),console.log("Registration Invalid Registration"));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:"title",children:"Enter Details"}),Object(a.jsxs)("form",{class:"form",children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",onChange:r,name:"username",id:"first-name",placeholder:"Username",value:i.username}),Object(a.jsx)("label",{for:"first-name",children:"Enter Username"})]}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"number",onChange:r,name:"phone",id:"last-name",placeholder:"Phone",value:i.phone}),Object(a.jsx)("label",{for:"last-name",children:"Phone"})]}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"email",onChange:r,name:"email",id:"e-mail",placeholder:"e-mail",value:i.email}),Object(a.jsx)("label",{for:"e-mail",children:"E-mail"})]}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"password",onChange:r,name:"password",id:"last-name",placeholder:"Last Name",value:i.password}),Object(a.jsx)("label",{for:"last-name",children:"Password"})]}),Object(a.jsx)("div",{className:"button-div",children:Object(a.jsx)("button",{type:"submit",onClick:m,children:"Submit"})})]})]})})},p=(s(17),function(){var e=Object(c.useState)({first_name:"",last_name:"",email:"",msg:""}),t=Object(h.a)(e,2),s=t[0],i=t[1],n=function(e){var t=e.target.name,a=e.target.value;i(Object(d.a)(Object(d.a)({},s),{},Object(o.a)({},t,a)))},r=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,c,i,n,r,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=s.first_name,c=s.last_name,i=s.email,n=s.msg,console.log(s),e.next=5,fetch("/contactus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:a,last_name:c,email:i,msg:n})});case 5:return r=e.sent,e.next=8,r.json();case 8:422!=(j=e.sent).code&&j?window.alert("Message Sent"):window.alert("Message Failer");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:"title",children:"Contact us"}),Object(a.jsx)("div",{className:"title-info",children:"We'll get back to you soon!"}),Object(a.jsxs)("form",{action:"",method:"",className:"form",children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",name:"first_name",id:"first-name",onChange:n,placeholder:"First name"}),Object(a.jsx)("label",{for:"first-name",children:"First name"})]}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"text",name:"last_name",id:"last-name",onChange:n,placeholder:"Last Name"}),Object(a.jsx)("label",{for:"last-name",children:"Last name"})]}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("input",{type:"email",name:"email",id:"e-mail",onChange:n,placeholder:"e-mail"}),Object(a.jsx)("label",{for:"e-mail",children:"e-mail"})]}),Object(a.jsxs)("div",{className:"textarea-group",children:[Object(a.jsx)("textarea",{name:"msg",id:"message",rows:"5",onChange:n,placeholder:"Message"}),Object(a.jsx)("label",{for:"message",children:"Message"})]}),Object(a.jsx)("div",{className:"button-div",children:Object(a.jsx)("button",{type:"submit",onClick:r,children:"Send"})})]})]})})}),x=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:"title",children:"Helping Hands "}),Object(a.jsxs)("div",{className:"description1",children:["We at helping hands aim to improve our healthcare system, by creating the first platform that will globally help to connect helpers with those in need of help."," "]}),Object(a.jsxs)("div",{className:"description1",children:["We plan to create this by creating a global platform where patients can ask for urgent medicines that may not be available nearby. We also plan to create a platform where recovered patients can share their experiences and help others to pass through a difficult time."," "]}),Object(a.jsxs)("div",{className:"description1",children:["Doctors can also share their experience therefore not only helping patients but also a doctor. Thereby helping the mental well being of both patient and doctor.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{})," We also encourage them to hold a general meeting where they can share their life stories."]}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Developers"]}),Object(a.jsxs)("div",{className:"description1",children:[".Sarthak Kansal",Object(a.jsx)("br",{}),".Atul Kesharwani",Object(a.jsx)("br",{}),".Kishan Saxena",Object(a.jsx)("br",{}),".Shashank Gupta"]})]}),Object(a.jsxs)("footer",{children:[Object(a.jsx)("a",{href:"#",target:"_blank",children:Object(a.jsx)("img",{class:"social-media-img",src:"./static/img/social_media/facebook.svg",alt:"Facebook"})}),Object(a.jsx)("a",{href:"#",target:"_blank",children:Object(a.jsx)("img",{class:"social-media-img",src:"./static/img/social_media/github.svg",alt:"GitHub"})}),Object(a.jsx)("a",{href:"#",target:"_blank",children:Object(a.jsx)("img",{class:"social-media-img",src:"./static/img/social_media/instagram.svg",alt:"Instagram"})}),Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("img",{class:"codecell-img",src:"./static/img/logo_covid.jpg",alt:"TSEC CodeCell"})}),Object(a.jsx)("a",{href:"#",target:"_blank",children:Object(a.jsx)("img",{class:"social-media-img",src:"./static/img/social_media/linkedin.svg",alt:"LinkedIn"})}),Object(a.jsx)("a",{href:"#",target:"_blank",children:Object(a.jsx)("img",{class:"social-media-img",src:"./static/img/social_media/twitter.svg",alt:"Twitter"})}),Object(a.jsx)("a",{href:"#",target:"_blank",children:Object(a.jsx)("img",{class:"social-media-img",src:"./static/img/social_media/youtube.svg",alt:"YouTube"})})]})]})},u=s(7),g=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsxs)("div",{className:"left-side",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("img",{className:"logo_",src:"logo.jpg",alt:"TSEC CodeCell"})})}),Object(a.jsxs)("ul",{className:"navbar-main-ul hide-burger-menu burger-menu-dropdown",children:[Object(a.jsx)("a",{href:"index.html",children:Object(a.jsx)("li",{children:"Home"})}),Object(a.jsx)(u.b,{to:"/Aboutus",children:Object(a.jsx)("li",{children:"About"})}),Object(a.jsx)(u.b,{to:"/Register",children:Object(a.jsx)("li",{children:"Register"})}),Object(a.jsx)(u.b,{to:"/Login",children:Object(a.jsx)("li",{children:"Login"})}),Object(a.jsx)(u.b,{to:"/Contact",children:Object(a.jsx)("li",{children:"Contact Us"})})]})]}),Object(a.jsxs)("div",{className:"right-side",children:[Object(a.jsxs)("div",{className:"account",children:[Object(a.jsx)("img",{src:"./static/img/admin.jpg",alt:"HK"}),Object(a.jsx)("div",{className:"dropdown-caret"})]}),Object(a.jsxs)("div",{className:"dropdown hide",children:[Object(a.jsx)("div",{className:"user-name",children:"Admin"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("li",{children:"Your profile"})}),Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("li",{children:"Settings"})}),Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("li",{children:"Log Out"})})]})]})]})]})})},f=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"firstpart",children:Object(a.jsxs)("center",{children:[Object(a.jsx)("h1",{className:"hed",children:"Any Help Regarding Medical."}),Object(a.jsx)("h3",{children:"Any query or requirement related to the medical."}),Object(a.jsx)("h5",{children:"Upload the query and also help other ,if you have any knowledge or provide equipment."})]})}),Object(a.jsxs)("div",{className:"imgtop",children:[Object(a.jsx)("div",{className:"imgtops",children:Object(a.jsx)("img",{src:"help1.jpg",className:"conf"})}),Object(a.jsxs)("div",{className:"sirstpart",children:[Object(a.jsx)("h1",{className:"one"}),Object(a.jsx)("br",{}),Object(a.jsx)("h2",{classname:"two",children:"\u201cThe purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.\u201d \u2013 Ralph Waldo Emerson"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{classname:"three",children:"."})]})]}),Object(a.jsxs)("div",{className:"imgtop",children:[Object(a.jsxs)("div",{className:"sirstpart",children:[Object(a.jsx)("h1",{className:"one",children:"We know that You want to help other person,then."}),Object(a.jsx)("br",{}),Object(a.jsx)("h2",{classname:"two",children:"Don't hesitate"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{classname:"three",children:"Move forward and help it,Connect with us."}),Object(a.jsx)("h4",{children:"Get your Goal"})]}),Object(a.jsx)("div",{className:"imgtops1",children:Object(a.jsx)("img",{src:"help2.jpg",clasname:"conf1"})})]}),Object(a.jsxs)("div",{class:"card-group",children:[Object(a.jsxs)("div",{class:"card",children:[Object(a.jsxs)("a",{href:"https://atul-chatting-app.herokuapp.com/",children:[" ",Object(a.jsx)("img",{class:"card-img-top",src:"post.png",alt:"Card image cap"})]}),Object(a.jsx)("div",{class:"card-body",children:Object(a.jsx)("h3",{class:"card-title",children:"Some detail of patient regarding Health issue or Document related to health ."})})]}),Object(a.jsxs)("div",{class:"card",children:[Object(a.jsx)("img",{class:"card-img-top",src:"chatt.jpg",alt:"Card image cap"}),Object(a.jsx)("div",{class:"card-body",children:Object(a.jsx)("h3",{class:"card-title",children:"Talk with each other ,if you have any issue.otherwise ,you can also take mobile number of volunteer"})})]}),Object(a.jsxs)("div",{class:"card",children:[Object(a.jsx)("img",{class:"card-img-top",src:"chemistry.jpg",alt:"Card image cap"}),Object(a.jsxs)("div",{class:"card-body",children:[Object(a.jsx)("h3",{class:"card-title",children:"Chemistry"}),Object(a.jsx)("p",{class:"card-text",children:"All the chemical formula with uses ,question,notes,syllabus all are available here."})]})]})]})]})},v=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"firediv",children:Object(a.jsx)("div",{className:"firediv2",children:Object(a.jsx)("h1",{className:"hh1",children:"Helping Hand"})})}),Object(a.jsx)(g,{}),Object(a.jsx)(b.a,{path:"/Aboutus",children:Object(a.jsx)(x,{})}),Object(a.jsx)(b.a,{path:"/Login",children:Object(a.jsx)(m,{})}),Object(a.jsx)(b.a,{path:"/Contact",children:Object(a.jsx)(p,{})}),Object(a.jsx)(b.a,{path:"/Register",children:Object(a.jsx)(O,{})}),Object(a.jsx)(b.a,{path:"/index.html",children:Object(a.jsx)(f,{})})]})};n.a.render(Object(a.jsx)(u.a,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.51eeb06f.chunk.js.map
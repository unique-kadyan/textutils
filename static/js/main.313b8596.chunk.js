(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{13:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(15),r=c.n(s),o=(c(24),c(7)),l=(c(13),c(6)),i=c(1);function b(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.Mode," bg-").concat(e.Mode),style:{backgroundColor:"light"===e.Mode?"dark":"light",color:"light"===e.Mode?"black":"white"},children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(l.b,{className:"navbar-brand",to:"/",children:"TextAction"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link",to:"/contactus",children:"Contact Us"})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.Mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toogleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Set Dark Mode Here"})]})]})]})})})}function j(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(null),l=Object(o.a)(r,2),b=l[0],j=l[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Enter Text to Perform Buttoned Actions"}),Object(i.jsx)("textarea",{className:"form-control",placeholder:"Enter your input here:-",id:"exampleFormControlTextarea1",rows:"5",onChange:function(e){s(e.target.value)},onError:b,value:n,style:{backgroundColor:"dark"===e.Mode?"grey":"white",color:"dark"===e.Mode?"white":"black"}}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary my-2",onClick:function(){try{var t=n.toLowerCase();s(t),e.showAlert("Converted to Lower Case","success")}catch(b){j(b)}},children:"Change to LowerCase"}),Object(i.jsx)("button",{type:"button",className:"btn btn-secondary mx-3 my-2",onClick:function(){try{var t=n.toUpperCase();s(t),e.showAlert("Converted to Upper Case","success")}catch(b){j(b)}},children:"Change to UpperCase"}),Object(i.jsx)("button",{type:"button",className:"btn btn-success my-2",onClick:function(){try{var t=n.split(" ").length;s(t),e.showAlert("Words Counted","success")}catch(b){j(b)}},children:"Count Words"}),Object(i.jsx)("button",{type:"button",className:"btn btn-danger mx-3 my-2 ",onClick:function(){try{var t=n.charAt(0).toUpperCase()+n.slice(1);s(t),e.showAlert("Input Capitalized","success")}catch(b){j(b)}},children:"Capital Case"})]}),Object(i.jsxs)("div",{className:"container",style:{color:"light"===e.Mode?"black":"white"},children:[Object(i.jsx)("h2",{children:"Number of characters in your input are:"}),Object(i.jsx)("h1",{children:n.length}),Object(i.jsx)("h3",{children:"Preview of the entered Text is available here:"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:n})]})]})}var d=function(e){return e.alert&&Object(i.jsxs)("div",{classNam:"alert alert-".concat(e.alert.type," d-flex align-items-center"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.message,Object(i.jsx)("svg",{className:"bi flex-shrink-0 me-2",width:"24",height:"24",role:"img","aria-label":"Success:"})]})},h=c(3);var u=function(e){return Object(i.jsx)("div",{className:"container",style:{backgroundColor:"dark"===e.Mode?"grey":"white",color:"dark"===e.Mode?"white":"black"},"my-3":!0,children:Object(i.jsx)("h1",{children:"It is simply a set of utility functions to do operations on String objects. In fact, the whole class doesn't have any instance fields or methods. Everything is static. Consider it like a container to group functions with a text-based semantic "})})},x=c(18),m=c(19);var O=function(e){return Object(i.jsxs)("div",{className:"container center flex-auto",id:"contact","mx-10":!0,style:{backgroundColor:"dark"===e.Mode?"grey":"white",color:"dark"===e.Mode?"white":"black"},"my-3":!0,children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("h1",{children:[" ",Object(i.jsx)(x.a,{}),"  ","   ","   +918168481271 "]})," ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("h2",{children:[Object(i.jsx)(m.a,{})," ","                                   "," rajeshsinghkadyan@gmail.com"]})]})};var g=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),x=r[0],m=r[1],g=function(e,t){m({message:e,type:t}),setTimeout((function(){m(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(b,{Mode:c,toogleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="grey",g("Dark Mode is enabled","success")):(n("light"),document.body.style.backgroundColor="white",g("Light Mode is enabled","success"))}}),Object(i.jsx)(d,{alert:x}),Object(i.jsxs)(h.c,{children:[Object(i.jsx)(h.a,{path:"/contactus",children:Object(i.jsx)(O,{Mode:c})}),Object(i.jsx)(h.a,{exact:!0,path:"/about",children:Object(i.jsx)(u,{Mode:c})}),Object(i.jsx)(h.a,{path:"/",children:Object(i.jsx)(j,{showAlert:g,Mode:c})})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),p()}},[[31,1,2]]]);
//# sourceMappingURL=main.313b8596.chunk.js.map
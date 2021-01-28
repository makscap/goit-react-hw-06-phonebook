(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={container:"Filter_container__oISjJ",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},20:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",text:"ContactList_text__2dM24"}},26:function(t,e,n){t.exports={sectionContainer:"Section_sectionContainer__cGJ5c",title:"Section_title__2S6oE"}},35:function(t,e,n){t.exports={IconButton:"IconButton_IconButton__3sU0k"}},57:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var c,r=n(1),a=n(0),i=n.n(a),o=n(15),l=n.n(o),s=n(36),u=n(30),b=n(6),j=n(18),d=n(7),m=n(32),f=n.n(m),O=n(8),p=n(33),h=n.n(p),x=n(11),_=n(3),v=n(34),g=n.n(v),y=Object(d.b)("phonebook/add",(function(t,e){return{payload:{id:g.a.generate(),name:t,number:e}}})),C=Object(d.b)("phonebook/delete"),k=Object(d.b)("phonebook/changeFilter"),w=Object(d.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(x.a)(c,y,(function(t,e){return[e.payload].concat(Object(j.a)(t))})),Object(x.a)(c,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),N=Object(d.c)("",Object(x.a)({},k,(function(t,e){return e.payload}))),I=Object(_.c)({items:w,filter:N}),S=[].concat(Object(j.a)(Object(d.d)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),[f.a]),E={key:"contacts",storage:h.a,blacklist:["filter"]},F=Object(d.a)({reducer:{contacts:Object(O.g)(E,I)},middleware:S,devTools:!1}),B=Object(O.h)(F),L=n(29),M=function(t){return t.contacts.items},P=function(t){return t.contacts.filter},T=function(t){var e=M(t),n=P(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},z=n(9),D=n.n(z);function J(){var t=Object(b.c)(M),e=Object(b.b)(),n=Object(a.useState)(""),c=Object(L.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)(""),s=Object(L.a)(l,2),u=s[0],j=s[1],d=function(){o(""),j("")};return Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),(t.find((function(t){return i===t.name}))?(alert("".concat(i," is already in contacts")),1):""===i||""===u?(alert("Please enter all data"),1):void 0)||(!function(t,n){e(y(t,n))}(i,u),d())},className:D.a.form,children:[Object(r.jsxs)("label",{className:D.a.formItem,children:["Name",Object(r.jsx)("input",{type:"text",name:"name",value:i,placeholder:"\u0421ontact name",onChange:function(t){return o(t.currentTarget.value)},className:D.a.input})]}),Object(r.jsxs)("label",{className:D.a.formItem,children:["Number",Object(r.jsx)("input",{type:"tel",name:"number",value:u,placeholder:"\u0421ontact number",onChange:function(t){return j(t.currentTarget.value)},className:D.a.input})]}),Object(r.jsx)("button",{type:"submit",className:D.a.button,children:"Add contact"})]})}var A=n(19),K=n.n(A);function Z(){var t=Object(b.c)(P),e=Object(b.b)();return Object(r.jsx)("div",{className:K.a.container,children:Object(r.jsxs)("label",{className:K.a.label,children:["Find contacts by name",Object(r.jsx)("input",{type:"text",value:t,onChange:function(t){return e(k(t.target.value))},className:K.a.input})]})})}var G=n(25),R=n(37),H=n(35),U=n.n(H),V=function(t){var e=t.children,n=t.onClick,c=Object(R.a)(t,["children","onClick"]);return Object(r.jsx)("button",Object(G.a)(Object(G.a)({type:"button",className:U.a.IconButton,onClick:n},c),{},{children:e}))};V.defaultProps={onClick:function(){return null},children:null};var Y=V;function q(){return(q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function Q(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var W=a.createElement("path",{d:"M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"}),X=a.createElement("path",{d:"M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"});function $(t,e){var n=t.title,c=t.titleId,r=Q(t,["title","titleId"]);return a.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":c},r),void 0===n?a.createElement("title",{id:c},"cancel-circle"):n?a.createElement("title",{id:c},n):null,W,X)}var tt=a.forwardRef($),et=(n.p,n(20)),nt=n.n(et);function ct(){var t=Object(b.c)(T),e=Object(b.b)();return Object(r.jsx)("ul",{className:nt.a.list,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(r.jsxs)("li",{className:nt.a.item,children:[Object(r.jsxs)("p",{className:nt.a.text,children:[c,": ",a]}),Object(r.jsx)(Y,{onClick:function(){return function(t){return e(C(t))}(n)},"aria-label":"Delete contact",children:Object(r.jsx)(tt,{width:"24",height:"24",fill:"#fff"})})]},n)}))})}var rt=n(26),at=n.n(rt);function it(t){var e=t.title,n=t.children;return Object(r.jsxs)("div",{className:at.a.sectionContainer,children:[Object(r.jsx)("h2",{className:at.a.title,children:e}),n]})}function ot(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(it,{title:"Phonebook",children:Object(r.jsx)(J,{})}),Object(r.jsxs)(it,{title:"Contacts",children:[Object(r.jsx)(Z,{}),Object(r.jsx)(ct,{})]})]})}n(57);l.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(b.a,{store:F,children:Object(r.jsx)(u.a,{loading:null,persistor:B,children:Object(r.jsx)(s.a,{children:Object(r.jsx)(ot,{})})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",formItem:"ContactForm_formItem__eB3jj",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}}},[[59,1,2]]]);
//# sourceMappingURL=main.b844a89a.chunk.js.map
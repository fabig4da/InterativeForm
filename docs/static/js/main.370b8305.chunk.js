(this.webpackJsonpformulario=this.webpackJsonpformulario||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(9),c=n.n(s),u=n(4),i=n(7),o=n(8),l=n(2),b="input-container",j="input-ok",f="input-wrong",p="label-up",d=n(0),m=function(e){var t=e.name,n=e.label,r=e.parseInput,s=e.type,c=Object(a.useState)({val:"",ok:void 0}),u=Object(l.a)(c,2),i=u[0],o=u[1],m=Object(a.useRef)();Object(a.useEffect)((function(){r({name:t,value:i.val,ok:i.ok}),v(m,i.ok)}),[i]);var O=function(e){return!!function(e,t){switch(e){case"text":return!/\d/g.test(t)&&t.length>1;case"email":var n=t.split("@");return!!(n&&2===n.length&&n[1].length>1);case"password":return!!(/\d/g.test(t)&&/[a-z]/g.test(t)&&/[A-Z]/g.test(t));case"number":return!(!/\d/g.test(t)||/[a-z]/g.test(t)||/[A-Z]/g.test(t));default:return!1}}(s,e)},v=function(e,t){void 0!==t&&(t?(e.current.classList.add(j),e.current.classList.remove(f)):(e.current.classList.remove(j),e.current.classList.add(f)))};return Object(d.jsxs)("div",{className:b,ref:m,children:[Object(d.jsx)("label",{htmlFor:t,children:n}),Object(d.jsx)("input",{type:s,value:i.val,name:t,id:t,onFocus:function(){m.current.classList.add(p)},onBlur:function(){i.val||m.current.classList.remove(p)},onChange:function(e){var t=e.target.value;o({val:t,ok:O(t)})}}),i.ok?Object(d.jsx)("i",{className:"fa fa-check ik"}):Object(d.jsx)("i",{className:"fa fa-times iw"})]})},O=function(){var e=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),c=Object(l.a)(s,2),b=c[0],j=c[1],f=Object(a.useState)({}),p=Object(l.a)(f,2),d=p[0],m=p[1];Object(a.useEffect)((function(){var e=O();e.includes(!1)||e.includes(void 0)?j(!1):j(!0),v()}),[n]);var O=function(){return n.map((function(e){return e.ok}))},v=function(){return n.map((function(e){var t=e.name,n=e.value;return m((function(e){return g(e,t,n)}))}))},g=function(e,t,n){return Object(i.a)(Object(i.a)({},e),{},Object(u.a)({},t,n))};return{data:d,parseInput:function(e){var t=Object(o.a)(n),a=t.findIndex((function(t){return t.name===e.name}));a>=0?(t[a]=e,r(t)):r((function(t){return[].concat(Object(o.a)(t),[e])}))},inputOk:b}}(),t=e.data,n=e.parseInput,r=e.inputOk;return Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),console.log(t)},children:[Object(d.jsx)(m,{name:"name",label:"Ingrese su nombre",parseInput:n,type:"text"}),Object(d.jsx)(m,{name:"lastname",label:"Ingrese su apelllido",parseInput:n,type:"text"}),Object(d.jsx)(m,{name:"email",label:"Ingrese su email",parseInput:n,type:"email"}),Object(d.jsx)(m,{name:"password",label:"Ingrese su contrase\xf1a",parseInput:n,type:"password"}),Object(d.jsx)("button",{type:"submit",disabled:!r,children:"Registrarse"})]})};var v=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(O,{})})};n(15);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.370b8305.chunk.js.map
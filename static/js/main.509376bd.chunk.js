(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),s=n(12),i=n.n(s),a=n(6),r=n(3),u=n(4),d=n(5),j=n(0),l=function(t){var e=t.todo,n=t.id,o=t.checkbox,s=t.Todos,i=t.SetTodos,l=Object(c.useState)(!1),b=Object(a.a)(l,2),O=b[0],x=b[1],f=Object(c.useState)(e),h=Object(a.a)(f,2),p=h[0],v=h[1],m=Object(c.useRef)(null);Object(c.useEffect)((function(){o&&null!==m.current?m.current.style="text-decoration: line-through":o&&null!==m.current&&(m.current.style="text-decoration: none")}));return Object(j.jsxs)("div",{class:"todo",children:[Object(j.jsx)("div",{className:"right",children:!0===O?Object(j.jsx)("input",{type:"text",onChange:function(t){return v(t.target.value)},value:p}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{onClick:function(){o?(m.current.style="text-decoration: none",i(s.map((function(t){return t.id===n?Object(r.a)(Object(r.a)({},t),{},{done:!1}):Object(r.a)({},t)})))):(m.current.style="text-decoration: line-through",i(s.map((function(t){return t.id===n?Object(r.a)(Object(r.a)({},t),{},{done:!0}):Object(r.a)({},t)}))))},type:"checkbox",defaultChecked:o}),Object(j.jsx)("span",{ref:m,children:e})]})}),Object(j.jsx)("div",{className:"btns",children:!1===O?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.a,{onClick:function(t){x(!0)},className:"EditBtn",size:"1x",icon:d.b}),Object(j.jsx)(u.a,{onClick:function(){i(s.filter((function(t){return t.id!==n})))},className:"DeleteBtn",size:"1x",icon:d.c})]}):Object(j.jsx)(u.a,{onClick:function(){i(s.map((function(t){return t.id===n?Object(r.a)(Object(r.a)({},t),{},{text:p}):Object(r.a)({},t)}))),x(!1)},className:"EditBtn",size:"1x",icon:d.a})})]},n)},b=function(t){var e=t.Todos,n=t.SetTodos;return Object(j.jsx)("div",{class:"todolist",children:e.map((function(t,c){return Object(j.jsx)(l,{todo:t.text,checkbox:t.done,Todos:e,SetTodos:n,id:t.id},c)}))})},O=n(13),x=n(27),f=function(t){var e=t.input,n=t.SetInput,c=t.Todos,o=t.SetTodos,s=function(){""!==e.text&&void 0!==e.text&&!1===i()&&o([].concat(Object(O.a)(c),[e]))},i=function(){var t=!1;return c.forEach((function(n){n.text===e.text&&(t=!0)})),t};return Object(j.jsxs)("div",{class:"todo-input",children:[Object(j.jsx)("input",{className:"input",type:"text",placeholder:"Type something...",onKeyUp:function(t){n({id:Object(x.a)(),text:t.target.value,done:!1})},onKeyPress:function(t){return"Enter"===t.key?s():""}}),Object(j.jsx)(u.a,{onClick:s,className:"PlusBtn",size:"1x",icon:d.d})]})};n(24);var h=function(){var t=Object(c.useState)({}),e=Object(a.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)([]),i=Object(a.a)(s,2),r=i[0],u=i[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{input:n,SetInput:o,SetTodos:u,Todos:r}),Object(j.jsx)(b,{Todos:r,SetTodos:u})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),s(t),i(t)}))};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),p()}},[[25,1,2]]]);
//# sourceMappingURL=main.509376bd.chunk.js.map
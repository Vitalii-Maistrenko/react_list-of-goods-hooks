(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),s=n(6),r=n(4),i=n(8),a=(n(13),n(2)),l=n(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(){var t={sortedGoods:[].concat(u),showResetButton:!1},e=Object(a.useState)(t),n=Object(i.a)(e,2),c=n[0],o=n[1],b=c.sortedGoods,h=c.showResetButton,d=c.sortByAlphabeticallyActive,j=c.sortByLengthActive,p=c.reverseActive,v=function(t){o((function(e){return Object(r.a)(Object(r.a)({},e),t)}))},f=function(t,e){var n=Object(s.a)(b).sort(t);v(Object(r.a)({sortedGoods:n,showResetButton:!0},function(t){return{sortByAlphabeticallyActive:"alphabetical"===t,sortByLengthActive:"length"===t,reverseActive:"reverse"===t}}(e)))},g=function(){o(t)},O=function(t){return"button ".concat(t?"":"is-light")};return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:"".concat(O(!!d)," is-info"),onClick:function(){f((function(t,e){return t.localeCompare(e)}),"alphabetical")},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:"".concat(O(!!j)," is-success"),onClick:function(){f((function(t,e){return t.length-e.length}),"length")},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:"".concat(O(!!p)," is-warning"),onClick:function(){p?g():function(){var t=Object(s.a)(b).reverse();v({sortedGoods:t,reverseActive:!p})}()},children:"Reverse"}),h&&Object(l.jsx)("button",{type:"button",className:"button is-danger",onClick:g,children:"Reset"})]}),Object(l.jsx)("ul",{children:b.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4bd8b46a.chunk.js.map
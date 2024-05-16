"use strict";(self.webpackChunkauto_immutable_docs=self.webpackChunkauto_immutable_docs||[]).push([[6298],{67595:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z",fill:e}},{tag:"path",attrs:{d:"M172.2 828.1h679.6L512 239.9 172.2 828.1zM560 720a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm-16-304v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z",fill:t}},{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z",fill:e}}]}},name:"warning",theme:"twotone"}},78391:function(e,t,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=(a=n(55905))&&a.__esModule?a:{default:a};t.default=l,e.exports=l},55905:function(e,t,n){var a=n(64836),l=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(42122)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=a(n(67595)),c=a(n(92074));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var m=function(e,t){return o.createElement(c.default,(0,r.default)((0,r.default)({},e),{},{ref:t,icon:i.default}))},s=o.forwardRef(m);t.default=s},2554:function(e,t,n){n.r(t);var a=n(67294),l=n(65634),r=n(30645),o=n(41520),i=n(61309);t.default=e=>{let{className:t}=e;return a.createElement("article",{className:`set-method-api-overiew-page ${t}`},a.createElement("h1",null,"Set Method Overiew"),a.createElement(i.Z,null,"New updates are merged into AutoImmutable instance data by default."),a.createElement(i.Z,null,"So only supply the exact changes to be merged ",a.createElement("strong",null,a.createElement("i",null,"(","i.e. do not spread changing properties into the current properties as is commonly done in pure functional development",")")),"."),a.createElement(i.Z,null,"An optional ",a.createElement("strong",null,a.createElement("code",null,"onUpdateComplete"))," callback may be provided as a second argument."),a.createElement(i.Z,null,"And to overwrite/delete a slice of the AutoImmutable instance data, use any combinations of the ",a.createElement("strong",null,a.createElement(r.Z,{to:"/api/method/set/tags"},"tag"))," commands."),a.createElement("strong",null,"Example:"),a.createElement(o.Z,null,"import AutoImmutable from 'auto-immutable';\n\n// Given the following immutable data:\nconst protectedData = {\n    a: { b: [ { x: 7, y: 8, z: 9 } ] },\n    j: 10\n};\n\nconst aImmutable = new AutoImmutable( protectedData );\n\nconst consumer = aImmutable.connect();\n\nconsumer.set({\n    a: {\n        b: { 0: { y: 73 } },\n        d: 80\n    },\n    j: 23\n}, changes => console.log( changes ))\n// updates AutoImmutable instance data to: {\n//    a: {\n//        b: [ { x: 7, y: 73, z: 9 } ],\n//        d: 80\n//    },\n//    j: 23\n// };\n// the second argument is invoked immediately following the update"),a.createElement("h3",{id:"indexing"},"Indexing"),a.createElement(i.Z,null,"Traditionally, AutoImmutable instance data properties of the Array type are updated by a new array replacement. This overwrites the current property."),a.createElement(i.Z,null,"Hence the need for ",a.createElement("code",null,"indexing"),". Indexing provides a mechanism for updating array properties at specific indexes using an indexed change object property."),a.createElement(i.Z,null,"The store also recognizes and resolves negative indexes when present in the indexed change object. See additional ",a.createElement(r.Z,{to:"/api/method/set/overview#neg-idx-tip"},"tip")," below."),a.createElement("strong",null,"Example:"),a.createElement(o.Z,null,"import AutoImmutable from 'auto-immutable';\n\n// Given the following array bearing immutable data:\nconst protectedData = {\n    a: { b: [ { x: 7, y: 8, z: 9 } ] },\n    j: 10\n};\n\nconst aImmutable = new AutoImmutable( protectedData );\n\nconst consumer = aImmutable.connect();\n\n// The following will override the existing array.\nconsumer.set({ a: { b: [ { y: 30 }, 22 ] } });\n// updates the AutoImmutable instance data to: {\n//     a: { b: [ { y: 30 }, 22 ] },\n//     j: 10\n// };\n\n// The followinng will update the existing array at indexes.\nconsumer.set({ a: { b: { 0: { y: 30 }, 1: 22 } } });\n// updates the AutoImmutable instance data to: {\n//     a: { b: [ { x: 7, y: 30, z: 9 }, 22 ] },\n//     j: 10\n// };\n\n// The followinng will update the existing array at indexes.\nconsumer.set({ a: { b: { '-1': { y: 30 }, 1: 22 } } });\n// updates the AutoImmutable instance data to: {\n//     a: { b: [ { x: 7, y: 30, z: 9 }, 22 ] },\n//     j: 10\n// };"),a.createElement("div",{id:"neg-idx-tip"},a.createElement(l.Z,{style:{margin:"2rem 0"},title:a.createElement("strong",null,a.createElement("i",null,"Tip:"))},"Negative indexing pointing at an out-of-bounds index is ignored.")),a.createElement("h3",{id:"batched-update"},"Batched Updates"),a.createElement(i.Z,null,"Auto Immutable JS provides a means for updating data as a transaction of several change payloads."),a.createElement(i.Z,null,"The list of change payloads are applied sequentially from ",a.createElement("code",null,"index 0")," to the ",a.createElement("code",null,"final index"),"."),a.createElement(i.Z,null,"This capability is especially applicable when update operation using ",a.createElement("strong",null,a.createElement(r.Z,{to:"/api/method/set/tags"},"tag"))," commands depends on previous outcomes."),a.createElement(o.Z,null,"import AutoImmutable from 'auto-immutable';\n\n// Given the following immutable data:\nconst protectedData = {\n    a: { b: [ { x: 7, y: 8, z: 9 } ] },\n    j: 10\n};\n\nconst aImmutable = new AutoImmutable( protectedData );\n\nconst consumer = aImmutable.connect();\n\nconsumer.set([\n    {\n        a: { b: { 1: 22 },\n        c: 40\n    },\n    {\n        a: { b: { 0: { v: 8, w: 560, y: 110, z: 120 } } }\n    },\n]);\n// updates the AutoImmutable instance data to: {\n//     a: { b: [ { v: 8, w: 560, x: 7, y: 110, z: 120 }, 22 ] },\n//     c: 40,\n//     j: 10\n// };"))}},65634:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),l=n(78391),r=n.n(l);const o=(0,a.memo)((()=>a.createElement(r(),{style:{fontSize:24},twoToneColor:["#f40","#fd0"]})));o.displayName="WarningIcon";var i=o;const c=(0,a.memo)((e=>{let{children:t}=e;return!!a.Children.count(t)&&a.createElement(a.Fragment,null,a.createElement(i,null)," ","string"==typeof t?a.createElement("strong",null,t):t)}));c.displayName="Alert.Header";var u=e=>{let{title:t,children:n,className:l="",...r}=e;return a.createElement("section",Object.assign({},r,{className:"alert"+(l.length?` ${l}`:"")}),a.createElement(c,null,t),a.createElement("div",{className:"content"},a.Children.map(n,(e=>e))))}},61309:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);const l=(0,a.forwardRef)(((e,t)=>{let{children:n,className:l,...r}=e;return a.createElement("div",Object.assign({role:"paragraph"},r,{className:"paragraph"+(l?` ${l}`:""),ref:t}),a.Children.map(n,(e=>e)))}));l.displayName="Paragraph";var r=l}}]);
//# sourceMappingURL=component---src-pages-api-method-set-overview-tsx-520d4465317e27c92ee7.js.map
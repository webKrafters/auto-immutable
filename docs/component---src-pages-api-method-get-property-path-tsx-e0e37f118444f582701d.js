"use strict";(self.webpackChunkauto_immutable_docs=self.webpackChunkauto_immutable_docs||[]).push([[7465],{116:function(e,t,a){a.r(t);var n=a(67294),l=a(75591),r=a(30645),c=a(41520),o=a(5565),m=a(61309);const i={marginTop:"1rem"};t.default=e=>{let{className:t}=e;return n.createElement("article",{className:`property-path-api-page ${t}`},n.createElement("h1",null,"Property Path"),n.createElement("div",null,n.createElement("h3",null,"What is a Property Path?"),n.createElement("div",null,n.createElement("div",null,n.createElement(m.Z,null,"A property path is a dot-notation string leading to a specific property within an object."),n.createElement(m.Z,null,l.default.title," recognizes any property path abiding by the ",n.createElement(r.Z,{to:"https://lodash.com/docs/4.17.15#has"},n.createElement("strong",null,"Lodash"))," object path ",n.createElement("strong",null,n.createElement("u",null,"string"))," specifications."),n.createElement(m.Z,null,l.default.title," will, in addition, resolve any such property paths containing negative integer indexes.")),n.createElement(m.Z,null,n.createElement(o.Z,null,n.createElement("br",null),n.createElement("strong",null,"Negative")," integer ","[",n.createElement("i",null,"-N"),"]"," in a property path indicates the ",n.createElement("i",null,"nth")," last array index: resolved at runtime by counting ",n.createElement("code",null,"abs(-N)")," steps backward from array length.")),n.createElement(m.Z,null,n.createElement("h3",{id:"property-path-example"},"Ex. Given the following object:"),n.createElement(c.Z,null,"{\n    a: {\n        c: {\n            e: 5,\n            f: [ 0, 2, 4 ]\n        }\n    }\n}"),n.createElement(m.Z,{style:i},"The property path ",n.createElement("code",null,"a.c.e")," accesses the ",n.createElement("code",null,"e=5")," property."),n.createElement(m.Z,null,"Either of the property paths ",n.createElement("code",null,"a.c.f.1"),", ",n.createElement("code",null,"a.c.f.-2"),", ",n.createElement("code",null,"a.c.f[1]")," and ",n.createElement("code",null,"a.c.f[-2]")," is a valid property path to access the ",n.createElement("code",null,"[1]=2")," property."),n.createElement(m.Z,null,"A special property path, ",n.createElement(r.Z,{to:"/api/method/get/property-path#global"},"@@GLOBAL"),", may be used to access the AutoImmutable data as a whole."))),n.createElement("h3",{id:"global"},"What is the @@GLOBAL keyword?"),n.createElement("div",null,n.createElement("strong",null,"@@GLOBAL")," is a property path which can be used to obtain a snapshot of the entire AutoImmutable data held within the AutoImmutable instance.",n.createElement("br",null))),n.createElement("div",null,n.createElement("h4",{id:"access-usage"},"Example:"),n.createElement(c.Z,null,"import AutoImmutable from 'auto-immutable';\n\nconst protectedData = {\n    a: 1,\n    b: 2,\n    c: 3,\n    d: {\n        e: 5,\n        f: [ 6, {\n            x: 7,\n            y: 8,\n            z: 9\n        } ]\n    }\n};\n\nconst aImmutable = new AutoImmutable( protectedData );\n\nconst consumer = aImmutable.connect();\n\nconsumer.get( '@@GLOBAL', 'd', 'd.f[1]' );\n// returns\n// {\n//     '@@GLOBAL': protectedData,\n//     d: protectedData.d,\n//     'd.f[1]': protectedData.d.f[1]\n// };")))}},5565:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);const l=e=>{let{children:t}=e;return n.createElement("p",{className:"note-pad"},n.createElement("strong",{className:"title"},"Note:")," ",n.Children.map(t,(e=>e)))};l.displayName="NotePad";var r=l},61309:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);const l=(0,n.forwardRef)(((e,t)=>{let{children:a,className:l,...r}=e;return n.createElement("div",Object.assign({role:"paragraph"},r,{className:"paragraph"+(l?` ${l}`:""),ref:t}),n.Children.map(a,(e=>e)))}));l.displayName="Paragraph";var r=l}}]);
//# sourceMappingURL=component---src-pages-api-method-get-property-path-tsx-e0e37f118444f582701d.js.map
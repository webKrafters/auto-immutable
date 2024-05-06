"use strict";(self.webpackChunkauto_immutable_docs=self.webpackChunkauto_immutable_docs||[]).push([[7465],{116:function(e,t,n){n.r(t);var a=n(67294),l=n(75591),r=n(30645),c=n(41520);const o={marginTop:"1rem"};t.default=e=>{let{className:t}=e;return a.createElement("article",{className:`property-path-api-page ${t}`},a.createElement("h1",null,"Property Path"),a.createElement("div",null,a.createElement("h3",null,"What is a Property Path?"),a.createElement("div",null,a.createElement("div",null,a.createElement("p",null,"A property path is a dot-notation string leading to a specific property within an object."),a.createElement("p",null,l.default.title," recognizes any property path abiding by the ",a.createElement(r.Z,{to:"https://lodash.com/docs/4.17.15#has"},a.createElement("strong",null,"Lodash"))," object path ",a.createElement("strong",null,a.createElement("u",null,"string"))," specifications."),a.createElement("p",null,l.default.title," will, in addition, resolve any such property paths containing negative integer indexes.")),a.createElement("p",null,a.createElement("strong",null,"Negative")," integer ","[",a.createElement("i",null,"-N"),"]"," in a property path indicates the ",a.createElement("i",null,"nth")," last an array index: resolved at runtime by counting ",a.createElement("code",null,"abs(-N)")," steps backward from array length."),a.createElement("p",null,a.createElement("h3",{id:"property-path-example"},"Ex. Given the following object:"),a.createElement(c.Z,null,"{\n    a: {\n        c: {\n            e: 5,\n            f: [ 0, 2, 4 ]\n        }\n    }\n}"),a.createElement("p",{style:o},"The property path ",a.createElement("code",null,"a.c.e")," accesses the ",a.createElement("code",null,"e=5")," property."),a.createElement("p",null,"Either of the property paths ",a.createElement("code",null,"a.c.f.1"),", ",a.createElement("code",null,"a.c.f.-2"),", ",a.createElement("code",null,"a.c.f[1]")," and ",a.createElement("code",null,"a.c.f[-2]")," is a valid property path to access the ",a.createElement("code",null,"[1]=2")," property."),a.createElement("p",null,"A special property path, ",a.createElement(r.Z,{to:"/api/method/get/property-path#global"},"@@GLOBAL"),", may be used to access the AutoImmutable data as a whole."))),a.createElement("h3",{id:"global"},"What is the @@GLOBAL keyword?"),a.createElement("div",null,a.createElement("strong",null,"@@GLOBAL")," is a property path which can be used to obtain a snapshot of the entire AutoImmutable data held in the AutoImmutable instance.",a.createElement("br",null))),a.createElement("div",null,a.createElement("h3",{id:"access-usage"},"Example:"),a.createElement(c.Z,null,"import AutoImmutable from 'auto-immutable';\n\nconst protectedData = {\n    a: 1,\n    b: 2,\n    c: 3,\n    d: {\n        e: 5,\n        f: [ 6, {\n            x: 7,\n            y: 8,\n            z: 9\n        } ]\n    }\n};\n\nconst aImmutable = new AutoImmutable( protectedData );\n\nconst consumer = aImmutable.connect();\n\nconsumer.get( '@@GLOBAL', 'd', 'd.f[1]' );\n// returns\n// {\n//     '@@GLOBAL': protectedData,\n//     d: protectedData.d,\n//     'd.f[1]': protectedData.d.f[1]\n// };")))}}}]);
//# sourceMappingURL=component---src-pages-api-method-get-property-path-tsx-dde651ee77560ff3688e.js.map
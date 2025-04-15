(self.webpackChunknr_pies=self.webpackChunknr_pies||[]).push([["9417"],{41907:function(e,t,s){"use strict";s.r(t),s.d(t,{default:()=>x,frontMatter:()=>v,metadata:()=>n,assets:()=>f,toc:()=>g,contentTitle:()=>m});var n=JSON.parse('{"id":"spec/resource/process_event","title":"Process Event \uD83D\uDD2C","description":"Represents a process concept at a specific event in time.","source":"@site/docs/spec/resource/process_event.mdx","sourceDirName":"spec/resource","slug":"/spec/resource/process_event","permalink":"/nr-pies/docs/spec/resource/process_event","draft":false,"unlisted":false,"editUrl":"https://github.com/bcgov/nr-pies/tree/main/docs/spec/resource/process_event.mdx","tags":[{"inline":false,"label":"Developer","permalink":"/nr-pies/docs/tags/developer","description":"Content related to technical structure and implementation"}],"version":"current","lastUpdatedBy":"Jeremy Ho","lastUpdatedAt":1744221806000,"frontMatter":{"id":"process_event","title":"Process Event \uD83D\uDD2C","description":"Represents a process concept at a specific event in time.","tags":["developer"]},"sidebar":"docSidebar","previous":{"title":"Resource Types","permalink":"/nr-pies/docs/category/resource-types"},"next":{"title":"Message Types","permalink":"/nr-pies/docs/category/message-types"}}'),r=s("85893"),i=s("50065"),c=s("31705"),a=s("42415"),o=s.n(a),l=s("58168"),d=s("97645"),p=s("19453"),h=JSON.parse('{"event":{"start_date":"2024-12-01","end_date":"2024-12-31"},"process":{"class":["application","review","assessment","under-review"],"concept":"http://bcgov.github.io/nr-pies/docs/concept/process_tracking","description":"The authorization request is under review by subject matter expert.","status":"Auditing","status_code":"AU"}}'),u=JSON.parse('{"$id":"https://raw.githubusercontent.com/bcgov/nr-pies/refs/heads/main/docs/spec/resource/process_event.schema.json","$schema":"https://json-schema.org/draft-07/schema","title":"Process Event","description":"Represents a process concept at a specific event in time.","type":"object","properties":{"event":{"$ref":"https://raw.githubusercontent.com/bcgov/nr-pies/refs/heads/main/docs/spec/data/event.schema.json"},"process":{"$ref":"https://raw.githubusercontent.com/bcgov/nr-pies/refs/heads/main/docs/spec/data/process.schema.json"}},"required":["event","process"]}');let v={id:"process_event",title:"Process Event \uD83D\uDD2C",description:"Represents a process concept at a specific event in time.",tags:["developer"]},m=void 0,f={},g=[{value:"Scope",id:"scope",level:2},{value:"Structure",id:"structure",level:2},{value:"Specification",id:"specification",level:2},{value:"Implementation Notes",id:"implementation-notes",level:2},{value:"References",id:"references",level:2}];function j(e){let t={a:"a",h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"../overview#maturity",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/Maturity-Trial-green",alt:"Maturity"})})}),"\n",(0,r.jsx)(t.p,{children:"Represents a process concept at a specific event in time."}),"\n",(0,r.jsx)(t.h2,{id:"scope",children:"Scope"}),"\n",(0,r.jsx)(t.p,{children:"This data type is intended to represent an instance of a temporal event within a defined process."}),"\n",(0,r.jsxs)(t.p,{children:["Loosely taking inspiration from ",(0,r.jsx)(t.a,{href:"https://www.hl7.org/fhir/datatypes.html#timing",children:"HL7 Timing"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Cardinality"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description & Constraints"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"event"}),(0,r.jsx)(t.td,{children:"1..1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../data/event",children:"Event"})}),(0,r.jsx)(t.td,{children:"An event concept. This attribute should solely describe the raw known factual information a specific temporal event."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"process"}),(0,r.jsx)(t.td,{children:"1..1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"../data/process",children:"Process"})}),(0,r.jsx)(t.td,{children:"An process tracking concept. This attribute should represent the core concept of a defined process."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"specification",children:"Specification"}),"\n",(0,r.jsxs)(l.default,{queryString:"tab",children:[(0,r.jsx)(d.default,{value:"schema",label:"Schema",default:!0,children:(0,r.jsx)(o(),{resolverOptions:(0,p.tw)({remote:!0}),schema:u,viewerOptions:{showExamples:!0}})}),(0,r.jsx)(d.default,{value:"source",label:"Source",children:(0,r.jsx)(c.default,{language:"json",showLineNumbers:!0,children:JSON.stringify(u,null,2)})}),(0,r.jsx)(d.default,{value:"example",label:"Example",children:(0,r.jsx)(c.default,{language:"json",showLineNumbers:!0,children:JSON.stringify(h,null,2)})})]}),"\n",(0,r.jsx)(t.h2,{id:"implementation-notes",children:"Implementation Notes"}),"\n",(0,r.jsxs)(t.p,{children:["The Process Event type is designed to act as a container data type representing a cartesian product between the\n",(0,r.jsx)(t.a,{href:"../data/event",children:"Event"})," and ",(0,r.jsx)(t.a,{href:"../data/process",children:"Process"})," data types. Both data types are required in order to have a\nsemantically coherent Process Event. Recipient systems will be able to associate a specific process happening at a\ndefined time using this data type."]}),"\n",(0,r.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"../data/event",children:"Event"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"../data/process",children:"Process"})}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},73586:function(e,t,s){var n={"./img/interoperable.svg":["69358","5386"],"./img/logo.svg":["92107","1587"],"./img/cc-by.png":["93551","884"],"./img/favicon.ico":["59854","2054"],"./img/opensource.svg":["21983","5583"],"./img/BCID_H_rgb_rev.png":["49638","5467"],"./img/docusaurus.png":["38970","154"],"./img/BCID_H_rgb_pos.png":["60057","8151"],"./img/easytouse.svg":["61954","6817"],"./img/favicon.png":["36178","1034"]};function r(e){if(!s.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return s.e(t[1]).then(function(){return s(r)})}r.keys=()=>Object.keys(n),r.id="73586",e.exports=r},19453:function(e,t,s){"use strict";function n(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],{resolve:e=>new Promise((t,s)=>{fetch(e.toString(),{headers:{Accept:"application/json"}}).then(e=>e.json()).then(e=>t(e)).catch(e=>s(e))})}}function r(e){let{basePath:t,jsonPointer:r,remote:i}=e,c={};return t&&(c.resolvers={file:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{resolve:t=>new Promise((n,r)=>{let i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=e.toString().split("/"),n=t;for(let e=0;e<s.length;e++)if(".."===s[e])n=n.split("/").slice(0,-1).join("/");else{if("."===s[e])continue;n=`${n}/${s[e]}`}return n}(t,e);s(73586)(`./${i.substring(1)}`).then(e=>n(e.default)).catch(e=>r(e))})}}(t)}),i&&(void 0===c.resolvers&&(c.resolvers={}),c.resolvers.http=n("http"),c.resolvers.https=n("https")),r&&(c.jsonPointer=r),c}s.d(t,{tw:()=>r})}}]);
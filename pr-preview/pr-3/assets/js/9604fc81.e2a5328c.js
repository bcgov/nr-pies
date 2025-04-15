"use strict";(self.webpackChunknr_pies=self.webpackChunknr_pies||[]).push([["8788"],{11871:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"docusaurus/tutorial_extras/manage_docs_versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","source":"@site/docs/docusaurus/tutorial_extras/manage_docs_versions.md","sourceDirName":"docusaurus/tutorial_extras","slug":"/docusaurus/tutorial_extras/manage_docs_versions","permalink":"/nr-pies/pr-preview/pr-3/docs/docusaurus/tutorial_extras/manage_docs_versions","draft":false,"unlisted":false,"editUrl":"https://github.com/bcgov/nr-pies/tree/main/docs/docusaurus/tutorial_extras/manage_docs_versions.md","tags":[],"version":"current","lastUpdatedBy":"Jeremy Ho","lastUpdatedAt":1730421483000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial - Extras","permalink":"/nr-pies/pr-preview/pr-3/docs/category/tutorial---extras"},"next":{"title":"Translate your site","permalink":"/nr-pies/pr-preview/pr-3/docs/docusaurus/tutorial_extras/translate_your_site"}}'),o=n("85893"),i=n("50065");let t={sidebar_position:1},d="Manage Docs Versions",a={},c=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function l(e){let s={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"manage-docs-versions",children:"Manage Docs Versions"})}),"\n",(0,o.jsx)(s.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,o.jsx)(s.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,o.jsx)(s.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"docs"})," folder is copied into ",(0,o.jsx)(s.code,{children:"versioned_docs/version-1.0"})," and ",(0,o.jsx)(s.code,{children:"versions.json"})," is created."]}),"\n",(0,o.jsx)(s.p,{children:"Your docs now have 2 versions:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"1.0"})," at ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"current"})," at ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,o.jsx)(s.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,o.jsx)(s.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,o.jsxs)(s.p,{children:["Modify the ",(0,o.jsx)(s.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: "docsVersionDropdown",\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n'})}),"\n",(0,o.jsx)(s.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Docs Version Dropdown",src:n(73652).Z+"",width:"370",height:"302"})}),"\n",(0,o.jsx)(s.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,o.jsx)(s.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"docs/hello.md"})," updates ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},73652:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},50065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return t}});var r=n(67294);let o={},i=r.createContext(o);function t(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
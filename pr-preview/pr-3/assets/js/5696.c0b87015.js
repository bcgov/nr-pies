"use strict";(self.webpackChunknr_pies=self.webpackChunknr_pies||[]).push([["5696"],{57862:function(t,e,n){n.d(e,{diagram:()=>H});var i=n("5995"),r=n("27818");function s(t,e){let n;if(void 0===e)for(let e of t)null!=e&&(n>e||void 0===n&&e>=e)&&(n=e);else{let i=-1;for(let r of t)null!=(r=e(r,++i,t))&&(n>r||void 0===n&&r>=r)&&(n=r)}return n}function o(t){return t.target.depth}function l(t,e){return t.sourceLinks.length?t.depth:e-1}function h(t,e){let n=0;if(void 0===e)for(let e of t)(e=+e)&&(n+=e);else{let i=-1;for(let r of t)(r=+e(r,++i,t))&&(n+=r)}return n}function a(t,e){let n;if(void 0===e)for(let e of t)null!=e&&(n<e||void 0===n&&e>=e)&&(n=e);else{let i=-1;for(let r of t)null!=(r=e(r,++i,t))&&(n<r||void 0===n&&r>=r)&&(n=r)}return n}function c(t){return function(){return t}}function u(t,e){return y(t.source,e.source)||t.index-e.index}function f(t,e){return y(t.target,e.target)||t.index-e.index}function y(t,e){return t.y0-e.y0}function p(t){return t.value}function d(t){return t.index}function g(t){return t.nodes}function _(t){return t.links}function x(t,e){let n=t.get(e);if(!n)throw Error("missing: "+e);return n}function m({nodes:t}){for(let e of t){let t=e.y0,n=t;for(let n of e.sourceLinks)n.y0=t+n.width/2,t+=n.width;for(let t of e.targetLinks)t.y1=n+t.width/2,n+=t.width}}var k=Math.PI,v=2*k,b=v-1e-6;function S(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function w(){return new S}S.prototype=w.prototype={constructor:S,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,i){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(t,e,n,i,r,s){this._+="C"+ +t+","+ +e+","+ +n+","+ +i+","+(this._x1=+r)+","+(this._y1=+s)},arcTo:function(t,e,n,i,r){t=+t,e=+e,n=+n,i=+i,r=+r;var s=this._x1,o=this._y1,l=n-t,h=i-e,a=s-t,c=o-e,u=a*a+c*c;if(r<0)throw Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(u>1e-6){if(Math.abs(c*l-h*a)>1e-6&&r){var f=n-s,y=i-o,p=l*l+h*h,d=Math.sqrt(p),g=Math.sqrt(u),_=r*Math.tan((k-Math.acos((p+u-(f*f+y*y))/(2*d*g)))/2),x=_/g,m=_/d;Math.abs(x-1)>1e-6&&(this._+="L"+(t+x*a)+","+(e+x*c)),this._+="A"+r+","+r+",0,0,"+ +(c*f>a*y)+","+(this._x1=t+m*l)+","+(this._y1=e+m*h)}else this._+="L"+(this._x1=t)+","+(this._y1=e)}else;},arc:function(t,e,n,i,r,s){t=+t,e=+e,n=+n,s=!!s;var o=n*Math.cos(i),l=n*Math.sin(i),h=t+o,a=e+l,c=1^s,u=s?i-r:r-i;if(n<0)throw Error("negative radius: "+n);null===this._x1?this._+="M"+h+","+a:(Math.abs(this._x1-h)>1e-6||Math.abs(this._y1-a)>1e-6)&&(this._+="L"+h+","+a),n&&(u<0&&(u=u%v+v),u>b?this._+="A"+n+","+n+",0,1,"+c+","+(t-o)+","+(e-l)+"A"+n+","+n+",0,1,"+c+","+(this._x1=h)+","+(this._y1=a):u>1e-6&&(this._+="A"+n+","+n+",0,"+ +(u>=k)+","+c+","+(this._x1=t+n*Math.cos(r))+","+(this._y1=e+n*Math.sin(r))))},rect:function(t,e,n,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}};var E=Array.prototype.slice;function W(t){return function(){return t}}function A(t){return t[0]}function L(t){return t[1]}function M(t){return t.source}function I(t){return t.target}function T(t,e,n,i,r){t.moveTo(e,n),t.bezierCurveTo(e=(e+i)/2,n,e,r,i,r)}function P(t){return[t.source.x1,t.y0]}function C(t){return[t.target.x0,t.y1]}var N=function(){var t=(0,i.eW)(function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},"o"),e=[1,9],n=[1,10],r=[1,5,10,12],s={trace:(0,i.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:(0,i.eW)(function(t,e,n,i,r,s,o){var l=s.length-1;switch(r){case 7:let h=i.findOrCreateNode(s[l-4].trim().replaceAll('""','"')),a=i.findOrCreateNode(s[l-2].trim().replaceAll('""','"')),c=parseFloat(s[l].trim());i.addLink(h,a,c);break;case 8:case 9:case 11:this.$=s[l];break;case 10:this.$=s[l-1]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:e,20:n},{1:[2,6],7:11,10:[1,12]},t(n,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(r,[2,8]),t(r,[2,9]),{19:[1,16]},t(r,[2,11]),{1:[2,1]},{1:[2,5]},t(n,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:e,20:n},{15:18,16:7,17:8,18:e,20:n},{18:[1,19]},t(n,[2,3]),{12:[1,20]},t(r,[2,10]),{15:21,16:7,17:8,18:e,20:n},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:(0,i.eW)(function(t,e){if(e.recoverable)this.trace(t);else{var n=Error(t);throw n.hash=e,n}},"parseError"),parse:(0,i.eW)(function(t){var e=this,n=[0],r=[],s=[null],o=[],l=this.table,h="",a=0,c=0,u=0,f=o.slice.call(arguments,1),y=Object.create(this.lexer),p={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(p.yy[d]=this.yy[d]);y.setInput(t,p.yy),p.yy.lexer=y,p.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var g=y.yylloc;o.push(g);var _=y.options&&y.options.ranges;"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function x(){var t;return"number"!=typeof(t=r.pop()||y.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}(0,i.eW)(function(t){n.length=n.length-2*t,s.length=s.length-t,o.length=o.length-t},"popStack"),(0,i.eW)(x,"lex");for(var m,k,v,b,S,w,E,W,A,L={};;){if(v=n[n.length-1],this.defaultActions[v]?b=this.defaultActions[v]:(null==m&&(m=x()),b=l[v]&&l[v][m]),void 0===b||!b.length||!b[0]){var M="";for(w in A=[],l[v])this.terminals_[w]&&w>2&&A.push("'"+this.terminals_[w]+"'");M=y.showPosition?"Parse error on line "+(a+1)+":\n"+y.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(M,{text:y.match,token:this.terminals_[m]||m,line:y.yylineno,loc:g,expected:A})}if(b[0]instanceof Array&&b.length>1)throw Error("Parse Error: multiple actions possible at state: "+v+", token: "+m);switch(b[0]){case 1:n.push(m),s.push(y.yytext),o.push(y.yylloc),n.push(b[1]),m=null,k?(m=k,k=null):(c=y.yyleng,h=y.yytext,a=y.yylineno,g=y.yylloc,u>0&&u--);break;case 2:if(E=this.productions_[b[1]][1],L.$=s[s.length-E],L._$={first_line:o[o.length-(E||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(E||1)].first_column,last_column:o[o.length-1].last_column},_&&(L._$.range=[o[o.length-(E||1)].range[0],o[o.length-1].range[1]]),void 0!==(S=this.performAction.apply(L,[h,c,a,p.yy,b[1],s,o].concat(f))))return S;E&&(n=n.slice(0,-1*E*2),s=s.slice(0,-1*E),o=o.slice(0,-1*E)),n.push(this.productions_[b[1]][0]),s.push(L.$),o.push(L._$),W=l[n[n.length-2]][n[n.length-1]],n.push(W);break;case 3:return!0}}return!0},"parse")},o={EOF:1,parseError:(0,i.eW)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,i.eW)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,i.eW)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,i.eW)(function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,i.eW)(function(){return this._more=!0,this},"more"),reject:(0,i.eW)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,i.eW)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,i.eW)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,i.eW)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,i.eW)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,i.eW)(function(t,e){var n,i,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack)for(var s in r)this[s]=r[s];return!1},"test_match"),next:(0,i.eW)(function(){if(this.done)return this.EOF;!this._input&&(this.done=!0),!this._more&&(this.yytext="",this.match="");for(var t,e,n,i,r=this._currentRules(),s=0;s<r.length;s++)if((n=this._input.match(this.rules[r[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,r[s])))return t;if(!this._backtrack)return!1;else{e=!1;continue}}if(!this.options.flex)break}if(e)return!1!==(t=this.test_match(e,r[i]))&&t;return""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,i.eW)(function(){var t=this.next();return t?t:this.lex()},"lex"),begin:(0,i.eW)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,i.eW)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,i.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,i.eW)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,i.eW)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,i.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,i.eW)(function(t,e,n,i){switch(n){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};function l(){this.yy={}}return s.lexer=o,(0,i.eW)(l,"Parser"),l.prototype=s,s.Parser=l,new l}();N.parser=N;var O=[],$=[],D=new Map,j=(0,i.eW)(()=>{O=[],$=[],D=new Map,(0,i.ZH)()},"clear"),z=class{constructor(t,e,n=0){this.source=t,this.target=e,this.value=n}static{(0,i.eW)(this,"SankeyLink")}},F=(0,i.eW)((t,e,n)=>{O.push(new z(t,e,n))},"addLink"),U=class{constructor(t){this.ID=t}static{(0,i.eW)(this,"SankeyNode")}},Y=(0,i.eW)(t=>{t=i.SY.sanitizeText(t,(0,i.nV)());let e=D.get(t);return void 0===e&&(e=new U(t),D.set(t,e),$.push(e)),e},"findOrCreateNode"),V=(0,i.eW)(()=>$,"getNodes"),G=(0,i.eW)(()=>O,"getLinks"),K=(0,i.eW)(()=>({nodes:$.map(t=>({id:t.ID})),links:O.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),"getGraph"),X={nodesMap:D,getConfig:(0,i.eW)(()=>(0,i.nV)().sankey,"getConfig"),getNodes:V,getLinks:G,getGraph:K,addLink:F,findOrCreateNode:Y,getAccTitle:i.eu,setAccTitle:i.GN,getAccDescription:i.Mx,setAccDescription:i.U$,getDiagramTitle:i.Kr,setDiagramTitle:i.g2,clear:j},q=class t{static{(0,i.eW)(this,"Uid")}static{this.count=0}static next(e){return new t(e+ ++t.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}},Q={left:function(t){return t.depth},right:function(t,e){return e-1-t.height},center:function(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?s(t.sourceLinks,o)-1:0},justify:l},R=(0,i.eW)(function(t,e,n,o){let k,v;let{securityLevel:b,sankey:S}=(0,i.nV)(),N=i.Fy.sankey;"sandbox"===b&&(k=(0,r.Ys)("#i"+e));let O="sandbox"===b?(0,r.Ys)(k.nodes()[0].contentDocument.body):(0,r.Ys)("body"),$="sandbox"===b?O.select(`[id="${e}"]`):(0,r.Ys)(`[id="${e}"]`),D=S?.width??N.width,j=S?.height??N.width,z=S?.useMaxWidth??N.useMaxWidth,F=S?.nodeAlignment??N.nodeAlignment,U=S?.prefix??N.prefix,Y=S?.suffix??N.suffix,V=S?.showValues??N.showValues,G=o.db.getGraph(),K=Q[F];(function(){let t,e,n=0,i=0,r=1,o=1,k=24,v=8,b,S=d,w=l,E=g,W=_,A=6;function L(){let l={nodes:E.apply(null,arguments),links:W.apply(null,arguments)};return function({nodes:t,links:n}){for(let[e,n]of t.entries())n.index=e,n.sourceLinks=[],n.targetLinks=[];let i=new Map(t.map((e,n)=>[S(e,n,t),e]));for(let[t,e]of n.entries()){e.index=t;let{source:n,target:r}=e;"object"!=typeof n&&(n=e.source=x(i,n)),"object"!=typeof r&&(r=e.target=x(i,r)),n.sourceLinks.push(e),r.targetLinks.push(e)}if(null!=e)for(let{sourceLinks:n,targetLinks:i}of t)n.sort(e),i.sort(e)}(l),function({nodes:t}){for(let e of t)e.value=void 0===e.fixedValue?Math.max(h(e.sourceLinks,p),h(e.targetLinks,p)):e.fixedValue}(l),function({nodes:t}){let e=t.length,n=new Set(t),i=new Set,r=0;for(;n.size;){for(let t of n)for(let{target:e}of(t.depth=r,t.sourceLinks))i.add(e);if(++r>e)throw Error("circular link");n=i,i=new Set}}(l),function({nodes:t}){let e=t.length,n=new Set(t),i=new Set,r=0;for(;n.size;){for(let t of n)for(let{source:e}of(t.height=r,t.targetLinks))i.add(e);if(++r>e)throw Error("circular link");n=i,i=new Set}}(l),function(l){let c=function({nodes:e}){let i=a(e,t=>t.depth)+1,s=(r-n-k)/(i-1),o=Array(i);for(let t of e){let e=Math.max(0,Math.min(i-1,Math.floor(w.call(null,t,i))));t.layer=e,t.x0=n+e*s,t.x1=t.x0+k,o[e]?o[e].push(t):o[e]=[t]}if(t)for(let e of o)e.sort(t);return o}(l);b=Math.min(v,(o-i)/(a(c,t=>t.length)-1)),!function(t){let n=s(t,t=>(o-i-(t.length-1)*b)/h(t,p));for(let r of t){let t=i;for(let e of r)for(let i of(e.y0=t,e.y1=t+e.value*n,t=e.y1+b,e.sourceLinks))i.width=i.value*n;t=(o-t+b)/(r.length+1);for(let e=0;e<r.length;++e){let n=r[e];n.y0+=t*(e+1),n.y1+=t*(e+1)}(function(t){if(void 0===e)for(let{sourceLinks:e,targetLinks:n}of t)e.sort(f),n.sort(u)})(r)}}(c);for(let e=0;e<A;++e){let n=Math.pow(.99,e),i=Math.max(1-n,(e+1)/A);(function(e,n,i){for(let r=e.length,s=r-2;s>=0;--s){let r=e[s];for(let t of r){let e=0,i=0;for(let{target:n,value:r}of t.sourceLinks){let s=r*(n.layer-t.layer);e+=function(t,e){let n=e.y0-(e.targetLinks.length-1)*b/2;for(let{source:i,width:r}of e.targetLinks){if(i===t)break;n+=r+b}for(let{target:i,width:r}of t.sourceLinks){if(i===e)break;n-=r}return n}(t,n)*s,i+=s}if(!(i>0))continue;let r=(e/i-t.y0)*n;t.y0+=r,t.y1+=r,P(t)}void 0===t&&r.sort(y),M(r,i)}})(c,n,i),function(e,n,i){for(let r=1,s=e.length;r<s;++r){let s=e[r];for(let t of s){let e=0,i=0;for(let{source:n,value:r}of t.targetLinks){let s=r*(t.layer-n.layer);e+=function(t,e){let n=t.y0-(t.sourceLinks.length-1)*b/2;for(let{target:i,width:r}of t.sourceLinks){if(i===e)break;n+=r+b}for(let{source:i,width:r}of e.targetLinks){if(i===t)break;n-=r}return n}(n,t)*s,i+=s}if(!(i>0))continue;let r=(e/i-t.y0)*n;t.y0+=r,t.y1+=r,P(t)}void 0===t&&s.sort(y),M(s,i)}}(c,n,i)}}(l),m(l),l}L.update=function(t){return m(t),t},L.nodeId=function(t){return arguments.length?(S="function"==typeof t?t:c(t),L):S},L.nodeAlign=function(t){return arguments.length?(w="function"==typeof t?t:c(t),L):w},L.nodeSort=function(e){return arguments.length?(t=e,L):t},L.nodeWidth=function(t){return arguments.length?(k=+t,L):k},L.nodePadding=function(t){return arguments.length?(v=b=+t,L):v},L.nodes=function(t){return arguments.length?(E="function"==typeof t?t:c(t),L):E},L.links=function(t){return arguments.length?(W="function"==typeof t?t:c(t),L):W},L.linkSort=function(t){return arguments.length?(e=t,L):e},L.size=function(t){return arguments.length?(n=i=0,r=+t[0],o=+t[1],L):[r-n,o-i]},L.extent=function(t){return arguments.length?(n=+t[0][0],r=+t[1][0],i=+t[0][1],o=+t[1][1],L):[[n,i],[r,o]]},L.iterations=function(t){return arguments.length?(A=+t,L):A};function M(t,e){let n=t.length>>1,r=t[n];T(t,r.y0-b,n-1,e),I(t,r.y1+b,n+1,e),T(t,o,t.length-1,e),I(t,i,0,e)}function I(t,e,n,i){for(;n<t.length;++n){let r=t[n],s=(e-r.y0)*i;s>1e-6&&(r.y0+=s,r.y1+=s),e=r.y1+b}}function T(t,e,n,i){for(;n>=0;--n){let r=t[n],s=(r.y1-e)*i;s>1e-6&&(r.y0-=s,r.y1-=s),e=r.y0-b}}function P({sourceLinks:t,targetLinks:n}){if(void 0===e){for(let{source:{sourceLinks:t}}of n)t.sort(f);for(let{target:{targetLinks:e}}of t)e.sort(u)}}return L})().nodeId(t=>t.id).nodeWidth(10).nodePadding(10+(V?15:0)).nodeAlign(K).extent([[0,0],[D,j]])(G);let X=(0,r.PKp)(r.K2I);$.append("g").attr("class","nodes").selectAll(".node").data(G.nodes).join("g").attr("class","node").attr("id",t=>(t.uid=q.next("node-")).id).attr("transform",function(t){return"translate("+t.x0+","+t.y0+")"}).attr("x",t=>t.x0).attr("y",t=>t.y0).append("rect").attr("height",t=>t.y1-t.y0).attr("width",t=>t.x1-t.x0).attr("fill",t=>X(t.id));let R=(0,i.eW)(({id:t,value:e})=>V?`${t}
${U}${Math.round(100*e)/100}${Y}`:t,"getText");$.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(G.nodes).join("text").attr("x",t=>t.x0<D/2?t.x1+6:t.x0-6).attr("y",t=>(t.y1+t.y0)/2).attr("dy",`${V?"0":"0.35"}em`).attr("text-anchor",t=>t.x0<D/2?"start":"end").text(R);let Z=$.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(G.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),B=S?.linkColor??"gradient";if("gradient"===B){let t=Z.append("linearGradient").attr("id",t=>(t.uid=q.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",t=>t.source.x1).attr("x2",t=>t.target.x0);t.append("stop").attr("offset","0%").attr("stop-color",t=>X(t.source.id)),t.append("stop").attr("offset","100%").attr("stop-color",t=>X(t.target.id))}switch(B){case"gradient":v=(0,i.eW)(t=>t.uid,"coloring");break;case"source":v=(0,i.eW)(t=>X(t.source.id),"coloring");break;case"target":v=(0,i.eW)(t=>X(t.target.id),"coloring");break;default:v=B}Z.append("path").attr("d",(function(t){var e=M,n=I,i=A,r=L,s=null;function o(){var o,l=E.call(arguments),h=e.apply(this,l),a=n.apply(this,l);if(!s&&(s=o=w()),t(s,+i.apply(this,(l[0]=h,l)),+r.apply(this,l),+i.apply(this,(l[0]=a,l)),+r.apply(this,l)),o)return s=null,o+""||null}return o.source=function(t){return arguments.length?(e=t,o):e},o.target=function(t){return arguments.length?(n=t,o):n},o.x=function(t){return arguments.length?(i="function"==typeof t?t:W(+t),o):i},o.y=function(t){return arguments.length?(r="function"==typeof t?t:W(+t),o):r},o.context=function(t){return arguments.length?(s=null==t?null:t,o):s},o})(T).source(P).target(C)).attr("stroke",v).attr("stroke-width",t=>Math.max(1,t.width)),(0,i.j7)(void 0,$,0,z)},"draw"),Z=(0,i.eW)(t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim(),"prepareTextForParsing"),B=N.parse.bind(N);N.parse=t=>B(Z(t));var H={parser:N,db:X,renderer:{draw:R}}}}]);
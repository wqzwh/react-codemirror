(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{171:function(e,t,n){!function(e){"use strict";e.defineMode("xquery",function(){var e=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"axis_specifier",style:"qualifier"},a={",":{type:"punctuation",style:null}},i=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],o=0,s=i.length;o<s;o++)a[i[o]]=e(i[o]);for(var c=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"],o=0,s=c.length;o<s;o++)a[c[o]]=n;for(var u=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"],o=0,s=u.length;o<s;o++)a[u[o]]=t;for(var l=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"],o=0,s=l.length;o<s;o++)a[l[o]]=r;return a}();function t(e,t,n){return t.tokenize=n,n(e,t)}function n(f,x){var g=f.next(),y=!1,h=function(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1)}(f);if("<"==g){if(f.match("!--",!0))return t(f,x,s);if(f.match("![CDATA",!1))return x.tokenize=c,"tag";if(f.match("?",!1))return t(f,x,u);var v=f.eat("/");f.eatSpace();for(var k,b="";k=f.eat(/[^\s\u00a0=<>\"\'\/?]/);)b+=k;return t(f,x,function(e,t){return function(r,a){return r.eatSpace(),t&&r.eat(">")?(d(a),a.tokenize=n,"tag"):(r.eat("/")||p(a,{type:"tag",name:e,tokenize:n}),r.eat(">")?(a.tokenize=n,"tag"):(a.tokenize=o,"tag"))}}(b,v))}if("{"==g)return p(x,{type:"codeblock"}),null;if("}"==g)return d(x),null;if(l(x))return">"==g?"tag":"/"==g&&f.eat(">")?(d(x),"tag"):"variable";if(/\d/.test(g))return f.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===g&&f.eat(":"))return p(x,{type:"comment"}),t(f,x,r);if(h||'"'!==g&&"'"!==g){if("$"===g)return t(f,x,i);if(":"===g&&f.eat("="))return"keyword";if("("===g)return p(x,{type:"paren"}),null;if(")"===g)return d(x),null;if("["===g)return p(x,{type:"bracket"}),null;if("]"===g)return d(x),null;var w=e.propertyIsEnumerable(g)&&e[g];if(h&&'"'===g)for(;'"'!==f.next(););if(h&&"'"===g)for(;"'"!==f.next(););w||f.eatWhile(/[\w\$_-]/);var z=f.eat(":");!f.eat(":")&&z&&f.eatWhile(/[\w\$_-]/),f.match(/^[ \t]*\(/,!1)&&(y=!0);var I=f.current();return w=e.propertyIsEnumerable(I)&&e[I],y&&!w&&(w={type:"function_call",style:"variable def"}),function(e){return m(e,"xmlconstructor")}(x)?(d(x),"variable"):("element"!=I&&"attribute"!=I&&"axis_specifier"!=w.type||p(x,{type:"xmlconstructor"}),w?w.style:"variable")}return t(f,x,a(g))}function r(e,t){for(var n,r=!1,a=!1,i=0;n=e.next();){if(")"==n&&r){if(!(i>0)){d(t);break}i--}else":"==n&&a&&i++;r=":"==n,a="("==n}return"comment"}function a(e,t){return function(r,i){var o;if(function(e){return m(e,"string")}(i)&&r.current()==e)return d(i),t&&(i.tokenize=t),"string";if(p(i,{type:"string",name:e,tokenize:a(e,t)}),r.match("{",!1)&&f(i))return i.tokenize=n,"string";for(;o=r.next();){if(o==e){d(i),t&&(i.tokenize=t);break}if(r.match("{",!1)&&f(i))return i.tokenize=n,"string"}return"string"}}function i(e,t){var r=/[\w\$_-]/;if(e.eat('"')){for(;'"'!==e.next(););e.eat(":")}else e.eatWhile(r),e.match(":=",!1)||e.eat(":");return e.eatWhile(r),t.tokenize=n,"variable"}function o(e,r){var i=e.next();return"/"==i&&e.eat(">")?(f(r)&&d(r),l(r)&&d(r),"tag"):">"==i?(f(r)&&d(r),"tag"):"="==i?null:'"'==i||"'"==i?t(e,r,a(i,o)):(f(r)||p(r,{type:"attribute",tokenize:o}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(d(r),r.tokenize=n),"attribute")}function s(e,t){for(var r;r=e.next();)if("-"==r&&e.match("->",!0))return t.tokenize=n,"comment"}function c(e,t){for(var r;r=e.next();)if("]"==r&&e.match("]",!0))return t.tokenize=n,"comment"}function u(e,t){for(var r;r=e.next();)if("?"==r&&e.match(">",!0))return t.tokenize=n,"comment meta"}function l(e){return m(e,"tag")}function f(e){return m(e,"attribute")}function m(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function p(e,t){e.stack.push(t)}function d(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||n}return{startState:function(){return{tokenize:n,cc:[],stack:[]}},token:function(e,t){if(e.eatSpace())return null;var n=t.tokenize(e,t);return n},blockCommentStart:"(:",blockCommentEnd:":)"}}),e.defineMIME("application/xquery","xquery")}(n(2))}}]);
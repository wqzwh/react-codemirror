(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{143:function(e,n,t){!function(e){"use strict";e.defineMode("sieve",function(e){function n(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}var t=n("if elsif else stop require"),r=n("true false not"),i=e.indentUnit;function u(e,n){var i,a=e.next();if("/"==a&&e.eat("*"))return n.tokenize=l,l(e,n);if("#"===a)return e.skipToEnd(),"comment";if('"'==a)return n.tokenize=(i=a,function(e,n){for(var t,r=!1;null!=(t=e.next())&&(t!=i||r);)r=!r&&"\\"==t;return r||(n.tokenize=u),"string"}),n.tokenize(e,n);if("("==a)return n._indent.push("("),n._indent.push("{"),null;if("{"===a)return n._indent.push("{"),null;if(")"==a&&(n._indent.pop(),n._indent.pop()),"}"===a)return n._indent.pop(),null;if(","==a)return null;if(";"==a)return null;if(/[{}\(\),;]/.test(a))return null;if(/\d/.test(a))return e.eatWhile(/[\d]/),e.eat(/[KkMmGg]/),"number";if(":"==a)return e.eatWhile(/[a-zA-Z_]/),e.eatWhile(/[a-zA-Z0-9_]/),"operator";e.eatWhile(/\w/);var f=e.current();return"text"==f&&e.eat(":")?(n.tokenize=o,"string"):t.propertyIsEnumerable(f)?"keyword":r.propertyIsEnumerable(f)?"atom":null}function o(e,n){return n._multiLineString=!0,e.sol()?("."==e.next()&&e.eol()&&(n._multiLineString=!1,n.tokenize=u),"string"):(e.eatSpace(),"#"==e.peek()?(e.skipToEnd(),"comment"):(e.skipToEnd(),"string"))}function l(e,n){for(var t,r=!1;null!=(t=e.next());){if(r&&"/"==t){n.tokenize=u;break}r="*"==t}return"comment"}return{startState:function(e){return{tokenize:u,baseIndent:e||0,_indent:[]}},token:function(e,n){return e.eatSpace()?null:(n.tokenize||u)(e,n)},indent:function(e,n){var t=e._indent.length;return n&&"}"==n[0]&&t--,t<0&&(t=0),t*i},electricChars:"}"}}),e.defineMIME("application/sieve","sieve")}(t(2))}}]);
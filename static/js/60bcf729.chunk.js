(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{624:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;l.default='#include    "ti83plus.inc"\n#define     progStart   $9D95\n    .org progStart-2\n    .db $BB,$6D\n\n    bcall(_ClrLCDFull)\n    ld hl,0\n    ld (CurCol),hl\n    ld hl,Message\n    bcall(_PutS) ; Displays the string\n    bcall(_NewLine)\n    ret\nMessage:\n    .db "Hello world!",0\n\n'}}]);
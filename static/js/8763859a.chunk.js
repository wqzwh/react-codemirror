(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{563:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default='; This is a comment\n!ifdef ERROR\n    !error "Something went wrong"\n!endif\n\nOutFile "demo.exe"\nRequestExecutionLevel user\nSetDetailsPrint listonly\n\n!include "LogicLib.nsh"\n!include "WinVer.nsh"\n\nSection -mandatory\n\n    Call logWinVer\n\n    ${If} 1 > 0\n      MessageBox MB_OK "Hello world"\n    ${EndIf}\n\nSectionEnd\n\nFunction logWinVer\n\n    ${If} ${IsWin10}\n        DetailPrint "Windows 10!"\n    ${ElseIf} ${AtLeastWinVista}\n        DetailPrint "We\'re post-XP"\n    ${Else}\n        DetailPrint "Legacy system"\n    ${EndIf}\n\nFunctionEnd\n\n'}}]);
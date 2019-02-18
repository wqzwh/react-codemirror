(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{608:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default='module Templates {\n  /* import types from ASN.1 */\n  import from Types language "ASN.1:1997" all;\n\n  /* During the conversion phase from ASN.1 to TTCN-3 */\n  /* - the minus sign (Message-Type) within the identifiers will be replaced by underscore (Message_Type)*/\n  /* - the ASN.1 identifiers matching a TTCN-3 keyword (objid) will be postfixed with an underscore (objid_)*/\n\n  // simple types\n\n  template SenderID localObjid := objid {itu_t(0) identified_organization(4) etsi(0)};\n\n  // complex types\n\n  /* ASN.1 Message-Type mapped to TTCN-3 Message_Type */\n  template Message receiveMsg(template (present) Message_Type p_messageType) := {\n    header := p_messageType,\n    body := ?\n  }\n\n  /* ASN.1 objid mapped to TTCN-3 objid_ */\n  template Message sendInviteMsg := {\n      header := inviteType,\n      body := {\n        /* optional fields may be assigned by omit or may be ignored/skipped */\n        description := "Invite Message",\n        data := \'FF\'O,\n        objid_ := localObjid\n      }\n  }\n\n  template Message sendAcceptMsg modifies sendInviteMsg := {\n      header := acceptType,\n      body := {\n        description := "Accept Message"\n      }\n    };\n\n  template Message sendErrorMsg modifies sendInviteMsg := {\n      header := errorType,\n      body := {\n        description := "Error Message"\n      }\n    };\n\n  template Message expectedErrorMsg := {\n      header := errorType,\n      body := ?\n    };\n\n  template Message expectedInviteMsg modifies expectedErrorMsg := {\n      header := inviteType\n    };\n\n  template Message expectedAcceptMsg modifies expectedErrorMsg := {\n      header := acceptType\n    };\n\n} with { encode "BER:1997" }\n'}}]);
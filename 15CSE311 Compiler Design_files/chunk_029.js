(window.webpackJsonpb6917cb1_93a0_4b97_a84d_7cf49975d4ec_0_2_0=window.webpackJsonpb6917cb1_93a0_4b97_a84d_7cf49975d4ec_0_2_0||[]).push([[101],{"9N1C":function(t,e){t.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/},PTYh:function(t,e){t.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},Qpj1:function(t,e){t.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},SBAr:function(t,e,_){"use strict";function u(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(e){e&&Object.keys(e).forEach(function(_){t[_]=e[_]})}),t}function r(t){return Object.prototype.toString.call(t)}function s(t){return"[object Function]"===r(t)}function o(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var n={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},i={"http:":{validate:function(t,e,_){var u=t.slice(e);return _.re.http||(_.re.http=new RegExp("^\\/\\/"+_.re.src_auth+_.re.src_host_port_strict+_.re.src_path,"i")),_.re.http.test(u)?u.match(_.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,_){var u=t.slice(e);return _.re.no_http||(_.re.no_http=new RegExp("^"+_.re.src_auth+"(?:localhost|(?:(?:"+_.re.src_domain+")\\.)+"+_.re.src_domain_root+")"+_.re.src_port+_.re.src_host_terminator+_.re.src_path,"i")),_.re.no_http.test(u)?e>=3&&":"===t[e-3]||e>=3&&"/"===t[e-3]?0:u.match(_.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,_){var u=t.slice(e);return _.re.mailto||(_.re.mailto=new RegExp("^"+_.re.src_email_name+"@"+_.re.src_host_strict,"i")),_.re.mailto.test(u)?u.match(_.re.mailto)[0].length:0}}},c="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function a(t){var e=t.re=_("dwr0")(t.__opts__),u=t.__tlds__.slice();function n(t){return t.replace("%TLDS%",e.src_tlds)}t.onCompile(),t.__tlds_replaced__||u.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),u.push(e.src_xn),e.src_tlds=u.join("|"),e.email_fuzzy=RegExp(n(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(n(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(n(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(n(e.tpl_host_fuzzy_test),"i");var i=[];function c(t,e){throw new Error('(LinkifyIt) Invalid schema "'+t+'": '+e)}t.__compiled__={},Object.keys(t.__schemas__).forEach(function(e){var _=t.__schemas__[e];if(null!==_){var u={validate:null,link:null};if(t.__compiled__[e]=u,"[object Object]"===r(_))return function(t){return"[object RegExp]"===r(t)}(_.validate)?u.validate=function(t){return function(e,_){var u=e.slice(_);return t.test(u)?u.match(t)[0].length:0}}(_.validate):s(_.validate)?u.validate=_.validate:c(e,_),void(s(_.normalize)?u.normalize=_.normalize:_.normalize?c(e,_):u.normalize=function(t,e){e.normalize(t)});!function(t){return"[object String]"===r(t)}(_)?c(e,_):i.push(e)}}),i.forEach(function(e){t.__compiled__[t.__schemas__[e]]&&(t.__compiled__[e].validate=t.__compiled__[t.__schemas__[e]].validate,t.__compiled__[e].normalize=t.__compiled__[t.__schemas__[e]].normalize)}),t.__compiled__[""]={validate:null,normalize:function(t,e){e.normalize(t)}};var a=Object.keys(t.__compiled__).filter(function(e){return e.length>0&&t.__compiled__[e]}).map(o).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+a+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+a+")","ig"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),function(t){t.__index__=-1,t.__text_cache__=""}(t)}function l(t,e){var _=t.__index__,u=t.__last_index__,r=t.__text_cache__.slice(_,u);this.schema=t.__schema__.toLowerCase(),this.index=_+e,this.lastIndex=u+e,this.raw=r,this.text=r,this.url=r}function h(t,e){var _=new l(t,e);return t.__compiled__[_.schema].normalize(_,t),_}function p(t,e){if(!(this instanceof p))return new p(t,e);var _;e||(_=t,Object.keys(_||{}).reduce(function(t,e){return t||n.hasOwnProperty(e)},!1)&&(e=t,t={})),this.__opts__=u({},n,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=u({},i,t),this.__compiled__={},this.__tlds__=c,this.__tlds_replaced__=!1,this.re={},a(this)}p.prototype.add=function(t,e){return this.__schemas__[t]=e,a(this),this},p.prototype.set=function(t){return this.__opts__=u(this.__opts__,t),this},p.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;var e,_,u,r,s,o,n,i;if(this.re.schema_test.test(t))for((n=this.re.schema_search).lastIndex=0;null!==(e=n.exec(t));)if(r=this.testSchemaAt(t,e[2],n.lastIndex)){this.__schema__=e[2],this.__index__=e.index+e[1].length,this.__last_index__=e.index+e[0].length+r;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(i=t.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||i<this.__index__)&&null!==(_=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(s=_.index+_[1].length,(this.__index__<0||s<this.__index__)&&(this.__schema__="",this.__index__=s,this.__last_index__=_.index+_[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&t.indexOf("@")>=0&&null!==(u=t.match(this.re.email_fuzzy))&&(s=u.index+u[1].length,o=u.index+u[0].length,(this.__index__<0||s<this.__index__||s===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=s,this.__last_index__=o)),this.__index__>=0},p.prototype.pretest=function(t){return this.re.pretest.test(t)},p.prototype.testSchemaAt=function(t,e,_){return this.__compiled__[e.toLowerCase()]?this.__compiled__[e.toLowerCase()].validate(t,_,this):0},p.prototype.match=function(t){var e=0,_=[];this.__index__>=0&&this.__text_cache__===t&&(_.push(h(this,e)),e=this.__last_index__);for(var u=e?t.slice(e):t;this.test(u);)_.push(h(this,e)),u=u.slice(this.__last_index__),e+=this.__last_index__;return _.length?_:null},p.prototype.tlds=function(t,e){return t=Array.isArray(t)?t:[t],e?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(t,e,_){return t!==_[e-1]}).reverse(),a(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,a(this),this)},p.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),"mailto:"!==t.schema||/^mailto:/i.test(t.url)||(t.url="mailto:"+t.url)},p.prototype.onCompile=function(){},t.exports=p},SrEf:function(t,e,_){"use strict";_.d(e,"a",function(){return h});var u=_("17wl"),r=_("cDcd"),s=_("jOlS");Object(s.loadStyles)([{rawString:".sp-deferredLivePersonaCard-root{display:inline-block}\n"}]);var o=_("J7xF"),n=_("ybkr"),i=function(t){function e(e){var _=t.call(this,e)||this;return _._deferLoadComponent=function(){!_.state.ComponentModule&&_.props.moduleLoader&&_.props.modulePath&&_.props.moduleLoader.load(_.props.modulePath,_.props.getModule).then(function(t){if(_.props.moduleLoader.parse&&(t=_.props.moduleLoader.parse(t)),!t){var e="ReactDeferredComponent: component not found when loading "+_.props.modulePath+" - check your load and parse functions";console.error(e)}_._mounted?_.setState({ComponentModule:t}):_.state={ComponentModule:t}})},_._mounted=!1,_.state={ComponentModule:void 0},_._setupDeferLoadCallback(e),_}return Object(u.__extends)(e,t),e.prototype.render=function(){var t=this,e=this.state.ComponentModule;return e?r.createElement(e,Object(u.__assign)({ref:function(e){e&&Object(n.hoistMethods)(t,e)}},this.props.props),this.props.children):this.props.placeHolder||null},e.prototype.componentDidMount=function(){this._mounted||(this._mounted=!0)},e.prototype.UNSAFE_componentWillReceiveProps=function(t){this._setupDeferLoadCallback(t)},e.prototype._setupDeferLoadCallback=function(t){var e=t.customWaiter;e?e.then(this._deferLoadComponent):this._deferLoadComponent()},e}(r.Component),c=_("4xRo"),a=_.n(c),l={ODB:1596},h=function(t){function e(e,u){var r=t.call(this,e,u)||this;return r._onActivate=function(){r.state.hovered||r.setState({hovered:!0})},r.modulePath="./SpLivePersonaCard",r.moduleLoader={load:function(){return Promise.all([_.e(11),_.e(99)]).then(_.bind(null,"Zebf")).then(function(t){return t.SpLivePersonaCard})}},r.state={hovered:!a.a.isFeatureEnabled(l)||e.forceLoad},r}return Object(u.__extends)(e,t),e.prototype.render=function(){var t=this.state.hovered;return this._deferredComponentProps={modulePath:this.modulePath,moduleLoader:this.moduleLoader,props:this.props,customWaiter:this.props.customWaiter,placeHolder:this.props.placeHolder},r.createElement("div",{onMouseOver:this._onActivate,onClick:this._onActivate,onFocus:this._onActivate,onMouseDown:this._onActivate,onKeyDown:this._onActivate,className:"sp-deferredLivePersonaCard-root",tabIndex:-1},t?r.createElement(i,Object(u.__assign)({},this._deferredComponentProps),this.props.children):this.props.children)},e}(o.BaseComponent)},dwr0:function(t,e,_){"use strict";t.exports=function(t){var e={};return e.src_Any=_("PTYh").source,e.src_Cc=_("lslI").source,e.src_Z=_("9N1C").source,e.src_P=_("Qpj1").source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|"),e.src_pseudo_letter="(?:(?![><｜]|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|[><｜]|"+e.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!"+e.src_ZCc+"|[.]).|"+(t&&t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+e.src_ZCc+").|\\!(?!"+e.src_ZCc+"|[!]).|\\?(?!"+e.src_ZCc+"|[?]).)+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-(?!-)|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|[><｜]|\\(|"+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}},lslI:function(t,e){t.exports=/[\0-\x1F\x7F-\x9F]/},mcHn:function(t,e,_){var u=_("KL1q");for(var r in t.exports={},u)u.hasOwnProperty(r)&&(t.exports[r]=u[r]);Object.defineProperty(t.exports,"__esModule",{value:!0})}}]);
window.MSA=window.MSA||{};window.MSA.MeControl=window.MSA.MeControl||{};window.MSA.MeControl.Config={"ver":"10.20321.2","mkt":"en-US","ptn":"sharepoint","gfx":"https://mem.gfx.ms","dbg":false,"aad":true,"int":false,"pxy":false,"msTxt":false,"rwd":true,"telEvs":"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall, TrackedScenario","remAcc":true,"main":"meBoot","wrapperId":"suiteshell","cdnRegex":"^(?:https?:\\/\\/)?(mem\\.gfx\\.ms(?!\\.)|controls\\.account.microsoft?(?:-int|-dev)?(\\.com)?(:[0-9]{1,6})|amcdn\\.ms(?:ft)?auth\\.net(?!\\.))","timeoutMs":600000,"graph":false,"aadUrl":"https://myaccount.microsoft.com","msaUrl":"https://account.microsoft.com/"};window.MeControl=window.MeControl||{};window.MeControl.Config={"ver":"10.20321.2","mkt":"en-US","ptn":"sharepoint","gfx":"https://mem.gfx.ms","dbg":false,"aad":true,"int":false,"pxy":false,"msTxt":false,"rwd":true,"telEvs":"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall, TrackedScenario","remAcc":true,"main":"meBoot","wrapperId":"suiteshell","cdnRegex":"^(?:https?:\\/\\/)?(mem\\.gfx\\.ms(?!\\.)|controls\\.account.microsoft?(?:-int|-dev)?(\\.com)?(:[0-9]{1,6})|amcdn\\.ms(?:ft)?auth\\.net(?!\\.))","timeoutMs":600000,"graph":false,"aadUrl":"https://myaccount.microsoft.com","msaUrl":"https://account.microsoft.com/"};this.MeControl=this.MeControl||{},this.MeControl.WebInline=function(t){"use strict";var o=function(){return(o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function i(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=16,c=63,n=s();function u(){return n}function s(e){var n=0,t=e||function(){var e="";for(;e.length<a;)e+=r[Math.floor(Math.random()*r.length)];return e}();return{getValue:function(){var e=t+"."+n;return e.length>c&&(e=e.substring(0,c)+"!"),e},extend:function(){t=this.getValue(),n=0},increment:function(){n++}}}var f=window,l=f.MeControl=f.MeControl||{},d=Date.now?function(){return Date.now()}:function(){return+new Date},p=function(){return f.performance.now()},m=function(){return f.performance&&f.performance.getEntries?window.performance.getEntries():[]},v=function(){return f.location};var e=f.requestAnimationFrame?function(e){return f.requestAnimationFrame(e)}:function(e){return setTimeout(function(){return e(p())})},g="mectrl",h="_",y=new RegExp("^"+g,"i");function C(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=e.join(h);return y.test(t)||(t=g+h+t),t}var w="MeControlError::";function b(e,n){void 0===n&&(n=!1);var t=new Error(""+w+e);return t.mcIsTimeout=n,t}var S=(Object.defineProperty(E.prototype,"defaultPrevented",{get:function(){return this._defaultPrevented},enumerable:!0,configurable:!0}),E.prototype.preventDefault=function(){this._defaultPrevented=!0},E);function E(e,n){this.type=e,this.detail=n,this._defaultPrevented=!1}var A=(T.prototype.addEventListener=function(e,n){e in this._listeners||(this._listeners[e]=[]),this._listeners[e].push(n)},T.prototype.removeEventListener=function(e,n){if(e in this._listeners){var t=this._listeners[e],r=t.indexOf(n);-1!==r&&t.splice(r,1)}},T.prototype.dispatchEvent=function(e){if(!(e.type in this._listeners))return!0;for(var n=this._listeners[e.type],t=new S(e.type,e.detail),r=0,o=n.length;r<o;r++)n[r].call(this,t);return!t.defaultPrevented},T);function T(){this._listeners={}}var N="msameid";t.id=P();try{var I=f.sessionStorage;I&&(t.id=I.getItem(N)||P(),I.setItem(N,t.id))}catch(e){}function P(){return(e()+e()+"-"+e()+"-4"+e().substr(0,3)+"-"+e()+"-"+e()+e()+e()).toLowerCase();function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}}function M(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var U,O=Object.assign||o;function x(){return U}function _(e){U=e}var L,k,D={};function R(e,n){e=e.toLowerCase(),D[e]=D[e]||{},O(D[e],n)}var j=null;function F(){var e=l.Config;return null==j&&""!=l.Config.cdnRegex&&(k=new RegExp(l.Config.cdnRegex),j=V(k)),j||e.gfx}function V(e){var n=document.getElementsByTagName("script");if(n)for(var t=Array.prototype.slice.call(n),r=0;r<t.length;r++){var o=e.exec(t[r].src);if(o)return o[0]}}var B=[],J=/ContentUpdate|PageAction|TrackedScenario/,q="https://web.vortex.data.microsoft.com/collect/v1",W=!0,G=!1,H="complete"===document.readyState,X=[];function z(e){!(W=e)&&0<X.length&&Y()}function Q(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];B.push(e),B.sort(function(e,n){return e[2]-n[2]})}function K(e,n){var t=e.partA.name.split(".").pop();l.Config.telEvs&&-1!==l.Config.telEvs.indexOf(t)&&(X.push(e),W?(G||(G=!0,window.addEventListener("beforeunload",Y,!0)),H&&!1!==n&&(!0===n||J.test(t))&&setTimeout(Y,0)):Y())}function Y(){if(window.removeEventListener("beforeunload",Y,!0),G=!1,0<X.length){if(!l.Config.isUT)(function(){for(var e=0;e<B.length;e++)if(B[e][1]())return B[e][0];return function(){}})()(X);X=[]}}function Z(e){return e?e.replace(/([^?&]*)=([^&#]*)/g,"$1=**").replace(/#.*/,""):e}H||window.addEventListener("load",function(){H=!0,Y()});var $=P(),ee=[],ne="None",te={counts:"0-0"};function re(e){var n=u();return n.increment(),"ContentUpdate"===e.eventType&&e.content&&"Application"===e.content.source&&(ne=e.content.id),{cv:n.getValue(),impressionGuid:$,pageName:ne,date:new Date,timestamp:p(),accounts:te}}var oe=p(),ie={};function ae(e,n){var t=Z(v().href);return{metaTags:{authtype:n&&n.toString(),pgpart:l.Config.ptn},config:l.Config,url:t,accts:e}}function ce(e,n,t){return{ver:"2.1",name:e,time:n.toISOString(),appId:"JS:MeControl",cV:t,flags:2097152,ext:{javascript:{ver:"1.1",libVer:"4.2.3",domain:v().hostname,userConsent:!1},app:{env:l.Config.int?"Test":"Prod"}}}}function ue(e,n){ie[e]=n,function(e){for(var n=[],t=[],r=0;r<ee.length;r++)ee[r][0].eventType===e?t.push(ee[r]):n.push(ee[r]);return ee=n,t}(e).forEach(function(e){K(n(e[0],e[1]),e[0].isCritical)})}function se(e){var n=function(e){var n=ie[e.eventType];return n?n(e,re(e)):null}(e);n?K(n,e.isCritical):function(e){ee.push([e,re(e)])}(e)}function fe(e){for(var n=0,t=e;n<t.length;n++){var r=t[n],o=[de(r.partA),r.partB&&de(r.partB,"-"),de(r.partC,"*")].join("&").replace(/&&/g,"&");document.createElement("img").src=q+"/t.gif?"+o}}function le(){return!0}function de(r,o){return void 0===o&&(o=""),r?Object.getOwnPropertyNames(r).map(function(e){var n=r[e],t=""+o+e;switch(typeof n){case"object":return null!==n?de(n,t+"-"):null;case"string":n="%27"+encodeURIComponent(n)+"%27";case"number":case"boolean":return t+"="+n}return null}).filter(function(e){return!!e}).join("&"):""}var pe=!1;function me(e){!function(){if(pe)return;window.awa._registerSchemas([function(e,n){var t;return(t={name:e})[e]={part:"C",def:{fields:n}},t}("Ms.Webi.MeControl.PartnerApiCall",[ge("partner","string",!0),ge("controlVersion","string",!0),ge("methodName","string",!0),ge("parameters","string",!0)])]),pe=!0}(),window.awa.vortexEvents.SendOrScheduleEvent(e.map(function(e){return function(e){var n=o(o({},e.partA),{data:o({baseData:e.partB&&o({},e.partB)},e.partC)});return delete n.flags,n}(e)}))}function ve(){return window.awa&&window.awa.vortexEvents&&window.awa.vortexEvents.SendOrScheduleEvent&&"function"==typeof window.awa.vortexEvents.SendOrScheduleEvent&&window.awa._registerSchemas&&"function"==typeof window.awa._registerSchemas||!1}function ge(e,n,t){return{req:!!t||void 0,name:e,type:n}}var he="Ms.Webi.ClientError";function ye(e,n){var t;return{partA:ce(he,n.date,n.cv),partB:void 0,partC:{baseType:void 0,errorName:e.name,errorMessage:(t=e.details,t.replace(/\n/g,"\\n")),errorType:e.type,errorInfo:JSON.stringify(ae(n.accounts.counts,n.accounts.current)),severity:e.severity||2,wasDisplayed:e.displayed,pageName:n.pageName,impressionGuid:n.impressionGuid,market:l.Config.mkt}}}var Ce="Ms.Webi.OutgoingRequest",we="Ms.Qos.OutgoingServiceRequest";function be(e,n){var t=function(e){for(var n=m(),t=0,r=n;t<r.length;t++){var o=r[t];if(o.name===e||-1!==o.name.indexOf(e))return o}return}(e.url),r=Math.round(Se(t)||e.duration),o=function(e){if(e){var n=document.createElement("a");n.href=e;for(var t=n.pathname.split("/"),r=t.length-1;0<=r;r--)if(t[r])return t[r]}return}(t?t.name:e.url)||e.serviceOperation;return{partA:ce(Ce,n.date,n.cv),partB:{operationName:o,dependencyOperationName:e.serviceOperation,dependencyName:e.service,latencyMs:r,succeeded:e.success,targetUri:Z(e.url)},partC:{baseType:we,message:e.message,pageName:n.pageName,impressionGuid:n.impressionGuid,market:l.Config.mkt,customData:JSON.stringify(O({},{computedDuration:e.duration||-1,perfDuration:Se(t)||-1},ae(n.accounts.counts,n.accounts.current)))}}}function Se(e){if(e)switch(e.entryType){case"navigation":return e.responseEnd-e.startTime;case"resource":default:return e.duration}}var Ee="Ms.Webi.MeControl.TrackedScenario";function Ae(e,n){return{partA:ce(Ee,n.date,n.cv),partB:void 0,partC:{baseType:void 0,partner:l.Config.ptn,controlVersion:l.Config.ver,market:l.Config.mkt,scenario:e.scenario,action:e.action,previousAction:e.previousAction,success:e.success,durationMs:e.durationMs,details:e.details}}}function Te(e){Q(fe,le,10),Q(me,ve,1),z(e),ue("ClientError",ye),ue("OutgoingRequest",be),ue("TrackedScenario",Ae)}function Ne(e){var n,t;if("ContentUpdate"===(t=e).eventType&&"Application"===t.content.source&&"Initial Collapsed"===t.content.id||"PageAction"===(n=e).eventType&&n.content&&("Sign Out"==n.content.id||"View Account"==n.content.id)){var r=x();if(r){var o=new S("telemetry",{data:{event:e}});r.syntheticEventTarget.dispatchEvent(o)}}se(e)}function Ie(){var n=p();m().filter(function(e){return function(e){var n=document.createElement("a");n.href=e;var t=n.hostname;return Pe.test(t)}(e.name)}).forEach(function(e){return Ne({eventType:"OutgoingRequest",serviceOperation:"LoadResource",service:"MeControl",url:e.name,success:!0,duration:n-e.startTime})})}Te(!(!l.Config||"iframeBootCore"===l.Config.main));var Pe=/^(?:mem\.gfx\.ms|controls\.account\.microsoft|amcdn\.ms(?:ft)?auth\.net)/i;var Me=setTimeout;function Ue(e){return Boolean(e&&void 0!==e.length)}function Oe(){}function xe(e){if(!(this instanceof xe))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],je(e,this)}function _e(t,r){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,xe._immediateFn(function(){var e=1===t._state?r.onFulfilled:r.onRejected;if(null!==e){var n;try{n=e(t._value)}catch(e){return void ke(r.promise,e)}Le(r.promise,n)}else(1===t._state?Le:ke)(r.promise,t._value)})):t._deferreds.push(r)}function Le(n,e){try{if(e===n)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if(e instanceof xe)return n._state=3,n._value=e,void De(n);if("function"==typeof t)return void je(function(e,n){return function(){e.apply(n,arguments)}}(t,e),n)}n._state=1,n._value=e,De(n)}catch(e){ke(n,e)}}function ke(e,n){e._state=2,e._value=n,De(e)}function De(e){2===e._state&&0===e._deferreds.length&&xe._immediateFn(function(){e._handled||xe._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)_e(e,e._deferreds[n]);e._deferreds=null}function Re(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function je(e,n){var t=!1;try{e(function(e){t||(t=!0,Le(n,e))},function(e){t||(t=!0,ke(n,e))})}catch(e){if(t)return;t=!0,ke(n,e)}}function Fe(r,o){return new xe(function(e,n){var t=setTimeout(function(){n(b("Promise timed out after "+o+"ms.",!0))},o);r.then(e,n).finally(function(){clearTimeout(t)})})}xe.prototype.catch=function(e){return this.then(null,e)},xe.prototype.then=function(e,n){var t=new this.constructor(Oe);return _e(this,new Re(e,n,t)),t},xe.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){return t.reject(e)})})},xe.all=function(n){return new xe(function(r,o){if(!Ue(n))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(n);if(0===i.length)return r([]);var a=i.length;function c(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void t.call(e,function(e){c(n,e)},o)}i[n]=e,0==--a&&r(i)}catch(e){o(e)}}for(var e=0;e<i.length;e++)c(e,i[e])})},xe.resolve=function(n){return n&&"object"==typeof n&&n.constructor===xe?n:new xe(function(e){e(n)})},xe.reject=function(t){return new xe(function(e,n){n(t)})},xe.race=function(o){return new xe(function(e,n){if(!Ue(o))return n(new TypeError("Promise.race accepts an array"));for(var t=0,r=o.length;t<r;t++)xe.resolve(o[t]).then(e,n)})},xe._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){Me(e,0)},xe._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},void 0!==f.Promise&&-1!==f.Promise.toString().indexOf("[native code]")&&(xe._immediateFn=function(e){return f.Promise.resolve().then(e)}),xe._unhandledRejectionFn=function(e){Ne({eventType:"ClientError",isCritical:!0,name:e.message||"(falsey message property on error)",type:"UnhandledPromiseRejection",details:e.stack||"",displayed:!1,severity:e.mcIsTimeout?3:2})};var Ve=[];var Be={};function Je(e){return Be[e]}function qe(e,n,t){Be[e]={id:e,bundlePromise:n,exports:t}}function We(e,n,t){var r,o;o="function"==typeof n?(r=[],n):(r=n,t),function(e,n,t){Ve.push({id:e,deps:n,factory:t})}(e,r,o)}var Ge={"@mecontrol/web-inline":"meInline","@mecontrol/web-boot":"meBoot","@mecontrol/web-core":"meCore"};function He(e){try{e in Ge&&(e=Ge[e]),Xe();var n=Je(e);if(n)return n.bundlePromise;var t=function(s){return new xe(function(i,a){var e=p(),c=function(e){var n=l.Config;return F()+"/scripts/me/MeControl/"+n.ver+"/"+n.mkt+"/"+e+(n.dbg?"":".min")+".js"}(s),n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.async=!0,t.type="text/javascript",t.charset="UTF-8",t.src=c;var r=setTimeout(function(){var e=u(),n="Bundle download timed out";ze(s,e,c,!0,n),a(b(n+": "+s+" ("+c+")",!0))},l.Config.timeoutMs);function u(){return clearTimeout(r),t&&(t.onerror=t.onload=void 0,t=void 0),p()-e}t.onload=function(e){var t=u();Xe();var n=Je(s),r=n&&n.exports;if(r)Fe(r,l.Config.timeoutMs).then(function(e){ze(s,t,c,!1),i(e)}).catch(function(e){var n=e.mcIsTimeout?"Resolving deps and exports timed out":"Resolving deps and exports failed";ze(s,t,c,!0,n),a(b(n+": "+s+" ("+c+"). Inner error: "+e.message,e.mcIsTimeout))});else{var o=void 0;o=f.MeControlDefine!=We?"window.MeControlDefine does not equal this bundle's meDefine function. Did you load Me Control twice?":"Bundle failed to load exports",ze(s,t,c,!0,o),a(b(o+": "+s+" ("+c+")",!1))}},t.onerror=function(e){var n=u(),t="Bundle failed to download/parse/compile";ze(s,n,c,!0,t),a(b(t+": "+s+" ("+c+")",!1))},t.crossOrigin="anonymous",n.appendChild(t)})}(e);return qe(e,t),t}catch(e){return xe.reject(e)}}function Xe(){for(var e=function(){var n=Ve.pop();if(n){var t={},e=xe.all(n.deps.map(function(e){return"exports"===e?t:He(e)})).then(function(e){n.factory.apply(n,e)}).then(function(){return t}),r=Je(n.id);r?r.exports=e:qe(n.id,e,e)}};Ve.length;)e()}function ze(e,n,t,r,o){Ne({eventType:"OutgoingRequest",serviceOperation:"DownloadScript",service:"MeControl",url:t,success:!r,duration:n,message:o})}function Qe(){var i,a=[],c=0;function u(e){var n=e.name;i&&M(i,n)&&i[n].apply(i,e.params)}return{setComponent:function(e){i=e;var n=a;a=[];for(var t=0;t<n.length;t++)u(n[t])},handleCall:function(r,o){return void 0===o&&(o=!1),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t={name:r,params:e};i?u(t):a.splice(o?c++:a.length,0,t)}}}}var Ke=Qe(),Ye=Ke.setComponent,Ze=function(){return Ye},$e={setActiveAccount:en("setActiveAccount"),setCommands:en("setCommands"),setAccountPicture:en("setAccountPicture"),setProfilePicture:en("setProfilePicture"),refreshProfilePicture:en("refreshProfilePicture"),refreshAccountPicture:en("refreshAccountPicture"),setTheme:en("setTheme"),setHeaderTheme:en("setHeaderTheme"),setDisplayMode:en("setDisplayMode"),loadPresenceConfig:en("loadPresenceConfig"),setPresence:en("setPresence"),addEventListener:en("addEventListener"),removeEventListener:en("removeEventListener")};function en(t){var r=Ke.handleCall(t);return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];Ne({eventType:"PartnerApiCall",method:t,params:i(e)}),r.apply(void 0,e)}}var nn="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 160px; display: inline-block; line-height: 48px; font-family: 'Segoe UI'; font-size: 12.4px; color: rgb(80,80,80); padding: 0 10px;",tn=0;function rn(n,t){tn=p();function r(e){Ne({eventType:"TrackedScenario",scenario:"Load",previousAction:"START",action:"END",success:e,durationMs:on(),details:t})}return He(l.Config.main).then(function(e){return e.init(n,Ze())}).then(function(){r(!0)},function(e){throw"suiteshell"!==l.Config.wrapperId&&an(n),r(!1),e})}function on(){return p()-tn}function an(e){if(!e)throw b("No options object given before showHeaderNoJs was called");var n=function(e){var n,t=e.currentAccount&&"signedIn"==e.currentAccount.authenticatedState,r=t?e.primaryUXConfig.signOutStr:e.primaryUXConfig.signInStr,o=null,i=e.authProviderConfig;switch(i.type){case"partnerManaged":o=t?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:i.signInExperienceTypes})};break;case"adalJsWithMsaFed":case"adalJsAadOnly":o=t?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:4})};break;case"msalJsAadOnly":case"msalJsWithMsa":o=t?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:4})};break;case"v1BackCompat":var a=i.rpData,c=t?"signOutUrl":"signInUrl",u=a.aadInfo&&a.aadInfo[c],s=a.msaInfo&&a.msaInfo[c];"aad"===a.preferredIdp&&u?n=u:"msa"===a.preferredIdp&&s?n=s:u?n=u:s&&(n=s);break;default:var f=t?i.appSignOutUrl:i.appSignInUrl;n="function"==typeof f?f({currentAccount:e.currentAccount}):f}return{str:r,href:n,onClick:o}}(e),t=document.createTextNode(n.str||""),r=document.createElement("a");r.href=n.href||"#",r.style.cssText=nn,r.onclick=n.onClick,r.appendChild(t);var o=document.createElement("div");o.className="msame_Header",o.appendChild(r);var i=document.createElement("div");i.appendChild(o);var a=document.getElementById(e.containerId);a&&(a.innerHTML="",a.appendChild(i))}function cn(e){return un(e.currentPresence)&&function(e){if(e){for(var n=0;n<e.length;n++)if(!un(e[n]))return!1;return!0}return!1}(e.presenceList)}function un(e){return!!e&&(0<e.key.length&&null!=e.key&&null!=e.key&&0<e.presenceString.length&&null!=e.presenceString&&null!=e.presenceString&&0<e.imageUrl.length&&null!=e.imageUrl&&null!=e.imageUrl)}function sn(e){if(!e)throw b("Options must be an object. Received "+typeof e+".");if(!(e=o({},e)).authProviderConfig)throw b("options.authProviderConfig not correctly defined. Received "+e.authProviderConfig+".");e.presenceConfig&&cn(e.presenceConfig);var n=e.primaryUXConfig=e.primaryUXConfig||{};e.events=e.events||{},e.primaryUXConfig.signInStr=n.signInStr||"Sign in",e.primaryUXConfig.signOutStr=n.signOutStr||"Sign out";var t=["compressed"];e.primaryUXConfig.displayModes=n.displayModes&&n.displayModes.filter(function(e){return-1!=t.indexOf(e.type)})||[],e.appContextConfig&&e.appContextConfig.commands&&(e.appContextConfig.commands=e.appContextConfig.commands.slice(0,5));var r=e;return r.syntheticEventTarget=new A,function(e){var n;if(e&&e.events)for(n in e.events)if(M(e.events,n)){var t=e.events[n];t&&e.syntheticEventTarget.addEventListener(n.toLowerCase(),t)}}(r),_(r),r}function fn(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return O.apply(void 0,i([l],e))}function ln(e){return{apiGeneration:"GEN2",containerId:e.containerId,appContextConfig:{commands:dn(e.extensibleLinks)},currentAccount:e.userData?vn(e.userData):void 0,events:e.events?pn(e.events):void 0,authProviderConfig:function(e){return{type:"v1BackCompat",rpData:e}}(e.rpData)}}function dn(e){return e&&null!=e.map?e.map(function(n,e){return{type:"link",id:n.id?n.id:C("command_id_",e),text:n.label?n.label:n.string?n.string:"Label "+e,ariaLabel:void 0,url:n.url,openInNewTab:!!n.openInNewTab,onClick:n.onClick?function(e){n.onClick()&&e.preventDefault()}:void 0}}):[]}function pn(n){if(n){var e={};return n.onSignIn&&(e.beforeSignIn=function(e){e.preventDefault(),n.onSignIn()}),n.onBeforeSignOut&&(e.beforeSignOutFromApp=function(e){n.onBeforeSignOut(function(e){return{idp:function(e){switch(e){case"msa":return"msa";case"aad":return"aad";case"msaFed":return"msaFed"}}(e.type),authenticatedState:function(e){switch(e){case"notSignedIn":return"3";case"signedIn":return"1";case"signedInIDPOnly":return"2"}}(e.authenticatedState),firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,nickName:e.memberName,tileUrl:e.pictureUrl}}(e.detail.currentAccount))}),n.onEventLog&&(e.controlExpanded=function(){n.onEventLog("DropdownOpen",{type:"bici",ts:d(),uaid:t.id})},e.afterSignOutAndForgetFromIdp=function(e){n.onEventLog("RemoveUser",{userCount:0,idp:e.detail.account.type,currentUser:e.detail.account.memberName})},e.beforeSignIn=function(){n.onEventLog("SignIn",{userCount:0,idp:"",currentUser:""})},e.beforeSwitch=function(e){n.onEventLog("SwitchUser",{userCount:1,idp:1===e.detail.signInType?"Converged":4===e.detail.signInType?"Aad":"Msa",currentUser:e.detail.currentAccount.memberName})},e.afterGetRememberedAccounts=function(e){n.onEventLog("AccountListReady",{duration:0,count:e.detail.rememberedAccounts.length})},e.telemetry=function(e){if(e.detail.data&&e.detail.data.event)try{switch(e.detail.data.event.content.id){case"View Account":n.onEventLog("ViewAccount",{userCount:1,currentUser:"",idp:""});break;case"Sign Out":n.onEventLog("SignOutAll",{userCount:0,currentUser:""});break;case"Initial Collapsed":n.onEventLog("HeaderReady",{duration:0}),n.onEventLog("DropdownReady",{duration:0})}}catch(e){}}),e}}function mn(e){if(!e||!e.idp)return!1;switch(e.idp){case"aad":return function(e){return e&&null!=e.memberName&&0<e.memberName.length}(e);case"msa":case"msaFed":return function(e){return e&&null!=e.memberName&&0<e.memberName.length}(e)}}function vn(e){if(mn(e))switch(e.idp){case"aad":return function(e){return{type:"aad",authenticatedState:gn(e.authenticatedState),displayName:e.displayName,firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,orgName:e.orgName,orgLogoUrl:e.orgLogoUrl,pictureUrl:e.tileUrl,roleName:e.roleName,sessionId:e.sessionId,profile:hn(e)}}(e);case"msa":return function(e){return{type:"msa",authenticatedState:gn(e.authenticatedState),firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,pictureUrl:e.tileUrl,cid:e.cid,profile:hn(e)}}(e);case"msaFed":return function(e){return{type:"msaFed",authenticatedState:gn(e.authenticatedState),displayName:e.displayName,firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,orgName:e.orgName,orgLogoUrl:e.orgLogoUrl,pictureUrl:e.tileUrl,roleName:e.roleName,sessionId:e.sessionId,cid:e.cid,profile:hn(e)}}(e)}}function gn(e){switch(e.toString()){case"3":return"notSignedIn";case"1":return"signedIn";case"2":return"signedInIDPOnly";default:return"notSignedIn"}}function hn(e){return e.nickName&&""!==e.nickName.trim()?{profileName:e.nickName||"",profilePictureUrl:e.tileUrl||""}:void 0}f.MSA=f.MSA||{};var yn=f.MSA.MeControl=f.MSA.MeControl||{};var Cn=Qe(),wn=Ze();var bn,Sn,En,An={setActiveUser:Tn("setActiveUser"),setExtensibleLinks:Tn("setExtensibleLinks"),refreshUserPicture:Tn("refreshUserPicture"),setUserPicture:Tn("setUserPicture"),setMobileState:Tn("setMobileState"),openCloseDropdown:Tn("openCloseDropdown")};function Tn(t){var r=Cn.handleCall(t);return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];Ne({eventType:"PartnerApiCall",method:"V1:"+t,params:i(e)}),r.apply(void 0,e)}}Ye=function(e){wn(e);var n=function(t){return{setActiveUser:function(e){var n=vn(e);n&&t.setActiveAccount(n)},setExtensibleLinks:function(e){t.setCommands(dn(e))},refreshUserPicture:function(){t.refreshAccountPicture(!0)},setUserPicture:function(e){t.setProfilePicture(e)},setMobileState:function(e){var n;switch(e){case-1:n="auto";break;case 0:case 2:n="standard";break;case 1:n="compressed";break;default:n="auto"}t.setDisplayMode(n)},openCloseDropdown:function(e){}}}(e);Cn.setComponent(n)},bn=$e,Sn=function(e){Ie(),Ne({eventType:"PartnerApiCall",method:"load",params:e});try{rn(sn(e),"load")}catch(e){return!1}return!0},En=function(t){return new xe(function(e,n){Ie(),Ne({eventType:"PartnerApiCall",method:"loadAsync",params:t}),e(rn(sn(t),"loadAsync"))})},f.MeControlDefine=We,f.MeControlImport=He,fn({API:bn,Loader:{load:Sn,loadAsync:En},Config:l.Config||{}},{Strings:{addStrings:R}}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];O.apply(void 0,i([yn],e))}({API:An,Loader:{load:function(e){if(Ie(),Ne({eventType:"PartnerApiCall",method:"loadV1",params:e}),!e)return!1;if(!e.rpData)return!1;try{rn(sn(ln(e)),"loadV1")}catch(e){return!1}return!0}},IDP:{AAD:"aad",MSA:"msa"},AccountType:{AAD:"aad",MSA:"msa",MSA_FED:"msaFed"},AuthState:{SignedIn:1,SignedInIdp:2,NotSignedIn:3},Config:yn.Config||{}});var Nn=f.onMeControlReadyToLoad;return setTimeout(function(){return Nn&&Nn()},0),t.ME=l,t.MEV1=yn,t.Promise=xe,t.SyntheticEvent=S,t.SyntheticEventTarget=A,t.addEventWriter=Q,t.addStrings=R,t.assertNever=function(e,n){throw b("Never assertion failed: "+n)},t.assign=O,t.batchEvents=z,t.checkIfCDNDomainExists=V,t.createCV=s,t.createError=b,t.createId=C,t.createPartA=ce,t.extendMe=fn,t.fireEvent=se,t.getContentJson=function(e){var n={id:e.id,cT:e.type,sN:e.slot,cS:e.source};return JSON.stringify(n,function(e,n){return null==n?void 0:n})},t.getCv=u,t.getOptions=x,t.getPageLocation=v,t.getPageTags=ae,t.getPerfEntries=m,t.getRootDomainUrl=F,t.getStartTime=function(){return tn},t.getString=function(e){var n=(L||l.Config.mkt||"en-US").toLowerCase();return D[n]&&D[n][e]||"ERROR: "+e},t.getTime=d,t.getTimeSince=function(e){return e-oe},t.getTimeSinceStart=on,t.guid=P,t.hasOwn=M,t.loadCss=function(e){var n=document,t=n.head||n.getElementsByTagName("head")[0],r=n.createElement("style");r.type="text/css",t.appendChild(r),r.appendChild(document.createTextNode(e))},t.logTelemetryEvent=Ne,t.mapV1ConfigToV2Config=ln,t.mapV1EventsToV2Events=pn,t.mapV1ExtensibleLinksToV2Commands=dn,t.mapV1UserDataToV2Account=vn,t.meImport=He,t.perfNow=p,t.requestAnimationFrame=e,t.scrubUrl=Z,t.setCurrentLang=function(e){L=e.toLowerCase()},t.setCv=function(e){n=s(e)},t.setEventCreator=ue,t.setOptions=_,t.setUpTelemetry=Te,t.showHeaderNoJs=an,t.timeout=Fe,t.toJsonable=function(e){var n={},t=e;return Object.getOwnPropertyNames(e).forEach(function(e){return n[e]=t[e]}),n},t.updateMoment=function(e,n){var t=e?1:0,r=n-t;te.counts=t+"-"+r,te.current=e},t.v1UserDataIsUseable=mn,t.vortexEndpoint=q,t.w=f,t.writeEvent=K,t}({}),MeControlDefine("meInline",["exports"],function(e){var n=MeControl.WebInline;n.assign(e,n)});
//# sourceMappingURL=meInlineBackCompat.min.js.map

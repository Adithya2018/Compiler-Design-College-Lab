(window.webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0=window.webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0||[]).push([[1],{"+9Bl":function(e,n,t){"use strict";t.r(n);var o=t("mVz8"),l=t("P1BV"),c=t("jiiz"),s=function(){function e(){}return e.registerContentElement=function(n){e===Object(c.c)()?n!==e._contentElement&&(e._contentElement&&e._contentElement.removeEventListener("scroll",e._onScroll),e._contentElement=n,n?e._manageEventAttachment():(e._isShyMode=!1,e._callbacks.forEach(function(e){try{e.onUnshy()}catch(e){}}))):Object(c.c)().registerContentElement(n)},e.registerCallbacks=function(n){if(e===Object(c.c)()){if(e._callbacks.indexOf(n)<0){e._callbacks.push(n),e._totalHeightDifference+=n.heightDifference;try{e._contentElement&&(e._contentElement.scrollTop-=n.heightDifference),this._isShyMode&&n.onShy()}catch(e){}return e._manageEventAttachment(),!0}return!1}Object(c.c)().registerCallbacks(n)},e.unregisterCallback=function(n){if(e===Object(c.c)()){var t=e._callbacks.indexOf(n);if(t>=0){var o=e._callbacks[t];try{e._isShyMode&&(e._contentElement&&(e._contentElement.scrollTop+=o.heightDifference),o.onUnshy())}catch(e){}return e._totalHeightDifference-=o.heightDifference,e._callbacks.splice(t,1),e._manageEventAttachment(),!0}return!1}Object(c.c)().unregisterCallback(n)},e.unshy=function(){e===Object(c.c)()?(e._onShyEventSent=!1,e._isShyMode=!1,e._callbacks.forEach(function(e){try{e.onUnshy()}catch(e){}})):Object(c.c)().unshy()},e._manageEventAttachment=function(){if(e.enabled&&e._contentElement){var n=!l.Killswitch.isActivated("A2EE05E1-7A4E-4A5B-97D2-8BF10F0BC846","9/02/20","no scrollTop adjustment for anchor navigation");e._contentElement.removeEventListener("scroll",e._onScroll),e._contentElement.removeEventListener("mousedown",e._onMouseDown),e._contentElement.removeEventListener("mouseup",e._onMouseUp),n&&window.removeEventListener("hashchange",e._onHashChange),e._callbacks.length&&(e._contentElement.addEventListener("scroll",e._onScroll),e._contentElement.addEventListener("mousedown",e._onMouseDown),e._contentElement.addEventListener("mouseup",e._onMouseUp),n&&window.addEventListener("hashchange",e._onHashChange))}},e._onScroll=function(n){e._queueScrollEvent=!0,e._isMouseDown||(window.clearTimeout(e._handleScrollTimeoutId),e._handleScrollTimeoutId=window.setTimeout(e._handleScroll,25))},e._onMouseDown=function(n){e._isMouseDown=!0},e._onMouseUp=function(n){e._isMouseDown=!1,e._queueScrollEvent&&e._handleScroll()},e._onHashChange=function(n){e._hashChangedRecently=!0,window.clearTimeout(e._handleHashChangeTimeoutId),e._handleHashChangeTimeoutId=window.setTimeout(function(){e._hashChangedRecently=!1},500)},e._handleScroll=function(){if(e._queueScrollEvent){e._queueScrollEvent=!1;var n=e._contentElement.scrollTop-e._lastScrollPosition;n>=0&&!e._isShyMode?(e._scrolledAmountConsecutively>=0?e._scrolledAmountConsecutively+=n:e._scrolledAmountConsecutively=n,e._scrolledAmountConsecutively>e.scrollThresholdDown&&e._contentElement.scrollTop-e._totalHeightDifference>e.scrollThresholdDown&&(e._onShyEventSent||(e._onShyEventSent=!0,Math.random()<.01&&o.Engagement.logData({name:"ShyConductor.OnShy"})),e._isShyMode=!0,e._callbacks.forEach(function(e){try{e.onShy()}catch(e){}}),e._hashChangedRecently?o.Engagement.logData({name:"ShyConductor.HashNavNoAutoscrollShy"}):e._contentElement.scrollTop-=e._totalHeightDifference)):n<0&&e._isShyMode&&(e._scrolledAmountConsecutively<=0?e._scrolledAmountConsecutively+=n:e._scrolledAmountConsecutively=n,(-e._scrolledAmountConsecutively>e.scrollThresholdUp||e._contentElement.scrollTop<e.scrollThresholdDown)&&(e._isShyMode=!1,e._callbacks.forEach(function(e){try{e.onUnshy()}catch(e){}}),e._hashChangedRecently?o.Engagement.logData({name:"ShyConductor.HashNavNoAutoscrollUnshy"}):e._contentElement.scrollTop+=e._totalHeightDifference)),e._lastScrollPosition=e._contentElement.scrollTop}},e.scrollThresholdDown=300,e.scrollThresholdUp=500,e.enabled=!0,e._callbacks=[],e._totalHeightDifference=0,e._isShyMode=!1,e._lastScrollPosition=0,e._scrolledAmountConsecutively=0,e._isMouseDown=!1,e._queueScrollEvent=!1,e._hashChangedRecently=!1,e._onShyEventSent=!1,e}();n.default=s,Object(c.c)()||(window[c.a]=s)},mVz8:function(e,n,t){var o=t("K9kD");for(var l in e.exports={},o)o.hasOwnProperty(l)&&(e.exports[l]=o[l]);e.exports.default=o.Engagement,Object.defineProperty(e.exports,"__esModule",{value:!0})}}]);
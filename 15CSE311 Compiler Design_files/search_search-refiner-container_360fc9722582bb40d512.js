(window.msfast_searchux_search_jsonp=window.msfast_searchux_search_jsonp||[]).push([[30],{1630:function(e,n,r){"use strict";r.r(n),r.d(n,"logRefinerRender",function(){return s}),r.d(n,"logRefinerApplied",function(){return f}),r.d(n,"logRefinerPillRemove",function(){return u}),r.d(n,"logRefinerPillsClearAll",function(){return a}),r.d(n,"logRefinerMoreButtonShown",function(){return l}),r.d(n,"logRefinerMoreButtonClicked",function(){return _}),r.d(n,"logRefinerAppliedAndZeroResult",function(){return d}),r.d(n,"logRefinerDeselectAllClick",function(){return m}),r.d(n,"logRefinerClearFromNoResultMessage",function(){return g});var t=r(1),i=r(35),o=r(57),c=r(1720),s=function(e,n){var r=Math.round(performance.now());setTimeout(function(){var s=Math.round(performance.now());Object(i.a)({name:"configured_refiners",nameDetail:"configured_refiners_render",eventType:"USAGE",properties:Object(t.__assign)({measures:JSON.stringify(Object(c.a)(n)),endTimeStamp:s,eventTimeStamp:r},Object(o.getContentSourceAndRefinerTypesForTelemetry)(e))})},0)},f=function(e){setTimeout(function(){Object(i.a)({name:"configured_refiners",nameDetail:"configured_refiners_applied",eventType:"USAGE",properties:Object(t.__assign)({},Object(o.getContentSourceAndRefinerTypesForTelemetry)(e))})},0)},u=function(e){setTimeout(function(){Object(i.a)({name:"configured_refiners",nameDetail:"configured_refiners_pill_remove",eventType:"USAGE",properties:Object(t.__assign)({},Object(o.getContentSourceAndRefinerTypesForTelemetry)([e]))})},0)},a=function(e){setTimeout(function(){Object(i.a)({name:"configured_refiners",nameDetail:"configured_refiners_clear_all",eventType:"USAGE",properties:Object(t.__assign)({},Object(o.getContentSourceAndRefinerTypesForTelemetry)(e))})},0)},l=function(){setTimeout(function(){Object(i.a)({name:"configured_refiners",nameDetail:"configured_refiners_more_shown",eventType:"USAGE",properties:Object(t.__assign)({},Object(o.getContentSourceAndRefinerTypesForTelemetry)())})},0)},_=function(){setTimeout(function(){Object(i.a)({name:"configured_refiners",nameDetail:"configured_refiners_more_click",eventType:"USAGE",properties:Object(t.__assign)({},Object(o.getContentSourceAndRefinerTypesForTelemetry)())})},0)},d=function(){Object(o.shouldUseConfiguredRefiners)()&&requestAnimationFrame(function(){setTimeout(function(){Object(i.a)({name:"configured_refiners",nameDetail:"configured_refiners_zero_result",eventType:"USAGE",properties:Object(t.__assign)({},Object(o.getContentSourceAndRefinerTypesForTelemetry)())})},0)})},m=function(e){setTimeout(function(){Object(i.a)({name:"configured_refiners",nameDetail:"configured_refiners_deselect",eventType:"USAGE",properties:Object(t.__assign)({},Object(o.getContentSourceAndRefinerTypesForTelemetry)([e]))})},0)},g=function(){if(Object(o.shouldUseConfiguredRefiners)()){var e=Object(o.getRefinersForVertical)();setTimeout(function(){Object(i.a)({name:"configured_refiners",nameDetail:"configured_refiners_clearall_noresult",eventType:"USAGE",properties:Object(t.__assign)({},Object(o.getContentSourceAndRefinerTypesForTelemetry)(e))})},0)}}}}]);
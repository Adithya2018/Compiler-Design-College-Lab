(window.webpackJsonpb6917cb1_93a0_4b97_a84d_7cf49975d4ec_0_2_0=window.webpackJsonpb6917cb1_93a0_4b97_a84d_7cf49975d4ec_0_2_0||[]).push([[62],{"/ayA":function(e,t,a){"use strict";var r=a("Pk8u"),n=a("9tPQ");t.a=Object(r.once)(Object(n.a)("lokiAadSearchBoxTokenProvider","https://loki.delve.office.com"))},"2Y29":function(e,t,a){"use strict";a.r(t),a.d(t,"configureSearch",function(){return be});var r=a("17wl"),n=a("l9q1"),o=a("/ayA"),i=a("Y70z"),s=a("ReWL"),c=a("FqN5"),u=a("KxNz"),l=a("sjml"),d=a("rFgO"),h=a("gERi"),p=a("mcYv"),f=a("UWqr"),b=a("TB8f"),m=a("+uXQ"),g=a("Pk8u"),_=a("9tPQ"),v=Object(g.once)(Object(_.a)("odsTokenProvider","https://api.diagnostics.office.com")),S=a("DA9l"),x=a("vlQI"),P=a("qQu9");function O(){try{return x._AadTokenProviders.configurable._getTokenInternal("https://substrate.office.com/tenantfeedback",x._AadTokenProviders.preAuthorizedConfiguration,!0)}catch(e){return Promise.resolve("")}}var j=function(){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(e){return[2,Object(P.a)({monitorType:"generic_qos",monitorName:"fetch_tenantfeedback_token"},O)()]})})};function C(e){try{if(void 0===e.url)return Promise.reject("could not get auth token for Tenant url is missing.");var t=e.url||"https://microsoft-my.sharepoint.com";return x._AadTokenProviders.configurable._getTokenInternal(t,x._AadTokenProviders.preAuthorizedConfiguration,!0)}catch(e){return Promise.resolve("")}}var y=a("tw28"),w=a("Hduh"),k=a("eZAq"),A=a("6bSo"),I=a("6iXJ"),E=a("2q6Q"),U=a("6Vfr"),F=a("7BV5"),T=a("jmBX"),L=a("hNRV"),N=a("zWII"),R=a("g83+"),D=a("q+wp"),B=a("cDcd"),W=a("hiL/"),M=a("qjmy"),H=a("7plR"),V=a("DtOL"),z={getAndPrefetchPersonaImageUri:function(e,t){var a=e.Smtp||e.Upn;"User"===e.PersonaType&&a?t(W.SPUtility.getUserPhotoUrl(a,3)):t()}},q=function(e){function t(t){var a=e.call(this,t)||this;return a._lpcAdapterRefresh=function(e){!a._lpcAdapterPromise&&e&&(a._lpcAdapterPromise=a.state.component.ensureInitializeLPC(e.makeAdapterConfig()).then(function(){return a._asyncSetState&&a._asyncSetState(a.state)}))},a}return Object(r.__extends)(t,e),t.prototype.render=function(){return this.state.component?B.createElement(this.state.component,Object(r.__assign)({},this.props.deferredProps,{ref:this._lpcAdapterRefresh},this.props.componentProps),this.props.children):this._renderPlaceHolder()},t.prototype._internalLoad=function(){return Object(V.b)()},t.prototype._renderPlaceHolder=function(){var e=this.props.componentProps&&this.props.componentProps.useSpanWrapper?"span":"div";return B.createElement(e,null,this.props.children)},t}(M._DeferredComponent),Q=a("Rex+"),G=a("F8Me"),K=Object(g.once)(function(e){var t="TeamSiteSearch"===Object(Q.b)()&&Object(p.a)()?"searchux.suggestionProvider.provider.autosuggestfile":"searchux.suggestionProvider.provider.sharePointHomePrefetchFilesSiteScoped",a="TeamSiteSearch"===Object(Q.b)()&&Object(p.a)()?"searchux.suggestionProvider.streamPolicy.ordered":"searchux.suggestionProvider.streamPolicy.eager",r=e.main.registerSuggestionProviderConfigurationAsync("spClient1",{streamPolicy:a,groups:[{id:"news",optimalCount:3,providers:["searchux.suggestionProvider.provider.sharePointSearchNewsSuggestions"]},{id:"file",optimalCount:2,providers:[t]},{id:"site",optimalCount:2,providers:["searchux.suggestionProvider.provider.sharePointAssociatedSites"]}]}),n=e.main.registerSuggestionProviderConfigurationAsync("spClient2",{streamPolicy:a,groups:[{id:"news",optimalCount:3,providers:["searchux.suggestionProvider.provider.sharePointSearchNewsSuggestions"]},{id:"file",optimalCount:2,providers:[t]},{id:"site",optimalCount:2,providers:["searchux.suggestionProvider.provider.sharePointAssociatedSites"]}]});return Promise.all([r,n]).then(function(e){var t=e[0],a=e[1];return{home:t.settingName,news:a.settingName}})});a("Log5");var J={searchResultsContainer:"ma_au_ada2ac09",padded:"mb_au_ada2ac09",serp:"mc_au_ada2ac09",results:"me_au_ada2ac09",searchPageLayoutPrint:"mf_au_ada2ac09",backLinkWrapper:"mg_au_ada2ac09",header:"mh_au_ada2ac09",headerFallback:"mi_au_ada2ac09",oldResultContainer:"mj_au_ada2ac09"},X=a("mMzb"),Y=a("n1SJ"),Z=a("Togl"),$=a("GPet"),ee=a("ZMdl"),te=a("0IsF"),ae=a("y88i"),re=a("mkj+"),ne=a("J7xF"),oe=a("xs0R"),ie=a("lDgI"),se=a("fK+q"),ce=a("Zm2F"),ue=Object(g.once)(function(){H.a.instance.suiteNavManager&&!f._BrowserUtilities.isEmbedded()&&H.a.instance.suiteNavManager.loadSuiteNav(D.default.suiteNavConfiguration())}),le=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._navigateFinished=!1,t._handleSearchComponentOnClick=function(e){var a=H.a.instance.pageContext.legacyPageContext.webAbsoluteUrl;t.onBackButtonClick(e,a)},t}return Object(r.__extends)(t,e),t.setPageLayout=function(){Y.a.setFieldsFromListItem({BannerImageUrl:"",CanvasContent1:"",Description:"",FileLeafRef:"",Id:-1,PageLayoutType:te.a.Search,Title:ae.StringHelper.format(re.g,D.default.spPageContextInfo.webTitle),CheckoutUserId:-1,Modified:"",OData__UIVersionString:"0.0",PromotedState:0,IsWebWelcomePage:!1,VersionInfo:{LastVersionCreated:"",LastVersionCreatedBy:""}})},t._shouldUsePrintQuery=function(){return!f._SPKillSwitch.isActivated(f.Guid.parse("42fd1580-5bbd-4ae5-99a5-7ca29e3c42d7"),"7/21/2020","use print query to fix scroll issue in print preview")},t.prototype.UNSAFE_componentWillMount=function(){setTimeout(ue,1e3),t.setPageLayout(),E._PerformanceLogger.addComponent(t.controlName),E._PerformanceLogger.startMarkForComponent(t.controlName)},t.prototype.componentDidMount=function(){var e=this;this._placeholderManager.registerPlaceholders(),this._ensurePageLoaded().then(function(){e._loadChromeOptions(),e.doWarmupSubstrateCall(),Promise.all([se.b]).then(function(){e._navigateFinished=!0,e.forceUpdate()})})},t.prototype.componentWillUnmount=function(){X._SiteChromeActionCreator.load(this.props.serviceScope,oe.b.chromeOptions)},t.prototype.render=function(){var e=this;if(!this._navigateFinished||!t.mainModule)return null;var a=t.mainModule.main,n=a.BackLink,o=a.childRoutes,i=a.ConfigurationDrivenSearchBox,s=a.indexRouteVNext,c=a.isContextualRailEnabled,u=a.RefinerPanelContainer,l=a.RootComponent,d=a.SearchScopeBreadcrumbProvider,h=a.isExitSearchInSearchBoxEnabled,p=H.a.instance.pageContext.legacyPageContext.webAbsoluteUrl,f=re.a,b=ae.StringHelper.format(re.b,D.default.spPageContextInfo.webTitle),m=Object(ne.css)(J.searchResultsContainer,J.padded,t._shouldUsePrintQuery()?J.searchPageLayoutPrint:""),g=s.component;return B.createElement("div",{className:m},B.createElement("div",{"data-sp-placeholder":$.PlaceholderName[$.PlaceholderName.Top]}),B.createElement(X.Router,{history:Z.b},B.createElement(X.Route,{path:Object(Z.a)().getPath(),component:function(t){return B.createElement("div",{className:J.serp,id:"ms-searchux-serp","data-sp-a11y-skipkeys":"all","data-interception":"off"},B.createElement("div",null,h()?void 0:B.createElement("div",{className:J.backLinkWrapper},B.createElement(n,{href:p,onClick:e._handleSearchComponentOnClick,"aria-label":b},f)),B.createElement("div",null,B.createElement("div",{className:""+J[c()?"header":"headerFallback"]},B.createElement(d,null),Object(ee.c)()?void 0:B.createElement(i,{configurationName:"serpV2"})),B.createElement(u,{hostId:"ms-searchux-serp"}))),B.createElement("div",null,B.createElement(l,Object(r.__assign)({},t),B.createElement("div",{className:J.results},B.createElement(X.Switch,null,B.createElement(X.Route,{path:Object(Z.a)().getPath(),exact:!0,component:g}),o.map(function(e,t){var a=e.component;return B.createElement(X.Route,{path:Object(Z.a)().getPath()+"/"+e.path,component:a,key:t})}))))))}})),B.createElement("div",{"data-sp-placeholder":$.PlaceholderName[$.PlaceholderName.Bottom],className:"sp-placeholder-bottom"}))},t.prototype.onBackButtonClick=function(e,t){0!==e.button||e.ctrlKey||(e.preventDefault(),Object(ce.a)(t))},t.prototype.shouldComponentUpdate=function(){var e=this.props.onLoaded;return e&&e(),!1},Object.defineProperty(t.prototype,"_placeholderManager",{get:function(){return H.a.instance.serviceScope.consume($._PlaceholderManager.serviceKey)},enumerable:!0,configurable:!0}),t.prototype._ensurePageLoaded=function(){var e=this,a=this.props.serviceScope.consume(ie.a.serviceKey);if(a&&(a.isFullPageLoad&&a.markFullPageLoaded(),D.default.isXSite(this.props.location.pathname))){var r=this.props.onLoaded;return r&&r(),a.navigate(this.props.location.pathname,{enableCache:!0,enableDataPrefetch:!0}).then(function(){t.setPageLayout(),e._loadChromeOptions()})}return Promise.resolve()},t.prototype._loadChromeOptions=function(){var e=Object(g.cloneDeep)(oe.b.chromeOptions);e.footer.hidden=!0,e.header.hidden=!0,e.nav.hidden=!0,X._SiteChromeActionCreator.load(this.props.serviceScope,e)},t.prototype.doWarmupSubstrateCall=function(){var e=H.a.instance.pageContext.legacyPageContext;Object(h.a)(e)||Object(A.a)(F,Object(Q.b)(),H.a.instance.pageContext.legacyPageContext.webAbsoluteUrl,Object(d.a)(H.a.instance.pageContext.legacyPageContext),Object(p.i)(),Object(p.d)(D.default.spPageContextInfo||{}),Object(m.a)(e),Object(b.a)(e))},t.controlName="Search.SiteSearch",t}(B.Component),de=le;le.prototype.isPage=!0;var he=a("kpG4"),pe=a("hEaJ"),fe=new E._QosMonitor("SPPageInitializeSearch");function be(e,t,a){var g;return Object(r.__awaiter)(this,void 0,void 0,function(){var _,x,P,O,E,W,M,X,Y,Z,$,ee,te,ae,re,ne,oe,ie,se,ce,ue,le,be,me,ge,_e,ve,Se,xe;return Object(r.__generator)(this,function(Pe){switch(Pe.label){case 0:return Pe.trys.push([0,6,,7]),_=D.default.spPageContextInfo||{},x=(new Date).valueOf(),P=H.a.instance.pageContext,O=P.cultureInfo.currentUICultureName,E=D.default.preloadedData.user.LoginName,W=P.legacyPageContext,M=W.webAbsoluteUrl,X=Object(b.a)(W),Y=(X||x)+"_"+(E||x),Z=a.main,ee=($=Z).loadStrings,[4,e];case 1:return[4,ee.apply($,[Pe.sent(),O||"en-us"])];case 2:return Pe.sent(),te=function(){return K(a)},ae=!Object(h.a)(_),re=Object(p.d)(Z.conf),ne=Object(p.e)(Z.conf),oe=W.formDigestValue,Z.conf.sets("searchux.clientVersion",Y),Z.conf.sets("searchux.useStrictSearchCenterUrlValidation",Object(s.z)()),ie=void 0,t?ie=t.rawSearchCenterUrlPromise:(ie=U.b({siteRoot:D.default.domainUrl(),tokenProvider:function(){return Promise.resolve(void 0)}}).catch(function(){return""}),ae&&Object(A.a)(F,Object(Q.b)(),M,Object(d.a)(W),Object(p.i)(Z.conf),re,Object(m.a)(W),X),Object(p.h)(Z.conf)&&Object(n.a)(F,M,ne,oe,Object(s.y)())({attempt:0}).then(function(e){T.a({token:e,clientType:"OfficeSharePoint",msbUrl:"https://business.bing.com",tokenProvider:function(){return Promise.resolve(void 0)}})}),Object(i.a)(F,W),L.default({url:M+"/_api/SP.UserProfiles.PeopleManager/GetMyProperties?$select=AccountName,PersonalUrl,UserUrl",tokenProvider:function(){return Promise.resolve(null)}})),[4,ie];case 3:return se=Pe.sent(),ce=Object(l.a)(se,M),ue=ne?M:ce,le=function(e){return{search:Object(k.a)(e.query),pathname:e.pathname}},be=function(e,t,a,i,g){var _,x,P=t.conf,O=!Object(h.a)(e),w=Object(y.a)(e)||"",k=Object(p.d)(P),A=Object(p.e)(P),I=Object(S.a)(a.rawSearchCenterUrl),E=A?e.webAbsoluteUrl:Object(l.a)(I,e.webAbsoluteUrl),U=e.formDigestValue,F=Object(s.y)(),T="SPHomeWeb"===a.hostAppId&&a.searchResultsPageUrl||(_=a.rawSearchCenterUrl,x=e.webAbsoluteUrl,_?_.replace(/\/$/,"")+"/results.aspx":x.replace(/\/$/,"")+"/_layouts/15/osssearchresults.aspx");return Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({},Object(u.a)(a.hostAppId,Object(h.a)(e),g)),{"searchux.answerBlock":Object(p.h)(P),"searchux.api.autoSuggest.tokenProvider":Object(c.a)(i,k,E,A,U,F),"searchux.api.bingForBusiness.tokenProvider":Object(n.a)(i,E,A,U,F),"searchux.api.ods.tokenProvider":v(i,E,A,U,F),"searchux.api.sharePointTenant.tokenProvider":C,"searchux.api.tenantFeedback.tokenProvider":j,"searchux.api.delegateAutoSuggest.tokenProvider":Object(c.a)(i,!0,E,A,U,F),"searchux.api.loki.tokenProvider":Object(o.a)(i,E,A,U,F),"searchux.api.sharePoint.url":e.webAbsoluteUrl,"searchux.api.sharePointHome.tokenProvider":t.SPHomeServiceTokenProvider,"searchux.api.sharePointSearchCenter.url":I,"searchux.clientId":a.hostAppId,"searchux.clientVersion":a.clientVersion,"searchux.component.TriageNewsSearchResult.previewEnabled":!0,"searchux.component.TriageSearchResult.animateOnRender":!1,"searchux.currentLanguage":e.currentLanguage||e.currentUICultureName,"searchux.dateTimeFormatOptions":{month:"long",day:"numeric",year:"numeric"},"searchux.debug":!1,"searchux.disableFolderGrouping":Object(s.s)(),"searchux.enabled":!0,"searchux.enableFileProtocolLinkCopyInteraction":Object(s.d)(),"searchux.enableQueryRules":Object(p.f)(P),"searchux.environment":w,"searchux.extension.filePreviewWrapper":t.OneUpCookieFilePreviewWrapper,"searchux.file.variant":"triage","searchux.historyEntryDecorator":a.historyEntryDecorator,"searchux.instrumenter":a.instrumenter,"searchux.isCheckSharePointAndSearchCenterUrlsInDifferentDomainFlighted":Object(s.o)(),"searchux.isSearchBoxInHeaderFlighted":Object(s.x)(),"searchux.isVideoVerticalEnabled":!1,"searchux.locale":e.currentUICultureName,"searchux.news.variant":"triage","searchux.noSourceIdForFiles":Object(s.I)(),"searchux.person.variant":"modular","searchux.resultSearchModelId":"ABBAABBA-AAAA-AAAA-CCCC-000000000424","searchux.searchResultsPageUrl":function(e){return t=T,a=e,f.Text.format("{0}?k={1}",t,encodeURIComponent(a));var t,a},"searchux.scrollElementProvider":function(){return document.querySelector(a.scrollElementQuerySelector)},"searchux.showPersonalResults":O&&Object(s.c)(),"searchux.site.variant":"triage","searchux.siteId":"SPHomeWeb"===a.hostAppId?"":Object(b.a)(e),"searchux.substrateSuggestionsEchoScenario":"SPHomeWeb"===a.hostAppId?"SpHomeWebEcho":"TeamSiteSearchEcho","searchux.substrateSuggestionsScenario":a.hostAppId,"searchux.triageSiteSearchResult.siteLogo.use":!0,"searchux.use3SAnswers":O&&Object(p.k)(P),"searchux.use3SBookmarkSuggestions":!1,"searchux.use3SEcho":O&&Object(s.L)(),"searchux.use3SEchoAnswers":O&&Object(s.M)(),"searchux.use3SEchoSuggestions":Object(s.N)(a.hostAppId),"searchux.use3SFileSuggestions":Object(p.a)(P),"searchux.use3SPeopleSuggestions":"SPHomeWeb"===a.hostAppId&&Object(p.b)(P),"searchux.use3SSiteSuggestions":"SPHomeWeb"===a.hostAppId&&Object(p.c)(P),"searchux.userEmail":e.userEmail,"searchux.userPrincipalName":e.userLoginName,"searchux.userAadObjectId":e.aadUserId,"searchux.userRing":"Local","searchux.tenantAadObjectId":e.aadTenantId,"searchux.xAnchorMailbox":Object(d.a)(e),"searchux.useSubstrateSearch":O&&Object(p.i)(P),"searchux.webId":"SPHomeWeb"===a.hostAppId?"":Object(m.a)(e)}),{"searchux.spellerType":Object(p.g)()?"SPOPersonalizedSpeller":"SPOBingSpeller"}),Object(s.t)()?{"searchux.peopleSearchModelId":"BBBBAAAA-FFFF-EEEE-DDDD-100000000004"}:{}),"SPHomeWeb"===a.hostAppId?function(e){return{"searchux.focusPreservationSelector":"#ms-searchux-searchtools-container","searchux.mySiteUrl":e.personalUrl?e.personalUrl+"/person.aspx":"","searchux.personalUrl":e.personalUrl,"searchux.videoChannelUrlTemplate":e.videoChannelUrlTemplate,"searchux.videoPlayerUrlTemplate":e.videoPlayerUrlTemplate}}(a):{}),{"searchux.excludeBestBets":!1,"searchux.pfp.preloadAnswers":!0})}(W,Z,{hostAppId:Object(Q.b)(),clientVersion:Y,historyEntryDecorator:le,instrumenter:Object(I.createSearchInstrumenterOnce)(),scrollElementQuerySelector:"."+J.searchResultsContainer+", ."+J.oldResultContainer,rawSearchCenterUrl:se},F,Object(he.b)()),Z.conf.setsSafe("searchux.personClickTargetWrapper",function(e){return function(e,t){return B.createElement(q,{deferredProps:{email:e.userName,pageContext:H.a.instance.pageContext.legacyPageContext,personaType:"User",displayName:e.displayName,lpcCallbacks:z,lpcCardBehavior:{onCardClose:e.onDismiss,onCardOpen:e.onTrigger}},componentProps:Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({},"tabIndex"in e&&{tabIndex:e.tabIndex}),"ariaLabel"in e&&{ariaLabel:e.ariaLabel}),{useSpanWrapper:!0})},e.children)}(e)}),Z.conf.sets("searchux.initializeLivePersonaCard",function(){return Object(V.a)()}),me=function(e){var t={"searchux.substrateSearchClientFlights":function(e){var t=["disableFolderGrouping","mergeSpAndOdbFilesForEcho","use3SEcho","noSourceIdForFiles","use3SEchoAnswers","use3SFileSuggestions","use3SPeopleSuggestions","use3SSiteSuggestions","useSubstrateSearch","useSubstrateSearchSingleQuery","use3SAnswers","TuringFlight","useFileAnswerResult","FileEntityAllowSerpMergerFlight","UseFullWorkingSetForInterleaved","EnableResultAnnotations","PeopleEntityServeQASFlight","msb3satsch"].map(function(e){return"searchux."+e}).filter(function(t){return!0===e[t]}).map(function(e){return e.split(".")[1]});Object(p.d)()&&t.push("aadTokenForSubstrate");var a=e["searchux.isSmartPeopleFilterEnabled"]||!1,r=[e["searchux.smartPeopleFilterClientFlight"]||""].filter(Boolean);a&&r.reduce(function(e,t){return e.concat(t)},[]).forEach(function(e){return t.push(e)});var n=(e["searchux.spellerType"]||"").toString();return n&&t.push(n),t.join(",")}(e)};Z.conf.setsFromObject(Object(r.__assign)(Object(r.__assign)({},e),t)),Object(Q.a)(function(e){return Z.conf.sets("searchux.clientId",e)}),fe.writeSuccess()},ge=Object(o.a)(F,ue,ne,oe,Object(s.y)()),_e={},ve=void 0,Object(s.g)()&&ae?[4,(t&&t.searchConfigurationPromise||N.a({tokenProvider:ge,environment:Object(w.a)(W.env,W.farmLabel),clientType:"ODSP",additionalHeaders:{"X-MSSearchScenario":Object(Q.b)(),"X-MSSearchComponent":"SERP"},siteId:Object(b.a)(W)})).then(function(e){if(e){ve=e,be["searchux.api.loki.url"]=e.lokiUrl;var a="";try{a=Object(G.a)(e.ecsConfigIds)}catch(e){a=""}be["searchux.ecsConfigIds"]=a,e.ecsSettings&&(_e=e.ecsSettings.useEcsSettings?e.ecsSettings:{},e.ecsSettings.enableSerpFileShareConnector&&(t?t.fileShareConnectorSettingsPromise.then(function(e){Z.conf.sets("searchux.allVerticalConnectorContent",e.AllVerticalContent),Z.conf.sets("searchux.fileVerticalConnectorContent",e.FilesVerticalContent)}):R.a({endpoint:M,tokenProvider:function(){return Promise.resolve(void 0)}}).then(function(e){var t=e.xhr,a=JSON.parse(t.responseText);a&&a.d&&(Z.conf.sets("searchux.allVerticalConnectorContent",a.d.AllVerticalContent||"None"),Z.conf.sets("searchux.fileVerticalConnectorContent",a.d.FilesVerticalContent||"None"))})))}}).catch(function(e){fe.writeUnexpectedFailure("fetchSearchConfiguration",new Error("Error retrieving or parsing search configuration: "+e))})]:[3,5];case 4:Pe.sent(),Pe.label=5;case 5:return Z.exposeDebugInterface("mssearchux.spPages",{version:Z.version,conf:Z.conf,ecsConfig:ve}),me(Object(r.__assign)(Object(r.__assign)({},be),_e)),window&&W.knowledgeHubSiteDetails&&(null===(g=W.knowledgeHubSiteDetails)||void 0===g?void 0:g.Url)&&(window.KnowledgeHubUrl_a86cbc119be54babaaca9ef6b915b68c=W.knowledgeHubSiteDetails.Url),de.mainModule=a,Se=be["searchux.api.sharePointSearchCenter.url"]||"",function(e){if(!f._SPKillSwitch.isActivated("dea9284a-8a89-45d9-aa3c-70cd73bbce69")&&"MSW"===Object(Q.b)()&&"pfp"===e.variant)try{e.main.registerSuggestionProviderConfigurationAsync("msw-pfp-workaround",{groups:[],streamPolicy:"searchux.suggestionProvider.streamPolicy.eager"}).catch(function(){})}catch(e){}}(a),[2,Object(r.__assign)(Object(r.__assign)({},a),{SearchPage:de,getSuggestionProviderConfigurations:te,warmupSubstrate:A.a,searchCenterUrl:Se,prefetchModule:F,prefetchSiteNewsSuggestions:pe.a})];case 6:throw xe=Pe.sent(),fe.writeUnexpectedFailure(void 0,new Error("Failed to initialize search.")),xe;case 7:return[2]}})})}},"6bSo":function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a("17wl"),n=a("FqN5"),o=a("ReWL"),i=a("ACeQ"),s=a("mcYv"),c=function(e,t,a,c,u,l,d,h,p,f){void 0===p&&(p=!1),void 0===f&&(f="");var b=Object(i.a)(d,h)?"https://microsoft.sharepoint.com/search":a;if(Object(o.c)()||Object(s.i)()){e.substrateIframeProxy().catch();var m={"x-anchormailbox":c},g=Object(r.__spreadArrays)(Object(o.p)()?["EnabledModernResultTypeWarmup"]:[],Object(s.g)()?["SPOPersonalizedSpeller"]:[]);(Object(o.p)()||Object(s.g)())&&(m["X-Client-Flights"]=g.join(",")),e.warmupSubstrateSearch({queryStringParameters:Object(r.__assign)(Object(r.__assign)({scenario:t,userContextUrl:b},d&&{webId:d}),h&&{siteId:h}),headers:m,postAction:u?"initv2":"init",tokenProvider:Object(n.a)(e,l,a,p,f,Object(o.y)())}).catch(function(){}),l&&Object(o.h)()&&Object(n.a)(e,!1,a,p,f,Object(o.y)())({attempt:0}).catch(function(){})}}},"9tPQ":function(e,t,a){"use strict";function r(e,t,a){return void 0===a&&(a=!1),function(r,n,o,i,s){void 0===o&&(o=!1),void 0===i&&(i=""),void 0===s&&(s=!1);var c,u,l=0,d=function(){return s&&l>0&&l<=2};return r.withPeriodicRefresh(e,(c=function(){return(o?r.fetchSharePointDigestV2({endpoint:n,overrideDigest:i,tokenProvider:function(){return Promise.resolve("")}}):r.fetchSharePointDigest({endpoint:n,forceDigestRefresh:d})).then(function(e){return JSON.parse(e.xhr.responseText).d.GetContextWebInformation.FormDigestValue}).then(function(e){return r.fetchAcquireToken({portalUrl:n,resourceUrl:t,digest:e,useSTI:a})}).then(function(e){var t=JSON.parse(e.xhr.responseText).access_token;return l=0,t}).catch(function(e){throw e&&e.status&&403===e.status&&s&&l++,new Error("Failed to retrieve a valid token")})},u=void 0,function(e){return!e.attempt&&u?u:u=c()}))}}a.d(t,"a",function(){return r})},DA9l:function(e,t,a){"use strict";function r(e){if(e){var t=e.length;e.toUpperCase().lastIndexOf("/PAGES")===t-6&&(e=e.substr(0,t-6))}return e}a.d(t,"a",function(){return r})},FqN5:function(e,t,a){"use strict";var r=a("Pk8u"),n=a("9tPQ"),o=Object(r.once)(Object(n.a)("stiSubstrateTokenProvider","https://substrate.office.com",!0)),i=Object(r.once)(Object(n.a)("aadSubstrateTokenProvider","https://outlook.office365.com/search",!1));t.a=function(e,t,a,r,n,s){return void 0===r&&(r=!1),t?i(e,a,r,n,s):o(e,a,r,n,s)}},Hduh:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a("tw28");function n(e,t){switch(e){case"prodbubble":return"https://microsoft.sharepoint-df.com"===window.location.origin?"Sfdf":"Msit";default:return t&&0===t.toLowerCase().indexOf("deu_1")?"Blackforest":Object(r.b)(t)?"GccModerate":"Prod"}}},J7xF:function(e,t,a){var r=a("KL1q");for(var n in e.exports={},r)r.hasOwnProperty(n)&&(e.exports[n]=r[n]);Object.defineProperty(e.exports,"__esModule",{value:!0})},KxNz:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a("ReWL"),n=a("mcYv");function o(e,t,a){var o=!t;return{"searchux.aadTokenForSubstrate":Object(n.d)(),"searchux.clientSideRelevance":o&&Object(r.c)(),"searchux.disableFolderGrouping":Object(r.s)(),"searchux.isCrossGeoEnabled":Object(r.c)(),"searchux.isGuestUser":t,"searchux.isResourceLoggingEnabled":!0,"searchux.noSourceIdForFiles":Object(r.I)(),"searchux.showPersonalResults":o&&Object(r.c)(),"searchux.use3SEcho":o&&Object(r.L)(),"searchux.use3SFileSuggestions":Object(n.a)(),"searchux.use3SPeopleSuggestions":"SPHomeWeb"===e&&Object(n.b)(),"searchux.use3SSiteSuggestions":"SPHomeWeb"===e&&Object(n.c)(),"searchux.useSearchApp":a,"searchux.useStrictSearchCenterUrlValidation":Object(r.z)()}}},Log5:function(e,t,a){var r=a("OEzf"),n=a("jOlS");"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)n.loadStyles(r[o][1],!0);r.locals&&(e.exports=r.locals)},OEzf:function(e,t,a){(e.exports=a("5ADk")(!1)).push([e.i,'.ma_au_ada2ac09{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:"[theme:neutralPrimary, default: #323130]";font-family:"Segoe UI Web (West European)",Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size:14px;-ms-flex:1 1 0%;flex:1 1 0%;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch}.ma_au_ada2ac09 button,.ma_au_ada2ac09 input,.ma_au_ada2ac09 textarea{font-family:inherit}.ma_au_ada2ac09.mb_au_ada2ac09{background-color:"[theme:bodyBackground, default: #ffffff]";position:relative}.ma_au_ada2ac09.mb_au_ada2ac09 .mc_au_ada2ac09{position:relative;min-width:100%;-ms-flex-preferred-size:100%;flex-basis:100%}.ma_au_ada2ac09.mb_au_ada2ac09 .mc_au_ada2ac09 .ms-Layer .ms-Layer-content>*{-webkit-overflow-scrolling:initial}.ma_au_ada2ac09.mb_au_ada2ac09 div[class^=BetaTag-module__]{top:0}.ma_au_ada2ac09.me_au_ada2ac09{padding:0 16px;max-width:920px}.ma_au_ada2ac09 :focus{outline:1px solid;outline-color:"[theme:neutralSecondary, default: #605e5c]";outline-offset:1px}.ma_au_ada2ac09 button,.ma_au_ada2ac09 datalist,.ma_au_ada2ac09 fieldset,.ma_au_ada2ac09 form,.ma_au_ada2ac09 input,.ma_au_ada2ac09 label,.ma_au_ada2ac09 legend,.ma_au_ada2ac09 optgroup,.ma_au_ada2ac09 option,.ma_au_ada2ac09 output,.ma_au_ada2ac09 select,.ma_au_ada2ac09 textarea{font-family:inherit}@media print{.mf_au_ada2ac09{display:block;width:auto;height:auto;overflow:visible}}.mg_au_ada2ac09{font-size:12px;padding:1em 0 0 20px;display:none}@media (min-width:640px){.mg_au_ada2ac09{display:block}}@media (min-width:1024px){[dir=ltr] .mg_au_ada2ac09{left:-146px}[dir=rtl] .mg_au_ada2ac09{right:-146px}}.mh_au_ada2ac09,.mi_au_ada2ac09{max-width:1028px;margin:auto;padding-top:10px}.mi_au_ada2ac09{max-width:824px}.mj_au_ada2ac09{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:"[theme:neutralPrimary, default: #323130]";font-family:"Segoe UI Web (West European)",Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;font-size:14px;position:absolute;top:0;right:0;bottom:0;left:0;overflow-y:scroll}.mj_au_ada2ac09 button,.mj_au_ada2ac09 input,.mj_au_ada2ac09 textarea{font-family:inherit}body{overflow-y:hidden}.ms-Fabric--isFocusHidden .ms-searchux :focus,body:not(.ms-Fabric--isFocusVisible) .ms-searchux :focus{outline:0}.search-feedback :focus{outline:transparent}',""])},Y70z:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a("ReWL"),n=a("ZGKE"),o=a("ACeQ"),i=a("UWqr");function s(e){var t=e.siteId,a=e.webId,r=e.isHubSite;return window&&-1!==window.location.search.indexOf("from=sph")||window&&-1!==window.location.search.indexOf("from=spc")?"SPHomeWeb":Object(o.a)(a,t)?"MSW":r?"HubSiteSearch":function(e){var t=i._SPKillSwitch.isActivated(i.Guid.parse("fcc930ba-8fe4-4065-b185-8b74488eba20"),"10/08/2019","SitePagePublishing_FeatureEnabled"),a=i._SPKillSwitch.isActivated(i.Guid.parse("1c067c05-41cd-48a7-bf78-bb398a461041"),"10/09/2019","Use feature check instead of template check for isCommSite");if(t||a||!e.featureInfo){var r=e.webTemplate,o=e.webTemplateConfiguration;return!("68"!==r||!o||"SITEPAGEPUBLISHING#0"!==o.toUpperCase())}var s=new n.a(e.featureInfo);if(s){var c=s.get("SitePagePublishing");return!!c&&c.enabled}return!1}(e)?"CommSiteSearch":"TeamSiteSearch"}var c=a("K9kD"),u=a("gERi"),l=a("mcYv");function d(e,t,a){if(!Object(u.a)(t)&&Object(r.c)()&&!Object(l.i)()){var n=function(e,t){if(e){var a=e.toLowerCase()+"/",r=a.lastIndexOf("/search/");if(r>=0)return c.Uri.concatenate(a.substring(0,r+"/search/".length),"_api/search/query")}return c.Uri.concatenate(t,"_api/search/query")}(a,t.webAbsoluteUrl);e.fetchPersonalRankingContext({clientId:s(t),endpoint:n,tokenProvider:function(){return Promise.resolve("")}}).catch(function(){})}}},ZGKE:function(e,t,a){"use strict";var r=function(){function e(e){if(this._features=new Map,!e)throw new Error("Cannot create SPFeatureInfo object, incoming data is undefined.");for(var t in e)if(void 0!==t){var a=e[t];this._features.set(t,{version:a.Version,enabled:a.Enabled})}}return e.prototype._serialize=function(){var e={};return this._features.forEach(function(t,a){e[a]={Version:t.version,Enabled:t.enabled}}),e},e.prototype.get=function(e){if(!e||e&&0===e.length)throw new Error("Cannot get feature, featureName input is empty or undefined");return this._features.get(e)},e}();t.a=r},hEaJ:function(e,t,a){"use strict";function r(e,t,a){var r=t&&t.filter(function(e){return e.isDefaultSite})[0];r&&e.fetchSiteNewsSuggestions({site:r,clientId:a,tokenProvider:function(){return Promise.resolve("")}})}a.d(t,"a",function(){return r})},l9q1:function(e,t,a){"use strict";var r=a("Pk8u"),n=a("9tPQ");t.a=Object(r.once)(Object(n.a)("bingSerpTokenProvider","https://www.bing.com"))},rFgO:function(e,t,a){"use strict";function r(e){if(e)return e.aadUserId&&e.aadTenantId?"OID:"+e.aadUserId+"@"+e.aadTenantId:e.userLoginName||e.userEmail}a.d(t,"a",function(){return r})},sjml:function(e,t,a){"use strict";function r(e,t){return function(e){if(!function(e){return/\/search\/?/i.test(e)}(e))return"";var t=e.toLowerCase()+"/",a=t.lastIndexOf("/search/");return a<0?"":t.substring(0,a+"/search/".length).replace(/\/$/,"")}(e)||t}a.d(t,"a",function(){return r})},tw28:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o});var r=["us_2_","us_86_","us_96_","us_105_","us_265_","us_266_","us_267_","us_268_","us_269_","us_270_"];function n(e){var t;return(null===(t=e.webAbsoluteUrl)||void 0===t?void 0:t.toLowerCase().indexOf("microsoft.sharepoint-df.com"))>-1?"spdf":o(e.farmLabel)?"gcc":e.env2}function o(e){return Boolean(e)&&r.some(function(t){return 0===e.toLowerCase().indexOf(t)})}}}]);
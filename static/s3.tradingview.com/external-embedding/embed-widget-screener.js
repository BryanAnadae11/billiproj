(()=>{"use strict";var t={151:(t,e)=>{function r(t,e){if(void 0===t)throw new Error("".concat(null!=e?e:"Value"," is undefined"));return t}function i(t,e){if(null===t)throw new Error("".concat(null!=e?e:"Value"," is null"));return t}e.ensureNotNull=void 0,e.ensureNotNull=i}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}(()=>{var t=r(151);function e(t=location.host){return-1!==["i18n.tradingview.com","partial.tradingview.com","www.tradingview.com","wwwcn.tradingview.com"].indexOf(t)||-1!==["d33t3vvu2t2yu5.cloudfront.net","dwq4do82y8xi7.cloudfront.net","s.tradingview.com","s3.tradingview.com"].indexOf(t)||t.match(/^[a-z]{2}\.tradingview\.com/)||t.match(/prod-[^.]+.tradingview.com/)?"battle":t.includes("tradingview.com")||t.includes("staging")?"staging":t.match(/webcharts/)?"staging_local":(t.match(/^localhost(:\d+)?$/),"local")}const i={"color-cold-gray-300":"#B2B5BE","color-brand":"#2962FF","color-brand-hover":"#1E53E5","color-brand-active":"#1848CC"}
;const n=JSON.parse('{"crypto-mkt-screener":{"width":1000,"height":490,"defaultColumn":"overview","market":"crypto","screener_type":"crypto_mkt","displayCurrency":"USD","isTransparent":false},"events":{"width":510,"height":600,"isTransparent":false,"hideImportanceIndicator":false,"autosize":false},"forex-cross-rates":{"width":770,"height":400,"isTransparent":false,"currencies":["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD"],"frameElementId":null,"autosize":false},"forex-heat-map":{"width":770,"height":400,"isTransparent":false,"currencies":["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],"frameElementId":null,"autosize":false},"hotlists":{"width":400,"height":600,"isTransparent":false,"dateRange":"12M","showSymbolLogo":false},"market-overview":{"width":400,"height":650,"isTransparent":false,"dateRange":"12M","showSymbolLogo":true},"market-quotes":{"width":770,"height":450,"isTransparent":false,"showSymbolLogo":false},"mini-symbol-overview":{"width":350,"height":220,"symbol":"FX:EURUSD","dateRange":"12M","isTransparent":false,"autosize":false,"largeChartUrl":""},"symbol-overview":{"width":1000,"height":500,"symbols":[["Apple","AAPL|1D"],["Google","GOOGL|1D"],["Microsoft","MSFT|1D"]],"autosize":false,"chartOnly":false,"hideDateRanges":false,"hideMarketStatus":false,"hideSymbolLogo":false,"scalePosition":"right","scaleMode":"Normal","fontFamily":"-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif","fontSize":"10","noTimeScale":false,"chartType":"area","valuesTracking":"0","changeMode":"price-and-percent"},"screener":{"width":1100,"height":523,"defaultColumn":"overview","defaultScreen":"general","market":"forex","showToolbar":true,"isTransparent":false},"single-quote":{"width":350,"symbol":"FX:EURUSD","isTransparent":false},"symbol-profile":{"width":480,"height":650,"symbol":"NASDAQ:AAPL","isTransparent":false},"symbol-info":{"width":1000,"symbol":"NASDAQ:AAPL","isTransparent":false},"technical-analysis":{"interval":"1m","width":425,"isTransparent":false,"height":450,"symbol":"NASDAQ:AAPL","showIntervalTabs":true,"displayMode":"single"},"ticker-tape":{"isTransparent":false,"displayMode":"adaptive","showSymbolLogo":false},"tickers":{"isTransparent":false,"showSymbolLogo":false},"financials":{"width":480,"height":830,"autosize":false,"symbol":"NASDAQ:AAPL","isTransparent":false,"displayMode":"regular","largeChartUrl":""},"timeline":{"width":480,"height":830,"autosize":false,"isTransparent":false,"displayMode":"regular","feedMode":"all_symbols"},"stock-heatmap":{"width":500,"height":500,"autosize":true,"dataSource":"SPX500","exchanges":[],"grouping":"sector","blockSize":"market_cap_basic","blockColor":"change","hasTopBar":false,"isDataSetEnabled":false,"isZoomEnabled":true,"hasSymbolTooltip":true,"symbolUrl":""},"crypto-coins-heatmap":{"width":500,"height":500,"autosize":true,"dataSource":"Crypto","blockSize":"market_cap_calc","blockColor":"change","hasTopBar":false,"isDataSetEnabled":false,"isZoomEnabled":true,"hasSymbolTooltip":true,"symbolUrl":""}}');var s,o;!function(t){let e
;!function(t){t.SetSymbol="set-symbol",t.SetInterval="set-interval"}(e=t.Names||(t.Names={}))}(s||(s={})),function(t){let e;!function(t){t.SymbolClick="tv-widget-symbol-click",t.WidgetLoad="tv-widget-load",t.WidgetReady="tv-widget-ready",t.ResizeIframe="tv-widget-resize-iframe",t.NoData="tv-widget-no-data"}(e=t.Names||(t.Names={}))}(o||(o={}));const a="__FAIL__",l="__NHTTP__",c=new RegExp("^http(s)?:(//)?");function h(t=location.href){const e=function(t){try{const e=new URL(t);return c.test(e.protocol)?null:l}catch(t){return a}}(t);return e||t.replace(c,"")}const d=["locale","symbol","market"];new class extends class{constructor(t){this._copyrightContainer=null;const e=null!=t?t:this._getScriptInfo();e&&this._replaceScript(e)}hasCopyright(){return!!this._copyrightContainer}get widgetId(){throw new Error("Method must be overridden")}widgetUtmName(){return this.widgetId}get defaultSettings(){return n[this.widgetId]}get propertiesToWorkWith(){return[]}get useParamsForConnectSocket(){return!1}get useSnowplowPageView(){return!1}filterRawSettings(t){const e={},r=Object.keys(t),i=new Set(this.propertiesToWorkWith);return r.forEach((r=>{i.has(r)&&(e[r]=t[r])})),e}get shouldListenToIframeResize(){return!0}get propertiesToSkipInHash(){return["customer","locale"]}get propertiesToAddToGetParams(){return["locale"]}_defaultWidth(){}_defaultHeight(){}_getScriptInfo(){const t=document.currentScript;if(!t||!t.src)return console.error("Could not self-replace the script, widget embedding has been aborted"),null;const r=function(t){const e=new URL(t,document.baseURI);return{host:e.host,pathname:e.pathname,href:e.href,protocol:e.protocol}}(t.src);return{scriptURL:r,scriptEnv:e(r.host),scriptElement:t,id:t.id,rawSettings:this._scriptContentToJSON(t)}}_replaceScript(e){const{scriptEnv:r,scriptURL:n,scriptElement:s,rawSettings:a,id:l}=e,c=s.parentNode,h=s.nonce||s.getAttribute("nonce"),d=function(t){if(null===t)return null;const e=t.querySelector("#tradingview-copyright"),r=t.querySelector("#tradingview-quotes"),i=e||r;return i&&t.removeChild(i),i}(c),g=c.querySelector(".tradingview-widget-copyright");this._copyrightContainer=d||g;const u=c.classList.contains("tradingview-widget-container");this.iframeContainer=c&&u?c:document.createElement("div"),a&&(this.settings=this.filterRawSettings(a)),a&&this._validateSettings()||(console.error("Invalid settings provided, fall back to defaults"),this.settings=this.filterRawSettings(this.defaultSettings));const m="32px",{width:p,height:f}=this.settings,w=void 0===f?void 0:`${f}${Number.isInteger(f)?"px":""}`,y=void 0===p?void 0:`${p}${Number.isInteger(p)?"px":""}`;void 0!==y&&(this.iframeContainer.style.width=y),void 0!==w&&(this.iframeContainer.style.height=w);const b=function(){const t=document.createElement("style")
;return t.innerHTML=`\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\t/* @mixin sf-pro-display-font; */\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;\n\t\tcolor: ${i["color-cold-gray-300"]} !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: ${i["color-brand"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: ${i["color-cold-gray-300"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: ${i["color-cold-gray-300"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: ${i["color-brand-hover"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: ${i["color-brand-active"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: ${i["color-brand"]} !important;\n\t}\n\t`,t}();h&&b.setAttribute("nonce",h),this.iframeContainer.appendChild(b);const v=this.hasCopyright()&&w?`calc(${w} - 32px)`:w,S=location.hostname,_=g?"widget_new":"widget",C=this.widgetUtmName();this.settings.utm_source=S,this.settings.utm_medium=_,this.settings.utm_campaign=C,this._updateCopyrightHrefParams(S,_,C);const T=this.settings.iframeTitle||`${this.widgetId.replace("-"," ")} TradingView widget`,k=this.settings.iframeLang||"en";this.iframe=this._createIframe(v,y,n,r,l,T,k);const x=this._iframeSrcHost(n,r);this._addCSPErrorListener(x),h&&this.iframe.setAttribute("nonce",h);const A=this.iframeContainer.querySelector(".tradingview-widget-container__widget");if(A?((0,t.ensureNotNull)(A.parentElement).replaceChild(this.iframe,A),null==s||s.remove()):u?(this.iframeContainer.appendChild(this.iframe),null==s||s.remove()):(this.iframeContainer.appendChild(this.iframe),c.replaceChild(this.iframeContainer,(0,t.ensureNotNull)(s))),this.shouldListenToIframeResize&&function(t,e,r){const i=e.contentWindow;if(!i)return console.error("Cannot listen to the event from the provided iframe, contentWindow is not available"),()=>{};function n(e){e.source&&e.source===i&&e.data&&e.data.name&&e.data.name===t&&r(e.data.data)}window.addEventListener("message",n,!1)}(o.Names.ResizeIframe,this.iframe,(t=>{t.width&&(this.iframe.style.width=t.width+"px",this.iframeContainer.style.width=t.width+"px"),this.iframe.style.height=t.height+"px",this.iframeContainer.style.height=t.height+(this.hasCopyright()?32:0)+"px"})),d){const t=document.createElement("div");t.style.height=m,t.style.lineHeight=m,void 0!==y&&(t.style.width=y),t.style.textAlign="center",t.style.verticalAlign="middle",t.innerHTML=d.innerHTML,this.iframeContainer.appendChild(t)}}_iframeSrcBase(t,e){let r=`${this._iframeSrcHost(t,e)}/embed-widget/${this.widgetId}/`;return this.settings.customer&&-1!==this.propertiesToSkipInHash.indexOf("customer")&&(r+=`${this.settings.customer}/`),r}_iframeSrcHost(t,e){
const r="https://www.tradingview-widget.com";if("battle"===e)return r;const i=t.host.includes("beta.tradingview.com")||t.host.includes("betacdn.tradingview.com");return"staging"===e&&i?"https://www.xstaging-widget.tv":["staging","local"].includes(e)?`${t.protocol}//${t.host}`:r}_validateSettings(){const t=(t,e)=>{if(void 0===t)return e;const r=String(t);return/^\d+$/.test(r)?parseInt(r):/^(\d+%|auto)$/.test(r)?r:null},e=t(this.settings.width,this._defaultWidth()),r=t(this.settings.height,this._defaultHeight());return null!==e&&null!==r&&(this.settings.width=e,this.settings.height=r,!0)}_setSettingsQueryString(t){const e=this.propertiesToAddToGetParams.filter((t=>-1!==d.indexOf(t))),r=function(t,e){const r=Object.create(Object.getPrototypeOf(t));for(const i of e)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i]);return r}(this.settings,e);for(const[e,i]of Object.entries(r))t.searchParams.append(e,i)}_setHashString(t,e){const r={};e&&(r.frameElementId=e),Object.keys(this.settings).forEach((t=>{-1===this.propertiesToSkipInHash.indexOf(t)&&(r[t]=this.settings[t])})),(this.useParamsForConnectSocket||this.useSnowplowPageView)&&(r["page-uri"]=h());Object.keys(r).length>0&&(t.hash=encodeURIComponent(JSON.stringify(r)))}_scriptContentToJSON(t){const e=t.innerHTML.trim();try{return JSON.parse(e)}catch(t){return console.error(`Widget settings parse error: ${t}`),null}}_createIframe(t,e,r,i,n,s,o){const a=document.createElement("iframe");n&&(a.id=n),this.settings.enableScrolling||a.setAttribute("scrolling","no"),a.setAttribute("allowtransparency","true"),a.setAttribute("frameborder","0"),a.style.userSelect="none",a.style.boxSizing="border-box",a.style.display="block",void 0!==t&&(a.style.height=t),void 0!==e&&(a.style.width=e);const l=new URL(this._iframeSrcBase(r,i));return this._setSettingsQueryString(l),this._setHashString(l,n),a.setAttribute("src",l.toString()),a.title=s,a.lang=o,a}_addCSPErrorListener(t){document.addEventListener("securitypolicyviolation",(e=>{e.blockedURI.includes(t)&&(this._tryFixCSPIssueWithFallback(t),console.warn("Please update your CSP rules to allow the tradingview-widget.com origin for frame-src."))}))}_tryFixCSPIssueWithFallback(t){const e=this.iframe.getAttribute("src");e&&this.iframe.setAttribute("src",e.replace(t,"https://s.tradingview.com"))}_updateCopyrightHrefParams(t,e,r){if(this._copyrightContainer){const i=this._copyrightContainer.querySelector("a");if(i){const n=i.getAttribute("href");if(n)try{const s=new URL(n);s.searchParams.set("utm_source",t),s.searchParams.set("utm_medium",e),s.searchParams.set("utm_campaign",r),i.setAttribute("href",s.toString())}catch(t){console.log(`Cannot update link UTM params, href="${n}"`)}}}}}{get widgetId(){const t=this.settings;return t&&"crypto_mkt"===t.screener_type?"crypto-mkt-screener":"screener"}get useSnowplowPageView(){return!0}widgetUtmName(){const t=this.settings;if(t){if("forex"===t.market)return"forexscreener";if("crypto_mkt"===t.screener_type)return"cryptomktscreener";if("crypto"===t.market)return"cryptoscreener"}return"screener"}
get propertiesToWorkWith(){return["colorTheme","customer","defaultColumn","defaultScreen","displayCurrency","height","largeChartUrl","locale","market","screener_type","showToolbar","isTransparent","width","fwbDelay"]}filterRawSettings(t){const e=super.filterRawSettings(t);return void 0!==t.transparency&&(e.isTransparent=t.transparency),"crypto_mkt"===e.screener_type&&(e.market="crypto"),e.enableScrolling=!0,e}}})()})();
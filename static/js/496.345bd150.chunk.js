"use strict";(self.webpackChunkhotel=self.webpackChunkhotel||[]).push([[496],{496:function(n,e,t){t.r(e),t.d(e,{getCLS:function(){return L},getFCP:function(){return E},getFID:function(){return k},getINP:function(){return z},getLCP:function(){return J},getTTFB:function(){return Q},onCLS:function(){return L},onFCP:function(){return E},onFID:function(){return k},onINP:function(){return z},onLCP:function(){return J},onTTFB:function(){return Q}});var r,i,o,a,u,c=-1,f=function(n){addEventListener("pageshow",(function(e){e.persisted&&(c=e.timeStamp,n(e))}),!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var n=s();return n&&n.activationStart||0},l=function(n,e){var t=s(),r="navigate";return c>=0?r="back-forward-cache":t&&(r=document.prerendering||d()>0?"prerender":t.type.replace(/_/g,"-")),{name:n,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},p=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver((function(n){e(n.getEntries())}));return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch(n){}},v=function(n,e){var t=function t(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(n(r),e&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},m=function(n,e,t,r){var i,o;return function(a){e.value>=0&&(a||r)&&((o=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=o,e.rating=function(n,e){return n>e[1]?"poor":n>e[0]?"needs-improvement":"good"}(e.value,t),n(e))}},h=-1,g=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(){v((function(n){var e=n.timeStamp;h=e}),!0)},T=function(){return h<0&&(h=g(),y(),f((function(){setTimeout((function(){h=g(),y()}),0)}))),{get firstHiddenTime(){return h}}},E=function(n,e){e=e||{};var t,r=[1800,3e3],i=T(),o=l("FCP"),a=function(n){n.forEach((function(n){"first-contentful-paint"===n.name&&(c&&c.disconnect(),n.startTime<i.firstHiddenTime&&(o.value=n.startTime-d(),o.entries.push(n),t(!0)))}))},u=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],c=u?null:p("paint",a);(u||c)&&(t=m(n,o,r,e.reportAllChanges),u&&a([u]),f((function(i){o=l("FCP"),t=m(n,o,r,e.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,t(!0)}))}))})))},C=!1,w=-1,L=function(n,e){e=e||{};var t=[.1,.25];C||(E((function(n){w=n.value})),C=!0);var r,i=function(e){w>-1&&n(e)},o=l("CLS",0),a=0,u=[],c=function(n){n.forEach((function(n){if(!n.hadRecentInput){var e=u[0],t=u[u.length-1];a&&n.startTime-t.startTime<1e3&&n.startTime-e.startTime<5e3?(a+=n.value,u.push(n)):(a=n.value,u=[n]),a>o.value&&(o.value=a,o.entries=u,r())}}))},s=p("layout-shift",c);s&&(r=m(i,o,t,e.reportAllChanges),v((function(){c(s.takeRecords()),r(!0)})),f((function(){a=0,w=-1,o=l("CLS",0),r=m(i,o,t,e.reportAllChanges)})))},S={passive:!0,capture:!0},b=new Date,A=function(n,e){r||(r=e,i=n,o=new Date,P(removeEventListener),F())},F=function(){if(i>=0&&i<o-b){var n={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};a.forEach((function(e){e(n)})),a=[]}},I=function(n){if(n.cancelable){var e=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;"pointerdown"==n.type?function(n,e){var t=function(){A(n,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,S),removeEventListener("pointercancel",r,S)};addEventListener("pointerup",t,S),addEventListener("pointercancel",r,S)}(e,n):A(e,n)}},P=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return n(e,I,S)}))},k=function(n,e){e=e||{};var t,o=[100,300],u=T(),c=l("FID"),s=function(n){n.startTime<u.firstHiddenTime&&(c.value=n.processingStart-n.startTime,c.entries.push(n),t(!0))},d=function(n){n.forEach(s)},h=p("first-input",d);t=m(n,c,o,e.reportAllChanges),h&&v((function(){d(h.takeRecords()),h.disconnect()}),!0),h&&f((function(){var u;c=l("FID"),t=m(n,c,o,e.reportAllChanges),a=[],i=-1,r=null,P(addEventListener),u=s,a.push(u),F()}))},B=0,D=1/0,M=0,N=function(n){n.forEach((function(n){n.interactionId&&(D=Math.min(D,n.interactionId),M=Math.max(M,n.interactionId),B=M?(M-D)/7+1:0)}))},R=function(){return u?B:performance.interactionCount||0},q=function(){"interactionCount"in performance||u||(u=p("event",N,{type:"event",buffered:!0,durationThreshold:0}))},H=0,x=function(){return R()-H},O=[],j={},_=function(n){var e=O[O.length-1],t=j[n.interactionId];if(t||O.length<10||n.duration>e.latency){if(t)t.entries.push(n),t.latency=Math.max(t.latency,n.duration);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};j[r.id]=r,O.push(r)}O.sort((function(n,e){return e.latency-n.latency})),O.splice(10).forEach((function(n){delete j[n.id]}))}},z=function(n,e){e=e||{};var t=[200,500];q();var r,i=l("INP"),o=function(n){n.forEach((function(n){n.interactionId&&_(n),"first-input"===n.entryType&&!O.some((function(e){return e.entries.some((function(e){return n.duration===e.duration&&n.startTime===e.startTime}))}))&&_(n)}));var e,t=(e=Math.min(O.length-1,Math.floor(x()/50)),O[e]);t&&t.latency!==i.value&&(i.value=t.latency,i.entries=t.entries,r())},a=p("event",o,{durationThreshold:e.durationThreshold||40});r=m(n,i,t,e.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),v((function(){o(a.takeRecords()),i.value<0&&x()>0&&(i.value=0,i.entries=[]),r(!0)})),f((function(){O=[],H=R(),i=l("INP"),r=m(n,i,t,e.reportAllChanges)})))},G={},J=function(n,e){e=e||{};var t,r=[2500,4e3],i=T(),o=l("LCP"),a=function(n){var e=n[n.length-1];if(e){var r=e.startTime-d();r<i.firstHiddenTime&&(o.value=r,o.entries=[e],t())}},u=p("largest-contentful-paint",a);if(u){t=m(n,o,r,e.reportAllChanges);var c=function(){G[o.id]||(a(u.takeRecords()),u.disconnect(),G[o.id]=!0,t(!0))};["keydown","click"].forEach((function(n){addEventListener(n,c,{once:!0,capture:!0})})),v(c,!0),f((function(i){o=l("LCP"),t=m(n,o,r,e.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,G[o.id]=!0,t(!0)}))}))}))}},K=function n(e){document.prerendering?addEventListener("prerenderingchange",(function(){return n(e)}),!0):"complete"!==document.readyState?addEventListener("load",(function(){return n(e)}),!0):setTimeout(e,0)},Q=function(n,e){e=e||{};var t=[800,1800],r=l("TTFB"),i=m(n,r,t,e.reportAllChanges);K((function(){var o=s();if(o){if(r.value=Math.max(o.responseStart-d(),0),r.value<0||r.value>performance.now())return;r.entries=[o],i(!0),f((function(){r=l("TTFB",0),(i=m(n,r,t,e.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=496.345bd150.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),i=a(6),s=a(4),l=a(1),c=a(5),u=a.n(c),h=(a(16),function(e){var t=e.card,a=e.saveFavorite,o=e.removeFavorite,i=e.favoritPage,s=Object(r.useState)(i),c=Object(l.a)(s,2),u=c[0],h=c[1],d=t.copyright,p=t.date,g=t.explanation,m=t.hdurl,f=t.title,v=t.url;return n.a.createElement("div",{className:"card"},n.a.createElement("a",{href:m,title:"View Full Image",target:"_blank"},n.a.createElement("img",{src:v,alt:"NASA Picture of the Day",className:"card-img-top",loading:"lazy"})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},f),u?n.a.createElement("p",{className:"clickable",onClick:function(){o(v),h(!1)}},"Remove Favorite"):n.a.createElement("p",{className:"clickable",onClick:function(){a(v),h(!0)}},"Add to Favorites"),n.a.createElement("p",{className:"card-text"},g),n.a.createElement("small",{className:"text-muted"},n.a.createElement("strong",null,p," "),n.a.createElement("span",null,d))))}),d=function(e){var t=e.cards,a=e.saveFavorite,r=e.removeFavorite,o=e.favoritPage;return n.a.createElement("div",{className:"images-container"},t.map(function(e){return n.a.createElement(h,{card:e,key:e.url,saveFavorite:a,removeFavorite:r,favoritPage:o})}))};function p(){p=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(_){s=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var n=t&&t.prototype instanceof h?t:h,o=Object.create(n.prototype),i=new x(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return S()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var s=E(i,a);if(s){if(s===u)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=c(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}(e,a,i),o}function c(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(_){return{type:"throw",arg:_}}}e.wrap=l;var u={};function h(){}function d(){}function g(){}var m={};s(m,n,function(){return this});var f=Object.getPrototypeOf,v=f&&f(f(O([])));v&&v!==t&&a.call(v,n)&&(m=v);var y=g.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;this._invoke=function(n,o){function i(){return new t(function(r,i){!function r(n,o,i,s){var l=c(e[n],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&a.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,s)},function(e){r("throw",e,i,s)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,s)})}s(l.arg)}(n,o,r,i)})}return r=r?r.then(i,i):i()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function O(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=g,s(y,"constructor",g),s(g,"constructor",d),d.displayName=s(g,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),s(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new w(l(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),s(y,i,"Generator"),s(y,n,function(){return this}),s(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),k(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;k(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var g=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(null),h=Object(l.a)(c,2),g=h[0],m=h[1],f=Object(r.useState)(0),v=Object(l.a)(f,2),y=v[0],b=v[1],w=Object(r.useState)(10),E=Object(l.a)(w,2),j=E[0],k=(E[1],Object(r.useState)("DEMO_KEY")),x=Object(l.a)(k,2),O=x[0],S=(x[1],Object(r.useState)("https://api.nasa.gov/planetary/apod?api_key=".concat(O,"&count=").concat(j))),_=Object(l.a)(S,2),N=_[0],L=_[1],T=Object(r.useState)([]),M=Object(l.a)(T,2),F=M[0],C=M[1],P=Object(r.useState)(!1),A=Object(l.a)(P,2),I=A[0],D=A[1],G=Object(r.useState)([]),H=Object(l.a)(G,2),z=H[0],B=H[1],R=Object(r.useState)(!1),W=Object(l.a)(R,2),J=W[0],K=W[1],X=Object(r.useState)(!1),Y=Object(l.a)(X,2),q=Y[0],V=Y[1],Q=Object(r.useState)(0),U=Object(l.a)(Q,2),Z=U[0],$=U[1];Object(r.useEffect)(function(){var e=JSON.parse(localStorage.getItem("nasaFavorites"));e&&B(e)},[]),Object(r.useEffect)(function(){localStorage.setItem("nasaFavorites",JSON.stringify(z))},[z]),Object(r.useEffect)(function(){L("https://api.nasa.gov/planetary/apod?api_key=".concat(O,"&count=").concat(j))},[j,O]),Object(r.useEffect)(function(){Object(s.a)(p().mark(function e(){var t;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(N);case 3:return t=e.sent,e.next=6,function(e){if(!e.ok)throw new Error("This is an HTTP error: The status is ".concat(e.status));return e.json()}(t);case 6:re=e.sent,C(re),m(null),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message),m(e.t0.message),C([]);case 16:return e.prev=16,o(!1),e.finish(16);case 19:case"end":return e.stop()}},e,null,[[0,11,16,19]])}))()},[y]),Object(r.useEffect)(function(){var e=setInterval(function(){K(!1),V(!1)},2e3);return function(){return clearInterval(e)}},[Z]);var ee=function(){b(function(e){return e+1})},te=function(e){var t=F.find(function(t){return t.url===e});(function(e){return-1===z.findIndex(function(t){return t.url===e})})&&(B(function(e){return[].concat(Object(i.a)(e),[t])}),K(!0),V(!1),$(function(e){return e+1}))},ae=function(e){var t=z.filter(function(t){return t.url!==e});B(t),K(!1),V(!0),$(function(e){return e+1})},re=[{copyright:"Wally Pacholka",date:"2005-10-31",explanation:"From sunset to sunrise, an unusually bright yellowish orb will hang in the sky this Halloween: Mars.  Yesterday, Earth passed Mars as they orbited the Sun, bringing Mars closer than it will be for the next thirteen years.  Tonight though, Mars will be nearly as bright as last night, a beacon of extraterrestrial spookiness.  Opposite the Sun, Mars will rise just when the Sun sets, set just when the Sun rises, and be visible the entire night.  Mars will not always be the brightest object in tonight's sky, though.  Brighter than even Mars, almost spooky Venus will light up the western horizon for a brief time just after sunset.   Please have a safe and happy All Hallows Eve.",hdurl:"https://apod.nasa.gov/apod/image/0510/marshalloween_pacholka_big.jpg",media_type:"image",service_version:"v1",title:"A Martian Halloween",url:"https://apod.nasa.gov/apod/image/0510/marshalloween_pacholka.jpg"},{date:"2021-09-15",explanation:"Where on Earth do cyclones go? Usually known as hurricanes when in the Atlantic Ocean and typhoons when in the Pacific, the featured map shows the path of all major storms from 1985 through 2005.  The map shows graphically that cyclones usually occur over water, which makes sense since evaporating warm water gives them energy. The map also shows that cyclones never cross -- and rarely approach -- the Earth's equator, since the Coriolis effect goes to zero there, and cyclones need the Coriolis force to circulate. The Coriolis force also causes cyclone paths to arc away from the equator. Although long-term trends remain a topic of research, evidence indicates that hurricanes have become, on the average, more powerful in the North Atlantic over the past 30 years, and their power is projected to keep increasing.   Follow APOD on Instagram in: English, Farsi, Indonesian, Persian, or Portuguese",hdurl:"https://apod.nasa.gov/apod/image/2109/StormPaths_NHC_8000.jpg",media_type:"image",service_version:"v1",title:"Cyclone Paths on Planet Earth",url:"https://apod.nasa.gov/apod/image/2109/StormPaths_NHC_1080.jpg"},{date:"2002-05-16",explanation:"During April and May, attention has been focused on the western evening sky, presenting its spectacle of bright planets and crescent moons shortly after sunset. Meanwhile, the the Sun itself has not been just sinking quietly below the horizon. For example on May 2nd, two enormous clouds of energetic particles blasted away from the solar surface in nearly simultaneous eruptions. Known as coronal mass ejections (CMEs), they appear as large \"bubbles\" oriented at about 2 o'clock and 8 o'clock in this composite image from cameras onboard the sun-staring SOHO spacecraft. At picture center, an extreme ultraviolet image of the Sun recorded near the time of these eruptions has been superimposed for scale. The blank region surrounding it corresponds to an occulting disk in one of SOHO's coronagraphic cameras. Speeding outward at millions of kilometers per hour, these two CMEs missed our fair planet. But those that do impact Earth's magnetosphere often trigger auroral displays and disruptions.",hdurl:"https://apod.nasa.gov/apod/image/0205/doublecme_soho_big.jpg",media_type:"image",service_version:"v1",title:"Double Trouble Solar Bubbles",url:"https://apod.nasa.gov/apod/image/0205/doublecme_soho.jpg"},{copyright:"Hubble Legacy Archive",date:"2018-05-25",explanation:"This stunning group of galaxies is far, far away, about 450 million light-years from planet Earth and cataloged as galaxy cluster Abell S0740. Dominated by the cluster's large central elliptical galaxy (ESO 325-G004), this reprocessed Hubble Space Telescope view takes in a remarkable assortment of galaxy shapes and sizes with only a few spiky foreground stars scattered through the field. The giant elliptical galaxy (right of center) spans over 100,000 light years and contains about 100 billion stars, comparable in size to our own spiral Milky Way galaxy. The Hubble data can reveal a wealth of detail in even these distant galaxies, including arms and dust lanes, star clusters, ring structures, and gravitational lensing arcs.",hdurl:"https://apod.nasa.gov/apod/image/1805/ESO325-Pestana.jpg",media_type:"image",service_version:"v1",title:"Galaxies Away",url:"https://apod.nasa.gov/apod/image/1805/ESO325-Pestana1024.jpg"},{copyright:"John P. Gleason",date:"2009-09-16",explanation:"The Tarantula Nebula is more than 1,000 light-years in diameter -- a giant star forming region within our neighboring galaxy the Large Magellanic Cloud (LMC). That cosmic arachnid lies left of center in this sharp, colorful telescopic image taken through narrow-band filters. It covers a part of the LMC over 2,000 light-years across. Within the Tarantula (NGC 2070), intense radiation, stellar winds and supernova shocks from the central young cluster of massive stars, cataloged as R136, energize the nebular glow and shape the spidery filaments. Around the Tarantula are other violent star-forming regions with young star clusters, filaments and bubble-shaped clouds. The rich field is about as wide as the full Moon on the sky, located in the southern constellation Dorado.   digg_url ='http://apod.nasa.gov/apod/ap090916.html'; digg_skin = 'compact';",hdurl:"https://apod.nasa.gov/apod/image/0909/tarantula_gleason.jpg",media_type:"image",service_version:"v1",title:"The Tarantula Zone",url:"https://apod.nasa.gov/apod/image/0909/tarantula_gleason900.jpg"},{copyright:"CARA Project",date:"2015-02-27",explanation:"Buffeted by the solar wind, Comet Lovejoy's crooked ion tail stretches over 3 degrees across this telescopic field of view, recorded on February 20. The starry background includes awesome bluish star Phi Persei below, and pretty planetary nebula M76 just above Lovejoy's long tail. Also known as the Little Dumbbell Nebula, after its brighter cousin M27 the Dumbbell Nebula, M76 is only a Full Moon's width away from the comet's greenish coma. Still shining in northern hemisphere skies, this Comet Lovejoy (C/2014 Q2) is outbound from the inner solar system some 10 light-minutes or 190 million kilometers from Earth. But the Little Dumbbell actually lies over 3 thousand light-years away. Now sweeping steadily north toward the constellation Cassiopeia Comet Lovejoy is fading more slowly than predicted and is still a good target for small telescopes.",hdurl:"https://apod.nasa.gov/apod/image/1502/Feb20Lovejoy_astroligu60.jpg",media_type:"image",service_version:"v1",title:"Long Lovejoy and Little Dumbbell",url:"https://apod.nasa.gov/apod/image/1502/Feb20Lovejoy_astroligu60c1024.jpg"},{copyright:"Bob Andersson",date:"2013-04-15",explanation:"Stars are forming in the Soul of the Queen of Aethopia. More specifically, a large star forming region called the Soul Nebula can be found in the direction of the constellation Cassiopeia, who Greek mythology credits as the vain wife of a King who long ago ruled lands surrounding the upper Nile river. The Soul Nebula houses several open clusters of stars, a large radio source known as W5, and huge evacuated bubbles formed by the winds of young massive stars. Located about 6,500 light years away, the Soul Nebula spans about 100 light years and is usually imaged next to its celestial neighbor the Heart Nebula (IC 1805). The above image appears mostly red due to the emission of a specific color of light emitted by excited hydrogen gas.   Follow APOD on: Facebook (Daily) (Sky) (Spanish) or Google Plus (Daily) (River)",hdurl:"https://apod.nasa.gov/apod/image/1304/soul_andersson_2048.jpg",media_type:"image",service_version:"v1",title:"IC 1848: The Soul Nebula",url:"https://apod.nasa.gov/apod/image/1304/soul_andersson_960.jpg"},{date:"1997-05-02",explanation:"The life-cycles of stars help drive the ecology of our Galaxy, churning, processing, and redistributing matter. Massive stars reach a spectacular evolutionary endpoint - supernovae explosions which blast off their outer layers, violently merging stellar material with the gas and dust of the Milky Way. The supernova remnant IC 443 is typical of the aftermath. Seen in this false color X-ray image are the shocked, expanding shells of gas from a star which exploded thousands of years ago. Known to be interacting with galactic molecular clouds, the expanding supernova remnant was also recently discovered to have regions of intense higher energy X-ray emission (coded blue in this map) near the molecular cloud boundaries. This X-ray emission may indicate that electrons are being accelerated within the remnant, gaining in energy as they surf back and forth across the expanding shock wave. If so, IC 443 could also be one source of our Galaxy's puzzling high energy cosmic-rays.",hdurl:"https://apod.nasa.gov/apod/image/9705/ic443_asca_orig.jpg",media_type:"image",service_version:"v1",title:"X-Rays From IC 443\nCredit:",url:"https://apod.nasa.gov/apod/image/9705/ic443_asca.jpg"},{date:"2018-04-24",explanation:"Sure, you've seen Saturn's rings -- but have you ever heard them? Well then please take this opportunity to play Saturn's rings like a harp.  In the featured sonification, increasing brighter regions of Saturn's central B-ring play as increasingly higher pitched notes. With a computer browser, click anywhere on the image to begin, and pluck consecutive strings by sliding the spacecraft icon's magnetometer boom across the strings.  Both manual and automatic modes are possible.  The featured natural-color image was taken by the late Cassini spacecraft in 2017 July as it grazed Saturn's rings and took the highest-resolution ring images ever.  The reason why the mostly water-ice rings have a tan hue -- instead of white -- is currently a topic of research.  Played in minor harmony, a different false-color version of the same image appears where regions with a greater abundance of water ice appears more red.",media_type:"video",service_version:"v1",title:"Play Saturn's Rings Like a Harp",url:"https://apod.nasa.gov/apod/image/1804/saturn-harp/index.html"},{date:"2014-04-25",explanation:"\"Beautiful Nebula discovered between the Balance [Libra] & the Serpent [Serpens] ...\" begins the description of the 5th entry in 18th century astronomer Charles Messier's famous catalog of nebulae and star clusters. Though it appeared to Messier to be fuzzy and round and without stars, Messier 5 (M5) is now known to be a globular star cluster, 100,000 stars or more, bound by gravity and packed into a region around 165 light-years in diameter. It lies some 25,000 light-years away. Roaming the halo of our galaxy, globular star clusters are ancient members of the Milky Way. M5 is one of the oldest globulars, its stars estimated to be nearly 13 billion years old. The beautiful star cluster is a popular target for Earthbound telescopes. Of course, deployed in low Earth orbit on April 25, 1990, the Hubble Space Telescope has also captured its own stunning close-up view that spans about 20 light-years near the central region of M5. Even close to its dense core at the left, the cluster's aging red and blue giant stars and rejuvenated blue stragglers stand out in yellow and blue hues in the sharp color image.",hdurl:"https://apod.nasa.gov/apod/image/1404/m5hst2048.jpg",media_type:"image",service_version:"v1",title:"Hubble's Messier 5",url:"https://apod.nasa.gov/apod/image/1404/m5hst950.jpg"}];return n.a.createElement(n.a.Fragment,null,a?n.a.createElement("div",{className:"loader"},n.a.createElement("img",{src:u.a,alt:"Rocket Loading Animation"})):g?n.a.createElement("div",null,"There is a problem fetching the post data - ".concat(g)):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navigation-container"},n.a.createElement("span",{className:"background"}),I?n.a.createElement("span",{className:"navigation-items",id:"favoritesNav"},n.a.createElement("h3",{className:"clickable",onClick:function(){ee(),D(!1)}},"Load More NASA Images"),n.a.createElement("h3",null,"\xa0\xa0\xa0\u2022\xa0\xa0\xa0"),n.a.createElement("h3",{className:"clickable",onClick:function(){D(!1)}},"Go Back")):n.a.createElement("span",{className:"navigation-items",id:"resultsNav"},n.a.createElement("h3",{className:"clickable",onClick:function(){D(!0)}},"Favorites"),n.a.createElement("h3",null,"\xa0\xa0\xa0\u2022\xa0\xa0\xa0"),n.a.createElement("h3",{className:"clickable",onClick:ee},"Load More"))),I?n.a.createElement(d,{cards:z,saveFavorite:te,removeFavorite:ae,favoritPage:!0}):n.a.createElement(d,{cards:F,saveFavorite:te,removeFavorite:ae,favoritPage:!1})),J&&n.a.createElement("div",{className:"confirmed"},n.a.createElement("h1",null,"ADDED!")),q&&n.a.createElement("div",{className:"confirmed"},n.a.createElement("h1",null,"REMOVED!"))))},m=(a(17),document.getElementById("root"));Object(o.createRoot)(m).render(n.a.createElement(g,{tab:"home"}))},5:function(e,t,a){e.exports=a.p+"static/media/rocket.db37a521.svg"},7:function(e,t,a){e.exports=a(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.07b8205a.chunk.js.map
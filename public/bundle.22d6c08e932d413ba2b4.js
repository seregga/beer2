(()=>{"use strict";var n={28:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(81),o=e.n(t),a=e(645),s=e.n(a)()(o());s.push([n.id,"*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nhtml{\r\n    height: 100%;\r\n    overflow-y:hidden; \r\n}\r\n.body {\r\n    height: 100%;\r\n    background: #161616;\r\n}\r\n.container{\r\n    height: 100%;\r\n    display:flex;\r\n    flex-direction: column;\r\n    max-width: 500px;\r\n    margin:0 auto;\r\n    padding: 5px;\r\n}\r\n.personal-account{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    text-align: right;\r\n    min-height: 30px;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    background: #272727;\r\n    border-radius: 7px;\r\n    margin-bottom:10px;\r\n    padding: 10px ;\r\n    border: solid 1px rgb(49, 49, 49);\r\n    border-top: 3px outset #f7ecd7;\r\n\r\n}\r\n.personal-account__name{\r\n    color: #f7ecd7;\r\n    margin-right: 10px;\r\n}\r\n.personal-account__avatar{\r\n    background: #f7ecd7;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 50px;\r\n    overflow: hidden;\r\n    object-position:center;\r\n    object-fit: cover;\r\n}\r\n.personal-account__button{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    /* text-align: center;\r\n    color: #f7ecd7;\r\n    font-weight: 700;\r\n    padding: 4px 0 0 0;\r\n    box-sizing: border-box; */\r\n    background: #d16212;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 5px;\r\n    margin-left: 20px;\r\n    cursor: pointer;\r\n}\r\n.result{\r\n    flex: 1 1 auto;\r\n    text-align: left;\r\n    height: auto;\r\n    font-weight: 400;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    background: #161616;\r\n    border-radius: 7px;\r\n    color: orange;\r\n    margin-bottom:10px;\r\n    padding: 10px;\r\n    overflow: hidden;\r\n    overflow-y: auto;\r\n}\r\n.result__list{\r\n    list-style: none;\r\n}\r\n.result__title{\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n.result__img{\r\n    height: 100%;\r\n    width: 100%;\r\n    object-position:center;\r\n    object-fit: cover;\r\n    border-radius: 7px;\r\n}\r\n.result__item{\r\n    margin-bottom: 10px;\r\n    padding: 0 0 0 20px;\r\n}\r\n.result__name-color{\r\n    color:chocolate;\r\n}\r\n.button-beer-selection{\r\n    height: 70px;\r\n    text-align: center;\r\n    padding: 3px 10px;\r\n    font-size: 30px;\r\n    font-family: sans-serif;\r\n    font-weight: 700;\r\n    margin: 0 0 35px;\r\n    border-radius: 7px;\r\n    background: #d16212;\r\n    color: #161616;\r\n    border: solid 2px #161616;\r\n    transition: background-color 0.3s ease;\r\n    cursor: pointer;\r\n}\r\n.button-beer-selection:active{\r\n    background-color: #72350a7c;\r\n}\r\n@media screen and (max-width: 321px) {\r\n    .button-beer-selection,.button-beer-selection-none{\r\n        height: 50px;\r\n        padding: 3px 10px;\r\n        font-size: 20px;\r\n        font-weight: 600;\r\n        margin: 0 0 20px;\r\n    }\r\n    .result{\r\n        font-weight: 300;\r\n        font-family: sans-serif;\r\n        font-size: 18px;\r\n        margin-bottom:10px;\r\n        padding: 10px;\r\n    }\r\n    .result__item{\r\n        margin-bottom: 8px;\r\n        padding: 0 0 0 10px;\r\n    }\r\n}\r\n@media screen and (min-width: 800px) {\r\n    .result{\r\n        overflow-y: hidden;\r\n    }\r\n}\r\n",""]);const i=s},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&s[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],l=t.base?c[0]+t.base:c[0],p=a[l]||0,u="".concat(l," ").concat(p);a[l]=p+1;var d=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var m=o(f,t);t.byIndex=i,r.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=e(a[s]);r[i].references--}for(var c=t(n,o),l=0;l<a.length;l++){var p=e(a[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),s=e.n(a),i=e(565),c=e.n(i),l=e(216),p=e.n(l),u=e(589),d=e.n(u),f=e(28),m={};m.styleTagTransform=d(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,e.p,e.p,e.p;const h=document.querySelector(".button-beer-selection");let g=!1;function x(){const n=document.querySelector(".personal-account");fetch("https://random-data-api.com/api/users/random_user").then((n=>n.json())).then((r=>{n.innerHTML=`\n        <h5 class="personal-account__name">${r.first_name} ${r.last_name}</h5>\n        <img class="personal-account__avatar" src="${r.avatar}" alt="кружка пива">\n        <div class="personal-account__button"><img class="personal-account__arrow" src="./src/img/refresh_arrows.svg" alt="refresh">\n        </div>\n        `}))}h.addEventListener("click",(()=>{h.textContent="другое",function(){const n=document.querySelector(".result");fetch("https://random-data-api.com/api/beer/random_beer").then((n=>n.json())).then((r=>{n.innerHTML=`\n                <h3 class="result__title">Попробуй это :</h3>\n                <ul class="result__list">\n                <li class="result__item"><span class="result__name-color">Название:</span> ${r.name}</li>\n                <li class="result__item"><span class="result__name-color">Бренд:</span> ${r.brand}</li>\n                <li class="result__item"><span class="result__name-color">Алкоголь:</span> ${r.alcohol}</li>\n                <li class="result__item"><span class="result__name-color">Blg:</span> ${r.blg}</li>\n                <li class="result__item"><span class="result__name-color">Хмель:</span> ${r.hop}</li>\n                <li class="result__item"><span class="result__name-color">Ibu:</span> ${r.ibu}</li>\n                <li class="result__item"><span class="result__name-color">Солод:</span> ${r.malts}</li>\n                <li class="result__item"><span class="result__name-color">Style:</span> ${r.style}</li>\n                <li class="result__item"><span class="result__name-color">Yeast:</span> ${r.yeast}</li>\n                </ul>\n            `}))}(),g||(x(),g=!0)})),document.body.addEventListener("click",(function(n){n.target&&n.target.classList.contains("personal-account__arrow")&&x()}))})()})();
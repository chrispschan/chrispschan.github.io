!function s(a,i,l){function c(t,e){if(!i[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=i[t]={exports:{}};a[t][0].call(o.exports,function(e){return c(a[t][1][e]||e)},o,o.exports,s,a,i,l)}return i[t].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,t,r){"use strict";var n,o=e("facebook/share/index.js");var s=new((n=o)&&n.__esModule?n:{default:n}).default({ele:".fb-share-custom"});console.log(s.shareEle)},{"facebook/share/index.js":3}],2:[function(e,t,r){"use strict";Element.prototype.getDataset=function(){if(!this.dataset){var e=this.attributes,t=[],r="";this.dataset={};for(var n=0;n<e.length;n++)if("data-"===e[n].localName.substr(0,5)){t=e[n].localName.split("-"),r="";for(var o=1;o<t.length;o++)r+=1===o?t[o]:t[o].substr(0,1).toUpperCase()+t[o].substr(1);this.dataset[r]=e[n].value}}return this.dataset},Element.prototype.addClass=function(e){this.classList?this.classList.add(e):this.className+=" "+e},Element.prototype.removeClass=function(e){this.classList?this.classList.remove(e):this.className=this.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},Element.prototype.hasClass=function(e){return this.classList?this.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(this.className)}},{}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();e("object/object.property"),e("element/element.property");var o=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=Object.assign({method:"share",display:"popup"},e),this._FBShareEle=[],e.ele&&""!==e.ele&&this.addShare(e.ele)}return n(t,[{key:"addShare",value:function(e){for(var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign(this._options,t),o=document.querySelectorAll(e),s=function(t){o[t].FBShareOptions=Object.assign({},n),o[t].getDataset(),o[t].dataset.href&&(o[t].FBShareOptions.href=o[t].dataset.href),o[t].onclick=function(e){console.log(o[t].FBShareOptions),"string"==typeof o[t].FBShareOptions.href&&""!==o[t].FBShareOptions.href||(o[t].FBShareOptions.href=window.location.href),console.log(o[t].FBShareOptions),FB.ui(o[t].FBShareOptions,function(e){"function"==typeof o[t].FBShareOptions.callback&&o[t].FBShareOptions.callback(e,this)})},r._FBShareEle.push(o[t])},a=0;a<o.length;a++)s(a)}},{key:"shareEle",get:function(){return this._FBShareEle}}]),t}();r.default=o},{"element/element.property":2,"object/object.property":4}],4:[function(e,t,r){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.assign=function(){return function e(t){var r={};for(var n=0;n<t.length;n++)if("object"===a(t[n]))for(var o in t[n])if("object"!==a(t[n][o])||Array.isArray(t[n][o]))if(Array.isArray(t[n][o])){r[o]=[];for(var s=0;s<t[n][o].length;s++)"object"===a(t[n][o][s])?r[o].push(e([{},t[n][o][s]])):r[o].push(t[n][o][s])}else r[o]=t[n][o];else r[o]=e([r[o]?r[o]:{},t[n][o]]);return r}(arguments)}},{}]},{},[1]);
//# sourceMappingURL=test.js.map

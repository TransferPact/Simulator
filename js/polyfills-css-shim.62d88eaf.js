(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["polyfills-css-shim"],{a263:function(t,e){var r=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};function n(t){return i(o(t=s(t)),t)}function s(t){return t.replace(p.comments,"").replace(p.port,"")}function o(t){var e=new r;e.start=0,e.end=t.length;for(var n=e,s=0,o=t.length;s<o;s++)if(t[s]===c){n.rules||(n.rules=[]);var i=n,a=i.rules[i.rules.length-1]||null;(n=new r).start=s+1,n.parent=i,n.previous=a,i.rules.push(n)}else t[s]===l&&(n.end=s+1,n=n.parent||e);return e}function i(t,e){var r=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){var n=t.previous?t.previous.end:t.parent.start;r=(r=(r=a(r=e.substring(n,t.start-1))).replace(p.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var s=t.parsedSelector=t.selector=r.trim();t.atRule=0===s.indexOf(v),t.atRule?0===s.indexOf(h)?t.type=u.MEDIA_RULE:s.match(p.keyframesRule)&&(t.type=u.KEYFRAMES_RULE,t.keyframesName=t.selector.split(p.multipleSpaces).pop()):0===s.indexOf(f)?t.type=u.MIXIN_RULE:t.type=u.STYLE_RULE}var o=t.rules;if(o)for(var c=0,l=o.length,m=void 0;c<l&&(m=o[c]);c++)i(m,e);return t}function a(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}var u={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},c="{",l="}",p={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},f="--",h="@media",v="@";function m(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var d=/\bvar\(/,g=/\B--[\w-]+\s*:/,y=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,S=/^[\t ]+\n/gm;function b(t,e,r){return t[e]?t[e]:r?x(r,t):""}function E(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}function w(t,e){var r=m(d,t,e);if(!r)return null;var n=E(t,r.start),s=t.substring(r.end,n-1).split(","),o=s[0],i=s.slice(1);return{start:r.start,end:n,propName:o.trim(),fallback:i.length>0?i.join(",").trim():void 0}}function M(t,e,r){var n=w(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,o=null!=n.fallback?I(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return b(t,s,o)})),n.end}function x(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function k(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var o=t[s];if(r)n&&'"'===o&&(r=!1),n||"'"!==o||(r=!1);else if('"'===o)r=!0,n=!0;else if("'"===o)r=!0,n=!1;else{if(";"===o)return s+1;if("}"===o)return s}}return s}function C(t){for(var e="",r=0;;){var n=m(g,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=k(t,s)}return e}function I(t){var e=0;t=C(t=t.replace(y,"")).replace(S,"");for(var r=[];e<t.length;)e=M(t,r,e);return r}function R(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],s=x(t[1],r);s!==r[n]&&(r[n]=s,e=!0)})),!e)return"break"},o=0;o<10;o++)if("break"===s())break;return r}function A(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return t.type===u.STYLE_RULE})).forEach((function(t){var n=T(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:L(),nu:e})})),e++})),r}function L(t){return 1}var _="!important",O=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function T(t){for(var e,r=[];e=O.exec(t.trim());){var n=U(e[2]),s=n.value,o=n.important;r.push({prop:e[1].trim(),value:I(s),important:o})}return r}function U(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith(_);return e&&(t=t.substr(0,t.length-_.length).trim()),{value:t,important:e}}function N(t,e,r){var n=[],s=j(e,t);return r.forEach((function(t){return n.push(t)})),s.forEach((function(t){return n.push(t)})),G($(n).filter((function(e){return H(t,e.selector)})))}function j(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}function $(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function G(t){return t.sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),t}function H(t,e){return":root"===e||"html"===e||t.matches(e)}function P(t){var e=n(t),r=I(t);return{original:t,template:r,selectors:A(e),usesCssVars:r.length>1}}function V(t,e){if(t.some((function(t){return t.styleEl===e})))return!1;var r=P(e.textContent);return r.styleEl=e,t.push(r),!0}function Y(t){var e=R($(t));t.forEach((function(t){t.usesCssVars&&(t.styleEl.textContent=x(t.template,e))}))}function q(t,e){var r=t.template.map((function(r){return"string"==typeof r?F(r,t.scopeId,e):r})),n=t.selectors.map((function(r){return Object.assign(Object.assign({},r),{selector:F(r.selector,t.scopeId,e)})}));return Object.assign(Object.assign({},t),{template:r,selectors:n,scopeId:e})}function F(t,e,r){return B(t,"\\."+e,"."+r)}function B(t,e,r){return t.replace(new RegExp(e,"g"),r)}function W(t,e){return K(t,e),J(t,e).then((function(){Y(e)}))}function D(t,e){"undefined"!=typeof MutationObserver&&new MutationObserver((function(){K(t,e)&&Y(e)})).observe(document.head,{childList:!0})}function J(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(X(t,e,n[s]));return Promise.all(r)}function K(t,e){return Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map((function(t){return V(e,t)})).some(Boolean)}function X(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(s){if(Z(s)&&r.parentNode){tt(s)&&(s=et(s,n));var o=t.createElement("style");o.setAttribute("data-styles",""),o.textContent=s,V(e,o),r.parentNode.insertBefore(o,r),r.remove()}})).catch((function(t){console.error(t)}))}var z=/[\s;{]--[-a-zA-Z0-9]+\s*:/m;function Z(t){return t.indexOf("var(")>-1||z.test(t)}var Q=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;function tt(t){return Q.lastIndex=0,Q.test(t)}function et(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(Q,(function(t,e){var n=r+e;return t.replace(e,n)}))}var rt=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.i=function(){var t=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise((function(e){t.win.requestAnimationFrame((function(){D(t.doc,t.globalScopes),W(t.doc,t.globalScopes).then((function(){return e()}))}))})))},t.prototype.addLink=function(t){var e=this;return X(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){V(this.globalScopes,t)&&this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s=this.registerHostTemplate(r,e,n),o=this.doc.createElement("style");return o.setAttribute("data-no-shim",""),s.usesCssVars?n?(o["s-sc"]=e=s.scopeId+"-"+this.count,o.textContent="/*needs update*/",this.hostStyleMap.set(t,o),this.hostScopeMap.set(t,q(s,e)),this.count++):(s.styleEl=o,s.usesCssVars||(o.textContent=x(s.template,{})),this.globalScopes.push(s),this.updateGlobal(),this.hostScopeMap.set(t,s)):o.textContent=r,o},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=R(N(t,this.hostScopeMap,this.globalScopes));r.textContent=x(e.template,n)}}},t.prototype.updateGlobal=function(){Y(this.globalScopes)},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=P(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}();!function(t){!t||t.__cssshim||t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")||(t.__cssshim=new rt(t,t.document))}("undefined"!=typeof window&&window)}}]);
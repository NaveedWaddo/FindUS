var b=function(r,i){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])},b(r,i)};function m(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");b(r,i);function e(){this.constructor=r}r.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}var _=function(){return _=Object.assign||function(i){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}return i},_.apply(this,arguments)};function S(r,i){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&i.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(r);o<n.length;o++)i.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(e[n[o]]=r[n[o]]);return e}function g(r,i,e,n){function o(t){return t instanceof e?t:new e(function(u){u(t)})}return new(e||(e=Promise))(function(t,u){function c(f){try{a(n.next(f))}catch(y){u(y)}}function s(f){try{a(n.throw(f))}catch(y){u(y)}}function a(f){f.done?t(f.value):o(f.value).then(c,s)}a((n=n.apply(r,i||[])).next())})}function O(r,i){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},n,o,t,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(a){return function(f){return s([a,f])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(e=0)),e;)try{if(n=1,o&&(t=a[0]&2?o.return:a[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,a[1])).done)return t;switch(o=0,t&&(a=[a[0]&2,t.value]),a[0]){case 0:case 1:t=a;break;case 4:return e.label++,{value:a[1],done:!1};case 5:e.label++,o=a[1],a=[0];continue;case 7:a=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!t||a[1]>t[0]&&a[1]<t[3])){e.label=a[1];break}if(a[0]===6&&e.label<t[1]){e.label=t[1],t=a;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(a);break}t[2]&&e.ops.pop(),e.trys.pop();continue}a=i.call(r,e)}catch(f){a=[6,f],o=0}finally{n=t=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function d(r){var i=typeof Symbol=="function"&&Symbol.iterator,e=i&&r[i],n=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function x(r,i){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var n=e.call(r),o,t=[],u;try{for(;(i===void 0||i-- >0)&&!(o=n.next()).done;)t.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(e=n.return)&&e.call(n)}finally{if(u)throw u.error}}return t}function j(r,i,e){if(e||arguments.length===2)for(var n=0,o=i.length,t;n<o;n++)(t||!(n in i))&&(t||(t=Array.prototype.slice.call(i,0,n)),t[n]=i[n]);return r.concat(t||Array.prototype.slice.call(i))}function w(r){return this instanceof w?(this.v=r,this):new w(r)}function E(r,i,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(r,i||[]),o,t=[];return o={},u("next"),u("throw"),u("return"),o[Symbol.asyncIterator]=function(){return this},o;function u(l){n[l]&&(o[l]=function(h){return new Promise(function(p,v){t.push([l,h,p,v])>1||c(l,h)})})}function c(l,h){try{s(n[l](h))}catch(p){y(t[0][3],p)}}function s(l){l.value instanceof w?Promise.resolve(l.value.v).then(a,f):y(t[0][2],l)}function a(l){c("next",l)}function f(l){c("throw",l)}function y(l,h){l(h),t.shift(),t.length&&c(t[0][0],t[0][1])}}function I(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=r[Symbol.asyncIterator],e;return i?i.call(r):(r=typeof d=="function"?d(r):r[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(t){e[t]=r[t]&&function(u){return new Promise(function(c,s){u=r[t](u),o(c,s,u.done,u.value)})}}function o(t,u,c,s){Promise.resolve(s).then(function(a){t({value:a,done:c})},u)}}export{_,S as a,d as b,j as c,x as d,m as e,E as f,O as g,w as h,g as i,I as j};
//# sourceMappingURL=tslib.es6-16d17d01.js.map

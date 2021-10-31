this.wp=this.wp||{},this.wp.i18n=function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=9)}([function(t,n,e){"use strict";e.r(n),e.d(n,"defaultHooks",(function(){return h})),e.d(n,"createHooks",(function(){return p})),e.d(n,"addAction",(function(){return g})),e.d(n,"addFilter",(function(){return _})),e.d(n,"removeAction",(function(){return v})),e.d(n,"removeFilter",(function(){return m})),e.d(n,"hasAction",(function(){return y})),e.d(n,"hasFilter",(function(){return b})),e.d(n,"removeAllActions",(function(){return x})),e.d(n,"removeAllFilters",(function(){return F})),e.d(n,"doAction",(function(){return k})),e.d(n,"applyFilters",(function(){return A})),e.d(n,"currentAction",(function(){return w})),e.d(n,"currentFilter",(function(){return S})),e.d(n,"doingAction",(function(){return j})),e.d(n,"doingFilter",(function(){return I})),e.d(n,"didAction",(function(){return T})),e.d(n,"didFilter",(function(){return O})),e.d(n,"actions",(function(){return L})),e.d(n,"filters",(function(){return D}));var r=function(t){return"string"!=typeof t||""===t?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)},i=function(t){return"string"!=typeof t||""===t?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(t)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)},o=function(t,n){return function(e,o,s,u=10){const a=t[n];if(!i(e))return;if(!r(o))return;if("function"!=typeof s)return void console.error("The hook callback must be a function.");if("number"!=typeof u)return void console.error("If specified, the hook priority must be a number.");const c={callback:s,priority:u,namespace:o};if(a[e]){const t=a[e].handlers;let n;for(n=t.length;n>0&&!(u>=t[n-1].priority);n--);n===t.length?t[n]=c:t.splice(n,0,c),a.__current.forEach(t=>{t.name===e&&t.currentIndex>=n&&t.currentIndex++})}else a[e]={handlers:[c],runs:0};"hookAdded"!==e&&t.doAction("hookAdded",e,o,s,u)}},s=function(t,n,e=!1){return function(o,s){const u=t[n];if(!i(o))return;if(!e&&!r(s))return;if(!u[o])return 0;let a=0;if(e)a=u[o].handlers.length,u[o]={runs:u[o].runs,handlers:[]};else{const t=u[o].handlers;for(let n=t.length-1;n>=0;n--)t[n].namespace===s&&(t.splice(n,1),a++,u.__current.forEach(t=>{t.name===o&&t.currentIndex>=n&&t.currentIndex--}))}return"hookRemoved"!==o&&t.doAction("hookRemoved",o,s),a}},u=function(t,n){return function(e,r){const i=t[n];return void 0!==r?e in i&&i[e].handlers.some(t=>t.namespace===r):e in i}},a=function(t,n,e=!1){return function(r,...i){const o=t[n];o[r]||(o[r]={handlers:[],runs:0}),o[r].runs++;const s=o[r].handlers;if(!s||!s.length)return e?i[0]:void 0;const u={name:r,currentIndex:0};for(o.__current.push(u);u.currentIndex<s.length;){const t=s[u.currentIndex].callback.apply(null,i);e&&(i[0]=t),u.currentIndex++}return o.__current.pop(),e?i[0]:void 0}},c=function(t,n){return function(){var e,r;const i=t[n];return null!==(e=null===(r=i.__current[i.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==e?e:null}},l=function(t,n){return function(e){const r=t[n];return void 0===e?void 0!==r.__current[0]:!!r.__current[0]&&e===r.__current[0].name}},f=function(t,n){return function(e){const r=t[n];if(i(e))return r[e]&&r[e].runs?r[e].runs:0}};class d{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=o(this,"actions"),this.addFilter=o(this,"filters"),this.removeAction=s(this,"actions"),this.removeFilter=s(this,"filters"),this.hasAction=u(this,"actions"),this.hasFilter=u(this,"filters"),this.removeAllActions=s(this,"actions",!0),this.removeAllFilters=s(this,"filters",!0),this.doAction=a(this,"actions"),this.applyFilters=a(this,"filters",!0),this.currentAction=c(this,"actions"),this.currentFilter=c(this,"filters"),this.doingAction=l(this,"actions"),this.doingFilter=l(this,"filters"),this.didAction=f(this,"actions"),this.didFilter=f(this,"filters")}}var p=function(){return new d};const h=p(),{addAction:g,addFilter:_,removeAction:v,removeFilter:m,hasAction:y,hasFilter:b,removeAllActions:x,removeAllFilters:F,doAction:k,applyFilters:A,currentAction:w,currentFilter:S,doingAction:j,doingFilter:I,didAction:T,didFilter:O,actions:L,filters:D}=h},,function(t,n,e){t.exports=function(t,n){var e,r,i=0;function o(){var o,s,u=e,a=arguments.length;t:for(;u;){if(u.args.length===arguments.length){for(s=0;s<a;s++)if(u.args[s]!==arguments[s]){u=u.next;continue t}return u!==e&&(u===r&&(r=u.prev),u.prev.next=u.next,u.next&&(u.next.prev=u.prev),u.next=e,u.prev=null,e.prev=u,e=u),u.val}u=u.next}for(o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return u={args:o,val:t.apply(null,o)},e?(e.prev=u,u.next=e):r=u,i===n.maxSize?(r=r.prev).next=null:i++,e=u,u.val}return n=n||{},o.clear=function(){e=null,r=null,i=0},o}},function(t,n,e){var r;!function(){"use strict";var i={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function o(t){return u(c(t),arguments)}function s(t,n){return o.apply(null,[t].concat(n||[]))}function u(t,n){var e,r,s,u,a,c,l,f,d,p=1,h=t.length,g="";for(r=0;r<h;r++)if("string"==typeof t[r])g+=t[r];else if("object"==typeof t[r]){if((u=t[r]).keys)for(e=n[p],s=0;s<u.keys.length;s++){if(null==e)throw new Error(o('[sprintf] Cannot access property "%s" of undefined value "%s"',u.keys[s],u.keys[s-1]));e=e[u.keys[s]]}else e=u.param_no?n[u.param_no]:n[p++];if(i.not_type.test(u.type)&&i.not_primitive.test(u.type)&&e instanceof Function&&(e=e()),i.numeric_arg.test(u.type)&&"number"!=typeof e&&isNaN(e))throw new TypeError(o("[sprintf] expecting number but found %T",e));switch(i.number.test(u.type)&&(f=e>=0),u.type){case"b":e=parseInt(e,10).toString(2);break;case"c":e=String.fromCharCode(parseInt(e,10));break;case"d":case"i":e=parseInt(e,10);break;case"j":e=JSON.stringify(e,null,u.width?parseInt(u.width):0);break;case"e":e=u.precision?parseFloat(e).toExponential(u.precision):parseFloat(e).toExponential();break;case"f":e=u.precision?parseFloat(e).toFixed(u.precision):parseFloat(e);break;case"g":e=u.precision?String(Number(e.toPrecision(u.precision))):parseFloat(e);break;case"o":e=(parseInt(e,10)>>>0).toString(8);break;case"s":e=String(e),e=u.precision?e.substring(0,u.precision):e;break;case"t":e=String(!!e),e=u.precision?e.substring(0,u.precision):e;break;case"T":e=Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),e=u.precision?e.substring(0,u.precision):e;break;case"u":e=parseInt(e,10)>>>0;break;case"v":e=e.valueOf(),e=u.precision?e.substring(0,u.precision):e;break;case"x":e=(parseInt(e,10)>>>0).toString(16);break;case"X":e=(parseInt(e,10)>>>0).toString(16).toUpperCase()}i.json.test(u.type)?g+=e:(!i.number.test(u.type)||f&&!u.sign?d="":(d=f?"+":"-",e=e.toString().replace(i.sign,"")),c=u.pad_char?"0"===u.pad_char?"0":u.pad_char.charAt(1):" ",l=u.width-(d+e).length,a=u.width&&l>0?c.repeat(l):"",g+=u.align?d+e+a:"0"===c?d+a+e:a+d+e)}return g}var a=Object.create(null);function c(t){if(a[t])return a[t];for(var n,e=t,r=[],o=0;e;){if(null!==(n=i.text.exec(e)))r.push(n[0]);else if(null!==(n=i.modulo.exec(e)))r.push("%");else{if(null===(n=i.placeholder.exec(e)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){o|=1;var s=[],u=n[2],c=[];if(null===(c=i.key.exec(u)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(s.push(c[1]);""!==(u=u.substring(c[0].length));)if(null!==(c=i.key_access.exec(u)))s.push(c[1]);else{if(null===(c=i.index_access.exec(u)))throw new SyntaxError("[sprintf] failed to parse named argument key");s.push(c[1])}n[2]=s}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:n[0],param_no:n[1],keys:n[2],sign:n[3],pad_char:n[4],align:n[5],width:n[6],precision:n[7],type:n[8]})}e=e.substring(n[0].length)}return a[t]=r}n.sprintf=o,n.vsprintf=s,"undefined"!=typeof window&&(window.sprintf=o,window.vsprintf=s,void 0===(r=function(){return{sprintf:o,vsprintf:s}}.call(n,e,n,t))||(t.exports=r))}()},,,,,,function(t,n,e){"use strict";e.r(n),e.d(n,"sprintf",(function(){return a})),e.d(n,"createI18n",(function(){return m})),e.d(n,"defaultI18n",(function(){return x})),e.d(n,"setLocaleData",(function(){return k})),e.d(n,"resetLocaleData",(function(){return A})),e.d(n,"getLocaleData",(function(){return F})),e.d(n,"subscribe",(function(){return w})),e.d(n,"__",(function(){return S})),e.d(n,"_x",(function(){return j})),e.d(n,"_n",(function(){return I})),e.d(n,"_nx",(function(){return T})),e.d(n,"isRTL",(function(){return O})),e.d(n,"hasTranslation",(function(){return L}));var r=e(2),i=e.n(r),o=e(3),s=e.n(o);const u=i()(console.error);function a(t,...n){try{return s.a.sprintf(t,...n)}catch(n){return u("sprintf error: \n\n"+n.toString()),t}}var c,l,f,d;c={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},l=["(","?"],f={")":["("],":":["?","?:"]},d=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var p={"!":function(t){return!t},"*":function(t,n){return t*n},"/":function(t,n){return t/n},"%":function(t,n){return t%n},"+":function(t,n){return t+n},"-":function(t,n){return t-n},"<":function(t,n){return t<n},"<=":function(t,n){return t<=n},">":function(t,n){return t>n},">=":function(t,n){return t>=n},"==":function(t,n){return t===n},"!=":function(t,n){return t!==n},"&&":function(t,n){return t&&n},"||":function(t,n){return t||n},"?:":function(t,n,e){if(t)throw n;return e}};var h={contextDelimiter:"",onMissingKey:null};function g(t,n){var e;for(e in this.data=t,this.pluralForms={},this.options={},h)this.options[e]=void 0!==n&&e in n?n[e]:h[e]}g.prototype.getPluralForm=function(t,n){var e,r,i,o,s=this.pluralForms[t];return s||("function"!=typeof(i=(e=this.data[t][""])["Plural-Forms"]||e["plural-forms"]||e.plural_forms)&&(r=function(t){var n,e,r;for(n=t.split(";"),e=0;e<n.length;e++)if(0===(r=n[e].trim()).indexOf("plural="))return r.substr(7)}(e["Plural-Forms"]||e["plural-forms"]||e.plural_forms),o=function(t){var n=function(t){for(var n,e,r,i,o=[],s=[];n=t.match(d);){for(e=n[0],(r=t.substr(0,n.index).trim())&&o.push(r);i=s.pop();){if(f[e]){if(f[e][0]===i){e=f[e][1]||e;break}}else if(l.indexOf(i)>=0||c[i]<c[e]){s.push(i);break}o.push(i)}f[e]||s.push(e),t=t.substr(n.index+e.length)}return(t=t.trim())&&o.push(t),o.concat(s.reverse())}(t);return function(t){return function(t,n){var e,r,i,o,s,u,a=[];for(e=0;e<t.length;e++){if(s=t[e],o=p[s]){for(r=o.length,i=Array(r);r--;)i[r]=a.pop();try{u=o.apply(null,i)}catch(t){return t}}else u=n.hasOwnProperty(s)?n[s]:+s;a.push(u)}return a[0]}(n,t)}}(r),i=function(t){return+o({n:t})}),s=this.pluralForms[t]=i),s(n)},g.prototype.dcnpgettext=function(t,n,e,r,i){var o,s,u;return o=void 0===i?0:this.getPluralForm(t,i),s=e,n&&(s=n+this.options.contextDelimiter+e),(u=this.data[t][s])&&u[o]?u[o]:(this.options.onMissingKey&&this.options.onMissingKey(e,t),0===o?e:r)};const _={"":{plural_forms:t=>1===t?0:1}},v=/^i18n\.(n?gettext|has_translation)(_|$)/,m=(t,n,e)=>{const r=new g({}),i=new Set,o=()=>{i.forEach(t=>t())},s=(t,n="default")=>{r.data[n]={..._,...r.data[n],...t},r.data[n][""]={..._[""],...r.data[n][""]}},u=(t,n)=>{s(t,n),o()},a=(t="default",n,e,i,o)=>(r.data[t]||s(void 0,t),r.dcnpgettext(t,n,e,i,o)),c=(t="default")=>t,_x=(t,n,r)=>{let i=a(r,n,t);return e?(i=e.applyFilters("i18n.gettext_with_context",i,t,n,r),e.applyFilters("i18n.gettext_with_context_"+c(r),i,t,n,r)):i};if(t&&u(t,n),e){const t=t=>{v.test(t)&&o()};e.addAction("hookAdded","core/i18n",t),e.addAction("hookRemoved","core/i18n",t)}return{getLocaleData:(t="default")=>r.data[t],setLocaleData:u,resetLocaleData:(t,n)=>{r.data={},r.pluralForms={},u(t,n)},subscribe:t=>(i.add(t),()=>i.delete(t)),__:(t,n)=>{let r=a(n,void 0,t);return e?(r=e.applyFilters("i18n.gettext",r,t,n),e.applyFilters("i18n.gettext_"+c(n),r,t,n)):r},_x:_x,_n:(t,n,r,i)=>{let o=a(i,void 0,t,n,r);return e?(o=e.applyFilters("i18n.ngettext",o,t,n,r,i),e.applyFilters("i18n.ngettext_"+c(i),o,t,n,r,i)):o},_nx:(t,n,r,i,o)=>{let s=a(o,i,t,n,r);return e?(s=e.applyFilters("i18n.ngettext_with_context",s,t,n,r,i,o),e.applyFilters("i18n.ngettext_with_context_"+c(o),s,t,n,r,i,o)):s},isRTL:()=>"rtl"===_x("ltr","text direction"),hasTranslation:(t,n,i)=>{var o,s;const u=n?n+""+t:t;let a=!(null===(o=r.data)||void 0===o||null===(s=o[null!=i?i:"default"])||void 0===s||!s[u]);return e&&(a=e.applyFilters("i18n.has_translation",a,t,n,i),a=e.applyFilters("i18n.has_translation_"+c(i),a,t,n,i)),a}}};var y=e(0);const b=m(void 0,void 0,y.defaultHooks);var x=b;const F=b.getLocaleData.bind(b),k=b.setLocaleData.bind(b),A=b.resetLocaleData.bind(b),w=b.subscribe.bind(b),S=b.__.bind(b),j=b._x.bind(b),I=b._n.bind(b),T=b._nx.bind(b),O=b.isRTL.bind(b),L=b.hasTranslation.bind(b)}]);
!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=36)}({1:function(e,n){e.exports=require("path")},3:function(e,n){e.exports=require("fs")},36:function(e,n,t){t(37).config();let r={host:process.env.DB_HOST,user:process.env.DB_USER,password:process.env.DB_PASS,database:process.env.DB_NAME};e.exports=r},37:function(e,n,t){const r=t(3),o=t(1);function c(e){console.log("[dotenv][DEBUG] "+e)}const s=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,u=/\\n/g,i=/\n|\r|\r\n/;function l(e,n){const t=Boolean(n&&n.debug),r={};return e.toString().split(i).forEach((function(e,n){const o=e.match(s);if(null!=o){const e=o[1];let n=o[2]||"";const t=n.length-1,c='"'===n[0]&&'"'===n[t];"'"===n[0]&&"'"===n[t]||c?(n=n.substring(1,t),c&&(n=n.replace(u,"\n"))):n=n.trim(),r[e]=n}else t&&c(`did not match key and value when parsing line ${n+1}: ${e}`)})),r}e.exports.config=function(e){let n=o.resolve(process.cwd(),".env"),t="utf8",s=!1;e&&(null!=e.path&&(n=e.path),null!=e.encoding&&(t=e.encoding),null!=e.debug&&(s=!0));try{const e=l(r.readFileSync(n,{encoding:t}),{debug:s});return Object.keys(e).forEach((function(n){Object.prototype.hasOwnProperty.call(process.env,n)?s&&c(`"${n}" is already defined in \`process.env\` and will not be overwritten`):process.env[n]=e[n]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=l}}));
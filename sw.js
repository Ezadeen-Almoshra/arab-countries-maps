if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const f=e=>i(e,t),l={module:{uri:t},exports:o,require:f};s[t]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-74962447.css",revision:null},{url:"assets/index-9d365be9.js",revision:null},{url:"index.html",revision:"c473b0dc7c5d32588f95ffe2e11bffe4"},{url:"registerSW.js",revision:"9c005e5ee84e9fedaa006e3b017bb308"},{url:"apple-touch-icon.png",revision:"a33743818f1d4b988a8ad454ffe90411"},{url:"maskable_icon.png",revision:"8ec4094fa5eff03557f1fcc175516594"},{url:"manifest.webmanifest",revision:"4f04be3a1244db04b036853330311e20"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
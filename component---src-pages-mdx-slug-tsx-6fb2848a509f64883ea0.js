(self.webpackChunkfrontend_basic_2022_textbook=self.webpackChunkfrontend_basic_2022_textbook||[]).push([[342],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function i(t,r,l){return o()?(e.exports=i=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),i=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||i(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2186:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(3050),o=r(9698),i=r(7294),l=r(7826);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var u=["htmlWidth","htmlHeight","alt"],s=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=i.forwardRef((function(e,t){var r=e.htmlWidth,n=e.htmlHeight,o=e.alt,l=c(e,u);return i.createElement("img",a({width:r,height:n,ref:t,alt:o},l))})),d=(0,n.Gp)((function(e,t){var r=e.fallbackSrc,u=e.fallback,d=e.src,p=e.srcSet,m=e.align,v=e.fit,x=e.loading,g=e.ignoreFallback,b=e.crossOrigin,h=c(e,s),y=null!=x||g||void 0===r&&void 0===u,O=function(e){var t=e.loading,r=e.src,n=e.srcSet,o=e.onLoad,a=e.onError,c=e.crossOrigin,u=e.sizes,s=e.ignoreFallback,f=(0,i.useState)("pending"),d=f[0],p=f[1];(0,i.useEffect)((function(){p(r?"loading":"pending")}),[r]);var m=(0,i.useRef)(),v=(0,i.useCallback)((function(){if(r){x();var e=new Image;e.src=r,c&&(e.crossOrigin=c),n&&(e.srcset=n),u&&(e.sizes=u),t&&(e.loading=t),e.onload=function(e){x(),p("loaded"),null==o||o(e)},e.onerror=function(e){x(),p("failed"),null==a||a(e)},m.current=e}}),[r,c,n,u,o,a,t]),x=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,l.a)((function(){if(!s)return"loading"===d&&v(),function(){x()}}),[d,v,s]),s?"loaded":d}(a({},e,{ignoreFallback:y})),E=a({ref:t,objectFit:v,objectPosition:m},y?h:(0,o.CE)(h,["onError","onLoad"]));return"loaded"!==O?u||i.createElement(n.m$.img,a({as:f,className:"chakra-image__placeholder",src:r},E)):i.createElement(n.m$.img,a({as:f,src:d,srcSet:p,crossOrigin:b,loading:x,className:"chakra-image"},E))}));o.Ts&&(d.displayName="Image");var p=r(6541),m=r(4983),v=r(1274),x=r(8172),g=function(e){var t,r,n,o,l,a,c,u,s,f,d,g,h,y,O,E,_,j=e.data;return i.createElement(x.Z,null,i.createElement(p.X6,null,null===(t=j.mdx)||void 0===t||null===(r=t.frontmatter)||void 0===r?void 0:r.title),i.createElement(p.xu,{textAlign:"right"},"最終更新: ",null===(n=j.mdx)||void 0===n||null===(o=n.frontmatter)||void 0===o?void 0:o.date),(null===(l=j.mdx)||void 0===l||null===(a=l.frontmatter)||void 0===a?void 0:a.pathToStory)&&i.createElement("iframe",{src:"https://"+(null===(c=j.site)||void 0===c||null===(u=c.siteMetadata)||void 0===u?void 0:u.exampleCommitHash)+"--"+(null===(s=j.site)||void 0===s||null===(f=s.siteMetadata)||void 0===f?void 0:f.exampleChromaticAppId)+".chromatic.com/?path="+(null===(d=j.mdx)||void 0===d||null===(g=d.frontmatter)||void 0===g?void 0:g.pathToStory)+"&viewMode=story&shortcuts=false&singleStory=true",width:"800",height:"400"}),(null===(h=j.mdx)||void 0===h||null===(y=h.frontmatter)||void 0===y?void 0:y.figmaNodeId)&&i.createElement("iframe",{height:"450",width:"800",src:"https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/"+(null===(O=j.site)||void 0===O||null===(E=O.siteMetadata)||void 0===E?void 0:E.figmaIdAndFilename)+"?node-id="+j.mdx.frontmatter.figmaNodeId}),i.createElement(m.MDXProvider,{components:b},i.createElement(v.MDXRenderer,null,(null===(_=j.mdx)||void 0===_?void 0:_.body)||"")))},b={h1:function(e){return i.createElement(p.X6,e)},h2:function(e){return i.createElement(p.xv,Object.assign({fontSize:"3xl"},e))},h3:function(e){return i.createElement(p.xv,Object.assign({fontSize:"2xl"},e))},h4:function(e){return i.createElement(p.xv,Object.assign({fontSize:"xl"},e))},h5:function(e){return i.createElement(p.xv,Object.assign({fontSize:"lg"},e))},h6:function(e){return i.createElement(p.xv,Object.assign({fontSize:"lg"},e))},p:function(e){return i.createElement(p.xv,Object.assign({fontSize:"md"},e))},ul:function(e){return i.createElement(p.QI,e)},ol:function(e){return i.createElement(p.GS,e)},li:function(e){return i.createElement(p.HC,Object.assign({fontSize:"lg"},e))},code:function(e){return i.createElement(p.EK,e)},inlineCode:function(e){return i.createElement(p.EK,e)},del:function(e){return i.createElement(p.xv,Object.assign({as:"del"},e))},strong:function(e){return i.createElement(p.xv,Object.assign({as:"strong"},e))},img:function(e){return i.createElement(d,e)},a:function(e){return i.createElement(p.rU,e)}}},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),o=r(319),i=r(9713),l=r(7316),a=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),f=r(4983).mdx,d=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=l(e,a),c=d(t),p=s.useMemo((function(){if(!r)return null;var e=u({React:s,mdx:f},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,t]);return s.createElement(p,u({},i))}}}]);
//# sourceMappingURL=component---src-pages-mdx-slug-tsx-6fb2848a509f64883ea0.js.map
(this.webpackJsonpkokomo=this.webpackJsonpkokomo||[]).push([[10],{102:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(102);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},105:function(e,t,n){"use strict";var r=n(26),a=n(25),o=n.n(a);t.a=function e(){var t=this;Object(r.a)(this,e),this.createProperty=function(e){return t.service.post("/create-property",e).then((function(e){return e.data}))},this.uploadPicture=function(e){return t.service.post("/upload",e).then((function(e){return e.data}))},this.editProperty=function(e,n){return t.service.post("/edit/"+e,n).then((function(e){return e.data}))},this.allProperties=function(){return t.service.get("/").then((function(e){return e.data}))},this.categoryProperties=function(e){return t.service.get("/category/"+e).then((function(e){return e.data}))},this.propertyDetails=function(e){return t.service.get("/details/"+e).then((function(e){return e.data}))},this.propertyLove=function(e){return t.service.get("/love/"+e).then((function(e){return e.data}))},this.addComment=function(e,n){return t.service.post("/add-comment/"+e,n).then((function(e){return e.data}))},this.deleteProperty=function(e){return t.service.get("/delete/"+e).then((function(e){return e.data}))};var n=o.a.create({baseURL:"https://kokomo-react.herokuapp.com/api/property",withCredentials:!0});this.service=n}},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(19);var a=n(29);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(0),o=u(a),i=u(n(8)),c=u(n(113)),l=u(n(114));function u(e){return e&&e.__esModule?e:{default:e}}var s={overflow:"hidden",position:"relative"};function f(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function d(e){var t=(0,a.useState)(""),n=r(t,2),i=n[0],u=n[1],d=(0,a.useState)(0),p=r(d,2),m=p[0],v=p[1],h=(0,a.useState)([]),b=r(h,2),g=b[0],y=b[1],x=(0,a.useState)(!1),w=r(x,2),E=w[0],O=w[1],j=(0,c.default)(e),k=r(j,2),S=k[0],I=k[1],N=(0,a.useState)(0),P=r(N,2),M=P[0],C=P[1],z=(0,a.useState)(!1),H=r(z,2),A=H[0],_=H[1],D=(0,a.useState)(""),T=r(D,2),F=T[0],L=T[1];function R(e){"undefined"===typeof e&&(e=S.isHalf?Math.floor(m):Math.round(m));for(var t=[],n=0;n<S.count;n++)t.push({active:n<=e-1});return t}function U(e){if(S.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(S.isHalf){var n=B(e);_(n),n&&(t+=1),C(t)}else t+=1;!function(e){var t=g.filter((function(e){return e.active}));e!==t.length&&y(R(e))}(t)}}function B(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left;return(n=Math.round(Math.abs(n)))>t.width/2}function K(){S.edit&&(q(m),y(R()))}function q(e){S.isHalf&&(_(function(e){return e%1===0}(e)),C(Math.floor(e)))}function J(e){if(S.edit){var t=Number(e.currentTarget.getAttribute("data-index")),n=void 0;if(S.isHalf){var r=B(e);_(r),r&&(t+=1),n=r?t:t+.5,C(t)}else n=t+=1;X(n)}}function X(t){t!==m&&(y(R(t)),v(t),e.onChange(t))}return(0,a.useEffect)((function(){var t,n;L(e.classNames+" react-stars"),t=e.value,n=e.count,v(t<0||t>n?0:t),y(R(e.value)),I(e),u((Math.random()+"").replace(".","")),O(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),C(Math.floor(e.value)),_(e.isHalf&&e.value%1<.5)}),[]),o.default.createElement("div",{className:"react-stars-wrapper-"+i,style:{display:"flex"}},o.default.createElement("div",{tabIndex:S.a11y&&S.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(S.a11y||S.edit){var t=e.key,n=m,r=Number(t);r?Number.isInteger(r)&&r>0&&r<=S.count&&(n=r):("ArrowUp"===t||"ArrowRight"===t)&&n<S.count?(e.preventDefault(),n+=S.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&n>.5&&(e.preventDefault(),n-=S.isHalf?.5:1),q(n),X(n)}},className:F,style:s},S.isHalf&&function(){return o.default.createElement("style",{dangerouslySetInnerHTML:{__html:E?(e=S.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):f(S.activeColor,i)}});var e}(),g.map((function(e,t){return o.default.createElement(l.default,{key:t,index:t,active:e.active,config:S,onMouseOver:U,onMouseLeave:K,onClick:J,halfStarHidden:A,halfStarAt:M,isUsingIcons:E,uniqueness:i})})),o.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},m)))}d.propTypes={classNames:i.default.string,edit:i.default.bool,half:i.default.bool,value:i.default.number,count:i.default.number,char:i.default.string,size:i.default.number,color:i.default.string,activeColor:i.default.string,emptyIcon:i.default.element,halfIcon:i.default.element,filledIcon:i.default.element,a11y:i.default.bool},d.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.default=d},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,a.useState)(e.count),n=r(t,2),o=n[0],i=n[1],c=(0,a.useState)(e.size),l=r(c,2),u=l[0],s=l[1],f=(0,a.useState)(e.char),d=r(f,2),p=d[0],m=d[1],v=(0,a.useState)(e.color),h=r(v,2),b=h[0],g=h[1],y=(0,a.useState)(e.activeColor),x=r(y,2),w=x[0],E=x[1],O=(0,a.useState)(e.isHalf),j=r(O,2),k=j[0],S=j[1],I=(0,a.useState)(e.edit),N=r(I,2),P=N[0],M=N[1],C=(0,a.useState)(e.emptyIcon),z=r(C,2),H=z[0],A=z[1],_=(0,a.useState)(e.halfIcon),D=r(_,2),T=D[0],F=D[1],L=(0,a.useState)(e.filledIcon),R=r(L,2),U=R[0],B=R[1],K=(0,a.useState)(e.a11y),q=r(K,2),J=q[0],X=q[1];return[{count:o,size:u,char:p,color:b,activeColor:w,isHalf:k,edit:P,emptyIcon:H,halfIcon:T,filledIcon:U,a11y:J},function(e){i(e.count),s(e.size),m(e.char),g(e.color),E(e.activeColor),S(e.isHalf),M(e.edit),A(e.emptyIcon),F(e.halfIcon),B(e.filledIcon),X(e.a11y)}]};var a=n(0)},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=e.index,n=e.active,a=e.config,o=e.onMouseOver,l=e.onMouseLeave,u=e.onClick,s=e.halfStarHidden,f=e.halfStarAt,d=e.isUsingIcons,p=e.uniqueness,m=a.color,v=a.activeColor,h=a.size,b=a.char,g=a.isHalf,y=a.edit,x=a.halfIcon,w=a.emptyIcon,E=a.filledIcon,O="",j=!1;g&&!s&&f===t&&(O=d?"react-stars-half":"react-stars-"+p,j=!0);var k=r({},c,{color:n?v:m,cursor:y?"pointer":"default",fontSize:h+"px"});return i.default.createElement("span",{className:O,style:k,key:t,"data-index":t,"data-forhalf":E?t:b,onMouseOver:o,onMouseMove:o,onMouseLeave:l,onClick:u},d?n?E:!n&&j?x:w:b)};var a,o=n(0),i=(a=o)&&a.__esModule?a:{default:a};var c={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},115:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n(15),a=n(11);function o(){var e=Object(r.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 0;\n  overflow: scroll;\n  padding: 20px;\n\n  .property-card {\n    width: 45vw;\n    padding: 14px;\n    margin-top: -60px;\n\n    img {\n      width: 100%;\n      height: 50vw;\n      object-fit: cover;\n      border-radius: 20px;\n    }\n\n    .blur-image {\n      position: relative;\n      top: -58vw;\n      z-index: -1;\n      filter: blur(10px);\n      opacity: 0.5;\n      margin-bottom: -60vw;\n    }\n\n    h3 {\n      font-family: europa, sans-serif;\n      font-weight: 800;\n      color: #809eaa;\n      font-size: 18px;\n      margin-top: -10px;\n      padding-bottom: 10px;\n    }\n\n    p {\n      color: #809eaa;\n      font-weight: 200;\n      font-size: 14px;\n    }\n  }\n\n  @media all and (min-width: 768px) {\n    padding: 20px 0 40px 0;\n\n    .property-card {\n      width: 30vw;\n      padding: 20px;\n\n      img {\n        height: 18vw;\n        border-radius: 40px;\n      }\n\n      .blur-image {\n        position: relative;\n        top: -40vw;\n        z-index: -1;\n        filter: blur(10px);\n        opacity: 0.5;\n        margin-bottom: -60vw;\n      }\n\n      h3 {\n        font-size: 22px;\n        padding-top: 10px;\n      }\n\n      p {\n        color: #809eaa;\n        font-weight: 200;\n        font-size: 16px;\n      }\n    }\n  }\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 20px;\n  overflow: scroll;\n  padding: 0 0 50px 20px;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    width: 90px;\n    background-color: ",";\n    border-radius: 80px;\n    padding: 12px;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    transition: all ease 0.3s;\n\n    &:hover {\n      background-color: #2f8aaf;\n      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n    }\n\n    p {\n      color: white;\n      font-size: 14px;\n      padding-top: 10px;\n      padding-bottom: 14px;\n    }\n\n    img {\n      width: 100%;\n      background-color: white;\n      border-radius: 100%;\n      padding: 16px;\n      box-shadow: 0 0 10px #106688;\n    }\n  }\n\n  @media all and (min-width: 768px) {\n    width: 560px;\n    overflow: hidden;\n  }\n"]);return i=function(){return e},e}var c=a.c.div(i(),(function(e){return e.theme.colors.blue})),l=a.c.div(o())},116:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n(15),a=n(11);function o(){var e=Object(r.a)(["\n  font-size: 24px;\n  font-family: ",";\n  color: ",";\n  font-weight: 700;\n  text-align: ",";\n  padding-left: 20px;\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n  color: ",";\n  font-family: ",";\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(50, 148, 187, 0.1);\n  margin-bottom: 20px !important;\n  text-align: ",";\n  font-size: 26px;\n\n  i {\n    font-size: 26px;\n  }\n"]);return i=function(){return e},e}var c=a.c.h1(i(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.fonts.text}),(function(e){return e.center?"center":"left"})),l=a.c.h2(o(),(function(e){return e.theme.fonts.text}),(function(e){return e.theme.colors.darkText}),(function(e){return e.center?"center":"left"}))},125:function(e,t,n){"use strict";var r=n(109),a=n(103),o=n(27),i=n(0),c=n.n(i),l=n(105),u=n(111),s=n.n(u),f=function(e){var t={size:12,count:5,color:"#ffba69",activeColor:"#ffba69",a11y:!0,isHalf:!0,emptyIcon:c.a.createElement("i",{className:"far fa-star"}),halfIcon:c.a.createElement("i",{className:"fa fa-star-half-alt",style:{color:"#ffba69"}}),filledIcon:c.a.createElement("i",{className:"fa fa-star"}),edit:!1,value:e.rate};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex"},c.a.createElement(s.a,t),c.a.createElement("p",{className:"text-review"},e.numberReviews>=1?"(".concat(e.numberReviews,")"):"")))},d=n(115),p=n(14),m=function(e){var t=e.property;return c.a.createElement("div",{className:"property-card"},c.a.createElement("a",{onClick:function(){return e.handleFavourite(t._id)}},c.a.createElement("span",{className:"fa-stack fa-2x float-right heart-home"},c.a.createElement("i",{className:"fas fa-circle fa-stack-2x orange-80"}),c.a.createElement("i",{className:e.heartKokomo}))),c.a.createElement(p.b,{to:"/property/".concat(t._id)},c.a.createElement("img",{src:t.mainImage,alt:t.name}),c.a.createElement("img",{src:t.mainImage,className:"blur-image",alt:t.name})),c.a.createElement(p.b,{to:"/property/".concat(t._id)},c.a.createElement("div",{className:"flex-md-row justify-content-between align-items-baseline"},c.a.createElement("h3",null,t.name),e.ratingProperty),c.a.createElement("p",{className:"mdi mdi-map-marker-radius"}," ",t.location.name)))},v=new l.a,h={properties:[],favourites:[]};t.a=function(e){var t,n=Object(i.useState)(h),l=Object(o.a)(n,2),u=l[0],s=l[1];Object(i.useEffect)((function(){"All"===e.filter?v.allProperties().then((function(e){s((function(t){return Object(a.a)(Object(a.a)({},t),{},{favourites:e[1],properties:e[0]})}))})):"Favourites"===e.filter?v.allProperties().then((function(e){var t=e[1],n=e[0],r=[];n.map((function(e){return t.includes(e._id)&&r.push(e),r})),s((function(e){return Object(a.a)(Object(a.a)({},e),{},{favourites:t,properties:r})}))})):v.categoryProperties(e.filter).then((function(e){s((function(t){return Object(a.a)(Object(a.a)({},t),{},{favourites:e[1],properties:e[0]})}))}))}),[e]);var p=function(e){v.propertyLove(e).then((function(t){var n=Object(r.a)(u.favourites);n.push(e),s(Object(a.a)(Object(a.a)({},u),{},{favourites:n}))}))};if(u.properties.length>=1){var b=u.properties.map((function(e,t){var n="far fa-heart fa-stack-1x fa-inverse";u.favourites&&u.favourites.includes(e._id)&&(n="fas fa-heart fa-stack-1x fa-inverse");var r=c.a.createElement(c.a.Fragment,null);if(e.rating){var a=e.rating.counter,o=0;if(a.length){o=parseFloat((a.reduce((function(e,t){return e+t}),0)/a.length).toFixed(2))}r=c.a.createElement(f,{rate:o,numberReviews:a.length})}return c.a.createElement(m,{key:t,property:e,handleFavourite:p,ratingProperty:r,heartKokomo:n})}));t=c.a.createElement(d.a,null,b)}else t="Favourites"===e.filter?c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:"/images/broken-heart.png",className:"black-white",alt:"Sin favoritos"}),c.a.createElement("p",null,"Todav\xeda no tienes favoritos")):c.a.createElement("div",{className:"mb-5"},c.a.createElement("img",{src:"/images/"+e.filter+".png",className:"black-white",alt:e.filter}),c.a.createElement("p",null,"Todav\xeda no hay locales en la categoria ",e.filter));return c.a.createElement(c.a.Fragment,null,t)}},141:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(14),i=n(115);t.a=function(){var e=["Surfer","Restaurant","Chillout","Bar","Disco"].map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement(o.b,{to:"/category/".concat(e)},a.a.createElement("img",{src:"/images/".concat(e,".png"),alt:e}),a.a.createElement("p",null,e)))}));return a.a.createElement(i.b,null,e)}},231:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(125),i=n(141),c=n(116);t.default=function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"home-container",style:{paddingBottom:"80px"}},a.a.createElement("div",{className:"hero"},a.a.createElement("h2",{className:"hero-title"},"Inicio")),a.a.createElement(i.a,null),a.a.createElement("div",{className:""},a.a.createElement(c.a,null,"Nuestros chiringuitos"),a.a.createElement(o.a,{filter:"All"}),a.a.createElement(c.a,null,"Estilo chillout"),a.a.createElement(o.a,{filter:"Chillout"}),a.a.createElement(c.a,null,"Los mejores restaurantes"),a.a.createElement(o.a,{filter:"Restaurante"}))))}}}]);
//# sourceMappingURL=10.4e384f58.chunk.js.map
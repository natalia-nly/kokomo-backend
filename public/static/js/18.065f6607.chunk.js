(this.webpackJsonpkokomo=this.webpackJsonpkokomo||[]).push([[18],{102:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},120:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},124:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return function(){var t,n=r(e);if(o()){var a=r(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return c(this,t)}}n.d(t,"a",(function(){return u}))},126:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},220:function(e,t,n){"use strict";n.r(t),n.d(t,"Login",(function(){return f}));var r=n(102),o=n(26),a=n(120),c=n(126),u=n(124),i=n(0),s=n.n(i),l=n(28),f=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t={user:a.state.user,password:a.state.password};a.service.login(t.user,t.password).then((function(e){a.setState({user:"",password:""}),a.props.callback(e),a.props.history.push("/")})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.state={user:"",password:""},a.service=new l.a,a}return Object(a.a)(n,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"row align-middle  justify-content-center p-4",style:{minHeight:"100vh"}},s.a.createElement("div",{className:"col-sm-12 col-md-4 align-self-center"},s.a.createElement("h2",{className:"hero-title text-center mb-4"},"Iniciar sesi\xf3n"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"user",className:"label active"},"Nombre de usuario"),s.a.createElement("input",{type:"text",name:"user",value:this.state.user,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"password",className:"label active"},"Contrase\xf1a"),s.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),s.a.createElement("button",{type:"submit",className:"btn-kokomo btn-kokomo-success btn-block p-3"},"Iniciar sesi\xf3n")),s.a.createElement("a",{href:"https://kokomo-react.herokuapp.com/api/auth/google",className:"btn-kokomo btn-kokomo-google btn-block p-3 mt-4"}," ",s.a.createElement("img",{src:"/images/google.svg",alt:"Google logo",style:{width:"20px",marginRight:"8px"}})," ","Iniciar sesi\xf3n con Google"))))}}]),n}(i.Component);t.default=f}}]);
//# sourceMappingURL=18.065f6607.chunk.js.map
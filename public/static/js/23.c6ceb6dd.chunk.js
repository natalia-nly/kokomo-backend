(this.webpackJsonpkokomo=this.webpackJsonpkokomo||[]).push([[23],{102:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(102);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},123:function(e,t,n){"use strict";var r=n(26),a=n(25),o=n.n(a);t.a=function e(){var t=this;Object(r.a)(this,e),this.createBooking=function(e,n){return t.service.post("/create-booking/"+e,n).then((function(e){return e.data}))},this.myBookings=function(){return t.service.get("/my-bookings").then((function(e){return e.data}))},this.propertiesBookings=function(){return t.service.get("/my-properties-bookings").then((function(e){return e.data}))},this.bookingDetails=function(e){return t.service.get("/details/"+e).then((function(e){return e.data}))},this.deleteBooking=function(e){return t.service.post("/delete/"+e).then((function(e){return e.data}))};var n=o.a.create({baseURL:"https://kokomo-react.herokuapp.com/api/booking",withCredentials:!0});this.service=n}},236:function(e,t,n){"use strict";n.r(t);var r=n(103),a=n(27),o=n(0),i=n.n(o),c=n(14),s=new(n(123).a),u={booking:{bookingRef:"",day:"",time:"",guests:0,customer:{username:""}}};t.default=function(e){var t=Object(o.useState)(u),n=Object(a.a)(t,2),l=n[0],m=n[1];return Object(o.useEffect)((function(){s.bookingDetails(e.match.params.bookingId).then((function(e){m((function(t){return Object(r.a)(Object(r.a)({},t),{},{booking:e})}))}))}),[e.match.params.bookingId]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container text-center d-flex align-items-center justify-content-center",style:{height:"90vh"}},i.a.createElement("div",null,i.a.createElement("img",{src:"/images/3.png",className:"emoji-img",alt:"Reserva creada"}),i.a.createElement("h2",{className:"subtitle-landing text-center mb-3"},"\xa1Reserva creada con \xe9xito!"),i.a.createElement("p",null,i.a.createElement("i",{className:"far fa-calendar-alt"})," D\xeda: ",l.booking.day),i.a.createElement("p",null,i.a.createElement("i",{className:"far fa-clock"})," Hora: ",l.booking.time),i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-users"})," N\xfamero de personas:"," ",l.booking.guests),i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-users"})," A nombre de:"," ",l.booking.customer.username),i.a.createElement("a",{href:"whatsapp://send?text=\xa1Te espera una reserva de Kokomo! \ud83d\ude0e Aqu\xed tienes los detalles: http://kokomo-react.herokuapp.com/booking/details/"+l.booking._id,className:"btn-kokomo btn-kokomo-grey mt-4 p-3 mr-4"},"Compartir reserva por WhatsApp"),i.a.createElement(c.b,{to:"/",className:"btn-kokomo btn-kokomo-grey mt-4 p-3"},"Volver a inicio"))))}}}]);
//# sourceMappingURL=23.c6ceb6dd.chunk.js.map
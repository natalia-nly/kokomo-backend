(this.webpackJsonpkokomo=this.webpackJsonpkokomo||[]).push([[21],{105:function(e,a,t){"use strict";var n=t(26),c=t(25),r=t.n(c);a.a=function e(){var a=this;Object(n.a)(this,e),this.createProperty=function(e){return a.service.post("/create-property",e).then((function(e){return e.data}))},this.uploadPicture=function(e){return a.service.post("/upload",e).then((function(e){return e.data}))},this.editProperty=function(e,t){return a.service.post("/edit/"+e,t).then((function(e){return e.data}))},this.allProperties=function(){return a.service.get("/").then((function(e){return e.data}))},this.categoryProperties=function(e){return a.service.get("/category/"+e).then((function(e){return e.data}))},this.propertyDetails=function(e){return a.service.get("/details/"+e).then((function(e){return e.data}))},this.propertyLove=function(e){return a.service.get("/love/"+e).then((function(e){return e.data}))},this.addComment=function(e,t){return a.service.post("/add-comment/"+e,t).then((function(e){return e.data}))},this.deleteProperty=function(e){return a.service.get("/delete/"+e).then((function(e){return e.data}))};var t=r.a.create({baseURL:"https://kokomo-react.herokuapp.com/api/property",withCredentials:!0});this.service=t}},109:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(19);var c=t(29);function r(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},122:function(e,a,t){"use strict";var n=t(26),c=t(25),r=t.n(c);a.a=function e(){var a=this;Object(n.a)(this,e),this.searchLocation=function(e){return a.service.get("/maps?search="+e).then((function(e){return e.data}))},this.getAvailability=function(e){return a.service.post("/getAvailability",e).then((function(e){return e.data}))},this.getPropertyAvailability=function(e,t){return a.service.post("/getAvailability/"+e,t).then((function(e){return e.data}))};var t=r.a.create({baseURL:"https://kokomo-react.herokuapp.com/api/search",withCredentials:!0});this.service=t}},149:function(e,a,t){"use strict";var n=t(27),c=t(102),r=t(0),l=t.n(r),o=t(225),i=t(110),s=t(107),m=t(246),u=t(229),p=t(241),d=(t(167),t(170)),g=t.n(d),b=t(169),v=t.n(b),f=t(171),h=t.n(f),E=t(228),y=t(238),N=t(230);Object(o.a)({root:{color:"#eaeaf0",display:"flex",height:22,alignItems:"center"},active:{color:"#784af4"},circle:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"},completed:{color:"#784af4",zIndex:1,fontSize:18}});var k=Object(i.a)({alternativeLabel:{top:22},active:{"& $line":{backgroundImage:"linear-gradient( 95deg,#ffba69 0%,#ffba69 50%,#ffba69 100%)"}},completed:{"& $line":{backgroundImage:"linear-gradient( 95deg,#ffba69 0%,#ffba69 50%,#ffba69 100%)"}},line:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1}})(E.a),j=Object(o.a)({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},active:{backgroundImage:"linear-gradient( 136deg, #ffba69 0%, #ec9834 50%, #cc7309 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},completed:{backgroundImage:"linear-gradient( 136deg, #ffba69 0%, #ec9834 50%, #cc7309 100%)"}});function D(e){var a,t=j(),n=e.active,r=e.completed,o={1:l.a.createElement(v.a,null),2:l.a.createElement(g.a,null),3:l.a.createElement(h.a,null)};return l.a.createElement("div",{className:Object(s.a)(t.root,(a={},Object(c.a)(a,t.active,n),Object(c.a)(a,t.completed,r),a))},o[String(e.icon)])}var O=Object(o.a)((function(e){return{root:{width:"100%"},button:{marginRight:e.spacing(1)},buttonActive:{backgroundColor:"#3294bb",color:"#ffffff"},buttonSuccess:{backgroundColor:"#28a745",color:"#ffffff"},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));a.a=function(e){var a=O(),t=l.a.useState(0),c=Object(n.a)(t,2),r=c[0],o=c[1],i=e.stepsTitles;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:a.root},l.a.createElement(m.a,{alternativeLabel:!0,activeStep:r,connector:l.a.createElement(k,null)},i.map((function(e,a){return l.a.createElement(u.a,{key:a},l.a.createElement(p.a,{StepIconComponent:D},e))}))),l.a.createElement("div",null,r===i.length?l.a.createElement("div",null,l.a.createElement(N.a,{className:a.instructions,component:"div"},"All steps completed - you're finished"),l.a.createElement(y.a,{onClick:function(){o(0)},className:a.button},"Reset")):l.a.createElement("div",null,l.a.createElement(N.a,{className:a.instructions,component:"div"},function(a){switch(a){case 0:return e.allSteps[0];case 1:return e.allSteps[1];case 2:return e.allSteps[2];default:return"Unknown step"}}(r)),l.a.createElement("div",{className:"text-center mt-5"},l.a.createElement(y.a,{disabled:0===r,onClick:function(){o((function(e){return e-1}))},className:a.button},"Anterior"),r===i.length-1?l.a.createElement(y.a,{variant:"contained",color:"#3294bb",onClick:e.handleSubmit,className:a.buttonSuccess},"Crear propiedad"):l.a.createElement(y.a,{variant:"contained",onClick:function(){o((function(e){return e+1}))},className:a.buttonActive},"Siguiente"))))))}},224:function(e,a,t){"use strict";t.r(a);var n=t(102),c=t(103),r=t(109),l=t(27),o=t(0),i=t.n(o),s=t(14),m=t(3),u=t(149),p=t(122),d=new(t(105).a),g=new p.a,b={name:"",description:"",categories:[],mainImage:null,location:{name:"",lat:0,long:0},openingHours:[{openingDays:{openingDay:null,closingDay:null},weekDays:[],openingTimes:[{openingTime:0,closingTime:0}]}],bookingDuration:0,availablePlaces:0};a.default=function(){var e=Object(m.g)(),a=Object(o.useState)(b),t=Object(l.a)(a,2),p=t[0],v=t[1],f=function(e){v(Object(c.a)(Object(c.a)({},p),{},Object(n.a)({},e.target.name,e.target.value)))},h=function(e){var a=Object(r.a)(p.openingHours);if(a[0].weekDays.includes(parseInt(e.target.value))){var t=a[0].weekDays.indexOf(parseInt(e.target.value));a[0].weekDays.splice(t,1)}else a[0].weekDays.push(parseInt(e.target.value));v(Object(c.a)(Object(c.a)({},p),{},{openingHours:a}))},E=[i.a.createElement("p",null,"Datos principales"),i.a.createElement("p",null,"Horarios"),i.a.createElement("p",null,"El local")],y=[i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"name",className:"label active"},"Nombre"),i.a.createElement("input",{type:"text",name:"name",value:p.name,onChange:f})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"imageUrl",className:"label active"},"Imagen"),i.a.createElement("input",{type:"file",name:"imageUrl",onChange:function(e){e.preventDefault();var a=new FormData;a.append("mainImage",e.target.files[0]),d.uploadPicture(a).then((function(e){v(Object(c.a)(Object(c.a)({},p),{},{mainImage:e.path}))}))}}))),i.a.createElement("div",{className:"col-sm-12 col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"description",className:"label active"},"Descripci\xf3n"),i.a.createElement("input",{type:"textarea",name:"description",value:p.description,onChange:f})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"categories",className:"label active"},"Categor\xeda"),i.a.createElement("input",{list:"categories",type:"categories",id:"input-categories",name:"categories",onChange:f}),i.a.createElement("datalist",{id:"categories"},i.a.createElement("option",{value:"Chillout"}),i.a.createElement("option",{value:"Surfer"}),i.a.createElement("option",{value:"Restaurante"}),i.a.createElement("option",{value:"Discoteca"}),i.a.createElement("option",{value:"Bar"})))))),i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"openingDay",className:"label active"},"D\xeda de apertura"),i.a.createElement("input",{type:"date",name:"openingDay",value:p.openingHours[0].openingDays.openingDay,onChange:function(e){var a=Object(r.a)(p.openingHours);a[0].openingDays.openingDay=e.target.value,v(Object(c.a)(Object(c.a)({},p),{},{openingHours:a}))}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"closingDay",className:"label active"},"D\xeda de cierre"),i.a.createElement("input",{type:"date",name:"closingDay",value:p.openingHours[0].openingDays.closingDay,onChange:function(e){var a=Object(r.a)(p.openingHours);a[0].openingDays.closingDay=e.target.value,v(Object(c.a)(Object(c.a)({},p),{},{openingHours:a}))}})),i.a.createElement("h6",null,"D\xedas de la semana"),i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"row mt-3"},i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"custom-control custom-checkbox"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:"monday",value:1,onChange:h}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"monday"},"Lunes")),i.a.createElement("div",{className:"custom-control custom-checkbox"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:"tuesday",value:2,onChange:h}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"tuesday"},"Martes")),i.a.createElement("div",{className:"custom-control custom-checkbox"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:"wednesday",value:3,onChange:h}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"wednesday"},"Mi\xe9rcoles")),i.a.createElement("div",{className:"custom-control custom-checkbox"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:"thursday",value:4,onChange:h}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"thursday"},"Jueves"))),i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"custom-control custom-checkbox"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:"friday",value:5,onChange:h}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"friday"},"Viernes")),i.a.createElement("div",{className:"custom-control custom-checkbox"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:"saturday",value:6,onChange:h}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"saturday"},"S\xe1bado")),i.a.createElement("div",{className:"custom-control custom-checkbox"},i.a.createElement("input",{type:"checkbox",className:"custom-control-input",name:"sunday",value:0,onChange:h}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"sunday"},"Domingo")))))),i.a.createElement("div",{className:"col-sm-12 col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"openingHours",className:"label active"},"Hora de apertura"),i.a.createElement("input",{type:"number",name:"openingHours",value:p.openingHours[0].openingTimes[0].openingTime,onChange:function(e){var a=Object(r.a)(p.openingHours);a[0].openingTimes[0].openingTime=e.target.value,v(Object(c.a)(Object(c.a)({},p),{},{openingHours:a}))}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"closingHours",className:"label active"},"Hora de cierre"),i.a.createElement("input",{type:"number",name:"closingHours",value:p.openingHours[0].openingTimes[0].closingTime,onChange:function(e){var a=Object(r.a)(p.openingHours);a[0].openingTimes[0].closingTime=e.target.value,v(Object(c.a)(Object(c.a)({},p),{},{openingHours:a}))}}))))),i.a.createElement("div",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"bookingDuration",className:"label active"},"Duraci\xf3n de la reserva (en minutos)"),i.a.createElement("input",{type:"number",name:"bookingDuration",value:p.bookingDuration,onChange:f})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"availablePlaces",className:"label active"},"Plazas"),i.a.createElement("input",{type:"number",name:"availablePlaces",value:p.availablePlaces,onChange:f}))),i.a.createElement("div",{className:"col-sm-12 col-md-6"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g.searchLocation(p.search).then((function(e){v(Object(c.a)(Object(c.a)({},p),{},{search:e.candidates[0].name,location:{lat:e.candidates[0].geometry.location.lat,long:e.candidates[0].geometry.location.lng,name:e.candidates[0].formatted_address}}))}))},className:"d-flex"},i.a.createElement("div",{className:"form-group",style:{width:"80%"}},i.a.createElement("label",{htmlFor:"search",className:"label active"},"Direcci\xf3n"),i.a.createElement("input",{type:"text",name:"search",value:p.search,onChange:f})),i.a.createElement("div",{style:{width:"20%"}},i.a.createElement("input",{type:"submit",value:"Buscar",className:"btn-kokomo-flex",style:{padding:"19px"}}))),i.a.createElement("p",null,"Candidato: ",p.search),i.a.createElement("p",null,"Direcci\xf3n:",p.location.name),i.a.createElement("p",null,"Latitud:",p.location.lat),i.a.createElement("p",null,"Longitud:",p.location.long))))];return i.a.createElement("div",{className:"container mt-4"},i.a.createElement(s.b,{to:"/"},i.a.createElement("div",null,i.a.createElement("span",{className:"fa-stack fa-2x kokomo-back-button"},i.a.createElement("i",{className:"fas fa-circle fa-stack-2x circle-back"}),i.a.createElement("i",{className:"fas fa-arrow-left fa-stack-1x fa-inverse arrow-back"})))),i.a.createElement("div",{className:"hero"},i.a.createElement("h2",{className:"hero-title text-center"},"Crea tu local")),i.a.createElement(u.a,{allSteps:y,stepsTitles:E,handleSubmit:function(a){a.preventDefault();var t={name:p.name,description:p.description,categories:p.categories,location:{name:p.location.name,lat:p.location.lat,long:p.location.long},openingHours:Object(r.a)(p.openingHours),bookingDuration:p.bookingDuration,availablePlaces:p.availablePlaces,mainImage:p.mainImage};d.createProperty(t).then((function(a){e.push("/")})).catch((function(e){return console.log(e)}))}}))}}}]);
//# sourceMappingURL=21.38d44a1a.chunk.js.map
(function(e){function a(a){for(var i,t,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)t=c[d],Object.prototype.hasOwnProperty.call(o,t)&&o[t]&&u.push(o[t][0]),o[t]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,t=1;t<n.length;t++){var c=n[t];0!==o[c]&&(i=!1)}i&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},t={app:0},o={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"bf23a3ae","chunk-0206bfa0":"19e627b7","chunk-0b10f9b9":"3464eacd","chunk-0d02006a":"8682c2b3","chunk-10d7dd5c":"77c9f33d","chunk-13a6037e":"bc4a7747","chunk-205221e7":"393cbf4b","chunk-2c06842c":"240a2c67","chunk-2d0e96ec":"4202c5b1","chunk-2d208d90":"ba617cdc","chunk-2d21d0e2":"275bafae","chunk-2d22c123":"201a0862","chunk-2d4cff20":"a3a5a5fb","chunk-2e80bb9a":"0bbe883c","chunk-2fdc87ee":"04da17b6","chunk-4ef72cd9":"ee9e3ef1","chunk-515a8379":"e44b9dd5","chunk-5309f94e":"afe1e9cc","chunk-53ccb27e":"89c08622","chunk-59974754":"097ff323","chunk-60a150e8":"19866687","chunk-69444b4c":"231cd994","chunk-6e1e538a":"9ec4e050","chunk-7d598149":"0c3dcd72","chunk-a71bdd78":"da971c7e","chunk-c796899c":"4b1d8612","chunk-cda87f0a":"8b2458f0","chunk-e8a7823a":"97ab883b",comple:"fc568415",creditos:"2a34ab4c",glosario:"dc1fd162",intro:"1686ada9",referencias:"1f55dd9c",sintesis:"171f9655",tema1:"a6c6837c",tema2:"4cf5f7bb",tema3:"07499404",tema4:"a9af4463"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0b10f9b9":1,"chunk-0d02006a":1,"chunk-10d7dd5c":1,"chunk-205221e7":1,"chunk-2d4cff20":1,"chunk-4ef72cd9":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60a150e8":1,"chunk-6e1e538a":1,"chunk-7d598149":1,"chunk-a71bdd78":1,"chunk-cda87f0a":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0b10f9b9":"e71cb334","chunk-0d02006a":"24e1ecfe","chunk-10d7dd5c":"e71cb334","chunk-13a6037e":"31d6cfe0","chunk-205221e7":"e71cb334","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d4cff20":"e71cb334","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-4ef72cd9":"e71cb334","chunk-515a8379":"2461ad71","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"3d9b55b1","chunk-60a150e8":"e71cb334","chunk-69444b4c":"31d6cfe0","chunk-6e1e538a":"d2f45819","chunk-7d598149":"e71cb334","chunk-a71bdd78":"e71cb334","chunk-c796899c":"31d6cfe0","chunk-cda87f0a":"5d24a906","chunk-e8a7823a":"31d6cfe0",comple:"2fe25149",creditos:"2b97ce89",glosario:"c82abfef",intro:"31d6cfe0",referencias:"860c9d49",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",o=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===o))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===i||d===o)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete t[e],m.parentNode.removeChild(m),n(r)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){t[e]=0})));var i=o[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,n){i=o[e]=[a,n]}));a.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+t+")",u.name="ChunkLoadError",u.type=i,u.request=t,n[1](u)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"1e70":function(e,a,n){"use strict";n("c5df")},"294d":function(e,a,n){"use strict";n("9ea8")},"3ed5":function(e,a,n){e.exports=n.p+"img/img03.58a7abad.svg"},"4e7e":function(e,a,n){},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},o=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,t,o,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("section",{staticClass:"inicio"},[i("BannerPrincipal2",{staticClass:"mb-5"}),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5 mb-5",attrs:{id:"contenidos"}},[e._m(0),i("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[i("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(a){return i("router-link",{key:"desarrollo-"+a.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:a.nombreRuta}}},[i("div",{staticClass:"desarrollo-contenidos__item__texto"},[a.hasOwnProperty("numero")?i("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(a.numero))]):i("i",{staticClass:"desarrollo-contenidos__item__icono",class:a.icono}),i("span",{domProps:{innerHTML:e._s(a.titulo)}})]),i("a",{staticClass:"boton--sm"},[i("span",{staticClass:"d-none d-md-block text-white"},[e._v("Ver contenido")]),i("span",{staticClass:"d-md-none"},[e._v("Ver")])])])})),1)])]),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro creditos-inicio px-3 py-4 px-sm-5"},[e.creditosInicio?i("div",{staticClass:"creditos-inicio__container"},e._l(e.creditosInicio,(function(a,n){return i("div",{staticClass:"creditos-inicio__item"},[i("div",{staticClass:"row"},[i("div",{staticClass:"creditos-inicio__titulo col-md-3 col-lg-2 mb-3 mb-md-0"},[i("h5",{staticClass:"mb-0",domProps:{innerHTML:e._s(a.titulo)}})]),i("div",{staticClass:"creditos-inicio__imagenes col"},e._l(a.contenido,(function(e){return i("img",{attrs:{src:e}})})),0)]),n!=e.creditosInicio.length-1?i("hr"):e._e()])})),0):i("div",{staticClass:"text-center"},[i("img",{staticClass:"d-inline-block mb-2",staticStyle:{width:"100px"},attrs:{src:n("9eb5")}}),i("h5",{staticClass:"mb-0"},[e._v("Ecosistema de recursos educativos digitales")])])]),i("Footer")],1)},p=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"titulo__template--a mb-4"},[n("h3",[e._v("Desarrollo"),n("br"),e._v("de contenidos")])])}],b=n("2909"),g=(n("99af"),n("4de4"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"banner-principal"},[n("div",{staticClass:"container tarjeta",style:{"background-image":e.globalData.fondoBannerPrincipal?"url("+e.globalData.fondoBannerPrincipal+")":"none"}},[n("div",{staticClass:"row banner-principal__row"},[n("div",{staticClass:"col-lg-7 col-xxl-5 ps-4 ps-sm-5 py-4 py-sm-5 banner-principal__info"},[e._m(0),e._m(1),n("div",{staticClass:"banner-principal__componente"},[n("h1",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.componenteFormativo)}})]),n("div",{staticClass:"banner-principal__descripcion"},[e._m(2),n("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})]),n("div",{staticClass:"banner-principal__accion"},[n("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[n("span",{staticClass:"me-1 text-white"},[e._v("Ver más")]),n("i",{staticClass:"fas fa-angle-right text-white"})])],1)]),n("div",{staticClass:"d-none d-lg-block col-lg-5 px-0 banner-principal__img"},[n("div",{staticClass:"contenedor-imagenes"},[n("img",{attrs:{src:e.globalData.imagenBannerPrincipal}})])])])])])}),v=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_1"},[i("img",{attrs:{src:n("c705")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_2"},[i("img",{attrs:{src:n("fd30")}})])},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"imagen_flotante_3"},[i("img",{attrs:{src:n("3ed5")}})])}],h=(n("7db0"),n("25f0"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),{computed:{menuData:function(){return this.$config.menuPrincipal.menu},iniciarLnk:function(){var e=this.menuData.find((function(e){return"introduccion"===e.nombreRuta})),a=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return e||a}},methods:{quitarAcentos:function(e){var a={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return e.split("").map((function(e){return a[e]||e})).join("").toString()}}}),_={name:"BannerPrincipal",mixins:[h],computed:{globalData:function(){return this.$config.global}}},C=_,k=(n("a12e"),Object(s["a"])(C,g,v,!1,null,null,null)),y=k.exports,R=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[e._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[e._v(" Base v"+e._s(e.versiones.base)+" - Paquete v"+e._s(e.versiones.pkg))])])])])},P=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"col-auto mb-2 mb-sm-0"},[i("img",{attrs:{src:n("52e5")}})])}],S={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},j=S,D=(n("294d"),Object(s["a"])(j,R,P,!1,null,null,null)),M=D.exports,x={name:"Inicio",components:{BannerPrincipal2:y,Footer:M},computed:{menuPrincipalData:function(){return this.$config.menuPrincipal},creditosInicio:function(){return this.$config.creditosInicio},desarrolloContenidosData:function(){var e=[].concat(Object(b["a"])(this.menuPrincipalData.menu),Object(b["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},w=x,E=(n("1e70"),Object(s["a"])(w,f,p,!1,null,null,null)),A=E.exports,O=n("7e58");u["a"].use(m["a"]);var T=new m["a"]({routes:[{path:"/",name:"inicio",component:A},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:O["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),I=T,q=n("1c2c"),z=(n("a3a0"),{global:{componenteFormativo:"Atención PQRS",descripcionCurso:"Peticiones, Quejas y Reclamos, orienta la investigación prospectiva de la sensibilidad de los clientes respecto de los servicios prestados mediante procedimientos y normas establecidos. PQR establece los parámetros de mejora continua del proceso, definiendo cuales son las áreas de oportunidad de mejora de los procesos, su logística, registro y seguimiento. Estos lineamientos estipulan el paso a paso del proceso en PQR.",fondoBannerPrincipal:n("9df6")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Manejo de PQRS",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Atención de peticiones, quejas y reclamos",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Manejo de sugerencias y recomendaciones",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Valoración de las felicitaciones",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Caracterización del servicio",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Servicios y solicitudes en Aeromensajería",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Portafolio de servicios, canales y trazabilidad",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Factores de atención al cliente",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Diferencia entre servicio, atención y experiencia de cliente",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Ciclo de servicio al cliente",hash:"t_3_2"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Estrategias de servicio al cliente",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Ejecutar procedimiento de manejo de PQRS",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Ciclo del sistema de PQRS",hash:"t_4_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Arellano Días, H.O. (2017). La calidad en el Servicio como Ventaja Competitiva. Dialnet, 3,11. Obtenido de",link:"https://dialnet.unirioja.es/servlet/articulo?codigo=6093282"},{referencia:"García, A. (2016). Cultura del Servicio en la Optimización del Servicio al Cliente. Telos. Obtenido de",link:"https://www.redalyc.org/pdf/993/99346931003.pdf"},{referencia:"Programa Nacional de Servicio al Ciudadano. (2016). Criterios Normativos para peticiones, quejas, reclamos, solicitudes y denuncias.  Obtenido de",link:"https://colaboracion.dnp.gov.co/CDT/Programa%20Nacional%20del%20Servicio%20al%20Ciudadano/CRITERIOS%20NORMATIVOS%20PARA%20PQRSD%20V2.pdf"}],glosario:[{termino:"Anónimo",significado:"Emisión de solicitudes sin autor explícito o identificado."},{termino:"Atención",significado:"Acción que ejecutan las entidades a través de los canales dispuestos para recibir solicitudes de información, trámites y servicios."},{termino:"Atención electrónica",significado:"Servicio prestado a través de la comunicación recibida por correo electrónico."},{termino:"Calidad",significado:"Criterio con cual se mide el grado de satisfacción de una persona por un servicio o bien prestado."},{termino:"Ciclo del Servicio",significado:"Cadena formada por todos los momentos de verdad que un cliente ha vivido."},{termino:"Digital",significado:"Conversión de un documento en una representación de imagen."},{termino:"Digitalización",significado:"Hacer uso de herramienta ofimática para escanear un documento y conservarla en medio digital."},{termino:"Encomienda",significado:"Recepción de objetos postales no urgentes o mercancías de libre circulación en el territorio nacional o internacional."},{termino:"Estrategia",significado:"Técnica organizacional para desarrollar actividades en pro de mejorar un proceso."},{termino:"Felicitación",significado:"Expresión de agradecimiento o satisfacción"},{termino:"Gestión",significado:"Acciones encaminadas a resolver una situación."},{termino:"Guía",significado:"Documento soporte de envío que contiene los datos del remitente y el destinatario."},{termino:"Mensajería Express",significado:"Servicios postales de connotación urgente que requiere aplicación de características especiales para la recepción."},{termino:"Misión",significado:"Objetivos generales definidos para lograr crecimiento de una organización."},{termino:"Momento de Verdad",significado:"Puntos más importantes de unión entre el cliente y la empresa."},{termino:"Notificación Judicial",significado:"Acto procesal a través del cual se informa a las partes vinculadas a un proceso las decisiones tomadas."},{termino:"Peticionario",significado:"Persona jurídica o natural que requiere un servicio."},{termino:"PQRS",significado:"Abreviatura de petición, queja, reclamo o sugerencia."},{termino:"Rastreo",significado:"Seguimiento al envío desde su origen hasta el destino y entrega."},{termino:"Servicio",significado:"Conjunto de acciones previamente establecidas dirigidos a brindar satisfacción a una persona."},{termino:"Trazabilidad",significado:"Hacer seguimiento a un proceso"}],complementario:[{texto:"Hernández, W. (2017) Factores que intervienen en la atención al cliente.",tipo:"Video",link:"https://www.youtube.com/watch?v=TF569oAM5yc"},{texto:"Procedimiento de la PQR aplicable a los servicios postales",tipo:"PDF",descarga:["/downloads/Tramite_PQR.pdf"]}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gloria Liliana García Marín",cargo:"Experta Temática",centro:"Centro Industrial del Diseño y la Manufactura Regional SantanderRegional Norte de Santander - Centro de la Industria, la Empresa y los Servicios"},{nombre:"Zvi Daniel Grosman",cargo:"Diseñador Instruccional",centro:"Regional Tolima – Centro Agropecuario “La Granja”"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Evaluadora instruccional",centro:"Regional distrito capital- Centro de gestión industrial"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Corrección de estilo",centro:"Centro de Diseño y Metrología - Distrito capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"María Natalia Maldonado Delgado",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Jaime Enrique Díaz Reyes",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Carmen Alicia Martínez Torres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Erika Viviana Sandoval Rojas",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Carlos Mauricio Gómez Delgado",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});i["a"].prototype.$config=z;var $=n("9224");i["a"].prototype.$package=$,new i["a"]({router:I,store:q["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"5.1.1","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"4.0.3","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9df6":function(e,a,n){e.exports=n.p+"img/fondo-banner.cd822120.svg"},"9ea8":function(e,a,n){},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a12e:function(e,a,n){"use strict";n("4e7e")},a3a0:function(e,a,n){},c5df:function(e,a,n){},c705:function(e,a,n){e.exports=n.p+"img/img01.ddf610ae.svg"},fd30:function(e,a,n){e.exports=n.p+"img/img02.428410b6.svg"}});
//# sourceMappingURL=app.b66b86b5.js.map
<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 2 
          h1 Caracterización de Servicio 
    
    p Atender un cliente, sin distinción de la organización, tiene como objetivo primario orientarlo en la utilización del servicio, adquisición del bien o transacción requerida, para el caso de servicios postales, atención al cliente está principalmente enfocada a la movilización de elementos con origen y/o destino. Es cliente quién envía y es cliente quién recibe. 
    p Los factores que intervienen en la atención al cliente con calidad son:
    br
    .col-10.esp3
      img(src="@/assets/curso/tema2/vec1.svg")
    br  
    .row.mb-5.d-flex.align-items-center
      .col.col-12.col-lg-8.pt-5.pos2
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Los factores de servicio al cliente son acciones generan diferenciación y esta diferenciación se refleja en el mercado, el mercado cada día es más competente y para permanecer en el medio se debe generar diferenciación del servicio y atención, no generar procesos de fidelización genera grandes costos y menos participación en el mercado, los factores de atención al cliente hacen parte de la raíz de la organización y no estar atentos a este componente organizacional genera perdida de cliente y se abre camino a la competencia.
            i.fas.fa-quote-right
          .bloque-texto-d__autor
            .h5.mb-0 (Arellano Díaz, 2017)
    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Servicios y solicitudes en Aeromensajería

    P Los servicios postales en Aeromensajería, sin guardar mayor diferencia a la mensajería terrestre, desde la mirada de la atención del cliente están determinados de la siguiente manera:
    SlyderD(:datos="datosSlyder")

    .row.mb-5
      .col.col-12.col-lg-8.pt-5
        p En cada una de las etapas, el usuario debe obtener por parte del servicio de Aeromensajería orientación del estado del trámite y el correcto procesamiento de este, la esencia del servicio al cliente es la información y esta se encuentra soportada en los documentos generados, los cuales tienen por objeto regular o estandarizar procesos en la prestación de los servicios.
        p En la actualidad las empresas usan como principal herramienta la tecnología de la información y hoy día por normativa, las empresas de servicios postales y transporte de mercancías deben disponer de herramientas ofimáticas que les permita hacer seguimiento a los envíos postales, una de las principales herramientas son las APP, aplicaciones que permiten facilitar la resolución de tareas, actividades o gestiones del día a día, estas herramientas el usuario las instala en el equipo móvil o tableta y a través de ellas se puede hacer  el seguimiento al correo o paquete, ingresando código de despacho. 
      .col.col-12.col-lg-4.position-relative
        .sobre-flotante-t3
          img.w-50(src='@/assets/curso/banner/img04.svg', class='img-fluid')
        picture
          img(src='@/assets/curso/tema2/1.png', alt='Ubicación de mercancía', class='img-fluid')
    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Portafolio de servicios, canales y trazabilidad

    p Documento que contiene la presentación de una organización o compañía, en él se detalla la oferta comercial, sea de productos o servicios, las características de estos, el portafolio también contiene la misión, visión, políticas, principios, valores, certificaciones y normas e incluso se puede referir los nombres de clientes y empresas con la que se tienen relaciones comerciales. 
    p Una empresa de servicios postales y transporte de mercancías oferta dentro de su <b>portafolio de servicios</b> lo siguiente:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.p-4(titulo="Cintas transportadoras de banda")
        .row.mb-1.d-flex
          .col.col-12.col-lg-4.pt-2
            picture
              img(src='@/assets/curso/tema2/2.png', alt='Cintas transportadoras de banda', class='img-fluid')
          .col.col-12.col-lg-8.pt-2
            h5 Logística de documentos
            ol.lista-ol
              li 
                span.text-bold a. 
                | Servicio Postal para correos certificados.
              li 
                span.text-bold b. 
                | Correspondencia prioritario normal.
              li 
                span.text-bold c. 
                | Correspondencia no prioritaria normal.
              li 
                span.text-bold d. 
                | Postexpress.
              li 
                span.text-bold e. 
                | Al día.
              li 
                span.text-bold f. 
                | Cecogramas.

      .tarjeta.p-4(titulo="Cinta transportadora de rodillos")
        .row.mb-1.d-flex
          .col.col-12.col-lg-4.pt-2
            picture
              img(src='@/assets/curso/tema2/3.png', alt='Cinta transportadora de rodillos', class='img-fluid')
          .col.col-12.col-lg-8.pt-2
            h5 Servicios
            ol.lista-ol
              li 
                span.text-bold a. 
                | Custodia.
              li 
                span.text-bold b. 
                | Notificaciones electrónicas.
              li 
                span.text-bold c. 
                | Automatización de procesos.
              li 
                span.text-bold d. 
                | Procesamiento de información.

      .tarjeta.p-4(titulo="Grúas aéreas")
        .row.mb-1.d-flex
          .col.col-12.col-lg-4.pt-2
            picture
              img(src='@/assets/curso/tema2/4.png', alt='Grúas aéreas', class='img-fluid')
          .col.col-12.col-lg-8.pt-2
            h5 Paquetería
            ol.lista-ol
              li 
                span.text-bold a. 
                | Correo masivo básico.
              li 
                span.text-bold b. 
                | Correo masivo estándar.
              li 
                span.text-bold c. 
                | Masivo dirigido expreso.

      .tarjeta.p-4(titulo="Transelevadores")
        .row.mb-1.d-flex
          .col.col-12.col-lg-4.pt-2
            picture
              img(src='@/assets/curso/tema2/5.png', alt='Transelevadores', class='img-fluid')
          .col.col-12.col-lg-8.pt-2
            h5  Envíos Internacionales
            ol.lista-ol
              li 
                span.text-bold a. 
                | Correo internacional certificado.
              li 
                span.text-bold b. 
                | Correo internacional no certificado.
              li 
                span.text-bold c. 
                | Express Time.
              li 
                span.text-bold d. 
                | Sacas M.
                
    p Cada una de las empresas de servicios postales y transporte de mercancías, aplica diferentes procesos en órdenes específicos dentro de sus organizaciones para atender a sus clientes buscando su satisfacción, de allí, se derivan los portafolios de servicios, sus canales de atención y su trazabilidad.
    p Ya visto los portafolios de servicios, los siguientes conceptos serían:


    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Los Canales de distribución" :icono="require('@/assets/curso/tema2/vec3.svg')")
        .row
          .col-12
            p Los Canales de distribución, del que hacen uso las empresas de servicios postales y transporte de mercancías y los cuales son de vital importancia para la operación y cumplimiento de la promesa de valor para con sus clientes y se dividen en:
        .row.col-10.pos3      
          .col.col-10.col-lg-4
            .tarjeta.p-4(style='background-color: #FFDE96')
              img.img100.mb-4(src='@/assets/curso/tema2/vec2.svg', alt='', class='img-fluid')
              p.margtx3 <b>Canal Convencional,</b> dirigido al público general o usuarios tradicionales.
          .col.col-10.col-lg-4
            .tarjeta.p-4(style='background-color: #FFEECA')
              img.img100.mb-4(src='@/assets/curso/tema2/vec2.svg', alt='', class='img-fluid')
              p.margtx3 <b>Canal Especializado</b> (depende del tipo y característica de los objetos postales y las mercancías)
          .col.col-10.col-lg-4
            .tarjeta.p-4(style='background-color: #FFDE96')
              img.img100.mb-4(src='@/assets/curso/tema2/vec2.svg', alt='', class='img-fluid')
              p <b>Canal Institucional</b> dirigido a clientes oficiales que realizan ventas institucionales, generalmente son restaurantes, colegios, clubes, hoteles. 


      .py-4.py-md-5(titulo="La trazabilidad" :icono="require('@/assets/curso/tema2/vec4.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 La trazabilidad
          .row
            p La trazabilidad, en servicios postales y transporte de mercancías debe ser constante, todas las empresas que prestan este servicio deben garantizar a los clientes tanto remitente como destinatario, la posibilidad de hacer seguimiento a los envíos desde el momento que entrega el paquete o correo hasta el momento de la entrega, así mismos debe dejar registros tanto físicos como digitales del envío realizado y el servicio prestado.  
            p El disponer de un software que permita este proceso mejora el servicio al cliente, mejora la productividad y la realización de entregas de forma más rápida y con menos errores. Estas son sus ventajas:
          <br>
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span <i>Ventajas de la trazabilidad</i>
        img.col-8.pos3(src='@/assets/curso/tema2/vec5.svg')


    .cajon.color-primario.bg-3-claro.p-4.mb-4.col-12
      p Recordemos que las empresas de servicios postales y transportes de mercancías deben conservar los archivos de los envíos realizados y esto lo debe hacer tanto en físico y conservarlo por tres años como mínimo y digital



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    datosSlyder: [
      {
        texto:
          '<b>Selección del proveedor de servicios:</b> Tiempo de entrega, facilidad de acceso, especialidad, precio y confianza. Esta última de las más importantes.',
        imagen: require('@/assets/curso/tema2/1.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<b>Uso de la plataforma de diligenciamiento de solicitud del servicio.</b>',
        imagen: require('@/assets/curso/tema2/2.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<b>Obtener la agenda de movilización del objeto a procesar en servicio postal.</b>',
        imagen: require('@/assets/curso/tema2/3.jpg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto: '<b>Entrega del objeto postal al proveedor de servicio.</b>',
        imagen: require('@/assets/curso/tema2/4.jpg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          '<b>Recepción en destino final del objeto postal por parte del orientado por el originador contratante del servicio.</b>',
        imagen: require('@/assets/curso/tema2/5.jpg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

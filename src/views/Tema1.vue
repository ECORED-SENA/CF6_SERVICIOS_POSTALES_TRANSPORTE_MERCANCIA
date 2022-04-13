<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.d-flex.justify-content-center.g-5
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 1
          h1 Manejo de PQR

      .row.mb-5
        .col.col-12.col-lg-8.pt-5
          p El proceso de manejo de PQR permite a las organizaciones mejorar las estrategias de atención que se da al cliente, la atención de las solicitudes de forma oportuna genera empatía, además permite conocer los intereses de los distintos grupos objetivos, así afianzar los servicios ofrecidos trazando la ruta hacia una atención al cliente eficiente.
          p Dar un enfoque adecuado al proceso optimiza la capacidad de registro de las solicitudes recibidas, mejora la interacción con los clientes y el equipo de trabajo responsable de dar atención a los requerimientos, la implementación del proceso PQR tiene como objeto primordial suplir necesidades de comunicación frente a la atención prestada ya sea en empresas de carácter público o privado. 
          p La automatización organizacional del proceso PQR genera grandes beneficios entre los que podemos contar:
        .col.col-12.col-lg-4.position-relative
          .sobre-flotante-t3
            img.w-50(src='@/assets/curso/banner/img04.svg', class='img-fluid')
          picture
            img(src='@/assets/curso/tema1/img01.png', alt='Ubicación de mercancía', class='img-fluid')

      .row.mb-4
        ul.lista-ul.lista-ul.lista-ul--color
          li 
            i.fas.fa-paper-plane 
            span Mejora la imagen y la percepción, ofreciendo la atención con sistemas avanzados y a través de herramientas ofimáticas

          li 
            i.fas.fa-paper-plane 
            span Reduce costos al disminuir congestiones 

          li 
            i.fas.fa-paper-plane 
            span Disminuye en gran porcentaje la emisión de documentos escritos

          li 
            i.fas.fa-paper-plane 
            span Reduce tiempos de llamadas telefónicas

          li 
            i.fas.fa-paper-plane 
            span Se aumenta el seguimiento y control de atención a las PQR
            
          li 
            i.fas.fa-paper-plane 
            span Se dispone de un mejor canal de comunicación
    
      
    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      span Beneficio Automatización Proceso PQR
        
    img(src='@/assets/curso/tema1/Vec1.svg', alt='Ubicación de mercancía', class='img-fluid').col-9.pos1 
    p.mb-4 En tema de normativa, la constitución política nacional en el artículo 23 reza que toda persona tiene derecho a interponer o presentar peticiones de forma respetuosa ante las autoridades, estas peticiones pueden ser de interés general o entidades públicas o privadas, por la ley 755 de 2015 reguló en Colombia el derecho fundamental de las personas a interponer peticiones 
    
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center.px-5
        .col-3.col-sm-2.col-lg-1.esp
          img(src="@/assets/curso/tema1/vec2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0 Para profundizar los temas mencionados visualice el siguiente video: <b>Conozca todo sobre las PQRS</b>
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/embed/Z8m8AaYJR2w" target="_blank")
                span Ver más 
                i.fas.fa-link
    separador


    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Atención de peticiones, quejas y reclamos
    P.mb-4 En la atención de las solicitudes y/o comunicados de peticiones, quejas y reclamos, tiene para cada una de ellas, un tratamiento específico, aunque usa un mismo canal administrativo, tiene tratamiento y seguimiento particular, por esta razón, el primer paso del proceso de PQR es el formato de recepción, el cual, debe de manera clara y definida determinar en cuál de las tres tipologías ha de clasificarse la inquietud del cliente respecto del servicio prestado (Universidad Manuela Beltrán, s.f.)  
    P.mb-4 En Colombia se disponen de normatividad para las peticiones, quejas, reclamos, solicitudes, denuncias, esta normativa, la pueden consultar en los siguientes anexos:
    
    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Art. 23 de la Constitución Política Nacional de 1991
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.oas.org/es/sla/ddi/docs/acceso_informacion_base_dc_leyes_pais_CO_12.pdf" target="_blank")
                span Ver más 
                i.fas.fa-link 

    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Decreto 1166 de 2016, por el cual se modifica el decreto 1069 de 2015, Decreto Único Reglamentario del Sector Justicia, relacionado con la prestación, tratamiento y radicación de las peticiones presentadas verbalmente
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%201166%20DEL%2019%20DE%20JULIO%20DE%202016.pdf" target="_blank")
                span Ver más 
                i.fas.fa-link

    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Ley 1755 de 2015 la cual reglamenta el Derecho Fundamental de Petición.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=65334" target="_blank")
                span Ver más 
                i.fas.fa-link

    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Ley 1437 de 2011 por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=41249" target="_blank")
                span Ver más 
                i.fas.fa-link

    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Decreto 019 de 2012 por el cual se dictan normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración Pública
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=45322" target="_blank")
                span Ver más 
                i.fas.fa-link

    p.mb-5 Las entidades tienen tiempos estipulados para dar respuesta a una petición, queja o reclamo en un tiempo de 15 días hábiles después de la recepción. 
    
    h4.mb-5 Proceso General para la Recepción de PQR:
    
    figure.mb-5
      img(src='@/assets/curso/tema1/vec4.svg', alt='Ubicación de mercancía', class='img-fluid').col-10.pos2
    
    figure.mb-5
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/PSiBtkl75Hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Hablando de PQR es momento de que veamos las diferencias entre peticiones, quejas y reclamos:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Peticiones" :icono="require('@/assets/curso/tema1/1.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Peticiones
          .cajon.color-primario.bg-3-claro.p-4.mb-4.col-11.esp2
            p La Petición es demandar, pedir o solicitar algo que se requiere o se necesita, la petición se eleva ante una persona sea natural o jurídica, el proceso de petición hace referencia a dudas que se tiene de un procedimiento en alguna de sus etapas de ejecución, un cuestionamiento sobre algún paso o proceso no entendido. 
          p Para todo proceso de petición, la respuesta debe ser clara y debe emitirse dentro de los tiempos establecidos por la ley, en algunas ocasiones y dado los procesos que se  deben surtir para dar respuestas, estos pueden llevar más tiempo de lo estipulado por la ley, de presentarse esta situación se debe informar al peticionario indicando la causa de la demora en la respuesta y la fecha en que se entrega la misma, en muchas ocasiones y cuando la petición es por dudas en los procesos, la respuesta va acompañada de un diagrama de flujo sintetizado y concreto donde se detalle el proceso consultado de principio a fin, esto con la finalidad de que evitar preguntas redundantes y mejorar la percepción del servicio respecto de su eficiencia y eficacia.

      .py-4.py-md-5(titulo="Queja" :icono="require('@/assets/curso/tema1/2.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Queja
          .cajon.color-primario.bg-3-claro.p-4.mb-4.col-11.esp2
            p El proceso de queja de un cliente siempre hace referencia a insatisfacción que él tiene frente al servicio o al producto, en alguna de sus etapas de ejecución, generalmente las quejas reflejan bajos indicadores de satisfacción de los clientes, sin embargo, el hecho de que los clientes no presenten quejas no se señal de satisfacción.  
          p Al igual que en la petición la respuesta debe ser clara y debe emitirse dentro de los tiempos estipulados por la ley, en caso de no ser posible cumplir los tiempos de debe informar al peticionario, informando los tiempos de respuesta y causales de la mora.
          p En el proceso de PQR es importante cumplir los tiempos establecidos según la normatividad, el cumplir reduce posibilidades de que interpongan sanciones por entidades de control. 
          p El proceso que se aplica para la recepción de las Quejas es el mismo que se aplica para la petición, solo que en el formato que las organizaciones tienen establecidos para la recepción o radicación, el peticionario debe señalar o registrar de forma clara en el espacio asignado para ello si es una petición, una queja o un reclamo. 
      .py-4.py-md-5(titulo="Reclamo" :icono="require('@/assets/curso/tema1/3.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Reclamo 
          .cajon.color-primario.bg-3-claro.p-4.mb-4.col-11.esp2
            p El proceso de reclamo de un cliente siempre hace referencia a la inconformidad posterior que él tiene cuando evidencia una diferencia entre lo que la organización, marca o persona ofreció y lo que el cliente obtuvo.  
          p El proceso de recepción de reclamo es el mismo que se aplica en los casos de petición o queja, también se debe dejar evidenciado en el formato que se usa, que se está radicando o elevando una queja, ésta debe ser solucionada por parte de persona natural o jurídica dentro de los tiempos establecidos según las normas. 
       
    .row.p-2.mb-4
      .col.col-12.col-lg-4.mb-3
        .tarjeta.p-4(style='background-color: #FFDE96')
          img.img90.m-auto.mb-4(src='@/assets/curso/tema1/4.svg', alt='', class='img-fluid')
          p.fw-bold.mb-0 Petición
          p Pedir o solicitar algo que se requiere o se necesita.
      .col.col-12.col-lg-4.mb-3
        .tarjeta.p-4(style='background-color: #FFDE96')
          img.img90.m-auto.mb-4(src='@/assets/curso/tema1/5.svg', alt='', class='img-fluid')
          p.fw-bold.mb-0 Queja
          p Expresion de Insatisfaccion
          br
      .col.col-12.col-lg-4.mb-3
        .tarjeta.p-4(style='background-color: #FFDE96')
          img.img90.m-auto.mb-4(src='@/assets/curso/tema1/6.svg', alt='', class='img-fluid')
          p.fw-bold.mb-0 Reclamo
          p Disconformidad relacionada entre lo prometido y lo recibido
     
    p.mb-5 Los siguientes recursos hacen referencia a las peticiones, quejas o reclamos, después de observarlos, analicemos las actitudes y acciones de los clientes frente a las situaciones
    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Manejo de sugerencias y recomendaciones

    .row.mb-5
      .col.col-12.col-lg-4.position-relative
        .sobre-flotante-t3
          img.w-50(src='@/assets/curso/banner/img04.svg', class='img-fluid')
        picture
          img(src='@/assets/curso/tema1/img02.png', alt='Ubicación de mercancía', class='img-fluid')
      .col.col-12.col-lg-8.pt-5
        p Las PQR comprende unos paso a paso, dan inicio cuando el cliente, consumidor o usuario presenta la solicitud ante la entidad, el proveedor u organización, de esta manera se da apertura a la posibilidad de rectificar o subsanar las fallas que se presentaron en el servicio prestado y se construye el mecanismo de respuesta satisfactorio en pro del mejoramiento de la operatividad de la organización y la satisfacción del cliente.
        p El asertividad en el manejo de las sugerencias y los reclamos hacen la diferencia entre conservar un cliente o perderlo, en el proceso de quejas y reclamaciones se debe dar prioridad las situaciones que afectan la fidelización de clientes, ante todo en el aspecto tiempo de atención.  

    p.mb-5 Dentro de los procesos de PQR se recomienda acciones para realizar este proceso con asertividad, estos son:
    
    .row.mb-5
      ul.lista-ul.lista-ul.lista-ul--color
        li 
          i.fas.fa-paper-plane 
          span Escuchar el reclamo con atención, tener empatía

        li 
          i.fas.fa-paper-plane 
          span Ser paciente, entender al usuario

        li 
          i.fas.fa-paper-plane 
          span Tener pensamiento crítico, para encontrar la mejor alternativa

        li 
          i.fas.fa-paper-plane 
          span Ser proactivo, buscar la manera de lograr un buen cierre de la situación, si es posible en corto tiempo
    
    p.mb-5 Las sugerencias y recomendaciones son dos conceptos alineados en el propósito de mejora de un proceso o los procedimientos que lo conforman, la sugerencia nace como la manifestación de una propuesta o idea que puede ayudar a mejorar un proceso, la recomendación surge como satisfacción del servicio o atención recibida, sin embargo, cada uno, tiene una filosofía diferente. Por eso, las organizaciones dan administración a cada uno de los conceptos así:
    
    .row.mb-5
      .col-6.mb-3
        .tarjeta(style='background-color: #FFDE96').bor
          p.fw-bold.bor2 Sugerencias
          img(src='@/assets/curso/tema1/1.jpg', alt='', class='img-fluid')
          .margtx
            p Las sugerencias tienen origen dual, esto significa que son endógeno y exógeno es decir que se presentan al interior y al exterior de la organización, es una observación sobre la forma de hacer algo, la sugerencia no es una obligación es una invitación a realizar o implementar una acción. 
            p Las sugerencias de carácter endógeno son originadas al interior de las organizaciones y obedecen principalmente a mejoras continuas requieren acciones correctivas de quienes ejecutan o definen los procesos.  Las sugerencias permiten determinan que hay falencias o posibilidades de mejora, recibir una sugerencia es informarnos de una situación. 

      .col-6.mb-3
        .tarjeta(style='background-color: #FF8578').bor
          p.fw-bold.bor2 Recomendaciones
          img(src='@/assets/curso/tema1/2.jpg', alt='', class='img-fluid')
          .margtx2
            p Refiere sugerir algo, en el ámbito comercial se puede decir que las recomendaciones enmarcan satisfacción en el servicio, la atención o el buen producto, implica que un cliente sugiere a otro la experiencia en el servicio, la atención o el producto porque su experiencia ha sido satisfactoria. 
    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Valoración de las felicitaciones

    .contenedor.p-5.position-relative.mb-5(style='background-color: #FEF9F0')
        .row.justify-content-center.py-5
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/tema1/vec5.svg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0.mt-5
            h4 Infografía:
            h4 Valoración de las felicitaciones
            .titulo-segundo.color-acento-contenido
            p Las felicitaciones son muy importantes en las PQR, veamos la siguiente infografía.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Felicitaciones_CF06.pdf')" target="_blank")
                span Ver más 
                i.fas.fa-link
    
    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-1 Las manifestaciones de felicitaciones deben ser muy valoradas por la organización, aunque nacen en un principio por el servicio del colaborador, estas se traducen en imagen para la organización, confianza, credibilidad en la vocación por cumplir de forma eficiente las promesas presentadas el cliente al momento de tomar los servicios.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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

<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.d-flex.justify-content-center
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 4
          h1 Estrategias de servicio al cliente

      .row
        p.col-6 <b>Una estrategia es aquella cadena planeada y medida de eventos que permite lograr objetivos predefinidos en el tiempo esperado y con la sustancia de resultados requerida por el objetivo que se persigue.</b>
        p.col-6 Los servicios postales, al igual que todos los procesos de servicio, buscan garantizar su continuidad mediante estrategias dirigidas principalmente a los clientes (no solamente a ellos) que permitan los espacios de desarrollo del negocio, su medida, mejora continua y competitividad en el mercado.  
        p En la actualidad las empresas pueden disponer de una serie de herramientas tecnológicas que facilitan el proceso estratégico de servicio al cliente generando crecimiento no solo desde lo económico y la participación en el mercado sino también desde el reconocimiento e identificaron de la empresa en el medio, estas herramientas tecnológicas facilitan procesos como:
      br
      br
      .col-9.pos4
        img(src="@/assets/curso/tema4/vec1.svg")
    br
    br    
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center.px-5
        .col-3.col-sm-2.col-lg-1.esp
          img(src="@/assets/curso/tema1/vec2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0 Para profundizar los temas mencionados visualice el siguiente video: <b>Conozca todo sobre las PQRS</b>
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=W2rs9xB9RFQ" target="_blank")
                span Ver más 
                i.fas.fa-link
    separador

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Ejecutar procedimiento de manejo de PQRS

    p Ya definido con claridad los conceptos de petición, queja, reclamo y sugerencia, las estrategias de los servicios postales, en su diseño, claramente deberán enfocarse como mínimo en los siguientes objetivos  
    br
    .col-9.pos5
      img(src="@/assets/curso/tema4/vec2.svg")
    br
    br
    p Para lograr desarrollar cada uno de los objetivos anteriores, las organizaciones de servicios postales están obligadas a implementar el mecanismo de PQRS, no solamente para lograr mejora continua de la atención al cliente, sino en no menor importancia, recaudar los datos y evidencias de forma permanente que permitan ser tabuladas y analizadas, convirtiéndolas en indicadores e información de garantía de mejora continua del servicio.
    p En las empresas de servicios postales y transporte de mercancías se tiene definido el procedimiento para el trámite de recepción de PQR, este documento contiene información como: 

    .row.col-11.pos6
      .bg-img-8(data-aos="fade-left")  
        .row.justify-content-center.align-items-center.mt-1.py-4
          .col-lg-12      
            SlyderA(data-aos="fade-down") 
              .row.justify-content-center.align-items-center
                .col-2 
                  .col-2 
                  figure
                    img(src="@/assets/curso/tema4/vec3.svg")
                .col-8
                  p Los medios de recepción de las PQR las cuales pueden ser verbal, telefónica, escrita o internet. 

              .row.justify-content-center.align-items-center
                .col-2 
                  .col-2 
                  figure
                    img(src="@/assets/curso/tema4/vec4.svg")
                .col-8
                  p Definir los documentos soporte que se debe anexar a la solicitud y documentos adicionales como certificaciones de cuentas bancarias, esto para cuando se hace reclamaciones que requieren indemnizaciones. 

              .row.justify-content-center.align-items-center
                .col-2 
                  .col-2 
                  figure
                    img(src="@/assets/curso/tema4/vec5.svg")
                .col-8
                  p Horarios de atención

              .row.justify-content-center.align-items-center
                .col-2 
                  .col-2 
                  figure
                    img(src="@/assets/curso/tema4/vec6.svg")
                .col-8
                  p Si el reclamante no es el destinatario ni el remitente se requiere carta de cesión de derechos, la cual para puede ser emitida por cualquiera de las partes, y con copia de documento de identidad

              .row.justify-content-center.align-items-center
                .col-2 
                  .col-2 
                  figure
                    img(src="@/assets/curso/tema4/vec7.svg")
                .col-8
                  p Las reclamaciones pueden ser realizadas por el remitente, el destinatario o por tercero con autorización. 





</template>

<script>
export default {
  name: 'Tema4',
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

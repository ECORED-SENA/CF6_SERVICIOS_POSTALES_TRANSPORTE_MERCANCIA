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

      .row
          ul.lista-ul.lista-ul.lista-ul--color
            li 
              i.fas.fa-paper-plane 
              p Mejora la imagen y la percepción, ofreciendo la atención con sistemas avanzados y a través de herramientas ofimáticas

            li 
              i.fas.fa-paper-plane 
              p Reduce costos al disminuir congestiones 

            li 
              i.fas.fa-paper-plane 
              p Disminuye en gran porcentaje la emisión de documentos escritos

            li 
              i.fas.fa-paper-plane 
              p Reduce tiempos de llamadas telefónicas

            li 
              i.fas.fa-paper-plane 
              p Se aumenta el seguimiento y control de atención a las PQR
            
            li 
              i.fas.fa-paper-plane 
              p Se dispone de un mejor canal de comunicación
    
      .row
        .titulo-sexto.color-acento-contenido
            h5 Figura 1
            span <i>Beneficio Automatización Proceso PQR</i>
        
        img(src='@/assets/curso/tema1/Vec1.svg', alt='Ubicación de mercancía', class='img-fluid').col-9.pos1 
        p En tema de normativa, la constitución política nacional en el artículo 23 reza que toda persona tiene derecho a interponer o presentar peticiones de forma respetuosa ante las autoridades, estas peticiones pueden ser de interés general o entidades públicas o privadas, por la ley 755 de 2015 reguló en Colombia el derecho fundamental de las personas a interponer peticiones 
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
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/embed/Z8m8AaYJR2w" target="_blank")
                span Ver más 
                i.fas.fa-link

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Atención de peticiones, quejas y reclamos
    P En la atención de las solicitudes y/o comunicados de peticiones, quejas y reclamos, tiene para cada una de ellas, un tratamiento específico, aunque usa un mismo canal administrativo, tiene tratamiento y seguimiento particular, por esta razón, el primer paso del proceso de PQR es el formato de recepción, el cual, debe de manera clara y definida determinar en cuál de las tres tipologías ha de clasificarse la inquietud del cliente respecto del servicio prestado (Universidad Manuela Beltrán, s.f.)  
    P En Colombia se disponen de normatividad para las peticiones, quejas, reclamos, solicitudes, denuncias, esta normativa, la pueden consultar en los siguientes anexos:
    br
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
              p.text-small.mb-0  <b>Anexo.</b> Ley 1755 de 2015 la cual reglamenta el Derecho Fundamental de Petición.
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
              p.text-small.mb-0  <b>Anexo.</b> Ley 1437 de 2011 por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo
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
              p.text-small.mb-0  <b>Anexo.</b> Decreto 019 de 2012 por el cual se dictan normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración Pública
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.oas.org/es/sla/ddi/docs/acceso_informacion_base_dc_leyes_pais_CO_12.pdf" target="_blank")
                span Ver más 
                i.fas.fa-link






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

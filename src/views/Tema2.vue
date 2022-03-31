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
   
    h3 Slider D
    SlyderD.mb-5(:datos="datosSlyder")



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
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
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

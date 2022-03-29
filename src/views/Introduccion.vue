<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-7(data-aos='fade-right')
        h2.h1.fw-normal.m-auto ¡Enhorabuena! Usted está a punto de comenzar el estudio del componente formativo <b>“Consolidación de objetos postales y mercancías”.</b> Inicie esta experiencia visualizando el recurso que se muestra a continuación. ¡Muchos éxitos!
      .col-lg-5(data-aos='fade-left')
        figure
          img(src='@/assets/curso/0.png', alt='Texto que describa la imagen' style='width: 400px').m-auto
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

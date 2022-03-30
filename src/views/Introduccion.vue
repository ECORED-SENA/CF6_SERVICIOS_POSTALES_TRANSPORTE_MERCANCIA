<template lang="pug">
.curso-main-container.introduccion.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span i
      h1 Introducción
    
    p Las Peticiones, Quejas y Reclamos (PQR), orientan la investigación prospectiva de la sensibilidad de los clientes respecto de los servicios prestados mediante procedimientos y normas establecidos. A continuación, te invitamos a ver el siguiente video introductorio sobre las mismas:
    br
    br
    
    figure.mb-5
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/PSiBtkl75Hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


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

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

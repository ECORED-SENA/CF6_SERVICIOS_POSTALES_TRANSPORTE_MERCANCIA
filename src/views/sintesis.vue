<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      p La atención de PQRS en las organizaciones traza el propósito de establecer comunicación directa entre los usuarios y la organización, dentro de la organización se crea el área de servicio al cliente que es la encargada de recibir las PQRS, gestionar las respuestas y entregarlas dentro de los tiempos establecidos, así mismo es el área responsable de validar la satisfacción de los clientes, para potencializar eso momentos de verdad que se presentaron e implementar la acciones correctivas cuando se presentan inconformidades.
      p El mapa mental que se registra a continuación refuerza los conocimientos en el tema de manejo de peticiones, quejas y reclamos.
    br
    br
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")

    .row.col-6.col-md-2.mb-4.esp3
      a.anexo(style='background-color:#E9F4FD')(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p <b>Síntesis.pdf</b>  

</template>

<script>
export default {
  name: 'Sintesis',
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

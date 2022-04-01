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

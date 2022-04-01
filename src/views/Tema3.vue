<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.d-flex.justify-content-center
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 3
          h1 Factores de atención al Cliente

    p En la atención al cliente intervienen muchos factores que pueden afectar de forma positiva a la organización, dichos factores intervienen directamente con la atención al cliente, entre dichos factores se enumeran:
    br
    br
    ImagenInfografica.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/vec1.svg', alt='Texto que describa la imagen')
      .tarjeta.bg-amarillo-claro.p-3(x="6.6%" y="30%" numero="")
        .texto-seis-alt.color-secundario
          p <b>Comunicación clara y directa</b>
            br
            | Se debe tener una comunicación con los clientes donde se identifiquen las fortalezas organizacionales y los beneficios que se ofrecen.

           
      .tarjeta.bg-amarillo-claro.p-3(x="24.7%" y="72%" numero="")
        .texto-seis-alt.color-secundario
          p  <b>Sociabilidad,</b>
            br
            | trabajar en la capacidad de lograr una interrelación, desarrollar relaciones amigables, respetuosas y con especial interés por las necesidades del cliente y atención de estas.
           
      .tarjeta.bg-amarillo-claro.p-3(x="41.5%" y="26.5%" numero="")
        .texto-seis-alt.color-secundario
          p  <b>Conocimiento del cliente,</b>
            br
            | conocer el cliente, identificar las necesidades, ser proactivo anticipando a los requerimientos genera una gran ventaja competitiva. 
           
      .tarjeta.bg-amarillo-claro.p-3(x="58.5%" y="72%" numero="")
        .texto-seis-alt.color-secundario
          p  <b>Honestidad,</b>
            br
            | la transparencia es un factor muy valorado por el cliente, cumplir con las expectativas de servicio con oportunidad y rectitud genera confianza y satisfacción.
           
      .tarjeta.bg-amarillo-claro.p-3(x="75.4%" y="26.4%" numero="")
        .texto-seis-alt.color-secundario
          p  <b>Escuchar,</b>
            br
            | es de gran importancia estar atentos a los clientes, escuchar las recomendaciones, o sugerencias que nacen del proceso de atención marcan un camino de mejora cada día no solo para la atención de ese cliente, sino para lograr más clientes, mayo participación del mercado.
          
      .tarjeta.bg-amarillo-claro.p-3(x="92.5%" y="72%" numero="")
        .texto-seis-alt.color-secundario
          p  <b>Ser creativo,</b>
            br
            | la prestación de un servicio con atención permite identificar necesidades del cliente, y así diseñar soluciones rápidas y precisas a las mismas, hacer sentir al cliente que sus necesidades son prioridad en atención. 
    br      
    p La búsqueda de relaciones comerciales a largo plazo, el trabajar en experiencias que generen lealtad y sentido de pertenencia, ir más allá de la satisfacción superando expectativas, disponiendo canales comunicación efectivos generando confiabilidad, credibilidad, imagen de calidad, eficacia, eficiencia, para brindar una óptima atención, fidelizar clientes, obtener más clientes y así una sostenibilidad en el mercado.
    separador
</template>

<script>
export default {
  name: 'Tema3',
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

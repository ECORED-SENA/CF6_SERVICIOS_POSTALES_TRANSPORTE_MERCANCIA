<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Alistamiento de pedidos

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Productos     
    
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Planificación de pedidos 
   
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Documentos asociados al alistamiento y almacenaje
    





</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    mostrarIndicador: true,
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

<style lang="sass" ;scoped>
.dots-1
  .img-infografica__item__dot
    background-color: #f5f5f5
    height: 69px
    height: 40px
    background-color: $color-acento-contenido
    border-radius: 10px

    &:before, &:after
      display: none
      opacity: 1
.acordion__activo
  background-color: #ffcec9 !important
.acordion__normal
  background-color: #ffe7e4
.bg-blue
  background-color: #5263e2
.tabla-a thead
  border-top: 0
.imagen-superior
  @media (max-width: $bp-max-lg)
    display: none
.img-infografica-b.color-secundario .img-infografica-b__item__numero
  color: $white
.img-infografica-b__item__tooltip
  border-radius: 10px
  background-color: $color-primario
  font-weight: bold
.img-infografica-b__modal
  position: absolute
  background-color: #dce0f9
  border-radius: 10px
  min-height: 30% !important
  top: 30%
  left: 10%
  width: 80%
  h4, p
    color: $color-sistema-texto !important
.img-infografica-b__img
  position: relative !important
</style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de pedidos
  
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Organización de pedidos
    




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
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
.hover-modal
  transition: background-color .3s ease-in-out, transform .3s ease-in-out;
  &:hover
    background-color: $color-secundario
    transform: scale(1.1)
    h4
      color: $white
    cursor: pointer
.bg-blue
  background-color: #5263e2
.texto-seis-alt
  position: relative
  p
    margin-left: 20px
  &:before
    content: ' '
    display: block
    width: 4px
    height: 21px
    background-color: $color-primario
    position: absolute
    left: 0
    top: 0
  &.color-primario
    &:before
      background-color: $color-primario
  &.color-secundario
    &:before
      background-color: $color-secundario
  &.color-acento-contenido
    &:before
      background-color: $color-acento-contenido
  &.color-acento-botones
    &:before
      background-color: $color-acento-botones

.tarjeta-slide-down
  width: 100%
  overflow: hidden
  height: 230px !important
  transition: all .5s ease-in-out
  .contenedor-imagen
    display: flex
    img
      margin: 0 auto
      transition: all .5s ease-in-out
      width: 120px

  &:hover
    .contenedor-imagen
      display: flex
    height: 400px !important
.bg-purple
  background-color: #97a1ee
.bg-3-claro
  background-color: #ffcec9 !important
.acordion__activo
  background-color: #b1e0d9 !important
  p , ul, h1, h2, h3, h4, h5, h6, li
    color: $color-sistema-texto !important
.tarjeta-up
  position: relative
  overflow: hidden
  .imagen-up
    transition: bottom  .5s ease-in-out
    position: absolute
    bottom: -200%
    left: 0
    img
      height: 100%


  &:hover
    .imagen-up
      bottom: 0
.bg-amarillo-claro
  background-color: #fff3d8
.tarjeta-avatar-b
  .tarjeta-avatar-b__img
    img:first-child
      display: block
    img:last-child
      display: none
  &:hover
    .tarjeta-avatar-b__img
      img:first-child
        display: none
      img:last-child
        display: block
.bg-purple-claro
  background-color: #dce0f9
</style>

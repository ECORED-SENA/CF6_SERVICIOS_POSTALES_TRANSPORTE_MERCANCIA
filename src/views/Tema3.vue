<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Verificación de mercancía
   
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido.mb-5
      h2 3.1 Servicio, mercancía y objeto postal
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Métodos de verificación
   
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Clasificación de mercancía de acuerdo a novedad        
   
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Herramientas digitales 
    
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5 Generalidades bases de datos
   



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
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

<style lang="sass">
.tarjetas-up_card
  overflow: hidden
  height: 10px
  transition: all .5s ease-in-out
  border-radius: 10px
  width: 100%
  left: 0
  bottom: -80%
  height: 210px
  i:last-child
    display: none
  &:hover
    height: 100%
    i:first-child
      display: none
    i:last-child
      display: block
.bg-purple
  background-color: #97a1ee
.bg-purple-claro
  background-color: #bac1f3
.bg-purple-claro2
  background-color: #dce0f9 !important
  &:before
    background-color: #7380df
.bg-amarillo-claro
  background-color: #fff0cd
.bg-amarillo-claro2
  background-color: #fff7e6
.bg-red
  background-color: #ffb6ae
.contenedor-imagen-modal
  .tarjeta
    cursor: pointer
    opacity: 1
    background-color: transparent
    position: absolute
.bloque-texto-g
  .img
    position: absolute
    @media (max-width: $bp-max-md)
      display: none
@media (max-width: $bp-max-md)
  .bloque-texto-g__img
    background-image: url(../assets/curso/86.svg) !important
.tarjeta-up
  position: relative
  overflow: hidden
  img:first-child
    position: absolute
    transition: bottom  .5s ease-in-out
    bottom: -200%
    left: 0
    width: 100%
    z-index: 1
  &:hover
    img:first-child
      bottom: 0
.vineta
  &__1:before
    content: url(../assets/curso/vineta1.svg)
  &__2:before
    content: url(../assets/curso/vineta2.svg)
  &__3:before
    content: url(../assets/curso/vineta3.svg)
.bg-blue
  tr
    background-color: #5263e2
.bg-gris
  height: 100%
  transition: background-color .4s ease-in-out, height .4s ease-in-out
  background-color: #f6f6f6
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
  &:hover
    background-color: #fed981
    height: 120%
.contenedor-slyder
  .img-float
    position: absolute
    bottom: -10%
    right: 0
    width: 210px
    animation: float 3s infinite alternate
  .img-1
    position: relative
  &:before
    animation: float 3s infinite alternate
    animation-delay: 2s
    content: ''
    position: absolute
    top: 5%
    left: 45%
    background-color: #ffde96
    width: 60px
    height: 11px
    border-radius: 20px
  &:after
    animation: float 3s infinite alternate
    content: ''
    position: absolute
    bottom: 5%
    left: 10%
    background-color: #43a99b
    width: 60px
    height: 11px
    border-radius: 20px
@keyframes float
  0%
    transform: translateY(-10)
  100%
    transform: translateY(10px)
.tarjeta-text-up
  position: relative
  overflow: hidden
  &__texto
    position: absolute
    bottom: -78%
    left: 0
    width: 100%
    height: 90%
    background-color: rgba(255, 247, 230, 0.9)
    transition: all .5s ease-in-out
    h4
      margin-bottom: 20px
  &:hover
    .tarjeta-text-up__texto
      bottom: 0
.boton-modal
  cursor: pointer
.bloque-editado
  .bloque-texto-g__texto
    display: flex
    width: 80%
    margin-left: 108px
    justify-content: end
    p
      width: 70%
</style>

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

      .row
          ul.lista-ul.lista-ul.lista-ul--color
            li 
              i.fas.fa-paper-plane 
              p Mejora la imagen y la percepción, ofreciendo la atención con sistemas avanzados y a través de herramientas ofimáticas

            li 
              i.fas.fa-paper-plane 
              p Reduce costos al disminuir congestiones 

            li 
              i.fas.fa-paper-plane 
              p Disminuye en gran porcentaje la emisión de documentos escritos

            li 
              i.fas.fa-paper-plane 
              p Reduce tiempos de llamadas telefónicas

            li 
              i.fas.fa-paper-plane 
              p Se aumenta el seguimiento y control de atención a las PQR
            
            li 
              i.fas.fa-paper-plane 
              p Se dispone de un mejor canal de comunicación
    
      .row
        .titulo-sexto.color-acento-contenido
            h5 Figura 1
            span <i>Beneficio Automatización Proceso PQR</i>
        
        img(src='@/assets/curso/tema1/Vec1.svg', alt='Ubicación de mercancía', class='img-fluid').col-9.pos1 
        p En tema de normativa, la constitución política nacional en el artículo 23 reza que toda persona tiene derecho a interponer o presentar peticiones de forma respetuosa ante las autoridades, estas peticiones pueden ser de interés general o entidades públicas o privadas, por la ley 755 de 2015 reguló en Colombia el derecho fundamental de las personas a interponer peticiones 
    br
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center.px-5
        .col-3.col-sm-2.col-lg-1.esp
          img(src="@/assets/curso/tema1/vec2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0 Para profundizar los temas mencionados visualice el siguiente video: <b>Conozca todo sobre las PQRS</b>
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/embed/Z8m8AaYJR2w" target="_blank")
                span Ver más 
                i.fas.fa-link

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Atención de peticiones, quejas y reclamos
    P En la atención de las solicitudes y/o comunicados de peticiones, quejas y reclamos, tiene para cada una de ellas, un tratamiento específico, aunque usa un mismo canal administrativo, tiene tratamiento y seguimiento particular, por esta razón, el primer paso del proceso de PQR es el formato de recepción, el cual, debe de manera clara y definida determinar en cuál de las tres tipologías ha de clasificarse la inquietud del cliente respecto del servicio prestado (Universidad Manuela Beltrán, s.f.)  
    P En Colombia se disponen de normatividad para las peticiones, quejas, reclamos, solicitudes, denuncias, esta normativa, la pueden consultar en los siguientes anexos:
    br
    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Art. 23 de la Constitución Política Nacional de 1991
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.oas.org/es/sla/ddi/docs/acceso_informacion_base_dc_leyes_pais_CO_12.pdf" target="_blank")
                span Ver más 
                i.fas.fa-link 

    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Decreto 1166 de 2016, por el cual se modifica el decreto 1069 de 2015, Decreto Único Reglamentario del Sector Justicia, relacionado con la prestación, tratamiento y radicación de las peticiones presentadas verbalmente
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%201166%20DEL%2019%20DE%20JULIO%20DE%202016.pdf" target="_blank")
                span Ver más 
                i.fas.fa-link

    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Ley 1755 de 2015 la cual reglamenta el Derecho Fundamental de Petición.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=65334" target="_blank")
                span Ver más 
                i.fas.fa-link

    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Ley 1437 de 2011 por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=41249" target="_blank")
                span Ver más 
                i.fas.fa-link

    .tarjeta.color-1.p-3.mb-4
      .row.justify-content-around.align-items-center.px-5
        .col-2.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/vec3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-4.mb-sm-1
              p.text-small.mb-0  <b>Anexo.</b> Decreto 019 de 2012 por el cual se dictan normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración Pública
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=45322" target="_blank")
                span Ver más 
                i.fas.fa-link

    p Las entidades tienen tiempos estipulados para dar respuesta a una petición, queja o reclamo en un tiempo de 15 días hábiles después de la recepción. 
    br
    h4 Proceso General para la Recepción de PQR:
    br
    img(src='@/assets/curso/tema1/vec4.svg', alt='Ubicación de mercancía', class='img-fluid').col-10.pos2
    br
    br
    br
    figure.mb-5
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/PSiBtkl75Hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p Hablando de PQR es momento de que veamos las diferencias entre peticiones, quejas y reclamos:

    br
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Peticiones" :icono="require('@/assets/curso/tema1/1.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Transpaletas
            p Pueden transportar la carga a pequeñas distancias y elevarla algunos centímetros, son útiles para apoyar otros equipos y normalmente se encuentran en los muelles de carga y descarga. Se utilizan en almacenes con dimensiones reducidas y sin mucha altura.
            p 
              span.fw-bold a. Manuales: 
              | se usan en las tareas de agrupación de pedidos y carga y descarga de vehículos.
            p 
              span.fw-bold b. Motorizados: 
              | cuentas con un sistema eléctrico y permiten realizar recorridos más largos que el anterior y se utilizan para el mismo fin.

          .col-md-4


      .py-4.py-md-5(titulo="Queja" :icono="require('@/assets/curso/tema1/2.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Apiladores
            p Son equipos capaces de transportar y elevar una paleta, permitiendo no solo desplazar la carga horizontalmente, sino verticalmente y de este modo realizar el trabajo de apilado. Se pueden distinguir los siguientes:
            p 
              span.fw-bold a. De elevación manual: 
              | permiten una elevación limitada, por eso no se deben usar con cargas pesadas, normalmente se utilizan para la carga y descarga de estanterías ubicadas en la recepción y expedición.
            p 
              span.fw-bold b. Mixtos: 
              | tienen tracción manual y eléctrica y es el tipo más usado.
            p 
              span.fw-bold c. Autopropulsados: 
              | realizan el traslado y la elevación de manera motorizada, no se recomiendan para recorridos largos y requieren una superficie lisa para el desplazamiento.

          .col-md-4
          

      .py-4.py-md-5(titulo="Reclamo" :icono="require('@/assets/curso/tema1/3.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Carretillas o montacargas
            p Son equipos de contrapeso que cumplen con la función de transportar y soportar mediante la parte delantera del vehículo cualquier tipo de carga en pallets o contenedores. Pueden ser de los siguientes tipos:
            p 
              span.fw-bold a. Contrabalanceada: 
              | vehículo autopropulsado que realiza la carga por delante del punto de apoyo mediante horquillas.
            p 
              span.fw-bold b. Retráctil: 
              | es un equipo elevador que puede extender y recoger las horquillas o el mástil sobre si mismo y permite alcanzar alturas de elevación superiores.
            p 
              span.fw-bold c. De toma lateral: 
              | existen trilaterales, las cuales pueden manipular la carga de manera: frontal, izquierda y derecha o también las hay bilaterales (derecha/izquierda). Ofrecen mejor rendimiento cuando son guiadas a través de raíles, permitiendo así una mayor velocidad.
            p 
              span.fw-bold d. Recogepedidos: 
              | se forma por una cabina donde se sitúa el conductor y que se eleva junto con las horquillas para realizar tareas de reposición y 
              em picking.

          .col-md-4

       


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

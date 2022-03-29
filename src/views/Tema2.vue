<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de pedidos
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-4
          img(src='@/assets/curso/39.png', alt='Texto que describa la imagen')
      .col-lg-7
        p El proceso de planificación y gestión de pedidos, hace parte de la planeación estratégica de la empresa, dado que debe ofrecer soluciones en cuanto a recursos, comunicación, políticas, objetivos y metas de la organización.  Dentro de las principales actividades que se deben organizar para una efectiva gestión de pedidos está el diseño de la red de distribución, acorde con la demanda y capacidad de respuesta frente a los clientes; teniendo en cuenta las características de las instalaciones, número de centros de distribución, ubicación, modalidad de transporte y talento humano.
    p.mb-5 Estas son algunas particularidades de la gestión de pedidos, que deben tenerse muy en cuenta:
    .row.justify-content-center.align-items-center
      .col-lg-10: img(src='@/assets/curso/38.svg')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Organización de pedidos
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-4
          img(src='@/assets/curso/40.png', alt='Texto que describa la imagen')
      .col-lg-7
        p El conocimiento de las actividades del almacén, permite crear estrategias de optimización para el almacenamiento y preparación de pedidos, analizar las características de los productos almacenados, disminuir pérdidas de mercancías y tiempos, contar con el talento humano idóneo para desempeñar las labores operativas y administrativas, saber quiénes pueden, o no, tener acceso a la información en tiempo real para un mejor seguimiento, administración y mejoramiento en la organización de pedidos.
    p.mb-5 Estos son algunos aspectos de suma importancia, que deben tenerse en cuenta, en lo relacionado con la organización de pedidos:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Actividades del almacén").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/41.svg', alt='Texto que describa la imagen' style='width: 102px').m-auto
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 La selección y organización de los pedidos constituye uno de los principales eslabones en la gestión de la cadena de suministro, por lo que se recomienda conocer perfectamente las actividades que se desarrollan al interior del almacén.
          .row(numero="2" titulo="Preparación de pedidos").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/42.svg', alt='Texto que describa la imagen' style='width: 102px').m-auto
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 El <em>picking</em> es una de las actividades clave para lograr un eficiente nivel en la preparación de los pedidos; la meta es lograr costos más bajos por cantidades entregadas, en el menor tiempo posible para todos los clientes.
          .row(numero="3" titulo="Organización de pedidos").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/43.svg', alt='Texto que describa la imagen' style='width: 102px').m-auto
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 En la preparación de pedidos, cobra importancia la forma de organizarlos en el almacén; dicha preparación ha de permitir una recolectarlos rápido, fácil y acertadamente por el operario.
          .row(numero="4" titulo="Técnicas de organización").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/44.svg', alt='Texto que describa la imagen' style='width: 102px').m-auto
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Existen diversas técnicas que permiten organización, alistamiento, despacho y cargue de mercancías, más efectivos.
    .row.justify-content-center.g-4.mb-5
      .col-lg-3
        .tarjeta.p-5.color-primario.h-100.hover-modal(@click="modal1 = true")
          .d-flex.justify-content-center.w-100.mb-3
            img(src='@/assets/curso/45.svg', alt='Texto que describa la imagen' style='width: 71px').d-block
          h4.text-center Según dirección de mercancías
      .col-lg-3
        .tarjeta.p-5.color-primario.h-100.hover-modal(@click="modal2 = true")
          .d-flex.justify-content-center.w-100.mb-3
            img(src='@/assets/curso/47.svg', alt='Texto que describa la imagen' style='width: 71px').d-block
          h4.text-center Según estanterías
      .col-lg-3
        .tarjeta.p-5.color-primario.h-100.hover-modal(@click="modal3 = true")
          .d-flex.justify-content-center.w-100.mb-3
            img(src='@/assets/curso/48.svg', alt='Texto que describa la imagen' style='width: 71px').d-block
          h4.text-center Según recogida
    ModalA(:abrir-modal.sync="modal1")
      .titulo-sexto.color-primario
        h5 Tabla 4
        span Preparación de pedidos según la dirección de la mercancía.
      .row.justify-content-center
        .col-lg-10
          .tabla-a.color-primario.mb-5
            table
              thead
                tr.bg-blue
                  th(colspan='2')
              tbody
                tr
                  td(rowspan='3').px-5 <b>SEGÚN DIRECCION DE LA MERCANCIA</b><br><br> Intervienen recursos humanos y tecnológicos
                  td.p-4 <b>HOMBRRE-PRODUCTO:</b> el operario va caminando hasta donde se encuentran los productos para irlos seleccionando y recogiendo.  Sistema más tradicional.
                tr
                  td.p-4 <b>PRODUCTO-HOMBRE:</b> utilización de máquinas, sistemas y tecnologías automatizadas que se encargan de recoger los productos y llevarlos hasta el operario.
                tr
                  td.p-4 <b><em>CROSS DOCKING:</em></b>  una vez se recibidas las mercancías en la bodega, estas se despachan de forma directa, sin que se mantengan almacenadas por periodos de tiempo prolongados.
    ModalA(:abrir-modal.sync="modal2")
      .titulo-sexto.color-primario
        h5 Tabla 5
        span Preparación de pedidos según estanterías.
      .row.justify-content-center
        .col-lg-10
          .tabla-a.color-primario.mb-5
            table
              thead
                tr.bg-blue
                  th(colspan='2')
              tbody
                tr
                  td(rowspan='4').px-5 <b>SEGÚN LAS ESTANTERIAS</b><br><br> De acuerdo al lugar de ubicación de los productos en los estantes.
                  td.p-4 <b>A NIVEL DE SUELO:</b> la mercancía se encuentra ubicada a nivel del piso o suelo.
                tr
                  td.p-4 <b>NIVELES BAJOS:</b> la mercancía se encuentra a nivel del pecho del operario, formando un ángulo de 90° en los brazos que permite mejor manipulación.
                tr
                  td.p-4 <b>NIVEL MEDIO:</b>  los objetos postales o mercancías se encuentran a no más de 4 metros de altura.
                tr
                  td.p-4 <b>NIVEL ALTO:</b> estanterías completamente ocupadas, sin tener en cuenta su altura.
    
    ModalA(:abrir-modal.sync="modal3")
      .titulo-sexto.color-primario
        h5 Tabla 6
        span Preparación de pedidos según Recogida
      .row.justify-content-center
        .col-lg-10
          .tabla-a.color-primario.mb-5
            table
              thead
                tr.bg-blue
                  th(colspan='2')
              tbody
                tr
                  td(rowspan='3').px-5 <b>SEGÚN LA RECOGIDA</b><br><br> De acuerdo a su dinámica.
                  td.p-4 <b>PEDIDO A PEDIDO:</b> el operario busca el producto en la bodega y lo prepara para el despacho. Modalidad más tradicional.
                tr
                  td.p-4 <b><em>PICKING</em> EN GRUPO:</b> primero el operario busca todos los productos y los agrupa en la zona específica; posterior los embala en forma individual para el envío. 
                tr
                  td.p-4 <b><em>PICKING</em> POR ZONAS:</b> las órdenes se organizan de acuerdo a la ubicación en bodega y se preparan varios pedidos por grupos al mismo tiempo.
    h3.titulo-tercero <em>Picking</em> y consolidación de mercancía.
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-7
        p El picking es la actividad que realiza un equipo de operarios al momento de preparar los pedidos; consiste en la recogida y consolidación de cargas no unitarias que componen el pedido de un cliente. El picking es una de las actividades más costosas en el almacenamiento, puesto que implica desplazamientos y recorridos del personal; representa entre el 45% y 75% del costo total de la operación.
        .cajon.color-acento-contenido.bg-3-claro.p-4.mb-4
          p.fw-bold.mb-0 De otro lado, la consolidación de mercancía es la combinación de un conjunto de envíos individuales e independientes, en un mismo cargamento, para reducir costos generales de transporte. 
      .col-lg-4
          img(src='@/assets/curso/144.png', alt='Texto que describa la imagen')
    p.mb-5 El <em>picking</em> está compuesto por las siguientes fases: 

    .row.mb-5
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/49.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-secundario
            p  Clasificar información - Alistamiento de equipos
          
                
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/50.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-primario
            p Desde el área Operaciones hasta punto ubicación del producto.<br>Desde el punto de ubicación al siguiente.
                
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/51.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-acento-contenido
            p Posicionamiento de acuerdo a características del almacén y producto.<br>Ubicación sobre el equipo interno de transporte.
                
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/52.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-acento-botones
            p <b>Control:</b> embalaje, cajas, precintado, pesado y etiquetado<br>Traslado a zona expedición - Elaboración de <em>packing</em>.
                
    h4.titulo-cuarto Diferencias entre <em>picking</em> y <em>packing</em>
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/53.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el vocabulario logístico, existe una diferencia conceptual importante entre el <em>picking</em> y el <em>packing</em>. Identificarlos y diferenciarlos con claridad, favorece el cumplimiento de las tareas y optimización de los procesos, que tienen lugar en toda la bodega o centro de distribución.
    p.mb-5 Estas son las principales diferencias entre <em>picking</em> y <em>packing</em>:
    
    .cotenedor-tarjetas.mb-5
      .tarjeta-slide-down.tarjeta.color-primario.p-4.mb-3
        .contenedor-imagen
          img(src='@/assets/curso/54.svg', alt='Texto que describa la imagen').mb-4
        h3.text-center.mb-5 PICKING
        .d-flex.justify-content-center
          ul.lista-ul
            li.mb-0
              i.fas.fa-angle-right
              | Preparación de pedidos.

            li.mb-0
              i.fas.fa-angle-right
              | Recoger mercancías.

            li.mb-0
              i.fas.fa-angle-right
              | Recorridos y desplazamientos.

            li.mb-0
              i.fas.fa-angle-right
              | Preparación pedido.
      .tarjeta-slide-down.tarjeta.bg-purple.p-4.mb-3
        .contenedor-imagen
          img(src='@/assets/curso/55.svg', alt='Texto que describa la imagen').mb-4
        h3.text-center.mb-5 RELACIÓN
        .d-flex.justify-content-center
          ul.lista-ul
            li.mb-0
              i.fas.fa-angle-right
              | Son tareas consecutivas para ahorrar tiempos.

            li.mb-0
              i.fas.fa-angle-right
              | Aplicación de Sistema de Gestión Almacenes (SGA)
      .tarjeta-slide-down.tarjeta.color-acento-contenido.p-4
        .contenedor-imagen
          img(src='@/assets/curso/56.svg', alt='Texto que describa la imagen').mb-4
        h3.text-center.mb-5 <em>PACKING</em>
        .d-flex.justify-content-center
          ul.lista-ul
            li.mb-0
              i.fas.fa-angle-right
              | <b>Acondicionamiento y empaquetado de pedidos.</b>

            li.mb-0
              i.fas.fa-angle-right
              | Embalaje, empaquetado, etiquetado. Verificación final
    h4.titulo-cuarto Tipos de <em>picking</em>
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-7
        .cajon.color-acento-contenido.bg-3-claro.p-4.mb-4
          p.fw-bold Dentro del proceso de organización de pedidos se debe seleccionar y recoger la mercancía, con previa preparación de los mismos, a través de una orden de <em>picking</em>, la cual describe los productos que serán entregados para embalaje.
        p La empresa debe buscar la optimización de los recursos y ofrecer productos con rapidez y en las condiciones requeridas, seleccionado algún tipo de orden <em>picking</em> de acuerdo a criterios específicos, como se explica a continuación: 
      .col-lg-4
          img(src='@/assets/curso/57.png', alt='Texto que describa la imagen')
    .titulo-sexto.color-primario
      h5 Tabla 7 
      span Tipos de <em>picking</em> / Clasificación de <em>picking</em> por criterios.
    .tabla-a.color-primario.mb-5
      table
        thead
          tr.bg-blue.text-white
            th CRITERIOS
            th TIPOS DE PICKING
            th DESCRIPCIÓN
        tbody
          tr
            td(rowspan='2').px-5 <b>SEGÚN LA SEPARACIÓN DE PRODUCTOS</b><br><br> No son compatibles; cada uno es diferente en función de la rotación y volumen de las mercancías.
            td.text-center.fw-bold BATCH <em>PICKING</em>
            td Extracción conjunta de las referencias de todos los pedidos agrupados y una separación posterior de cantidades para cada pedido respectivo
          tr
            td.text-center.fw-bold <em>PICK TO BOX</em>
            td Extracción de las referencias de forma agrupada; llevadas directamente en cajas a cada envío.  Se elimina el proceso de posterior separación.
          tr
            td(rowspan='2').px-5 <b>SEGÚN SU REALIZACIÓN</b>
            td.text-center.fw-bold  <em>PICKING IN SITU:</em>
              br
              |- A nivel de suelo
              br
              |- Sobre estanterías
            td Denominado también de Hombre a Producto.  El operario recibe una lista de <em>picking</em> (<em>picking list</em>)  con la descripción específica del pedido.  Optimización de rutas para recoger el producto.
          tr
            td.text-center.fw-bold ESTACIONES DE <em>PICKING</em>
            td Utilización de medios automatizados que conducen la mercancía hasta los operarios.  Evitan múltiples desplazamientos
    h4.titulo-cuarto Consolidación de la mercancía
    p.mb-5 Esta actividad se desarrolla en el área de expedición cerca al muelle de carga; consiste en la agrupación de las mercancías procedentes de diferentes zonas de <em>picking</em>, de acuerdo a líneas de pedido o pequeños envíos en otros más grandes, permitiendo así un ahorro en costos de transporte a través de la agrupación.
      br
      br
      | Existen dos formas de consolidar la mercancía: agrupación por clientes y por destinos. A continuación, se explican brevemente:
    .row.mb-5
      .col-lg-6: img(src='@/assets/curso/58.svg')
      .col-lg-6
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta color-acento-botones")
          div(titulo="Consolidación por clientes")
            ol.lista-ol--cuadro--color
              li
                .lista-ol--cuadro__vineta
                  span a
                | Un solo cliente-único envío.
              li
                .lista-ol--cuadro__vineta
                  span b
                | Agrupar varios pedidos-mismo cliente.
              li
                .lista-ol--cuadro__vineta
                  span c
                | De acuerdo a naturaleza producto.
          div(titulo="Agrupación por destinos")
            ol.lista-ol--cuadro--color
              li
                .lista-ol--cuadro__vineta
                  span a
                | Distintos clientes-única ruta-igual medio de transporte.
              li
                .lista-ol--cuadro__vineta
                  span b
                | Se comparte el medio de transporte y parte del recorrido
    h4.titulo-cuarto Priorización de pedidos
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-4
          img(src='@/assets/curso/59.png', alt='Texto que describa la imagen')
      .col-lg-7
        p A nivel de las organizaciones, existe un cuello de botella al momento de hacer la distribución de productos o mercancías a un número muy grande de clientes, localizados en diferentes puntos geográficos.  La práctica más usual es que cada centro de distribución realice, independientemente, sus pedidos y organice las entregas; pero ante la escasez de recursos para la distribución es necesario priorizar los pedidos en cada almacén para luego hacer los envíos; siempre buscando prestar mejor servicio al cliente y hacer óptimo uso de recursos disponibles.
    p.mb-5 Por lo cual cuando se habla de priorizar pedidos:
    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-up.tarjeta.color-primario.rounded-0.p-4.h-100
          img(src='@/assets/curso/60.svg' style='width: 54px').mb-3
          h4 Colocación de pedidos
          p Hace referencia a la colocación de pedidos de acuerdo a los clientes registrados en el sistema de información, los cuales se priorizan de acuerdo al tipo de cliente mismo.
          .imagen-up
            img(src='@/assets/curso/60.jpg')
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-up.tarjeta.color-primario.rounded-0.p-4.h-100
          img(src='@/assets/curso/60.svg' style='width: 54px').mb-3
          h4 Gestión y distribución interna
          p Cuando existen varias referencias, líneas o lotes, hay la probabilidad de no entregar el pedido en perfectas condiciones y bajo las condiciones establecidas.  Aquí cobra valor, la importancia de gestionar y distribuir los pedidos al interior del almacén. 
          .imagen-up
            img(src='@/assets/curso/61.jpg')
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-up.tarjeta.color-primario.rounded-0.p-4.h-100
          img(src='@/assets/curso/60.svg' style='width: 54px').mb-3
          h4 Priorización de información de pedidos
          p La gestión y distribución de los pedidos, al interior del almacén, deben realizarse de tal forma que permita priorizar la información de los pedidos a través de sistemas de gestión y continuar con la colocación de existencias para diferentes clientes. 
          .imagen-up
            img(src='@/assets/curso/62.jpg')
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-up.tarjeta.color-primario.rounded-0.p-4.h-100
          img(src='@/assets/curso/60.svg' style='width: 54px').mb-3
          h4 Registros / sistemas informáticos
          p La colocación de existencias para diferentes clientes, se hace de acuerdo a registros soportados en los sistemas informáticos de gestión para los respectivos clientes; dicho proceso debe anticiparse y no esperar al tope de la demanda prevista.
          .imagen-up
            img(src='@/assets/curso/63.jpg')
    p.mb-5 Los pedidos, se priorizan bajo variables como:
    .bg-amarillo-claro.p-5.mb-5
      ol.lista-ol--cuadro.lista-ol--separador
        li
          .lista-ol--cuadro__vineta
            span 1
          p.ps-4 <b>Tipo de Inventario que maneja el almacén:</b> periódico o permanente.
        li
          .lista-ol--cuadro__vineta
            span 2
          p.ps-4 <b>Recepción del pedido:</b> identificación de los canales de llegada del pedido; verificar que las mercancías cumplen las condiciones mínimas de recepción.
        li
          .lista-ol--cuadro__vineta
            span 3
          p.ps-4 <b>Validación:</b>  validación de las condiciones y características de la mercancía, para continuar con el registro del pedido.
        li
          .lista-ol--cuadro__vineta
            span 4
          p.ps-4 <b>Compromiso del pedido:</b> análisis de fechas de entrega y cantidades del producto.  En caso de quedar pendiente parte del pedido, se registrará la reserva o cantidad necesaria para completar el pedido.
        li
          .lista-ol--cuadro__vineta
            span 5
          p.ps-4 <b>Estado del pedido:</b> revisión del estado exacto de la mercancía dentro del proceso de preparación y priorización del pedido; así mismo será posible conocer los plazos y costos pactados inicialmente con los clientes.
    h4.titulo-cuarto Documentos asociados a organización de pedidos
    p.mb-5 Todas las decisiones logísticas deben estar basadas en un flujo de información efectivo, esta información (documentos) se convierte en datos de gran importancia que mejoran el nivel de competitividad y productividad.
    br
    br
    br
    .row.justify-content-center.mb-5.mt-5
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.position-relative
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/64.jpg')})`}"  
          )
            .imagen-superior.position-absolute(style='bottom:0 ; left: 11.3% ; z-index: 1' ): img(src='@/assets/curso/65.png' style='width: 300px')
          .bloque-texto-g__texto(style='width: 570px').d-flex.justify-content-center.align-items-center.p-5
            p.mb-0 Con el manejo de información preciso y eficiente se puede gestionar, adecuadamente, cada una de las actividades de la cadena logística, minimizar errores, ahorrar tiempo y dinero, optimizar las entregas y mejorar el servicio al cliente.  
    p.mb-5 Dentro de la organización de pedidos se pueden establecer dos tipos de información:
    .row.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/66.svg' alt='AvatarTop')
            img(src='@/assets/curso/67.svg' alt='AvatarTop')

          .tarjeta.bg-purple-claro.p-4.h-100.d-flex.align-items-center
            .ms-5
              h4 Documentación horizontal
              p.mb-0 Aquella que permite hacer seguimiento de manera transversal a varias actividades del proceso o áreas de la empresa.
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/66.svg' alt='AvatarTop')
            img(src='@/assets/curso/67.svg' alt='AvatarTop')

          .tarjeta.bg-purple-claro.p-4.h-100.d-flex.align-items-center
            .ms-5
              h4 Documentación vertical
              p.mb-0 Aquellos documentos específicos para una sola actividad, por ejemplo, los registros asociados al transporte de la mercancía.
    p.mb-5 Durante la organización de pedidos:
    .bg-amarillo-claro.p-5.mb-5
      ol.lista-ol--cuadro.lista-ol--cuadro--separador
        li
          .lista-ol--cuadro__vineta
            span a
          p Es importante tener en cuenta las etapas del ciclo del pedido.
        li
          .lista-ol--cuadro__vineta
            span b
          p <b>Estas etapas son:</b> recepción de información detallada del producto, verificación del pedido, alistamiento o embalaje, despacho del centro de distribución a través de las rutas y entrega final.
        li
          .lista-ol--cuadro__vineta
            span c
          p El proceso debe estar orientado a la efectividad y trazabilidad del pedido.
        li
          .lista-ol--cuadro__vineta
            span d
          p Es requisito evidenciar, en soporte documental, el desarrollo de las actividades e identificar, en el menor tiempo posible, aspectos como: <b>ubicación de la mercancía, responsables, destino del producto dentro de la cadena logística.</b>
    p.mb-4 Profundice, ahora, en los diferentes componentes de la operación logística, desde la fase de recepción:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/68.svg', alt='Texto que describa la imagen')
      .tarjeta.bg-amarillo-claro.p-3(x="22%" y="44%" numero="")
        .texto-seis-alt.color-secundario
          p Llegada de mercancía:
            br
            |característica: asignación de muelle.

            br
            |registro: entrada y salida vehículo
      .tarjeta.bg-amarillo-claro.p-3(x="51.5%" y="30%" numero="")
        .texto-seis-alt.color-secundario
          p  Registro de mercancía:
            br
            |ingreso de mercancía al almacén.
            br
            br
            |registro: hoja de recepción.
            br
            |equipo: sistema de codificación.
      .tarjeta.bg-amarillo-claro.p-3(x="63%" y="44%" numero="")
        .texto-seis-alt.color-secundario
          p Etiquetado:
            br
            |reconocimiento físico del producto.
            br
            |generación de etiquetas de identificación.
            br
            br
            |equipo: impresora de etiquetas
      .tarjeta.bg-amarillo-claro.p-3(x="86%" y="66%" numero="")
        .texto-seis-alt.color-secundario
          p Almacenamiento: 
            br
            |Ubicación de la mercancía dentro del almacén de acuerdo a características y condiciones.
            br
            br
            |equipo: equipos automáticos o semiautomáticos de carga y descarga.
      .tarjeta.bg-amarillo-claro.p-3(x="47%" y="70%" numero="")
        .texto-seis-alt.color-secundario
          p Punto de control (cuantitativo y cualitativo): cantidad y estado de la mercancía, a través de una muestra aleatoria.
            br
            br
            |Registro: lista de verificación o de chequeo
            br
            |Equipo: báscula (si aplica)
      .tarjeta.bg-amarillo-claro.p-3(x="33%" y="64%" numero="")
        .texto-seis-alt.color-secundario
          p Verificación inicial:
            br
            |característica: datos registrados coinciden con la mercancía. Y descargue.
            br
            br
            |registro: nota de entrada (albarán)
    //todo PENDIENTE AGREGAR EL DOCUMENTO ENLACE
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center.px-5
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/26.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small.mb-0 Profundice en los aspectos más importantes, relativos a las zonas del almacén, estudiando conscientemente el documento: <b>Guía del Almacén en la cadena logística.</b>
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50249?page=71" target="_blank")
                span Ver más 
                i.fas.fa-file-download
    //todo PENDIENTE AGREGAR EL DOCUMENTO ENLACE
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Dispositivos de apoyo
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-4
          img(src='@/assets/curso/69.png', alt='Texto que describa la imagen')
      .col-lg-7
        p El cambio que ha tenido la dinámica de los mercados en los últimos tiempos ha incrementado, de igual forma, la cantidad de productos que se deben gestionar y controlar.  Por eso la utilización de la tecnología y procesos de información en las empresas facilitan la gestión y control operativo de la mercancía y eficiencia en la prestación del servicio al cliente.
        .cajon.color-acento-contenido.bg-3-claro.p-4.mb-4
          p.fw-bold Este proceso se realiza a través de sistemas de comunicación, programas específicos y elementos o dispositivos necesarios para la comunicación, actualización de la información y registros en las bases de datos.
    p.mb-5 Profundice en los aspectos y generalidades más importantes en lo relacionado con dispositivos de apoyo para gestión y control de productos y mercancías; visualice atentamente el recurso que se muestra a continuación:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Elaboración de registros
    p.mb-5 Los registros generados dentro del proceso de recepción de las mercancías no se crean de manera independiente, cada uno tiene su razón de ser y son generados de manera secuencial, como se presenta en la siguiente figura.
    .titulo-sexto.color-acento-contenido
      h5 Figura 1 
      span Flujo documental generado en la realización de un pedido.
    .row.justify-content-center.align-items-center
      .col-lg-8: img(src='@/assets/curso/70.svg')
    p.mb-5 La secuencia de los registros del proceso de recepción de mercancías, cuenta con las siguientes fases:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        LineaTiempoD.color-acento-contenido.linead-editada
          .row(numero="1" titulo="Pedido").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/71.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Solicitud formal para para registrar requerimientos de mercancías, a través de una hoja de pedido. Existen dos formas de realizar el pedido: Verbal y Escrito. En los dos casos se deja evidencia registrada en documento escrito y se envía copia al cliente, para futuras reclamaciones.
          .row(numero="2" titulo="Orden de <em>picking</em>").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/72.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Documento donde se transmite la información al operario, sobre los productos que debe recoger, con la descripción detallada de los mismos.
          .row(numero="3" titulo="Registro Pedido").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/73.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Su función principal es hacer control y seguimiento de mercancías hasta estar ubicadas en la respectiva zona del almacén; desde el momento de tener clara la fecha de entrega es importante planear la recepción, manipulación y entrega de la misma.
          .row(numero="4" titulo="Nota de entrega (o albarán)").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/74.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Documento es expedido por el vendedor y enviado al comprador; sirve como guía, evidencia que ha sido entregada la mercancía y así elaborar la factura.
          .row(numero="5" titulo="Hoja de recepción").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/75.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Al momento de llegar la mercancía al almacén se debe registrar la entrada, allí se debe relacionar la orden de compra y nota de entrega (punto de control).
          .row(numero="6" titulo="Factura").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/76.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Registro que acredita oficialmente la prestación del servicio, se elabora tomando como base el registro del pedido.
          .row(numero="7" titulo="Etiquetas electrónicas").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/77.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Esta tecnología permite la identificación automática usando ondas de radiofrecuencia; como apoyo a codificación y trazabilidad de las mercancías.
          .row(numero="8" titulo="Hoja de carga").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/78.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Aquí se registran las condiciones al finalizar el embalaje, antes de entregar al medio de transporte asignado.
          .row(numero="9" titulo="Sistema intercambio").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/79.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 El sistema intercambio electrónico de documentos <em>(Electronic Data Interchange)</em> es una tecnología que permite el intercambio de documentos vía electrónica entre empresas.







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

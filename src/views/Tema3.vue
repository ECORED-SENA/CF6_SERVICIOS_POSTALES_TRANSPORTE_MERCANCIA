<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Verificación de mercancía
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-4
          img(src='@/assets/curso/80.png', alt='Texto que describa la imagen')
      .col-lg-7
        p Los pequeños errores pueden generar sobrecostos o retrasos en las operaciones; por tanto, es importante realizar la verificación de la mercancía que ingresa y sale del almacén.   
        .cajon.color-acento-contenido.bg-3-claro.p-4.mb-4
          p.fw-bold En muchas empresas se tienen establecidos o estandarizados los procesos y procedimientos que desarrolla cada una de las áreas, lo cual facilita y aporta información de referencia en cada etapa del proceso; en este caso, basados en las condiciones y características que deben cumplir los productos postales.
    p.mb-5 Estas son algunas particularidades de la gestión de pedidos, que deben tenerse muy en cuenta:
    .row.mb-5.justify-content-center.mb-5
      .col-lg-5.mb-3
        .tarjetas-up_card.bg-purple-claro2.p-5(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/81.svg', alt='Texto que describa la imagen' style='width: 102px')
          .title.d-flex.align-items-center.mb-4
            h4.mb-0.me-2 ¡Atención!
            span.c--4
              i.fas.fa-caret-up.fa-2x.color-primario.me-3
              i.fas.fa-caret-down.fa-2x.color-primario.me-3
          p El éxito de las organizaciones se enmarca en el grado de satisfacción del cliente, por tanto, lo que se pretende es reducir, al máximo, reprocesos y pérdida de tiempo, traducido en, otras palabras, mayores costos.
      .col-lg-5.mb-3
        .tarjetas-up_card.bg-red.p-5(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/82.svg', alt='Texto que describa la imagen' style='width: 102px')
          .title.d-flex.align-items-center.mb-4
            h4.mb-0.me-2 ¡Importante!
            span.c--4
              i.fas.fa-caret-up.fa-2x.color-primario.me-3
              i.fas.fa-caret-down.fa-2x.color-primario.me-3
          p Para evitar reprocesos y lograr la satisfacción del cliente, se necesita referenciar aquellas variables cualitativas (se pueden observar) y cuantitativas (requieren un conteo) en la verificación de mercancías y así aportar en la toma de decisiones de la organización.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido.mb-5
      h2 3.1 Servicio, mercancía y objeto postal
    p.mb-5 Desde el Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC), a través del “Plan Nacional de Desarrollo 2018 - 2022 Pacto por Colombia, Pacto por la Equidad” (PND), se promoverá la modernización del sector postal, tomando como principios los lineamientos consignados en el Pacto por la Transformación Digital de Colombia. Allí, resaltan la necesidad de potencializar los servicios postales, en el marco de una economía cada vez más digital y el comercio electrónico. 
    .row.justify-content-center.mb-5
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.bloque-editado.p-3.p-sm-4.p-md-5.postion-relative
          .img(style="top: 34%; left: 4%; z-index: 1; width: 40%;")
            img(src='@/assets/curso/83.png', alt='Texto que describa la imagen')
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/84.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Los servicios postales en Colombia han permitido y apoyado el despliegue de nuevos productos y servicios postales como el comercio electrónico, el acercamiento de la demanda con la oferta de productos de todos los sectores de la economía y, además, han facilitado el envío de piezas postales a zonas alejadas del país.
    p.mb-5 Estudie el glosario de términos, expuesto en el Plan de Modernización postal 2020 – 2024, mediante el recurso que se muestra a continuación:
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor-imagen-modal.position-relative
          .tarjeta.color-secundario.d-flex(style="width: 100%; height: 10%; top: 0; left: 0;" @click="modal1 = true" @mouseover="mostrarIndicador = false" )
            .indicador--click(v-if="mostrarIndicador")
          .tarjeta.color-secundario(style="width: 23%; height: 25%; top: 15%; right: 26%;" @click="modal2 = true")
          .tarjeta.color-secundario(style="width: 23%; height: 25%; top: 15%; right: 0%;" @click="modal3 = true")
          .tarjeta.color-secundario(style="width: 23%; height: 13%; top: 65%; left: 26%;" @click="modal4 = true")
          .tarjeta.color-secundario(style="width: 23%; height: 13%; top: 86%; left: 12%;" @click="modal5 = true")
          .tarjeta.color-secundario(style="width: 23%; height: 13%; top: 86%; left: 39%;" @click="modal6 = true")
          img(src='@/assets/curso/85.svg')
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center.align-items-center
        .col-md-6
          figure
            img(src='@/assets/curso/87.jpg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h4 RED POSTAL
          p Conjunto de instalaciones, equipos y demás dispositivos destinados a la prestación de los servicios postales ofrecidos al público en general de manera directa o indirecta por los Operadores de Servicios Postales. Hacen parte de la Red Postal los puntos de atención a los usuarios de servicios postales.
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center.align-items-center
        .col-md-6
          figure
            img(src='@/assets/curso/88.jpg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h4 Servicios postales
          p Desarrollo de las actividades de recepción, clasificación, transporte y entrega de objetos postales a través de redes postales, en el territorio nacional o para enviar a otros países o recibir del exterior.
            br
            br
            |Así mismo, los clasifica en servicios de correo, servicios postales de pago, servicios de mensajería expresa y otros servicios postales, definidos como aquellos que la unión postal universal clasifique como tales. 
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center.align-items-center
        .col-md-6
          figure
            img(src='@/assets/curso/89.jpg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h4 Código postal
          p El código postal es una <b>estructura numérica o alfanumérica</b> que se asigna a un área geográfica de un país y facilita la entrega de correspondencia, pues identifica cada destino con un único número, facilitando la entrega de un envío y complementando la dirección física en formularios para compras por comercio electrónico. En Colombia, el código postal consta de 6 dígitos
    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center.align-items-center
        .col-md-6
          figure
            img(src='@/assets/curso/90.jpg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h4 Encomienda
          p La encomienda es el servicio obligatorio y exclusivo para el Operador Postal Oficial o Concesionario de correo, que consiste en la recepción, clasificación, transporte y entrega no urgente, de objetos postales, mercancías, paquetes o cualquier artículo de permitida circulación en el territorio nacional o internacional, con o sin valor declarado, hasta un peso de treinta (30) kg, conforme a lo establecido por la Unión Postal Universal.
    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center.align-items-center
        .col-md-6
          figure
            img(src='@/assets/curso/91.jpg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h4 Mercancía Postal
          p Aquellas encomiendas o paquetes que no sobrepasen un peso de 30 kg.
    ModalA(:abrir-modal.sync="modal6")
      .row.align-items-center.align-items-center
        .col-md-6
          figure
            img(src='@/assets/curso/92.jpg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h4 Objetos Postales 
          p Cartas, tarjetas postales, extractos de cuentas, recibos de toda clase, impresos, periódicos, envíos publicitarios y pequeños paquetes (hasta 2 kg).
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Métodos de verificación
    p.mb-5 Es de vital importancia lograr la identificación única por artículo o producto, con el objetivo de facilitar el control de los inventarios, tipo de servicio, verificación del stock, verificación y trazabilidad de la mercancía, operatividad en tiempo real, y reducción de costos.
      br
      br
      |Los siguientes, son mecanismos de identificación para los productos; conózcalos y tome nota, en su libreta personal de apuntes, sobre los aspectos más relevantes de ellos:
    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-up.tarjeta.color-primario.p-5.h-100
          img(src='@/assets/curso/93.jpg')
          h3 Código de barras
          ul.lista-ul
            li
              i.vineta__1
              | Sistema Internacional GS1.
            li
              i.vineta__1
              | Codificación de unidades envasadas.
            li
              i.vineta__1
              | Representación de caracteres numéricos o alfabéticos en forma de código.
            li
              i.vineta__1
              |Se compone de una secuencia de barras verticales separadas por espacios.
            li
              i.vineta__1
              | Sistema GTIN-13: identificación de unidades para la venta.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-up.tarjeta.bg-purple.p-5.h-100
          img(src='@/assets/curso/94.jpg')
          h3 Código Qr
          ul.lista-ul
            li
              i.vineta__2
              | Código de barras bidimensionales, o código de respuesta rápida. Permiten almacenar información en una matriz de puntos.
            li
              i.vineta__2
              | Reduce los errores en la lectura.

            li
              i.vineta__2
              | No requiere máquinas especiales para la creación.

            li
              i.vineta__2
              |El más utilizado actualmente, se puede leer en dispositivos con aplicaciones apps.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-up.tarjeta.color-acento-contenido.p-5.h-100
          img(src='@/assets/curso/95.jpg')
          h3 Etiquetas electrónicas
          ul.lista-ul
            li
              i.vineta__3
              | Etiqueta RFID, permite identificación automática usando ondas radiofrecuencias.
            li
              i.vineta__3
              | Recurso más sofisticado, basado en circuitos y micropocesadores.
            li
              i.vineta__3
              | Compuesto de etiqueta (activa o pasiva), lector, pieza de software, red global.
    h3.titulo-tercero Inventarios
    p.mb-5 El inventario es la metodología aplicada para realizar el recuento exacto de los productos existentes en el almacén, por medio del cual se verifica la cantidad y valor de la mercancía.  Según normativa, se debe realizar la actualización mínima una vez al año y aplicar alguna de las metodologías que se muestran en la siguiente tabla:
    .titulo-sexto.color-primario
      h5 Tabla 8
      span Metodologías verificación y control de mercancías
    .row.justify-content-center.mb-5
      .col-lg-9
        .tabla-a.color-primario.mb-5
          table
            thead.bg-blue
              tr
                th(colspan=2).p-4
            tbody
              tr
                td(rowspan='3').fw-bold.px-5 GESTIÓN DE LAS EXISTENCIAS
                td <b>LIFO:</b> último que entra es el primero que sale.  Habitualmente para productos que no tienen caducidad.
              tr
                td <b>FIFO:</b> primero que entra es el primero que sale. La mercancía con mayor antigüedad es la que primero debe salir.
              tr
                td <b>FEFO:</b> el primero que caduca es el primero que sale. La mercancía se ubica de acuerdo a la fecha de vencimiento, para que salga primero.
              tr
                td(rowspan='3').fw-bold.px-5 METODOLOGÍAS DE CONTEO DE LA MERCANCÍA 
                td <b>PERIÓDICO:</b> el contero se realiza al final del periodo.   
              tr
                td <b>PERMANENTE:</b> se realiza continuamente la verificación de las existencias. El inventario permanece actualizado.
              tr
                td <b>FÍSICO:</b> verificación ocular  de las existencias registradas.  Importante realizar en periodos de baja actividad, para no interferir con el proceso.
              tr
                td(rowspan='3').fw-bold.px-5 DISTRIBUCIÓN DE INVENTARIOS (ABC)
                td <b>PRODUCTOS A:</b> rotación de productos alta o muy alta
              tr
                td <b>PRODUCTOS B:</b> rotación de productos media
              tr
                td <b>PRODUCTOS C:</b> rotación de productos baja o nula.
    .tarjeta.color-primario.p-3.mb-3
      .row.justify-content-around.align-items-center.px-5
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/26.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small.mb-0 Amplíe la información sobre “Inventarios”, ingresando a la biblioteca virtual SENA y explorando el archivo: <b>Gestión lógica y comercial.</b> (Gómez Aparicio, J.M., 2013).
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50240?page=1" target="_blank")
                span Ver más 
                i.fas.fa-file-download
    .tarjeta.color-secundario.p-3.mb-5
      .row.justify-content-around.align-items-center.px-5
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/26.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small.mb-0.text-white Para afianzar su saber y manejo de las Variables de las mercancías postales, dentro del proceso y métodos de verificación, visite el <b>Anexo_2_VariablesMercanciasPostales.</b>
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/documento5.pdf')" target="_blank")
                span Ver más 
                i.fas.fa-file-download
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Clasificación de mercancía de acuerdo a novedad        
    p.mb-5 La preparación de pedidos es uno de los puntos, dentro de la cadena de abastecimiento, con mayor posibilidad de reportar inconsistencias; esto puede generar posibles defectos en el embalaje o la misma mercancía. 
      br
      br
      |Las inconsistencias más comunes de verificar en la preparación de pedidos son:   
    .row.mb-5
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/96.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-secundario
            p   Ocurre con poca frecuencia, se genera por errores en la ubicación, preparación y entrega del pedido o no encontrarse la cantidad del producto.         
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/97.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-secundario
            p Aunque es común, pero no frecuente la entrega de productos o mercancía no solicitada por errores en la preparación, ubicación o entrega del pedido.         
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/98.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-secundario
            p Es la novedad reportada con mayor frecuencia y se produce por diversos factores: errores en los registros, inadecuada selección del pedido, falta de existencias, dificultad para localizar el producto por ubicación incorrecta, suministro de información errada.         
      .col-lg-3
        .tarjeta.p-4
          .d-flex.justify-content-center
            img(src='@/assets/curso/99.svg', alt='Texto que describa la imagen' style='width: 181px').mb-4
          .texto-seis-alt.color-secundario
            p La inadecuada gestión del proceso conlleva a cometer errores humanos y deficiente control del proceso.  
    h3.titulo-tercero Gestión de las devoluciones    
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-4
          img(src='@/assets/curso/100.png', alt='Texto que describa la imagen')
      .col-lg-7
        p Aquellas devoluciones que ocurren en el almacén se originan por diversas causas, por tanto, deben tener diferentes tratamientos y una zona en bodega, que permita el reintegro al almacén nuevamente.  Así la logística de devoluciones se encarga del retorno de los productos a la empresa y embalaje respectivo; lo que se conoce como logística inversa o de recuperación. 
    .titulo-sexto.color-primario
      h5 Tabla 9
      span Principales razones de las devoluciones de productos
    .row.justify-content-center.mb-5
      .col-lg-5
        .tarjeta.bg-purple-claro.p-5
          img(src='@/assets/curso/101.svg', alt='Texto que describa la imagen' style='width: 93px').mb-3
          h3 PRODUCTOS  NUEVOS
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/102.svg', alt='Texto que describa la imagen' style='width: 36px').me-2
            p.mb-0  Cambio de opinión del cliente.
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/103.svg', alt='Texto que describa la imagen' style='width: 36px').me-2
            p.mb-0 Producto defectuoso.
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/104.svg', alt='Texto que describa la imagen' style='width: 36px').me-2
            p.mb-0  Daños durante el transporte.
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/105.svg', alt='Texto que describa la imagen' style='width: 36px').me-2
            p.mb-0  Error en envío.
      .col-lg-5
        .tarjeta.bg-amarillo-claro.p-5
          img(src='@/assets/curso/106.svg', alt='Texto que describa la imagen' style='width: 93px').mb-3
          h3 PRODUCTOS  USADOS
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/107.svg', alt='Texto que describa la imagen' style='width: 36px').me-2
            p.mb-0 Garantía.
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/108.svg', alt='Texto que describa la imagen' style='width: 36px').me-2
            p.mb-0  Retorno de embalajes.
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/109.svg', alt='Texto que describa la imagen' style='width: 36px').me-2
            p.mb-0  Finalizada vida útil.
          .d-flex.align-items-center.mb-3
            img(src='@/assets/curso/110.svg', alt='Texto que describa la imagen' style='width: 36px').me-2
            p.mb-0 Finalización actividades  
    p.mb-5 En la devolución de embalajes y sus tratamientos, tenga en cuenta:
    .row.mb-5
      .col-lg-3
        .tarjeta.bg-gris.rounded-2.p-5
          img(src='@/assets/curso/111.svg', alt='Texto que describa la imagen' style='width: 66px').mb-3
          h4.mb-0  Reutilización
          p.mb-0  Volver a utilizar los envases o embalajes, siempre y cuando estén en buenas condiciones e higiene.
      .col-lg-3
        .tarjeta.bg-gris.rounded-2.p-5
          img(src='@/assets/curso/112.svg', alt='Texto que describa la imagen' style='width: 66px').mb-3
          h4.mb-0  Recuperación
          p.mb-0  Recuperar o reparar partes específicas para futura utilización.
      .col-lg-3
        .tarjeta.bg-gris.rounded-2.p-5
          img(src='@/assets/curso/113.svg', alt='Texto que describa la imagen' style='width: 66px').mb-3
          h4.mb-0 Reciclaje 
          p.mb-0  Recuperar materias primas  de los embalajes.
      .col-lg-3
        .tarjeta.bg-gris.rounded-2.p-5
          img(src='@/assets/curso/114.svg', alt='Texto que describa la imagen' style='width: 66px').mb-3
          h4.mb-0 Eliminación
          p.mb-0  El envase o embalaje se elimina definitivamente.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Herramientas digitales 
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-4
          img(src='@/assets/curso/115.png', alt='Texto que describa la imagen')
      .col-lg-7
        p El complemento de los dispositivos, son las diferentes herramientas digitales (a través de los sistemas de información) que gestionan aquellas actividades desarrolladas dentro del almacén, cuya finalidad es apoyar la gestión física de la mercancía, desde que ingresa al almacén hasta que sale en los centros de almacenamiento o distribución e, incluso, hacer seguimiento a las devoluciones e inconsistencias.
    p.mb-5 Algunas de las herramientas digitales más usadas son:
    .contenedor-slyder.p-5.bg-amarillo-claro2.position-relative.mb-5
      .img-float: img(src='@/assets/curso/116.png', alt='Texto que describa la imagen')
      SlyderA(tipo='a')(mostrarIndicador='false')
        .row.justify-content-center.py-5
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/118.jpg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0.mt-5
            h4 SGA (Sistema de Gestión de Almacén)
            p Su función más importante es mantener controlado el stock de mercancía (número de existencias registradas, equivalente a existencias físicas).
        .row.justify-content-center.py-5
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/119.jpg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0.mt-5
            h4 ERP (<em>Enterprise Resource Planning</em>)
            p Sistema Integral de Gestión Empresarial, que automatiza la mayoría de los procesos de la organización (administración, logística, producción y comercialización).  Lo ideal es lograr integrar los dos sistemas SGA-ERP pues comparten información y se complementan uno con el otro.
        .row.justify-content-center.py-5
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/120.jpg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0.mt-5
            h4 EDI (<em>Electronic Data Interchange</em>)
            p Realiza el traspaso de documentos comerciales a un formato normalizado. La información podrá ser compartida entre empresas.  No es un correo electrónico, pues los datos deben contar con un estándar internacional.
        .row.justify-content-center.py-5
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/121.jpg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0.mt-5
            h4 RFID
            p Sistema de navegación mediante radiofrecuencia, aplicable al transporte y/o ubicaciones dentro y fuera del almacén.
        .row.justify-content-center.py-5
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/122.jpg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0.mt-5
            h4 MPS (Plan Maestro de Producción)
            p Programa de producción a nivel superior que se usa para fijar el plan de producción de cualquier fábrica, decidiendo qué, cuánto y en qué fecha se va a fabricar, a medio plazo.
        .row.justify-content-center.py-5
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/123.jpg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0.mt-5
            h4.fst-italic Business Intelligence
            p Sistema inteligente que recopila, analiza y visualiza, datos importantes sobre las actividades del almacén; a través del cual se puede obtener información como: rutas de transporte, recogida, recepción, tiempos de carga, emisiones de CO2, entre los principales.
        .row.justify-content-center.py-5
          .col-md-5
            .rounded-3.overflow-hidden
              figure.img-rounded
                img(src='@/assets/curso/124.jpg', alt='Texto que describa la imagen')
          .col-md-5.mb-4.mb-md-0.mt-5
            h4.fst-italic Supply Chain Management (SCM)
            p Gestión de la Cadena de Suministro. Son todos aquellos procesos donde se planifican y controlan los elementos involucrados en las diferentes fases de la cadena de suministro; la logística hace parte del ciclo completo.
    p.mb-5 Visualice en el siguiente esquema, un ejemplo en el cual se aplican los sistemas informáticos en la gestión de un almacén:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10: img(src='@/assets/curso/117.svg')
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center.px-5
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/26.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small.mb-0 Refuerce los aspectos más importantes de este punto, ingresando a la biblioteca virtual SENA y estudiando el documento: <b>Gestión y pedido de Stock (Rubio Ferrer, J., 2013):</b>
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/49351?page=159" target="_blank")
                span Ver más 
                i.fas.fa-file-download
    h3.titulo-tercero Integración de las tecnologías
    .row.justify-content-center.mb-5.mt-5
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.position-relative
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/125.jpg')})`}"
          )
            .imagen-superior.position-absolute(style='bottom:0 ; left: 12.5% ; width: 302px ; z-index:1' ): img(src='@/assets/curso/126.png')
          .bloque-texto-g__texto.p-5(style="width: 65%")
            p.mb-0 El sistema de Radiofrecuencia (RFID) ha facilitado la gestión, el control y eficiencia en las operaciones del almacén; facilitando el almacenamiento y recuperación de la información (datos), apoyado en los diferentes dispositivos como lectores de códigos, de barras o infrarrojos y PDA, principalmente. 
    .titulo-sexto.color-primario
      h5 Figura 2
      span Integración y funcionamiento de las tecnologías en el almacén.
    figure.mb-5
      img(src='@/assets/curso/127.svg', alt='Texto que describa la imagen')
    p.mb-5 Las siguientes son algunas utilidades y beneficios que trae la aplicación y uso de las herramientas digitales en las actividades desarrolladas dentro del almacén:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span a
            p.mb-0.fw-bold Mayor cantidad de datos almacenados.
          li 
            .lista-ol--cuadro__vineta
              span b
            p.mb-0.fw-bold Facilitar la comunicación entre los diferentes sistemas .
          li 
            .lista-ol--cuadro__vineta
              span c
            p.mb-0.fw-bold Información en tiempo real.
          li 
            .lista-ol--cuadro__vineta
              span d
            p.mb-0.fw-bold Poder hacer cambios y seguimiento durante la cadena de suministro.
          li 
            .lista-ol--cuadro__vineta
              span e
            p.mb-0.fw-bold Mejor control de los inventarios y reducción de tiempos.
          li 
            .lista-ol--cuadro__vineta
              span f
            p.mb-0.fw-bold Aportar valor en el servicio de atención al cliente (mantiene informado).
          li 
            .lista-ol--cuadro__vineta
              span g
            p.mb-0.fw-bold Amabilidad con el medioambiente, en la reducción de papelería.
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5 Generalidades bases de datos
    .row.justify-content-center.align-items-center.mb-5.mt-5.g-0
      .col-lg-4
          img(src='@/assets/curso/128.png', alt='Texto que describa la imagen')
      .col-lg-7
        p  A lo largo de la cadena de suministro, en logística, se genera gran cantidad de información que, para este caso se denomina datos; los cuales se han multiplicado y revolucionado con las tecnologías de los últimos años. 
        .cajon.bg-purple-claro2.p-4.mb-4
          p En busca de una solución para el control y gestión de la información, se ha recurrido a sistemas de información que logren generar valor a los datos, para la toma de decisiones. Hoy en día se conoce como tecnología 4.0 y suministros inteligentes <b><em>“Big Data”</em></b>.  
    .row.mb-5
      .col-lg-6.mb-3
        .tarjeta-text-up.mb-5(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/129.jpg')
          .tarjeta-text-up__texto.p-4
            h4 Logística / Logística 4.0
            
            p Denominada también Cuarta Revolución Industrial. 
              br
              br
              |4.0 indica innovación, nuevas formas de hacer logística: el uso de herramientas novedosas optimiza el desarrollo de procesos, cadenas de suministro inteligentes (Big Data o Machine Learning). 
      .col-lg-6.mb-3
        .tarjeta-text-up.mb-5.d-flex
          img(src='@/assets/curso/130.jpg')
          .tarjeta-text-up__texto.p-4
            h4 Fuentes de información
            
            p Debido al volumen de datos que maneja la cadena de suministro es imposible analizar y tomar decisiones con métodos tradicionales. Se requiere organizar  diferentes fuentes para suministro de información:
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | Alertas de desabastecimiento en el centro de distribución.
              li
                i.fas.fa-angle-right
                | Flujos de distribución y rutas de transporte.

              li
                i.fas.fa-angle-right
                | Control de inventarios.
              li
                i.fas.fa-angle-right
                | Proyecciones contables.
              li
                i.fas.fa-angle-right
                | Comportamiento de  usuarios, con registros en sitios web.
              li
                i.fas.fa-angle-right
                | Servicio de atención al cliente.
              li
                i.fas.fa-angle-right
                p.mb-0 <b>Reportes del área de transporte:</b> con apoyo de sensores y tecnologías GPS. Es posible controlar horarios, recorridos, consumo de combustible, estado del tiempo y de las vías.
              li
                i.fas.fa-angle-right
                | Mantenimiento preventivo de equipos y herramientas.
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido
      h2 3.6 Reporte de novedades e inconsistencias
    p.mb-5 En logística, existe una importante variedad de información que permite medir y controlar la gestión.  Sin embargo, se debe tener en cuenta qué se quiere medir, para lograr identificar los datos necesarios en el registro y análisis de la información.
      br
      br
      |En lo referente a reportes de novedades e inconsistencias, hay que conocer y aplicar conceptos y procedimientos como los que se mencionan a continuación: 
    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Novedad").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/131.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Condición especial de la mercancía identificada en el envío, como: <b>novedad respecto al destino</b>, cuando se hizo envío de mercancía a una ciudad diferente a la solicitada, con destino a un Apartado Aéreo, direcciones cruzadas o confusas. No se hacen entregas en cárceles o guarniciones militares.
          .row(numero="2" titulo="Novedad respecto al Riesgo").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/132.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Riesgo en seguridad de la mercancía:  metales preciosos y otros objetos de valor.  Dinero en efectivo, joyas o piedras finas.  Bonos o tickets pagaderos al portador.  Antigüedades y obras de arte.
          .row(numero="3" titulo="Novedad respecto al embalaje y empaque").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/133.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Mercancía con empaque y embalaje no adecuados. Cajas de cartón amarradas o selladas inadecuadamente. Empaques deteriorados o manchados.  Empaques que contengan más de un rótulo diferente. 
                br
                |Unidades de empaque reutilizados. 
          .row(numero="4" titulo="Novedad por diligenciamiento de documentos").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/134.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 No se encuentra el valor declarado, lo cual exime responsabilidades.  Falta de información, espacios sin diligenciar, tachones o enmendaduras en formularios.
          .row(numero="5" titulo="Inconsistencia").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/135.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Defectos de mercancía encontrados al verificar, según información de documentos que lo acompañan:  embalaje o entrega de la mercancía inadecuada según solicitud de pedido, cantidad o artículo erróneo, falta de algún artículo, error en los registros, ubicación incorrecta, etc.
          .row(numero="6" titulo="Indicador de desempeño").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/136.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Aquellos indicadores que se enfocan a cuantificar el desempeño de la gestión logística y cadena de abastecimiento.
          .row(numero="7" titulo="Logística").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/137.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Conjunto de actividades necesarias para prestar un servicio, desde la compra, empaquetado, transporte, envío y entrega al cliente final.  Cómo llevar de la manera más eficiente y eficaz la mercancía a los clientes.
          .row(numero="8" titulo="Hoja de carga").align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/138.svg', alt='Texto que describa la imagen' style='width: 102px')
            .col-md-9.mb-4.mb-md-0
              p.mb-0.ps-3 Traer todo aquello que se requiere para desarrollar una actividad específica.
    br
    br
    .row.justify-content-center.mb-5.mt-5
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.position-relative
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/139.jpg')})`}"
          )
            .imagen-superior.position-absolute(style='bottom: 0; left: -5%'): img(src='@/assets/curso/140.png')
          .bloque-texto-g__texto.p-5(style='width: 70%')
            p.mb-0 <b>Dentro de la cadena logística existen cinco áreas genéricas:</b> Planificación de pedios, Abastecimiento, Transporte, Gestión de Pedidos y Distribución.  En cada una de estas áreas se mide y controlan diferentes variables (expresados en indicadores), depende del tipo de organización.
    p.mb-5 Esta es una explicación sintética de las cinco principales áreas de la cadena logística:
    .titulo-sexto.color-acento-
      h5 Tabla 10
      span Principales áreas en logística e Indicadores 
    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-a.color-primario.mb-5
          table
            thead.bg-blue.text-white
              tr
                th ÁREAS
                th INDICADORES
            tbody
              tr
                td(rowspan='3').fw-bold.text-center Cadena de Abastecimiento
                td Rotación de Inventario
              tr
                td Stock de materias primas no planificadas
              tr
                td Errores de previsión de demanda
              tr
                td(rowspan='5').fw-bold.text-center Abastecimiento
                td Rotación de materia prima
              tr
                td Costo compras
              tr
                td Plazo aprovisionamiento
              tr
                td Plazo de pagos
              tr
                td Errores de acturación
              tr
                td(rowspan='7').fw-bold.text-center Transporte
                td Costo transporte unitario
              tr
                td Costo por kilómetro
              tr
                td Costo transporte sobre ventas
              tr
                td Costo por kilográmo
              tr
                td Entregas a tiempo
              tr
                td Entregas urgentes
              tr
                td Envíos por pedido
              tr
                td(rowspan='4').fw-bold.text-center Distribución
                td Productividad  vs. volumen
              tr
                td Productividad vs. mano de obra
              tr
                td Unidades procesadas
              tr
                td Plazo de envío a centro de distribución
              tr
                td(rowspan='7').fw-bold.bg-purple-claro.text-center Gestión de pedidos o de calidad
                td <b>Entregas perfectas:</b>  ingreso correcto y entregas sin daños ni averías
              tr
                td <b>Entregas a tiempo</b> y lugar indicado
              tr
                td <b>Entregas completas:</b> cantidades exactas y correctas
              tr
                td <b>Empacados de acuerdo al cliente.</b>  Información del estado durante 24 horas
              tr
                td <b>Pedidos documentados sin errores</b>
              tr
                td <b>Averías:</b> por empaque o Durante el transporte.
              tr
                td <b>Servicio al cliente:</b>  cumplimiento de tiempos y  entrega
    h3.titulo-tercero Registro de Inconsistencias y Novedades
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-4
          img(src='@/assets/curso/141.png', alt='Texto que describa la imagen')
      .col-lg-7
        p Dentro del proceso logístico existe un documento denominado Nota de entrega (albarán). Su función es servir como respaldo y crédito de la entrega de mercancía al cliente, en las condiciones inicialmente pactadas y así generar la información para elaborar la factura. En el caso que la mercancía recibida no cumpla con lo solicitado o registrado en el pedido, podrá devolverse al sitio de despacho y dejar por escrito la salvedad de la devolución firmando y describiendo los detalles en el albarán.
    p.mb-5 La información que debe contener es:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span a
            | Datos completos del remitente o quien envía la mercancía: nombre, razón social, dirección, teléfono, correo electrónico, etc.
              
          li 
            .lista-ol--cuadro__vineta
              span b
            | Número de orden y fecha de emisión.
              
          li 
            .lista-ol--cuadro__vineta
              span c
            | Transportista: nombre del transportista o empresa transportadora.  Forma de envío.

              
          li 
            .lista-ol--cuadro__vineta
              span d
            | Datos específicos de la mercancía: descripción, código, cantidad, valor.
              
          li 
            .lista-ol--cuadro__vineta
              span e
            | Fecha de salida de la mercancía.
              
          li 
            .lista-ol--cuadro__vineta
              span f
            | Número de referencia y fecha del pedido.
              
          li 
            .lista-ol--cuadro__vineta
              span g
            | Datos completos destinatario o quien recibe.  Lugar y condiciones de entrega.
              
          li 
            .lista-ol--cuadro__vineta
              span h
            | Observaciones: novedades o inconsistencias al momento de verificar.  En caso que no sea posible realizar la verificación, se sugiere anotar “Aceptado sin revisar”.  
              
          li 
            .lista-ol--cuadro__vineta
              span i
            | Otro documento que se puede utilizar para registrar las inconsistencias es la hoja de agencia de transporte, pues en ocasiones la novedad se presenta durante el transporte.
              
          li 
            .lista-ol--cuadro__vineta
              span j
            | Quién recibe: nombre, identificación y firma de quien recibe o empresa receptora.
              
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .tarjeta.color-primario.boton-modal.position-relative.p-5(@click="modal7 = true" @mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src='@/assets/curso/142.svg', alt='Texto que describa la imagen' style='width: 122px; position: absolute; top: -5%; left: 20px;')
          .row.justify-content-end
            .col-6
              h4.mb-0 Importante
    ModalA(:abrir-modal.sync="modal7")
      .contenido-modal
        .titulo-sexto.color-primario
          h5 Figura 3
          span Modelo nota de Entrega / Albarán
        figure.mb-5
          img(src='@/assets/curso/143.png', alt='Texto que describa la imagen')






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

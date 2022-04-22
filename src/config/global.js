export default {
  global: {
    componenteFormativo: 'Atención PQR',
    descripcionCurso:
      'Peticiones, Quejas y Reclamos, orienta la investigación prospectiva de la sensibilidad de los clientes respecto de los servicios prestados mediante procedimientos y normas establecidos. PQR establece los parámetros de mejora continua del proceso, definiendo cuales son las áreas de oportunidad de mejora de los procesos, su logística, registro y seguimiento. Estos lineamientos estipulan el paso a paso del proceso en PQR.',
    // imagenBannerPrincipal: require('@/assets/curso/banner/imagen-banner.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner/fondo-banner.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Manejo de PQRS',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Atención de peticiones, quejas y reclamos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manejo de sugerencias y recomendaciones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Valoración de las felicitaciones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Caracterización del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Servicios y solicitudes en Aeromensajería',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Portafolio de servicios, canales y trazabilidad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Factores de atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Diferencia entre servicio, atención y experiencia de cliente',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Ciclo de servicio al cliente',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estrategias de servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Ejecutar procedimiento de manejo de PQRS',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Ciclo del sistema de PQRS',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arrieta Posada, J. (Junio de 2011). <em>SCIELO</em>. Obtenido de Aspectos a considerar para una buena gestión en los almacenes de las empresas (CEDIS). <em>Journal of Economics, Finance and Administrative Science, 16(30).</em>',
      link:
        'http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S2077-18862011000100007',
    },
    {
      referencia:
        'Campo, V., A., Hervás, E., A., y Revilla, R., M. (2013). <em>Operaciones de almacenaje.</em> McGraw Hill.',
    },
    {
      referencia:
        'Correa Espinal, A., & Gómez Montoya , R. (Septiembre de 2009). <em>Tecnologías de la información y comunicación en la gestión de almacenes</em>.',
      link: 'http://www.scielo.org.co/pdf/eg/v26n117/v26n117a09.pdf',
    },
    {
      referencia:
        'Escudero, S., J. (2019). <em>Logística de almacenamiento</em>. Paraninfo.',
    },
    {
      referencia:
        'Flamarique, S. (2018). <em>Gestión de existencias en el almacén</em>. Marge Books.',
      link:
        'https://books.google.com.co/books?id=CDd8DwAAQBAJ&printsec=frontcover&dq=gestion+de+existencias+en+el+almacen&hl=es&sa=X&redir_esc=y#v=onepage&q=gestion%20de%20existencias%20en%20el%20almacen&f=false',
    },
    {
      referencia:
        'Gómez, A., Iglesias, M., De la Fuente, D., y Menéndez , M. (2008). <em>Estado del arte en políticas de ubicación de productos en almacén</em>. II International Conference on Industrial Engineering and Industrial Management XII Congreso de Ingeniería de Organización September 3-5, 2008, Burgos, Spain.',
      link:
        'http://adingor.es/congresos/web/uploads/cio/cio2008/LOGISTIC//1095-1102.pdf',
    },
    {
      referencia:
        'Mauleón, M. (2003). <em>Sistemas de alamacenaje y picking.</em> Ediciones Díaz de Santos.',
    },
    {
      referencia:
        'Pérez, H., M. (2014). <em>Almacenamiento de materiales.</em> Marge Books.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=fnPDDQAAQBAJ&oi=fnd&pg=PA11&dq=almacenamiento+&ots=lFsLWzq0fg&sig=HSAdBBne2sGEzlJRG55I-yoLvSA#v=onepage&q&f=false',
    },
    {
      referencia:
        'Rodríguez, R., R. (2015). Guía de seguridad en procesos de almacenamiento y manejo de cargas. Fremap.',
      link:
        'https://www.udc.es/arquivos/sites/udc/prl/procedementos/Guiaxseg.xalmacenam.xyxmanejoxcargas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'utilización óptima de un espacio asignado para colocar una determinada cantidad de elementos o referencias.',
    },
    {
      termino: 'Granel',
      significado:
        'mercancía transportada sin envase o embalaje, generalmente referido a minerales, semillas, abonos, líquidos, cementos, etc.',
    },
    {
      termino: 'Inventario',
      significado:
        'acumulación de cualquier producto o artículo usado en la organización.',
    },
    {
      termino: '<em>Layout</em>',
      significado: 'disposición en planta de las diferentes zonas de almacén.',
    },
    {
      termino: 'Logística',
      significado:
        'proceso de planear, implementar y controlar efectiva y eficientemente el flujo y almacenamiento de bienes, servicios e información relacionada del punto de origen al punto de consumo con el propósito de cumplir los requisitos del cliente.',
    },
    {
      termino: '<em>Pallet</em>',
      significado:
        'plataforma reutilizable usada en la estiba de carga para facilitar el aprovechamiento del espacio de almacenamiento y de bodega de transporte, y las operaciones de manipulación.',
    },
    {
      termino: '<em>Stock</em>',
      significado:
        'producto almacenado listo para ser vendido, distribuido o usado.',
    },
    {
      termino: 'Unidad de carga',
      significado:
        'presentación de las mercaderías objeto de transporte, de manera que puedan ser manipuladas por medios mecánicos.',
    },
  ],
  complementario: [
    {
      texto: 'Factores de Atención al Cliente',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TF569oAM5yc',
    },
    {
      texto: 'Procedimiento de la PQR aplicable a los servicios postales',
      tipo: 'PDF',
      link: 'http://www.scielo.org.co/pdf/eg/v26n117/v26n117a09.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gloria Liliana García Marín',
        cargo: 'Experta Temática',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional SantanderRegional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Tolima – Centro Agropecuario “La Granja”',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Regional distrito capital- Centro de gestión industrial',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

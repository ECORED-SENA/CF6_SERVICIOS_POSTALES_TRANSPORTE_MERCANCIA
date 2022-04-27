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
        titulo: 'Manejo de PQR',
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
        'Arellano Días, H.O. (2017). La calidad en el Servicio como Ventaja Competitiva. Dialnet, 3,11. Obtenido de',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6093282',
    },
    {
      referencia:
        'García, A. (2016). Cultura del Servicio en la Optimización del Servicio al Cliente. Telos. Obtenido de',
      link: 'https://www.redalyc.org/pdf/993/99346931003.pdf',
    },
    {
      referencia:
        'Programa Nacional de Servicio al Ciudadano. (2016). Criterios Normativos para peticiones, quejas, reclamos, solicitudes y denuncias.  Obtenido de',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Programa%20Nacional%20del%20Servicio%20al%20Ciudadano/CRITERIOS%20NORMATIVOS%20PARA%20PQRSD%20V2.pdf',
    },
    {
      referencia:
        'Universidad Manuela Beltrán. (s.f).  Servicio al Cliente. Obtenido de',
      link:
        'http://virtualnet2.umb.edu.co/virtualnet/archivos/open.php/1037/Contenido_Modulo_II_Servicio_al_cliente.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Anónimo',
      significado: 'Emisión de solicitudes sin autor explícito o identificado.',
    },
    {
      termino: 'Atención',
      significado:
        'Acción que ejecutan las entidades a través de los canales dispuestos para recibir solicitudes de información, trámites y servicios.',
    },
    {
      termino: 'Atención electrónica',
      significado:
        'Servicio prestado a través de la comunicación recibida por correo electrónico.',
    },
    {
      termino: 'Calidad',
      significado:
        'Criterio con cual se mide el grado de satisfacción de una persona por un servicio o bien prestado.',
    },
    {
      termino: 'Ciclo del Servicio',
      significado:
        'Cadena formada por todos los momentos de verdad que un cliente ha vivido.',
    },
    {
      termino: 'Digital',
      significado:
        'Conversión de un documento en una representación de imagen.',
    },
    {
      termino: 'Digitalización',
      significado:
        'Hacer uso de herramienta ofimática para escanear un documento y conservarla en medio digital.',
    },
    {
      termino: 'Encomienda',
      significado:
        'Recepción de objetos postales no urgentes o mercancías de libre circulación en el territorio nacional o internacional.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Técnica organizacional para desarrollar actividades en pro de mejorar un proceso.',
    },
    {
      termino: 'Felicitación',
      significado: 'Expresión de agradecimiento o satisfacción',
    },
    {
      termino: 'Gestión',
      significado: 'Acciones encaminadas a resolver una situación.',
    },
    {
      termino: 'Guía',
      significado:
        'Documento soporte de envío que contiene los datos del remitente y el destinatario.',
    },
    {
      termino: 'Mensajería Express',
      significado:
        'Servicios postales de connotación urgente que requiere aplicación de características especiales para la recepción.',
    },
    {
      termino: 'Misión',
      significado:
        'Objetivos generales definidos para lograr crecimiento de una organización.',
    },
    {
      termino: 'Momento de Verdad',
      significado:
        'Puntos más importantes de unión entre el cliente y la empresa.',
    },
    {
      termino: 'Notificación Judicial',
      significado:
        'Acto procesal a través del cual se informa a las partes vinculadas a un proceso las decisiones tomadas.',
    },
    {
      termino: 'Peticionario',
      significado: 'Persona jurídica o natural que requiere un servicio.',
    },
    {
      termino: 'PQRS',
      significado: 'Abreviatura de petición, queja, reclamo o sugerencia.',
    },
    {
      termino: 'Rastreo',
      significado:
        'Seguimiento al envío desde su origen hasta el destino y entrega.',
    },
    {
      termino: 'Servicio',
      significado:
        'Conjunto de acciones previamente establecidas dirigidos a brindar satisfacción a una persona.',
    },
    {
      termino: 'Trazabilidad',
      significado: 'Hacer seguimiento a un proceso',
    },
  ],
  complementario: [
    {
      texto:
        'Hernández, W. (2017) Factores que intervienen en la atención al cliente.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TF569oAM5yc',
    },
    {
      texto: 'Procedimiento de la PQR aplicable a los servicios postales',
      tipo: 'PDF',
      descarga: ['/downloads/Tramite_PQR.pdf'],
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

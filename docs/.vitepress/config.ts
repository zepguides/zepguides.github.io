// import { defineConfig } from 'vitepress'

export default {
  head: mainHead(),
  title: "Zeppelin Guide & Tricks",
  cleanUrls: true,
  appearance: "dark",
  base: "/",
  themeConfig: {
    outline: [2, 5],
    logo: {
      src: "Zep.svg",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/zepguides" }],
    docFooter: {
      prev: "⬅️",
      next: "➡️",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search Documents",
              },
              modal: {
                noResultsText: "Related results could not be found",
                resetButtonTitle: "Clear search criteria",
                footer: {
                  navigateText: "to navigate",
                  selectText: "to select",
                  closeText: "to close",
                },
              },
            },
          },
          es: {
            translations: {
              button: {
                buttonText: "Buscar",
                buttonAriaLabel: "Buscar documentos",
              },
              modal: {
                noResultsText: "No se encontraron resultados",
                resetButtonTitle: "Borrar criterio de búsqueda",
                footer: {
                  navigateText: "para navegar",
                  selectText: "para seleccionar",
                  closeText: "para cerrar",
                },
              },
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
      title: "Zeppelin Guide & Tricks",
      themeConfig: {
        siteTitle: "Zeppelin Guide & Tricks",
        outlineTitle: "Table Of Content",
        socialLinks: [{ icon: "github", link: "https://github.com/zepguides" }],
        lastUpdatedText: "Updated Date",
        docFooter: {
          prev: "⬅️",
          next: "➡️",
        },
        darkModeSwitchLabel: "Switch Theme",
        returnToTopLabel: "Go to ☝️",
        nav: enNav(),
        sidebar: {
          "/main/": Main(),
          "/reference/": Reference(),
          "/infrastructure/": Infrastructure(),
          "/contribution/": Contribution(),
        },
      },
    },
    es: {
      label: "Español",
      lang: "es",
      link: "/es/",
      title: "Zeppelin Guías & Trucos",
      themeConfig: {
        siteTitle: "Zeppelin Guías & Trucos",
        outlineTitle: "Tabla de contenido",
        socialLinks: [{ icon: "github", link: "https://github.com/zepguides" }],
        lastUpdatedText: "Fecha de actualización",
        docFooter: {
          prev: "⬅️",
          next: "➡️",
        },
        darkModeSwitchLabel: "Cambiar Tema",
        returnToTopLabel: "Ir ☝️",
        nav: esNav(),
        sidebar: {
          "/es/main/": MainEs(),
          "/es/reference/": ReferenceEs(),
          "/es/infrastructure/": InfrastructureEs(),
          "/es/contribution/": ContributionEs(),
        },
      },
    },
  },
};

// Metadata
function mainHead() {
  return [
    ["meta", { property: "theme-color", content: "#3e62d8" }],
    [
      "meta",
      {
        property: "og:image",
        content: `https://cdn.discordapp.com/attachments/1017537991813632111/1081653791574736996/OGImage.png`,
      },
    ],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["link", { rel: "icon", href: "/Zep.png" }],
  ];
}

// Locales themeConfig: nav

/// English
function enNav() {
  return [
    { text: "Home", link: "/main/" },
    { text: "Reference", link: "/reference/" },
    { text: "Legacy PreSetup", link: "https://zepguides.github.io/presetup/" },
    { text: "Infrastructure", link: "/infrastructure/" },
    {
      text: "Contribution",
      items: [
        { text: "Guide", link: "/contribution/" },
        { text: "Credits", link: "/contribution/credits" },
      ],
    },
  ];
}

/// Español
function esNav() {
  return [
    { text: "Inicio", link: "/es/main/" },
    { text: "Referencia", link: "/es/reference/" },
    {
      text: "Legacy PreSetup",
      link: "https://zepguides.github.io/presetup/es/",
    },
    { text: "Infraestructura", link: "/es/infrastructure/" },
    {
      text: "Contribución",
      items: [
        { text: "Guía", link: "/es/contribution/" },
        { text: "Creditos", link: "/es/contribution/credits" },
      ],
    },
  ];
}

// Locales themeConfig: sidebar

/// English
function Main() {
  return [
    {
      text: " ",
      items: [{ text: "Home", link: "/main/" }],
    },
  ];
}

function Reference() {
  return [
    {
      text: "Global Reference",
      items: [{ text: "Introduction", link: "/reference/" }],
    },
  ];
}

function Infrastructure() {
  return [
    {
      text: "Infrastructure explain",
      items: [{ text: "Introduction", link: "/infrastructure/" }],
    },
  ];
}

function Contribution() {
  return [
    {
      text: "Contribution Guide",
      items: [
        { text: "GitHub", link: "/contribution/" },
        { text: "Credits", link: "/contribution/credits" },
      ],
    },
  ];
}

/// Español
function MainEs() {
  return [
    {
      text: " ",
      items: [{ text: "Inicio", link: "/es/main/" }],
    },
  ];
}

function ReferenceEs() {
  return [
    {
      text: "Referencia Global",
      items: [{ text: "Introducción", link: "/es/reference/" }],
    },
  ];
}

function InfrastructureEs() {
  return [
    {
      text: "Explicación de infraestructura",
      items: [{ text: "Introducción", link: "/es/infrastructure/" }],
    },
  ];
}

function ContributionEs() {
  return [
    {
      text: "Guía de Contribución",
      items: [
        { text: "GitHub", link: "/es/contribution/" },
        { text: "Creditos", link: "/es/contribution/credits" },
      ],
    },
  ];
}

// Search Locales

/// English (root)
//function SearchEn() {
//  return [
//    {
//      translations: {
//        button: {
//          buttonText: 'Search',
//          buttonAriaLabel: 'Search Documents'
//        },
//        modal: {
//          noResultsText: 'Related results could not be found',
//          resetButtonTitle: 'Clear search criteria',
//          footer: {
//            navigateText: 'to navigate',
//            selectText: 'to select',
//            closeText: 'to close'
//          }
//        }
//      }
//    }
//  ];
//}

/// Español
// function SearchEs() {
//  return [
//    {
//      translations: {
//        button: {
//          buttonText: 'Buscar',
//          buttonAriaLabel: 'Buscar documentos'
//        },
//        modal: {
//          noResultsText: 'No se encontraron resultados',
//          resetButtonTitle: 'Borrar criterio de búsqueda',
//          footer: {
//            navigateText: 'para navegar',
//            selectText: 'para seleccionar',
//            closeText: 'para cerrar'
//          }
//        }
//      }
//    }
//  ];
//}

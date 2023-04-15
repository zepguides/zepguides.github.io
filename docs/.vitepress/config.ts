export default {
  head: mainHead(),
  title: "Zeppelin Guide & Tricks",
  cleanUrls: true,
  appearance: "dark",
  base: "/",
  themeConfig: {
    logo: {
      src: "Zep.svg",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/zepguides" }],
    docFooter: {
      prev: "⬅️",
      next: "➡️",
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
          '/main/': [
            {
              text: ' ',
              items: [
                { text: 'Home', link: '/main/' },
              ]
            }
          ],
          '/reference/': [
            {
              text: 'Global Reference',
              items: [
                { text: 'Introduction', link: '/reference/' },
              ]
            }
          ],
          '/infrastructure/': [
            {
              text: 'Infrastructure explain',
              items: [
                { text: 'Introduction', link: '/infrastructure/' },
              ]
            }
          ],
          '/contribution/': [
            {
              text: 'Contribution Guide',
              items: [
                { text: 'GitHub', link: '/contribution/' },
                { text: 'Credits', link: '/contribution/credits' },
              ]
            }
          ],
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
          '/es/main/': [
            {
              text: ' ',
              items: [
                { text: 'Inicio', link: '/es/main/' },
              ]
            }
          ],
          '/es/reference/': [
            {
              text: 'Referencia Global',
              items: [
                { text: 'Introducción', link: '/es/reference/' },
              ]
            }
          ],
          '/es/infrastructure/': [
            {
              text: 'Explicación de infraestructura',
              items: [
                { text: 'Introducción', link: '/es/infrastructure/' },
              ]
            }
          ],
          '/es/contribution/': [
            {
              text: 'Guía de Contribución',
              items: [
                { text: 'GitHub', link: '/es/contribution/' },
                { text: 'Creditos', link: '/es/contribution/credits' },
              ]
            }
          ],
        },
      },
    },
  },
};

// Metadata
function mainHead() {
  return [
    ["meta", { property: "theme-color", content: "#3e62d8" }],
    ["meta", { property: "og:image", content: `https://cdn.discordapp.com/attachments/1017537991813632111/1081653791574736996/OGImage.png`, },],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["link", { rel: "icon", href: "/Zep.png" }],
  ];
}

// Locales themeConfig

/// English
function enNav() {
  return [
    { text: "Home", link: "/main/" },
    { text: "Reference", link: "/reference/" },
    { text: "Legacy PreSetup", link: "https://zepguides.github.io/presetup/" }, 
    { text: "Infrastructure", link: "/infrastructure/" },
    { text: 'Contribution',
      items: [
        { text: 'Guide', link: '/contribution/' },
        { text: 'Credits', link: '/contribution/credits' },
      ]
    }
  ];
}

/// Español
function esNav() {
  return [
    { text: "Inicio", link: "/es/main/" },
    { text: "Referencia", link: "/es/reference/" },
    { text: "Legacy PreSetup", link: "https://zepguides.github.io/presetup/" }, 
    { text: "Infraestructura", link: "/es/infrastructure/" },
    { text: 'Contribución',
      items: [
        { text: 'Guía', link: '/es/contribution/' },
        { text: 'Creditos', link: '/es/contribution/credits' },
      ]
    }
  ];
}


export default {
  head: mainHead(),
  title: 'Zeppelin Guide & Tricks',
  cleanUrls: true,
  appearance: 'dark',
  base: '/',
  themeConfig: {
    logo: {
      src: 'Zep.svg',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zepguides' },
    ],
    docFooter: {
        prev: '⬅️',
        next: '➡️'
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      title: 'Zeppelin Guide & Tricks',
      themeConfig: {
        siteTitle: 'Zeppelin Guide & Tricks',
        outlineTitle: 'Table Of Content',
        logo: {
          src: 'Zep.png',
          alt: 'Logo',
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/zepguides' },
        ],
        lastUpdatedText: 'Updated Date',
        docFooter: {
            prev: '⬅️',
            next: '➡️'
        },
        darkModeSwitchLabel: 'Switch Theme',
        returnToTopLabel: 'Go to ☝️',
        nav: enNav(),
        sidebar: enSidebar()
        },
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      title: 'Zeppelin Guías & Trucos',
      themeConfig: {
        siteTitle: 'Zeppelin Guías & Trucos',
        outlineTitle: 'Tabla de contenido',
        logo: {
          src: 'Zep.png',
          alt: 'Logo',
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/zepguides' },
        ],
        lastUpdatedText: 'Fecha de actualización',
        docFooter: {
            prev: '⬅️',
            next: '➡️'
        },
        darkModeSwitchLabel: 'Cambiar Tema',
        returnToTopLabel: 'Ir ☝️',
        nav: esNav(),
        sidebar: esSidebar()
        },
    }
  }
}


// Metadata
function mainHead() {
  return [
    ['meta', { property: 'theme-color', content: '#3e62d8' }],
    ['meta', { property: 'og:image', content: `https://cdn.discordapp.com/attachments/1017537991813632111/1081653791574736996/OGImage.png` }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['link', { rel: 'icon', href: '/Zep.png' }]
  ];
}


// Locales themeConfig

/// English
function enNav() {
  return [
    { text: 'Guides', link: '/' },
    { text: 'Legacy PreSetup', link: 'https://zepguides.github.io/presetup/' }
  ];
}

function enSidebar() {
  return [
    {
      text: '',
      items: [
        { text: 'Introduction', link: '/' },
      ]
    },
    {
        text: 'Guides',
        items: [
          {
            text: 'Basic',
            collapsed: true,
            items: [
                { text: 'Introduction', link: '/Guides/Basic/' },
                { text: 'How To Zeppelin', link: '/Guides/Basic/HowTo' },
                { text: 'Plugins', link: '/Guides/Basic/Plugins' },
                { text: 'Configuration', link: '/Guides/Basic/Complete-Config' }
              ]
            },
            {
              text: 'Medium',
              collapsed: true,
              items: [
                  { text: 'Introduction', link: '/Guides/Medium/' },
                  { text: 'Plugins', link: '/Guides/Medium/Plugins' },
                  { text: 'Configuration', link: '/Guides/Medium/Complete-Config' }
              ]
            },
            {
              text: 'Advanced',
              collapsed: true,
              items: [
                  { text: 'Introduction', link: '/Guides/Advanced/' },
                  { text: 'Plugins', link: '/Guides/Advanced/Plugins' },
                  { text: 'Configuration', link: '/Guides/Advanced/Complete-Config' }
              ]
            }
          ]
        },
        {
          text: 'Utils',
          collapsed: true,
          items: [
            { text: 'Keywords', link: '/Utils/Keywords' },
          ]
        },
        {
          text: '',
          items: [
            { text: 'Credits', link: '/credits' },
          ]
        }
  ];
}

/// Español
function esNav() {
  return [
    { text: 'Guías', link: '/es/' },
    { text: 'Legacy PreSetup', link: 'https://zepguides.github.io/presetup/' }
  ];
}

function esSidebar() {
  return [
    {
      text: '',
      items: [
        { text: 'Introducción', link: '/es/' },
      ]
    },
    {
        text: 'Guías',
        items: [
          {
            text: 'Basica',
            collapsed: true,
            items: [
                { text: 'Introducción', link: '/es/Guides/Basic/' },
                { text: '¿Cómo usar Zeppelin?', link: '/es/Guides/Basic/HowTo' },
                { text: 'Plugins', link: '/es/Guides/Basic/Plugins' },
                { text: 'Configuración', link: '/es/Guides/Basic/Complete-Config' }
              ]
            },
            {
              text: 'Media',
              collapsed: true,
              items: [
                  { text: 'Introducción', link: '/es/Guides/Medium/' },
                  { text: 'Plugins', link: '/es/Guides/Medium/Plugins' },
                  { text: 'Configuración', link: '/es/Guides/Medium/Complete-Config' }
              ]
            },
            {
              text: 'Avanzada',
              collapsed: true,
              items: [
                  { text: 'Introducción', link: '/es/Guides/Advanced/' },
                  { text: 'Plugins', link: '/es/Guides/Advanced/Plugins' },
                  { text: 'Configuración', link: '/es/Guides/Advanced/Complete-Config' }
              ]
            }
          ]
        },
        {
          text: 'Utiles',
          collapsed: true,
          items: [
            { text: 'Keywords', link: '/es/Utils/Keywords' },
          ]
        },
        {
          text: '',
          items: [
            { text: 'Creditos', link: '/es/credits' },
          ]
        }
  ];
}
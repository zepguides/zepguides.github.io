// import { defineConfig } from 'vitepress'

export default {
  head: metadata(),
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
function metadata() {
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
    { text: "Home", link: "/main/", activeMatch: "/main" },
    { text: "Reference", link: "/reference/", activeMatch: "/reference" },
    { text: "Legacy PreSetup", link: "https://zepguides.github.io/presetup/" },
    {
      text: "Infrastructure",
      link: "/infrastructure/",
      activeMatch: "/infrastructure",
    },
    {
      text: "Contribution",
      activeMatch: "/contribution",
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
    { text: "Inicio", link: "/es/main/", activeMatch: "/es/main" },
    {
      text: "Referencia",
      link: "/es/reference/",
      activeMatch: "/es/reference",
    },
    {
      text: "Legacy PreSetup",
      link: "https://zepguides.github.io/presetup/es/",
    },
    {
      text: "Infraestructura",
      link: "/es/infrastructure/",
      activeMatch: "/es/infrastructure",
    },
    {
      text: "Contribución",
      activeMatch: "/es/contribution",
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
    {
      text: "🛡️ Moderation",
      collapsed: true,
      link: "/main/moderation/",
      items: [
        { text: "Mod Commands", link: "/main/moderation/A" },
        { text: "Mutes", link: "/main/moderation/A" },
        { text: "Slowmode", link: "/main/moderation/B" },
      ],
    },
    {
      text: "🤖 Automoderation",
      collapsed: true,
      link: "/main/automoderation/",
      items: [
        { text: "Automod Plugin", link: "/main/automoderation/A" },
        { text: "Legacy Automod Plugins", link: "/main/automoderation/B" },
      ],
    },
    {
      text: "🖲️ Systems",
      collapsed: true,
      link: "/main/systems/",
      items: [
        { text: "Counters", link: "/main/systems/A" },
        { text: "Custom Tags", link: "/main/systems/A" },
        { text: "Phisherman", link: "/main/systems/B" },
      ],
    },
    {
      text: "🖇️ Logs",
      collapsed: true,
      link: "/main/logs/",
      items: [
        { text: "Main Logs", link: "/main/logs/A" },
        { text: "Mod Logs", link: "/main/logs/B" },
      ],
    },
    {
      text: "🛠️ Specific Utilities",
      collapsed: true,
      link: "/main/specific-utilities/",
      items: [
        { text: "Persist Plugin", link: "/main/specific-utilities/A" },
        { text: "Role Buttons", link: "/main/specific-utilities/B" },
        { text: "Roles Plugin", link: "/main/specific-utilities/B" },
        { text: "Starboard", link: "/main/specific-utilities/B" },
        { text: "Welcome Messages", link: "/main/specific-utilities/B" },
      ],
    },
    {
      text: "🖌️ Common Utilities",
      collapsed: true,
      link: "/main/common-utilities/",
      items: [
        { text: "Utility Commands", link: "/main/common-utilities/A" },
        { text: "Autodelete Messages", link: "/main/common-utilities/B" },
        { text: "Autoreactions", link: "/main/common-utilities/A" },
        { text: "Manage Roles", link: "/main/common-utilities/B" },
        { text: "Post Plugin", link: "/main/common-utilities/A" },
        { text: "Reminders Plugin", link: "/main/common-utilities/B" },
      ],
    },
    {
      text: "⚙️ Settings",
      collapsed: true,
      link: "/main/settings/",
      items: [
        { text: "Prefix", link: "/main/settings/A" },
        { text: "Levels", link: "/main/settings/B" },
        { text: "Time and Date", link: "/main/settings/B" },
      ],
    },
    {
      text: " ",
      items: [
        { text: "Global Reference", link: "/reference/" },
        { text: "Infrastructure", link: "/infrastructure/" },
        { text: "Contribution Guide", link: "/contribution/" },
      ],
    },
  ];
}

function Reference() {
  return [
    {
      text: "Global Reference",
      items: [{ text: "Introduction", link: "/reference/" }],
    },
    {
      text: "Plugins",
      collapsed: true,
      items: [
        { text: "Autodelete", link: "/reference/plugins/autodelete" },
        { text: "Automod", link: "/reference/plugins/automod" },
        { text: "Auto Reactions", link: "/reference/plugins/autoreactions" },
        { text: "Cases", link: "/reference/plugins/cases" },
        { text: "Counters", link: "/reference/plugins/counters" },
        { text: "Legacy Plugins", link: "/reference/plugins/legacy-plugins" },
        { text: "Logs", link: "/reference/plugins/logs" },
        { text: "Mod Actions", link: "/reference/plugins/mod-actions" },
        { text: "Mutes", link: "/reference/plugins/mutes" },
        { text: "Persist", link: "/reference/plugins/persist" },
        { text: "Phisherman", link: "/reference/plugins/phisherman" },
        { text: "Post", link: "/reference/plugins/post" },
        { text: "Reminders", link: "/reference/plugins/reminders" },
        { text: "Role Buttons", link: "/reference/plugins/role-buttons" },
        { text: "Roles", link: "/reference/plugins/roles" },
        { text: "Self grantable Roles", link: "/reference/plugins/self-roles" },
        { text: "Slowmode", link: "/reference/plugins/slowmode" },
        { text: "Starboard", link: "/reference/plugins/starboard" },
        { text: "Tags", link: "/reference/plugins/tags" },
        { text: "Time and Date", link: "/reference/plugins/time-and-date" },
        { text: "Utility", link: "/reference/plugins/utility" },
        {
          text: "Welcome Messages",
          link: "/reference/plugins/welcome-messages",
        },
      ],
    },
    {
      text: "Overrides",
      items: [
        { text: "Individual", link: "/reference/overrides/individual" },
        { text: "Combine", link: "/reference/overrides/combined" },
      ],
    },
    {
      text: " ",
      items: [{ text: "Custom Automod", link: "/reference/automod-custom" }],
    },
  ];
}

function Infrastructure() {
  return [
    {
      text: "Project Infrastructure",
      items: [{ text: "Introduction", link: "/infrastructure/" }],
    },
    {
      text: "Functions",
      items: [
        {
          text: "Write Team",
          link: "/infrastructure/functions/write-team",
        },
        {
          text: "Improvement Team",
          link: "/infrastructure/functions/improvement-team",
        },
      ],
    },
    {
      text: "Structures",
      items: [{ text: "General", link: "/infrastructure/structures/" }],
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
    {
      text: "🛡️ Moderación",
      collapsed: true,
      link: "/es/main/moderation/",
      items: [
        { text: "Comandos de moderación", link: "/es/main/moderation/A" },
        { text: "Silencios / Mutes", link: "/es/main/moderation/A" },
        { text: "Modo lento", link: "/es/main/moderation/B" },
      ],
    },
    {
      text: "🤖 Automoderación",
      collapsed: true,
      link: "/es/main/automoderation/",
      items: [
        { text: "Plugin de Automod", link: "/es/main/automoderation/A" },
        {
          text: "Plugins antiguos del Automod",
          link: "/es/main/automoderation/B",
        },
      ],
    },
    {
      text: "🖲️ Sistemas",
      collapsed: true,
      link: "/es/main/systems/",
      items: [
        { text: "Contadores", link: "/es/main/systems/A" },
        { text: "Tags personalizados", link: "/es/main/systems/A" },
        { text: "Phisherman", link: "/es/main/systems/B" },
      ],
    },
    {
      text: "🖇️ Logs",
      collapsed: true,
      link: "/main/logs/",
      items: [
        { text: "Principales", link: "/es/main/logs/A" },
        { text: "De moderación", link: "/es/main/logs/B" },
      ],
    },
    {
      text: "🛠️ Utilidades específicas",
      collapsed: true,
      link: "/es/main/specific-utilities/",
      items: [
        { text: "Plugin de Persist", link: "/es/main/specific-utilities/A" },
        { text: "Roles en botones", link: "/es/main/specific-utilities/B" },
        { text: "Plugins de Roles", link: "/es/main/specific-utilities/B" },
        { text: "Starboard", link: "/es/main/specific-utilities/B" },
        {
          text: "Mensajes de bienvenida",
          link: "/es/main/specific-utilities/B",
        },
      ],
    },
    {
      text: "🖌️ Utilidades comunes",
      collapsed: true,
      link: "/es/main/common-utilities/",
      items: [
        { text: "Comandos de utilidad", link: "/es/main/common-utilities/A" },
        {
          text: "Autoborrado de mensajes",
          link: "/es/main/common-utilities/B",
        },
        { text: "Auto-Reacciones", link: "/es/main/common-utilities/A" },
        { text: "Gestionar roles", link: "/es/main/common-utilities/B" },
        { text: "Plugin de Post", link: "/es/main/common-utilities/A" },
        { text: "Plugin de Reminders", link: "/es/main/common-utilities/B" },
      ],
    },
    {
      text: "⚙️ Ajustes",
      collapsed: true,
      link: "/es/main/settings/",
      items: [
        { text: "Prefix", link: "/es/main/settings/A" },
        { text: "Niveles", link: "/es/main/settings/B" },
        { text: "Fecha y hora", link: "/es/main/settings/B" },
      ],
    },
    {
      text: " ",
      items: [
        { text: "Referencia global", link: "/es/reference/" },
        { text: "Infraestructura", link: "/es/infrastructure/" },
        { text: "Guía de Contribución", link: "/es/contribution/" },
      ],
    },
  ];
}

function ReferenceEs() {
  return [
    {
      text: "Referencia Global",
      items: [{ text: "Introducción", link: "/es/reference/" }],
    },
    {
      text: "Plugins",
      collapsed: true,
      items: [
        { text: "Autodelete", link: "/es/reference/plugins/autodelete" },
        { text: "Automod", link: "/es/reference/plugins/automod" },
        { text: "Auto Reactions", link: "/es/reference/plugins/autoreactions" },
        { text: "Cases", link: "/es/reference/plugins/cases" },
        { text: "Counters", link: "/es/reference/plugins/counters" },
        {
          text: "Legacy Plugins",
          link: "/es/reference/plugins/legacy-plugins",
        },
        { text: "Logs", link: "/es/reference/plugins/logs" },
        { text: "Mod Actions", link: "/es/reference/plugins/mod-actions" },
        { text: "Mutes", link: "/es/reference/plugins/mutes" },
        { text: "Persist", link: "/es/reference/plugins/persist" },
        { text: "Phisherman", link: "/es/reference/plugins/phisherman" },
        { text: "Post", link: "/es/reference/plugins/post" },
        { text: "Reminders", link: "/es/reference/plugins/reminders" },
        { text: "Role Buttons", link: "/es/reference/plugins/role-buttons" },
        { text: "Roles", link: "/es/reference/plugins/roles" },
        {
          text: "Self grantable Roles",
          link: "/es/reference/plugins/self-roles",
        },
        { text: "Slowmode", link: "/es/reference/plugins/slowmode" },
        { text: "Starboard", link: "/es/reference/plugins/starboard" },
        { text: "Tags", link: "/es/reference/plugins/tags" },
        { text: "Time and Date", link: "/es/reference/plugins/time-and-date" },
        { text: "Utility", link: "/es/reference/plugins/utility" },
        {
          text: "Welcome Messages",
          link: "/es/reference/plugins/welcome-messages",
        },
      ],
    },
    {
      text: "Overrides",
      items: [
        { text: "Individuales", link: "/es/reference/overrides/individual" },
        { text: "Combinados", link: "/es/reference/overrides/combined" },
      ],
    },
    {
      text: " ",
      items: [
        { text: "Automod personalizado", link: "/es/reference/automod-custom" },
      ],
    },
  ];
}

function InfrastructureEs() {
  return [
    {
      text: "Infraestructura del proyecto",
      items: [{ text: "Introducción", link: "/es/infrastructure/" }],
    },
    {
      text: "Funciones",
      items: [
        {
          text: "Equipo de escritura",
          link: "/es/infrastructure/functions/write-team",
        },
        {
          text: "Equipo de desarrollo",
          link: "/es/infrastructure/functions/improvement-team",
        },
      ],
    },
    {
      text: "Estructuras",
      items: [{ text: "General", link: "/es/infrastructure/structures/" }],
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

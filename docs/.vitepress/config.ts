export default {
    title: 'Zeppelin Guide & Tricks',
    description: 'A collection of resources to help you set up and better understand Zeppelin',
    cleanUrls: true,
    appearance: 'dark',
    base: '/',
    themeConfig: {
      siteTitle: 'Zeppelin Guide & Tricks',
			outlineTitle: 'Table Of Content',
      logo: {
        src: 'Zep.png',
        alt: 'Logo',
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/ZeppelinBot' },
      ],
      lastUpdatedText: 'Updated Date',
      docFooter: {
          prev: '⬅️',
          next: '➡️'
      },
      darkModeSwitchLabel: 'Switch Theme',
      returnToTopLabel: 'Go to ☝️',
			nav: [
				{ text: 'Guides', link: '/' },
				{ text: 'Legacy PreSetup', link: 'https://zepguides.github.io/presetup/' }
			],
      sidebar: [
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
          ]
  		},
	}
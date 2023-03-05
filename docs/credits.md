---
head:
  - - meta
    - name: og:description
      content: Credits. Thanks.
    - name: description
      content: Credits. Thanks.
editLink: false
lastUpdated: false
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/85186792?v=4',
    name: 'Diso',
    title: 'Creator and Writer',
    links: [
      { icon: 'github', link: 'https://github.com/DisoQ' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/85960708?v=4',
    name: 'Nixco',
    title: 'PreSetup build',
    links: [
      { icon: 'github', link: 'https://github.com/nixco3' }
    ]
  }
]
</script>

# Thank You
<p>This project was quite complex to develop, largely due to lack of time, but it was carried out anyway in order to deliver the best result to the community.</p>

<p>Zeppelin is a bot that I appreciate very much and it was important for me to do this because of the great amount of problems that the community presents with errors, lack of knowledge of the configuration scheme and so on.</p>

## Credits
|Image | Name | Description|
|:-:|:-:|:-|
<img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" alt="Vue Logo" width="48"/> | [VitePress](https://github.com/vuejs/vitepress) | Static Site Generator |
<img src="https://avatars.githubusercontent.com/u/96340112?s=200&v=4" alt="Zep Logo" width="48"/>| [Zeppelin](https://zeppelin.gg/) | Really, the bot

## Dev, Write and Design Team
<VPTeamMembers size="medium" :members="members" />
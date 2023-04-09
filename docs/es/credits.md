---
head:
  - - meta
    - name: og:description
      content: Creditos.
  - - meta
    - name: og:title
      content: Creditos | Zeppelin Guide & Tricks
editLink: false
lastUpdated: false
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/85186792?v=4',
    name: 'Diso',
    title: 'Creador',
    links: [
      { icon: 'github', link: 'https://github.com/DisoQ' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/85960708?v=4',
    name: 'Nixco',
    title: 'Equipo de desarrollo',
    links: [
      { icon: 'github', link: 'https://github.com/nixco3' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/125166513?v=4',
    name: 'Lyg',
    title: 'Equipo de escritura',
    links: [
      { icon: 'github', link: 'https://github.com/Lygchi' }
    ]
  }
]
</script>

# Gracias
<p>Este proyecto ha sido complejo de desarrollar, sobre todo por la falta de tiempo, pero ha sido llevado a cabo para ofrecer el mejor resultado a la comunidad.</p>

## Creditos
|Imagen | Nombre | Descripción|
|:-:|:-:|:-|
<img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" alt="Vue Logo" width="48"/> | [VitePress](https://github.com/vuejs/vitepress) | Static Site Generator |
<img src="https://avatars.githubusercontent.com/u/96340112?s=200&v=4" alt="Zep Logo" width="48"/>| [Zeppelin](https://zeppelin.gg/) | El bot

## Equipo de escritura, desarrollo y diseño
<VPTeamMembers size="medium" :members="members" />
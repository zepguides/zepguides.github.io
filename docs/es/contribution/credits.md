---
head:
  - - meta
    - name: og:description
      content: Creditos.
  - - meta
    - name: og:title
      content: Creditos | Zeppelin Guías y Trucos
editLink: false
lastUpdated: false
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/85186792?v=4',
    name: 'Diso',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/DisoQ' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/85960708?v=4',
    name: 'Nixco',
    title: 'Development Team',
    links: [
      { icon: 'github', link: 'https://github.com/nixco3' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/125166513?v=4',
    name: 'Lyg',
    title: 'Write Team',
    links: [
      { icon: 'github', link: 'https://github.com/Lygchi' }
    ]
  }
]
</script>

## Equipo de desarrollo, diseño y escritura
<VPTeamMembers size="medium" :members="members" />
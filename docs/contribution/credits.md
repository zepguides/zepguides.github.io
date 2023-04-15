---
head:
  - - meta
    - name: og:description
      content: Credits. Thanks.
  - - meta
    - name: og:title
      content: Credits | Zeppelin Guide & Tricks
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

## Dev, Write and Design Team
<VPTeamMembers size="medium" :members="members" />
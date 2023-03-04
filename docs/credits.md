---
description: Credits. Thanks.
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
    avatar: 'https://avatars.githubusercontent.com/u/85186792?v=4',
    name: 'Diso',
    title: 'Founder',
    links: [
      { icon: 'discord', link: 'https://github.com/DisoQ' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/85186792?v=4',
    name: 'Diso',
    title: 'CEO-0',
    links: [
      { icon: 'twitter', link: 'https://github.com/DisoQ' }
    ]
  }
]
</script>

# Siu
<VPTeamMembers size="small" :members="members" />
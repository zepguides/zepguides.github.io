---
head:
  - - meta
    - name: og:description
      content: Configuración básica completa, con algunas alternativas.
    - name: description
      content: Configuración básica completa, con algunas alternativas.
title: Configuración final
editLink: false
lastUpdated: true
---
# Configuración completa
Recopilando los [Plugins Basicos](Plugins) está sería la configuración básica
```yml
prefix: '!'

levels:
  'ID1': 100 # Admins
  'ID2': 50 # Mods

plugins:

# Utilidad y varios
  utility: {}

  welcome_message:
    config:
      send_dm: true
      message: |-
              **Bienvenido a __{guild.name}__**!
              [...]

  logs:
    config:
      channels:
        '123456':
          exclude: [] # No excluir nada es incluir todo para registrar

# Moderación y automoderación
  mod_actions:
    config:
      dm_on_warn: true
      dm_on_kick: true
      dm_on_ban: true

  mutes:
    config:
      mute_role: 'ID' # Rol de Silenciados

  cases:
    config:
      case_log_channel: 'ID' #Canal Y

  automod:
    config:
      rules:
        fast_spam:
          triggers:
          - message_spam:
              amount: 5 # Cantidad de mensajes
              within: 7s # En determinado tiempo
          - emoji_spam:
              amount: 3 # Cantidad de emojis
              within: 5s # En determinado tiempo
          - mention_spam:
              amount: 3 # Cantidad de menciones
             withun: 6s # En determinado tiempo
          actions:
            clean: true
            reply:
              text:
                content: 'Muy rapido 🐌 Por favor, escribe más lento.'

# Override importante para no afectar a los moderadores
    overrides:
    - level: '>=50'
      config:
        rules:
          fast_spam:
            enabled: false # La propiedad enabled estará siempre presente así no se escriba y por defecto será true
```

## Variaciones

+ Mensajes de bienvenida en canal de texto
::: details Ver variación
```yml
plugins:
  welcome_message:
    config:
      send_to_channel: 'ID' # ID del canal
      send_dm: false
      message: |-
              **Bienvenido a __{guild.name}__**!
              [...]
```
:::

+ Permitir comandos del plugin `Utility` por defecto
::: details Ver variación
```yml
[...]
plugins:
  utility:
    config:
      can_avatar: true
      can_jumbo: true
      ...
```
Son diferentes propiedades para configurar, puedes guiarte por aquellas mostradas en su [documentación](https://zeppelin.gg/docs/plugins/utility/configuration)
:::
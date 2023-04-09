---
head:
  - - meta
    - name: og:description
      content: Explicación de los plugins a utilizar
  - - meta
    - name: og:title
      content: Configuración Básica | Plugins
title: Plugins
editLink: false
lastUpdated: true
outline: [2, 5]
---
# Plugins
Plugins a utilizar (¿por qué estos plugins? | ¿cómo se van a usar? | ...)

## Propiedades principales

### • Prefix
El simbolo o caracter que se antepone para usar el bot.
```yml
prefix: '!'
```

### • Levels
Explicación de porque utilizar en la configuración basica solo niveles de 50 y 100 (Para no realizar overrides)
```yml
levels:
  'ID1': 100 # Admins
  'ID2': 50 # Mods
```

## Utilidad y varios

### • Utility
Usar la configuración por defecto
```yml
plugins:
  utility: {}
```
::: details ¿Qué podría hacer por defecto?
- `!avatar`
- `!search`
...
:::

### • Logs
Registrar todo
```yml
plugins:
  logs:
    config:
      channels:
        '123456':
          exclude: [] # No excluir nada es incluir todo para registrar
```

### • Welcome Messages
[...]
```yml
plugins:
  welcome_message:
    config:
      send_dm: true
      message: |-
              **Bienvenido a __{guild.name}__**!
              [...]
```


## Moderación y automoderación

### • Mod Actions
[...]
```yml
plugins:
  mod_actions:
    config:
      dm_on_warn: true
      dm_on_kick: true
      dm_on_ban: true
```

### Mutes
[...]
```yml
plugins:
  mutes:
    config:
      mute_role: 'ID' # Rol de Silenciados
```

### • Cases
[...]
```yml
plugins:
  cases:
    config:
      case_log_channel: 'ID' #Canal Y
```

### • Automod
[...]
```yml
plugins:
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
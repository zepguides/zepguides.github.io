---
head:
  - - meta
    - name: og:description
      content: Guía del espacio de trabajo de Zeppelin
  - - meta
    - name: og:title
      content: Configuración Avanzada | ¿Cómo usar Zeppelin?
title: ¿Cómo usar Zeppelin?
editLink: false
lastUpdated: true
outline: [2, 5]
---
# ¿Cómo usar Zeppelin?

## Principios
Como se anticipó previamente, debemos conocer la complejidad que puede existir al momento de configurar Zeppelin bajó el lenguaje de escritura YAML, pero antes de ello, vamos a explorar las opciones que nos brinda Zeppelin.

::: tip Solicitud del bot
Al ser un bot privado requiere del cumplimiento de un requisito para poder utilizarlo en tu servidor, el cual es:
- Tener 5000 miembros en tu servidor
  - En caso de no contar con 5000 miembros, ser un servidor socio/verificado de la plataforma

Al obtener acceso obtendrás el rol <Badge type="tip" text="Bot User" />.
:::
::: info Extras
Si ya eres un Bot User puedes solicitar el bot sin necesidad de cumplir los requisitos anteriores.
:::

## Dashboard
Al ingresar a su [Dashboard](https://zeppelin.gg/dashboard) estará disponible tu servidor y este mismo contará con 3 opciones principales.

### Config
Este es el espacio dispuesto para contener la configuración del servidor, el espacio es demasiado grande por lo que no tienes que preocuparte por eso.

<div align=center>
  <img src='/assets/Basic/Config.png' width="600" alt="Config" />
</div>

### Access
Es la pestaña donde puedo tener control de los miembros de mi servidor para que puedan tener acceso a editar la configuración o gestionar el control de otros miembros.

Aquí se distinguien por Roles los cuales son:
- **Owner:** Automaticamente se le da al dueño del servidor. Es el rol que tiene las funciones del Bot Manager y Bot Operator.
- **Bot Manager:** Es quien gestiona los usuarios para que puedan editar la configuración del servidor o que estén en su misma posición.
- **Bot Operator:** Tiene la capacidad de editar la configuración del servidor.

Ademas de roles, se distinguen dos tipos de usuarios en la Dashboard:
- **Dashboard users:** Son los usuarios que se añaden por tiempo indefinido y pueden tener cualquiera de los 3 roles.
- **Temporary dashboard users:** Son los usuarios que puedo añadir por 1 hora con el rol de Bot Operator.

<div align=center>
  <img src='/assets/Basic/Access.png' width="550" alt="Config" />
</div>

### Import/Export
Este espacio, que la pagina indica que es una función experimental, puedes exportar los casos que se generen, a traves del plugin `mod_actions` y `cases`, en un archivo JSON. De esta misma manera es posible importarlos a la configuración siguiendo su misma estructura.

::: details Ver estructura JSON
```json casos.json
{
  "cases": [
    {
      "case_number": 1,
      "user_id": "0",
      "user_name": "Unknown#0000",
      "mod_id": 0,
      "mod_name": "Unknown#0000",
      "type": 0,
      "created_at": "2020-02-02 20:20:21",
      "is_hidden": false,
      "pp_id": null,
      "pp_name": null,
      "notes": [
        {
          "mod_id": "1234567890",
          "mod_name": "Nick#0000",
          "body": "Case deleted by **Nick#0000** (`1234567890`) on Feb 2, 2020 at 22:20 UTC",
          "created_at": "2020-02-02 20:20:21"
        }
      ]
    },
  ]
}
```
:::

<div align=center>
  <img src='/assets/Basic/ImportExport.png' width="500" alt="Config" />
</div>

## Configuración
Se explicará de forma simple de qué se compone la configuración de Zeppelin.

### Prefix
Es solo una linea que, preferiblemente, puede ir arriba de todo.
```yml config.yml
prefix: '!'
```

### Levels
Muchos de los plugins que utilizaremos se distinguen, por defecto, por niveles. Entendamos que un moderador o administrador no tiene un mismo "nivel" que un miembro, por tanto puede escribirse así:
```yml config.yml
levels:
  '1234567890123': 100 # Admin ID Role
  '3210987654321': 50 # Moderator ID Role
```

### Plugins
Por ultimo, la base con la que Zeppelin funcionará, los plugins son todo los complementos que necesitaremos, en su [documentación](https://zeppelin.gg/docs) puedes ver cuales hay.
```yml config.yml
plugins:
[...]
```

::: details Ver ejemplo de configuración
```yml config.yml
prefix: '!'

levels:
  '1234567890123': 100 # Administrador Rol ID
  '3210987654321': 50 # Moderador Rol ID

plugins:
[...]
```
:::
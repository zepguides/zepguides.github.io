---
head:
  - - meta
    - name: og:description
      content: Una colección de recursos para ayudar a configurar y entender mejor Zeppelin
  - - meta
    - name: og:title
      content: Zeppelin Guide & Tricks
editLink: false
lastUpdated: false
outline: [2, 5]
---
![Banner](/assets/ZepTricks.png)

<div align=center>
<h1>Zeppelin - Guías y Trucos</h1>
</div>

## ¿Qué es Zeppelin?
*[Zeppelin](https://zeppelin.gg/)* es un bot de moderación privado diseñado para servidores medianos y grandes.

¿Por qué para aquellos servidores? Zeppelin y su configuración llega a ser demasiado robusta y compleja, pero esa amplitud y capacidad de ser tan amplio permite que sea demasiado funcional.
Esto separa las necesidades que tienen las comunidades con un mayor publico, puesto que, la función en moderación y automoderación que requieren los servidores con una proporción de usuarios mayores necesitan de una configuración más especifica y poderosa.

## ¿Por qué guías y trucos?
`Nota de Diso:` Le tengo un cariño especial al bot, ya que lo conocí cuando buscaba uno con buena capacidad de configuración y cuando vi su documentación me interesó bastante. No es para nada un bot sencillo y los nuevos usuarios tienen muchas dudas y errores cuando empiezan, yo también fui uno de ellos y aprendí equivocándome. Buscaremos la manera de mostrar cómo usar el bot, tanto para uso básico como avanzado. También mostraré trucos, consejos y explicaciones para implementar en la configuración.


## ¿Cómo funciona Zeppelin?
> Recordemos que es un bot privado y su acceso debe de solicitarse en su [Servidor de Soporte](https://discord.com/invite/w8njuNu "Zeppelin Discord Server").

Después de conseguir acceso podremos acceder a la Dashboard del bot.

![Dashbord Preview](/assets/DashboardPreview.png)

Tendrás tus servidores disponibles una vez inicies sesión, así mismo, un diferente rol por servidor como lo son:
+ **Owner:** Todos los permisos, por defecto si eres el dueño.
+ **Bot manager:** Puedes manejar el acceso de las personas y editar la configuración.
+ **Bot operator:** Poder editar la configuración.

Conociendo lo básico, se abarcará principalmente la sección de Configuración, el resto de opciones se detallarán en otro momento.

### Su formato y lo que debes conocer
Zeppelin utiliza el lenguaje de escritura YAML, y para su uso se debe de ser cuidadoso con los espacios por columnas, las comillas y demás símbolos.

![Dashbord Preview](/assets/DashboardPreview2.png)

## Guides
Ya conocemos lo que necesitamos para comenzar, por ello, daremos paso a las guías que se abarcarán.

### Tipos de Guías

::: details <Badge type="tip" text="Guía Básica" />
Es la guía básica para entender y usar los plugins necesarios.
:::
::: details <Badge type="warning" text="Guía Media" />
Un paso delante de la guía básica, se profundiza un poco más en la configuración y se vuelve una configuración más extensa.
:::
::: details <Badge type="danger" text="Guía Avanzada" />
Es la guía mas detallada de Zeppelin.
:::

## Recursos varios

### Zeppelin
- **Oficiales**
    - [<Badge type="tip" text="Código Fuente" />](https://github.com/ZeppelinBot/Zeppelin/) - Código fuente del bot alojado en GitHub.
    - [<Badge type="tip" text="Phisherman" />](https://phisherman.gg/) - La API utilizada en Zeppelin para la detección de enlaces maliciosos.
- **Dex**
    - [<Badge type="tip" text="Zep by Dex" />](https://github.com/shoaibsajid1/Zeppelin#zep-by-dex) - Una serie de configuraciones de Zeppelin hechas por Dex, soporte del bot.
    - [<Badge type="tip" text="Zeppelin Handbook" />](https://docs.google.com/presentation/d/e/2PACX-1vQTFZW4NiJicngfAv36tLlWG5XjktVyZhljekOkzUyzsktwcNCH_Zm82Dm3r1c7S7vKOArJ6XIO5azC/pub?start=true#slide=id.gc6f9e470d_0_0) - El uso básico y avanzado del manejo de los comandos.
- **Selfhost**
    - [<Badge type="tip" text="Zeppelin Wiki" />](https://zeppelin.wiki/) - Saberes para encender nuestra propia instancia del bot y darle agregados hechos por la comunidad.
    - [<Badge type="tip" text="Zeppelin Development" />](https://github.com/ZeppelinBot/Zeppelin/blob/master/DEVELOPMENT.md) - La guía oficial del entorno de desarrollo.

### YAML
- **Herramientas**
    - [<Badge type="danger" text="YAML Online Tools" />](https://onlineyamltools.com/) - Herramientas para mejorar el aspecto de la configuración YAML.
    - [<Badge type="danger" text="YAML Validator" />](https://www.yamllint.com/) - Un validador para YAMl.
    - [<Badge type="danger" text="JSON | YAML Validator" />](https://jsonformatter.org/yaml-validator) - Otro validador para YAMl.
- **Guiás**
    - [<Badge type="danger" text="LearnXinYMinutes | YAML" />](https://learnxinyminutes.com/docs/yaml/) - Código YAML para ver su estructura.
    - [<Badge type="danger" text="Learn YAML" />](https://www.tutorialspoint.com/yaml/index.htm) - Una guía de las principales características de YAML.

### Regex
- [<Badge type="info" text="Invites" />](https://regex101.com/r/PqFR1G/1) - El regex actualizado que utiliza Zeppelin para la detección de invitaciones añadiendo `/servers/` entre los mismos.

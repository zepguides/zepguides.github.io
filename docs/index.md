---
head:
  - - meta
    - name: og:description
      content: A collection of resources to help you set up and better understand Zeppelin
    - name: description
      content: A collection of resources to help you set up and better understand Zeppelin
editLink: false
lastUpdated: false
outline: [2, 5]
---
![Banner](/assets/ZepTricks.png)

<div align=center>
<h1>Zeppelin - Guide and Tricks</h1>
</div>

## What is Zeppelin?
*[Zeppelin](https://zeppelin.gg/)* is a private moderation bot designed for medium and large servers.

Why for medium and large servers? Zeppelin configuration is pretty robust and can be complex, but its ability to configure its properties makes it a functional enough bot.
This separate the requirements of the communities and the members they host, because, the usefulness in moderation and automoderation should be high in communities with a higher proportion of users.

## Why a Zeppelin Tricks/Guide?
`Diso note:` I have a special affection for the bot since I knew it when I was looking for one with a good configuration capacity and when I saw its documentation I was quite interested. It is not a simple bot at all and new users have a lot of questions and mistakes when they start, I was also one of them and I learned by making mistakes. We will look for a way to show how to use the bot, both for basic and advanced use. I will also show tricks, tips and explanations to implement in the configuration.


## How does Zeppelin work?
> Remember that this is a private bot, so access must be requested from your [support server](https://discord.com/invite/w8njuNu "Zeppelin Discord Server").

After having access to the bot for our server, we will access its dashboard which is located on the bot's main page.

![Dashbord Preview](/assets/DashboardPreview.png)

You will have your server(s) available when you log in. Depending on the **server access settings** you will have different Roles.
+ **Owner:** All permissions. Default if you are the server owner.
+ **Bot manager:** Can manage dashboard users (including other bot managers) and edit server configuration.
+ **Bot operator:** Can edit server configuration.

Knowing now the basics, we will look `Config` space. The `Access` and `Import/export` options will be explained another moment.

### Format and what you should know
The format used by Zeppelin for its configuration is YAML, for this language you must be careful with spaces and line breaks since the order and functionality of the configuration depends on it.

![Dashbord Preview](/assets/DashboardPreview2.png)

## Guides
Now that we know what we need to start configuring the bot, you can take a look at these guides.

### Guide Types

::: details <Badge type="tip" text="Basic Guide" />
It is a basic guide to understand and use **the necessary** Zeppelin plugins in a basic way.
:::
::: details <Badge type="warning" text="Medium Guide" />
A step up from the basic guide, these go a little deeper into the configuration of the plugins which makes it a little more complex.
:::
::: details <Badge type="danger" text="Advanced Guide" />
It is Zeppelin's most detailed and robust guide.
:::

## Useful resources

### Zeppelin
- **Official resources**
    - [<Badge type="tip" text="Source Code" />](https://github.com/ZeppelinBot/Zeppelin/) - Bot Source Code hosted in GitHub
    - [<Badge type="tip" text="Phisherman" />](https://phisherman.gg/) - Malicious link detection service (API) usable within Zeppelin
- **Dex Resources**
    - [<Badge type="tip" text="Zep by Dex" />](https://github.com/shoaibsajid1/Zeppelin#zep-by-dex) - Detailed & Easy to understand Zeppelin Configs by DEX 
    - [<Badge type="tip" text="Zeppelin Handbook" />](https://docs.google.com/presentation/d/e/2PACX-1vQTFZW4NiJicngfAv36tLlWG5XjktVyZhljekOkzUyzsktwcNCH_Zm82Dm3r1c7S7vKOArJ6XIO5azC/pub?start=true#slide=id.gc6f9e470d_0_0) - Basic and advanced use of Zeppelin's main commands
- **Selfhost resources**
    - [<Badge type="tip" text="Zeppelin Wiki" />](https://zeppelin.wiki/) - Knowledge to be able to turn on your own Zeppelin and other patches to apply.
    - [<Badge type="tip" text="Zeppelin Development" />](https://github.com/ZeppelinBot/Zeppelin/blob/master/DEVELOPMENT.md) - Official guide to the Zeppelin development environment.

### YAML
- **Tools**
    - [<Badge type="danger" text="YAML Online Tools" />](https://onlineyamltools.com/) - Tools to improve the appearance of the YAML language
    - [<Badge type="danger" text="YAML Validator" />](https://www.yamllint.com/) - One of the most popular validators for YAML
    - [<Badge type="danger" text="JSON | YAML Validator" />](https://jsonformatter.org/yaml-validator) - Another validator for YAML
- **Guides**
    - [<Badge type="danger" text="LearnXinYMinutes | YAML" />](https://learnxinyminutes.com/docs/yaml/) - YAML code to learn how to understand it
    - [<Badge type="danger" text="Learn YAML" />](https://www.tutorialspoint.com/yaml/index.htm) - Guide to the main features of the YAML language.

### Regex
- [<Badge type="info" text="Invites" />](https://regex101.com/r/PqFR1G/1) - Update of the regex that Zeppelin uses but adding `servers` in its detection.

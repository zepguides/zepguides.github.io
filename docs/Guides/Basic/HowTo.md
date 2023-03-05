---
head:
  - - meta
    - name: og:description
      content: Short guide to the Workspace
    - name: description
      content: Short guide to the Workspace
title: How to use Zeppelin?
editLink: false
lastUpdated: true
outline: [2, 5]
---
# How to use Zeppelin?

## Main topics
As mentioned above, we must be aware of the complexity that may exist when configuring Zeppelin in the YAML language, but before that, let's explore the options provided by Zeppelin.

::: tip Bot Request
The bot is a private, so there is a requirement to be allowed to use it on your server, which is:
- 5000 members in the server.
  - If you do not have 5000 members, be a partner/verified server.

When you gain access you will get the role Bot User <Badge type="tip" text="Bot User" />.
:::
::: info Extras
If you are already a Bot User you can request the bot for another server without the previous requirements.
:::

## Dashboard
When you enter your [Dashboard](https://zeppelin.gg/dashboard) your server will be available and it will have 3 main options.

### Config
This space is made to contain the server configuration, this space is too wide so you don't have to worry about that.

<div align=center>
  <img src='/assets/Basic/Config.png' width="600" alt="Config" />
</div>

### Access
This is the tab where I can have control of the members of my server so that they can have access to edit the configuration or manage the control of other members.

Here are differentiated by Roles which are:
- **Owner:** It is automatically given to the server owner. It is the role that has the functions of Bot Manager and Bot Operator.
- **Bot Manager:** It manages the users so that they can edit the server configuration or that they are in the same position.
- **Bot Operator:** Have the capacity to edit the server configuration.

Also, two types of users are distinguished in the Dashboard:
- **Dashboard users:** These are users who are added for an indefinite period of time and can have any of the 3 roles.
- **Temporary dashboard users:** These are the users that I can add for 1 hour with the role of Bot Operator.

<div align=center>
  <img src='/assets/Basic/Access.png' width="550" alt="Config" />
</div>

### Import/Export
This option, indicated on the page as an experimental function, you can export the generated cases, created through the `mod_actions` and `cases` plugins, in a JSON file. In the same way it is possible to import them into the configuration following the same structure. It is also possible to import the cases into the configuration following its structure.

::: details See JSON structure
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

## Configuration
The Zeppelin configuration will be explained in a simple way.

### Prefix
It is just a line that, preferably, can go on top of everything.
```yml config.yml
prefix: '!'
```

### Levels
Many of the plugins we will use are distinguished, by default, by levels. Let's understand that a moderator or administrator does not have the same "level" as a member, so it can be written like this:
```yml config.yml
levels:
  '1234567890123': 100 # Admin ID Role
  '3210987654321': 50 # Moderator ID Role
```

### Plugins
Finally, the base with which Zeppelin will work, the plugins are all the complements that we will need, in its [documentation](https://zeppelin.gg/docs) you can see which ones there are.
```yml config.yml
plugins:
[...]
```

::: details See example configuration
```yml config.yml
prefix: '!'

levels:
  '1234567890123': 100 # Admin ID Role
  '3210987654321': 50 # Moderator ID Role

plugins:
[...]
```
:::
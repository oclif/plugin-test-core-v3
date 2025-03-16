@oclif/plugin-test-core-v3
=================

Test plugin that uses @oclif/core v3


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@oclif/plugin-test-core-v3.svg)](https://npmjs.org/package/@oclif/plugin-test-core-v3)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/plugin-test-core-v3.svg)](https://npmjs.org/package/@oclif/plugin-test-core-v3)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-core-v3
$ corev3 COMMAND
running command...
$ corev3 (--version)
@oclif/plugin-test-core-v3/0.1.55 linux-x64 node-v20.18.3
$ corev3 --help [COMMAND]
USAGE
  $ corev3 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`corev3 core-v3 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#corev3-core-v3-optionalarg-defaultarg-defaultfnarg)
* [`corev3 hello PERSON`](#corev3-hello-person)
* [`corev3 hello world`](#corev3-hello-world)
* [`corev3 help [COMMAND]`](#corev3-help-command)
* [`corev3 plugins`](#corev3-plugins)
* [`corev3 plugins:inspect PLUGIN...`](#corev3-pluginsinspect-plugin)
* [`corev3 plugins install PLUGIN`](#corev3-plugins-install-plugin)
* [`corev3 plugins link PATH`](#corev3-plugins-link-path)
* [`corev3 plugins reset`](#corev3-plugins-reset)
* [`corev3 plugins uninstall [PLUGIN]`](#corev3-plugins-uninstall-plugin)
* [`corev3 plugins update`](#corev3-plugins-update)

## `corev3 core-v3 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`

```
USAGE
  $ corev3 core-v3 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG] [--json] [--optionalString <value>]
    [--defaultString <value>] [--defaultFnString <value>]

FLAGS
  --defaultFnString=<value>  [default: async fn default]
  --defaultString=<value>    [default: simple string default]
  --optionalString=<value>

GLOBAL FLAGS
  --json  Format output as json.
```

_See code: [src/commands/core-v3.ts](https://github.com/oclif/plugin-test-core-v3/blob/0.1.55/src/commands/core-v3.ts)_

## `corev3 hello PERSON`

Say hello

```
USAGE
  $ corev3 hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ corev3 hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/oclif/plugin-test-core-v3/blob/0.1.55/src/commands/hello/index.ts)_

## `corev3 hello world`

Say hello world

```
USAGE
  $ corev3 hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ corev3 hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/oclif/plugin-test-core-v3/blob/0.1.55/src/commands/hello/world.ts)_

## `corev3 help [COMMAND]`

Display help for corev3.

```
USAGE
  $ corev3 help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for corev3.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.27/src/commands/help.ts)_

## `corev3 plugins`

List installed plugins.

```
USAGE
  $ corev3 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ corev3 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.34/src/commands/plugins/index.ts)_

## `corev3 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ corev3 plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ corev3 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.34/src/commands/plugins/inspect.ts)_

## `corev3 plugins install PLUGIN`

Installs a plugin into corev3.

```
USAGE
  $ corev3 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into corev3.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the COREV3_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the COREV3_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ corev3 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ corev3 plugins install myplugin

  Install a plugin from a github url.

    $ corev3 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ corev3 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.34/src/commands/plugins/install.ts)_

## `corev3 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ corev3 plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ corev3 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.34/src/commands/plugins/link.ts)_

## `corev3 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ corev3 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.34/src/commands/plugins/reset.ts)_

## `corev3 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ corev3 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ corev3 plugins unlink
  $ corev3 plugins remove

EXAMPLES
  $ corev3 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.34/src/commands/plugins/uninstall.ts)_

## `corev3 plugins update`

Update installed plugins.

```
USAGE
  $ corev3 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.34/src/commands/plugins/update.ts)_
<!-- commandsstop -->

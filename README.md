# semantic-release-presets

🔧 Semantic release presets and plugins for various projects.

> This is not in any way connected or related to the official [semantic-release](https://github.com/semantic-release) group and only maintained by [me](https://github.com/JonasSchubert) and optimized for my usage with Gitlab.
>
> From v2 on this project contains definitions for [gitlab](./presets/gitlab/) and [github](./presets/github/). They are identically but targeting the respecting platforms.

## Usage

Register the package in your package.json as followed:

```json
  ...

  "dependencies": {
    "semantic-release-presets": "{VERSION}",
    ...
```

## Plugins

Currently two plugins are added:

### [MS Teams](./plugins/ms-teams/README.md)

This was forked from https://github.com/wagaru/semantic-release-teams and updated.
Furthermore it was extended with ideas from https://github.com/yllieth/semantic-release-ms-teams .

> If you do not want to use this plugin, but still want to use these presets you can set the environment variable `TEAMS_WEBHOOK_DISABLED` to `true`. This will skip the steps.

### [Nuget](./plugins/nuget/README.md)

Inspired by https://github.com/iFaxity/semantic-release-nuget and https://gitlab.com/dmoonfire/semantic-release-nuget.

### [Custom changelog](./plugins/custom-changelog/README.md)

This is very specific for my own requirements. By default this is switched off.

> If you do want to use the plugin, you have to set the environment variable `CUSTOM_CHANGELOG_ENABLED` to `true`.

## Presets

> These presets make certain assumptions regarding your project setup. Please check them carefully if they apply to your workflows. If they do not match 100% you still can get some inspiration and adjust your configuration to your needs.

Following presets can be used:

### GitHub

#### Full

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.full.json](./presets/github/.releaserc.full.json) | Semantic release configuration with full usage configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `full` |
| [.releaserc.main-full.json](./presets/github/.releaserc.main-full.json) | Semantic release configuration with full usage configured to run on main branch | `main`, `full` |
| [.releaserc.dev-full.json](./presets/github/.releaserc.dev-full.json) | Semantic release configuration with full usage configured to run on dev branch | `dev`, `full` |

#### No NPM publish (Node)

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.noNpmPublish.json](./presets/github/.releaserc.noNpmPublish.json) | Semantic release configuration with full usage, but without `npm publish`, to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance` |
| [.releaserc.main-noNpmPublish.json](./presets/github/.releaserc.main-noNpmPublish.json) | Semantic release configuration with full usage, but without `npm publish`, to run on main branch | `main` |
| [.releaserc.dev-noNpmPublish.json](./presets/github/.releaserc.dev-noNpmPublish.json) | Semantic release configuration with full usage, but without `npm publish`, to run on dev branch | `dev` |

#### Deno

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.deno.json](./presets/github/.releaserc.deno.json) | Semantic release configuration for deno configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `deno` |
| [.releaserc.main-deno.json](./presets/github/.releaserc.main-deno.json) | Semantic release configuration for deno configured to run on main branch | `main`, `deno` |
| [.releaserc.dev-deno.json](./presets/github/.releaserc.dev-deno.json) | Semantic release configuration for deno configured to run on dev branch | `dev`, `deno` |

#### .NET

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.dotnet.json](./presets/github/.releaserc.dotnet.json) | Semantic release configuration for dotnet configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `dotnet` |
| [.releaserc.main-dotnet.json](./presets/github/.releaserc.main-dotnet.json) | Semantic release configuration for dotnet configured to run on main branch | `main`, `dotnet` |
| [.releaserc.dev-dotnet.json](./presets/github/.releaserc.dev-dotnet.json) | Semantic release configuration for dotnet configured to run on dev branch | `dev`, `dotnet` |

#### Nuget

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.nuget.json](./presets/github/.releaserc.nuget.json) | Semantic release configuration for nuget configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `nuget` |
| [.releaserc.main-nuget.json](./presets/github/.releaserc.main-nuget.json) | Semantic release configuration for nuget configured to run on main branch | `main`, `nuget` |
| [.releaserc.dev-nuget.json](./presets/github/.releaserc.dev-nuget.json) | Semantic release configuration for nuget configured to run on dev branch | `dev`, `nuget` |

#### Python

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.python.json](./presets/github/.releaserc.python.json) | Semantic release configuration for python configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `python` |
| [.releaserc.main-python.json](./presets/github/.releaserc.main-python.json) | Semantic release configuration for python configured to run on main branch | `main`, `python` |
| [.releaserc.dev-python.json](./presets/github/.releaserc.dev-python.json) | Semantic release configuration for python configured to run on dev branch | `dev`, `python` |

#### Swagger

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.swagger.json](./presets/github/.releaserc.swagger.json) | Semantic release configuration with full usage, but without `npm publish`, configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support. An additional step to update the version in a `swagger.yaml` file (in root) is added | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `swagger` |
| [.releaserc.main-swagger.json](./presets/github/.releaserc.main-swagger.json) | Semantic release configuration with full usage, but without `npm publish`, configured to run on main branch. An additional step to update the version in a `swagger.yaml` file (in root) is added | `main`, `swagger` |
| [.releaserc.dev-swagger.json](./presets/github/.releaserc.dev-swagger.json) | Semantic release configuration with full usage, but without `npm publish`, configured to run on dev branch. An additional step to update the version in a `swagger.yaml` file (in root) is added | `dev`, `swagger` |

### Gitlab

#### Full

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.full.json](./presets/gitlab/.releaserc.full.json) | Semantic release configuration with full usage configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `full` |
| [.releaserc.main-full.json](./presets/gitlab/.releaserc.main-full.json) | Semantic release configuration with full usage configured to run on main branch | `main`, `full` |
| [.releaserc.dev-full.json](./presets/gitlab/.releaserc.dev-full.json) | Semantic release configuration with full usage configured to run on dev branch | `dev`, `full` |

#### No NPM publish (Node)

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.noNpmPublish.json](./presets/gitlab/.releaserc.noNpmPublish.json) | Semantic release configuration with full usage, but without `npm publish`, to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance` |
| [.releaserc.main-noNpmPublish.json](./presets/gitlab/.releaserc.main-noNpmPublish.json) | Semantic release configuration with full usage, but without `npm publish`, to run on main branch | `main` |
| [.releaserc.dev-noNpmPublish.json](./presets/gitlab/.releaserc.dev-noNpmPublish.json) | Semantic release configuration with full usage, but without `npm publish`, to run on dev branch | `dev` |

#### Deno

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.deno.json](./presets/gitlab/.releaserc.deno.json) | Semantic release configuration for deno configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `deno` |
| [.releaserc.main-deno.json](./presets/gitlab/.releaserc.main-deno.json) | Semantic release configuration for deno configured to run on main branch | `main`, `deno` |
| [.releaserc.dev-deno.json](./presets/gitlab/.releaserc.dev-deno.json) | Semantic release configuration for deno configured to run on dev branch | `dev`, `deno` |

#### .NET

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.dotnet.json](./presets/gitlab/.releaserc.dotnet.json) | Semantic release configuration for dotnet configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `dotnet` |
| [.releaserc.main-dotnet.json](./presets/gitlab/.releaserc.main-dotnet.json) | Semantic release configuration for dotnet configured to run on main branch | `main`, `dotnet` |
| [.releaserc.dev-dotnet.json](./presets/gitlab/.releaserc.dev-dotnet.json) | Semantic release configuration for dotnet configured to run on dev branch | `dev`, `dotnet` |

#### Nuget

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.nuget.json](./presets/gitlab/.releaserc.nuget.json) | Semantic release configuration for nuget configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `nuget` |
| [.releaserc.main-nuget.json](./presets/gitlab/.releaserc.main-nuget.json) | Semantic release configuration for nuget configured to run on main branch | `main`, `nuget` |
| [.releaserc.dev-nuget.json](./presets/gitlab/.releaserc.dev-nuget.json) | Semantic release configuration for nuget configured to run on dev branch | `dev`, `nuget` |

#### Python

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.python.json](./presets/gitlab/.releaserc.python.json) | Semantic release configuration for python configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `python` |
| [.releaserc.main-python.json](./presets/gitlab/.releaserc.main-python.json) | Semantic release configuration for python configured to run on main branch | `main`, `python` |
| [.releaserc.dev-python.json](./presets/gitlab/.releaserc.dev-python.json) | Semantic release configuration for python configured to run on dev branch | `dev`, `python` |

#### Swagger

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.swagger.json](./presets/gitlab/.releaserc.swagger.json) | Semantic release configuration with full usage, but without `npm publish`, configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support. An additional step to update the version in a `swagger.yaml` file (in root) is added | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `swagger` |
| [.releaserc.main-swagger.json](./presets/gitlab/.releaserc.main-swagger.json) | Semantic release configuration with full usage, but without `npm publish`, configured to run on main branch. An additional step to update the version in a `swagger.yaml` file (in root) is added | `main`, `swagger` |
| [.releaserc.dev-swagger.json](./presets/gitlab/.releaserc.dev-swagger.json) | Semantic release configuration with full usage, but without `npm publish`, configured to run on dev branch. An additional step to update the version in a `swagger.yaml` file (in root) is added | `dev`, `swagger` |

### Recommendation

Based on your git knowledge and application or package release cycle, different configurations might be best suited for you:

#### Package and advanced Git knowledge (rebasing, branching)

If you are an advanced git user with rebasing and branching knowledge and maintain an npm or dotnet package, the configurations [.releaserc.full.json](./presets/github/.releaserc.full.json) or [.releaserc.nuget.json](./presets/github/.releaserc.nuget.json) might be beneficial for you.\
They provide support for normal version publishing, pre-releases and maintenance handling.\
Branches:
- `main`: normal version publishing
- `dev`: beta releases
- `alpha`: alpha releases
- `N.x.x`: maintenance handling (e.g. 1.x.x handles all version 1 maintenance releases)

#### Package with basic Git knowledge

If you have basic git knowledge and maintain an npm or dotnet package, the configurations [.releaserc.main-full.json](./presets/github/.releaserc.main-full.json) or [.releaserc.main-nuget.json](./presets/github/.releaserc.main-nuget.json) might be beneficial for you.\
They provide support for normal version publishing on branch `main`.

#### Application development

If you mainain an application you can check the configurations with `main` or `dev` in the name. They define the branch the release will be triggered.\
Most suitable should be the `dev` handling. This means you develop and release on this branch and merge into `main` for manual deployment.

### Usage

Add it to your .releaserc.json:
```json
{
  "extends": "semantic-release-presets/presets/github/.releaserc.full.json"
}
```

## Support

| [<img alt="jonas.schubert" src="https://avatars.githubusercontent.com/u/21952813?v=4" style="width: 90px;"/>](https://github.com/JonasSchubert) |
| :---: |
| [Jonas Schubert](mailto:jonas.schubert.projects@web.de) |

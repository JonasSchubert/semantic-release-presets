# semantic-release-presets

🔧 Semantic release presets and plugins for various projects.

## Usage

Register the package in your package.json as followed:

```json
  ...

  "dependencies": {
    "semantic-release-presets": "{VERSION}",
    ...
```

## Plugins

Currently one plugin is added:

### [MS Teams](./plugins/ms-teams/README.md)

This was forked from https://github.com/wagaru/semantic-release-teams and updated.
Furthermore it was extended with ideas from https://github.com/yllieth/semantic-release-ms-teams .

## Presets

> These presets make certain assumptions regarding your project setup. Please check them carefully if they apply to your workflows. If they do not match 100% you still can get some inspiration and adjust your configuration to your needs.

Following presets can be used:

### Full

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.full.json](./presets/.releaserc.full.json) | Semantic release configuration with full usage configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `full` |
| [.releaserc.main-full.json](./presets/.releaserc.main-full.json) | Semantic release configuration with full usage configured to run on main branch | `main`, `full` |
| [.releaserc.dev-full.json](./presets/.releaserc.dev-full.json) | Semantic release configuration with full usage configured to run on dev branch | `dev`, `full` |

### No NPM publish (Node)

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.noNpmPublish.json](./presets/.releaserc.noNpmPublish.json) | Semantic release configuration with full usage, but without `npm publish`, to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance` |
| [.releaserc.main-noNpmPublish.json](./presets/.releaserc.main-noNpmPublish.json) | Semantic release configuration with full usage, but without `npm publish`, to run on main branch | `main` |
| [.releaserc.dev-noNpmPublish.json](./presets/.releaserc.dev-noNpmPublish.json) | Semantic release configuration with full usage, but without `npm publish`, to run on dev branch | `dev` |

### .NET

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.dotnet.json](./presets/.releaserc.dotnet.json) | Semantic release configuration for dotnet configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `dotnet` |
| [.releaserc.main-dotnet.json](./presets/.releaserc.main-dotnet.json) | Semantic release configuration for dotnet configured to run on main branch | `main`, `dotnet` |
| [.releaserc.dev-dotnet.json](./presets/.releaserc.dev-dotnet.json) | Semantic release configuration for dotnet configured to run on dev branch | `dev`, `dotnet` |

### Nuget

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.nuget.json](./presets/.releaserc.nuget.json) | Semantic release configuration for nuget configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `nuget` |
| [.releaserc.main-nuget.json](./presets/.releaserc.main-nuget.json) | Semantic release configuration for nuget configured to run on main branch | `main`, `nuget` |
| [.releaserc.dev-nuget.json](./presets/.releaserc.dev-nuget.json) | Semantic release configuration for nuget configured to run on dev branch | `dev`, `nuget` |

### Python

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.python.json](./presets/.releaserc.python.json) | Semantic release configuration for python configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `python` |
| [.releaserc.main-python.json](./presets/.releaserc.main-python.json) | Semantic release configuration for python configured to run on main branch | `main`, `python` |
| [.releaserc.dev-python.json](./presets/.releaserc.dev-python.json) | Semantic release configuration for python configured to run on dev branch | `dev`, `python` |

### Swagger

| Name | Description | Category |
| --- | --- | --- |
| [.releaserc.swagger.json](./presets/.releaserc.swagger.json) | Semantic release configuration with full usage, but without `npm publish`, configured to run on branches [main and dev](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels) as well as `n.x.x` (maintenance) and with [alpha, beta, next](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases) and [maintenance](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases) support. An additional step to update the version in a `swagger.yaml` file (in root) is added | `main`, `dev`, `alpha`, `beta`, `next`, `maintenance`, `swagger` |
| [.releaserc.main-swagger.json](./presets/.releaserc.main-swagger.json) | Semantic release configuration with full usage, but without `npm publish`, configured to run on main branch. An additional step to update the version in a `swagger.yaml` file (in root) is added | `main`, `swagger` |
| [.releaserc.dev-swagger.json](./presets/.releaserc.dev-swagger.json) | Semantic release configuration with full usage, but without `npm publish`, configured to run on dev branch. An additional step to update the version in a `swagger.yaml` file (in root) is added | `dev`, `swagger` |

### Recommendation

Based on your git knowledge and application or package release cycle, different configurations might be best suited for you:

#### Package and advanced Git knowledge (rebasing, branching)

If you are an advanced git user with rebasing and branching knowledge and maintain an npm or dotnet package, the configurations [.releaserc.full.json](./presets/.releaserc.full.json) or [.releaserc.nuget.json](./presets/.releaserc.nuget.json) might be beneficial for you.\
They provide support for normal version publishing, pre-releases and maintenance handling.\
Branches:
- `main`: normal version publishing
- `dev`: beta releases
- `alpha`: alpha releases
- `N.x.x`: maintenance handling (e.g. 1.x.x handles all version 1 maintenance releases)

#### Package with basic Git knowledge

If you have basic git knowledge and maintain an npm or dotnet package, the configurations [.releaserc.main-full.json](./presets/.releaserc.main-full.json) or [.releaserc.main-nuget.json](./presets/.releaserc.main-nuget.json) might be beneficial for you.\
They provide support for normal version publishing on branch `main`.

#### Application development

If you mainain an application you can check the configurations with `main` or `dev` in the name. They define the branch the release will be triggered.\
Most suitable should be the `dev` handling. This means you develop and release on this branch and merge into `main` for manual deployment.

### Usage

Add it to your .releaserc.json:
```json
{
  "extends": "semantic-release-presets/presets/.releaserc.full.json"
}
```

## Support

| [<img alt="jonas.schubert" src="https://avatars.githubusercontent.com/u/21952813?v=4" style="width: 90px;"/>](https://github.com/JonasSchubert) |
| :---: |
| [Jonas Schubert](mailto:jonas.schubert.projects@web.de) |

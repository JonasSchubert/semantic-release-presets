# Semantic Release Plugin for custom changelogs

> This is very specific for my own requirements. By default this is switched off.
>
> If you do want to use the plugin, you have to set the environment variable `CUSTOM_CHANGELOG_ENABLED` to `true`.

## Supported Steps

| Step | Description |
| --- | --- |
| `verifyCondition` | Verifies that the specified custom changelog file exists. |
| `prepare` | Packs the nuget package and adds a source if configured. |

## Plugin Config

| Name | Description | Required | Default Value |
| --- | --- | --- | --- |
| `customChangelog` | The path to the custom changelog file. | `yes` | `changelog.json`|
| `fileType` | The supported file type. | `yes` | `json`|
| `filter` | The filter to evaluate which commits shall be added to the custom changelog. Use a [es-toolkit template](https://es-toolkit.slash.page/reference/compat/string/template.html#template). | `yes` | `<% if (body?.startsWith('CUSTOM CHANGELOG:')) { body.replace('CUSTOM CHANGELOG:') } %>`|
| `locale` | The locale is used to format the date for the custom changelog entry. | `yes` | `de`|

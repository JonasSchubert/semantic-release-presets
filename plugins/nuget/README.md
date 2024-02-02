# Semantic Release Plugin for .NET Nuget

> Inspired by https://github.com/iFaxity/semantic-release-nuget and https://gitlab.com/dmoonfire/semantic-release-nuget.

## Supported Steps

| Step | Description |
| --- | --- |
| `verifyCondition` | Verifies that the .NET CLI is installed and all variables are set either directly or in the environment variables. |
| `prepare` | Packs the nuget package and adds a source if configured. |
| `publish` | Publishes the nuget package to the defined source. |

## Plugin Config

| Name | Description | Required | Default Value |
| --- | --- | --- | --- |
| `apiKey` | Used for authorization to the nuget source. Can be templated. | `no` | ` `|
| `configuration` | The configuration to pack. | `no` | `Release`|
| `output` | The output dir for the pack. | `no` | `output`|
| `password` | Used for authorization to the nuget source if `apiKey` does not apply. Can be templated. | `no` | ` `|
| `source` | The name of the nuget source. Can be templated. | `yes` | ` `|
| `url` | The url to the nuget source. Can be templated. | `no` | ` `|
| `username` | Used for authorization to the nuget source if `apiKey` does not apply. Can be templated. | `no` | ` `|

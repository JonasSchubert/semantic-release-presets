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
| `apiKey` | Used for authorization to the nuget source. | `no` | ` `|
| `configuration` | The configuration to pack. | `no` | `Release`|
| `packageFilesRegex` | How to find the nuget package file(s). | `no` | `*.nupkg`|
| `password` | Used for authorization to the nuget source if `apiKey` does not apply. | `no` | ` `|
| `source` | The name of the nuget source. | `yes` | ` `|
| `url` | The url to the nuget source. | `no` | ` `|
| `username` | Used for authorization to the nuget source if `apiKey` does not apply. | `no` | ` `|

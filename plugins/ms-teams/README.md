# Semantic Release Plugin for Microsoft Teams

> Forked from here https://github.com/wagaru/semantic-release-teams and updated.
>
> Extended with ideas from https://github.com/yllieth/semantic-release-ms-teams.
>
> If you do not want to use the plugin, but still want to use these presets you can set the environment variable `TEAMS_WEBHOOK_DISABLED` to `true`. This will skip the steps.

## Supported Steps

| Step | Description |
| --- | --- |
| `success` | Send a Microsoft Teams MessageCard to connector for a success release. |
| `fail` | Send a Microsoft Teams MessageCard to connector for a failure release. |

## Plugin Config

| Name | Description | Required | Default Value |
| --- | --- | --- | --- |
| `webhookUrl` | The webhook URL to use to post to Teams. Can also be set using the env var `TEAMS_WEBHOOK_URL` | `yes` Either plugin config or env var needs to be set. | `undefined`|
| `success.activityTitle` | The title for the message card activity on success. | `no` | `🚀 A new version has been released. 🔥` |
| `success.image` | The image for the message card on success. | `no` | ![https://img.icons8.com/material/344/info--v1.png](https://img.icons8.com/material/344/info--v1.png) |
| `success.themeColor` | The theme color for the message card activity on success. | `no` | <div style="height: 32px; width: 32px; background-color: #1343D4;"></div> |
| `fail.activityTitle` | The title for the message card activity on failure. | `no` | `⚠️ A new version FAILED to release! Please check the pipeline!` |
| `fail.image` | The image for the message card on failure. | `no` | ![https://img.icons8.com/material/452/warning-shield.png](https://img.icons8.com/material/452/warning-shield.png) |
| `fail.themeColor` | The theme color for the message card activity on failure. | `no` | <div style="height: 32px; width: 32px; background-color: #D41316;"></div> |

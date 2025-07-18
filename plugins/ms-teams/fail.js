import { EnvHttpProxyAgent } from 'undici';
import ky from 'ky';
import getMessageCard from './get-message-card.js';
import getRepoInfo from './get-repo-info.js';

const getMessageCardFailConfig = (pluginConfig) => {
  const activityTitle = !pluginConfig.fail || !pluginConfig.fail.activityTitle
    ? '⚠️ A new version FAILED to release! Please check the pipeline!'
    : pluginConfig.fail.activityTitle;

  const image = !pluginConfig.fail || !pluginConfig.fail.image
    ? 'https://img.icons8.com/material/452/explosion.png'
    : pluginConfig.fail.image;

  const themeColor = !pluginConfig.fail || !pluginConfig.fail.themeColor
    ? 'D41316'
    : pluginConfig.fail.themeColor;

  return { activityTitle, image, themeColor };
};

export default async (pluginConfig, context) => {
  const { env: { TEAMS_WEBHOOK_DISABLED, TEAMS_WEBHOOK_URL }, logger, options } = context;
  if (!!TEAMS_WEBHOOK_DISABLED) {
    logger.log('Microsoft Teams webhook is disabled!');
    return await Promise.resolve();
  }

  const url = pluginConfig.webhookUrl || TEAMS_WEBHOOK_URL;
  const repo = getRepoInfo(options.repositoryUrl);
  const projectName = options.repositoryUrl.split('/').pop().replace('.git', '');

  const messageCard = getMessageCard({
    ...getMessageCardFailConfig(pluginConfig),
    actions: [
      {
        '@type': 'OpenUri',
        name: 'Pipelines',
        targets: [
          {
            os: 'default',
            uri: `${repo.URL}/-/pipelines`
          }
        ]
      }
    ],
    context,
    title: projectName
  });

  await ky
    .extend({ dispatcher: new EnvHttpProxyAgent() })
    .post(url, {
      headers: { 'Content-Type': 'application/json' },
      json: messageCard
    })
    .then(() => logger.log('Message sent to Microsoft Teams'))
    .catch((error) => logger.error('An error occurred while sending the message to Microsoft Teams', error));
};

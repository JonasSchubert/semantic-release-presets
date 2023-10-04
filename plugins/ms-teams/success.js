import got from 'got';
import getGotConfig from './get-got-config.js';
import getMessageCard from './get-message-card.js';
import getRepoInfo from './get-repo-info.js';

const MAX_LENGTH = 4000; // Set to 4000 for now. => https://github.com/microsoft/BotFramework-Services/issues/228

const getMessageCardSuccessConfig = (pluginConfig) => {
  const activityTitle = !pluginConfig.success || !pluginConfig.success.activityTitle
    ? '🚀 A new version has been released. 🔥'
    : pluginConfig.success.activityTitle;

  const image = !pluginConfig.success || !pluginConfig.success.image
    ? 'https://img.icons8.com/material/344/info--v1.png'
    : pluginConfig.success.image;

  const themeColor = !pluginConfig.success || pluginConfig.success.themeColor
    ? '1343D4'
    : pluginConfig.success.themeColor;

  return { activityTitle, image, themeColor };
};

export default async (pluginConfig, context) => {
  const { env: { HTTP_PROXY, HTTPS_PROXY, NO_PROXY, TEAMS_WEBHOOK_DISABLED, TEAMS_WEBHOOK_URL }, envCi: { branch }, logger, nextRelease, options } = context;
  if (!!TEAMS_WEBHOOK_DISABLED) {
    logger.log('Microsoft Teams webhook is disabled!');
    return await Promise.resolve();
  }

  const url = pluginConfig.webhookUrl || TEAMS_WEBHOOK_URL;
  const repo = getRepoInfo(options.repositoryUrl);
  const projectName = options.repositoryUrl.split('/').pop().replace('.git', '');

  let releaseNotes = nextRelease.notes;
  if (releaseNotes.length > MAX_LENGTH) {
    releaseNotes = `${releaseNotes.substring(0, MAX_LENGTH - 5)} ...`;
  }

  const messageCard = getMessageCard({
    ...getMessageCardSuccessConfig(pluginConfig),
    actions: [
      {
        '@type': 'OpenUri',
        name: 'Project',
        targets: [
          {
            os: 'default',
            uri: repo.URL
          }
        ]
      },
      {
        '@type': 'OpenUri',
        name: 'Changelog',
        targets: [
          {
            os: 'default',
            uri: `${repo.URL}/-/blob/${branch}/CHANGELOG.md`
          }
        ]
      }
    ],
    context,
    releaseNotes,
    title: projectName
  });

  await got.post(url, {
    ...getGotConfig(url, HTTP_PROXY, HTTPS_PROXY, NO_PROXY),
    json: messageCard
  })
    .then(() => logger.log('Message sent to Microsoft Teams'))
    .catch((error) => logger.error('An error occurred while sending the message to Microsoft Teams', error));
};

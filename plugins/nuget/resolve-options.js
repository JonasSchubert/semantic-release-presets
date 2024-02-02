/**
 * @param {{ apiKey: string | undefined; configuration: string; output: string; password: string | undefined; source: string | undefined; url: string | undefined; username: string | undefined }} options The plugin options.
 * @param {*} context The semantic release context.
 * @returns {{ apiKey: string | undefined; configuration: string; output: string; password: string | undefined; source: string | undefined; url: string | undefined; username: string | undefined }}
 */
export default (options, context) => {
  let { source, url } = options;
  if ((!url || !url.trim().length) && source === 'gitlab') {
    url = `${context.env.CI_SERVER_URL}/api/v4/projects/${context.env.CI_PROJECT_ID}/packages/nuget/index.json`;
  }

  return {
    apiKey: context.env.GL_TOKEN || context.env.GITLAB_TOKEN || context.env.CI_JOB_TOKEN,
    configuration: 'Release',
    output: context.env.NUGET_OUTPUT || 'output',
    password: context.env.GL_TOKEN || context.env.GITLAB_TOKEN || context.env.CI_JOB_TOKEN,
    source: context.env.NUGET_SOURCE,
    url,
    ...options,
  };
};

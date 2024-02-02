import { template } from 'lodash';

/**
 * @param {{ apiKey: string | undefined; configuration: string; output: string; password: string | undefined; source: string | undefined; url: string | undefined; username: string | undefined }} options The plugin options.
 * @param {*} context The semantic release context.
 * @returns {{ apiKey: string | undefined; configuration: string; output: string; password: string | undefined; source: string | undefined; url: string | undefined; username: string | undefined }}
 */
export default (options, context) => ({
  apiKey: template(options.apiKey)(context),
  configuration: options.configuration || 'Release',
  output: context.env.output || 'output',
  password: template(options.password)(context),
  source: template(options.source)(context),
  url: template(options.url)(context),
  username: template(options.username)(context)
});

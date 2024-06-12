import fs from 'node:fs';
import path from 'node:path';

/**
 * A method to verify that the custom changelog file exists.
 * @param {{ customChangelog?: string; fileType?: 'json'; filter?: string; locale?: string; }} options The plugin options.
 * @param {*} context The semantic release context.
 */
export default async (options, context) => {
  const { env } = context;
  const { CUSTOM_CHANGELOG_ENABLED } = env;
  const { customChangelog, fileType } = options;

  const errors = [];

  if (CUSTOM_CHANGELOG_ENABLED === 'true' && !fs.existsSync(path.resolve(customChangelog))) {
    errors.push('Custom changelog file does not exist!');
  }

  if (CUSTOM_CHANGELOG_ENABLED === 'true' && !!fileType && fileType !== 'json') {
    errors.push('Currently the only supported file type is JSON!');
  }

  // Throw any errors we accumulated during the validation
  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }
};

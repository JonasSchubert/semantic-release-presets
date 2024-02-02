import { execSync } from 'node:child_process';
import resolveOptions from './resolve-options.js';

export default (options, context) => {
  const { logger } = context;
  const resolvedOptions = resolveOptions(options, context);

  const args = [
    `${resolvedOptions.packageFilesRegex}`,
    `--source ${resolvedOptions.source}`,
  ];

  if (resolvedOptions.apiKey) {
    args.push(`--api-key ${resolvedOptions.apiKey}`);
  }

  try {
    logger.log(`Pushing '${resolvedOptions.packageFilesRegex}' to ${resolvedOptions.source}.`);
    execSync(`dotnet nuget push ${args.join(' ')}`);
  } catch (error) {
    if (error && error.stderr) {
      logger.error(error.stderr.toString().trim());
    }

    throw new Error(error);
  }
};

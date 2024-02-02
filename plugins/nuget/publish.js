import SemanticReleaseError from "@semantic-release/error";
import { execa } from 'execa';
import { resolve } from 'path';
import resolveOptions from './resolve-options.js';

export default async (options, context) => {
  const { logger } = context;
  const resolvedOptions = resolveOptions(options, context);
  const packagePath = resolve(resolvedOptions.output, '*.nupkg');

  const args = [
    'nuget',
    'push',
    packagePath,
    '--source', resolvedOptions.source,
  ];

  if (resolvedOptions.apiKey) {
    logger.log('Adding API key.');
    args.push('--api-key', resolvedOptions.apiKey);
  }

  logger.log(`Pushing '${resolvedOptions.output}' to ${resolvedOptions.source}.`);
  try {
    await execa('dotnet',
      args,
      { stdio: "inherit" });
  } catch (error) {
    logger.error(error);
    throw new SemanticReleaseError(`dotnet publish failed with exit code ${error.exitCode}`, 'EDOTNET_PUBLISH_FAILED', error.command);
  }
};

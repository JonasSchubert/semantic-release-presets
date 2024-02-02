import SemanticReleaseError from "@semantic-release/error";
import { execa } from 'execa';
import resolveOptions from './resolve-options.js';

export default async (options, context) => {
  const { logger } = context;
  const resolvedOptions = resolveOptions(options, context);

  if (resolvedOptions.url && resolvedOptions.source && resolvedOptions.username && resolvedOptions.password) {
    logger.log(`Adding nuget source ${resolvedOptions.source} from '${resolvedOptions.url}'.`);
    try {
      await execa('dotnet',
        [
          'nuget',
          'add',
          'source', resolvedOptions.url,
          '--name', resolvedOptions.source,
          '--username', resolvedOptions.username,
          '--password', resolvedOptions.password,
          '--store-password-in-clear-text'
        ],
        { stdio: "inherit" });
    } catch (error) {
      logger.error(error);
      throw new SemanticReleaseError(`dotnet nuget add source failed with exit code ${error.exitCode}`, 'EDOTNET_NUGET_ADD_SOURCE_FAILED', error.message);
    }
  }

  logger.log(`Packing with configuration ${resolvedOptions.configuration}.`);
  try {
    await execa('dotnet',
      [
        'pack',
        '--configuration', resolvedOptions.configuration,
        '--output', resolvedOptions.output,
        '--nologo'
      ],
      { stdio: "inherit" });
  } catch (error) {
    logger.error(error);
    throw new SemanticReleaseError(`dotnet pack failed with exit code ${error.exitCode}`, 'EDOTNET_PACK_FAILED', error.command);
  }
};

import { execSync } from 'node:child_process';
import resolveOptions from './resolve-options.js';

export default (options, context) => {
  const { logger } = context;
  const resolvedOptions = resolveOptions(options, context);

  if (resolvedOptions.url && resolvedOptions.source && resolvedOptions.username && resolvedOptions.password) {
    logger.log(`Adding nuget source ${resolvedOptions.source} from '${resolvedOptions.url}'.`);
    execSync(`dotnet nuget add source "${resolvedOptions.url}" --name ${resolvedOptions.source} --username ${resolvedOptions.username} --password ${resolvedOptions.password} --store-password-in-clear-text`);
  }

  logger.log(`Packing with configuration ${resolvedOptions.configuration}.`);
  execSync(`dotnet pack --configuration ${resolvedOptions.configuration}`);
};

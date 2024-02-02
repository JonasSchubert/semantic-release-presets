import { execSync } from 'node:child_process';
import resolveOptions from './resolve-options.js';

export default (options, context) => {
  const resolvedOptions = resolveOptions(options, context);

  if (resolvedOptions.url && resolvedOptions.source && resolvedOptions.username && resolvedOptions.password) {
    execSync(`dotnet nuget add source "${resolvedOptions.url}" --name ${resolvedOptions.source} --username ${resolvedOptions.username} --password ${resolvedOptions.password} --store-password-in-clear-text`);
  }

  execSync(`dotnet pack --configuration ${resolvedOptions.configuration}`);
};

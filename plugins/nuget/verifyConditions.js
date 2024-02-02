import { execSync } from 'node:child_process';
import resolveOptions from './resolve-options.js';

export default (options, context) => {
  const resolvedOptions = resolveOptions(options, context);

  const errors = [];

  const isNotSet = (value) => !value || !value.trim().length;

  if (isNotSet(resolvedOptions.configuration)) {
    errors.push('The configuration must be set. Default is "Release".')
  }

  if (isNotSet(resolvedOptions.apiKey) && (isNotSet(resolvedOptions.username) || isNotSet(resolvedOptions.password))) {
    errors.push('Either api key or username and password must be set!');
  }

  try {
    execSync('dotnet nuget --version');
  } catch {
    errors.push('Failed to check dotnet version. Is it installed?');
  }

  // Throw any errors we accumulated during the validation
  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }
};

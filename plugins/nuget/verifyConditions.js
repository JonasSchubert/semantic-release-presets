import _ from 'lodash';
import { execa } from 'execa';
import resolveOptions from './resolve-options.js';

const isNonEmptyString = (value) => _.isString(value) && value.trim();

export default async (options, context) => {
  const resolvedOptions = resolveOptions(options, context);

  const errors = [];

  if (!isNonEmptyString(resolvedOptions.configuration)) {
    errors.push('The configuration must be set. Default is "Release".')
  }

  if (!isNonEmptyString(resolvedOptions.apiKey) && (!isNonEmptyString(resolvedOptions.username) || !isNonEmptyString(resolvedOptions.password))) {
    errors.push('Either api key or username and password must be set!');
  }

  try {
    await execa('dotnet',
      [
        'nuget',
        '--version'
      ],
      { stdio: "inherit" });
  } catch {
    errors.push('Failed to check dotnet version. Is it installed?');
  }

  // Throw any errors we accumulated during the validation
  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }
};

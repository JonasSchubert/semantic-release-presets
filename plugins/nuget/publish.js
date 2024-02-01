import { execSync } from 'node:child_process';
import resolveOptions from './resolve-options';

export default (options, context) => {
  const resolvedOptions = resolveOptions(options, context);

  const args = [
    `"${resolvedOptions.packageFilesRegex}"`,
    `--source ${resolvedOptions.source}`,
  ];

  if (resolvedOptions.apiKey) {
    args.push(`--api-key ${resolvedOptions.apiKey}`);
  }

  execSync(`dotnet nuget push ${args.join(' ')}`);
};

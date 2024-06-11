import SemanticReleaseError from '@semantic-release/error';
import fs from 'node:fs';
import path from 'node:path';
import resolveOptions from './resolve-options.js';
import { template } from 'lodash';

export default async (options, context) => {
  const { commits, env: { CUSTOM_CHANGELOG_ENABLED }, logger } = context;
  const { customChangelog, fileType, filter, locale } = resolveOptions(options, context);

  if (CUSTOM_CHANGELOG_ENABLED !== 'true') {
    logger.log('Custom changelog is disabled!');
    return await Promise.resolve();
  }

  try {
    const relevantCommits = commits
      // Format to expected format
      .map((commit) => ({
        date: new Date(commit.committerDate).toLocaleDateString(locale),
        description: [template(filter)(commit)]
      }))
      // Remove empty descriptions
      .filter(({ description }) => !!description[0])
      // Group same dates
      .reduce((previous, current) => {
        const index = previous.findIndex((item) => item.date === current.date);
        if (index > -1) {
          previous[index].description.push(current.description);
        } else {
          previous.push(current);
        }

        return previous
      }, [])
      // Sort by date descending
      .sort((item1, item2) => item1.date > item2.date ? -1 : 1);

    if (relevantCommits.length > 0) {
      if (fileType === 'json') {
        const customChangelogJson = JSON.parse(fs.readFileSync(path.resolve(customChangelog)).toString());
        customChangelogJson.changelog.unshift(...relevantCommits);

        fs.writeFileSync(path.resolve(customChangelog), JSON.stringify(customChangelogJson, null, 2));
      } else {
        throw new Error(`Unsupported file type ${fileType}!`);
      }
    } else {
      logger.info('No relevant commits found.');
    }
  } catch (error) {
    logger.error(error);
    throw new SemanticReleaseError(`Handling custom changelog failed with exit code ${error.exitCode}`, 'EDOTNET_PACK_FAILED', error.command);
  }
};

export default ({ actions, activityTitle, context, image, releaseNotes, themeColor, title }) => {
  const { nextRelease, lastRelease, commits } = context;

  const facts = [];

  if (!!releaseNotes && !!releaseNotes.length) {
    // Add release notes to facts.
    facts.push({ name: 'Release Notes', value: releaseNotes });
  }

  // Add version to facts.
  facts.push({ name: 'Version', value: `${nextRelease.gitTag} (${nextRelease.type})` });

  // Add last release to facts.
  if (Object.keys(lastRelease).length > 0) { facts.push({ name: 'Last Release', value: lastRelease.gitTag }); }

  // Add commits to facts.
  facts.push({ name: 'Commits', value: commits.length });

  // Add contributors to facts.
  if (commits.length > 0) {
    const contributors = commits
      .map(commit => commit.author.email)
      .reduce(
        (accumulator, email) => accumulator.add(email.substring(0, email.indexOf('@'))),
        new Set()
      );

    facts.push({ name: 'Contributors', value: Array.from(contributors).join(', ') });
  }

  const content = {
    '@type': 'MessageCard',
    '@context': 'http://schema.org/extensions',
    themeColor,
    summary: activityTitle,
    title,
    sections: [
      {
        activityTitle,
        activitySubtitle: '',
        activityImage: image,
        facts,
        markdown: true
      }
    ],
    potentialAction: actions
  };

  return content;
};

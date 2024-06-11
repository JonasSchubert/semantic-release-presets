/**
 * @param {{ customChangelog?: string; fileType?: 'json'; filter?: string; locale?: string; }} options The plugin options.
 * @param {*} _context The semantic release context.
 * @returns {{ customChangelog: string; fileType: 'json'; filter: string; locale: string; }}
 */
export default (options, _context) => ({
  customChangelog: options.customChangelog || 'changelog.json',
  fileType: options.fileType || 'json',
  filter: options.filter || `<% if (body?.startsWith('CUSTOM CHANGELOG:')) { body.replace('CUSTOM CHANGELOG:') } %>`,
  locale: options.locale || 'de',
});

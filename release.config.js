module.exports = {
  branches: [
    'master',
    { name: 'next', prerelease: true, channel: 'next' },
    { name: 'rc', prerelease: true, channel: 'rc' },
    { name: 'beta', prerelease: true, channel: 'beta' },
    { name: 'alpha', prerelease: true, channel: 'alpha' },
  ],
  analyzeCommits: '@semantic-release/commit-analyzer',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
  publish: '@semantic-release/npm',
  success: false,
  fail: false,
  npmPublish: true,
  tarballDir: 'dist',
};

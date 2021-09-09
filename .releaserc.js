// .releaserc.js

// const config = require('@akijoey/semantic-release-config')

// module.exports = config.releasePackage('maven')

module.exports = {
  branches: 'main',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    'semantic-release-maven',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'pom.xml', 'package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github'
  ],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    'semantic-release-maven',
    '@semantic-release/git'
  ]
}

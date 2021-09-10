// .releaserc.js

// const config = require('@akijoey/semantic-release-config')

// module.exports = config.releasePackage('maven')

module.exports = {
  branches: 'main',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      'semantic-release-maven',
      {
        profile: 'release'
      }
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: 'pom.xml',
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ],
  prepare: [
    '@semantic-release/changelog',
    'semantic-release-maven',
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  publish: ['@semantic-release/npm']
}

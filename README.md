# oss-paret

[![maven][maven-image]][maven-url]
[![license][license-image]][license-url]

Parent pom for public maven projects.

## Install

Add to your `settings.xml`:

```xml
<servers>
  <server>
    <id>ossrh</id>
    <username>jira-username</username>
    <password>jira-password</password>
  </server>
</servers>
```

Add to your `pom.xml`:

```xml
<parent>
  <groupId>com.akijoey</groupId>
  <artifactId>oss-parent</artifactId>
  <version>0.0.1</version>
</parent>
```

## Usage

Change project versions.

`$ mvn versions:set -DgenerateBackupPoms=false -DnewVersion=<version>`

Performing a snapshot deployment.

`$ mvn clean deploy`

Performing a release deployment.

`$ mvn clean deploy -P release`

## License

[MIT][license-url] © AkiJoey

[license-image]: https://img.shields.io/github/license/akijoey/oss-parent
[license-url]: https://github.com/akijoey/oss-parent/blob/master/LICENSE
[maven-image]: https://img.shields.io/maven-central/v/com.akijoey/jbatison.svg?label=maven
[maven-url]: https://search.maven.org/search?q=g:%22com.akijoey%22%20AND%20a:%22jbatison%22
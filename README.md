# oss-paret

[![maven][maven-image]][maven-url]
[![build][build-image]][build-url]
[![license][license-image]][license-url]

Parent pom for public maven projects.

## Install

Add to your `settings.xml`:

```xml
<servers>
  <server>
    <id>ossrh</id>
  </server>
</servers>
```

Add to your `pom.xml`:

```xml
<parent>
  <groupId>com.akijoey</groupId>
  <artifactId>oss-parent</artifactId>
  <version>1.2.1</version>
</parent>
```

## Usage

Change project versions.

`$ mvn versions:set -DgenerateBackupPoms=false -DnewVersion=<version>`

Performing a snapshot deployment.

`$ mvn deploy`

Performing a release deployment.

`$ mvn deploy -P release`

## License

[MIT][license-url] © AkiJoey

[maven-image]: https://img.shields.io/maven-central/v/com.akijoey/oss-parent.svg?label=maven
[maven-url]: https://search.maven.org/search?q=g:%22com.akijoey%22%20AND%20a:%22oss-parent%22
[build-image]: https://img.shields.io/github/actions/workflow/status/akijoey/oss-parent/build.yml
[build-url]: https://github.com/akijoey/oss-parent/actions/workflows/build.yml
[license-image]: https://img.shields.io/github/license/akijoey/oss-parent
[license-url]: https://github.com/akijoey/oss-parent/blob/main/LICENSE

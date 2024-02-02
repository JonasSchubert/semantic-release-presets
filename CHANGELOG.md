## [4.0.1](https://github.com/JonasSchubert/semantic-release-presets/compare/v4.0.0...v4.0.1) (2024-02-02)


### Bug Fixes

* **nuget:** add file extension to import path ([dad8408](https://github.com/JonasSchubert/semantic-release-presets/commit/dad84084de8abcabf92370c8ebfe26958b5ddd5b))

# [4.0.0](https://github.com/JonasSchubert/semantic-release-presets/compare/v3.0.0...v4.0.0) (2024-02-01)


### Bug Fixes

* **deps:** bump got to 14.1.0 in plugin ms-teams ([b1a6a26](https://github.com/JonasSchubert/semantic-release-presets/commit/b1a6a26dab019c17e8577bc0e8a9ea18533b2386))
* **deps:** bump got to 14.1.0, bump husky and commitlint ([ca465ad](https://github.com/JonasSchubert/semantic-release-presets/commit/ca465adb15d6504851140aea50a62e44fd6e906f))


### Features

* **plugins:** add nuget publish ([448e642](https://github.com/JonasSchubert/semantic-release-presets/commit/448e6421be28a7d7d56a5611164cfad75f52c4d7))
* **presets:** use nuget plugin in gitlab configurations for nuget ([7ad59ec](https://github.com/JonasSchubert/semantic-release-presets/commit/7ad59ecf4841b60470725edb6afbf7c5a29ea563))


### BREAKING CHANGES

* **presets:** requires installed dotnet nuget cli

# [3.0.0](https://github.com/JonasSchubert/semantic-release-presets/compare/v2.0.6...v3.0.0) (2023-12-03)


### chore

* **node:** update dependencies and engines ([3c4c67c](https://github.com/JonasSchubert/semantic-release-presets/commit/3c4c67c42134605800f6774c11103b9fbbc3bed6))


### Features

* **presets:** add initial deno config ([be13671](https://github.com/JonasSchubert/semantic-release-presets/commit/be1367126a047201264ed8b9f13f116d6700d7bb))


### BREAKING CHANGES

* **node:** required node >=20 and npm >=10, uses got@v14

## [2.0.6](https://github.com/JonasSchubert/semantic-release-presets/compare/v2.0.5...v2.0.6) (2023-11-16)


### Bug Fixes

* **engines:** allow additional versions ([9b98fd8](https://github.com/JonasSchubert/semantic-release-presets/commit/9b98fd88bcb32fe43b49eae66b35425364a5849a))
* **packages:** remove semantic release from dependencies ([3fa2da7](https://github.com/JonasSchubert/semantic-release-presets/commit/3fa2da70620062d66172978163e5d3c6e84e3f91))

## [2.0.5](https://github.com/JonasSchubert/semantic-release-presets/compare/v2.0.4...v2.0.5) (2023-10-19)


### Bug Fixes

* **npm:** bump dependency versions ([4b0bf0f](https://github.com/JonasSchubert/semantic-release-presets/commit/4b0bf0f765d3fb4de3e8f4710f7dda582250738c))

## [2.0.4](https://github.com/JonasSchubert/semantic-release-presets/compare/v2.0.3...v2.0.4) (2023-10-04)


### Bug Fixes

* **ms-teams:** validate whether teams webhook is disabled ([dececc9](https://github.com/JonasSchubert/semantic-release-presets/commit/dececc95850d497747800b68d64471ac42ab4a81))

## [2.0.3](https://github.com/JonasSchubert/semantic-release-presets/compare/v2.0.2...v2.0.3) (2023-10-04)


### Bug Fixes

* **npm:** bump dependency versions ([1ddcd16](https://github.com/JonasSchubert/semantic-release-presets/commit/1ddcd16de087ab9de681aa9233b751785368e07d))

## [2.0.2](https://github.com/JonasSchubert/semantic-release-presets/compare/v2.0.1...v2.0.2) (2023-10-02)


### Bug Fixes

* **ms-teams:** add ignore to prevent node_modules being published ([d712f35](https://github.com/JonasSchubert/semantic-release-presets/commit/d712f3551159373cc63193a87ac3596b806772e3))

## 2.0.1 (2023-10-02)


### Fix

* **npmrc:** remove strict engines rule ([472231a](https://github.com/JonasSchubert/semantic-release-presets/commit/472231acf6b4f30f39a9b994c1b2fb27e5d69ece))

## 2.0.0 (2023-10-02)


### Feature

* **ms-teams:** allow to disable plugin ([1eb1112](https://github.com/JonasSchubert/semantic-release-presets/commit/1eb11123fe5ac70d7eca0700927b1f88d3dcf5e4))
* **platforms:** support gitlab and github ([ad3704c](https://github.com/JonasSchubert/semantic-release-presets/commit/ad3704c2b329849e18d564e371f82f74e7546d20))

### Breaking Changes

* **platforms:** move presets to platform specific directories ([ad3704c](https://github.com/JonasSchubert/semantic-release-presets/commit/ad3704c2b329849e18d564e371f82f74e7546d20))

## 1.0.4 (2023-10-01)


### Fix

* **ms-teams-plugin:** mark as module ([121de4b](https://github.com/JonasSchubert/semantic-release-presets/commit/121de4b458f9e9cd1cbaa00d336b86fd73f07b7c))

## 1.0.3 (2023-09-29)


### Fix

* **ms-teams-plugin:** mark as module ([e279c03](https://github.com/JonasSchubert/semantic-release-presets/commit/e279c03aba5d7597c1e9ca55cca43747d98f2b14))

## 1.0.2 (2023-09-29)


### Fix

* **ms-teams-plugin:** mark as module ([fdf3c07](https://github.com/JonasSchubert/semantic-release-presets/commit/fdf3c07f8667db5f2ac20cc5282204d96ec399dd))

## 1.0.1 (2023-09-29)


### Fix

* **ms-teams-plugin:** mark as module ([07dfa41](https://github.com/JonasSchubert/semantic-release-presets/commit/07dfa41ff147858cfda9c9f0715e974e2e8e62bc))

## 1.0.0 (2023-09-29)


### Feature

* **project:** add initial files ([e7ca66c](https://github.com/JonasSchubert/semantic-release-presets/commit/e7ca66caafa24a79a53a3b36fa3b69568b57655b))

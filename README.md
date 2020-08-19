# \[NodeJS\] More Array

[`hugoalh-studio/NodeJS.MoreArray`](https://github.com/hugoalh-studio/NodeJS.MoreArray)

[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh-studio/NodeJS.MoreArray/graphs/contributors)
[![License](https://img.shields.io/github/license/hugoalh-studio/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)](./LICENSE.md)
![GitHub Language Count](https://img.shields.io/github/languages/count/hugoalh-studio/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Top Langauge](https://img.shields.io/github/languages/top/hugoalh-studio/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Repo Size](https://img.shields.io/github/repo-size/hugoalh-studio/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/hugoalh-studio/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Watchers](https://img.shields.io/github/watchers/hugoalh-studio/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/hugoalh-studio/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/NodeJS.MoreArray?logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh-studio/nodejs.morearray)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh-studio/NodeJS.MoreArray.svg?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/NodeJS.MoreArray/alerts)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh-studio/NodeJS.MoreArray.svg?logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh-studio/NodeJS.MoreArray/context:javascript)

| **[Release](https://github.com/hugoalh-studio/NodeJS.MoreArray/releases)** ![](https://img.shields.io/github/downloads/hugoalh-studio/NodeJS.MoreArray/total?style=flat-square&color=000000&label=%20) | **[Issue](https://github.com/hugoalh-studio/NodeJS.MoreArray/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh-studio/NodeJS.MoreArray/pulls?q=is%3Apr)** |
|:----|:----|:----|
| **Latest:** ![](https://img.shields.io/github/release/hugoalh-studio/NodeJS.MoreArray?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh-studio/NodeJS.MoreArray?style=flat-square&color=000000&label=%20))<br />**Pre:** ![](https://img.shields.io/github/release/hugoalh-studio/NodeJS.MoreArray?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh-studio/NodeJS.MoreArray?style=flat-square&color=000000&label=%20))<br />[![NPM](https://img.shields.io/npm/v/@hugoalh/more-array?logo=npm&logoColor=ffffff&style=flat-square)](https://www.npmjs.com/package/@hugoalh/more-array) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh-studio/NodeJS.MoreArray?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh-studio/NodeJS.MoreArray?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/NodeJS.MoreArray?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh-studio/NodeJS.MoreArray?style=flat-square&color=000000&label=%20) |

## 📜 Description

A module/library to provide more ways to handle array.

[Click here to view the official documentation online.](https://github.com/hugoalh-studio/NodeJS.MoreArray/wiki)

## 📄 Documentation (Excerpt)

### Getting Started

NodeJS (v10+) & NPM (v6+):

```powershell
> npm install @hugoalh/more-array
```

### API

- `concatenate(...items)`
- `flatten(item, maximumDepth?)`
- `removeDuplicate(item)`
- `reverse(item)`
- `toObject(item)`

### Example

```javascript
const moreArray = require("@hugoalh/more-array");

let array1 = ["one", "two", "three"];
let array2 = ["one", "two", "three"];
console.log(array1);// ["one", "two", "three"]
console.log(Array.reverse(array1));// ["three", "two", "one"]
console.log(array1);// ["three", "two", "one"]
console.log(array2);// ["one", "two", "three"]
console.log(moreArray.reverse(array2));// ["three", "two", "one"]
console.log(array2);// ["one", "two", "three"]
let array3 = moreArray.concatenate(array1, array2);
console.log(array3);// ["three", "two", "one", "one", "two", "three"]
console.log(moreArray.removeDuplicate(array3));// ["three", "two", "one"]
```

# \[NodeJS\] More Array

[`hugoalh/NodeJS.MoreArray`](https://github.com/hugoalh/NodeJS.MoreArray)

[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)](https://github.com/hugoalh/NodeJS.MoreArray/graphs/contributors)
[![License](https://img.shields.io/github/license/hugoalh/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)](./LICENSE.md)
![GitHub Language Count](https://img.shields.io/github/languages/count/hugoalh/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Top Langauge](https://img.shields.io/github/languages/top/hugoalh/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Repo Size](https://img.shields.io/github/repo-size/hugoalh/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/hugoalh/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Watchers](https://img.shields.io/github/watchers/hugoalh/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/hugoalh/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/hugoalh/NodeJS.MoreArray?logo=github&logoColor=ffffff&style=flat-square)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh/NodeJS.MoreArray?logo=codefactor&logoColor=ffffff&style=flat-square)](https://www.codefactor.io/repository/github/hugoalh/nodejs.morearray)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/g/hugoalh/NodeJS.MoreArray.svg?label=%20&logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh/NodeJS.MoreArray/alerts)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/g/hugoalh/NodeJS.MoreArray.svg?logo=lgtm&logoColor=ffffff&style=flat-square)](https://lgtm.com/projects/g/hugoalh/NodeJS.MoreArray/context:javascript)

| **[Release](https://github.com/hugoalh/NodeJS.MoreArray/releases)** ![](https://img.shields.io/github/downloads/hugoalh/NodeJS.MoreArray/total?style=flat-square&color=000000&label=%20) | **[Issue](https://github.com/hugoalh/NodeJS.MoreArray/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh/NodeJS.MoreArray/pulls?q=is%3Apr)** |
|:----|:----|:----|
| **Latest:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.MoreArray?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20))<br />**Pre:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.MoreArray?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20))<br />[![NPM](https://img.shields.io/npm/v/@hugoalh/more-array?logo=npm&logoColor=ffffff&style=flat-square)](https://www.npmjs.com/package/@hugoalh/more-array) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20) |

## 📜 Description

A module/library to provide more ways to handle array.

[Click here to view the official documentation online.](https://github.com/hugoalh/NodeJS.MoreArray/wiki)

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

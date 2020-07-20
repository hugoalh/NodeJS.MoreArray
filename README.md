# \[NodeJS\] More Array

[`hugoalh/NodeJS.MoreArray`](https://github.com/hugoalh/NodeJS.MoreArray)

[![](https://img.shields.io/github/contributors/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github)](https://github.com/hugoalh/NodeJS.MoreArray/graphs/contributors)
[![](https://img.shields.io/github/license/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github)](https://github.com/hugoalh/NodeJS.MoreArray/blob/master/LICENSE.md)
![](https://img.shields.io/github/languages/count/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github)
![](https://img.shields.io/github/languages/top/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github)
![](https://img.shields.io/github/repo-size/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github)
![](https://img.shields.io/github/languages/code-size/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github)
![](https://img.shields.io/github/watchers/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github)
![](https://img.shields.io/github/stars/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github)
![](https://img.shields.io/github/forks/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github)
[![](https://www.codefactor.io/repository/github/hugoalh/nodejs.morearray/badge)](https://www.codefactor.io/repository/github/hugoalh/nodejs.morearray)
[![](https://img.shields.io/lgtm/alerts/g/hugoalh/NodeJS.MoreArray.svg?style=flat-square&logo=lgtm&label=%20)](https://lgtm.com/projects/g/hugoalh/NodeJS.MoreArray/alerts)
[![](https://img.shields.io/lgtm/grade/javascript/g/hugoalh/NodeJS.MoreArray.svg?style=flat-square&logo=lgtm)](https://lgtm.com/projects/g/hugoalh/NodeJS.MoreArray/context:javascript)

| **[Release](https://github.com/hugoalh/NodeJS.MoreArray/releases)** ![](https://img.shields.io/github/downloads/hugoalh/NodeJS.MoreArray/total?style=flat-square&color=000000&label=%20) | **[Issue](https://github.com/hugoalh/NodeJS.MoreArray/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh/NodeJS.MoreArray/pulls?q=is%3Apr)** |
|:----|:----|:----|
| **Latest:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.MoreArray?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20))<br />**Pre:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.MoreArray?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20))<br />[![](https://img.shields.io/npm/v/@hugoalh/more-array?style=flat-square&logo=npm)](https://www.npmjs.com/package/@hugoalh/more-array) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20) |

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
- `toJSON(item)`

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

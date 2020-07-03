# [NodeJS] More Array

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
[![](https://img.shields.io/lgtm/alerts/g/hugoalh/NodeJS.MoreArray.svg?style=flat-square&logo=lgtm&label=%20)](https://lgtm.com/projects/g/hugoalh/NodeJS.MoreArray/alerts)
[![](https://img.shields.io/lgtm/grade/javascript/g/hugoalh/NodeJS.MoreArray.svg?style=flat-square&logo=lgtm)](https://lgtm.com/projects/g/hugoalh/NodeJS.MoreArray/context:javascript)

| **[Release](https://github.com/hugoalh/NodeJS.MoreArray/releases)** ![](https://img.shields.io/github/downloads/hugoalh/NodeJS.MoreArray/total?style=flat-square&color=000000&label=%20) | **Outside Download**  | **[Issue](https://github.com/hugoalh/NodeJS.MoreArray/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh/NodeJS.MoreArray/pulls?q=is%3Apr)** |
|:----|:----|:----|:----|
| **Stable:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.MoreArray?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20))<br />**Latest:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.MoreArray?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20)) | [NPMJS](https://www.npmjs.com/package/@hugoalh/more-array) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20) |

## 📜 Description

A library to provide more ways to handle array.

## 💽 Installation

- NodeJS 8+
- NPMJS 6+
  ```powershell
  > npm install @hugoalh/more-array
  ```

## ✍ Guide

### API

|  | **Description** |
|:----|:----|
| `flat(item, maximumDepth?)` | ***maximumDepth {number.integer = Infinity}:*** How depth the array need to flatten; `0` (also is the range minimum) does not flat the array.<br /><br />Return result. |
| `merge(...items)` | **...items {array}:** Support infinity arrays.<br /><br />Return result. |
| `reverse(item)` | Have same function as `Array.reverse()`, but does not change the original array.<br /><br />Return result. |
| `removeDuplicate(item)` | Remove duplicated element(s) in that array, but does not change the original array.<br /><br />Return result. |

### Example

```javascript
const moreArray = require("@hugoalh/more-array");
const array1 = ["one", "two", "three"];
const array2 = ["one", "two", "three"];

console.log(moreArray.version);// 1.0.0

console.log(array1);// ["one", "two", "three"]
console.log(Array.reverse(array1));// ["three", "two", "one"]
console.log(array1);// ["three", "two", "one"]
console.log(array2);// ["one", "two", "three"]
console.log(moreArray.reverse(array2));// ["three", "two", "one"]
console.log(array2);// ["one", "two", "three"]
const array3 = moreArray.merge(array1, array2);
console.log(array3);// ["three", "two", "one", "one", "two", "three"]
console.log(moreArray.removeDuplicate(array3));// ["three", "two", "one"]
```

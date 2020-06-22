# <div align="center">[NodeJS] More Array</div>

<div align="center">
  <code>hugoalh/NodeJS.MoreArray</code><br />
  <img src="https://img.shields.io/github/languages/count/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/languages/top/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/repo-size/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/watchers/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/stars/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github" />
  <img src="https://img.shields.io/github/forks/hugoalh/NodeJS.MoreArray?style=flat-square&logo=github" />
  <a href="https://lgtm.com/projects/g/hugoalh/NodeJS.MoreArray/alerts/"><img src="https://img.shields.io/lgtm/alerts/g/hugoalh/NodeJS.MoreArray.svg?style=flat-square&logo=lgtm&label=%20" /></a>
  <a href="https://lgtm.com/projects/g/hugoalh/NodeJS.MoreArray/context:javascript"><img src="https://img.shields.io/lgtm/grade/javascript/g/hugoalh/NodeJS.MoreArray.svg?style=flat-square&logo=lgtm" /></a>
</div>

<table align="right">
  <tr>
    <td align="center">
      <b>Contributor</b><br />
      <img src="https://img.shields.io/github/contributors/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20" />
    </td>
    <td><a href="https://github.com/hugoalh">hugoalh</a></td>
  </tr>
  <tr>
    <td align="center"><b>License</b></td>
    <td><a href="./LICENSE.md">MIT</a></td>
  </tr>
  <tr>
    <td align="center"><b>Release</b></td>
    <td>
      <b>Stable: </b><img src="https://img.shields.io/github/release/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20" /> (<img src="https://img.shields.io/github/release-date/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20" />)<br />
      <b>Latest: </b><img src="https://img.shields.io/github/release/hugoalh/NodeJS.MoreArray?include_prereleases&style=flat-square&color=000000&label=%20" /> (<img src="https://img.shields.io/github/release-date-pre/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20" />)
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>Download</b><br />
      <img src="https://img.shields.io/github/downloads/hugoalh/NodeJS.MoreArray/total?style=flat-square&color=000000&label=%20" />
    </td>
    <td><ul>
      <li><a href="https://github.com/hugoalh/NodeJS.MoreArray/releases">GitHub</a></li>
      <li><a href="https://www.npmjs.com/package/@hugoalh/more-array">NPMJS</a></li>
    </td>
  </tr>
  <tr>
    <td align="center"><b>Issue</b></td>
    <td>
      <b>Open: </b><img src="https://img.shields.io/github/issues-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20" /><br />
      <b>Closed: </b><img src="https://img.shields.io/github/issues-closed-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20" />
    </td>
  </tr>
  <tr>
    <td align="center"><b>Pull Request</b></td>
    <td>
      <b>Open: </b><img src="https://img.shields.io/github/issues-pr-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20" /><br />
      <b>Closed: </b><img src="https://img.shields.io/github/issues-pr-closed-raw/hugoalh/NodeJS.MoreArray?style=flat-square&color=000000&label=%20" />
    </td>
  </tr>
</table>

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

|  | <div align="center"><b>Description</b></div> |
|:----|:----|
| `flat(item, maximumDepth)` | **maximumDepth {optional: number = Infinity}:** How depth the array need to flatten; `0` (also is the range minimum) does not flat the array.<br /><br />Return result. |
| `merge(...items)` | **...items {array}:** Support infinity arrays.<br /><br />Return result. |
| `outPlaceReverse(item)` | Have same function as `Array.reverse()`, but does not change the original array.<br /><br />Return result. |

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
console.log(moreArray.merge(array1, array2));// ["three", "two", "one", "one", "two", "three"]
```

## 🐛 Issue

Found any issue in this project? Submit the issue via [GitHub](https://github.com/hugoalh/NodeJS.MoreArray/issues).

/*==================
[NodeJS] More Array
	Language:
		NodeJS 14
==================*/
const concatenate = require("./concatenate.js");
const config = require("./config.js");
const flat = require("./flat.js");
const removeDuplicate = require("./removeduplicate.js");
module.exports.concat = concatenate;
module.exports.concatenate = concatenate;
module.exports.config.ignoreError = config.ignoreError;
module.exports.flat = flat;
module.exports.flatten = flat;
module.exports.merge = concatenate;
module.exports.removeDuplicate = removeDuplicate;
module.exports.reverse = require("./reverse.js");
module.exports.toJSON = require("./tojson.js");
module.exports.uniq = removeDuplicate;
module.exports.unique = removeDuplicate;
module.exports.v = config.version;
module.exports.version = config.version;

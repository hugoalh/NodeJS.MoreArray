/*==================
[NodeJS] More Array
	Language:
		NodeJS 14
==================*/
const concatenate = require("./concatenate.js");
const removeDuplicate = require("./removeduplicate.js");
const config = require("./config.js");
module.exports.concat = concatenate;
module.exports.concatenate = concatenate;
module.exports.flat = require("./flat.js");
module.exports.merge = concatenate;
module.exports.removeDuplicate = removeDuplicate;
module.exports.reverse = require("./reverse.js");
module.exports.uniq = removeDuplicate;
module.exports.unique = removeDuplicate;
module.exports.v = config.version;
module.exports.version = config.version;
module.exports.toJSON = require("./tojson.js");

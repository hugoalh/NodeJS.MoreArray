/*==================
[NodeJS] More Array
	Language:
		NodeJS 14
==================*/
/**
 * @const {string} version
 */
const version = "1.0.7";

const concatenate = require("./concatenate.js");
const configuration = require("./configuration.js");
const flatten = require("./flatten.js");
const removeDuplicate = require("./removeduplicate.js");
module.exports.cfg = configuration;
module.exports.concat = concatenate;
module.exports.concatenate = concatenate;
module.exports.config = configuration;
module.exports.configuration = configuration;
module.exports.flat = flatten;
module.exports.flatten = flatten;
module.exports.merge = concatenate;
module.exports.removeDuplicate = removeDuplicate;
module.exports.reverse = require("./reverse.js");
module.exports.toJSON = require("./tojson.js");
module.exports.uniq = removeDuplicate;
module.exports.unique = removeDuplicate;
module.exports.v = version;
module.exports.ver = version;
module.exports.version = version;

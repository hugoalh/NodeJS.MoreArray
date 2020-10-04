/*==================
[NodeJS] More Array
	Language:
		NodeJS/10.0.0
==================*/
/**
 * @const {string} version
 */
const version = "1.1.1";

const concatenate = require("./concatenate.js");
const flatten = require("./flatten.js");
const removeDuplicate = require("./removeduplicate.js");
const toObject = require("./toobject.js");
module.exports.concat = concatenate;
module.exports.concatenate = concatenate;
module.exports.flat = flatten;
module.exports.flatten = flatten;
module.exports.merge = concatenate;
module.exports.removeDuplicate = removeDuplicate;
module.exports.reverse = require("./reverse.js");
module.exports.toObj = toObject;
module.exports.toObject = toObject;
module.exports.uniq = removeDuplicate;
module.exports.unique = removeDuplicate;
module.exports.v = version;
module.exports.ver = version;
module.exports.version = version;
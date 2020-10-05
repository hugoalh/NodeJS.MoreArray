/*==================
[NodeJS] More Array
	Language:
		NodeJS/10.0.0
==================*/
/**
 * @const {string} version
 */
const version = "1.1.1";

const concatenate = require("./concatenate.js"),
	flatten = require("./flatten.js"),
	removeDuplicate = require("./removeduplicate.js"),
	toObject = require("./toobject.js");
module.exports = {
	concat: concatenate,
	concatenate: concatenate,
	flat: flatten,
	flatten: flatten,
	merge: concatenate,
	removeDuplicate: removeDuplicate,
	reverse: require("./reverse.js"),
	toObj: toObject,
	toObject: toObject,
	uniq: removeDuplicate,
	unique: removeDuplicate,
	v: version,
	ver: version,
	version: version
};

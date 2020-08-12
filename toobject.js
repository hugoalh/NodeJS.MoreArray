/*==================
[NodeJS] More Array - To Object
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
/**
 * @private
 * @function toObjectInternal
 * @param {*[]} item
 * @returns {object}
 */
function toObjectInternal(item) {
	let result = {};
	item.forEach((value, index) => {
		if (advancedDetermine.isArray(value) == true) {
			result[index] = toObjectInternal(value);
		} else {
			result[index] = value;
		};
	});
	return result;
};
/**
 * @function toObject
 * @description Convert an array to an object.
 * @param {*[]} item Array that need to convert to object.
 * @returns {object} An object with number-index key.
 */
function toObject(item) {
	if (advancedDetermine.isArray(item) == false) {
		return internalService.prefabTypeError("item", "array");
	};
	return toObjectInternal(item);
};
module.exports = toObject;

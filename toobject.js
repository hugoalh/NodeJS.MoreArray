/*==================
[NodeJS] More Array - To Object
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
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
		return internalService.typeError(`Invalid type of "item"! Require type of array.`);
	};
	return toObjectInternal(item);
};
module.exports = toObject;

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
 * @param {number} maximumDepth
 * @param {number} [currentDepth=0]
 * @returns {object}
 */
function toObjectInternal(item, maximumDepth, currentDepth = 0) {
	if (currentDepth >= maximumDepth) {
		return item;
	}
	let result = {};
	item.forEach((value, index) => {
		if (advancedDetermine.isArray(value) == true) {
			result[index] = toObjectInternal(value, maximumDepth, currentDepth + 1);
		} else {
			result[index] = value;
		}
	});
	return result;
}
/**
 * @function toObject
 * @description Convert an array to an object.
 * @param {*[]} item Array that need to convert to object.
 * @param {number} [maximumDepth=Infinity] The maximum depth level specifying how deep a nested array structure should be convert.
 * @returns {object} An object with number-index key.
 */
function toObject(item, maximumDepth = Infinity) {
	if (advancedDetermine.isArray(item) == false) {
		return internalService.prefabTypeError("item", "array");
	}
	if (maximumDepth !== Infinity && advancedDetermine.isNumberPositiveInteger(maximumDepth) == false) {
		return internalService.prefabTypeError("maximumDepth", "positive integer number");
	}
	return toObjectInternal(item, maximumDepth);
}
module.exports = toObject;

/*==================
[NodeJS] More Array - Flat
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
function flatInternal(item, maximumDepth, currentDepth = 0) {
	if (currentDepth >= maximumDepth) {
		return item;
	};
	let result = [];
	for (let index = 0; index < item.length; index++) {
		if (advancedDetermine.isArray(item[index]) == true) {
			result.push(
				...flatInternal(item[index], maximumDepth, currentDepth + 1)
			);
		} else {
			result.push(item[index]);
		};
	};
	return result;
};
/**
 * @function flat
 * @alias flatten
 * @description Cause all sub-array elements concatenated into it recursively up to the specified depth.
 * @param {array} item Array that need to flaten.
 * @param {number} [maximumDepth = Infinity] The maximum depth level specifying how deep a nested array structure should be flatten.
 * @returns {array} A flattened array.
 */
function flat(item, maximumDepth = Infinity) {
	const itemIsArray = advancedDetermine.isArray(item);
	if (itemIsArray == false) {
		return internalService.customTypeError(`Invalid type of "item"! Require type of array.`);
	};
	if (itemIsArray == null) {
		return item;
	};
	if (maximumDepth !== Infinity && advancedDetermine.isNumberPositiveInteger(maximumDepth) == false) {
		return internalService.customTypeError(`Invalid type of "maximumDepth"! Require type of positive integer number.`);
	};
	return flatInternal(item, maximumDepth);
};
module.exports = flat;

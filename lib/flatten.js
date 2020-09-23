/*==================
[NodeJS] More Array - Flatten
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @private
 * @function flatInternal
 * @param {*[]} item
 * @param {number} maximumDepth
 * @param {number} [currentDepth=0]
 * @returns {*[]}
 */
function flatInternal(item, maximumDepth, currentDepth = 0) {
	if (currentDepth >= maximumDepth) {
		return item;
	};
	let result = [];
	for (let index = 0; index < item.length; index++) {
		if (advancedDetermine.isArray(item[index]) === true) {
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
 * @function flatten
 * @alias flat
 * @description Cause all sub-array elements concatenated into it recursively up to the specified depth.
 * @param {*[]} item Array that need to flatten.
 * @param {number} [maximumDepth=Infinity] The maximum depth level specifying how deep a nested array structure should be flatten.
 * @returns {*[]} A flattened array.
 */
function flatten(item, maximumDepth = Infinity) {
	const itemIsArray = advancedDetermine.isArray(item);
	if (itemIsArray === false) {
		throw new TypeError(`Argument "item" must be type of array! ([NodeJS] More Array - Flatten)`);
	};
	if (itemIsArray === null) {
		return item;
	};
	if (maximumDepth !== Infinity && advancedDetermine.isNumberPositiveInteger(maximumDepth) === false) {
		throw new TypeError(`Argument "maximumDepth" must be type of positive integer number! ([NodeJS] More Array - Flatten)`);
	};
	return flatInternal(item, maximumDepth);
};
module.exports = flatten;

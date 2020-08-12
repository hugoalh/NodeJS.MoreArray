/*==================
[NodeJS] More Array - Remove Duplicate
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
/**
 * @function removeDuplicate
 * @alias uniq
 * @alias unique
 * @description Remove all of the duplicated elements in the array.
 * @param {*[]} item Array that need to remove duplicated elements.
 * @returns {*[]} An array with unique elements.
 */
function removeDuplicate(item) {
	if (advancedDetermine.isArray(item) == false) {
		return internalService.prefabTypeError("item", "array");
	};
	if (item.length <= 1) {
		return item;
	};
	let queue = item;
	let result = [];
	while (queue.length > 0) {
		const element = queue.shift();
		if (result.includes(element) == false) {
			result.push(element);
		};
	};
	return result;
};
module.exports = removeDuplicate;

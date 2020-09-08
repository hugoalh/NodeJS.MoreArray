/*==================
[NodeJS] More Array - Reverse
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
/**
 * @function reverse
 * @description Reverse an array out place.
 * @param {*[]} item Array that need to reverse.
 * @returns {*[]} A reversed array.
 */
function reverse(item) {
	if (advancedDetermine.isArray(item) == false) {
		return internalService.prefabTypeError("item", "array");
	}
	if (item.length <= 1) {
		return item;
	}
	let resultObject = {};
	Promise.allSettled(
		item.map((element, index) => {
			new Promise(() => {
				resultObject[(item.length - 1) - index] = element;
			}).catch();
		})
	);
	return Object.values(resultObject);
}
module.exports = reverse;

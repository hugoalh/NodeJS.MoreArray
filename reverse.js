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
		return internalService.typeError(`Invalid type of "item"! Require type of array.`);
	};
	if (item.length <= 1) {
		return item;
	};
	let resultJSON = {};
	Promise.allSettled(
		item.map((element, index) => {
			new Promise(() => {
				resultJSON[(item.length - 1) - index] = element;
			}).catch();
		})
	);
	return Object.values(resultJSON);
};
module.exports = reverse;

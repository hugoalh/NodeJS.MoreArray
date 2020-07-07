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
 * @param {array} item Array that need to reverse.
 * @returns {array} A reversed array.
 */
function reverse(item) {
	if (advancedDetermine.isArray(item) == false) {
		return internalService.customTypeError(`Invalid type of "item"! Require type of array.`);
	};
	if (item.length <= 1) {
		return item;
	};
	let resultJSON = {};
	Promise.allSettled(
		item.map((element, index) => {
			new Promise((resolve, reject) => {
				resultJSON[(item.length - 1) - index] = element;
			}).catch((error) => { });
		})
	);
	const resultArray = Object.values(resultJSON);
	return resultArray;
};
module.exports = reverse;

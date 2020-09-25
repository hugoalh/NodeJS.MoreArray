/*==================
[NodeJS] More Array - Reverse
	Language:
		NodeJS/10.0.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function reverse
 * @description Reverse an array out place.
 * @param {*[]} item Array that need to reverse.
 * @returns {*[]} A reversed array.
 */
function reverse(item) {
	if (advancedDetermine.isArray(item) === false) {
		throw new TypeError(`Argument "item" must be type of array! ([NodeJS] More Array - Reverse)`);
	};
	if (item.length <= 1) {
		return item;
	};
	if (Promise.allSettled) {
		let resultObject = {};
		Promise.allSettled(
			item.map((element, index) => {
				new Promise(() => {
					resultObject[(item.length - 1) - index] = element;
				}).catch();
			})
		);
		return Object.values(resultObject);
	};
	let resultArray = [];
	for (let index = item.length - 1; index >= 0; index--) {
		resultArray.push(item[index]);
	};
	return resultArray;
};
module.exports = reverse;

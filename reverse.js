/*==================
[NodeJS] More Array - Reverse
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const config = require("./config.js");
/**
 * @function
 * @param {array} item
 * @returns {array}
 */
function reverse(item) {
	if (advancedDetermine.isArray(item) == false) {
		if (config.ignoreError() == true) {
			return undefined;
		};
		throw new TypeError(`Invalid type of "item"! Require type of array.`);
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

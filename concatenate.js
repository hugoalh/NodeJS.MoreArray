/*==================
[NodeJS] More Array - Concatenate
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function
 * @param {...array} items
 * @returns {array}
 */
function concatenate(...items) {
	if (items.length == 0) {
		throw new Error(`No input!`);
	};
	items.forEach((item, index) => {
		if (advancedDetermine.isArray(item) == false) {
			throw new TypeError(`Invalid type of "item[${index}]"! Require type of array.`);
		};
	});
	if (items.length == 1) {
		return items[0];
	};
	let pool = [];
	const result = pool.concat(...items);
	return result;
};
module.exports = concatenate;

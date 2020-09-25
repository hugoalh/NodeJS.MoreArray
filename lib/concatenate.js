/*==================
[NodeJS] More Array - Concatenate
	Language:
		NodeJS/10.0.0
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function concatenate
 * @alias concat
 * @alias merge
 * @description Concatenate 2 or more arrays into one array.
 * @param {...*[]} items Arrays that need to concatenate into one array.
 * @returns {*[]} A concatenated array.
 */
function concatenate(...items) {
	if (items.length === 0) {
		throw new Error(`No input at argument "items"! ([NodeJS] More Array - Concatenate)`);
	};
	items.forEach((item, index) => {
		if (advancedDetermine.isArray(item) === false) {
			throw new TypeError(`Argument "item[${index}]" must be type of array! ([NodeJS] More Array - Concatenate)`);
		};
	});
	if (items.length === 1) {
		return items[0];
	};
	let pool = [];
	return pool.concat(...items);
};
module.exports = concatenate;

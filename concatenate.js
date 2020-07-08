/*==================
[NodeJS] More Array - Concatenate
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
/**
 * @function concatenate
 * @alias concat
 * @alias merge
 * @description Concatenate 2 or more arrays into one array.
 * @param {...array} items Arrays that need to concatenate into one array.
 * @returns {array} A concatenated array.
 */
function concatenate(...items) {
	if (items.length == 0) {
		return internalService.customError(`No input!`);
	};
	items.forEach((item, index) => {
		if (advancedDetermine.isArray(item) == false) {
			return internalService.customTypeError(`Invalid type of "item[${index}]"! Require type of array.`);
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

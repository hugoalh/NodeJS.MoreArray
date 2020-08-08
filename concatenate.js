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
 * @param {...*[]} items Arrays that need to concatenate into one array.
 * @returns {*[]} A concatenated array.
 */
function concatenate(...items) {
	if (items.length == 0) {
		return internalService.generalError(`No input!`);
	};
	items.forEach((item, index) => {
		if (advancedDetermine.isArray(item) == false) {
			return internalService.typeError(`Invalid type of "item[${index}]"! Require type of array.`);
		};
	});
	if (items.length == 1) {
		return items[0];
	};
	let pool = [];
	return pool.concat(...items);
};
module.exports = concatenate;

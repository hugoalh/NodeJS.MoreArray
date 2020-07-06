/*==================
[NodeJS] More Array - To JSON
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
/**
 * @function
 * @param {array} item
 * @returns {object}
 */
function toJSON(item) {
	if (advancedDetermine.isArray(item) == false) {
		throw new TypeError(`Invalid type of "item"! Require type of array.`);
	};
	let result = {};
	item.forEach((value, index) => {
		result[index] = value;
	});
	return result;
};
module.exports = toJSON;

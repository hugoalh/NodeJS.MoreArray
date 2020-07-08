/*==================
[NodeJS] More Array - To JSON
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
const internalService = require("./internalservice.js");
function toJSONInternal(item) {
	let result = {};
	item.forEach((value, index) => {
		if (advancedDetermine.isArray(value) == true) {
			result[index] = toJSONInternal(value);
		} else {
			result[index] = value;
		};
	});
	return result;
};
/**
 * @function toJSON
 * @description Convert an array to JSON.
 * @param {array} item Array that need to convert to JSON.
 * @returns {object} A JSON with number-index key.
 */
function toJSON(item) {
	if (advancedDetermine.isArray(item) == false) {
		return internalService.customTypeError(`Invalid type of "item"! Require type of array.`);
	};
	return toJSONInternal(item);
};
module.exports = toJSON;

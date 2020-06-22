/*==================
[NodeJS] More Array - Flat
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
const determine = require("@hugoalh/advanced-determine");
function flatInternal(item, maximumDepth, currentDepth = 0) {
	if (currentDepth < maximumDepth) {
		let result = [];
		for (let index = 0; index < item.length; index++) {
			if (determine.isArray(item[index]) == true) {
				result.push(
					...flatInternal(item[index], maximumDepth, currentDepth + 1)
				);
			} else {
				result.push(item[index]);
			};
		};
		return result;
	};
	return item;
};
function flat(item, maximumDepth = Infinity) {
	if (determine.isArray(item) == false) {
		throw new TypeError(`Invalid type of "item"! Require type of array.`);
	};
	if (determine.isNumber(maximumDepth) == false) {
		throw new TypeError(`Invalid type of "maximumDepth"! Require type of number.`);
	};
	if (maximumDepth < 0) {
		throw new RangeError(`Invalid range of "maximumDepth"! Require >= 0.`);
	};
	return flatInternal(item, maximumDepth);
};
module.exports = flat;

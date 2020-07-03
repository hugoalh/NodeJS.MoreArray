/*==================
[NodeJS] More Array - Flat
	Language:
		NodeJS 14
==================*/
const advancedDetermine = require("@hugoalh/advanced-determine");
function flatInternal(item, maximumDepth, currentDepth = 0) {
	if (currentDepth >= maximumDepth) {
		return item;
	};
	let result = [];
	for (let index = 0; index < item.length; index++) {
		if (advancedDetermine.isArray(item[index]) == true) {
			result.push(
				...flatInternal(item[index], maximumDepth, currentDepth + 1)
			);
		} else {
			result.push(item[index]);
		};
	};
	return result;
};
function flat(item, maximumDepth = Infinity) {
	const itemIsArray = advancedDetermine.isArray(item);
	if (itemIsArray == false) {
		throw new TypeError(`Invalid type of "item"! Require type of array.`);
	};
	if (itemIsArray == null) {
		return item;
	};
	if (maximumDepth != Infinity || advancedDetermine.isNumberPositiveInteger(maximumDepth)) {
		throw new Error(`Invalid type/range of "maximumDepth"! Require type of positive number integer.`);
	};
	return flatInternal(item, maximumDepth);
};
module.exports = flat;

/*==================
[NodeJS] More Array - Remove Duplicate
	Language:
		NodeJS 14
==================*/
const determine = require("@hugoalh/advanced-determine");
function removeDuplicate(item) {
	if (determine.isArray(item) == false) {
		throw new TypeError(`Invalid type of "item"! Require type of array.`);
	};
	if (item.length <= 1) {
		return item;
	};
	let queue = item;
	let result = [];
	while (queue.length > 0) {
		const element = queue.shift();
		if (result.includes(element) == false) {
			result.push(element);
		};
	};
	return result;
};
module.exports = removeDuplicate;

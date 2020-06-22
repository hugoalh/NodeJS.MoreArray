/*==================
[NodeJS] More Array - Merge
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
const determine = require("@hugoalh/advanced-determine");
function merge(...items) {
	if (items.length == 0) {
		throw new Error(`No input!`);
	};
	items.forEach((item, index) => {
		if (determine.isArray(item) == false) {
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
module.exports = merge;

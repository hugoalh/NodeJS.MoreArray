/*==================
[NodeJS] More Array - Out Place Reverse
	Contributor:
		hugoalh
	Language:
		NodeJS 14
==================*/
const determine = require("@hugoalh/advanced-determine");
function outPlaceReverseSmallData(item) {
	let result = [];
	item.forEach((element, index) => {
		result[(item.length - 1) - index] = element;
	});
	return result;
};
function outPlaceReverseBigData(item) {
	let resultJSON = {};
	Promise.allSettled(
		item.map((element, index) => {
			new Promise((resolve, reject) => {
				resultJSON[(item.length - 1) - index] = element;
			}).catch((error) => { });
		})
	);
	const resultArray = Object.values(resultJSON);
	return resultArray;
};
function outPlaceReverse(item) {
	if (determine.isArray(item) == false) {
		throw new TypeError(`Invalid type of "item"! Require type of array.`);
	};
	if (item.length <= 1) {
		return item;
	};
	if (item.length <= 16) {
		return outPlaceReverseSmallData(item);
	};
	return outPlaceReverseBigData(item);
};
module.exports = outPlaceReverse;

/*==================
[NodeJS] More Array - Config
	Language:
		NodeJS 14
==================*/
/**
 * @constant {string}
 */
const version = "1.0.5";
/**
 * @type {boolean}
 */
let ignoreErrorValue = false;
/**
 * @function
 * @param {boolean} [mode]
 * @returns {(boolean|undefined)}
 */
function ignoreError(mode) {
	if (typeof mode == "boolean") {
		ignoreErrorValue = mode;
		return undefined;
	};
	return ignoreErrorValue;
}
module.exports.version = version;
module.exports.ignoreError = ignoreError;

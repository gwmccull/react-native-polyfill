// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger#Polyfill
module.exports = Number.isSafeInteger || function (value) {
	return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
module.exports = Number.isInteger || function(value) {
	return typeof value === 'number' &&
		isFinite(value) &&
		Math.floor(value) === value;
};

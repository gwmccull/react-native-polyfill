// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
module.exports = Number.isNaN = Number.isNaN || function(value) {
	return typeof value === 'number' && isNaN(value);
};

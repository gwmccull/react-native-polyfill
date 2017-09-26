// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
module.exports = Number.isNaN || function(value) {
	return value !== value; // The following works because NaN is the only value in javascript which is not equal to itself.
};

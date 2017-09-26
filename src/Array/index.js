if (!Array.prototype.includes) {
	Object.defineProperty(Array.prototype, 'includes', {
		value: require('./includes'),
	});
}

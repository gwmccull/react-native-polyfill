if (!String.prototype.codePointAt) {
	Object.defineProperty(String.prototype, 'codePointAt', {
		value: require('./codePointAt'),
		configurable: true,
		writable: true
	});
}

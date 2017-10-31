if (!String.prototype.codePointAt) {
	Object.defineProperty(String.prototype, 'codePointAt', {
		value: require('./codePointAt'),
		configurable: true,
		writable: true
	});
}
if (!String.prototype.normalize) {
	// the unorm library automatically polyfills the normalize function
	require('unorm');
}
if (!String.fromCodePoint) {
	Object.defineProperty(String, 'fromCodePoint', {
		value: require('./fromCodePoint'),
		configurable: true,
		writable: true
	});
}

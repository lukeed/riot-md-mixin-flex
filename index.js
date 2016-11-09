function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
	init: function () {
		var self = this;

		self.on('mount', function () {
			var el = self.root.firstElementChild;
			['flex', 'dflex', 'flexrow', 'acenter', 'jcenter'].forEach(function (attr) {
				(capitalize(attr) in self.opts) && el.setAttribute(attr, self.opts[attr] || '');
			});
		});
	}
};

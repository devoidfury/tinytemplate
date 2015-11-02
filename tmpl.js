String.prototype.tmpl = function(d) {
	return this.replace(/\$\$([^$]+)\$\$/g,
		Function('d', 'return function(_,s){with(d) return eval(s)}')(d||{}))
};

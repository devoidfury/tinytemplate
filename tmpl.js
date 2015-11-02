String.prototype.tmpl = function(d) {
        return this.replace(
                /\$\$\s*([^$]+)\s*\$\$/g,
                (new Function('d', 'return function(_,s){with(d) return eval(s)}'))(d||{}))
};

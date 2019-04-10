
(function () {

  // Strings --------------
  String.prototype.lJust = function( l, c ) {
    let j = l-this.length
    if (j > 0) {
      return this + c.repeat(j);
    } else {
      return this
    }
  };
  String.prototype.rJust = function( l, c ) {
    let j = l-this.length
    if (j > 0) {
      return c.repeat(j) + this;
    } else {
      return this
    }
  };

  // Objects --------------
  Object.prototype.forEach = function (callback) {
    Object.keys(this).forEach (k => {
      callback(k,this[k]);
    })
  };
})();

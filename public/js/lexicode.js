//! template from moment.js

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : global.lexicode = factory()
}(this, (function () {
  String.prototype.rJust = function( l, c ) {
    let j = l-this.length
    if (j > 0) {
      return c.repeat(j) + this
    } else {
      return this
    }
  }

  class UnicodeChar {
    constructor (hex) {
      this.codeInt = hex
      this.codeStr = hex.toString(16).rJust(4,"0")
    }

    getPlane () {
      return Math.floor(this.code / 0xFFFF).toString(16)
    }

    getHtml () {
      return "&#x" + this.codeStr
    }

    getEscaped () {
      return String.fromCodePoint(this.codeInt)
    }
  }

  return {
    UnicodeChar
  }
})))

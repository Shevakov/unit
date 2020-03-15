const unitReg = /(\d*\.?\d+)\s?(cap|ch|ic|lh|rem|rlh|vh|vw|vi|vb|vmin|vmax|Q|px|em|ex|%|in|cm|mm|pt|pc|mozmm+)?/i;

class LengthValue {
  constructor() {
    this.unit = '';
    this.length = '';
  };

  $onInit() {
    const self = this;

    this.model.$render = () => {
      this.parseValue(self.model.$viewValue)
    };
  }

  setNgModel() {
    this.model.$setViewValue(this.parseValue(this.length));
  };

  parseValue(value) {
    let [ , length, unit] = value.match(unitReg) || [];
    if (this.unit === 'auto') {
      value = 'auto';
    }
    if (value.match(/^(0|auto)$/)) {
      this.unit = '';
      this.length = value;
      return `${value}`;
    }
    if (unit) {
      this.unit = unit;
      this.length = length;
      return `${length}${unit}`;
    }
    if (length && this.unit) {
      this.unit = this.unit;
      this.length = length;
      return `${length}${this.unit}`;
    }
  };

}

angular.module('app').component('lengthValue', {
  templateUrl: 'components/lengthValue.template.html',
  controller: LengthValue,
  require: {
    model: 'ngModel',
  },
  bindings: {
    menuItems: '<',
  }
});
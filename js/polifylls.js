'use strict';

if (!('hidden' in HTMLElement.prototype)) {
  Object.defineProperty(HTMLElement.prototype, 'hidden', {
    get: function() {
      return this.hasAttribute('hidden');
    },
    set: function(value) {
      if (value) this.setAttribute('hidden', '');
      else this.removeAttribute('hidden');
      return value;
    }
  });
}


(function() {

  var btn = document.querySelector('button');
  var box = document.querySelector('div');

  btn.addEventListener('click', function() {
    box.hidden = !box.hidden;
  });

}());

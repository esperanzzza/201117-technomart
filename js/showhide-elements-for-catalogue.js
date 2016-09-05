'use strict';

(function() {
  var popUpElement = new ShowHideElement({
    elForClick: [
      document.querySelector('.make-order')
    ],
    elForShow: [
      document.querySelector('.modal-content-order')
    ],

    overlay: document.querySelector('.modal-overlay')
  })
}());

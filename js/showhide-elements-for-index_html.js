'use strict';

(function() {
  var popUpsElement = new ShowHideElement({
    elForClick: [document.querySelector('.make-order'),
      document.querySelector('.open-map'),
      document.querySelector('.btn-contact-us')
    ],
    elForShow: [
      document.querySelector('.modal-content-contact'),
      document.querySelector('.modal-content-order'),
      document.querySelector('.modal-content-map')
    ],
    overlay: document.querySelector('.modal-overlay')


  });

  var showHideTabs = new ShowHideTabs({
    elForClick: [
      document.querySelector('.tab-control-one'),
      document.querySelector('.tab-control-two'),
      document.querySelector('.tab-control-three')
    ],
    elForShow: [
      document.querySelector('.services-slider-one'),
      document.querySelector('.services-slider-two'),
      document.querySelector('.services-slider-three')
    ]
  });
  var showHidePromo = new ShowHidePromo({
    elForClick: document.querySelectorAll('.slider-controls i, .icon-left, .icon-right'),
    elForShow: [
      document.querySelector('.slider-one'),
      document.querySelector('.slider-two')
    ],
    classActiveCont: 'active-control',
    arrForPromo: [
      document.querySelector('.control-one'),
      document.querySelector('.control-two')
    ]
  });
}());


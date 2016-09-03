'use strict';
/* создание компонента для обработки всплывающих попапов
 Экземпляр компонента принимает 3 параметра
 1. массив элементов, которые вызывают попапы по клику
 2. массив элементов, которые впоследствии будут появлятся по клику на элементах, то есть сами попапы n
 3. элемент оверлея, который будет нижнем слоем под вызванным попапом.
 Экземпляр не будет привязан к конкретным классам, вы можете передать произвольное количество классов для обработки любого попапа,
 главное, чтобы было совпадение хотя бы по одному слову в классе между элементом, по клику которого вызывается попап и классом самого попапа
*/

function PopUpElement(options) {
  this.elForClick = options.elForClick;
  this.elForShow = options.elForShow;
  this.overlay = options.overlay;
  this.numForHide = null;
  this._initEvent();
}

PopUpElement.prototype._initEvent = function() {
  this.elForClick.forEach(function(item) {
    item.addEventListener('click', this._handler.bind(this));
  }.bind(this));
  document.addEventListener('click', this._closePopUp.bind(this))
}

PopUpElement.prototype._handler = function(event) {
  event.preventDefault();
  var arr = event.target.className.split('-');
  outer: for (var i = 0; i < arr.length; i++) {
    var num;
    for (var numberOfclass = 0; numberOfclass < this.elForShow.length; numberOfclass++) {
      num = this.elForShow[numberOfclass].className.split('-').indexOf(arr[i]);
      if (~num) {
        this.numForHide = numberOfclass;
        this.overlay.hidden = false;
        this.elForShow[numberOfclass].style.visibility = 'visible';
        break outer;
      }
    }
  }
}

PopUpElement.prototype._closePopUp = function(e) {
  if (e.target.className === 'modal-overlay' || e.target.className === 'modal-content-close') {
    this.elForShow[this.numForHide].style.visibility = 'hidden';
    this.overlay.hidden = true;
  }
}

var popUpElement = new PopUpElement({
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

/* var link = document.querySelector('.js-make-order');
var show = document.querySelector('.modal-content-basket');
var close = show.querySelector('.modal-content-close');
link.addEventListener('click', function(event) {
  event.preventDefault();
  show.classList.add('modal-content-show');
});
close.addEventListener('click', function(event) {
  event.preventDefault();
  show.classList.remove('modal-content-show');
});
window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (show.classList.contains('modal-content-show')) {
      show.classList.remove('modal-content-show');
    }
  }
});
*/

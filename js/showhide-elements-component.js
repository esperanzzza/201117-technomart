'use strict';
/* создание компонента для обработки уведомлений с функцией показать/скрыть
 Экземпляр компонента принимает 3 параметра
 1. массив элементов, которые вызывают попапы по клику
 2. массив элементов, которые впоследствии будут появлятся по клику на элементах, то есть сами попапы n
 3. элемент оверлея, который будет нижнем слоем под вызванным попапом.
 Экземпляр не будет привязан к конкретным классам, вы можете передать произвольное количество классов для обработки любого попапа,
 главное, чтобы было совпадение хотя бы по одному слову в классе между элементом, по клику которого вызывается попап и классом самого попапа
 Для скрытия элементов используется атрибут hidden, для поддержки его в IE10- добавлен полифилл.
*/

function ShowHideElement(options) {
  this.elForClick = options.elForClick;
  this.elForShow = options.elForShow;
  this.overlay = options.overlay;
  this.numForHide = null;
  this._initEvent();
}

ShowHideElement.prototype._initEvent = function() {
  this.elForClick.forEach(function(item) {
    item.addEventListener('click', this._handler.bind(this));
  }.bind(this));
  document.addEventListener('click', this._closeElement.bind(this))
};

ShowHideElement.prototype._handler = function(e) {
  e.preventDefault();
  var arr = e.target.className.split('-');
  var num;
  outer: for (var i = 0; i < arr.length; i++) {
    for (var numberOfclass = 0; numberOfclass < this.elForShow.length; numberOfclass++) {
      num = this.elForShow[numberOfclass].className.split('-').indexOf(arr[i]);
      if (~num) {
        this.numForHide = numberOfclass;
        this.overlay ? this.overlay.hidden = false : null;
        this.elForShow[numberOfclass].hidden = false;
        break outer;
      }
    }
  }
};

ShowHideElement.prototype._closeElement = function(e) {
  if (e.target.className === 'modal-overlay' || e.target.className === 'modal-content-close') {
    this.elForShow[this.numForHide].hidden = true;
    this.overlay ? this.overlay.hidden = true : null;
  }
};

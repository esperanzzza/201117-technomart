'use strict';

function ShowHidePromo() {
  this.classActiveCont = arguments[0].classActiveCont;
  this.arrForArrow = arguments[0].arrForArrow;
  ShowHideElement.apply(this, arguments);
}

ShowHidePromo.prototype = Object.create(ShowHideElement.prototype);

ShowHidePromo.prototype._initEvent = function () {
  this.elForClick.forEach(function(item) {
    item.addEventListener('click', this._handlerForControls.bind(this));
  }.bind(this));
  this.arrForArrow.forEach(function(item) {
    item.addEventListener('click', this._handlerForArrow.bind(this));
  }.bind(this));
};



ShowHidePromo.prototype._handlerForControls = function (e) {
  if (!e.target.classList.contains(this.classActiveCont)) {
    var arr = e.target.className.split('-');
    for (var i = 0; i < this.elForClick.length; i++) {
      this.elForClick[i].classList.remove(this.classActiveCont);
    }
    e.target.classList.add(this.classActiveCont);
    this.elForShow.forEach(function (item) {
      for (var y = 0; y < arr.length; y++) {
        if (~item.className.split('-').indexOf(arr[y])) {
          item.hidden = false;
        } else {
          item.hidden = true;
        }
      }
    }.bind(this))
  }
};

ShowHidePromo.prototype._handlerForArrow = function (e) {
  var num;
  for (var i1 = 0; i1 < this.elForClick.length; i1++) {
    if (this.elForClick[i1].classList.contains(this.classActiveCont)) {
      num = i1;
    }
    this.elForClick[i1].classList.remove(this.classActiveCont);
  }
  this.elForShow[num].hidden = true;
  if (e.target.classList.contains('icon-right')) {
    if (num !== this.elForShow.length - 1) {
    this.elForShow[num + 1].hidden = false;
    this.elForClick[num + 1].classList.add(this.classActiveCont);
  } else {
    this.elForShow[0].hidden = false;
    this.elForClick[0].classList.add(this.classActiveCont);
  }
  } else if(e.target.classList.contains('icon-left')) {
    if (num !== 0) {
      this.elForShow[num - 1].hidden = false;
      this.elForClick[num - 1].classList.add(this.classActiveCont);
    } else {
      this.elForShow[this.elForShow.length - 1].hidden = false;
      this.elForClick[this.elForClick.length - 1].classList.add(this.classActiveCont);
    }
  }
};


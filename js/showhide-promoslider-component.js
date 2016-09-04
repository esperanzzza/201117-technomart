'use strict';

function ShowHidePromo() {
  ShowHideElement.apply(this, arguments);
  this.classActiveCont = arguments[0].classActiveCont;
  this.arrForPromo = arguments[0].arrForPromo;
}

ShowHidePromo.prototype = Object.create(ShowHideElement.prototype);

ShowHidePromo.prototype._initEvent = function () {
  this.elForClick = Array.prototype.slice.call(this.elForClick);
  this.elForClick.forEach(function(item) {
    item.addEventListener('click', this._handler.bind(this));
  }.bind(this));
};



ShowHidePromo.prototype._handler = function (e) {
  if (!e.target.classList.contains(this.classActiveCont) &&
      e.target.parentNode.classList.contains('slider-controls')) {
    var arr = e.target.className.split('-');
    for (var i = 0; i < this.elForClick.length; i++) {
      this.elForClick[i].classList.remove(this.classActiveCont);
    }
    e.target.classList.add(this.classActiveCont);
   //console.log(arr);
    this.elForShow.forEach(function (item) {
      for (var y = 0; y < arr.length; y++) {
        if (~item.className.split('-').indexOf(arr[y])) {
          item.hidden = false;
        } else {
          item.hidden = true;
        }
      }
    }.bind(this))
  } else {
    if (e.target.classList.contains('icon-left')) {
      var trigger = true;
      //this.arrForPromo[0].classList.remove(this.classActiveCont);
      this.arrForPromo.forEach(function(item, i, arr) {
        if (item.classList.contains(this.classActiveCont && trigger)) {
          trigger = false;
          console.log(item, arr);
          item.classList.remove(this.classActiveCont);
          if (i === 0) {
            arr[i + 1].classList.add(this.classActiveCont);
          }
        }
      }.bind(this))
    } else if (e.target.classList.contains('icon-right')) {
      for (var k = 0; k < this.arrForPromo.length; k++) {
        if (this.arrForPromo[k].classList.contains(this.classActiveCont)) {
          this.arrForPromo[k].classList.remove(this.classActiveCont);
          if (!k) {
            this.arrForPromo[k + 1].classList.add(this.classActiveCont);
          } else {
            this.arrForPromo[k - 1].classList.add(this.classActiveCont);
          }
        }
      }
    }
  }
};




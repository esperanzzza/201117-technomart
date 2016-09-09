'use strict';

function ShowHideTabs() {
  ShowHideElement.apply(this, arguments);
}

ShowHideTabs.prototype = Object.create(ShowHideElement.prototype);

ShowHideTabs.prototype._closeElement = function (e) {
  if (~this.elForClick.indexOf(e.target.className)) {
    e.preventDefault();
  }
  if (~e.target.className.indexOf('tab-control')) {
    this.elForShow.forEach(function (item, i) {
      if (i !== this.numForHide) {
        this.elForShow[i].hidden = true;
        this.elForClick[i].style.background = '#32425c';
        this.elForClick[i].style.color = '#FFFFFF';
      } else {
        this.elForClick[i].style.background = '#FFFFFF';
        this.elForClick[i].style.color = '#32425c';
      }
    }.bind(this))
  }
};

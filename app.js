'use strict';

function getRandom(max, min) {
  return (Math.random() * (max - min)) + min;
}

var seattle = {
  name: 'Seattle',
  avgSale: 6.3,
  maxCust: 65,
  minCust: 23,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  hourlyCust: function(hourIndex){
    var hourlyCust = [];
    for (var i=0; i<this.hours.length; i++) {
      var hourCust = getRandom(this.maxCust, this.minCust);
      hourlyCust.push(hourCust);
    }
    return hourlyCust[hourIndex];
  }
};

console.log(seattle.hourlyCust(2));

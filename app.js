'use strict';

function getRandom(max, min) {
  return (Math.random() * (max - min) + min);
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  name: 'Seattle',
  avgSale: 6.3,
  maxCust: 65,
  minCust: 23,
  getHourSales: function(){
    var hourCust = getRandom(this.maxCust, this.minCust);
    var hourSales = (hourCust * this.avgSale);
    return Math.floor(hourSales);
  }
};

var tokyo = {
  name: 'Tokyo',
  avgSale: 1.2,
  maxCust: 24,
  minCust: 3,
  getHourlySales: function(hourIndex){
    var hourlyCust = [];
    var hourlySales = [];
    for (var i=0; i<hours.length; i++) {
      var hourCust = getRandom(this.maxCust, this.minCust);
      hourlyCust.push(hourCust);
    }
    for (var j=0; j<hours.length; j++) {
      var hourSales = (hourlyCust[j] * this.avgSale);
      hourlySales.push(hourSales);
    }
    return Math.floor(hourlySales[hourIndex]);
  }
};

// var locations = [seattle, tokyo];

// function renderSales(locationName) {
//   var locationID = document.getElementById(locationName.toString());
// }

var seattleHeader = document.getElementById('seattleHeader');
seattleHeader.textContent = `${seattle.name} Sales:`;

var seattleUL = document.getElementById('seattleUL');
var seattleHourSales = 0;
var seattleHourlySales = [];
var seattleTotalSales = 0;
for (var i = 0; i<hours.length; i++) {
  var seattleLI = document.createElement('li');
  seattleHourSales = seattle.getHourSales();
  seattleHourlySales.push(seattleHourSales);
  seattleTotalSales += seattleHourSales;
  seattleLI.textContent = `${hours[i]} sales: ${seattle.getHourSales()} cookies`;
  seattleUL.appendChild(seattleLI);
}

var seattleTotalLI = document.createElement('li');
seattleTotalLI.textContent = `Total daily sales: ${seattleTotalSales}`;
seattleUL.appendChild(seattleTotalLI);

// ## QUESTIONS ##
// make getHourSales() global
// how to create a reusable function from l.50-63?
// related, possible to concatenate lookup for GEBI?
// assigning new elements IDs via js
// storing more permanent numbers from RNG

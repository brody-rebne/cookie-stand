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

// function getDailySales(storeName) {
//   var dailySales = [];
//   for (var i=0; i<hours.length; i++) {
//     var locationHourSales = storeName.getHourlySales(i);
//     dailySales +=
//     console.log(`${storeName.name} ${i} ${dailySales[i]}`);
//   }
//   return dailySales;
// }

// var locations = [seattle, tokyo, dubai, paris, lima];

// function getAllLocationHourlySales() {
//   for (var i=0; i<locations.length; i++) {
//     getLocationHourlySales(locations[i]);
//   }
// }

// getAllLocationHourlySales();

var seattleHeader = document.getElementById('seattleHeader');
seattleHeader.textContent = `${seattle.name} Sales:`;

var i;
var seattleUL = document.getElementById('seattleUL');
var seattleHourlySales = [];
for (i = 0; i< hours.length; i++) {
  console.log('im looping');
  var seattleLI = document.createElement('li');
  seattleHourlySales.push(seattle.getHourSales());
  seattleLI.textContent = `${hours[i]} sales: ${seattle.getHourSales()} cookies`;
  seattleUL.appendChild(seattleLI);
  console.log('ive looped');
}

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
  getHourlySales: function(hourIndex){
    var hourlyCust = [];
    var hourlySales = [];
    for (var i=0; i<this.hours.length; i++) {
      var hourCust = getRandom(this.maxCust, this.minCust);
      hourlyCust.push(hourCust);
    }
    for (var j=0; j<this.hours.length; j++) {
      var hourSales = (hourlyCust[j] * this.avgSale);
      hourlySales.push(hourSales);
    }
    console.log(`I am working! The hourlySales index is  ${hourlySales[hourIndex]}`);
    return hourlySales[hourIndex];
  }
};

var tokyo = {
  name: 'Tokyo',
  avgSale: 1.2,
  maxCust: 24,
  minCust: 3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getHourlySales: function(hourIndex){
    var hourlyCust = [];
    var hourlySales = [];
    for (var i=0; i<this.hours.length; i++) {
      var hourCust = getRandom(this.maxCust, this.minCust);
      hourlyCust.push(hourCust);
    }
    for (var j=0; j<this.hours.length; j++) {
      var hourSales = (hourlyCust[j] * this.avgSale);
      hourlySales.push(hourSales);
    }
    console.log(`I am working! The hourlySales index is  ${hourlySales[hourIndex]}`);
    return hourlySales[hourIndex];
  }
};

var dubai = {
  name: 'Dubai',
  avgSale: 3.7,
  maxCust: 38,
  minCust: 11,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getHourlySales: function(hourIndex){
    var hourlyCust = [];
    var hourlySales = [];
    for (var i=0; i<this.hours.length; i++) {
      var hourCust = getRandom(this.maxCust, this.minCust);
      hourlyCust.push(hourCust);
    }
    for (var j=0; j<this.hours.length; j++) {
      var hourSales = (hourlyCust[j] * this.avgSale);
      hourlySales.push(hourSales);
    }
    console.log(`I am working! The hourlySales index is  ${hourlySales[hourIndex]}`);
    return hourlySales[hourIndex];
  }
};

var paris = {
  name: 'Paris',
  avgSale: 2.3,
  maxCust: 38,
  minCust: 20,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getHourlySales: function(hourIndex){
    var hourlyCust = [];
    var hourlySales = [];
    for (var i=0; i<this.hours.length; i++) {
      var hourCust = getRandom(this.maxCust, this.minCust);
      hourlyCust.push(hourCust);
    }
    for (var j=0; j<this.hours.length; j++) {
      var hourSales = (hourlyCust[j] * this.avgSale);
      hourlySales.push(hourSales);
    }
    console.log(`I am working! The hourlySales index is  ${hourlySales[hourIndex]}`);
    return hourlySales[hourIndex];
  }
};

var lima = {
  name: 'Lima',
  avgSale: 4.6,
  maxCust: 16,
  minCust: 2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getHourlySales: function(hourIndex){
    var hourlyCust = [];
    var hourlySales = [];
    for (var i=0; i<this.hours.length; i++) {
      var hourCust = getRandom(this.maxCust, this.minCust);
      hourlyCust.push(hourCust);
    }
    for (var j=0; j<this.hours.length; j++) {
      var hourSales = (hourlyCust[j] * this.avgSale);
      hourlySales.push(hourSales);
    }
    console.log(`I am working! The hourlySales index is  ${hourlySales[hourIndex]}`);
    return hourlySales[hourIndex];
  }
};

function getLocationHourlySales(objectName) {
  var locationHourlySales = [];
  for (var i=0; i<seattle.hours.length; i++) {
    var locationHourSales = objectName.getHourlySales(i);
    locationHourlySales.push(locationHourSales);
    console.log(locationHourlySales[i]);
  }
  console.log(locationHourlySales);
  return locationHourlySales;
}

var locations = [seattle, tokyo, dubai, paris, lima];

function getAllLocationHourlySales() {
  for (var i=0; i<locations.length; i++) {
    getLocationHourlySales(locations[i]);
  }
}

getAllLocationHourlySales();

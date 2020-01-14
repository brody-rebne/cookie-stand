'use strict';

// rng function for generating random sales data
function getRandom(max, min) {
  return (Math.random() * (max - min) + min);
}

// function quickAppend(parent, child, type, content) {
//   child = document.createElement(type);
//   child.textcontent = content;
//   parent.appendChild(child);
// }

// constructor function for creating stores
function Store(name, avgSale, maxCust, minCust) {
  this.name = name;
  this.avgSale = avgSale;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.dailySales = 0;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.hourlySales = [];
}

// generates array of random sales numbers
Store.prototype.getRandomSales = function() {
  for (var i=0; i<this.hours.length; i++) {
    this.hourlySales.push(Math.floor(getRandom(this.maxCust, this.minCust) * this.avgSale));
    this.dailySales += Math.floor(this.hourlySales[i]);
  }
};

// renders the random sales numbers in the ui
Store.prototype.renderSales = function() {
  this.getRandomSales();
  var storesArticle = document.getElementById('stores');
  var cityHeader = document.createElement('h1');
  var cityUL = document.createElement('ul');
  cityHeader.textContent = this.name;
  storesArticle.appendChild(cityHeader);
  storesArticle.appendChild(cityUL);
  for (var i=0; i<this.hours.length; i++) {
    var hourLI = document.createElement('li');
    hourLI.textContent = `${this.hours[i]}: ${this.hourlySales[i]} cookies`;
    cityUL.appendChild(hourLI);
    console.log('i looped!');
  }
  var totalLI = document.createElement('li');
  totalLI.textContent = `Total: ${this.dailySales} cookies`;
  cityUL.appendChild(totalLI);
};

// instantiating store objects
var seattle = new Store('Seattle', 6.3, 65, 23);
var tokyo = new Store('Tokyo', 1.2, 24, 3);
var dubai = new Store('Dubai', 3.7, 38, 11);
var paris = new Store('Paris', 2.3, 38, 20);
var lima = new Store('Lima', 4.6, 16, 3);

seattle.renderSales();
tokyo.renderSales();
dubai.renderSales();
paris.renderSales();
lima.renderSales();

// ## QUESTIONS ##
// make getHourSales() global
// how to create a reusable function from l.50-63?
// related, possible to concatenate lookup for GEBI?
// assigning new elements IDs via js
// storing more permanent numbers from RNG

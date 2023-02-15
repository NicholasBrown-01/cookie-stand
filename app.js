'use strict';

// **** GLOBALS ****


// * Below this line: don't think I need this anymore. *
// let seattleSection = document.getElementById('seattle-section');
// let locations = [];
// console.log(locations);
// * Above this line: don't think I need this anymore. *

let saleTable = document.getElementById('sale-table');

let tableBody = document.createElement('tbody');
saleTable.appendChild(tableBody);

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];


// **** CONSTRUCTOR FUNCTION (bridges the gap between our Objects and Prototypes)

function Cities(name, minCust, maxCust, avgCookiesBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.cookiesBoughtPerHour = [];
  this.cookiesTotalSold = 0;
  this.totalCookiesPerCity = 0;
}



// ******** PROTOTYPE METHODS ********


// ? *** Generate Customers Prototype ***

Cities.prototype.generateCustomers = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
};

// ? *** Generate Cookie Sales Prototype ***

Cities.prototype.generateCookieSales = function() {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomerAmount = this.generateCustomers();
    let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
    this.cookiesBoughtPerHour.push(cookiesSold);
    this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold per hour
    this.totalCookiesPerCity += cookiesSold; // Calculate total number of cookies sold per city
  }
};

// ? *** Render Prototype ***

Cities.prototype.render = function() {
  this.generateCookieSales(); // Invoking this function here so it's called only once.

  // let thead = document.createElement('thead');
  // tableBody.appendChild(thead);

  let trElem = document.createElement('tr');

  let thElem = document.createElement('th'); // Creates new thElem (header cell) and assignes it to the variable thElem
  thElem.textContent = this.name; // Assigns the name of the city to thElem (header cell)
  trElem.appendChild(thElem); // Appends the thElem (header cell) to the trElem (table row)

  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td'); // Creates new tdElem (data cell) and assigns it to the variable tdElem, we can do this again because we are in a "for" loop
    tdElem.textContent = this.cookiesBoughtPerHour[i]; // Assigns the number of cookies sold to tdElem (data cell) to be displayed in the table
    trElem.appendChild (tdElem);
  }

  let tdElem = document.createElement('td');
  tdElem.textContent = this.cookiesTotalSold;
  trElem.appendChild(tdElem);
  tableBody.appendChild(trElem);

  // let thElem = document.createElement('th');
  // thElem.textContent = 'Daily Location Total';
  // trElem.appendChild(thElem);
  // theadElem.appendChild(trElem);
  // tableBody.appendChild(theadElem);
};

// ? *** Generate Table Header Prototype ***
function renderHeader() {
  let theadElem = document.createElement('thead');
  let trElem = document.createElement('tr');

  // Make a blank cell for the header
  let thElem = document.createElement('th');
  thElem.textContent = '';
  trElem.appendChild(thElem);

  // Display the hours for the header
  for (let i = 0; i < hours.length; i++) { // loop starts at 0 and goes through each hour in the hours array
    let thElem = document.createElement('th'); // Creates new thElem (header cell) and assigns it to the variable thElem
    thElem.textContent = hours[i]; // Assigns the name of the hour to thElem (header cell) in order of the hours array
    trElem.appendChild(thElem); // add these header cells to the trElem (table row)
  }
  // Total in last header column
  let thTotalElem = document.createElement('th'); // Creates new html element and assigns it to the variable thTotalElem
  thTotalElem.textContent = 'Daily Location Total'; // Assigns the thTotalElem (header cell) with the string label Daily Location Total
  trElem.appendChild(thTotalElem); // Appends the th element to the trElem element...this is a row.
  theadElem.appendChild(trElem); // Appends the trElem element as a child of the theadElem element, ...this is the table header.
  saleTable.appendChild(theadElem); // Appends the theadElem element as a child of the saleTable element....this is the actual table.
}

// ? *** Generate Table Footer Function ***
function renderFooter() {
  let trElem = document.createElement('tr');
  let thTotalElem = document.createElement('th');
  thTotalElem.textContent = 'Totals';
  trElem.appendChild(thTotalElem);

  let totalCookiesPerHour = 0;
  for (let i = 0; i < hours.length; i++) {
    let cookiesSold = 0;
    for (let j = 0; j < cities.length; j++) {
      cookiesSold += cities[j].cookiesBoughtPerHour[i];
    }
    let tdElem = document.createElement('td');
    tdElem.textContent = cookiesSold;
    trElem.appendChild(tdElem);
    totalCookiesPerHour += cookiesSold;
  }

  let tdTotalElem = document.createElement('td');
  tdTotalElem.textContent = totalCookiesPerHour;
  trElem.appendChild(tdTotalElem);

  tableBody.appendChild(trElem);
}

// **** CREATE INSTANCES OF CITIES ***

let cities = [];

let seattle = new Cities('Seattle', 23, 65, 6.3);
cities.push(seattle);

let tokyo = new Cities('Tokyo', 3, 24, 1.2);
cities.push(tokyo);

let dubai = new Cities('Dubai', 11, 38, 3.7);
cities.push(dubai);

let paris = new Cities('Paris', 20, 38, 2.3);
cities.push(paris);

let lima = new Cities('Lima', 2, 16, 4.6);
cities.push(lima);





// **** CALLING THE METHOD ****

seattle.render();
// seattle.renderHeader();
tokyo.render();
// tokyo.renderHeader();
dubai.render();
// dubai.renderHeader();
paris.render();
// paris.renderHeader();
lima.render();
// lima.renderHeader();
renderHeader();
renderFooter();





// ! *** BELOW THIS LINE: OLD CODE FOR DISPLAYING THE COOKIE SALE ELEMENTS ***
// let articleElem = document.createElement('article');
// seattleSection.appendChild(articleElem);

// let h2Elem = document.createElement('h2');
// h2Elem.textContent = this.name;
// articleElem.appendChild(h2Elem);

// let ulElem = document.createElement('ul');
// articleElem.appendChild(ulElem);

// for (let i = 0; i < hours.length; i++) {
//   let liElem = document.createElement('li');
//   liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
//   ulElem.appendChild(liElem);
// }
// ! *** ABOVE THIS LINE: OLD CODE FOR DISPLAYING THE COOKIE SALE ELEMENTS ***



// ! ***** BELOW THIS LINE: NO LONGER NEEDED *****
//  OBJECT LITERALS FOR EACH CITY
// ! -----------------Seattle------------------------------------

// TODO: Store the min/max hourly customers, and the average cookies per customer, in object properties:



// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesBought: 6.3,
//   cookiesBoughtPerHour: [],
//   cookiesTotalSold: [0],
// render: function () { // Step 1 Rendering: Declare Function
//   let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
//   seattleSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

//   let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
//   h2Elem.textContent = this.name;
//   articleElem.appendChild(h2Elem);

//   let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
//   articleElem.appendChild(ulElem);

//   for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
//     let liElem = document.createElement('li');
//     liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
//     ulElem.appendChild(liElem);
//   }

//   let liElem = document.createElement('li');
//   liElem.textContent = `Total: ${this.cookiesTotalSold}`;
//   ulElem.appendChild(liElem);
// },

//   // TODO: Make method to generate a random number of customers per hour.
//   generateCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
//   },
//   // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
//   generateCookieSales: function () {
//     this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
//     this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomerAmount = this.generateCustomers();
//       let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
//       this.cookiesBoughtPerHour.push(cookiesSold);
//       this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
//     }
//     locations.push(seattle);
//   }
// };


// // ! -----------------Tokyo------------------------------------

// let tokyoSection = document.getElementById('tokyo-section');

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesBought: 1.2,
//   cookiesBoughtPerHour: [],
//   cookiesTotalSold: [],
//   render: function () { // Step 1 Rendering: Declare Function
//     let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
//     tokyoSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

//     let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.cookiesTotalSold}`;
//     ulElem.appendChild(liElem);
//   },

//   // TODO: Make method to generate a random number of customers per hour.
//   generateCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
//   },
//   // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
//   generateCookieSales: function () {
//     this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
//     this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomerAmount = this.generateCustomers();
//       let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
//       this.cookiesBoughtPerHour.push(cookiesSold);
//       this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
//     }
//     locations.push(tokyo);
//     // console.log(this.cookiesBoughtPerHour);
//   }
// };

// // console.log(tokyo);


// // ! -------------------Dubai------------------------------------

// let dubaiSection = document.getElementById('tokyo-section');

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesBought: 3.7,
//   cookiesBoughtPerHour: [],
//   cookiesTotalSold: [],
//   render: function () { // Step 1 Rendering: Declare Function
//     let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
//     dubaiSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

//     let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.cookiesTotalSold}`;
//     ulElem.appendChild(liElem);
//   },

//   // TODO: Make method to generate a random number of customers per hour.
//   generateCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
//   },
//   // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
//   generateCookieSales: function () {
//     this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
//     this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomerAmount = this.generateCustomers();
//       let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
//       this.cookiesBoughtPerHour.push(cookiesSold);
//       this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
//     }
//     locations.push(dubai);
//     // console.log(this.cookiesBoughtPerHour);
//   }
// };

// // console.log(dubai);



// // ! -----------------Paris------------------------------------

// let parisSection = document.getElementById('tokyo-section');

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesBought: 2.3,
//   cookiesBoughtPerHour: [],
//   cookiesTotalSold: [],
//   render: function () { // Step 1 Rendering: Declare Function
//     let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
//     parisSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

//     let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.cookiesTotalSold}`;
//     ulElem.appendChild(liElem);
//   },

//   // TODO: Make method to generate a random number of customers per hour.
//   generateCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
//   },
//   // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
//   generateCookieSales: function () {
//     this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
//     this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomerAmount = this.generateCustomers();
//       let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
//       this.cookiesBoughtPerHour.push(cookiesSold);
//       this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
//     }
//     locations.push(paris);
//     // console.log(this.cookiesBoughtPerHour);
//   }
// };

// // console.log(paris);



// // ! -----------------Lima------------------------------------

// let limaSection = document.getElementById('tokyo-section');

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesBought: 4.6,
//   cookiesBoughtPerHour: [],
//   cookiesTotalSold: [],
//   render: function () { // Step 1 Rendering: Declare Function
//     let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
//     limaSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

//     let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.cookiesTotalSold}`;
//     ulElem.appendChild(liElem);
//   },

//   // TODO: Make method to generate a random number of customers per hour.
//   generateCustomers: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
//   },
//   // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
//   generateCookieSales: function () {
//     this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
//     this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomerAmount = this.generateCustomers();
//       let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
//       this.cookiesBoughtPerHour.push(cookiesSold);
//       this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
//     }
//     locations.push(lima);
//     // console.log(this.cookiesBoughtPerHour);
//   }
// };

// // console.log(lima);



// // **** EXECUTABLE CODE ****

// // ! Seattle
// seattle.generateCookieSales();
// seattle.generateCustomers();
// seattle.render();

// // ! Tokyo
// tokyo.generateCookieSales();
// tokyo.generateCustomers();
// tokyo.render();

// // ! Dubai
// dubai.generateCookieSales();
// dubai.generateCustomers();
// dubai.render();

// // ! Paris
// paris.generateCookieSales();
// paris.generateCustomers();
// paris.render();

// // ! Lima
// lima.generateCookieSales();
// lima.generateCustomers();
// lima.render();
// ! ***** ABOVE THIS LINE: NO LONGER NEEDED *****

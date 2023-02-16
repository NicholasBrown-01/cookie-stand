'use strict';
// * ----- THANK YOU INSTRUCTORS, TA'S, AND YOUTUBE, AND MDN DOCS, AND W3 SCHOOLS, AND THE INTERNET FOR YOUR CONTRIBUTIONS ----- *

// Visualize the HTML Table:

// <table>
//   <tr>
//     <th>Heading 1</th> // ? Hours
//     <th>Heading 2</th>
//     <th>Heading 3</th>
//     <th>Daily Location Total</th> // ? Total of each City for all hours
//   </tr>
//   <tr>?
//     <td>Cell 1, Row 1</td> // ? Cities
//     <td>Cell 2, Row 1</td>
//     <td>Cell 3, Row 1</td>
//   </tr>
//   <tr>
//     <th>Total</th> // ? Total of all Cities per hour
//     <td></td>
//     <td></td>
//   </tr>
// </table>

// **** GLOBALS ****

// 1. Create a <table id='sale-table'></table> in the HTML Section/Article/Body etc for the JS created table to be linked to so it knows where to go. `sale-table`.
let saleTable = document.getElementById('sale-table');

// 2. Create the body of the actual table, `tableBody` that will be filled with data, and append/attach it to the saleTable location in the HTML.
let tableBody = document.createElement('tbody');
saleTable.appendChild(tableBody);

//3. Use this variable array `hours` for the table and table functions we create to use for cookie calculations.
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];


// **** CONSTRUCTOR FUNCTION (bridges the gap between our Objects and Prototypes)

// 4. Replace the City Objects we created in the prior lab and re-write their format/information into a Constructor to then be used by Prototypes. Include properties that are special (will need to be updated or changed) and properties that require a starting point for function calls (for loops) later on .
function Cities(name, minCust, maxCust, avgCookiesBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.cookiesBoughtPerHour = [];
  this.totalCookiesSold = 0;
  this.totalCookiesSoldPerCity = 0;
}



// ******** PROTOTYPE METHODS ********

// 5. Copy/Paste our functions that were used for our Objects, and re-write them into a Prototype Method.
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
    this.totalCookiesSold += cookiesSold; // Calculate total number of cookies sold
    this.totalCookiesSoldPerCity += cookiesSold; // Calculate total number of cookies sold per city
  }
};

// 6. Data that used to be rendered as a 'ul' with 'h2' and 'li' elements for cookie sales per hour, now need to be converted into a single dynamic table element. Thus, replace the old 'ul' etc elements with table elements. ('th', 'tr', 'td' etc.)
// ? *** Render Prototypes ***

Cities.prototype.render = function() {
  this.generateCookieSales(); // Invoking this function here so it's called only once per advice from a TA.

  let trElem = document.createElement('tr'); // Create the initial row from which to build from an attach our header data to. Would love to name this Row 1 but becuase this is used over and over it wouldn't make sense.

  let thElem = document.createElement('th'); // Create a new Table Header which is also a 'Header Cell' and assignes it to the variable thElem
  thElem.textContent = this.name; // Assigns the name of the a city to Table Header Cell.
  trElem.appendChild(thElem); // Appends and/or Attaches the Header Cell ('th') to the Table Row ('trElem')

  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td'); // Creates new Data Cell and again assigns it to the 'tdElem' variable. We can do this same variable again because we are in a "for loop" in order to create Data Cells for each hour.
    tdElem.textContent = this.cookiesBoughtPerHour[i]; // Assigns the Data Cell to number of 'cookiesBoughtPerHour[i]' variable
    trElem.appendChild (tdElem); // Attaches that Data Cell ('td') to the Table Row ('trElem').
  }

  let tdElem = document.createElement('td'); // Creates a new Data Cell outside the "for loop" we just did above.
  tdElem.textContent = this.totalCookiesSold; // Assigns the Data Cell to the 'totalCookiesSold' variable.
  trElem.appendChild(tdElem); // Attaches that Data Cell ('td') to the Table Row ('trElem').
  tableBody.appendChild(trElem); // Attaches that Table Row ('trElem') with all this data now...to the Table Body ('tableBody'). Which is then applied to Each City with it's own Table Row of date because of the "for loop" above.

};

// 7. Create separate functions for the Header and the Footer to allow us to display separate totals for each city per hour.
// ? *** Generate Table Header Function ***
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
  let trElem = document.createElement('tr'); // Create a new row for the Data our function makes.
  let thTotalElem = document.createElement('th'); // Create the Data Cell in the Table Header for the ROW.
  thTotalElem.textContent = 'Totals'; // Assign what we want to literally call that Data Cell which represents the ROW.
  trElem.appendChild(thTotalElem); // Append and/or attach that information to the Row.

  let totalCookiesPerHour = 0; // Set the starting amount in which to calculate from.

  for (let i = 0; i < hours.length; i++) { // Start the loop at 0 to then go through each hour.
    let cookiesSold = 0; // Set the starting amount in which to calculate from.
    for (let j = 0; j < cities.length; j++) { // Initalizes this nested loop for each hour city by city.
      cookiesSold += cities[j].cookiesBoughtPerHour[i]; // Adds the number of cookies sold in the current hour for each city
    }
    let tdElem = document.createElement('td'); // Creates a new Data Cell and again assigns it to the 'tdElem' variable.
    tdElem.textContent = cookiesSold; // Assigns the Data Cell to number of 'cookiesSold' variable.
    trElem.appendChild(tdElem); // Attaches that Data Cell ('td') to the Table Row ('trElem').
    totalCookiesPerHour += cookiesSold; // Adds the total number of cookies sold in each hour ('cookiesSold') over all cities and adds it to the overall number of cookies sold per hour ('totalCookiesPerHour').
  }

  let tdTotalElem = document.createElement('td'); // Create a Data Cell for our Total Element.
  tdTotalElem.textContent = totalCookiesPerHour; // Assigns the Data Cell to the 'totalCookiesPerHour' variable.
  trElem.appendChild(tdTotalElem); // Attaches the Data Cell totals ('td') to the Table Row ('trElem').

  tableBody.appendChild(trElem); // Attaches the entire Table Row ('trElem') with all this data now...to the Table Body ('tableBody
}

// **** CREATE INSTANCES OF CITIES via Array ***

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
tokyo.render();
dubai.render();
paris.render();
lima.render();
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

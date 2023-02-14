'use strict';



// **** GLOBALS ****
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// TODO: Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// let locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
let locations = [];
console.log(locations);


// **** OBJECT LITERALS FOR EACH CITY ****


// ! -----------------Seattle------------------------------------

// TODO: Store the min/max hourly customers, and the average cookies per customer, in object properties:

let seattleSection = document.getElementById('seattle-section');

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesBought: 6.3,
  cookiesBoughtPerHour: [],
  cookiesTotalSold: [],
  render: function () { // Step 1 Rendering: Declare Function
    let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
    seattleSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

    let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotalSold}`;
    ulElem.appendChild(liElem);
  },

  // TODO: Make method to generate a random number of customers per hour.
  generateCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
  },
  // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
  generateCookieSales: function () {
    this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
    this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

    for (let i = 0; i < hours.length; i++) {
      let randomCustomerAmount = this.generateCustomers();
      let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
      this.cookiesBoughtPerHour.push(cookiesSold);
      this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
    }
    locations.push(seattle);
  }
}



// ! -----------------Tokyo------------------------------------

let tokyoSection = document.getElementById('tokyo-section');

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesBought: 1.2,
  cookiesBoughtPerHour: [],
  cookiesTotalSold: [],
  render: function () { // Step 1 Rendering: Declare Function
    let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
    tokyoSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

    let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotalSold}`;
    ulElem.appendChild(liElem);
  },

  // TODO: Make method to generate a random number of customers per hour.
  generateCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
  },
  // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
  generateCookieSales: function () {
    this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
    this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

    for (let i = 0; i < hours.length; i++) {
      let randomCustomerAmount = this.generateCustomers();
      let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
      this.cookiesBoughtPerHour.push(cookiesSold);
      this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
    }
    locations.push(tokyo);
    // console.log(this.cookiesBoughtPerHour);
  }
};

// console.log(tokyo);


// ! -------------------Dubai------------------------------------

let dubaiSection = document.getElementById('tokyo-section');

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesBought: 3.7,
  cookiesBoughtPerHour: [],
  cookiesTotalSold: [],
  render: function () { // Step 1 Rendering: Declare Function
    let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
    dubaiSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

    let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotalSold}`;
    ulElem.appendChild(liElem);
  },

  // TODO: Make method to generate a random number of customers per hour.
  generateCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
  },
  // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
  generateCookieSales: function () {
    this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
    this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

    for (let i = 0; i < hours.length; i++) {
      let randomCustomerAmount = this.generateCustomers();
      let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
      this.cookiesBoughtPerHour.push(cookiesSold);
      this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
    }
    locations.push(dubai);
    // console.log(this.cookiesBoughtPerHour);
  }
};

// console.log(dubai);



// ! -----------------Paris------------------------------------

let parisSection = document.getElementById('tokyo-section');

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiesBought: 2.3,
  cookiesBoughtPerHour: [],
  cookiesTotalSold: [],
  render: function () { // Step 1 Rendering: Declare Function
    let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
    parisSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

    let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotalSold}`;
    ulElem.appendChild(liElem);
  },

  // TODO: Make method to generate a random number of customers per hour.
  generateCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
  },
  // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
  generateCookieSales: function () {
    this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
    this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

    for (let i = 0; i < hours.length; i++) {
      let randomCustomerAmount = this.generateCustomers();
      let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
      this.cookiesBoughtPerHour.push(cookiesSold);
      this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
    }
    locations.push(paris);
    // console.log(this.cookiesBoughtPerHour);
  }
};

// console.log(paris);



// ! -----------------Lima------------------------------------

let limaSection = document.getElementById('tokyo-section');

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiesBought: 4.6,
  cookiesBoughtPerHour: [],
  cookiesTotalSold: [],
  render: function () { // Step 1 Rendering: Declare Function
    let articleElem = document.createElement('article'); // Step 2 Rendering: Create an Element
    limaSection.appendChild(articleElem); // Step 3 Rendering: Add it to the DOM

    let h2Elem = document.createElement('h2'); // Step 3 Rendering: Add it to the DOM
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul'); // Step 3 Rendering: Add it to the DOM
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) { //Display the values of each array as unordered lists in the browser.
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookiesTotalSold}`;
    ulElem.appendChild(liElem);
  },

  // TODO: Make method to generate a random number of customers per hour.
  generateCustomers: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust; // Code from MDN
  },
  // TODO: Make method to calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
  generateCookieSales: function () {
    this.cookiesBoughtPerHour = []; // Reset the cookiesBoughtPerHour array
    this.cookiesTotalSold = 0; // Reset the cookiesTotalSold

    for (let i = 0; i < hours.length; i++) {
      let randomCustomerAmount = this.generateCustomers();
      let cookiesSold = Math.floor(randomCustomerAmount * this.avgCookiesBought);
      this.cookiesBoughtPerHour.push(cookiesSold);
      this.cookiesTotalSold += cookiesSold; // Calculate total number of cookies sold
    }
    locations.push(lima);
    // console.log(this.cookiesBoughtPerHour);
  }
};

// console.log(lima);



// **** EXECUTABLE CODE ****

// ! Seattle
seattle.generateCookieSales();
seattle.generateCustomers();
seattle.render();

// ! Tokyo
tokyo.generateCookieSales();
tokyo.generateCustomers();
tokyo.render();

// ! Dubai
dubai.generateCookieSales();
dubai.generateCustomers();
dubai.render();

// ! Paris
paris.generateCookieSales();
paris.generateCustomers();
paris.render();

// ! Lima
lima.generateCookieSales();
lima.generateCustomers();
lima.render();


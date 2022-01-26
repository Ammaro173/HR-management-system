'use strict';
let tableS = document.getElementById('tableS');

function gettingItems() {
  let obj = localStorage.getItem('emp');
  let trans = JSON.parse(obj); // Decoding!!
  if (trans !== null) {
    return trans;
  } else {
    return [];
  }
}

function render() {
  tableS.innerHTML = '';
  let table = document.createElement('table');
  tableS.appendChild(table);
  table.style.border = '1px black';
  table.style.alignContent = 'center';

  // let ideato = [];
  let ideato = gettingItems();

  let trEl = document.createElement('tr');
  table.appendChild(trEl);
  let thEl = document.createElement('th');
  thEl.style.border = '1px black';
  thEl.style.padding = '10px';
  trEl.appendChild(thEl);
  let thEl2 = document.createElement('th');
  thEl2.style.border = '1px black';
  thEl2.style.padding = '10px';
  trEl.appendChild(thEl2);
  let thEl3 = document.createElement('th');
  thEl3.style.border = '1px black';
  thEl3.style.padding = '10px';
  trEl.appendChild(thEl3);
  let thEl4 = document.createElement('th');
  thEl4.style.border = '1px black';
  thEl4.style.padding = '10px';
  trEl.appendChild(thEl4);

  thEl.innerHTML = 'Department';
  thEl2.innerHTML = '# Of Employees';
  thEl3.innerHTML = 'Total Salary';
  thEl4.innerHTML = 'Avgerage';
}

render(); // to be continued!!

///

////////////

//////////////////////
// // localStorage.getItem('emp');
// // ideato = window.localStorage.key('emp');

// // let lonh = JSON.parse(ideato);

// // console.log(lolo);
// function Employee(FullName, Department, Level, image) {
//   this.EmployeeID = idGen(ids);
//   this.FullName = FullName;
//   // (this.Administration = Administration),
//   //   (this.Marketing = Marketing),
//   //   (this.Development = Development),
//   //   (this.Finance = Finance),
//   //   (this.Junior = Junior),
//   //   (this.MidSenior = MidSenior),
//   //   (this.Senior = Senior),
//   this.Department = Department;
//   this.Level = Level;
//   this.Salary = this.calculatingSalary(this.Level);
//   this.image = image; //`./images/${this.EmployeeID}.PNG`;
//   // this.image = image;
//   ideato.push(this); // and here with line@ 2 Employee.ideato.push(this);
// }
// function gettingItems() {
//   var stringObj = localStorage.getItem('emp');
//   // console.log(stringObj);
//   var parsObj = JSON.parse(stringObj);
//   if (parsObj !== null) {
//     for (var i = 0; i < parsObj.length; i++) {
//       //   console.log(parsObj);
//     }
//     new Employee(parsObj[i].FullName, parsObj[i].Department, parsObj[i].Level, parsObj[i].image);
//   }
// }
// gettingItems();
// console.log(Employee);
// //   console.log(parsObj);
// //   console.log(ideato);
// //   to check if i have data!

// // function global() {
// //   return this;
// // }
// // global.call(gettingItems());

// // console.log(this);
// // console.log(localStorage);

// // function render() {
// //   let mySection = document.getElementById('drink');// create your id #

// //   }

// //   let tableEL = document.createElement('table');
// //   mySection.appendChild(tableEL);

// //   let trEl = document.createElement('tr');
// //   tableEL.appendChild(trEl);

// //   let thEL = document.createElement('th');
// //   trEl.appendChild(thEL);
// //   thEL.textContent = 'Drink Name';

// //   let th1EL = document.createElement('th');
// //   trEl.appendChild(th1EL);
// //   th1EL.textContent = 'Drink price';

// //   for (let i = 0; i < Drink.allDrinks.length; i++) {
// //     let drink = Drink.allDrinks[i];
// //     // console.log(drink);
// //     let trEl = document.createElement('tr');
// //     tableEL.appendChild(trEl);

// //     let tdEl = document.createElement('td');
// //     trEl.appendChild(tdEl);
// //     tdEl.textContent = drink.name;

// //     let td1El = document.createElement('td');
// //     trEl.appendChild(td1El);
// //     td1El.textContent = drink.price;
// //   }

// //   let tableEL = document.createElement('table');
// //   mySection.appendChild(tableEL);

// //   let trEl = document.createElement('tr');
// //   tableEL.appendChild(trEl);

// //   let thEL = document.createElement('th');
// //   trEl.appendChild(thEL);
// //   thEL.textContent = 'Drink Name';

// //   let th1EL = document.createElement('th');
// //   trEl.appendChild(th1EL);
// //   th1EL.textContent = 'Drink price';

// //   for (let i = 0; i < parsObj.length; i++) {
// //     let drink = Drink.allDrinks[i];
// //     // console.log(drink);
// //     let trEl = document.createElement('tr');
// //     tableEL.appendChild(trEl);

// //     let tdEl = document.createElement('td');
// //     trEl.appendChild(tdEl);
// //     tdEl.textContent = drink.name;

// //     let td1El = document.createElement('td');
// //     trEl.appendChild(td1El);
// //     td1El.textContent = drink.price;
// //   }
// // }

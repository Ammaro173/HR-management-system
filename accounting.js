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
  table.style.border = '5px black';
  table.style.alignContent = 'center';

  // let ideato = [];
  let ideato = gettingItems();
  console.log(ideato[1]);

  let admCount = 0;
  let markCount = 0;
  let devCount = 0;
  let finCount = 0;
  let totalSadm = 0;
  let totalSmark = 0;
  let totalSdev = 0;
  let totalSfin = 0;
  let avgAdm = 0;
  let avgmark = 0;
  let avgdev = 0;
  let avgfin = 0;

  let trEl = document.createElement('tr');
  table.appendChild(trEl);
  let thEl = document.createElement('th');
  thEl.style.border = '5px black';
  thEl.style.padding = '10px';
  trEl.appendChild(thEl);
  let thEl2 = document.createElement('th');
  thEl2.style.border = '5px black';
  thEl2.style.padding = '10px';
  trEl.appendChild(thEl2);
  let thEl3 = document.createElement('th');
  thEl3.style.border = '5px black';
  thEl3.style.padding = '10px';
  trEl.appendChild(thEl3);
  let thEl4 = document.createElement('th');
  thEl4.style.border = '5px black';
  thEl4.style.padding = '10px';
  trEl.appendChild(thEl4);

  thEl.innerHTML = 'Department';
  thEl2.innerHTML = '# Of Employees';
  thEl3.innerHTML = 'Total Salary';
  thEl4.innerHTML = 'Avgerage';

  for (let i = 0; i < ideato.length; i++) {
    if (ideato[i].Department === 'Administration') {
      admCount++;
      totalSadm = totalSadm + ideato[i].Salary;
    } else if (ideato[i].Department === 'Marketing') {
      markCount++;
      totalSmark = totalSmark + ideato[i].Salary;
    } else if (ideato[i].Department === 'Development') {
      devCount++;
      totalSdev = totalSdev + ideato[i].Salary;
    } else if (ideato[i].Department === 'Finance') {
      finCount++;
      totalSfin = totalSfin + ideato[i].Salary;
    }
  }
  avgAdm = Math.floor(totalSadm / admCount);
  if (isNaN(avgAdm)) {
    avgAdm = '';
  }
  avgmark = Math.floor(totalSmark / markCount);
  if (isNaN(avgmark)) {
    avgmark = '';
  }
  avgdev = Math.floor(totalSdev / devCount);
  if (isNaN(avgdev)) {
    avgdev = '';
  }
  avgfin = Math.floor(totalSfin / finCount);
  if (isNaN(avgfin)) {
    avgfin = '';
  }

  let totalEmp = admCount + devCount + finCount + markCount;
  let totalSalary = totalSfin + totalSdev + totalSadm + totalSmark;

  let avgSalary = Math.floor(totalSalary / totalEmp);

  let tr2 = document.createElement('tr');
  table.appendChild(tr2);

  let td1 = document.createElement('td');
  tr2.appendChild(td1);
  td1.style.border = '2px solid black';
  td1.style.padding = '10px';
  td1.textContent = 'Adminstration';

  let td2 = document.createElement('td');
  tr2.appendChild(td2);
  td2.style.border = '2px solid black';
  td2.style.padding = '10px';
  td2.textContent = admCount;

  let td3 = document.createElement('td');
  tr2.appendChild(td3);
  td3.style.border = '2px solid black';
  td3.style.padding = '10px';
  td3.textContent = totalSadm;

  let td4 = document.createElement('td');
  tr2.appendChild(td4);
  td4.style.border = '2px solid black';
  td4.style.padding = '10px';
  td4.textContent = avgAdm;

  let tr3 = document.createElement('tr');
  table.appendChild(tr3);

  let td11 = document.createElement('td');
  tr3.appendChild(td11);
  td11.style.border = '2px solid black';
  td11.style.padding = '10px';
  td11.textContent = 'Marketing';

  let td22 = document.createElement('td');
  tr3.appendChild(td22);
  td22.style.border = '2px solid black';
  td22.style.padding = '10px';
  td22.textContent = markCount;

  let td33 = document.createElement('td');
  tr3.appendChild(td33);
  td33.style.border = '2px solid black';
  td33.style.padding = '10px';
  td33.textContent = totalSmark;

  let td44 = document.createElement('td');
  tr3.appendChild(td44);
  td44.style.border = '2px solid black';
  td44.style.padding = '10px';
  td44.textContent = avgmark;

  let tr4 = document.createElement('tr');
  table.appendChild(tr4);

  let td111 = document.createElement('td');
  tr4.appendChild(td111);
  td111.style.border = '2px solid black';
  td111.style.padding = '10px';
  td111.textContent = 'Development';

  let td222 = document.createElement('td');
  tr4.appendChild(td222);
  td222.style.border = '2px solid black';
  td222.style.padding = '10px';
  td222.textContent = devCount;

  let td333 = document.createElement('td');
  tr4.appendChild(td333);
  td333.style.border = '2px solid black';
  td333.style.padding = '10px';
  td333.textContent = totalSdev;

  let td444 = document.createElement('td');
  tr4.appendChild(td444);
  td444.style.border = '2px solid black';
  td444.style.padding = '10px';
  td444.textContent = avgdev;

  let tr5 = document.createElement('tr');
  table.appendChild(tr5);

  let td1111 = document.createElement('td');
  tr5.appendChild(td1111);
  td1111.style.border = '2px solid black';
  td1111.style.padding = '10px';
  td1111.textContent = 'Finance';

  let td2222 = document.createElement('td');
  tr5.appendChild(td2222);
  td2222.style.border = '2px solid black';
  td2222.style.padding = '10px';
  td2222.textContent = finCount;

  let td3333 = document.createElement('td');
  tr5.appendChild(td3333);
  td3333.style.border = '2px solid black';
  td3333.style.padding = '10px';
  td3333.textContent = totalSfin;

  let td4444 = document.createElement('td');
  tr5.appendChild(td4444);
  td4444.style.border = '2px solid black';
  td4444.style.padding = '10px';
  td4444.textContent = avgfin;

  let tr6 = document.createElement('tr');
  table.appendChild(tr6);

  let td11111 = document.createElement('td');
  tr6.appendChild(td11111);
  td11111.style.border = '2px solid black';
  td11111.style.padding = '10px';
  td11111.textContent = 'Total';

  let td22222 = document.createElement('td');
  tr6.appendChild(td22222);
  td22222.style.border = '2px solid black';
  td22222.style.padding = '10px';
  td22222.textContent = totalEmp;

  let td33333 = document.createElement('td');
  tr6.appendChild(td33333);
  td33333.style.border = '2px solid black';
  td33333.style.padding = '10px';
  td33333.textContent = totalSalary;

  let td44444 = document.createElement('td');
  tr6.appendChild(td44444);
  td44444.style.border = '2px solid black';
  td44444.style.padding = '10px';
  td44444.textContent = avgSalary;
}
render();

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

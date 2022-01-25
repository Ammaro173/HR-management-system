'use strict';
let ideato = [];
var ids = 999;
let base = {
  FullName: ['Ghazi Samer', 'Lana Ali', 'Tamara Ayoub', 'Safi Walid', 'Omar Zaid', 'Rana Saleh', 'Hadi Ahmad'],
  Department: ['Administration', 'Finance', 'Marketing', 'Administration', 'Development', 'Development', 'Finance'],
  Level: ['Senior', 'Senior', 'Senior', 'Mid-Senior', 'Senior', 'Junior', 'Mid-Senior'],
  ImgURL: ['assets/Ghazi.jpg', 'assets/Lana.jpg', 'assets/Tamara.jpg', 'assets/Safi.jpg', 'assets/Omar.jpg', 'assets/Rana.jpg', 'assets/Hadi.jpg'],
};

function Employee(FullName, Department, Level, image) {
  this.EmployeeID = idGen(ids);
  this.FullName = FullName;
  // (this.Administration = Administration),
  //   (this.Marketing = Marketing),
  //   (this.Development = Development),
  //   (this.Finance = Finance),
  //   (this.Junior = Junior),
  //   (this.MidSenior = MidSenior),
  //   (this.Senior = Senior),
  this.Department = Department;
  this.Level = Level;
  this.Salary = this.calculatingSalary(this.Level);
  this.image = `./${image}`; //`./images/${this.EmployeeID}.PNG`;
  // this.image = image;
  ideato.push(this);
}

// function senior(min = 1500, max = 2000) {
//   let x = Math.floor(Math.random() * (max - min)) + min;
//   x = x - x * 0.075;
//   return x;

// function midSenior(min = 1000, max = 1500) {
//   let x = Math.floor(Math.random() * (max - min)) + min;
//   x = x - x * 0.075;
//   return x;
// }
// function junior(min = 500, max = 1000) {
//   let x = Math.floor(Math.random() * (max - min)) + min;
//   x = x - x * 0.075;
//   return x;
// }

// new salary mehtod!
Employee.prototype.calculatingSalary = function (empLevel) {
  let max;
  let min;
  // eslint-disable-next-line eqeqeq
  if (empLevel == 'Senior') {
    max = 2000;
    min = 1500;
    // eslint-disable-next-line eqeqeq
  } else if (empLevel == 'Mid-Senior') {
    max = 1500;
    min = 1000;
    // eslint-disable-next-line eqeqeq
  } else if (empLevel == 'Junior') {
    max = 1000;
    min = 500;
  }
  let orgSalary = Math.random() * (max - min) + min;
  let tax = orgSalary * 0.075;
  let netSalary = Math.floor(orgSalary - tax);
  return netSalary;
};

// const id1000 = new Employee('1000', 'Ghazi Samer', 'Administration', 'Senior');

// const id1001 = new Employee('1001', 'Lana Ali', 'Finance', 'Senior');

// const id1002 = new Employee('1002', 'Tamara Ayoub', 'Marketing', 'Senior');

// const id1003 = new Employee('1003', 'Safi Walid', 'Administration', 'Mid-Senior');

// const id1004 = new Employee('1004', 'Omar Zaid', 'Development', 'Senior');

// const id1005 = new Employee('1005', 'Rana Saleh', 'Development', 'Junior');

// const id1006 = new Employee('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior');

//

//new assigning method
const id1000 = new Employee(base.FullName[0], base.Department[0], base.Level[0], base.ImgURL[0]);
const id1001 = new Employee(base.FullName[1], base.Department[1], base.Level[1], base.ImgURL[1]);
const id1002 = new Employee(base.FullName[2], base.Department[2], base.Level[2], base.ImgURL[2]);
const id1003 = new Employee(base.FullName[3], base.Department[3], base.Level[3], base.ImgURL[3]);
const id1004 = new Employee(base.FullName[4], base.Department[4], base.Level[4], base.ImgURL[4]);
const id1005 = new Employee(base.FullName[5], base.Department[5], base.Level[5], base.ImgURL[5]);
const id1006 = new Employee(base.FullName[6], base.Department[6], base.Level[6], base.ImgURL[6]);

let Cont = document.getElementById('card');

for (let i = 0; i < ideato.length; i++) {
  Employee.prototype.render = function () {
    // document.write(`<p>${this.EmployeeID} ${this.FullName} = ${this.Salary}</p>`);
    // let newCard = document.createElement('div');\

    let baseCard = document.createElement('div');
    Cont.appendChild(baseCard);
    baseCard.style =
      'padding: 15px; margin:10px; width: 170px; height: 1fr; background-color: #91C483; display: flex; align-items: center; flex-direction: column;';

    let newImg = document.createElement('img');
    newImg.style = 'width: 180px; height: 150px;';
    newImg.src = this.image;
    newImg.alt = this.FullName;
    baseCard.appendChild(newImg);

    let idInfo = document.createElement('p');
    idInfo.innerHTML = `Name: ${this.FullName} <br>
    ID: ${this.EmployeeID} <br>
    Department: ${this.Department} <br>
    Level: ${this.Level} <br>
    Salary: ${this.Salary}`;
    idInfo.style = 'width: 195px; height: 100px; margin: 10px; color: white;';
    baseCard.appendChild(idInfo);
  };
  ideato[i].render();
}
console.log(ideato);

function idGen(BID) {
  let newId = BID + 1;
  ids++; //defined @line3
  return newId;
}

// upCard.appendChild(newImg);

// upCard.appendChild(newImg2);

// let idSelection;
// switch (this.department) {
//   case 'Administration':
//     idSelection = 'Administration-Section';
//     break;
//   case 'Marketing':
//     idSelection = 'Marketing-Section';
//     break;
//   case 'Development':
//     idSelection = 'Development-Section';
//     break;
//   case 'Finance':
//     idSelection = 'Finance-Section';
//     break;
// }

// let depSec = document.getElementById(idSelection);
// depSec.appendChild(newCard2);

function buttoneato(event) {
  event.preventDefault();
  let newEmployeeName = event.target.Full_Name.value;
  let newEmployeeDepartment = event.target.Department.value;
  let newEmployeeLevel = event.target.Level.value;
  let newEmployeeImg = event.target.img.value;
  const newEmployee = new Employee(newEmployeeName, newEmployeeDepartment, newEmployeeLevel, newEmployeeImg);
  newEmployee.render();
}
let button = document.getElementById('myForm');
button.addEventListener('submit', buttoneato);

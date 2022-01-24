'use strict';
let ideato = [];

function Employee(EmployeeID, FullName, Department, Level, Salary) {
  this.EmployeeID = EmployeeID;
  this.FullName = FullName;
  //   (this.Administration = Administration),
  //     (this.Marketing = Marketing),
  //     (this.Development = Development),
  //     (this.Finance = Finance),
  //     (this.Junior = Junior),
  //     (this.MidSenior = MidSenior),
  //     (this.Senior = Senior),
  this.Department = Department;
  this.Level = Level;
  //   this.Image = Image`./images/${this.EmployeeID}.PNG`;
  this.Salary = Salary;
  ideato.push(this);
}
function senior(min = 1500, max = 2000) {
  let x = Math.floor(Math.random() * (max - min)) + min;
  x = x - x * 0.075;
  return x;
}
function midSenior(min = 1000, max = 1500) {
  let x = Math.floor(Math.random() * (max - min)) + min;
  x = x - x * 0.075;
  return x;
}
function junior(min = 500, max = 1000) {
  let x = Math.floor(Math.random() * (max - min)) + min;
  x = x - x * 0.075;
  return x;
}

const id1000 = new Employee(
  '1000',
  'Ghazi Samer',
  'Administration',
  'Senior',
  senior()
);
const id1001 = new Employee('1001', 'Lana Ali', 'Finance', 'Senior', senior());

const id1002 = new Employee(
  '1002',
  'Tamara Ayoub',
  'Marketing',
  'Senior',
  senior()
);

const id1003 = new Employee(
  '1003',
  'Safi Walid',
  'Administration',
  'Mid-Senior',
  midSenior()
);

const id1004 = new Employee(
  '1004',
  'Omar Zaid',
  'Development',
  'Senior',
  senior()
);

const id1005 = new Employee(
  '1005',
  'Rana Saleh',
  'Development',
  'Junior',
  junior()
);

const id1006 = new Employee(
  '1006',
  'Hadi Ahmad',
  'Finance',
  'Mid-Senior',
  midSenior()
);

// Employee.prototype.render = function () {
//   document.write(`<p>${this.EmployeeID} ${this.FullName} = ${this.Salary}</p>`);
// };
console.log(ideato);

for (let i = 0; i < ideato.length; i++) {
  Employee.prototype.render = function () {
    document.write(
      `<p>${this.EmployeeID} ${this.FullName} = ${this.Salary}</p>`
    );
  };
  ideato[i].render();
}

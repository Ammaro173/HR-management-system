function employee(id, fullName, department, level, ImageURL, salary) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  //this.ImageURL = ./images/${this.id}.PNG;
  this.salary = this.calcSalary(this.level);
}

employee.prototype.calcSalary = function (lvl) {
  let max;
  let min;
  let tax = sal * 0.75;

  let sal = Math.floor(Math.random() * (max - min + 1) + min) - tax;

  if (lvl == 'junior') {
    min = 500;
    max = 1000;
  }

  if (lvl == 'senior') {
    min = 1500;
    max = 2000;
  }

  if (lvl == 'Mid-Senior') {
    min = 1000;
    max = 1500;
  }
  return sal;
};

const employee1 = new employee(1000, 'Ghazi Samer', 'Administration', 'Senior');
const employee2 = new employee(1000, 'Lana Ali', 'Finance', 'Senior');
const employee3 = new employee(1000, 'Tamara Ayoub', 'Marketing', 'Senior');
const employee4 = new employee(
  1000,
  'Safi Walid',
  'Administration',
  'Mid-Senior'
);
const employee5 = new employee(1000, 'Omar Zaid', 'Development', 'Senior');
const employee6 = new employee(1000, 'Rana Saleh', 'Development', 'Junior');
const employee7 = new employee(1000, 'Hadi Ahmad', 'Finance', 'Mid-Senior');

employee.prototype.render = function () {
  document.write(
    `<p>${this.id}</p>``<p>${this.fullName}</p>``<p>${this.department}</p>``<p>${this.level}</p>``<p>${this.salary}</p>`
  );
};

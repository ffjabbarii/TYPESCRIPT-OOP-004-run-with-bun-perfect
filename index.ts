enum Profession {
  DEVELOPPER = "developer",
  ACCOUNTANT = 'accountant',
  DOCTOR = 'doctor',
  MANAGER = 'manager'
}

interface IHuman {
  _firstName: string;
  _lastName: string;
  _age: number;
}

class Person implements IHuman {
  _firstName: string;
  _lastName: string;
  _age: number

  constructor(firstName: string, lastName: string, age: number) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
  }
  getFullName(): string {
      return `${this._firstName} ${this._lastName}`;
  }
}

class Employee extends Person {
  private profession : Profession
  constructor(firstName: string, lastName: string, age: number, profession: Profession) {
    super(firstName, lastName, age);
    this.profession = profession
  }
}

let employee = new Employee('Mariam', 'Movsisyan',21, Profession.DEVELOPPER);
console.log(employee.getFullName());
console.log(employee);


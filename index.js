var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Profession;
(function (Profession) {
    Profession["DEVELOPPER"] = "developer";
    Profession["ACCOUNTANT"] = "accountant";
    Profession["DOCTOR"] = "doctor";
    Profession["MANAGER"] = "manager";
})(Profession || (Profession = {}));
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, profession) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.profession = profession;
        return _this;
    }
    return Employee;
}(Person));
var employee = new Employee('Mariam', 'Movsisyan', 21, Profession.DEVELOPPER);
console.log(employee.getFullName());
console.log(employee);

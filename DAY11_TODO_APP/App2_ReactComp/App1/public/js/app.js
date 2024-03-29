"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Inheritance
var Person = function () {
  function Person(name, age, address) {
    _classCallCheck(this, Person);

    console.log("inside in Person constructor");
    this.name = name;
    this.age = age;
    this.address = address;
  }

  _createClass(Person, [{
    key: "printInfo",
    value: function printInfo() {
      console.log("Name : " + this.name);
      console.log("Age : " + this.age);
      console.log("Address : " + this.address);
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(rollno, name, age, address) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age, address));

    _this.rollno = rollno;
    return _this;
  }

  _createClass(Student, [{
    key: "printInfo",
    value: function printInfo() {
      _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "printInfo", this).call(this);
      console.log("Roll No : " + this.rollno);
    }
  }]);

  return Student;
}(Person);

// const s1 = new Person("Person1", 23, "amravati")

// s1.printInfo()

var student1 = new Student(23, "person1", 45, "Amravati");
student1.printInfo();

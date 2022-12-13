"use strict";
let cl = console.log;
let person;
person = {
    name: "Jhon",
    age: 33,
    greet: function (pharse) {
        cl(`${pharse} ${this.name}`);
    }
};
person.greet("Hello There,  I m ");
class Person {
    constructor(age, n) {
        this.age = age;
        this.name = n;
    }
    greet(pharse) {
        cl(`${pharse} ${this.name}`);
    }
}
let p = new Person(44, "july");
cl(p);
let add = (n1, n2) => n1 + n2;
//# sourceMappingURL=app.js.map
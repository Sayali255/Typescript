"use strict";
let cl = console.log;
class Department {
    constructor(dName, dId) {
        this.dName = dName;
        this.dId = dId;
        this.empArray = [];
    }
    describe() {
        cl(`This is department ${this.dName} and Id is${this.dId}`);
    }
    addEmp(emp) {
        this.empArray.push(emp);
    }
    printNoEmp() {
        cl(`Number of Emply are ${this.empArray.length}`);
    }
}
let accounting = new Department("Accounting", "D-123");
cl(accounting);
accounting.addEmp("Jhon Doe");
accounting.addEmp("july Doe");
cl(accounting);
accounting.printNoEmp();
//# sourceMappingURL=app.js.map
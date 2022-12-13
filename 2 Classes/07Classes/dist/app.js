"use strict";
let cl = console.log;
class Department {
    constructor(departname, id) {
        this.dname = departname;
        this.dId = id;
    }
    describe() {
        cl(`This is department ${this.dname} and Id is${this.dId}`);
    }
}
let accounting = new Department("Accounting", "D-123");
cl(accounting);
cl(accounting.dId);
cl(accounting.dname);
cl(accounting.describe());
let newAccounting = {
    describe: accounting.describe,
    dname: "jhon",
    dId: "d-888",
};
newAccounting.describe();
//# sourceMappingURL=app.js.map
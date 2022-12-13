"use strict";
let cl = console.log;
class Department {
    constructor(dName, dId) {
        this.dName = dName;
        this.dId = dId;
        this.empArray = [];
    }
    addEmp(emp) {
        this.empArray.push(emp);
    }
    printNoEmp() {
        cl(`Number of Emply are ${this.empArray.length}`);
    }
}
Department.satrtdate = 1234567890;
class AccountingDepartment extends Department {
    constructor(dId, finaceReport) {
        super("Accounting", dId);
        this.dId = dId;
        this.finaceReport = finaceReport;
        this.lastReoprt = finaceReport[finaceReport.length - 1];
    }
    static getinstance(id) {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDepartment(id, []);
            return this.instance;
        }
    }
    describe() {
    }
    addFinanceReport(report) {
        this.finaceReport.push(report);
    }
    printAllReport() {
        cl(this.finaceReport.join(", "));
    }
    addEmp(emp) {
        if (emp === "jhony") {
            return;
        }
        else {
            this.empArray.push(emp);
        }
    }
}
let a = AccountingDepartment.getinstance("D-8888");
cl(a);
//# sourceMappingURL=app.js.map
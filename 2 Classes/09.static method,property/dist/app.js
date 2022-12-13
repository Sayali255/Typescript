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
    static createEmp(empname) {
        return { name: empname };
    }
}
class AccountingDepartment extends Department {
    constructor(dId, finaceReport) {
        super("Accounting", dId);
        this.dId = dId;
        this.finaceReport = finaceReport;
        this.lastReoprt = finaceReport[finaceReport.length - 1];
    }
    get AccessLastreport() {
        if (this.lastReoprt) {
            return this.lastReoprt;
        }
        else {
            throw new Error(`No report available`);
        }
    }
    set AccessLastReport(value) {
        if (!value) {
            throw new Error(`plz provide a proper value`);
        }
        else {
            this.finaceReport[this.finaceReport.length - 1] = value;
            this.lastReoprt = value;
        }
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
let accounting = new AccountingDepartment("D-123", ["Salary slips"]);
cl(accounting);
accounting.describe();
accounting.addEmp("jhom");
accounting.addFinanceReport("TDS");
accounting.printAllReport();
Department.createEmp("july");
//# sourceMappingURL=app.js.map
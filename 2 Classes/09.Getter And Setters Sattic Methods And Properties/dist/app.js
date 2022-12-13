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
class AccountingDepartment extends Department {
    constructor(dId, finaceReport) {
        super("Accounting", dId);
        this.dId = dId;
        this.finaceReport = finaceReport;
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
let accounting = new AccountingDepartment("D-123", []);
cl(accounting);
accounting.describe();
accounting.addEmp("jhom");
accounting.addFinanceReport("TDS");
accounting.printAllReport();
//# sourceMappingURL=app.js.map
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
}
let accounting = new AccountingDepartment("D-123", []);
cl(accounting);
accounting.describe();
accounting.addEmp("jhom");
accounting.addFinanceReport("TDS");
accounting.printAllReport();
class SupportDepartment extends Department {
    constructor(pId, ticketArray) {
        super("Support", pId);
        this.ticketArray = ticketArray;
    }
    addTicket(ticket) {
        this.ticketArray.push(ticket);
    }
    printAllTickets() {
        cl(this.ticketArray);
    }
}
let s = new SupportDepartment("D-888", []);
cl(s);
s.addEmp("Rachel");
cl(s);
s.describe();
cl(s);
s.printNoEmp();
cl(s);
s.addTicket;
cl(s);
s.printAllTickets;
cl(s);
//# sourceMappingURL=app.js.map
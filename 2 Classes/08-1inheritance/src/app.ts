let cl = console.log;


//  

class Department {

    private empArray : string[] = []
    constructor( public dName:string,  protected readonly dId:string){
    
    } 

    describe(){
        cl(`This is department ${this.dName} and Id is${this.dId}`)
    }
   
    addEmp(emp : string){
            this.empArray.push(emp)
    }

    printNoEmp(){
        cl(`Number of Emply are ${this.empArray.length}`)
    }
    
}


 class AccountingDepartment extends Department {
    constructor( readonly dId:string, public readonly finaceReport:string[]){
             super("Accounting", dId)   //constructor of parent (Department)
    } 

    addFinanceReport(report:string){
        this.finaceReport.push(report)
    }

    printAllReport(){
        cl(this.finaceReport.join(", "))
    }
 }

  let accounting = new AccountingDepartment("D-123", []);
    cl(accounting);

    accounting.describe()
    accounting.addEmp("jhom")
    accounting.addFinanceReport("TDS")
    accounting.printAllReport ()


    class SupportDepartment extends Department{

        constructor(pId:string, private ticketArray:string[]){
            super("Support", pId)
        }

        addTicket(ticket:string){
            this.ticketArray.push(ticket)
        }


        printAllTickets(){
            cl(this.ticketArray)
        }
    }

    let s = new SupportDepartment("D-888",[])
    cl(s)
        s.addEmp("Rachel")
    cl(s)
        s.describe()
    cl(s)
        s.printNoEmp()
    cl(s)
        s.addTicket
    cl(s)
    s.printAllTickets
    cl(s)
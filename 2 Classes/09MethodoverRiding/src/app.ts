let cl = console.log;




class Department {

    protected empArray : string[] = []
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
    addEmp(emp: string): void {
        if(emp === "jhony"){
            return
        }else{
            this.empArray.push(emp)
        }
    }
 }

  let accounting = new AccountingDepartment("D-123", []);
    cl(accounting);

    accounting.describe()
    accounting.addEmp("jhom")
    accounting.addFinanceReport("TDS")
    accounting.printAllReport ()


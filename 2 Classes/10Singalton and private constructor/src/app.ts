let cl = console.log;


 abstract class Department {
   public  static startdate : number = 1234567890;
    protected empArray : string[] = []
    constructor( public dName:string,  protected readonly dId:string){
    
    } 

    // describe():void{
    //     cl(`This is department ${this.dName} and Id is${this.dId}`)
    // }
   
    abstract describe():void;
    
    addEmp(emp : string){
            this.empArray.push(emp)
    }

    printNoEmp(){
        cl(`Number of Emply are ${this.empArray.length}`)
    }
   
}




 class AccountingDepartment extends Department {
    private lastReoprt : string
    static instance : AccountingDepartment;
    constructor( readonly dId:string, public readonly finaceReport:string[]){
             super("Accounting", dId)   //constructor of parent (Department)
             this.lastReoprt = finaceReport[finaceReport.length - 1]
    } 
    
    static getinstance(id:string){
       if(AccountingDepartment.instance){
          return this.instance
       }else{
            this.instance = new AccountingDepartment(id,[])
            return this.instance;
       }
    }
    describe(): void {
        
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


let a = AccountingDepartment.getinstance("D-8888")
cl(a)
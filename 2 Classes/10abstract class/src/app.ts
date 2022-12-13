let cl = console.log;




 abstract class Department {
   public  static satrtdate : number = 1234567890;
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
    constructor( readonly dId:string, public readonly finaceReport:string[]){
             super("Accounting", dId)   //constructor of parent (Department)
             this.lastReoprt = finaceReport[finaceReport.length - 1]
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



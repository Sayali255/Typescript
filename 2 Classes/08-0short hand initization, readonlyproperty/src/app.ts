let cl = console.log;


// class>> it is blueprint for creating instances

// shorthand initialisation
//  readonly properties >> which can not be Re-initized and it get initized while creating instance/object.


class Department {

    // dName : string;  //field
    // dId : string;
    private empArray : string[] = []
    constructor( public dName:string, private readonly dId:string){
        // this>>Department
    //    this.dname = dName;
    //    this.dId = dId
    } 


    describe(){
        cl(`This is department ${this.dName} and Id is${this.dId}`)
    }
   
    addEmp(emp : string){
        // validation Task Done
        this.empArray.push(emp)
    }

    printNoEmp(){
        cl(`Number of Emply are ${this.empArray.length}`)
    }
    
}


let accounting = new Department ("Accounting", "D-123");
cl(accounting)


accounting.addEmp("Jhon Doe");
accounting.addEmp("july Doe");
cl(accounting);

accounting.printNoEmp()

// accounting.empArray[1] = "July" // stop accessing outside we use private
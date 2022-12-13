let cl = console.log;


// class>> it is blueprint for creating instances


class Department {

    dname : string;  //field
    dId : string;
    private empArray : string[] = []
    constructor(departname:string, id:string){
        // this>>Department
       this.dname = departname;
       this.dId = id
    }


    describe(){
        cl(`This is department ${this.dname} and Id is${this.dId}`)
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
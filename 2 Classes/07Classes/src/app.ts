let cl = console.log;


// class>> it is blueprint for creating instances


class Department {

    dname : string;  //field
    dId : string;
  
    constructor(departname:string, id:string){
        // this>>Department
       this.dname = departname;
       this.dId = id
    }


    describe(){
        cl(`This is department ${this.dname} and Id is${this.dId}`)
    }

    
}


let accounting = new Department ("Accounting", "D-123");
cl(accounting)
cl(accounting.dId)
cl(accounting.dname)
cl(accounting.describe())


// let newAccounting: Department = {describe : accounting.describe}   // undefined


let newAccounting: Department = {
    
    describe: accounting.describe,
    dname: "jhon",
    dId: "d-888",

   // {this.dName + this.dId}

}
newAccounting.describe();



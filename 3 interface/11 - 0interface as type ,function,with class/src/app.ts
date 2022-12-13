let cl = console.log;

// interface describe >> it defines structure of data.
 // we can not use interface as a blueprint for creating instances/objects


interface Iperson{
    name :string,
    age:number,
    greet(pharse:string):void 
}

 let person : Iperson;

 person ={
    name: "Jhon",
    age: 33,
    greet :function(pharse:string){
        cl(`${pharse} ${this.name}`)
    }
 }

  person.greet("Hello There,  I m ")



//   ###########################################################################################
   

interface Iname {
   readonly name:string,
   nickname ? : string; 
}

  interface Igreetable extends Iname {
     name : string,
     greet(pharse:string) :void
  }

  class Person implements Igreetable{
    age: number ;
    name: string ;
    constructor(age:number, n:string){
        this.age = age
        this.name = n
    }
    greet (pharse:string) {
        cl(`${pharse} ${this.name}`)
    }
  }

  let p = new Person(44,"july")
  cl(p)



//   ###########################################################################################

// interface as a function

// type addFun = (n1:number, n2:number) => number

interface addFun {
    // parameter structure : function return type
    (x: number , y: number)  :number
}

let add: addFun = (n1:number, n2:number)=> n1 + n2
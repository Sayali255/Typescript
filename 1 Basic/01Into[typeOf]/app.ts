let cl = console.log;

// typescript is a superset of javascript.javascript is loosely bonded[developed by microsoft]

// we have to always tell ts that whatever we get from html is not null so we use "1" sign after getting that element into ts file 

// and for getting value from input element we mention in typescript that it is a HTMLInputElement.


let num1 = document.getElementById("num1")! as HTMLInputElement;
let num2 = document.getElementById("num2")! as HTMLInputElement;
let btn = document.getElementById("btn")!;


let add = (n1:number,n2:number) => {
    if(typeof n1 === "number"  && typeof n2 === "number"){
        return n1 + n2
    }else{
        throw new Error("Invalid Inputs");
        
    }
}



btn.addEventListener('click', () => {
    cl(add(+num1.value, +num2.value)) 
})

// input values are always in string so we have to convert into number [+,parseInt]


let x:number = 10;
  cl(x, typeof x);  // 'number'.

//   x = 'Hello' 
 //  throw error Type 'string' is not assignable to type 'number'.

    let p;  // js = undefined
    cl(p)   // ts = any

 // any {if we want to store any datatype in variable then we use any}

 let value :any = 40;
   value = true;
   value = 'hello';
   value = {
        fname : "jhon"
   }

   cl(typeof value);



   /// interface [ it define the structure of object]

   interface Iperson  {
        fname : string;
        lname : string;
        email : string;
        contact : number
   }

    let p1:Iperson = {
        fname: "jhon", 
        lname: "doe", 
        email:"j@j.co", 
        contact: 2345
    } 
     

    interface Iperson2 {
        fname : string;
        lname : string;
        age   : number;
        email : string;
        contact : number;
        skills:  string[];
        hobbies: string[]
    }
    let p2:Iperson2 = {
        fname: "july", 
        lname: "doe",
        age: 2, 
        email:"j@jly.co", 
        contact: 2345,
        skills: ["html", "css","js","ts","angular"],
        hobbies: ["cooking","coding"]
    } 
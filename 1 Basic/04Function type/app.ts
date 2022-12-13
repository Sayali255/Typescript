let cl = console.log;

// Function return Type

 function adiition (n1:number, n2:number) : number{
    return n1 + n2
 }


 function combine (str1:string, str2:string) :string{
    return `${str1} ${str2}`
 }


// ########################################################################

 // void >> A Function which is not return something{not use return keyword}


 function adiition2 (n1:number, n2:number):void{
     cl(n1 + n2)
 }


 // if we use "any" not give error bcz return value is "undefined";

//  function adiition2 (n1:number, n2:number):any{
//     cl(n1 + n2)
//     // return undefined
// }




// ########################################################################


function printObj(): {fname: string, lname: string}{
    return{
        fname : "Jhon",
        lname : "Doe"
    }
}



// function printObj(): {fname: string, lname: string}{
//    return{
//        fname : "Jhon",
//        lname : "Doe",
//        age: 22 // error
//    }
// }




// ########################################################################

// function as a Type


type FunctionType = (num1:number,n2:number) => number;

function add8 (n1:number, n2:number):number{
    return n1 + n2
}

let addition88:FunctionType = add8;
cl(addition88(100,200))





// ########################################################################

type combine = number | string;

function combined(n1:combine, n2:combine){
    if(typeof n1 === "number" && typeof n2 === "number"){
        return n1 + n2
    }else{
        return n1.toString() + n2.toString()
    }
}






// ########################################################################

// unknown

let userInput : unknown;
let username :  string;

userInput = 12345678;
userInput ="qwerty";

if(typeof userInput === "string"){
    username = userInput
    cl(username)
}

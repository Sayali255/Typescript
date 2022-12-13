let cl = console.log;

// union type 
 
type comb = number| string

type uniontype = "as-number" | "as-string"

  function combinee(n1:comb, n2:comb, resultConversion:uniontype):comb{
     let result;
     if(typeof n1 === "number" && typeof n2 === "number"){
            result = n1 + n2
     }else{
             result = n1.toString() + n2.toString()
     }
     if(resultConversion === "as-number"){
            result = +result 
     }else{
            result = result.toString()
     }
     return result;
  }

 let addition = combinee(20,30,"as-string");
 cl(addition, typeof addition);




 // literal type >> value and datatype are same. we assign value as an datatype


    const x = 5;
    const greet = "hello typescript";

    let y : 5;
        y = 5;
        // y = 10;   //'10' is not assignable to type '5'

 let p = 4 | 6
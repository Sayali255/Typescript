let cl = console.log;



// Find Out return type of function calculate 


function add (n1:number,n2:number):number{
    return n1 + n2
}


function multi (n1:number,n2:number):number{
    return n1 * n2
}


function sub (n1:number,n2:number):number{
    return n1 - n2
}

function div (n1:number,n2:number):number{
    return n1 / n2
}


function calculate (n1:number, n2:number, cb:(n1:number,n2:number)=>number):number{
    return cb(n1 ,n2)
}



    cl(calculate(20,30,add));
    cl(calculate(20,30,sub));
    cl(calculate(20,30,multi));
    cl(calculate(20,30,div));




    // ##################################################################################




type operationfunction = (n1:number, n2:number) => number


// function add100 (n1:number,n2:number):number{
//     return n1 + n2
// }

const add100 :operationfunction = (n1:number, n2:number) => n1 + n2


const sub100 :operationfunction = (n1:number, n2:number) => n1 - n2


const multi100 :operationfunction =(n1, n2) => n1 * n2

const div100 :operationfunction =(n1, n2) => n1 / n2


type calciFun = (n1:number, n2:number,cb:operationfunction) => number;

const calci:calciFun = (n1:number, n2:number, cb:operationfunction) => cb(n1, n2)

cl(calci(10,20, add100))
cl(calci(10,20, div100))
cl(calci(10,20, sub100))
cl(calci(10,20, multi100))
var cl = console.log;
// Function return Type
function adiition(n1, n2) {
    return n1 + n2;
}
function combine(str1, str2) {
    return "".concat(str1, " ").concat(str2);
}
// ########################################################################
// void >> A Function which is not return something{not use return keyword}
function adiition2(n1, n2) {
    cl(n1 + n2);
}
// if we use "any" not give error bcz return value is "undefined";
//  function adiition2 (n1:number, n2:number):any{
//     cl(n1 + n2)
//     // return undefined
// }
// ########################################################################
function printObj() {
    return {
        fname: "Jhon",
        lname: "Doe"
    };
}
function add8(n1, n2) {
    return n1 + n2;
}
var addition88 = add8;
cl(addition88(100, 200));
function combined(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
// ########################################################################
// unknown
var userInput;
var username;
userInput = 12345678;
userInput = "qwerty";
if (typeof userInput === "string") {
    username = userInput;
    cl(username);
}

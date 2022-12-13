var cl = console.log;
function combinee(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultConversion === "as-number") {
        result = +result;
    }
    else {
        result = result.toString();
    }
    return result;
}
var addition = combinee(20, 30, "as-string");
cl(addition, typeof addition);
// literal type >> value and datatype are same we assign value as an datatype
var x = 5;
var greet = "hello typescript";
var y;
y = 5;
// y = 10;   //'10' is not assignable to type '5'
var p = 4 | 6;

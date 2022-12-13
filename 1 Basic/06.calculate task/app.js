var cl = console.log;
// Find Out return type of function calculate 
function add(n1, n2) {
    return n1 + n2;
}
function multi(n1, n2) {
    return n1 * n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function div(n1, n2) {
    return n1 / n2;
}
function calculate(num1, num2, cb) {
    return cb(num1, num2);
}
cl(calculate(20, 30, add));
cl(calculate(20, 30, sub));
cl(calculate(20, 30, multi));
cl(calculate(20, 30, div));

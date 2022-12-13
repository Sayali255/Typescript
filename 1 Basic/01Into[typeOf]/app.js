var cl = console.log;
// typescript is a superset of javascript.javascript is loosely bonded[developed by microsoft]
// we have to always tell ts that whatever we get from html is not null so we use "1" sign after getting that element into ts file 
// and for getting value from input element we mention in typescript that it is a HTMLInputElement.
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn = document.getElementById("btn");
var add = function (n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        return n1 + n2;
    }
    else {
        throw new Error("Invalid Inputs");
    }
};
btn.addEventListener('click', function () {
    cl(add(+num1.value, +num2.value));
});
// input values are always in string so we have to convert into number [+,parseInt]
var x = 10;
cl(x, typeof x); // 'number'.
//   x = 'Hello' 
//  throw error Type 'string' is not assignable to type 'number'.
var p; // js = undefined
cl(p); // ts = any
// any {if we want to store any datatype in variable then we use any}
var value = 40;
value = true;
value = 'hello';
value = {
    fname: "jhon"
};
cl(typeof value);
var p1 = {
    fname: "jhon",
    lname: "doe",
    email: "j@j.co",
    contact: 2345
};
var p2 = {
    fname: "july",
    lname: "doe",
    age: 2,
    email: "j@jly.co",
    contact: 2345,
    skills: ["html", "css", "js", "ts", "angular"],
    hobbies: ["cooking", "coding"]
};

var cl = console.log;
// type Inference
// when we declared any declartaion and automatically according to that value datatype will assign that behaviour of ts in type inference.
var x = 10;
cl(typeof x); // number
var y = 100;
var p = {
    fname: "jhon",
    lname: "doe",
    age: 22
};
cl(p);
function add(n1, n2, showresult, pharse) {
    if (showresult === true) {
        var result = n1 + n2;
        cl(pharse + result);
    }
    else {
        return n1 + n2;
    }
}
var r = add(10, 20, true, "The Addition is ");
cl(r);
var person = {
    fname: "jhon",
    lname: "doe",
    email: "j@j.com",
    hobbies: ["coding", "cooking"],
    skills: ["html", "css", "js", "ts", "angular"]
};
cl(person);
//   cl(person.nickname)  // 'nickname' does not exist 
// delete opertor we can use only on optional property
var skills = ["html", "css", "js", "ts", "angular"];
for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
    var skill = skills_1[_i];
    // cl(skill);
    cl(skill.toUpperCase());
}
skills.push("100"); //['html', 'css', 'js', 'ts', 'angular', '100']
//  skills.push(100); //number' is not assignable to parameter of type 'string'

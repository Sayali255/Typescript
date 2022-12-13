var cl = console.log;
var user = {
    fname: "jhon",
    lname: "doe",
    email: "j@j.com",
    hobbies: ["coding", "cooking"],
    skills: ["html", "css", "js", "ts", "angular"],
    role: ["candidate", 1]
};
cl(user.role.push(120)); // it will added not give error to push dont use push on tuples
cl(user);
//  person.[0]= 1 // error
// Enums [gives suggestions]
var Role;
(function (Role) {
    Role[Role["Candidate"] = 100] = "Candidate";
    Role[Role["Hr_Admin"] = 101] = "Hr_Admin";
    Role[Role["SuperAdmin"] = 102] = "SuperAdmin";
})(Role || (Role = {}));
;
// enum Role {Candidate = "C", Hr_Admin = "Hr" , SuperAdmin ="Sa"}
// enum Role {Candidate, Hr_Admin , SuperAdmin}
// Candidate, Hr-Admin, SuperAdmin
var person = {
    fname: "jhon",
    lname: "doe",
    email: "jhon@gmail.com",
    role: Role.Candidate
};
cl(Role.Hr_Admin);
if (person.role === Role.Candidate) {
    cl("Redirect to Candidate Dashbord");
}

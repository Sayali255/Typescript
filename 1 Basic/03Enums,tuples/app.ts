let cl = console.log;



  // tuples [ array of fixed length][error in tuples not give error on push ,method]
  // we want fixed length and same sequence
  
  interface Iperson {
   fname: string;
   lname: string;
   email: string;
   hobbies: string[];
   skills: string[];
   // role: (string | number)[];
   role: [string , number];
}

  let user:Iperson = {
   fname:"jhon",
   lname: "doe",
   email: "j@j.com",
   hobbies : ["coding","cooking"],
   skills : ["html", "css","js","ts", "angular"],
   role : ["candidate", 1]
 }

 cl(user.role.push(120)) // it will added not give error to push dont use push on tuples
 cl(user)
//  person.[0]= 1 // error




// Enums [gives suggestions]

enum Role {Candidate = 100, Hr_Admin , SuperAdmin};
// enum Role {Candidate = "C", Hr_Admin = "Hr" , SuperAdmin ="Sa"}
// enum Role {Candidate, Hr_Admin , SuperAdmin}

// Candidate, Hr-Admin, SuperAdmin
let person = {
    fname :"jhon",
    lname : "doe",
    email :"jhon@gmail.com",
    role : Role.Candidate
}
       
    cl(Role.Hr_Admin);

if(person.role === Role.Candidate){
    cl(`Redirect to Candidate Dashbord`);
}


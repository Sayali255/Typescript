let cl = console.log;

  // type Inference
   
 // when we declared any declartaion and automatically according to that value datatype will assign that behaviour of ts is type inference.

   let x = 10;
  cl(typeof x) // number

  let y:number = 100;


  let p: {
    fname: "jhon";
    lname: "doe";
    age: 22;
} = {
    fname: "jhon",
    lname: "doe",
    age: 22
  }
   cl(p)


  function add(n1:number,n2:number,showresult:boolean,pharse : string){
     if(showresult === true){
        let result = n1 + n2
         cl(pharse + result)
     }else{
        return n1 + n2
     }
  }
   
 let r =  add(10,20,true,"The Addition is ");
  cl(r)



  ////////////////////////object////////////////////////////////
//   type aliase = type person{}

// we can use interface,type,class as a datatype
// diff b/w class and interface 
 // we use "class" when ther is a method present.
 // when we want only as a datatype then we use interface.
 

// class  Iperson  {
//     fname: string;
//     lname: string;
//     email: string;
//     hobbies: string[];
//     skills: string[];
//     age? : number
//      getfullname (){

//     }
//  }



interface  Iperson  {
    fname: string;
    lname: string;
    email: string;
    hobbies: string[];
    skills: string[];
    age? : number
}


type  Tperson = {
    fname: string,
    lname: string,
    email: string,
    hobbies: string[],
    skills: string[],
    age? : number
}

let person : Tperson ={
    fname:"jhon",
    lname: "doe",
    email: "j@j.com",
    hobbies : ["coding","cooking"],
    skills : ["html", "css","js","ts", "angular"]
  }
  cl(person)
//   cl(person.nickname)  // 'nickname' does not exist 
// delete opertor we can use only on optional property




let  skills :string[] = ["html", "css","js","ts", "angular"];

 for(let skill of skills){
    // cl(skill);
    cl(skill.toUpperCase());
 }
  skills.push("100"); //['html', 'css', 'js', 'ts', 'angular', '100']
//  skills.push(100); //number' is not assignable to parameter of type 'string'
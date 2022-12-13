let cl = console.log;


  //  ################################ // Intersection #####################################  //
  // Comomon property of both

   type Emply = {
      name: string;
      startdate : Date
    }

    type Admin = {
      name:string;
      privilages: string []
    }


    type ElevetedEmp = Emply & Admin

    let e1 : ElevetedEmp;

    e1 ={
      name: "jhon",
      startdate : new Date(2022, 8,12),
      privilages : []
    }


  //  ################################ // Union type #####################################  //
// only one will be selected either this or that [emply or admin]

  type newEmply = Emplyy | Adminn;

  type Emplyy = {
    name: string;
    startdate : Date
  }

  type Adminn = {
    name:string;
    privilages: string []
  }

 
  let obj1:Emplyy = {
    name: "Jhon",
    startdate : new Date(),
  }

let obj2:Adminn = {
    name:"Rachel",
    privilages: ["Senior"],
  }

 let  printEmpInfo = (e : newEmply) => {
     cl(e.name);
     if("startdate" in e){
        cl(e.startdate)
     }
     if("privilages" in e){
      cl(e.privilages)
     }
  }


  printEmpInfo(obj1)
  cl(`############# Second obj ##########`)
  printEmpInfo(obj2)


  // ################################################


 type combineable = number | string;

 
 let comb = (num1:combineable,num2:combineable) => {
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }else{
        return num1.toString() +  num2.toString()
   
    }
 }

 cl(comb(20,30))
 cl(comb("20","30"))


  // ################################################



  class Car {
    drive(){
        cl(`Driving A Car`)
    }
  }

  class Truck {
    drive(){
        cl(`Driving A Truck`)
    }
    loadCargo(amount:number){
      cl(`loadCargo of :${amount}`)
    }
  }


  let c = new Car ();
  let t = new Truck ();


  type vehical = Car | Truck;


  function whichvehical (v:vehical){
    v.drive();

    //  if("loadCargo" in v){
    //    v.loadCargo(100)
    //    cl(`Truck`)
    //  }

    
    if(v instanceof Truck){
      v.loadCargo(100)
      cl(`Truck`)
    }
  }

  whichvehical(c)
  whichvehical(t)



  // ################################################


  interface Ibird{
    flyingSpeed :number
  }

  
  interface Ihorse{
    runningSpeed :number
  }
   

  let  bird = {
    flyingSpeed : 8
  }

  
  let horse = {
    runningSpeed : 800
  }
   

  type  animal = Ibird | Ihorse
   let  moveAnimal = (ani:animal) =>{
      if('runningSpeed' in ani ){
         cl(`Horse`)
      }if('flyingSpeed' in ani ){
         cl(`Bird`)
      }
   }

   cl(bird)
   cl(horse)


  // ################################################


  type candidate = {
    name : string,
    city : string,
    profile :string
  }

  type maneger = {
    name: string,
    candidateProfile : string
  }

  type hr = {
    name: string,
    offerletter : string
  }


  type job = candidate | maneger | hr


  let candidate = {
    name : "Jhon",
    city : 'pune',
    profile :' Angular devloper'
  }

  let maneger = {
    name: 'monica',
    candidateProfile : 'checked'
  }

  let hr = {
  name: 'Gitanjali',
  offerletter : 'passed'
  }


 let jobStatus = (j:job) => {
        cl(j.name)
        if("city" in j){
          cl(j.city)
        }
        if("candidateProfile" in j){
            cl(j.candidateProfile)
        }
        if("offerletter" in j){
          cl(j.offerletter)
      }
  }
    

  cl(jobStatus(candidate))
  cl(jobStatus(maneger))
  cl(jobStatus(hr))
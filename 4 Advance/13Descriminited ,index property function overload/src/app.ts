let cl = console.log;



  interface Ibird{
    type : "bird" ;
    flyingSpeed :number
  }

  
  interface Ihorse{
    type : "horse";
    runningSpeed :number 
  }

    type animal = Ibird | Ihorse


  let ani1:Ibird = {
    type : "bird" ,
    flyingSpeed : 8
  }

  
  let ani2:Ihorse  = {
    type : "horse",
    runningSpeed : 800
  }
   


  //  let  moveAnimal = (ani:animal) =>{
  //     if('runningSpeed' in ani ){
  //        cl(`Horse`)
  //     }if('flyingSpeed' in ani ){
  //        cl(`Bird`)
  //     }
  //  }
    

  // Descriminited type

  function moveAnimal (ani : animal ){
     if(ani.type === 'bird'){
       cl(`Moving with a speed of bird ${ani.flyingSpeed}`)
     }
     if(ani.type === 'horse'){
      cl(`Moving with a speed of horse ${ani.runningSpeed}`)
    }
  }

  function movAni (ani : animal){
    let speed ;
     switch (ani.type){
      case  'bird' :
        speed = ani.flyingSpeed;
        break;
        case 'horse' :
          speed = ani.runningSpeed;
     }
     cl(`moving with a speed of ${speed}`)
  }
 
  movAni(ani2);
  movAni(ani1);
  moveAnimal(ani1);
  moveAnimal(ani2);
  moveAnimal({type: 'bird' , flyingSpeed:8888});



  //index property


// interface IerrorContainer{
//   email : string;
//   password : string;
//   userName : string;
// }

  interface IerrorContainer {
     [property:string] :string
  }
 let response : IerrorContainer = {
     email: 'j@j.com'
 }



 // function overload

 type combinable = number | string;

 function add(n1:number,n2:number):number
 function add(n1:string,n2:number):number
 function add(n1:string,n2:string):string
 function add(n1:number,n2:string):string
 function add(n1:combinable, n2:combinable){
   if(typeof n1 === 'number' && typeof n2 === 'number'){
      return n1 + n2
   }else{
      return n1.toLocaleString() + n2
   }
 }

 cl(add(10,20))      // add(n1: number, n2: number): number (+3 overloads)
 cl(add('10',20))   // add(n1: string, n2: number): number (+3 overloads)
 cl(add(10,'20'))   //add(n1: number, n2: string): number (+3 overloads)
 cl(add('10','20'))  //add(n1: string, n2: string): number (+3 overloads)
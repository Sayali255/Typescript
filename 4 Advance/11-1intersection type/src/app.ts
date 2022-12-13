let cl = console.log;

    type x = number | string

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



    // ###########################################################################################


    // typecasting

    //  const info = document.getElementById("info")! as HTMLInputElement
     const info = <HTMLInputElement> document.getElementById("info")! 

     info.value ="july"
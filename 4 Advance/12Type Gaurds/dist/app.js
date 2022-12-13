"use strict";
let cl = console.log;
let e1;
e1 = {
    name: "jhon",
    startdate: new Date(2022, 8, 12),
    privilages: []
};
let obj1 = {
    name: "Jhon",
    startdate: new Date(),
};
let obj2 = {
    name: "Rachel",
    privilages: ["Senior"],
};
let printEmpInfo = (e) => {
    cl(e.name);
    if ("startdate" in e) {
        cl(e.startdate);
    }
    if ("privilages" in e) {
        cl(e.privilages);
    }
};
printEmpInfo(obj1);
cl(`############# Second obj ##########`);
printEmpInfo(obj2);
let comb = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
cl(comb(20, 30));
cl(comb("20", "30"));
class Car {
    drive() {
        cl(`Driving A Car`);
    }
}
class Truck {
    drive() {
        cl(`Driving A Truck`);
    }
    loadCargo(amount) {
        cl(`loadCargo of :${amount}`);
    }
}
let c = new Car();
let t = new Truck();
function whichvehical(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadCargo(100);
        cl(`Truck`);
    }
}
whichvehical(c);
whichvehical(t);
let bird = {
    flyingSpeed: 8
};
let horse = {
    runningSpeed: 800
};
let moveAnimal = (ani) => {
    if ('runningSpeed' in ani) {
        cl(`Horse`);
    }
    if ('flyingSpeed' in ani) {
        cl(`Bird`);
    }
};
cl(bird);
cl(horse);
let candidate = {
    name: "Jhon",
    city: 'pune',
    profile: ' Angular devloper'
};
let maneger = {
    name: 'monica',
    candidateProfile: 'checked'
};
let hr = {
    name: 'Gitanjali',
    offerletter: 'passed'
};
let jobStatus = (j) => {
    cl(j.name);
    if ("city" in j) {
        cl(j.city);
    }
    if ("candidateProfile" in j) {
        cl(j.candidateProfile);
    }
    if ("offerletter" in j) {
        cl(j.offerletter);
    }
};
cl(jobStatus(candidate));
cl(jobStatus(maneger));
cl(jobStatus(hr));
//# sourceMappingURL=app.js.map
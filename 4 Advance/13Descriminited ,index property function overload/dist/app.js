"use strict";
let cl = console.log;
let ani1 = {
    type: "bird",
    flyingSpeed: 8
};
let ani2 = {
    type: "horse",
    runningSpeed: 800
};
function moveAnimal(ani) {
    if (ani.type === 'bird') {
        cl(`Moving with a speed of bird ${ani.flyingSpeed}`);
    }
    if (ani.type === 'horse') {
        cl(`Moving with a speed of horse ${ani.runningSpeed}`);
    }
}
function movAni(ani) {
    let speed;
    switch (ani.type) {
        case 'bird':
            speed = ani.flyingSpeed;
            break;
        case 'horse':
            speed = ani.runningSpeed;
    }
    cl(`moving with a speed of ${speed}`);
}
movAni(ani2);
movAni(ani1);
moveAnimal(ani1);
moveAnimal(ani2);
moveAnimal({ type: 'bird', flyingSpeed: 8888 });
let response = {
    email: 'j@j.com'
};
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toLocaleString() + n2;
    }
}
cl(add(10, 20));
cl(add('10', 20));
cl(add(10, '20'));
cl(add('10', '20'));
//# sourceMappingURL=app.js.map
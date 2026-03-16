// deepcopy work independently , only chnages made to copied object.
let user = {  // user-> object.
    name: "abc",
    age: 27,
    address: { // address-> nested object.
        city: "delhi"
    }
};

let deepcopy=JSON.parse(JSON.stringify(user));
deepcopy.address.city="mumbai";
console.log(user);
console.log(deepcopy); 

//using structuredClone();
let deepcopy1=structuredClone(user);
deepcopy1.address.city="mumbai";
console.log(user);
console.log(deepcopy1);
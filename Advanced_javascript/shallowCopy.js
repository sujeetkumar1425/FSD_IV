let user = {  // user-> object.
    name: "abc",
    age: 27,
    address: { // address-> nested object.
        city: "delhi",
        pincode: 110092
    }
};
let copyuser = { ...user }; //(...) spread opreator-> copy object(user). Memory refrence same in both object. Also called as shallowCopy.
copyuser.address.city = "mumbai";
console.log(user);
console.log(copyuser);

// using obect.assign();
let students={
    marks:{
        science:85
    }
};
// using Object.assign();
let studentCopy=Object.assign({},students);
studentCopy.marks.math=100;
console.log(studentCopy);
console.log(students);

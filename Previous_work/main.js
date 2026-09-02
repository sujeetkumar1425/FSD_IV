let a=5;
const b=5;
var c= 4;
console.log(a,b,c);
if(a==5){
console.log(true);
}

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  default:
    console.log("Invalid day");
}
//Array 
let array=[10,20,30,40,50];
console.log(array);
console.log(array[0]);
console.log(array.length);
array.push(60);
console.log(array);

//object
 let student={
    name:"susheel",
    age:20,
    course:"fsd"
 };
 console.log(student);
 console.log(student.name);
 console.log(student.age);
 console.log(student.course);

 //functions
 function add(p,q){
    return p+q;
 }
console.log(add(5,10));

//arrow function
const multiply =(m,n) => m*n;
console.log(multiply(5,10));

//date
let today=new Date();
console.log(today);

let arr=[1,2,3]; 
let arrcopy={...arr};
arrcopy[0]=10;
console.log(arr); // [1,2,3]
console.log(arrcopy); //{10,2,3} 
// arrow copy vs shallow copy.
// if i make changes in nested object it will reflect in object, but making changes in object directly it only shows chnagews on copy object.
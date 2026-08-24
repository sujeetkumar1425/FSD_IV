const root=document.getElementById("container");
console.log(root);
const bt=document.getElementById("btn");
const btn=document.querySelector("btn");
console.log(bt);
function gtData(){
    alert("hey");
    // fetch('');
    // console.log(alert);
    // window.alert("hey");
}
// gtData();
async function getData() {
    const serverData = await fetch("https://fakestoreapi.com/products");
    const jsonData= await serverData.json();
    
    root.innerHTML=`<h2>${jsonData[0].title}</h2>`
    
    console.log(jsonData);
    
}






bt.addEventListener('click',getData);
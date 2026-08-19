// // // const sum=function (a,b){
// // //     return a+b;
    
// // // }
// // // console.log(sum(23,78));

// // // // function sum (a,b){
// // // //     return a+b;
    
// // // // }
// // // // console.log(sum(23,78));

// // // // arrow funcnt.
// // //  const sum1=(msg)=>{return 20 + 50}
// // //  sum1('hey...');
// // //  console.log(sum1());
 
 
// // // //  callback 
// // // // function sumwithmsg(callbk,msg){
// // // //     const result=callbk(12,40);
    
// // // //     console.log("hey"+msg+result);
    
// // // // }
// // // // sumwithmsg(sum,"ram");

// // // function login(msg,error){
// // //     if(error){
// // //         console.log(error);
// // //     }
// // //     else {
// // //         console.log(msg);
// // //     }
    
// // // }

// // // function loginhandler(username,password,callbk){
// // // //    let username="ehuwgefuhe";
// // // //    let password='124846';
// // //     if(username=="ehuwgefuhe" && password=="124846"){
// // //         callbk("sucess",null);
// // //     }
// // //     else{
// // //         callbk(null,"useranme & passwrod is incorrect.");
// // //     }
// // // }

// // // loginhandler("admin","admin",login);


// // // // call back hell

// // // setTimeout(()=>{})
// // // // sum array: returns sum of numeric items
// // // function sumArray(arr) {
// // //     if (!Array.isArray(arr)) return 0;
// // //     return arr.reduce((acc, v) => acc + (Number(v) || 0), 0);
// // // }

// // // console.log('sumArray([1,2,3,4]) =', sumArray([1,2,3,4]));

// // // console.log("Start");

// // // setTimeout(() => {
// // //     console.log("Step 1");

// // //     setTimeout(() => {
// // //         console.log("Step 2");

// // //         setTimeout(() => {
// // //             console.log("Step 3");

// // //             setTimeout(() => {
// // //                 console.log("Step 4");

// // //                 setTimeout(() => {
// // //                     console.log("Step 5");
// // //                     console.log("End");
// // //                 }, 1000);

// // //             }, 1000);

// // //         }, 1000);

// // //     }, 1000);

// // // }, 1000);

// // // promise








const myPromise = new Promise((resolve, reject) => {
    const username = "sujeet29";
    const password = "1234";

    if (username === "sujeet29" && password === "1234") {
        resolve("Login successful");
    } else {
        reject("Invalid username or password");
    }
});

async function orderReceived() {
    const status = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order received");
        }, 1000);
    });

    return status;
}

async function orderPrepared() {
    const status = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order prepared");
        }, 1000);
    });

    return status;
}

async function orderHandOver() {
    const status = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order handed over");
        }, 1000);
    });

    return status;
}

function generateOTP() {
    return Math.floor( Math.random() * 9000);
}

function verifyOTP(generatedOTP, enteredOTP) {
    return new Promise((resolve, reject) => {
        if (generatedOTP === enteredOTP) {
            resolve("OTP verified");
        } else {
            reject("Invalid OTP");
        }
    });
}

function orderCompleted() {
    console.log("Order successfully completed");
}

async function handleLogin() {
    try {
        const loginStatus = await myPromise;
        console.log(loginStatus);

        const received = await orderReceived();
        console.log(received);

        const prepared = await orderPrepared();
        console.log(prepared);

        const handedOver = await orderHandOver();
        console.log(handedOver);

        const generatedOTP = generateOTP();
        console.log("Generated OTP:", generatedOTP);

        const enteredOTP = generatedOTP;

        const otpStatus = await verifyOTP(
            generatedOTP,
            enteredOTP
        );

        console.log(otpStatus);

        orderCompleted();

    } catch (error) {
        console.log("Process failed:", error);
    }
}

handleLogin();

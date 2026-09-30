function getPersonData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const success = true;
            if (success){
                resolve({id: 123, name: 'Ahmed', Age: 24})
            }else{
                reject('Failed to fetch user Data')
            }
        }, 2000);
    })
}


async function displayUserData() {
    console.log("Start fetching user data...");
    try {
        const user = await getPersonData(); 
        console.log("User data:", user);
    } catch (error) {
        console.error("Error:", error);
    }
}

displayUserData();
console.log("This message runs immediately and is not blocked.");






// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; 
//             if (success) {
//                 resolve({ id: 1, name: "John Doe" });
//             } else {
//                 reject(new Error("Failed to fetch user data"));
//             }
//         }, 3000);
//     });
// }


// async function test() {
//     try {
//         console.log('Start Fetching Data....')
//         const user = await test();
//         console.log("User data:", user);
        
//     } catch (error) {
//         console.log('Error: ', error)
//     }
// }

// test();
// console.log('this message runs imediately before the data is Fetched')
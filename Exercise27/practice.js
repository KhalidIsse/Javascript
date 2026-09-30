function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating success or failure
            if (success) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("Failed to fetch user data");
            }
        }, 3000);
    });
}

fetchUserData()
    .then(data => console.log("User Data:", data))
    .catch(error => console.error("Error:", error));



function getuserInfo(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const success = true
            if (success){
                resolve({id: 23, name: 'abdirashid', age: 40})
            }else{
                reject('Failed to fetch data.')
            }
        }, 3000);
    })
}



getuserInfo()
    .then(data => console.log("User Data:", data))
    .catch(error => console.error("Error:", error));



function meTrying(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const success = true;
            if (success){
                resolve({name: 'Khalid', Age: 10})
            }else{
                reject(" Failed to show Green")
            }
        }, 3000);
    })
}


meTrying()
    .then(data => console.log("User Data:", data))
    .catch(error => console.error("Error:", error));















































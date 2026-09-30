// This file is for testing purposes only 


//  synchronous programing
// function fetchUserDataSync(){
//     alert('fetching user Data....')
//     return {id: 1, name: 'john smith'}
// }


// console.log('printing user data')

// fetchUserDataSync()
// console.log(fetchUserDataSync())

// console.log('user data is printed sucessfully.')


//  assynchronous programming

// function getUserData(callback) {
//     // Simulate waiting for 3 seconds
//     setTimeout(() => {
//         const userData = { id: 1, name: "John Doe" }; // This is the data we get
//         callback(userData); // Once we have the data, we call the callback
//     }, 3000); // 3-second wait
// }

// console.log("Starting to fetch user data...");

// getUserData(function(user) {
//     console.log("Here is the user data:", user); // This runs after 3 seconds
// });

// console.log("This message shows up immediately.");




    

//  Asynchoronous programing test

function getPersonData(callback){
    setTimeout(() => {
        const person = {id: 10, name: 'abdirashid', age: 25 };
        callback(person)
    }, 3000);

}
console.log("Starting to fetch user data...");
// console.log(getPersonData())
getPersonData(function (user){
    console.log('user personal info', user)
})
console.log("This message shows up immediately.");

function getinformation(callback){
    setTimeout(() => {
        const xog = {id: 20, name: 'ina Isse', age: 30}
        callback(xog)
    }, 4000);
}

console.log('Fetching xog shaqsiyeed...')

getinformation(function(shaqsi){
    console.log('user personal info', shaqsi)
})

console.log('Printed before abdirashid info')

function iskuday(callback){
    setTimeout(() => {
        const iskuday = {id: 20, name: 'Hassan', age: 44}
        callback(iskuday)
    }, 6000);
}

console.log('iskuday function data')


iskuday(function(itus){
    console.log('tusinta xogta: ', itus)
})



console.log('Muujinta xogta iskuday is comming.....')
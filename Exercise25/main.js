// Speard Operator
const numbers = [1, 2, 3, 4]

const allNumbers = [...numbers, 5, 6, 7]

console.log(allNumbers)


// Rest Operator


function multiply(...number){
    return number.reduce((total, num) => total * num, 2);
}


console.log(multiply(1, 2, 3)); 




















// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3)); 

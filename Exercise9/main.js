let car = {
    make: "Ferrari",
    model: "F40",
    year: 1992,
    start: function() {
        console.log("the car " + this.make + " " + "has started" )
    }
}


console.log("Displaying content in our Object")
console.log(car)



console.log("Displaying content of method in the Object")
console.log(car.start())







// let person = {
//     Name: "Abdirashid",
//     Age: 25,
//     City: "Mogadishu",
//     greet: function(){
//         console.log("Hello " + this.Name + " Morning" + " " + person.Name)
//     }
// }
// console.log(person)

// console.log(person.greet())

// console.log(person.Name)

// person.Name = "Khalid"

// console.log(person.Name)

// console.log(person.greet())
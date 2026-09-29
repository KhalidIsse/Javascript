const people = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "bob", age: 30, city: "builderland" },
    { name: "Charlie", age: 35, city: "chocolate factory" }

]

console.log("properties and value of each person: ")

for ( const person of people){
    for (const property in person){
        console.log(property + ": " + person[property])
    }
    console.log("----------");
}

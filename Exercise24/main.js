function calculateArea(width, height = width) {
  return width * height;
}


console.log(calculateArea(5));    
console.log(calculateArea(10, 5)); 
console.log(calculateArea(12));    









































// function calculateArea(width = "no width", height = 'no height'){
//     console.log(`the width of the area is (${width}) and the height is (${height})`)
//     const area = width * height
//     console.log(`the Area is ${area}`)
// }


// calculateArea()
// calculateArea(10, 15)




// function greet(name = "Guest"){
//     console.log(`Hello ${name}`)
// }

// greet('Abdirashid')
console.log("Javascript Functions")


function addition(x, y){
    console.log("the addition of x and y is ", x + y)
}

addition(10,10);
addition(20,10);
addition(30,10);
addition(40,10);


// using return.

function add(a, b){
    return a+b
}

console.log("Total addition is", add(10,10));

console.log("Total addition is", add(20,10));

console.log("Total addition is",  add(20,20));



// changing to function expression:

const addExpression  = function(a, b){
    return a + b
}


console.log("Total addition is using expression function is", addExpression (10,10));

console.log("Total addition is using expression function is", addExpression (20,10));

console.log("Total addition is using expression function is",  addExpression (20,20));
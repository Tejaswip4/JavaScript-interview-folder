// Currying is multiple function arguments passing as a function of scries.
// currying we will use two ways - 1) in bind method & 2) clouser

/*
// Using bind metho for currying
let multiply = function(x, y){
    console.log(x*y);
}


let multiplyTwo = multiply.bind(this, 2);
multiplyTwo(3)

let multiplyThree = multiply.bind(this, 3);
multiplyThree(10);

*/

/*
// Using clouser

let multiple = function(x){
    return function (y){
        console.log(x*y);
    }
}

let multipleTwo =multiple(2)
multipleTwo(3)

let multiplyThree  = multiple(3);
multiplyThree(10)
*/

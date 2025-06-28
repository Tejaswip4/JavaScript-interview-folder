let name = {
    firstName: "tejaswi",
    lastName: "Peddina",
};

let printName = function(hometown, state, country){
    console.log(this.firstName + " " + this.lastName + ", " + hometown + ", " + state + ", " + country);
}

let printMyName = printName.bind(name, "kotturu", "AP");
printMyName("India")

Function.prototype.mybind = function(...args){
    let obj = this;
    parms = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...parms, ...args2])
    }
}

let printMyName2 = printName.mybind(name, "kotturur", "AP");
printMyName2("India")
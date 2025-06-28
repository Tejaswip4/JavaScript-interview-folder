let name = {
    firstName : "Tejaswi",
    lastName : "Peddina",
};

let printFullName = function (hoemtown, state){
    console.log(this.firstName + ' ' + this.lastName + ", " + hoemtown + ", " + state);
}

printFullName.call(name, "kotturu", "andhra pradesh");

let name2 = {
    firstName : "sachin",
    lastName : "tendulkar",
}

printFullName.call(name2, "mumbai", "MP")
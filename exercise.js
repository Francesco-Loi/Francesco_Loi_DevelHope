function printName() {
    let helloName = "Hello John";
    function inner() {
        return helloName;
    }
    return inner;
}

let myFunc = printName();
console.log(myFunc()); // "Hello John"


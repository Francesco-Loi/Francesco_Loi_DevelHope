function printName() {
    let helloName = "Hello John";
    function inner() {
        setTimeout(() => console.log(helloName), 1000);
    }
    return inner;
}

let myFunc = printName();
myFunc(); // after 1 second it will print "Hello John"

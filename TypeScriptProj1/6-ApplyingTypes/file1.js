var applytypes_demo;
(function (applytypes_demo) {
    //any type
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    // When we call doSomething function which doesnot have any annotation then it infers type any
    var x = doSomething(5);
    //Primitives
    var hasData = true;
    var isBald = function () { return 'yes'; };
    var hasHair = isBald; // variable hasHair is inferred to a function
    var hashair1 = isBald(); // variable hasHair is inferred to a string
    var hashair2 = !isBald(); //variable hasHair is inferred to a boolean
    // It is very important to know difference between annotation and inference and creating value for a variable using inference
    //string array
    function getarrayLength(array) {
        var len = array.length;
        return len;
    }
    var names = ["firstPerson", "secondPerson", "thirdPerson"];
    var firstPerson = names[0]; // firstPerson has annotation to string
    var firstPerson1 = names[0]; // firstPerson1 is infered to string
    console.log(getarrayLength(names)); // This gets infered to number as function returns number
    //null
    var computer = null;
    var people = null;
    var orderDate = null;
    //undefined
    var quantity; // number but it has no value and hence it is undefined as well.
    var company = undefined; // we can directly assign a variable to undefined
    console.log(quantity);
    console.log(company);
})(applytypes_demo || (applytypes_demo = {}));


var x = 1; // integer type
var y;   // any type

var firstname = "John"; // default it is string

var lastname:string = "papa"; // annotation

var num1 = 10;
var num2 = 20;

function addNumbers(n1, n2, n3) {
        var result = n1 + n2 + n3;
    alert(result);
}

addNumbers(num1, num2, lastname); // This will not give any error

//use annotation to define the variable type
function addNumbers1(n1: number, n2: number, n3: number) {
    var result = n1 + n2 + n3;
    alert(result);
}

//addNumbers1(num1, num2, lastname); // This will give error at compile time 
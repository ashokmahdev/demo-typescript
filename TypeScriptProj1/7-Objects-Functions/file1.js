var object_functions_demo;
(function (object_functions_demo) {
    //Objects
    // square is a type of object by inference as we are not explicity saying it is of type object 
    // but due to what we assign it becomes object with properties
    var square = { height: 10, width: 20 };
    //we can explicitly say it is an  object
    var points = { height: 10, width: 20 };
    //FUNCTIONS
    // Remember Functions are also objects
    var multiply = function (x) {
        return x * x;
    };
    // We can define a type as Function explicity
    var multiplyMore;
    multiplyMore = function (x) {
        return x * x * x;
    };
    // Objects can also have functions
    // Rectangle is an object with 3 properties and 3rd is a function called arrow function
    var rectangle = {
        height: 10,
        width: 20,
        calcArea: function () {
            return this.height * this.width;
        }
    };
    console.log('rectangle area = ' + rectangle.calcArea());
    //Function with optional parameters
    var funWithOptionalParam = function (X, Y) {
        return X * Y;
    };
    //Shorthand for function which is also called arrow function, notice we are omiting the name funciton and return keywords
    var myFunShortHand = function (x, y) { return x * y; };
    //function with no return values
    var greetMe;
})(object_functions_demo || (object_functions_demo = {}));

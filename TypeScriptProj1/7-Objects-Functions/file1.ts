module object_functions_demo {

    //Objects
    // square is a type of object by inference as we are not explicity saying it is of type object 
    // but due to what we assign it becomes object with properties
    var square = { height: 10, width: 20 }; 

    //we can explicitly say it is an  object
    var points: Object = { height: 10, width: 20 }; 


    //FUNCTIONS
    // Remember Functions are also objects
    var multiply = function (x: number){
        return x * x;
    }

    // We can define a type as Function explicity
    var multiplyMore : Function;
    multiplyMore = function (x: number) {
        return x*x*x;
    }

    // Objects can also have functions
    // Rectangle is an object with 3 properties and 3rd is a function called arrow function
    var rectangle = {
        height: 10,
        width: 20,
        calcArea: function () {
            return this.height * this.width;
        }
    }
    console.log('rectangle area = ' + rectangle.calcArea());

    //Function with optional parameters
    var funWithOptionalParam = function (X: number, Y?:number) {
        return X * Y;
    }

    //Shorthand for function which is also called arrow function, notice we are omiting the name funciton and return keywords
    var myFunShortHand = (x: number, y: number) => x * y;
    //function with no return values
    var greetMe: (message: string) => void;

    // observe the difference between above 2 the first function has "=" and second one doens not why?




}
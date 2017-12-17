module demo_interfasces {

     // square it becomes number due to inference though the parameter num is not specified as number
    var squareIt = (num) => num * num;  

    // we can also explicitly say the param as number 
    var squareIt1 = (num: number) => num * num;

    //Define an interface
    interface SquareInterface {
        //Declare method in the interface which accepts a number and returns a number
        (x: number): number;
    }

    //if i want a function to follow an interface
    // Notice mySquareFunction is an arrow function of type SquareInterface(or follows SquareInterface) which accepst a parameter and returns a number type;
    var mySquareFunction: SquareInterface = (num) => num * num;

    // If i try to pass an additiona param it will nto compile
    //var mySquareFunction: SquareInterface = (num,xyz) => num * num;

    // Another use of interface is not just to define methods in the interface
    // Old way of declaring a function which accepts an object (rect) which has two properties height and width and returns a number
    var sqaureIt: (rect: { h: number; w?: number; }) => number;

    // we can define an interface for the rect object above and rewrite the squareIt as below
    interface Rectangle {
        height: number;
        weight: number;
    }
    // now the new sytax looks like this
    var sqaureItNew: (rect: Rectangle) => number;

    //Full Interface
    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (year: number) => void;
        greet: (msg: string) => string;
    }

    var p: Person = {
        name: "Jhon",
        age: 30,
        kids: 3,
        calcPets: function () {
            //this.kids * 2;  // uncomments to get compilation error
            return this.kids * 2;
        },
        makeYounger: function (years: number) {
            this.age -= years;
        },

        //greet: function (msg: string, num:number) { // uncomments to get compilation error
        greet: function (msg: string) {
            return msg + ',' + this.name;
        }
    };

    var pets = p.calcPets();
    console.log(pets);

    p.makeYounger(15);
    var newAge = p.age;
    console.log(newAge);

    var msg = p.greet('Good Day');
    console.log(msg);

}
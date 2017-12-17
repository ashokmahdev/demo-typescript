var demo_interfasces;
(function (demo_interfasces) {
    // square it becomes number due to inference though the parameter num is not specified as number
    var squareIt = function (num) { return num * num; };
    // we can also explicitly say the param as number 
    var squareIt1 = function (num) { return num * num; };
    //if i want a function to follow an interface
    // Notice mySquareFunction is an arrow function of type SquareInterface(or follows SquareInterface) which accepst a parameter and returns a number type;
    var mySquareFunction = function (num) { return num * num; };
    // If i try to pass an additiona param it will nto compile
    //var mySquareFunction: SquareInterface = (num,xyz) => num * num;
    // Another use of interface is not just to define methods in the interface
    // Old way of declaring a function which accepts an object (rect) which has two properties height and width and returns a number
    var sqaureIt;
    // now the new sytax looks like this
    var sqaureItNew;
    var p = {
        name: "Jhon",
        age: 30,
        kids: 3,
        calcPets: function () {
            //this.kids * 2;  // uncomments to get compilation error
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        //greet: function (msg: string, num:number) { // uncomments to get compilation error
        greet: function (msg) {
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
})(demo_interfasces || (demo_interfasces = {}));

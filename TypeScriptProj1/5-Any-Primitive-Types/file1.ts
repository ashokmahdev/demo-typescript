// Any type
//both of the below variables represent the same
//no static type checking 
var data: any;
var info


//Primitive type

// Number
var age: number = 26;
var score: number = 4.5;
var rating = 8.0;

//boolean
var isApplied: boolean = true;
var isReady = true;

//string 
var firstName: string = "Jhon";
var lastname = "papa";

// Array and Indexers
var names: string[] = ["firstPerson", "secondPerson", "thirdPerson"];
var firstPerson: string;
firstPerson = names[0];

//Primitive Types with Null
// Null is sub type of all primitive types except void and undefined
var num: number = null;
var str: string = null;
var isHappy: boolean = null;
var customer: {} = null;

var age: number; // This variable is number and it is also undefined 
var company = undefined; // This variable is any and also undefined

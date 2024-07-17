//             "-------> BASIC TYPESCRIPT <--------"



//     "------->  Keywords in typescript  <---------"

//let   : (Declare one time & Initialize Multiple times)
let king = "Mohsin";
king = "Suriya";
king = "Nasir";


//const : (Declare one time & Initialize one time)
const king1 = "Mohsin";
// king1 = "Suriya"; //Error


//var   : (Declare one time & Initialize Multiple times)
var king2 = "Mohsin"; 
var king2 = "Suriya"; //No Error


//      "-------> Legal & Illegal method :<---------"

//let #king = "Mohsin"; //Error
//let king# = "Mohsin"; //Error
//let king- = "Mohsin"; //Error
let king3 = "Mohsin"; //No Error
let king$ = "Mohsin"; //No Error
let king_ = "Mohsin"; //No Error


//      "------->  CASE SENSITIVE  <---------"
// camelCase
//snake_case
//PascalCase


//     "-------> Strong Typing In Typescript <---------"
let king4: string = "Mohsin";
//king4 = 123; //Error


//    "-------> DATA TYPES IN TYPESCRIPT <---------"
let name1 : string = "Mohsin";
let age : number = 25;
let isMarried : boolean = false;
let random : any = "Mohsin";


//    "-------> COMMENTS IN TYPESCRIPT <---------"

// let name1 : string = "Mohsin";
// let age : number = 25;
// let isMarried : boolean = false;
// let random : any = "Mohsin";


//    "-------> TYPE INFERENCE IN TYPESCRIPT <---------"

//   "-------> Strongly typed syntax <---------"
let a : string = "Pakistan"
let b : number = 123
let c : boolean = true

//   "-------> Type Inference <---------"
let d = "Pakistan";
let e = 123;
let f = true;


//   "-------> ERRORS IN TYPESCRIPT <---------"

// TYPE ERROR : TypeError occurs when there is mismatch between expected datatype and actual datatype :
//const num : number = 'hello'; //error

//Assignment Error : storing different datatype in same variable :
let x : number = 123;
//x = "hello"; //error


//SyntaxError : this error occurs when the syntax of your typescript code is incorrect :
// lett b : number = 123; //error



//   "-------> TEMPLATE LITERALS <---------"
let person = "Mohsin";
console.log(`My name is : ${person}`);

let person1 = "Mohsin"; 
let person2 = "Suriya";
let person3 = "my name is";
let person4 = "I am 19 years old";
console.log(`${person3} ${person1} ${person2} ${person4}`);
//output is : My name is Mohsin Suriya I am 19 years old


//    "-------> STRING CONCATENATION <---------"
let person5 = "Mohsin";
let person6 = "Suriya";
console.log("My name is" +' '+ person5 +' '+ person6);



//    "-------> OPERATORS IN TYPESCRIPT <---------"

//  1) "------->Arithmetic Operators<--------":
//     i.e : (+, -, *, /, %, **)
let Apple = 10+10;
console.log(Apple);

let Apple1 = 10-10;
console.log(Apple1);

let Apple2 = 10*10;
console.log(Apple2);

let Apple3 = 10/10;
console.log(Apple3);

let Apple4 = 10%9;
console.log(Apple4);

let Apple5 = 10**2;
console.log(Apple5);

//  2) "------->Unary Operators<--------":
//    -) increment ( ++i or i++)
//    -) decrement ( --i or i--)
let m = 10;
m++; //11

let n = 10;
n--; //9

//  3) "-------> Assignment Operators<--------":
//      i.e : (=, +=, -=, *=, /=, %=, **=)
let p = 10;
p += 5 ; // p = p + 5

let q = 10;
q -= 5 ; // q = q - 5

let r = 10;
r *= 5 ; // r = r * 5

let s = 10;
s /= 5 ; // s = s / 5

let t = 10;
t %= 5 ; // t = t % 5

let u = 10;
u **= 5 ; // u = u ** 5


//  4)  "-------> Comparison Operators<--------":
//      i.e : (==, !=, ===, >, <, >=, <=)
let v = 10;
let w = 10;
console.log(v == w); //output is : true
console.log(v === w); //output is : true
console.log(v != w); //output is : false
console.log(v < w); //output is : false
console.log(v > w); //output is : false
console.log(v <= w); //output is : true
console.log(v >= w); //output is : true

//  5)  "-------> Logical Operators<--------": 
//      i.e : (&&, ||, !)
let x1 = 5;
let x2 = 3;
let LogicalAnd=(x1 > 0) && (x2 < 0); //output is : false
let LogicalOr =(x1 > 0) || (x2 < 0); //output is : true
let LogicalNot= !(x1 > 0) //output is : false



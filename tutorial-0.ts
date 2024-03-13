// default type
let str :string="string type";
let num :number=999;
let isLog :boolean=true;
let arr1 :number[] = [1,2,3];
arr1.push(5555);
console.log("arr1:::",arr1);

let arr2 :Array<string> = ["one","two","three"];

// Tuple  튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미
let arr3: [string, number,string] = ['hi', 10,"shift"];
arr3[2] =arr3[2].concat("-control");
console.log("arr3::::",arr3);

enum Avengers { Capt, IronMan, Thor };
let oneA :Avengers = Avengers.Capt;
let oneB :any = Avengers[0];

console.log("oneA::::",oneA);
console.log("oneB::::",oneB);


interface personAge {
    age :number;
}

function logAge( obj :personAge){
    console.log(  obj.age);
}

let p = {name : "FILE", age :30};
logAge(p);

interface CraftBeer {
    name :string,
    hop? : number,
}

function brewBeer(beer :CraftBeer){
    console.log(beer.name);
}

let myBeer = {name :"lite"}
brewBeer(myBeer);

interface Person2 { name :string }
interface Developer extends Person2 {skill :string}

let fe = {} as Developer;
fe.name="protein";
fe.skill="bar";

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
// 초기 값을 주지 않으면 0부터 차례로 1씩 증가

interface Person3{
    name :string,
    age :number
}

interface Developer3{
    name: string;
    skill: string;
}

// introduce() 함수를 호출하는 시점에 Person 타입이 올지 Developer 타입이 올지 알 수가 없기 때문에 
// 어느 타입이 들어오든 간에 오류가 안 나는 방향으로 타입을 추론하게 됩니다.
function introduce(someone : Person3 | Developer3){
  someone.name; // O 정상 동작
//   someone.age; // X 타입 오류
//   someone.skill; // X 타입 오류
}

interface Person4 {
name: string;
age: number;
}
interface Developer4 {
name: string;
skill: number;
}
type Capt = Person4 & Developer4;

let intersect = {} as Capt;
intersect.age=10;
intersect.name="chewy";
intersect.skill=4;

//  제네릭 기본 문법이 적용된 형태
function getText<T>(text: T): T {
    return text;
}


//  any는 어떠한 타입도 허용한다는 의미로 그러므로 정적 타입 검사를 수행할 수 없게 됩니다
//  any 유형에 의해 컴파일 오류가 발생하지 않는다 . 실행시 오류가 발생
let obj :any = {x :0,y :"abc"};


// obj.foo();
// obj();
obj.bar = 100;
console.log("obj.bar::::",obj);
obj = "hello";
console.log("obj::::",obj);
const n: number = obj;

const names1 = ["Alice", "Bob", "Eve"];
names1.forEach(  function(e) { console.log(e.toUpperCase() ) ;}  );

function printCoord( pt: {x: number , y:number}){ console.log(pt) }

let param1 = {x:4, y:9};
printCoord(param1);
printCoord({x:67, y:999});

function printName( obj :{first :string , last? :string}){
    
    // console.log(obj.last.toUpperCase()); // error
    console.log(obj.last?.toUpperCase());

    if(obj.last !== undefined){
        console.log(obj.last.toUpperCase());
    }
}

printName({first: "gold"});

type Point1={
    x: number,
    y: number
}

function point1Funct(pt: Point1){
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

point1Funct({x:222, y:3333});


function padLeft(padding: number | string , input: string){
    if(typeof padding ==="number"){
        return "".repeat(padding)+input;
    }
    
    return padding+input;
};

const obj2: {[key: string]: number} =  { a: 1, b: 2, c: 3 };
for (const key in obj2){
    console.log(key);
    obj2.hasOwnProperty(key);
    const value: number = obj2[key];
    
    console.log("obj2.key:::",value);
}

function greeter(fn: (a: string)=>void, param1: string){
    fn( param1 );
}

function printToConsole(str: string){
    console.log(str);
}

greeter(printToConsole,"CONTACT_CONTACT");


function firstElement<T>(arr: T[]): T |undefined {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n1 = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

function myForEach(arr: any[], callback: (arg: any, index?: number, str?: string) =>void){
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i,"string");
    }
}

myForEach([10,20,30], function(a,i){ console.log(a,i) });
myForEach([10,20,30],  (a) => console.log(a) );


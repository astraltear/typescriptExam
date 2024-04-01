let userName : string ="squid";
let userLoggedIn:boolean = true;

userName+=" game";
console.log(userName)

const names = userName.split("")
console.log("names:",names);

const names2: Array<string> = userName.split("");

const myNumbers: Array<number> = [1,2,3,4,]
console.log(myNumbers.length);

const ids: Record<number, string> = {
    10:"a",
    20:"b",
}
ids[30] = "c"; // 이 부분에서 자바스크립트는 아무 이상이 없음. 타입스크립트는  에러가 나는데 Record라는 제너릭을 이용하면 오류가 안남 

for (let index = 0; index < 10; index++) {
    console.log(index);
}

[1,2,3,4].forEach( v => console.log(v) );
let returnValue = [4,5,6].map( e => e*10 );
console.log(returnValue);

let returnValue1 = [4,5,6].map( e => `${e*10}` );
console.log(returnValue1);


function add(num1: number, num2: number): number {
    return num1+num2;
}

function showItems(arr: number[]){
    arr.forEach( it=>{
       console.log(it);
    })
};
showItems([1, 2, 3]);

let a100: number[] = [1,2,3];
let a200: Array<number> = [1,2,3];

let user100: object;
user100={
    name: "XX",
    age: 30,
    list: [1,2,3]
}
console.log(user100);
// console.log(user100.name);  // Property 'name' does not exist on type 'object'.


type user101Type={
    name: string;
    age: number;
    gender? : string;
    readonly birth? :number;
}

let user101: user101Type={
    name: "user101-name",
    age: 10,
    birth:20240321
}
console.log(user101.name);
user101.gender="M";
console.log(user101);

let user103: {name:string, age:string}={
    name:'user103-name', age:"01"
}
console.log("user103.age:::>",user103.age);

let user102 :user101Type = user101;


interface Add103 {
    (num1:number, num2:number): number;
}

let add104 : Add103 = function(x,y){
    return x+y;
}

interface isAdult105 {
    (age:number) :boolean;
}

let isadult106 :isAdult105 = function( z){
    return z> 19;
}
console.log(isadult106(33));

let isaudult107 :isAdult105  = (z)=>{
    return z >19;
}
console.log(isaudult107(33));

let arr108 :Array<number> = [1,2,3];

type Member100={
    [key :string] :string;
}

let member101 :Member100={
    name:"name_value", pwd:"pwd_value", c:"c_value", 1:"1_value",
}
console.log(member101[1])  // member101.1 이건 안 된다. 
console.log(member101.c)


// TypeScript에서 any 타입으로 선언된 변수에는 모든 타입의 값이 할당될 수 있으므로, 
// any 타입의 변수에 객체를 할당한 후에는 해당 변수를 문자열 타입으로 선언한 변수에 할당하는 것이 가능
// 이는 TypeScript에서 타입 검사가 이루어지지 않으므로 에러가 발생하지 않습니다.

let obj101: any = { key: "value1" }; // any 타입의 변수에 객체를 할당
let str101: string = obj101; // any 타입의 변수를 문자열 타입에 할당 (에러 발생하지 않음)
console.log(str101)
// console.log(str101.a); // error

let obj100 = { key: "value" }; // 객체
// let str105: string = obj100; // 객체를 문자열 타입에 할당 (에러 


let num100 :(string|number) =1
let num101 :string|number =1
let answer102 :(string|number)[] = [1,'string',100]
let result103 :{data:(number|string)}[] = [{data:123},{data:"data_string"}];

type StringArray100 = Array<string>;
type NumberArray100 = Array<number>;

type ObjectWtihNameArray100 = Array<{ name: string }>;
let result_100 :ObjectWtihNameArray100 = [{name:"a"},{name:"a"},{name:"a"},{name:"a"}]

let result104 = "a"+1;

let result108;  // 선언만 하게 되면 type은 any이다   // 암시적으로 any 타입 지정
result108=123;
result108="string";

/*
function result105(x : number|string){
    return x +1; // error
}
*/

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

let result106 :WindowStates="closed";
let result107  :PositiveOddNumbersUnderTen = 9;


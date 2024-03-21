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
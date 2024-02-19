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


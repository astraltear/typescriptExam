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
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
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

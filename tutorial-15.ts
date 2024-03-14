type Point={x: number, y: number};
type pointType = keyof Point;

const ap: pointType = "x";
const bp: pointType = "y";
// const cp: pointType = "m";  

type Person5 = { age: number; name: string; alive: boolean };

type I1 = Person5["age" | "name"]; // string | number
type I2 = Person5[keyof Person5]; // string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person5[AliveOrName]; // string | boolean

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];
  
// number 인덱싱은 곧 배열 요소를 가리키므로 `typeof`에 의해 `{ name: string, age: number}` 타입이 됨
type Person6 = typeof MyArray[number];

// 그중에 "age" 속성의 `number`를 타입을 취함
type Age5 = typeof MyArray[number]["age"];

// 또는 이렇게
type Age6 = Person6["age"];


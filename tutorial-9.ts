interface Car {
    name :string;
    readonly type :string;
}

function makeCar(name :string, type :string) :Car{
    return {name,type};
}

const plainVar = "abc";
// plainVar="erererer"; Assignment to constant variable.
console.log(plainVar);

const mycar = makeCar("pony","sedan");
// mycar.type="CHANGE TYPE";  // readonly property
console.log(mycar);

interface Car2 {
    name :string;
    type :string;
}

type ReadOnlyCar = Readonly<Car2>;
function makeCar2(name :string, type :string) :ReadOnlyCar{
    return {name,type};
}
const mycar2 = makeCar2("pony","sedan");
// mycar2.name="CHANGE NAME";  // ready only type 
console.log(mycar);

const constArray = [10,20,30] as const;
// constArray[1]=3; 배열 readonly


enum Color {
    BLACK="black",
    RED='red',
    BLUE='blue'
}
console.log(Color.BLACK)

let Color2 = {
    BLACK :"black",
    RED :'red',
    BLUE :'blue'
}
console.log(Color2.BLACK)

enum Color {
    GREEN,
    WHITE,
    VIOLET
}
console.log(Color.VIOLET)

// 파라미터로 10,20,30 만 가능하다
function numerLiteral( p1 :10|20|30 ) :number{
    return p1;
}

//  numerLiteral(40) error 

interface Color3 {
    code :number;
}

type Color3Type = Color3;

// stringLiteral color는 RED,BLUE만 가능하다
function stringLiteral(color: "RED", data: Color3Type): void;
function stringLiteral(color: "BLUE", data: { desc: string }): void;
function stringLiteral(color :string, data :unknown) :void {
    console.log(`${color}: ${JSON.stringify(data)} `)
}

stringLiteral("RED",{code:11111} );
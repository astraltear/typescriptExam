
function greet1(person: {name: string, age: number}){
    console.log("greet1:", person.age);
}
greet1({name:"stringname", age:1});


type Person1 = {
    name: string,
    age: number
}
function p1(person: Person1){
    console.log("p1:", person.age);
}
p1({name:"stringname", age:2});




interface Person2 {
    name: string;
    age: number
}
function p2(person: Person2){
    console.log("p2:", person.age);
}
p2({name:"stringname", age:3});



type Shape = {width: number, height: number};

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number
}

function paintShape(paintOption: PaintOptions){ console.log("paintShape:", paintOption.xPos, paintOption.shape) }

const s1 = {width: 4, height: 5} ;
paintShape({shape: s1} );
paintShape({shape: s1, xPos: 1} );
paintShape({shape: s1, xPos: 1, yPos: 2} );


interface Person3 {
    name: string;
    age: number;
}

interface ReadonlyPerson3{
    readonly name: string;
    readonly age: number;
}

let writablePerson3: Person3 ={ name: "Person McPersonface", age: 42, };
let readonlyPerson3: ReadonlyPerson3 = writablePerson3;

console.log(readonlyPerson3.age); // prints '42'
writablePerson3.age++;
console.log(readonlyPerson3.age); // prints '43'

interface StringArray {
    [index: number]: string;
  }
  
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
console.log("secondItem:",secondItem);

function getStringArray(){
    let arr = new Array();
    arr.push("one");
    arr.push("two");
    return arr;
}


interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
unit: string;
}

let addr: AddressWithUnit = {street: "street", city: "city", country: "country", postalCode: "postalCode", unit: "unit" };



interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
};

console.log("cc:",cc);


type ColorfulCircle2 = Colorful & Circle;

function draw(circle: ColorfulCircle2 ) {
    console.log(`Color was ${circle.color}  :: Radius was ${circle.radius}`);
    
}

draw({color:"isRED", radius: 3});

// 각각 인터페이스 를  아래 제너릭으로 표현할 수 있다.
interface NumberBox {
    contents: number;
}

interface StringBox {
    contents: string;
}

interface BooleanBox {
    contents: boolean;
}

function setContents(box: NumberBox, newContents: number): void;
function setContents(box: StringBox, newContents: string): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}

// 제너릭 표현 
interface Box2<T,K>{
    contents: T;
    contents2 : K
}
let box2: Box2<string,number> = {contents: "string", contents2: 3 };

function setContents2<T,K>(box: Box2<T,K>, newContents: T){
    box.contents = newContents;
}
setContents2(box2, "stringparam1");

type Box3<T> = {
    contents: T;
}

const hacker : Box3<string> ={contents: "hacker"};
console.log("hacker:",hacker);



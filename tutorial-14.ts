function identity(arg: number): number {
    return arg;
}
console.log("identity:", identity(3)  );

function identity2(arg: any): any {
    return arg;
}

console.log("identity2:", identity2("identity")  );
console.log("identity2:", identity2(null)  );
console.log("identity2:", identity2(undefined)  );

function identity3(arg: unknown): unknown {
    return arg;
}

console.log("identity3:", identity3("identity")  );
console.log("identity3:", identity3(null)  );
console.log("identity3:", identity3(undefined)  );

function identity4<T>(arg: T) : T{
    return arg;
}

console.log("identity4:", identity4<string>("identity")  );
console.log("identity4:", identity4<null>(null)  );
console.log("identity4:", identity4<undefined>(undefined)  );

/*
any:
any 유형은 모든 유형의 값과 작업을 허용하는 "모든 것"을 나타냅니다.
any 유형을 사용하면 해당 변수에 대한 유형 검사가 비활성화되며, 컴파일러가 해당 값에 대해 어떠한 유형 검사도 수행하지 않습니다.
즉, any 유형은 TypeScript의 타입 안전성을 손상시키는 데 사용되므로 가능한한 피해야 합니다.

unknown:
unknown 유형은 any와 유사하지만, 보다 안전한 유형입니다.
unknown 유형은 모든 유형의 값과 작업을 허용하지만, 값을 사용하기 전에 유형 검사를 수행해야 합니다.
따라서 unknown 유형은 무엇인지 모르는 값을 다루거나 타입을 동적으로 결정해야 할 때 사용됩니다.
*/

let y1: unknown =10;
//let z1: number = y1 ; error
let z2: number = y1 as number;
if(typeof y1 ==='number'){
    let z3: number = y1;
}


interface LengthWise {
    length: number;
}

function genericExtends<T extends LengthWise>(args: T): T {
    console.log(args.length)
    return args;
}

genericExtends("haslength");
genericExtends([]);
genericExtends( {length:19, value:"value"} );
// genericExtends(3); 숫자 3은 number 유형이고 length을 가지고 있지 않으므로 오류가 발생



function getProperties<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperties(x, "a");
//  제네릭 매개변수를 통해 extends keyof T 로 Key 제네릭 유형을 제한 헀고, 그것으로 key로 받아서 x의 속성에 없는 "m"의 경우 오류로 처리
// getProperties(x, "m"); error 



class Animal{       numLegs: number=4;          }
class BeeKeeper{    hasMask: boolean = true;    }
class ZooKeeper{    nametag: string="Mikle";    }

class Bee extends Animal {
    bKeeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal{
    lKeeper: ZooKeeper = new ZooKeeper();
}

function createInstance<T extends Animal>(c: new() => T): T {
    return new c();
}

console.log("createInstance(Lion).lKeeper.nametag:", createInstance(Lion).lKeeper.nametag);
console.log("createInstance(Lion).numLegs:", createInstance(Lion).numLegs);

console.log(" createInstance(Bee).bKeeper.hasMask:", createInstance(Bee).bKeeper.hasMask );
console.log(" createInstance(Bee).numLegs:", createInstance(Bee).numLegs );

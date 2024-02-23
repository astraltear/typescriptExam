let arr = [209,"string",false];
console.log(arr);

let role :string[] =["admin", "manager", "user"];

// union type을 이용해서 문자, 숫자 배열을 넣을 수 있다.
let role1 :(string | number)[] =["admin", "manager", "user",123,456];
console.log(role1);

// 튜플을 사용하는 방법
let emp: [number, string, number] = [101, "Squid", 5000];
console.log(emp,emp[0],emp[1]);

emp.push(12345); // 배열에 number를 추가한 상태와 같음, 튜플은 원칙적으로 배열이기 때문에 push, pop 함수가 작동
console.log(emp);

type ThreeCoord = [x :number, y:number, z:number];

function add3Coord( p1 :ThreeCoord, p2 :ThreeCoord) :ThreeCoord{
    return [
        p1[0]+p2[0],
        p1[1]+p2[1],
        p1[2]+p2[2],
    ];
}

console.log(add3Coord([1, 2, 3], [4, 5, 6])   );

                                    // (parameterTypes) => returnType
function getterSetter(p1 :string) :[ ()=>string,(p2 :string) =>void  ]{
    let str :string =p1;

    return [
        ()=>str,

        (p2 :string) =>{
            str = p2;
        }
    ];
}

let [getter, setter] = getterSetter("SIMPLE");
console.log(getter());
setter("CHANGE VALUE");
console.log(getter());
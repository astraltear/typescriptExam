
// genericGetSet 함수 이름 뒤에 <T>라고 제네릭 표시                                     
                                // (parameterTypes) => returnType    
function genericGetSet<T>(p1 :T) :[ ()=>T, (param1 :T)=>void  ]{

    let value = p1;

    return [
            ()=>value,
            (param1) =>{
                value = param1;
            }
    ];
}

let [genericGet, genericSet] = genericGetSet(4);

function identity<T>(arg :T) :T {
    return arg;
}

let result3 :number = identity(5);
let result4 :string = identity("string type");
let result5 :string | null = identity<string | null>(null);
result5="assign value";




interface MyObject {
    name :string;
    id :string;
    email? :string;
    address? :string;
    
}

/*
 interface MyObjectOptionals{
     name? :string;
     id? :string;
     email? :string;
 }
*/
// 위의 인터페이스 정의 대신에 Partial<Type>을 사용
// Partial은 TypeScript에서 제공되는 유틸리티 타입
// 이 타입은 객체의 모든 속성을 선택적(optional)으로 만들어주는 역할
type MyObjectOptionals = Partial<MyObject>;
const optionalMyObject :MyObjectOptionals = {};
const optionalMyObjectWithName : MyObjectOptionals = {name :"typescript"};

type RequiredMyObject = Required<MyObject>;
type justPick = Pick<MyObject, "email" | "name" >;

const merge = (user :MyObject, overrides : MyObjectOptionals) :MyObject =>{
        return {
            ...user,
            ...overrides
        };
}

console.log( merge({name:"smile",id:"facts",email:"tech@tech.com"}, {id:"update string", address:"only jeju"})  );


const coffee = [
    {name :"americano", price:100},
    {name :"latte", price :200}
]

function extract<DataType, KeyType extends keyof DataType >(items :DataType[] , key :KeyType  ) :DataType[KeyType][]{
    return items.map( it => it[key] );
}
console.log( extract(coffee, "price")  );


// Record
const recordMyObject = (myobject :MyObject[]) :Record<string, MyObject> =>{
    return myobject.reduce(
        (accumulator, currentValue)=>{
            return {
                ...accumulator,
                [currentValue.id] :currentValue,
            }
        } ,{}
    )
}

console.log( recordMyObject( [ { id: "foo", name: "Mr, Foo" },  { id: "baz", name: "Mr. Baz" }  ]   )  );

interface Example {
    name :string;
    age :number;
    address :string
}

// Omit은 TypeScript에서 제공하는 유틸리티 타입 중 하나로, 특정 타입에서 지정된 속성을 제외한 나머지 타입을 생성하는 데 사용
type NewType = Omit<Example,"age">
const newExample :NewType = {name:"used",address:"softgel"};
console.log("newExample:::",newExample);
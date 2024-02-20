function printToFile(text :string, callback :( param :Object )=> void, value :Object) :void{
    console.log(text);
    callback(value);
}

function servicebuild(param : Object){
    console.log("servicebuild call param:::", param);
}

printToFile('call printToFile', servicebuild, {name :"matilda"} );


function arrowFun1(){
/*
( ) =>는 화살표 함수(Arrow Function)의 기본 문법입니다. 
이 문법은 함수를 간결하게 정의할 수 있게 해주는 것이 특징입니다.

기본 문법:
    const myFunction = () => {
        // 함수 내용
    };

매개변수가 있는 경우:
    const add = (a, b) => {
        return a + b;
    };

중괄호 생략 (한 줄 함수):
    const multiply = (a, b) => a * b;

매개변수가 하나인 경우, 괄호 생략:
    const square = x => x * x;
    
화살표 함수는 주로 간단한 함수를 정의할 때 사용되며, 
함수 내에서 this 값이 상위 스코프의 this를 그대로 가리킨다는 특징도 있습니다. 
하지만 일반적인 함수와는 다르게 생성자로 사용할 수 없고, arguments 객체를 가지지 않습니다. 이러한 특징을 고려하여 사용하면 됩니다.
*/    

    const noReturn = () :void =>{
        console.log("This function doesn't return anything");
    }
    noReturn();

    const yesReturn = () :number =>{
        console.log("This function return anything");
        return 5;
    }
    console.log("yesReturn :",yesReturn());

    const paramNoReturn = (name :string) :void =>{
        console.log(`Hello, ${name}!`);
    }
    paramNoReturn('typescriptName');


}  

arrowFun1();

// 리턴 타입 정의하기 
type funReturnType = (value :number) => number;

function funReturn( num :number) :funReturnType{
    return (value :number) => num + value;
}

const addOne = funReturn(50);
console.log( addOne(1)  );

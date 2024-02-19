export const export_message = "Hello from the module";
const export_message1 = "Hello from the module1";
export default  export_message1 ;

function addNumbers(a:number,b:number) :number {
    return a+b;
}
export {addNumbers};

export const addStrings = (str1:string, str2:string="" ) :string => str1.concat(str2);
export const addAny = (str1:string, str2:string | number) : string => `${str1}${str2}`;  //str1.concat(str2); 
export const voidReturn  = (str1 :string, str2 :string) :void => console.log(str1, str2);

function introduce(greet :string, ...names :string[]) :string {
    return `${greet} ${names.join(",")}`;
}
export {introduce};

interface User {
    first:string,
    last:string,
}

/*
?가 붙으면 먼저 ?가 붙은 타입을 조사합니다.
만약 타입이 define 되었다면 점(.) 
뒤에 있는 값을 참조하고 만약 타입이 define 되지 않았다면 점(.) 뒤의 값을 참조하지 않습니다.

?? : 널 병합 연산자 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고 그렇지 않으면 왼쪽 피연산자를 반환 
*/
function getName( user :User ) :string {
    return `firstName :${user?.first ?? "default first"} lastName : ${user?.last ?? "default last"} `;
}

export {getName};
/*
ts 라면 컴파일 타임에 오류가 발생하므로 아래와 같은 코드를 넣을 수 없다.
console.log(t3.getName({ first: "astral" }));
console.log(t3.getName(   ));

그렇지만 js파일에서라면 아래와 같은 코드를 넣을 수 있다.
이럴때  null에 안전하게 위와 같이 ts파일에서 코드를 작성하면 null 에러를 회피할 수 있다.
console.log(t3.getName({ first: "astral" }));
console.log(t3.getName(   ));
*/
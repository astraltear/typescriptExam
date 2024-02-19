export const export_message = "Hello from the module";
const export_message1 = "Hello from the module1";
export default  export_message1 ;

function addNumbers(a:number,b:number) :number {
    return a+b;
}

export {addNumbers};

export const addStrings = (st1:string, str2:string) :string => st1.concat(str2);

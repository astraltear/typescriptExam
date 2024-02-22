function printOptionalNullish(param1 :string, param2 :string, param3? :string){
    console.log(`param1=>${param1} param2=>${param2} param3=>${param3 ?? "defaultValue"  }`)
    
}

printOptionalNullish("1C", "Four");
printOptionalNullish("1C", "Sugar", "Something Else");

var someObj={
    nestedObj:{property:null}
};
const result = someObj?.nestedObj?.property ||"DefaultValue";
console.log(someObj?.nestedObj?.property);
console.log(result);


interface User2{
    id :string,
    info?:{
        email?:string,
        memo :string
    }
}

let user1 :User2={id:"tom"};
console.log(user1);

user1 ={id:"tomas",
        info:{  email: "test@test.com" , memo:"memo"  }
        }
console.log(user1);        
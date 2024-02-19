
import { export_message } from "./tutorial-3"; //export 를 import하는 법 {}  필요함 
console.log(export_message);

import export_message1 from "./tutorial-3" // export default를 import하는 법 {}  필요 없음 
console.log(export_message1);

import  * as t3  from "./tutorial-3"; // 전체 모듈을  import하는 문법 
console.log(t3.addNumbers(1,2));
console.log(t3.addStrings("first","second"))
console.log(t3.addStrings("one param"));
t3.voidReturn("void","return");
console.log(t3.introduce("Hello", "Player1", "Player2", "Player3"));
console.log(t3.getName({first :"astral",last:"tear"} ));


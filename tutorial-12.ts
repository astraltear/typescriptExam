let fetchFunc =()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => {console.log(error)} );
}
/*
fetch 는 비동기이고 promise를 반환한다.

*/
fetchFunc();

let fetchFunc2 = async function(){

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if(!response.ok){
            throw new Error('Network response was not ok');
        }
    
        const res = await response.json();
        return res;
    } catch(error){
        console.error('There has been a problem with your fetch operation:', error);
        throw error; 
    }
}

var result2 = fetchFunc2();
console.log(result2);


const getPromise = (isCheck :boolean) : Promise<void>=>{
    return new Promise<void>((resolve, reject)  =>{
        if(isCheck) resolve();
        else reject();
    });
}

let chk :boolean = false ;
getPromise(chk)
.then( res => {console.log("THEN")})
.catch(error => {console.log("CATCH")});
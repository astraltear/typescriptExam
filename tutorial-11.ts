/*

module 설치
npm i sql.js  @types/node

설치 확인
npm list

https://www.sqlitetutorial.net/sqlite-sample-database/

*/
  

const fs = require("fs");
const initSqljs = require("sql.js");

const dbFile ="chinook.db";


const findAll = (stmt :string, callback :any)=>{
    initSqljs().then( (SQL :any)=>{
        let resultSet = (dbFileNm :string)=>{
            try {
                let db = new SQL.Database(fs.readFileSync(dbFileNm));
                return db.exec(stmt);        
              } catch (error :any) {
                console.log("Can't open database file.", error.message);
                return null;
              }
        };

        let rs = resultSet(dbFile);
        // console.log(rs);
        // console.log("res.length::",rs.length);
        callback(rs,{error:"error"});
    })
    .catch(error =>{console.log(error)});
}


const getPromiseFunc = (query :any)=>{
    return new Promise( (resolve, reject) =>{
        findAll(query, (res :any,err :any ) =>{
            if(err) reject(err); // 거부 catch를 탄다 
            else resolve(res); // 이행  then문장을 탄다 
         } );
    });
};

var query = "select count(*) from employees";

getPromiseFunc(query)
.then(res  =>{
    console.log(res);
    console.log("cb_count  res.length::", res[0].values[0][0] );
})
.catch(error =>{
    console.log("getPromiseFunc catch::::::",error);
})


// initSqljs().then( function (SQL){
//     const db = new SQL.Database(fs.readFileSync(dbFile));
//     var stmt = "select count(*) from employees ";
//     const res = db.exec(stmt);
//     console.log(res);
//     console.log(res[0].values[0][0]);
 
//     var stmt2 = "select * from employees ";
//     const res2 = db.exec(stmt2);
    
//     console.log(res2[0].values[0], res2[0].values[0][1]);

// }
// );

// var query = "select count(*) from employees";
// findAll(query,cb_count);

// query = "select * from employees ";
// findAll(query,cb_select1);

// function cb_select1(res :any){
//     console.log("cb_select1::",res[0].values[0], res[0].values[0][1]);
// }

// function cb_count(res :any){
//     console.log("cb_count  res.length::", res[0].values[0][0]);
// }
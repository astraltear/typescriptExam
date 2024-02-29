interface Database<T>{
    get(id :string) :T;
    set(id :string, value:T) :void;
}

class InMemoryDatabase<T> implements Database<T>{

    protected db :Record<string,T> = {};

    get(id: string): T {
        return this.db[id];
    }
    set(id: string, value: T): void {
        this.db[id] = value;
    }
}

const myDB = new InMemoryDatabase;
myDB.set("foo","baz");
console.log(myDB.get("foo"));
console.log(myDB);
//console.log(myDB.db.foo, myDB.db["foo"]);  private  접근지정자 설정으로 오류 


interface Persistable {
    saveToString() :string;
    restoreFromString(storedState :string) :void;
}


class PersistentMymoryDB<T> extends InMemoryDatabase<T> implements Persistable{
    saveToString(): string {
        return JSON.stringify(this.db);
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState);
    }
}

const myDB2 = new PersistentMymoryDB;
myDB2.set("foo2","bas2");
console.log(myDB2.saveToString());


/*
class Player {
    public name :string ="";
    public age :number=0;

    constructor(name :string, age :number){
        this.name =name;
        this.age = age;
    }
}*/

class Player{
    constructor(public name :string, public readonly age :number){}
}

const player2 = new Player("facts",99);
player2.name="gluten free";
// player2.age=77777777; readonly 
console.log(player2, player2.name, player2.age);


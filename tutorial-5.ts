interface Coodinate {
    x :number;
    y :number;
}


function parseCoodinate(obj :Coodinate) :Coodinate;
function parseCoodinate(str  :string) :Coodinate;
function parseCoodinate(x :number, y :number) :Coodinate;
function parseCoodinate(arg1 :unknown, arg2? :unknown) :Coodinate{
    let coord :Coodinate= {x:0, y:0}
    
    if (typeof arg1 === 'object') {
        coord = { ...(arg1 as Coodinate) } // as 는 타입변경 
    } else if(typeof arg1 ==='string'){
        (arg1 as string).split(",").forEach(
                str => {
                    const [key,value] = str.split(":");
                    coord[key as 'x' | 'y'] = parseInt(value,10);
                }
        );
    } else {
        coord = {x: arg1 as number, y: arg2 as number}
    }

    return coord;
};

// unknown은 타입스크립트에서 기본적으로 any 타입이지만 사용할 때는 다른 타입으로 캐스팅해야 하는 타입입니다.
// 타입이 어떤 건지 모르나 꼭 캐스팅하라는 의미죠.
console.log(parseCoodinate("x:111,y:222"));

let coord1 = parseCoodinate(3,4);
console.log(coord1);

coord1 = parseCoodinate({x:9,y:10});
console.log(coord1);

let coord2 :Coodinate = {x:9999,y:8888};
coord1 = parseCoodinate(coord2);
console.log(coord1);

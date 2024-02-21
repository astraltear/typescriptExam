interface Coodinate {
    x :number;
    y :number;
}


function parseCoodinate(obj :Coodinate) :Coodinate;
function parseCoodinate(x :number, y :number) :Coodinate;
function parseCoodinate(arg1 :unknown, arg2? :unknown) :Coodinate{
    let coord :Coodinate= {x:0, y:0}

    if (typeof arg1 === 'object') {
        coord = { ...(arg1 as Coodinate) }
    } else {
        coord 
    }

    return coord;
};

// unknown은 타입스크립트에서 기본적으로 any 타입이지만 사용할 때는 다른 타입으로 캐스팅해야 하는 타입입니다.
// 타입이 어떤 건지 모르나 꼭 캐스팅하라는 의미죠.

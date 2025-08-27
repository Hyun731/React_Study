//함수 표현식
function funcA(){
    console.log("funcA");
}

let varA = funcA;
varA()

let varB = function funcB(){ 
    console.log("funcB");
};


varB() //가능
// funcB() -> 이건 불가능 그래서 아래처럼 익명 함수(아래 함수를 지칭하는 이름)로 만듦

varB = function (){ //이런식으로 값으로 넣은 함수는 데이터로 보기 때문이 호이스팅이 안됨
    console.log("funcB");
};
//화살표 함수
let varC = () => {
    return 1;
}
varC = () => 1; //위랑 똑같음 이렇게도 표현이 가능하다.
console.log(varC())
varC = (value) => value + 1
console.log(varC())

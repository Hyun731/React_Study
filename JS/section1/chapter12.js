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

varB = function (){
    console.log("funcB");
};
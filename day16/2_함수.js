// [1] 매개변수 x , 반환값 x
function func1() {
    console.log('fun1 exe');
}

// [2] 매개변수 o , 반환값 x        , 대표 함수 : console.log( )
function func2(x, y) {
    console.log(`fun2 exe ${x + y}`);
}

// [3] 매개변수 o , 반환값 o        , 대표 함수 : let a = prompt( )
function func3(x, y) {
    console.log(`func3 exe `);
    let result = x + y;
    return result;
}
// [4] 매개변수 x , 반환값 o
function func4() {
    console.log(`func4 exe`);
    return "대한민국";
}
// [5] 호출
func1();                // 매개변수 x , 반환값 x
func2(2, 3);         // 매개변수 o , 반환값 x
func3(1, 5);          // 매개변수 o , 반환값 o(변수에 저장 x)
let a = func3(1, 5); // 매개변수 o , 반환값 o(변수에 저장 o)
func4();                // 매개변수 x , 반환값 o(변수에 저장 o/x 선택)

//-------------> 내가 만든 매개변수 이기때문에 , 협업간에 공유해야함.

// [6] 지역변수 : 특정한 { } 안엥서 선언된 변수는 선언된 { } 밖에서 호출/사용 불가능
// -----> { } 종료되면 종료되는 { } 내 선언된 모든 메모리 자동으로 사라진다. -> garbage 머시기
// -----> if(){} , for(){} , func1(){}
// ====================== 대한민국 ============================== //
let 전역변수 = '대한민국'
if (true) {
    //======================== 인천광역시 ======================== //
    let 지역변수1 = '인천광역시';
    console.log(전역변수); // ok 대한민국
    console.log(지역변수1); // ok 인천광역시
    // console.log( 지역변수2 ); // fail
    for (let i = 0; i < 1; i++) {
        //========================== 부평구 ===========================//
        let 지역변수2 = '부평구';
        console.log(전역변수); // ok 대한민국
        console.log(지역변수1); // ok 인천광역시
        console.log(지역변수2); // ok 부평구
    }
    // console.log( 지역변수2 ); // fail : 현 위치는 인천광역시 라서 부평구 호출 [x]
}
// console.log( 지역변수1 ); // fail : 현 위치에서 인천광여시 호출[x]
// console.log( 지역변수2 ); // fail : 현 위치에서 부평구 호출[x]

// [7] 생각해보기 : 이름을 입력받아 배열 저장.
// 입력받은 이름 변수 : 지역변수/전역변수 -> 지역변수?
// 배열 : 지역변수/전역변수         -> 전역변수?

let nameList = [ ];
function nameAdd(){
    let name = prompt('이름 : ');
    nameList.push( name );
}
nameAdd();
nameAdd();
console.log( nameList ); // ====> [ 입력된 값 1 , 입력된 값2 ]
// 현재 코드흐름이 58번째 일때 변수는 총 몇개? -> nameList 한개임
    // vs
let nameList2 = []
let name1 = prompt('이름 : ');
nameList.push( name1 );
let name2 = prompt( '이름 : ');
nameList.push( name2 );
// 현재 코드흐름이 65번재 일때 변수는 총 몇개? nameList2 , name1 , name2 총 3개
// 변수 개수 때문에 메모리 차이남 그래서 function 쓰는거임

// [8] HTML 마크업의 이벤트 속성
function 이벤트함수(){
    console.log( '[[클릭]]');
}
// 1. JS에서 JS함수 실행하는 방법
이벤트함수();
// 2. HTML 에서 JS함수 실행하는 방법
// <마크업 이벤트속성명 ="함수명()">
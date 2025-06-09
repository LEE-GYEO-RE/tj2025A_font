// [입력 함수] 
// 1. confirm() : 브라우저(크롬) 에 확인/취소 알림창 , 확인 = true / 최소 = false 반환/리턴/결과 값
confirm( "(1) 입력해주세요." )

// 2. prompt() : 브라우저(크롬) 에 텍스트 입력 알림 창 , 텍스트 입력상자에 입력한 텍스트를 반환/리턴/결과 값
prompt("(2) 입력해주세요2.")

// 3. document.querySelector("선택자").innerHTML     : 특정한 선택자의 텍스트 호출
// 4. document.querySelector("선택자").value         : 특정한 선택자의 value속성의 값 호출

// [변수와 입력/출력 함수] * 입력받은 결과물에 변수에 저장.
// 1. let 변수명 = confirm();
    // confirm("확인 또는 취소를 클릭하세요.")          : 브라우저에서 확인/최소 선택 받는다.
    // let result1 = true 또는 false
let result1 = confirm("확인 또는 취소를 클릭하세요.")
    // 3 + 2
console.log( result1 ) // 사용자 확인 클릭 시 true 출력, 취소 클릭시 false 출력

// 2. let 변수명 = prompt();
let result2 = prompt("사용자 전화번호 입력하세요. ")
console.log( result2 )


// 콘솔 창에서 오류 찾아야함.
// 개발자도구에 오류 개수 표시되는데, 번역기 돌려서 뭐때문인지 무조건 찾아야함
// 한 문장 마다 ;(세미클론) 넣고, 들여쓰기 습과 , 주석, 공백 넣어서 가독성 올리셈
// 식별자의 첫 글자는 반드시 영문자나 언더스코어 (_) 또는 기호($) 시작.
// 예약어는 식별자로 사용할 수 없다.




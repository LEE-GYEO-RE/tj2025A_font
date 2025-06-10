// 1. 자동 형 변환
    // (1) 문자열타입의 숫자에 곱하기 1을 하면 문자열형의 숫자가 숫자형 숫자로 변환한다.
let input = prompt("숫자를 입력하세요.")        // 5 , prompt 함수는 항상 문자열 변환한다.
console.log(typeof input)                     // string
let result = input * 10                       // "5" * 10 , *(곱하기 연산자)
console.log(typeof result)                    // number
    // (2) 문자열형 + 숫자형 일 경우 자동으로 문자열으로 변환한다. +(연결연산자)
let one = "20"  // string
let two = 10    // number
console.log(one + two)      // "20" + 10 => 30[x] "2010"[o]
    // --
let time = prompt('사용시간 입력하세요.')       // 8
console.log(time*1000)                        // 8*1000 => 8000 , 8+1000 => 810000

// 2. 자료형 변환 함수 
    // (1) Number("문자열")     : 숫자형 타입 변환 함수 
console.log( Number("10") ) ;       // "10" --> 10 변환 
console.log( Number("10ABC") );     // "10ABC" --> 변환불가능 , NaN( Not a Number )
    // (2) *parseInt( )         : 정수 숫자 변환 함수 
console.log( parseInt("123") )      // 123
console.log( parseInt("123.45") )   // 123 , 소수점 잘림 
console.log( parseInt("123ABC") )   // 123 , 문자 잘림
    // (3) parseFloat()         : 실수 숫자 변환 함수
console.log( parseFloat('123.45') ) // 123.45
    // (4) String( )            : 문자열 변환 함수 
console.log( String(123) )          // "123"



/* 생각해보기1 : 국어 점수와 수학 점수를 prompt 로 입력받아 
                국어 점수와 수학 점수를 더한 결과를 console.log로 출력하시오. */
let input1 = prompt("국어 점수를 입력하세요")
let input2 = prompt("수학 점수를 입력하세요")
let result1 =  Number(input1) + Number(input2)
console.log(`총합계 : ${result1}`)

/* 생각해보기2 : 이름과 나이(숫자)를 prompt로 입력받아 document.write 이용하여 <h3> 마크업으로 출력하시오 */
let 이름 = prompt("이름 입력해 주세요")
let 나이 = Number(prompt("나이 입력해 주세요") )
document.write(`<h3> ${이름} (${나이}) </h3>`)
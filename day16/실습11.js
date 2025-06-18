/*
[ 실습11 ]
실습 1: 성인 인증 함수
나이(age)를 매개변수로 받아, 
20세 이상이면 true를, 미만이면 false를 반환하는 isAdult 함수를 만드세요. 
isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해 보세요.
*/
// (1) 매개변수      : age
// (2) 반환값        : 20 <= age true , 20 > false
// (3) 처리할 명령어 : isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력
function isAdult(age) {
    if (age >= 20) { return true; }
    else { return false; }
}
// 함수 호출1
let isAdult1 = isAdult(25);
let isAdult2 = isAdult(17);
console.log(isAdult1, isAdult2);
// 함수 호출2
console.log( isAdult(17) , isAdult(25));

/*
실습 2: 배열의 총합 구하기
숫자로 이루어진 배열을 매개변수로 받아, 
for 반복문을 사용해 모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요. 
아래 numbers 배열로 테스트해 보세요.
const numbers = [10, 20, 30, 40, 50];
*/
// (1) 매개변수      : array 아무거나
// (2) 반환값        : 배열의 총합계
// (3) 처리할 명령어(로직) : for 반복문을 사용해 모든 요소의 합계 구하기

let sum = 0;
const numbers = [10, 20, 30, 40, 50];
function sumArray(array) {
    for (let index = 0; index <= array.length - 1; index++) {
        sum += array[index];
    }
    return sum; // 누적합계를 반환한다. --> sumArray() 호출된 곳으로 반환
}
sumArray(numbers); // 함수 호출하고 반환값을 변수에 저장하지 않았다.
console.log(sum);   // 함수를 호출하고 반환(sum)값을 변수에 저장했다.


/*
실습 3: 가장 긴 단어 찾기
문자열로 이루어진 배열을 매개변수로 받아, 
for 반복문을 사용해 가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 
아래 words 배열로 테스트해 보세요.
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
*/
// (1) 매개변수      : 문자로 이루어진 배열
// (2) 반환값        : 배열 내 가장 긴 단어
// (3) 처리할 명령어(로직) : for 반복문을 사용해 가장 긴 단어를 찾아
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
function findLongestWord(long){
    let longword = ''; // 가장 긴 단어를 저장하는 변수를 임의 선언
    for( let i = 0; i <= long.length -1 ; i++){
        let word = long[i];
        if( word.length > longword.length ){ longword = word; }
    }
    return longword; // 함수가 종료되면서 함수를 호출했던 곳으로 반환하는 값
}
let result = findLongestWord( words );
console.log( result );

/*
실습 4: 게임 점수 관리하기
let userScore = 0; 전역 변수를 만드세요. 
gainScore() 함수는 userScore를 10 증가시키고, loseScore() 함수는 5 감소시킵니다.
gainScore()를 세 번, loseScore()를 한 번 호출한 뒤, 최종 점수를 콘솔에 출력하세요.
*/
// (1) 매개변수      : 
// (2) 반환값        : 배열 내 가장 긴 단어
// (3) 처리할 명령어(로직) : for 반복문을 사용해 가장 긴 단어를 찾아


/*
실습 5: 최고 점수 학생 찾기
전역변수 students 배열 데이터를 이용하여 , 
가장 높은 점수(score)를 가진 학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
const students = [
  { name: '김철수', score: 85 },
  { name: '이영희', score: 92 },
  { name: '박민준', score: 78 }
];
*/


/*
실습 6: 상품 목록 페이지 만들기 (참고: 예제 6, 7, 8, 12)
전역변수 products 배열 데이터를 이용하여, 
각 상품을 소개하는 HTML 요소를 동적으로 만들어 페이지에 표시하는 renderProducts 함수를 만드세요.
각 상품은 이름(<h4>), 가격(<p>), 재고(<p>)를 포함한 div로 묶여야 합니다.
const products = [
  { name: '노트북', price: 1200000, stock: 5 },
  { name: '모니터', price: 350000, stock: 12 },
  { name: '키보드', price: 80000, stock: 25 }
];

실습 7: 간단한 계산기
num1, num2, operator ( '+', '-') 세 개의 매개변수를 받는 calculator 함수를 만드시오.
operator가 '+'이면 두 수의 합을, '-'이면 두 수의 차를 콘솔에 출력하시오. (if문 사용)

실습 8: HTML 리스트(ul, li) 동적 생성
todoList라는 할 일 목록이 담긴 전역 배열이 있습니다.
renderList() 함수를 정의하시오. 
이 함수는 todoList 배열을 순회하며 <li>할 일 내용</li> 형태의 HTML 문자열을 만듭니다.
최종적으로 이 문자열을 HTML <ul> 태그로 표현하여 리스트를 화면에 그리시오.
let todoList = ['장보기', '운동하기']

실습 9: 입장료 계산 함수
임의의 나이(age)를 매개변수로 받아 입장료를 반환하는 getTicketPrice 함수를 만드시오.
8세 미만: "무료"
8세 이상 19세 이하: "5,000원"
20세 이상: "10,000원"
계산된 가격 문자열을 반환(return)하시오.
*/

/*
[ 실습5 ]

문제 1: 과일 목록 관리
다음 과일 목록 배열이 주어져 있습니다.
let fruitList = [ '사과', '바나나' ];
사용자로부터 새로운 과일 이름을 입력받아, 
fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요. 
존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.
*/
// 조건 : 배열찾기함수 ( .indexOf()) , fruitList.indexOf(새로운 과일명) == -1
/*
let fruitList = [ '사과', '바나나' ];
let fruitName = prompt("새로운 과일 이름 : ")
if( fruitList.indexOf(fruitName)== -1){
    fruitList.push(fruitName);      //입력받은 값을 배열에 추가한다. .push()
    console.log(fruitList);
}             
// 존재하지 않는다.
else{console.log("이미 존재하는 과일입니다.")}
*/
// (그 외) 존재한다.

/*
문제 2: 성별에 따른 색상 지정
주민등록번호 13자리를 문자열로 입력받습니다. 
성별을 나타내는 7번째 숫자가
'1' 또는 '3'이면 'blue'를, '2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.
*/
// 조건 : 주민번호[6] : 인덱스 번호
// num = '1' || num = '3' , 
// 위치는 1부터 , 인덱스는 0부터 , 7번째 숫자 --> 6번 인덱스 뜻
/*
console.log('1234567891234'[7])  //문자열도 배열자료 기반 이므로 인덱스가 존재한다. 
let num= prompt('주민등록 번호 : ')
if( num[6] =='1' || num[6] == '3'){console.log('blue');}
else{console.log('red')}
*/

/*
문제 3: 구매 금액에 따른 할인율 적용
사용자로부터 총 구매 금액을 입력받습니다. 구매 금액에 따라 아래와 같이 할인율을 적용하여 
최종 결제 금액을 출력하는 프로그램을 작성하시오.
50,000원 이상: 10% 할인
30,000원 이상 50,000원 미만: 5% 할인
10,000원 이상 30,000원 미만: 1% 할인
10,000원 미만: 할인 없음
*/
/*
let price = Number(prompt("총 구매 금액 : "))
if( price >= 50000) {console.log(price  * 9/10);}
else if(price >= 30000) {console.log(price * 95/100);}
else if(price >= 10000) {console.log(price * 99/100);}
else{console.log(price);}
*/

/*
문제 4: 월(Month)에 따른 계절 판별
1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
봄: 3, 4, 5월
여름: 6, 7, 8월
가을: 9, 10, 11월
겨울: 12, 1, 2월
만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.
*/
/*
let Month = Number(prompt("1월부터 12월까지 골라 입력하세요 : "));
if( Month < 6 && Month > 2 ){
    console.log("봄")
}else if( Month < 9 && Month > 5){
    console.log("여름")
}else if( Month < 12 && Month > 8){
    console.log("가을")
}else{
    console.log("겨울")
}
*/

/*
문제 5: 세 수 중 가장 큰 수 찾기
서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.
*/
/*
let Number1 = parseInt(prompt(" 첫번쨰 숫자를 입력하세요 : "));
let Number2 = parseInt(prompt(" 두번쨰 숫자를 입력하세요 : "));
let Number3 = parseInt(prompt(" 세번쨰 숫자를 입력하세요 : "));

if( Number1 > Number2 && Number1 > Number3){
    console.log(Number1);
}
else if( Number2 > Number1 && Number2 > Number3){
    console.log(Number2);
}else{ console.log(Number3);}
*/

/*
문제 6: 윤년 판별기
사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
윤년 조건:
연도가 4의 배수이면서, 100의 배수는 아닐 때
또는 연도가 400의 배수일 때
출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'
*/
/*
let year = Number(prompt("연도를 입력하세요 : "));
if( year % 4 == 0 && year % 100 !== 0 && year || 400 === 0){
    console.log(`${year}년은 윤년입니다.`);
}else{ console.log(`${year}년은 평년입니다.`);}
*/

/*
문제 7: 세 수 오름차순 정렬
서로 다른 세 개의 정수를 입력받아, 
오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
예시: 17, 4, 8 입력 시 4, 8, 17 출력
*/
/*
// (1) 변수 3개 vs 배열1개(자료3개)
let num1 = Number(prompt("정수1 :"))
let num2 = Number(prompt("정수2 :"))
let num3 = Number(prompt("정수3 :"))
// (2) 3개의 정수를 하나의 배열 자료로 표현하여 변수에 저장
let numArray = [ num1 , num2 , num3 ]
// (3) 스왑(교체) : 두 자료들 간의 위치를 교체하는 방법 , 한 위치에 하나만 저장이 가능하다.
                   // 임의의 TEMP; 라는 자료를 만들어서 임시보관 하고 자료값 돌림 , 추후에 삭제

// (4) 오름차순 : 두 수 간의 작은 값을 앞에 나열 , 두 수 비교하기. 수 많아지면 반복문 씀
//  A > B 비교하여  A가 더 크면 A와 B의 위치를 변경/스왑 

// (5) 조건  : num1 > num2 , num1 > num3 , num2 > num3  (3번) // 현재 코드 기준, 내림차순 하려면 부등호 반대
let temp;       // 임시변수 선언
if( numArray[0] > numArray[1]){         // 첫번째 값이 두번째 값보다 크면  (스왑 / 교체)
    temp = numArray[0];                 // 임시변수에 첫번째 값 넣고
    numArray[0] = numArray[1];          // 첫번째 위치에 두번째 값 넣고
    numArray[1] = temp;                 // 두번째 위치에 임시변수(첫번째 값) 값 넣고

}     
// else if 안되는 이유 : 다수 조건에 따른 다수 처리 (스왑)
if( numArray[0] > numArray[2]){         // 첫번째 값이 세번재 값보다 크면  (스왑 / 교체)
    temp = numArray[0]; numArray[0] = numArray[2];  numArray[2] = temp;
}    
if( numArray[1] > numArray[2]){         // 두번째 값이 세번재 값보다 크면  (스왑 / 교체)
    temp = numArray[1]; numArray[1] = numArray[2];  numArray[2] = temp;
}    
console.log(numArray); // 정렬 결과
*/

/*
문제 8: 가위바위보 게임
두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
규칙:
가위(0)는 보(2)를 이깁니다.
바위(1)는 가위(0)를 이깁니다.
보(2)는 바위(1)를 이깁니다.
출력:
플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.
*/
// 조건 : 플레이어1가 이기는 경우의 수(3) , 지는 수(3) , 비기는 수(3) => 총 경우의 수(9)
/*  모든 경우의 수 :
    이기는수 : 가위 = 보 , 바위 = 가위 , 보 = 바위  / 0 = 2 , 1 = 0 , 2 = 1  
    비기는수 : 가위 = 가위 , 바위 = 바위 , 보 = 보  / 0 = 0 , 1 = 1 , 2 = 2 , 두 값이 같다.
    지는수 : 가위 = 바위 , 바위 = 보 , 보 = 가위    / 0 = 1 , 1 = 2 , 2 = 0
*/
/*
let player1 = Number(prompt(" 0 1 2 입력 : "));
let player2 = Number(prompt(" 0 1 2 입력 : "));
// (방법1 : 모든 경우의 수 판단)
if( player1 == player2){console.log("무승부");}
else if(    (player1 == 0 && player2 == 2) || 
            (player1 == 1 && player2 == 0) || 
            (player1 == 2 && player2 == 1)){
    console.log("플레이어1 승리");      // 플레이어1 이기는 수
}
else{console.log("플레이어2 승리");}    // (그외) 플레이어2 이기는 수
// (방법2 : 모든 경우의 수에서 패턴 / 반복  찾기)
        // 1. 두 수가 같으면 무승부 이다.
        // 0 == (2+1)%3
        // 1 == (0+1)%3
        // 2 == (1+1)%3
if( player1 == player2){console.log("무승부");}
else if( player1 == (player2+ 1)%3 ){  console.log("플레이어1 승리");}     // 플레이어1 이기는 수
else{console.log("플레이어2 승리");}    // (그외) 플레이어2 이기는 수
*/

/*
문제 9: 주차 차량 위치 검색
주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다. 두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
차량 번호 목록: let carArray = [ '250어7142', '142가7415', '888호8888' ];
주차 위치 목록: let locationArray = [ 'A1', 'B3', 'C2' ];
사용자로부터 차량 번호를 입력받아, 
carArray에서 해당 차량을 찾은 뒤 locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오. 
만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.
*/
/*
let carArray = ['250어7142', '142가7415', '888호8888'];
let locationArray = ['A1', 'B3', 'C2'];

let userCar = prompt("차량 번호를 입력하세요 : ");
let index = carArray.indexOf(userCar);

if( index !== -1){
    let location = locationArray[index];
    console.log(`${userCar} 차량의 주자 위치는 ${location} 입니다.`)
}else{ console.log("차량이 존재하지 않습니다.")}
*/


/*
문제 10: 수강 신청 목록에서 과목 제외하기
현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
let courseList = ['수학', '영어', '과학', '국어'];
사용자로부터 제외하고 싶은 과목명을 입력받아, 
courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요. 
만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오.
*/
let courseList = ['수학', '영어', '과학', '국어'];
let deletList = prompt("삭제하고 싶은 과목을 입력하세요 : ");

let index = courseList.indexOf(deletList);

if( index !== -1 ){
    courseList.splice(index , 1);
    console.log(courseList);
}else{
    console.log("해당 과목은 신청목록에 없습니다.");
}

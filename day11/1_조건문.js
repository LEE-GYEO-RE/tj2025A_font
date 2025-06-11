/*
ex] 만약에 지갑에 돈이 10000원 이상이면 택시, 아니면 걷기
   
    조건 찾기           : 지감에 돈이 10000원 이상      지갑돈 >= 10000
    true -> 참 찾기     : 택시
    false -> 거짓 찾기  : 걷기

-if(조건문)
let 지갑돈 = 12000
if(지갑돈 >=10000){console.log("택시");}
else{console.log("걸음");}

-삼항연산자
let 결과 = 지갑돈 >= 10000 ? "택시" : "걸음";
console.log( 결과 );
*/

//[1] if(조건) 참일대코드
if(10 > 3) console.log(" [1] 10은 3보다 크다 "); // true -> 출력o
if(10 > 20) console.log(" [1] 10은 20보다 크다"); // false -> 출력x
// 주의할점 : ;세미클론이란 : 한 명령어 문단 마침.
if(10 > 20); console.log("[1] 앞에 if와 관련 없어진다. "); //if(); 넣지 말자.

//[2] 명령어 코드가 2개 이상일때는 {} 묶어주자.
if(10 > 20) console.log("[2-1] 10> 20보다 크다"); console.log("[2-1] 10> 20보다 크다"); // 첫번째 코드만 참으로 인식
if(10 > 20) {
    console.log("[2] 10> 20보다 크다");
    console.log("[2] 10> 20보다 크다");
}

//[3] if ~ else ,
if(10 > 3){ console.log("[3] 10은 3보다 크다");}    // 참
else{ console.log("[3] 10은 3보다 작다.");}         // else 거짓

//[4] if ~ else if ~ else if ~ else , 다수 조건
if (10 > 20){console.log("[4] 10은 20보다 크다");}          // false
else if (10 > 15){console.log("[4] 10은 15보다 크다");}     // false
else if (10 > 10){console.log("[4] 10은 10보다 크다");}     // false
else{ console.log("[4] 그 외 이다.");}                      // true

// [5] 중첩
let 성별 = "남"; let 점수 = 80; //임의 값
if(성별 == "남"){
    if(점수 >= 90){console.log("남자우수");}
    else{console.log("남자");}  // 90이상이 아니면 90미만으로 가정
}
else{ // 남이 아니면 여 라고 가정
    if(점수 >=90){console.log("여자우수");}
    else{console.log("여자")}
}

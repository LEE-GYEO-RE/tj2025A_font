/*
    [ 웹스토리지 ]
        - 웹브라우저( 개발자 도구 ) - > 애플리케이션[application] - > 로컬 스토리지[ local/session ] 
        - 도메인 마다 웹스토리지가 할당된다..!!!
        * 도메인 : ip , 포트? (리소스 경로는 아님.)
        1. 종류
            (1) sessionStorage  : 브라우저가 실행 동안만 저장 , 브라우저를 닫으면 (자동)데이터 사라진다.
                - 일회성 정보 , 이전페이지 기록
            (2) localStorage    : 사용자가 직접 삭제하거나 브라우저(캐시)청소 하지 않는 한 데이터 영구 저장한다.
                - 설정 정보 , 팝업창( 다시보지 않기 ) , 테마설정 , 자동로그인 등등

        2. 사용법
            sessionStorage 객체
            loclaStorge 객체
            (1) sessionStorage.setItem( '속성명/key' , '값/value' );
                -> 자료 대입
            (2) sessionStorage.getItem( '속성명/key' );
                -> 호출
            (3) sessionStorge.removeItem( '속성명/key' );
                -> 속성 삭제
            (4) sessionStorge.clear();
                -> 전체 삭제
            * 속성명/key 는 무조건 문자만 가능.
            * value는 객체와 배열 타입 저장 불가능. 리터럴 자료만 가능
            
    [ JSON ] : 자바스크립트 객체 문법의 형식 , JavaScript Object Notaion
        * API를 주로 JSON으로 줌 
        * 자바객체를 문자열타입 이지만 객체형식/모양 으로 표현한 것.
        - 3 : 숫자타입 , 숫자모양               vs "3" : 문자열타입 , 숫자모양
        - { age : 40 } : 객체타입 , 객체모양    vs "{ age : 40 }" : 문자열타입 , 객체모양
        - 왜?????? ----> 인터넷상의 데이터통신하는 http 는 객체지향이 아니다. 객체 누구세요임 ---> 문자열과 바이트 전송 가능.
        ->  한국 ( 객체 -> "객체" ) ------- http -------> 일본 ( "객체"-> 객체 )
        ->  한국 ( 객체 -> "객체" ) ------- 웹스토리지 -------> 일본 ( "객체"-> 객체 ) -------> 타입 변환이 필요함
        
        1. 사용법
            (1) JSON.stringify( 자료 );     : 해당 자료를 문자열 타입으로 반환
            (2) JSON.parse( 자료 );         : 해당 자료를 JS 타입으로 반환

    *************************
    '속성명/key' = 임의의 속성명 값 = 아무거나 
    ('속성명' , 변수 )내가 정한 '속성명' 에 변수 저장
    sessionStorage 또는 localStorge에 '속성명' 자료 저장/호출/삭제
    저장 : .setItem()
    호출 : .getItem()
    삭제 : .removeItem()
    전체삭제 : .clear()

 */
// [1] 웹스토리지 를 제어하는 객체
console.log( sessionStorage );  // 현재 웹스토리지에 저장된 자료 갖는 객체 반환
console.log( localStorage );    // 현재 웹스토리지에 저장된 자료 갖는 객체 반환

// [2] 웹스토리지에 자료 대입
sessionStorage.setItem( 'name' , '유재석' );    // sessionStorage.setItem( '속성명' , '값' ); 
localStorage.setItem('age' , 40 );

// [3] 웹스토리지에 자료 호출
console.log( sessionStorage.getItem('name') );  // 유재석
console.log( localStorage.getItem('age') );     // 40
console.log( localStorage.getItem('phone') );   // null , 존재하지 않는 속성명

// [4] 웹스토리지에 자료 삭제
sessionStorage.removeItem('name');              // name속성 삭제. 
console.log(sessionStorage);                    // 유재석이 없어짐.
localStorage.clear();                           // 전체 삭제
console.log( localStorage );                    // 40 없어짐.

// [5] 웹스토리지에 JSON 객체 저장
sessionStorage.setItem( 'm1' , ['유재석' , 40 ] );                  // [x]
sessionStorage.setItem('m1' , JSON.stringify(['유재석' , 40 ] ));   // 대괄호 포함한 저장
localStorage.setItem( 'm2' , JSON.stringify({ name : '유재석' , age : 40 })); // 중괄호 포함한 저장

// [6] 웹스토리지에 JSON 객체 호출
console.log( sessionStorage.getItem ('m1') );                       // ['유재석' , 40 ] , 문자 타입

console.log( JSON.parse(sessionStorage.getItem('m1') ) );           // 배열 타입
        // console.log( (3+2) *3 )
        // vs
        // let r = 3+2
        // let r2 = r * 3
        // console.log( r2 );
let data = localStorage.getItem('m2');                              // 객체 타입
let jsonData = JSON.parse( data );
console.log( jsonData ); 
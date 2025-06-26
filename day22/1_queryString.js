/*
    [ 쿼리스트링 ]
        - URL(웹주소) 상에 매개변수를 사용.
        - URL?변수명=값
        - 페이지 이동(요청) 간의 데이터 전달
        1. 사용법
            (1) 이동하는 방법
                (방법1) HTML :  <a href = "이동할경로?변수명=값&변수명=값"/>;
                (방법2) JS   :  location.href="이동할경로?변수명=값&변수명=값"
            (2) URL상의 매개변수를 가져오는 방법
                1. new URLSearchParams(location.search).get( URL상의 변수명 ); : 현재 (웹주소) URL 경로 반환하는 객체
                2. let param = url.get( '변수명' );
        ** 페이지 이동시 모두 제거함. ----> 쿼리스트링이나 로컬스토리지로 저장하는 거임 , 쿼리스트링 주로 씀
*/

//  URLSearchParams() =  경로상의 매개변수명 가져오는 방법

// [1] 링크1
let url = new URLSearchParams(location.search)                  
console.log( url );

// [2] 링크2 (쿼리스트링)
let param = url.get('param'); console.log( param );

// [3] 링크 (쿼리스트링2)
let url3 = new URLSearchParams( location.search );
let pcode = url3.get('pcode'); console.log( pcode );
let page = url3.get('page'); console.log( page );

// [4] 
function 이동함수(){                                             // JS에서 페이지 요청하는 방법 : location.href="경로?변수명=값&변수명=값"
    location.href = '1_queryString.html?sort=1&code=8';
}
let url4 = new URLSearchParams( location.search );
let sort = url4.get( 'sort' );      console.log( sort );
let code = url4.get( 'code' );      console.log( code );

// (1) 쿼리스트링에서 특정한 게시물번호의 정보 조회
getBoard();
function getBoard(){
    // 1. URL(웹 주소) 상의 웹주소 가져오기
    // 2. 웹주소에서 선택된 게시물번호(쿼리스트링 값) 가져오기
    // 3. 선택된 게시물번호를 localStorage 에서 배열 가져오기
    // 4. 선택된 게시물번호와 일치한 게시물 찾기 <for>문
    // 5. 찾았으면 출력
        // 어디에
        // 무엇을
        // 출력

// 이거 밖에서 함수로 지정해도 됨.
    const url = new URLSearchParams( location.search );                             // URL 상의 웹주소 가져오기
    const selectNo = url.get('no');                                                 // 웹주소에서 선택된 게시물번호(쿼리스트링값) 가져오기
// 이것도 밖에서 함수로 지정해도 됨.
    let boardList = localStorage.getItem('boardList')                               // localStorage 에서 배열 가져오기  

        if( boardList == null ){
            boardList = [];
        }else{
            boardList = JSON.parse(boardList);                                      // parse 하려면 위에 변수 let으로 지정해야됨. const하면 parse 안됨
        }
        for( let i = 0 ; i <= boardList.length -1 ; i ++){                          // 선택된 게시물번호와 일치한 게시물 찾기
            const obj = boardList[i];
            if( obj.no == selectNo ){                                               // 선택한 게시물번호와 일치하면 = 내용 출력
                document.querySelector('#title').innerHTML = obj.title              // title id 가진 마크업 사이에 방금 찾은 obj.title 넣는다
                document.querySelector('#content').innerHTML = obj.content
                return;                                                             // 안해도됨.
            }
        }
} // func end

// (3) 삭제 함수
function boardDelete(){
    // URL(웹주소) 상의 경로 가져오기
    // 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기
    // localStorge 에서 배열 가져오기
    // 배열 내 선택된 게시물번호 존재하면
    // 확인용비밀번호 입력받아 기존 비밀번호와 일치하면 삭제 , 아니면 실패
    // 삭제 성공시 list.html 으로 이동 

    const url = new URLSearchParams( location.search );                             // 웹 주소 가져오고
    const selectNo = url.get('no');                                                 // 웹 주소에서 선택된 넘버 가져오기
    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){
        boardList = []
    }else{
        boardList = JSON.parse(boardList);
    }

    for( i = 0 ; i < boardList.length ; i++){
        const obj = boardList[i];
        if( obj.no == selectNo ){
            const confirm = prompt('비밀번호 입력');
            if( confirm == obj.pwd ){
                boardList.splice( i , 1 )
                localStorage.setItem('boardList' , JSON.stringify(boardList));
                alert('삭제 성공')
                location.href = 'list.html';                                        // 페이지 전환 list.html로 이동
            }else{
                alert('삭제 실패 : 비밀번호 불일치')
            }
        }
    }
}


// (3) 수정 이동 함수
function boardUpdateView(){
    // 웹주소 경로 가져오기
    // 게시물번호 (쿼리스트링) 가져오기
    // localStorage 에서 배열 가져오기
    // 배열 내 선택된 게시물 번호 존해하면
    // 확인용 비밀번호 입력받아 기존 비밀번호와 일치하면 수정페이지 이동

    const url = new URLSearchParams( location.search);
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){
        boardList = [];
    }else{
        boardList = JSON.parse(boardList);
    }
    
    for( i = 0 ; i < boardList.length ; i++){
        const obj = boardList[i];
        if( obj.no == selectNo ){
            const confirm = prompt('확인용 비밀번호')
            if( obj.pwd == confirm ){
                location.href = `update.html?no=${selectNo}`                        // 페이지 전환 update.html?no=${selectNo} 로 이동
            }else{
                alert('수정 불가 : 비밀번호 불일치 ')
            }
        }
    }
}
// 일반적으로는 기존데이터 조회

// 수정페이지 접속했을 때 기존 데이터 호출 함수
getBoard();
function getBoard(){
    const url = new URLSearchParams( location.search );
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList')
    if( boardList == null ){
        boardList = []
    }else{
        boardList = JSON.parse(boardList)
    }

    for( i = 0 ; i < boardList.length ; i++){
        const obj = boardList[i];
        if( obj.no == selectNo ){
            document.querySelector('#titleInput').value = obj.title             // 기존 게시물정보를 input 마크업에 넣어주기
            document.querySelector('#contentInput').value = obj.content         // 기존 게시물정보를 input 마크업에 넣어주기
        } // if end
    } // for end
} // func end

<<<<<<< HEAD
// 수정처리 함수
    // URL 경로 가져오기 ==> 밖에 함수로 지정하는 게 빠름
    // URL 경로에서 내가 선택한 게시물번호('no') 가져오기 ===> 이것도 함수로 같이 지정하는게 빠름
    // localStorage 에서 배열 가져오기 ==> 이것도 중복됨
    // 반복문 써써 선택한 게시물번호의 게시물 찾기
    // 찾은 게시물에 새롭게 입력받은 값으로 대입/수정
    // view.html에 출력
function boardUpdate(){
    const url = new URLSearchParams ( location.search );
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList')
    if( boardList == null ){
        boardList = [];
    }else{
        boardList = JSON.parse(boardList)
    }

    for( i = 0 ; i < boardList.length ; i++){                                   // 반복문 써서 선택한 게시물번호의 게시물 찾기
        const obj = boardList[i];
        if( obj.no == selectNo ){
            obj.title = document.querySelector('#titleInput').value;            // 새로 입력받은 값으로 대입/수정 = 재설정
            obj.content = document.querySelector('#contentInput').value;
            obj.pwd = document.querySelector('#pwdInput').value;    
            localStorage.setItem('boardList' , JSON.stringify(boardList));
            alert('수정완료');
            location.href = `view.html?no=${selectNo}`
        }
    }
}
=======
// 수정처리 함수
>>>>>>> 8e9378d0ba5f3a249ba932826b2e7d8907bb38fe

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

// 수정처리 함수
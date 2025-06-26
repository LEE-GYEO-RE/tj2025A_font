
// localStorage 에서 가져오는 함수 
function getBoardList() {
    let boardList = localStorage.getItem('boardList')
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList)
    } return boardList;
}

// localStorage 에 저장하는 함수
function setBoardList() {
    localStorage.setItem('boardList', JSON.stringify(boardList))
}

// URL 경로 가져오는 함수
function boardUrl() {
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');
}


// 등록 함수
function boardWrite() {
    const titleInput = document.querySelector('#titleInput')
    const conetentInput = document.querySelector('#contentInput')
    const pwdInput = document.querySelector('#pedInput')

    const title = titleInput.value;
    const content = conetentInput.value;
    const pwd = pwdInput.value;

    const obj = { title, content, pwd }

    let boardList = getBoardList()

    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length - 1].no + 1

    boardList.push(obj);

    setBoardList();

    alert('게시물 작성 성공')

    location.href = 'list.html'
}

// 리스트 출력 함수
boardPrint();
function boardPrint() {
    const boardTbody = document.querySelector('#boardTbody')

    let boardList = getBoardList();

    let html = '';

    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        html += `<tr>
                    <td> ${obj.no} </td>
                    <td> <a href = 'view.html?no=${obj.no}'> ${obj.title} </a> </td>
                </tr>`
    }
    boardTbody.innerHTML = html;
}

// 쿼리스트링에서 특정한 게시물번호의 정보 조회
getBoard();
function getBoard() {
    boardUrl();
    getBoardList();

    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selecNo) {
            obj.title = document.querySelector('#title').innerHTML
            obj.content = document.querySelector('#content').innerHTML
            return;
        }
    }
}

// 삭제 함수
function boardDelete() {
    boardUrl();
    getBoardList();
    for (i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectNo) {
            const confirm = prompt('비밀번호 입력');
            if (confirm == obj.pwd) {
                boardList.splice(i, 1)
                setBoardList();
                alert('삭제 성공')
                location.href = 'list.html';
            } else {
                alert('삭제 실패 : 비밀번호 불일치')
            }
        }
    }
}


// 수정 이동 함수
function boardUpdateView(){
    boardUrl();
    getBoardList();

    for( i = 0; i< boardList.length; i ++){
        const obj = boardList[i];
        if( obj.no == selectNo){
            const confirm = prompt('확인용 비밀번호')
            if( obj.pwd == confirm ){
                location.href = `update.html?no=${selctNo}`
            }else{
                alert('수정 불가 : 비밀번호 불일치 ')
            }
        }
    }

}

// 수정페이지 접속 시 기존 데이터 호출 함수
getBoard();
function getBoard() {

    boardUrl();

    let boardList = getBoardList();

    for (i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectNo) {
            obj.title = document.querySelector('#titleInput').value;
            obj.content = document.querySelector('#contentInput').value;
        }
    }
}

// 수정처리 함수
function boardUpdate() {
    boardUrl();

    let boardList = getBoardList();

    for (i = 0; i < boardList.length; i++) {
        const obj = boardList[i];
        if (obj.no == selectNo) {
            obj.title = document.querySelector('#titleInput').value;
            obj.content = document.querySelector('#contentInput').value;
            obj.pwd = document.querySelector('#pwdInput').value;

            setBoardList();
            alert('수정완료');
            location.href = `view.html?no=${selectNo}`
        }
    }
}


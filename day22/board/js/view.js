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


    const url = new URLSearchParams( location.search );
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList')                               
        if( boardList == null ){
            boardList = [];
        }else{
            boardList = JSON.parse(boardList);                                      // parse 하려면 위에 변수 let으로 지정해야됨. const하면 parse 안됨
        }
        for( let i = 0 ; i <= boardList.length -1 ; i ++){
            const obj = boardList[i];
            if( obj.no == selectNo ){
                document.querySelector('#title').innerHTML = obj.title              // title id 가진 마크업 사이에 방금 찾은 obj.title 넣는다
                document.querySelector('#content').innerHTML = obj.content
                return;                                                             // 안해도됨.
            }
        }
} // func end
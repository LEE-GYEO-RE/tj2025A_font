function boardWrite(){
    // 1. 입력마크업 객체 가져오기
    // 2. 입력마크업 객체 입력 값 가져오기
    // 3. 객체화 , 
    // 4. localStorage 에서 배열 가져오기
    // 5. 객체를 배열에 저장
        // 자동 게시물 번호 부여
    // 6. localStorage 에 배열 저장하기
    const titleInput = document.querySelector('#titleInput')
    const contentInput = document.querySelector('#contentInput')
    const pwdInput = document.querySelector('#pwdInput')

    const title = titleInput.value;
    const content = contentInput.value;
    const pwd = pwdInput.value;

    const obj = { title , content , pwd }

    let boardList = localStorage.getItem('boardList')
    if( boardList == null ){
        boardList = []
    }else{
        boardList = JSON.parse(boardList)
    }

    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length -1].no +1 

    boardList.push(obj);

    localStorage.setItem('boardList' , JSON.stringify(boardList));

    alert('게시물 작성 성공!!!')
    
    location.href = 'list.html'                                                     // 글쓰기 성공시 게시물목록(list) 페이지로 이동

} // func end
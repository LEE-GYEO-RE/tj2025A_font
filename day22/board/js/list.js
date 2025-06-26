boardPrint();                                                                       // JS 실행될때 최초 1번실행
function boardPrint(){
    // 1. 어디에 <tbody id="boardTbody">
    // 2. 무엇을
        // 2-1 : localStorage 에서 배열 가져오기
        // 2-2 : 반복문 이용하여 배열내 하나씩 조회
        // 2-3 : 하나씩 <tr> 구성
    // 3. 출력

    const boardTbody = document.querySelector('#boardTbody');

    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){
        boardList = [];
    }else{
        boardList = JSON.parse( boardList );
    }

    let html = '';

    for( let i = 0 ; i < boardList.length -1 ; i++){                                        // 반복문 돌려서 조회
        const obj = boardList[i];                                                           // 쿼리스트링 사용법 ?변수명=값
        html += `<tr>
                    <td>${obj.no} </td>
                    <td> <a href = 'view.html?no=${obj.no}'> ${obj.title} </a> </td> 
                </tr>`
    } // for end
    boardTbody.innerHTML = html ;
} // func end
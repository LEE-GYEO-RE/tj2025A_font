
/*
[ 실습13 : 미니 전화번호부 페이지 ] *제출
1. 목표
   - 사용자가 이름, 전화번호, 그리고 간단한 메모를 함께 저장하여 자신만의 상세한 연락처 목록을 만들고,
    등록된 모든 연락처를 한눈에 볼 수 있는 전화번호부 웹 페이지를 만듭니다.
2. 화면 구성
   - 페이지는 사용자가 정보를 입력하는 
   **'연락처 등록 영역'**과 그 결과를 보여주는 **'연락처 목록 영역'**으로 명확히 구분되어야 합니다.
   - 연락처 등록 영역:
      - 이름 입력: 저장할 사람의 이름을 텍스트로 자유롭게 입력할 수 있어야 합니다. 
      (예: "홍길동")
      - 전화번호 입력: 연락처의 전화번호를 숫자로 입력할 수 있어야 합니다 (예:010-1234-5678)
      - 메모 입력: 해당 연락처에 대한 추가 정보(소속, 관계 등)를 텍스트로 입력할 수 있는 칸이 있어야 합니다. 
      (예: "OO회사 부장")
      - 등록 버튼: 이름과 전화번호를 입력한 후, 목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.

   - 연락처 목록 영역:
      - 등록된 모든 연락처 정보를 보여주는 표가 있어야 합니다.
       - 표는 "이름", "전화번호", "메모" 순서의 열로 구성되어야 합니다.
3. 핵심 기능
   - 초기 데이터 표시:
      - 사용자가 페이지에 처음 방문했을 때, 
      전화번호부 사용법을 쉽게 이해할 수 있도록 
      두 개의 예시 연락처가 목록 표에 기본적으로 표시되어 있어야 합니다.
   - 연락처 등록 기능:
      - 사용자가 '등록 영역'에 이름과 전화번호를 모두 입력하고 "등록" 버튼을 클릭하면, 
      해당 연락처가 '목록 영역' 표의 가장 아래쪽에 새로운 행으로 즉시 추가되어야 합니다.
*/

// html / css 만들기
// 데이터 모델링
// 함수 설계
// 로직 
// 함수 <--> html / css 연동

// 데이터 모델링

// 1. HTML/CSS 만들기
// 2. 데이터 모델링
// 3. 함수 설계
// 4. 로직 작성
// 5. HTML/CSS <---->함수 연동


// 1. 데이터 모델링
const list = [
    { code : 1 , name : '홍길동' , phone : '010-1234-5678' , text : 'OO회사 부장' }
];
console.log(list) ;

// 2. 함수 설계
// (1) 등록함수 정의 , 실행 : 등록버튼 onclick 했을때.

function func1(){ console.log('--- func1 exe ---');
    // input 마크업 객체에서 입력값(value) 가져오기
    // value = 무조건 문자열로 들어감 , 숫자로 나오게 하려면 documnet 앞에 Number 써야함.
    const nameInput = document.querySelector('#nameInput').value
    console.log(nameInput);
    const numberInput = document.querySelector('#numberInput').value
    console.log(numberInput);
    const textInput = document.querySelector('#textInput').value
    console.log(textInput);
    // 원하는 속성구성으로 객체 만들기.
    const obj = { code : 2 , name : nameInput , phone : numberInput , text : textInput };
    console.log( obj );
    list.push(obj);
    console.log(list);
    // 출력함수 재호출
    func2(); // 성공 할때마다 
} // func end

// (2) 전체조회함수 , 실행 : JS열렸을 때 최초 1번 , 등록 성공했을 때( func1 에 대입 ) 
func2(); // 최초 1번 실행
function func2(){ console.log('--- func2 exe ---');
    // <tbody id = "textBody"> 마크업 객체 가져오기 (여기에)
    const textOutput= document.querySelector('#textOutput');
    console.log(textOutput);
    // 1. list의 객체 정보를 html 형식으로 표현
    let html = '';
        // 1-1. list의 code , date , text , number  가져오기
    for ( let t = 0 ; t<= list.length -1 ; t++ ){
        const listname = list[t];
        html += `<tr> 
                    <td>${listname.name}</td>
                    <td>${listname.phone}</td>
                    <td>${listname.text}</td>        
                </tr>`
    } // for end
    // 출력 , innerHTML
    textOutput.innerHTML = html ; // 누적 HTML
} // func end


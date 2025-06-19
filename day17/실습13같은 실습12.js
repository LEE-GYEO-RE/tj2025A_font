/*
[ 실습12 : 미니 가계부 페이지 ]
1. 목표
   - 사용자가 자신의 수입/지출 내역을 날짜, 항목, 금액으로 기록하고, 
   등록된 모든 내역을 한눈에 볼 수 있는 간단한 가계부 웹 페이지를 만듭니다.
2. 화면 구성
   - 페이지는 사용자가 정보를 입력하는 
   **'등록 영역'**과 그 결과를 보여주는 **'목록 영역'**으로 명확히 구분되어야 합니다.
   - 등록 영역:
      - 날짜 선택: 사용자가 내역의 날짜를 달력에서 직접 선택할 수 있어야 합니다.
      - 항목 입력: 사용자가 지출 또는 수입 항목의 내용을 텍스트로 자유롭게 입력할 수 있어야 합니다. 
      (예: "점심 식사", "교통비")
      - 금액 입력: 사용자가 금액을 숫자로 입력할 수 있어야 합니다.
      - 등록 버튼: 위 세 가지 정보를 입력한 후, 목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.
   - 목록 영역:
      -등록된 모든 가계부 내역을 보여주는 표가 있어야 합니다.
      - 표는 "날짜", "항목", "금액" 순서의 열로 구성되어야 합니다.

3. 핵심 기능
   - 초기 데이터 표시:
      - 사용자가 페이지에 처음 방문했을 때, 
      가계부 사용법을 쉽게 이해할 수 있도록 두 개의 예시 내역이 목록 표에 기본적으로 표시되어 있어야 합니다.
   - 내역 등록 기능:
      - 사용자가 '등록 영역'에 날짜, 항목, 금액을 모두 입력하고 "등록" 버튼을 클릭하면, 
      해당 내역이 '목록 영역' 표의 가장 아래쪽에 새로운 행으로 즉시 추가되어야 합니다.
   - 금액 자동 서식:
      - '목록 영역'에 표시되는 모든 금액은 사용자의 가독성을 위해 천 단위마다 쉼표(,)가 자동으로 표시되어야 합니다. 
      (예: 4500이 입력되면 "4,500"으로 보여야 함)
      - 힌트] 변수명.toLocaleString()  :숫자를 세 자리마다 콤마(,)로 구분해주는 유용한 함수
*/

// 1. HTML/CSS 만들기
// 2. 데이터 모델링
// 3. 함수 설계
// 4. 로직 작성
// 5. HTML/CSS <---->함수 연동


// 1. 데이터 모델링
const list = [
    { code : 1 , date : '2025-06-19' , text : '점심식사' , number : 8000 },
    { code : 2 , date : '2025-06-20' , text : '교통비' , number : 1400 }
];
console.log(list) ;

// 2. 함수 설계
// (1) 등록함수 정의 , 실행 : 등록버튼 onclick 했을때.

function func1(){ console.log('--- func1 exe ---');
    // input 마크업 객체에서 입력값(value) 가져오기
    // value = 무조건 문자열로 들어감 , 숫자로 나오게 하려면 documnet 앞에 Number 써야함.
    const datevalue = document.querySelector('#dateInput').value
    console.log(datevalue);
    const textvalue = document.querySelector('#textInput').value
    console.log(textvalue);
    const numbervalue = Number(document.querySelector('#numberInput').value)
    console.log(numbervalue);
    // 원하는 속성구성으로 객체 만들기.
    const obj = { code : 2 , date : datevalue , text : textvalue , number : numbervalue };
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
    const textBody= document.querySelector('#textBody');
    console.log(textBody);
    // 1. list의 객체 정보를 html 형식으로 표현
    let html = '';
        // 1-1. list의 code , date , text , number  가져오기
    for ( let t = 0 ; t<= list.length -1 ; t++ ){
        const listname = list[t];
        html += `<tr> 
                    <td>${listname.date}</td>
                    <td>${listname.text}</td>
                    <td>${listname.number.toLocaleString()}</td>        
                </tr>`
    } // for end
    // 출력 , innerHTML
    textBody.innerHTML = html ; // 누적 HTML
} // func end

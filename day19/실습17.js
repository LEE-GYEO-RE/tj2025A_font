/*
[ 실습17 ] 식당 대기표 페이지 * 제출용( CSS 선택,생략가능 )
1. 목표
    -식당 직원이 대기 손님의 정보를 등록하고, 
    손님은 자신의 전화번호로 대기 상태를 직접 확인할 수 있는 간단한 대기 관리 페이지를 제작합니다.
    -모든 대기 정보는 브라우저의 localStorage 활용하여 관리합니다.

2. 화면 구성
    -페이지는 **'대기 등록 영역'**과 **'대기 확인 영역'**으로 명확히 구분되어야 합니다.
    -대기 등록 영역:
        --대기자 이름 입력: 대기하는 손님의 이름을 입력받는 <input> 필드가 있어야 합니다.
        --전화번호 입력: 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
        --인원 수 입력: 함께 온 인원 수를 숫자로 입력받는 <input> 필드가 있어야 합니다.
        --대기 등록 버튼: 클릭 시 addWaiting() 함수를 호출하는 "대기 등록" 버튼이 있어야 합니다.
    -대기 확인 영역:
        --전화번호 입력: 대기 상태를 확인할 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
        --대기 확인 버튼: 클릭 시 checkStatus() 함수를 호출하는 "대기 확인" 버튼이 있어야 합니다.

3. 데이터 관리
    -저장소: 모든 대기 정보는 브라우저의 **localStorage**를 사용하여 저장 및 관리되어야 합니다.
    -데이터 구조: 대기 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
    -각 대기 팀 객체는 { no: 대기번호, name: '이름', phone: '전화번호', count: 인원수 } 형태를 가집니다.
    -대기번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
    -이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, localStorage 'waitingList'라는 키(key)로 저장되어야 합니다.

4. 핵심 기능 구현
    addWaiting() 구현 (대기 등록):
        -입력된 이름, 전화번호, 인원 수를 받아 새로운 대기 객체를 생성하고, waitingList 배열에 추가합니다.
        -대기번호는 현재 배열의 마지막 대기번호에 1을 더한 값으로 자동 부여합니다.
    checkStatus() 구현 (대기 확인):
        -"대기 확인" 버튼 클릭 시 실행됩니다.
        -입력된 전화번호를 받아, localStorage에 저장된 waitingList 배열에서 전화번호가 일치하는 객체를 찾습니다.
        -일치하는 정보가 있으면, alert를 통해 해당 손님의 "대기번호"를 보여줍니다. (예: "고객님의 대기번호는 O번 입니다.")
        -일치하는 정보가 없으면, alert로 "대기 정보가 없습니다."를 알려줍니다.
*/

// 데이터 구성 , 전역변수 대신 localStorge 사용
// 대기 등록 영역 = addWaiting() 함수 로직 짜기
    // (1) 입력 마크업 객체 가져오기
    // (2) 입력 마크업 객체 내 입력값 가져오기
    // (3) 객체화 시키기
        // - localStorge 에서 waitingList 가져오기
        // - 존재하지 않으면 배열 새로 생성 , 존재하면 타입변환
    // (4) 배열 저장
        // - localStorge 에서 waitingList 저장하기
        // - 배열 타입을 JSON 문자열 타입으로 변환
        // - localStorge 에 waitingList 속성명으로 배열 저장하기
// 대기 확인 영역 = checkStatus() 함수 로직 짜기

// addWaiting() 함수
function addWaiting(){ console.log('--> addWaitiong exe')
    const nameId = document.querySelector('.nameId');     console.log(nameId);
    const phoneNo = document.querySelector('.phoneNo');     console.log(phoneNo);
    const countNo = document.querySelector('.countNo');     console.log(countNo);
    const name = nameId.value;                              console.log( name );
    const phone = phoneNo.value;                            console.log( phone );
    const count = countNo.value;                            console.log( count );
    
    let no = 1;
    let waitingList = localStorage.getItem('waitingList');
        if( waitingList == null ){
            waitingList = [];
        }else{
            waitingList = JSON.parse( waitingList );
            no = waitingList [waitingList.length -1].no + 1 ;
        } // if end
    const obj = { no : no , name : name , phone : phone , count : count };   console.log(obj);
    waitingList.push( obj );                                console.log( waitingList );
    let jsonData = JSON.stringify( waitingList );
    localStorage.setItem('waitingList' , jsonData );
} // func end

// checkStatus() 함수
        // -입력된 전화번호를 받아, localStorage에 저장된 waitingList 배열에서 전화번호가 일치하는 객체를 찾습니다.
        // -일치하는 정보가 있으면, alert를 통해 해당 손님의 "대기번호"를 보여줍니다. (예: "고객님의 대기번호는 O번 입니다.")
        // -일치하는 정보가 없으면, alert로 "대기 정보가 없습니다."를 알려줍니다.
function checkStatus(){ console.log('!!!!checkStatus')
    const userPhone = document.querySelector('.userPhone');                  console.log( userPhone );
    const user = userPhone.value;                                        console.log( user );
        let waitingList = localStorage.getItem('waitingList');
        if( waitingList == null ){ memberList = [ ]; }
        else{ waitingList = JSON.parse( waitingList );}
        console.log( waitingList );
    for ( let index = 0; index <= waitingList.length -1 ; index++){
        const list = waitingList[index];
        if( list.phone == user ){
            alert(`고객님의 대기번호는 ${list.no} 입니다. `); return;
        } // if end
    } // for end
    alert("대기 정보가 없습니다.")
} // func end
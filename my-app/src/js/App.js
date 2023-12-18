import React, {useState} from 'react';
/*
useState : 
-상태를 관리하기 위해 사용되는 함수
-사용법 : 
배열형식으로 사용을 하며, 첫 번째 배열은 현재 상태값
          두 번째 배열은 상태 업데이트 하는 값
const [count, setCount] = useState(0);

   Google 펌
React의 useState는 Hook 중 하나로,

함수형 컴포넌트에서 상태를 관리할 수 있게 해준다.

기존의 클래스형 컴포넌트에서 가능했던 상태관리를 함수형 컴포넌트에서도 할 수 있게 되면서,
코드를 더 간결하고 가독성 좋게 작성할 수 있게 되었다.

useState는 한 쌍의 값, 즉 현재 상태와 그 상태를 업데이트하는 함수를 반환한다
이는 배열 구조 분해를 통해 각각의 변수에 할당할 수있다
*/



function Counter() {
  //자바스크립트 코드 작성하는 공간
  // [초기값, 변경될 값] = 초기값 설정해주는 공간
  const [count, setCount] = useState(0);

  const increament = () =>  {
    setCount(count + 1);
  }

  return ( //html 태그 코드는 return 안에 작성해줌
   <div>
    <h1>Count:{count}</h1>
    <button onClick={increament}>증가시키는 버튼</button>
   </div> 
  )
}


function App() {
  return (
    <div>
      <Counter />
      <h1>안녕 React</h1>
      <h2>{msg}</h2>
      <p>이것은 React JS입니다.</p>
      <HiCompornent/>
      <HiCompornent/>
      <HiCompornent/>
    </div>
  );
}

export default App;

//Js에서는 글자값이닞 숫자값인지 중요하지 않음
//재사용이 가능한지, 재할당이 가능한지가 중요
/*
※ var : 재할당, 재선언 가능 // 밑에서 안된 error 예제 모두 가능

※ let : 재선언은 하지 못하지만 재할당은 가능
let count = 0;
count = 1;
let count = 2; -> 이건 불가능

※ const : 재선언 재할당 둘다 불가 / 한 번 선언하면 다시 값을 변경하거나 수정할 수 없음
*/

const msg = "hihi";
//msg = "aa"; // msg에 다른 값을 넣고 싶어서 추가로 값 변경을 하려하면 error 발생함

function HiCompornent(){
  return (
    <div>
      <h1>{msg}</h1>
      <p>이것은 Hi 컴포넌트입니다.</p>
    </div>
  )
}

/*
export default : 
-다른 파일에서 사용할 수 있도록 내보내는 부분
-기본적으로 내보낼 항목을 지정하는 역할을 함
-다른 Js에서 App.js에 있는 function App을 사용할 수 있도록 내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함

//onClick : 순수자바스크립트에서는 onclick(소문자) 작성했지만 리액트자바스크립트에서는 onClick C를 대문자로 활용하는 카멜케이스 사용함
*/


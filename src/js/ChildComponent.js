import React from 'react';
import ParentComponenet from './ParentComponent';
//function과 const로 작성한 함수는 큰 차이가 없음
//보통 const 작성한 함수는 함수 표현식 (Function Expression)
//예시 const About = () => <div>소개페이지</div>;
//const ChildComponent = (props) => <div>{props.message}</div>;
//const는 주로 간단하게 함수를 표현할 때 많이 사용

//function으로 작성한 함수는 함수 선언식 (Function Declaration) // 섬세한 표현이 필요할 때 사용
function ChildComponent(props) {
    return <div>{props.message}</div>  //( ) 괄호 생략. 구체적인 이유는?
}

export default ChildComponent;
컴포넌트란 
- 재사용이 가능한 각각의 독립된 모듈(함수나 클래스)
- 반복되는 내용을 하나의 함수로 압축시켜 함수를 불러와서 사용하는 것을 재사용

종류
* 함수형 컴포넌트 : 
- 간단하게 함수로 정의할 수 있고 Hook을 많이 사용
예제) NewComponent.js
예제코드) 
    import React from 'react';
    funtion FuncComponent(){
        return (
            <div> hello React </div>
        )
    }

* 클래스형 컴포넌트 :
- class 키워드를 사용하며, 상태(state)와 같은 라이프사이클 메서드를 활용할 수 있음
    import Reatc, {Component} from 'react';

    class ClassComponent extends Component {
        render(
            <div> hello react </div>
        )
    }

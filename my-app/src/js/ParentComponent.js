import React from 'react';
import ChildComponent from './ChildComponent';

//ChildeComponent에서는 prop 라는 이름으로 파라미터를 전달받는다.
//prop는 무조건적으로 사용해야하는 이름은 아니지만 부모에게 전달받아서
//데이터를 사용한다는 의미를 지니기 때문에 부모 컴포넌트에서 전달받을 때는 
//prop 라는 이름을 사용하는 것이 좋음

//message 와 data 또한 개발자가 정해놓은 이름일 뿐이며, 무조건 작성해야하는 이름이 아님

function ParentComponent() {
    const data = 'Hello 나는 ParentComponent 야';

    return <ChildComponent message = {data} />;
}

export default ParentComponent;
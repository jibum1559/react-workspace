import React, {useState} from "react";

function ObjectExample() {
    // age:'20'
    // '' 문자열과 숫자를 더하는 것으로 인식 ex) 20 + 1 = 201
    
    const [person, setPerson] = useState({name:'KH', age:20});
    
    const updateAge = () => {
        //...person : 현재 person 객체 속성을 펼쳐서 새로운 객체로 만들어주는 역할
        //객체 속성들은 그대로 복사가 돼서 만들어짐
        //...person, age, 복사된 객체에서 값이 변화하거나 추가해야할 내용이 있으면 , 뒤에 값과 속성을 추가함
        // age : person.age + 1 age 속성에 person.age + 1 한 값을 저장하겠다는 의미
        setPerson({...person, age : person.age + 1});
    }
    return (
        <div>
            <p>Name : {person.name}</p>
            <p>Age : {person.age}</p>
            <button onClick={updateAge}>나이올리기 버튼</button>
        </div>
    )
}
export default ObjectExample;
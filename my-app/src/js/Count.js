import React, {useState} from 'react';
//import logo from '../public/logo192.png';   
// import logo from './logo.svg';
// import s from './귀여운토끼(수정).png';
//증가시키는 함수
function AddCount() {
    //useState 를 활용해서 값 증가하는 함수를 완성할 것
    const [count, setCount] = useState(2);

    const increment = () => {
        setCount(count + 4);
    }
    
    return (
        <div>
            
         {/*  <button onClick={increment}>숫자</button>
            <button onClick={addImage}>이미지</button>
            <h1>숫자 : {count} </h1>
            {[...Array(imgCount)].map((_, index) => (
                <img key={index} src='logo192.png' alt={`logo-${index}`} />
                ))}*/}
        </div>

    )
}

function Count() {

    return (
        <div>
            <AddCount />
        </div>
    )

}

export default Count;
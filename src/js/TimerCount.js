import React, {useState,useEffect} from 'react';
import ticket from '../img/티켓.jpg';

function Timer() {
    const [count, setCount] = useState(100);
    useEffect(() => {
        document.title =`남은티켓 : ${count}`;
    });

    /*
    <button onClick={decrement}>구매</button>
    위 버튼 클릭과 const increment로 작성해준 메서드는 동일한 효능을 지닌다.

    <button onClick={() => setCount(count - 1)}/>

    const decrement = () => {
        setCount(count - 1);
    }
    */
    
    return (
        <div>
            <p>{count}</p>
            <img src={ticket}/><br/>
           {/* <button onClick={decrement}>구매</button>*/}
            <button onClick={() => setCount(count - 1)}/>
        </div>
    )
}
export default Timer;
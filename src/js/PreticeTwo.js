import React, {useState, useEffect, useCallback} from 'react';
import '../App.css';

function ExCallBack(){
    const [count, setCount] = useState(0);
    const increaClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={increaClick}>확인</button>
        </div>
    )
}

function TodoList() {
    const [list, setList] = useState([]);
    
    const [newList, setNewList] = useState('');
    
    const addList = () => {
        if(newList.trim() !== ''){
            setList([...list, newList]);
            
            setNewList('');
        }
    };
    
    const removeList = (index) => {
        const updateList = [...list];
        updateList.splice(index, 1);
        setList(updateList);
    }

    
    useEffect(() => {
        document.title = `리스트추가 : ${list}`;
        console.log('list가 추가됨 :', list);
    });

    return (
        <div>
            <h2>여행 스케쥴 확인 리스트</h2>
            <div>
                <input 
                type="text"
                value={newList}
                onChange={(e) => setNewList(e.target.value)}/>
                <button onClick={addList}>리스트 추가</button>
               
               <ul>
                {list.map((lists, index) => (
                    <li key={index}>
                        {lists}
                        <button onClick={() => removeList(index)}>삭제</button>
                        <ExCallBack />
                    </li>
                    ))}
               </ul>
            </div>
        </div>
    );
};

function MiniApp(){
    return (
        <div>
            <TodoList/>
        </div>
    )
}

export default MiniApp;

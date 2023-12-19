import { useState, useEffect, useCallback } from "react";

function ExCallBack(){
    const [count, setCount] = useState(0);
    const inClick = useCallback (()=> {
        setCount(count + 1);
    }, [count]);
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={inClick}>증가하기</button>
        </div>
    )
}
//const TodoList = () => {
function TodoList () {
    //할 일 목록 배열을 위한 state 생성
    const [todos, setTodos] = useState([]);

    //할 일 추가하기 위한 input String  state 생성
    const [newTodo, setNewTodo] = useState('');

    //할 일이 추가될 때마다 자동으로 할 일 개수 추가해주는
    //count state 생성
    const [count, setCount] = useState(0);

    //할 일이 추가될 때 사용 하는 함수
    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
        //할 일이 추가될 때마다 count 증가
        setCount(count + 1);
    };

    //할 일을 삭제하는 함수
    const removeTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos.splice(index,1);
        setTodos(updateTodos);

        // 할 일 삭제할 경우 count 감소
        setCount(count -1);
    };

    useEffect(() => {
        document.title = `할일 갯수 : ${count}`;
    }, [count]);

    return (  
        <div>
            <h2>To do List</h2>
            <div>
                <input 
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}    
                />
                <button onClick={addTodo}>추가하기</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>
                            삭제하기
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function MiniApp(){
    return(
        <div>
            <ExCallBack />
            <TodoList />
        </div>
    )
}
export default MiniApp;
import React, {useState, useEffect} from "react";
import axios from 'axios';
//npm install axios

const PostAPI = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        //만약에 데이터를 가져오는데 성공할 경우 then response 데이터 가져오기
        .then(response => setData(response.data))
        .catch(error => 
            console.log("error 발생",error)); 
    }, []);

    return (
        <>
        {data.map(post => (
            <div key={post.id}>   {/*key는 최초 1회만 쓰고 div 묶는게 좋다*/}
                <p>제목 : {post.title}</p>
                <p>내용 : {post.body}</p>
            </div>    
        ))}
        </>
    )

}

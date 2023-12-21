import React, {useEffect, useState} from "react";

function Board() {
        //만약에 로컬 스토리지에 저장된 게시글이 있으면
        //로컬 스토리지에서 게시글 데이터 불러오기
        //만약 저장된 게시글이 없으면 [] 빈 배열 가지고 옴
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    //게시글 목록 관리
    //const [posts, setPosts] = useState([]);에서 []대신 savedPosts를 불러옴
    const [posts, setPosts] = useState(savedPosts);
    
    //새로운 게시글 입력받기
    const [newPosts, setNewposts] = useState('');

    //페이지가 실행될 때나 게시글이 업데이트될 때 로컬 스토리지에 저장
    //JSON.stringify : 자바스크립트 객체나 배열을 JSON 문자열로 변환하는 함수
    //[posts] : 게시글 목록에 어떤 변화가 생길 때마다 갱신된 최신 데이터가 저장
    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);
 

    //게시글 추가해주는 함수
    const addPosts = () => {
        setPosts([...posts, newPosts]);
        setNewposts('');
        //입력된 게시글을 로컬스토리지에 저장
        //localStorage 밑에 Item과 setItem 존재함
        //'posts' 키에 현재 게시글 목록과 새로운 게시글을 추가한 배열을 JSON 문자열로 변환해서 저장
        localStorage.setItem('posts', JSON.stringify([...posts, newPosts]));
        //                     key
    }

    //게시글 삭제하기
    //todoList 할일 목록 유지할 수 있도록 추가해주기
    const deletePost = (index) => {
        const removePost = [...posts];
        removePost.splice(index,1);
        setPosts(removePost);
        localStorage.setItem('posts', JSON.stringify(removePost));
    };
    
    return (
        <div>
            <h1>게시판</h1>
            <div>
                <textarea
                row="4"
                cols="50"
                    placeholder="게시글을 입력하세요"
                    value={newPosts}
                    onChange={(e) => setNewposts(e.target.value)}
                >

                </textarea>
                <br />
                <button onClick={addPosts}>게시글 추가</button>
            </div>
            <div>
                <h2>게시글 목록</h2>
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>
                            {post}
                            <button onClick={() => deletePost(index)}>삭제하기</button>
                        </li>
                    ))}
                  
                </ul>
            </div>
        </div>
    )


}

export default Board;
import React, {useEffect, useState} from "react";
import axios from 'axios';

const PostComment = () => {
    const [userData, setUserData] = useState([]);
    const [postComment, setPostComment] = useState([]);
    const [postsData, setPostsData] = useState([]);

    //API를 두 개 이상 가져올 경우
    useEffect(() => {
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/comments'),
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ])
        //데이터를 성공적으로 가져왔을 때
        //axios.spread 여러가지 응답을 개별 응답으로 나눠서 제공된 set 함수를 전달하는 역할
        .then(axios.spread((usersResponse, commentsResponse, postsResponse) => {
            setUserData(usersResponse.data);
            setPostComment(commentsResponse.data);
            setPostsData(postsResponse.data);
        }))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>User 정보</h2>
            {userData.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}

            <h2>게시물 정보</h2>
            {postsData.map(post => (
                <div key={post.id}>
                    <p>제목 : {post.title}</p>
                    <p>내용 : {post.body}</p>
                </div>
            ))}

            <h2>게시물 댓글</h2>
            {postComment.map(comment => (
                <p key={comment.id}>{comment.body}</p>
            ))}
        </div>
        )
}
export default PostComment;

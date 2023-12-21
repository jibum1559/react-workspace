import React, {useState, useEffect} from "react";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            //response.data = selece *
        })
        .catch(err => {
            console.log("err", err)
        });
    }, []);

    return (
        <div>
            <h1>관리자 사이트</h1>
            <h2>가입한 유저 정보</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>유저 이  름 : {user.name}</p>
                        <p>유저 이메일 : {user.email}</p>
                        <p>유저 주  소 : {user.address && user.address.street}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default UserList;
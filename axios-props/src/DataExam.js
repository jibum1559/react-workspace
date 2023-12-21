import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataExam = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        //Axios를 활용해서 API GET 요청
        axios.get('https://jsonplaceholder.typicode.com/todos')
        //만약 데이터를 가져오는데 성공한다면 데이터 처리
            .then(response => {
                setData(response.data);
            })
        //만약 데이터를 가져오는데 실패한다면 데이터 처리 
            .catch(error => {
                console.log('일치하는 데이터가 없습니다.',error);
            });
    }, []); //useEffect에서 함수가 한 번만 실행될 수 있도록 빈 배열을 생성해둠
    
    return (

        <>
        {data ? (
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        ) : (
            <p>데이터가 없습니다.</p>)
        }
        </>
    )
}

export default DataExam;

/*
axios.get('https://jsonplaceholder.typicode.com/todos');

만약 데이터를 가져오는데 성공한다면 데이터 처리
axios.get로 데이터를 가져오는 데 성공한다면 then을 사용해서 응답받을 데이터를 처리한다.
응답을 받을 때는 response로 서버에서 받은 응답을 표시
response가 실제로 요청에 관한 정보와 서버에서 실제로 반환된 데이터를 보여줌
response를 활용해서 전달받은 데이터를 업데이트 해서 화면에 보여주기 위해 setData를 활용
.then(response => { setData(response.data);})

만약 데이터를 가져오는데 실패한다면 데이터 처리 
데이터를 가져오는 데 실패 catch문을 활용해서 에러를 표시
에러를 표기할 때는 console.log 를 활용해서 개발자들 간에 보여질 수 있도록 표기 error는 변수명일 뿐 error가 아닌
err, aaa 이런 변수명으로 받고싶다면 변수명을 변경해서 표기해도 좋음
.catch(error => { ("",error);});
*/

/*
 "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
*/
//컴포넌트가 function 이나 class로 묶어 재사용할 수 있도록 만들어준 함수나 클래스
import React, {useState, useEffect} from 'react';

function AnimalSound() {
    //script와 관련된 기능을 작성해줌
    const [animal, setAnimal] = useState('cat');
    
    useEffect(() => {
        // console.log 안에 함수나 변수명을 사용하고자 한다면 '', "" 대신에 `` 사용
        //마운트될 떄 연결될 때 바로 실행이 되는 부분
        console.log(`시작 : ${animal} : 야옹`)

        //언마운트될 때 함수 연결이 정리될 때 실행되는 함수
        return () => {
            console.log(`종료`);
        };
        // [animal] animal이라는 값이 변경될 때마다 useEffect 안에 작성한 내부 코드를 다시 실행하기 위해 작성
        // [] 추후에는 animal 하나만 들어있는 것이 아니라 여러 변수들이 들어있을 수 있으므로 배열로 묶어주는 것
    }, [animal]); //animal이 바뀔때마다 실행 //[animal] = 배열에서 인덱스 0번에 있는 것
    
    const handleSount = (newAnimal) => {
        setAnimal(newAnimal);   
    }
    return(
        <div>
            <h1>동물 소리 앱</h1>
            <p>{animal} 소리는</p>
            <button onClick={() => handleSount('cat')}>Cat</button>
            <button onClick={() => handleSount('dog')}>Dog</button>
            <button onClick={() => handleSount('bird')}>Bird</button>
        </div>
    )
}
export default AnimalSound;


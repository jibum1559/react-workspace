import React, {useState} from "react";
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import 루피2 from '../img/루피2.png';
import 조로 from '../img/조로.png';
import 카이도우 from '../img/카이도우.jpg';

function ImageChange() {
    //초기 이미지 경로는 ../img/image1.jpg로 설정되어있는 image1으로 초기 이미지 설정
    const [imageSrc, setImageSrc] = useState(루피2);
    const [isClick, setIsClick] = useState(1);

    //이미지를 클릭할 때마다 이미지가 변경될 수 있도록 클릭 함수 만들기
    //== 은 동등연산자로 자동으로 형 변환을 수행하기 때문에 데이터 타입이 다를 경우에도 변환을 일부 시도하기도 함
    //=== 은 일치연산자로 값과 데이터 타입이 모두 같아야지 true를 변환함
    const handleClick = () => {
        if (isClick === 1) {
            setImageSrc(루피2);
            setIsClick(2);
        } else if(isClick === 2) { //거짓을 때 //false 로 되어있는 값을 true로 변경
            setImageSrc(조로);
            setIsClick(3);
        } else {
            setImageSrc(카이도우);
            setIsClick(1);
        }

        {/*
        const handleClick = () => {
        if (isClick === 1) {
            setImageSrc(루피2);
            setIsClick(2);
        } else if(isClick === 2) { //거짓을 때 //false 로 되어있는 값을 true로 변경
            setImageSrc(조로);
            setIsClick(3);
        } else {
            setImageSrc(카이도우);
            setIsClick(1);
        }
        */}

    }

    return (
        <div>
            <img src={imageSrc} onClick={handleClick}/>
        </div>
    )

}
export default ImageChange;
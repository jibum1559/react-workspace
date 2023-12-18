import React, {useState} from "react";

function IndexExample() {
    const [inputText, setInputText] = useState(''); // 빈 글자를 나타낼 때 '', "" 상관없이 사용할 수 있음

    const handleChange = (abcde) => {            {/*e = 변수명*/}
        setInputText(abcde.target.value);
    //abcde.target.value 
    //abcde : 사용자가 입력하거나 선택했을 때 어떤 값을 입력하고 선택했는지를 담기 위환 객체에 속함(빈바구니)
    //target : 사용자가 작성하거나 입력한 html 입력란을 나타냄(그릇)
    //value : 사용자가 입력한 값을 가져옴
    //target.value : select나 체크박스, button, input 등 어디서든 쓸 수 있음
    }

    return (
        <div>
            <input type="text" 
                   value={inputText}    
                   onChange={handleChange}/>
            <p>내가 작성한 글 : {inputText}</p>
        </div>
    )
}
export default IndexExample;
import React, {useState, useEffect} from "react";
import axios from "axios";

const JokeContent = () => {
    const [jokeUrl, setJokeUrl] = useState('');

    /*
        useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
                    setJoke(response.data.joke || `${response.data.setup} ${response.data.delivery}`);
                }catch (err){
                    console.log("err",err);
                }
            };
            fetchData();
        },[]);
        ↓ 아래 버전으로 변경해서 사용하면 사용 가능
    */

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Any')
        .then(response => {
        setJokeUrl(response.data.jokeUrl || `${response.data.setup} ${response.data.delivery}`);
            setJokeUrl(response.data[0].joke);
        })
        .catch(error => {
            console.log('net search 404', error);
        })
    },[]);

    return (
        <div>
            <h2>농담따먹기</h2>
            <p>{jokeUrl}</p>
        </div>
    )

}
export default JokeContent;

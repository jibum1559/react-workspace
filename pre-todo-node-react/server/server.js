// server.js

const express = require('express');
const oracledb = require('oracledb');

// 가지고 온 express 활용하기 위한 app 생성
const app = express();
const PORT = 5010;

// 현재 도메인에서 포트번호를 5010만 사용하는 것이 아니라 리액트에서 가지고 온 포트번호도 사용할 것이기 때문에 cors를 사용
const cors = require('cors');

// 어떤 경로든 백엔드에 오는 요청을 사용할 수 있도록 허용
app.use(cors());

// Oracle 연결 정보
const dbConfig = {
  user: 'react1',
  password: 'react1',
  connectString: 'localhost:1521/XE',
};

// db에 연결을 도와줄 express에서 json 파일로 db를 보여주는 것을 허락해서 json 형식으로 보여줄 수 있도록 설정
app.use(express.json());

//binds = [], options = {}
//파라미터를 필수로 넣지 않아도 됨
//binds = [],
//where Id 추가적으로 클라이언트가 넣어야지만 들어갈 수 있는 값을 넣어줌

//예를 들어 runQuery(select * from todos where id = taskId,[taskId])
//options = {} 자동 커밋을 해야하거나 객체화로 변경해줄 때 많이 사용
//options은 하나만 있을 일이 없을 수 있으므로 {}) 안에 내용을 여러개 묶어서 사용할 수 있도록 함

async function runQuery(sql, binds = [], options = {}) {
  // 비동기로 잠깐 대기하는 상태
  // String connection = null;
  let connection;

  try {
    // 2줄 추가 1. DB연결 가져오기
    connection = await oracledb.getConnection(dbConfig);
    // 2. 가져온 결과를 return을 활용하여 전달하기
    const result = await connection.execute(sql, binds, options);
    //return result.rows;
    // 가공된 데이터 반환
    return result.rows.map((row) => ({
      ID: row[0],
      TASK: row[1],
    }));
  } catch (error) {
    console.error(error);
  }
}

// Java로 치면 controller
// api endpoint를 사용하여 backend 연결 설정
app.get('/', (request, response) => {
  response.send('백엔드 연결에 오신 것을 환영합니다 !');
});

// DB와 제대로 연결되어 쿼리가 제대로 나오는지 확인
app.get('/api/todos', async (request, response) => {
  const todos = await runQuery('SELECT * FROM todos');
  response.json(todos);
});

// 서버가 제대로 실행되는지 확인하기 위해 콘솔창에 서버 시작을 알리기
app.listen(PORT, () => {
  console.log(`서버가 시작되었습니다 : http://localhost:${PORT}`);
});

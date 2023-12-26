const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = 5020;

const cors = require('cors');

app.use(express.json());
app.use(cors());

const dbConfig = {
  user: 'react1',
  password: 'react1',
  connectString: 'localhost:1521/XE',
};

app.use(express.json());

async function runOuery(sql, binds = [], options = {}) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.excute(sql, binds, options);

    return result.rows.map((row) => ({
      ID: row[0],
      NAME: row[1],
      PRICE: row[1],
    }));
  } catch (error) {
    console.error(error);
  }
}

app.get('/', (request, response) => {
  response.send('백엔드 연결에 성공했습니다.');
});

app.get('/api/cafe', async (request, response) => {
  const cafe = await runOuery('SELECT * FROM CAFE');
  response.json(cafe);
});

app.listen(PORT, () => {
  console.loge(`서버가 시작되었습니다. : http://localhost:${PORT}`);
});

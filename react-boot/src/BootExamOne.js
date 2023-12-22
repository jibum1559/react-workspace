import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 벚꽃 from './img/배경1.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-dark">
        <h1>리액트 부트스트랩 사이트</h1>
      </header>
      <main className="container mt-2">
        <section className="mb-5">
          <div className="row">
            <div className="col-md-4">
              <h2>벚꽃</h2>
              <img className="img-fluid" src={벚꽃} />
            </div>
            <div className="col-md-4">
              <h2 className="text-center py-5">About</h2>
            </div>
            <div className="col-md-4">
              <h2>벚꽃</h2>
              <img className="img-fluid" src={벚꽃} />
            </div>
          </div>
          {/* col 은 총 12개로 이루어져 있으며, 위 com은 4,4,4 세 구간으로 나눔 */}
          <div className="row">
            <div className="col-md-4">
              <h2 className="text-center py-5">About</h2>
            </div>
            <div className="col-md-4">
              <h2>벚꽃</h2>
              <img className="img-fluid" src={벚꽃} />
            </div>
            <div className="col-md-4">
              <h2 className="text-center py-5">About</h2>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="mb-4">세션2</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">세션3-1</h5>
                  <p className="card-text">안녕하세요 세션 3-1입니다.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">세션3-2</h5>
                  <p className="card-text">안녕하세요 세션 3-2입니다.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">세션3-3</h5>
                  <p className="card-text">안녕하세요 세션 3-3입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-center mb-4">Contect Us</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailSmall"
              />
              <small id="emailSmall" className="form-text text-muted">
                이메일
              </small>
            </div>
            <div className="mb-3">
              <label className="form-label">메세지 작성</label>
              <textarea rows="4" className="form-control"></textarea>
            </div>
            <button className="btn btn-primary">전송하기</button>
          </form>
        </section>
      </main>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; 2023 My React Site</p>
      </footer>
    </div>
  );
}

export default App;

{
  /*
        container: 본문을 담을 컨테이너를 생성
        mt-4: mt 는 margin top을 나타냄, -4는 상단 마진을 4단위로 설정하겠다.

        row: 컬럼을 나열하는데 사용
        
        col-md-6: col은 column의 약자
                  md는 medium 중간 화면 크기
                  6는 6개의 column을 차지
                  1줄의 컬럼은 12개 구성
        
        bg-dark: background dark

        text-light: 글자색 흰색으로 변경

        py-5: padding-5
              y: 위 아래 여백을 조절하는 클래스
              x: 좌우 여백을 조절하는 클래스
        부트스트랩에서 패딩을 상하좌우 주고 싶다면
        px-1, py-1해서 숫자 조절해주면 됨

        BootStrap: 여백의 크기를 1~5까지 5단계

        card: 정보를 시각적으로 보여주는데 사용
        card-body: 카드의 내용을 감싸는 부분 텍스트, 이미지와 같은 내용을 담는 공간
        card-text: 카드에서 일반적인 텍스트 내용을 나타냄
        card-title: 카드에서 제목을 나타냄

        form-label: 폼 라벨은 사용자에게 입력하는 공간에 어떤 정보를 입력해줘야하는지 
                    알려주는 텍스트 라벨용

        form-control: 부트스트랩 스타일에 맞게 스타일링 된 폼
        주로 입력필드에서 많이 사용, 텍스트 입력, 이메일 입력, 패스워드 입력 등 사용

        aria-descriptedby: 웹에서 label과 input에 설명요소를 지정할 때 사용
                            따로 small, p 와 같은 태그를 걸어서 id 값으로 연결지어 사용
        
        rows: 열의 크기값

        btn: 버튼의 약자
        btn-primary: css 규격을 사용하는 곳은 대부분 primary 말을 파란색 계열로 지정해서 사용
      */
}

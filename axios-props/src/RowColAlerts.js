//RowColAlerts.js
import React from 'react';
// npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Pagination,
  Container,
  Navbar,
  Row,
  Col,
  Alert,
} from 'react-bootstrap';
export default function RowColAlerts() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">리액트</Navbar.Brand>
          <Navbar.Brand href="#home">리액트</Navbar.Brand>
          <Navbar.Brand href="#home">리액트</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h2> 컬럼 1번</h2>
          </Col>
          <Col>
            <h2>컬럼 2번</h2>
          </Col>
        </Row>
      </Container>
      <Alert>
        <Alert.Heading>알람 성공!!</Alert.Heading>
        <p>이것은 알람이여~~</p>
      </Alert>
      {/* 페이지네이션 */}
      <Row>
        <Col>
          <h2>페이지네이션</h2>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis /> {/**Ellipsis ... 으로 처리 */}
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>
    </div>
  );
}

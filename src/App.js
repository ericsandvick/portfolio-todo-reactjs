
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header";
import ToDoList from "./TodoList";

function App() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col xl={{ span: 10, offset: 1 }}>
            <ToDoList />        
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

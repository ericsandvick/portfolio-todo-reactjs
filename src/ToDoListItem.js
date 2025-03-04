import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ToDoDeleteForm from './ToDoDeleteForm.js';
import ToDoEditForm from './ToDoEditForm.js';
import Moment from 'moment/moment.js'


function ToDoListItem(props) {

    const show = () => {
        if (props.filterValue === "all")
        {
                return true;
        }
        else if (props.filterValue === "active" && props.toDo.isComplete === false)
        {
            return true;
        }
        else if (props.filterValue === "done" && props.toDo.isComplete === true)
        {
            return true;
        }

        return false;
    }

    if (show())
    {
        return (
            <ListGroup.Item>
                <Row>
                    <Col xs={10} className="my-auto">
                        <Row>
                            <Col xs={1} md={1}>
                                <Form.Check 
                                    id={props.toDo.id}
                                    inline="true"
                                    checked={props.toDo.isComplete}
                                    onChange={() => props.updateIsComplete(props.toDo.id)}
                                />
                            </Col>
                            <Col xs={11} md={7}>
                                <Title title={props.toDo.title} isComplete={props.toDo.isComplete} />
                            </Col>
                            <Col md={4}>
                                <DueDate dueDate={props.toDo.dueDate} isComplete={props.toDo.isComplete} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} className="my-auto text-end">
                        <Toolbar id={props.toDo.id} isComplete={props.toDo.isComplete} title={props.toDo.title} dueDate={props.toDo.dueDate} editCallback={props.editCallback} deleteCallback={props.deleteCallback} />
                    </Col>
                </Row>
            </ListGroup.Item> 
        );      
    }

    return <></>;
}

export default ToDoListItem

function Title(props) {

    if (props.isComplete === true) {
        return (
            <span className="text-decoration-line-through text-secondary">
                {props.title}
            </span>
        );
    }
    
    return (<strong className="">{props.title}</strong>);
}

function DueDate(props) {

    if (props.isComplete === true){
        return (
            <span className='text-secondary'>{Moment(props.dueDate).format('MM/DD/YYYY')}</span>
        );
    }
    
    if (Moment().isSame(Moment(props.dueDate), 'date')){            
        return (
            <>
                <span>{Moment(props.dueDate).format('MM/DD/YYYY')}</span>
                <Badge bg="info" className="ms-2">Due Today</Badge>
            </>
        );
    }
        
    if (Moment().isAfter(Moment(props.dueDate), 'date')){            
        return (
            <>
                <span>{Moment(props.dueDate).format('MM/DD/YYYY')}</span>
                <Badge bg="warning" className="ms-2">Overdue</Badge>
            </>
        );
    }

    return (
        <span>{Moment(props.dueDate).format('MM/DD/YYYY')}</span>
    );
}

function Toolbar(props) {

    if (props.isComplete === false) {
        return (
            <>                
                <ToDoEditForm id={props.id} title={props.title} dueDate={props.dueDate} editCallback={props.editCallback} />

                <ToDoDeleteForm id={props.id} title={props.title} deleteCallback={props.deleteCallback} />
            </>
        );        
    }
}

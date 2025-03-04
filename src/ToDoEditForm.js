import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Moment from 'moment/moment.js'

function ToDoEditForm(props) {

    // State for showing the modal
    const [show, setShow] = useState(false);

    // State for title
    const [titleEdited, setTitleEdited] = useState(props.title);
    
    // State for due date
    const [dueDateEdited, setDueDateEdited] = useState(Moment(props.dueDate).format('yyyy-MM-DD'));

    // Validation satat
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        // Do not submit the form via postback
        event.preventDefault();
        event.stopPropagation();

        // Form valid?
        if (form.checkValidity()) {
            // Call edit callback if supplied
            if (props.editCallback){
                props.editCallback(props.id, titleEdited, dueDateEdited);
            }
            
            setShow(false);
        }
    
        setValidated(true);
    };
    
    // Closes the modal
    const handleClose = () => setShow(false);

    // Shows the modal
    const handleShow = () => {

        // Reset title and due date in use state to the supplied values
        setTitleEdited(props.title);
        setDueDateEdited(props.dueDate);
        
        // Reset validation
        setValidated(false);

        setShow(true);
    };

  return (
    <>
        <Button className="mb-2 mb-md-0 me-md-2" variant="primary" size="sm" onClick={handleShow}>
            <i className="fa-sharp-duotone fa-regular fa-pen-to-square"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit ToDo</Modal.Title>
            </Modal.Header>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Body>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control required type="text" maxLength={100} autoComplete="off" placeholder="Title" value={titleEdited} onChange={e => setTitleEdited(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control required type="date" maxLength={100} placeholder="Due date" value={Moment(dueDateEdited).format('yyyy-MM-DD')} onChange={e => setDueDateEdited(e.target.value)} />
                            </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            <i className="fa-sharp-duotone fa-regular fa-save me-1"></i>
                            Save
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Form>
      </Modal>
    </>
  );
}

export default ToDoEditForm;
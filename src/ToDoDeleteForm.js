import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ToDoDeleteForm(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

    const handleDelete = () => {

        // Delete callback?
        if (props.deleteCallback) {            
            props.deleteCallback(props.id);
        }

        setShow(false);
    };

  return (
    <>
        <Button variant="secondary" size="sm" onClick={handleShow}>
            <i className="fa-sharp-duotone fa-regular fa-trash"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete ToDo?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete '{props.title}'?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDelete}>
                    <i className="fa-sharp-duotone fa-regular fa-trash me-1"></i>
                    Delete
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
      </Modal>
    </>
  );
}

export default ToDoDeleteForm;
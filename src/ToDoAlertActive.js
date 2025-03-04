import Alert from 'react-bootstrap/Alert';

function ToDoAlertActive(props) {

    return (
        <Alert key="success" variant="success" show={props.show()} className='mt-4'>
            <i class="fa-sharp-duotone fa-regular fa-party-horn me-2"></i>
            <strong>Hooray!</strong> All of your todos are done.
        </Alert>
    );
}

export default ToDoAlertActive;
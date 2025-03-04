import Alert from 'react-bootstrap/Alert';

function ToDoAlertDone(props) {

    return (
        <Alert key="warning" variant="warning" show={props.show()} className='mt-4'>
            <i class="fa-sharp-duotone fa-regular fa-face-worried me-2"></i>
            <strong>Oh boy!</strong> You haven't completed any of your todos.
        </Alert>
    );
}

export default ToDoAlertDone;
import Alert from 'react-bootstrap/Alert';

function ToDoAlertNone(props) {

    return (
        <Alert key="info" variant="info" show={props.show()} className='mt-4'>
            <i class="fa-sharp-duotone fa-regular fa-circle-exclamation me-2"></i>
            <strong>Heads up!</strong> You haven't added any todos.
        </Alert>
    );
}

export default ToDoAlertNone;
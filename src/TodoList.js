import ListGroup from 'react-bootstrap/ListGroup';
import ToDoListFilter from './ToDoListFilter.js';
import ToDoListItem from './ToDoListItem.js';
import ToDoCreateForm from './ToDoCreateForm.js';
import ToDoAlertNone from './ToDoAlertNone.js';
import ToDoAlertActive from './ToDoAlertActive.js';
import ToDoAlertDone from './ToDoAlertDone.js';
import ToDo from './ToDo.js'
import Moment from 'moment/moment.js'
import { useState } from 'react';


// Todo id incrementer
let nextToDoId = 0;

function ToDoList() {

    // Sorts todo list by due date asc
    const dueDateSort = (a, b) => {
        if (Moment(a.dueDate).isBefore(b.dueDate)) {
            return -1;
        }
        if (Moment(b.dueDate).isBefore(a.dueDate)) {
            return 1;
        }
    
        // names must be equal
        return 0;
    }

    const seedToDos = [
        new ToDo(nextToDoId++, "Get more blue milk", Moment().add(-1, 'days').toDate().toString(), true),
        new ToDo(nextToDoId++, "Clean the droids", Moment().toDate().toString(), false),
        new ToDo(nextToDoId++, "Find Yoda", Moment().add(7, 'days').toDate().toString(), false),
        new ToDo(nextToDoId++, "Become a Jedi Master", Moment().add(14, 'days').toDate().toString(), false),
        new ToDo(nextToDoId++, "Save the galaxy", Moment().add(30, 'days').toDate().toString(), false),
    ].sort(dueDateSort);

    // Todo list state
    const [toDos, setToDos] = useState(seedToDos);

    // Filter value state
    const [filterValue, setFilterValue] = useState("all");

    // Counts
    const getAllCount = () => toDos.length;
    const getActiveCount = () => toDos.filter(t => t.isComplete === false).length;
    const getDoneCount = () => toDos.filter(t => t.isComplete === true).length;

    // Show status for alerts    
    const showAlertNone = () => getAllCount() === 0;
    const showAlertActive = () => filterValue === "active" && getAllCount() > 0 && getActiveCount() === 0;
    const showAlertDone = () => filterValue === "done" && getAllCount() > 0 && getDoneCount() === 0;

    // Created, edit and delete functions
    const updateIsComplete = (id) => {

        const updatedToDos = toDos.map(t => {
            if (t.id === id){
                t.isComplete = !t.isComplete;                
            }

            return t;
        });

        setToDos(updatedToDos.sort(dueDateSort));
    };

    const createCallback = (title, dueDate) => {

        // Add to the todos array in use state
        setToDos([
            ...toDos,
            new ToDo(nextToDoId++, title, dueDate, false)
        ].sort(dueDateSort));
    } 

    const editCallback = (id, title, dueDate) => {
        
        // Update the target todo
        const updatedToDos = toDos.map(t => {

            if (t.id === id) {
                t.title = title;  
                t.dueDate = dueDate;
            }

            return t;
        });

        // Update todos state
        setToDos(updatedToDos.sort(dueDateSort));
    }

    const deleteCallback = (id) => {
        
        // Update the target todo to deleted
        const updatedToDos = toDos.map(t => {

            if (t.id === id) {
                t.isDeleted = true;  
                t.isVisible = false;
            }

            return t;
        });

        // Update todos state to exclude delete todos
        setToDos(updatedToDos.filter((t) => t.isDeleted === false).sort(dueDateSort));
    }
  
    return (
      <>
        <ToDoCreateForm createCallback={createCallback} />

        <div className='mt-5 mb-2'>
            <ToDoListFilter filterValue={filterValue} 
                setFilterValue={setFilterValue} 
                allCount={getAllCount}
                activeCount={getActiveCount}
                doneCount={getDoneCount}
            />
        </div>

        <ToDoAlertNone show={showAlertNone} />
        <ToDoAlertActive show={showAlertActive} />
        <ToDoAlertDone show={showAlertDone} />

        <ListGroup className='mt-4'>            
        {
            // Only dispay isvisible todos
            toDos.filter((t) => t.isVisible === true).map(t => (
                <ToDoListItem 
                    toDo={t}
                    filterValue={filterValue}
                    updateIsComplete={updateIsComplete} 
                    editCallback={editCallback} 
                    deleteCallback={deleteCallback} />
            ))
        }
        </ListGroup>
      </>
    );
}

export default ToDoList;



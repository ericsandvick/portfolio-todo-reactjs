function ToDoListFilter(props) {

    return (

        <>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="AllRadio" autoComplete="off" data-iscomplete=""
                    checked={props.filterValue === "all"} 
                    onChange={() => props.setFilterValue('all')} />
                <label className="btn btn-outline-primary" htmlFor="AllRadio">
                    All
                    <span id="AllCountBadge" className="ms-1 badge bg-secondary badge-pill">
                        {props.allCount()}
                    </span>
                </label>
                <input type="radio" className="btn-check is-complete-filter" name="btnradio" id="ActiveRadio" autoComplete="off" data-iscomplete="true"
                    checked={props.filterValue === "active"} 
                    onChange={() => props.setFilterValue('active')} />
                <label className="btn btn-outline-primary" htmlFor="ActiveRadio">
                    Active
                    <span id="ActiveCountBadge" className="ms-1 badge bg-secondary badge-pill">
                        {props.activeCount()}
                    </span>
                </label>
                <input type="radio" className="btn-check is-complete-filter" name="btnradio" id="DoneRadio" autoComplete="off" data-iscomplete="false"                    
                    checked={props.filterValue === "done"} 
                    onChange={() => props.setFilterValue('done')} />
                <label className="btn btn-outline-primary" htmlFor="DoneRadio">
                    Done
                    <span id="DoneCountBadge" className="ms-1 badge bg-secondary badge-pill">
                        {props.doneCount()}
                    </span>
                </label>
            </div>  
        </>

    )
}

export default ToDoListFilter

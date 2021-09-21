import "bootstrap/dist/css/bootstrap.css"

function Task(props) {
    return (
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{props.task.name}</h5>
        <p className="card-text"> {props.task.description}</p>
            <button disabled={props.columnStatus === 'Todo'} type="button" className="btn btn-outline-primary" onClick={() =>  props.onControlClick(props.task.id, props.colIndex, -1)}> ← </button>
                {' '}
            <button type="button" className="btn btn-outline-primary" onClick={() => props.moveUpDown(props.task.id, props.colIndex, +1)}> ↑ </button>
                {' '}
            <button type="button" className="btn btn-outline-primary" onClick={() => props.moveUpDown(props.task.id, props.colIndex, -1)}> ↓ </button>
                {' '}
            <button type="button" className="btn btn-outline-primary" onClick={() => props.onControlClick(props.task.id, props.colIndex, +1)}> → </button>

            </div>
        </div>
    );
}


export default Task;
import Task from './Task';
import "bootstrap/dist/css/bootstrap.css"

function Column(props) {
    return (

        <div className="col" >
            <h3 className="display-5">{props.status}</h3>
            {
                props.tasks
                    .filter(el => el.status === props.status)
                    .map((el, id) => <Task
                                     key={el.id}
                                     task={el}
                                     columnStatus={props.status}
                                     onControlClick={props.onControlClick}
                                     moveUpDown={props.moveUpDown}
                                     index={id}
                                     colIndex={props.index}
                        />
                    )
            }

        </div>
    );
}


export default Column;
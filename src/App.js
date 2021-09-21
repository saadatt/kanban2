import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Column from "./Column";
import {useState} from "react";

const statuses = ['To do', 'In progress', 'Review', 'Done']
function App() {

    const [col, setCol] = useState([{
        id: 1,
        name: 'Learn React',
        description: 'Some description to learn React',
        status: 'To do',
        priority: 3,
    },
        {
            id: 2,
            name: 'Learn JS Practice',
            description: 'Some description to learn JS Practice',
            status: 'In progress',
            priority: 2,
        },
        {
            id: 3,
            name: 'Learn JS Syntax',
            description: 'Some description to learn JS Syntax',
            status: 'Review',
            priority: 1,
        },
        {
            id: 4,
            name: 'Learn QA Manual',
            description: 'Some description to learn QA Manual',
            status: 'Done',
            priority: 2,
        },
        {
            id: 5,
            name: 'Learn React2',
            description: 'Some description to learn React2',
            status: 'To do',
            priority: 3,
        },
        {
            id: 6,
            name: 'Learn JS Practice2',
            description: 'Some description to learn JS Practice2',
            status: 'In progress',
            priority: 2,
        }])

    const onControlClick = (id, fromCol, action) => {
   let mapped = col.map(el => {
       return el.id == id ? { ...el, status: statuses[fromCol+action] } : { ...el};
    });
    setCol(mapped);
}

    const moveUpDown  = (id, fromCol, action) => {
       let temp = col[fromCol];
        const newCol=[...col];
        const shiftedTask = newCol.filter(el=> el.status === temp.status);
        shiftedTask[fromCol] = shiftedTask[fromCol - action];
        shiftedTask[fromCol - action] = temp;
        setCol(shiftedTask)
    }
    return (
        <div>
            <div className="container">
                <div className="row align-items-start" >
                    {statuses.map((el, id) => <Column
                                                             key={id}
                                                             status={el}
                                                             tasks={col}
                                                             onControlClick={onControlClick}
                                                             moveUpDown={moveUpDown}
                                                             index={id}

                    />)}

                </div>
            </div>
        </div>
    );
}

export default App;


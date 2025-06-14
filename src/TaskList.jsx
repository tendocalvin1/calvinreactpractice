import React,  {useState} from 'react';
import './TaskList.css'


function TaskList(){

    const [tasks, setTasks] = useState([
        {id: 1, text: 'Learn React', completed: false},
        {id: 2, text: 'Build a Project', completed: true},
        {id: 3, text: 'Write documentation', completed: false}
    ]);

    const [showCompleted, setShowCompleted] = useState(false);

    const filteredTasks = showCompleted
    ? tasks.filter((task)=>task.completed)
    : tasks;

    return(
        <div>
      <h2>Task List</h2>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? 'Show All Tasks' : 'Show Completed Tasks'}
      </button>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
    );


}

export default TaskList
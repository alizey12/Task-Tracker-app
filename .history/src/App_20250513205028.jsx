
import { useState } from 'react'
import './App.css'
function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

function TaskItem({ task, onToggle, onDelete }) {
  const style = {
    textDecoration: task.done ? 'line-through' : 'none',
    margin: '8px 0'
  };

  return (
    <div style={style}>
      {task.text}
      <button onClick={() => onToggle(task.id)}>Toggle</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

function TaskList({ tasks, onToggle, onDelete }) {
  return tasks.map((task) => (
    <TaskItem 
      key={task.id}
      task={task}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  ));
}


export default function app() {
  const[tasks, setTasks]= useState([]);

  const addTask=(text)=>{
    const newTask={
      id: Date.now(),
      text,
      done : false,
    };
    setTasks([...TaskList, newTask])
  }

  const toggleTask=(id)=>{
setTasks(tasks.map(task=>
  task.id === id ? {...task, done : !task.done}
:task));
  }
  const deleteTask=(id)=>{
    setTasks(tasks.filter(task => task.id !==id))
  }

  return (
    <>
 <h2>Task tracker</h2>
 
<TaskForm onAddTask={addTask}/>

 <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}  />

 
    </>
  )
}





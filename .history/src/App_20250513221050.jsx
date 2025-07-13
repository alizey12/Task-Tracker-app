import TaskForm, { TaskItem} from './TaskForm';
import { useState } from 'react'
import './App.css'

const App = () => {
  const[tasks, setTasks]= useState([]);
  function TaskList({tasks, onToggle, onDelete }) {
    return tasks.map((task) => (
        <TaskItem 
          key={task.id}
          task={tasks}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ));
}
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
 
 <TaskForm onAddTask={addTask} />   

 <TaskList  tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}   /> 

 
    </>
  )
}

export default App;



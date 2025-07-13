
import { useState } from 'react'
import './App.css'



function TaskForm({onAddTask}) {
  const[text, setText]= useState('123')

}


function TaskList() {
  
}
function TaskItem() {
  
}

 
  // <h2>Task tracker</h2>

  // <TaskForm className='add-task'>
  //   <input type="text" />
  //   <button>Add</button>
  // </TaskForm>


  // <TaskList>

  // </TaskList>


  // <TaskItem>

  // </TaskItem>


export default function app() {
  const[tasks, setTasks]= useState([]);

  const addTask=(text)=>{
    const newTask={
      id: Date.now(),
      text,
      done : false,
    };
    setTask([...TaskList, newTask])
  }

  const toggleTask=(id)=>{
setTasks(tasks.map(task=>
  task.id === id ? {...task, done : !task.done}
:task));
  }
  const deleteTask=(id)=>{
    setTasks(tasks.filter(task => ))
  }

  return (
    <>
 <h2>Task tracker</h2>
 
<TaskForm onAddTask={addTask}/>

 <TaskList />

 
    </>
  )
}





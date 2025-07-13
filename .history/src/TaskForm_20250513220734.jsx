import { useState } from "react"


export default function TaskForm({onAddTask}) {
const[text, setText]=useState('')

const handleSubmit=(e)=> {
    e.preventDefault();
    console.log(text)
    if (!text.trim()) return;
    onAddTask(text);
    setText('');
}

 return(
<>
<form onSubmit={handleSubmit}>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter your Task " />
    <button type="submit">add</button>
</form>
</>
 )   
}




export function TaskItem({task,onToggle, onDelete}) {
    const style = {
        textDecoration: task.done ? 'line-through' : 'none',
        margin: '8px 0'
      };
    return(
<>
<div style={style}>
      {task.text}
      <button onClick={() => onToggle(task.id)}>Toggle</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div> 
</>
    )
}




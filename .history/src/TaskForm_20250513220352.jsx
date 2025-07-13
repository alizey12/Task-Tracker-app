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



export function TaskList({}) {
    return(
<>
    
</>
    )
}
export function TaskItem({task,onToggle, onDeelet}) {
    return(
<>
    
</>
    )
}




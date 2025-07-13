import { useState } from "react"


export default function TaskForm({onAddTask}) {
const[text, setText]=useState('')

function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim())return;
    onAddTask(text);
    setText()
}

 return(
<>
<form action={handleSubmit}>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter your Task " />
    <button type="submit">add</button>
</form>
</>
 )   
}



export function TaskList(params) {
    return(
<>
    <h2>kinza</h2>
</>
    )
}
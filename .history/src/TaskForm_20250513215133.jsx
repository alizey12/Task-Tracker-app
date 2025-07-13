import { useState } from "react"


export default function TaskForm({onAddTask}) {
const[text, setText]=useState('')

function handleClick(params) {
    
}

 return(
<>
<form action={handleClick}>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter your Task " />
    <button type="">add</button>
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
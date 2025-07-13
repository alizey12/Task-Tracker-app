import { useState } from "react"


export default function TaskForm({onAddTask}) {
const[text, setText]=useState('')


 return(
<>
<form action={hans}>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    <button>add</button>
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
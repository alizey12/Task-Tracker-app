

export default function TaskForm({onAddTask}) {



 return(
<>
<form action="">
    <input type="text" value={text} onChange={(e)=>setTasks(.target.value)} />
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
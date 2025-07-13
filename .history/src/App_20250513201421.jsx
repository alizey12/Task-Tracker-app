
import './App.css'

function App() {


  
  return (
    <>
  <h2>Task tracker</h2>

  <TaskForm className='add-task'>
    <input type="text" />
    <button>Add</button>
  </TaskForm>


  <TaskList>

  </TaskList>


  <TaskItem>

  </TaskItem>
    </>
  )
}

export default App

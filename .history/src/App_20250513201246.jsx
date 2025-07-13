
import './App.css'

function App() {

  return (
    <>
  <button>Task tracker</button>
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

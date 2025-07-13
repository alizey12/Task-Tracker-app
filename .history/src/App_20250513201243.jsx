
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
  Task
    </>
  )
}

export default App

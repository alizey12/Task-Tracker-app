
import './App.css'

function App() {

  return (
    <>
  <H2>Task tracker</H2>

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

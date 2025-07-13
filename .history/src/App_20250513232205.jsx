import TaskForm from './TaskForm';
import TaskItem from './TaskItem'; // Assuming TaskItem is moved to its own file
import { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      done: false,
    };
    setTasks([...tasks, newTask]); // Fixed: Spread `tasks`, not `TaskList`
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h2>Task tracker</h2>
      <TaskForm onAddTask={addTask} />
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default App;
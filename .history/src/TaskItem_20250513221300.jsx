export default function TaskItem({ task, onToggle, onDelete }) {
    const style = {
      textDecoration: task.done ? 'line-through' : 'none',
      margin: '8px 0',
    };
  
    return (
      <div style={style}>
        {task.text}
        <button onClick={() => onToggle(task.id)}>Toggle</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  }
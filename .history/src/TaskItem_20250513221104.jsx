import React from 'react'

const TaskItem = () => {
    function TaskList({tasks, onToggle, onDelete }) {
        return tasks.map((task) => (
            <TaskItem 
              key={task.id}
              task={tasks}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ));
    }
  return (
    <div>
      
    </div>
  )
}

export default TaskItem

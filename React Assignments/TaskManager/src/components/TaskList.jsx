import TaskItem from "./TaskItem"

function TaskList({tasks,deleteTask,toggleComplete}) {

  return (
    <div className="flex flex-col gap-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  )
}

export default TaskList
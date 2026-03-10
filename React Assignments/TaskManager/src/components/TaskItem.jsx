function TaskItem({task,deleteTask,toggleComplete}) {

  return (
    <div className={`flex justify-between items-center p-4 rounded-lg
      ${task.completed ? "bg-green-700" : "bg-slate-700"}`}>

      <div>
        <h3 className={`text-white font-medium 
          ${task.completed ? "line-through opacity-60" : ""}`}>
          {task.title}
        </h3>

        <p className="text-gray-300 text-sm">
          Priority: {task.priority}
        </p>
      </div>

      <div className="flex gap-2">

        <button
          onClick={()=>toggleComplete(task.id)}
          className="bg-green-500 px-3 py-1 rounded text-white hover:bg-green-600"
        >
          Done
        </button>

        <button
          onClick={()=>deleteTask(task.id)}
          className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
        >
          Remove
        </button>

      </div>

    </div>
  )
}

export default TaskItem
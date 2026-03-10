import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import TaskList from "./TaskList"

function TaskManager() {

  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const completed = tasks.filter(t => t.completed).length

  return (
    <div>

      <AddTaskForm addTask={addTask} />

      <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
        
        <div className="bg-slate-700 p-4 rounded-lg text-center">
          <p className="text-gray-300 text-sm">Total Tasks</p>
          <p className="text-xl font-bold text-white">{tasks.length}</p>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg text-center">
          <p className="text-gray-300 text-sm">Completed</p>
          <p className="text-xl font-bold text-green-400">{completed}</p>
        </div>

      </div>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />

    </div>
  )
}

export default TaskManager
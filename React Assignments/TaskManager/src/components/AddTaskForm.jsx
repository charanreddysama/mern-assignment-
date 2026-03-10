import { useState } from "react"

function AddTaskForm({ addTask }) {

  const [title,setTitle] = useState("")
  const [priority,setPriority] = useState("Low")
  const [error,setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(title.trim().length < 3){
      setError("Task must contain at least 3 characters")
      return
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed:false
    }

    addTask(newTask)

    setTitle("")
    setPriority("Low")
    setError("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

      <input
        type="text"
        placeholder="Write a new task..."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="bg-slate-700 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <div className="flex gap-3">

        <select
          value={priority}
          onChange={(e)=>setPriority(e.target.value)}
          className="bg-slate-700 text-white p-3 rounded-lg flex-1"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button className="bg-indigo-600 px-5 py-3 rounded-lg text-white hover:bg-indigo-700">
          Add
        </button>

      </div>

    </form>
  )
}

export default AddTaskForm
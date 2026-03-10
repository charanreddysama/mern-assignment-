import TaskManager from "./components/TaskManager"

function App() {
  return (
    <div className="min-h-screen bg-amber-50 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-blue-300 rounded-2xl shadow-2xl p-8">
        
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Task Manager
        </h1>

        <TaskManager />

      </div>
    </div>
  )
}

export default App
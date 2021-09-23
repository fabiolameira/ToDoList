import React, { useState } from "react"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import './css/App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Regar as plantas.',
      completed: false
    },
    {
      id: '2',
      title: 'Alimentar o pássaro.',
      completed: false
    }
  ])

  return (
    <div className='container'>
      <AddTask/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
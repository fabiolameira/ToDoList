import React, { useState } from "react"
import {v4 as uuidv4} from 'uuid'
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

  const handleAddTask = (taskTitle) => {
    const newTasks = [...tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed : false
    }]
    setTasks(newTasks)
  }

  return (
    <div className='container'>
      <AddTask handleAddTask={handleAddTask} />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
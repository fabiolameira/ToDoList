import React, { useState } from "react"
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState(
    {
      id: '1',
      title: 'Regar as plantas',
      completed: false
    }
  )

  return (
    <div className='container'></div>
  )
}

export default App
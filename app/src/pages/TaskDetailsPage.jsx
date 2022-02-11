import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import '../styles/TaskDetails.css'

const TaskDetailsPage = () => {
  const params = useParams()
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className='back-button-container'>
        <Button onClick={() => handleBackClick()}>Back</Button>
      </div>
      <div className='task-details-container'>
        <h2>{params.taskTitle}</h2>
        <p>This text its the description of the task :D</p>
      </div>
    </>
  )
}

export default TaskDetailsPage

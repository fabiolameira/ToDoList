import React from 'react'
import Button from './Button'
import '../css/AddTask.css'

const AddTask = () => {
    return (
        <div className="add-task-container">
            <input className="add-task-input" type="text" />
            <div className="add">
                <Button>Add task</Button>
            </div>
        </div>
    )
}

export default AddTask;
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../state/index"
import { v4 as uuidv4 } from "uuid"
import Button from "./Button"
import "../styles/AddTask.css"

const AddTask = () => {
	const [inputData, setInputData] = useState("")
	const dispatch = useDispatch()
	const { addTask } = bindActionCreators(actionCreators, dispatch)

	const handleInputChange = (e) => {
		setInputData(e.target.value)
	}

	const handleAddTaskClick = () => {
		const newTask = {
			id: uuidv4(),
			title: inputData,
			completed: false,
		}
		addTask(newTask)
		setInputData("")
	}

	return (
		<div className='add-task-container'>
			<input
				onChange={handleInputChange}
				value={inputData}
				className='add-task-input'
				type='text'
			/>
			<div className='add-task-button-container'>
				<Button onClick={handleAddTaskClick}>Add task</Button>
			</div>
		</div>
	)
}

export default AddTask

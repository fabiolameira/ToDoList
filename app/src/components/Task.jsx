import React from "react"
import { CgClose, CgInfo } from "react-icons/cg"
import { useNavigate } from "react-router-dom"
import "../styles/Task.css"

const Task = ({ task, handleClickTask, handleRemoveTask }) => {
	const navigate = useNavigate()

	const handleTaskDetailslick = () => {
		navigate(`/${task.title}`)
	}

	return (
		<div
			className='task-container'
			style={task.completed ? { borderLeft: "6px solid #4EDA63" } : {}}
		>
			<div
				className='task-title'
				onClick={() => handleClickTask(task.id)}
			>
				{task.title}
			</div>
			<div className='buttons-containter'>
				<button
					className='remove-task-button'
					onClick={() => handleRemoveTask(task.id)}
				>
					<CgClose />
				</button>
				<button
					className='see-task-details-button'
					onClick={() => handleTaskDetailslick(task.title)}
				>
					<CgInfo />
				</button>
			</div>
		</div>
	)
}

export default Task

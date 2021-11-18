import React from "react"
import { CgClose, CgInfo } from 'react-icons/cg'
import "../styles/Task.css"

const Task = ({ task, handleClickTask, handleRemoveTask }) => {
	return (
		<div
			className='task-container'
			style={task.completed ? { borderLeft: "6px solid yellow" } : {}}
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
				<button className='see-task-details-button'>
					<CgInfo />
				</button>
			</div>
		</div>
	)
}

export default Task

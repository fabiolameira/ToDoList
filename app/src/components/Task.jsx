import React from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../state/index"
import { CgClose, CgInfo } from "react-icons/cg"
import { useNavigate } from "react-router-dom"
import "../styles/Task.css"

const Task = ({ task }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { editTask, removeTask } = bindActionCreators(
		actionCreators,
		dispatch
	)

	const handleClickTask = (task) => {
		task.completed = !task.completed
		editTask(task)
	}

	const handleTaskDetailslick = () => {
		navigate(`/${task.title}`)
	}

	const handleRemoveTask = (task) => {
		removeTask(task)
	}

	return (
		<div
			className='task-container'
			style={task.completed ? { borderLeft: "6px solid #4EDA63" } : {}}
		>
			<div className='task-title' onClick={() => handleClickTask(task)}>
				{task.title}
			</div>
			<div className='buttons-containter'>
				<button
					className='remove-task-button'
					onClick={() => handleRemoveTask(task)}
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

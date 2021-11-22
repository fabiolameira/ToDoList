import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"
import axios from "axios"
import Header from "./components/Header"
import TaskDetailsPage from "./pages/TaskDetailsPage"
import TasksPage from "./pages/TasksPage"
import "./styles/App.css"

const App = () => {
	const dispatch = useDispatch()
	const { addTask } = bindActionCreators(actionCreators, dispatch)

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				"https://my-json-server.typicode.com/fabiolameira/todolist/data"
			)
			data.forEach((task) => addTask(task))
		}
		fetchData()
		// eslint-disable-next-line
	}, [])

	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
				<Routes>
					<Route path='/' exact element={<TasksPage />} />
					<Route
						path='/:taskTitle'
						exact
						element={<TaskDetailsPage />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App

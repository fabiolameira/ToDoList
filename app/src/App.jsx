import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import TaskDetailsPage from "./pages/TaskDetailsPage"
import TasksPage from "./pages/TasksPage"
import "./styles/App.css"

const App = () => {
	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
				<Routes>
					<Route path='/' exact element={<TasksPage />} />
					<Route path='/:taskTitle' exact element={<TaskDetailsPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App

import { useState } from "react";
import Form from "./components/Form";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Link to='/home'>Home</Link>
			<Link to='/'>Login</Link>
			<Routes>
				<Route exact path='/' element={<Form />} />
				<Route exact path='/home' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { useState } from "react";
import "./index.css";
import Form from "./components/Form";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Form />} />
				<Route exact path='/register' element={<Register />} />
				<Route exact path='/home' element={<Home />} />
				<Route exact path='/add' element={<Add />} />
				<Route exact path='/products' element={<Products />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

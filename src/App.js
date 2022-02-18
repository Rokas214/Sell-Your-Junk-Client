import { useState } from "react";
import "./index.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import SinglePost from "./pages/SinglePost";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Login />} />
				<Route exact path='/register' element={<Register />} />
				<Route exact path='/home' element={<Home />} />
				<Route exact path='/add' element={<Add />} />
				<Route exact path='/products' element={<Products />} />
				<Route exact path='/singlepost/:id' element={<SinglePost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

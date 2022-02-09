import { useState } from "react";
import Form from "./components/Form";
import Home from "./pages/Home";
import Add from "./pages/Add";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";

function App() {
	return (
		<BrowserRouter>
			<Link to='/home'>Home</Link>
			<Link to='/'>Login</Link>
			<Link to='/add'>Add product</Link>
			<Link to='/products'>All products</Link>
			<Routes>
				<Route exact path='/' element={<Form />} />
				<Route exact path='/home' element={<Home />} />
				<Route exact path='/add' element={<Add />} />
				<Route exact path='/products' element={<Products />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThemeProvider from "./provider/ThemeProvider";

function App() {
	return (
		<ThemeProvider>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;

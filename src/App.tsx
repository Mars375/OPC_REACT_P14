import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThemeProvider from "./provider/ThemeProvider";
import { EmployeeProvider } from "./provider/EmployeeProvider";

function App() {
	return (
		<ThemeProvider>
			<EmployeeProvider>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</EmployeeProvider>
		</ThemeProvider>
	);
}

export default App;

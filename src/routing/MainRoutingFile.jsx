import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import UserPage from "../pages/UserPage";
const MainRoutingFile = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/users" element={<UserPage />} />
			<Route path="/about" element={<AboutPage />} />
		</Routes>
	);
};

export default MainRoutingFile;

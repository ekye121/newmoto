import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/Layout";
import Learn from "./pages/LearnPage";
import Saved from "./pages/SavedPage";
import Search from "./pages/SearchPage";
import Home from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import PrivateRoute from "./components/routes/PrivateRoute";
import Login from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import Signup from "./pages/SignupPage";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/learn" element={<Learn />} />
				<Route path="/saved" element={<Saved />} />
				<Route
					path="/profile"
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
			</Routes>
		</Layout>
	);
}

export default App;

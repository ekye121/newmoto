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
				<Route path="/newmoto" exact element={<Home />} />
				<Route path="/newmoto/search" element={<Search />} />
				<Route path="/newmoto/learn" element={<Learn />} />
				<Route path="/newmoto/saved" element={<Saved />} />
				<Route
					path="/newmoto/profile"
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
				<Route path="/newmoto/login" element={<Login />} />
				<Route path="/newmoto/signup" element={<Signup />} />
				<Route path="/newmoto/forgot-password" element={<ForgotPassword />} />
			</Routes>
		</Layout>
	);
}

export default App;

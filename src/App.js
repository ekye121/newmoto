import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/HomePage";
// import Search from "./pages/SearchPage";
// import Saved from "./pages/SavedPage";
// import Learn from "./pages/LearnPage";
// import PrivateRoute from "./components/routes/PrivateRoute";
// import Profile from "./pages/ProfilePage";
// import Login from "./pages/LoginPage";
// import ForgotPassword from "./pages/ForgotPasswordPage";
// import Signup from "./pages/SignupPage";

const Search = lazy(() => import("./pages/SearchPage"));
const Learn = lazy(() => import("./pages/LearnPage"));
const Saved = lazy(() => import("./pages/SavedPage"));
const Login = lazy(() => import("./pages/LoginPage"));
const ForgotPassword = lazy(() => import("./pages/ForgotPasswordPage"));
const Signup = lazy(() => import("./pages/SignupPage"));
const Profile = lazy(() => import("./pages/ProfilePage"));
const PrivateRoute = lazy(() => import("./components/routes/PrivateRoute"));

function App() {
	return (
		<Layout>
			<Suspense fallback={<div className="fallback-loading">Loading...</div>}>
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
			</Suspense>
		</Layout>
	);
}

export default App;

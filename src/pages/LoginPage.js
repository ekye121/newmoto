import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../store/AuthContext";
import CardLogin from "../components/ui/CardLogin";
import LoginForm from "../components/login/LoginForm";
import LoginForm2 from "../components/login/LoginForm2";

function Login() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	async function submitHandler(e) {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		try {
			setError("");
			setLoading(true);
			await authContext.login(email, password);
			navigate("/newmoto"); // navigate(-1) goes to prev page.
			emailRef.current.value = "";
			passwordRef.current.value = "";
		} catch (err) {
			const str = err.toString().split(" ").slice(2, -1).join(" ");
			setError(`Failed to log in: ${str}`);
			console.clear();
		}
		setLoading(false);
	}

	return (
		<div>
			<CardLogin>
				<LoginForm
					type="Log In"
					emailRef={emailRef}
					passwordRef={passwordRef}
					error={error}
					loading={loading}
					submitHandler={submitHandler}
				/>
				<div className="text-center mt-3">
					<Link to={"/forgot-password"} style={{ textDecoration: "none" }}>
						Forgot Password
					</Link>
				</div>
			</CardLogin>
			<LoginForm2
				text="Don't have an account?"
				link="signup"
				buttonText="Sign Up"
			/>
		</div>
	);
}

export default Login;

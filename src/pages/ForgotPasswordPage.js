import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../store/AuthContext";
import CardLogin from "../components/ui/CardLogin";
import LoginForm from "../components/login/LoginForm";
import LoginForm2 from "../components/login/LoginForm2";

function ForgotPassword() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(false);
	const emailRef = useRef();
	const authContext = useContext(AuthContext);

	async function submitHandler(e) {
		e.preventDefault();

		const email = emailRef.current.value;

		try {
			setError("");
			setMessage("");
			setLoading(true);
			await authContext.resetPassword(email);
			setMessage("Check email to reset password");
			emailRef.current.value = "";
		} catch (err) {
			const str = err.toString().split(" ").slice(2, -1).join(" ");
			setError(`Failed reset password: ${str}`);
		}
		setLoading(false);
	}

	return (
		<div>
			<CardLogin>
				<LoginForm
					type="Reset Password"
					emailRef={emailRef}
					error={error}
					message={message}
					loading={loading}
					submitHandler={submitHandler}
				/>
				<div className="text-center mt-3">
					<Link
						to={"/login"}
						style={{ textDecoration: "none", color: "#6c757d" }}
					>
						Log In
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

export default ForgotPassword;

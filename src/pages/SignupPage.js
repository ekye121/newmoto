import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import AuthContext from "../store/AuthContext";
import CardLogin from "../components/ui/CardLogin";
import LoginForm from "../components/login/LoginForm";
import LoginForm2 from "../components/login/LoginForm2";

function Signup() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	function addUserToDB(user) {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: user,
			}),
		};
		const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/users/${user}/.json`;
		fetch(url, options)
			.then((res) => res.json())
			.then((data) => {
				return data;
			})
			.catch((err) => {
				// console.error(err);
			});
	}

	async function submitHandler(e) {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const passwordConfirm = passwordConfirmRef.current.value;

		if (password !== passwordConfirm) {
			return setError("Passwords do not match");
		}

		try {
			setError("");
			setLoading(true);
			await authContext.signup(email, password);
			addUserToDB(email.split(".")[0]);
			navigate("/profile"); // navigate(-1) goes to prev page.
			emailRef.current.value = "";
			passwordRef.current.value = "";
			passwordConfirmRef.current.value = "";
		} catch (err) {
			const error = err.toString().split(" ").slice(2, -1).join(" ");
			setError(`Failed to create account: ${error}`);
			console.clear();
		}
		setLoading(false);
	}

	return (
		<div>
			<CardLogin>
				<LoginForm
					type="Sign Up"
					emailRef={emailRef}
					passwordRef={passwordRef}
					passwordConfirmRef={passwordConfirmRef}
					error={error}
					loading={loading}
					submitHandler={submitHandler}
				/>
			</CardLogin>
			<LoginForm2 text="Have an account?" link="login" buttonText="Log In" />
		</div>
	);
}

export default Signup;

import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function LoginForm(props) {
	const [email, setEmail] = useState(
		props.type === "Log In" ? "guest@guest.com" : ""
	);
	const [password, setPassword] = useState(
		props.type === "Log In" ? "guest1" : ""
	);

	return (
		<div>
			<h2 className="text-center mb-4 mt-2">{props.type}</h2>
			{props.error && <Alert variant="danger">{props.error}</Alert>}
			{props.message && <Alert variant="success">{props.message}</Alert>}
			<Form onSubmit={props.submitHandler}>
				<Form.Group id="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						required
						ref={props.emailRef}
						style={{ borderRadius: "25px", paddingLeft: "15px" }}
						placeholder={props.type === "Log In" ? "guest@guest.com" : ""}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				{props.type !== "Reset Password" ? (
					<Form.Group id="password" className="mt-3">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							required
							ref={props.passwordRef}
							style={{ borderRadius: "25px", paddingLeft: "15px" }}
							placeholder={props.type === "Log In" ? "guest1" : ""}
							// value={props.type === "Log In" ? password : ""}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
				) : null}
				{props.type === "Sign Up" ? (
					<Form.Group id="password-confirm" className="mt-3">
						<Form.Label>Password Confirmation</Form.Label>
						<Form.Control
							type="password"
							required
							ref={props.passwordConfirmRef}
							style={{ borderRadius: "25px", paddingLeft: "15px" }}
						/>
					</Form.Group>
				) : null}
				<Button
					className="w-100 text-center mt-3 log-in-button"
					type="submit"
					disabled={props.loading}
					variant="secondary"
					style={{ borderRadius: "25px" }}
				>
					{props.type}
				</Button>
			</Form>
		</div>
	);
}

export default LoginForm;

import { Form, Button, Alert } from "react-bootstrap";

function LoginForm(props) {
	return (
		<div>
			<h2 className="text-center mb-4 mt-2">{props.type}</h2>
			{props.error && <Alert variant="danger">{props.error}</Alert>}
			{props.message && <Alert variant="success">{props.message}</Alert>}
			<Form onSubmit={props.submitHandler}>
				<Form.Group id="email">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" required ref={props.emailRef} />
				</Form.Group>
				{props.type !== "Reset Password" ? (
					<Form.Group id="password" className="mt-3">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" required ref={props.passwordRef} />
					</Form.Group>
				) : null}
				{props.type === "Sign Up" ? (
					<Form.Group id="password-confirm" className="mt-3">
						<Form.Label>Password Confirmation</Form.Label>
						<Form.Control
							type="password"
							required
							ref={props.passwordConfirmRef}
						/>
					</Form.Group>
				) : null}
				<Button
					className="w-100 text-center mt-3"
					type="submit"
					disabled={props.loading}
				>
					{props.type}
				</Button>
			</Form>
		</div>
	);
}

export default LoginForm;
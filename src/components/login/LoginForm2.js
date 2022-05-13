import { Link } from "react-router-dom";

function LoginForm2(props) {
	return (
		<div className="text-center w-100 mt-4">
			<span>{props.text}</span>
			<Link
				to={`/${props.link}`}
				className="m-2"
				style={{
					fontWeight: "bold",
					cursor: "pointer",
					textDecoration: "none",
				}}
			>
				{props.buttonText}
			</Link>
		</div>
	);
}

export default LoginForm2;

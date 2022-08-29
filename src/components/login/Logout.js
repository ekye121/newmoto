import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import { Button } from "react-bootstrap";

function Logout() {
	const [error, setError] = useState("");
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();

	async function logoutHandler() {
		try {
			setError("");
			await authContext.logout();
			navigate("/");
		} catch (err) {
			setError(`Failed to log out: ${err}`);
			console.clear();
		}
	}

	return (
		<div>
			<Button
				variant="secondary"
				onClick={logoutHandler}
				style={{ borderRadius: "25px" }}
			>
				Log out
			</Button>
		</div>
	);
}

export default Logout;

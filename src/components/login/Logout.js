import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

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
		}
	}

	return (
		<div>
			<button onClick={logoutHandler}> log out </button>
		</div>
	);
}

export default Logout;

import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../../store/AuthContext";

function PrivateRoute(props) {
	const authContext = useContext(AuthContext);

	return (
		<>
			{authContext.currUser ? props.children : <Navigate to="/login" replace />}
		</>
	);
}

export default PrivateRoute;

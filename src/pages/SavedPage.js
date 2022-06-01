import { useContext, useEffect, useState } from "react";

import AuthContext from "../store/AuthContext";
// import MotosContext from "../store/MotosContext";

function SavedPage() {
	// const motosContext = useContext(MotosContext);
	const authContext = useContext(AuthContext);
	const [savedMotoData, setSavedMotoData] = useState([]);

	useEffect(() => {
		async function getUserDataDB(user) {
			try {
				const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/users/${user}/saved-moto.json`;
				const res = await fetch(url);
				const data = res.json();
				setSavedMotoData(data);
				return data;
			} catch (err) {
				console.error(err);
			}
		}

		if (authContext.currUser) {
			// get user saved data
			const user = authContext.currUser.multiFactor.user.email.split(".")[0];
			const userData = getUserDataDB(user);
			if (userData) {
				setSavedMotoData(userData);
			}
		} else {
			// load local storage
		}
	}, []);

	// 	on moto save button click handler
	// 		take moto data and add to saved data array
	// 		load data array

	return (
		<div>
			{/* {savedMotoData.map((moto) => {
				return <div>moto</div>;
			})} */}
		</div>
	);
}

export default SavedPage;

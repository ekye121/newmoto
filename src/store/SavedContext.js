import { createContext, useState, useEffect, useContext } from "react";

import AuthContext from "./AuthContext";

const SavedContext = createContext({
	userSavedData: {},
	userSavedMotos: [],
	saveMotoHandler() {},
	removeMotoHandler() {},
});

export function SavedContextProvider(props) {
	const [userSavedData, setUserSavedData] = useState({});
	const [userSavedMotos, setUserSavedMotos] = useState([]);
	const [user, setUser] = useState("");
	const authContext = useContext(AuthContext);

	useEffect(() => {
		async function getUserDataDB(user) {
			try {
				const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/users/${user}.json`;
				const res = await fetch(url);
				const data = await res.json();
				setUserSavedData(data);
				setUserSavedMotos(data?.motos);
				return data;
			} catch (err) {
				console.error(err);
			}
		}

		if (authContext.currUser) {
			// get user saved data
			const user = authContext.currUser.multiFactor.user.email.split(".")[0];
			setUser(user);
			getUserDataDB(user);
		} else {
			// get local storage data
			const defaultUserData = { motos: [], learn: [] };
			const localSavedData = localStorage.getItem("userSavedData");
			if (localSavedData && localSavedData !== "undefined") {
				setUserSavedData(JSON.parse(localSavedData));
				setUserSavedMotos(JSON.parse(localSavedData).motos);
			} else {
				localStorage.setItem("userSavedData", JSON.stringify(defaultUserData));
				setUserSavedData(defaultUserData);
			}
		}
	}, [authContext.currUser]);

	async function saveMotoDataDB(motoData) {
		try {
			const options = {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(motoData),
			};
			const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/users/${user}/motos/.json`;
			const res = await fetch(url, options);
			const data = await res.json();
			return data;
		} catch (err) {
			console.error(err);
		}
	}

	function saveMotoHandler(data) {
		// check if moto is already saved
		let isSaved = false;
		if (userSavedData.motos) {
			for (const moto of userSavedData.motos) {
				const motoID = moto.articleCompleteInfo.articleID;
				const dataID = data.articleCompleteInfo.articleID;
				if (motoID === dataID) {
					isSaved = true;
					break;
				}
			}
		}
		if (!isSaved) {
			// save moto
			let newMotos;
			let newUserData;
			setUserSavedData((prev) => {
				if (prev.motos) newMotos = [data, ...prev.motos];
				else newMotos = [data];
				prev.motos = newMotos;
				newUserData = prev;
				return prev;
			});
			// update db- user saved data
			if (authContext.currUser) {
				saveMotoDataDB(newMotos);
			} else {
				// update local storage
				localStorage.setItem("userSavedData", JSON.stringify(newUserData));
			}
			setUserSavedMotos(newUserData.motos);
		}
	}

	async function removeMotoDataDB(motoData) {
		try {
			const options = {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(motoData),
			};
			const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/users/${user}/motos/.json`;
			const res = await fetch(url, options);
			const data = await res.json();
			return data;
		} catch (err) {
			console.error(err);
		}
	}

	function removeMotoHandler(articleID) {
		// remove moto from userSavedData
		let newUserData;
		setUserSavedData((prev) => {
			prev.motos = prev.motos.filter(
				(moto) => moto.articleCompleteInfo.articleID !== articleID
			);
			newUserData = prev;
			return prev;
		});
		// update db- user saved data
		if (authContext.currUser) {
			removeMotoDataDB(newUserData.motos);
		} else {
			// update local storage
			localStorage.setItem("userSavedData", JSON.stringify(newUserData));
		}
		setUserSavedMotos(newUserData.motos);
	}

	const context = {
		userSavedData,
		userSavedMotos,
		saveMotoHandler,
		removeMotoHandler,
	};

	return (
		<SavedContext.Provider value={context}>
			{props.children}
		</SavedContext.Provider>
	);
}

export default SavedContext;

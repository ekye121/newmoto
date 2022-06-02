import { DataSnapshot } from "@firebase/database";
import { createContext, useState, useEffect, useContext } from "react";

import AuthContext from "./AuthContext";

const SavedContext = createContext({
	userSavedData: {},
	userSavedMotos: [],
	userSavedLearn: [],
	saveMotoHandler() {},
	removeMotoHandler() {},
});

export function SavedContextProvider(props) {
	const [userSavedData, setUserSavedData] = useState({});
	const [savedMotos, setSavedMotos] = useState([]);
	const [savedLearn, setSavedLearn] = useState([]);
	const [user, setUser] = useState("");
	const authContext = useContext(AuthContext);

	useEffect(() => {
		async function getUserDataDB(user) {
			try {
				const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/users/${user}.json`;
				const res = await fetch(url);
				const data = await res.json();
				console.log(`data ~~~>`, data);
				setUserSavedData(data);
				setSavedMotos(data.motos);
				setSavedLearn(data.learn);
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
			const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/users/${user}/saved-data/motos/.json`;
			const res = await fetch(url, options);
			const data = await res.json();
			return data;
		} catch (err) {
			console.error(err);
		}
	}

	function saveMotoHandler(data) {
		console.log(`data in saveMotoHandler ~~~>`, data);
		// check if moto is already saved
		let isSaved = false;
		if (savedMotos) {
			console.log(`savedMotos ~~~>`, savedMotos);
			for (const [, moto] of savedMotos.entries()) {
				const motoID = moto.articleCompleteInfo.articleID;
				const dataID = data.articleCompleteInfo.articleID;
				if (motoID === dataID) {
					isSaved = true;
					break;
				}
			}
		}
		console.log(`isSaved ~~~>`, isSaved);
		if (!isSaved) {
			console.log("is not saved");
			// add moto to savedMotos
			let updatedUserData;
			setSavedMotos((prev) => {
				console.log(`prev ~~~>`, prev);
				if (prev) {
					updatedUserData = [...prev, data];
				} else {
					updatedUserData = [data];
				}
				return updatedUserData;
			});
			setUserSavedData((prev) => {
				prev.motos = updatedUserData;
				return prev;
			});
			// update db- user saved data
			if (authContext.currUser) {
				saveMotoDataDB(updatedUserData);
			}
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
			const url = `https://newmoto-3d5a9-default-rtdb.firebaseio.com/users/${user}/saved-data/motos/.json`;
			const res = await fetch(url, options);
			const data = await res.json();
			return data;
		} catch (err) {
			console.error(err);
		}
	}

	function removeMotoHandler(articleID) {
		// remove moto from userSavedData
		let updatedSavedMotos;
		setUserSavedData((prev) => {
			return (updatedSavedMotos = prev.motos.filter(
				(moto) => moto.articleID !== articleID
			));
		});
		// update db- user saved data
		if (authContext.currUser) {
			console.log("logged in - remove moto");
			removeMotoDataDB(updatedSavedMotos);
		}
	}

	const context = {
		userSavedData,
		userSavedMotos: savedMotos,
		userSavedLearn: savedLearn,
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

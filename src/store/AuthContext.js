import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthContextProvider(props) {
	const [currUser, setCurrUser] = useState();
	const [loading, setLoading] = useState(true);

	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const context = {
		currUser,
		signup,
		login,
		logout,
		resetPassword,
	};

	return (
		<AuthContext.Provider value={context}>
			{!loading && props.children}
		</AuthContext.Provider>
	);
}

export default AuthContext;

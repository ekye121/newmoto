import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { AuthContextProvider } from "./store/AuthContext";
import { MotosContextProvider } from "./store/MotosContext";
import { SavedContextProvider } from "./store/SavedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthContextProvider>
		<MotosContextProvider>
			<SavedContextProvider>
				<HashRouter>
					{/* <React.StrictMode> */}
					<App />
					{/* </React.StrictMode> */}
				</HashRouter>
			</SavedContextProvider>
		</MotosContextProvider>
	</AuthContextProvider>
);

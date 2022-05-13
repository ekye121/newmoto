import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { AuthContextProvider } from "./store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthContextProvider>
		<BrowserRouter>
			{/* <React.StrictMode> */}
			<App />
			{/* </React.StrictMode> */}
		</BrowserRouter>
	</AuthContextProvider>
);

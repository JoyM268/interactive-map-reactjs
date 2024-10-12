import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="interactive-app-reactjs">
					<Route index element={<App />} />
					<Route path=":countryName" element={<App />} />
				</Route>
			</Routes>
		</HashRouter>
	</React.StrictMode>
);

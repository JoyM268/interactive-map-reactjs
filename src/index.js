import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="interactive-app-reactjs">
					<Route index element={<App />} />
					<Route path=":countryName" element={<App />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

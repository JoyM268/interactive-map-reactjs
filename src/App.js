import Map from "./Map";
import { isMobile } from "react-device-detect";
import { useOrientation } from "react-use";
import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import SideBar from "./SideBar";
import { AnimatePresence } from "framer-motion";
import Zoom from "./Zoom";
import Switch from "./Switch";
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from "react-router-dom";

function AppContent() {
	const [selectedName, setSelectedName] = useState("");
	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem("DarkMode") === "true" ? true : false
	);
	const { type } = useOrientation();
	const navigate = useNavigate();
	const params = useParams();
	const location = useLocation();

	useEffect(() => {
		if (params.country) {
			setSelectedName(params.country);
		} else {
			setSelectedName("");
		}

	}, [params.country]);

	useEffect(() => {
		if (selectedName) {
			navigate(`/${selectedName}`);
		} else if (location.pathname !== "/") {
			navigate("/");
		}
	}, [selectedName]);

	useEffect(() => {
		if (isDarkMode) {
			document.body.style.backgroundColor = "#002127";
			localStorage.setItem("DarkMode", "true");
		} else {
			document.body.style.backgroundColor = "#79b4c1";
			localStorage.setItem("DarkMode", "false");
		}
	}, [isDarkMode]);

	useEffect(() => {
		if (
			isMobile &&
			(type === "portrait-secondary" || type === "portrait-primary")
		) {
			document.querySelector("#root").style.overflowY = "hidden";
			document.querySelector(".map").style.scrollbarWidth = "none";
			document.querySelector(".map").scroll(800, 0);
		} else if (
			isMobile &&
			(type === "landscape-secondary" || type === "landscape-primary")
		) {
			document.querySelector(".map").style.scrollbarWidth = "none";
			document.querySelector(".map").style.overflowY = "hidden";
			document.querySelector(".map").scroll(500, 0);
		}
	}, [type]);

	return (
		<div>
			<Zoom isDarkMode={isDarkMode} />
			<AnimatePresence>
				{selectedName && (
					<SideBar
						selectedName={selectedName}
						isDarkMode={isDarkMode}
						setSelectedName={setSelectedName}
					/>
				)}
			</AnimatePresence>
			<Map
				isDarkMode={isDarkMode}
				selectedName={selectedName}
				setSelectedName={setSelectedName}
			/>
			<DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
				<Switch
					isOn={isDarkMode}
					setIsOn={setIsDarkMode}
					outlineColor="#028fbe"
				/>
			</DarkMode>
		</div>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppContent />} />
				<Route path=":country" element={<AppContent />} />
			</Routes>
		</BrowserRouter>
	);
}

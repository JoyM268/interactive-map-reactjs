import Map from "./Map";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import SideBar from "./SideBar";
import Zoom from "./Zoom";

export default function App() {
	const [selectedName, setSelectedName] = useState("");
	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem("DarkMode") === "true" ? true : false
	);

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
		if (isMobile) {
			document.querySelector("#root").style.overflowY = "hidden";
			document.querySelector("#root").scroll(800, 0);
		}
	}, []);

	return (
		<div>
			<Zoom isDarkMode={isDarkMode} />
			{selectedName && (
				<SideBar
					selectedName={selectedName}
					isDarkMode={isDarkMode}
					setSelectedName={setSelectedName}
				/>
			)}
			<Map
				isDarkMode={isDarkMode}
				selectedName={selectedName}
				setSelectedName={setSelectedName}
			/>
			<DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
		</div>
	);
}

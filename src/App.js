import Map from "./Map";
import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import SideBar from "./SideBar";
import Zoom from "./Zoom";

export default function App() {
	const [selectedName, setSelectedName] = useState("");
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (isDarkMode) {
			document.body.style.backgroundColor = "#002127";
		} else {
			document.body.style.backgroundColor = "#79b4c1";
		}
	}, [isDarkMode]);

	return (
		<>
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
		</>
	);
}

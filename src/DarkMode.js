import lightMode from "./images/light-mode.png";
import darkMode from "./images/dark-mode.png";

export default function DarkMode({ isDarkMode, setIsDarkMode }) {
	return (
		<div class="dark-mode">
			{isDarkMode ? (
				<img src={darkMode} alt="Dark mode" />
			) : (
				<img
					src={lightMode}
					alt="Light Mode"
					style={{ filter: "invert(1)" }}
				/>
			)}
			<label class="switch">
				<input
					type="checkbox"
					checked={isDarkMode}
					onChange={(e) => setIsDarkMode(e.target.checked)}
				/>
				<span
					class="slider round"
					style={{ outline: "#028fbe 1px solid" }}
				></span>
			</label>
		</div>
	);
}

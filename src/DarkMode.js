import lightMode from "./images/light-mode.png";
import darkMode from "./images/dark-mode.png";

export default function DarkMode({ children, isDarkMode }) {
	return (
		<div className="fixed right-0 top-0 pt-[10px] pr-[20px] flex items-center gap-[10px] z-100 no-select">
			{isDarkMode ? (
				<img src={darkMode} alt="Dark mode" className="h-[34px]" />
			) : (
				<img
					src={lightMode}
					alt="Light Mode"
					className="h-[34px] invert"
				/>
			)}
			{children}
		</div>
	);
}

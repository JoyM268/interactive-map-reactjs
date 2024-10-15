import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

export default function Zoom({ isDarkMode }) {
	const [zoom, setZoom] = useState(100);

	useEffect(() => {
		document.querySelector("svg").style.transform = `scale(${zoom / 100})`;
		document.querySelector("svg").style.transform = `scale(${zoom / 100})`;
		if (zoom === 100 && !isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "scroll";
		}
	}, [zoom]);

	return (
		<div className="zoom">
			<button
				className={isDarkMode ? "zoom-btn-dark" : "zoom-btn-light"}
				onClick={() => {
					setZoom((zoom) => (zoom += 50));
				}}
				disabled={zoom >= 500 ? true : false}
			>
				+
			</button>
			<button
				className={isDarkMode ? "zoom-btn-dark" : "zoom-btn-light"}
				disabled={zoom === 100 ? true : false}
				onClick={() => {
					setZoom((zoom) => (zoom -= 50));
				}}
			>
				-
			</button>
			<span
				class="zoom-value"
				style={
					isDarkMode
						? { color: "white" }
						: { color: "black", fontWeight: "bold" }
				}
			>
				{zoom}%
			</span>
		</div>
	);
}

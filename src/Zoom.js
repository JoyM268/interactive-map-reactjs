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
		<div className="fixed bottom-0 right-0 flex flex-col pr-[20px] pb-[20px] text-white z-100 text-[15px] no-select">
			<button
				className={`${
					isDarkMode
						? "bg-[#02222f] border-[#255264]"
						: "bg-[#3c778f] border-black"
				} disabled:cursor-not-allowed h-[35px] text-white cursor-pointer font-bold border-solid border-[1px] hover:opacity-80`}
				onClick={() => {
					setZoom((zoom) => (zoom += 50));
				}}
				disabled={zoom >= 500 ? true : false}
			>
				+
			</button>
			<button
				className={`${
					isDarkMode
						? "bg-[#02222f] border-[#255264]"
						: "bg-[#3c778f] border-black"
				} disabled:cursor-not-allowed h-[35px] text-white cursor-pointer font-bold border-solid border-[1px] hover:opacity-80`}
				disabled={zoom === 100 ? true : false}
				onClick={() => {
					setZoom((zoom) => (zoom -= 50));
				}}
			>
				-
			</button>
			<span
				className={`mt-[5px] font-courier ${
					isDarkMode ? "text-white" : "text-black font-bold"
				}`}
			>
				{zoom}%
			</span>
		</div>
	);
}

export default function Disclaimer({ isDarkMode }) {
	return (
		<div className="flex text-justify pr-[30px] text-[10px] flex-col justify-end flex-1 py-[20px] gap-[10px]">
			<p>
				The map displayed is provided by{" "}
				<a
					href="https://simplemaps.com/resources/svg-world"
					className={`${
						isDarkMode ? "text-cyan-300" : "text-[blue]"
					} underline font-sans`}
				>
					Simple Maps
				</a>
				, and the country data is retrieved from the{" "}
				<a
					href="https://restcountries.com/"
					className={`${
						isDarkMode ? "text-cyan-300" : "text-[blue]"
					} underline font-sans`}
				>
					REST Countries API
				</a>
				.
			</p>
			<p>
				I rely on third-party sources for this information and cannot
				guarantee its absolute accuracy or completeness.
			</p>
			<p>
				The source code for this project is available on{" "}
				<a
					href="https://github.com/JoyM268/interactive-map-reactjs"
					className={`${
						isDarkMode ? "text-cyan-300" : "text-[blue]"
					} underline font-sans`}
				>
					GitHub
				</a>
				.
			</p>
			<p>Developed By Joy Mascarenhas.</p>
		</div>
	);
}

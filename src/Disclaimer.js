export default function Disclaimer({ isDarkMode }) {
	return (
		<div
			style={{
				textAlign: "justify",
				paddingRight: "30px",
				fontSize: "10px",
				display: "flex",
				flexDirection: "column",
				verticalAlign: "flex-end",
				justifyContent: "flex-end",
				flex: "1",
				paddingTop: "20px",
				paddingBottom: "20px",
				gap: "10px",
			}}
		>
			<p>
				The map displayed is provided by{" "}
				<a
					href="https://simplemaps.com/resources/svg-world"
					style={isDarkMode ? { color: "white" } : { color: "blue" }}
				>
					Simple Maps
				</a>
				, and the country data is retrieved from the{" "}
				<a
					href="https://restcountries.com/"
					style={isDarkMode ? { color: "white" } : { color: "blue" }}
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
					style={isDarkMode ? { color: "white" } : { color: "blue" }}
				>
					GitHub
				</a>
				.
			</p>
			<p>Developed By Joy Mascarenhas.</p>
		</div>
	);
}

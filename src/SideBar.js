import { useState, useEffect } from "react";
import Loading from "./Loading";
import Disclaimer from "./Disclaimer";

function titleCase(str) {
	if (str === null || str === "") return false;
	else str = str.toString();

	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

export default function SideBar({ selectedName, isDarkMode, setSelectedName }) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [result, setResult] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (selectedName !== "") {
			document.title = `Country | ${titleCase(selectedName)}`;
		}

		return () => {
			document.title = "Interactive Map";
		};
	}, [selectedName]);

	useEffect(() => {
		async function search() {
			try {
				setLoading(true);
				setError("");
				const response = await fetch(
					`https://restcountries.com/v3.1/name/${selectedName}?fullText=true`
				);

				if (!response.ok) {
					throw new Error("Unable to fetch data");
				}

				const data = await response.json();
				setResult(data[0]);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		if (selectedName !== "") {
			search();
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, [selectedName]);

	return (
		<div
			className={`sidebar ${isVisible ? "show" : "hide"}`}
			style={{
				paddingTop: loading || error ? "300px" : "50px",
				alignItems: loading || error ? "center" : "flex-start",
				...(isDarkMode
					? {
							backgroundColor: "#05445d",
							borderRightColor: "#1f5e76",
							color: "white",
					  }
					: {
							backgroundColor: "#308598",
							borderRightColor: "#05445d",
							color: "black",
					  }),
			}}
		>
			<span
				className="close-btn"
				style={
					isDarkMode
						? { backgroundColor: "#609ab1" }
						: { backgroundColor: "#105f7e" }
				}
				onClick={() => setSelectedName("")}
			>
				X
			</span>
			{loading && (
				<Loading
					rotateColor={isDarkMode ? "#1289b8" : "rgb(0, 153, 255)"}
					circleColor={
						isDarkMode ? "rgb(204, 213, 227)" : "rgb(237, 239, 242)"
					}
				/>
			)}

			{!loading && !error && (
				<>
					<h1>
						{result.name?.common
							? result.name?.common.toUpperCase()
							: selectedName.toUpperCase()}
					</h1>
					<img src={result.flags?.png} alt={result.flags?.alt} />
					{result?.population && (
						<span>
							<b>Population: </b>
							{parseInt(result.population).toLocaleString(
								"en-US"
							)}
						</span>
					)}

					{result?.continents && (
						<span>
							<b>Continents: </b>
							{result.continents.join(", ")}
						</span>
					)}

					{result?.languages && (
						<span>
							<b>Languages: </b>
							{Object.values(result.languages).join(", ")}
						</span>
					)}

					{result.capital && (
						<span>
							<b>Capital City: </b>
							{result.capital}
						</span>
					)}

					{result.currencies && (
						<span>
							<b>Currency: </b>
							{Object.values(result.currencies)[0].name}
						</span>
					)}
					<Disclaimer isDarkMode={isDarkMode} />
				</>
			)}
			{error && (
				<h2
					style={{ textAlign: "center", paddingRight: "30px" }}
				>{`No Data Available For The Country ${selectedName}`}</h2>
			)}
		</div>
	);
}

import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function SideBar({ selectedName, isDarkMode, setSelectedName }) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [result, setResult] = useState("");

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
		}
	}, [selectedName]);

	return (
		<div
			className={`sidebar ${selectedName === "" ? "hide" : "show"} 
			}`}
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
				class="close-btn"
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
					rotateColor={isDarkMode ? "#0820fe" : "rgb(0, 153, 255)"}
					circleColor={
						isDarkMode ? "rgb(180, 202, 230)" : "rgb(237, 239, 242)"
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
					{result?.population ? (
						<span>
							<b>Population: </b>
							{parseInt(result.population).toLocaleString(
								"en-US"
							)}
						</span>
					) : (
						""
					)}

					{result?.continents ? (
						<span>
							<b>Continents: </b>
							{result.continents.join(", ")}
						</span>
					) : (
						""
					)}

					{result?.languages ? (
						<span>
							<b>Languages: </b>
							{Object.values(result.languages).join(", ")}
						</span>
					) : (
						""
					)}

					{result.capital ? (
						<span>
							<b>Capital City: </b>
							{result.capital}
						</span>
					) : (
						""
					)}

					{result.currencies ? (
						<span>
							<b>Currency: </b>
							{Object.values(result.currencies)[0].name}
						</span>
					) : (
						""
					)}
				</>
			)}
			{error && (
				<h2>{`No Data Avaialable for the country ${selectedName}`}</h2>
			)}
		</div>
	);
}

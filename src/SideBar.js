import { useState, useEffect } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";
import Disclaimer from "./Disclaimer";

export default function SideBar({ selectedName, isDarkMode, setSelectedName }) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [result, setResult] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (selectedName !== "") {
			document.title = `Country | ${selectedName}`;
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

	const sidebarVariants = {
		hidden: { x: "-100%" },
		visible: { x: 0, transition: { duration: 0.5 } },
		exit: { x: "-100%", transition: { duration: 0.5 } },
	};

	return (
		<motion.div
			initial="hidden"
			variants={sidebarVariants}
			exit="exit"
			animate={isVisible ? "visible" : "hidden"}
			className={`${
				loading || error
					? "pt-[300px] items-center"
					: "items-start pt-[50px]"
			} ${
				isDarkMode
					? "bg-[#05445d] border-r-[#1f5e76] text-white"
					: "bg-[#308598] border-r-[#05445d] text-black"
			} h-full lg:w-[400px] sm:w-full fixed border-r-[4px] border-solid overflow-y-auto z-[200] flex flex-col pt-[50px] gap-[22px] items-start pl-[40px] left-0 scrollbar-none no-select`}
		>
			<span
				className={`${
					isDarkMode ? "bg-[#609ab1]" : "bg-[#105f7e]"
				} font-sans absolute right-0 top-0 font-bold px-2.5 py-2 cursor-pointer hover:opacity-[0.7]`}
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
					marginTop="200px"
				/>
			)}

			{!loading && !error && (
				<>
					<h1 className="font-bold text-4xl tracking-wide font-sans">
						{result.name?.common
							? result.name?.common.toUpperCase()
							: selectedName.toUpperCase()}
					</h1>
					<img src={result.flags?.png} alt={result.flags?.alt} className="max-w-[260px]" />
					<div className="flex flex-col gap-4 font-sans mt-[15px]">
						{result?.population && (
							<span>
								<b className="font-bold">Population: </b>
								{parseInt(result.population).toLocaleString(
									"en-US"
								)}
							</span>
						)}

						{result?.continents && (
							<span>
								<b className="font-bold">Continents: </b>
								{result.continents.join(", ")}
							</span>
						)}

						{result?.languages && (
							<span>
								<b className="font-bold">Languages: </b>
								{Object.values(result.languages).join(", ")}
							</span>
						)}

						{result.capital && (
							<span>
								<b className="font-bold">Capital City: </b>
								{result.capital}
							</span>
						)}

						{result.currencies && (
							<span>
								<b className="font-bold">Currency: </b>
								{Object.values(result.currencies)[0].name}
							</span>
						)}
					</div>

					<Disclaimer isDarkMode={isDarkMode} />
				</>
			)}
			{error && (
				<h2 className="text-center pr-8 text-2xl font-bold mt-[270px] select-none">{`No Data Available For The Country ${selectedName}`}</h2>
			)}
		</motion.div>
	);
}

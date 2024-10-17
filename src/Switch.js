export default function Switch({ isOn, setIsOn, outlineColor }) {
	return (
		<label className="inline-block relative w-[60px] h-[34px]">
			<input
				type="checkbox"
				checked={isOn}
				onChange={(e) => setIsOn(e.target.checked)}
				className="opacity-0 w-0 h-0"
			/>
			<span
				className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-all duration-300 outline outline-[1px] rounded-full
                    before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:bg-white before:transition-transform before:duration-300 before:rounded-full
                    ${
						isOn
							? "before:translate-x-[26px]"
							: "before:translate-x-0"
					}`}
				style={{
					backgroundColor: isOn ? "#028fbe" : "#ccc",
					outlineColor,
				}}
			></span>
		</label>
	);
}

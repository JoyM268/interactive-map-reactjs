export default function Loading({ rotateColor, circleColor, marginTop }) {
	return (
		<div
			style={{
				borderColor: circleColor,
				borderTopColor: rotateColor,
				marginTop,
			}}
			className={`border-solid border-[10px] rounded-[50%] w-[50px] h-[50px] bg-[rgba(0, 0, 0, 0.001)] animate-spin no-select mx-[100px]`}
		></div>
	);
}

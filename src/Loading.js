export default function Loading({ rotateColor, circleColor }) {
	return (
		<div
			class="load"
			style={{
				border: `${circleColor} 10px solid`,
				borderTop: `${rotateColor} 10px solid`,
			}}
		></div>
	);
}

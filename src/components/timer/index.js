import React from "react";
import "./index.css"

export default function Timer({initial}) {
	return (
		<div className="mt-100 layout-column align-items-center justify-content-center">
			<div className="timer-value" data-testid="timer-value"></div>
			<button className="large" data-testid="stop-button">Stop Timer</button>
		</div>
	);

}
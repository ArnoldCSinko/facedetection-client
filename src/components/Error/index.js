// components/Error/index.js
import React from "react";

const Error = ({ isError, message, onClose }) => {
	return isError ? (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				width: "200px",
				height: "50px",
				alignSelf: "center",
				justifySelf: "center"
			}}
		>
			<h4
				className="red center"
				style={{
					background: "black",
					padding: "5px",
					flex: "1"
				}}
			>
				{message}
			</h4>
			<button
				className="w-30 grow f4 link ph3 pv2 dib red bg-black"
				style={{
					height: "100%"
				}}
				onClick={onClose}
			>
				X
			</button>
		</div>
	) : (
		<p
			style={{
				display: "none"
			}}
		/>
	);
};

export default Error;

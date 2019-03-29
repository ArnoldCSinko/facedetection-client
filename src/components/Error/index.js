// components/Error/index.js
import React from "react";

const Error = ({ isError, message, onClose }) => {
	return isError ? (
		<div
			style={{
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignContent: "center",
				alignItems: "center",
				width: "50%",
				height: "50px",
				zIndex: "99999"
			}}
		>
			<h4
				className="red center"
				style={{
					background: "rgba(0,0,0, .6)",
					flex: "1",
					height: "50px%",
					lineHeight: "50px",
					alignContent: "center",
					textAlign: "center"
				}}
			>
				{message}
			</h4>
			<button
				className="w-30 f4 link ph3 pv2 dib red"
				style={{
					height: "100%",
					width: "50px",
					background: "rgba(0,0,0, .6)"
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

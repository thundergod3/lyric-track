import React from "react";
import spinner from "../../images/spinner.gif";

const Loading = () => {
	return (
		<div>
			<img src={spinner} alt="Loading" style={{ width: "200px", margin: "40px auto", display: "block" }} />
		</div>
	);
};

export default Loading;

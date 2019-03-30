const apiCall = async (id, imageUrl) => {
	const data = await fetch(
		"https://intense-sierra-83282.herokuapp.com/image",
		{
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: id,
				imageUrl: imageUrl
			})
		}
	);
	return await data.json();
};

export default apiCall;

const apiCall = async (id, imageUrl) => {
  const data = await fetch("http://localhost:3000/image", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      imageUrl: imageUrl
    })
  });
  return await data.json();
};

export default apiCall;

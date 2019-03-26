const calculateBoundingBox = (faceLocation, imageWidth, imageHeight) => {
  const boundingBox = {
    topRow: faceLocation.top_row * imageHeight,
    rightCol: imageWidth - faceLocation.right_col * imageWidth,
    bottomRow: imageHeight - faceLocation.bottom_row * imageHeight,
    leftCol: faceLocation.left_col * imageWidth
  };
  return boundingBox;
};

export default calculateBoundingBox;

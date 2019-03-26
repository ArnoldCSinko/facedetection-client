import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box, onImageLoaded }) => {
  const { leftCol, rightCol, bottomRow, topRow } = box;
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {imageUrl !== "" ? (
          <div>
            <img
              id="inputImage"
              alt="Face"
              src={imageUrl}
              width="500px"
              height="auto"
              onLoad={onImageLoaded}
            />
            <div
              className="bounding-box"
              style={{
                left: leftCol,
                right: rightCol,
                bottom: bottomRow,
                top: topRow
              }}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
export default FaceRecognition;

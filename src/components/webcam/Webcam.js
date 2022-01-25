import React, {Component, useState} from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam/>;

const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: "user"
};

const capture = React.useCallback(
    () => {
        const imageSrc = webcamRef.current.getScreenshot();
    },

    [webcamRef]
);

const WebCamCapture = () => {
    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null)
    

    return (
        <div>
            <Webcam
                audio={false}
                height = {200}
                ref= {webcamRef}
                screenshotFormat="image/jpeg"
                width={220}
                videoConstraints = {videoConstraints}
            />

            <button onClick={(e) => {e.preventDefault();capture();}}>
                Capture
            </button>
        </div>
    )
}

export default WebCamCapture;
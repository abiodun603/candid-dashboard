import React, {useState, useEffect} from "react";
import Webcam from "react-webcam";
import {useForm} from "react-hook-form"

const WebcamComponent = () => <Webcam/>;

const videoConstraints = {
    width: "100%",
    height: "100%",
    facingMode: "selfie"
};

const WebCamCapture = () => {
    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    // react 
    const { register, handleSubmit } = useForm({
    });

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log(data);
        alert(JSON.stringify(data));


    };

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            // console.log(imageSrc)
            setImage(imageSrc)
            // console.log(image)
            // alert(JSON.stringify(image));
        },
        [webcamRef]
    );

    console.log(image)


    // useEffect(() => {
    //     alert(JSON.stringify(image));

    // })


    return (
        <>
            {
                image == "" ? <Webcam
                    audio={false}
                    height = {"100%"}
                    ref= {webcamRef}
                    register = {image} 
                    screenshotFormat="image/jpeg"
                    width={"100%"}
                    // {...register("image")}
                    videoConstraints = {videoConstraints}
                /> : <img src={image} />
            }

    

            <div>
                {
                    image!=''?
                    <button 
                        onClick={(e)=>{e.preventDefault();setImage('')}}
                        className="webcam-btn"
                    >
                        Retake Image
                    </button> :
                    <button 
                        type = "submit"
                        onClick={(e)=>{e.preventDefault();capture();handleSubmit(onSubmit);}}
                        className="webcam-btn"
                    >
                        Capture
                    </button>
                }
            </div>
        </>
    )
}

export default WebCamCapture;
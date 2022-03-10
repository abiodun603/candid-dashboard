import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, {useState} from 'react'
import Webcam from "react-webcam";
import './style.css'

const Guards = () => {
    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    const videoConstraints = {
        width: 400,
        height: 200,
        facingMode: "selfie"
    };

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
        },    [webcamRef]
    );


    return (
        <>
            <div class="form">
                <div class="form-title">
                    <h1 className='title-title'>Candid Security Solution</h1>
                        <p>This is Candid Security form. Created by Candid Security Solutions</p>
                    <p class="required">*Required</p>
                </div>
                
                <div class="block">
                    <div class="text">Name<span class="required">*</span></div>
                    <div class="input-block"><input type="input" name="answer" placeholder="Enter Your Name"/></div>
                </div>

                <div class="block">
                    <div class="text">Other Names<span class="required">*</span></div>
                    <div class="input-block"><input type = "input" name="answer" placeholder = "Enter Other Name"/> </div>
                </div>

                <div class="block">
                    <div class="text">Email<span class="required">*</span></div>
                    <div class="input-block"><input type="email" name="answer" placeholder="Enter Your Email"/></div>
                </div>

                <div class="block">
                    <div class="text">Date of birth<span class="required">*</span></div>
                    <div class="input-block"> <input type="date" placeholder = "mm/dd/yy"/></div>
                </div>

                <div class="block">
                    <div class="text">Age<span class="required">*</span></div>
                    <div class="input-block"> <input type="age" placeholder = "Enter Guard Age"/></div>
                </div>

                <div class="block">
                    <div class="text">L.G.A<span class="required">*</span></div>
                    <div class="input-block"> <input type="text" placeholder = "Enter Local Government Area" /></div>
                </div>

                <div class="block">
                    <div class="text">NIN<span class="required">*</span></div>
                    <div class="input-block"> <input type="text" placeholder = "Enter Your NIN Here" /></div>
                </div>

                <div class="block">
                    <div class="text">Service Number<span class="required">*</span></div>
                    <div class="input-block"> <input type="text" placeholder = "Enter Your Service Number Here" /></div>
                </div>
            
                <div class="block">
                    <div class="text">Blood Group<span class="required">*</span></div>
                    <div class="input-block"> <input type="text" placeholder = "Enter Blood Group" / ></div>
                </div>

                <div class="block">
                    <div class="text">Address<span class="required">*</span></div>
                    <div class="input-block"><input type="address" name="answer" placeholder="Enter Your Address"/></div>
                </div>

                <div class="block">
                    <div class="text">State of Origin<span class="required">*</span></div>
                    <div class="input-block"><input type="address" name="answer"placeholder = "Enter State" /></div>
                </div>

                <div class="block">
                    <div class="text">Sex</div>

                    <div
                        style={{
                            marginLeft: 22
                        }}
                    >
                        <RadioGroup row aria-label="gender" name="row-radio-xcc c-group" style={{display: "block"}}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" className="radioButton" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </div>
                </div>
            
                <div class="block">
                    <div class="text">Religion<span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder = "Enter Religion"/></div>
                </div>

                <div class="block">
                    <div class="text">Marital Status<span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder="Enter Marital Status" /></div>
                </div>

                <div class="block">
                    <div class="text">Phone Number<span class="required">*</span></div>
                    <div class="input-block"><input type="phone" name="answer" placeholder="Enter Number"/></div>
                </div>

                <div class="block">
                    <div class="text">Wife Name<span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder="Enter Wife's Name" /></div>
                </div>

                <div class="block">
                    <div class="text">Phone Number<span class="required">*</span></div>
                    <div class="input-block"><input type="number" name="answer" placeholder="Enter Number"/></div>
                </div>

                <div class="block">
                    <div class="text">Next of Kin<span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder="Enter Next of Kin" /></div>
                </div>

                <div class="block">
                    <div class="text">Phone Number<span class="required">*</span></div>
                    <div class="input-block"><input type="number" name="answer" placeholder="Enter Number"/></div>
                </div>
                
                <div class="block">
                    <div class="text">Educational Qualification <span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder="Enter Qualification" /></div>
                </div>

                <div class="block">
                    <div class="text">Previous Employer <span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder="Enter Recent Work" /></div>
                </div>

                <div class="block">
                    <div class="text">Address<span class="required">*</span></div>
                    <div class="input-block"><input type="address" name="answer" placeholder="Enter Your Address"/></div>
                </div>

                <div class="block">
                    <div class="text">Reasons You Left <span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder="Example Theft...."/ ></div>
                </div>
                <div class="block">
                    <div class="text">Medical Conditions<span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder="Enter Medical Condition"/ ></div>
                </div>
                <div class="block">
                    <div class="text">Father Name<span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder="Enter Father's Name" /></div>
                </div>

                <div class="block">
                    <div class="text">Phone Number<span class="required">*</span></div>
                    <div class="input-block"><input type="number" name="answer" placeholder="Enter number"/></div>
                </div>

                <div class="block">
                    <div class="text">Address<span class="required">*</span></div>
                    <div class="input-block"><input type="address" name="answer" placeholder="Enter your address"/></div>
                </div>

                <div class="block">
                    <div class="text">Mothers name<span class="required">*</span></div>
                    <div class="input-block"><input type="text" name="answer" placeholder="Enter Mother's Name"/></div>
                </div>
                <div class="block">
                    <div class="text">Phone Number<span class="required">*</span></div>
                    <div class="input-block"><input type="number" name="answer" placeholder="Enter number"/></div>
                </div>
                
                <div class="block">
                    <div class="text">Address<span class="required">*</span></div>
                    <div class="input-block"><input type="address" name="answer" placeholder="Enter your address"/></div>
                </div>
                <div class="block">
                    <div class="text">Mark On The Body<span class="required">*</span></div>
                    <div class="input-block"><input type="address" name="answer" placeholder="Enter Yes or No"/></div>
                </div>

                <div class="block">
                    <div class="text">If yes, Specify<span class="required">*</span></div>
                    <div class="input-block"><input type="address" name="answer" placeholder="Kindly Specify"/></div>
                </div>

                <div class="block">
                    <div class="text">Union or Society<span class="required">*</span></div>
                    <div class="input-block"><input type="address" name="answer" placeholder="Enter Yes or No"/></div>
                </div>

                <div class="block">
                    <div class="text">If yes, Specify<span class="required">*</span></div>
                    <div class="input-block"><input type="address" name="answer" placeholder="Kindly Specify"/></div>
                </div>

                <div class="block">
                    <div class="text">Capture Signature<span class="required">*</span></div>
                    <div class="input-block"><input type="file" accept="image/*" name="answer"/></div>
                </div>
                <div class= "block" style={{paddingLeft: 20}}>
                    {
                        image == "" ? <Webcam
                            audio={false}
                            // height = {"100%"}
                            ref= {webcamRef}
                            register = {image} 
                            screenshotFormat="image/jpeg"
                            width={"90%"}
                            // {...register("image")}
                            videoConstraints = {videoConstraints}
                        /> : <img src={image} />
                    }

                {/* <div> */}
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
                            onClick={(e)=>{e.preventDefault();capture();}}
                            className="webcam-btn"
                            // {...register({image})}
                        >
                            <div><input class="btn-one" type="button" name="answer" value="capture"/> </div>
                        </button>
                    }
                {/* </div> */}
                </div>                


                <div><input class="btn" type="submit" name="answer"/></div>
                <div class="last-block">
                    <h2>CANDID SECURITY FORMS</h2>
                </div>
            </div>
        </>
    )
}

export default Guards
import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "./ProfessorForm.css";
import image_crying from "../../assets/emojis/statics/crying.png";
import image_sad from "../../assets/emojis/statics/sad.png";
import image_neutral from "../../assets/emojis/statics/neutral.png";
import image_happy from  "../../assets/emojis/statics/happy.png";
import image_heart from "../../assets/emojis/statics/heart.png";

import gif_crying from "../../assets/emojis/crying.gif";
import gif_sad from "../../assets/emojis/sad.gif";
import gif_neutral from "../../assets/emojis/neutral.gif";
import gif_happy from "../../assets/emojis/happy.gif";
import gif_heart from "../../assets/emojis/heart.gif";

import Modal from "react-modal";

import SubmitReview from "../../../scripts/SubmitReview";

const labelStyles = {
    color: "black", // Set the label text color to black
  };

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px", // Increase the width
      height: "350px", // Increase the height
      padding: "20px",
      color: "black", // Set the text color
    },
};

const validation_schema = Yup.object().shape({
    name : Yup.string().required(),
    difficulty : Yup.number().required().max(5, "Value must be below 10").min(0, "Value must be above zero"),
    quality : Yup.number().required().max(5, "Value must be below 10").min(0, "Value must be above zero"),
    mod : Yup.string().required(),
    comments : Yup.string(),
});

const initial_value = {
    name : "",
    difficulty : 0,
    quality : 0,
    mod : "",
    comments : "",
};

export function ProfessorForm() {
    const [gif1, setGif1] = useState(false);
    const [gif2, setGif2] = useState(false);
    const [gif3, setGif3] = useState(false);
    const [gif4, setGif4] = useState(false);
    const [gif5, setGif5] = useState(false);

    const [gif1q, setGif1q] = useState(false);
    const [gif2q, setGif2q] = useState(false);
    const [gif3q, setGif3q] = useState(false);
    const [gif4q, setGif4q] = useState(false);
    const [gif5q, setGif5q] = useState(false);

    const [isAuthenticationOpen, setAuthenticationOpen] = useState(false);

    const openAuthenticationPopup = () => {
        setAuthenticationOpen(true);
      };
    
      const closeAuthenticationPopup = () => {
        setAuthenticationOpen(false);
      };

    const clearOthers = (n) => {
        const target = n-1;
        const arr = [setGif1, setGif2, setGif3, setGif4, setGif5];
        for (var i = 0; i < 5; i++) {
            if (i == target) {continue;}
            arr[i](false);
        }
    }

    const clearOthersq = (n) => {
        const target = n-1;
        const arr = [setGif1q, setGif2q, setGif3q, setGif4q, setGif5q];
        for (var i = 0; i < 5; i++) {
            if (i == target) {continue;}
            arr[i](false);
        }
    }

    const clearOthersh = (n) => {
        const target = n-1;
        const arr = [setGif1h, setGif2h, setGif3h, setGif4h, setGif5h];
        for (var i = 0; i < 5; i++) {
            if (i == target) {continue;}
            arr[i](false);
        }
    }

    return (
        <div className="main">
            <h1 className="maintitle">Submit a rating</h1>
            <Formik
                initialValues={initial_value}
                validationSchema={validation_schema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values); 
                    openAuthenticationPopup();
                    SubmitReview(values);
                    resetForm();
                }}
            >
            {({
                isSubmitting,
                values,
                setFieldValue,
                handleChange,
                errors,
                touched
            }) => {
                return (
                    <Form>
                        <div className="mainbox">
                            <div className="entrybox">
                                <label htmlFor="name"  className="fieldlabel">Professor:</label>
                                <Field ctype="text" id="name" name="name" className="option"/>
                                <ErrorMessage name="name" component="div"/>
                            </div>
                            <div className="entrybox">
                                <label htmlFor="difficulty"  className="fieldlabel">Difficulty:</label>
                                <div className="emojibox">
                                    <input className="emoji" id="gif1" type="image" src={gif1 ? gif_crying : image_crying} 
                                        alt="level_1" onClick={() => {
                                            setFieldValue("difficulty", 1);
                                            setGif1(true); clearOthers(1);}}/>
                                    <input className="emoji" id="gif2" type="image" src={gif2 ? gif_sad : image_sad} 
                                        alt="level_2" onClick={() => {
                                            setFieldValue("difficulty", 2); 
                                            setGif2(true); clearOthers(2);
                                            }}/>
                                    <input className="emoji" id="gif3" type="image" src={gif3 ? gif_neutral : image_neutral} 
                                        alt="level_3" onClick={() => {setFieldValue("difficulty", 3); 
                                        setGif3(true); clearOthers(3);}}/>
                                    <input className="emoji" id="gif4" type="image" src={gif4 ? gif_happy : image_happy} 
                                        alt="level_4" onClick={() => {setFieldValue("difficulty", 4); 
                                        setGif4(true); clearOthers(4);}}/>
                                    <input className="emoji" id="gif5" type="image" src={gif5 ? gif_heart : image_heart} 
                                        alt="level_5" onClick={() => {setFieldValue("difficulty", 5); 
                                        setGif5(true); clearOthers(5);}}/>
                                </div>
                                <ErrorMessage name="difficulty" component="div"/>
                            </div>
                            <div className="entrybox">
                                <label htmlFor="quality" className="fieldlabel">Quality:</label>
                                <div className="emojibox">
                                    <input className="emoji" id="gif1" type="image" src={gif1q ? gif_crying : image_crying} 
                                        alt="level_1" onClick={() => {setFieldValue("quality", 1);
                                        setGif1q(true); clearOthersq(1);}}/>
                                    <input className="emoji" id="gif2" type="image" src={gif2q ? gif_sad : image_sad} 
                                        alt="level_2" onClick={() => {setFieldValue("quality", 2);
                                        setGif2q(true); clearOthersq(2);}}/>
                                    <input className="emoji" id="gif3" type="image" src={gif3q ? gif_neutral : image_neutral} 
                                        alt="level_3" onClick={() => {setFieldValue("quality", 3);
                                        setGif3q(true); clearOthersq(3);}}/>
                                    <input className="emoji" id="gif4" type="image" src={gif4q ? gif_happy : image_happy} 
                                        alt="level_4" onClick={() => {setFieldValue("quality", 4);
                                        setGif4q(true); clearOthersq(4);}}/>
                                    <input className="emoji" id="gif5" type="image" src={gif5q ? gif_heart : image_heart} 
                                        alt="level_5" onClick={() => {setFieldValue("quality", 5);
                                        setGif5q(true); clearOthersq(5);}}/>
                                </div>
                                <ErrorMessage name="quality" component="div"/>
                            </div>
                            <div className="entrybox">
                                <label htmlFor="mod"  className="fieldlabel">Module:</label>
                                <Field type="text" id="mod" name="mod" className="option"/>
                                <ErrorMessage name="mod" component="div"/>
                            </div>
                            <div className="entrybox">
                                <label htmlFor="comments"  className="fieldlabel">Comments:</label>
                                <Field type="text" id="comments" as="textarea" name="comments" className="option"/>
                                <ErrorMessage name="comments" component="div"/>
                            </div>
                            <button className="button" type="submit">
                                Submit Entry
                            </button>
                        </div>
                    </Form>);
                }}
            </Formik>
            <Modal
                isOpen={isAuthenticationOpen}
                onRequestClose={closeAuthenticationPopup}
                contentLabel="Authentication"
                style={customStyles}
            >
                <h2 style={{ color: "black" }}>Authentication</h2>
                <Formik
                initialValues={{ name: "", email: "", nusNetID: "" }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required(),
                    email: Yup.string().email().required(),
                    nusNetID: Yup.string().required(),
                })}
                onSubmit={(values) => {
                    console.log("Authentication values:", values);
                    // Perform authentication logic here
                    SubmitReview(initial_value); // You can call the SubmitReview function here
                    resetForm(); // Reset form after successful authentication
                    closeAuthenticationPopup(); // Close the authentication popup
                }}
                >
                {({ isSubmitting, resetForm }) => (
                    <Form>
                    {/* Your authentication form */}
                    <div>
                        <label htmlFor="name" style={labelStyles}>Name:</label>
                        <Field type="text" id="name" name="name" style={{ width: "600px"}}/>
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <label htmlFor="email" style={labelStyles}>Email:</label>
                        <Field type="email" id="email" name="email" style={{ width: "600px"}}/>
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label htmlFor="nusNetID" style={labelStyles}>NUS NetID:</label>
                        <Field type="text" id="nusNetID" name="nusNetID" style={{ width: "600px", marginBottom: "10px"}} />
                        <ErrorMessage name="nusNetID" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Authenticate
                    </button>
                    </Form>
                )}
                </Formik>
            </Modal>
        </div>
    );
}

import React from "react";
import { useState } from "react";
import axios from "axios";
import "./../App.css";
const signUp = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        contact: "",
    });
    const handleFieldChange = (e) => {
        setInput((inputField) => (Object.assign(Object.assign({}, inputField), { [e.target.name]: e.target.value })));
    };
    // const handleFieldChange = (event) => {
    //     setUsername({
    //         [event.target.name]: event.target.value,
    //     });
    //     setEmail({
    //         [event.target.name]: event.target.value,
    //     });
    //     setPassword({
    //         [event.target.name]: event.target.value,
    //     });
    //     setPasswordConfirmation({
    //         [event.target.name]: event.target.value,
    //     });
    // };
    const signUp = (event) => {
        event.preventDefault();
        axios
            .post("/authentication/signUp", {
            username: input.username,
            email: input.email,
            password: input.password,
            password_confirmation: input.password_confirmation,
            contact: input.contact,
        })
            .then((response) => {
            console.log(response);
            window.location.href = "/authentication/signIn";
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return (<div className="container">
            <form method="post" className="form-group p-4 w-75" onSubmit={signUp}>
                <div className="form-group py-2">
                    <label className="form-check-label">Username</label>
                    <input className="form-control" type="text" name="username" id="username" onChange={handleFieldChange}/>
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Email</label>
                    <input className="form-control" type="text" name="email" id="email" onChange={handleFieldChange}/>
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Contact</label>
                    <input className="form-control" type="text" name="contact" id="contact" onChange={handleFieldChange}/>
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Password</label>
                    <input className="form-control" type="password" name="password" id="password" onChange={handleFieldChange}/>
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Confirm Password</label>
                    <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" onChange={handleFieldChange}/>
                </div>
                <div className="form-group py-2">
                    <button type="submit" className="form-control btn btn-warning fs-5 py-3">
                        SIGN UP
                    </button>
                </div>
                <div className="form-group py-2 text-center">
                    <a className="text-dark-orange link-form fs-6">
                        Already Have an account?
                    </a>
                </div>
                <div className="form-group py-2">
                    <span className="link-form signUpText">
                        By signing in or creating an account, you agree to our{" "}
                        <a className="text-dark-orange link-form" href="/termsAndCondition">
                            Terms and Conditions
                        </a>{" "}
                        &{" "}
                        <a className="text-dark-orange link-form" href="/privacyPolicy">
                            Privacy Policy
                        </a>
                        . We need this information to be able to contact you and
                        to prevent cheating or fraud.
                    </span>
                </div>
            </form>
        </div>);
};
export default signUp;

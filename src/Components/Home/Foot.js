import React from "react";
import './Footer.css';
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
export default function Footer() {

    return (
        <div className="main-footer">
            <div className="container">
                <div>
                    <h1>Save Time,Save Money!</h1>
                </div>
                <div>
                    <TextField
                        variant="outlined"
                        label="Email"
                    >
                        Email
                    </TextField>
                </div>
                <div>
                    <Button
                        type="submit"

                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}

                    >
                        Submit
                    </Button>

                </div>
                <hr />

                <div className="row">
                    {/* column1 */}
                    <div className="col">

                        <a href={"/"} className="home">Home</a>
                        <a href={"/"} className="home">About us</a>
                        <a href={"/"} className="home">Contact</a>
                        <a href={"/signin"} className="home">Log In</a>
                        <a href={"/signup"} className="home"> SignUp</a>




                    </div>



                </div>
                <hr />
                <div className="main-footer">
                    <p className="col-sm">
                        BookMyStay &copy;{new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>

        </div>
    )
}
import React from "react";
import kim from "./kim.png";
import "./Header.css";

export default function Header() {
    return(
        <div className="header">
            <div className="personal">
                <img src={kim} alt="kim" />
                <div className="name">
                    <h3>Kim Boyd</h3>
                    <p>Software Developer</p>
                </div>
            </div>

            <div className="navigation">
                <a>About</a>
                <a href="https://www.github.com/kimboyd12">GitHub</a>
                <a>kimberlyboyd2@gmail.com</a>
            </div>
        </div>
    )
}
import React from "react";
import Logo from "./images/airbnb-logo.png";

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <img src={Logo} alt="Airbnb Logo" />
                </nav>
            </header>
        </div>
    )
}
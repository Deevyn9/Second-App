import React from "react";
import Photo from "./images/photo-grid.png";

export default function Experience() {
    return (
        <div>
            <div className="experience">
                <div className="grid-div">
                    <img src={Photo} alt="grid image" />      
                </div>
                <h1>Online Experience</h1>
                <p>Join unique interactive activities led by one-of-a-kind host-all without leaving home</p>
            </div>
        </div>
    )
}
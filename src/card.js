import React from "react";
import Star from "./images/star.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div>
            <div className="cards">
                <div className="card-container">
                    {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={`../images/${props.coverImg}`} className="card-image" />
                <div className="star-stats">
                    <img src={Star} className="card-star" />
                        <span>{props.stats.rating}</span>
                        <span className="grey">({props.stats.reviewCount})<span className="bullet">{'\u2022'}</span>{props.location}</span>
                    </div>
                    <div className="info">
                        <p>{props.paragraph}</p>
                        <p><span className="bold">From ${props.price}</span> / Person</p>
                    </div>    
                </div>
            </div>
        </div>
    )
}
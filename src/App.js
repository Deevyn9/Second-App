import React from "react";
import Header from "./nav";
import Experience from "./Experience";
import Card from "./card";
// import Zafares from "./images/katie-zaferes.png"
import data from "./data";


export default function App() {
    const card = data.map(item => {
        return (
    <Card
        key = {item.id}
        {...item}
    />
)
})          
    return (
        <div>
            <Header />
            <Experience />
        <section className="card-list">
        {card}
        </section>
        </div>
    )
}
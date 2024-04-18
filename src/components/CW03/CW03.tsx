import React, { FC, ReactNode, useState } from "react";
import { CB02v0 } from "../CB02/CB02var";
import "./CW03.scss";

interface Card {
    title: ReactNode;
    desc: ReactNode[];
}
interface ProjectItem {
    title: ReactNode;
    desc: ReactNode;
}
const CW03:FC = () => {
    const [menuActive, setMenuActive] = useState(false);
    const handleClick = () => {
        setMenuActive((prevState) => {
            const isActive = !prevState;
            return isActive;
        });
    }
    const cards:Card[] = [
        {
            title:"Chatbot with Retrieval Augmented Generation",
            desc: [
                "This chatbot uses the Retrieval Augmented Generation (RAG) pattern to improve responses.",
                <><strong>Tech:</strong> React, Next.js, Supabase (PostGres & pgvector)</>
            ]
        },
    ];
    const itemsC1:ProjectItem[] = [
        {
            title:"RAG Chatbot",
            desc: "Chatbot incorporating the Retrieval Augmented Generation pattern."
        },
        {
            title:<>WebBot<span>In Development</span></>,
            desc: "Proof-of-concept chatbot exploring the capacity of a Large Language Model as a web production resource."
        },
    ];
    const itemsC2:ProjectItem[] = [
        {
            title:<>JudgeBoard<span>In Development</span></>,
            desc: "Dashboard of figure skating judge scores. Which judge liked your elements the most? Which judge liked them the least?"
        },
    ];
    return (
        <section className="cw03 cw03v0">
            <div className="cw03w0">
                <h2>Projects</h2><button className="icnbtn" onClick={handleClick}><span className={`icn ${menuActive ? "icn-arrow-down" :"icn-arrow-up"}`}><span className="sro">Project Menu</span></span></button>
                <div className="cw03w1">
                    <ul>
                        {cards.map((card,idx) => <li key={idx}><CB02v0 title={card.title} desc={card.desc} /></li>)}
                    </ul>
                </div>
                <div className={`cw03menu ${menuActive ? "cw03menu-active" :""}`}>
                    <div className="cw03w2">
                        <ul>
                            {itemsC1.map( (item, idx) => (<li key={idx}>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </li>))}
                        </ul>
                        <ul>
                            {itemsC2.map( (item, idx) => (<li key={idx}>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </li>))}
                        </ul>
                    </div>      
                </div>
            </div>
        </section>
    );
}

export default CW03;
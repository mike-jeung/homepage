import React, { FC } from "react";
import "./CL01.scss";
import { CB01v0, CB01v1, CB01v2, CB01v4 } from "../CB01/CB01var";
import { CB02v1 } from "../CB02/CB02var";
import CT02 from "../CT02/CT02";
import CW03 from "../CW03/CW03";
import CW04 from "../CW04/CW04";
import CW05 from "../CW05/CW05";
import CW06, { CardData } from "../CW06/CW06";
import CW07 from "../CW07/CW07";
import { SI01v0,SI01v1,SI01v2,SI01v3,SI01v4,SI01v5 } from "../SI01/SI01var";

const CL01:FC = () => {

    
    const ticks = [
        {
            content: {
                args: {
                    title:"Front End",
                    caption:"I design bold user experiences with the latest tech",
                },
                cmp:CB01v2
            },
            tile: {
                // args:{},
                cmp:SI01v1
            },
            disp:"",
        },{
            content: {
                args: {
                    title:"Back End",
                    caption:"I build robust, scalable web applications",
                },
                cmp:CB01v2
            },
            tile: {
                // args:{},
                cmp:SI01v2
            },
            disp:"fullbleed",
        },{
            content: {
                args: {
                    title:"Solutions",
                    caption:"I implement digital strategies that drive business results",
                },
                cmp:CB01v2
            },
            tile: {
                // args:{},
                cmp:SI01v4
            },
            disp:"fullbleed",
        }
    ];

    const namePlate = {
        title:"Mike Jeung",
        caption:"WEB DEVELOPER",
        description:"Highly experienced and versatile web developer offering expertise in technical project management, high-level strategic planning, and full stack software engineering."
    };
    const cards:CardData[] = [
        {
            textArgs: {
                title:"ChatBot",
                caption:"PROJECT", 
                description:"Retrieval Augmented Generation with Sun Tzu’s Art of War",
            },
            textCpt: CB01v4,
            graphicCpt: SI01v0,
            //graphicScale: "70",
            //graphicExtra: "flushtop",
            demoCpt: CW05,
        },{
            textArgs: {
                title:"WebBot",
                caption:"PROJECT IN DEVELOPMENT",
                description:"Can a LLM function as a web production resource?",
            },
            textCpt: CB01v4,
            graphicCpt:SI01v3,
            graphicScale: "70",
            graphicExtra: "flushtop",
            //demoCpt: ,
        },{
            textArgs: {
                title:"Scoreboard",
                caption:"PROJECT IN DEVELOPMENT",
                description:"Figure skating scoring dashboard. Which judge scores you the lowest? The highest?",
            },
            textCpt: CB01v4,
            graphicCpt:SI01v5,
            //graphicScale: "70",
            //graphicExtra: "flushtop",
            //demoCpt: ,
        },
    ];

    return (
        <section className="cl01 cl01v0">
            <div className="cl01w0">
                <div className="cl01w1 cl01grid">
                    
                    {ticks.map( (tick, index) => (<div key={index} className="cl01w3 cl01svcs"><CW07 content={ticks[index].content} tile={ticks[index].tile} disp={ticks[index].disp}/></div>))}
                    
                    <div className="cl01w3 cl01robot"><CT02 /></div>
                    <div className="cl01w3 cl01name"><CB01v0 {...namePlate} /></div>
                    <div className="cl01w3 cl01beat">
                        
                    </div>
                </div>
                <div className="cl01w1 cl01invis">
                    <CW06 cards={cards} />
                </div>
                <div className="cl01w1">
                    <div>
                        <CW04 title="Contact" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CL01;
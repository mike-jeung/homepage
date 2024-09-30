import React, { FC, useContext } from "react";
import "./CL01.scss";
import CB01 from "../CB01/CB01";
import CT02 from "../CT02/CT02";
import CW09 from "../CW09/CW09";
import CW04 from "../CW04/CW04";
import CW05 from "../CW05/CW05";
import CW06, { CardData } from "../CW06/CW06";
import CW07 from "../CW07/CW07";
import CW08 from "../CW08/CW08";
import SI01 from "../SI01/SI01";
import SI02 from "../SI02/SI02";
import { StatusContext } from "../../App";
import { URL } from "../../constants";

const CL01:FC = () => {

    const status = useContext(StatusContext);
    const beats = [
        {
            args: {
                v:0,
                name: "Code",
                inner:<SI02 v={0} />,
                href: URL.homepagecode
            },
            cmp:CW09
        },
        {
            args: {
                v:0,
                name: "Resume",
                inner:<SI02 v={2} />,
                href: URL.resume
            },
            cmp:CW09
        },
        {
            args: {
                v:1,
                name: "Contact",
                inner:<SI02 v={1} />,
                href: "#contact"
            },
            cmp:CW09
        }
    ];
    const ticks = [
        {
            content: {
                args: {
                    v:2,
                    title:"Back End",
                    caption:"I administer data and infrastructure, and build APIs",
                },
                cmp:CB01
            },
            tile: {
                args:{v:2},
                cmp:SI01
            },
            disp:"fullbleed",
        },{
            content: {
                args: {
                    v:2,
                    title:"Front End",
                    caption:"I create engaging user interfaces & experiences",
                },
                cmp:CB01
            },
            tile: {
                args:{v:1},
                cmp:SI01
            },
            disp:"fullbleed freeanim",
        },{
            content: {
                args: {
                    v:2,
                    title:"Solutions",
                    caption:"I build applications tailored to your business",
                },
                cmp:CB01
            },
            tile: {
                args:{v:4,shrink:0.35},
                cmp:SI01
            },
            disp:"fullbleed",
        }
    ];

    const namePlate = {
        v:0,
        title:"Mike Jeung",
        caption:"WEB DEVELOPER",
        description:"Experienced and versatile web developer offering expertise in technical project management, high-level strategic planning, and full stack software engineering."
    };
    const cards:CardData[] = [
        {
            textArgs: {
                v:4,
                title:"ChatBot",
                caption:"PROJECT", 
                description:"Retrieval Augmented Generation Example with Sun Tzu's 'Art of War'",
            },
            textCpt: CB01,
            graphicCpt: SI01,
            graphicArgs: {
                v:0,
                timelineArgs:{
                    repeat:1
                }
            },
            //graphicScale: "70",
            //graphicExtra: "flushtop",
            demoCpt: CW05,
        },{
            textArgs: {
                v:4,
                title:"WebBot",
                caption:"PROJECT IN DEVELOPMENT",
                description:"Can a LLM function as a web production resource?",
            },
            textCpt: CB01,
            graphicCpt:SI01,
            graphicArgs: {
                v:3,
                timelineArgs:{
                    repeat:3
                }
            },
            graphicScale: "70",
            graphicExtra: "flushtop",
            //demoCpt: ,
        },{
            textArgs: {
                v:4,
                title:"Scoreboard",
                caption:"PROJECT IN DEVELOPMENT",
                description:"Dashboard and analysis of figure skating competition scoring.",
            },
            textCpt: CB01,
            graphicCpt:SI01,
            graphicArgs: {
                v:5,
                timelineArgs:{
                    repeat:1
                }
            },
            graphicScale: "85",
            graphicExtra: "smtop",
            //demoCpt: ,
        },
    ];

    return (
        <section className="cl01 cl01v0">
            <div className="cl01w0">
                <div className="cl01w1 cl01grid">
                    
                    {ticks.map( (tick, index) => (
                        <div key={index} className={`cl01w3 cl01svcs cl01svcs-${index}`}>
                            <CW07 content={ticks[index].content} tile={ticks[index].tile} disp={ticks[index].disp}/>
                        </div>
                    ))}
                    
                    <div className="cl01w3 cl01robot"><CT02 /></div>
                    <div className="cl01w3 cl01name"><CB01 {...namePlate} /></div>
                    <div className="cl01w3 cl01beat">
                        {beats.map( (beat, index) => (
                            <beat.cmp key={index} {...beat.args} />
                        ))}
                    </div>
                </div>
                <div className="cl01w1 cl01invis">
                    <CW06 cards={cards} />
                </div>
                <div className="cl01w1 cl01contact">
                    <div>
                        <CW08 title="Contact" content={<CW04 />} />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CL01;
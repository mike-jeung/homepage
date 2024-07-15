import React, { FC, useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';
import "./style/SI01v4.scss";
import { SI01ChildProps } from "./SI01";
import { applyTimelineCallbacks } from "../../helpers";

const SI01v4:FC<SI01ChildProps> = ({timeline, timelineCallbacks = []}) => {
    console.log("chart")

    // chart
    const refs = {
        "svg":useRef<SVGSVGElement | null>(null),
        "all":useRef<SVGGElement | null>(null),
        "allBars":useRef<SVGGElement | null>(null),
        "grid":useRef<SVGPathElement | null>(null),
        "b1":useRef<SVGPathElement | null>(null),
        "b2":useRef<SVGPathElement | null>(null),
        "b3":useRef<SVGPathElement | null>(null),
        "b4":useRef<SVGPathElement | null>(null),
        "base":useRef<SVGPathElement | null>(null),
    };
    // const timeline = useRef<gsap.core.Timeline>(gsap.timeline());

    useGSAP( () => {
        timeline.addLabel("initialize")
        .addLabel("loopStart")
        timeline.from(refs.grid.current,{x:"-100%",duration:0.5,ease:"power1.in"})
            //.set(refs.svg.current,{transformOrigin:"100% 50%",backgroundColor:"transparent",scaleX:1})
            .from(refs.base.current,{x:"-100%",duration:0.5,ease:"power1.in"},"<")
            
            .from(refs.b1.current,{transformOrigin: "50% 100%",scaleY:0,duration:0.7},"<0.35")
            .from(refs.b2.current,{transformOrigin: "50% 100%",scaleY:0,duration:0.7},"<0.35")
            .from(refs.b3.current,{transformOrigin: "50% 100%",scaleY:0,duration:0.7},"<0.35")
            .fromTo(refs.b4.current,{transformOrigin: "50% 100%",scaleY:0},{scaleY:0.7,duration:0.7},"<0.35");
        // shake it up
        for (let i = 0; i < 20; i++) {
            timeline.to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
                .to(refs.b4.current,{scaleY:0.69,scaleX:1.01,duration:0.05});
        }
        // break out
        timeline.to(refs.b1.current,{y:-18,rotation:-5,duration:0.05},"<")
            .to(refs.b2.current,{y:-18,rotation:-5,duration:0.05},"<")
            .to(refs.b3.current,{y:-18,rotation:-5,duration:0.05},"<")
            .to(refs.b4.current,{scaleY:1,scaleX:1,duration:0.05},"<")
            .to(refs.b1.current,{y:0,x:-2,rotation:0,duration:0.05},">")
            .to(refs.b2.current,{y:0,x:-2,rotation:0,duration:0.05},"<")
            .to(refs.b3.current,{y:0,x:-2,rotation:0,duration:0.05},"<")
            .to(refs.base.current,{duration:1},"<");
        timeline.addLabel("iconState",">");
        timeline.addPause("iconState");
        timeline.addLabel("afterIconState",">0.1");

        timeline.to(refs.allBars.current,{x:"150%",duration:0.5},">0.1")
            .to(refs.grid.current,{x:"120%",duration:0.5,ease:"power1.out"},"<0.25")
            .to(refs.base.current,{x:"120%",duration:0.5,ease:"power1.out"},"<");
        applyTimelineCallbacks(timeline,timelineCallbacks);

    });
    return (
        <div className="si01w0">
            <svg xmlns="http://www.w3.org/2000/svg" id="data" viewBox="0 0 165 165" ref={refs.svg}>
                <g ref={refs.all}>
                    <path d="M0 33.65h165M0 55.65h165M0 66.65h165M0 77.65h165M0 88.65h165M0 99.65h165M0 110.65h165M0 44.65h165M0 121.65h165" ref={refs.grid} className="p1"/>
                    <g ref={refs.allBars}>
                        <path d="M117.26-.35h27v133h-27z" className="p2" ref={refs.b4}/>
                        <path d="M84.26 55.65h27v77h-27z" className="p2" ref={refs.b3}/>
                        <path d="M51.26 77.65h27v55h-27z" className="p2" ref={refs.b2}/>
                        <path d="M18.26 99.65h27v33h-27z" className="p2" ref={refs.b1}/>
                    </g>
                    <path d="M0 132.65h165" className="p3" ref={refs.base}/>
                </g>
            </svg>
        </div>
    );
}
export default SI01v4;
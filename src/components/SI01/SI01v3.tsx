import React, { FC, useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';
import "./style/SI01v3.scss";
import { SI01ChildProps } from "./SI01";
import applyTimelineCallbacks from "../../helpers/applyTimelineCallbacks";

const SI01v3:FC<SI01ChildProps> = ({timeline, timelineCallbacks = []}) => {
    // webbot
    const refs = {
        "path": useRef<SVGPathElement | null>(null),
        "box1": useRef<SVGGElement | null>(null),
        "box2": useRef<SVGUseElement | null>(null),
    }
    // const timeline = useRef<gsap.core.Timeline>(gsap.timeline({
    //     repeat:4
    // }));
    
    useGSAP( () => {
        timeline.addLabel("initialize");
        timeline.addLabel("loopStart");
        timeline.set(refs.box2.current,{x:200,y:117});
        timeline.fromTo(refs.box1.current,{x:0,y:-400},{x:0,y:0,duration:1,ease:"power2.in"});
        timeline.to(refs.box1.current, {x:200,y:117,duration:1,ease:"power2.inOut"});

        timeline.to(refs.box2.current,{x:400,y:234,duration:1,ease:"power2.inOut"},"<")
            .to(refs.box2.current,{opacity:0,duration:0.25},">-0.75");
        
        timeline.addLabel("iconState",">0.25");
        timeline.addPause("iconState");
        timeline.addLabel("afterIconState",">0.01");

        applyTimelineCallbacks(timeline,timelineCallbacks);
    });
    return (
        <div className="si01w0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627 518">
                <path d="M173.35 124.44c7.54-5.08 18.37-4.72 30.42 2.29l325.84 190.63c22.77 13.24 41.23 45.21 41.23 71.4 0 12.88-4.47 21.97-11.72 26.3l-156.36 92.21c7.46-4.24 12.08-13.41 12.08-26.51 0-26.19-18.46-58.15-41.23-71.4L47.77 218.73c-11.39-6.62-21.69-7.31-29.15-3.07l154.74-91.22Z" className="p1"/>
                <path d="M47.77 313.56C25 300.32 6.54 268.35 6.54 242.16c0-26.19 18.46-36.68 41.23-23.44l325.84 190.63c22.77 13.24 41.23 45.21 41.23 71.4 0 26.19-18.46 36.68-41.23 23.44L47.77 313.56Z" className="p2"/>
                <path d="M47.77 299.34c-15.94-9.27-28.86-31.65-28.86-49.98s12.92-25.68 28.86-16.41l325.84 190.63c15.94 9.27 28.86 31.65 28.86 49.98s-12.92 25.68-28.86 16.41L47.77 299.34Z" className="p3"/>
                <path d="M354.36 439.57c3.13-1.78 7.46-1.49 12.24 1.29 9.56 5.56 17.32 18.99 17.32 29.99 0 5.5-1.94 9.35-5.07 11.13l6.87-3.93c3.21-1.75 5.21-5.63 5.21-11.21 0-11-7.75-24.42-17.32-29.99-4.78-2.78-9.11-3.07-12.24-1.29l-7 4Z" className="p1"/>
                <ellipse cx="366.61" cy="460.77" rx="14.08" ry="24.49" className="p4" transform="rotate(-30.2 366.59 460.768)"/>
                <path d="M238.36 371.57c3.13-1.78 7.46-1.49 12.24 1.29 9.56 5.56 17.32 18.99 17.32 29.99 0 5.5-1.94 9.35-5.07 11.13l6.87-3.93c3.21-1.75 5.21-5.63 5.21-11.21 0-11-7.75-24.42-17.32-29.99-4.78-2.78-9.11-3.07-12.24-1.29l-7 4Z" className="p1"/>
                <ellipse cx="250.61" cy="392.77" rx="14.08" ry="24.49" className="p4" transform="rotate(-30.2 250.607 392.775)"/>
                <path d="M128.36 306.57c3.13-1.78 7.46-1.49 12.24 1.29 9.56 5.56 17.32 18.99 17.32 29.99 0 5.5-1.94 9.35-5.07 11.13l6.87-3.93c3.21-1.75 5.21-5.63 5.21-11.21 0-11-7.75-24.42-17.32-29.99-4.78-2.78-9.11-3.07-12.24-1.29l-7 4Z" className="p1"/>
                <ellipse cx="140.61" cy="327.77" rx="14.08" ry="24.49" className="p4" transform="rotate(-30.2 140.599 327.766)"/>
                <path d="M28.36 248.57c3.13-1.78 7.46-1.49 12.24 1.29 9.56 5.56 17.32 18.99 17.32 29.99 0 5.5-1.94 9.35-5.07 11.13l6.87-3.93c3.21-1.75 5.21-5.63 5.21-11.21 0-11-7.75-24.42-17.32-29.99-4.78-2.78-9.11-3.07-12.24-1.29l-7 4Z" className="p1"/>
                <ellipse cx="40.61" cy="269.77" rx="14.08" ry="24.49" className="p4" transform="rotate(-30.2 40.605 269.773)"/>
                <path d="M125.5 172.5 512.75 399.13" ref={refs.path}/>
                <g ref={refs.box1} id="si01box1">
                    <path d="m63.5 111 120.12 69.59v99L63.5 210v-99z" className="p5"/>
                    <path d="M183.62 180.59v99l124.8-73.6v-99l-124.8 73.6z" className="p6"/>
                    <path d="m308.42 106.99-124.8 73.6L63.5 111l125-74 119.92 69.99z" className="p7"/>
                    <path d="m88.53 177.35 18.41-15.09-3.51-6.94-21.91 17.96 21.91 43.36 3.51-2.88-18.41-36.41zM158.59 217.94l-18.41-36.42 3.51-2.87L165.6 222l-21.91 17.96-3.51-6.94 18.41-15.08zM136.15 171.14l-19.61 55.44-4.34-5.01 19.61-55.44 4.34 5.01z" className="p1"/>
                </g>
                <g ref={refs.box2}>
                    <path d="m63.5 111 120.12 69.59v99L63.5 210v-99z" className="p5"/>
                    <path d="M183.62 180.59v99l124.8-73.6v-99l-124.8 73.6z" className="p6"/>
                    <path d="m308.42 106.99-124.8 73.6L63.5 111l125-74 119.92 69.99z" className="p7"/>
                    <path d="m88.53 177.35 18.41-15.09-3.51-6.94-21.91 17.96 21.91 43.36 3.51-2.88-18.41-36.41zM158.59 217.94l-18.41-36.42 3.51-2.87L165.6 222l-21.91 17.96-3.51-6.94 18.41-15.08zM136.15 171.14l-19.61 55.44-4.34-5.01 19.61-55.44 4.34 5.01z" className="p1"/>
                </g>
            </svg>
            
        </div>
    );
}
export default SI01v3;
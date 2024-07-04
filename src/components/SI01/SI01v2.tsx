import React, { FC, useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';
import "./style/SI01v2.scss";
import { SI01ChildProps } from "./SI01";
import { applyTimelineCallbacks } from "../../helpers";

const SI01v2:FC<SI01ChildProps> = ({timeline, timelineCallbacks = []}) => {
    // back end; add vertical gradient
    const refs = {
        "all": useRef<SVGSVGElement | null>(null),
        "dots": useRef<SVGGElement | null>(null),
        "p1": useRef<SVGGElement | null>(null),
        "p2": useRef<SVGGElement | null>(null),
        "p3": useRef<SVGGElement | null>(null),
        "p4": useRef<SVGGElement | null>(null),
        "p5": useRef<SVGGElement | null>(null),
        "p6": useRef<SVGGElement | null>(null),
        "top": useRef<SVGPathElement | null>(null),
        "bot": useRef<SVGPathElement | null>(null),
    };
    // timeline = useRef<gsap.core.Timeline>(gsap.timeline({
    //     //repeat:-1
    // }));

    useGSAP( () => {
        const platters = refs.all.current?.querySelectorAll(".platters > g");
        const l = refs.top.current?.getTotalLength();
        if (platters && l) {
            timeline.addLabel("initialize");
            timeline.addLabel("loopStart");
            timeline.set(refs.top.current, {strokeDasharray:l})
                .set(refs.bot.current, {strokeDasharray:l});
            timeline.from(platters,{y:-100,stagger:0.2,duration:0.5});
            
            timeline.addLabel("zoom");

            timeline.fromTo(refs.bot.current, {strokeDashoffset:l, strokeDasharray:l, ease:"power4.in"}, {duration:1.25, strokeDashoffset:0})
                .fromTo(refs.top.current, {strokeDashoffset:l, strokeDasharray:l, ease:"power4.in"}, {duration:1.25, strokeDashoffset:0},"<");

            timeline.fromTo(refs.dots.current,{opacity:1,x:-200},{x:200,duration:1},"<1.1");
                

            timeline.to(refs.bot.current, {duration:1.25, strokeDashoffset:-l},"<0.625")
                .to(refs.top.current, {duration:1.25, strokeDashoffset:-l},"<");
            
            timeline.set(refs.dots.current,{opacity:0},">");
            

            
            timeline.addLabel("iconState",">");
            timeline.addPause("iconState");
            timeline.addLabel("afterIconState",">0.1");
            
            applyTimelineCallbacks(timeline,timelineCallbacks);

            // no stagger option, repeating dots
            // timeline.to(refs.bot.current,{duration:2});
            // timeline.add(() => {
            //     timeline.tweenFromTo("zoom", timeline.duration(), {
            //         repeat: -1, // repeat indefinitely
            //         immediateRender: false, // don't start tween immediately
            //     });
            // });

            // stagger up option
            //timeline.to(platters,{y:-200,stagger:{amount:0.5,from:"end"},duration:0.50},">0.1");

            // stagger down option
            timeline.to(platters,{y:200,stagger:{amount:0.5},duration:0.50},">0.1");
        }

    });
    return (
    
        <div className="si01w0">
            <svg xmlns="http://www.w3.org/2000/svg" className="backend" viewBox="0 0 165 99" ref={refs.all}>
                <g ref={refs.dots}>
                    <circle cx="5.03" cy="49.93" r="4"/>
                    <circle cx="16.03" cy="49.93" r="4"/>
                    <circle cx="27.03" cy="49.93" r="4"/>
                    <circle cx="38.03" cy="49.93" r="4"/>
                    <circle cx="49.03" cy="49.93" r="4"/>
                    <circle cx="60.03" cy="49.93" r="4"/>
                    <circle cx="71.03" cy="49.93" r="4"/>
                    <circle cx="82.03" cy="49.93" r="4"/>
                    <circle cx="93.03" cy="49.93" r="4"/>
                    <circle cx="104.03" cy="49.93" r="4"/>
                    <circle cx="115.03" cy="49.93" r="4"/>
                    <circle cx="126.03" cy="49.93" r="4"/>
                    <circle cx="137.03" cy="49.93" r="4"/>
                    <circle cx="148.03" cy="49.93" r="4"/>
                    <circle cx="159.03" cy="49.93" r="4"/>
                </g>
                <g className="platters">
                    <g className="p6">
                        <path d="M125.53 81.43c0 4.69-19.25 8.5-43 8.5s-43-3.81-43-8.5v-9c0-4.69 19.25-8.5 43-8.5s43 3.81 43 8.5v9Z" className="p1"/>
                        <ellipse cx="82.53" cy="72.43" rx="43" ry="8.5" className="e1"/>
                    </g>
                    <g className="p5">
                        <path d="M125.53 70.43c0 4.69-19.25 8.5-43 8.5s-43-3.81-43-8.5v-9c0-4.69 19.25-8.5 43-8.5s43 3.81 43 8.5v9Z" className="p1"/>
                        <ellipse cx="82.53" cy="61.43" rx="43" ry="8.5" className="e1"/>
                    </g>
                    <g className="p4">
                        <path d="M125.53 59.43c0 4.69-19.25 8.5-43 8.5s-43-3.81-43-8.5v-9c0-4.69 19.25-8.5 43-8.5s43 3.81 43 8.5v9Z" className="p1"/>
                        <ellipse cx="82.53" cy="50.43" rx="43" ry="8.5" className="e1"/>
                    </g>
                    <g className="p3">
                        <path d="M125.53 48.43c0 4.69-19.25 8.5-43 8.5s-43-3.81-43-8.5v-9c0-4.69 19.25-8.5 43-8.5s43 3.81 43 8.5v9Z" className="p1"/>
                        <ellipse cx="82.53" cy="39.43" rx="43" ry="8.5" className="e1"/>
                    </g>
                    <g className="p2">
                        <path d="M125.53 37.43c0 4.69-19.25 8.5-43 8.5s-43-3.81-43-8.5v-9c0-4.69 19.25-8.5 43-8.5s43 3.81 43 8.5v9Z" className="p1"/>
                        <ellipse cx="82.53" cy="28.43" rx="43" ry="8.5" className="e1"/>
                    </g>
                    <g className="p1">
                        <path d="M125.53 26.43c0 4.69-19.25 8.5-43 8.5s-43-3.81-43-8.5v-9c0-4.69 19.25-8.5 43-8.5s43 3.81 43 8.5v9Z" className="p1"/>
                        <ellipse cx="82.53" cy="17.43" rx="43" ry="8.5" className="e1"/>
                    </g>
                </g>
                <g className="outline">
                    <path className="outline" d="M.03 38.93h34.08v-27s16.92-8.56 48.42-8.56 48.67 8.56 48.67 8.56v27h33.83" ref={refs.top}/>
                    <path className="outline" d="M.03 60.37h34.08v27s16.92 8.56 48.42 8.56 48.67-8.56 48.67-8.56v-27h33.83" ref={refs.bot}/>
                </g>
            </svg>
            
        </div>
    
    );
}
export default SI01v2;
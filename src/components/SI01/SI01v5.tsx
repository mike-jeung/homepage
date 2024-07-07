import React, { FC, useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';
import "./style/SI01v5.scss";
import { SI01ChildProps } from "./SI01";
import { applyTimelineCallbacks } from "../../helpers";

const SI01v5:FC<SI01ChildProps> = ({timeline, timelineCallbacks = []}) => {
    // scoreboard
    const refs = {
        "svg":useRef<SVGSVGElement | null>(null),
        "all":useRef<SVGGElement | null>(null),
        "per":useRef<HTMLDivElement | null>(null)
    };
    useGSAP( () => {
        const ticks = refs.all.current?.querySelectorAll("path");
        
        if (ticks) {
            timeline.addLabel("initialize");
            timeline.addLabel("loopStart");
            timeline.from(ticks,{opacity:0,stagger:0.1,duration:0.1})
                .from(refs.per.current,{innerText:0,duration:2.1,snap:{innerText:0.01}},"<")
                .to(refs.all.current,{duration:0.5});
            timeline.addLabel("iconState",">");
            timeline.addPause("iconState");
            timeline.addLabel("afterIconState",">0.1");
            timeline.to(ticks,{opacity:0,stagger:-0.1,duration:0.1},">0.1")
                .to(refs.per.current,{innerText:50,duration:2.1,snap:{innerText:0.01}},"<")
            applyTimelineCallbacks(timeline,timelineCallbacks);
        }
    });
    return (
        <div className="si01w0">
            <div className="txt" ref={refs.per}>299.99</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="score" viewBox="0 0 199 103" ref={refs.svg}>
                <g className="steps" ref={refs.all}>
                    <path d="M0 96h31v7H0z" className="p12"/>
                    <path d="M1.03 82.86h31v7h-31z" className="p17" transform="rotate(9 16.512 86.341)"/>
                    <path d="M4.11 70.04h31v7h-31z" className="p15" transform="rotate(18 19.61 73.556)"/>
                    <path d="M9.16 57.86h31v7h-31z" className="p2" transform="rotate(27 24.647 61.375)"/>
                    <path d="M16.04 46.63h31v7h-31z" className="p1" transform="rotate(36 31.548 50.128)"/>
                    <path d="M24.6 36.6h31v7h-31z" className="p20" transform="rotate(45 40.1 40.1)"/>
                    <path d="M34.63 28.04h31v7h-31z" className="p16" transform="rotate(54 50.125 31.542)"/>
                    <path d="M45.86 21.16h31v7h-31z" className="p8" transform="rotate(63 61.36 24.654)"/>
                    <path d="M58.04 16.11h31v7h-31z" className="p13" transform="rotate(72 73.542 19.614)"/>
                    <path d="M70.86 13.03h31v7h-31z" className="p4" transform="rotate(81 86.36 16.533)"/>
                    <path d="M84 12h31v7H84z" className="p7" transform="rotate(90 99.5 15.5)"/>
                    <path d="M97.14 13.03h31v7h-31z" className="p10" transform="rotate(99 112.638 16.535)"/>
                    <path d="M109.96 16.11h31v7h-31z" className="p18" transform="rotate(108 125.46 19.61)"/>
                    <path d="M122.14 21.16h31v7h-31z" className="p9" transform="rotate(117 137.637 24.653)"/>
                    <path d="M133.37 28.04h31v7h-31z" className="p21" transform="rotate(126 148.875 31.542)"/>
                    <path d="M143.4 36.6h31v7h-31z" className="p3" transform="rotate(135 158.897 40.101)"/>
                    <path d="M151.96 46.63h31v7h-31z" className="p11" transform="rotate(144 167.46 50.127)"/>
                    <path d="M158.84 57.86h31v7h-31z" className="p5" transform="rotate(153 174.347 61.365)"/>
                    <path d="M163.89 70.04h31v7h-31z" className="p14" transform="rotate(162 179.387 73.542)"/>
                    <path d="M166.97 82.86h31v7h-31z" className="p6" transform="rotate(171 182.463 86.358)"/>
                    <path d="M168 96h31v7h-31z" className="p19" transform="rotate(180 183.5 99.5)"/>
                </g>
            </svg>
        </div>
    );
}
export default SI01v5;
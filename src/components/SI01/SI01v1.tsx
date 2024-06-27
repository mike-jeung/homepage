import React, { FC, useRef } from "react";
import { useGSAP } from '@gsap/react';
interface SI01v1Props {
    timeline:gsap.core.Timeline;
}
const SI01v1:FC<SI01v1Props> = ({timeline}) => {
    // front end; add horizontal gradient
    const refs = {
        "win1":useRef<SVGSVGElement | null>(null),
        "win1txt":useRef<NodeListOf<Element> | undefined | null>(null),
        "win1block":useRef<NodeListOf<Element> | undefined | null>(null),
        "win2":useRef<SVGSVGElement | null>(null),
        "win2txt":useRef<NodeListOf<Element> | undefined | null>(null),
        "win2block":useRef<NodeListOf<Element> | undefined | null>(null),
    };
    // const timeline = useRef<gsap.core.Timeline>(gsap.timeline({
        
    // }));
    useGSAP( () => {
        

        refs.win1txt.current = refs.win1.current?.querySelectorAll(".txt");
        refs.win2txt.current = refs.win2.current?.querySelectorAll(".txt");
        refs.win1block.current = refs.win1.current?.querySelectorAll(".block");
        refs.win2block.current = refs.win2.current?.querySelectorAll(".block");
        
        
        
        if (refs.win2txt.current && refs.win1txt.current && refs.win2block.current && refs.win1block.current) {
            timeline.set(refs.win1txt.current,{scaleX:0});
            timeline.set(refs.win2txt.current,{scaleX:0});
        
            timeline.set(refs.win1block.current,{opacity:0});
            timeline.set(refs.win2block.current,{opacity:0});
        
            timeline.set(refs.win1.current,{x:300,y:25,scale:0.7,zIndex:1,opacity:0.4},">");
            timeline.set(refs.win2.current,{x:-300,y:-20,scale:1,zIndex:2,opacity:1},">");

            timeline.to(refs.win1.current,{x:70,duration:0.5,ease:"power1.in"},">");
            timeline.to(refs.win2.current,{x:-50,duration:0.5,ease:"power1.in"},">-0.5");

            timeline.to(refs.win1.current,{x:44,zIndex:1,duration:1.5,ease:"none"},">");
            timeline.to(refs.win2.current,{x:-20,zIndex:2,duration:1.5,ease:"none"},">-1.5");

            timeline.to(refs.win2block.current,{opacity:1,duration:1,ease:"power1.in"},"<");
            timeline.to(refs.win2txt.current,{scaleX:1,stagger:0.1,duration:0.5,ease:"power1.in"},"<");
            
            timeline.to(refs.win1.current,{x:-300,duration:0.25,ease:"power1.in"},">");
            timeline.to(refs.win2.current,{x:300,duration:0.25,ease:"power1.in"},">-0.25");

            timeline.set(refs.win1.current,{x:-150,y:0,scale:1,opacity:1,zIndex:2});
            timeline.set(refs.win2.current,{x:150,y:0,scale:0.7,opacity:0.4,zIndex:1});
            
            timeline.to(refs.win2.current,{x:40,y:0,duration:0.5,ease:"power1.in"},">");
            timeline.to(refs.win1.current,{x:-20,y:0,duration:0.5,ease:"power1.in"},"<");
            
            timeline.to(refs.win1.current,{x:10,duration:1.5,ease:"none"},">");
            timeline.to(refs.win2.current,{x:12,duration:1.5,ease:"none"},">-1.5");
            timeline.to(refs.win1block.current,{stagger:0.3,opacity:1,duration:0.5,ease:"power1.in"},"<");
            timeline.to(refs.win1txt.current,{scaleX:1,stagger:0.2,duration:0.5,ease:"power1.in"},"<");

            // timeline.to(refs.win1.current,{x:190,duration:0.25,ease:"power1.out"},">");
            // timeline.to(refs.win2.current,{x:-190,duration:0.25,ease:"power1.out"},">-0.25");

        }


    });
    return (
        <div className="si01w0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 71" ref={refs.win1} className="si01win1">
                <rect width="94" height="69" x=".78" y="1.15" rx="5.08" ry="5.08" className="r1"/>
                <path d="M5.78 16.15h84v49h-84z" className="p1"/>
                <rect width="27" height="17" x="7.78" y="22.15" rx="2" ry="2" className="block r23"/>
                <rect width="18" height="2" x="36.78" y="24.15" rx="1" ry="1" className="txt r4"/>
                <rect width="18" height="2" x="36.78" y="28.15" rx="1" ry="1" className="txt r4"/>
                <rect width="18" height="2" x="36.78" y="32.15" rx="1" ry="1" className="txt r4"/>
                <rect width="10" height="2" x="36.78" y="36.15" rx="1" ry="1" className="txt r4"/>

                <rect width="27" height="17" x="60.78" y="22.15" rx="2" ry="2" className="block r8"/>
                <rect width="47" height="8" x="7.78" y="45.15" rx="2" ry="2" className="block r2"/>
                <rect width="47" height="2" x="7.78" y="56.15" rx="1" ry="1" className="txt r4"/>
                <rect width="30" height="2" x="7.78" y="60.15" rx="1" ry="1" className="txt r4"/>

                <rect width="27" height="8" x="60.78" y="45.15" rx="2" ry="2" className="block r3"/>
                <rect width="27" height="2" x="60.78" y="56.15" rx="1" ry="1" className="txt r4"/>
                <rect width="19" height="2" x="60.78" y="60.15" rx="1" ry="1" className="txt r4"/>
                
                
                
                <circle cx="8.28" cy="8.65" r="2.5" className="c1"/>
                <circle cx="16.28" cy="8.65" r="2.5" className="c2"/>
                <circle cx="24.28" cy="8.65" r="2.5" className="c3"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 71" ref={refs.win2} className="si01win2">
                <rect width="94" height="69" x="1" y="1" rx="5.08" ry="5.08" className="r9"/>
                <path d="M6 16h84v49H6z" className="p1"/>
                <circle cx="8.5" cy="8.5" r="2.5" className="c1"/>
                <circle cx="16.5" cy="8.5" r="2.5" className="c2"/>
                <circle cx="24.5" cy="8.5" r="2.5" className="c3"/>
                <rect width="10" height="2" x="11" y="17" rx="1" ry="1" className="txt r10"/>
                <rect width="14" height="2" x="16" y="21" rx="1" ry="1" className="txt r10"/>
                <rect width="8" height="2" x="28" y="49" rx="1" ry="1" className="txt r10"/>
                <rect width="12" height="2" x="16" y="57" rx="1" ry="1" className="txt r10"/>
                <rect width="8" height="2" x="12" y="61" rx="1" ry="1" className="txt r10"/>
                <rect width="9" height="2" x="24" y="25" rx="1" ry="1" className="txt r10"/>
                <rect width="9" height="2" x="24" y="45" rx="1" ry="1" className="txt r10"/>
                <rect width="14" height="2" x="24" y="29" rx="1" ry="1" className="txt r10"/>
                <rect width="14" height="2" x="24" y="53" rx="1" ry="1" className="txt r10"/>
                <rect width="14" height="2" x="30" y="33" rx="1" ry="1" className="txt r10"/>
                <rect width="33" height="2" x="30" y="37" rx="1" ry="1" className="txt r10"/>
                <rect width="25" height="2" x="30" y="41" rx="1" ry="1" className="txt r10"/>
                <rect width="17" height="45" x="71" y="18" rx="2" ry="2" className="block r22"/>
            </svg>
        </div>
    );
}
export default SI01v1;
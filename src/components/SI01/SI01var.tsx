import React, { FC, useRef } from "react";
import SI01, { SI01Props } from "./SI01";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";


// #region Variants
const SI01v0:FC = () => {
    const refs = {
        "mouth": useRef<SVGPathElement | null>(null),
        "qmark": useRef<SVGPathElement | null>(null),
    }
    const timeline = useRef<gsap.core.Timeline | null>(gsap.timeline({repeat:-1}));
    useGSAP( () => {
        if (timeline && timeline.current) {
            timeline.current.set(refs.mouth.current,{transformOrigin:"0% 20%"})
                .to(refs.mouth.current,{scaleY:0.4,duration:0.25})
                .to(refs.mouth.current,{scaleY:1,duration:0.25})
                .to(refs.mouth.current,{scaleY:0.2,duration:0.25})
                .to(refs.mouth.current,{scaleY:1,duration:0.25})
        }
    });
    return (
        <SI01 v={0}>
            <div className="si01w0">
                <svg xmlns="http://www.w3.org/2000/svg" className="chatbot" viewBox="0 0 174 125"><defs><linearGradient id="si01-g0" x1="118.78" x2="118.78" y1="34.98" y2="118.98" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bee8ff"/><stop offset=".18" stop-color="#bae5fd"/><stop offset=".35" stop-color="#aedff9"/><stop offset=".51" stop-color="#9bd4f2"/><stop offset=".68" stop-color="#7fc4e8"/><stop offset=".84" stop-color="#5cb0db"/><stop offset="1" stop-color="#39c"/></linearGradient></defs><g><path d="M89.78 71.48H40.95l-22.43 16 4.18-16H11.78c-4.42 0-8-3.58-8-8v-52c0-4.42 3.58-8 8-8h78c4.42 0 8 3.58 8 8v52c0 4.42-3.58 8-8 8Z" className="p1"/><path d="M47 39.16c0-1.05.18-1.88.54-2.49.36-.61.98-1.13 1.86-1.58.53-.27 1.31-.65 2.34-1.14 3.85-1.78 5.77-3.86 5.77-6.24 0-1.8-.63-3.26-1.9-4.38s-2.94-1.68-5.01-1.68c-1.37 0-2.63.18-3.78.54-1.15.36-1.86.76-2.11 1.19-.06.12-.12.4-.18.85-.16 1.76-.85 2.64-2.08 2.64-.64 0-1.16-.23-1.54-.7s-.57-1.09-.57-1.88v-2.87c0-1.07 1.05-1.98 3.16-2.72s4.68-1.11 7.71-1.11c3.26 0 5.91.95 7.95 2.84s3.06 4.35 3.06 7.35c0 2.4-.83 4.43-2.48 6.08s-4.43 3.2-8.33 4.64v2.34c0 .64-.21 1.17-.62 1.57-.41.4-.95.6-1.62.6s-1.22-.19-1.61-.56c-.38-.37-.58-.89-.58-1.55v-1.73Zm-3.22 11.1c0-1.29.49-2.34 1.48-3.16.99-.82 2.29-1.23 3.91-1.23s2.96.41 3.96 1.22 1.49 1.87 1.49 3.18-.5 2.37-1.51 3.19c-1.01.82-2.32 1.23-3.94 1.23s-2.9-.42-3.9-1.25-1.49-1.89-1.49-3.18Z" className="p2" ref={refs.qmark}/></g><g><path d="M170.28 59.98v16c0 3.31-2.69 6-6 6h-4v13c0 4.42-3.58 8-8 8h-11.24l4.24 16-22.48-16H85.28c-4.42 0-8-3.58-8-8v-13h-4c-3.31 0-6-2.69-6-6v-16c0-3.31 2.69-6 6-6h4v-11c0-4.42 3.58-8 8-8h67c4.42 0 8 3.58 8 8v11h4c3.31 0 6 2.69 6 6Z" className="p3"/><path d="M118.28 34.98v-10" className="p4"/><path d="M105 62.98v-9c0-3-6-3-6 0v9c0 3 6 3 6 0ZM136.5 62.98v-9c0-3-6-3-6 0v9c0 3 6 3 6 0Z" className="p5"/></g><circle cx="118.28" cy="15.98" r="9"/><path d="M113.28 71.98h9c1.1 0 2 .9 2 2v11c0 2.76-2.24 5-5 5h-3c-2.76 0-5-2.24-5-5v-11c0-1.1.9-2 2-2Z" className="p5" ref={refs.mouth}/></svg>      
            </div>
        </SI01>
    );
}
const SI01v1:FC = () => {
    const refs = {
        "win1":useRef<SVGSVGElement | null>(null),
        "win2":useRef<SVGSVGElement | null>(null),
    };
    const timeline = useRef<gsap.core.Timeline>(gsap.timeline({
        //repeat:-1
    }));
    useGSAP( () => {
        timeline.current.fromTo(refs.win1.current,{x:-150,y:-150},{x:-20,y:-20,duration:0.5,ease:"power1.in"},0);
        timeline.current.fromTo(refs.win2.current,{
            x:150,
            y:150,
            //scale:0.9
        },{x:20,y:20,duration:0.5,ease:"power1.in"},0);
        timeline.current.to(refs.win1.current,{x:0,y:0,duration:2,ease:"none"},0.5);
        timeline.current.to(refs.win2.current,{x:0,y:0,duration:2,ease:"none"},0.5);
        // timeline.current.to(refs.win1.current,{x:-200,y:200,duration:0.25,ease:"none"},2.5);
        // timeline.current.to(refs.win2.current,{x:200,y:-200,duration:0.25,ease:"none"},2.5);




    });
    return (
        <SI01 v={1}>

            <div className="si01w0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 71" ref={refs.win1} className="si01win1"><rect width="94" height="69" x=".78" y="1.15" rx="5.08" ry="5.08" className="r1"/><path d="M5.78 16.15h84v49h-84z" className="p1"/><rect width="47" height="8" x="7.78" y="45.15" rx="2" ry="2" className="r2"/><rect width="27" height="8" x="60.78" y="45.15" rx="2" ry="2" className="r3"/><rect width="47" height="2" x="7.78" y="56.15" rx="1" ry="1" className="r4"/><rect width="30" height="2" x="7.78" y="60.15" rx="1" ry="1" className="r4"/><rect width="27" height="2" x="60.78" y="56.15" rx="1" ry="1" className="r4"/><rect width="19" height="2" x="60.78" y="60.15" rx="1" ry="1" className="r4"/><rect width="27" height="17" x="60.78" y="22.15" rx="2" ry="2" className="r8"/><rect width="27" height="17" x="7.78" y="22.15" rx="2" ry="2" className="r23"/><rect width="10" height="2" x="36.78" y="36.15" rx="1" ry="1" className="r4"/><rect width="18" height="2" x="36.78" y="24.15" rx="1" ry="1" className="r4"/><rect width="18" height="2" x="36.78" y="28.15" rx="1" ry="1" className="r4"/><rect width="18" height="2" x="36.78" y="32.15" rx="1" ry="1" className="r4"/><circle cx="8.28" cy="8.65" r="2.5" className="c1"/><circle cx="16.28" cy="8.65" r="2.5" className="c2"/><circle cx="24.28" cy="8.65" r="2.5" className="c3"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 71" ref={refs.win2} className="si01win2"><rect width="94" height="69" x="1" y="1" rx="5.08" ry="5.08" className="r9"/><path d="M6 16h84v49H6z" className="p1"/><circle cx="8.5" cy="8.5" r="2.5" className="c1"/><circle cx="16.5" cy="8.5" r="2.5" className="c2"/><circle cx="24.5" cy="8.5" r="2.5" className="c3"/><rect width="10" height="2" x="11" y="17" rx="1" ry="1" className="r10"/><rect width="14" height="2" x="16" y="21" rx="1" ry="1" className="r10"/><rect width="8" height="2" x="28" y="49" rx="1" ry="1" className="r10"/><rect width="12" height="2" x="16" y="57" rx="1" ry="1" className="r10"/><rect width="8" height="2" x="12" y="61" rx="1" ry="1" className="r10"/><rect width="9" height="2" x="24" y="25" rx="1" ry="1" className="r10"/><rect width="9" height="2" x="24" y="45" rx="1" ry="1" className="r10"/><rect width="14" height="2" x="24" y="29" rx="1" ry="1" className="r10"/><rect width="14" height="2" x="24" y="53" rx="1" ry="1" className="r10"/><rect width="14" height="2" x="30" y="33" rx="1" ry="1" className="r10"/><rect width="33" height="2" x="30" y="37" rx="1" ry="1" className="r10"/><rect width="25" height="2" x="30" y="41" rx="1" ry="1" className="r10"/><rect width="17" height="45" x="71" y="18" rx="2" ry="2" className="r22"/></svg>
            </div>
        </SI01>
    );
}
const SI01v2:FC = () => {
    
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
        },
        timeline = useRef<gsap.core.Timeline>(gsap.timeline({
            //repeat:-1
        }));
    
    useGSAP( () => {
        const platters = refs.all.current?.querySelectorAll(".platters > g");
        const l = refs.top.current?.getTotalLength();
        if (platters && l) {
            timeline.current.set(refs.top.current, {strokeDasharray:l})
                .set(refs.bot.current, {strokeDasharray:l});
            timeline.current.from(platters,{y:-100,stagger:0.1,duration:0.25});

            timeline.current.fromTo(refs.bot.current, {strokeDashoffset:l, strokeDasharray:l, ease:"power4.out"}, {duration:0.5, strokeDashoffset:0})
                .fromTo(refs.top.current, {strokeDashoffset:l, strokeDasharray:l, ease:"power4.out"}, {duration:0.5, strokeDashoffset:0},"<");

            timeline.current.fromTo(refs.dots.current,{x:-200},{x:200,duration:1});

            // timeline.current.to(refs.bot.current, {duration:0.5, strokeDashoffset:-l},"<0.5")
            //     .to(refs.top.current, {duration:0.5, strokeDashoffset:-l},"<");

            // timeline.current.to(platters,{y:-200,stagger:{amount:0.5,from:"end"},duration:0.50});
        }

    });
    return (
        <SI01 v={2}>
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
        </SI01>
    );
}
const SI01v3:FC = () => {
    const refs = {
        "path": useRef<SVGPathElement | null>(null),
        "box1": useRef<SVGGElement | null>(null),
        "box2": useRef<SVGUseElement | null>(null),
    }
    const timeline = useRef<gsap.core.Timeline>(gsap.timeline({repeat:-1}));
    
    useGSAP( () => {
        timeline.current.set(refs.box2.current,{x:200,y:117});
        timeline.current.fromTo(refs.box1.current,{x:0,y:-400},{x:0,y:0,duration:1,ease:"power2.in"});
        timeline.current.to(refs.box1.current, {x:200,y:117,duration:1,ease:"power2.inOut"});

        timeline.current.to(refs.box2.current,{x:400,y:234,duration:1,ease:"power2.inOut"},"<")
            .to(refs.box2.current,{opacity:0,duration:0.25},">-0.75");
        
        
    });
    return (
        <SI01 v={3}>
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
        </SI01>
    );
}
const SI01v4:FC = () => {
    const refs = {
        "grid":useRef<SVGPathElement | null>(null),
        "b1":useRef<SVGPathElement | null>(null),
        "b2":useRef<SVGPathElement | null>(null),
        "b3":useRef<SVGPathElement | null>(null),
        "b4":useRef<SVGPathElement | null>(null),
        "base":useRef<SVGPathElement | null>(null),
    };
    const timeline = useRef<gsap.core.Timeline>(gsap.timeline());
    useGSAP( () => {
        timeline.current.from(refs.grid.current,{x:"-100%",duration:0.5,ease:"power1.in"})
            .from(refs.base.current,{x:"-100%",duration:0.5,ease:"power1.in"},"<")
            .from(refs.b1.current,{transformOrigin: "50% 100%",scaleY:0,duration:0.5},"<0.25")
            .from(refs.b2.current,{transformOrigin: "50% 100%",scaleY:0,duration:0.5},"<0.25")
            .from(refs.b3.current,{transformOrigin: "50% 100%",scaleY:0,duration:0.5},"<0.25")
            .fromTo(refs.b4.current,{transformOrigin: "50% 100%",scaleY:0},{scaleY:0.7,duration:0.5},"<0.25")
            .to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
            .to(refs.b4.current,{scaleY:0.69,scaleX:1.01,duration:0.05})
            .to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
            .to(refs.b4.current,{scaleY:0.69,scaleX:1.01,duration:0.05})
            .to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
            .to(refs.b4.current,{scaleY:0.69,scaleX:1.01,duration:0.05})
            .to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
            .to(refs.b4.current,{scaleY:0.69,scaleX:1.01,duration:0.05})
            .to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
            .to(refs.b4.current,{scaleY:0.69,scaleX:1.01,duration:0.05})
            .to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
            .to(refs.b4.current,{scaleY:0.69,scaleX:1.01,duration:0.05})
            .to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
            .to(refs.b4.current,{scaleY:0.69,scaleX:1.01,duration:0.05})
            .to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
            .to(refs.b4.current,{scaleY:0.69,scaleX:1.01,duration:0.05})
            .to(refs.b4.current,{scaleY:0.71,scaleX:0.99,duration:0.05})
            .to(refs.b1.current,{y:-7,duration:0.05},"<")
            .to(refs.b2.current,{y:-7,duration:0.05},"<")
            .to(refs.b3.current,{y:-7,duration:0.05},"<")
            .to(refs.b4.current,{scaleY:1,scaleX:1,duration:0.05},"<")
            .to(refs.b1.current,{y:0,duration:0.05},">")
            .to(refs.b2.current,{y:0,duration:0.05},"<")
            .to(refs.b3.current,{y:0,duration:0.05},"<")

            // .to(refs.b1.current,{scale:1.1,duration:0.05},"<")
            // .to(refs.b2.current,{scale:1.1,duration:0.05},"<")
            // .to(refs.b3.current,{scale:1.1,duration:0.05},"<")
            // .to(refs.b4.current,{scaleY:1,scaleX:1,duration:0.05},"<")
            // .to(refs.b1.current,{scale:1,duration:0.05},">")
            // .to(refs.b2.current,{scale:1,duration:0.05},"<")
            // .to(refs.b3.current,{scale:1,duration:0.05},"<")

    });
    return (
        <SI01 v={4}>
            <div className="si01w0">
                <svg xmlns="http://www.w3.org/2000/svg" id="data" viewBox="0 0 165 165">
                    <path d="M0 33.65h165M0 55.65h165M0 66.65h165M0 77.65h165M0 88.65h165M0 99.65h165M0 110.65h165M0 44.65h165M0 121.65h165" ref={refs.grid} className="p1"/>
                    <path d="M117.26-.35h27v133h-27z" className="p2" ref={refs.b4}/>
                    <path d="M84.26 55.65h27v77h-27z" className="p2" ref={refs.b3}/>
                    <path d="M51.26 77.65h27v55h-27z" className="p2" ref={refs.b2}/>
                    <path d="M18.26 99.65h27v33h-27z" className="p2" ref={refs.b1}/>
                    <path d="M0 132.65h165" className="p3" ref={refs.base}/>
                </svg>
            </div>
        </SI01>
    );
}
const SI01v5:FC = () => {
    const refs = {
        
    };
    return (
        <SI01 v={5}>
            <div className="si01w0">
                <div>0.0</div>
            </div>
        </SI01>
    );
}
// #endregion

export { 
    SI01v0,
    SI01v1,
    SI01v2,
    SI01v3,
    SI01v4,
    SI01v5,
}
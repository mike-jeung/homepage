import React, { FC, useRef } from "react";
import { useGSAP } from '@gsap/react';
interface SI01v0Props {
    timeline:gsap.core.Timeline;
}
const SI01v0:FC<SI01v0Props> = ({timeline}) => {
    // chatbot
    const refs = {
        "c1": useRef<SVGCircleElement | null>(null),
        "c2": useRef<SVGCircleElement | null>(null),
        "c3": useRef<SVGCircleElement | null>(null),
        "mouth": useRef<SVGPathElement | null>(null),
        "qmark": useRef<SVGPathElement | null>(null),
    }
    //const timeline = useRef<gsap.core.Timeline | null>(gsap.timeline({repeat:1}));
    useGSAP( () => {
            timeline.set(refs.mouth.current,{x:-1,transformOrigin:"0% 20%"})
                .fromTo(refs.c1.current,{transformOrigin:"center",scale:1,opacity:0.8},{scale:8,opacity:0,duration:1.5,ease:"c2.out"})
                .fromTo(refs.c2.current,{transformOrigin:"center",scale:1,opacity:0.8},{scale:8,opacity:0,duration:1.5,ease:"c2.out"},"<0.7")
                .fromTo(refs.c3.current,{transformOrigin:"center",scale:1,opacity:0.8},{scale:8,opacity:0,duration:1.5,ease:"c2.out"},"<0.7")
                .fromTo(refs.mouth.current,{scaleY:0.3,y:5,scaleX:1.25},{scaleY:0.4,duration:0.15})
                .to(refs.mouth.current,{scaleY:0.6,duration:0.15,delay:0})
                .to(refs.mouth.current,{scaleY:0.3,duration:0.15,delay:0})
                .to(refs.mouth.current,{scaleY:1,duration:0.15})
                .to(refs.mouth.current,{scaleY:0.2,duration:0.25})
                .to(refs.mouth.current,{scaleY:1,duration:0.15})
                .to(refs.mouth.current,{scaleY:0.4,duration:0.15})
                .to(refs.mouth.current,{scaleY:1,duration:0.25})
                .to(refs.mouth.current,{scaleY:0.3,duration:0.15})
    });
    return (
        <div className="si01w0">
            <svg xmlns="http://www.w3.org/2000/svg" className="chatbot" viewBox="0 0 174 125"><defs><linearGradient id="si01-g0" x1="118.78" x2="118.78" y1="34.98" y2="118.98" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#bee8ff"/><stop offset=".18" stopColor="#bae5fd"/><stop offset=".35" stopColor="#aedff9"/><stop offset=".51" stopColor="#9bd4f2"/><stop offset=".68" stopColor="#7fc4e8"/><stop offset=".84" stopColor="#5cb0db"/><stop offset="1" stopColor="#39c"/></linearGradient></defs><g><path d="M89.78 71.48H40.95l-22.43 16 4.18-16H11.78c-4.42 0-8-3.58-8-8v-52c0-4.42 3.58-8 8-8h78c4.42 0 8 3.58 8 8v52c0 4.42-3.58 8-8 8Z" className="p1"/><path d="M47 39.16c0-1.05.18-1.88.54-2.49.36-.61.98-1.13 1.86-1.58.53-.27 1.31-.65 2.34-1.14 3.85-1.78 5.77-3.86 5.77-6.24 0-1.8-.63-3.26-1.9-4.38s-2.94-1.68-5.01-1.68c-1.37 0-2.63.18-3.78.54-1.15.36-1.86.76-2.11 1.19-.06.12-.12.4-.18.85-.16 1.76-.85 2.64-2.08 2.64-.64 0-1.16-.23-1.54-.7s-.57-1.09-.57-1.88v-2.87c0-1.07 1.05-1.98 3.16-2.72s4.68-1.11 7.71-1.11c3.26 0 5.91.95 7.95 2.84s3.06 4.35 3.06 7.35c0 2.4-.83 4.43-2.48 6.08s-4.43 3.2-8.33 4.64v2.34c0 .64-.21 1.17-.62 1.57-.41.4-.95.6-1.62.6s-1.22-.19-1.61-.56c-.38-.37-.58-.89-.58-1.55v-1.73Zm-3.22 11.1c0-1.29.49-2.34 1.48-3.16.99-.82 2.29-1.23 3.91-1.23s2.96.41 3.96 1.22 1.49 1.87 1.49 3.18-.5 2.37-1.51 3.19c-1.01.82-2.32 1.23-3.94 1.23s-2.9-.42-3.9-1.25-1.49-1.89-1.49-3.18Z" className="p2" ref={refs.qmark}/></g><circle cx="118.28" cy="15.98" r="9" className="c1" ref={refs.c1}/><circle cx="118.28" cy="15.98" r="9" className="c1" ref={refs.c2}/><circle cx="118.28" cy="15.98" r="9" className="c1" ref={refs.c3}/><g><path d="M170.28 59.98v16c0 3.31-2.69 6-6 6h-4v13c0 4.42-3.58 8-8 8h-11.24l4.24 16-22.48-16H85.28c-4.42 0-8-3.58-8-8v-13h-4c-3.31 0-6-2.69-6-6v-16c0-3.31 2.69-6 6-6h4v-11c0-4.42 3.58-8 8-8h67c4.42 0 8 3.58 8 8v11h4c3.31 0 6 2.69 6 6Z" className="p3"/><path d="M118.28 34.98v-10" className="p4"/><path d="M105 62.98v-9c0-3-6-3-6 0v9c0 3 6 3 6 0ZM136.5 62.98v-9c0-3-6-3-6 0v9c0 3 6 3 6 0Z" className="p5"/></g><circle cx="118.28" cy="15.98" r="9"/><path d="M113.28 71.98h9c1.1 0 2 .9 2 2v11c0 2.76-2.24 5-5 5h-3c-2.76 0-5-2.24-5-5v-11c0-1.1.9-2 2-2Z" className="p5" ref={refs.mouth}/></svg>      
        </div>
    );
}
export default SI01v0;
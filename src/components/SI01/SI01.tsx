import React, { FC, forwardRef, lazy, Suspense, useEffect, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import "./style/SI01.scss";

interface SI01Props {
    v?:number;
    timelineArgs?:Record<string,any>;
}
// const SI01:FC<SI01Props> = ({v = 0, timelineArgs = {}}) => {
const SI01 = forwardRef( (props:SI01Props,ref) => {
    const variation = "si01v" + props.v;
    const timeline = useRef<gsap.core.Timeline | null>(null);
    const isPlaying = useRef(true);
    const VariationComponent = lazy(() => import(`./SI01v${props.v}`));

    
    const handleClick = (e) => {
        // console.log(e);
        // console.log(isPlaying.current);
        // e.preventDefault();
        // if (isPlaying.current) {
        //     isPlaying.current = false;
        //     timeline.current.pause();
        // } else {
        //     isPlaying.current = true;
        //     timeline.current.play();
        // }
    }
    const play = (position:(string | number) = 0) => {
        timeline.current?.play(position);
    }
    const pause = () => {
        timeline.current?.pause();
    }
    const resume = () => {
        timeline.current?.play();
    }
    const goto = (position:(string | number)) => {
        if (position) {
            timeline.current?.seek(position);
        } 
    }
    useEffect( () => {
        timeline.current = gsap.timeline(props.timelineArgs);
    },[]);
    useImperativeHandle(ref, () => ({
        play,
        pause,
        resume,
        goto
    }));
    return (
        <section className={`si01 ${variation}`} onClick={handleClick}>
            <Suspense fallback={<div className="spinner">Loading...</div>}>
                {timeline.current && <VariationComponent timeline={timeline.current} />}
            </Suspense>
        </section>
    );
});

export default SI01;
export { SI01Props }
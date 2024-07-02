import React, { FC, forwardRef, lazy, Suspense, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import "./style/SI01.scss";
import SI01v0 from "./SI01v0";
import SI01v1 from "./SI01v1";
import SI01v2 from "./SI01v2";
import SI01v3 from "./SI01v3";
import SI01v4 from "./SI01v4";
import SI01v5 from "./SI01v5";
import { TimelineCallback } from "../../helpers";

interface SI01Props {
    v?:number;
    timelineArgs?:Record<string,any>;
    timelineCallbacks?:TimelineCallback[];
}
interface SI01ChildProps {
    timeline:gsap.core.Timeline;
    timelineCallbacks:TimelineCallback[];
}
const componentMap:Record<number,FC<any>> = {
    0:SI01v0,
    1:SI01v1,
    2:SI01v2,
    3:SI01v3,
    4:SI01v4,
    5:SI01v5,
}
// const SI01:FC<SI01Props> = ({v = 0, timelineArgs = {}}) => {

const SI01 = forwardRef( ({v = 0, timelineArgs = {}, timelineCallbacks = []}:SI01Props,ref) => {
    //console.log("timelineCallbacks",v,timelineCallbacks)
    const variation = "si01v" + v;
    const timeline = useRef<gsap.core.Timeline | null>(null);
    const isPlaying = useRef(true);
    const [isTimelineReady, setIsTimelineReady] = useState<boolean>(false);
    const callbacks = timelineCallbacks;
    const VariationComponent = useMemo( 
        () => {            
            return componentMap[v];
        }, [v]);

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
        console.log(" ********************************************* SI01 mounted", variation)
        timeline.current = gsap.timeline(timelineArgs);
        setIsTimelineReady(true);

        return () => {
            console.log(' =============================================== SI01 unmount', variation);
            timeline.current?.kill();
        };
    },[]);

    useImperativeHandle(ref, () => ({
        play,
        pause,
        resume,
        goto
    }));

    return (
        <section className={`si01 ${variation}`} onClick={handleClick}>
            {isTimelineReady && <VariationComponent timeline={timeline.current} timelineCallbacks={callbacks} />}
        </section>
    );
});

export default SI01;
export { SI01Props, SI01ChildProps }
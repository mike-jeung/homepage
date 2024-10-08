import React, { FC, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import gsap from "gsap";
import "./style/SI01.scss";
import SI01v0 from "./SI01v0";
import SI01v1 from "./SI01v1";
import SI01v2 from "./SI01v2";
import SI01v3 from "./SI01v3";
import SI01v4 from "./SI01v4";
import SI01v5 from "./SI01v5";
import { TimelineCallback } from "../../helpers/applyTimelineCallbacks";

interface SI01Props {
    v?:number;
    timelineArgs?:Record<string,any>;
    timelineCallbacks?:TimelineCallback[];
}
interface SI01ChildProps {
    timeline:gsap.core.Timeline;
    timelineCallbacks:TimelineCallback[];
}
interface SI01TimelineControls {
    args?:Record<string,any>;
    cmp?:FC<any>;
    play?: (arg?: number | string) => void;
    pause?: (arg?: number | string) => void;
    resume?: () => void;
    getTimeline?: () => gsap.core.Timeline;
    goto?: (arg?: number | string) => void;
}
const componentMap:Record<number,FC<any>> = {
    0:SI01v0,
    1:SI01v1,
    2:SI01v2,
    3:SI01v3,
    4:SI01v4,
    5:SI01v5,
}
const SI01 = forwardRef( ({v = 0, timelineArgs = {}, timelineCallbacks = []}:SI01Props,ref) => {

    const [isTimelineReady, setIsTimelineReady] = useState<boolean>(false);
    const timeline = useRef<gsap.core.Timeline | null>(null);
    const isPlaying = useRef(true);

    // const callbacks = timelineCallbacks;
    // const VariationComponent = useMemo( 
    //     () => {            
    //         return componentMap[v];
    // }, [v]);
    const VariationComponent = componentMap[v];
    const variation = "si01v" + v;


    const play = (position:(string | number) = 0) => {
        timeline.current?.play(position);
    }
    const pause = (position:(string | number)) => {
        if (position) {
            timeline.current?.pause(position);
        } else {
            timeline.current?.pause();
        }
    }
    const resume = () => {
        timeline.current?.play();
    };
    const getTimeline = () => {
        return timeline.current;
    };
    const goto = (position:(string | number)) => {
        if (position) {
            timeline.current?.seek(position);
        } 
    }
    useEffect( () => {
        // console.log(` ********************************************* ${variation} mounted`);
        timeline.current = gsap.timeline(timelineArgs);
        setIsTimelineReady(true);

        return () => {
            // console.log(` ********************************************* ${variation} UNmounted`);
            timeline.current?.kill();
        };
    },[]);
    
    useImperativeHandle(ref, () => ({
        play,
        pause,
        resume,
        getTimeline,
        goto
    }));

    return (
        <section className={`si01 ${variation}`}>
            {isTimelineReady && <VariationComponent timeline={timeline.current} timelineCallbacks={timelineCallbacks} />}
        </section>
    );
});

export default SI01;
export { SI01Props, SI01ChildProps, SI01TimelineControls }
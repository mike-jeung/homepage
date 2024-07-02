import React, { FC, useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';
import "./style/SI01v5.scss";
import { SI01ChildProps } from "./SI01";
import { applyTimelineCallbacks } from "../../helpers";

const SI01v5:FC<SI01ChildProps> = ({timeline, timelineCallbacks = {}}) => {
    // scoreboard
    const refs = {
        
    };
    useEffect( () => {
        
        // applyTimelineCallbacks(timeline,timelineCallbacks);
    },[]);
    return (
        <div className="si01w0">
            <div>0.0</div>
        </div>
    );
}
export default SI01v5;
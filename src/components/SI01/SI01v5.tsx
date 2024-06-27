import React, { FC, useRef } from "react";
import { useGSAP } from '@gsap/react';
interface SI01v5Props {
    timeline:gsap.core.Timeline;
}
const SI01v5:FC<SI01v5Props> = ({timeline}) => {
    // scoreboard
    const refs = {
        
    };
    return (
        <div className="si01w0">
            <div>0.0</div>
        </div>
    );
}
export default SI01v5;
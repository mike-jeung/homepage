import React, { FC, ReactSVG, ReactSVGElement, useRef } from 'react';
import './CT01.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface CT01Props {
    col: string;
    row: string;
    styles: React.CSSProperties;
}
gsap.registerPlugin(useGSAP);

const CT01: FC<CT01Props> = ({ row = "", col = "", styles = {} }) => {
    const r = row;
    const c = col;
    let container = useRef<SVGSVGElement | null>(null);
    const lineRefs = {
        "ot6": useRef<SVGPolylineElement | null>(null),
        "ot5": useRef<SVGLineElement | null>(null),
        "ot4": useRef<SVGLineElement | null>(null),
        "ot3": useRef<SVGLineElement | null>(null),
        "ot2": useRef<SVGPolylineElement | null>(null),
        "ot1": useRef<SVGPolylineElement | null>(null),
        "tri_up3_1": useRef<SVGLineElement | null>(null),
        "tri_up3_2": useRef<SVGLineElement | null>(null),
        "tri_up2_1": useRef<SVGLineElement | null>(null),
        "tri_up2_2": useRef<SVGLineElement | null>(null),
        "tri_up1_1": useRef<SVGLineElement | null>(null),
        "tri_up1_2": useRef<SVGLineElement | null>(null),
        "tri_down3_1": useRef<SVGLineElement | null>(null),
        "tri_down3_2": useRef<SVGLineElement | null>(null),
        "tri_down2_1": useRef<SVGLineElement | null>(null),
        "tri_down2_2": useRef<SVGLineElement | null>(null),
        "tri_down1_1": useRef<SVGLineElement | null>(null),
        "tri_down1_2": useRef<SVGLineElement | null>(null)
    };
        
    useGSAP( () => {
        let tl = gsap.timeline();
        for (const line in lineRefs) {
            if (lineRefs[line].current) {
                const l = lineRefs[line].current.getTotalLength();
                let dur = 2,
                    start = 0;
                // triangles have a different timing
                if (line.match(/^tri/)) {
                    dur = 0.75;
                    start = 1;
                }
                tl.set(lineRefs[line].current, {strokeDasharray:l});
                const anim = gsap.fromTo(lineRefs[line].current, {strokeDashoffset:l, strokeDasharray:l}, {duration:dur, strokeDashoffset:0});
                tl.add(anim,start);
            }
        }
    });
    return (
        <svg viewBox="0 0 552 638" className={`ct01 ct01v0 ${r} ${c}`} style={styles} ref={container}>
            <g className="hex">
                <polyline className="ot6" points="275.68 -.35 -.58 159.15 275.68 318.65" ref={lineRefs.ot6} />
                <line className="ot5" x1="-.58" y1="478.15" x2="275.68" y2="318.65" ref={lineRefs.ot5} />
                <line className="ot4" x1="275.68" y1="637.65" x2="275.68" y2="318.65" ref={lineRefs.ot4} />
                <line className="ot3" x1="551.95" y1="478.15" x2="275.68" y2="318.65" ref={lineRefs.ot3} />
                <polyline className="ot2" points="551.95 478.15 551.95 159.15 275.68 318.65" ref={lineRefs.ot2} />
                <polyline className="ot1" points="551.95 159.15 275.68 -.35 275.68 318.65" ref={lineRefs.ot1} />
            </g>
            <g className="tri-up">
                <line className="tri-up3-1" x1="-.58" y1="478.15" x2="137.55" y2="238.9" ref={lineRefs.tri_up3_1} />
                <line className="tri-up3-2" x1="275.68" y1="478.15" x2="-.58" y2="478.15" ref={lineRefs.tri_up3_2} />
                <line className="tri-up2-1" x1="551.95" y1="478.15" x2="275.68" y2="478.15" ref={lineRefs.tri_up2_1} />
                <line className="tri-up2-2" x1="413.82" y1="238.9" x2="551.95" y2="478.15" ref={lineRefs.tri_up2_2} />
                <line className="tri-up1-1" x1="275.68" y1="-.35" x2="413.82" y2="238.9" ref={lineRefs.tri_up1_1} />
                <line className="tri-up1-2" x1="137.55" y1="238.9" x2="275.68" y2="-.35" ref={lineRefs.tri_up1_2} />
            </g>
            <g className="tri-down">
                <line className="tri-down3-2" x1="275.68" y1="637.65" x2="138" y2="398.5" ref={lineRefs.tri_down3_2} />
                <line className="tri-down3-1" x1="413.82" y1="398.4" x2="275.68" y2="637.65" ref={lineRefs.tri_down3_1} />
                <line className="tri-down2-2" x1="551.95" y1="159.15" x2="413.82" y2="398.4" ref={lineRefs.tri_down2_2} />
                <line className="tri-down2-1" x1="275.68" y1="159.15" x2="551.95" y2="159.15" ref={lineRefs.tri_down2_1} />
                <line className="tri-down1-2" x1="-.58" y1="159.15" x2="275.68" y2="159.15" ref={lineRefs.tri_down1_2} />
                <line className="tri-down1-1" x1="137.55" y1="398.4" x2="-.58" y2="159.15" ref={lineRefs.tri_down1_1} />
            </g>
        </svg>
        
    );
}
export default CT01;
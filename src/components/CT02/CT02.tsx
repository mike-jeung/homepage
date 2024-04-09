import React, { FC, useRef } from "react";
import "./CT02.scss";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CT02:FC = () => {
    const refs = {
        "n1": useRef<SVGCircleElement | null>(null),
        "n2": useRef<SVGCircleElement | null>(null),
        "n3": useRef<SVGCircleElement | null>(null),
        "n4": useRef<SVGCircleElement | null>(null),
        "n5": useRef<SVGCircleElement | null>(null),
        "n6": useRef<SVGCircleElement | null>(null),
        "n7": useRef<SVGCircleElement | null>(null),
        "n8": useRef<SVGCircleElement | null>(null),
        "n1_1": useRef<SVGCircleElement | null>(null),
        "n2_1": useRef<SVGCircleElement | null>(null),
        "n3_1": useRef<SVGCircleElement | null>(null),
        "n4_1": useRef<SVGCircleElement | null>(null),
        "n5_1": useRef<SVGCircleElement | null>(null),
        "n6_1": useRef<SVGCircleElement | null>(null),
        "n7_1": useRef<SVGCircleElement | null>(null),
        "n8_1": useRef<SVGCircleElement | null>(null),
        "v1": useRef<SVGLineElement | null>(null),
        "v2": useRef<SVGLineElement | null>(null),
        "v3": useRef<SVGLineElement | null>(null),
        "v4": useRef<SVGLineElement | null>(null),
        "v5": useRef<SVGLineElement | null>(null),
        "v6": useRef<SVGLineElement | null>(null),
        "v7": useRef<SVGLineElement | null>(null),
        "v8": useRef<SVGLineElement | null>(null),
        "v1_1": useRef<SVGLineElement | null>(null),
        "v2_1": useRef<SVGLineElement | null>(null),
        "v3_1": useRef<SVGLineElement | null>(null),
        "v4_1": useRef<SVGLineElement | null>(null),
        "v5_1": useRef<SVGLineElement | null>(null),
        "v6_1": useRef<SVGLineElement | null>(null),
        "v7_1": useRef<SVGLineElement | null>(null),
        "v8_1": useRef<SVGLineElement | null>(null),
        "v1_2": useRef<SVGLineElement | null>(null),
        "v2_2": useRef<SVGLineElement | null>(null),
        "v3_2": useRef<SVGLineElement | null>(null),
        "v4_2": useRef<SVGLineElement | null>(null),
        "v5_2": useRef<SVGLineElement | null>(null),
        "v6_2": useRef<SVGLineElement | null>(null),
        "v7_2": useRef<SVGLineElement | null>(null),
        "v8_2": useRef<SVGLineElement | null>(null),
        "l1": useRef<SVGRectElement | null>(null),
        "l2": useRef<SVGRectElement | null>(null),
        "l3": useRef<SVGRectElement | null>(null),
        "l4": useRef<SVGRectElement | null>(null),
        "l5": useRef<SVGRectElement | null>(null),
        "head": useRef<SVGGElement | null>(null),
        "mouth": useRef<SVGRectElement | null>(null),
    };
    return (
        <section className="ct02 ct02v0">
            <div className="ct02w0">
            <svg viewBox="0 0 866.49 866.2">
                    <defs>
                        <linearGradient id="ct02-g0" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                            <stop offset="0.5" stop-color="#ffc"/>
                            <stop offset=".8" stop-color="#ffe463"/>
                            <stop offset="1" stop-color="#fc0"/>
                        </linearGradient>
                        <radialGradient id="ct02-g1" cx="0.5" cy="0.5" fx="0.2" fy="0.2" r="0.5" gradientUnits="objectBoundingBox">
                            <stop offset="0.25" stop-color="#fff"/>
                            <stop offset="1" stop-color="#ffda00"/>
                        </radialGradient>
                    </defs>
                    <g className="edges-l1">
                        <line className="v5 ee" x1="433.1" y1="761.66" x2="433.1" y2="684.55" ref={refs.v5}/>
                        <line className="v3 ee" x1="684.55" y1="433.1" x2="761.66" y2="433.1" ref={refs.v2}/>
                        <line className="v7 ee" x1="104.55" y1="433.1" x2="181.66" y2="433.1" ref={refs.v7}/>
                        <line className="v8 ee" x1="255.3" y1="255.3" x2="200.78" y2="200.78" ref={refs.v8}/>
                        <line className="v4 ee" x1="665.43" y1="665.43" x2="610.9" y2="610.9" ref={refs.v4}/>
                        <line className="v2 ee" x1="610.9" y1="255.3" x2="665.43" y2="200.78" ref={refs.v2}/>
                        <line className="v6 ee" x1="200.78" y1="665.43" x2="255.3" y2="610.9" ref={refs.v6}/>
                        <line className="v1 ee" x1="433.1" y1="181.66" x2="433.1" y2="104.55" ref={refs.v1}/>
                    </g>
                    <g className="edges-l2">
                        <line className="v1-1 ee" x1="433.1" y1="104.55" x2="268" y2="34.5" ref={refs.v1_1}/>
                        <line className="v1-2 ee" x1="433.1" y1="104.55" x2="598.21" y2="34.5" ref={refs.v1_2}/>
                        <line className="v2-1 ee" x1="665.45" y1="200.75" x2="598.21" y2="34.5" ref={refs.v2_1}/>
                        <line className="v2-2 ee" x1="665.45" y1="200.75" x2="831.7" y2="268" ref={refs.v2_2}/>
                        <line className="v3-1 ee" x1="761.7" y1="433.1" x2="831.7" y2="268" ref={refs.v3_1}/>
                        <line className="v3-2 ee" x1="761.7" y1="433.1" x2="831.7" y2="598.21" ref={refs.v3_2}/>
                        <line className="v4-1 ee" x1="665.45" y1="665.45" x2="831.7" y2="598.21" ref={refs.v4_1}/>
                        <line className="v4-2 ee" x1="665.45" y1="665.45" x2="598.21" y2="831.7" ref={refs.v4_2}/>
                        <line className="v5-1 ee" x1="433.1" y1="761.7" x2="598.21" y2="831.7" ref={refs.v5_1}/>
                        <line className="v5-2 ee" x1="433.1" y1="761.7" x2="268" y2="831.7" ref={refs.v5_2}/>
                        <line className="v6-1 ee" x1="200.78" y1="665.43" x2="268" y2="831.7" ref={refs.v6_1}/>
                        <line className="v6-2 ee" x1="200.78" y1="665.43" x2="34.5" y2="598.21" ref={refs.v6_2}/>
                        <line className="v7-1 ee" x1="104.55" y1="433.1" x2="34.5" y2="598.21" ref={refs.v7_1}/>
                        <line className="v7-2 ee" x1="104.55" y1="433.1" x2="34.5" y2="268" ref={refs.v7_2}/>
                        <line className="v8-1 ee" x1="200.78" y1="200.78" x2="34.5" y2="268" ref={refs.v8_1}/>
                        <line className="v8-2 ee" x1="200.78" y1="200.78" x2="268" y2="34.5" ref={refs.v8_2}/>
                    </g>
                    <g className="nodes-l1">
                        <circle className="n1 nn" cx="433.1" cy="104.55" r="30" ref={refs.n1}/>
                        <circle className="n2 nn" cx="665.43" cy="200.78" r="30" ref={refs.n2}/>
                        <circle className="n3 nn" cx="761.66" cy="433.1" r="30" ref={refs.n3}/>
                        <circle className="n4 nn" cx="665.43" cy="665.43" r="30" ref={refs.n4}/>
                        <circle className="n5 nn" cx="433.1" cy="761.66" r="30" ref={refs.n5}/>
                        <circle className="n6 nn" cx="200.78" cy="665.43" r="30" ref={refs.n6}/>
                        <circle className="n7 nn" cx="104.55" cy="433.1" r="30" ref={refs.n7}/>
                        <circle className="n8 nn" cx="200.78" cy="200.78" r="30" ref={refs.n8}/>
                    </g>
                    <g className="nodes-l2">
                        <circle className="n1-1 nn" cx="598.21" cy="34.5" r="30" ref={refs.n1_1}/>
                        <circle className="n2-1 nn" cx="831.7" cy="268" r="30" ref={refs.n2_1}/>
                        <circle className="n3-1 nn" cx="831.99" cy="598.09" r="30" ref={refs.n3_1}/>
                        <circle className="n4-1 nn" cx="598.21" cy="831.7" r="30" ref={refs.n4_1}/>
                        <circle className="n5-1 nn" cx="268" cy="831.7" r="30" ref={refs.n5_1}/>
                        <circle className="n6-1 nn" cx="34.5" cy="598.21" r="30" ref={refs.n6_1}/>
                        <circle className="n7-1 nn" cx="34.5" cy="268" r="30" ref={refs.n7_1}/>
                        <circle className="n8-1 nn" cx="268" cy="34.5" r="30" ref={refs.n8_1}/>
                    </g>
                    <g className="frame">
                        <circle className="circle-frame-bg" cx="432.6" cy="432.7" r="252"/>
                        <path className="circle-frame" d="M433.1,169.08c-145.87,0-264.11,118.25-264.11,264.11s118.25,264.11,264.11,264.11,264.11-118.25,264.11-264.11-118.25-264.11-264.11-264.11ZM433.1,675.06c-133.58,0-241.86-108.29-241.86-241.86s108.29-241.86,241.86-241.86,241.86,108.29,241.86,241.86-108.29,241.86-241.86,241.86Z"/>
                    </g>
                    <g className="robot-head">
                        <g className="neck">
                            <rect className="neck-outline" x="371.6" y="513.67" width="123" height="32.53"/>
                            <g className="neck-g">
                                <rect className="n3" x="372.1" y="535.7" width="122" height="10"/>
                                <rect className="n2" x="372.1" y="524.85" width="122" height="10"/>
                                <rect className="n1" x="372.1" y="514.16" width="122" height="10"/>
                            </g>
                        </g>
                        <path className="shoulder-rt-outline" d="M539.76,570.23s11.84,8.46,7.84,22.46-16.89,14-16.89,14l9.05-36.46Z"/>
                        <path className="shoulder-lt-outline" d="M327.17,570.23s-11.84,8.46-7.84,22.46c4,14,16.89,14,16.89,14l-9.05-36.46Z"/>
                        <g className="arm-rt">
                            <g className="arm-rt-top">
                                <path className="outline" d="M593.6,599.7h-53s-11-.5-11-10.5,11-10.5,11-10.5h53s9.5,1.58,9.5,10.5-9.5,10.5-9.5,10.5Z"/>
                                <path className="arm" d="M540.6,599.2c-.41-.02-10.5-.6-10.5-10s10.09-9.98,10.52-10h52.98c.29.06,9,1.62,9,10s-8.41,9.88-9.04,10h-52.96Z"/>
                            </g>
                            <g className="arm-rt-fore">
                                <path className="outline" d="M642.6,589.77l22.4-.08-.68,4.42-21.48,4.65s-.09,0-.24-.02v6.96l-4.5-.34v1.28c0,1.97-1.59,3.56-3.56,3.56h-17.88c-1.97,0-3.56-1.59-3.56-3.56v-3.17l-23.5-1.77s-11-3.5-11-12.5,11-12.5,11-12.5l23.5-1.77v-3.17c0-1.97,1.59-3.56,3.56-3.56h17.88c1.97,0,3.56,1.59,3.56,3.56v1.28l4.5-.34v7.3c.15-.02.24-.02.24-.02l21.48,4.64.68,4.43-22.4-.08v.8Z"/>
                                <g className="hand-rt">
                                    <path className="digit-rt-bot " d="M642.38,589.76l22.61-.08-.67,4.42-21.49,4.64s-5.02-.25-5.25-4.74,4.79-4.25,4.79-4.25Z"/>
                                    <path className="digit-rt-top " d="M642.38,588.96l22.61.08-.67-4.42-21.49-4.64s-5.02.25-5.25,4.74,4.79,4.25,4.79,4.25Z"/>
                                </g>
                                <path className="p1" d="M589.7,601.2c-.81-.28-10.6-3.79-10.6-12.01s9.79-11.73,10.6-12.01l52.4-3.96v31.92l-52.4-3.96Z"/>
                                <rect className="p2" x="613.6" y="568.7" width="24" height="41" rx="3.06" ry="3.06"/>
                                <circle className="r3" cx="592.6" cy="589.7" r="3.5"/>
                            </g>
                        </g>
                        <g className="arm-lt">
                            <g className="arm-lt-top">
                                <path className="outline" d="M273.33,599.7h53s11-.5,11-10.5-11-10.5-11-10.5h-53s-9.5,1.58-9.5,10.5,9.5,10.5,9.5,10.5Z"/>
                                <path className="arm" d="M273.33,599.2c-.29-.06-9-1.62-9-10s8.99-9.99,9.08-10.01h52.92c.41.03,10.5.61,10.5,10.01s-9.95,9.97-10.51,10h-52.99Z"/>
                            </g>
                            <g className="arm-lt-fore">
                                <path className="outline" d="M277.33,576.7l-23.5-1.77v-3.17c0-1.97-1.6-3.56-3.56-3.56h-17.89c-1.96,0-3.55,1.59-3.55,3.56v1.28l-4.5-.34v7.3c-.15-.02-.24-.02-.24-.02l-21.49,4.64-.67,4.43v.64l.67,4.42,21.49,4.65s.09,0,.24-.02v6.96l4.5-.34v1.28c0,1.97,1.59,3.56,3.55,3.56h17.89c1.96,0,3.56-1.59,3.56-3.56v-3.17l23.5-1.77s11-3.5,11-12.5-11-12.5-11-12.5Z"/>
                                <g className="hand-rt">
                                    <path className="digit-rt-bot" d="M224.55,589.76l-22.61-.08.67,4.42,21.49,4.64s5.02-.25,5.25-4.74-4.79-4.25-4.79-4.25Z"/>
                                    <path className="digit-rt-top" d="M224.55,588.96l-22.61.08.67-4.42,21.49-4.64s5.02.25,5.25,4.74-4.79,4.25-4.79,4.25Z"/>
                                </g>
                                <path className="p1" d="M224.83,573.23l52.4,3.96c.81.28,10.6,3.79,10.6,12.01s-9.79,11.73-10.6,12.01l-52.4,3.96v-31.92Z"/>
                                <rect className="p2" x="229.33" y="568.7" width="24" height="41" rx="3.06" ry="3.06"/>
                                <circle className="r3" cx="275.6" cy="589.7" r="3.5"/>
                            </g>
                        </g>
                        <g className="torso-cropped">
                            <path className="outline" d="M349.8,660.33l-22.35-90.1c-2.97-11.96,6.08-23.54,18.41-23.54h175.5c12.33,0,21.38,11.57,18.41,23.54l-22.25,89.69"/>
                            <path className="shoulder-rt" d="M539.76,570.23s11.84,8.46,7.84,22.46-16.89,14-16.89,14l9.05-36.46Z"/>
                            <path className="shoulder-lt" d="M327.17,570.23s-11.84,8.46-7.84,22.46c4,14,16.89,14,16.89,14l-9.05-36.46Z"/>
                            <path className="torso-outer" d="M433.6,675.7c-49,0-83.81-15.37-83.81-15.37l-22.35-90.1c-2.97-11.96,6.08-23.54,18.41-23.54h175.5c12.33,0,21.38,11.57,18.41,23.54l-22.25,89.69s-34.91,15.78-83.91,15.78Z"/>
                            <path className="torso-inner" d="M512.76,554.68c16.84,0,19.84,7.02,16.82,20.71,0,0-16.98,66.31-22.91,88.28-14.07,5.03-31.04,8.05-31.04,8.05h-85.07s-14.97-2.02-30.85-7.55c-.12-.47-1.08-3.26-1.55-5.12l-21.55-83.66c-3.02-13.69-.02-20.71,16.82-20.71h159.33Z"/>
                        </g>
                        <g className="torso-lights">
                            <rect className="l1" x="357.4" y="572.33" width="18.74" height="22.74" rx="5" ry="5" ref={refs.l1}/>
                            <rect className="l2" x="390.57" y="572.33" width="18.74" height="22.74" rx="5" ry="5" ref={refs.l2}/>
                            <rect className="l3" x="423.73" y="572.33" width="18.74" height="22.74" rx="5" ry="5" ref={refs.l3}/>
                            <rect className="l4" x="456.9" y="572.33" width="18.74" height="22.74" rx="5" ry="5" ref={refs.l4}/>
                            <rect className="l5" x="490.06" y="572.33" width="18.74" height="22.74" rx="5" ry="5" ref={refs.l5}/>
                        </g>
                        <g className="torso-grill">
                            <rect x="369.6" y="607.7" width="127" height="7"/>
                            <rect x="369.6" y="625.7" width="127" height="7"/>
                            <rect x="369.6" y="643.7" width="127" height="7"/>
                        </g>
                        <g className="head" ref={refs.head}>
                            <path className="headshape-outline" d="M371.6,524.2h-64.5c-14.36,0-26-11.64-26-26v-28h-9v-4.35c-1.76-4.87-7.5-22.26-7.5-41.65s5.74-36.78,7.5-41.65v-4.35h9v-11c0-14.36,11.64-26,26-26h252c14.36,0,26,11.64,26,26v11h9v4.35c1.76,4.87,7.5,22.26,7.5,41.65s-5.74,36.78-7.5,41.65v4.35h-9v28c0,14.36-11.64,26-26,26h-64.5"/>
                            <rect className="headshape" x="281.6" y="341.7" width="303" height="182" rx="25.5" ry="25.5"/>
                            <g className="eye-right">
                                <circle className="eye-outer" cx="512.96" cy="424.2" r="38.7"/>
                                <circle className="eye" cx="512.96" cy="424.2" r="32.17"/>
                            </g>
                            <g className="eye-left">
                                <circle className="eye-outer" cx="353.24" cy="424.2" r="38.7"/>
                                <circle className="eye" cx="353.24" cy="424.2" r="32.17"/>
                            </g>
                            <g className="mouth">
                                <line className="line1" x1="473.1" y1="482.2" x2="473.1" y2="524.2"/>
                                <line className="line1" x1="393.1" y1="524.2" x2="393.1" y2="482.2"/>
                                <rect className="hole" x="393.1" y="482.2" width="80" height="9" ref={refs.mouth}/>
                            </g>
                            <g className="ear-right">
                                <rect x="272.6" y="378.7" width="9" height="91"/>
                                <path d="M281.1,379.2v90h-8v-90h8M282.1,378.2h-10v92h10v-92h0Z"/>
                                <path d="M272.6,381.2s-8,20.1-8,43,8,43,8,43v-86Z"/>
                            </g>
                            <g className="ear-left">
                                <rect x="584.6" y="378.7" width="9" height="91"/>
                                <path d="M593.1,379.2v90h-8v-90h8M594.1,378.2h-10v92h10v-92h0Z"/>
                                <path d="M593.6,381.2s8,20.1,8,43-8,43-8,43v-86Z"/>
                            </g>
                            <circle className="r4" cx="300.6" cy="362.7" r="3.5"/>
                            <circle className="r3" cx="565.6" cy="362.7" r="3.5"/>
                            <circle className="r2" cx="300.6" cy="505.7" r="3.5"/>
                            <circle className="r1" cx="565.6" cy="505.7" r="3.5"/>
                        </g>
                    </g>
                </svg>
            </div>
        </section>
    );
}


export default CT02;
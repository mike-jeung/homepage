import React, { FC, useRef } from "react";
import SI01, { SI01Props } from "./SI01";



// #region Variants
const SI01v0:FC = () => {
    return (
        <SI01 v={0}>
            <div className="si01w0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 125"><defs><linearGradient id="si01-g0" x1="118.28" x2="118.28" y1="34.98" y2="118.98" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#bee8ff"/><stop offset=".18" stopColor="#bae5fd"/><stop offset=".35" stopColor="#aedff9"/><stop offset=".51" stopColor="#9bd4f2"/><stop offset=".68" stopColor="#7fc4e8"/><stop offset=".84" stopColor="#5cb0db"/><stop offset="1" stopColor="#39c"/></linearGradient></defs><path className="p1" d="M89.28 71.48H40.45l-22.43 16 4.18-16H11.28c-4.42 0-8-3.58-8-8v-52c0-4.42 3.58-8 8-8h78c4.42 0 8 3.58 8 8v52c0 4.42-3.58 8-8 8Z"/><path className="p2" d="M46.5 39.16c0-1.05.18-1.88.54-2.49.36-.61.98-1.13 1.86-1.58.53-.27 1.31-.65 2.34-1.14 3.85-1.78 5.77-3.86 5.77-6.24 0-1.8-.63-3.26-1.9-4.38s-2.94-1.68-5.01-1.68c-1.37 0-2.63.18-3.78.54-1.15.36-1.86.76-2.11 1.19-.06.12-.12.4-.18.85-.16 1.76-.85 2.64-2.08 2.64-.64 0-1.16-.23-1.54-.7s-.57-1.09-.57-1.88v-2.87c0-1.07 1.05-1.98 3.16-2.72s4.68-1.11 7.71-1.11c3.26 0 5.91.95 7.95 2.84s3.06 4.35 3.06 7.35c0 2.4-.83 4.43-2.48 6.08s-4.43 3.2-8.33 4.64v2.34c0 .64-.21 1.17-.62 1.57-.41.4-.95.6-1.62.6s-1.22-.19-1.61-.56c-.38-.37-.58-.89-.58-1.55v-1.73Zm-3.22 11.1c0-1.29.49-2.34 1.48-3.16.99-.82 2.29-1.23 3.91-1.23s2.96.41 3.96 1.22 1.49 1.87 1.49 3.18-.5 2.37-1.51 3.19c-1.01.82-2.32 1.23-3.94 1.23s-2.9-.42-3.9-1.25-1.49-1.89-1.49-3.18Z"/><path className="p3" d="M169.78 59.98v16c0 3.31-2.69 6-6 6h-4v13c0 4.42-3.58 8-8 8h-11.24l4.24 16-22.48-16H84.78c-4.42 0-8-3.58-8-8v-13h-4c-3.31 0-6-2.69-6-6v-16c0-3.31 2.69-6 6-6h4v-11c0-4.42 3.58-8 8-8h67c4.42 0 8 3.58 8 8v11h4c3.31 0 6 2.69 6 6Z"/><path className="p4" d="M117.78 34.98v-10"/><path className="p5" d="M103.78 58.98v-9c0-3-6-3-6 0v9c0 3 6 3 6 0ZM140.78 58.98v-9c0-3-6-3-6 0v9c0 3 6 3 6 0Z"/><circle cx="117.78" cy="15.98" r="9"/><path className="p6" d="M123.64 90.98h-9.72c-1.73 0-3.14-1.4-3.14-3.14l2-12.72c0-1.73 1.4-3.14 3.14-3.14h9.72c1.73 0 3.14 1.4 3.14 3.14l-2 12.72c0 1.73-1.4 3.14-3.14 3.14Z"/></svg>       
            </div>
        </SI01>
    );
}
const SI01v1:FC = () => {
    const refs = {
        "win1":useRef<SVGGElement | null>(null),
        "win2":useRef<SVGGElement | null>(null),
    };
    return (
        <SI01 v={1}>

            <div className="si01w0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 95">
                    <g className="win2" ref={refs.win2}>
                        <rect width="94" height="69" x="19" y="26" rx="5.08" ry="5.08" className="r9"/>
                        <path d="M24 41h84v49H24z" className="p1"/>
                        <circle cx="26.5" cy="33.5" r="2.5" className="c1"/>
                        <circle cx="34.5" cy="33.5" r="2.5" className="c2"/>
                        <circle cx="42.5" cy="33.5" r="2.5" className="c3"/>
                        <g>
                            <rect width="10" height="2" x="29" y="42" rx="1" ry="1" className="r10"/>
                            <rect width="14" height="2" x="34" y="46" rx="1" ry="1" className="r10"/>
                            <rect width="8" height="2" x="46" y="74" rx="1" ry="1" className="r10"/>
                            <rect width="12" height="2" x="34" y="82" rx="1" ry="1" className="r10"/>
                            <rect width="8" height="2" x="30" y="86" rx="1" ry="1" className="r10"/>
                            <rect width="9" height="2" x="42" y="50" rx="1" ry="1" className="r10"/>
                            <rect width="9" height="2" x="42" y="70" rx="1" ry="1" className="r10"/>
                            <rect width="14" height="2" x="42" y="54" rx="1" ry="1" className="r10"/>
                            <rect width="14" height="2" x="42" y="78" rx="1" ry="1" className="r10"/>
                            <rect width="14" height="2" x="48" y="58" rx="1" ry="1" className="r10"/>
                            <rect width="33" height="2" x="48" y="62" rx="1" ry="1" className="r10"/>
                            <rect width="25" height="2" x="48" y="66" rx="1" ry="1" className="r10"/>
                            <rect width="17" height="45" x="89" y="43" rx="2" ry="2" className="r22"/>
                        </g>
                    </g>
                    <g className="win1" ref={refs.win1}>
                        <rect width="94" height="69" rx="5.08" ry="5.08" className="r1"/>
                        <path d="M5 15h84v49H5z" className="p1"/>
                        <g>
                            <path d="m10.81 28.5 7.85-7.84-1.5-1.5-9.34 9.34 9.34 9.34 1.5-1.5-7.85-7.84zM40.67 28.5l-7.85-7.84 1.5-1.5 9.34 9.34-9.34 9.34-1.5-1.5 7.85-7.84z" className="p2"/>
                            <path d="M15 27h22v2H15z" className="p2" transform="rotate(-67.67 25.998 28)"/>
                        </g>
                        <g>
                            <rect width="47" height="8" x="7" y="44" rx="2" ry="2" className="r2"/>
                            <rect width="27" height="8" x="60" y="44" rx="2" ry="2" className="r3"/>
                            <rect width="47" height="2" x="7" y="55" rx="1" ry="1" className="r4"/>
                            <rect width="30" height="2" x="7" y="59" rx="1" ry="1" className="r4"/>
                            <rect width="27" height="2" x="60" y="55" rx="1" ry="1" className="r4"/>
                            <rect width="19" height="2" x="60" y="59" rx="1" ry="1" className="r4"/>
                            <rect width="27" height="17" x="60" y="21" rx="2" ry="2" className="r8"/>
                        </g>
                        <circle cx="7.5" cy="7.5" r="2.5" className="c1"/>
                        <circle cx="15.5" cy="7.5" r="2.5" className="c2"/>
                        <circle cx="23.5" cy="7.5" r="2.5" className="c3"/>
                    </g>
                </svg>
            </div>
        </SI01>
    );
}
const SI01v2:FC = () => {
    const refs = {
        "dots": useRef<SVGGElement | null>(null),
        "p1": useRef<SVGGElement | null>(null),
        "p2": useRef<SVGGElement | null>(null),
        "p3": useRef<SVGGElement | null>(null),
        "p4": useRef<SVGGElement | null>(null),
        "p5": useRef<SVGGElement | null>(null),
        "p6": useRef<SVGGElement | null>(null),
        "top": useRef<SVGPathElement | null>(null),
        "bot": useRef<SVGPathElement | null>(null)
    }
    return (
        <SI01 v={2}>
            <div className="si01w0">
                <svg xmlns="http://www.w3.org/2000/svg" className="backend" viewBox="0 0 165 99">
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
        "box2": useRef<SVGGElement | null>(null),
    }
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
                    <path d="M512.75 399.13 125.5 172.5" ref={refs.path}/>
                    <g ref={refs.box1}>
                        <path d="m63.5 111 120.12 69.59v99L63.5 210v-99z" className="p5"/>
                        <path d="M183.62 180.59v99l124.8-73.6v-99l-124.8 73.6z" className="p6"/>
                        <path d="m308.42 106.99-124.8 73.6L63.5 111l125-74 119.92 69.99z" className="p7"/>
                        <path d="m88.53 177.35 18.41-15.09-3.51-6.94-21.91 17.96 21.91 43.36 3.51-2.88-18.41-36.41zM158.59 217.94l-18.41-36.42 3.51-2.87L165.6 222l-21.91 17.96-3.51-6.94 18.41-15.08zM136.15 171.14l-19.61 55.44-4.34-5.01 19.61-55.44 4.34 5.01z" className="p1"/>
                    </g>
                    <g ref={refs.box2}>
                        <path d="m227.08 207.97 120.12 69.6v99l-120.12-69.6v-99z" className="p5"/>
                        <path d="M347.2 277.57v99l124.8-73.6v-99l-124.8 73.6z" className="p6"/>
                        <path d="m472 203.97-124.8 73.6-120.12-69.6 125-74 119.92 70z" className="p7"/>
                        <path d="m252.11 274.32 18.41-15.09-3.51-6.94-21.91 17.97 21.91 43.35 3.51-2.87-18.41-36.42zM322.17 314.91l-18.41-36.42 3.51-2.87 21.91 43.35-21.91 17.96-3.51-6.93 18.41-15.09zM299.73 268.11l-19.61 55.44-4.34-5.01 19.61-55.44 4.34 5.01z" className="p1"/>
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
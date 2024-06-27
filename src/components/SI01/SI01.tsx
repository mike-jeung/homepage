import React, { FC, forwardRef, lazy, Suspense, ReactNode, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import "./SI01.scss";

interface SI01Props {
    v?:number;
}
const SI01:FC<SI01Props> = ({v = 0}) => {
    const variation = "si01v" + v;
    const timeline = useRef<gsap.core.Timeline>(gsap.timeline());
    const VariationComponent = lazy(() => import(`./SI01v${v}`));
    // useImperativeHandle(ref, () => ({
    //     play: () => {
    //       timeline.current.play();
    //     },
    //     pause: () => {
    //       timeline.current.pause();
    //     },
    //     goto: (time) => {
    //       timeline.current.seek(time);
    //     },
    // }));


    

    return (
        <section className={`si01 ${variation}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <VariationComponent timeline={timeline.current} />
            </Suspense>
        </section>
    );
}

export default SI01;
export { SI01Props }
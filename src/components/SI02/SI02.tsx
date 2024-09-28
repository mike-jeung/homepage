import React, { FC } from "react";
import gsap from "gsap";
import "./style/SI02.scss";
import SI02v0 from "./SI02v0";
import SI02v1 from "./SI02v1";
import SI02v2 from "./SI02v2";

interface SI02Props {
    v?:number;
}
const componentMap:Record<number,FC<any>> = {
    0:SI02v0,
    1:SI02v1,
    2:SI02v2,
}
const SI02:FC<SI02Props> = ({v = 0}) => {

    const VariationComponent = componentMap[v];
    const variation = "si02v" + v;

    return (
        <section className={`si02 ${variation}`}>
            <VariationComponent />
        </section>
    );
};

export default SI02;
export { SI02Props }
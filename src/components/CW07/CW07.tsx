import React, { FC, ReactElement, ReactNode } from "react";
import "./CW07.scss";
import gsap from "gsap";

interface CW07Props {
    Tile?: ReactElement,
    Content: ReactNode
}
const CW07:FC<CW07Props> = ({Tile = <></>,Content = <></>}) => {

    return (
        <section className="cw07 cw07v0">
            <div className="cw07w0">
                <div className="cw07w1">
                    {Tile}
                </div>
                <div className="cw07w2">
                    {Content}
                </div>
            </div>
        </section>
    );
};

export default CW07;
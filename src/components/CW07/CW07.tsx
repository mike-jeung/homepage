import React, { FC, ReactElement, ReactNode } from "react";
import "./CW07.scss";
import gsap from "gsap";

interface CW07Tile {
    args?:Record<string,unknown>;
    cmp?:FC<any>;
}
interface CW07Content {
    args:Record<string,unknown>;
    cmp:FC<any>;
}
interface CW07Props {
    tile?: CW07Tile;
    content: CW07Content;
    disp?: string;
}
const CW07:FC<CW07Props> = ({tile,content,disp}) => {

    return (
        <section className="cw07 cw07v0">
            <div className={`cw07w0 ${disp && disp}`}>
                <div className="cw07w1">
                    {tile?.cmp && <tile.cmp />}
                </div>
                <div className="cw07w2">
                    <content.cmp {...content.args} />
                </div>
            </div>
        </section>
    );
};

export default CW07;
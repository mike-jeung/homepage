import React, { FC, ReactElement, ReactNode } from "react";
import "./CB03.scss";

interface CB03Props {
    v?:number;
    content?:ReactNode;
}
const CB03:FC<CB03Props> = ({v = 0, content}) => {

    return (
        <section className={`cb03 cb03v${v}`}>
            <div className="cb03w0">
                {content !== null ? content : ""}
            </div>
        </section>
    );
}
export default CB03;
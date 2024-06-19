import React, { FC, ReactNode } from "react";
import "./SI01.scss";

interface SI01Props {
    v?:number;
    children?:ReactNode;
}
const SI01:FC<SI01Props> = ({v = 0, children}) => {
    const variation = "si01v" + v;
    
    return (
        <section className={`si01 ${variation}`}>
            {children}
        </section>
    );
}

export default SI01;
export { SI01Props }
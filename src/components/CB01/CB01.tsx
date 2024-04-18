import React, { FC, ReactNode } from "react";
import "./CB01.scss";

interface CB01Props {
    v?:number;
    children?:ReactNode;
}
const CB01:FC<CB01Props> = ({v = 0, children}) => {
    const variation = "cb01v" + v;
    
    return (
        <section className={`cb01 ${variation}`}>
            {children}
        </section>
    );
}

export default CB01;
export { CB01Props }
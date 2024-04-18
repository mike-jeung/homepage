import React, { FC, ReactNode } from "react";
import "./CB02.scss";

interface CB02Props {
    v?:number;
    x?:number;
    children?: ReactNode;
}
const CB02:FC<CB02Props> = ({v = 0, x = 0, children}) => {

    return (
        <section className={`cb02 cb02v${v}`}>
            {children}
        </section>
    );
}
export default CB02;